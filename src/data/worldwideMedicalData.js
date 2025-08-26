// Comprehensive worldwide medical knowledge base
export const worldwideMedicalData = {
  // Life-threatening emergencies
  emergencies: {
    cardiacArrest: {
      symptoms: ['chest pain', 'shortness of breath', 'loss of consciousness', 'no pulse', 'not breathing'],
      immediateActions: [
        'Call emergency services immediately',
        'Start CPR if trained',
        'Use AED if available',
        'Continue CPR until help arrives'
      ],
      riskFactors: ['heart disease', 'high blood pressure', 'diabetes', 'smoking', 'obesity'],
      complications: ['brain damage', 'organ failure', 'death if not treated immediately']
    },
    stroke: {
      symptoms: ['sudden numbness', 'confusion', 'difficulty speaking', 'vision problems', 'severe headache'],
      assessment: 'FAST (Face, Arms, Speech, Time)',
      immediateActions: [
        'Note time symptoms started',
        'Call emergency services',
        'Keep person still',
        'Monitor consciousness and breathing'
      ],
      riskFactors: ['high blood pressure', 'heart disease', 'diabetes', 'smoking']
    },
    anaphylaxis: {
      symptoms: ['difficulty breathing', 'swelling', 'rash', 'low blood pressure', 'rapid pulse'],
      immediateActions: [
        'Use epinephrine auto-injector if available',
        'Call emergency services',
        'Help person lie flat',
        'Monitor breathing and consciousness'
      ],
      commonTriggers: ['food allergies', 'insect stings', 'medications', 'latex']
    }
  },

  // Trauma and injuries
  trauma: {
    headInjury: {
      severity: {
        mild: ['brief confusion', 'headache', 'dizziness'],
        moderate: ['loss of consciousness < 30 min', 'repeated vomiting', 'seizures'],
        severe: ['extended loss of consciousness', 'unequal pupils', 'clear fluid from ears/nose']
      },
      monitoring: ['consciousness level', 'pupil response', 'coordination', 'memory'],
      warningSigns: ['worsening headache', 'repeated vomiting', 'unusual behavior', 'seizures']
    },
    fractures: {
      types: ['closed', 'open', 'stress', 'greenstick'],
      immediateActions: [
        'Immobilize injured area',
        'Apply ice to reduce swelling',
        'Check circulation beyond injury',
        'Seek medical attention'
      ],
      complications: ['nerve damage', 'blood vessel injury', 'infection in open fractures']
    }
  },

  // Common medical conditions
  commonConditions: {
    asthma: {
      triggers: ['allergens', 'exercise', 'cold air', 'respiratory infections'],
      symptoms: ['wheezing', 'coughing', 'chest tightness', 'shortness of breath'],
      management: [
        'Use prescribed inhalers',
        'Avoid known triggers',
        'Follow asthma action plan',
        'Monitor peak flow readings'
      ]
    },
    diabetes: {
      types: {
        type1: {
          characteristics: ['autoimmune', 'insulin-dependent', 'usually diagnosed in youth'],
          management: ['insulin therapy', 'blood sugar monitoring', 'diet control']
        },
        type2: {
          characteristics: ['insulin resistance', 'lifestyle-related', 'progressive'],
          management: ['diet modification', 'exercise', 'medication if prescribed']
        }
      },
      emergencies: {
        hypoglycemia: {
          symptoms: ['shakiness', 'confusion', 'sweating', 'weakness'],
          treatment: ['fast-acting sugar', 'glucose tablets', 'monitor blood sugar']
        },
        hyperglycemia: {
          symptoms: ['excessive thirst', 'frequent urination', 'fatigue', 'blurred vision'],
          treatment: ['insulin as prescribed', 'hydration', 'medical attention if severe']
        }
      }
    }
  },

  // Environmental emergencies
  environmental: {
    heatRelated: {
      heatExhaustion: {
        symptoms: ['heavy sweating', 'weakness', 'cold/clammy skin', 'nausea'],
        treatment: ['move to cool place', 'loosen clothing', 'sip water', 'cool compresses']
      },
      heatstroke: {
        symptoms: ['high body temperature', 'hot/dry skin', 'confusion', 'loss of consciousness'],
        treatment: ['immediate cooling', 'emergency services', 'ice packs to vital areas']
      }
    },
    coldRelated: {
      hypothermia: {
        symptoms: ['shivering', 'confusion', 'drowsiness', 'slurred speech'],
        treatment: ['move to warm area', 'remove wet clothing', 'gradual warming', 'medical attention']
      },
      frostbite: {
        symptoms: ['cold/hard skin', 'numbness', 'color changes', 'blistering'],
        treatment: ['gradual warming', 'protect affected areas', 'medical attention']
      }
    }
  },

  // Poisoning and overdose
  poisoning: {
    types: {
      ingestion: {
        actions: ['call poison control', 'do not induce vomiting unless instructed', 'save container/substance']
      },
      inhalation: {
        actions: ['fresh air immediately', 'call emergency services', 'monitor breathing']
      },
      contact: {
        actions: ['remove contaminated clothing', 'flush skin with water', 'seek medical attention']
      }
    },
    commonPoisons: {
      chemicals: ['household cleaners', 'pesticides', 'carbon monoxide'],
      medications: ['prescription drugs', 'over-the-counter medicines'],
      plants: ['toxic berries', 'poisonous mushrooms', 'common house plants']
    }
  },

  // Diagnostic criteria
  diagnosticCriteria: {
    vitalSigns: {
      normal: {
        adult: {
          temperature: '36.5-37.5°C (97.7-99.5°F)',
          heartRate: '60-100 beats/minute',
          respiratoryRate: '12-20 breaths/minute',
          bloodPressure: '90/60 - 120/80 mmHg',
          oxygenSaturation: '95-100%'
        },
        child: {
          temperature: '36.5-37.5°C (97.7-99.5°F)',
          heartRate: '70-120 beats/minute',
          respiratoryRate: '20-30 breaths/minute',
          bloodPressure: 'varies by age'
        }
      },
      concerningChanges: {
        temperature: ['> 38.3°C (101°F)', '< 35.5°C (96°F)'],
        heartRate: ['> 120 bpm', '< 50 bpm'],
        respiratoryRate: ['> 24 breaths/min', '< 8 breaths/min'],
        bloodPressure: ['systolic > 180', 'systolic < 90']
      }
    },
    neurologicalAssessment: {
      consciousness: ['Alert', 'Voice responsive', 'Pain responsive', 'Unresponsive'],
      orientation: ['Person', 'Place', 'Time', 'Situation'],
      pupilResponse: ['Size', 'Equality', 'Reaction to light'],
      motorFunction: ['Strength', 'Coordination', 'Balance']
    }
  },

  // Laboratory values
  laboratoryValues: {
    bloodTests: {
      complete_blood_count: {
        hemoglobin: '13.5-17.5 g/dL (male), 12.0-15.5 g/dL (female)',
        whiteBloodCells: '4,500-11,000/μL',
        platelets: '150,000-450,000/μL'
      },
      metabolic: {
        glucose: '70-100 mg/dL (fasting)',
        sodium: '135-145 mEq/L',
        potassium: '3.5-5.0 mEq/L',
        creatinine: '0.7-1.3 mg/dL'
      }
    }
  }
};

