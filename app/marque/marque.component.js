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
var marque_service_1 = require('./marque-service');
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var componenteDeMarque = (function () {
    function componenteDeMarque(promesasdemensajesmarque) {
        this.promesasdemensajesmarque = promesasdemensajesmarque;
        this.title = 'holamundo';
    }
    componenteDeMarque.prototype.soltarMensajes = function () {
        var _this = this;
        this.promesasdemensajesmarque.agarrarMarque()
            .then(function (value) {
            _this.marqueMensajesList = value;
        }).catch(function (error) {
            console.log('error');
        });
    };
    componenteDeMarque.prototype.ngOnInit = function () {
        this.soltarMensajes();
    };
    componenteDeMarque = __decorate([
        core_1.Component({
            selector: 'componente-de-marque',
            providers: [marque_service_1.PromesaMarqueMensajes],
            styleUrls: ['../../public/pages/marque.style.scss'],
            template: "\n<div class=\"marquee\" data-marque=\"hola vida\"></div>\n\n\n\n\n\n    "
        }), 
        __metadata('design:paramtypes', [marque_service_1.PromesaMarqueMensajes])
    ], componenteDeMarque);
    return componenteDeMarque;
}());
exports.componenteDeMarque = componenteDeMarque;
//# sourceMappingURL=marque.component.js.map