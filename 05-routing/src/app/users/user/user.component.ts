import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number, name: string };
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };

    // Subscribing to ActivatedRoute.params will assure you can respond to 
    // internal (Angular) changes to the route parameters.  In most cases
    // do this.
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    )
  }

  // As a convenience Angular will destroy the subscription when the component 
  // is destroyed.  To be explicit the following happens.  To be clear, the 
  // following is done automatically but for clarity you could include this.
  //  - define and import Subscription from rxjs
  //  - set the return value from subscribe() to paramsSubscription
  //  - implement OnDestroy
  //  - unsubscribe
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
