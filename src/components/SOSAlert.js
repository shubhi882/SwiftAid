import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Box,
  Alert,
  CircularProgress,
  Fab,
  Slide,
} from '@mui/material';
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  SOS as SOSIcon,
  ContactPhone,
} from '@mui/icons-material';
import { emergencyService } from '../services/emergencyService';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SOSAlert = ({ location }) => {
  const [contacts, setContacts] = useState(emergencyService.getEmergencyContacts());
  const [openDialog, setOpenDialog] = useState(false);
  const [newContact, setNewContact] = useState({ name: '', phone: '', relation: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [addingContact, setAddingContact] = useState(false);

  const handleAddContact = async () => {
    try {
      const contact = await emergencyService.addEmergencyContact(newContact);
      setContacts([...contacts, contact]);
      setNewContact({ name: '', phone: '', relation: '' });
      setAddingContact(false);
    } catch (error) {
      setError('Failed to add emergency contact');
    }
  };

  const handleSendSOS = async () => {
    if (contacts.length === 0) {
      setError('Please add at least one emergency contact');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      await emergencyService.sendSOSAlert(location, 'EMERGENCY_SOS');
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      setError('Failed to send SOS alerts. Please try calling emergency services directly.');
    }
    setLoading(false);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
    setError(null);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setError(null);
    setAddingContact(false);
  };

  return (
    <>
      <Fab
        color="error"
        variant="extended"
        onClick={handleOpenDialog}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          '&:hover': {
            backgroundColor: 'error.dark',
          },
        }}
      >
        <SOSIcon sx={{ mr: 1 }} />
        SOS Alert
      </Fab>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        TransitionComponent={Transition}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          <Box display="flex" alignItems="center">
            <SOSIcon color="error" sx={{ mr: 1 }} />
            Emergency SOS Alert
          </Box>
        </DialogTitle>

        <DialogContent>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          {success && (
            <Alert severity="success" sx={{ mb: 2 }}>
              SOS alerts sent successfully!
            </Alert>
          )}

          <Typography variant="subtitle1" gutterBottom>
            Emergency Contacts
          </Typography>

          <List>
            {contacts.map((contact, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={contact.name}
                  secondary={`${contact.phone} (${contact.relation})`}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    onClick={() => {
                      const newContacts = contacts.filter((_, i) => i !== index);
                      setContacts(newContacts);
                      localStorage.setItem('emergencyContacts', JSON.stringify(newContacts));
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>

          {addingContact ? (
            <Box sx={{ mt: 2 }}>
              <TextField
                label="Name"
                fullWidth
                value={newContact.name}
                onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                sx={{ mb: 2 }}
              />
              <TextField
                label="Phone Number"
                fullWidth
                value={newContact.phone}
                onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
                sx={{ mb: 2 }}
              />
              <TextField
                label="Relation"
                fullWidth
                value={newContact.relation}
                onChange={(e) => setNewContact({ ...newContact, relation: e.target.value })}
                sx={{ mb: 2 }}
              />
              <Box display="flex" gap={1}>
                <Button
                  variant="contained"
                  onClick={handleAddContact}
                  startIcon={<AddIcon />}
                >
                  Add Contact
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => setAddingContact(false)}
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          ) : (
            <Button
              variant="outlined"
              startIcon={<ContactPhone />}
              onClick={() => setAddingContact(true)}
              sx={{ mt: 2 }}
            >
              Add Emergency Contact
            </Button>
          )}

          <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
            When you trigger an SOS alert, we will:
            <ul>
              <li>Send your current location to all emergency contacts</li>
              <li>Alert nearby emergency services</li>
              <li>Share your medical information with emergency responders</li>
            </ul>
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleSendSOS}
            disabled={loading || contacts.length === 0}
            startIcon={loading ? <CircularProgress size={20} /> : <SOSIcon />}
          >
            {loading ? 'Sending Alerts...' : 'Send SOS Alert'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SOSAlert;
