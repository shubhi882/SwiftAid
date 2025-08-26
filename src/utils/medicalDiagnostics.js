// Advanced medical diagnostics and expert-level assessment
export const vitalSigns = {
    // Normal ranges for vital signs by age
    normalRanges: {
        adult: {
            heartRate: { min: 60, max: 100, unit: 'bpm' },
            respiratoryRate: { min: 12, max: 20, unit: 'breaths/min' },
            bloodPressure: {
                systolic: { min: 90, max: 120, unit: 'mmHg' },
                diastolic: { min: 60, max: 80, unit: 'mmHg' }
            },
            temperature: { min: 36.5, max: 37.5, unit: '°C' },
            oxygenSaturation: { min: 95, max: 100, unit: '%' }
        },
        child: {
            heartRate: { min: 70, max: 120, unit: 'bpm' },
            respiratoryRate: { min: 20, max: 30, unit: 'breaths/min' },
            bloodPressure: {
                systolic: { min: 90, max: 110, unit: 'mmHg' },
                diastolic: { min: 50, max: 80, unit: 'mmHg' }
            },
            temperature: { min: 36.5, max: 37.5, unit: '°C' },
            oxygenSaturation: { min: 95, max: 100, unit: '%' }
        },
        infant: {
            heartRate: { min: 100, max: 160, unit: 'bpm' },
            respiratoryRate: { min: 30, max: 60, unit: 'breaths/min' },
            bloodPressure: {
                systolic: { min: 70, max: 90, unit: 'mmHg' },
                diastolic: { min: 50, max: 65, unit: 'mmHg' }
            },
            temperature: { min: 36.5, max: 37.5, unit: '°C' },
            oxygenSaturation: { min: 95, max: 100, unit: '%' }
        }
    }
};

export const diagnosticCriteria = {
    // Advanced diagnostic criteria for common emergencies
    cardiacEvents: {
        STEMI: [
            'ST-segment elevation ≥ 1mm in two contiguous leads',
            'New left bundle branch block',
            'Reciprocal ST depression',
            'T-wave inversion'
        ],
        NSTEMI: [
            'ST depression',
            'T-wave inversion',
            'Elevated cardiac biomarkers',
            'Normal or nonspecific ECG changes'
        ],
        unstableAngina: [
            'New onset angina',
            'Progressive angina',
            'Rest angina',
            'Normal cardiac biomarkers'
        ]
    },
    
    strokeAssessment: {
        FAST: {
            face: ['Facial droop', 'Asymmetrical smile'],
            arms: ['Arm drift', 'Weakness', 'Numbness'],
            speech: ['Slurred', 'Inappropriate words', 'Mute'],
            time: ['Onset time', 'Last known well time']
        },
        NIHSS: {
            consciousness: [0, 1, 2, 3],
            gazeDeviation: [0, 1, 2],
            visualFields: [0, 1, 2, 3],
            facialPalsy: [0, 1, 2, 3],
            motorArm: [0, 1, 2, 3, 4],
            motorLeg: [0, 1, 2, 3, 4],
            ataxia: [0, 1, 2],
            sensory: [0, 1, 2],
            language: [0, 1, 2, 3],
            dysarthria: [0, 1, 2],
            extinction: [0, 1, 2]
        }
    },

    sepsisCriteria: {
        SOFA: {
            respiratory: ['PaO2/FiO2 ratio'],
            coagulation: ['Platelet count'],
            liver: ['Bilirubin'],
            cardiovascular: ['Mean arterial pressure', 'Vasopressor requirements'],
            cns: ['Glasgow Coma Scale'],
            renal: ['Creatinine', 'Urine output']
        },
        qSOFA: [
            'Respiratory rate ≥ 22/min',
            'Altered mentation',
            'Systolic blood pressure ≤ 100 mmHg'
        ]
    },

    traumaAssessment: {
        primary: {
            A: ['Airway patency', 'C-spine protection'],
            B: ['Breathing rate/quality', 'Chest inspection'],
            C: ['Circulation', 'Hemorrhage control'],
            D: ['Disability (GCS)', 'Pupil response'],
            E: ['Exposure', 'Environmental control']
        },
        secondary: {
            head: ['AVPU scale', 'Pupillary response', 'External injuries'],
            neck: ['JVD', 'Tracheal deviation', 'Step deformities'],
            chest: ['Breath sounds', 'Chest wall movement', 'Heart sounds'],
            abdomen: ['Tenderness', 'Rigidity', 'Distension'],
            pelvis: ['Stability', 'External rotation', 'Leg length'],
            extremities: ['Pulses', 'Motor function', 'Sensation']
        },
        GCS: {
            eyeOpening: {
                4: 'Spontaneous',
                3: 'To voice',
                2: 'To pain',
                1: 'None'
            },
            verbalResponse: {
                5: 'Oriented',
                4: 'Confused',
                3: 'Inappropriate words',
                2: 'Incomprehensible sounds',
                1: 'None'
            },
            motorResponse: {
                6: 'Obeys commands',
                5: 'Localizes pain',
                4: 'Withdraws from pain',
                3: 'Flexion to pain',
                2: 'Extension to pain',
                1: 'None'
            }
        }
    }
};

