import { Component, OnDestroy, OnInit } from 'angular2/core';
import { Router, CanActivate } from 'angular2/router';
import { Observable, Subscription } from 'rxjs/Rx';

import { Fishinglog, FishinglogService } from '../fishinglogs/fishinglogs';
import { AuthService, isLoggedIn } from '../auth/auth.service';
import { ToastService } from '../blocks/blocks';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html',
  styleUrls: ['app/dashboard/dashboard.component.css']
})
@CanActivate(isLoggedIn)
export class DashboardComponent implements OnDestroy, OnInit {
  private _dbResetSubscription: Subscription;

  fishinglogs: Observable<Fishinglog[]>;

  constructor(
    private _fishinglogService: FishinglogService,
    private _router: Router,
    private _toastService: ToastService) { }

  getFishinglogs() {
    // this._spinnerService.show();
    debugger;
    this.fishinglogs = this._fishinglogService.getFishinglogs()
      .catch(e => {
          debugger;
        this._toastService.activate(`${e}`);
        return Observable.of();
      })
      // .finally(() => { this._spinnerService.hide(); })
  }

  gotoDetail(fishinglog: Fishinglog) {
    let link = ['Fishinglogs', 'Fishinglog', { id: fishinglog.id }];
    this._router.navigate(link);
  }

  ngOnDestroy() {
    this._dbResetSubscription.unsubscribe();
  }

  ngOnInit() {
    this.getFishinglogs();
    this._dbResetSubscription = this._fishinglogService.onDbReset
      .subscribe(() => this.getFishinglogs());
  }
}
