import React, { useState, useEffect } from 'react';
import { speakText, stopSpeech } from '../utils/voiceService';
import { Button, CircularProgress } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import StopIcon from '@mui/icons-material/Stop';

const VoicePlayer = ({ text, language, isFirstAid = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [voiceAvailable, setVoiceAvailable] = useState(false);

  useEffect(() => {
    // Check if voice is available for the language
    const checkVoice = async () => {
      try {
        const synth = window.speechSynthesis;
        const voices = await new Promise((resolve) => {
          const voices = synth.getVoices();
          if (voices.length > 0) {
            resolve(voices);
          } else {
            synth.onvoiceschanged = () => {
              resolve(synth.getVoices());
            };
          }
        });

        // Check if we have a voice for this language
        const hasVoice = voices.some(voice => 
          voice.lang.includes(language) || 
          (language === 'hi' && voice.name.toLowerCase().includes('hindi'))
        );
        setVoiceAvailable(hasVoice || ['en', 'hi'].includes(language));
      } catch (error) {
        console.error('Error checking voice availability:', error);
        setVoiceAvailable(false);
      }
    };

    checkVoice();
  }, [language]);

  const handlePlay = async () => {
    try {
      setIsPlaying(true);
      
      if (isFirstAid && Array.isArray(text)) {
        // Pass the array of steps directly to speakText
        await speakText(text, language);
      } else {
        await speakText(text, language);
      }
    } catch (error) {
      console.error('Error playing voice:', error);
    } finally {
      setIsPlaying(false);
    }
  };

  const handleStop = () => {
    stopSpeech();
    setIsPlaying(false);
  };

  if (!voiceAvailable && !['en', 'hi'].includes(language)) {
    return null;
  }

  return (
    <Button
      variant="contained"
      color={isPlaying ? "secondary" : "primary"}
      onClick={isPlaying ? handleStop : handlePlay}
      startIcon={isPlaying ? <StopIcon /> : <VolumeUpIcon />}
      disabled={!voiceAvailable}
      sx={{ mt: 2, mb: 2 }}
    >
      {isPlaying ? (
        <>
          <CircularProgress size={20} color="inherit" sx={{ mr: 1 }} />
          Stop
        </>
      ) : (
        'Play Voice Guide'
      )}
    </Button>
  );
};

export default VoicePlayer;
