import { detectLanguage, getLanguageResponse } from '../utils/languageDetector';
import { analyzeQuery, formatResponse } from '../utils/queryAnalyzer';
import { periodsData as periods } from '../data/conditions/periods';
import { allergiesData as allergies } from '../data/conditions/allergies';
import { stomachPainData as stomachPain } from '../data/conditions/stomachPain';
import { headacheData as headache } from '../data/conditions/headache';
import { feverData as fever } from '../data/conditions/fever';
import { coughData as cough } from '../data/conditions/cough';

// Map of all conditions
const conditions = {
  periods,
  allergies,
  stomachPain,
  headache,
  fever,
  cough
};

// Get response in the same language as the query
const getConditionResponse = (condition, query, detectedLanguage) => {
  const conditionData = conditions[condition];
  if (!conditionData) return null;

  // Get the appropriate language section
  const languageData = conditionData[detectedLanguage] || conditionData.en;
  
  // Check severity patterns
  const isSevere = commonPatterns.severity[detectedLanguage].some(pattern => 
    query.toLowerCase().includes(pattern.toLowerCase())
  );

  // Check duration patterns
  const isLongDuration = commonPatterns.duration[detectedLanguage].some(pattern => 
    query.toLowerCase().includes(pattern.toLowerCase())
  );

  // If severe or long duration, prioritize "whenToSeekDoctor" section
  if (isSevere || isLongDuration) {
    return {
      response: languageData.whenToSeekDoctor,
      type: 'urgent',
      language: detectedLanguage
    };
  }

  // Return appropriate section based on query context
  return {
    response: languageData.management,
    type: 'general',
    language: detectedLanguage
  };
};

/**
 * Search for medical conditions and return information in the appropriate language
 * @param {string} searchQuery - User's search query
 * @returns {Object} Response with condition information in detected language
 */
export const searchCondition = (searchQuery) => {
  // Detect the language from the search query
  const detectedLanguage = detectLanguage(searchQuery);

  // Analyze the query for context and condition
  const queryAnalysis = analyzeQuery(searchQuery, detectedLanguage);

  // If condition is directly identified from query, prioritize it
  if (queryAnalysis.condition && conditions[queryAnalysis.condition]) {
    const conditionData = conditions[queryAnalysis.condition];
    return [{
      condition: queryAnalysis.condition,
      language: detectedLanguage,
      response: getConditionResponse(queryAnalysis.condition, searchQuery, detectedLanguage)
    }];
  }

  // Search through all conditions if no direct match
  const results = [];
  
  for (const [conditionKey, conditionData] of Object.entries(conditions)) {
    // Get condition name and common terms in detected language
    const conditionName = getLanguageResponse(conditionData, detectedLanguage, 'name');
    const commonTerms = getLanguageResponse(conditionData, detectedLanguage, 'commonTerms') || [];
    const symptoms = getLanguageResponse(conditionData, detectedLanguage, 'symptoms') || [];
    
    const searchLower = searchQuery.toLowerCase().trim();
    const nameLower = conditionName?.toLowerCase().trim();
    
    // Check various matching criteria with word boundary checks
    const matchesName = nameLower && (
      searchLower.includes(nameLower) || 
      nameLower.includes(searchLower) ||
      searchLower.split(/\s+/).some(word => nameLower.includes(word))
    );
    
    const matchesCommonTerms = commonTerms.some(term => {
      const termLower = term.toLowerCase().trim();
      return searchLower.includes(termLower) || 
             termLower.includes(searchLower) ||
             searchLower.split(/\s+/).some(word => termLower.includes(word));
    });
    
    const matchesSymptoms = symptoms.some(symptom => {
      const symptomLower = symptom.toLowerCase().trim();
      return searchLower.includes(symptomLower) ||
             symptomLower.includes(searchLower) ||
             searchLower.split(/\s+/).some(word => symptomLower.includes(word));
    });
    
    if (matchesName || matchesCommonTerms || matchesSymptoms) {
      const response = getConditionResponse(conditionKey, searchQuery, detectedLanguage);
      results.push({
        condition: conditionKey,
        language: detectedLanguage,
        response: response
      });
    }
  }

  // Sort results by relevance
  return results.sort((a, b) => b.relevance - a.relevance);
};

/**
 * Example usage:
 * // Will understand various forms of queries in different languages:
 * 
 * English queries:
 * searchCondition("my period is late")
 * searchCondition("what to do for menstrual pain")
 * searchCondition("heavy bleeding during periods")
 * 
 * Hindi queries:
 * searchCondition("मेरा पीरियड लेट है")
 * searchCondition("माहवारी में दर्द का इलाज")
 * searchCondition("बहुत ज्यादा रक्तस्राव हो रहा है")
 * 
 * Telugu queries:
 * searchCondition("నా పీరియడ్ ఆలస్యం అవుతోంది")
 * searchCondition("రుతుస్రావ నొప్పికి ఏం చేయాలి")
 * searchCondition("ఎక్కువ రక్తస్రావం అవుతోంది")
 */
