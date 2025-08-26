import { medicalTranslations, emergencyPhrases, medicalInstructions } from '../translations/medicalTranslations';

// Language codes mapping
export const languageCodes = {
  en: 'eng_Latn',
  hi: 'hin_Deva',
  te: 'tel_Telu',
  kn: 'kan_Knda',
  ml: 'mal_Mlym',
  gu: 'guj_Gujr',
  mr: 'mar_Deva',
  pa: 'pan_Guru'
};

// Language detection patterns for different languages
const languagePatterns = {
  hi: /[\u0900-\u097F]/,  // Hindi
  te: /[\u0C00-\u0C7F]/,  // Telugu
  kn: /[\u0C80-\u0CFF]/,  // Kannada
  ml: /[\u0D00-\u0D7F]/,  // Malayalam
  gu: /[\u0A80-\u0AFF]/,  // Gujarati
  mr: /[\u0900-\u097F]/,  // Marathi (shares Devanagari with Hindi)
  pa: /[\u0A00-\u0A7F]/,  // Punjabi
};

// Multilingual keyword mappings for common medical terms
export const multilingualKeywords = {
  'period': {
    en: ['period', 'periods', 'menstruation', 'menstrual', 'monthly cycle'],
    hi: ['माहवारी', 'पीरियड', 'मासिक धर्म', 'एमसी'],
    te: ['పీరియడ్స్', 'బహిష్టు', 'రుతుస్రావం', 'నెలసరి'],
    kn: ['ಮುಟ್ಟು', 'ಋತುಸ್ರಾವ', 'ತಿಂಗಳ ಮುಟ್ಟು'],
    ml: ['ആർത്തവം', 'മാസമുറ', 'പീരീഡ്'],
    gu: ['માસિક', 'પીરીયડ', 'માસિક ધર્મ'],
    mr: ['पाळी', 'मासिक पाळी', 'पिरियड'],
    pa: ['ਮਾਹਵਾਰੀ', 'ਪੀਰੀਅਡ', 'ਮਹੀਨੇਵਾਰੀ']
  },
  'headache': {
    en: ['headache', 'head pain', 'migraine'],
    hi: ['सिरदर्द', 'सर दर्द', 'माइग्रेन'],
    te: ['తలనొప్పి', 'శిరోవేదన'],
    kn: ['ತಲೆನೋವು', 'ಶಿರೋವೇದನೆ'],
    ml: ['തലവേദന', 'ശിരോവേദന'],
    gu: ['માથાનો દુખાવો', 'શિરઃશૂળ'],
    mr: ['डोकेदुखी', 'मायग्रेन'],
    pa: ['ਸਿਰ ਦਰਦ', 'ਸਿਰ ਪੀੜ']
  },
  // Add more terms as needed
};

// Detect language from input text with improved accuracy
export const detectLanguage = (text) => {
  try {
    if (!text || typeof text !== 'string') {
      return 'en';
    }

    // Clean the input text
    const cleanText = text.trim().toLowerCase();
    
    // First check for script patterns as they are most reliable
    for (const [lang, pattern] of Object.entries(languagePatterns)) {
      if (pattern.test(cleanText)) {
        // Special handling for Devanagari script (Hindi/Marathi)
        if (lang === 'hi') {
          // Check for Marathi-specific keywords
          const marathiKeywords = ['आहे', 'नाही', 'पण', 'पाहिजे'];
          if (marathiKeywords.some(word => cleanText.includes(word))) {
            return 'mr';
          }
        }
        return lang;
      }
    }

    // Then check for exact matches in multilingual keywords
    for (const [term, translations] of Object.entries(multilingualKeywords)) {
      for (const [lang, keywords] of Object.entries(translations)) {
        if (keywords.some(keyword => cleanText.includes(keyword.toLowerCase()))) {
          return lang;
        }
      }
    }

    // If no matches found, check for language-specific patterns
    const wordCount = cleanText.split(/\s+/).length;
    if (wordCount > 3) {
      // Check word patterns and character frequencies
      const hasLatinChars = /[a-zA-Z]/.test(cleanText);
      const hasDevanagari = /[\u0900-\u097F]/.test(cleanText);
      const hasTelugu = /[\u0C00-\u0C7F]/.test(cleanText);
      const hasKannada = /[\u0C80-\u0CFF]/.test(cleanText);
      const hasMalayalam = /[\u0D00-\u0D7F]/.test(cleanText);
      const hasGujarati = /[\u0A80-\u0AFF]/.test(cleanText);
      const hasPunjabi = /[\u0A00-\u0A7F]/.test(cleanText);
      
      // Return the script with highest character frequency
      const scripts = [
        { lang: 'en', has: hasLatinChars },
        { lang: 'hi', has: hasDevanagari },
        { lang: 'te', has: hasTelugu },
        { lang: 'kn', has: hasKannada },
        { lang: 'ml', has: hasMalayalam },
        { lang: 'gu', has: hasGujarati },
        { lang: 'pa', has: hasPunjabi }
      ];
      
      const dominantScript = scripts.find(s => s.has);
      if (dominantScript) {
        return dominantScript.lang;
      }
    }

    return 'en';
  } catch (error) {
    console.error('Error detecting language:', error);
    return 'en';
  }
};

