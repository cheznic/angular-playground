import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable, from } from 'rxjs';
import { scan, map, reduce } from 'rxjs/operators';

@Component({
  selector: 'scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit, OnDestroy {

  values: number[] = [];
  private subscription: Subscription;
  constructor() { }

  ngOnInit() {
    let cnt = 0;
    let loremIpsum: HTMLElement = document.getElementById('inputText');
    let textArray = loremIpsum.textContent.split(' ');

    let observable = from(textArray);

    this.subscription = observable.pipe(
      // reduce is the same but returns only final value
      // reduce((total: number, word: string) => { 
      scan((total: number, word: string) => { 
        return (word.length + total)
      }, 0),
      map(value => {
        // return Math.round(value / textArray.length * 100) / 100;
        cnt++;
        return Math.round(value / cnt * 100) / 100;
      })
    ).subscribe({
      next: value => {
        this.values.push(value);
      }
    })

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
