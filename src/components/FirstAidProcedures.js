import React, { useState, useEffect } from 'react';
import { 
    Box, 
    Typography, 
    Paper, 
    IconButton, 
    Alert, 
    Snackbar, 
    Grid, 
    Container,
    Dialog,
    DialogTitle,
    DialogContent,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Tooltip,
    Divider
} from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import StopIcon from '@mui/icons-material/Stop';
import CloseIcon from '@mui/icons-material/Close';
import ShareIcon from '@mui/icons-material/Share';
import InstagramIcon from '@mui/icons-material/Instagram';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { 
    WhatsappShareButton, 
    WhatsappIcon,
    TelegramShareButton,
    TelegramIcon,
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon
} from 'react-share';
import { speakText, stopSpeaking } from '../services/voiceService';
import { procedures } from '../data/procedures';

const procedureEmoji = {
    cpr: '💗',
    choking: '😰',
    bleeding: '🩸',
    burns: '🔥',
    fracture: '🦴',
    heartattack: '💔',
    snakebite: '🐍',
    heatstroke: '🌡️',
    seizure: '⚡',
    poisoning: '☠️',
    drowning: '🌊',
    asthma: '🫁',
    pregnancy: '🤰'
};

const stepsToFollow = {
    en: { text: 'Steps to follow:' },
    hi: { text: 'अनुसरण करने के चरण:' },
    te: { text: 'అనుసరించవలసిన దశలు:' },
    kn: { text: 'ಅನುಸರಿಸಬೇಕಾದ ಹಂತಗಳು:' },
    ml: { text: 'പിന്തുടരേണ്ട ഘട്ടങ്ങൾ:' },
    gu: { text: 'અનુસરવાના પગલાં:' },
    mr: { text: 'अनुसरण करण्याची पावले:' },
    pa: { text: 'ਪਾਲਣ ਕਰਨ ਦੇ ਪੜਾਅ:' }
};

