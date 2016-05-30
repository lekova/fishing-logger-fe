import { Component, Input } from '@angular/core';
import { Router } from '@angular/router-deprecated';
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
    
    signup(event: any) {
        event.preventDefault();
        
        // TODO
        // if this.userPassword != this.userConfirmPassword
        // display message "Passwords do not match"
        // and make them red
        
        this._authService.signup(this.userEmail, this.userPassword, this.userConfirmPassword).subscribe((result) => {
            debugger;
            if (result) {
                this._router.navigate(['Dashboard']);
            }
        });
    }
}