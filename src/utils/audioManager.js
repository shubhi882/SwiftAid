import { Howl } from 'howler';

export const AudioStatus = {
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  PLAYING: 'PLAYING',
  ERROR: 'ERROR',
};

export class AudioManager {
  constructor() {
    this.currentSound = null;
  }

  loadAndPlayAudio(audioFile, onStatusChange, onError) {
    if (this.currentSound) {
      this.currentSound.stop();
      this.currentSound.unload();
    }

    onStatusChange(AudioStatus.LOADING);

    this.currentSound = new Howl({
      src: [`/audio/${audioFile}.mp3`],
      html5: true,
      onload: () => {
        this.currentSound.play();
        onStatusChange(AudioStatus.PLAYING);
      },
      onend: () => {
        onStatusChange(AudioStatus.IDLE);
      },
      onloaderror: (id, error) => {
        console.error('Failed to load sound', error);
        onError(`Could not load audio file: ${error}`);
        onStatusChange(AudioStatus.ERROR);
      },
      onplayerror: (id, error) => {
        console.error('Failed to play sound', error);
        onError('Failed to play audio file');
        onStatusChange(AudioStatus.ERROR);
      },
    });
  }

  stop() {
    if (this.currentSound) {
      this.currentSound.stop();
    }
  }

  release() {
    if (this.currentSound) {
      this.currentSound.unload();
      this.currentSound = null;
    }
  }
}

export const audioManager = new AudioManager();
