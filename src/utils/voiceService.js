import { useState, useCallback } from 'react';

const SUPPORTED_VOICE_LANGUAGES = ['en', 'hi'];
let isSpeaking = false;
let currentUtterance = null;

const languageVoiceMappings = {
  en: { code: 'en-US', fallbacks: ['en-GB', 'en'], useVoice: true },
  hi: { code: 'hi-IN', fallbacks: ['hi'], useVoice: true },
  te: { code: 'te-IN', fallbacks: ['te'], useVoice: true },
  kn: { code: 'kn-IN', fallbacks: ['kn'], useVoice: true },
  ml: { code: 'ml-IN', fallbacks: ['ml'], useVoice: true },
  gu: { code: 'gu-IN', fallbacks: ['gu'], useVoice: true },
  mr: { code: 'mr-IN', fallbacks: ['mr'], useVoice: true },
  pa: { code: 'pa-IN', fallbacks: ['pa'], useVoice: true }
};

let voices = [];
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
};

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const speakSingleUtterance = async (text, voice, lang, rate = 0.9) => {
  return new Promise((resolve, reject) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voice;
    utterance.lang = lang;
    utterance.rate = rate;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onend = () => resolve();
    utterance.onerror = (error) => {
      console.error('Utterance error:', error);
      resolve(); // Resolve anyway to continue with next utterance
    };

    window.speechSynthesis.speak(utterance);
  });
};

const getVoiceForLanguage = async (language) => {
  // Wait for voices to load if they haven't already
  if (window.speechSynthesis.getVoices().length === 0) {
    await new Promise(resolve => {
      window.speechSynthesis.onvoiceschanged = resolve;
    });
  }

  const voices = window.speechSynthesis.getVoices();
  
  if (language === 'hi') {
    return (
      voices.find(v => v.lang === 'hi-IN') ||
      voices.find(v => v.lang.startsWith('hi')) ||
      voices.find(v => v.name.toLowerCase().includes('hindi')) ||
      voices.find(v => v.lang === 'en-IN') // Fallback to Indian English
    );
  }
  
  return (
    voices.find(v => v.lang === 'en-US') ||
    voices.find(v => v.lang === 'en-GB') ||
    voices.find(v => v.lang.startsWith('en'))
  );
};

const findVoice = (language) => {
  const voices = window.speechSynthesis.getVoices();
  if (language === 'hi') {
    // Try to find Hindi voice
    return voices.find(voice => 
      voice.lang.includes('hi') || 
      voice.name.toLowerCase().includes('hindi')
    );
  }
  // For English, prefer US/UK voices
  return voices.find(voice => 
    voice.lang.startsWith('en') && 
    (voice.lang.includes('US') || voice.lang.includes('GB'))
  );
};

const cleanTextForSpeech = (text) => {
  if (!text) return '';
  return text.replace(/\s+/g, ' ').trim();
};

const startVoiceRecognition = (language, onResult, onError) => {
  if (!('webkitSpeechRecognition' in window)) {
    onError('Speech recognition is not supported in this browser');
    return null;
  }

  const recognition = new window.webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = language;

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    onResult(transcript);
  };

  recognition.onerror = (event) => {
    onError(event.error);
  };

  recognition.start();
  return recognition;
};

const languageCodes = {
  en: 'en-US',
  hi: 'hi-IN',
  te: 'te-IN',
  kn: 'kn-IN',
  ml: 'ml-IN',
  gu: 'gu-IN',
  mr: 'mr-IN',
  pa: 'pa-IN'
};

