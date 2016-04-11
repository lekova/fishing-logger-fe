import { Component, Input } from 'angular2/core';
import { Router } from 'angular2/router';
import { AuthService } from './auth.service';

@Component({
    selector: 'signup',
    templateUrl: 'app/auth/signup.component.html',
    styleUrls: ['app/auth/signup.component.css']
})
export class SignupComponent {
    
    @Input() userEmail: string;
    @Input() userPassword: string;
    @Input() userConfirmPassword: string;
        
    constructor(
        private _router: Router,
        private _authService: AuthService
    ) { }
    
    signup(event: any, email: string, password: string, confirmPassword: string) {
        debugger;
        event.preventDefault();
        
        this._authService.signup(email, password, confirmPassword).subscribe((result) => {
            debugger;
            if (result) {
                //this._router.navigate(['Dashboard']);
            }
        });
    }
     
    onClick(event: any) {
        event.preventDefault();
        
        this._authService.signup(this.userEmail, this.userPassword, this.userConfirmPassword).subscribe((result) => {
            debugger;
            if (result) {
                this._router.navigate(['Dashboard']);
            }
        });
    }
}