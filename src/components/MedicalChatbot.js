import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  Paper,
  IconButton,
  Avatar,
  List,
  ListItem,
  Fade,
  CircularProgress,
  Button,
  Chip,
  Tooltip,
  useTheme,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PersonIcon from '@mui/icons-material/Person';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import EmergencyShareIcon from '@mui/icons-material/EmergencyShare';
import AnimatedDoctor from './AnimatedDoctor';
import { medicalConditions, unknownConditionMessage } from '../data/medicalConditions';
import { LANGUAGES } from '../constants';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const getWelcomeMessage = (language) => {
  switch(language) {
    case 'en': return "Hello! I'm your medical assistant. How can I help you today? You can click on any condition below or type your concern.";
    case 'hi': return "नमस्ते! मैं आपका मेडिकल असिस्टेंट हूं। मैं आपकी कैसे मदद कर सकता हूं? आप नीचे दी गई किसी भी स्थिति पर क्लिक कर सकते हैं या अपनी चिंता टाइप कर सकते हैं।";
    case 'te': return "హలో! నేను మీ వైద్య సహాయకుడిని. నేను మీకు ఎలా సహాయం చేయగలను? మీరు క్రింద ఉన్న ఏదైనా పరిస్థితిపై క్లిక్ చేయవచ్చు లేదా మీ ఆందోళనను టైప్ చేయవచ్చు.";
    case 'kn': return "ಹಲೋ! ನಾನು ನಿಮ್ಮ ವೈದ್ಯಕೀಯ ಸಹಾಯಕ. ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು? ನೀವು ಕೆಳಗಿನ ಯಾವುದೇ ಸ್ಥಿತಿಯನ್ನು ಕ್ಲಿಕ್ ಮಾಡಬಹುದು ಅಥವಾ ನಿಮ್ಮ ಕಾಳಜಿಯನ್ನು ಟೈಪ್ ಮಾಡಬಹುದು.";
    case 'mr': return "नमस्कार! मी तुमचा वैद्यकीय सहाय्यक आहे. मी तुम्हाला कशी मदत करू शकतो? तुम्ही खालील कोणत्याही स्थितीवर क्लिक करू शकता किंवा तुमची चिंता टाइप करू शकता.";
    case 'gu': return "નમસ્તે! હું તમારો તબીબી સહાયક છું. હું તમને કેવી રીતે મદદ કરી શકું? તમે નીચેની કોઈપણ સ્થિતિ પર ક્લિક કરી શકો છો અથવા તમારી ચિંતા ટાઈપ કરી શકો છો.";
    case 'pa': return "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਤੁਹਾਡਾ ਡਾਕਟਰੀ ਸਹਾਇਕ ਹਾਂ। ਮੈਂ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ? ਤੁਸੀਂ ਹੇਠਾਂ ਦਿੱਤੀ ਕਿਸੇ ਵੀ ਸਥਿਤੀ 'ਤੇ ਕਲਿੱਕ ਕਰ ਸਕਦੇ ਹੋ ਜਾਂ ਆਪਣੀ ਚਿੰਤਾ ਟਾਈਪ ਕਰ ਸਕਦੇ ਹੋ।";
    default: return "Hello! I'm your medical assistant. How can I help you today? You can click on any condition below or type your concern.";
  }
};

const getPlaceholder = (language) => {
  switch(language) {
    case 'en': return "Type your medical concern...";
    case 'hi': return "अपनी चिकित्सा चिंता टाइप करें...";
    case 'te': return "మీ వైద్య ఆందోళనను టైప్ చేయండి...";
    case 'kn': return "ನಿಮ್ಮ ವೈದ್ಯಕೀಯ ಆಂದೋಳನವನ್ನು ಟೈಪ್ ಮಾಡಿ...";
    case 'mr': return "तुमची वैद्यकीय चिंता टाइप करा...";
    case 'gu': return "તમારી તબીબી ચિંતા ટાઈપ કરો...";
    case 'pa': return "ਆਪਣੀ ਡਾਕਟਰੀ ਚਿੰਤਾ ਟਾਈਪ ਕਰੋ...";
    default: return "Type your medical concern...";
  }
};

