const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const util = require('util');
const execAsync = util.promisify(exec);

const procedures = [
  'cpr',
  'heimlich',
  'bleeding',
  'burn',
  'fracture',
  'choking',
  'recovery',
  'shock'
];

const languages = {
  'english': 'This is a test audio file for {procedure} in English',
  'hindi': 'यह हिंदी में {procedure} के लिए एक टेस्ट ऑडियो फ़ाइल है',
  'kannada': 'ಇದು ಕನ್ನಡದಲ್ಲಿ {procedure} ಗಾಗಿ ಪರೀಕ್ಷಾ ಆಡಿಯೋ ಫೈಲ್ ಆಗಿದೆ',
  'malayalam': 'ഇത് മലയാളത്തിൽ {procedure} നുള്ള ടെസ്റ്റ് ഓഡിയോ ഫയൽ ആണ്',
  'gujarati': 'આ ગુજરાતીમાં {procedure} માટે ટેસ્ટ ઓડિયો ફાઇલ છે',
  'marathi': 'ही मराठीमध्ये {procedure} साठी एक चाचणी ऑडिओ फाइल आहे',
  'punjabi': 'ਇਹ ਪੰਜਾਬੀ ਵਿੱਚ {procedure} ਲਈ ਇੱਕ ਟੈਸਟ ਆਡੀਓ ਫਾਈਲ ਹੈ'
};

async function generateTestAudio() {
  const audioDir = path.join(__dirname, '..', 'public', 'audio');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(audioDir)) {
    fs.mkdirSync(audioDir, { recursive: true });
  }

  for (const procedure of procedures) {
    for (const [lang, text] of Object.entries(languages)) {
      const message = text.replace('{procedure}', procedure);
      const fileName = `${procedure}_${lang}.mp3`;
      const filePath = path.join(audioDir, fileName);

      try {
        // Using edge-tts to generate audio files
        await execAsync(`edge-tts --voice "en-US-ChristopherNeural" --text "${message}" --write-media "${filePath}"`);
        console.log(`Generated ${fileName}`);
      } catch (error) {
        console.error(`Error generating ${fileName}:`, error);
      }
    }
  }
}

generateTestAudio().catch(console.error);
