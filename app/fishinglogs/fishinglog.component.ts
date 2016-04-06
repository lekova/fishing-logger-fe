import { Component, Input, OnDestroy, OnInit } from 'angular2/core';
import { CanDeactivate, ComponentInstruction, RouteParams, Router, ROUTER_DIRECTIVES } from 'angular2/router';
import { Observable, Subscription } from 'rxjs/Rx';

import { EntityService, ModalService, ToastService } from '../blocks/blocks';
import { Fishinglog, FishinglogService } from '../fishinglogs/fishinglog.service';

@Component({
  selector: 'my-fishing-log',
  templateUrl: 'app/fishinglogs/fishinglog.component.html',
  styles: ['.mdl-textfield__label {top: 0;}'],
  directives: [ROUTER_DIRECTIVES]
})
export class FishinglogComponent implements CanDeactivate, OnDestroy, OnInit {
  private _dbResetSubscription: Subscription;

  @Input() fishinglog: Fishinglog;
  editFishinglog: Fishinglog = <Fishinglog>{};

  constructor(
    private _fishinglogService: FishinglogService,
    private _entityService: EntityService,
    private _modalService: ModalService,
    private _routeParams: RouteParams,
    private _router: Router,
    private _toastService: ToastService) { }

  cancel(showToast = true) {
    this.editFishinglog = this._entityService.clone(this.fishinglog);
    if (showToast) {
      this._toastService.activate(`Cancelled changes to ${this.fishinglog.place_name}`);
    }
  }

  delete() {
    let msg = `Do you want to delete ${this.fishinglog.place_name}?`;
    this._modalService.activate(msg).then(responseOK => {
      if (responseOK) {
        this.cancel(false);
        this._fishinglogService.deleteFishinglog(this.fishinglog)
          .subscribe(() => {
            this._toastService.activate(`Deleted ${this.fishinglog.place_name}`);
            this._gotoFishinglogs();
          });
      }
    });
  }

  isAddMode() {
    let id = +this._routeParams.get('id');
    return isNaN(id);
  }

  ngOnDestroy() {
    this._dbResetSubscription.unsubscribe();
  }

  ngOnInit() {
    componentHandler.upgradeDom();
    this._getFishinglog();
    this._dbResetSubscription = this._fishinglogService.onDbReset
      .subscribe(() => this._getFishinglog());
  }

  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
    return !this.fishinglog ||
      !this._isDirty() ||
      this._modalService.activate();
  }

  save() {
    let fishinglog = this.fishinglog = this._entityService.merge(this.fishinglog, this.editFishinglog);
    if (fishinglog.id == null) {
      this._fishinglogService.addFishinglog(fishinglog)
        .subscribe(char => {
          this._setEditFishinglog(char);
          this._toastService.activate(`Successfully added ${char.name}`);
          this._gotoFishinglogs();
        });
      return;
    }
    this._fishinglogService.updateFishinglog(fishinglog)
      .subscribe(() => this._toastService.activate(`Successfully saved ${fishinglog.name}`));
  }

  private _getFishinglog() {
    let id = +this._routeParams.get('id');
    if (id === 0) return;
    if (this.isAddMode()) {
      this.fishinglog = <Fishinglog>{ place_name: '', location: 'dark' };
      this.editFishinglog = this._entityService.clone(this.fishinglog);
      return;
    }
    this._fishinglogService.getFishinglog(id)
      .subscribe(fishinglog => this._setEditFishinglog(fishinglog));
  }

  private _gotoFishinglogs() {
    let id = this.fishinglog ? this.fishinglog.id : null;
    let route = ['Fishinglogs', { id: id }];
    this._router.navigate(route);
  }

  private _handleServiceError(op: string, err: any) {
    console.error(`${op} error: ${err.message || err}`);
  }

  private _isDirty() {
    return this._entityService.propertiesDiffer(this.fishinglog, this.editFishinglog);
  }

  private _setEditFishinglog(fishinglog: Fishinglog) {
    if (fishinglog) {
      this.fishinglog = fishinglog;
      this.editFishinglog = this._entityService.clone(this.fishinglog);
    } else {
      this._gotoFishinglogs();
    }
  }

}