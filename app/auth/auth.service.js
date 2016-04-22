System.register(['angular2/core', 'angular2/http', '../blocks/blocks', '../shared/shared'], function(exports_1, context_1) {
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
    var core_1, http_1, blocks_1, shared_1;
    var authURL, AuthService;
    function isLoggedIn() {
        return !!localStorage.getItem('token');
    }
    exports_1("isLoggedIn", isLoggedIn);
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (blocks_1_1) {
                blocks_1 = blocks_1_1;
            },
            function (shared_1_1) {
                shared_1 = shared_1_1;
            }],
        execute: function() {
            authURL = 'http://localhost:3050';
            AuthService = (function () {
                function AuthService(_http, _exceptionService, _messageService, _spinnerService) {
                    this._http = _http;
                    this._exceptionService = _exceptionService;
                    this._messageService = _messageService;
                    this._spinnerService = _spinnerService;
                    this._loggedIn = false;
                }
                AuthService.prototype.login = function (email, password) {
                    var _this = this;
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var body = JSON.stringify({
                        'credentials': {
                            'email': email,
                            'password': password
                        }
                    });
                    this._spinnerService.show();
                    return this._http
                        .post(authURL + "/login", body, { headers: headers })
                        .map(function (response) {
                        if (response.statusText === 'Ok') {
                            _this._currentUser = response.json().user;
                            localStorage.setItem('token', response.json().user.token);
                            _this._loggedIn = true;
                        }
                        return response.json();
                    })
                        .catch(this._exceptionService.catchBadResponse)
                        .finally(function () { return _this._spinnerService.hide(); });
                };
                AuthService.prototype.signup = function (email, password, confirmPassword) {
                    var _this = this;
                    this._spinnerService.show();
                    event.preventDefault();
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var body = JSON.stringify({
                        'credentials': {
                            'email': email,
                            'password': password,
                            'confirmPassword': confirmPassword
                        }
                    });
                    return this._http.post(authURL + "/signup", body, { headers: headers })
                        .map(function (response) {
                        _this._currentUser = response.json().user;
                        localStorage.setItem('token', response.json().user.token);
                        localStorage.setItem('_id', response.json().user._id);
                        _this._loggedIn = true;
                        return response.json();
                    }).catch(this._exceptionService.catchBadResponse)
                        .finally(function () { return _this._spinnerService.hide(); });
                };
                AuthService.prototype.changePassword = function (oldPassword, newPassword) {
                    var _this = this;
                    this._spinnerService.show();
                    event.preventDefault();
                    var token = localStorage.getItem('token');
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json',
                        'Authorization': 'Token token=' + token
                    });
                    var body = JSON.stringify({
                        'passwords': {
                            'old': oldPassword,
                            'new': newPassword
                        }
                    });
                    return this._http.patch(authURL + "/changepw", body, { headers: headers })
                        .map(function (response) {
                        _this._currentUser = response.json().user;
                        localStorage.setItem('token', response.json().user.token);
                        _this._loggedIn = true;
                        return response.json();
                    }).catch(this._exceptionService.catchBadResponse)
                        .finally(function () { return _this._spinnerService.hide(); });
                };
                AuthService.prototype.logout = function () {
                    var _this = this;
                    var token = localStorage.getItem('token');
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json',
                        'Authorization': 'Token token=' + token
                    });
                    return this._http.delete(authURL + "/signout", { headers: headers })
                        .map(function () {
                        localStorage.removeItem('token');
                        _this._loggedIn = false;
                    })
                        .catch(this._exceptionService.catchBadResponse)
                        .finally(function () { });
                };
                AuthService.prototype.isLoggedIn = function () {
                    return this._loggedIn;
                };
                AuthService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, blocks_1.ExceptionService, shared_1.MessageService, blocks_1.SpinnerService])
                ], AuthService);
                return AuthService;
            }());
            exports_1("AuthService", AuthService);
        }
    }
});
//# sourceMappingURL=auth.service.js.map