import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { RouteConfig } from '@angular/router-deprecated';
import 'rxjs/Rx'; // load the full rxjs

import { MessageService } from './shared/shared';
import { EntityService, ExceptionService, ModalComponent, ModalService,
         SpinnerComponent, SpinnerService, ToastComponent, ToastService } from './blocks/blocks';

import { HomeComponent } from './home/home.component';
import { LoginComponent, SignupComponent, AuthService, LoggedInRouterOutlet, ChangePasswordComponent } from './auth/auth';
import { DashboardComponent } from './dashboard/dashboard';
import { FishinglogsComponent, FishinglogService } from './fishinglogs/fishinglogs';

@Component({
  selector: 'fishing-logger-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ModalComponent, SpinnerComponent, ToastComponent, LoggedInRouterOutlet],
  providers: [
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
  { path: '/changepw', name: 'ChangePassword', component: ChangePasswordComponent},
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
}