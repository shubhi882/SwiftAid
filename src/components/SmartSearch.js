import React, { useState, useEffect, useRef } from 'react';
import { 
  Box, 
  TextField, 
  IconButton, 
  Paper, 
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Tooltip
} from '@mui/material';
import {
  Search as SearchIcon,
  Clear as ClearIcon,
  VolumeUp as VolumeUpIcon
} from '@mui/icons-material';
import { searchMedicalConditions as performSearch } from '../utils/medicalSearch';
import { speakText } from '../services/voiceService';
import { debounce } from 'lodash';
import { detectLanguage } from '../utils/translationService';  

const placeholdersByLanguage = {
  en: "Describe your symptoms or medical condition...",
  hi: "अपने लक्षणों या चिकित्सा स्थिति का वर्णन करें...",
  te: "మీ లక్షణాలు లేదా వైద్య పరిస్థితిని వివరించండి...",
  kn: "ನಿಮ್ಮ ರೋಗಲಕ್ಷಣಗಳು ಅಥವಾ ವೈದ್ಯಕೀಯ ಸ್ಥಿತಿಯನ್ನು ವಿವರಿಸಿ...",
  ml: "നിങ്ങളുടെ രോഗലക്ഷണങ്ങൾ അല്ലെങ്കിൽ മെഡിക്കൽ അവസ്ഥ വിവരിക്കുക...",
  gu: "તમારા લક્ષણો અથવા તબીબી સ્થિતિનું વર્ણન કરો...",
  mr: "तुमची लक्षणे किंवा वैद्यकीय स्थिती वर्णन करा...",
  pa: "ਆਪਣੇ ਲੱਛਣ ਜਾਂ ਮੈਡੀਕਲ ਸਥਿਤੀ ਦਾ ਵਰਣਨ ਕਰੋ..."
};

const uiLabelsByLanguage = {
  en: {
    symptoms: "Symptoms",
    management: "Management",
    immediateActions: "Immediate Actions",
    whenToSeekDoctor: "When to Seek Doctor"
  },
  hi: {
    symptoms: "लक्षण",
    management: "प्रबंधन",
    immediateActions: "तत्काल कार्रवाई",
    whenToSeekDoctor: "डॉक्टर से कब मिलें"
  },
  te: {
    symptoms: "లక్షణాలు",
    management: "నిర్వహణ",
    immediateActions: "తక్షణ చర్యలు",
    whenToSeekDoctor: "వైద్యుడిని ఎప్పుడు సంప్రదించాలి"
  },
  kn: {
    symptoms: "ರೋಗಲಕ್ಷಣಗಳು",
    management: "ನಿರ್ವಹಣೆ",
    immediateActions: "ತಕ್ಷಣದ ಕ್ರಮಗಳು",
    whenToSeekDoctor: "ವೈದ್ಯರನ್ನು ಯಾವಾಗ ಭೇಟಿ ಮಾಡಬೇಕು"
  },
  ml: {
    symptoms: "രോഗലക്ഷണങ്ങൾ",
    management: "മാനേജ്മെന്റ്",
    immediateActions: "അടിയന്തിര നടപടികൾ",
    whenToSeekDoctor: "ഡോക്ടറെ എപ്പോൾ സമീപിക്കണം"
  },
  gu: {
    symptoms: "લક્ષણો",
    management: "વ્યવસ્થાપન",
    immediateActions: "તાત્કાલિક પગલાં",
    whenToSeekDoctor: "ડૉક્ટરને ક્યારે મળવું"
  },
  mr: {
    symptoms: "लक्षणे",
    management: "व्यवस्थापन",
    immediateActions: "तात्काळ कृती",
    whenToSeekDoctor: "डॉक्टरांना केव्हा भेटावे"
  },
  pa: {
    symptoms: "ਲੱਛਣ",
    management: "ਪ੍ਰਬੰਧਨ",
    immediateActions: "ਤੁਰੰਤ ਕਾਰਵਾਈ",
    whenToSeekDoctor: "ਡਾਕਟਰ ਨੂੰ ਕਦੋਂ ਮਿਲਣਾ ਹੈ"
  }
};

