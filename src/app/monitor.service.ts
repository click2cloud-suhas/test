// monitor.service.ts

import { Injectable } from '@angular/core';
import * as sdk from 'microsoft-cognitiveservices-speech-sdk';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {
  private subscriptionKey: string = '0989b3ddf651418d83d917ccc86226a2';
  private region: string = 'India';

  constructor() {}

  public async speak(text: string, language: string): Promise<void> {
    try {
      const speechConfig = sdk.SpeechConfig.fromSubscription(this.subscriptionKey, this.region);
      const audioConfig = sdk.AudioConfig.fromDefaultMicrophoneInput();

      const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

      // Set the language for synthesis
      speechConfig.speechSynthesisLanguage = language;

      await synthesizer.speakTextAsync(text);
    } catch (error) {
      console.error('Error in speech service:', error);
      throw error; // Rethrow the error for the calling component to handle
    }
  }


}
