import React, { useState, useCallback, useEffect } from 'react';
import {
  Box,
  TextField,
  IconButton,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    width: '100%',
    maxWidth: 600,
    margin: '0 auto',
    padding: '20px',
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 16px',
    borderRadius: '24px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  input: {
    flex: 1,
    marginRight: '8px',
  },
  results: {
    marginTop: '16px',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  resultItem: {
    borderBottom: '1px solid rgba(0,0,0,0.08)',
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  emergency: {
    color: '#d32f2f',
    fontWeight: 'bold',
  },
  condition: {
    fontWeight: 'bold',
  },
  symptoms: {
    color: 'rgba(0,0,0,0.6)',
  },
}));

const medicalData = {
  en: [
    { condition: 'Heart Attack', symptoms: ['Chest pain', 'Shortness of breath', 'Nausea', 'Cold sweat', 'Fatigue'], emergency: true },
    { condition: 'Stroke', symptoms: ['Sudden numbness', 'Confusion', 'Severe headache', 'Difficulty speaking', 'Vision problems'], emergency: true },
    { condition: 'Severe Allergic Reaction', symptoms: ['Difficulty breathing', 'Swelling', 'Hives', 'Rapid pulse', 'Dizziness'], emergency: true },
    { condition: 'Common Cold', symptoms: ['Runny nose', 'Cough', 'Sore throat', 'Mild fever', 'Fatigue'], emergency: false },
    { condition: 'Food Poisoning', symptoms: ['Nausea', 'Vomiting', 'Diarrhea', 'Stomach cramps', 'Fever'], emergency: false },
    { condition: 'Asthma Attack', symptoms: ['Wheezing', 'Coughing', 'Chest tightness', 'Shortness of breath'], emergency: true },
    { condition: 'Broken Bone', symptoms: ['Severe pain', 'Swelling', 'Bruising', 'Difficulty moving', 'Deformity'], emergency: true },
    { condition: 'Migraine', symptoms: ['Severe headache', 'Light sensitivity', 'Nausea', 'Vision problems'], emergency: false }
  ],
  hi: [
    { condition: 'दिल का दौरा', symptoms: ['छाती में दर्द', 'सांस फूलना', 'मितली', 'ठंडा पसीना', 'थकान'], emergency: true },
    { condition: 'स्ट्रोक', symptoms: ['अचानक सुन्नता', 'भ्रम', 'तेज सिरदर्द', 'बोलने में कठिनाई', 'देखने में समस्या'], emergency: true },
    { condition: 'गंभीर एलर्जी', symptoms: ['सांस लेने में कठिनाई', 'सूजन', 'पित्ती', 'तेज धड़कन', 'चक्कर'], emergency: true },
    { condition: 'जुकाम', symptoms: ['नाक बहना', 'खांसी', 'गले में खराश', 'हल्का बुखार', 'थकान'], emergency: false },
    { condition: 'खाद्य विषाक्तता', symptoms: ['मितली', 'उल्टी', 'दस्त', 'पेट में ऐंठन', 'बुखार'], emergency: false },
    { condition: 'दमा का दौरा', symptoms: ['घरघराहट', 'खांसी', 'छाती में जकड़न', 'सांस फूलना'], emergency: true },
    { condition: 'हड्डी टूटना', symptoms: ['तीव्र दर्द', 'सूजन', 'नीला पड़ना', 'हिलाने में कठिनाई', 'विकृति'], emergency: true },
    { condition: 'माइग्रेन', symptoms: ['तीव्र सिरदर्द', 'रोशनी से परेशानी', 'मितली', 'देखने में समस्या'], emergency: false }
  ],
  te: [
    { condition: 'గుండెపోటు', symptoms: ['ఛాతీ నొప్పి', 'ఊపిరి ఆడకపోవడం', 'వికారం', 'చల్లని చెమట', 'అలసట'], emergency: true },
    { condition: 'పక్షవాతం', symptoms: ['అకస్మాత్ మొద్దుబారడం', 'గందరగోళం', 'తీవ్రమైన తలనొప్పి', 'మాట్లాడటంలో ఇబ్బంది', 'చూపు సమస్యలు'], emergency: true },
    { condition: 'తీవ్రమైన అలెర్జీ', symptoms: ['శ్వాస తీసుకోవడంలో ఇబ్బంది', 'వాపు', 'దద్దుర్లు', 'తేజ ధడ్డి', 'తలతిరగడం'], emergency: true },
    { condition: 'జలుబు', symptoms: ['ముక్కు కారడం', 'దగ్గు', 'గొంతు నొప్పి', 'తేలికపాటి జ్వరం', 'అలసట'], emergency: false },
    { condition: 'ఆహార విషతులత', symptoms: ['వికారం', 'వాంతులు', 'దస్తు', 'పొట్ట నొప్పి', 'జ్వరం'], emergency: false },
    { condition: 'ఆస్తమా దాడి', symptoms: ['ఘర్ఘర', 'దగ్గు', 'ఛాతీ బిగువు', 'ఊపిరి ఆడకపోవడం'], emergency: true },
    { condition: 'ఎముక విరిగింది', symptoms: ['తీవ్రమైన నొప్పి', 'వాపు', 'నలుపు', 'కదలడంలో ఇబ్బంది', 'వైకల్యం'], emergency: true },
    { condition: 'మైగ్రేన్', symptoms: ['తీవ్రమైన తలనొప్పి', 'వెలుతురు పట్ల సున్నితత్వం', 'వికారం', 'దృష్టి సమస్యలు'], emergency: false }
  ],
  kn: [
    { condition: 'ಹೃದಯಾಘಾತ', symptoms: ['ಎದೆನೋವು', 'ಉಸಿರಾಟದ ತೊಂದರೆ', 'ವಾಕರಿಕೆ', 'ತಣ್ಣನೆಯ ಬೆವರು', 'ಆಯಾಸ'], emergency: true },
    { condition: 'ಪಾರ್ಶ್ವವಾಯು', symptoms: ['ಇದ್ದಕ್ಕಿದ್ದಂತೆ ಮರಗುವಿಕೆ', 'ಗೊಂದಲ', 'ತೀವ್ರ ತಲೆನೋವು', 'ಮಾತನಾಡಲು ಕಷ್ಟ', 'ದೃಷ್ಟಿ ಸಮಸ್ಯೆಗಳು'], emergency: true },
    { condition: 'ತೀವ್ರ ಅಲರ್ಜಿ', symptoms: ['ಉಸಿರಾಟ ತೊಂದರೆ', 'ಊತ', 'ಕೆಂಪು ಗುಳ್ಳೆಗಳು', 'ವೇಗದ ನಾಡಿಮಿಡಿತ', 'ತಲೆ ತಿರುಗುವಿಕೆ'], emergency: true },
    { condition: 'ಜ್ವರ-ಶೀತ', symptoms: ['ಮೂಗು ಸೋರುವಿಕೆ', 'ಕೆಮ್ಮು', 'ಗಂಟಲು ನೋವು', 'ಸಾಧಾರಣ ಜ್ವರ', 'ಆಯಾಸ'], emergency: false },
    { condition: 'ಆಹಾರ ವಿಷಬಾಧೆ', symptoms: ['ವಾಕರಿಕೆ', 'ವಾಂತಿ', 'ಭೇದಿ', 'ಹೊಟ್ಟೆ ನೋವು', 'ಜ್ವರ'], emergency: false },
    { condition: 'ಅಸ್ತಮಾ ಆಕ್ರಮಣ', symptoms: ['ಘರ್ಘರ', 'ಕೆಮ್ಮು', 'ಎದೆ ಬಿಗಿತ', 'ಉಸಿರಾಟ ತೊಂದರೆ'], emergency: true },
    { condition: 'ಹಾಡು ಮುರಿತ', symptoms: ['ತೀವ್ರ ನೋವು', 'ಊತ', 'ಕಂದು ಬಣ್ಣ', 'ಹಲನಚಲನದಲ್ಲಿ ಕಷ್ಟ', 'ವಿಕೃತಿ'], emergency: true },
    { condition: 'ಮೈಗ್ರೇನ್', symptoms: ['ತೀವ್ರ ತಲೆನೋವು', 'ಬೆಳಕಿನ ಸೂಕ್ಷ್ಮತೆ', 'ವಾಕರಿಕೆ', 'ದೃಷ್ಟಿ ಸಮಸ್ಯೆಗಳು'], emergency: false }
  ],
  ml: [
    { condition: 'ഹൃദയാഘാതം', symptoms: ['നെഞ്ചുവേദന', 'ശ്വാസംമുട്ടൽ', 'ഛർദ്ദി', 'തണുത്ത വിയർപ്പ്', 'ക്ഷീണം'], emergency: true },
    { condition: 'പക്ഷാഘാതം', symptoms: ['പെട്ടെന്നുള്ള മൊദ്ദുബാരിപ്പ്', 'ഗംദരഗോളം', 'കഠിനമായ തലവേദന', 'സംസാരിക്കാൻ ബുദ്ധിമുട്ട്', 'കാഴ്ച പ്രശ്നങ്ങൾ'], emergency: true },
    { condition: 'കഠിനമായ അലർജി', symptoms: ['ശ്വാസംമുട്ടൽ', 'നീർവീക്കം', 'ചൊറിച്ചിൽ', 'വേഗത്തിലുള്ള നാഡീമിടിപ്പ്', 'തലകറക്കം'], emergency: true },
    { condition: 'ജലദോഷം', symptoms: ['മൂക്കൊലിപ്പ്', 'ദഗ്ഗു', 'ഗൊംതുവേദന', 'നേരിയ പനി', 'ക്ഷീണം'], emergency: false },
    { condition: 'ആഹാര വിഷബാധ', symptoms: ['ഛർദ്ദി', 'വാംതിക്കൽ', 'വയറിളക്കം', 'വയറുവേദന', 'പനി'], emergency: false },
    { condition: 'ആസ്ത്മ ആക്രമണം', symptoms: ['ശ്വാസംമുട്ടൽ', 'ദഗ്ഗു', 'നെഞ്ചുവേദന', 'ശ്വാസതടസ്സം'], emergency: true },
    { condition: 'എല്ല് ഒടിവ്', symptoms: ['കഠിനവേദന', 'നീർവീക്കം', 'കരുവാളിപ്പ്', 'ചലിക്കാൻ ബുദ്ധിമുട്ട്', 'വൈകല്യം'], emergency: true },
    { condition: 'മൈഗ്രേന്', symptoms: ['കഠിനമായ തലവേദന', 'വെളുത്തുരു പട്ല സുന്നിതത്വം', 'ഛർദ്ദി', 'ദൃഷ്ടി പ്രശ്നങ്ങൾ'], emergency: false }
  ],
  gu: [
    { condition: 'હૃદયરોગનો હુમલો', symptoms: ['છાતીમાં દુખાવો', 'શ્વાસ ચડવો', 'ઉબકા', 'ઠંડો પરસેવો', 'થાક'], emergency: true },
    { condition: 'લકવો', symptoms: ['અચાનક સુન્નતા', 'ગૂંચવણ', 'માથાનો તીવ્ર દુખાવો', 'બોલવામાં તકલીફ', 'દ્રષ્ટિની સમસ્યાઓ'], emergency: true },
    { condition: 'ગંભીર અલર્જી', symptoms: ['શ્વાસ લેવામાં તકલીફ', 'સોજો', 'ચકામા', 'ઝડપી નાડી', 'ચક્કર'], emergency: true },
    { condition: 'શરદી', symptoms: ['નાક વહેવું', 'ખાંસી', 'ગળામાં દુખાવો', 'હળવો તાવ', 'થાક'], emergency: false },
    { condition: 'ફૂડ પોઇઝનિંગ', symptoms: ['ઉબકા', 'ઉલટી', 'ઝાડા', 'પેટમાં દુખાવો', 'તાવ'], emergency: false },
    { condition: 'દમનો હુમલો', symptoms: ['ઘરઘર', 'ખાંસી', 'છાતીમાં જકડામણ', 'શ્વાસ ચડવો'], emergency: true },
    { condition: 'હાડકું ભાંગવું', symptoms: ['તીવ્ર દુખાવો', 'સોજો', 'કાળો પડી જવો', 'હલનચલનમાં તકલીફ', 'વિકૃતિ'], emergency: true },
    { condition: 'માથાનો દુખાવો', symptoms: ['તીવ્ર માથાનો દુખાવો', 'પ્રકાશ પ્રત્યે સંવેદનશીલતા', 'ઉબકા', 'દ્રષ્ટિની સમસ્યાઓ'], emergency: false }
  ],
  mr: [
    { condition: 'हृदयविकाराचा झटका', symptoms: ['छातीत दुखणे', 'श्वास घेण्यास त्रास', 'मळमळ', 'थंड घाम', 'थकवा'], emergency: true },
    { condition: 'पक्षाघात', symptoms: ['अचानक बधिरता', 'गोंधळ', 'तीव्र डोकेदुखी', 'बोलण्यास त्रास', 'दृष्टी समस्या'], emergency: true },
    { condition: 'गंभीर अॅलर्जी', symptoms: ['श्वास घेण्यास त्रास', 'सूज', 'पुरळ', 'जलद नाडी', 'चक्कर'], emergency: true },
    { condition: 'सर्दी', symptoms: ['नाक वाहणे', 'खोकला', 'घसा दुखणे', 'किरकोळ ताप', 'थकवा'], emergency: false },
    { condition: 'अन्न विषबाधा', symptoms: ['मळमळ', 'उलटी', 'जुलाब', 'पोटदुखी', 'ताप'], emergency: false },
    { condition: 'दम्याचा त्रास', symptoms: ['घरघर', 'खोकला', 'छातीत जखडल्यासारखे', 'श्वास घेण्यास त्रास'], emergency: true },
    { condition: 'हाड मोडणे', symptoms: ['तीव्र वेदना', 'सूज', 'जखम काळी पडणे', 'हालचाल करण्यास त्रास', 'विकृती'], emergency: true },
    { condition: 'मायग्रेन', symptoms: ['तीव्र डोकेदुखी', 'प्रकाशाची संवेदनशीलता', 'मळमळ', 'दृष्टी समस्या'], emergency: false }
  ],
  pa: [
    { condition: 'ਦਿਲ ਦਾ ਦੌਰਾ', symptoms: ['ਛਾਤੀ ਵਿੱਚ ਦਰਦ', 'ਸਾਹ ਚੜ੍ਹਨਾ', 'ਮਤਲੀ', 'ਠੰਡਾ ਪਸੀਨਾ', 'ਥਕਾਵਟ'], emergency: true },
    { condition: 'ਸਟ੍ਰੋਕ', symptoms: ['ਅਚਾਨਕ ਸੁੰਨ ਹੋਣਾ', 'ਗੂੰਝਲ', 'ਤੇਜ਼ ਸਿਰ ਦਰਦ', 'ਬੋਲਣ ਵਿੱਚ ਮੁਸ਼ਕਲ', 'ਨਜ਼ਰ ਸਮੱਸਿਆਵਾਂ'], emergency: true },
    { condition: 'ਗੰਭੀਰ ਐਲਰਜੀ', symptoms: ['ਸਾਹ ਲੈਣ ਵਿੱਚ ਮੁਸ਼ਕਲ', 'ਸੋਜ', 'ਛਪਾਕੀ', 'ਤੇਜ਼ ਨਬਜ਼', 'ਚੱਕਰ'], emergency: true },
    { condition: 'ਜ਼ੁਕਾਮ', symptoms: ['ਨੱਕ ਵਗਣਾ', 'ਖਾਂਸੀ', 'ਗਲੇ ਵਿੱਚ ਦਰਦ', 'ਹਲਕਾ ਬੁਖਾਰ', 'ਥਕਾਵਟ'], emergency: false },
    { condition: 'ਫੂਡ ਪੁਆਇਜ਼ਨਿੰਗ', symptoms: ['ਮਤਲੀ', 'ਉਲਟੀਆਂ', 'ਦਸਤ', 'ਪੇਟ ਦਰਦ', 'ਬੁਖਾਰ'], emergency: false },
    { condition: 'ਦਮੇ ਦਾ ਦੌਰਾ', symptoms: ['ਘਰ-ਘਰ', 'ਖਾਂਸੀ', 'ਛਾਤੀ ਵਿੱਚ ਜਕੜਨ', 'ਸਾਹ ਚੜ੍ਹਨਾ'], emergency: true },
    { condition: 'ਹੱਡੀ ਟੁੱਟਣਾ', symptoms: ['ਤੇਜ਼ ਦਰਦ', 'ਸੋਜ', 'ਨੀਲ', 'ਹਿੱਲਣ ਵਿੱਚ ਮੁਸ਼ਕਲ', 'ਵਿਗਾੜ'], emergency: true },
    { condition: 'ਸਿਰ ਦਰਦ', symptoms: ['ਤੇਜ਼ ਸਿਰ ਦਰਦ', 'ਰੌਸ਼ਨੀ ਪ੍ਰਤੀ ਸੰਵੇਦਨਸ਼ੀਲਤਾ', 'ਮਤਲੀ', 'ਨਜ਼ਰ ਸਮੱਸਿਆਵਾਂ'], emergency: false }
  ]
};

