// Comprehensive worldwide medical knowledge base
export const medicalKnowledge = {
    // Life-threatening emergencies
    emergencies: {
        'heart attack': {
            severity: 'Emergency',
            steps: [
                'Call emergency services (911/112/108) immediately',
                'Have the person sit or lie down and stay calm',
                'Loosen any tight clothing',
                'If prescribed, help them take nitroglycerin',
                'If unconscious, check breathing and start CPR if needed',
                'Give aspirin (325mg) if available and no known allergies'
            ],
            warnings: [
                'Chest pain or pressure',
                'Pain radiating to arm, neck, jaw',
                'Shortness of breath',
                'Cold sweats',
                'Nausea or vomiting',
                'Irregular heartbeat'
            ],
            notes: 'Time is critical - every minute counts. Keep the person still and calm.'
        },
        'stroke': {
            severity: 'Emergency',
            steps: [
                'Call emergency services immediately',
                'Note the time symptoms started',
                'Perform FAST test (Face, Arms, Speech, Time)',
                'Keep person lying on their side if unconscious',
                'Do not give food or drink',
                'Monitor breathing and consciousness'
            ],
            warnings: [
                'Facial drooping',
                'Arm weakness',
                'Slurred speech',
                'Sudden confusion',
                'Severe headache',
                'Loss of balance'
            ],
            notes: 'FAST action is crucial. Every minute delay can damage brain cells.'
        },
        'severe bleeding': {
            severity: 'Emergency',
            steps: [
                'Call emergency services',
                'Apply direct pressure with clean cloth/gauze',
                'Keep pressure constant - do not remove cloth',
                'Elevate the injured area if possible',
                'Use pressure points if necessary',
                'Apply tourniquet only as last resort'
            ],
            warnings: [
                'Blood soaking through bandages',
                'Spurting or pulsing blood',
                'Pale, cold skin',
                'Rapid, shallow breathing',
                'Confusion or weakness'
            ],
            notes: 'Control bleeding first. Replace soaked bandages by adding new ones on top.'
        },
        'anaphylaxis': {
            severity: 'Emergency',
            steps: [
                'Call emergency services immediately',
                'Use epinephrine auto-injector if available',
                'Help person lie flat, raise legs',
                'Monitor breathing and pulse',
                'Give second dose of epinephrine if symptoms persist',
                'Keep warm and calm'
            ],
            warnings: [
                'Difficulty breathing/wheezing',
                'Swelling of throat/tongue',
                'Severe hives/rash',
                'Rapid pulse',
                'Dizziness/fainting',
                'Nausea/vomiting'
            ],
            notes: 'Anaphylaxis can be fatal - immediate epinephrine is crucial.'
        }
    },

    // Trauma and injuries
    injuries: {
        'fracture': {
            severity: 'Urgent',
            steps: [
                'Immobilize the injured area',
                'Apply ice pack wrapped in cloth',
                'Remove jewelry/tight items',
                'Support with splint if trained',
                'Keep person still and comfortable',
                'Seek immediate medical care'
            ],
            warnings: [
                'Visible deformity',
                'Intense pain',
                'Swelling or bruising',
                'Unable to move/bear weight',
                'Numbness or tingling'
            ],
            notes: 'Never attempt to realign bones. Immobilize as found.'
        },
        'head injury': {
            severity: 'Urgent',
            steps: [
                'Check consciousness and breathing',
                'Call emergency services if severe',
                'Keep person still',
                'Monitor vital signs',
                'Apply cold compress to swelling',
                'Watch for changes in condition'
            ],
            warnings: [
                'Loss of consciousness',
                'Unequal pupils',
                'Clear fluid from ears/nose',
                'Seizures',
                'Repeated vomiting',
                'Confusion or amnesia'
            ],
            notes: 'Monitor for 24 hours. Wake every 2-3 hours if sleeping.'
        },
        'burns': {
            severity: 'Varies',
            steps: [
                'Remove from heat source',
                'Cool under running water (20 mins)',
                'Remove jewelry/tight items',
                'Cover with sterile, non-stick dressing',
                'Do not break blisters',
                'Seek medical care if severe'
            ],
            warnings: [
                'White or charred skin',
                'Burns larger than palm',
                'Burns on face/hands/feet',
                'Difficulty breathing',
                'Signs of infection'
            ],
            notes: 'Never use ice, butter, or ointments on serious burns.'
        }
    },

    // Common medical conditions
    conditions: {
        'asthma attack': {
            severity: 'Urgent',
            steps: [
                'Help person sit upright',
                'Assist with prescribed inhaler',
                'Keep calm and take slow breaths',
                'Stay in cool, fresh air',
                'Loosen tight clothing',
                'Seek emergency care if severe'
            ],
            warnings: [
                'Blue lips or fingernails',
                'Unable to speak in sentences',
                'Inhaler not helping',
                'Severe anxiety',
                'Exhaustion'
            ],
            notes: 'Use spacer with inhaler if available. Monitor breathing rate.'
        },
        'diabetic emergency': {
            severity: 'Urgent',
            steps: [
                'Check blood sugar if possible',
                'If conscious and low, give sugar',
                'If unconscious, call emergency',
                'Place in recovery position',
                'Monitor breathing',
                'Do not give anything by mouth if unconscious'
            ],
            warnings: [
                'Confusion or aggression',
                'Seizures',
                'Loss of consciousness',
                'Rapid breathing',
                'Weakness or fatigue'
            ],
            notes: 'Learn to recognize individual\'s usual symptoms.'
        },
        'seizure': {
            severity: 'Urgent',
            steps: [
                'Clear area of hazards',
                'Protect head with soft item',
                'Time the seizure',
                'Turn on side when possible',
                'Do not restrain',
                'Never put anything in mouth'
            ],
            warnings: [
                'Seizure lasting > 5 minutes',
                'Multiple seizures',
                'Difficulty breathing',
                'Injury during seizure',
                'First-time seizure'
            ],
            notes: 'Stay with person until fully alert and oriented.'
        }
    },

    // Environmental emergencies
    environmental: {
        'heat exhaustion': {
            severity: 'Urgent',
            steps: [
                'Move to cool area',
                'Remove excess clothing',
                'Apply cool, wet cloths',
                'Sip water slowly',
                'Fan to increase cooling',
                'Seek medical care if severe'
            ],
            warnings: [
                'Temperature above 103°F (39.4°C)',
                'Hot, red skin',
                'Rapid pulse',
                'Confusion',
                'Stopped sweating'
            ],
            notes: 'Can progress to heat stroke if untreated.'
        },
        'hypothermia': {
            severity: 'Urgent',
            steps: [
                'Move to warm area',
                'Remove wet clothing',
                'Warm core body first',
                'Give warm beverages if alert',
                'Use warm blankets',
                'Seek medical care'
            ],
            warnings: [
                'Severe shivering',
                'Confusion',
                'Fumbling hands',
                'Slurred speech',
                'Drowsiness'
            ],
            notes: 'Never rewarm too quickly. No alcohol or massage.'
        }
    },

    // Poisoning and overdose
    poisoning: {
        'ingestion': {
            severity: 'Emergency',
            steps: [
                'Call poison control center',
                'Do not induce vomiting',
                'Save container/substance',
                'Note time and amount',
                'Follow poison control advice',
                'Seek emergency care'
            ],
            warnings: [
                'Burns around mouth',
                'Difficulty breathing',
                'Unconsciousness',
                'Seizures',
                'Severe pain'
            ],
            notes: 'Never give anything by mouth without medical advice.'
        }
    },

    // Keywords for matching
    keywords: {
        cardiac: ['heart attack', 'chest pain', 'angina', 'palpitations'],
        respiratory: ['breathing', 'asthma', 'choking', 'wheezing', 'shortness of breath'],
        neurological: ['stroke', 'seizure', 'unconscious', 'confused', 'headache'],
        trauma: ['bleeding', 'fracture', 'injury', 'wound', 'burn'],
        environmental: ['heat', 'cold', 'drowning', 'electric shock'],
        allergic: ['allergy', 'anaphylaxis', 'rash', 'swelling'],
        digestive: ['poisoning', 'ingestion', 'nausea', 'vomiting'],
        metabolic: ['diabetes', 'blood sugar', 'dehydration'],
        pain: ['severe pain', 'chest pain', 'abdominal pain', 'headache'],
        mental: ['anxiety', 'panic attack', 'confusion', 'agitation']
    }
};

