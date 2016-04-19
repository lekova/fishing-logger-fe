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
    private _currentUser: any;
    
    constructor(
        private _http: Http,
        private _exceptionService: ExceptionService,
        private _messageService: MessageService,
        private _spinnerService: SpinnerService) {
    }
    
    login(email: string, password: string) {
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
                if (response.statusText === 'Ok') {
                    this._currentUser = response.json().user;
                    localStorage.setItem('token', response.json().user.token);
                    localStorage.setItem('_id', response.json().user._id);


                    this._loggedIn = true;     
                }
                return response.json();
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
                this._currentUser = response.json().user;
                localStorage.setItem('token', response.json().user.token);
                localStorage.setItem('_id', response.json().user._id);


                this._loggedIn = true;
                return response.json();
            }).catch(this._exceptionService.catchBadResponse)
            .finally(() => this._spinnerService.hide());
    }

    changePassword(oldPassword: string, newPassword: string) {
        debugger;
        this._spinnerService.show();
        event.preventDefault();
        
        let token = localStorage.getItem('token');

        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Token token=' + token
        });

        let body = JSON.stringify({
            'passwords': {
                'old': oldPassword,
                'new': newPassword
            }
        });
        let _id = localStorage.getItem('_id');
        return this._http.patch(`${authURL}/changepw/${_id}`, body, { headers: headers })
            .map(response => {
                debugger;
                this._currentUser = response.json().user;
                localStorage.setItem('token', response.json().user.token);
                localStorage.setItem('_id', response.json().user._id);


                this._loggedIn = true;
                return response.json();
            }).catch(this._exceptionService.catchBadResponse)
            .finally(() => this._spinnerService.hide());
    }

    logout() {
        debugger;
        let token = localStorage.getItem('token');

        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Token token=' + token
        });

        let _id = localStorage.getItem('_id');
        return this._http.delete(`${authURL}/signout/${_id}`, { headers: headers })
            .map(() => {
                localStorage.removeItem('token');
                this._loggedIn = false;
            })
            .catch(this._exceptionService.catchBadResponse)
            .finally(() => {});
    }
    
    isLoggedIn() {
        return this._loggedIn;
    }
}

export function isLoggedIn() {
  return !!localStorage.getItem('token');
}