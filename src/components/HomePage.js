import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  useTheme,
  Paper,
  Button,
  Tooltip,
  Select,
  FormControl,
  MenuItem,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmergencyShareIcon from '@mui/icons-material/EmergencyShare';
import PhoneIcon from '@mui/icons-material/Phone';
import MedicalChatbot from './MedicalChatbot';
import AnimatedDoctor from './AnimatedDoctor';
import { LANGUAGES } from '../constants';

const translations = {
  en: {
    title: 'InstaAid',
    subtitle: 'Your Intelligent First Aid Assistant',
    description: 'Get instant medical guidance in your preferred language.',
    disclaimer: 'Note: This is an AI assistant and not a substitute for professional medical help. In case of emergency, please call 102.',
    swipeToCall: 'Click to call Emergency Service (102)'
  },
  hi: {
    title: 'इंस्टाएड',
    subtitle: 'आपका बुद्धिमान प्राथमिक चिकित्सा सहायक',
    description: 'अपनी पसंदीदा भाषा में तत्काल चिकित्सा मार्गदर्शन प्राप्त करें।',
    disclaimer: 'नोट: यह एक एआई सहायक है और पेशेवर चिकित्सा सहायता का विकल्प नहीं है। आपातकाल में कृपया 102 पर कॉल करें।',
    swipeToCall: 'आपातकालीन सेवा को कॉल करने के लिए क्लिक करें (102)'
  },
  te: {
    title: 'ఇన్స్టాఎయిడ్',
    subtitle: 'మీ తెలివైన ప్రథమ చికిత్స సహాయకుడు',
    description: 'మీకు ఇష్టమైన భాషలో వెంటనే వైద్య మార్గదర్శకత్వం పొందండి.',
    disclaimer: 'గమనిక: ఇది ఒక AI సహాయకుడు మరియు వృత్తిపరమైన వైద్య సహాయానికి ప్రత్యామ్నాయం కాదు. అత్యవసర పరిస్థితిలో, దయచేసి 102కి కాల్ చేయండి.',
    swipeToCall: 'అత్యవసర సేవకు కాల్ చేయడానికి క్లిక్ చేయండి (102)'
  },
  kn: {
    title: 'ಇನ್ಸ್ಟಾಎಯ್ಡ್',
    subtitle: 'ನಿಮ್ಮ ಬುದ್ಧಿವಂತ ಪ್ರಥಮ ಚಿಕಿತ್ಸೆ ಸಹಾಯಕ',
    description: 'ನಿಮ್ಮ ಆದ್ಯತೆಯ ಭಾಷೆಯಲ್ಲಿ ತಕ್ಷಣದ ವೈದ್ಯಕೀಯ ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಿರಿ.',
    disclaimer: 'ಗಮನಿಸಿ: ಇದು AI ಸಹಾಯಕವಾಗಿದ್ದು ವೃತ್ತಿಪರ ವೈದ್ಯಕೀಯ ಸಹಾಯಕ್ಕೆ ಪರ್ಯಾಯವಲ್ಲ. ತುರ್ತು ಪರಿಸ್ಥಿತಿಯಲ್ಲಿ, ದಯವಿಟ್ಟು 102 ಗೆ ಕರೆ ಮಾಡಿ.',
    swipeToCall: 'ತುರ್ತು ಸೇವೆಗೆ ಕರೆ ಮಾಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ (102)'
  },
  mr: {
    title: 'इन्स्टाएड',
    subtitle: 'तुमचा बुद्धिमान प्रथमोपचार सहाय्यक',
    description: 'तुमच्या पसंतीच्या भाषेत त्वरित वैद्यकीय मार्गदर्शन मिळवा.',
    disclaimer: 'टीप: हा एक AI सहाय्यक आहे आणि व्यावसायिक वैद्यकीय मदतीचा पर्याय नाही. आपत्कालीन परिस्थितीत कृपया 102 वर कॉल करा.',
    swipeToCall: 'आपत्कालीन सेवेला कॉल करण्यासाठी क्लिक करा (102)'
  },
  gu: {
    title: 'ઇન્સ્ટાએડ',
    subtitle: 'તમારો બુદ્ધિશાળી પ્રાથમિક સારવાર સહાયક',
    description: 'તમારી પસંદગીની ભાષામાં તાત્કાલિક તબીબી માર્ગદર્શન મેળવો.',
    disclaimer: 'નોંધ: આ એક AI સહાયક છે અને વ્યાવસાયિક તબીબી સહાયનો વિકલ્પ નથી. કટોકટીના કિસ્સામાં, કૃપા કરીને 102 પર કૉલ કરો.',
    swipeToCall: 'ઇમરજન્સી સેવા પર કૉલ કરવા માટે ક્લિક કરો (102)'
  },
  pa: {
    title: 'ਇੰਸਟਾਏਡ',
    subtitle: 'ਤੁਹਾਡਾ ਬੁੱਧੀਮਾਨ ਫਸਟ ਏਡ ਸਹਾਇਕ',
    description: 'ਆਪਣੀ ਪਸੰਦੀਦਾ ਭਾਸ਼ਾ ਵਿੱਚ ਤੁਰੰਤ ਡਾਕਟਰੀ ਮਾਰਗਦਰਸ਼ਨ ਪ੍ਰਾਪਤ ਕਰੋ।',
    disclaimer: 'ਨੋਟ: ਇਹ ਇੱਕ AI ਸਹਾਇਕ ਹੈ ਅਤੇ ਪੇਸ਼ੇਵਰ ਡਾਕਟਰੀ ਸਹਾਇਤਾ ਦਾ ਬਦਲ ਨਹੀਂ ਹੈ। ਐਮਰਜੈਂਸੀ ਦੀ ਸਥਿਤੀ ਵਿੱਚ, ਕਿਰਪਾ ਕਰਕੇ 102 ਤੇ ਕਾਲ ਕਰੋ।',
    swipeToCall: 'ਐਮਰਜੈਂਸੀ ਸੇਵਾ ਨੂੰ ਕਾਲ ਕਰਨ ਲਈ ਕਲਿੱਕ ਕਰੋ (102)'
  }
};

