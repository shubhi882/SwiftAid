// Import all procedure translations
import { fracture_pa } from './fracture/fracture_pa_temp.js';
import { seizure_pa } from './seizure/seizure_pa_temp.js';
import { heartattack_pa } from './heartattack/heartattack_pa_temp.js';
import { poisoning_pa } from './poisoning/poisoning_pa_temp.js';
import { drowning_pa } from './drowning/drowning_pa_temp.js';

// Export all procedures
export const procedures = {
  fractures: {
    pa: fracture_pa,
  },
  seizures: {
    pa: seizure_pa,
  },
  heartattack: {
    pa: heartattack_pa,
  },
  poisoning: {
    pa: poisoning_pa,
  },
  drowning: {
    pa: drowning_pa,
  }
};
