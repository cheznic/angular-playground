import { Component, OnInit, OnDestroy } from '@angular/core';
import { from, fromEvent, Subscription } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

@Component({
  selector: 'mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.css']
})
export class MergemapComponent implements OnInit, OnDestroy {

  span: HTMLElement;

  subscription: Subscription;

  constructor() { }

  ngOnInit() {
    let input1: HTMLInputElement = document.querySelector('#input1');
    let input2: HTMLInputElement = document.querySelector('#input2');

    this.span = document.querySelector('span');
    let obs1 = fromEvent(input1, 'input');
    let obs2 = fromEvent(input2, 'input');

    // where you add optional brackets made a difference between a successful compile or not
    this.subscription = obs1.pipe(mergeMap(
      event1 => {
        return obs2.pipe(map(
          event2 => (<HTMLInputElement>event1.target).value + ' ' + (<HTMLInputElement>event2.target).value
        ));
      })
    ).subscribe(combinedValue => this.span.textContent = combinedValue);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