const detectLanguage = (text) => {
  if (!text) return 'en';

  // Character ranges for different scripts
  const scripts = {
    Devanagari: /[\u0900-\u097F]/,  // Hindi, Marathi
    Telugu: /[\u0C00-\u0C7F]/,      // Telugu
    Kannada: /[\u0C80-\u0CFF]/,     // Kannada
    Malayalam: /[\u0D00-\u0D7F]/,   // Malayalam
    Gujarati: /[\u0A80-\u0AFF]/,    // Gujarati
    Gurmukhi: /[\u0A00-\u0A7F]/,    // Punjabi
    Latin: /[a-zA-Z]/,              // English
  };

  // Count characters in each script
  const scriptCounts = {
    Devanagari: (text.match(scripts.Devanagari) || []).length,
    Telugu: (text.match(scripts.Telugu) || []).length,
    Kannada: (text.match(scripts.Kannada) || []).length,
    Malayalam: (text.match(scripts.Malayalam) || []).length,
    Gujarati: (text.match(scripts.Gujarati) || []).length,
    Gurmukhi: (text.match(scripts.Gurmukhi) || []).length,
    Latin: (text.match(scripts.Latin) || []).length,
  };

  // Map scripts to languages (some scripts map to multiple languages)
  const scriptToLang = {
    Devanagari: (text) => {
      // Simple heuristic: check for Marathi-specific characters or words
      if (text.includes('ळ') || text.includes('ज्ञ')) return 'mr';
      return 'hi';
    },
    Telugu: () => 'te',
    Kannada: () => 'kn',
    Malayalam: () => 'ml',
    Gujarati: () => 'gu',
    Gurmukhi: () => 'pa',
    Latin: () => 'en',
  };

  // Find the dominant script
  const dominantScript = Object.entries(scriptCounts).reduce((a, b) => 
    (b[1] > a[1] ? b : a)
  )[0];

  // If no script is detected, return English
  if (!dominantScript || scriptCounts[dominantScript] === 0) return 'en';

  // Convert script to language code
  return scriptToLang[dominantScript](text);
};

