import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs'
import { filter } from 'rxjs/operators';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit, OnDestroy {
  // Interval emits a number every 1 second
  private observable = interval(1000);
  private subscription: Subscription;

  messages: number[] = [];

  constructor() { }

  ngOnInit() {

    this.subscription = this.observable
      .pipe(
        filter(value => {
          return value % 4 === 0;
        }, this)
      )
      .subscribe({
        next: value => {
          this.messages.push(value);
        },
        error: error => {
          console.log('Error:', error);
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
