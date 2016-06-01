import { Component, Input } from '@angular/core';
import { FORM_DIRECTIVES, Control, ControlGroup, FormBuilder, Validators } from '@angular/common';
import { Router } from '@angular/router-deprecated';
import { AuthService } from './auth.service';
import { MDL } from '../blocks/utils/mdl';
import { emailValidator } from '../blocks/utils/emailValidator';
import { passwordValidator } from '../blocks/utils/passwordValidator';

@Component({
    selector: 'signup',
    templateUrl: 'app/auth/signup.component.html',
    styleUrls: ['app/auth/signup.component.css'],
    directives: [MDL, FORM_DIRECTIVES]
})
export class SignupComponent {

    // @Input() userEmail: string;
    // @Input() userPassword: string;
    // @Input() userConfirmPassword: string;

    private signupForm: ControlGroup;
    private email: Control;
    private password: Control;
    private confirmPassword: Control;
    private submitAttempt: boolean = false;
    private errorLabelShow: boolean = false;

    constructor(
        private _router: Router,
        private _authService: AuthService, 
        private _formBuilder: FormBuilder
    ) {
        
        this.email = new Control('', Validators.compose([Validators.required, emailValidator]));
        this.password = new Control('', Validators.compose([Validators.required, Validators.minLength(6)]));
        this.confirmPassword = new Control('', Validators.required);

        this.signupForm = _formBuilder.group({
            'email': this.email,
            'password': this.password,
            'confirmPassword': this.confirmPassword
        });
    }

    signup(user: any) {
        this.submitAttempt = true;
        if (!this.signupForm.valid) return;
        
        this._authService.signup(user.email, user.password, user.confirmPassword)
        .subscribe(
            result => {
                if (result) { this._router.navigate(['Dashboard']); }
            }, 
            error => {
                this.errorLabelShow = true;
                
            });
    }
}