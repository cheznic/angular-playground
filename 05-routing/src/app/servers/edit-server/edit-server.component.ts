import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ServersService, Server } from '../servers.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: Server;
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(
    private serversService: ServersService,
    private activeRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id = this.activeRoute.snapshot.params['id'];
    this.server = this.serversService.getServer(Number(id));
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    this.activeRoute.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      }
    );
    this.activeRoute.fragment.subscribe();
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.activeRoute });
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    if (
      (this.serverName !== this.server.name || this.serverStatus !== this.server.status) &&
      !this.changesSaved) {
        return confirm('Do you want to discard your changes?');
    } else {
      return true;
    }
  }

}
