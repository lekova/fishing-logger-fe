import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app.component';

import { HTTP_PROVIDERS } from '@angular/http';
import { FORM_PROVIDERS } from '@angular/common';
import { provide, ComponentRef } from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { AuthService } from './auth/auth.service';
import { appInjector } from './app-injector';

bootstrap(AppComponent, [
    AuthService,
    HTTP_PROVIDERS, 
    ROUTER_PROVIDERS,
    FORM_PROVIDERS
    // provide(LocationStrategy, { useClass: HashLocationStrategy })
])
//   .then((appRef: ComponentRef) => {
//     // store a reference to the application injector
//     appInjector(appRef.injector);
//})
.then(success => console.log(`Bootstrap success`))
.catch(error => console.log(error));