// Enhanced severity assessment with more specific conditions
export const assessSeverity = (symptoms) => {
    const emergencySymptoms = [
        'chest pain',
        'difficulty breathing',
        'severe bleeding',
        'unconscious',
        'stroke',
        'seizure',
        'anaphylaxis',
        'head injury',
        'poisoning',
        'severe burn',
        'electric shock',
        'drowning',
        'severe allergic reaction',
        'heart attack'
    ];

    const urgentSymptoms = [
        'fracture',
        'moderate bleeding',
        'asthma attack',
        'diabetic emergency',
        'heat exhaustion',
        'hypothermia',
        'severe pain',
        'moderate burn'
    ];

    if (emergencySymptoms.some(symptom => 
        symptoms.toLowerCase().includes(symptom))) {
        return 'Emergency';
    }

    if (urgentSymptoms.some(symptom => 
        symptoms.toLowerCase().includes(symptom))) {
        return 'Urgent';
    }

    return 'Non-urgent';
};

// Enhanced condition matching with medical terminology
export const findRelevantCondition = (query) => {
    // Search through all conditions
    for (const [category, conditions] of Object.entries(medicalKnowledge)) {
        if (typeof conditions === 'object' && category !== 'keywords') {
            for (const [condition, info] of Object.entries(conditions)) {
                // Check main condition name
                if (query.toLowerCase().includes(condition)) {
                    return { category, condition, info };
                }
                
                // Check related keywords
                const relatedKeywords = Object.entries(medicalKnowledge.keywords)
                    .find(([_, terms]) => terms.includes(condition));
                
                if (relatedKeywords && relatedKeywords[1].some(term => 
                    query.toLowerCase().includes(term))) {
                    return { category, condition, info };
                }
            }
        }
    }
    return null;
};

