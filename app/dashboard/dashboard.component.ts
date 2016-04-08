import { Component, OnDestroy, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Observable, Subscription } from 'rxjs/Rx';

import { Fishinglog, FishinglogService } from '../fishinglogs/fishinglogs';
import { ToastService } from '../blocks/blocks';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html',
  styleUrls: ['app/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnDestroy, OnInit {
  private _dbResetSubscription: Subscription;

  fishinglogs: Observable<Fishinglog[]>;

  constructor(
    private _fishinglogService: FishinglogService,
    private _router: Router,
    private _toastService: ToastService) { }

  getFishinglogs() {
    // this._spinnerService.show();
    this.fishinglogs = this._fishinglogService.getFishinglogs()
      .catch(e => {
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
