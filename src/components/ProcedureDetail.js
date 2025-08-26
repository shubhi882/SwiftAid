import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Alert,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Tooltip
} from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import StopIcon from '@mui/icons-material/Stop';
import WarningIcon from '@mui/icons-material/Warning';
import { styled } from '@mui/material/styles';
import useVoiceService from '../utils/voiceService';

const StyledCard = styled(Card)(({ theme }) => ({
  margin: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(2),
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
}));

const WarningBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.warning.light,
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  marginBottom: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

// Language configurations
const languages = {
  en: { name: 'English' },
  hi: { name: 'हिंदी' },
  kn: { name: 'ಕನ್ನಡ' },
  ml: { name: 'മലയാളം' },
  gu: { name: 'ગુજરાતી' },
  mr: { name: 'मराठी' },
  pa: { name: 'ਪੰਜਾਬੀ' }
};

const ProcedureDetail = ({ procedure, language }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(language || 'en');
  const [speaking, setSpeaking] = useState(false);
  const { speak, stopSpeech, isVoiceSupported } = useVoiceService();

  const handleLanguageChange = (event) => {
    const newLang = event.target.value;
    setSelectedLanguage(newLang);
    if (speaking) {
      stopSpeech();
      setSpeaking(false);
    }
  };

  const handleSpeak = async () => {
    try {
      if (!isVoiceSupported(selectedLanguage)) {
        console.warn('Voice not supported for language:', selectedLanguage);
        return;
      }

      if (speaking) {
        stopSpeech();
        setSpeaking(false);
        return;
      }

      const textToSpeak = getTextToSpeak();
      setSpeaking(true);
      await speak(textToSpeak, selectedLanguage);
      setSpeaking(false);
    } catch (error) {
      console.error('Error speaking:', error);
      setSpeaking(false);
    }
  };

  const getTextToSpeak = () => {
    const isHindi = selectedLanguage === 'hi';
    let fullText = '';

    // Add title
    fullText += `${procedure[selectedLanguage].title}. `;

    // Add steps
    procedure[selectedLanguage].steps.forEach((step, index) => {
      const stepNum = isHindi ? 
        `चरण ${(index + 1).toString().replace(/[0-9]/g, d => '०१२३४५६७८९'[d])}` :
        `Step ${index + 1}`;

      if (typeof step === 'string') {
        fullText += `${stepNum}. ${step}. `;
      } else {
        fullText += `${stepNum}. ${step.title}. `;
        if (step.instruction) {
          fullText += `${step.instruction}. `;
        }
        if (step.note) {
          fullText += isHindi ? `टिप्पणी: ${step.note}. ` : `Note: ${step.note}. `;
        }
      }
    });

    // Add warnings if present
    if (procedure[selectedLanguage].warnings?.length > 0) {
      fullText += (isHindi ? 'महत्वपूर्ण चेतावनी: ' : 'Important Warnings: ');
      procedure[selectedLanguage].warnings.forEach(warning => {
        fullText += `${warning}. `;
      });
    } else if (procedure[selectedLanguage].warning) {
      fullText += (isHindi ? 'महत्वपूर्ण चेतावनी: ' : 'Important Warning: ');
      fullText += `${procedure[selectedLanguage].warning}. `;
    }

    return fullText;
  };

  if (!procedure || !procedure[selectedLanguage]) {
    return (
      <Alert severity="error">
        Procedure not found or not available in selected language
      </Alert>
    );
  }

  const currentProcedure = procedure[selectedLanguage];

  return (
    <Box>
      <FormControl sx={{ m: 2, minWidth: 200 }}>
        <InputLabel>Language</InputLabel>
        <Select value={selectedLanguage} onChange={handleLanguageChange} label="Language">
          {Object.entries(languages).map(([code, { name }]) => (
            <MenuItem key={code} value={code}>{name}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <StyledCard>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="h5" component="h2">
              {currentProcedure.title}
            </Typography>
            <Tooltip title={speaking ? "Stop" : "Play voice guide"}>
              <IconButton onClick={handleSpeak} color="primary">
                {speaking ? <StopIcon /> : <VolumeUpIcon />}
              </IconButton>
            </Tooltip>
          </Box>

          {currentProcedure.warning && (
            <WarningBox>
              <WarningIcon color="warning" />
              <Typography>{currentProcedure.warning}</Typography>
            </WarningBox>
          )}

          <List>
            {currentProcedure.steps.map((step, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={`Step ${index + 1}. ${step.title}`}
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="text.primary">
                        {step.instruction}
                      </Typography>
                      {step.note && (
                        <Typography component="p" variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                          Note: {step.note}
                        </Typography>
                      )}
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </StyledCard>
    </Box>
  );
};

export default ProcedureDetail;
