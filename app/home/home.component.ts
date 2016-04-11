import { Component } from 'angular2/core';
import { Router, CanActivate } from 'angular2/router';

@Component({
    selector: 'home',
    templateUrl: 'app/home/home.component.html',
    styleUrls: ['app/app.component.css', 'assets/template-styles.css']
})
export class HomeComponent {
    
    private _router: Router;

    constructor(_router: Router) {
        this._router = _router;
    }
    
    showLogin() {
        this._router.navigate(['Login'])
    }
    
    showSignup() {
        this._router.navigateByUrl('/signup');
    }
}