export const differentialDiagnosis = {
    chestPain: {
        cardiac: [
            'Acute coronary syndrome',
            'Stable angina',
            'Pericarditis',
            'Myocarditis',
            'Aortic dissection'
        ],
        respiratory: [
            'Pulmonary embolism',
            'Pneumothorax',
            'Pneumonia',
            'Pleuritis'
        ],
        gastrointestinal: [
            'Esophageal spasm',
            'GERD',
            'Peptic ulcer',
            'Cholecystitis'
        ],
        musculoskeletal: [
            'Costochondritis',
            'Muscle strain',
            'Rib fracture'
        ],
        psychological: [
            'Panic attack',
            'Anxiety',
            'Somatization'
        ]
    },

    shortnessOfBreath: {
        cardiac: [
            'Heart failure',
            'Cardiac tamponade',
            'Arrhythmia'
        ],
        respiratory: [
            'Asthma',
            'COPD',
            'Pneumonia',
            'Pulmonary embolism',
            'Pneumothorax'
        ],
        neurological: [
            'Guillain-Barré syndrome',
            'Myasthenia gravis'
        ],
        metabolic: [
            'Acidosis',
            'Anemia',
            'Thyroid storm'
        ]
    },

    alteredMentalStatus: {
        neurological: [
            'Stroke',
            'Seizure',
            'Intracranial hemorrhage',
            'Meningitis/Encephalitis'
        ],
        metabolic: [
            'Hypoglycemia',
            'Hyperglycemia',
            'Electrolyte imbalance',
            'Thyroid disorder',
            'Hepatic encephalopathy'
        ],
        toxicological: [
            'Drug overdose',
            'Alcohol intoxication',
            'Carbon monoxide',
            'Medication effect'
        ],
        psychiatric: [
            'Acute psychosis',
            'Severe depression',
            'Conversion disorder'
        ]
    }
};

export const laboratoryValues = {
    // Normal ranges for common laboratory tests
    bloodChemistry: {
        sodium: { range: [135, 145], unit: 'mEq/L' },
        potassium: { range: [3.5, 5.0], unit: 'mEq/L' },
        chloride: { range: [96, 106], unit: 'mEq/L' },
        bicarbonate: { range: [22, 28], unit: 'mEq/L' },
        bun: { range: [7, 20], unit: 'mg/dL' },
        creatinine: { range: [0.6, 1.2], unit: 'mg/dL' },
        glucose: { range: [70, 100], unit: 'mg/dL' }
    },

    cardiacMarkers: {
        troponinI: { range: [0, 0.04], unit: 'ng/mL' },
        troponinT: { range: [0, 0.01], unit: 'ng/mL' },
        ckMB: { range: [0, 3.6], unit: 'ng/mL' }
    },

    completeBloodCount: {
        wbc: { range: [4.5, 11.0], unit: 'K/µL' },
        rbc: { range: [4.5, 5.9], unit: 'M/µL' },
        hemoglobin: { range: [13.5, 17.5], unit: 'g/dL' },
        hematocrit: { range: [41, 53], unit: '%' },
        platelets: { range: [150, 450], unit: 'K/µL' }
    },

    liverFunction: {
        ast: { range: [10, 40], unit: 'U/L' },
        alt: { range: [7, 56], unit: 'U/L' },
        alp: { range: [44, 147], unit: 'U/L' },
        totalBilirubin: { range: [0.3, 1.2], unit: 'mg/dL' },
        albumin: { range: [3.4, 5.4], unit: 'g/dL' }
    },

    coagulation: {
        pt: { range: [11, 13.5], unit: 'seconds' },
        ptt: { range: [25, 35], unit: 'seconds' },
        inr: { range: [0.8, 1.1], unit: 'ratio' }
    },

    arterialBloodGas: {
        ph: { range: [7.35, 7.45], unit: 'pH units' },
        pco2: { range: [35, 45], unit: 'mmHg' },
        po2: { range: [80, 100], unit: 'mmHg' },
        hco3: { range: [22, 26], unit: 'mEq/L' },
        o2Saturation: { range: [95, 100], unit: '%' }
    }
};

// Advanced assessment functions
export const assessVitalSigns = (age, vitals) => {
    const ranges = age < 1 ? vitalSigns.normalRanges.infant :
                  age < 12 ? vitalSigns.normalRanges.child :
                  vitalSigns.normalRanges.adult;
    
    return {
        heartRate: {
            isNormal: vitals.heartRate >= ranges.heartRate.min && 
                     vitals.heartRate <= ranges.heartRate.max,
            value: vitals.heartRate,
            range: ranges.heartRate
        },
        // Add similar checks for other vital signs
    };
};

export const calculateGCS = (eye, verbal, motor) => {
    return {
        total: eye + verbal + motor,
        breakdown: {
            eye: diagnosticCriteria.traumaAssessment.GCS.eyeOpening[eye],
            verbal: diagnosticCriteria.traumaAssessment.GCS.verbalResponse[verbal],
            motor: diagnosticCriteria.traumaAssessment.GCS.motorResponse[motor]
        },
        severity: (eye + verbal + motor) <= 8 ? 'Severe' :
                 (eye + verbal + motor) <= 12 ? 'Moderate' : 'Mild'
    };
};

export const assessStroke = (symptoms) => {
    let score = 0;
    const assessment = {};
    
    // Implement NIHSS scoring logic
    Object.entries(diagnosticCriteria.strokeAssessment.NIHSS).forEach(([category, scale]) => {
        if (symptoms[category]) {
            const value = Math.min(Math.max(0, symptoms[category]), Math.max(...scale));
            score += value;
            assessment[category] = value;
        }
    });
    
    return {
        score,
        assessment,
        severity: score <= 4 ? 'Minor' :
                 score <= 15 ? 'Moderate' :
                 score <= 25 ? 'Severe' : 'Very Severe'
    };
};
