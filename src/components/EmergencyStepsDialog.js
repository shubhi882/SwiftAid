import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    Box,
    Alert,
    List,
    ListItem,
    ListItemText
} from '@mui/material';

const EmergencyStepsDialog = ({ open, onClose, condition, selectedLanguage = 'en' }) => {
    if (!condition) return null;

    const getSteps = () => {
        if (!condition || !condition.steps) return [];
        return Object.entries(condition.steps).map(([key, translations]) => ({
            key,
            text: translations[selectedLanguage] || translations.en
        }));
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
        >
            <DialogTitle>
                {condition?.name?.[selectedLanguage] || condition?.name?.en}
            </DialogTitle>
            <DialogContent>
                {condition?.warning && (
                    <Alert severity="warning" sx={{ mb: 2 }}>
                        {condition.warning[selectedLanguage] || condition.warning.en}
                    </Alert>
                )}
                <Typography variant="body1" gutterBottom>
                    {selectedLanguage === 'en' 
                        ? 'Follow these steps until professional medical help arrives:'
                        : 'पेशेवर चिकित्सा सहायता आने तक इन चरणों का पालन करें:'}
                </Typography>
                <List>
                    {getSteps().map((step, index) => (
                        <ListItem key={step.key}>
                            <ListItemText
                                primary={`${index + 1}. ${step.text}`}
                            />
                        </ListItem>
                    ))}
                </List>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    {selectedLanguage === 'en' ? 'Close' : 'बंद करें'}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EmergencyStepsDialog;
