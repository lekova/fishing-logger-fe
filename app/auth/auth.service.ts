import { Injectable } from 'angular2/core';
import { Http, Response, Headers, RequestOptions } from 'angular2/http';
import { Observable } from 'rxjs/Rx';

import { ExceptionService, SpinnerService } from '../blocks/blocks';
import { MessageService } from '../shared/shared';

let authURL = 'http://localhost:3050';

export interface Auth {
    email: string, 
    password: string, 
    confirmPassword: string
}

@Injectable()
export class AuthService {
    
    private _loggedIn = false;
    
    constructor(
        private _http: Http,
        private _exceptionService: ExceptionService,
        private _messageService: MessageService,
        private _spinnerService: SpinnerService) {
    }
    
    login(email: string, password: string) {
        debugger;
        let headers = new Headers({'Content-Type': 'application/json'});
        let body = JSON.stringify({
            'credentials': {
                'email': email, 
                'password': password
            }
        });
        this._spinnerService.show();
        
        return this._http
            .post(`${authURL}/login`, body, { headers })
            .map((response) => {
                debugger;
                if (response.statusText === 'Ok') {
                    localStorage.setItem('token', response.json().user.token)
                    this._loggedIn = true;     
                }
                return response.json().statusText;
            })
            .catch(this._exceptionService.catchBadResponse)
            .finally(() => this._spinnerService.hide());
    }

    signup(email: string, password: string, confirmPassword: string) {
        this._spinnerService.show();
        event.preventDefault();
        
        let headers = new Headers({'Content-Type': 'application/json'});
        let body = JSON.stringify({
            'credentials': {
                'email': email, 
                'password': password, 
                'confirmPassword': confirmPassword
            }
        });
        return this._http.post(`${authURL}/signup`, body, { headers: headers })
            .map(response => {
                debugger;
                localStorage.setItem('token', response.json().user.token);
                this._loggedIn = true;
                return response.json().data;
            }).catch(this._exceptionService.catchBadResponse)
            .finally(() => this._spinnerService.hide());
    }
        
    logout() {
        debugger;
        localStorage.removeItem('token');
        this._loggedIn = false;
    }
    
    isLoggedIn() {
        return this._loggedIn;
    }
}

export function isLoggedIn() {
  return !!localStorage.getItem('token');
}