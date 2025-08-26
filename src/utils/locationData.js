// Location data structure for India
export const locationData = {
    "Tamil Nadu": {
        districts: {
            "Chennai": ["T Nagar", "Adyar", "Anna Nagar", "Mylapore", "Velachery"],
            "Coimbatore": ["RS Puram", "Peelamedu", "Gandhipuram", "Saibaba Colony"],
            "Madurai": ["Anna Nagar", "K.K. Nagar", "Gomathipuram", "Villapuram"]
        }
    },
    "Karnataka": {
        districts: {
            "Bangalore": ["Koramangala", "Indiranagar", "Jayanagar", "Whitefield", "HSR Layout"],
            "Mysore": ["Vijayanagar", "Gokulam", "Kuvempunagar", "Saraswathipuram"],
            "Mangalore": ["City Centre", "Bejai", "Kadri", "Mangaladevi"]
        }
    },
    "Maharashtra": {
        districts: {
            "Mumbai": ["Andheri", "Bandra", "Colaba", "Dadar", "Juhu"],
            "Pune": ["Koregaon Park", "Kothrud", "Hadapsar", "Hinjewadi"],
            "Nagpur": ["Dharampeth", "Sadar", "Sitabuldi", "Civil Lines"]
        }
    }
};

// Get list of all states
export const getStates = () => Object.keys(locationData);

// Get districts for a state
export const getDistricts = (state) => {
    return state ? Object.keys(locationData[state]?.districts || {}) : [];
};

// Get areas for a district in a state
export const getAreas = (state, district) => {
    return (state && district) ? (locationData[state]?.districts[district] || []) : [];
};
