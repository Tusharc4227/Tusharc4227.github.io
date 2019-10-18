(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/DashBoard/kalender/kalender.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/DashBoard/kalender/kalender.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"col-sm-6 parentDiv\">\n    <div class=\"col-sm-12\">\n        <b class='paddingZero fontSize20' style=\"float:left;\">Kalender</b>\n        <div style=\"float:right;\"  >\n                <a href=' javascript:void(0);' >kalender </a>\n            <span class=\"glyphicon glyphicon-chevron-down glyphiconActive\" id=\"glyphiconIdKalen\" data-toggle=\"collapse\" data-target=\"#expandedContainerKalend\"  aria-expanded=\"true\" ></span>\n        </div>\n    </div>\n    <div class=\"col-sm-12\" id=\"expandedContainerKalend\" class=\"collapse in\" aria-expanded=\"true\">\n        <div *ngFor=\"let item of Data\" class=\"col-sm-12 borderOutset\">\n            <img class=\"col-sm-1\" src=\"assets/img/calendar1.png\">\n            <span class=\"col-sm-11\">\n                <span class=\"fontColor\">\n                    {{item.First}}\n                </span>\n                <span>\n                    {{item.Second}}\n                </span>\n                <span class=\"fontColor\">\n                    {{item.Third}}\n                </span>\n                <span >\n                    {{item.Fifth}}\n                </span>\n                <span class=\"fontColor\">\n                    {{item.Sixth}}\n                </span>\n                <span >\n                    {{item.Fourth}}\n                </span>\n            </span>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/DashBoard/schuleranfragen/schuleranfragen.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/DashBoard/schuleranfragen/schuleranfragen.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <div class=\"col-sm-6 parentDiv\">\n        <div class=\"col-sm-12\">\n            <b class='paddingZero fontSize20' style=\"float:left;\">Schuleranfragen</b>\n            <div style=\"float:right;\"  >\n                    <a href=' javascript:void(0);' >Add Activation </a>\n                <span class=\"glyphicon glyphicon-chevron-down glyphiconActive\" id=\"glyphiconIdSchule\" data-toggle=\"collapse\" data-target=\"#expandedContainerSchuler\"  aria-expanded=\"true\" ></span>\n            </div>\n        </div>\n        <div class=\"col-sm-12\" id=\"expandedContainerSchuler\" class=\"collapse in\" aria-expanded=\"true\">\n            <div *ngFor=\"let item of Data\" class=\"col-sm-12 borderOutset\">\n                <img class=\"col-sm-1\" src=\"assets/img/student.png\">\n                <span class=\"col-sm-11\">\n                    <span class=\"fontColor\">\n                        {{item.First}}\n                    </span>\n                    <span>\n                        {{item.Second}}\n                    </span>\n                    <span class=\"fontColor\">\n                        {{item.Third}}\n                    </span><span >\n                        {{item.Fourth}}\n                    </span>\n                </span>\n            </div>\n        </div>\n    </div> \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/DashBoard/schulerfortschritt/schulerfortschritt.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/DashBoard/schulerfortschritt/schulerfortschritt.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"col-sm-6 parentDiv\">\n    <div class=\"col-sm-12\">\n        <b class='paddingZero fontSize20' style=\"float:left;\">Schulerfortschritt</b>\n        <div style=\"float:right;\"  >\n                <a href=' javascript:void(0);' >Schulerfortschritt</a>\n            <span class=\"glyphicon glyphicon-chevron-down glyphiconActive\" id=\"glyphiconIdSchulerFor\" data-toggle=\"collapse\" data-target=\"#expandedContainerSchulerFor\"  aria-expanded=\"true\" ></span>\n        </div>\n    </div>\n    <div class=\"col-sm-12\" id=\"expandedContainerSchulerFor\" class=\"collapse in\" aria-expanded=\"true\">\n        <div *ngFor=\"let item of Data\" class=\"col-sm-12 borderOutset\">\n            <img class=\"col-sm-1\" src=\"assets/img/man.png\">\n            <span class=\"col-sm-11\">\n                <span class=\"fontColor col-sm-2\">\n                    {{item.Title}}\n                </span>\n                <span style=\"margin-left: 15%;\" class=\"col-sm-2\">\n                    {{item.Second}}\n                </span>\n                <div class=\"progress col-sm-5\" style=\"margin-bottom: 0%;\">\n                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:70%\"></div>\n                </div>\n            </span>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/DashBoard/stundenanfragen/stundenanfragen.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/DashBoard/stundenanfragen/stundenanfragen.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"col-sm-6 parentDiv\">\n    <div class=\"col-sm-12\">\n        <b class='paddingZero fontSize20' style=\"float:left;\">Stundenanfragen</b>\n        <div style=\"float:right;\"  >\n                <a href=' javascript:void(0);' >Add Activation </a>\n            <span class=\"glyphicon glyphicon-chevron-down glyphiconActive\" id=\"glyphiconIdStun\" data-toggle=\"collapse\" data-target=\"#expandedContainer\"  aria-expanded=\"true\" ></span>\n        </div>\n    </div>\n    <div class=\"col-sm-12\" id=\"expandedContainer\" class=\"collapse in\" aria-expanded=\"true\">\n        <div *ngFor=\"let item of Data\" class=\"col-sm-12 borderOutset\">\n            <img class=\"col-sm-1\" src=\"assets/img/calendar1.png\">\n            <span class=\"col-sm-11\">\n                <span class=\"fontColor\">\n                    {{item.First}}\n                </span>\n                <span>\n                    {{item.Second}}\n                </span>\n                <span class=\"fontColor\">\n                    {{item.Third}}\n                </span><span >\n                    {{item.Fourth}}\n                </span><span class=\"fontColor\">\n                    {{item.Fifth}}\n                </span><span>\n                    {{item.Sixth}}\n                </span>\n            </span>\n        </div>\n    </div>\n</div> \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/DashBoard/ubersicht-deiner-fahrschulen/ubersicht-deiner-fahrschulen.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/DashBoard/ubersicht-deiner-fahrschulen/ubersicht-deiner-fahrschulen.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div  class=\"col-sm-12 parentDiv\">\n    <div class=\"col-sm-6\">\n        <div class=\"col-sm-12 paddingZero\">\n            <b class='col-sm-5 paddingZero fontSize20'>Ubersicht deiner Fahrschulen</b>\n            <span class=\"col-sm-1 glyphicon glyphicon-chevron-down paddingZero glyphiconActive\" id=\"glyphiconId\" data-toggle=\"collapse\" data-target=\"#carContainer\" style=\"margin-top:8px;cursor: pointer;\" aria-expanded=\"true\" ></span>\n            <span class=\"col-sm-4\"></span>\n        </div>\n        <div class=\"col-sm-12\" id=\"carContainer\" class=\"collapse in\" aria-expanded=\"true\">\n            <span>{{Data.Description}}</span>\n            <div class=\"col-sm-12 paddingZero\" *ngFor=\"let item of Data.Models;\">\n                <div class=\"col-sm-5 paddingZero\">\n                    <img [src]=\"item.imgPath\" style=\"width: 100%;\">\n                </div>\n                <div class=\"col-sm-7 paddingZero\">\n                    <div class=\"col-sm-12 container\">\n                        <b style=\"font-size: 15px;\">{{item.Title}}</b>\n                    </div>\n                    <div class=\"col-sm-12 container \">\n                        <div class=\"col-sm-1 glyphicon glyphicon-road glyphiconActive paddingZero\"></div>\n                        <div class=\"col-sm-11 paddingZero\">\n                            {{item.Address}}\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12 container \">\n                        <div class=\"col-sm-1 glyphicon glyphicon-earphone glyphiconActive paddingZero\"></div>\n                        <div class=\"col-sm-11 paddingZero\">\n                            {{item.Phone}}\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12 container \">\n                        <div class=\"col-sm-1 glyphicon glyphicon-user glyphiconActive paddingZero\"></div>\n                        <div class=\"col-sm-11 paddingZero\">\n                            {{item.Name}}\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12 container \">\n                        <div class=\"col-sm-1 \tglyphicon glyphicon-envelope glyphiconActive paddingZero\"></div>\n                        <div class=\"col-sm-11 paddingZero\">\n                            <a href='mailto:{{item.Email}}'>\n                                {{item.Email}}\n                            </a>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12 container \">\n                        <div class=\"col-sm-1 glyphicon glyphicon-globe glyphiconActive paddingZero\"></div>\n                        <div class=\"col-sm-11 paddingZero\">\n                            <a [attr.href]=\"item.WebAddress.Url\" target=\"_blank\">{{item.WebAddress.Description}}</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-6\">\n        <button type=\"button\" style=\"float: right;background: #87ceeb;margin-top: 10px;margin-bottom:10px;\">ProfileSicht</button>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/DashBoard/verbessere-dein-profil/verbessere-dein-profil.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/DashBoard/verbessere-dein-profil/verbessere-dein-profil.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"col-sm-12 parentDiv\">\n    <div class=\"col-sm-12\">\n        <b class='paddingZero fontSize20' style=\"float:left;\">Verbessere dein Profil</b>\n        <span style=\"float:right;\"(click)=\"InsertNewOne()\" >\n            <a href=' javascript:void(0);' >Tap to Insert </a>\n        </span>\n    </div>\n    <div class=\"col-sm-12\">\n        <div class=\"col-sm-3 innerContainer paddingZero\" style=\"width: 31.33%\" *ngFor='let item of Data; let i = index'>\n                <b class=\"col-sm-12\" style=\"font-size: 15px;\">\n                    {{item.Title}}\n                    <span class=\"glyphicon glyphicon-remove\" style=\"float:right;\" (click)=\"Data.splice(i,1);\"></span>\n                </b> \n                <div class=\"col-sm-12\">{{item.Description}}</div>\n                <div class=\"col-sm-12\" style=\"margin-bottom: 10px;\">\n                    <button type=\"button\" style=\"background: #87ceeb;\">{{item.ButtonName}}</button>\n                </div>\n        </div>\n    </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"topnav\">\n  <a href=\"/\" routerLinkActive=\"active\">Home</a>\n  <a routerLink='/ubersichtdeinerfahrschulen' routerLinkActive=\"active\">Ubersichtdeinerfahrschulen</a>\n  <a routerLink='/verbesseredeinprofil' routerLinkActive=\"active\">Verbesseredeinprofil</a>\n  <a routerLink='/stundenanfragen' routerLinkActive=\"active\">Stundenanfragen</a>\n  <a routerLink='/schuleranfragen' routerLinkActive=\"active\">Schuleranfragen</a>\n  <a routerLink='/kalender' routerLinkActive=\"active\">Kalender</a>\n  <a routerLink='/schulerfortschritt' routerLinkActive=\"active\">Schulerfortschritt</a>\n  <div class=\"userClass\">\n      <span class=\"glyphicon glyphicon-user\" ></span>\n  </div>\n</div>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav>\n    <app-ubersicht-deiner-fahrschulen></app-ubersicht-deiner-fahrschulen>\n    <app-verbessere-dein-profil ng-if=\"!MobileOrNot\"></app-verbessere-dein-profil>\n    \n    <app-stundenanfragen></app-stundenanfragen>\n    \n    <app-schuleranfragen></app-schuleranfragen>\n    \n    <app-kalender></app-kalender>\n    \n    <app-schulerfortschritt></app-schulerfortschritt>\n</nav>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/DashBoard/kalender/kalender.component.css":
/*!***********************************************************!*\
  !*** ./src/app/DashBoard/kalender/kalender.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".glyphiconActive{\r\n    color: lightblue;\r\n}\r\n.fontColor{\r\n    color:#337AB7;\r\n}\r\n.borderOutset{\r\n    border: outset;\r\n    padding: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRGFzaEJvYXJkL2thbGVuZGVyL2thbGVuZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvRGFzaEJvYXJkL2thbGVuZGVyL2thbGVuZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2x5cGhpY29uQWN0aXZle1xyXG4gICAgY29sb3I6IGxpZ2h0Ymx1ZTtcclxufVxyXG4uZm9udENvbG9ye1xyXG4gICAgY29sb3I6IzMzN0FCNztcclxufVxyXG4uYm9yZGVyT3V0c2V0e1xyXG4gICAgYm9yZGVyOiBvdXRzZXQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/DashBoard/kalender/kalender.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/DashBoard/kalender/kalender.component.ts ***!
  \**********************************************************/
/*! exports provided: KalenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KalenderComponent", function() { return KalenderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let KalenderComponent = class KalenderComponent {
    constructor() {
        this.Data = [];
    }
    ngOnInit() {
        $('#glyphiconIdKalen').click(function () {
            if ($(this).hasClass('glyphiconActive')) {
                $(this).removeClass('glyphiconActive');
            }
            else {
                $(this).addClass('glyphiconActive');
            }
        });
        for (let i = 1; i < 7; i++) {
            let temp = {
                'First': 'FirstName' + i,
                'Second': 'MiddleName' + i,
                'Third': 'LastName' + i,
                'Fourth': new Date().toLocaleTimeString(),
                'Fifth': 'Address' + i,
                'Sixth': 'LastAddress' + i
            };
            this.Data.push(temp);
        }
    }
};
KalenderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kalender',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kalender.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/DashBoard/kalender/kalender.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kalender.component.css */ "./src/app/DashBoard/kalender/kalender.component.css")).default]
    })
], KalenderComponent);



