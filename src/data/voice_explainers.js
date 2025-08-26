import { burnsVoiceExplainers } from './burns_voice';
import { snakebiteVoiceExplainers } from './snakebite_voice';
import { heatstrokeVoiceExplainers } from './heatstroke_voice';
import { seizureVoiceExplainers } from './seizure_voice';
import { cprVoiceExplainers } from './cpr_voice';
import { bleedingVoiceExplainers } from './bleeding_voice';

// Create a function to add voice explainers to procedures
export function addVoiceExplainers(procedures) {
  // Create a deep copy of procedures to avoid modifying the original
  const enhancedProcedures = JSON.parse(JSON.stringify(procedures));

  // Add voice explainers to each procedure
  if (enhancedProcedures.cpr) {
    Object.keys(enhancedProcedures.cpr).forEach(lang => {
      if (cprVoiceExplainers[lang]) {
        enhancedProcedures.cpr[lang].voiceExplainer = cprVoiceExplainers[lang].voiceExplainer;
      }
    });
  }

  if (enhancedProcedures.bleeding) {
    Object.keys(enhancedProcedures.bleeding).forEach(lang => {
      if (bleedingVoiceExplainers[lang]) {
        enhancedProcedures.bleeding[lang].voiceExplainer = bleedingVoiceExplainers[lang].voiceExplainer;
      }
    });
  }

  if (enhancedProcedures.burns) {
    Object.keys(enhancedProcedures.burns).forEach(lang => {
      if (burnsVoiceExplainers[lang]) {
        enhancedProcedures.burns[lang].voiceExplainer = burnsVoiceExplainers[lang].voiceExplainer;
      }
    });
  }

  if (enhancedProcedures.snakebite) {
    Object.keys(enhancedProcedures.snakebite).forEach(lang => {
      if (snakebiteVoiceExplainers[lang]) {
        enhancedProcedures.snakebite[lang].voiceExplainer = snakebiteVoiceExplainers[lang].voiceExplainer;
      }
    });
  }

  if (enhancedProcedures.heatstroke) {
    Object.keys(enhancedProcedures.heatstroke).forEach(lang => {
      if (heatstrokeVoiceExplainers[lang]) {
        enhancedProcedures.heatstroke[lang].voiceExplainer = heatstrokeVoiceExplainers[lang].voiceExplainer;
      }
    });
  }

  if (enhancedProcedures.seizure) {
    Object.keys(enhancedProcedures.seizure).forEach(lang => {
      if (seizureVoiceExplainers[lang]) {
        enhancedProcedures.seizure[lang].voiceExplainer = seizureVoiceExplainers[lang].voiceExplainer;
      }
    });
  }

  return enhancedProcedures;
}