const HomePage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [startX, setStartX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && LANGUAGES.some(lang => lang.code === savedLanguage)) {
      setSelectedLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageSelect = (langCode) => {
    setSelectedLanguage(langCode);
    localStorage.setItem('preferredLanguage', langCode);
  };

  // Click handler for desktop/laptop
  const handleClick = () => {
    window.location.href = 'tel:102';
  };

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    e.preventDefault();
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!startX) return;
    
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    
    if (diff > 50) {
      setStartX(null);
      window.location.href = 'tel:102';
    }
  };

  const handleTouchEnd = () => {
    setStartX(null);
  };

  const handleEmergencyCall = () => {
    window.location.href = 'tel:102';
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      background: '#ffffff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Header */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '300px',
        background: 'transparent',
        clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
        zIndex: 1
      }} />

      <Container maxWidth="md" sx={{ py: 4 }}>
        {/* Logo and Language Selection */}
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            mb: 4,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: '16px 24px',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            position: 'relative',
            zIndex: 1200
          }}
        >
          <Typography variant="h2" component="h1" sx={{ color: theme.palette.primary.main }}>
            {translations[selectedLanguage].title}
          </Typography>
          <FormControl size="small">
            <Select
              value={selectedLanguage}
              onChange={(e) => handleLanguageSelect(e.target.value)}
              variant="outlined"
              MenuProps={{
                PaperProps: {
                  sx: {
                    maxHeight: 300,
                    zIndex: 1300,
                    mt: 1
                  }
                }
              }}
              sx={{
                minWidth: 120,
                bgcolor: 'white',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(0, 0, 0, 0.1)'
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(0, 0, 0, 0.2)'
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: theme.palette.primary.main
                }
              }}
            >
              {LANGUAGES.map((lang) => (
                <MenuItem 
                  key={lang.code} 
                  value={lang.code}
                  sx={{
                    py: 1,
                    px: 2,
                    minHeight: 'auto',
                    '&:hover': {
                      bgcolor: 'rgba(0, 0, 0, 0.04)'
                    },
                    '&.Mui-selected': {
                      bgcolor: 'rgba(0, 0, 0, 0.08)',
                      '&:hover': {
                        bgcolor: 'rgba(0, 0, 0, 0.12)'
                      }
                    }
                  }}
                >
                  {lang.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        {/* App Title and Description */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            {translations[selectedLanguage].subtitle}
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            {translations[selectedLanguage].description}
          </Typography>

          {/* Navigation Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
            <Button
              variant="contained"
              startIcon={<LocalHospitalIcon />}
              onClick={() => navigate('/first-aid')}
              sx={{ minWidth: 200 }}
            >
              First Aid
            </Button>
            <Button
              variant="contained"
              startIcon={<EmergencyShareIcon />}
              onClick={() => navigate('/emergency')}
              sx={{ minWidth: 200 }}
              color="error"
            >
              Emergency
            </Button>
          </Box>
        </Box>

        {/* Main Chat Interface */}
        <Paper 
          elevation={3}
          sx={{ 
            borderRadius: 3,
            overflow: 'hidden',
            height: { xs: 'calc(100vh - 360px)', md: 'calc(100vh - 400px)' },
            minHeight: { xs: '400px', md: '500px' },
            bgcolor: '#ffffff',
            mb: 2,
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            boxShadow: `
              0 0 0 1px rgba(0, 0, 0, 0.05),
              0 2px 4px rgba(0, 0, 0, 0.05),
              0 12px 24px rgba(0, 0, 0, 0.05)
            `,
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              borderRadius: 'inherit',
              padding: '1px',
              background: 'linear-gradient(135deg, #00f2fe, #4facfe)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              pointerEvents: 'none'
            }
          }}
        >
          <MedicalChatbot selectedLanguage={selectedLanguage} />
        </Paper>

        {/* Animated Doctor */}
        <AnimatedDoctor isTyping={false} />

        {/* Emergency Call Button */}
        <Box
          ref={buttonRef}
          onClick={handleClick}  
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            width: 56,
            height: 56,
            bgcolor: theme.palette.error.main,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            boxShadow: 3,
            zIndex: 1000,
            cursor: 'pointer',  
            touchAction: 'none',
            userSelect: 'none',
            transition: 'all 0.2s',
            '&:hover': {
              bgcolor: theme.palette.error.dark,
              transform: 'scale(1.05)'
            },
            '&:active': {
              transform: 'scale(0.95)'
            }
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <PhoneIcon />
        </Box>

        {/* Disclaimer */}
        <Typography 
          variant="body2" 
          color="text.secondary" 
          align="center"
          sx={{
            mt: 2,
            p: 2,
            borderRadius: 2,
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(5px)',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
          }}
        >
          {translations[selectedLanguage].disclaimer}
        </Typography>
      </Container>
    </Box>
  );
};

export default HomePage;