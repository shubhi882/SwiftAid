// Get nearby hospitals using Google Places API
export const getNearbyHospitals = async (latitude, longitude) => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&type=hospital&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
    );
    const data = await response.json();
    return data.results.map(hospital => ({
      id: hospital.place_id,
      name: hospital.name,
      address: hospital.vicinity,
      location: [hospital.geometry.location.lat, hospital.geometry.location.lng],
      rating: hospital.rating,
      open: hospital.opening_hours?.open_now,
      photos: hospital.photos,
      placeId: hospital.place_id
    }));
  } catch (error) {
    console.error('Error fetching nearby hospitals:', error);
    return [];
  }
};

// Get place details including phone number
export const getPlaceDetails = async (placeId) => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=formatted_phone_number,opening_hours,website&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
    );
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error('Error fetching place details:', error);
    return null;
  }
};

// Get navigation directions
export const getDirections = async (origin, destination, mode) => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/directions/json?origin=${origin.lat},${origin.lng}&destination=${destination[0]},${destination[1]}&mode=${mode}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
    );
    const data = await response.json();
    return data.routes[0];
  } catch (error) {
    console.error('Error fetching directions:', error);
    return null;
  }
};

// Speech synthesis for navigation
export const speakDirections = (instruction) => {
  const speech = new SpeechSynthesisUtterance(instruction);
  speech.lang = 'en-US';
  window.speechSynthesis.speak(speech);
};
