System.register(['angular2/core', 'angular2/common', './ChangePasswordValidators'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, ChangePasswordValidators_1;
    var ChangePasswordForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ChangePasswordValidators_1_1) {
                ChangePasswordValidators_1 = ChangePasswordValidators_1_1;
            }],
        execute: function() {
            ChangePasswordForm = (function () {
                function ChangePasswordForm(fb) {
                    this.form = common_1.ControlGroup;
                    debugger;
                    fb.group({
                        currentPwd: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                ChangePasswordValidators_1.ChangePasswordValidators.cannotContainSpace
                            ])],
                        newPwd: ['', common_1.Validators.required],
                        confirmPwd: ['', common_1.Validators.required]
                    });
                }
                ChangePasswordForm.prototype.changePwd = function () {
                    console.log("On Submit");
                };
                ChangePasswordForm = __decorate([
                    core_1.Component({
                        selector: 'changepwd-form',
                        templateUrl: 'app/change-password.component.html',
                        styles: [
                            "\n        form {\n            width: 900px;\n            padding-left: 40px;\n            padding-top: 40px;\n        }\n\n        "
                        ]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], ChangePasswordForm);
                return ChangePasswordForm;
            }());
            exports_1("ChangePasswordForm", ChangePasswordForm);
        }
    }
});
//# sourceMappingURL=change-password.component.js.map