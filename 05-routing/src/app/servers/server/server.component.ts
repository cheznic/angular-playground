import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { Server } from '../servers.service';

//import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: Server;

  constructor(
    // private serversService: ServersService,
    private activeRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.activeRoute.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    )

    // this section was used prior to implementing the 

    // const id = this.activeRoute.snapshot.params['id'];
    // this.server = this.serversService.getServer(Number(id));
    // this.activeRoute.params.subscribe(
    //   (params: Params) => {
    //     let id = params['id'];
    //     this.server = this.serversService.getServer(Number(id));
    //   }
    // );
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.activeRoute, queryParamsHandling: 'preserve' });
  }
}
