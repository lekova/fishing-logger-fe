System.register(['@angular/core', '@angular/router-deprecated', './auth.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, auth_service_1;
    var SignupComponent;
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
            }],
        execute: function() {
            SignupComponent = (function () {
                function SignupComponent(_router, _authService) {
                    this._router = _router;
                    this._authService = _authService;
                }
                SignupComponent.prototype.signup = function (event) {
                    var _this = this;
                    event.preventDefault();
                    // TODO
                    // if this.userPassword != this.userConfirmPassword
                    // display message "Passwords do not match"
                    // and make them red
                    this._authService.signup(this.userEmail, this.userPassword, this.userConfirmPassword).subscribe(function (result) {
                        debugger;
                        if (result) {
                            _this._router.navigate(['Dashboard']);
                        }
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], SignupComponent.prototype, "userEmail", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], SignupComponent.prototype, "userPassword", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], SignupComponent.prototype, "userConfirmPassword", void 0);
                SignupComponent = __decorate([
                    core_1.Component({
                        selector: 'signup',
                        templateUrl: 'app/auth/signup.component.html',
                        styleUrls: ['app/auth/signup.component.css']
                    }), 
                    __metadata('design:paramtypes', [router_deprecated_1.Router, auth_service_1.AuthService])
                ], SignupComponent);
                return SignupComponent;
            }());
            exports_1("SignupComponent", SignupComponent);
        }
    }
});
//# sourceMappingURL=signup.component.js.map