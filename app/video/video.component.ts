import { Component} from '@angular/core';

import { videoUrl } from './video';
import { PromesaVideos } from './video-service';




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



@Component({
  selector: 'componente-de-video',
  providers: [PromesaVideos],
  styles: [`

    .frame {
      background-color: grey !important;
      color: white;
      

    }
    .contenedor {

    }

  `],
  template: `
    <div *ngFor="let videos of videoList" class="frame" >

    <img [src]="videos.video" class="contenedor">

    </div>
  `



})





/////////////////////////////////////////////////////////////////////////////////////////////////////////7777777




export class componenteDeVideo  {

videoList: videoUrl[];

constructor(private PromesaVideos: PromesaVideos){}

soltarVideo(){
  this.PromesaVideos.agarrarVideos()
  .then(value => {

    this.videoList = value//buena practica poner value

  })
  .catch(error => {

    console.log('es un error');

  }) ;
}


ngOnInit() {


  this.soltarVideo();
}



}
