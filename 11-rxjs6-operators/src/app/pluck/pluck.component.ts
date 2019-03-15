import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, pluck } from 'rxjs/operators';

@Component({
  selector: 'pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  text: string = '';
  constructor() { }

  ngOnInit() {
    let input: HTMLElement = document.getElementById('textfield');
    let observable = fromEvent(input, 'input');

    this.subscription = observable.pipe(
      pluck('target', 'value'),
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
