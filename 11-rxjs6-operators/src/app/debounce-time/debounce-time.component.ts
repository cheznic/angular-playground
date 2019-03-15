import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css']
})
export class DebounceTimeComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  text: string= '';

  constructor() { }

  ngOnInit() {
    let input: HTMLElement = document.getElementById('textfield');
    let observable = fromEvent(input, 'input');
    
    this.subscription = observable.pipe(
      map(value =>{
        return (<HTMLInputElement>event.target).value;
      }),
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe({
      next: (value: string) => {
        this.text = value;
      },
      error: err => {
        console.error('Error:', err);
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
