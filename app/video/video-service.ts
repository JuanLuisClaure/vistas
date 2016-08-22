import { Injectable } from '@angular/core';

import { videoUrl } from './video';
import { VIDEOS } from './mock-video';

@Injectable()
export class PromesaVideos {
  agarrarVideos(): Promise<videoUrl[]> {
    return Promise.resolve(VIDEOS);
  }
  // See the "Take it slow" appendix
  agarrarVideosSlowly(): Promise<videoUrl[]> {
    return new Promise<videoUrl[]>(resolve =>
      setTimeout(() => resolve(VIDEOS), 2000) // 2 seconds
    );
  }
}
