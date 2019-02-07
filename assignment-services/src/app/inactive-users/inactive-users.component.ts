import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../user.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService, private counter: CounterService) { }

  ngOnInit() {
    this.users = this.userService.users;
  }

  onSetToActive(id: number) {
    this.userService.users[id].active = true;
    this.counter.incrementUserStateChangeCount();
  }
}
