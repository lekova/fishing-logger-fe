'use strict';
import { Control } from '@angular/common';

export function emailValidator(control: Control): { [s: string]: boolean } {
    let email: string = <string>control.value;
    if (email && email != "" && email != " ") {

        if (email.indexOf('.') == -1 || email.indexOf('@') == -1)
            return { 'invalidFormat': true };

        if (!isValidEmail(email))
            return { 'invalidDomain': true };
    }
}

function isValidEmail(email: string): boolean {
    let domains: Array<string> = ['.com', '.net', '.org', '.edu', '.biz', '.gov', '.mil', '.io', '.me', '.tv'];

    for ( let i =0; i < domains.length; i++) {
        if (email.indexOf(domains[i]) != -1) {
            return true;
        }
    }

    return false;
};