/***/ }),

/***/ "./src/app/DashBoard/schuleranfragen/schuleranfragen.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/DashBoard/schuleranfragen/schuleranfragen.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".glyphiconActive{\r\n    color: lightblue;\r\n}\r\n.fontColor{\r\n    color:#337AB7;\r\n}\r\n.borderOutset{\r\n    border: outset;\r\n    padding: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRGFzaEJvYXJkL3NjaHVsZXJhbmZyYWdlbi9zY2h1bGVyYW5mcmFnZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9EYXNoQm9hcmQvc2NodWxlcmFuZnJhZ2VuL3NjaHVsZXJhbmZyYWdlbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdseXBoaWNvbkFjdGl2ZXtcclxuICAgIGNvbG9yOiBsaWdodGJsdWU7XHJcbn1cclxuLmZvbnRDb2xvcntcclxuICAgIGNvbG9yOiMzMzdBQjc7XHJcbn1cclxuLmJvcmRlck91dHNldHtcclxuICAgIGJvcmRlcjogb3V0c2V0O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/DashBoard/schuleranfragen/schuleranfragen.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/DashBoard/schuleranfragen/schuleranfragen.component.ts ***!
  \************************************************************************/
/*! exports provided: SchuleranfragenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchuleranfragenComponent", function() { return SchuleranfragenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SchuleranfragenComponent = class SchuleranfragenComponent {
    constructor() {
        this.Data = [];
    }
    ngOnInit() {
        $('#glyphiconIdSchule').click(function () {
            if ($(this).hasClass('glyphiconActive')) {
                $(this).removeClass('glyphiconActive');
            }
            else {
                $(this).addClass('glyphiconActive');
            }
        });
        for (let i = 1; i < 4; i++) {
            let temp = {
                'First': 'Student' + i,
                'Second': 'StudentMiddle' + i,
                'Third': 'StudentLast' + i,
                'Fourth': 'Address' + i
            };
            this.Data.push(temp);
        }
    }
};
SchuleranfragenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-schuleranfragen',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./schuleranfragen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/DashBoard/schuleranfragen/schuleranfragen.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./schuleranfragen.component.css */ "./src/app/DashBoard/schuleranfragen/schuleranfragen.component.css")).default]
    })
], SchuleranfragenComponent);



