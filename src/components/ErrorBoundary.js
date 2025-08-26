import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { languages } from '../data/languages';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null, 
      errorInfo: null,
      retryCount: 0
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState(prevState => ({
      error: error,
      errorInfo: errorInfo,
      retryCount: prevState.retryCount + 1
    }));
    
    // Log the error to an error reporting service
    console.error('Error caught by boundary:', error, errorInfo);

    // If it's a speech synthesis error, we can try to recover
    if (error.name === 'SpeechSynthesisError') {
      window.speechSynthesis.cancel();
    }
  }

  handleRetry = () => {
    // Reset error state
    this.setState({ 
      hasError: false, 
      error: null, 
      errorInfo: null 
    });

    // If speech synthesis is stuck, cancel any ongoing speech
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }

  render() {
    if (this.state.hasError) {
      const { selectedLanguage = 'en' } = this.props;
      
      const errorMessages = {
        en: {
          title: 'Something went wrong',
          message: 'We apologize for the inconvenience. Please try refreshing the page or contact support if the problem persists.',
          retry: 'Try Again',
          refresh: 'Refresh Page'
        },
        hi: {
          title: 'कुछ गलत हो गया',
          message: 'असुविधा के लिए हमें खेद है। कृपया पेज को रिफ्रेश करें या यदि समस्या बनी रहती है तो सपोर्ट से संपर्क करें।',
          retry: 'पुनः प्रयास करें',
          refresh: 'पेज रिफ्रेश करें'
        },
        te: {
          title: 'ఏదో తప్పు జరిగింది',
          message: 'ఈ అసౌకర్యానికి మేము క్షమాపణలు కోరుతున్నాము. దయచేసి పేజీని రిఫ్రెష్ చేయండి లేదా సమస్య కొనసాగితే సపోర్ట్‌ను సంప్రదించండి.',
          retry: 'మళ్ళీ ప్రయత్నించండి',
          refresh: 'పేజీని రిఫ్రెష్ చేయండి'
        }
      };

      const messages = errorMessages[selectedLanguage] || errorMessages.en;

      return (
        <Paper
          elevation={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '200px',
            padding: 3,
            textAlign: 'center',
            margin: 2,
            backgroundColor: 'background.paper'
          }}
        >
          <ErrorOutlineIcon color="error" sx={{ fontSize: 64, mb: 2 }} />
          <Typography variant="h5" gutterBottom>
            {messages.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {messages.message}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {this.state.retryCount < 3 && (
              <Button
                variant="outlined"
                color="primary"
                onClick={this.handleRetry}
              >
                {messages.retry}
              </Button>
            )}
            <Button
              variant="contained"
              color="primary"
              onClick={() => window.location.reload()}
            >
              {messages.refresh}
            </Button>
          </Box>
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <Box sx={{ mt: 3, textAlign: 'left', width: '100%' }}>
              <Typography variant="caption" component="pre" sx={{ color: 'error.main' }}>
                {this.state.error.toString()}
              </Typography>
            </Box>
          )}
        </Paper>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
