import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output('newNumberEvent') newNumberEmitter = new EventEmitter<{}>();
  canStart: boolean = true;
  oddAndEvenNumbers = [];
  private intervalId: number;

  onStartClick() {
    this.canStart = false;
    this.oddAndEvenNumbers.length = 0;
    this.intervalId = window.setInterval(() => {
      //Timer callback function...
      let newNumber = this.oddAndEvenNumbers.length + 1;
      this.oddAndEvenNumbers.push(newNumber);
      let event = { 'newNumber': newNumber };
      this.newNumberEmitter.emit(event);
    }, 1000)
  }

  onStopClick() {
    this.canStart = true;
    window.clearInterval(this.intervalId);
  }

  constructor() { }

  ngOnInit() {
  }
}

