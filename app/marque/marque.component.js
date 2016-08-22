"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var componenteDeMarque = (function () {
    function componenteDeMarque() {
    }
    componenteDeMarque = __decorate([
        core_1.Component({
            selector: 'componente-de-marque',
            styles: ["\n\n    .selected {\n      background-color: #607D8B !important;\n      color: white;\n      height:5%;\n\n    }\n    .heroes {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n\n  "],
            template: "\n\n\n\n\n      <div class=\"selected\"></div>\n\n\n\n\n\n            "
        }), 
        __metadata('design:paramtypes', [])
    ], componenteDeMarque);
    return componenteDeMarque;
}());
exports.componenteDeMarque = componenteDeMarque;
//# sourceMappingURL=marque.component.js.map