// Medical conditions database
export const medicalConditions = {
  headache: {
    symptoms: ['headache', 'head pain', 'migraine'],
    immediateActions: [
      'Rest in a quiet, dark room',
      'Apply a cold or warm compress to your head or neck',
      'Stay hydrated and drink water',
      'Take over-the-counter pain medication if appropriate'
    ],
    warningSigns: [
      'Sudden, severe headache',
      'Headache with fever and stiff neck',
      'Headache after head injury',
      'Headache with confusion or weakness'
    ],
    monitoringNeeded: [
      'Frequency and intensity of headaches',
      'Potential triggers',
      'Response to medication'
    ],
    furtherEvaluation: [
      'Consult a doctor if headaches are frequent or severe',
      'Keep a headache diary to track patterns',
      'Consider lifestyle factors that may contribute'
    ],
    emergencyLevel: 'non-emergency'
  },
  fever: {
    symptoms: ['fever', 'high temperature', 'chills', 'sweating'],
    immediateActions: [
      'Rest and stay hydrated',
      'Take temperature regularly',
      'Use fever-reducing medication if appropriate',
      'Use light clothing and blankets'
    ],
    warningSigns: [
      'Temperature above 103°F (39.4°C)',
      'Severe headache with fever',
      'Unusual skin rash',
      'Difficulty breathing'
    ],
    monitoringNeeded: [
      'Temperature readings',
      'Hydration levels',
      'Other developing symptoms'
    ],
    furtherEvaluation: [
      'Seek medical attention if fever persists over 3 days',
      'Monitor for signs of dehydration',
      'Watch for worsening symptoms'
    ],
    emergencyLevel: 'monitor'
  },
  chestPain: {
    symptoms: ['chest pain', 'chest pressure', 'chest tightness'],
    immediateActions: [
      'Call emergency services immediately',
      'Sit or lie down',
      'Take prescribed heart medication if available',
      'Stay calm and take slow breaths'
    ],
    warningSigns: [
      'Pain spreading to arm, neck, or jaw',
      'Shortness of breath',
      'Sweating',
      'Nausea or vomiting'
    ],
    monitoringNeeded: [
      'Pain intensity and duration',
      'Associated symptoms',
      'Response to medication'
    ],
    furtherEvaluation: [
      'Immediate medical evaluation required',
      'Follow-up with cardiologist',
      'Cardiac testing may be needed'
    ],
    emergencyLevel: 'emergency'
  },
  stomachPain: {
    symptoms: ['stomach pain', 'abdominal pain', 'belly pain'],
    immediateActions: [
      'Rest and avoid solid foods',
      'Stay hydrated with clear fluids',
      'Use a heating pad on low setting',
      'Avoid pain medications unless advised'
    ],
    warningSigns: [
      'Severe or persistent pain',
      'Fever with abdominal pain',
      'Blood in stool',
      'Persistent vomiting'
    ],
    monitoringNeeded: [
      'Pain location and intensity',
      'Changes in appetite',
      'Bowel movements'
    ],
    furtherEvaluation: [
      'Consult doctor if pain persists over 24 hours',
      'Watch for signs of dehydration',
      'Monitor food tolerance'
    ],
    emergencyLevel: 'monitor'
  }
};