const getTypingText = (language) => {
  switch(language) {
    case 'en': return "Doctor is typing...";
    case 'hi': return "डॉक्टर टाइप कर रहे हैं...";
    case 'te': return "డాక్టర్ టైప్ చేస్తున్నారు...";
    case 'kn': return "ವೈದ್ಯರು ಟೈಪ್ ಮಾಡುತ್ತಿದ್ದಾರೆ...";
    case 'mr': return "डॉक्टर टाइप करत आहेत...";
    case 'gu': return "ડૉક્ટર ટાઇપ કરી રહ્યા છે...";
    case 'pa': return "ਡਾਕਟਰ ਟਾਈਪ ਕਰ ਰਿਹਾ ਹੈ...";
    default: return "Doctor is typing...";
  }
};

const getHomeRemediesTitle = (language) => {
  switch(language) {
    case 'en': return "Home Remedies";
    case 'hi': return "घरेलू उपचार";
    case 'te': return "ఇంటి వైద్యం";
    case 'kn': return "ಮನೆಮದ್ದು";
    case 'mr': return "घरगुती उपाय";
    case 'gu': return "ઘરેલુ ઉપચાર";
    case 'pa': return "ਘਰੇਲੂ ਇਲਾਜ";
    default: return "Home Remedies";
  }
};

const getDoctorTitle = (language) => {
  switch(language) {
    case 'en': return "Medical Assistant";
    case 'hi': return "चिकित्सा सहायक";
    case 'te': return "వైద్య సహాయకుడు";
    case 'kn': return "ವೈದ್ಯಕೀಯ ಸಹಾಯಕ";
    case 'mr': return "वैद्यकीय सहाय्यक";
    case 'gu': return "તબીબી સહાયક";
    case 'pa': return "ਮੈਡੀਕਲ ਸਹਾਇਕ";
    default: return "Medical Assistant";
  }
};