const FirstAidProcedures = ({ selectedLanguage = 'en' }) => {
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [currentSpeakingId, setCurrentSpeakingId] = useState(null);
    const [selectedProcedure, setSelectedProcedure] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        return () => {
            stopSpeaking();
            setCurrentSpeakingId(null);
            setIsPlaying(false);
        };
    }, [selectedLanguage]);

    const handleSpeak = async (procedure, id) => {
        // Only allow voice for English and Hindi
        if (selectedLanguage !== 'en' && selectedLanguage !== 'hi') {
            setErrorMessage('Voice is only available in English and Hindi');
            setSnackbarOpen(true);
            return;
        }

        try {
            if (currentSpeakingId === id && isPlaying) {
                stopSpeaking();
                setIsPlaying(false);
                setCurrentSpeakingId(null);
                return;
            }

            setCurrentSpeakingId(id);
            setIsPlaying(true);

            const narration = [];
            
            // Add title
            narration.push(procedure.title[selectedLanguage] || procedure.title.en);
            
            // Add description
            if (procedure.description) {
                narration.push(procedure.description[selectedLanguage] || procedure.description.en);
            }

            // Add warning if present
            if (procedure.warning) {
                narration.push("Warning: " + (procedure.warning[selectedLanguage] || procedure.warning.en));
            }

            // Add steps
            if (procedure.steps) {
                const steps = procedure.steps[selectedLanguage] || procedure.steps.en;
                steps.forEach((step, index) => {
                    narration.push(`Step ${index + 1}: ${step.title}. ${step.instruction}`);
                    if (step.note) {
                        narration.push(`Note: ${step.note}`);
                    }
                });
            }

            await speakText(narration.join('. '), selectedLanguage);
            setIsPlaying(false);
            setCurrentSpeakingId(null);
        } catch (error) {
            console.error('Error speaking text:', error);
            setErrorMessage('Failed to play voice. Please try again.');
            setSnackbarOpen(true);
            setIsPlaying(false);
            setCurrentSpeakingId(null);
        }
    };

    const handleProcedureClick = (id) => {
        setSelectedProcedure({ id, ...procedures[id] });
    };

    const handleInstagramShare = (procedure) => {
        const text = `${procedure.title[selectedLanguage] || procedure.title.en}\n\n${procedure.description[selectedLanguage] || procedure.description.en}\n\nShared via InstAid`;
        navigator.clipboard.writeText(text).then(() => {
            setSnackbarOpen(true);
            window.open('https://instagram.com', '_blank');
        });
    };

    const handleCopyContent = (procedure) => {
        const text = `${procedure.title[selectedLanguage] || procedure.title.en}\n\n${procedure.description[selectedLanguage] || procedure.description.en}\n\nSteps:\n${(procedure.steps[selectedLanguage] || procedure.steps.en).map((step, index) => `${index + 1}. ${step.title}. ${step.instruction}`).join('\n')}`;
        navigator.clipboard.writeText(text).then(() => {
            setSnackbarOpen(true);
        });
    };

    const renderProcedureCards = () => {
        return Object.entries(procedures).map(([key, procedure]) => (
            <Grid item xs={12} sm={6} md={4} key={key}>
                <Paper 
                    elevation={1}
                    onClick={() => handleProcedureClick(key)}
                    sx={{ 
                        p: { xs: 2, sm: 3, md: 4 },
                        height: '100%',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'all 0.2s ease-in-out',
                        border: '2px solid #e74c3c',
                        borderRadius: '8px',
                        '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            borderColor: '#c0392b'
                        }
                    }}
                >
                    <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Typography 
                                sx={{ 
                                    fontSize: '1.75rem',
                                    color: '#e74c3c',
                                    lineHeight: 1
                                }}
                            >
                                {procedureEmoji[key]}
                            </Typography>
                            <Typography 
                                variant="h6" 
                                sx={{ 
                                    color: '#e74c3c',
                                    fontWeight: 500,
                                    fontSize: '1.1rem'
                                }}
                            >
                                {procedure.title[selectedLanguage] || procedure.title.en}
                            </Typography>
                        </Box>
                        {(selectedLanguage === 'en' || selectedLanguage === 'hi') && (
                            <IconButton
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleSpeak(procedure, key);
                                }}
                                size="small"
                                sx={{
                                    color: '#e74c3c',
                                    '&:hover': {
                                        backgroundColor: 'rgba(231,76,60,0.1)'
                                    }
                                }}
                            >
                                {isPlaying && currentSpeakingId === key ? <StopIcon /> : <VolumeUpIcon />}
                            </IconButton>
                        )}
                    </Box>
                </Paper>
            </Grid>
        ));
    };

    return (
        <Container maxWidth="lg" sx={{ 
            py: { xs: 2, sm: 4, md: 6 },
            px: { xs: 2, sm: 3, md: 4 }
        }}>
            <Box sx={{ 
                textAlign: 'center',
                mb: { xs: 3, sm: 4, md: 5 }
            }}>
                <Typography 
                    variant="h3" 
                    component="h1" 
                    sx={{ 
                        fontWeight: 600,
                        mb: { xs: 1, sm: 2 },
                        fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' }
                    }}
                >
                    First Aid Procedures
                </Typography>
                <Typography sx={{ 
                    fontSize: { xs: '1rem', sm: '1.125rem' },
                    maxWidth: '600px',
                    mx: 'auto'
                }}>
                    Quick access to life-saving procedures
                </Typography>
            </Box>

            <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
                {renderProcedureCards()}
            </Grid>

            <Dialog 
                open={!!selectedProcedure} 
                onClose={() => setSelectedProcedure(null)}
                maxWidth="md"
                fullWidth
                sx={{
                    '& .MuiDialog-paper': {
                        borderRadius: { xs: '12px', sm: '16px' },
                        m: { xs: 2, sm: 3 }
                    }
                }}
            >
                {selectedProcedure && (
                    <>
                        <DialogTitle>
                            <Box sx={{ 
                                display: 'flex', 
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Typography sx={{ fontSize: '1.5rem' }}>
                                        {procedureEmoji[selectedProcedure.id]}
                                    </Typography>
                                    <Typography variant="h6">
                                        {selectedProcedure.title[selectedLanguage] || selectedProcedure.title.en}
                                    </Typography>
                                </Box>
                                <Box>
                                    {(selectedLanguage === 'en' || selectedLanguage === 'hi') && (
                                        <IconButton
                                            onClick={() => handleSpeak(selectedProcedure, selectedProcedure.id)}
                                            size="small"
                                            sx={{ mr: 1 }}
                                        >
                                            {isPlaying && currentSpeakingId === selectedProcedure.id ? <StopIcon /> : <VolumeUpIcon />}
                                        </IconButton>
                                    )}
                                    <IconButton onClick={() => setSelectedProcedure(null)}>
                                        <CloseIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                        </DialogTitle>
                        <DialogContent>
                            <Box sx={{ 
                                width: '100px', 
                                height: '100px', 
                                margin: '0 auto 20px auto',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                animation: 'pulse 2s infinite'
                            }}>
                                <Typography sx={{ 
                                    fontSize: '3rem',
                                    '@keyframes pulse': {
                                        '0%': {
                                            transform: 'scale(1)',
                                            opacity: 1
                                        },
                                        '50%': {
                                            transform: 'scale(1.2)',
                                            opacity: 0.7
                                        },
                                        '100%': {
                                            transform: 'scale(1)',
                                            opacity: 1
                                        }
                                    }
                                }}>
                                    {procedureEmoji[selectedProcedure.id]}
                                </Typography>
                            </Box>
                            <Typography variant="body1" sx={{ mb: 3 }}>
                                {selectedProcedure.description[selectedLanguage] || selectedProcedure.description.en}
                            </Typography>
                            <Divider sx={{ my: 2 }} />
                            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
                                    Share this procedure:
                                </Typography>
                                <Tooltip title="Copy to Clipboard">
                                    <IconButton 
                                        onClick={() => handleCopyContent(selectedProcedure)}
                                        sx={{ 
                                            backgroundColor: '#e74c3c',
                                            width: 32,
                                            height: 32,
                                            mr: 1,
                                            '&:hover': {
                                                backgroundColor: '#c0392b'
                                            }
                                        }}
                                    >
                                        <ContentCopyIcon sx={{ color: 'white', fontSize: 20 }} />
                                    </IconButton>
                                </Tooltip>
                                <WhatsappShareButton 
                                    url={window.location.href}
                                    title={`${selectedProcedure.title[selectedLanguage] || selectedProcedure.title.en}\n\n${selectedProcedure.description[selectedLanguage] || selectedProcedure.description.en}`}
                                >
                                    <WhatsappIcon size={32} round />
                                </WhatsappShareButton>
                                <TelegramShareButton 
                                    url={window.location.href}
                                    title={`${selectedProcedure.title[selectedLanguage] || selectedProcedure.title.en}\n\n${selectedProcedure.description[selectedLanguage] || selectedProcedure.description.en}`}
                                >
                                    <TelegramIcon size={32} round />
                                </TelegramShareButton>
                                <FacebookShareButton 
                                    url={window.location.href}
                                    quote={`${selectedProcedure.title[selectedLanguage] || selectedProcedure.title.en}\n\n${selectedProcedure.description[selectedLanguage] || selectedProcedure.description.en}`}
                                >
                                    <FacebookIcon size={32} round />
                                </FacebookShareButton>
                                <TwitterShareButton 
                                    url={window.location.href}
                                    title={`${selectedProcedure.title[selectedLanguage] || selectedProcedure.title.en}`}
                                >
                                    <TwitterIcon size={32} round />
                                </TwitterShareButton>
                                <Tooltip title="Copy & Share on Instagram">
                                    <IconButton 
                                        onClick={() => handleInstagramShare(selectedProcedure)}
                                        sx={{ 
                                            background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                                            width: 32,
                                            height: 32,
                                            '&:hover': {
                                                background: 'linear-gradient(45deg, #e6683c 0%, #dc2743 25%, #cc2366 50%, #bc1888 75%, #f09433 100%)'
                                            }
                                        }}
                                    >
                                        <InstagramIcon sx={{ color: 'white', fontSize: 20 }} />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            {selectedProcedure.warning && (
                                <Alert severity="warning" sx={{ mt: 3 }}>
                                    {selectedProcedure.warning[selectedLanguage] || selectedProcedure.warning.en}
                                </Alert>
                            )}
                            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                                {stepsToFollow[selectedLanguage]?.text || stepsToFollow.en.text}
                            </Typography>
                            <List sx={{
                                border: '2px solid #e74c3c',
                                borderRadius: '8px',
                                p: 2,
                                bgcolor: 'rgba(231,76,60,0.02)'
                            }}>
                                {(selectedProcedure.steps[selectedLanguage] || selectedProcedure.steps.en).map((step, index) => (
                                    <ListItem key={index}>
                                        <ListItemIcon>
                                            <Typography color="primary" variant="h6">
                                                {index + 1}
                                            </Typography>
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={step.title}
                                            secondary={
                                                <>
                                                    {step.instruction}
                                                    {step.note && (
                                                        <Typography 
                                                            component="div"
                                                            variant="body2"
                                                            color="text.secondary"
                                                            sx={{ mt: 1, fontStyle: 'italic' }}
                                                        >
                                                            Note: {step.note}
                                                        </Typography>
                                                    )}
                                                </>
                                            }
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </DialogContent>
                    </>
                )}
            </Dialog>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={() => setSnackbarOpen(false)}
                message="Content copied to clipboard!"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            />
        </Container>
    );
};

export default FirstAidProcedures;
