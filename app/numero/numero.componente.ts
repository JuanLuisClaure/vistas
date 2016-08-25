import {Component}  from '@angular/core';


import { numeroCodigo } from './numero';
import { PromesaNumerosDelTicket } from './numero-service';


@Component({
    selector: 'componente-de-numero',
    providers: [PromesaNumerosDelTicket],
    styleUrls: ['../../public/pages/numero.style.scss'],
    template:
    `

    <ul><li *ngFor="let x of numeroList">{{x.puesto}}</li></ul>

    `
})

export class numeroComponente {

      numeroList: numeroCodigo[];

      constructor(private promesanumerosdelticket: PromesaNumerosDelTicket){}

      soltarNumerosDeTickets(){

              this.promesanumerosdelticket.agarrarMensajesDeNumero()
              .then(value => {

                  this.numeroList = value//pasando los datos del json para enlistar

              }).catch(error => {

                console.log('es un error');
              })

      }

      ngOnInit() {


        this.soltarNumerosDeTickets();
      }



}
