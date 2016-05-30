System.register(['@angular/core', '@angular/router-deprecated', './auth.service', '@angular2-material/toolbar', '@angular2-material/button', '@angular2-material/sidenav', '@angular2-material/list', '@angular2-material/card', '@angular2-material/input', '@angular2-material/icon'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, auth_service_1, toolbar_1, button_1, sidenav_1, list_1, card_1, input_1, icon_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (toolbar_1_1) {
                toolbar_1 = toolbar_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (sidenav_1_1) {
                sidenav_1 = sidenav_1_1;
            },
            function (list_1_1) {
                list_1 = list_1_1;
            },
            function (card_1_1) {
                card_1 = card_1_1;
            },
            function (input_1_1) {
                input_1 = input_1_1;
            },
            function (icon_1_1) {
                icon_1 = icon_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_router, _authService) {
                    this._router = _router;
                    this._authService = _authService;
                }
                LoginComponent.prototype.login = function (event) {
                    var _this = this;
                    event.preventDefault();
                    this._authService.login(this.userEmail, this.userPass).subscribe(function (result) {
                        if (result) {
                            _this._router.navigate(['Dashboard']);
                        }
                    });
                };
                LoginComponent.prototype.logout = function (event) {
                    var _this = this;
                    event.preventDefault();
                    this._authService.logout().subscribe(function () {
                        _this._router.navigate(['Home']);
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], LoginComponent.prototype, "userEmail", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], LoginComponent.prototype, "userPass", void 0);
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        templateUrl: 'app/auth/login.component.html',
                        styleUrls: ['app/auth/login.component.css'],
                        directives: [
                            sidenav_1.MD_SIDENAV_DIRECTIVES,
                            list_1.MD_LIST_DIRECTIVES,
                            card_1.MD_CARD_DIRECTIVES,
                            toolbar_1.MdToolbar,
                            button_1.MdButton,
                            input_1.MdInput,
                            icon_1.MdIcon
                        ],
                        providers: [icon_1.MdIconRegistry],
                    }), 
                    __metadata('design:paramtypes', [router_deprecated_1.Router, auth_service_1.AuthService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map