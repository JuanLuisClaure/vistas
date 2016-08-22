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
var video_component_1 = require('../video/video.component');
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var anywant = (function () {
    function anywant() {
    }
    anywant = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [video_component_1.componenteDeVideo],
            template: "\n\n\n<div>\n\n<componente-de-marque></componente-de-marque>\n\n</div>\n\n<div>\n\n<componente-de-video></componente-de-video>\n\n</div>\n\n<div>\n\n<componente-de-ticket></componente-de-ticket>\n\n</div>\n\n\n\n\n\n\n\n\n\n\n"
        }), 
        __metadata('design:paramtypes', [])
    ], anywant);
    return anywant;
}());
exports.anywant = anywant;
//# sourceMappingURL=app.component.js.map