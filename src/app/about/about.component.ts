import { Component, OnInit } from '@angular/core';
import Speech from 'speak-tts';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  play: boolean = true;
  pausa: boolean = false;
  reanudar: boolean = false;
  html = '';
  speech: any;
  speechData: any;
  video = 'g3ZNprweps0';
  

  constructor() { 
    
    this.speech = new Speech() // will throw an exception if not browser supported
    if(this.speech .hasBrowserSupport()) { // returns a boolean
        console.log("speech synthesis supported")
        this.speech.init({
                'volume': 1,
                'lang': 'es-MX',
                'rate': 1,
                'pitch': 1,
                'voice':'Microsoft Sabina Desktop - Spanish (Mexico)',
                'splitSentences': true,
                'listeners': {
                    'onvoiceschanged': (voices) => {
                        console.log("Event voiceschanged", voices)
                    }
                }
        }).then((data) => {
            // The "data" object contains the list of available voices and the voice synthesis params
            console.log("Speech is ready, voices are available", data)
            this.speechData = data;
            data.voices.forEach(voice => {
            console.log(voice.name + " "+ voice.lang)
            });
        }).catch(e => {
            console.error("An error occured while initializing : ", e)
        })
    }
  }

  ngOnInit(): void {
  }

  start(texto:string){

    this.pausa=true;
    this.play=false;
    console.log(texto);


      this.speech.speak({
          text: texto,
      }).then(() => {
          console.log("Success !")
      }).catch(e => {
          console.error("An error occurred :", e)
      })
  }
  pause(){
    this.speech.pause();
  }
  resume(){
    this.speech.resume();
  }

}
