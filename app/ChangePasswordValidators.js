System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ChangePasswordValidators;
    return {
        setters:[],
        execute: function() {
            ChangePasswordValidators = (function () {
                function ChangePasswordValidators() {
                }
                ChangePasswordValidators.cannotContainSpace = function (control) {
                    if (control.value.indexOf(' ') >= 0)
                        return { cannotContainSpace: true };
                    return null;
                };
                ChangePasswordValidators.passwordMustMatch = function (group) {
                    var newPwd = group.find('newPwd').value;
                    var confirmPwd = group.find('confirmPwd').value;
                    if (newPwd != confirmPwd)
                        return { passwordMustMatch: true };
                    return null;
                };
                return ChangePasswordValidators;
            }());
            exports_1("ChangePasswordValidators", ChangePasswordValidators);
        }
    }
});
//# sourceMappingURL=ChangePasswordValidators.js.map