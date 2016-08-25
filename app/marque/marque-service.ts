import { Injectable } from '@angular/core';

import { marqueObj } from './marque';
import { MARQUE } from './mock-marque';

@Injectable()
export class PromesaMarqueMensajes {


  agarrarMarque(): Promise<marqueObj[]> {
    return Promise.resolve(MARQUE);
  }
  // See the "Take it slow" appendix
  agarrarmarqueConTiempo(): Promise<marqueObj[]> {
    return new Promise<marqueObj[]>(resolve =>
      setTimeout(() => resolve(MARQUE), 2000) // 2 seconds
    );
  }


}
