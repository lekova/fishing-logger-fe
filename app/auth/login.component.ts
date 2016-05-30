import { Component, Input } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { AuthService } from './auth.service';

import { MdToolbar } from '@angular2-material/toolbar';
import { MdButton } from '@angular2-material/button';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdInput } from '@angular2-material/input';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';


@Component({
    selector: 'login',
    templateUrl: 'app/auth/login.component.html',
    styleUrls: ['app/auth/login.component.css'],
    directives: [
        MD_SIDENAV_DIRECTIVES,
        MD_LIST_DIRECTIVES,
        MD_CARD_DIRECTIVES,
        MdToolbar,
        MdButton,
        MdInput,

        MdIcon
    ],
    providers: [MdIconRegistry],
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