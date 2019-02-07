import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-assignment',
  templateUrl: './data-binding-assignment.component.html',
  styleUrls: ['./data-binding-assignment.component.css']
})
export class DataBindingAssignmentComponent implements OnInit {

  userName: string = '';
  allowResetName = false;

  constructor() { }

  ngOnInit() {
  }

  onUpdateUserName(event: Event) {
    this.allowResetName = (this.userName.length < 3) ? false : true;
  }

  onResetName() {
    this.userName = "";
    this.allowResetName = false;
  }
}
