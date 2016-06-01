System.register([], function(exports_1, context_1) {
    'use strict';
    var __moduleName = context_1 && context_1.id;
    function emailValidator(control) {
        var email = control.value;
        if (email && email != "" && email != " ") {
            if (email.indexOf('.') == -1 || email.indexOf('@') == -1)
                return { 'invalidFormat': true };
            if (!isValidEmail(email))
                return { 'invalidDomain': true };
        }
    }
    exports_1("emailValidator", emailValidator);
    function isValidEmail(email) {
        var domains = ['.com', '.net', '.org', '.edu', '.biz', '.gov', '.mil', '.io', '.me', '.tv'];
        for (var i = 0; i < domains.length; i++) {
            if (email.indexOf(domains[i]) != -1) {
                return true;
            }
        }
        return false;
    }
    return {
        setters:[],
        execute: function() {
            ;
        }
    }
});
//# sourceMappingURL=emailValidator.js.map