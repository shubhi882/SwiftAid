import axios from 'axios';

class HospitalService {
  constructor() {
    // Initialize with your preferred hospital data API
    this.apiBaseUrl = process.env.REACT_APP_HOSPITAL_API_URL || 'https://api.example.com/hospitals';
    this.apiKey = process.env.REACT_APP_HOSPITAL_API_KEY;
  }

  // Get hospitals near a location
  async getNearbyHospitals(latitude, longitude, radius = 5) {
    try {
      const response = await axios.get(`${this.apiBaseUrl}/nearby`, {
        params: {
          lat: latitude,
          lng: longitude,
          radius, // in kilometers
        },
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching nearby hospitals:', error);
      // Return cached data if available
      return this.getCachedHospitals();
    }
  }

  // Get real-time bed availability
  async getBedAvailability(hospitalId) {
    try {
      const response = await axios.get(`${this.apiBaseUrl}/beds/${hospitalId}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching bed availability:', error);
      return null;
    }
  }

  // Get cached hospital data for offline use
  getCachedHospitals() {
    return [
      {
        id: 1,
        name: "City General Hospital",
        location: {
          latitude: 12.9716,
          longitude: 77.5946,
          address: "123 Hospital Road, City Center",
        },
        contact: {
          phone: "108",
          emergency: "1800-102-108",
          ambulance: ["108", "1800-102-108"],
        },
        facilities: {
          beds: {
            total: 200,
            available: 15,
            icu: {
              total: 20,
              available: 5,
            },
            ventilator: {
              total: 10,
              available: 2,
            },
          },
          specialties: ["Trauma Care", "Emergency Surgery", "ICU"],
          emergency24x7: true,
        },
      },
      // Add more cached hospital data
    ];
  }

  // Subscribe to real-time bed availability updates
  subscribeToBedUpdates(hospitalId, callback) {
    // Implement WebSocket or polling mechanism here
    const interval = setInterval(async () => {
      const data = await this.getBedAvailability(hospitalId);
      if (data) {
        callback(data);
      }
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }

  // Get emergency contact numbers for a region
  async getEmergencyContacts(region) {
    try {
      const response = await axios.get(`${this.apiBaseUrl}/emergency-contacts`, {
        params: { region },
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching emergency contacts:', error);
      return this.getCachedEmergencyContacts();
    }
  }

  // Get cached emergency contacts
  getCachedEmergencyContacts() {
    return {
      ambulance: "108",
      police: "100",
      fire: "101",
      disaster: "112",
      women: "1091",
      childHelp: "1098",
    };
  }

  // Calculate ETA to hospital based on mode of transport
  async calculateETA(origin, destination, mode) {
    try {
      const response = await axios.get(`${this.apiBaseUrl}/directions`, {
        params: {
          origin: `${origin.lat},${origin.lng}`,
          destination: `${destination.lat},${destination.lng}`,
          mode,
        },
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error calculating ETA:', error);
      return null;
    }
  }
}

export const hospitalService = new HospitalService();
