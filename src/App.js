import React, { useState, lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  CircularProgress,
  Tooltip,
  Button,
} from '@mui/material';

// Import icons
import MenuIcon from '@mui/icons-material/Menu';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import HealingIcon from '@mui/icons-material/Healing';
import HomeIcon from '@mui/icons-material/Home';
import EmergencyShareIcon from '@mui/icons-material/EmergencyShare';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import TranslateIcon from '@mui/icons-material/Translate';

import ErrorBoundary from './components/ErrorBoundary';
import Footer from './components/Footer';
import LanguageSelector from './components/LanguageSelector';
import SmartSearch from './components/SmartSearch';
import { languages } from './data/languages';
import { initSpeechSynthesis, isSpeaking, stopSpeaking } from './services/voiceService';
import { detectLanguage } from './utils/translationService';

import 'leaflet/dist/leaflet.css';
import './styles/map.css';

// Lazy load components
const HomePage = lazy(() => import('./components/HomePage'));
const MedicalChatbot = lazy(() => import('./components/MedicalChatbot'));
const FirstAidProcedures = lazy(() => import('./components/FirstAidProcedures'));
const ProcedureDetail = lazy(() => import('./components/ProcedureDetail'));
const EmergencyDashboard = lazy(() => import('./components/EmergencyDashboard'));

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff4757',
    },
  },
});

const NavigationDrawer = ({ open, onClose }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List>
        <ListItem button onClick={() => handleNavigation('/')}>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={() => handleNavigation('/first-aid')}>
          <ListItemIcon><LocalHospitalIcon /></ListItemIcon>
          <ListItemText primary="First Aid" />
        </ListItem>
        <ListItem button onClick={() => handleNavigation('/emergency')}>
          <ListItemIcon><EmergencyShareIcon /></ListItemIcon>
          <ListItemText primary="Emergency" />
        </ListItem>
      </List>
    </Drawer>
  );
};

const languageNames = {
  en: 'English',
  hi: 'हिंदी',
  te: 'తెలుగు',
  kn: 'ಕನ್ನಡ',
  mr: 'मराठी',
  gu: 'ગુજરાતી',
  pa: 'ਪੰਜਾਬੀ'
};

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initVoice = async () => {
      try {
        await initSpeechSynthesis();
      } catch (error) {
        console.error('Failed to initialize speech synthesis:', error);
        setVoiceEnabled(false);
      }
    };

    initVoice();
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const toggleVoice = () => {
    if (isSpeaking()) {
      stopSpeaking();
    }
    setVoiceEnabled(!voiceEnabled);
  };

  const handleLanguageChange = (newLang) => {
    setSelectedLanguage(newLang);
    if (isSpeaking()) {
      stopSpeaking();
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <AppBar position="sticky">
            <Toolbar>
              <IconButton
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                InstaAid
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <LanguageSelector
                  currentLanguage={selectedLanguage}
                  onLanguageChange={handleLanguageChange}
                />
                <Tooltip title={voiceEnabled ? 'Disable Voice' : 'Enable Voice'}>
                  <IconButton 
                    onClick={toggleVoice} 
                    color="inherit"
                    sx={{ color: voiceEnabled ? 'secondary.main' : 'inherit' }}
                  >
                    {voiceEnabled ? <VolumeUpIcon /> : <VolumeOffIcon />}
                  </IconButton>
                </Tooltip>
              </Box>
            </Toolbar>
          </AppBar>

          <NavigationDrawer open={mobileOpen} onClose={handleDrawerToggle} />

          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <ErrorBoundary>
              <Suspense fallback={
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                  <CircularProgress />
                </Box>
              }>
                <Routes>
                  <Route path="/" element={<HomePage selectedLanguage={selectedLanguage} onLanguageChange={handleLanguageChange} />} />
                  <Route path="/first-aid" element={<FirstAidProcedures selectedLanguage={selectedLanguage} />} />
                  <Route path="/procedure/:id" element={<ProcedureDetail selectedLanguage={selectedLanguage} />} />
                  <Route path="/emergency" element={<EmergencyDashboard selectedLanguage={selectedLanguage} />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </Box>
          <Footer />
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