/***/ }),

/***/ "./src/app/DashBoard/schulerfortschritt/schulerfortschritt.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/DashBoard/schulerfortschritt/schulerfortschritt.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".glyphiconActive{\r\n    color: lightblue;\r\n}\r\n.fontColor{\r\n    color:#337AB7;\r\n}\r\n.borderOutset{\r\n    border: outset;\r\n    padding: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRGFzaEJvYXJkL3NjaHVsZXJmb3J0c2Nocml0dC9zY2h1bGVyZm9ydHNjaHJpdHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9EYXNoQm9hcmQvc2NodWxlcmZvcnRzY2hyaXR0L3NjaHVsZXJmb3J0c2Nocml0dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdseXBoaWNvbkFjdGl2ZXtcclxuICAgIGNvbG9yOiBsaWdodGJsdWU7XHJcbn1cclxuLmZvbnRDb2xvcntcclxuICAgIGNvbG9yOiMzMzdBQjc7XHJcbn1cclxuLmJvcmRlck91dHNldHtcclxuICAgIGJvcmRlcjogb3V0c2V0O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/DashBoard/schulerfortschritt/schulerfortschritt.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/DashBoard/schulerfortschritt/schulerfortschritt.component.ts ***!
  \******************************************************************************/
/*! exports provided: SchulerfortschrittComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchulerfortschrittComponent", function() { return SchulerfortschrittComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SchulerfortschrittComponent = class SchulerfortschrittComponent {
    constructor() {
        this.Data = [];
    }
    ngOnInit() {
        $('#glyphiconIdSchulerFor').click(function () {
            if ($(this).hasClass('glyphiconActive')) {
                $(this).removeClass('glyphiconActive');
            }
            else {
                $(this).addClass('glyphiconActive');
            }
        });
        for (let i = 1; i < 7; i++) {
            let temp = {
                'Title': 'FirstValue' + i,
                'Second': 'Fortschritt' + i,
                'HideValue': 'Lorem Ipsum is simply dummy text ' + i
            };
            this.Data.push(temp);
        }
    }
};
SchulerfortschrittComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-schulerfortschritt',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./schulerfortschritt.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/DashBoard/schulerfortschritt/schulerfortschritt.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./schulerfortschritt.component.css */ "./src/app/DashBoard/schulerfortschritt/schulerfortschritt.component.css")).default]
    })
], SchulerfortschrittComponent);



