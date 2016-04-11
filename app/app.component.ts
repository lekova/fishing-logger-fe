import { Component } from 'angular2/core';
import { HTTP_PROVIDERS, XHRBackend } from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import 'rxjs/Rx'; // load the full rxjs

import { MessageService } from './shared/shared';
import { EntityService, ExceptionService, ModalComponent, ModalService,
         SpinnerComponent, SpinnerService, ToastComponent, ToastService } from './blocks/blocks';

import { HomeComponent } from './home/home.component';
import { LoginComponent, SignupComponent, AuthService, LoggedInRouterOutlet } from './auth/auth';
import { DashboardComponent } from './dashboard/dashboard';
import { FishinglogsComponent, FishinglogService } from './fishinglogs/fishinglogs';

@Component({
  selector: 'fishing-logger-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES, ModalComponent, SpinnerComponent, ToastComponent, LoggedInRouterOutlet],
  providers: [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    FishinglogService,
    AuthService,
    LoggedInRouterOutlet,
    EntityService,
    ExceptionService,
    MessageService,
    ModalService,
    SpinnerService,
    ToastService
  ]
})
@RouteConfig([
  { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
  { path: '/login', name: 'Login', component: LoginComponent},
  { path: '/signup', name: 'SignUp', component: SignupComponent },
//   { path: '/change-password', name: 'ChangePassword', component: ChangePasswordComponent},
  { path: '/dashboard', name: 'Dashboard', component: DashboardComponent},
  { path: '/fishing-logs/...', name: 'Fishinglogs', component: FishinglogsComponent },
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