const SearchBox = ({ language = 'en', onResults, onError, translations, placeholder }) => {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchMedicalConditions = useCallback((searchQuery, lang) => {
    const searchTerms = searchQuery.toLowerCase().split(' ');
    const results = medicalData[lang].filter(item => {
      const conditionMatch = item.condition.toLowerCase().includes(searchQuery.toLowerCase());
      const symptomsMatch = item.symptoms.some(symptom =>
        searchTerms.some(term => symptom.toLowerCase().includes(term))
      );
      return conditionMatch || symptomsMatch;
    });

    console.log(`Search query: ${searchQuery}, Language: ${lang}, Results found: ${results.length}`);

    // Fallback to English if no results found
    if (results.length === 0 && lang !== 'en') {
      console.log('No results found in', lang, 'searching in English');
      return searchMedicalConditions(searchQuery, 'en');
    }

    return results;
  }, []);

  const handleSearch = useCallback(() => {
    if (!query.trim()) {
      setResults([]);
      onResults([]);
      return;
    }

    setIsLoading(true);
    const detectedLang = detectLanguage(query) || language;

    // Simulate API delay
    setTimeout(() => {
      try {
        const searchResults = searchMedicalConditions(query, detectedLang);
        setResults(searchResults);
        onResults(searchResults);
      } catch (error) {
        console.error('Search error:', error);
        onError(translations[language]?.searchError || translations.en.searchError);
      } finally {
        setIsLoading(false);
      }
    }, 300);
  }, [query, language, searchMedicalConditions, onResults, onError, translations]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query.trim()) {
        handleSearch();
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query, handleSearch]);

  return (
    <Box className={classes.searchContainer}>
      <Paper className={classes.searchBar} elevation={1}>
        <TextField
          className={classes.input}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder || translations[language]?.searchPlaceholder || translations.en.searchPlaceholder}
          variant="standard"
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <SearchIcon color="action" sx={{ mr: 1 }} />
            ),
            endAdornment: isLoading && (
              <CircularProgress size={20} />
            ),
          }}
        />
      </Paper>

      {results.length > 0 && (
        <Paper className={classes.results}>
          <List>
            {results.map((result, index) => (
              <ListItem key={index} className={classes.resultItem}>
                <ListItemText
                  primary={
                    <Typography className={result.emergency ? classes.emergency : classes.condition}>
                      {result.condition}
                      {result.emergency && ' ⚠️'}
                    </Typography>
                  }
                  secondary={
                    <Typography className={classes.symptoms}>
                      {result.symptoms.join(' • ')}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  );
};

export default SearchBox;
