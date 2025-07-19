class SpeechService {
  private synthesis: SpeechSynthesis;
  private currentUtterance: SpeechSynthesisUtterance | null = null;

  constructor() {
    this.synthesis = window.speechSynthesis;
  }

  public async speak(text: string): Promise<void> {
    return new Promise((resolve, reject) => {
      // Cancel any current speech
      this.stop();

      const utterance = new SpeechSynthesisUtterance(text);
      this.currentUtterance = utterance;

      // Configure voice for Churchill-like delivery
      const voices = this.synthesis.getVoices();
      const britishVoice = voices.find(voice => 
        voice.lang.includes('en-GB') || 
        voice.name.includes('British') || 
        voice.name.includes('UK')
      );

      if (britishVoice) {
        utterance.voice = britishVoice;
      }

      // Churchill-like speech characteristics
      utterance.rate = 0.8; // Slower, more deliberate
      utterance.pitch = 0.9; // Slightly lower pitch
      utterance.volume = 1.0; // Full volume for gravitas

      utterance.onend = () => {
        this.currentUtterance = null;
        resolve();
      };

      utterance.onerror = (event) => {
        this.currentUtterance = null;
        reject(new Error(`Speech synthesis error: ${event.error}`));
      };

      this.synthesis.speak(utterance);
    });
  }

  public stop(): void {
    if (this.synthesis.speaking) {
      this.synthesis.cancel();
    }
    this.currentUtterance = null;
  }

  public isSpeaking(): boolean {
    return this.synthesis.speaking;
  }

  public getAvailableVoices(): SpeechSynthesisVoice[] {
    return this.synthesis.getVoices();
  }
}

export const speechService = new SpeechService();