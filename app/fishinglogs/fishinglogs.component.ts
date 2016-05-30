import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { FishinglogComponent } from './fishinglog.component';
import { FishinglogListComponent } from './fishinglog-list.component';
import { FishinglogService } from './fishinglog.service';

@Component({
  selector: 'story-fishinglogs-root',
  template: `<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', name: 'Fishinglogs', component: FishinglogListComponent, useAsDefault: true },
  { path: '/list/:id', name: 'Fishinglogs', component: FishinglogListComponent },
  { path: '/:id', name: 'Fishinglog', component: FishinglogComponent }
])
export class FishinglogsComponent { }