/***/ }),

/***/ "./src/app/DashBoard/stundenanfragen/stundenanfragen.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/DashBoard/stundenanfragen/stundenanfragen.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".glyphiconActive{\r\n    color: lightblue;\r\n}\r\n.fontColor{\r\n    color:#337AB7;\r\n}\r\n.borderOutset{\r\n    border: outset;\r\n    padding: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRGFzaEJvYXJkL3N0dW5kZW5hbmZyYWdlbi9zdHVuZGVuYW5mcmFnZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9EYXNoQm9hcmQvc3R1bmRlbmFuZnJhZ2VuL3N0dW5kZW5hbmZyYWdlbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdseXBoaWNvbkFjdGl2ZXtcclxuICAgIGNvbG9yOiBsaWdodGJsdWU7XHJcbn1cclxuLmZvbnRDb2xvcntcclxuICAgIGNvbG9yOiMzMzdBQjc7XHJcbn1cclxuLmJvcmRlck91dHNldHtcclxuICAgIGJvcmRlcjogb3V0c2V0O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/DashBoard/stundenanfragen/stundenanfragen.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/DashBoard/stundenanfragen/stundenanfragen.component.ts ***!
  \************************************************************************/
/*! exports provided: StundenanfragenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StundenanfragenComponent", function() { return StundenanfragenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StundenanfragenComponent = class StundenanfragenComponent {
    constructor() {
        this.Data = [];
    }
    ngOnInit() {
        $('#glyphiconIdStun').click(function () {
            if ($(this).hasClass('glyphiconActive')) {
                $(this).removeClass('glyphiconActive');
            }
            else {
                $(this).addClass('glyphiconActive');
            }
        });
        for (let i = 1; i < 4; i++) {
            let temp = {
                'First': 'FirstName' + i,
                'Second': 'MiddleName' + i,
                'Third': 'LastName' + i,
                'Fourth': new Date().toLocaleTimeString(),
                'Fifth': 'Address' + i,
                'Sixth': 'LastAddress' + i
            };
            this.Data.push(temp);
        }
    }
};
StundenanfragenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stundenanfragen',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stundenanfragen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/DashBoard/stundenanfragen/stundenanfragen.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stundenanfragen.component.css */ "./src/app/DashBoard/stundenanfragen/stundenanfragen.component.css")).default]
    })
], StundenanfragenComponent);



