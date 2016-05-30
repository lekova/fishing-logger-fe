System.register(['@angular/core', '@angular/http', '../blocks/blocks', '../shared/shared', '../auth/auth.service'], function(exports_1, context_1) {
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
    var core_1, http_1, http_2, blocks_1, shared_1, auth_service_1;
    var fishinglogsUrl, FishinglogService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (blocks_1_1) {
                blocks_1 = blocks_1_1;
            },
            function (shared_1_1) {
                shared_1 = shared_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            fishinglogsUrl = "http://localhost:3050/fishing-logs";
            FishinglogService = (function () {
                function FishinglogService(_http, _exceptionService, _messageService, _spinnerService, _authService) {
                    var _this = this;
                    this._http = _http;
                    this._exceptionService = _exceptionService;
                    this._messageService = _messageService;
                    this._spinnerService = _spinnerService;
                    this._authService = _authService;
                    this.onDbReset = this._messageService.state;
                    this._messageService.state.subscribe(function (state) { return _this.getFishinglogs(); });
                }
                ;
                FishinglogService.prototype.addFishinglog = function (fishinglog) {
                    var _this = this;
                    var body = JSON.stringify(fishinglog);
                    this._spinnerService.show();
                    var token = localStorage.getItem('token');
                    var headers = new http_2.Headers({
                        'Content-Type': 'application/json',
                        'Authorization': 'Token token=' + token
                    });
                    return this._http
                        .post("" + fishinglogsUrl, body, { headers: headers })
                        .map(function (res) { return res.json(); })
                        .catch(this._exceptionService.catchBadResponse)
                        .finally(function () { return _this._spinnerService.hide(); });
                };
                FishinglogService.prototype.getFishinglogs = function () {
                    var _this = this;
                    this._spinnerService.show();
                    var token = localStorage.getItem('token');
                    debugger;
                    var headers = new http_2.Headers({
                        'Content-Type': 'application/json',
                        'Authorization': 'Token token=' + token
                    });
                    return this._http.get("" + fishinglogsUrl, { headers: headers })
                        .map(function (response) {
                        console.log(response.json());
                        return response.json();
                    })
                        .catch(this._exceptionService.catchBadResponse)
                        .finally(function () { return _this._spinnerService.hide(); });
                };
                FishinglogService.prototype.getFishinglog = function (id) {
                    var _this = this;
                    this._spinnerService.show();
                    return this._http.get(fishinglogsUrl + "/" + id)
                        .map(function (response) { return response.json(); })
                        .catch(this._exceptionService.catchBadResponse)
                        .finally(function () { return _this._spinnerService.hide(); });
                };
                FishinglogService.prototype.updateFishinglog = function (fishinglog) {
                    var _this = this;
                    var body = JSON.stringify(fishinglog);
                    this._spinnerService.show();
                    return this._http
                        .put(fishinglogsUrl + "/" + fishinglog.id, body)
                        .catch(this._exceptionService.catchBadResponse)
                        .finally(function () { return _this._spinnerService.hide(); });
                };
                FishinglogService.prototype.deleteFishinglog = function (fishinglog) {
                    var _this = this;
                    this._spinnerService.show();
                    return this._http
                        .delete(fishinglogsUrl + "/" + fishinglog.id)
                        .catch(this._exceptionService.catchBadResponse)
                        .finally(function () { return _this._spinnerService.hide(); });
                };
                FishinglogService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, blocks_1.ExceptionService, shared_1.MessageService, blocks_1.SpinnerService, auth_service_1.AuthService])
                ], FishinglogService);
                return FishinglogService;
            }());
            exports_1("FishinglogService", FishinglogService);
        }
    }
});
//# sourceMappingURL=fishinglog.service.js.map