import axios from 'axios';

class EmergencyService {
  constructor() {
    this.apiBaseUrl = process.env.REACT_APP_EMERGENCY_API_URL || 'https://api.example.com/emergency';
    this.apiKey = process.env.REACT_APP_EMERGENCY_API_KEY;
    this.contacts = JSON.parse(localStorage.getItem('emergencyContacts')) || [];
  }

  // Emergency contacts management
  async addEmergencyContact(contact) {
    try {
      const response = await axios.post(`${this.apiBaseUrl}/contacts`, contact, {
        headers: { 'Authorization': `Bearer ${this.apiKey}` }
      });
      this.contacts.push(response.data);
      localStorage.setItem('emergencyContacts', JSON.stringify(this.contacts));
      return response.data;
    } catch (error) {
      console.error('Error adding emergency contact:', error);
      // Add to local storage even if API fails
      this.contacts.push(contact);
      localStorage.setItem('emergencyContacts', JSON.stringify(this.contacts));
      return contact;
    }
  }

  getEmergencyContacts() {
    return this.contacts;
  }

  // SOS Alert System
  async sendSOSAlert(location, emergencyType) {
    const contacts = this.getEmergencyContacts();
    const alerts = [];

    // Send SMS alerts
    for (const contact of contacts) {
      try {
        const alert = await axios.post(`${this.apiBaseUrl}/sos/sms`, {
          to: contact.phone,
          location,
          emergencyType,
          message: `EMERGENCY: ${contact.name}, I need help! My location: https://maps.google.com/?q=${location.lat},${location.lng}`
        }, {
          headers: { 'Authorization': `Bearer ${this.apiKey}` }
        });
        alerts.push(alert.data);
      } catch (error) {
        console.error(`Error sending SOS to ${contact.name}:`, error);
      }
    }

    // Notify nearby emergency services
    try {
      await axios.post(`${this.apiBaseUrl}/sos/emergency-services`, {
        location,
        emergencyType,
      }, {
        headers: { 'Authorization': `Bearer ${this.apiKey}` }
      });
    } catch (error) {
      console.error('Error notifying emergency services:', error);
    }

    return alerts;
  }

  // Blood bank status
  async getBloodBankStatus(hospitalId) {
    try {
      const response = await axios.get(`${this.apiBaseUrl}/blood-bank/${hospitalId}`, {
        headers: { 'Authorization': `Bearer ${this.apiKey}` }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching blood bank status:', error);
      return this.getCachedBloodBankStatus(hospitalId);
    }
  }

  getCachedBloodBankStatus(hospitalId) {
    return {
      'A+': { available: 15, required: 0 },
      'A-': { available: 8, required: 2 },
      'B+': { available: 20, required: 0 },
      'B-': { available: 5, required: 1 },
      'AB+': { available: 12, required: 0 },
      'AB-': { available: 3, required: 0 },
      'O+': { available: 25, required: 3 },
      'O-': { available: 10, required: 2 },
    };
  }

  // Ambulance tracking
  async trackAmbulance(ambulanceId) {
    try {
      const response = await axios.get(`${this.apiBaseUrl}/ambulance/${ambulanceId}/location`, {
        headers: { 'Authorization': `Bearer ${this.apiKey}` }
      });
      return response.data;
    } catch (error) {
      console.error('Error tracking ambulance:', error);
      return null;
    }
  }

  // Subscribe to ambulance location updates
  subscribeToAmbulanceUpdates(ambulanceId, callback) {
    const ws = new WebSocket(`${this.apiBaseUrl.replace('http', 'ws')}/ambulance/${ambulanceId}/track`);
    
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      callback(data);
    };

    return () => ws.close();
  }

  // Get on-duty doctors
  async getOnDutyDoctors(hospitalId) {
    try {
      const response = await axios.get(`${this.apiBaseUrl}/hospital/${hospitalId}/doctors`, {
        headers: { 'Authorization': `Bearer ${this.apiKey}` }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching on-duty doctors:', error);
      return this.getCachedDoctorsList(hospitalId);
    }
  }

  getCachedDoctorsList(hospitalId) {
    return [
      {
        id: 1,
        name: "Dr. Sarah Johnson",
        specialty: "Emergency Medicine",
        onDuty: true,
        available: true,
        experience: "15 years",
        languages: ["English", "Hindi"],
      },
      {
        id: 2,
        name: "Dr. Rajesh Kumar",
        specialty: "Trauma Surgery",
        onDuty: true,
        available: true,
        experience: "12 years",
        languages: ["English", "Hindi", "Kannada"],
      },
      // Add more doctors
    ];
  }

  // Hospital reviews
  async getHospitalReviews(hospitalId) {
    try {
      const response = await axios.get(`${this.apiBaseUrl}/hospital/${hospitalId}/reviews`, {
        headers: { 'Authorization': `Bearer ${this.apiKey}` }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching hospital reviews:', error);
      return this.getCachedReviews(hospitalId);
    }
  }

  async addHospitalReview(hospitalId, review) {
    try {
      const response = await axios.post(`${this.apiBaseUrl}/hospital/${hospitalId}/reviews`, review, {
        headers: { 'Authorization': `Bearer ${this.apiKey}` }
      });
      return response.data;
    } catch (error) {
      console.error('Error adding hospital review:', error);
      throw error;
    }
  }

  getCachedReviews(hospitalId) {
    return [
      {
        id: 1,
        rating: 4.5,
        comment: "Excellent emergency care. Quick response time.",
        date: "2024-01-15",
        verified: true,
      },
      {
        id: 2,
        rating: 4.0,
        comment: "Good facilities but waiting time could be improved.",
        date: "2024-01-10",
        verified: true,
      },
      // Add more reviews
    ];
  }
}

export const emergencyService = new EmergencyService();
