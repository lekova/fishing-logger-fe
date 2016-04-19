System.register(['./login.component', './signup.component', './change-password.component', './auth.service', './loggedin-outlet'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (login_component_1_1) {
                exportStar_1(login_component_1_1);
            },
            function (signup_component_1_1) {
                exportStar_1(signup_component_1_1);
            },
            function (change_password_component_1_1) {
                exportStar_1(change_password_component_1_1);
            },
            function (auth_service_1_1) {
                exportStar_1(auth_service_1_1);
            },
            function (loggedin_outlet_1_1) {
                exportStar_1(loggedin_outlet_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=auth.js.map