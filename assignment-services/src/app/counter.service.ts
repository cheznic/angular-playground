export class CounterService {
   userStateChangeCount: number = 0;
   userListReadCount: number = 0;

   incrementUserStateChangeCount() {
      this.userStateChangeCount++;
      console.log(`User state has been changed ${this.userStateChangeCount} times.`);
   }

   incrementUserListReadCount() {
      this.userListReadCount++;
      console.log(`User list has been read ${this.userListReadCount} times.`);

   }
}