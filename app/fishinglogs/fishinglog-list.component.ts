import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { Observable, Subscription } from 'rxjs/Rx';

import { Fishinglog, FishinglogService } from './fishinglog.service';
import { SortFishinglogsPipe } from './sort-fishinglogs.pipe';
import { FilterService, FilterTextComponent } from '../blocks/blocks';

declare var componentHandler: any;

@Component({
  selector: 'story-fishinglogs',
  templateUrl: './app/fishinglogs/fishinglog-list.component.html',
  directives: [FilterTextComponent, ROUTER_DIRECTIVES],
  styleUrls: ['./app/fishinglogs/fishinglog-list.component.css'],
  pipes: [SortFishinglogsPipe],
  providers: [FilterService]
})
export class FishinglogListComponent implements OnDestroy, OnInit {
  private _dbResetSubscription: Subscription;

  fishinglogs: Fishinglog[];
  filteredFishinglogs = this.fishinglogs;
  @ViewChild(FilterTextComponent) filterComponent: FilterTextComponent;

  constructor(private _fishinglogService: FishinglogService,
    private _filterService: FilterService) { }

  filterChanged(searchText: string) {
    this.filteredFishinglogs = this._filterService.filter(searchText, ['id', 'name'/*, 'side'*/], this.fishinglogs);
  }

  getFishinglogs() {
    this.fishinglogs = [];

    this._fishinglogService.getFishinglogs()
      .subscribe(fishinglogs => {
        console.log('fishinglogs', fishinglogs);
        this.fishinglogs = this.filteredFishinglogs = fishinglogs;
        console.log('this.fishingLogs', this.fishinglogs);
        this.filterComponent.clear();
      });
  }

  ngOnDestroy() {
    this._dbResetSubscription.unsubscribe();
  }

  ngOnInit() {
    componentHandler.upgradeDom();
    this.getFishinglogs();
    console.log("ON Init");
    this._dbResetSubscription = this._fishinglogService.onDbReset
      .subscribe(() => this.getFishinglogs());
  }
}
