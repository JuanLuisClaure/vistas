import { Injectable } from '@angular/core';

import { numeroCodigo } from './numero';
import { MENSAJES } from './mock-numero';

@Injectable()
export class PromesaNumerosDelTicket {
  agarrarMensajesDeNumero(): Promise<numeroCodigo[]> {
    return Promise.resolve(MENSAJES);
  }
  // See the "Take it slow" appendix
  agarrarVideosSlowly(): Promise<numeroCodigo[]> {
    return new Promise<numeroCodigo[]>(resolve =>
      setTimeout(() => resolve(MENSAJES), 2000) // 2 seconds
    );
  }
}
