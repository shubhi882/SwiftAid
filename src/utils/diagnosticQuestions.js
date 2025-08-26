// Diagnostic question flow system
export const symptomCategories = {
  'chest pain': {
    questions: [
      {
        id: 'chestPainCharacter',
        question: "How would you describe the chest pain?",
        options: ["Crushing/Heavy", "Sharp/Stabbing", "Burning", "Tight/Squeezing"]
      },
      {
        id: 'chestPainLocation',
        question: "Where exactly in the chest is the pain?",
        options: ["Center of chest", "Left side", "Right side", "Upper chest", "Lower chest"]
      },
      {
        id: 'chestPainDuration',
        question: "How long has the pain been present?",
        options: ["Just started", "Less than 1 hour", "Several hours", "More than a day"]
      },
      {
        id: 'associatedSymptoms',
        question: "Are there any other symptoms?",
        options: ["Shortness of breath", "Sweating", "Nausea", "Arm/Jaw pain", "None"]
      }
    ]
  },
  'breathing difficulty': {
    questions: [
      {
        id: 'breathingType',
        question: "How would you describe the breathing difficulty?",
        options: ["Shortness of breath", "Wheezing", "Cannot take deep breath", "Rapid breathing"]
      },
      {
        id: 'breathingTrigger',
        question: "What triggers or worsens the breathing difficulty?",
        options: ["Physical activity", "Lying down", "All the time", "After exposure to something"]
      },
      {
        id: 'breathingDuration',
        question: "How long has this been happening?",
        options: ["Just started", "Hours", "Days", "Weeks"]
      }
    ]
  },
  'head injury': {
    questions: [
      {
        id: 'consciousness',
        question: "Is the person conscious and alert?",
        options: ["Fully alert", "Confused", "Very drowsy", "Unconscious"]
      },
      {
        id: 'injuryMechanism',
        question: "How did the injury occur?",
        options: ["Fall", "Vehicle accident", "Sports injury", "Other impact"]
      },
      {
        id: 'symptoms',
        question: "Are any of these symptoms present?",
        options: ["Headache", "Vomiting", "Memory loss", "Seizure", "None"]
      }
    ]
  },
  'burn': {
    questions: [
      {
        id: 'burnDepth',
        question: "What does the burn look like?",
        options: ["Red and painful", "Blistered", "White/charred", "Deep/severe"]
      },
      {
        id: 'burnSize',
        question: "Roughly what percentage of body surface is affected?",
        options: ["Small area (<3%)", "3-15%", "15-30%", ">30%"]
      },
      {
        id: 'burnLocation',
        question: "Where is the burn located?",
        options: ["Hands/feet", "Face/neck", "Chest/back", "Arms/legs", "Groin"]
      }
    ]
  },
  'poisoning': {
    questions: [
      {
        id: 'substanceType',
        question: "What type of substance was involved?",
        options: ["Medicine/pills", "Household chemical", "Food", "Unknown substance"]
      },
      {
        id: 'timeElapsed',
        question: "When did this occur?",
        options: ["Just now", "Within 1 hour", "Several hours ago", "Unknown"]
      },
      {
        id: 'symptoms',
        question: "What symptoms are present?",
        options: ["Nausea/vomiting", "Drowsiness", "Difficulty breathing", "None yet"]
      }
    ]
  }
};

// Function to analyze query and return relevant questions
export const analyzeQuery = (query) => {
  query = query.toLowerCase();
  let relevantCategories = [];
  
  // Check for emergency keywords first
  const emergencyKeywords = ['unconscious', 'not breathing', 'severe bleeding', 'heart attack', 'stroke'];
  const isEmergency = emergencyKeywords.some(keyword => query.includes(keyword));
  
  if (isEmergency) {
    return {
      isEmergency: true,
      immediateAction: 'Call emergency services immediately!',
      questions: [
        {
          id: 'consciousness',
          question: "Is the person conscious and responding?",
          options: ["Yes", "No", "Barely responsive"]
        },
        {
          id: 'breathing',
          question: "Are they breathing normally?",
          options: ["Yes", "No", "Gasping/irregular"]
        }
      ]
    };
  }

  // Match symptoms to categories
  Object.keys(symptomCategories).forEach(category => {
    if (query.includes(category)) {
      relevantCategories.push(category);
    }
  });

  // Special cases
  if (query.includes('pain')) {
    if (query.includes('chest')) relevantCategories.push('chest pain');
    if (query.includes('head')) relevantCategories.push('head injury');
  }
  
  if (query.includes('breath')) relevantCategories.push('breathing difficulty');
  if (query.includes('burn') || query.includes('scalded')) relevantCategories.push('burn');
  if (query.includes('swallow') || query.includes('poison')) relevantCategories.push('poisoning');

  // Get questions for matched categories
  let relevantQuestions = [];
  relevantCategories.forEach(category => {
    relevantQuestions.push(...symptomCategories[category].questions);
  });

  // If no specific category matched, return general assessment questions
  if (relevantQuestions.length === 0) {
    relevantQuestions = [
      {
        id: 'painPresent',
        question: "Is there any pain involved?",
        options: ["Yes", "No"]
      },
      {
        id: 'symptomDuration',
        question: "How long has this been happening?",
        options: ["Just started", "Hours", "Days", "Weeks or longer"]
      },
      {
        id: 'severity',
        question: "How severe would you rate this situation?",
        options: ["Mild", "Moderate", "Severe", "Very severe"]
      }
    ];
  }

  return {
    isEmergency: false,
    questions: relevantQuestions
  };
};

export const assessUrgency = (answers) => {
  let urgencyScore = 0;
  
  // Critical symptoms
  if (answers.consciousness === 'Unconscious' || answers.breathing === 'No') {
    return { isEmergency: true, score: 10, needsImmediateCare: true };
  }

  // Chest pain assessment
  if (answers.chestPainCharacter === 'Crushing/Heavy' && 
      (answers.chestPainLocation === 'Center of chest' || answers.chestPainLocation === 'Left side')) {
    urgencyScore += 8;
  }

  // Breathing difficulty
  if (answers.breathingType === 'Cannot take deep breath' || answers.breathingType === 'Rapid breathing') {
    urgencyScore += 7;
  }

  // Head injury
  if (answers.consciousness === 'Confused' || answers.consciousness === 'Very drowsy') {
    urgencyScore += 7;
  }

  // Burns
  if (answers.burnDepth === 'Deep/severe' || answers.burnSize === '>30%') {
    urgencyScore += 8;
  }

  // Poisoning
  if (answers.substanceType && answers.timeElapsed === 'Just now') {
    urgencyScore += 7;
  }

  return {
    isEmergency: urgencyScore >= 8,
    needsImmediateCare: urgencyScore >= 6,
    score: urgencyScore
  };
};
