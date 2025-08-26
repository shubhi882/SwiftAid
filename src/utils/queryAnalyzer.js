// Common phrases and their associated sections
const queryPatterns = {
  en: {
    late: {
      section: 'whenToSeekDoctor',
      keywords: ['late', 'missed', 'irregular', 'delayed', 'skipped', 'not coming', 'hasn\'t come'],
      contextPatterns: ['when', 'why', 'what if', 'how long', 'should i worry']
    },
    pain: {
      section: 'management',
      keywords: ['pain', 'hurt', 'cramp', 'ache', 'discomfort', 'sore'],
      contextPatterns: ['how to', 'what to do', 'help', 'relief', 'manage']
    },
    heavy: {
      section: 'whenToSeekDoctor',
      keywords: ['heavy', 'excessive', 'lot of bleeding', 'too much', 'severe'],
      contextPatterns: ['bleeding', 'flow', 'blood loss']
    },
    symptoms: {
      section: 'symptoms',
      keywords: ['feeling', 'experiencing', 'having', 'symptom', 'signs', 'notice'],
      contextPatterns: ['what are', 'normal', 'common', 'usual']
    },
    general: {
      section: 'all',
      keywords: ['about', 'what is', 'tell me', 'explain', 'information'],
      contextPatterns: ['mean', 'normal', 'typically']
    }
  },
  hi: {
    late: {
      section: 'whenToSeekDoctor',
      keywords: ['लेट', 'देरी', 'नहीं आया', 'मिस', 'अनियमित', 'रुका हुआ', 'नहीं हो रहा'],
      contextPatterns: ['क्यों', 'कब', 'कितने दिन', 'चिंता', 'परेशानी']
    },
    pain: {
      section: 'management',
      keywords: ['दर्द', 'पीड़ा', 'ऐंठन', 'तकलीफ', 'परेशानी'],
      contextPatterns: ['कैसे', 'क्या करें', 'उपाय', 'राहत', 'इलाज']
    },
    heavy: {
      section: 'whenToSeekDoctor',
      keywords: ['भारी', 'ज्यादा', 'अधिक रक्तस्राव', 'बहुत ज्यादा'],
      contextPatterns: ['खून', 'रक्त', 'बहना']
    },
    symptoms: {
      section: 'symptoms',
      keywords: ['लक्षण', 'महसूस', 'अनुभव', 'संकेत'],
      contextPatterns: ['क्या', 'कैसा', 'सामान्य']
    },
    general: {
      section: 'all',
      keywords: ['क्या है', 'बारे में', 'जानकारी', 'समझाएं'],
      contextPatterns: ['मतलब', 'सामान्य', 'आम']
    }
  },
  te: {
    late: {
      section: 'whenToSeekDoctor',
      keywords: ['ఆలస్యం', 'రాలేదు', 'మిస్', 'క్రమం తప్పింది', 'ఆగిపోయింది'],
      contextPatterns: ['ఎందుకు', 'ఎప్పుడు', 'ఎన్ని రోజులు', 'ఆందోళన']
    },
    pain: {
      section: 'management',
      keywords: ['నొప్పి', 'బాధ', 'నెప్పి', 'వేదన'],
      contextPatterns: ['ఎలా', 'ఏం చేయాలి', 'చికిత్స', 'ఉపశమనం']
    },
    heavy: {
      section: 'whenToSeekDoctor',
      keywords: ['ఎక్కువ', 'అధిక', 'భారీ రక్తస్రావం'],
      contextPatterns: ['రక్తం', 'ప్రవాహం']
    },
    symptoms: {
      section: 'symptoms',
      keywords: ['లక్షణాలు', 'అనుభూతి', 'గుర్తులు'],
      contextPatterns: ['ఏమిటి', 'సాధారణ', 'సామాన్య']
    },
    general: {
      section: 'all',
      keywords: ['అంటే ఏమిటి', 'గురించి', 'వివరించండి'],
      contextPatterns: ['అర్థం', 'సాధారణ']
    }
  },
  kn: {
    late: {
      section: 'whenToSeekDoctor',
      keywords: ['ತಡವಾಗಿದೆ', 'ಬಂದಿಲ್ಲ', 'ಮಿಸ್', 'ಅನಿಯಮಿತ', 'ನಿಂತುಹೋಗಿದೆ'],
      contextPatterns: ['ಯಾಕೆ', 'ಯಾವಾಗ', 'ಎಷ್ಟು ದಿನ', 'ಚಿಂತೆ']
    },
    pain: {
      section: 'management',
      keywords: ['ನೋವು', 'ನೊಂದು', 'ಸೆಳೆತ', 'ತೊಂದರೆ'],
      contextPatterns: ['ಹೇಗೆ', 'ಏನು ಮಾಡಬೇಕು', 'ಚಿಕಿತ್ಸೆ', 'ಪರಿಹಾರ']
    },
    heavy: {
      section: 'whenToSeekDoctor',
      keywords: ['ಹೆಚ್ಚು', 'ಅತಿಯಾದ', 'ಭಾರೀ ರಕ್ತಸ್ರಾವ'],
      contextPatterns: ['ರಕ್ತ', 'ಹರಿಯುವಿಕೆ']
    },
    symptoms: {
      section: 'symptoms',
      keywords: ['ಲಕ್ಷಣಗಳು', 'ಅನುಭವ', 'ಗುರುತುಗಳು'],
      contextPatterns: ['ಏನು', 'ಸಾಮಾನ್ಯ']
    },
    general: {
      section: 'all',
      keywords: ['ಅಂದರೆ ಏನು', 'ಬಗ್ಗೆ', 'ವಿವರಿಸಿ'],
      contextPatterns: ['ಅರ್ಥ', 'ಸಾಮಾನ್ಯ']
    }
  },
  ml: {
    late: {
      section: 'whenToSeekDoctor',
      keywords: ['വൈകി', 'വന്നില്ല', 'മിസ്', 'ക്രമരഹിതം', 'നിന്നുപോയി'],
      contextPatterns: ['എന്തുകൊണ്ട്', 'എപ്പോൾ', 'എത്ര ദിവസം', 'ആശങ്ക']
    },
    pain: {
      section: 'management',
      keywords: ['വേദന', 'നോവ്', 'വേദന', 'അസ്വസ്ഥത'],
      contextPatterns: ['എങ്ങനെ', 'എന്ത് ചെയ്യണം', 'ചികിത്സ', 'ആശ്വാസം']
    },
    heavy: {
      section: 'whenToSeekDoctor',
      keywords: ['കൂടുതൽ', 'അമിതം', 'കനത്ത രക്തസ്രാവം'],
      contextPatterns: ['രക്തം', 'ഒഴുക്ക്']
    },
    symptoms: {
      section: 'symptoms',
      keywords: ['ലക്ഷണങ്ങൾ', 'അനുഭവം', 'അടയാളങ്ങൾ'],
      contextPatterns: ['എന്ത്', 'സാധാരണ']
    },
    general: {
      section: 'all',
      keywords: ['എന്താണ്', 'കുറിച്ച്', 'വിവരിക്കുക'],
      contextPatterns: ['അർത്ഥം', 'സാധാരണ']
    }
  },
  gu: {
    late: {
      section: 'whenToSeekDoctor',
      keywords: ['મોડું', 'આવ્યું નથી', 'મિસ', 'અનિયમિત', 'બંધ થઈ ગયું'],
      contextPatterns: ['કેમ', 'ક્યારે', 'કેટલા દિવસ', 'ચિંતા']
    },
    pain: {
      section: 'management',
      keywords: ['દુખાવો', 'પીડા', 'દર્દ', 'તકલીફ'],
      contextPatterns: ['કેવી રીતે', 'શું કરવું', 'સારવાર', 'રાહત']
    },
    heavy: {
      section: 'whenToSeekDoctor',
      keywords: ['વધારે', 'અતિશય', 'ભારે રક્તસ્રાવ'],
      contextPatterns: ['લોહી', 'વહેવું']
    },
    symptoms: {
      section: 'symptoms',
      keywords: ['લક્ષણો', 'અનુભવ', 'નિશાનીઓ'],
      contextPatterns: ['શું', 'સામાન્ય']
    },
    general: {
      section: 'all',
      keywords: ['શું છે', 'વિશે', 'સમજાવો'],
      contextPatterns: ['અર્થ', 'સામાન્ય']
    }
  },
  mr: {
    late: {
      section: 'whenToSeekDoctor',
      keywords: ['उशीर', 'आले नाही', 'मिस', 'अनियमित', 'थांबले'],
      contextPatterns: ['का', 'कधी', 'किती दिवस', 'काळजी']
    },
    pain: {
      section: 'management',
      keywords: ['वेदना', 'दुखणे', 'कळ', 'त्रास'],
      contextPatterns: ['कसे', 'काय करावे', 'उपचार', 'आराम']
    },
    heavy: {
      section: 'whenToSeekDoctor',
      keywords: ['जास्त', 'अधिक', 'भारी रक्तस्त्राव'],
      contextPatterns: ['रक्त', 'वाहणे']
    },
    symptoms: {
      section: 'symptoms',
      keywords: ['लक्षणे', 'अनुभव', 'चिन्हे'],
      contextPatterns: ['काय', 'सामान्य']
    },
    general: {
      section: 'all',
      keywords: ['म्हणजे काय', 'बद्दल', 'समजावा'],
      contextPatterns: ['अर्थ', 'सामान्य']
    }
  },
  pa: {
    late: {
      section: 'whenToSeekDoctor',
      keywords: ['ਲੈਟ', 'ਨਹੀਂ ਆਇਆ', 'ਮਿਸ', 'ਅਨਿਯਮਿਤ', 'ਰੁਕ ਗਿਆ'],
      contextPatterns: ['ਕਿਉਂ', 'ਕਦੋਂ', 'ਕਿੰਨੇ ਦਿਨ', 'ਚਿੰਤਾ']
    },
    pain: {
      section: 'management',
      keywords: ['ਦਰਦ', 'ਪੀੜ', 'ਮਰੋੜ', 'ਤਕਲੀਫ'],
      contextPatterns: ['ਕਿਵੇਂ', 'ਕੀ ਕਰੀਏ', 'ਇਲਾਜ', 'ਆਰਾਮ']
    },
    heavy: {
      section: 'whenToSeekDoctor',
      keywords: ['ਜ਼ਿਆਦਾ', 'ਬਹੁਤ', 'ਭਾਰੀ ਖੂਨ'],
      contextPatterns: ['ਖੂਨ', 'ਵਗਣਾ']
    },
    symptoms: {
      section: 'symptoms',
      keywords: ['ਲੱਛਣ', 'ਅਨੁਭਵ', 'ਨਿਸ਼ਾਨੀਆਂ'],
      contextPatterns: ['ਕੀ', 'ਆਮ']
    },
    general: {
      section: 'all',
      keywords: ['ਕੀ ਹੈ', 'ਬਾਰੇ', 'ਸਮਝਾਓ'],
      contextPatterns: ['ਮਤਲਬ', 'ਆਮ']
    }
  }
};

