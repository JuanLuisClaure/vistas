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
var mock_marque_1 = require('./mock-marque');
var PromesaMarqueMensajes = (function () {
    function PromesaMarqueMensajes() {
    }
    PromesaMarqueMensajes.prototype.agarrarMarque = function () {
        return Promise.resolve(mock_marque_1.MARQUE);
    };
    // See the "Take it slow" appendix
    PromesaMarqueMensajes.prototype.agarrarmarqueConTiempo = function () {
        return new Promise(function (resolve) {
            return setTimeout(function () { return resolve(mock_marque_1.MARQUE); }, 2000);
        } // 2 seconds
         // 2 seconds
        );
    };
    PromesaMarqueMensajes = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PromesaMarqueMensajes);
    return PromesaMarqueMensajes;
}());
exports.PromesaMarqueMensajes = PromesaMarqueMensajes;
//# sourceMappingURL=marque-service.js.map