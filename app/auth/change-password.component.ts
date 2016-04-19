import { Component, Input } from 'angular2/core';
import { Router } from 'angular2/router';
import { AuthService } from './auth.service';

@Component({
    selector: 'change-pass',
    templateUrl: 'app/auth/change-password.component.html',
    styleUrls: ['app/auth/change-password.component.css']
})
export class ChangePasswordComponent {
    
    @Input() userOldPassword: string;
    @Input() userNewPassword: string;
    @Input() userConfirmPassword: string;
        
    constructor(
        private _router: Router,
        private _authService: AuthService
    ) { }
    
    changePassword(event: any) {
        debugger;
        event.preventDefault();
        
        // TODO
        // if this.userNewPassword != this.userConfirmPassword
        // display message "Passwords do not match"
        // and make them red
        
        this._authService.changePassword(this.userOldPassword, this.userNewPassword).subscribe((result) => {
            debugger;
            if (result) {
                this._router.navigate(['Dashboard']);
            }
        });
    }
}