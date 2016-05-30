System.register(['@angular/core', '@angular/router-deprecated', 'rxjs/Rx', '../fishinglogs/fishinglogs', '../auth/auth.service', '../blocks/blocks'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, Rx_1, fishinglogs_1, auth_service_1, blocks_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (fishinglogs_1_1) {
                fishinglogs_1 = fishinglogs_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (blocks_1_1) {
                blocks_1 = blocks_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(_fishinglogService, _router, _toastService) {
                    this._fishinglogService = _fishinglogService;
                    this._router = _router;
                    this._toastService = _toastService;
                }
                DashboardComponent.prototype.getFishinglogs = function () {
                    var _this = this;
                    // this._spinnerService.show();
                    debugger;
                    var result = this._fishinglogService.getFishinglogs()
                        .catch(function (e) {
                        debugger;
                        _this._toastService.activate("" + e);
                        return Rx_1.Observable.of();
                    });
                    this.fishinglogs = result;
                    // .finally(() => { this._spinnerService.hide(); })
                };
                DashboardComponent.prototype.gotoDetail = function (fishinglog) {
                    var link = ['Fishinglogs', 'Fishinglog', { id: fishinglog.id }];
                    this._router.navigate(link);
                };
                DashboardComponent.prototype.ngOnDestroy = function () {
                    this._dbResetSubscription.unsubscribe();
                };
                DashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.getFishinglogs();
                    this._dbResetSubscription = this._fishinglogService.onDbReset
                        .subscribe(function () { return _this.getFishinglogs(); });
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'my-dashboard',
                        templateUrl: 'app/dashboard/dashboard.component.html',
                        styleUrls: ['app/dashboard/dashboard.component.css']
                    }),
                    router_deprecated_1.CanActivate(function () {
                        console.log("Can Activate ");
                        return auth_service_1.isLoggedIn();
                    }), 
                    __metadata('design:paramtypes', [fishinglogs_1.FishinglogService, router_deprecated_1.Router, blocks_1.ToastService])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map