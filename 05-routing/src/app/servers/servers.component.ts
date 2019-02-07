import { Component, OnInit } from '@angular/core';
import { ServersService, Server } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  // private servers: Server[] = [];
  servers: Server[] = [];

  constructor(
    private serversService: ServersService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReloadServersClicked() {
    // this.router.navigate(['/servers'], {relativeTo: this.activeRoute});
    this.servers = this.serversService.getServers();
  }
}
