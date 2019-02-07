import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-assignment',
  templateUrl: './directives-assignment.component.html',
  styleUrls: ['./directives-assignment.component.css']
})
export class DirectivesAssignmentComponent implements OnInit {
  hideParagraph: boolean = false;
  clickCount = 0;
  clicks = [];

  constructor() { }

  ngOnInit() {
  }

  onDisplayDetails = () => {
    this.hideParagraph = this.hideParagraph ? false : true;
    this.clicks[this.clickCount] = new pair(this.clickCount, new Date());
    this.clickCount++;
  }
}
class pair {
  key: number;
  value: Date;
  constructor(key: number, value: Date) {
    this.key = key;
    this.value = value
  }
}