// Common condition-specific terms for better matching
const conditionTerms = {
  periods: {
    en: ['period', 'menstruation', 'menstrual', 'monthly', 'cycle'],
    hi: ['पीरियड', 'माहवारी', 'एमसी', 'मासिक धर्म', 'महीना'],
    te: ['పీరియడ్స్', 'బహిష్టు', 'రుతుస్రావం', 'నెలసరి'],
    kn: ['ಮುಟ್ಟು', 'ಋತುಸ್ರಾವ', 'ತಿಂಗಳು', 'ಮಾಸಿಕ'],
    ml: ['ആർത്തവം', 'മാസമുറ', 'പീരീഡ്‌സ്', 'മാസവിലക്ക്'],
    gu: ['પીરીયડ', 'માસિક', 'ઋતુસ્રાવ', 'મહિનો'],
    mr: ['पाळी', 'मासिक पाळी', 'पिरियड', 'ऋतुस्राव'],
    pa: ['ਪੀਰੀਅਡ', 'ਮਾਹਵਾਰੀ', 'ਮਹੀਨਾਵਾਰੀ', 'ਰਿਤੂ']
  },
  fever: {
    en: ['fever', 'temperature', 'hot', 'burning', 'chills'],
    hi: ['बुखार', 'तेज बुखार', 'ज्वर', 'तापमान', 'गरम'],
    te: ['జ్వరం', 'వేడి', 'కాలుతున్నట్టుంది', 'తాపం', 'వణుకు'],
    kn: ['ಜ್ವರ', 'ತಾಪ', 'ಬಿಸಿ', 'ಶಾಖ', 'ನಡುಕ'],
    ml: ['പനി', 'ജ്വരം', 'ചൂട്', 'താപം', 'വിറയൽ'],
    gu: ['તાવ', 'બુખાર', 'ગરમી', 'તાપમાન', 'ધ્રુજારી'],
    mr: ['ताप', 'बुखार', 'ज्वर', 'गरम', 'थंडी'],
    pa: ['ਬੁਖਾਰ', 'ਤਾਪ', 'ਗਰਮੀ', 'ਜ਼ੁਕਾਮ', 'ਕੰਬਣੀ']
  },
  headache: {
    en: ['headache', 'head pain', 'migraine', 'head', 'tension'],
    hi: ['सिरदर्द', 'सर में दर्द', 'माइग्रेन', 'सिर', 'तनाव'],
    te: ['తలనొప్పి', 'తలపోటు', 'మైగ్రేన్', 'తల', 'ఒత్తిడి'],
    kn: ['ತಲೆನೋವು', 'ತಲೆ ನೋವು', 'ಮೈಗ್ರೇನ್', 'ತಲೆ', 'ಒತ್ತಡ'],
    ml: ['തലവേദന', 'തലകറക്കം', 'മൈഗ്രേൻ', 'തല', 'സമ്മർദ്ദം'],
    gu: ['માથાનો દુખાવો', 'શિરઃશૂલ', 'માઇગ્રેન', 'માથું', 'તણાવ'],
    mr: ['डोकेदुखी', 'मायग्रेन', 'डोके', 'ताण', 'शिरःशूल'],
    pa: ['ਸਿਰ ਦਰਦ', 'ਸਿਰ ਪੀੜ', 'ਮਾਈਗ੍ਰੇਨ', 'ਸਿਰ', 'ਤਣਾਅ']
  },
  stomachPain: {
    en: ['stomach pain', 'tummy ache', 'abdominal pain', 'belly pain', 'gut'],
    hi: ['पेट दर्द', 'पेट में दर्द', 'उदर शूल', 'मरोड़', 'पेट'],
    te: ['కడుపు నొప్పి', 'పొట్ట నొప్పి', 'కడుపులో నొప్పి', 'నొప్పి', 'ఉదరం'],
    kn: ['ಹೊಟ್ಟೆ ನೋವು', 'ಹೊಟ್ಟೆ ಹೋಗುವುದು', 'ಉದರ ನೋವು', 'ನೋವು', 'ಹೊಟ್ಟೆ'],
    ml: ['വയറുവേദന', 'വയറ്റുവേദന', 'ഉദരവേദന', 'വേദന', 'വയർ'],
    gu: ['પેટનો દુખાવો', 'પેટમાં દુખાવો', 'ઉદર શૂળ', 'પેટ', 'દુખાવો'],
    mr: ['पोटदुखी', 'पोटात दुखणे', 'उदरशूल', 'पोट', 'वेदना'],
    pa: ['ਪੇਟ ਦਰਦ', 'ਪੇਟ ਵਿੱਚ ਦਰਦ', 'ਮਰੋੜ', 'ਪੇਟ', 'ਦਰਦ']
  },
  cough: {
    en: ['cough', 'coughing', 'chest congestion', 'phlegm', 'sputum'],
    hi: ['खांसी', 'कफ', 'सीने में जकड़न', 'बलगम', 'कफ'],
    te: ['దగ్గు', 'ఖాంసి', 'గొంతు నొప్పి', 'కఫం', 'శ్లేష్మం'],
    kn: ['ಕೆಮ್ಮು', 'ಕಫ', 'ಎದೆ ಸಂಕುಚನ', 'ಕಫ', 'ಸೀನು'],
    ml: ['ചുമ', 'കഫം', 'നെഞ്ച് അടപ്പ്', 'കഫം', 'ശ്ലേഷ്മം'],
    gu: ['ઉધરસ', 'ખાંસી', 'છાતીમાં જકડન', 'કફ', 'બલગમ'],
    mr: ['खोकला', 'कफ', 'छातीत जडत्व', 'कफ', 'थुंकी'],
    pa: ['ਖੰਘ', 'ਖਾਂਸੀ', 'ਛਾਤੀ ਜਕੜਨ', 'ਬਲਗਮ', 'ਕਫ']
  },
  allergies: {
    en: ['allergy', 'allergic', 'rash', 'itching', 'hives'],
    hi: ['एलर्जी', 'खुजली', 'चकत्ते', 'लाल दाने', 'छपाकी'],
    te: ['అలర్జీ', 'దురద', 'దద్దుర్లు', 'పొక్కులు', 'వామ్ము'],
    kn: ['ಅಲರ್ಜಿ', 'ಕೆರೆತ', 'ಕಾಸಿ', 'ತುರಿಕೆ', 'ಚರ್ಮದ ಕೆಂಪು'],
    ml: ['അലർജി', 'ചൊറിച്ചിൽ', 'തടിപ്പ്', 'ചുണങ്ങ്', 'കുരു'],
    gu: ['એલર્જી', 'ખંજવાળ', 'ચકામા', 'રેશ', 'ખજવાળ'],
    mr: ['अॅलर्जी', 'खाज', 'पुरळ', 'चट्टे', 'खाजेचे डाग'],
    pa: ['ਐਲਰਜੀ', 'ਖਾਰਸ਼', 'ਚਕੱਤੇ', 'ਖੁਜਲੀ', 'ਦਾਣੇ']
  }
};