export const analyzeSymptoms = (symptoms) => {
  if (!symptoms || symptoms.trim() === '') {
    return {
      immediateActions: ['Please provide your symptoms for analysis'],
      warningSigns: [],
      monitoringNeeded: [],
      furtherEvaluation: [],
      emergencyLevel: 'unknown'
    };
  }

  // Normalize symptoms for matching
  const normalizedSymptoms = symptoms.toLowerCase().trim();

  // Check for emergency keywords first
  const emergencyKeywords = [
    'not breathing', 'unconscious', 'severe bleeding', 'chest pain', 
    'heart attack', 'stroke', 'seizure', 'anaphylaxis', 'choking'
  ];

  const isEmergency = emergencyKeywords.some(keyword => 
    normalizedSymptoms.includes(keyword)
  );

  if (isEmergency) {
    return {
      immediateActions: [
        'Call emergency services immediately',
        'Stay with the person',
        'Follow emergency operator instructions',
        'Have someone wait outside to guide emergency services'
      ],
      warningSigns: [
        'Loss of consciousness',
        'Difficulty breathing',
        'Severe pain',
        'Rapid deterioration'
      ],
      monitoringNeeded: [
        'Breathing rate',
        'Consciousness level',
        'Pulse rate',
        'Skin color and temperature'
      ],
      furtherEvaluation: [],
      emergencyLevel: 'emergency'
    };
  }

  // Common conditions matching
  const conditions = {
    fever: {
      keywords: ['fever', 'temperature', 'hot', 'chills'],
      response: {
        immediateActions: [
          'Take temperature regularly',
          'Stay hydrated',
          'Rest',
          'Take fever-reducing medication if temperature is high'
        ],
        warningSigns: [
          'Temperature above 103°F (39.4°C)',
          'Severe headache',
          'Stiff neck',
          'Confusion'
        ],
        monitoringNeeded: [
          'Temperature every 4-6 hours',
          'Fluid intake',
          'Urine output',
          'Energy levels'
        ],
        furtherEvaluation: [
          'See a doctor if fever persists over 3 days',
          'Seek care if other concerning symptoms develop',
          'Keep track of temperature readings'
        ],
        emergencyLevel: 'monitor'
      }
    },
    headache: {
      keywords: ['headache', 'head pain', 'migraine'],
      response: {
        immediateActions: [
          'Rest in a quiet, dark room',
          'Stay hydrated',
          'Try over-the-counter pain relief',
          'Apply cold or warm compress'
        ],
        warningSigns: [
          'Sudden severe headache',
          'Headache with fever',
          'Visual disturbances',
          'Neck stiffness'
        ],
        monitoringNeeded: [
          'Pain intensity',
          'Duration of headache',
          'Associated symptoms',
          'Response to medication'
        ],
        furtherEvaluation: [
          'Consult doctor if headaches are frequent',
          'Keep a headache diary',
          'Note potential triggers'
        ],
        emergencyLevel: 'monitor'
      }
    }
  };

  // Find matching condition
  let matchedCondition = null;
  for (const [condition, data] of Object.entries(conditions)) {
    if (data.keywords.some(keyword => normalizedSymptoms.includes(keyword))) {
      matchedCondition = data.response;
      break;
    }
  }

  // If no specific match, return general advice
  if (!matchedCondition) {
    return {
      immediateActions: [
        'आराम करें और लक्षणों की निगरानी करें',
        'पर्याप्त पानी पीएं',
        'किसी भी बदलाव पर ध्यान दें',
        'कठिन गतिविधियों से बचें'
      ],
      warningSigns: [
        'लक्षणों में बिगड़ाव',
        'बुखार का विकास',
        'तीव्र दर्द',
        'सांस लेने में कठिनाई'
      ],
      monitoringNeeded: [
        'लक्षणों की प्रगति',
        'नए लक्षण',
        'समग्र स्वास्थ्य स्थिति',
        'स्व-देखभाल उपायों की प्रतिक्रिया'
      ],
      furtherEvaluation: [
        'यदि लक्षण बने रहें तो चिकित्सक से परामर्श करें',
        'लक्षणों का रिकॉर्ड रखें',
        'किसी भी पैटर्न या ट्रिगर को नोट करें',
        'समय और गंभीरता का दस्तावेजीकरण करें'
      ],
      emergencyLevel: 'monitor'
    };
  }

  return matchedCondition;
};
