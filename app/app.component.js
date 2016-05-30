System.register(['@angular/core', '@angular/router-deprecated', 'rxjs/Rx', './shared/shared', './blocks/blocks', './home/home.component', './auth/auth', './dashboard/dashboard', './fishinglogs/fishinglogs'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_deprecated_1, shared_1, blocks_1, home_component_1, auth_1, dashboard_1, fishinglogs_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (_1) {},
            function (shared_1_1) {
                shared_1 = shared_1_1;
            },
            function (blocks_1_1) {
                blocks_1 = blocks_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (auth_1_1) {
                auth_1 = auth_1_1;
            },
            function (dashboard_1_1) {
                dashboard_1 = dashboard_1_1;
            },
            function (fishinglogs_1_1) {
                fishinglogs_1 = fishinglogs_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_messageService, _modalService) {
                    this._messageService = _messageService;
                    this._modalService = _modalService;
                    this.menuItems = [
                        { caption: 'Dashboard', link: ['Dashboard'] },
                        { caption: 'Fishing Logs', link: ['Fishinglogs'] }
                    ];
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'fishing-logger-app',
                        templateUrl: 'app/app.component.html',
                        styleUrls: ['app/app.component.css'],
                        directives: [blocks_1.ModalComponent, blocks_1.SpinnerComponent, blocks_1.ToastComponent, auth_1.LoggedInRouterOutlet],
                        providers: [
                            fishinglogs_1.FishinglogService,
                            auth_1.AuthService,
                            auth_1.LoggedInRouterOutlet,
                            blocks_1.EntityService,
                            blocks_1.ExceptionService,
                            shared_1.MessageService,
                            blocks_1.ModalService,
                            blocks_1.SpinnerService,
                            blocks_1.ToastService
                        ]
                    }),
                    router_deprecated_1.RouteConfig([
                        { path: '/home', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: '/login', name: 'Login', component: auth_1.LoginComponent },
                        { path: '/signup', name: 'SignUp', component: auth_1.SignupComponent },
                        { path: '/changepw', name: 'ChangePassword', component: auth_1.ChangePasswordComponent },
                        { path: '/dashboard', name: 'Dashboard', component: dashboard_1.DashboardComponent },
                        { path: '/fishing-logs/...', name: 'Fishinglogs', component: fishinglogs_1.FishinglogsComponent },
                    ]), 
                    __metadata('design:paramtypes', [shared_1.MessageService, blocks_1.ModalService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map