const MedicalChatbot = ({ selectedLanguage }) => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { type: 'bot', content: getWelcomeMessage(selectedLanguage) }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef(null);
  const theme = useTheme();

  useEffect(() => {
    // Update welcome message when language changes
    setMessages(prevMessages => [
      { type: 'bot', content: getWelcomeMessage(selectedLanguage) },
      ...prevMessages.slice(1)
    ]);
  }, [selectedLanguage]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const formatConditionResponse = (condition) => {
    let response = `${condition.name}\n\n`;
    
    if (condition.remedies && condition.remedies.length > 0) {
      response += `${getHomeRemediesTitle(selectedLanguage)}:\n`;
      condition.remedies.forEach(remedy => {
        response += `• ${remedy}\n`;
      });
      response += "\n";
    }
    
    if (condition.whenToSeeDoctor && condition.whenToSeeDoctor.length > 0) {
      response += `${getDoctorTitle(selectedLanguage)}:\n`;
      condition.whenToSeeDoctor.forEach(point => {
        response += `• ${point}\n`;
      });
      response += "\n";
    }
    
    return response;
  };

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMessage = inputText.trim();
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      // Find matching condition based on user input
      const foundCondition = Object.values(medicalConditions).find(condition => {
        const conditionData = condition[selectedLanguage] || condition.en;
        return conditionData.name.toLowerCase().includes(userMessage.toLowerCase());
      });

      if (foundCondition) {
        const conditionData = foundCondition[selectedLanguage] || foundCondition.en;
        const response = formatConditionResponse(conditionData);
        
        setMessages(prev => [...prev, {
          type: 'bot',
          content: response
        }]);
      } else {
        setMessages(prev => [...prev, {
          type: 'bot',
          content: unknownConditionMessage[selectedLanguage] || unknownConditionMessage.en
        }]);
      }
      setIsTyping(false);
    }, 1000);
  };

  const handleConditionClick = (conditionInfo) => {
    setIsTyping(true);
    const conditionData = conditionInfo[selectedLanguage] || conditionInfo.en;

    // Add user's selection as a message
    setMessages(prev => [...prev, {
      type: 'user',
      content: conditionData.name
    }]);

    setTimeout(() => {
      const response = formatConditionResponse(conditionData);
      setMessages(prev => [...prev, {
        type: 'bot',
        content: response
      }]);
      setIsTyping(false);
    }, 500);
  };

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* Chat Header */}
      <Box sx={{ 
        p: 2, 
        borderBottom: 1, 
        borderColor: 'divider',
        bgcolor: theme.palette.primary.main,
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}>
        <MedicalServicesIcon />
        <Typography sx={{ 
          flexGrow: 1,
          fontWeight: 500
        }}>
          {getDoctorTitle(selectedLanguage)}
        </Typography>
      </Box>

      {/* Messages Container */}
      <Box sx={{ flex: 1, overflowY: 'auto', p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {messages.map((message, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 2,
              ...(message.type === 'user' && {
                flexDirection: 'row-reverse',
              })
            }}
          >
            {message.type === 'bot' && (
              <Box sx={{ 
                bgcolor: theme.palette.error.main,
                borderRadius: '50%',
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                flexShrink: 0
              }}>
                <HealthAndSafetyIcon />
              </Box>
            )}

            <Box sx={{ maxWidth: '70%' }}>
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  bgcolor: message.type === 'user' ? theme.palette.error.main : '#f8f9fa',
                  color: message.type === 'user' ? 'white' : 'text.primary',
                  borderRadius: message.type === 'user' 
                    ? '20px 4px 20px 20px'
                    : '4px 20px 20px 20px',
                  boxShadow: 'none'
                }}
              >
                <Typography
                  sx={{
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                    lineHeight: 1.5
                  }}
                >
                  {message.content}
                </Typography>
              </Paper>
            </Box>

            {message.type === 'user' && (
              <Box sx={{ 
                bgcolor: theme.palette.grey[500],
                borderRadius: '50%',
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                flexShrink: 0
              }}>
                <PersonIcon />
              </Box>
            )}
          </Box>
        ))}

        {isTyping && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ 
              bgcolor: theme.palette.error.main,
              borderRadius: '50%',
              width: 40,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white'
            }}>
              <HealthAndSafetyIcon />
            </Box>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                bgcolor: '#f8f9fa',
                borderRadius: '4px 20px 20px 20px'
              }}
            >
              <Typography color="text.secondary">
                {getTypingText(selectedLanguage)}
              </Typography>
            </Paper>
          </Box>
        )}

        <div ref={messagesEndRef} />
      </Box>

      {/* Input Box */}
      <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
        <form onSubmit={(e) => { e.preventDefault(); handleSend(); }}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder={getPlaceholder(selectedLanguage)}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  bgcolor: '#ffffff',
                  '& fieldset': {
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(0, 0, 0, 0.2)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: theme.palette.primary.main,
                  },
                },
              }}
            />
            <IconButton 
              type="submit"
              disabled={!inputText.trim()} 
              sx={{
                bgcolor: theme.palette.error.main,
                color: 'white',
                '&:hover': {
                  bgcolor: theme.palette.error.dark,
                },
                '&.Mui-disabled': {
                  bgcolor: theme.palette.action.disabledBackground,
                  color: theme.palette.action.disabled,
                }
              }}
            >
              <SendIcon />
            </IconButton>
          </Box>
        </form>

        {/* Common Medical Conditions */}
        <Box sx={{ mt: 2 }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            mb: 1
          }}>
            <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
              Common Medical Conditions:
            </Typography>
            <IconButton 
              onClick={() => setIsExpanded(!isExpanded)}
              size="small"
              sx={{ color: 'text.secondary' }}
            >
              {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Box>
          <Box sx={{ 
            display: 'flex',
            flexWrap: isExpanded ? 'wrap' : 'nowrap',
            gap: 1,
            overflowX: isExpanded ? 'visible' : 'auto',
            maxHeight: isExpanded ? '200px' : '40px',
            overflowY: isExpanded ? 'auto' : 'hidden',
            transition: 'all 0.3s ease-in-out',
            '&::-webkit-scrollbar': {
              height: '6px',
              width: '6px'
            },
            '&::-webkit-scrollbar-track': {
              background: '#f1f1f1'
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#888',
              borderRadius: '3px'
            }
          }}>
            {Object.entries(medicalConditions).map(([key, condition]) => (
              <Chip
                key={key}
                label={(condition[selectedLanguage] || condition.en).name}
                onClick={() => handleConditionClick(condition)}
                sx={{
                  bgcolor: '#f8f9fa',
                  '&:hover': {
                    bgcolor: '#e9ecef'
                  },
                  flexShrink: isExpanded ? 0 : 0,
                  m: isExpanded ? '2px' : 0
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MedicalChatbot;
