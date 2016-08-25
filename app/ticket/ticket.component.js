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
var componenteDeTicket = (function () {
    function componenteDeTicket() {
    }
    componenteDeTicket = __decorate([
        core_1.Component({
            selector: 'componente-de-ticket',
            styleUrls: ['../../public/pages/ticket.style.scss'],
            template: "\n\n      <div class=\"row around-lg fondo\">\n        <div class=\"col-lg-4 bordes\">\n        <componente-de-numero>\n\n        </componente-de-numero>\n\n        </div>\n        <div class=\"col-lg-4  bordes\">\n            <div class=\"box \">\n            <componente-de-numero>\n\n            </componente-de-numero>\n\n            </div>\n        </div>\n        <div class=\"col-lg-4  bordes\">\n            <div class=\"box\">\n            <componente-de-numero></componente-de-numero>\n\n            </div>\n        </div>\n    </div>\n\n      "
        }), 
        __metadata('design:paramtypes', [])
    ], componenteDeTicket);
    return componenteDeTicket;
}());
exports.componenteDeTicket = componenteDeTicket;
//# sourceMappingURL=ticket.component.js.map