// Enhanced keyword matching with medical context
export const matchKeywords = (query) => {
    const matches = new Set();
    const queryLower = query.toLowerCase();
    
    // Direct keyword matching
    for (const [category, words] of Object.entries(medicalKnowledge.keywords)) {
        if (words.some(word => queryLower.includes(word))) {
            matches.add(category);
        }
    }
    
    // Symptom-based matching
    const commonSymptoms = {
        'pain': ['cardiac', 'trauma'],
        'breathing': ['respiratory'],
        'unconscious': ['neurological'],
        'swelling': ['allergic', 'trauma'],
        'bleeding': ['trauma'],
        'fever': ['infection'],
        'rash': ['allergic'],
        'vomiting': ['digestive', 'poisoning']
    };

    for (const [symptom, categories] of Object.entries(commonSymptoms)) {
        if (queryLower.includes(symptom)) {
            categories.forEach(category => matches.add(category));
        }
    }

    return Array.from(matches);
};

export const medicalKnowledgeDetailed = {
  conditions: {
    'chest pain': {
      symptoms: ['chest discomfort', 'pressure', 'tightness', 'burning'],
      immediateActions: [
        'Have the person sit or lie down comfortably',
        'Loosen any tight clothing',
        'If available and no known allergies, give aspirin (325mg)',
        'Keep the person calm and still'
      ],
      warningSignsEmergency: [
        'Pain spreading to arms, neck, jaw or back',
        'Shortness of breath',
        'Cold sweating',
        'Nausea or vomiting',
        'Light-headedness or fainting',
        'Irregular heartbeat'
      ],
      monitoringSigns: [
        'Pain intensity and location',
        'Breathing rate and effort',
        'Skin color and temperature',
        'Level of consciousness',
        'Pulse rate and rhythm'
      ],
      firstAidSteps: [
        'Call emergency services immediately if symptoms are severe or last more than a few minutes',
        'Help the person into a half-sitting position',
        'Monitor breathing and consciousness',
        'Be prepared to start CPR if needed',
        'Document time when symptoms started'
      ]
    },
    'breathing difficulty': {
      symptoms: ['shortness of breath', 'wheezing', 'chest tightness', 'rapid breathing'],
      immediateActions: [
        'Help person sit upright in comfortable position',
        'Ensure fresh air circulation',
        'Loosen any tight clothing around neck/chest',
        'Keep person calm and encourage slow breathing'
      ],
      warningSignsEmergency: [
        'Blue lips or fingertips',
        'Inability to speak full sentences',
        'Severe chest pain',
        'Drowsiness or confusion',
        'Rapid deterioration'
      ],
      monitoringSigns: [
        'Breathing rate and depth',
        'Use of accessory muscles',
        'Skin color',
        'Level of consciousness',
        'Speaking ability'
      ],
      firstAidSteps: [
        'If person has asthma, help them use their inhaler',
        'Keep monitoring breathing rate',
        'Ensure person stays upright',
        'Call emergency services if condition worsens',
        'Document any triggers or preceding events'
      ]
    },
    'unconsciousness': {
      symptoms: ['unresponsive', 'not moving', 'not responding to voice or touch'],
      immediateActions: [
        'Check for response by gently shaking shoulders',
        'Check airway and breathing',
        'Place in recovery position if breathing',
        'Call emergency services immediately'
      ],
      warningSignsEmergency: [
        'No breathing or abnormal breathing',
        'No pulse',
        'Bleeding or fluid from ears/nose',
        'Seizure activity',
        'Severe injury visible'
      ],
      monitoringSigns: [
        'Breathing pattern',
        'Pulse',
        'Response to stimuli',
        'Skin color and temperature',
        'Pupil size and reaction'
      ],
      firstAidSteps: [
        'Ensure scene is safe',
        'Check ABC (Airway, Breathing, Circulation)',
        'Start CPR if no breathing/pulse',
        'Protect from environmental conditions',
        'Do not give anything by mouth'
      ]
    },
    'severe bleeding': {
      symptoms: ['visible blood loss', 'pale skin', 'weakness', 'rapid pulse'],
      immediateActions: [
        'Apply direct pressure to wound with clean cloth',
        'Lie person down if possible',
        'Raise injured area above heart if possible',
        'Call emergency services'
      ],
      warningSignsEmergency: [
        'Spurting or pulsing blood',
        'Blood soaking through bandages quickly',
        'Pale and clammy skin',
        'Confusion or loss of consciousness',
        'Rapid, shallow breathing'
      ],
      monitoringSigns: [
        'Blood loss amount',
        'Pulse rate and strength',
        'Skin color and temperature',
        'Level of consciousness',
        'Breathing rate'
      ],
      firstAidSteps: [
        'Maintain direct pressure',
        'Add more dressing on top if blood soaks through',
        'Keep person warm and calm',
        'Monitor vital signs',
        'Do not remove dressing once applied'
      ]
    },
    'burn': {
      symptoms: ['skin damage', 'pain', 'redness', 'blistering'],
      immediateActions: [
        'Remove from source of burn',
        'Cool under running water for 20 minutes',
        'Remove any constricting items',
        'Cover with clean, non-stick dressing'
      ],
      warningSignsEmergency: [
        'Burns to face/hands/feet',
        'Deep or large burns',
        'Chemical/electrical burns',
        'Difficulty breathing',
        'Signs of shock'
      ],
      monitoringSigns: [
        'Burn size and depth',
        'Pain level',
        'Breathing if facial burn',
        'Signs of infection',
        'Body temperature'
      ],
      firstAidSteps: [
        'Do not break blisters',
        'Do not apply creams/ointments initially',
        'Keep person warm',
        'Monitor for signs of shock',
        'Seek medical help if severe'
      ]
    }
  },
  generalAssessment: {
    consciousness: {
      levels: [
        'Alert and oriented',
        'Responds to voice',
        'Responds to pain only',
        'Unresponsive'
      ],
      checkSteps: [
        'Call person\'s name and ask them to open eyes',
        'Gently shake shoulders if no response',
        'Check for response to mild pain stimulus',
        'Note pupil size and reaction'
      ]
    },
    breathing: {
      normalRates: {
        adult: '12-20 breaths per minute',
        child: '20-30 breaths per minute',
        infant: '30-60 breaths per minute'
      },
      checkSteps: [
        'Look for chest movement',
        'Listen for breath sounds',
        'Feel for air from nose/mouth',
        'Count breaths for 30 seconds and multiply by 2'
      ]
    },
    circulation: {
      normalRates: {
        adult: '60-100 beats per minute',
        child: '70-120 beats per minute',
        infant: '100-160 beats per minute'
      },
      checkSteps: [
        'Check pulse at neck or wrist',
        'Note strength and regularity',
        'Check skin color and temperature',
        'Look for signs of bleeding'
      ]
    }
  },
  emergencyGuidelines: {
    CPR: {
      adult: [
        'Call emergency services first',
        'Start with 30 chest compressions',
        'Give 2 rescue breaths',
        'Continue 30:2 ratio',
        'Compress chest at least 2 inches deep at 100-120/minute'
      ],
      child: [
        'Give 5 initial rescue breaths',
        'Start with 30 chest compressions',
        'Give 2 rescue breaths',
        'Continue 30:2 ratio',
        'Compress chest about 2 inches deep'
      ]
    },
    choking: {
      conscious: [
        'Give 5 back blows between shoulder blades',
        'Give 5 abdominal thrusts (Heimlich maneuver)',
        'Alternate between back blows and thrusts',
        'Continue until object is expelled or person becomes unconscious'
      ],
      unconscious: [
        'Lower person to ground',
        'Start CPR',
        'Check mouth for visible obstruction before breaths',
        'Continue until help arrives or obstruction cleared'
      ]
    },
    seizure: [
      'Clear area of hazards',
      'Protect head with something soft',
      'Do NOT restrain person',
      'Time the seizure',
      'Place in recovery position when seizure ends'
    ]
  }
};

