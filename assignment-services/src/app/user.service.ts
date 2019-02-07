import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class UserService {
   private _users = [
      new User('Max', true),
      new User('Anna', true),
      new User('Chris', false),
      new User('Manu', false)
   ];

   constructor(private counter: CounterService) { }

   get users(): User[] {
      this.counter.incrementUserListReadCount();
      return this._users;
   }
}

export class User {
   name: string;
   active: boolean;
   constructor(name: string, active: boolean) {
      this.name = name;
      this.active = active;
   }
}