// Get keywords in all supported languages
export const getMultilingualKeywords = (text, detectedLanguage) => {
  const keywords = [];
  const lowerText = text.toLowerCase();

  // Check each term in the detected language and get corresponding terms in other languages
  for (const [term, translations] of Object.entries(multilingualKeywords)) {
    const langKeywords = translations[detectedLanguage] || [];
    if (langKeywords.some(keyword => lowerText.includes(keyword.toLowerCase()))) {
      // Add keywords from all languages for this term
      Object.values(translations).forEach(langTerms => {
        keywords.push(...langTerms);
      });
    }
  }

  return keywords;
};

const getManualTranslation = (text, targetLang) => {
  // Check in all manual translation collections
  if (medicalTranslations[targetLang]?.[text]) {
    return medicalTranslations[targetLang][text];
  }
  if (emergencyPhrases[targetLang]?.[text]) {
    return emergencyPhrases[targetLang][text];
  }
  if (medicalInstructions[targetLang]?.[text]) {
    return medicalInstructions[targetLang][text];
  }
  return null;
};

// Enhanced translation function that maintains the input language
export const translateWithContext = async (text, targetLang, medicalContext) => {
  try {
    const detectedLang = detectLanguage(text);
    
    // If text is already in target language, return as is
    if (detectedLang === targetLang) {
      return text;
    }

    // First, try to get translation from our comprehensive medical translations
    if (medicalContext) {
      const translation = getManualTranslation(medicalContext, targetLang);
      if (translation) {
        return translation;
      }
    }

    // Fallback to API translation if needed
    return await translateText(text, detectedLang, targetLang);
  } catch (error) {
    console.error('Translation error:', error);
    return text; // Return original text if translation fails
  }
};

export const translateText = async (text, sourceLang, targetLang) => {
  if (!text || sourceLang === targetLang) return text;
  
  // First try manual translation
  const manualTranslation = getManualTranslation(text, targetLang);
  if (manualTranslation) {
    return manualTranslation;
  }
  
  // If no manual translation, try API
  try {
    const response = await fetch(
      `https://api-inference.huggingface.co/models/facebook/nllb-200-distilled-600M`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_HUGGINGFACE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: text,
          source_lang: languageCodes[sourceLang],
          target_lang: languageCodes[targetLang],
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Translation API error: ${response.statusText}`);
    }

    const result = await response.json();
    return result[0].translation_text || text;
  } catch (error) {
    console.error('Translation error:', error);
    return text; // Return original text if translation fails
  }
};

export const translateBatch = async (texts, sourceLang, targetLang) => {
  if (!texts || !texts.length || sourceLang === targetLang) return texts;
  
  // Try manual translations first
  const results = texts.map(text => {
    const manualTranslation = getManualTranslation(text, targetLang);
    return manualTranslation || text;
  });
  
  // Find texts that need API translation
  const needsTranslation = results.map((result, index) => result === texts[index]);
  if (!needsTranslation.includes(true)) {
    return results; // All texts were manually translated
  }
  
  // Translate remaining texts via API
  try {
    const textsToTranslate = texts.filter((_, index) => needsTranslation[index]);
    const response = await fetch(
      `https://api-inference.huggingface.co/models/facebook/nllb-200-distilled-600M`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_HUGGINGFACE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: textsToTranslate.join('\n'),
          source_lang: languageCodes[sourceLang],
          target_lang: languageCodes[targetLang],
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Translation API error: ${response.statusText}`);
    }

    const apiTranslations = (await response.json())[0].translation_text.split('\n');
    
    // Merge API translations back into results
    let apiIndex = 0;
    for (let i = 0; i < results.length; i++) {
      if (needsTranslation[i]) {
        results[i] = apiTranslations[apiIndex++] || texts[i];
      }
    }
  } catch (error) {
    console.error('Batch translation error:', error);
    // Keep manual translations but revert failed API translations to original text
    for (let i = 0; i < results.length; i++) {
      if (needsTranslation[i]) {
        results[i] = texts[i];
      }
    }
  }
  
  return results;
};

export const translateToEnglish = async (text, sourceLang) => {
  if (!text || sourceLang === 'en') return text;
  return translateText(text, sourceLang, 'en');
};

export const supportedLanguages = {
  en: "English",
  hi: "Hindi",
  te: "Telugu",
  kn: "Kannada",
  ml: "Malayalam",
  gu: "Gujarati",
  mr: "Marathi",
  pa: "Punjabi"
};

export const uiLabelsByLanguage = {
  en: {
    symptoms: 'Symptoms',
    immediateActions: 'Immediate Actions',
    // ...other labels...
  },
  hi: {
    symptoms: 'लक्षण',
    immediateActions: 'तत्काल कार्रवाई',
    // ...other labels...
  },
  // ...other languages...
};
