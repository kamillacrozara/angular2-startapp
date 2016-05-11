System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ZippyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ZippyComponent = (function () {
                function ZippyComponent() {
                    this.isHidden1 = true;
                    this.isHidden2 = true;
                }
                ZippyComponent.prototype.onClick1 = function () {
                    this.isHidden1 = !this.isHidden1;
                };
                ZippyComponent.prototype.onClick2 = function () {
                    this.isHidden2 = !this.isHidden2;
                };
                ZippyComponent = __decorate([
                    core_1.Component({
                        selector: 'bs-panel',
                        template: "\n        <div class=\"panel-group\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\" (click)=\"onClick1()\">\n                    <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\">\n                      Collapsible Group Item #1\n                    </a>\n                    <i class=\"glyphicon  pull-right\"\n                    [class.glyphicon-chevron-down]=\"isHidden1\"\n                    [class.glyphicon-chevron-up]=\"!isHidden1\"></i>\n                </div>\n                <div id=\"collapseOne\" class=\"panel-collapse collapse in\">\n                    <div [hidden]=\"isHidden1\" class=\"panel-body\">\n                        Panel content\n                    </div>\n                </div>\n            </div>\n\n\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\" (click)=\"onClick2()\">\n                    <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\">\n                      Collapsible Group Item #1\n                    </a>\n                    <i class=\"glyphicon  pull-right\"\n                    [class.glyphicon-chevron-down]=\"isHidden2\"\n                    [class.glyphicon-chevron-up]=\"!isHidden2\"></i>\n                </div>\n                <div id=\"collapseOne\" class=\"panel-collapse collapse in\">\n                    <div [hidden]=\"isHidden2\" class=\"panel-body\">\n                        Panel content\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n        ",
                        styles: [
                            "\n            .panel {\n                width: 900px;\n            }\n            .panel-heading {\n                cursor: pointer;\n            }\n\n        "
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ZippyComponent);
                return ZippyComponent;
            }());
            exports_1("ZippyComponent", ZippyComponent);
        }
    }
});
//# sourceMappingURL=zippy.component.js.map