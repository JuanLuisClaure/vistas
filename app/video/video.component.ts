import { Component} from '@angular/core';

import { videoUrl } from './video';
import { PromesaVideos } from './video-service';






//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



@Component({
  selector: 'componente-de-video',
  providers: [PromesaVideos],
  styleUrls: ['../../public/pages/video.style.scss'],

  template:
  `

  <div class="row" >

      <div class="col-md-12">



      <img *ngFor="let videos of videoList" id="contenedor" [src]="videos.video" class="contenedor">


          <componente-de-marque></componente-de-marque>

          <componente-de-ticket></componente-de-ticket>
      </div>

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

  }).catch(error => {

    console.log('es un error');

  })
}


ngOnInit() {


  this.soltarVideo();
}



}
