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
var video_service_1 = require('./video-service');
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var componenteDeVideo = (function () {
    function componenteDeVideo(PromesaVideos) {
        this.PromesaVideos = PromesaVideos;
    }
    componenteDeVideo.prototype.soltarVideo = function () {
        var _this = this;
        this.PromesaVideos.agarrarVideos()
            .then(function (value) {
            _this.videoExample = value; //buena practica poner value
        })
            .catch(function (error) {
            console.log('es un error');
        });
    };
    componenteDeVideo.prototype.ngOnInit = function () {
        this.soltarVideo();
    };
    componenteDeVideo = __decorate([
        core_1.Component({
            selector: 'componente-de-video',
            styles: ["\n\n    .frame {\n      background-color: black !important;\n      color: white;\n      height:70%;\n\n    }\n    .heroes {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n\n  "],
            template: "\n    <div class=\"frame\">\n    <img src=\"{{videoExample}}\">\n\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [video_service_1.PromesaVideos])
    ], componenteDeVideo);
    return componenteDeVideo;
}());
exports.componenteDeVideo = componenteDeVideo;
//# sourceMappingURL=video.component.js.map