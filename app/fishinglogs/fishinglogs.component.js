System.register(['angular2/core', 'angular2/router', './fishinglog.component', './fishinglog-list.component'], function(exports_1, context_1) {
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
    var core_1, router_1, fishinglog_component_1, fishinglog_list_component_1;
    var FishinglogsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (fishinglog_component_1_1) {
                fishinglog_component_1 = fishinglog_component_1_1;
            },
            function (fishinglog_list_component_1_1) {
                fishinglog_list_component_1 = fishinglog_list_component_1_1;
            }],
        execute: function() {
            FishinglogsComponent = (function () {
                function FishinglogsComponent() {
                }
                FishinglogsComponent = __decorate([
                    core_1.Component({
                        selector: 'story-fishinglogs-root',
                        template: "\n    <router-outlet></router-outlet>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Fishinglogs', component: fishinglog_list_component_1.FishinglogListComponent, useAsDefault: true },
                        { path: '/list/:id', name: 'Fishinglogs', component: fishinglog_list_component_1.FishinglogListComponent },
                        { path: '/:id', name: 'Fishinglog', component: fishinglog_component_1.FishinglogComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], FishinglogsComponent);
                return FishinglogsComponent;
            }());
            exports_1("FishinglogsComponent", FishinglogsComponent);
        }
    }
});
//# sourceMappingURL=fishinglogs.component.js.map