// Add severity and persistence patterns for all conditions
const commonPatterns = {
  severity: {
    en: ['severe', 'intense', 'bad', 'worse', 'not going away', 'continuous'],
    hi: ['बहुत', 'तेज', 'ज्यादा', 'लगातार', 'कम नहीं हो रहा', 'बढ़ रहा है'],
    te: ['తీవ్రంగా', 'ఎక్కువగా', 'తగ్గడం లేదు', 'పెరుగుతోంది', 'ఆగడం లేదు'],
    kn: ['ತೀವ್ರ', 'ಹೆಚ್ಚು', 'ಕಡಿಮೆ ಆಗುತ್ತಿಲ್ಲ', 'ನಿರಂತರ', 'ಹೆಚ್ಚಾಗುತ್ತಿದೆ'],
    ml: ['കടുത്ത', 'കൂടുതൽ', 'കുറയുന്നില്ല', 'തുടർച്ചയായ', 'വർദ്ധിക്കുന്നു'],
    gu: ['તીવ્ર', 'વધારે', 'ઘટતું નથી', 'સતત', 'વધી રહ્યું છે'],
    mr: ['तीव्र', 'जास्त', 'कमी होत नाही', 'सतत', 'वाढत आहे'],
    pa: ['ਗੰਭੀਰ', 'ਜ਼ਿਆਦਾ', 'ਘੱਟ ਨਹੀਂ ਹੋ ਰਿਹਾ', 'ਲਗਾਤਾਰ', 'ਵੱਧ ਰਿਹਾ ਹੈ']
  },
  duration: {
    en: ['days', 'weeks', 'long time', 'since', 'continuous'],
    hi: ['दिन', 'हफ्ते', 'लंबे समय से', 'कब से', 'लगातार'],
    te: ['రోజులు', 'వారాలు', 'చాలా రోజులు', 'నుండి', 'నిరంతరం'],
    kn: ['ದಿನಗಳು', 'ವಾರಗಳು', 'ಬಹಳ ದಿನಗಳಿಂದ', 'ಇಂದ', 'ನಿರಂತರ'],
    ml: ['ദിവസങ്ങൾ', 'ആഴ്ചകൾ', 'കുറെ നാളായി', 'മുതൽ', 'തുടർച്ചയായി'],
    gu: ['દિવસો', 'અઠવાડિયા', 'લાંબા સમયથી', 'થી', 'સતત'],
    mr: ['दिवस', 'आठवडे', 'बराच काळ', 'पासून', 'सतत'],
    pa: ['ਦਿਨ', 'ਹਫ਼ਤੇ', 'ਲੰਬੇ ਸਮੇਂ ਤੋਂ', 'ਤੋਂ', 'ਲਗਾਤਾਰ']
  }
};

