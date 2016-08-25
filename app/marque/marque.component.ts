import { Component } from '@angular/core';

import { marqueObj } from './marque';
import { PromesaMarqueMensajes } from './marque-service';


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



@Component({
  selector: 'componente-de-marque',
  providers: [PromesaMarqueMensajes],
  styleUrls: ['../../public/pages/marque.style.scss'],

    template:
    `
<div class="marquee" data-marque="hola vida"></div>





    `




})





/////////////////////////////////////////////////////////////////////////////////////////////////////////7777777

// <ul><li *ngFor="let x of marqueMensajesList">{{x.mensaje}}</li></ul>


export class componenteDeMarque  {
title='holamundo';
marqueMensajesList: marqueObj[];

constructor(private promesasdemensajesmarque:PromesaMarqueMensajes){}

soltarMensajes(){

    this.promesasdemensajesmarque.agarrarMarque()
    .then(value => {
        this.marqueMensajesList = value
    }).catch(error => {
        console.log('error')
    })


}
ngOnInit() {


    this.soltarMensajes();
}

}
