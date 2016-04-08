import { Component } from 'angular2/core';
import { HTTP_PROVIDERS, XHRBackend } from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import 'rxjs/Rx'; // load the full rxjs

// import { InMemoryBackendConfig, InMemoryBackendService, SEED_DATA } from 'a2-in-memory-web-api/core';
// import { InMemoryStoryService } from '../api/in-memory-story.service';
import { FishinglogsComponent, FishinglogService } from './fishinglogs/fishinglogs';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessageService } from './shared/shared';
import { EntityService, ExceptionService, ModalComponent, ModalService,
         SpinnerComponent, SpinnerService, ToastComponent, ToastService } from './blocks/blocks';

@Component({
  selector: 'fishing-logger-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES, ModalComponent, SpinnerComponent, ToastComponent],
  providers: [
    HTTP_PROVIDERS,
    // provide(XHRBackend, { useClass: InMemoryBackendService }),
    // provide(SEED_DATA, { useClass: InMemoryStoryService }),
    // provide(InMemoryBackendConfig, { useValue: { delay: 600 } }),
    ROUTER_PROVIDERS,
    FishinglogService,
    EntityService,
    ExceptionService,
    MessageService,
    ModalService,
    SpinnerService,
    ToastService
  ]
})
@RouteConfig([
  { path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
  { path: '/fishinglogs/...', name: 'Fishinglogs', component: FishinglogsComponent },
])
export class AppComponent {
  public menuItems = [
    { caption: 'Dashboard', link: ['Dashboard'] },
    { caption: 'Fishing Logs', link: ['Fishinglogs'] }
  ];

  constructor(
    private _messageService: MessageService,
    private _modalService: ModalService) {
  }

  resetDb() {
    let msg = 'Are you sure you want to reset the database?';
    this._modalService.activate(msg).then(responseOK => {
      if (responseOK) {
        this._messageService.resetDb();
      }
    });
  }
}