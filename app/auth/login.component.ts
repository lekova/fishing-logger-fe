import { Component, Input } from 'angular2/core';
import { Router } from 'angular2/router';
import { AuthService } from './auth.service';

@Component({
    selector: 'login',
    templateUrl: 'app/auth/login.component.html',
    styleUrls: ['app/auth/login.component.css']
})
export class LoginComponent {
    
    @Input() userEmail: string;
    @Input() userPass: string;
    
    constructor(
        private _router: Router,
        private _authService: AuthService
    ) {}
    
    login(event: any) {
        event.preventDefault();
        this._authService.login(this.userEmail, this.userPass).subscribe((result) => {
            if (result) {
                this._router.navigate(['Dashboard']);
            }
        });
    }
    
    logout(event: any) {
        event.preventDefault();
        this._authService.logout().subscribe(() => {
            this._router.navigate(['Home']);    
        });
    }
}