const SmartSearch = ({ 
  language = 'en', 
  voiceEnabled = true, 
  onSearchQueryChange = () => {},
  onResultsChange = () => {},
  onLoadingChange = () => {},
  onError = () => {} 
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [detectedLang, setDetectedLang] = useState(language);

  const handleQueryChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    setErrorMessage('');
    
    // Detect language when query changes
    if (newQuery.trim()) {
      const detected = detectLanguage(newQuery);
      setDetectedLang(detected);
    }
    
    onSearchQueryChange(newQuery);
  };

  const handleSearch = async (searchQuery) => {
    if (!searchQuery?.trim()) {
      setResults([]);
      onResultsChange([]);
      return;
    }

    try {
      setIsSearching(true);
      onLoadingChange(true);

      const newDetectedLang = detectLanguage(searchQuery);
      setDetectedLang(newDetectedLang);
      
      const searchResults = await performSearch(searchQuery.trim(), detectedLang);
      
      if (searchResults.error) {
        const errorMessages = {
          en: 'An error occurred during search. Please try again.',
          hi: 'खोज के दौरान एक त्रुटि हुई। कृपया पुनः प्रयास करें।',
          te: 'శోధనలో లోపం జరిగింది. దయచేసి మళ్ళీ ప్రయత్నించండి.',
          kn: 'ಹುಡುಕಾಟದಲ್ಲಿ ದೋಷ ಸಂಭವಿಸಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',
          ml: 'തിരയലിൽ ഒരു പിശക് സംഭവിച്ചു. ദയവായി വീണ്ടും ശ്രമിക്കുക.',
          gu: 'શોધ દરમિયાન ભૂલ આવી. કૃપા કરી ફરીથી પ્રયાસ કરો.',
          mr: 'शोध करताना त्रुटी आली. कृपया पुन्हा प्रयत्न करा.',
          pa: 'ਖੋਜ ਦੌਰਾਨ ਇੱਕ ਗਲਤੀ ਹੋਈ। ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।'
        };
        setErrorMessage(errorMessages[detectedLang] || errorMessages.en);
        setResults([]);
        onResultsChange([]);
      } else if (!searchResults.results || searchResults.results.length === 0) {
        const noResultsMessages = {
          en: 'No matching conditions found. Please try different keywords.',
          hi: 'कोई मिलान स्थिति नहीं मिली। कृपया अलग कीवर्ड आज़माएं।',
          te: 'సరిపోలే పరిస్థితులు కనుగొనబడలేదు. దయచేసి వేరే కీవర్డ్స్ ప్రయత్నించండి.',
          kn: 'ಹೊಂದಾಣಿಕೆಯಾಗುವ ಪರಿಸ್ಥಿತಿಗಳು ಕಂಡುಬಂದಿಲ್ಲ. ದಯವಿಟ್ಟು ಬೇರೆ ಕೀವರ್ಡ್‌ಗಳನ್ನು ಪ್ರಯತ್ನಿಸಿ.',
          ml: 'പൊരുത്തപ്പെടുന്ന അവസ്ഥകളൊന്നും കണ്ടെത്തിയില്ല. ദയവായി വ്യത്യസ്ത കീവേഡുകൾ ശ്രമിക്കുക.',
          gu: 'કોઈ મેળ ખાતી સ્થિતિ મળી નથી. કૃપા કરીને અલગ કીવર્ડ્સ પ્રયાસ કરો.',
          mr: 'जुळणारी परिस्थिती सापडली नाही. कृपया वेगळे कीवर्ड्स वापरून पहा.',
          pa: 'ਕੋਈ ਮੇਲ ਖਾਂਦੀ ਸਥਿਤੀ ਨਹੀਂ ਮਿਲੀ। ਕਿਰਪਾ ਕਰਕੇ ਵੱਖਰੇ ਕੀਵਰਡ ਵਰਤ ਕੇ ਦੇਖੋ।'
        };
        setErrorMessage(noResultsMessages[detectedLang] || noResultsMessages.en);
        setResults([]);
        onResultsChange([]);
      } else {
        const enhancedResults = searchResults.results.map(result => ({
          ...result,
          isEmergency: result.emergency,
          condition: result.condition,
          symptoms: Array.isArray(result.symptoms) ? result.symptoms : [],
          firstAid: result.firstAid || []
        }));

        setResults(enhancedResults);
        onResultsChange(enhancedResults);

        // Emergency notification in detected language
        if (enhancedResults.some(result => result.isEmergency)) {
          const emergencyMessages = {
            en: '⚠️ This appears to be an emergency condition. Please seek immediate medical attention.',
            hi: '⚠️ यह एक आपातकालीन स्थिति प्रतीत होती है। कृपया तत्काल चिकित्सा सहायता लें।',
            te: '⚠️ ఇది అత్యవసర పరిస్థితిగా కనిపిస్తోంది. వెంటనే వైద్య సహాయం పొందండి.',
            kn: '⚠️ ಇದು ತುರ್ತು ಪರಿಸ್ಥಿತಿಯಾಗಿ ಕಾಣುತ್ತದೆ. ದಯವಿಟ್ಟು ತಕ್ಷಣ ವೈದ್ಯಕೀಯ ಸಹಾಯ ಪಡೆಯಿರಿ.',
            ml: '⚠️ ഇത് ഒരു അടിയന്തിര അവസ്ഥയായി തോന്നുന്നു. ദയവായി ഉടൻ വൈദ്യസഹായം തേടുക.',
            gu: '⚠️ આ કટોકટીની સ્થિતિ લાગે છે. કૃપા કરીને તાત્કાલિક તબીબી સહાય મેળવો.',
            mr: '⚠️ ही आणीबाणीची परिस्थिती दिसते आहे. कृपया त्वरित वैद्यकीय मदत घ्या.',
            pa: '⚠️ ਇਹ ਐਮਰਜੈਂਸੀ ਸਥਿਤੀ ਜਾਪਦੀ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਤੁਰੰਤ ਡਾਕਟਰੀ ਸਹਾਇਤਾ ਲਵੋ।'
          };
          setErrorMessage(emergencyMessages[detectedLang] || emergencyMessages.en);
        } else {
          setErrorMessage('');
        }
      }
    } catch (error) {
      console.error('Search error:', error);
      const errorMessages = {
        en: 'An unexpected error occurred. Please try again.',
        hi: 'एक अनपेक्षित त्रुटि हुई। कृपया पुनः प्रयास करें।',
        te: 'అనుకోని లోపం సంభవించింది. దయచేసి మళ్ళీ ప్రయత్నించండి.',
        kn: 'ಅನಿರೀಕ್ಷಿತ ದೋಷ ಸಂಭವಿಸಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',
        ml: 'അപ്രതീക്ഷിത പിശക് സംഭവിച്ചു. ദയവായി വീണ്ടും ശ്രമിക്കുക.',
        gu: 'અનપેક્ષિત ભૂલ આવી. કૃપા કરી ફરીથી પ્રયાસ કરો.',
        mr: 'अनपेक्षित त्रुटी आली. कृपया पुन्हा प्रयत्न करा.',
        pa: 'ਅਣਚਾਹੀ ਗਲਤੀ ਵਾਪਰੀ। ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।'
      };
      setErrorMessage(errorMessages[detectedLang] || errorMessages.en);
      onError(error.message);
    } finally {
      setIsSearching(false);
      onLoadingChange(false);
    }
  };

  // Debounced search function
  const debouncedSearch = useRef(
    debounce(async () => {
      const newDetectedLang = detectLanguage(query);
      setDetectedLang(newDetectedLang);
      await handleSearch(query);
    }, 500)
  ).current;

  useEffect(() => {
    if (query.trim()) {
      debouncedSearch();
    } else {
      setResults([]);
      setErrorMessage('');
      onResultsChange([]);
    }
    return () => {
      debouncedSearch.cancel();
    };
  }, [query, debouncedSearch]);

  const handleClear = () => {
    setQuery('');
    setResults([]);
    setErrorMessage('');
    onSearchQueryChange('');
    onResultsChange([]);
  };

  const handleSpeak = async (text) => {
    if (voiceEnabled && text) {
      try {
        await speakText(text, detectedLang);  
      } catch (error) {
        console.error('Speech error:', error);
      }
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', p: 2 }}>
      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          mb: 2
        }}
        elevation={3}
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch(query);
        }}
      >
        <TextField
          fullWidth
          value={query}
          onChange={handleQueryChange}
          placeholder={placeholdersByLanguage[detectedLang] || placeholdersByLanguage.en}
          variant="standard"
          InputProps={{
            disableUnderline: true,
            sx: { px: 1 }
          }}
          disabled={isSearching}
        />
        {query && (
          <IconButton 
            aria-label="clear"
            onClick={() => {
              setQuery('');
              setResults([]);
              onResultsChange([]);
              setErrorMessage('');
            }}
            disabled={isSearching}
          >
            <ClearIcon />
          </IconButton>
        )}
        <IconButton 
          type="submit"
          aria-label="search" 
          onClick={() => handleSearch(query)}
          disabled={isSearching || !query.trim()}
          color="primary"
        >
          {isSearching ? <CircularProgress size={24} /> : <SearchIcon />}
        </IconButton>
        {voiceEnabled && (
          <Tooltip title={uiLabelsByLanguage[detectedLang]?.speak || uiLabelsByLanguage.en.speak}>
            <IconButton
              aria-label="speak"
              onClick={() => {
                if (results.length > 0) {
                  const textToSpeak = results.map(result => 
                    `${result.translatedName}. ${result.translatedFirstAid}`
                  ).join('. ');
                  speakText(textToSpeak, detectedLang);
                }
              }}
              disabled={!results.length}
            >
              <VolumeUpIcon />
            </IconButton>
          </Tooltip>
        )}
      </Paper>

      {errorMessage && (
        <Typography color="error" sx={{ mt: 2, textAlign: 'center' }}>
          {errorMessage}
        </Typography>
      )}

      {results.length > 0 && (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {results.map((result, index) => (
            <ListItem
              key={index}
              alignItems="flex-start"
              sx={{
                flexDirection: 'column',
                borderBottom: index < results.length - 1 ? 1 : 0,
                borderColor: 'divider'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <ListItemText
                  primary={
                    <Typography
                      component="span"
                      variant="subtitle1"
                      color={result.isEmergency ? 'error' : 'text.primary'}
                      sx={{ fontWeight: result.isEmergency ? 'bold' : 'normal' }}
                    >
                      {result.translatedName}
                      {result.isEmergency && ' ⚠️'}
                    </Typography>
                  }
                />
              </Box>

              {result.translatedSymptoms && result.translatedSymptoms.length > 0 && (
                <Box sx={{ mt: 1 }}>
                  <Typography variant="subtitle2" color="text.secondary">
                    {uiLabelsByLanguage[detectedLang]?.symptoms || uiLabelsByLanguage.en.symptoms}:
                  </Typography>
                  <Typography variant="body2">
                    {result.translatedSymptoms.join(', ')}
                  </Typography>
                </Box>
              )}

              {result.translatedFirstAid && (
                <Box sx={{ mt: 1 }}>
                  <Typography variant="subtitle2" color="text.secondary">
                    {uiLabelsByLanguage[detectedLang]?.immediateActions || uiLabelsByLanguage.en.immediateActions}:
                  </Typography>
                  <Typography variant="body2">
                    {result.translatedFirstAid}
                  </Typography>
                </Box>
              )}
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default SmartSearch;
