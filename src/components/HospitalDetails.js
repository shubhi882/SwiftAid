import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Tabs,
  Tab,
  Box,
  Typography,
  Avatar,
  Chip,
  Grid,
  Rating,
  TextField,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  LinearProgress,
  Alert,
} from '@mui/material';
import {
  LocalHospital,
  Person,
  Bloodtype,
  Star,
  Language,
  AccessTime,
  Verified,
} from '@mui/icons-material';
import { emergencyService } from '../services/emergencyService';

const TabPanel = React.memo(({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`hospital-tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
});

const HospitalDetails = React.memo(({ open, onClose, hospital }) => {
  const [tabValue, setTabValue] = useState(0);
  const [bloodBank, setBloodBank] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newReview, setNewReview] = useState({ rating: 0, comment: '' });

  const loadHospitalData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [bloodBankData, doctorsData, reviewsData] = await Promise.all([
        emergencyService.getBloodBankStatus(hospital?.id),
        emergencyService.getOnDutyDoctors(hospital?.id),
        emergencyService.getHospitalReviews(hospital?.id),
      ]);

      setBloodBank(bloodBankData);
      setDoctors(doctorsData);
      setReviews(reviewsData);
    } catch (err) {
      setError('Failed to load hospital details');
    }
    setLoading(false);
  }, [hospital?.id]);

  useEffect(() => {
    if (open && hospital) {
      loadHospitalData();
    }
  }, [open, hospital, loadHospitalData]);

  const handleSubmitReview = useCallback(async () => {
    try {
      await emergencyService.addHospitalReview(hospital?.id, newReview);
      setReviews(prevReviews => [...prevReviews, { ...newReview, date: new Date().toISOString(), verified: true }]);
      setNewReview({ rating: 0, comment: '' });
    } catch (err) {
      setError('Failed to submit review');
    }
  }, [hospital?.id, newReview]);

  const renderBloodBank = useMemo(() => (
    <Grid container spacing={2}>
      {bloodBank && Object.entries(bloodBank).map(([type, data]) => (
        <Grid item xs={6} sm={3} key={type}>
          <Box
            sx={{
              p: 2,
              border: 1,
              borderColor: 'divider',
              borderRadius: 1,
              textAlign: 'center',
            }}
          >
            <Typography variant="h6" color="error">
              {type}
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="center" mb={1}>
              <Bloodtype color="error" sx={{ mr: 1 }} />
              <Typography>
                {data.available} units
              </Typography>
            </Box>
            {data.required > 0 && (
              <Chip
                label={`${data.required} units needed`}
                color="warning"
                size="small"
              />
            )}
          </Box>
        </Grid>
      ))}
    </Grid>
  ), [bloodBank]);

  const renderDoctors = useMemo(() => (
    <List>
      {doctors.map((doctor) => (
        <ListItem key={doctor.id}>
          <ListItemAvatar>
            <Avatar>
              <Person />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Box display="flex" alignItems="center">
                {doctor.name}
                {doctor.onDuty && (
                  <Chip
                    label="On Duty"
                    color="success"
                    size="small"
                    sx={{ ml: 1 }}
                  />
                )}
              </Box>
            }
            secondary={
              <>
                <Typography variant="body2" color="text.secondary">
                  {doctor.specialty} • {doctor.experience}
                </Typography>
                <Box display="flex" gap={1} mt={0.5}>
                  {doctor.languages.map((lang) => (
                    <Chip
                      key={lang}
                      icon={<Language />}
                      label={lang}
                      size="small"
                      variant="outlined"
                    />
                  ))}
                </Box>
              </>
            }
          />
        </ListItem>
      ))}
    </List>
  ), [doctors]);

  const renderReviews = useMemo(() => (
    <Box>
      <List>
        {reviews.map((review, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={
                <Box display="flex" alignItems="center">
                  <Rating value={review.rating} readOnly size="small" />
                  {review.verified && (
                    <Chip
                      icon={<Verified />}
                      label="Verified"
                      size="small"
                      color="primary"
                      sx={{ ml: 1 }}
                    />
                  )}
                </Box>
              }
              secondary={
                <>
                  <Typography variant="body2">{review.comment}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    <AccessTime sx={{ fontSize: 12, mr: 0.5 }} />
                    {new Date(review.date).toLocaleDateString()}
                  </Typography>
                </>
              }
            />
          </ListItem>
        ))}
      </List>

      <Box sx={{ mt: 3, p: 2, bgcolor: 'background.paper' }}>
        <Typography variant="subtitle1" gutterBottom>
          Write a Review
        </Typography>
        <Rating
          value={newReview.rating}
          onChange={(_, value) => setNewReview({ ...newReview, rating: value })}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          multiline
          rows={3}
          label="Your Review"
          value={newReview.comment}
          onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
          sx={{ mb: 2 }}
        />
        <Button
          variant="contained"
          onClick={handleSubmitReview}
          disabled={!newReview.rating || !newReview.comment}
        >
          Submit Review
        </Button>
      </Box>
    </Box>
  ), [reviews, newReview, handleSubmitReview]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      scroll="paper"
    >
      <DialogTitle>
        <Box display="flex" alignItems="center">
          <LocalHospital color="primary" sx={{ mr: 1 }} />
          {hospital?.name}
        </Box>
      </DialogTitle>

      <DialogContent>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {loading ? (
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        ) : (
          <>
            <Tabs
              value={tabValue}
              onChange={(_, newValue) => setTabValue(newValue)}
              variant="fullWidth"
            >
              <Tab label="Blood Bank" icon={<Bloodtype />} />
              <Tab label="Doctors" icon={<Person />} />
              <Tab label="Reviews" icon={<Star />} />
            </Tabs>

            <TabPanel value={tabValue} index={0}>
              {renderBloodBank()}
            </TabPanel>

            <TabPanel value={tabValue} index={1}>
              {renderDoctors()}
            </TabPanel>

            <TabPanel value={tabValue} index={2}>
              {renderReviews()}
            </TabPanel>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
});

export default HospitalDetails;
