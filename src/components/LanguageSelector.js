import React from 'react';
import { 
  FormControl, 
  Select, 
  MenuItem,
  Box,
  Typography
} from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';

const LanguageSelector = ({ currentLanguage, onLanguageChange }) => {
  const languageNames = {
    en: 'English',
    hi: 'हिंदी',
    te: 'తెలుగు',
    kn: 'ಕನ್ನಡ',
    mr: 'मराठी',
    gu: 'ગુજરાતી',
    pa: 'ਪੰਜਾਬੀ'
  };

  return (
    <FormControl size="small">
      <Select
        value={currentLanguage}
        onChange={(e) => onLanguageChange(e.target.value)}
        sx={{
          bgcolor: 'white',
          '& .MuiSelect-select': {
            py: 1,
            pr: 4,
            pl: 2,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            minWidth: 120
          }
        }}
      >
        {Object.entries(languageNames).map(([code, name]) => (
          <MenuItem key={code} value={code}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <TranslateIcon sx={{ fontSize: 16 }} />
              <Typography sx={{ 
                fontFamily: code === 'en' ? 'inherit' : 'Noto Sans, Arial, sans-serif'
              }}>
                {name}
              </Typography>
            </Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageSelector;
