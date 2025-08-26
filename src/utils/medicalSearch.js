import { indiaLocationData } from '../data/indiaLocations';
import { multilingualKeywords } from './translationService';
import { medicalTranslations } from '../translations/medicalTranslations';

// Helper function for text matching
function findLocationMatch(searchTerm, locationList) {
    if (!searchTerm || !locationList?.length) return null;
    
    const normalizedSearch = searchTerm.toLowerCase().trim();
    
    // Exact match
    const exactMatch = locationList.find(loc => 
        loc.toLowerCase().trim() === normalizedSearch
    );
    if (exactMatch) return exactMatch;
    
    // Partial match
    const partialMatch = locationList.find(loc => 
        loc.toLowerCase().includes(normalizedSearch) ||
        normalizedSearch.includes(loc.toLowerCase())
    );
    if (partialMatch) return partialMatch;
    
    return null;
}

// Get default emergency services
function getDefaultEmergencyServices(language = 'en') {
    return {
        available: true,
        services: [
            {
                type: 'emergency',
                name: language === 'en' ? 'Emergency Ambulance' : 'एम्बुलेंस',
                number: '102',
                priority: 1
            },
            {
                type: 'emergency',
                name: language === 'en' ? 'Medical Emergency' : 'चिकित्सा आपातकाल',
                number: '108',
                priority: 2
            },
            {
                type: 'emergency',
                name: language === 'en' ? 'Police Emergency' : 'पुलिस आपातकाल',
                number: '100',
                priority: 3
            }
        ]
    };
}

// Get default emergency numbers
function getDefaultEmergencyNumbers() {
    return [
        {
            type: 'emergency',
            name: 'National Emergency Number',
            number: '112',
            priority: 1
        }
    ];
}

// Search hospitals based on location hierarchy
async function searchHospitals(state, district, area) {
    try {
        // Validate inputs
        if (!state || !district || !area) {
            throw new Error('Please select state, district and area');
        }

        // Check if state exists
        if (!indiaLocationData[state]) {
            throw new Error(`No data found for state: ${state}`);
        }

        // Check if district exists in state
        if (!indiaLocationData[state].districts[district]) {
            throw new Error(`No data found for district: ${district} in ${state}`);
        }

        // Check if area exists in district
        const areas = indiaLocationData[state].districts[district];
        if (!areas.includes(area)) {
            throw new Error(`No data found for area: ${area} in ${district}, ${state}`);
        }

        // Generate dynamic hospital data based on location
        const generateHospital = (name, type, emergency = true) => ({
            id: Math.random().toString(36).substr(2, 9),
            name,
            type,
            address: `${area}, ${district}, ${state}`,
            emergency,
            specialties: type === "Multi-Specialty" ? 
                ["cardiology", "neurology", "orthopedics", "emergency"] :
                [type.toLowerCase().replace(" ", "")],
            openHours: emergency ? "24/7" : "9 AM - 9 PM",
            ambulance: emergency ? "108" : "N/A"
        });

        // Generate a mix of hospitals based on area population
        const hospitals = [
            generateHospital(`${area} General Hospital`, "Multi-Specialty"),
            generateHospital(`${area} Emergency Care Center`, "Emergency Care"),
            generateHospital(`${area} Community Health Center`, "Primary Care", false)
        ];

        // Get nearby areas from the same district
        const nearbyAreas = areas.filter(a => a !== area).slice(0, 3);
        const nearbyHospitals = nearbyAreas.flatMap(nearbyArea => [
            generateHospital(`${nearbyArea} General Hospital`, "Multi-Specialty")
        ]);

        // Combine and format results
        const results = [
            ...hospitals.map(hospital => ({
                ...hospital,
                distance: "In selected area",
                area: area
            })),
            ...nearbyHospitals.map(hospital => ({
                ...hospital,
                distance: "Nearby area",
                area: hospital.name.split(" ")[0] // Extract area name from hospital name
            }))
        ];

        return {
            success: true,
            data: results,
            totalCount: results.length,
            message: `Found ${results.length} hospitals in and around ${area}`
        };

    } catch (error) {
        console.error('Hospital search error:', error);
        return {
            success: false,
            error: error.message,
            data: []
        };
    }
}

// Get list of states
function getStates() {
    return Object.keys(indiaLocationData);
}

// Get districts for a state
function getDistricts(state) {
    if (!state || !indiaLocationData[state]) {
        return [];
    }
    return Object.keys(indiaLocationData[state].districts);
}

