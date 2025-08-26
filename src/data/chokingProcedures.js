import { choking_en } from './choking_en';
import { choking_hi } from './choking_hi';
import { choking_te } from './choking_te';
import { choking_kn } from './choking_kn';
import { choking_ml } from './choking_ml';
import { choking_gu } from './choking_gu';
import { choking_mr } from './choking_mr';
import { choking_pa } from './choking_pa';

export const chokingProcedures = {
    en: choking_en,
    hi: choking_hi,
    te: choking_te,
    kn: choking_kn,
    ml: choking_ml,
    gu: choking_gu,
    mr: choking_mr,
    pa: choking_pa
};

export const supportedLanguages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
    { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
    { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
    { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
    { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
    { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
    { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' }
];
