import { Component, OnInit } from '@angular/core';
import { UserService, User} from '../user.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService, private counter: CounterService) { }

  ngOnInit() {
    this.users = this.userService.users;
  }

  onSetToInactive(id: number) {
    this.userService.users[id].active = false;
    this.counter.incrementUserStateChangeCount();
  }
}