/**
 * Analyze the query to determine the relevant section and context
 * @param {string} query - User's query
 * @param {string} language - Detected language
 * @returns {Object} Analysis result with section and context
 */
export const analyzeQuery = (query, language) => {
  const patterns = queryPatterns[language] || queryPatterns.en;
  const queryLower = query.toLowerCase();
  
  // Check for condition-specific terms
  const conditionContext = findConditionContext(queryLower, language);
  
  // Find primary context (late, pain, etc.)
  let primaryContext = findPrimaryContext(queryLower, patterns);
  
  // If no specific context found, check for question patterns
  if (!primaryContext.section) {
    primaryContext = analyzeQuestionPattern(queryLower, patterns);
  }
  
  return {
    section: primaryContext.section || 'all',
    context: primaryContext.context || 'general',
    condition: conditionContext
  };
};

/**
 * Find condition-specific context from the query
 */
function findConditionContext(query, language) {
  for (const [condition, terms] of Object.entries(conditionTerms)) {
    const conditionTerms = terms[language] || terms.en;
    if (conditionTerms.some(term => query.includes(term.toLowerCase()))) {
      return condition;
    }
  }
  return null;
}

/**
 * Find primary context from query patterns
 */
function findPrimaryContext(query, patterns) {
  for (const [context, pattern] of Object.entries(patterns)) {
    const hasKeyword = pattern.keywords.some(keyword => 
      query.includes(keyword.toLowerCase())
    );
    
    const hasContext = pattern.contextPatterns.some(contextPattern =>
      query.includes(contextPattern.toLowerCase())
    );
    
    if (hasKeyword || hasContext) {
      return {
        section: pattern.section,
        context: context
      };
    }
  }
  return {};
}

