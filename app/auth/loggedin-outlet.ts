import { Directive, Attribute, ElementRef, DynamicComponentLoader, ViewContainerRef, AttributeMetadata } from '@angular/core';
import { Router, RouterOutlet, ComponentInstruction } from '@angular/router-deprecated';
import { AuthService, isLoggedIn } from './auth.service';
import { ExceptionService, SpinnerService } from '../blocks/blocks';

@Directive({
  selector: 'router-outlet', 
  bindings: [ExceptionService]
})
export class LoggedInRouterOutlet extends RouterOutlet {
    publicRoutes: any;
    private _authService: AuthService;
    private _router: Router;

    constructor(_elementRef: ViewContainerRef,
        _loader: DynamicComponentLoader,
        _parentRouter: Router, 
        @Attribute('name') nameAttr: string, 
        _authService: AuthService, 
        _exceptionService: ExceptionService) {

        super(_elementRef, _loader, _parentRouter, nameAttr);
        this._router = _parentRouter;
        this.publicRoutes = {
            '/home': true,
            '/login': true,
            '/signup': true,
        };
    }

    activate(instruction: ComponentInstruction) {
        var url = this._router.lastNavigationAttempt;
        if (!this.publicRoutes[url] && !isLoggedIn()) {
            // todo: redirect to Login, may be there a better way?
            this._router.navigateByUrl('/login');
        }
        return super.activate(instruction);
    }
}