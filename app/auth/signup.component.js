System.register(['@angular/core', '@angular/common', '@angular/router-deprecated', './auth.service', '../blocks/utils/mdl', '../blocks/utils/emailValidator'], function(exports_1, context_1) {
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
    var core_1, common_1, router_deprecated_1, auth_service_1, mdl_1, emailValidator_1;
    var SignupComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (mdl_1_1) {
                mdl_1 = mdl_1_1;
            },
            function (emailValidator_1_1) {
                emailValidator_1 = emailValidator_1_1;
            }],
        execute: function() {
            SignupComponent = (function () {
                function SignupComponent(_router, _authService, _formBuilder) {
                    this._router = _router;
                    this._authService = _authService;
                    this._formBuilder = _formBuilder;
                    this.submitAttempt = false;
                    this.errorLabelShow = false;
                    this.email = new common_1.Control('', common_1.Validators.compose([common_1.Validators.required, emailValidator_1.emailValidator]));
                    this.password = new common_1.Control('', common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(6)]));
                    this.confirmPassword = new common_1.Control('', common_1.Validators.required);
                    this.signupForm = _formBuilder.group({
                        'email': this.email,
                        'password': this.password,
                        'confirmPassword': this.confirmPassword
                    });
                }
                SignupComponent.prototype.signup = function (user) {
                    var _this = this;
                    this.submitAttempt = true;
                    if (!this.signupForm.valid)
                        return;
                    this._authService.signup(user.email, user.password, user.confirmPassword)
                        .subscribe(function (result) {
                        if (result) {
                            _this._router.navigate(['Dashboard']);
                        }
                    }, function (error) {
                        _this.errorLabelShow = true;
                    });
                };
                SignupComponent = __decorate([
                    core_1.Component({
                        selector: 'signup',
                        templateUrl: 'app/auth/signup.component.html',
                        styleUrls: ['app/auth/signup.component.css'],
                        directives: [mdl_1.MDL, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_deprecated_1.Router, auth_service_1.AuthService, common_1.FormBuilder])
                ], SignupComponent);
                return SignupComponent;
            }());
            exports_1("SignupComponent", SignupComponent);
        }
    }
});
//# sourceMappingURL=signup.component.js.map