import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { numeroComponente }  from './numero/numero.componente';
import { componenteDeVideo }  from './video/video.component';
import { componenteDeMarque }  from './marque/marque.component';
import { componenteDeTicket }  from './ticket/ticket.component';
import { anywant }  from './app-s/app.component';






@NgModule({
  imports:      [ BrowserModule],
  declarations: [ anywant, componenteDeVideo, componenteDeMarque, componenteDeTicket, numeroComponente ],
  bootstrap:    [ anywant ]
})


export class AppModule { }
