System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function passwordValidator(control) {
        if (control.value.length > 0) {
            var pass = control.value;
            if (!pass || pass.length < 3)
                return { 'invalidLength': true };
        }
    }
    exports_1("passwordValidator", passwordValidator);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=passwordValidator.js.map