import { Observable } from "rxjs/Observable";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

export interface CanComponentDeactivate {
   canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
   // canDeactivate: () => boolean | Observable<boolean> | Promise<boolean> 

   canDeactivate(
      component: CanComponentDeactivate,
      currentRoute: ActivatedRouteSnapshot,
      currentState: RouterStateSnapshot,
      nextState?: RouterStateSnapshot
   ): Observable<boolean> | Promise<boolean> | boolean {

      return component.canDeactivate();
   }

}