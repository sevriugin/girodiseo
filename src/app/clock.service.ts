import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClockService {
  private clock: Observable<Date>;
  private timeoutId;

  constructor() {
    this.clock = new Observable(obsever => {
      this.timeoutId = setTimeout(() => {
        obsever.next(new Date);
        return {unsubscribe() {
          clearTimeout(this.timeoutId);
        }};
      }, 100);
    });
  }
  getClock(): Observable<Date> {
    return this.clock;
  }
}
