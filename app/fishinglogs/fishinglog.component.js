System.register(['@angular/core', '@angular/router-deprecated', '../blocks/blocks', '../fishinglogs/fishinglog.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, blocks_1, fishinglog_service_1;
    var FishinglogComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (blocks_1_1) {
                blocks_1 = blocks_1_1;
            },
            function (fishinglog_service_1_1) {
                fishinglog_service_1 = fishinglog_service_1_1;
            }],
        execute: function() {
            FishinglogComponent = (function () {
                function FishinglogComponent(_fishinglogService, _entityService, _modalService, _routeParams, _router, _toastService) {
                    this._fishinglogService = _fishinglogService;
                    this._entityService = _entityService;
                    this._modalService = _modalService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this._toastService = _toastService;
                    this.editFishinglog = {};
                }
                FishinglogComponent.prototype.cancel = function (showToast) {
                    if (showToast === void 0) { showToast = true; }
                    this.editFishinglog = this._entityService.clone(this.fishinglog);
                    if (showToast) {
                        this._toastService.activate("Cancelled changes to " + this.fishinglog.place_name);
                    }
                };
                FishinglogComponent.prototype.delete = function () {
                    var _this = this;
                    var msg = "Do you want to delete " + this.fishinglog.place_name + "?";
                    this._modalService.activate(msg).then(function (responseOK) {
                        if (responseOK) {
                            _this.cancel(false);
                            _this._fishinglogService.deleteFishinglog(_this.fishinglog)
                                .subscribe(function () {
                                _this._toastService.activate("Deleted " + _this.fishinglog.place_name);
                                _this._gotoFishinglogs();
                            });
                        }
                    });
                };
                FishinglogComponent.prototype.isAddMode = function () {
                    var id = +this._routeParams.get('id');
                    return isNaN(id);
                };
                FishinglogComponent.prototype.ngOnDestroy = function () {
                    this._dbResetSubscription.unsubscribe();
                };
                FishinglogComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    componentHandler.upgradeDom();
                    this._getFishinglog();
                    this._dbResetSubscription = this._fishinglogService.onDbReset
                        .subscribe(function () { return _this._getFishinglog(); });
                };
                FishinglogComponent.prototype.routerCanDeactivate = function (next, prev) {
                    return !this.fishinglog ||
                        !this._isDirty() ||
                        this._modalService.activate();
                };
                FishinglogComponent.prototype.save = function () {
                    var _this = this;
                    var fishinglog = this.fishinglog = this._entityService.merge(this.fishinglog, this.editFishinglog);
                    if (fishinglog.id == null) {
                        this._fishinglogService.addFishinglog(fishinglog)
                            .subscribe(function (char) {
                            _this._setEditFishinglog(char);
                            _this._toastService.activate("Successfully added " + char.palce_name);
                            _this._gotoFishinglogs();
                        });
                        return;
                    }
                    this._fishinglogService.updateFishinglog(fishinglog)
                        .subscribe(function () { return _this._toastService.activate("Successfully saved " + fishinglog.name); });
                };
                FishinglogComponent.prototype._getFishinglog = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    if (id === 0)
                        return;
                    if (this.isAddMode()) {
                        this.fishinglog = { place_name: '', location: 'dark' };
                        this.editFishinglog = this._entityService.clone(this.fishinglog);
                        return;
                    }
                    this._fishinglogService.getFishinglog(id)
                        .subscribe(function (fishinglog) { return _this._setEditFishinglog(fishinglog); });
                };
                FishinglogComponent.prototype._gotoFishinglogs = function () {
                    var id = this.fishinglog ? this.fishinglog.id : null;
                    var route = ['Fishinglogs', { id: id }];
                    this._router.navigate(route);
                };
                FishinglogComponent.prototype._handleServiceError = function (op, err) {
                    console.error(op + " error: " + (err.message || err));
                };
                FishinglogComponent.prototype._isDirty = function () {
                    return this._entityService.propertiesDiffer(this.fishinglog, this.editFishinglog);
                };
                FishinglogComponent.prototype._setEditFishinglog = function (fishinglog) {
                    if (fishinglog) {
                        this.fishinglog = fishinglog;
                        this.editFishinglog = this._entityService.clone(this.fishinglog);
                    }
                    else {
                        this._gotoFishinglogs();
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FishinglogComponent.prototype, "fishinglog", void 0);
                FishinglogComponent = __decorate([
                    core_1.Component({
                        selector: 'my-fishing-log',
                        templateUrl: 'app/fishinglogs/fishinglog.component.html',
                        styles: ['.mdl-textfield__label {top: 0;}'],
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [fishinglog_service_1.FishinglogService, blocks_1.EntityService, blocks_1.ModalService, router_deprecated_1.RouteParams, router_deprecated_1.Router, blocks_1.ToastService])
                ], FishinglogComponent);
                return FishinglogComponent;
            }());
            exports_1("FishinglogComponent", FishinglogComponent);
        }
    }
});
//# sourceMappingURL=fishinglog.component.js.map