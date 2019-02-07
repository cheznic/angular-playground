import { Component } from '@angular/core';

@Component({
   selector: 'app-server',
   templateUrl: './server.component.html',
   styleUrls: ['./server.component.css']
})
export class ServerComponent {
   private serverName: string = 'Web Server';
   private serverId: number = 123;
   private serverStatus: string;

   constructor() {
      this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
   }

   getColor() {
      return this.serverStatus == 'online' ? 'lightgreen' : 'pink';
   }
}