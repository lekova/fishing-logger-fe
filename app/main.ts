import { bootstrap } from 'angular2/platform/browser';
import { AppComponent } from './app.component';

import { HTTP_PROVIDERS } from 'angular2/http';
import { provide, ComponentRef } from 'angular2/core';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { AuthService } from './auth/auth.service';
import { appInjector } from './app-injector';

bootstrap(AppComponent, [
    AuthService,
    HTTP_PROVIDERS, 
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
]).then((appRef: ComponentRef) => {
    // store a reference to the application injector
    appInjector(appRef.injector);
 }).then(success => console.log(`Bootstrap success`))
   .catch(error => console.log(error));