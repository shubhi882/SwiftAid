import { stomachPainData } from './stomachPain';
import { feverData } from './fever';
import { headacheData } from './headache';
import { coughData } from './cough';
import { coldData } from './cold';

const multilingualMedicalData = {
  commonConditions: {
    stomachPain: stomachPainData,
    fever: feverData,
    headache: headacheData,
    cough: coughData,
    cold: coldData,
    // Other conditions can be imported here
  }
};

export { multilingualMedicalData };