// Get areas for a district
function getAreas(state, district) {
    if (!state || !district || !indiaLocationData[state] || !indiaLocationData[state].districts[district]) {
        return [];
    }
    return indiaLocationData[state].districts[district];
}

// Medical conditions database with comprehensive multilingual support
const medicalConditionsMultilingual = {
    "heart attack": {
        symptoms: ["chest pain", "shortness of breath", "nausea", "cold sweat"],
        emergency: true,
        naturalLanguage: {
            en: [
                "I'm having chest pain",
                "My chest hurts",
                "I feel pressure in my chest",
                "Having difficulty breathing with chest pain",
                "Left arm pain with chest discomfort"
            ],
            hi: [
                "छाती में दर्द हो रहा है",
                "सीने में दर्द है",
                "छाती में दबाव महसूस हो रहा है",
                "सांस लेने में तकलीफ के साथ छाती में दर्द",
                "बायें हाथ में दर्द के साथ छाती में तकलीफ"
            ],
            te: [
                "గుండె నొప్పిగా ఉంది",
                "ఛాతీలో నొప్పి",
                "ఛాతీలో ఒత్తిడి అనిపిస్తుంది",
                "ఊపిరి పీల్చుకోవడంలో ఇబ్బంది",
                "ఎడమ చేతిలో నొప్పితో ఛాతీ అసౌకర్యం"
            ],
            kn: [
                "ಎದೆ ನೋವು ಆಗುತ್ತಿದೆ",
                "ಎದೆಯಲ್ಲಿ ನೋವು",
                "ಎದೆಯಲ್ಲಿ ಒತ್ತಡ ಅನಿಸುತ್ತಿದೆ",
                "ಉಸಿರಾಟದ ತೊಂದರೆ",
                "ಎಡಗೈ ನೋವಿನೊಂದಿಗೆ ಎದೆ ಅಸ್ವಸ್ಥತೆ"
            ],
            ml: [
                "നെഞ്ചുവേദന അനുഭവപ്പെടുന്നു",
                "മാറിൽ വേദന",
                "നെഞ്ചിൽ സമ്മർദ്ദം തോന്നുന്നു",
                "ശ്വാസം മുട്ടലോടെ നെഞ്ചുവേദന",
                "ഇടതു കൈയിലെ വേദനയോടെ നെഞ്ച് അസ്വസ്ഥത"
            ],
            gu: [
                "છાતીમાં દુખાવો થાય છે",
                "છાતીમાં દુખે છે",
                "છાતીમાં દબાણ લાગે છે",
                "શ્વાસ લેવામાં તકલીફ",
                "ડાબા હાથમાં દુખાવો સાથે છાતીમાં તકલીફ"
            ],
            mr: [
                "छातीत दुखत आहे",
                "छातीत वेदना होत आहे",
                "छातीत दाब जाणवत आहे",
                "श्वास घेण्यास त्रास होत आहे",
                "डाव्या हाताच्या वेदनेसह छातीत अस्वस्थता"
            ],
            pa: [
                "ਛਾਤੀ ਵਿੱਚ ਦਰਦ ਹੋ ਰਿਹਾ ਹੈ",
                "ਛਾਤੀ ਵਿੱਚ ਪੀੜ",
                "ਛਾਤੀ ਵਿੱਚ ਦਬਾਅ ਮਹਿਸੂਸ ਹੋ ਰਿਹਾ ਹੈ",
                "ਸਾਹ ਲੈਣ ਵਿੱਚ ਤਕਲੀਫ",
                "ਖੱਬੀ ਬਾਂਹ ਵਿੱਚ ਦਰਦ ਨਾਲ ਛਾਤੀ ਵਿੱਚ ਤਕਲੀਫ"
            ]
        }
    },
    "fever": {
        symptoms: ["high temperature", "chills", "sweating", "headache", "body ache"],
        emergency: false,
        naturalLanguage: {
            en: [
                "I have a fever",
                "My body temperature is high",
                "I'm feeling feverish",
                "Having chills and fever",
                "Body ache with high temperature"
            ],
            hi: [
                "मुझे बुखार है",
                "मेरे शरीर का तापमान बढ़ा हुआ है",
                "बुखार जैसा लग रहा है",
                "ठंड के साथ बुखार है",
                "बुखार के साथ शरीर में दर्द है"
            ],
            te: [
                "నాకు జ్వరం వచ్చింది",
                "శరీర ఉష్ణోగ్రత ఎక్కువగా ఉంది",
                "జ్వరం వస్తున్నట్లు అనిపిస్తోంది",
                "వణుకుతో జ్వరం",
                "జ్వరంతో శరీరం నొప్పి"
            ],
            kn: [
                "ನನಗೆ ಜ್ವರ ಬಂದಿದೆ",
                "ದೇಹದ ತಾಪಮಾನ ಹೆಚ್ಚಾಗಿದೆ",
                "ಜ್ವರ ಬರುತ್ತಿರುವಂತೆ ಅನಿಸುತ್ತಿದೆ",
                "ನಡುಕದೊಂದಿಗೆ ಜ್ವರ",
                "ಜ್ವರದೊಂದಿಗೆ ಮೈಕೈ ನೋವು"
            ],
            ml: [
                "എനിക്ക് പനി ഉണ്ട്",
                "ശരീര താപനില കൂടിയിരിക്കുന്നു",
                "പനി വരുന്നത് പോലെ തോന്നുന്നു",
                "വിറയലോടെ പനി",
                "പനിയോടൊപ്പം ശരീരവേദന"
            ],
            gu: [
                "મને તાવ છે",
                "શરીરનું તાપમાન વધારે છે",
                "તાવ જેવું લાગે છે",
                "ધ્રુજારી સાથે તાવ",
                "તાવ સાથે શરીરમાં દુખાવો"
            ],
            mr: [
                "मला ताप आहे",
                "शरीराचे तापमान वाढले आहे",
                "ताप येत असल्यासारखे वाटते",
                "थंडी वाजून ताप येतोय",
                "तापासोबत अंगदुखी"
            ],
            pa: [
                "ਮੈਨੂੰ ਬੁਖਾਰ ਹੈ",
                "ਸਰੀਰ ਦਾ ਤਾਪਮਾਨ ਵਧਿਆ ਹੋਇਆ ਹੈ",
                "ਬੁਖਾਰ ਜਿਹਾ ਲੱਗ ਰਿਹਾ ਹੈ",
                "ਕੰਬਣੀ ਨਾਲ ਬੁਖਾਰ",
                "ਬੁਖਾਰ ਨਾਲ ਸਰੀਰ ਵਿੱਚ ਦਰਦ"
            ]
        }
    },
    "headache": {
        symptoms: ["head pain", "pressure in head", "throbbing pain"],
        emergency: false,
        naturalLanguage: {
            en: [
                "I have a headache",
                "My head is paining",
                "Having severe headache",
                "Throbbing pain in head",
                "Head is heavy and painful"
            ],
            hi: [
                "सिर में दर्द है",
                "सर दर्द हो रहा है",
                "तेज सिरदर्द है",
                "सिर में धक-धक हो रही है",
                "सिर भारी और दर्द है"
            ],
            te: [
                "తలనొప్పిగా ఉంది",
                "తల నొప్పి వస్తోంది",
                "తీవ్రమైన తలనొప్పి",
                "తలలో లయబద్ధమైన నొప్పి",
                "తల బరువుగా మరియు నొప్పిగా ఉంది"
            ],
            kn: [
                "ತಲೆನೋವು ಇದೆ",
                "ತಲೆ ನೋವಾಗುತ್ತಿದೆ",
                "ತೀವ್ರವಾದ ತಲೆನೋವು",
                "ತಲೆಯಲ್ಲಿ ಬಡಿತದ ನೋವು",
                "ತಲೆ ಭಾರವಾಗಿದೆ ಮತ್ತು ನೋವಿದೆ"
            ],
            ml: [
                "തലവേദന ഉണ്ട്",
                "തലയിൽ വേദന",
                "കടുത്ത തലവേദന",
                "തലയിൽ തുടിക്കുന്ന വേദന",
                "തല ഭാരവും വേദനയും ഉണ്ട്"
            ],
            gu: [
                "માથું દુખે છે",
                "માથામાં દુખાવો છે",
                "તીવ્ર માથાનો દુખાવો",
                "માથામાં ધબકારા સાથે દુખાવો",
                "માથું ભારે અને દુખાવો છે"
            ],
            mr: [
                "डोकं दुखतंय",
                "डोक्यात दुखत आहे",
                "तीव्र डोकेदुखी",
                "डोक्यात ठणकतंय",
                "डोकं जड आणि दुखत आहे"
            ],
            pa: [
                "ਸਿਰ ਦਰਦ ਹੈ",
                "ਸਿਰ ਵਿੱਚ ਦਰਦ ਹੋ ਰਿਹਾ ਹੈ",
                "ਤੇਜ਼ ਸਿਰ ਦਰਦ",
                "ਸਿਰ ਵਿੱਚ ਧੜਕਣ ਵਾਲਾ ਦਰਦ",
                "ਸਿਰ ਭਾਰੀ ਅਤੇ ਦਰਦ ਹੈ"
            ]
        }
    },
    "breathing problems": {
        symptoms: ["shortness of breath", "wheezing", "chest tightness", "coughing", "difficulty breathing"],
        emergency: true,
        naturalLanguage: {
            en: [
                "I can't breathe properly",
                "Having difficulty breathing",
                "Feeling breathless",
                "Wheezing sound while breathing",
                "My chest feels tight"
            ],
            hi: [
                "सांस लेने में तकलीफ हो रही है",
                "सांस फूल रही है",
                "सांस नहीं आ रही है",
                "सीने में घरघराहट हो रही है",
                "छाती में जकड़न महसूस हो रही है"
            ],
            te: [
                "సరిగ్గా శ్వాస పీల్చుకోలేకపోతున్నాను",
                "శ్వాస తీసుకోవడంలో ఇబ్బంది",
                "ఊపిరి అందడం లేదు",
                "శ్వాస తీసుకునేటప్పుడు శబ్దం వస్తుంది",
                "ఛాతీ బిగుసుకుపోతుంది"
            ],
            kn: [
                "ಸರಿಯಾಗಿ ಉಸಿರಾಡಲು ಆಗುತ್ತಿಲ್ಲ",
                "ಉಸಿರಾಟದ ತೊಂದರೆ",
                "ಉಸಿರು ಬರುತ್ತಿಲ್ಲ",
                "ಉಸಿರಾಡುವಾಗ ಶಬ್ದ ಬರುತ್ತಿದೆ",
                "ಎದೆ ಬಿಗಿಯಾಗಿದೆ"
            ],
            ml: [
                "ശരിയായി ശ്വസിക്കാൻ കഴിയുന്നില്ല",
                "ശ്വസിക്കാൻ ബുദ്ധിമുട്ട്",
                "ശ്വാസം മുട്ടുന്നു",
                "ശ്വസിക്കുമ്പോൾ ശബ്ദം വരുന്നു",
                "നെഞ്ച് മുറുകുന്നു"
            ],
            gu: [
                "બરાબર શ્વાસ લઈ શકતો નથી",
                "શ્વાસ લેવામાં તકલીફ",
                "શ્વાસ ચડે છે",
                "શ્વાસ લેતી વખતે અવાજ આવે છે",
                "છાતી જકડાય છે"
            ],
            mr: [
                "व्यवस्थित श्वास घेता येत नाही",
                "श्वास घेण्यास त्रास होतोय",
                "दम लागतोय",
                "श्वास घेताना आवाज येतोय",
                "छाती दाटून येतेय"
            ],
            pa: [
                "ਠੀਕ ਤਰ੍ਹਾਂ ਸਾਹ ਨਹੀਂ ਲੈ ਸਕਦਾ",
                "ਸਾਹ ਲੈਣ ਵਿੱਚ ਤਕਲੀਫ",
                "ਸਾਹ ਚੜ੍ਹਦਾ ਹੈ",
                "ਸਾਹ ਲੈਣ ਵੇਲੇ ਆਵਾਜ਼ ਆਉਂਦੀ ਹੈ",
                "ਛਾਤੀ ਜਕੜੀ ਜਾਂਦੀ ਹੈ"
            ]
        }
    },
    "burns": {
        symptoms: ["skin burn", "redness", "blistering", "pain", "swelling"],
        emergency: true,
        naturalLanguage: {
            en: [
                "I got burned",
                "My skin is burned",
                "Having burn injury",
                "Skin is red and painful from burn",
                "Burned by hot water"
            ],
            hi: [
                "जल गया है",
                "त्वचा जल गई है",
                "जलने की चोट लगी है",
                "जलने से त्वचा लाल और दर्द हो रहा है",
                "गरम पानी से जल गया है"
            ],
            te: [
                "కాలిపోయింది",
                "చర్మం కాలిపోయింది",
                "కాలిన గాయం అయింది",
                "కాలడం వల్ల చర్మం ఎర్రగా ఉంది మరియు నొప్పిగా ఉంది",
                "వేడి నీళ్లతో కాలిపోయింది"
            ],
            kn: [
                "ಸುಟ್ಟುಕೊಂಡಿದೆ",
                "ಚರ್ಮ ಸುಟ್ಟುಕೊಂಡಿದೆ",
                "ಸುಟ್ಟ ಗಾಯವಾಗಿದೆ",
                "ಸುಟ್ಟ ಕಾರಣ ಚರ್ಮ ಕೆಂಪಾಗಿದೆ ಮತ್ತು ನೋವಾಗುತ್ತಿದೆ",
                "ಬಿಸಿ ನೀರಿನಿಂದ ಸುಟ್ಟುಕೊಂಡಿದೆ"
            ],
            ml: [
                "പൊള്ളി",
                "ത്വക്ക് പൊള്ളി",
                "പൊള്ളലിന്റെ മുറിവ്",
                "പൊള്ളിയതിനാൽ ത്വക്ക് ചുവന്നു വേദനിക്കുന്നു",
                "ചൂടുവെള്ളം കൊണ്ട് പൊള്ളി"
            ],
            gu: [
                "દાઝી ગયું છે",
                "ત્વચા દાઝી ગઈ છે",
                "દાઝવાની ઈજા થઈ છે",
                "દાઝવાથી ત્વચા લાલ અને દુખે છે",
                "ગરમ પાણીથી દાઝી ગયું છે"
            ],
            mr: [
                "भाजलं आहे",
                "त्वचा भाजली आहे",
                "भाजण्याची जखम झाली आहे",
                "भाजल्यामुळे त्वचा लाल आणि दुखत आहे",
                "गरम पाण्याने भाजलं आहे"
            ],
            pa: [
                "ਸੜ ਗਿਆ ਹੈ",
                "ਚਮੜੀ ਸੜ ਗਈ ਹੈ",
                "ਸੜਨ ਦੀ ਸੱਟ ਲੱਗੀ ਹੈ",
                "ਸੜਨ ਨਾਲ ਚਮੜੀ ਲਾਲ ਅਤੇ ਦਰਦ ਹੋ ਰਿਹਾ ਹੈ",
                "ਗਰਮ ਪਾਣੀ ਨਾਲ ਸੜ ਗਿਆ ਹੈ"
            ]
        }
    },
    "snake bite": {
        symptoms: ["bite marks", "severe pain", "swelling", "difficulty breathing", "nausea"],
        emergency: true,
        naturalLanguage: {
            en: [
                "Snake has bitten me",
                "Got bitten by a snake",
                "Snake bite with swelling",
                "Pain and swelling from snake bite",
                "Feeling dizzy after snake bite"
            ],
            hi: [
                "सांप ने काट लिया है",
                "सांप के काटने से सूजन है",
                "साँप के काटने की जगह दर्द है",
                "साँप काटने के बाद चक्कर आ रहे हैं",
                "सर्प दंश हुआ है"
            ],
            te: [
                "పాము కాటు వేసింది",
                "పాము కరిచింది",
                "పాము కాటుతో వాపు వచ్చింది",
                "పాము కాటు వల్ల నొప్పి మరియు వాపు",
                "పాము కాటు తర్వాత తలతిరుగుతోంది"
            ],
            kn: [
                "ಹಾವು ಕಚ್ಚಿದೆ",
                "ಹಾವಿನ ಕಚ್ಚು ಆಗಿದೆ",
                "ಹಾವು ಕಚ್ಚಿದ ಜಾಗದಲ್ಲಿ ಊತ",
                "ಹಾವು ಕಚ್ಚಿದ ನಂತರ ನೋವು ಮತ್ತು ಊತ",
                "ಹಾವು ಕಚ್ಚಿದ ನಂತರ ತಲೆ ತಿರುಗುತ್ತಿದೆ"
            ],
            ml: [
                "പാമ്പ് കടിച്ചു",
                "പാമ്പ് കടിയേറ്റു",
                "പാമ്പ് കടിച്ച സ്ഥലത്ത് വീക്കം",
                "പാമ്പ് കടിച്ചതിന് ശേഷം വേദനയും വീക്കവും",
                "പാമ്പ് കടിച്ചതിന് ശേഷം തലകറക്കം"
            ],
            gu: [
                "સાપે કરડ્યો છે",
                "સાપના કરડવાથી સોજો છે",
                "સાપ કરડ્યાની જગ્યાએ દુખાવો છે",
                "સાપ કરડ્યા પછી ચક્કર આવે છે",
                "સર્પદંશ થયો છે"
            ],
            mr: [
                "साप चावला आहे",
                "सर्पदंश झाला आहे",
                "साप चावल्याच्या जागी सूज आहे",
                "साप चावल्यानंतर वेदना आणि सूज",
                "साप चावल्यानंतर चक्कर येतेय"
            ],
            pa: [
                "ਸੱਪ ਨੇ ਡੰਗ ਲਿਆ ਹੈ",
                "ਸੱਪ ਦੇ ਕੱਟਣ ਨਾਲ ਸੋਜ ਹੈ",
                "ਸੱਪ ਦੇ ਕੱਟਣ ਦੀ ਜਗ੍ਹਾ ਤੇ ਦਰਦ ਹੈ",
                "ਸੱਪ ਦੇ ਕੱਟਣ ਤੋਂ ਬਾਅਦ ਚੱਕਰ ਆ ਰਹੇ ਹਨ",
                "ਸੱਪ ਦਾ ਡੰਗ ਲੱਗਾ ਹੈ"
            ]
        }
    },
    "stroke": {
        symptoms: ["sudden numbness", "confusion", "difficulty speaking", "severe headache", "vision problems"],
        emergency: true,
        naturalLanguage: {
            en: [
                "Face is drooping on one side",
                "Can't speak properly suddenly",
                "Arm feels weak or numb",
                "Having trouble understanding speech",
                "Sudden severe headache"
            ],
            hi: [
                "चेहरे का एक तरफ लटक रहा है",
                "अचानक ठीक से बोल नहीं पा रहा हूं",
                "बाजू में कमजोरी या सुन्नपन है",
                "बात समझने में दिक्कत हो रही है",
                "अचानक तेज सिरदर्द हुआ है"
            ],
            te: [
                "ముఖం ఒక వైపు వేలాడుతోంది",
                "హఠాత్తుగా సరిగ్గా మాట్లాడలేకపోతున్నాను",
                "చేతిలో బలహీనత లేదా మొద్దుబారినట్లుగా ఉంది",
                "మాట అర్థం చేసుకోవడంలో ఇబ్బంది",
                "అకస్మాత్తుగా తీవ్రమైన తలనొప్పి"
            ],
            kn: [
                "ಮುಖದ ಒಂದು ಭಾಗ ಜೋಲುಬಿದ್ದಿದೆ",
                "ಇದ್ದಕ್ಕಿದ್ದಂತೆ ಸರಿಯಾಗಿ ಮಾತನಾಡಲು ಆಗುತ್ತಿಲ್ಲ",
                "ತೋಳಿನಲ್ಲಿ ದುರ್ಬಲತೆ ಅಥವಾ ಬಧಿರತೆ",
                "ಮಾತು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ತೊಂದರೆ",
                "ಇದ್ದಕ್ಕಿದ್ದಂತೆ ತೀವ್ರ ತಲೆನೋವು"
            ],
            ml: [
                "മുഖത്തിന്റെ ഒരു വശം തളർന്നിരിക്കുന്നു",
                "പെട്ടെന്ന് ശരിയായി സംസാരിക്കാൻ കഴിയുന്നില്ല",
                "കൈയ്യിൽ ബലഹീനത അല്ലെങ്കിൽ മരവിപ്പ്",
                "സംസാരം മനസ്സിലാക്കാൻ ബുദ്ധിമുട്ട്",
                "പെട്ടെന്നുള്ള കടുത്ത തലവേദന"
            ],
            gu: [
                "ચહેરાનો એક ભાગ લટકી ગયો છે",
                "અચાનક બરાબર બોલી શકતો નથી",
                "હાથમાં નબળાઈ અથવા ઝણઝણાટી",
                "વાત સમજવામાં તકલીફ",
                "અચાનક તીવ્ર માથાનો દુખાવો"
            ],
            mr: [
                "चेहऱ्याची एक बाजू लोंबकळत आहे",
                "अचानक व्यवस्थित बोलता येत नाही",
                "हातात अशक्तपणा किंवा बधिरता",
                "बोलणं समजण्यात अडचण",
                "अचानक तीव्र डोकेदुखी"
            ],
            pa: [
                "ਚਿਹਰੇ ਦਾ ਇੱਕ ਪਾਸਾ ਲਟਕ ਰਿਹਾ ਹੈ",
                "ਅਚਾਨਕ ਠੀਕ ਤਰ੍ਹਾਂ ਬੋਲ ਨਹੀਂ ਪਾ ਰਿਹਾ",
                "ਬਾਂਹ ਵਿੱਚ ਕਮਜ਼ੋਰੀ ਜਾਂ ਸੁੰਨਤਾ",
                "ਗੱਲ ਸਮਝਣ ਵਿੱਚ ਮੁਸ਼ਕਲ",
                "ਅਚਾਨਕ ਤੇਜ਼ ਸਿਰ ਦਰਦ"
            ]
        }
    },
    "menstrual period": {
        symptoms: ["abdominal cramps", "lower back pain", "fatigue", "mood changes", "bloating"],
        emergency: false,
        naturalLanguage: {
            en: [
                "Having period cramps",
                "Menstrual pain",
                "Heavy menstrual bleeding",
                "Period related back pain",
                "Irregular periods",
                "Delayed periods",
                "Early periods"
            ],
            hi: [
                "पीरियड्स में दर्द हो रहा है",
                "माहवारी में परेशानी",
                "ज्यादा ब्लीडिंग हो रही है",
                "पीठ में दर्द है पीरियड्स के कारण",
                "अनियमित माहवारी",
                "पीरियड्स लेट हो गए हैं",
                "पीरियड्स जल्दी आ गए हैं"
            ],
            te: [
                "నెలసరి నొప్పి",
                "పీరియడ్స్ లో ఇబ్బంది",
                "ఎక్కువ రక్తస్రావం",
                "నడుము నొప్పి పీరియడ్స్ వల్ల",
                "అక్రమ రుతుస్రావం",
                "పీరియడ్స్ ఆలస్యం",
                "పీరియడ్స్ ముందుగా వచ్చాయి"
            ],
            kn: [
                "ಮುಟ್ಟಿನ ನೋವು",
                "ಮುಟ್ಟಿನಲ್ಲಿ ತೊಂದರೆ",
                "ಹೆಚ್ಚಿನ ರಕ್ತಸ್ರಾವ",
                "ಬೆನ್ನು ನೋವು ಮುಟ್ಟಿನಿಂದ",
                "ಅಕ್ರಮ ಮುಟ್ಟು",
                "ಮುಟ್ಟು ತಡವಾಗಿದೆ",
                "ಮುಟ್ಟು ಮುಂಚಿತವಾಗಿ ಬಂದಿದೆ"
            ],
            ml: [
                "ആർത്തവ വേദന",
                "പീരീഡ്സ് പ്രശ്നങ്ങൾ",
                "അമിത രക്തസ്രാവം",
                "നടുവേദന പീരീഡ്സ് കാരണം",
                "ക്രമരഹിതമായ ആർത്തവം",
                "പീരീഡ്സ് വൈകുന്നു",
                "പീരീഡ്സ് നേരത്തെ വന്നു"
            ],
            gu: [
                "માસિકમાં દુખાવો",
                "પીરિયડ્સમાં તકલીફ",
                "વધારે રક્તસ્રાવ",
                "પીઠનો દુખાવો પીરિયડ્સને કારણે",
                "અનિયમિત માસિક",
                "પીરિયડ્સ મોડા પડ્યા છે",
                "પીરિયડ્સ વહેલા આવ્યા છે"
            ],
            mr: [
                "पाळीमध्ये वेदना",
                "पाळीची समस्या",
                "जास्त रक्तस्त्राव",
                "पाठीत दुखणे पाळीमुळे",
                "अनियमित पाळी",
                "पाळी उशीरा आली",
                "पाळी लवकर आली"
            ],
            pa: [
                "ਪੀਰੀਅਡ ਦਰਦ",
                "ਮਾਹਵਾਰੀ ਵਿੱਚ ਪਰੇਸ਼ਾਨੀ",
                "ਜ਼ਿਆਦਾ ਖੂਨ ਵਗਣਾ",
                "ਪਿੱਠ ਦਰਦ ਪੀਰੀਅਡ ਕਾਰਨ",
                "ਅਨਿਯਮਿਤ ਮਾਹਵਾਰੀ",
                "ਪੀਰੀਅਡ ਲੇਟ ਹੋ ਗਏ ਹਨ",
                "ਪੀਰੀਅਡ ਜਲਦੀ ਆ ਗਏ ਹਨ"
            ]
        }
    }
};

