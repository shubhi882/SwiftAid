// Language detection patterns for supported languages
const languagePatterns = {
  en: /^[A-Za-z\s.,!?]+$/,  // English
  hi: /[\u0900-\u097F]/,    // Hindi
  te: /[\u0C00-\u0C7F]/,    // Telugu
  kn: /[\u0C80-\u0CFF]/,    // Kannada
  ml: /[\u0D00-\u0D7F]/,    // Malayalam
  gu: /[\u0A80-\u0AFF]/,    // Gujarati
  mr: /[\u0900-\u097F]/,    // Marathi (shares Devanagari with Hindi)
  pa: /[\u0A00-\u0A7F]/     // Punjabi
};

// Default language if detection fails
const DEFAULT_LANGUAGE = 'en';

/**
 * Detect the language of input text
 * @param {string} text - Input text to detect language from
 * @returns {string} - Language code (en, hi, te, etc.)
 */
export const detectLanguage = (text) => {
  if (!text) return DEFAULT_LANGUAGE;

  // Check each language pattern
  for (const [lang, pattern] of Object.entries(languagePatterns)) {
    if (pattern.test(text)) {
      return lang;
    }
  }

  // Special case for Marathi (since it shares script with Hindi)
  // You might want to add more sophisticated detection here

  return DEFAULT_LANGUAGE;
};

/**
 * Get condition information in the detected language
 * @param {Object} condition - Condition data object
 * @param {string} language - Detected language code
 * @param {string} section - Section to retrieve (name, symptoms, etc.)
 * @returns {any} - The requested information in the specified language
 */
export const getLanguageResponse = (condition, language, section) => {
  if (!condition || !section) return null;

  // If the requested language is not available, fall back to English
  const availableLanguage = condition[section]?.[language] ? language : DEFAULT_LANGUAGE;
  
  return condition[section]?.[availableLanguage] || null;
};
