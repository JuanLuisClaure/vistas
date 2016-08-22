import { Component} from '@angular/core';

import { videoUrl } from './video';
import { PromesaVideos } from './video-service';




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



@Component({
  selector: 'componente-de-video',
  styles: [`

    .frame {
      background-color: black !important;
      color: white;
      height:70%;

    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }

  `],
  template: `
    <div class="frame">
    <img src="{{videoExample}}">

    </div>
  `



})





/////////////////////////////////////////////////////////////////////////////////////////////////////////7777777




export class componenteDeVideo  {

videoExample: videoUrl[];

constructor(private PromesaVideos: PromesaVideos){}

soltarVideo(){
  this.PromesaVideos.agarrarVideos()
  .then(value => {

    this.videoExample = value//buena practica poner value

  })
  .catch(error => {

    console.log('es un error');

  }) ;
}


ngOnInit() {


  this.soltarVideo();
}



}
