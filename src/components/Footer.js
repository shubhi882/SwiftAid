import React from 'react';
import { Box, Container, Typography, Link, Grid, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const emergencyContacts = {
  global: {
    title: 'Emergency Services',
    number: '112',
  },
  india: [
    {
      title: 'National Emergency Number',
      number: '112',
    },
    {
      title: 'Ambulance',
      number: '102',
    },
    {
      title: 'Police',
      number: '100',
    },
    {
      title: 'Fire',
      number: '101',
    },
    {
      title: 'Women Helpline',
      number: '1091',
    },
    {
      title: 'Child Helpline',
      number: '1098',
    },
  ],
};

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Emergency Contacts
            </Typography>
            <Box>
              {emergencyContacts.india.map((contact, index) => (
                <Typography key={index} variant="body2" color="text.secondary">
                  {contact.title}: <StyledLink href={`tel:${contact.number}`}>{contact.number}</StyledLink>
                </Typography>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About InstaAid
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Healthcare inspired project by:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Amulya Bharti J
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              {new Date().getFullYear()} InstaAid. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body2" color="text.secondary" align="center">
          In case of emergency, always call your local emergency services first.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