const speakText = async (text, language) => {
  if (!('speechSynthesis' in window)) {
    throw new Error('Speech synthesis not supported');
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  // Get available voices
  let voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) {
    await new Promise(resolve => {
      window.speechSynthesis.onvoiceschanged = () => {
        voices = window.speechSynthesis.getVoices();
        resolve();
      };
    });
  }

  // Find appropriate voice
  const voice = language === 'hi' ?
    voices.find(v => v.lang === 'hi-IN' || v.lang.startsWith('hi') || v.name.toLowerCase().includes('hindi')) :
    voices.find(v => v.lang.startsWith('en') && (v.lang.includes('US') || v.lang.includes('GB')));

  const speakChunk = async (chunk) => {
    return new Promise((resolve) => {
      const utterance = new SpeechSynthesisUtterance(chunk);
      utterance.voice = voice;
      utterance.lang = language === 'hi' ? 'hi-IN' : 'en-US';
      utterance.rate = language === 'hi' ? 0.75 : 0.9;
      utterance.pitch = 1;
      utterance.volume = 1;

      let hasEnded = false;

      utterance.onend = () => {
        if (!hasEnded) {
          hasEnded = true;
          setTimeout(resolve, language === 'hi' ? 800 : 500);
        }
      };

      utterance.onerror = (error) => {
        console.error('Error speaking chunk:', chunk, error);
        if (!hasEnded) {
          hasEnded = true;
          resolve();
        }
      };

      // Ensure speech synthesis is ready and speak
      window.speechSynthesis.cancel();
      setTimeout(() => window.speechSynthesis.speak(utterance), 100);
    });
  };

  const speakSteps = async (steps) => {
    // Initial announcement
    if (language === 'hi') {
      await speakChunk('प्राथमिक चिकित्सा के कदम');
      await new Promise(resolve => setTimeout(resolve, 1500));
    }

    for (let i = 0; i < steps.length; i++) {
      try {
        // Announce step number
        if (language === 'hi') {
          await speakChunk(`कदम संख्या ${i + 1}`);
          await new Promise(resolve => setTimeout(resolve, 800));
        }
        
        // Break Hindi text into smaller chunks for better pronunciation
        if (language === 'hi') {
          // Split on sentence boundaries and punctuation
          const chunks = steps[i].split(/([।,.!?])/g)
            .filter(chunk => chunk.trim())
            .map(chunk => chunk.trim());

          // Speak each chunk with appropriate pauses
          for (const chunk of chunks) {
            if (chunk.length > 30) {
              // Further split very long chunks at word boundaries
              const subChunks = chunk.split(/\s+/g)
                .reduce((acc, word) => {
                  if (!acc.length || (acc[acc.length - 1] + word).length > 30) {
                    acc.push(word);
                  } else {
                    acc[acc.length - 1] += ' ' + word;
                  }
                  return acc;
                }, []);

              for (const subChunk of subChunks) {
                await speakChunk(subChunk);
                await new Promise(resolve => setTimeout(resolve, 400));
              }
            } else {
              await speakChunk(chunk);
              await new Promise(resolve => setTimeout(resolve, 600));
            }
          }
        } else {
          await speakChunk(steps[i]);
        }

        // Longer pause between steps
        await new Promise(resolve => setTimeout(resolve, language === 'hi' ? 1500 : 1000));

        // Announce next step for Hindi
        if (i < steps.length - 1 && language === 'hi') {
          await speakChunk('अगला कदम');
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      } catch (error) {
        console.error(`Error speaking step ${i + 1}:`, error);
      }
    }

    // Final announcement
    if (language === 'hi') {
      await new Promise(resolve => setTimeout(resolve, 1000));
      await speakChunk('सभी कदम पूरे हो गए हैं');
    }
  };

  try {
    if (Array.isArray(text)) {
      await speakSteps(text);
    } else {
      await speakChunk(text);
    }
  } catch (error) {
    console.error('Error in speakText:', error);
    throw error;
  }
};

const useVoiceService = () => {
  const [speaking, setSpeaking] = useState(false);

  const speak = useCallback(async (text, language = 'en') => {
    try {
      setSpeaking(true);
      await speakText(text, language);
    } catch (error) {
      console.error('Voice service error:', error);
    } finally {
      setSpeaking(false);
    }
  }, []);

  const isVoiceSupported = useCallback((language) => {
    return SUPPORTED_VOICE_LANGUAGES.includes(language);
  }, []);

  return {
    speak,
    speaking,
    isVoiceSupported,
    stopSpeech: useCallback(() => {
      window.speechSynthesis.cancel();
      setSpeaking(false);
    }, []),
    startVoiceRecognition,
    languageCodes
  };
};

export { startVoiceRecognition, speakText, languageCodes };
export default useVoiceService;
