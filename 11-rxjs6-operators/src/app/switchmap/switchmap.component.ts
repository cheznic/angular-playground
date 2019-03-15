import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Subscription, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.css']
})
export class SwitchmapComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  counterText: number = 0;

  constructor() { }

  ngOnInit() {
    let button = document.querySelector('#but1');
    let obs1 = fromEvent(button, 'click');
    let obs2 = interval(1000);

    this.subscription = obs1.pipe(switchMap(event => {
      return obs2
    })).subscribe(value =>
      this.counterText = value
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