export const getDetailedResponse = (condition, symptoms, answers) => {
  const response = {
    immediateActions: [],
    warningSignsEmergency: [],
    monitoringSigns: [],
    firstAidSteps: [],
    additionalAdvice: '',
    emergencyLevel: 'non-urgent'
  };

  // Find matching condition
  const matchedCondition = Object.entries(medicalKnowledgeDetailed.conditions).find(([key, value]) => {
    return condition.toLowerCase().includes(key) || 
           value.symptoms.some(symptom => condition.toLowerCase().includes(symptom));
  });

  if (matchedCondition) {
    const [_, conditionData] = matchedCondition;
    response.immediateActions = conditionData.immediateActions;
    response.warningSignsEmergency = conditionData.warningSignsEmergency;
    response.monitoringSigns = conditionData.monitoringSigns;
    response.firstAidSteps = conditionData.firstAidSteps;
  }

  // Assess emergency level based on symptoms and answers
  const emergencySymptoms = [
    'unconscious',
    'not breathing',
    'severe bleeding',
    'chest pain',
    'seizure'
  ];

  if (emergencySymptoms.some(symptom => condition.toLowerCase().includes(symptom))) {
    response.emergencyLevel = 'emergency';
    response.additionalAdvice = 'Call emergency services immediately!';
  } else if (answers && (
    answers.severity === 'Severe' || 
    answers.consciousness === 'Barely responsive' ||
    answers.breathing === 'Gasping/irregular'
  )) {
    response.emergencyLevel = 'urgent';
    response.additionalAdvice = 'Seek immediate medical attention';
  }

  return response;
};