/***/ }),

/***/ "./src/app/DashBoard/ubersicht-deiner-fahrschulen/ubersicht-deiner-fahrschulen.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/DashBoard/ubersicht-deiner-fahrschulen/ubersicht-deiner-fahrschulen.component.css ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".glyphiconActive{\r\n    color: lightblue;\r\n}\r\n.container{\r\n    margin: 6px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRGFzaEJvYXJkL3ViZXJzaWNodC1kZWluZXItZmFocnNjaHVsZW4vdWJlcnNpY2h0LWRlaW5lci1mYWhyc2NodWxlbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9EYXNoQm9hcmQvdWJlcnNpY2h0LWRlaW5lci1mYWhyc2NodWxlbi91YmVyc2ljaHQtZGVpbmVyLWZhaHJzY2h1bGVuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2x5cGhpY29uQWN0aXZle1xyXG4gICAgY29sb3I6IGxpZ2h0Ymx1ZTtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiA2cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/DashBoard/ubersicht-deiner-fahrschulen/ubersicht-deiner-fahrschulen.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/DashBoard/ubersicht-deiner-fahrschulen/ubersicht-deiner-fahrschulen.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: UbersichtDeinerFahrschulenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UbersichtDeinerFahrschulenComponent", function() { return UbersichtDeinerFahrschulenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);


//declare var $: any;

let UbersichtDeinerFahrschulenComponent = class UbersichtDeinerFahrschulenComponent {
    constructor() {
        this.Data = {
            'Description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            'Models': [
                {
                    'Title': 'Fahrschule Achselpeter',
                    'Address': '880 Roberts Drive Miami Gardens, FL 33056',
                    'Phone': '0123456789',
                    'Name': 'Dummy Name',
                    'Email': 'DummyMailAddress@123.com',
                    'WebAddress': {
                        'Url': 'http://www.example.com/',
                        'Description': 'http://www.example.com/'
                    },
                    'imgPath': 'assets/img/download.jpg'
                }
            ]
        };
    }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_2__('#glyphiconId').click(function () {
            if (jquery__WEBPACK_IMPORTED_MODULE_2__(this).hasClass('glyphiconActive')) {
                jquery__WEBPACK_IMPORTED_MODULE_2__(this).removeClass('glyphiconActive');
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_2__(this).addClass('glyphiconActive');
            }
        });
    }
};
UbersichtDeinerFahrschulenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ubersicht-deiner-fahrschulen',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ubersicht-deiner-fahrschulen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/DashBoard/ubersicht-deiner-fahrschulen/ubersicht-deiner-fahrschulen.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ubersicht-deiner-fahrschulen.component.css */ "./src/app/DashBoard/ubersicht-deiner-fahrschulen/ubersicht-deiner-fahrschulen.component.css")).default]
    })
], UbersichtDeinerFahrschulenComponent);



