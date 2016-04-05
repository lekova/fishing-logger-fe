import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
  selector: 'fishing-logger-app',
  template: '<h1>{{title}}</h1>'
})
export class AppComponent {
  title = 'Fishing Logger';
}