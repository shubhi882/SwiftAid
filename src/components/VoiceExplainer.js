import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { supportedLanguages } from '../data/chokingProcedures';

const VoiceExplainer = () => {
    const fullVoiceSupport = supportedLanguages.filter(lang => ['en', 'hi'].includes(lang.code));
    const textOnlySupport = supportedLanguages.filter(lang => !['en', 'hi'].includes(lang.code));

    return (
        <Paper elevation={3} sx={{ p: 3, maxWidth: 800, margin: 'auto', mt: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <InfoIcon color="primary" sx={{ mr: 2 }} />
                <Typography variant="h5" component="h2">
                    Voice Guide Information
                </Typography>
            </Box>

            <Typography paragraph>
                Our voice guide feature uses your device's built-in text-to-speech capabilities to provide
                spoken instructions. Currently, we offer:
            </Typography>

            <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                    Full Voice Support:
                </Typography>
                <List>
                    {fullVoiceSupport.map((lang) => (
                        <ListItem key={lang.code}>
                            <ListItemIcon>
                                <CheckCircleIcon color="success" />
                            </ListItemIcon>
                            <ListItemText 
                                primary={`${lang.name} (${lang.nativeName})`}
                                secondary="Complete voice guidance available"
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box>
                <Typography variant="h6" sx={{ mb: 1 }}>
                    Text-Only Languages:
                </Typography>
                <List>
                    {textOnlySupport.map((lang) => (
                        <ListItem key={lang.code}>
                            <ListItemIcon>
                                <RadioButtonUncheckedIcon />
                            </ListItemIcon>
                            <ListItemText 
                                primary={`${lang.name} (${lang.nativeName})`}
                                secondary="Written instructions only"
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>

            <Typography sx={{ mt: 3, fontStyle: 'italic', color: 'text.secondary' }}>
                We're continuously working to expand our voice support to more languages.
                For now, please refer to the written instructions for languages without voice support.
            </Typography>
        </Paper>
    );
};

export default VoiceExplainer;