/***/ }),

/***/ "./src/app/DashBoard/verbessere-dein-profil/verbessere-dein-profil.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/DashBoard/verbessere-dein-profil/verbessere-dein-profil.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n    .innerContainer{\r\n        /* outline: 1px dashed red;\r\n        outline-offset: -10px; */\r\n        margin:10px;border:1px solid lightslategrey\r\n    }\r\n    .innerContainer b span:hover{\r\n        background-color: #87ceeb;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRGFzaEJvYXJkL3ZlcmJlc3NlcmUtZGVpbi1wcm9maWwvdmVyYmVzc2VyZS1kZWluLXByb2ZpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtRQUNJO2dDQUN3QjtRQUN4QixXQUFXLENBQUM7SUFDaEI7SUFDQTtRQUNJLHlCQUF5QjtJQUM3QiIsImZpbGUiOiJzcmMvYXBwL0Rhc2hCb2FyZC92ZXJiZXNzZXJlLWRlaW4tcHJvZmlsL3ZlcmJlc3NlcmUtZGVpbi1wcm9maWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgLmlubmVyQ29udGFpbmVye1xyXG4gICAgICAgIC8qIG91dGxpbmU6IDFweCBkYXNoZWQgcmVkO1xyXG4gICAgICAgIG91dGxpbmUtb2Zmc2V0OiAtMTBweDsgKi9cclxuICAgICAgICBtYXJnaW46MTBweDtib3JkZXI6MXB4IHNvbGlkIGxpZ2h0c2xhdGVncmV5XHJcbiAgICB9XHJcbiAgICAuaW5uZXJDb250YWluZXIgYiBzcGFuOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4N2NlZWI7XHJcbiAgICB9Il19 */");

