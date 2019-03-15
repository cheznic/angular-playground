import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnDestroy {

  messages: number[] = [];

  // Interval emits a number every 1 second
  private observable = interval(1000);

  private subscription: Subscription;

  constructor() { }

  ngOnInit() {
    // Observer simply updates message array
    var observer = {
      next: (value) => {
        this.messages.push(value);
      }
    }

    // Observable uses map to double the value emitted by interval.
    // Throttle waits just under four seconds to pass next value,
    // and then at four seconds the next value is emitted.
    this.subscription = this.observable.pipe(
      map(value => {
        return value * 2;
      }),
      throttleTime(3992)
    ).subscribe(observer);
  }

  ngOnDestroy() {
    // don't forget to cleanup
    this.subscription.unsubscribe();
  }
}
