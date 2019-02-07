import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ServersService, Server} from "../servers.service";

@Injectable()
export class ServerResolver implements Resolve<Server>{
   resolve(
      route: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot
   ): Observable<Server> | Promise<Server> | Server {
      return this.serversService.getServer(Number(route.params['id']));
   }

   constructor(private serversService: ServersService) { }
}