/***/ }),

/***/ "./src/app/DashBoard/verbessere-dein-profil/verbessere-dein-profil.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/DashBoard/verbessere-dein-profil/verbessere-dein-profil.component.ts ***!
  \**************************************************************************************/
/*! exports provided: VerbessereDeinProfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerbessereDeinProfilComponent", function() { return VerbessereDeinProfilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VerbessereDeinProfilComponent = class VerbessereDeinProfilComponent {
    constructor() {
        this.Data = [];
        this.InsertNewOne = function () {
            if (this.Data.length == 0) {
                this.valueToinsert(1);
            }
            else {
                this.valueToinsert(this.Data.length + 1);
            }
        };
        this.valueToinsert = function (i) {
            let temp = {
                'Title': 'Some Dummy Title ' + i,
                'Description': 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC ' + i,
                'ButtonName': 'Button ' + i
            };
            this.Data.push(temp);
        };
    }
    ngOnInit() {
        for (let i = 1; i < 4; i++) {
            this.valueToinsert(i);
        }
    }
};
VerbessereDeinProfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verbessere-dein-profil',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./verbessere-dein-profil.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/DashBoard/verbessere-dein-profil/verbessere-dein-profil.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./verbessere-dein-profil.component.css */ "./src/app/DashBoard/verbessere-dein-profil/verbessere-dein-profil.component.css")).default]
    })
], VerbessereDeinProfilComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _DashBoard_kalender_kalender_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DashBoard/kalender/kalender.component */ "./src/app/DashBoard/kalender/kalender.component.ts");
/* harmony import */ var _DashBoard_schuleranfragen_schuleranfragen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DashBoard/schuleranfragen/schuleranfragen.component */ "./src/app/DashBoard/schuleranfragen/schuleranfragen.component.ts");
/* harmony import */ var _DashBoard_schulerfortschritt_schulerfortschritt_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DashBoard/schulerfortschritt/schulerfortschritt.component */ "./src/app/DashBoard/schulerfortschritt/schulerfortschritt.component.ts");
/* harmony import */ var _DashBoard_stundenanfragen_stundenanfragen_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DashBoard/stundenanfragen/stundenanfragen.component */ "./src/app/DashBoard/stundenanfragen/stundenanfragen.component.ts");
/* harmony import */ var _DashBoard_ubersicht_deiner_fahrschulen_ubersicht_deiner_fahrschulen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DashBoard/ubersicht-deiner-fahrschulen/ubersicht-deiner-fahrschulen.component */ "./src/app/DashBoard/ubersicht-deiner-fahrschulen/ubersicht-deiner-fahrschulen.component.ts");
/* harmony import */ var _DashBoard_verbessere_dein_profil_verbessere_dein_profil_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DashBoard/verbessere-dein-profil/verbessere-dein-profil.component */ "./src/app/DashBoard/verbessere-dein-profil/verbessere-dein-profil.component.ts");










