"use strict";
require('es6-shim');
require('es6-promise');
require('zone.js/dist/zone');
require('reflect-metadata');
// libreria para responsive con la propiedad flex por porcentajes
require('flexboxgrid/dist/flexboxgrid.min.css');
//importante xs => 0 to 769px
//importante sm => 800 to 991px
//importante md => 992 to 1199px
//importante xs => 1200 to MAXpx
// importing my vendor and polyfiils directly in the main.ts
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map