/**
 * Analyze question patterns in the query
 */
function analyzeQuestionPattern(query, patterns) {
  const questionWords = {
    what: 'general',
    how: 'management',
    when: 'whenToSeekDoctor',
    why: 'symptoms'
  };
  
  for (const [word, section] of Object.entries(questionWords)) {
    if (query.startsWith(word)) {
      return {
        section: section,
        context: 'question'
      };
    }
  }
  return {};
}

/**
 * Format the response based on the query analysis
 */
export const formatResponse = (conditionData, language, analysis) => {
  const { section, context } = analysis;
  
  // If specific section is requested, prioritize that information
  if (section !== 'all') {
    const response = {
      type: context,
      primaryInfo: conditionData[section]?.[language],
      relatedInfo: {}
    };

    // Add related information based on context
    if (section === 'whenToSeekDoctor') {
      response.relatedInfo.management = conditionData.management?.[language];
    } else if (section === 'symptoms') {
      response.relatedInfo.whenToSeekDoctor = conditionData.whenToSeekDoctor?.[language];
    } else if (section === 'management') {
      response.relatedInfo.symptoms = conditionData.symptoms?.[language];
    }

    return response;
  }
  
  // Return comprehensive information
  return {
    type: 'general',
    primaryInfo: {
      name: conditionData.name?.[language],
      commonTerms: conditionData.commonTerms?.[language],
      symptoms: conditionData.symptoms?.[language],
      management: conditionData.management?.[language],
      whenToSeekDoctor: conditionData.whenToSeekDoctor?.[language]
    }
  };
};
