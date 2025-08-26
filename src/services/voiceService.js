// Voice narration service for multilingual medical guidance
const synth = window.speechSynthesis;

// Language-specific voice configurations
const voiceConfigs = {
  en: { rate: 1.0, pitch: 1.0 },
  hi: { rate: 0.9, pitch: 1.1 },
  te: { rate: 0.9, pitch: 1.0 },
  kn: { rate: 0.9, pitch: 1.0 },
  ml: { rate: 0.9, pitch: 1.0 },
  gu: { rate: 0.9, pitch: 1.0 },
  mr: { rate: 0.9, pitch: 1.0 },
  pa: { rate: 0.9, pitch: 1.0 }
};

// Language-specific number formatters
const numberFormatters = {
  en: (num) => `Step ${num}`,
  hi: (num) => `चरण ${num}`,
  te: (num) => `దశ ${num}`,
  kn: (num) => `ಹಂತ ${num}`,
  ml: (num) => `ഘട്ടം ${num}`,
  gu: (num) => `પગલું ${num}`,
  mr: (num) => `पायरी ${num}`,
  pa: (num) => `ਕਦਮ ${num}`
};

// Get the best available voice for a given language
const getBestVoice = (language) => {
  const voices = synth.getVoices();
  const languageCode = language === 'en' ? 'en-US' : language;
  
  // Try to find a voice matching the exact language code
  let voice = voices.find(v => v.lang.toLowerCase().startsWith(languageCode.toLowerCase()));
  
  // Fallback to English if no matching voice is found
  if (!voice) {
    console.warn(`No voice found for language ${language}, falling back to English`);
    voice = voices.find(v => v.lang.startsWith('en')) || voices[0];
  }
  
  return voice;
};

// Split text into natural chunks for better speech synthesis
const splitIntoChunks = (text) => {
  const punctuation = /[,.!?।॥]/;
  const chunks = text.split(punctuation)
    .map(chunk => chunk.trim())
    .filter(chunk => chunk.length > 0);
  
  return chunks;
};

// Speak a single chunk of text
const speakChunk = (chunk, voice, config) => {
  return new Promise((resolve, reject) => {
    try {
      const utterance = new SpeechSynthesisUtterance(chunk);
      utterance.voice = voice;
      utterance.rate = config.rate;
      utterance.pitch = config.pitch;
      
      utterance.onend = () => resolve();
      utterance.onerror = (error) => {
        console.error('Speech synthesis error:', error);
        reject(error);
      };
      
      synth.speak(utterance);
    } catch (error) {
      console.error('Speech synthesis setup error:', error);
      reject(error);
    }
  });
};

// Speak a list of steps with proper formatting and pacing
export const speakSteps = async (steps, language = 'en') => {
  try {
    const voice = getBestVoice(language);
    const config = voiceConfigs[language] || voiceConfigs.en;
    const formatNumber = numberFormatters[language] || numberFormatters.en;
    
    for (let i = 0; i < steps.length; i++) {
      const stepNumber = formatNumber(i + 1);
      const stepText = steps[i];
      const fullText = `${stepNumber}: ${stepText}`;
      
      const chunks = splitIntoChunks(fullText);
      
      for (const chunk of chunks) {
        await speakChunk(chunk, voice, config);
        // Add a small pause between chunks
        await new Promise(resolve => setTimeout(resolve, 300));
      }
      
      // Add a longer pause between steps
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  } catch (error) {
    console.error('Error in speakSteps:', error);
    throw error;
  }
};

// Speak a single piece of text with proper pacing
export const speakText = async (text, language = 'en') => {
  try {
    const voice = getBestVoice(language);
    const config = voiceConfigs[language] || voiceConfigs.en;
    
    const chunks = splitIntoChunks(text);
    
    for (const chunk of chunks) {
      await speakChunk(chunk, voice, config);
      // Add a small pause between chunks
      await new Promise(resolve => setTimeout(resolve, 300));
    }
  } catch (error) {
    console.error('Error in speakText:', error);
    throw error;
  }
};

// Stop all ongoing speech
export const stopSpeaking = () => {
  synth.cancel();
};

// Check if speech synthesis is currently active
export const isSpeaking = () => {
  return synth.speaking;
};

// Initialize speech synthesis
export const initSpeechSynthesis = () => {
  return new Promise((resolve) => {
    if (synth.getVoices().length > 0) {
      resolve();
    } else {
      synth.onvoiceschanged = () => resolve();
    }
  });
};
