System.register(['@angular/core', '@angular/router-deprecated', './fishinglog.service', './sort-fishinglogs.pipe', '../blocks/blocks'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, fishinglog_service_1, sort_fishinglogs_pipe_1, blocks_1;
    var FishinglogListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (fishinglog_service_1_1) {
                fishinglog_service_1 = fishinglog_service_1_1;
            },
            function (sort_fishinglogs_pipe_1_1) {
                sort_fishinglogs_pipe_1 = sort_fishinglogs_pipe_1_1;
            },
            function (blocks_1_1) {
                blocks_1 = blocks_1_1;
            }],
        execute: function() {
            FishinglogListComponent = (function () {
                function FishinglogListComponent(_fishinglogService, _filterService) {
                    this._fishinglogService = _fishinglogService;
                    this._filterService = _filterService;
                    this.filteredFishinglogs = this.fishinglogs;
                }
                FishinglogListComponent.prototype.filterChanged = function (searchText) {
                    this.filteredFishinglogs = this._filterService.filter(searchText, ['id', 'name' /*, 'side'*/], this.fishinglogs);
                };
                FishinglogListComponent.prototype.getFishinglogs = function () {
                    var _this = this;
                    this.fishinglogs = [];
                    this._fishinglogService.getFishinglogs()
                        .subscribe(function (fishinglogs) {
                        console.log('fishinglogs', fishinglogs);
                        _this.fishinglogs = _this.filteredFishinglogs = fishinglogs;
                        console.log('this.fishingLogs', _this.fishinglogs);
                        _this.filterComponent.clear();
                    });
                };
                FishinglogListComponent.prototype.ngOnDestroy = function () {
                    this._dbResetSubscription.unsubscribe();
                };
                FishinglogListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    componentHandler.upgradeDom();
                    this.getFishinglogs();
                    console.log("ON Init");
                    this._dbResetSubscription = this._fishinglogService.onDbReset
                        .subscribe(function () { return _this.getFishinglogs(); });
                };
                __decorate([
                    core_1.ViewChild(blocks_1.FilterTextComponent), 
                    __metadata('design:type', blocks_1.FilterTextComponent)
                ], FishinglogListComponent.prototype, "filterComponent", void 0);
                FishinglogListComponent = __decorate([
                    core_1.Component({
                        selector: 'story-fishinglogs',
                        templateUrl: './app/fishinglogs/fishinglog-list.component.html',
                        directives: [blocks_1.FilterTextComponent, router_deprecated_1.ROUTER_DIRECTIVES],
                        styleUrls: ['./app/fishinglogs/fishinglog-list.component.css'],
                        pipes: [sort_fishinglogs_pipe_1.SortFishinglogsPipe],
                        providers: [blocks_1.FilterService]
                    }), 
                    __metadata('design:paramtypes', [fishinglog_service_1.FishinglogService, blocks_1.FilterService])
                ], FishinglogListComponent);
                return FishinglogListComponent;
            }());
            exports_1("FishinglogListComponent", FishinglogListComponent);
        }
    }
});
//# sourceMappingURL=fishinglog-list.component.js.map