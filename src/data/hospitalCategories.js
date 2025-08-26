export const hospitalCategories = {
  general: {
    en: "General Hospital",
    hi: "सामान्य अस्पताल",
    kn: "ಸಾಮಾನ್ಯ ಆಸ್ಪತ್ರೆ",
    ml: "ജനറൽ ആശുപത്രി",
    gu: "જનરલ હોસ્પિટલ",
    mr: "सामान्य रुग्णालय",
    pa: "ਜਨਰਲ ਹਸਪਤਾਲ",
    keywords: ["hospital", "general", "medical center", "healthcare"]
  },
  eyecare: {
    en: "Eye Care Hospital",
    hi: "नेत्र चिकित्सालय",
    kn: "ನೇತ್ರ ಆಸ್ಪತ್ರೆ",
    ml: "നേത്ര ആശുപത്രി",
    gu: "આંખની હોસ્પિટલ",
    mr: "नेत्र रुग्णालय",
    pa: "ਅੱਖਾਂ ਦਾ ਹਸਪਤਾਲ",
    keywords: ["eye", "ophthalmology", "vision", "optical"]
  },
  fertility: {
    en: "Fertility Center",
    hi: "प्रजनन केंद्र",
    kn: "ಫರ್ಟಿಲಿಟಿ ಸೆಂಟರ್",
    ml: "ഫെർട്ടിലിറ്റി സെന്റർ",
    gu: "ફર્ટિલિટી સેન્ટર",
    mr: "फर्टिलिटी सेंटर",
    pa: "ਫਰਟੀਲਿਟੀ ਸੈਂਟਰ",
    keywords: ["fertility", "ivf", "reproductive", "gynecology"]
  },
  cardiac: {
    en: "Cardiac Hospital",
    hi: "हृदय अस्पताल",
    kn: "ಹೃದಯ ಆಸ್ಪತ್ರೆ",
    ml: "കാർഡിയാക് ആശുപത്രി",
    gu: "હૃદય હોસ્પિટલ",
    mr: "हृदय रुग्णालय",
    pa: "ਦਿਲ ਦਾ ਹਸਪਤਾਲ",
    keywords: ["heart", "cardiac", "cardiology", "cardiovascular"]
  },
  orthopedic: {
    en: "Orthopedic Hospital",
    hi: "हड्डी रोग अस्पताल",
    kn: "ಅಸ್ಥಿ ಆಸ್ಪತ್ರೆ",
    ml: "ഓർത്തോപീഡിക് ആശുപത്രി",
    gu: "હાડકાં હોસ્પિટલ",
    mr: "हाड रोग रुग्णालय",
    pa: "ਹੱਡੀਆਂ ਦਾ ਹਸਪਤਾਲ",
    keywords: ["orthopedic", "bone", "joint", "spine"]
  },
  pediatric: {
    en: "Children's Hospital",
    hi: "बाल चिकित्सालय",
    kn: "ಮಕ್ಕಳ ಆಸ್ಪತ್ರೆ",
    ml: "കുട്ടികളുടെ ആശുപത്രി",
    gu: "બાળકોની હોસ્પિટલ",
    mr: "बाल रुग्णालय",
    pa: "ਬੱਚਿਆਂ ਦਾ ਹਸਪਤਾਲ",
    keywords: ["pediatric", "children", "child", "kids"]
  },
  dental: {
    en: "Dental Hospital",
    hi: "दंत चिकित्सालय",
    kn: "ದಂತ ಆಸ್ಪತ್ರೆ",
    ml: "ഡെന്റൽ ആശുപത്രി",
    gu: "દંત હોસ્પિટલ",
    mr: "दंत रुग्णालय",
    pa: "ਦੰਦਾਂ ਦਾ ਹਸਪਤਾਲ",
    keywords: ["dental", "dentist", "teeth", "oral"]
  },
  cancer: {
    en: "Cancer Hospital",
    hi: "कैंसर अस्पताल",
    kn: "ಕ್ಯಾನ್ಸರ್ ಆಸ್ಪತ್ರೆ",
    ml: "കാൻസർ ആശുപത്രി",
    gu: "કેન્સર હોસ્પિટલ",
    mr: "कर्करोग रुग्णालय",
    pa: "ਕੈਂਸਰ ਹਸਪਤਾਲ",
    keywords: ["cancer", "oncology", "chemotherapy", "radiation"]
  }
};

export const getHospitalCategory = (tags) => {
  const tagString = JSON.stringify(tags).toLowerCase();
  
  for (const [category, data] of Object.entries(hospitalCategories)) {
    if (data.keywords.some(keyword => tagString.includes(keyword.toLowerCase()))) {
      return category;
    }
  }
  return 'general';
};
