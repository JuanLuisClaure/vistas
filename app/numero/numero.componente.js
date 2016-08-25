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
var numero_service_1 = require('./numero-service');
var numeroComponente = (function () {
    function numeroComponente(promesanumerosdelticket) {
        this.promesanumerosdelticket = promesanumerosdelticket;
    }
    numeroComponente.prototype.soltarNumerosDeTickets = function () {
        var _this = this;
        this.promesanumerosdelticket.agarrarMensajesDeNumero()
            .then(function (value) {
            _this.numeroList = value; //pasando los datos del json para enlistar
        }).catch(function (error) {
            console.log('es un error');
        });
    };
    numeroComponente.prototype.ngOnInit = function () {
        this.soltarNumerosDeTickets();
    };
    numeroComponente = __decorate([
        core_1.Component({
            selector: 'componente-de-numero',
            providers: [numero_service_1.PromesaNumerosDelTicket],
            styleUrls: ['../../public/pages/numero.style.scss'],
            template: "\n\n    <ul><li *ngFor=\"let x of numeroList\">{{x.puesto}}</li></ul>\n\n    "
        }), 
        __metadata('design:paramtypes', [numero_service_1.PromesaNumerosDelTicket])
    ], numeroComponente);
    return numeroComponente;
}());
exports.numeroComponente = numeroComponente;
//# sourceMappingURL=numero.componente.js.map