import React, { useState, useEffect } from 'react';
import {
    Container,
    Paper,
    Typography,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Grid,
    Card,
    CardContent,
    CardActions,
    Chip,
    Stack,
    Box,
    Alert,
    useTheme,
    CircularProgress,
    TextField,
    IconButton,
    Tooltip,
    Snackbar,
    Menu,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import MessageIcon from '@mui/icons-material/Message';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { getStates, getDistricts, getAreas, indiaLocationData } from '../data/indiaLocations';

const EmergencyDashboard = () => {
    const [selectedState, setSelectedState] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedArea, setSelectedArea] = useState('');
    const [districts, setDistricts] = useState([]);
    const [areas, setAreas] = useState([]);
    const [hospitals, setHospitals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchRadius, setSearchRadius] = useState(5000);
    const [hospitalType, setHospitalType] = useState('all');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [shareMenuAnchor, setShareMenuAnchor] = useState(null);
    const [selectedHospital, setSelectedHospital] = useState(null);
    const [stateSearch, setStateSearch] = useState('');
    const [districtSearch, setDistrictSearch] = useState('');
    const [areaSearch, setAreaSearch] = useState('');

    const theme = useTheme();

    const hospitalTypes = [
        { value: 'all', label: 'All Hospitals' },
        { value: 'hospital', label: 'General Hospital' },
        { value: 'clinic', label: 'Clinic' },
        { value: 'emergency', label: 'Emergency Care' },
        { value: 'specialty', label: 'Specialty Hospital' },
        { value: 'childrens', label: "Children's Hospital" },
        { value: 'maternity', label: 'Maternity Hospital' },
        { value: 'cardiac', label: 'Cardiac Hospital' },
        { value: 'cancer', label: 'Cancer Hospital' },
        { value: 'ortho', label: 'Orthopedic Hospital' },
        { value: 'eye', label: 'Eye Hospital' },
        { value: 'dental', label: 'Dental Hospital' },
        { value: 'mental', label: 'Mental Health Hospital' },
        { value: 'ayurveda', label: 'Ayurvedic Hospital' }
    ];

    const radiusOptions = [
        { value: 2000, label: '2 km' },
        { value: 5000, label: '5 km' },
        { value: 10000, label: '10 km' },
        { value: 15000, label: '15 km' },
        { value: 20000, label: '20 km' }
    ];

    // Update districts when state changes
    useEffect(() => {
        if (selectedState) {
            const districtsList = getDistricts(selectedState);
            setDistricts(districtsList);
            setSelectedDistrict('');
            setSelectedArea('');
            setAreas([]);
        }
    }, [selectedState]);

    // Update areas when district changes
    useEffect(() => {
        if (selectedState && selectedDistrict) {
            const areasList = getAreas(selectedState, selectedDistrict);
            setAreas(areasList);
            setSelectedArea('');
        }
    }, [selectedDistrict, selectedState]);

    const searchHospitals = async () => {
        setLoading(true);
        setError(null);
        try {
            // Verify if the selected location exists in our data
            const stateData = indiaLocationData[selectedState];
            if (!stateData || !stateData.districts[selectedDistrict]) {
                throw new Error('Invalid state or district selection');
            }

            const areas = stateData.districts[selectedDistrict];
            if (!areas.includes(selectedArea)) {
                throw new Error('Selected area not found in our database');
            }

            // First get the area boundary
            const areaQuery = `${selectedArea}, ${selectedDistrict}, ${selectedState}, India`;
            console.log('Searching for area boundary:', areaQuery);
            
            const nominatimResponse = await fetch(
                `https://nominatim.openstreetmap.org/search?` + 
                new URLSearchParams({
                    q: areaQuery,
                    format: 'json',
                    countrycodes: 'in',
                    limit: 1,
                    addressdetails: 1,
                    'accept-language': 'en'
                }), {
                    headers: {
                        'User-Agent': 'InstAid Emergency Search'
                    }
                }
            );

            if (!nominatimResponse.ok) {
                throw new Error('Location service temporarily unavailable');
            }

            const results = await nominatimResponse.json();
            if (!results || results.length === 0) {
                throw new Error('Unable to find the selected area');
            }

            const locationData = results[0];
            const { lat, lon } = locationData;

            // Build Overpass query based on hospital type
            let amenityQuery = '';
            if (hospitalType === 'all') {
                amenityQuery = `["amenity"~"hospital|clinic"]`;
            } else if (hospitalType === 'clinic') {
                amenityQuery = `["amenity"="clinic"]`;
            } else if (hospitalType === 'emergency') {
                amenityQuery = `["amenity"="hospital"]["emergency"="yes"]`;
            } else if (hospitalType === 'specialty') {
                amenityQuery = `["amenity"="hospital"]["healthcare:speciality"~".*"]`;
            } else {
                amenityQuery = `["amenity"="hospital"]["healthcare:speciality"~"${hospitalType}"]`;
            }

            const overpassQuery = `
                [out:json][timeout:25];
                (
                    node${amenityQuery}(around:${searchRadius},${lat},${lon});
                    way${amenityQuery}(around:${searchRadius},${lat},${lon});
                    relation${amenityQuery}(around:${searchRadius},${lat},${lon});
                );
                out body;
                >;
                out skel qt;
            `;

            const overpassResponse = await fetch('https://overpass-api.de/api/interpreter', {
                method: 'POST',
                body: overpassQuery,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            if (!overpassResponse.ok) {
                throw new Error('Hospital search service temporarily unavailable');
            }

            const osmData = await overpassResponse.json();
            if (!osmData.elements || osmData.elements.length === 0) {
                throw new Error(`No ${hospitalType === 'all' ? 'hospitals' : hospitalTypes.find(t => t.value === hospitalType)?.label} found in ${selectedArea}`);
            }

            // Process hospital data with type information
            const foundHospitals = osmData.elements
                .filter(element => element.tags)
                .map(element => {
                    const tags = element.tags || {};
                    const type = tags.amenity === 'clinic' ? 'clinic' : 'hospital';
                    const specialties = [];
                    
                    // Extract specialties from various tags
                    if (tags['healthcare:speciality']) {
                        specialties.push(...tags['healthcare:speciality'].split(';').map(s => s.trim()));
                    }
                    if (tags.healthcare) {
                        specialties.push(...tags.healthcare.split(';').map(s => s.trim()));
                    }
                    if (tags.medical_system) {
                        specialties.push(tags.medical_system);
                    }
                    
                    return {
                        id: element.id,
                        name: tags.name || tags['name:en'] || 'Unnamed Hospital',
                        type: type,
                        specialties: specialties,
                        address: tags['addr:full'] || `${tags['addr:street'] || ''} ${tags['addr:housenumber'] || ''}`.trim() || `${selectedArea}, ${selectedDistrict}`,
                        phone: tags.phone || tags['contact:phone'],
                        emergency: tags.emergency === 'yes',
                        openNow: tags.opening_hours === '24/7',
                        lat: element.lat || element.center?.lat,
                        lon: element.lon || element.center?.lon
                    };
                })
                .filter(hospital => {
                    if (hospitalType === 'all') return true;
                    if (hospitalType === 'clinic') return hospital.type === 'clinic';
                    if (hospitalType === 'emergency') return hospital.emergency;
                    if (hospitalType === 'specialty') return hospital.specialties.length > 0;
                    return hospital.specialties.some(s => 
                        s.toLowerCase().includes(hospitalType) || 
                        hospitalType.includes(s.toLowerCase())
                    );
                });

            setHospitals(foundHospitals);

        } catch (error) {
            console.error('Search error:', error);
            setError(error.message || 'Failed to find hospitals. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const openDirections = (hospital) => {
        const url = `https://www.google.com/maps/dir/?api=1&destination=${hospital.lat},${hospital.lon}`;
        window.open(url, '_blank');
    };

    const states = getStates().sort();
    const filteredStates = states.filter(state => 
        state.toLowerCase().includes(stateSearch.toLowerCase())
    );

    const sortedDistricts = districts.sort();
    const filteredDistricts = sortedDistricts.filter(district => 
        district.toLowerCase().includes(districtSearch.toLowerCase())
    );

    const sortedAreas = areas.sort();
    const filteredAreas = sortedAreas.filter(area => 
        area.toLowerCase().includes(areaSearch.toLowerCase())
    );

    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
    };

    const handleDistrictChange = (e) => {
        setSelectedDistrict(e.target.value);
    };

    const handleAreaChange = (e) => {
        setSelectedArea(e.target.value);
    };

    const handleHospitalTypeChange = (e) => {
        setHospitalType(e.target.value);
    };

    const handleSnackbar = (message) => {
        setSnackbarMessage(message);
        setSnackbarOpen(true);
    };

    const shareHospitalDetails = () => {
        if (navigator.geolocation) {
            handleSnackbar('Getting your location...');
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    const mapsUrl = `https://www.google.com/maps/search/hospitals/@${latitude},${longitude},14z`;
                    const shareText = `Nearby Hospitals:\nFind hospitals near you: ${mapsUrl}`;
                    
                    navigator.clipboard.writeText(shareText).then(() => {
                        handleSnackbar('Hospital location link copied! You can now share it.');
                    });
                },
                () => {
                    handleSnackbar('Could not access location. Please enable location services.');
                }
            );
        } else {
            handleSnackbar('Geolocation is not supported by your browser');
        }
    };

    const handleShareClick = (event, hospital) => {
        setSelectedHospital(hospital);
        setShareMenuAnchor(event.currentTarget);
    };

    const handleShareClose = () => {
        setShareMenuAnchor(null);
        setSelectedHospital(null);
    };

    const getShareText = (hospital) => {
        return `${hospital.name}\nAddress: ${hospital.address}\nPhone: ${hospital.phone}\nGoogle Maps: https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hospital.name + ' ' + hospital.address)}`;
    };

    const handleShare = (platform) => {
        if (!selectedHospital) return;
        
        const text = getShareText(selectedHospital);
        const encodedText = encodeURIComponent(text);
        
        let url = '';
        switch (platform) {
            case 'whatsapp':
                url = `https://wa.me/?text=${encodedText}`;
                break;
            case 'facebook':
                url = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}&quote=${encodedText}`;
                break;
            case 'twitter':
                url = `https://twitter.com/intent/tweet?text=${encodedText}`;
                break;
            case 'telegram':
                url = `https://t.me/share/url?url=${window.location.href}&text=${encodedText}`;
                break;
            case 'instagram':
                navigator.clipboard.writeText(text).then(() => {
                    setSnackbarMessage('Content copied! You can now share it on Instagram');
                    setSnackbarOpen(true);
                    window.open('https://instagram.com', '_blank');
                });
                break;
            case 'sms':
                url = `sms:?body=${encodedText}`;
                break;
            case 'copy':
                navigator.clipboard.writeText(text).then(() => {
                    setSnackbarMessage('Hospital details copied to clipboard!');
                    setSnackbarOpen(true);
                });
                break;
        }
        
        if (url) {
            window.open(url, '_blank');
        }
        
        handleShareClose();
    };

    return (
        <Container maxWidth="lg" sx={{ 
            py: { xs: 2, sm: 4, md: 6 },
            px: { xs: 2, sm: 3, md: 4 }
        }}>
            {/* Header Section */}
            <Box sx={{ 
                textAlign: 'center',
                mb: { xs: 2, sm: 3, md: 4 },
                backgroundColor: '#e74c3c',
                py: { xs: 3, sm: 4, md: 5 },
                px: { xs: 2, sm: 3 },
                borderRadius: { xs: 1, sm: 2 },
                color: 'white',
                position: 'relative'
            }}>
                <Typography 
                    variant="h3" 
                    component="h1" 
                    sx={{ 
                        fontWeight: 600, 
                        mb: 1,
                        fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' }
                    }}
                >
                    Emergency Dashboard
                </Typography>
                <Typography sx={{ 
                    fontSize: { xs: '1rem', sm: '1.125rem' },
                    maxWidth: '600px',
                    mx: 'auto'
                }}>
                    Find nearby hospitals and emergency care centers in your area
                </Typography>
            </Box>

            {/* Search Form */}
            <Paper 
                elevation={0}
                sx={{ 
                    p: { xs: 2, sm: 3, md: 4 },
                    mb: { xs: 3, sm: 4 },
                    borderRadius: { xs: 1, sm: 2 },
                    border: '1px solid',
                    borderColor: 'divider'
                }}
            >
                <Grid container spacing={{ xs: 2, sm: 3 }}>
                    <Grid item xs={12} sm={6} md={3}>
                        <FormControl fullWidth>
                            <InputLabel>State</InputLabel>
                            <Select
                                value={selectedState}
                                label="State"
                                onChange={handleStateChange}
                                sx={{ 
                                    borderRadius: { xs: '6px', sm: '8px' },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'divider'
                                    }
                                }}
                                MenuProps={{
                                    PaperProps: {
                                        sx: {
                                            maxHeight: { xs: '40vh', sm: '50vh' },
                                            width: { xs: '85vw', sm: 'auto' }
                                        }
                                    }
                                }}
                            >
                                <MenuItem>
                                    <TextField
                                        size="small"
                                        placeholder="Search states..."
                                        value={stateSearch}
                                        onChange={(e) => {
                                            e.stopPropagation();
                                            setStateSearch(e.target.value);
                                        }}
                                        onClick={(e) => e.stopPropagation()}
                                        fullWidth
                                        variant="standard"
                                        sx={{ mb: 1 }}
                                    />
                                </MenuItem>
                                {filteredStates.map(state => (
                                    <MenuItem key={state} value={state}>{state}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <FormControl fullWidth>
                            <InputLabel>District</InputLabel>
                            <Select
                                value={selectedDistrict}
                                label="District"
                                onChange={handleDistrictChange}
                                disabled={!selectedState}
                                sx={{ 
                                    borderRadius: { xs: '6px', sm: '8px' },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'divider'
                                    }
                                }}
                                MenuProps={{
                                    PaperProps: {
                                        sx: {
                                            maxHeight: { xs: '40vh', sm: '50vh' },
                                            width: { xs: '85vw', sm: 'auto' }
                                        }
                                    }
                                }}
                            >
                                <MenuItem>
                                    <TextField
                                        size="small"
                                        placeholder="Search districts..."
                                        value={districtSearch}
                                        onChange={(e) => {
                                            e.stopPropagation();
                                            setDistrictSearch(e.target.value);
                                        }}
                                        onClick={(e) => e.stopPropagation()}
                                        fullWidth
                                        variant="standard"
                                        sx={{ mb: 1 }}
                                    />
                                </MenuItem>
                                {filteredDistricts.map(district => (
                                    <MenuItem key={district} value={district}>{district}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <FormControl fullWidth>
                            <InputLabel>Area</InputLabel>
                            <Select
                                value={selectedArea}
                                label="Area"
                                onChange={handleAreaChange}
                                disabled={!selectedDistrict}
                                sx={{ 
                                    borderRadius: { xs: '6px', sm: '8px' },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'divider'
                                    }
                                }}
                                MenuProps={{
                                    PaperProps: {
                                        sx: {
                                            maxHeight: { xs: '40vh', sm: '50vh' },
                                            width: { xs: '85vw', sm: 'auto' }
                                        }
                                    }
                                }}
                            >
                                <MenuItem>
                                    <TextField
                                        size="small"
                                        placeholder="Search areas..."
                                        value={areaSearch}
                                        onChange={(e) => {
                                            e.stopPropagation();
                                            setAreaSearch(e.target.value);
                                        }}
                                        onClick={(e) => e.stopPropagation()}
                                        fullWidth
                                        variant="standard"
                                        sx={{ mb: 1 }}
                                    />
                                </MenuItem>
                                {filteredAreas.map(area => (
                                    <MenuItem key={area} value={area}>{area}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <FormControl fullWidth>
                            <InputLabel>Hospital Type</InputLabel>
                            <Select
                                value={hospitalType}
                                label="Hospital Type"
                                onChange={handleHospitalTypeChange}
                                sx={{ 
                                    borderRadius: { xs: '6px', sm: '8px' },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'divider'
                                    }
                                }}
                                MenuProps={{
                                    PaperProps: {
                                        sx: {
                                            maxHeight: { xs: '40vh', sm: '50vh' },
                                            width: { xs: '85vw', sm: 'auto' }
                                        }
                                    }
                                }}
                            >
                                {hospitalTypes.map(type => (
                                    <MenuItem key={type.value} value={type.value}>{type.label}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <FormControl fullWidth>
                            <InputLabel>Search Radius</InputLabel>
                            <Select
                                value={searchRadius}
                                label="Search Radius"
                                onChange={(e) => setSearchRadius(e.target.value)}
                                sx={{ 
                                    borderRadius: { xs: '6px', sm: '8px' },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'divider'
                                    }
                                }}
                                MenuProps={{
                                    PaperProps: {
                                        sx: {
                                            maxHeight: { xs: '40vh', sm: '50vh' },
                                            width: { xs: '85vw', sm: 'auto' }
                                        }
                                    }
                                }}
                            >
                                {radiusOptions.map(option => (
                                    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="error"
                            onClick={searchHospitals}
                            disabled={!selectedArea || loading}
                            startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SearchIcon />}
                            sx={{ 
                                height: '56px',
                                borderRadius: { xs: '8px', sm: '12px' },
                                textTransform: 'none',
                                fontSize: '1rem',
                                boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
                                '&:hover': {
                                    transform: 'translateY(-1px)',
                                    boxShadow: '0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08)',
                                },
                                transition: 'all 0.2s ease'
                            }}
                        >
                            {loading ? 'Searching...' : 'Search Hospitals'}
                        </Button>
                    </Grid>
                </Grid>
            </Paper>

            {/* Results Section */}
            {error && (
                <Alert 
                    severity="error" 
                    sx={{ 
                        mb: { xs: 2, sm: 3 },
                        borderRadius: { xs: 1, sm: 2 },
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}
                >
                    {error}
                </Alert>
            )}

            <Grid container spacing={{ xs: 2, sm: 3 }}>
                {hospitals.map(hospital => (
                    <Grid item xs={12} sm={6} lg={4} key={hospital.id}>
                        <Card 
                            elevation={0}
                            sx={{ 
                                height: '100%',
                                borderRadius: { xs: '12px', sm: '16px' },
                                border: '1px solid',
                                borderColor: 'divider',
                                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                '&:hover': {
                                    transform: { sm: 'translateY(-4px)' },
                                    boxShadow: { sm: '0 12px 24px rgba(0,0,0,0.1)' }
                                }
                            }}
                        >
                            <CardContent sx={{ 
                                p: { xs: 2, sm: 3 },
                                '&:last-child': { pb: { xs: 2, sm: 3 } }
                            }}>
                                <Box sx={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    mb: { xs: 1.5, sm: 2 },
                                    gap: 1
                                }}>
                                    <LocalHospitalIcon color="error" />
                                    <Typography 
                                        variant="h6" 
                                        component="h2" 
                                        sx={{ 
                                            fontWeight: 600,
                                            fontSize: { xs: '1rem', sm: '1.25rem' }
                                        }}
                                    >
                                        {hospital.name}
                                    </Typography>
                                </Box>

                                <Stack spacing={{ xs: 1.5, sm: 2 }}>
                                    <Box sx={{ display: 'flex', gap: 1 }}>
                                        <LocationOnIcon 
                                            color="action" 
                                            sx={{ 
                                                mt: 0.5,
                                                fontSize: { xs: '1.25rem', sm: '1.5rem' }
                                            }} 
                                        />
                                        <Typography 
                                            variant="body2" 
                                            color="text.secondary"
                                            sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
                                        >
                                            {hospital.address}
                                        </Typography>
                                    </Box>

                                    {hospital.phone && (
                                        <Box sx={{ display: 'flex', gap: 1 }}>
                                            <PhoneIcon 
                                                color="action" 
                                                sx={{ 
                                                    mt: 0.5,
                                                    fontSize: { xs: '1.25rem', sm: '1.5rem' }
                                                }} 
                                            />
                                            <Typography 
                                                variant="body2"
                                                sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
                                            >
                                                {hospital.phone}
                                            </Typography>
                                        </Box>
                                    )}

                                    <Stack 
                                        direction="row" 
                                        spacing={{ xs: 0.5, sm: 1 }} 
                                        flexWrap="wrap" 
                                        useFlexGap 
                                        sx={{ gap: { xs: 0.5, sm: 1 } }}
                                    >
                                        {hospital.emergency && (
                                            <Chip 
                                                label="24/7 Emergency" 
                                                color="error" 
                                                size="small"
                                                sx={{ 
                                                    borderRadius: { xs: '4px', sm: '6px' },
                                                    height: { xs: '24px', sm: '32px' }
                                                }}
                                            />
                                        )}
                                        {hospital.openNow && (
                                            <Chip 
                                                label="Open Now" 
                                                color="success" 
                                                size="small"
                                                sx={{ 
                                                    borderRadius: { xs: '4px', sm: '6px' },
                                                    height: { xs: '24px', sm: '32px' }
                                                }}
                                            />
                                        )}
                                        {hospital.specialties.map(specialty => (
                                            <Chip 
                                                key={specialty}
                                                label={specialty}
                                                variant="outlined"
                                                size="small"
                                                sx={{ 
                                                    borderRadius: { xs: '4px', sm: '6px' },
                                                    height: { xs: '24px', sm: '32px' }
                                                }}
                                            />
                                        ))}
                                    </Stack>
                                </Stack>
                            </CardContent>
                            <CardActions 
                                sx={{ 
                                    mt: 'auto', 
                                    pt: { xs: 1.5, sm: 2 },
                                    px: { xs: 2, sm: 3 },
                                    pb: { xs: 2, sm: 3 },
                                    borderTop: '1px solid',
                                    borderColor: 'divider',
                                    flexWrap: 'wrap',
                                    gap: { xs: 1, sm: 1.5 }
                                }}
                            >
                                <Button 
                                    startIcon={<DirectionsIcon />}
                                    onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${hospital.lat},${hospital.lon}`)}
                                    size="small"
                                >
                                    Directions
                                </Button>
                                <Button 
                                    startIcon={<PhoneIcon />}
                                    onClick={() => window.location.href = `tel:${hospital.phone}`}
                                    size="small"
                                >
                                    Call
                                </Button>
                                <Box sx={{ 
                                    display: 'flex', 
                                    gap: { xs: 0.5, sm: 1 }, 
                                    ml: 'auto',
                                    mt: { xs: 1, sm: 0 }
                                }}>
                                    {/* Social Media Buttons */}
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Menu
                anchorEl={shareMenuAnchor}
                open={Boolean(shareMenuAnchor)}
                onClose={handleShareClose}
                PaperProps={{
                    elevation: 3,
                    sx: {
                        mt: 1.5,
                        borderRadius: 2,
                        minWidth: 200
                    }
                }}
            >
                <MenuItem onClick={() => handleShare('whatsapp')}>
                    <ListItemIcon>
                        <WhatsAppIcon sx={{ color: '#25D366' }} />
                    </ListItemIcon>
                    <ListItemText>WhatsApp</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => handleShare('telegram')}>
                    <ListItemIcon>
                        <TelegramIcon sx={{ color: '#0088cc' }} />
                    </ListItemIcon>
                    <ListItemText>Telegram</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => handleShare('facebook')}>
                    <ListItemIcon>
                        <FacebookIcon sx={{ color: '#1877F2' }} />
                    </ListItemIcon>
                    <ListItemText>Facebook</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => handleShare('twitter')}>
                    <ListItemIcon>
                        <TwitterIcon sx={{ color: '#1DA1F2' }} />
                    </ListItemIcon>
                    <ListItemText>Twitter</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => handleShare('instagram')}>
                    <ListItemIcon>
                        <InstagramIcon sx={{ color: '#E4405F' }} />
                    </ListItemIcon>
                    <ListItemText>Instagram</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => handleShare('sms')}>
                    <ListItemIcon>
                        <MessageIcon sx={{ color: '#34B7F1' }} />
                    </ListItemIcon>
                    <ListItemText>Message</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => handleShare('copy')}>
                    <ListItemIcon>
                        <ContentCopyIcon sx={{ color: '#e74c3c' }} />
                    </ListItemIcon>
                    <ListItemText>Copy to Clipboard</ListItemText>
                </MenuItem>
            </Menu>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={() => setSnackbarOpen(false)}
                message={snackbarMessage}
                anchorOrigin={{ 
                    vertical: 'bottom', 
                    horizontal: 'center' 
                }}
                sx={{
                    bottom: { xs: 16, sm: 24 }
                }}
            />
        </Container>
    );
};

export default EmergencyDashboard;