// Smart search for medical conditions
const searchMedicalConditions = (query, language = 'en') => {
    try {
        if (!query || !language) {
            return { results: [], totalMatches: 0 };
        }

        const normalizedQuery = query.toLowerCase().trim();
        const matches = [];

        // Split query into words and filter out very short words
        const queryWords = normalizedQuery.split(/\s+/).filter(word => word.length > 2);
        if (queryWords.length === 0) {
            return { results: [], totalMatches: 0 };
        }

        Object.entries(medicalConditionsMultilingual).forEach(([condition, data]) => {
            let score = 0;
            let matchDetails = [];

            // Check if we have natural language phrases for this language
            const naturalLanguagePhrases = data.naturalLanguage?.[language] || [];
            
            // Check exact matches first
            const exactMatches = naturalLanguagePhrases.filter(phrase => {
                const normalizedPhrase = phrase.toLowerCase();
                return normalizedPhrase === normalizedQuery;
            });
            
            if (exactMatches.length > 0) {
                score += 20;
                matchDetails.push('exact_match');
            }

            // Check phrase matches
            const phraseMatches = naturalLanguagePhrases.filter(phrase => {
                const normalizedPhrase = phrase.toLowerCase();
                return normalizedPhrase.includes(normalizedQuery) || 
                       normalizedQuery.includes(normalizedPhrase);
            });

            if (phraseMatches.length > 0) {
                score += phraseMatches.length * 10;
                matchDetails.push('phrase_match');
            }

            // Check word-by-word matches in natural language phrases
            naturalLanguagePhrases.forEach(phrase => {
                const phraseWords = phrase.toLowerCase().split(/\s+/).filter(word => word.length > 2);
                const matchingWords = queryWords.filter(queryWord => 
                    phraseWords.some(phraseWord => 
                        phraseWord === queryWord || // Exact word match
                        (phraseWord.length > 4 && queryWord.length > 4 && // For longer words
                         (phraseWord.includes(queryWord) || queryWord.includes(phraseWord)))
                    )
                );

                if (matchingWords.length > 0) {
                    const matchQuality = matchingWords.length / queryWords.length;
                    if (matchQuality >= 0.5) { // At least 50% of words match
                        score += matchingWords.length * 5;
                        matchDetails.push('word_match');
                    }
                }
            });

            // Check symptoms
            if (data.symptoms) {
                const symptomMatches = data.symptoms.filter(symptom => {
                    const normalizedSymptom = symptom.toLowerCase();
                    
                    // Exact symptom match
                    if (normalizedSymptom === normalizedQuery) {
                        score += 15;
                        matchDetails.push('exact_symptom_match');
                        return true;
                    }

                    // Symptom contains query or vice versa
                    if (normalizedSymptom.includes(normalizedQuery) || 
                        normalizedQuery.includes(normalizedSymptom)) {
                        score += 10;
                        matchDetails.push('symptom_overlap');
                        return true;
                    }

                    // Word-by-word symptom matching
                    const symptomWords = normalizedSymptom.split(/\s+/).filter(word => word.length > 2);
                    const matchingWords = queryWords.filter(queryWord => 
                        symptomWords.some(symptomWord => 
                            symptomWord === queryWord || // Exact word match
                            (symptomWord.length > 4 && queryWord.length > 4 && // For longer words
                             (symptomWord.includes(queryWord) || queryWord.includes(symptomWord)))
                        )
                    );

                    if (matchingWords.length > 0) {
                        const matchQuality = matchingWords.length / queryWords.length;
                        if (matchQuality >= 0.5) {
                            score += matchingWords.length * 3;
                            matchDetails.push('symptom_word_match');
                            return true;
                        }
                    }

                    return false;
                });

                if (symptomMatches.length > 0) {
                    score += symptomMatches.length * 2;
                }
            }

            // Only include results with a significant score
            if (score >= 5) {
                matches.push({
                    condition,
                    score,
                    emergency: data.emergency || false,
                    symptoms: data.symptoms || [],
                    firstAid: data.firstAid || [],
                    matchDetails
                });
            }
        });

        // Sort by score and emergency status
        matches.sort((a, b) => {
            if (a.emergency && !b.emergency) return -1;
            if (!a.emergency && b.emergency) return 1;
            return b.score - a.score;
        });

        return {
            results: matches.slice(0, 5), // Return top 5 matches
            totalMatches: matches.length
        };
    } catch (error) {
        console.error('Search error:', error);
        return { results: [], totalMatches: 0, error: error.message };
    }
};

export { searchMedicalConditions };
