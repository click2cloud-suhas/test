// speach.component.ts

import { Component } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-speach',
  templateUrl: './speach.component.html',
  styleUrls: ['./speach.component.css']
})
export class SpeachComponent {
  textToSpeak: string = '';
  selectedLanguage: string = 'ur-PK';
  apiKey: string = 'AIzaSyCDSYXTigOBF6e_zn_IJm-eUGeE-7df1JE';
  apiEndpoint: string = 'https://texttospeech.googleapis.com/v1/text:synthesize';

  constructor(private http: HttpClient) {}

  // speak() {
  //   const requestBody = {
  //     input: { text: this.textToSpeak },
  //     voice: { languageCode: this.selectedLanguage },
  //     audioConfig: { audioEncoding: 'MP3' }
  //   };
  //
  //   this.http.post(this.apiEndpoint + '?key=' + this.apiKey, requestBody)
  //     .subscribe((response: any) => {
  //       const audioData = response.audioContent;
  //       const audioBlob = new Blob([this.base64ToArrayBuffer(audioData)], { type: 'audio/mp3' });
  //       const audioUrl = URL.createObjectURL(audioBlob);
  //
  //       const audio = new Audio();
  //       audio.src = audioUrl;
  //       audio.play();
  //     }, (error: unknown) => {
  //       console.error('Error synthesizing speech:', error);
  //     });
  // }

  speak() {
    const requestBody = [
      {
        text : `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='en-US'>
                  <voice name='en-US-GuyNeural'>Hello, this is a test.</voice>
                </speak>`
      },
    ];

    const apiKey = '0989b3ddf651418d83d917ccc86226a2';
    const azureRegion = 'centralindia'; // Replace with the actual region

    const endpoint = `https://${azureRegion}.tts.speech.microsoft.com/cognitiveservices/v1`;

    this.http.post(
      endpoint,
      requestBody,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/ssml+xml',
          'Ocp-Apim-Subscription-Key': apiKey,
          'X-MICROSOFT-OutputFormat': 'audio-16khz-128kbitrate-mono-mp3'
        }),
        responseType: 'arraybuffer',
      }
    ).subscribe(
      (audioData: ArrayBuffer) => {
        const audioBlob = new Blob([audioData], { type: 'audio/mp3' });
        const audioUrl = URL.createObjectURL(audioBlob);

        const audio = new Audio();
        audio.src = audioUrl;
        audio.play();
      },
      (error: HttpErrorResponse) => {
        console.error('Text-to-Speech API Error:', error);

        // Log the error response body
        const reader = new FileReader();
        reader.onloadend = () => {
          console.error('Error Body:', reader.result);
        };
        reader.readAsText(new Blob([error.error]));
      }
    );
  }



  private base64ToArrayBuffer(base64: string): Uint8Array {
    const binaryString = window.atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);

    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    return bytes;
  }
}
