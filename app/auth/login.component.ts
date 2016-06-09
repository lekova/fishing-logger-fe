import { Component, Input } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { AuthService } from './auth.service';
import { MDL } from '../blocks/utils/mdl';
import { emailValidator } from '../blocks/utils/emailValidator';
import { FORM_DIRECTIVES, Control, ControlGroup, FormBuilder, Validators } from '@angular/common';

@Component({
    selector: 'login',
    templateUrl: 'app/auth/login.component.html',
    styleUrls: ['app/auth/login.component.css'],
    directives: [ MDL, FORM_DIRECTIVES ]
})
export class LoginComponent {

    // @Input() userEmail: string;
    // @Input() userPass: string;

    private loginForm: ControlGroup;
    private email: Control;
    private password: Control;
    private submitAttempt: boolean = false;
    private errorLabelShow: boolean = false;

    constructor(
        private _router: Router,
        private _authService: AuthService,
        private _formBuilder: FormBuilder

    ) {
        this.email = new Control('', Validators.compose([Validators.required, emailValidator]));
        this.password = new Control('', Validators.compose([Validators.required, Validators.minLength(6)]));
        
        this.loginForm = _formBuilder.group({
            'email': this.email,
            'password': this.password,
        });
    }

    login(user: any) {
        this.submitAttempt = true;
        if (!this.loginForm.valid) return;
        
        this._authService.login(user.email, user.password)
        .subscribe(
            result => {
                if (result) { this._router.navigate(['Dashboard']); }
            }, 
            error => {
                this.errorLabelShow = true;
            }
        );
    }

    logout() {
        this._authService.logout().subscribe(() => {
            this._router.navigate(['Home']);
        });
    }
}