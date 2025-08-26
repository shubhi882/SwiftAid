import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import VoiceExplainer from './VoiceExplainer';
import { stepsToFollow } from '../data/procedures';

const ProcedureCard = ({ procedure, language = 'en' }) => {
  // Debug logs
  // useEffect(() => {
  //   console.log('Language prop:', language);
  // }, [language]);

  const langMap = {
    'en': 'en-US',
    'hi': 'hi-IN',
    'kn': 'kn-IN',
    'ml': 'ml-IN',
    'gu': 'gu-IN',
    'te': 'te-IN',
    'mr': 'mr-IN',
    'pa': 'pa-IN'
  };

  // Ensure we have a valid language code
  const currentLang = language?.toLowerCase() || 'en';
  // console.log('Current Language:', currentLang);

  return (
    <Card sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            {procedure.title}
          </Typography>
          {procedure.voiceExplainer && (
            <VoiceExplainer 
              text={procedure.voiceExplainer} 
              lang={langMap[currentLang] || 'en-US'} 
            />
          )}
        </Box>

        {procedure.image && (
          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <img 
              src={procedure.image} 
              alt={procedure.title} 
              style={{ maxWidth: '200px', height: 'auto' }}
            />
          </Box>
        )}

        <Alert severity="warning" sx={{ mb: 2 }}>
          {procedure.warning}
        </Alert>

        <Typography variant="h6" color="primary" sx={{ mb: 2, mt: 3 }}>
          {stepsToFollow[currentLang]?.text || stepsToFollow['en'].text}
        </Typography>

        {procedure.steps.map((step, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Typography variant="h6" color="primary">
              {step.title}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              {step.instruction}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {step.note}
            </Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default ProcedureCard;