const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'kalender', component: _DashBoard_kalender_kalender_component__WEBPACK_IMPORTED_MODULE_4__["KalenderComponent"] },
    { path: 'schuleranfragen', component: _DashBoard_schuleranfragen_schuleranfragen_component__WEBPACK_IMPORTED_MODULE_5__["SchuleranfragenComponent"] },
    { path: 'schulerfortschritt', component: _DashBoard_schulerfortschritt_schulerfortschritt_component__WEBPACK_IMPORTED_MODULE_6__["SchulerfortschrittComponent"] },
    { path: 'stundenanfragen', component: _DashBoard_stundenanfragen_stundenanfragen_component__WEBPACK_IMPORTED_MODULE_7__["StundenanfragenComponent"] },
    { path: 'ubersichtdeinerfahrschulen', component: _DashBoard_ubersicht_deiner_fahrschulen_ubersicht_deiner_fahrschulen_component__WEBPACK_IMPORTED_MODULE_8__["UbersichtDeinerFahrschulenComponent"] },
    { path: 'verbesseredeinprofil', component: _DashBoard_verbessere_dein_profil_verbessere_dein_profil_component__WEBPACK_IMPORTED_MODULE_9__["VerbessereDeinProfilComponent"] }
];
;
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);

const routingComponents = [_DashBoard_kalender_kalender_component__WEBPACK_IMPORTED_MODULE_4__["KalenderComponent"], _DashBoard_schuleranfragen_schuleranfragen_component__WEBPACK_IMPORTED_MODULE_5__["SchuleranfragenComponent"], _DashBoard_schulerfortschritt_schulerfortschritt_component__WEBPACK_IMPORTED_MODULE_6__["SchulerfortschrittComponent"], _DashBoard_stundenanfragen_stundenanfragen_component__WEBPACK_IMPORTED_MODULE_7__["StundenanfragenComponent"], _DashBoard_ubersicht_deiner_fahrschulen_ubersicht_deiner_fahrschulen_component__WEBPACK_IMPORTED_MODULE_8__["UbersichtDeinerFahrschulenComponent"], _DashBoard_verbessere_dein_profil_verbessere_dein_profil_component__WEBPACK_IMPORTED_MODULE_9__["VerbessereDeinProfilComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".topnav {\r\n    overflow: hidden;\r\n    background-color: skyblue;\r\n  }\r\n  .topnav a {\r\n    float: left;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n  }\r\n  .topnav a:hover {\r\n    background-color:lightsteelblue;\r\n    color: black;\r\n  }\r\n  .topnav a.active {\r\n    background-color: lightslategrey;\r\n    color: white;\r\n  }\r\n  .userClass{\r\n    margin-right: 15px;\r\n    margin-top: 7px;\r\n    background-color: aliceblue;float: right;\r\n    width:40px;\r\n  \r\n  }\r\n  .userClass span{\r\n    margin-left: 3px;\r\n    margin-top: 2px;\r\n    font-size: xx-large;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakI7RUFDQTtJQUNFLCtCQUErQjtJQUMvQixZQUFZO0VBQ2Q7RUFDQTtJQUNFLGdDQUFnQztJQUNoQyxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsMkJBQTJCLENBQUMsWUFBWTtJQUN4QyxVQUFVOztFQUVaO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcG5hdiB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcclxuICB9XHJcbiAgLnRvcG5hdiBhIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29sb3I6ICNmMmYyZjI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgfVxyXG4gIC50b3BuYXYgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0c3RlZWxibHVlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICAudG9wbmF2IGEuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmV5O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAudXNlckNsYXNze1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO2Zsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOjQwcHg7XHJcbiAgXHJcbiAgfVxyXG4gIC51c2VyQ2xhc3Mgc3BhbntcclxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'SYMBTechnologies';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routingComponents"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
        const detectDeviceType = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
            ? 'Mobile'
            : 'Desktop';
        this.MobileOrNot = detectDeviceType() == 'Mobile' ? true : false;
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\SYMBTechnologies\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map