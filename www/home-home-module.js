(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A/ap":
/*!*********************************************************!*\
  !*** ./node_modules/detect-passive-events/lib/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// adapted from https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
var detectPassiveEvents = {
  update: function update() {
    if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
      var passive = false;
      var options = Object.defineProperty({}, 'passive', {
        get: function get() {
          passive = true;
        }
      });
      // note: have to set and remove a no-op listener instead of null
      // (which was used previously), becasue Edge v15 throws an error
      // when providing a null callback.
      // https://github.com/rafgraph/detect-passive-events/pull/3
      var noop = function noop() {};
      window.addEventListener('testPassiveEventSupport', noop, options);
      window.removeEventListener('testPassiveEventSupport', noop, options);
      detectPassiveEvents.hasSupport = passive;
    }
  }
};

detectPassiveEvents.update();
exports.default = detectPassiveEvents;

/***/ }),

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\" class=\"no-scroll\">\n  <div class=\"unlock__bacground\" *ngIf='luckEmiter'></div>\n  <div class=\"main__title\"\n  [ngClass]=\"{'main__title__light': storageService.themeDark === 'false'}\">Vibrator G-Spot</div>\n\n  <div class=\"top__wrapper\">\n    <div class=\"want__vip__container\">\n      <div class=\"want__vip__bg\"\n        [ngClass]=\"{'want__vip__bg__light': storageService.themeDark === 'false'}\"\n       ></div>\n      <div class=\"want__vip__content\">\n        <div class=\"speed__text\"\n        [ngClass]=\"{'speed__text__light': storageService.themeDark === 'false'}\">Speed: <span>{{value}}</span>/7</div>\n        <div class=\"want__vip__btn\" (click)='eventVip()'>Want VIP?</div>\n      </div>\n    </div>\n    <div *ngIf='luckEmiter' class=\"hold__unlock\" style='background-image: url({{holdUnlock}});'>\n      Hold to unlock\n    </div>\n    <div *ngIf='luckEmiter' class=\"lock__btn__wrapper\" (press)=\"onPress($event)\">\n      <div class=\"lock__icon\" style='background-image: url({{luckImg}})'></div>\n    </div>\n\n    <div *ngIf='!luckEmiter' class=\"lock__btn__wrapper__false\" (click)='luckEvent($event)'>\n      <div class=\"lock__icon\"\n      style='background-image: url({{luckImg}})'\n      *ngIf=\"storageService.themeDark === 'true'\"\n      ></div>\n      <div class=\"lock__icon\"\n      style='background-image: url({{luckImgLight}})'\n      *ngIf=\"storageService.themeDark === 'false'\"\n      ></div>\n    </div>\n\n  </div>\n\n  <div class=\"power__wrapper\">\n    <div class=\"power__container\" >\n      <div class=\"power__btn\" (click)='vibroPower(1)'>\n        <div class=\"power__btn__bg first\"\n          [ngClass]=\"{'power__btn__bg__light': storageService.themeDark === 'false'}\"\n        ></div>\n        <div class=\"power__btn__icon one\" *ngIf=\"storageService.themeDark === 'true'\"></div>\n        <div class=\"power__btn__icon one__light\" *ngIf=\"storageService.themeDark === 'false'\"></div>\n      </div>\n      <div class=\"power__btn\" (click)='vibroPower(2)'>\n        <div class=\"power__btn__bg\"\n        [ngClass]=\"{'power__btn__bg__light': storageService.themeDark === 'false'}\"\n        ></div>\n        <div class=\"pro__icon\"></div>\n        <div class=\"power__btn__icon two\" *ngIf=\"storageService.themeDark === 'true'\"></div>\n        <div class=\"power__btn__icon two__light\" *ngIf=\"storageService.themeDark === 'false'\"></div>\n      </div>\n      <div class=\"power__btn\" (click)='vibroPower(3)'>\n        <div class=\"power__btn__bg last\"\n        [ngClass]=\"{'power__btn__bg__light': storageService.themeDark === 'false'}\"\n        ></div>\n        <div class=\"pro__icon\"></div>\n        <div class=\"power__btn__icon three\" *ngIf=\"storageService.themeDark === 'true'\"></div>\n        <div class=\"power__btn__icon three__light\" *ngIf=\"storageService.themeDark === 'false'\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"pro__icon__big__wrapper__abs\">\n    <div class=\"pro__icon__big__wrapper\">\n      <div class=\"pro__icon__shadow\"></div>\n      <div class=\"pro__icon__big\"></div>\n    </div>\n  </div>\n\n  <div class=\"line__svg__container\">\n    <svg width=\"250\" height=\"209\" viewBox=\"0 0 228 209\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path class=\"wave\"\n      [class.opacity1]='value === 1'\n      [class.animateWave1]='value === 1'\n      [class.opacity2]='value === 2'\n      [class.animateWave2]='value === 2'\n      [class.opacity3]='value === 3'\n      [class.animateWave3]='value === 3'\n      [class.opacity4]='value === 4'\n      [class.animateWave4]='value === 4'\n      [class.opacity5]='value === 5'\n      [class.animateWave5]='value === 5'\n      [class.opacity6]='value === 6'\n      [class.animateWave6]='value === 6'\n      [class.opacity7]='value === 7'\n      [class.animateWave7]='value === 7'\n      opacity=\"0.1\" d=\"M30.0004 2C30.0004 2 30.0458 3.82931 30.0004 5C29.6 15.3264 20.0729 19.1661 20.0004 29.5C19.9266 40.0149 30.0004 43.9848 30.0004 54.5C30.0004 65.0152 20.0004 68.9848 20.0004 79.5C20.0004 90.0152 30.0004 93.9848 30.0004 104.5C30.0004 115.015 20.0004 118.985 20.0004 129.5C20.0004 140.015 30.0004 143.985 30.0004 154.5C30.0004 165.015 20.0004 168.985 20.0004 179.5C20.0004 190.015 29.6668 193.99 30.0004 204.5C30.0314 205.476 30.0004 207 30.0004 207\" stroke=\"white\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    <path class=\"wave\"\n      [class.opacity1]='value === 1'\n      [class.animateWave1]='value === 1'\n      [class.opacity2]='value === 2'\n      [class.animateWave2]='value === 2'\n      [class.opacity3]='value === 3'\n      [class.animateWave3]='value === 3'\n      [class.opacity4]='value === 4'\n      [class.animateWave4]='value === 4'\n      [class.opacity5]='value === 5'\n      [class.animateWave5]='value === 5'\n      [class.opacity6]='value === 6'\n      [class.animateWave6]='value === 6'\n      [class.opacity7]='value === 7'\n      [class.animateWave7]='value === 7'\n      opacity=\"0.1\" d=\"M198.02 207C198.02 207 197.975 205.171 198.02 204C198.42 193.674 207.948 189.834 208.02 179.5C208.094 168.985 198.02 165.015 198.02 154.5C198.02 143.985 208.02 140.015 208.02 129.5C208.02 118.985 198.02 115.015 198.02 104.5C198.02 93.9848 208.02 90.0152 208.02 79.5C208.02 68.9848 198.02 65.0152 198.02 54.5C198.02 43.9848 208.02 40.0152 208.02 29.5C208.02 18.9848 198.354 15.0099 198.02 4.5C197.989 3.52418 198.02 2 198.02 2\" stroke=\"white\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    <path class=\"wave\"\n      [class.opacity1]='value === 1'\n      [class.animateWave1]='value === 1'\n      [class.opacity2]='value === 2'\n      [class.animateWave2]='value === 2'\n      [class.opacity3]='value === 3'\n      [class.animateWave3]='value === 3'\n      [class.opacity4]='value === 4'\n      [class.animateWave4]='value === 4'\n      [class.opacity5]='value === 5'\n      [class.animateWave5]='value === 5'\n      [class.opacity6]='value === 6'\n      [class.animateWave6]='value === 6'\n      [class.opacity7]='value === 7'\n      [class.animateWave7]='value === 7'\n       opacity=\"0.1\" d=\"M216.021 154.5C216.021 143.985 226.021 140.015 226.021 129.5C226.021 118.985 216.021 115.015 216.021 104.5C216.021 93.9848 226.021 90.0152 226.021 79.5C226.021 68.9848 216.021 65.0152 216.021 54.5\" stroke=\"white\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    <path class=\"wave\"\n      [class.opacity1]='value === 1'\n      [class.animateWave1]='value === 1'\n      [class.opacity2]='value === 2'\n      [class.animateWave2]='value === 2'\n      [class.opacity3]='value === 3'\n      [class.animateWave3]='value === 3'\n      [class.opacity4]='value === 4'\n      [class.animateWave4]='value === 4'\n      [class.opacity5]='value === 5'\n      [class.animateWave5]='value === 5'\n      [class.opacity6]='value === 6'\n      [class.animateWave6]='value === 6'\n      [class.opacity7]='value === 7'\n      [class.animateWave7]='value === 7'\n      opacity=\"0.1\" d=\"M12 154.5C12 143.985 2 140.015 2 129.5C2 118.985 12 115.015 12 104.5C12 93.9848 2 90.0152 2 79.5C2 68.9848 12 65.0152 12 54.5\" stroke=\"white\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    </svg>\n  </div>\n\n  <div class=\"toggle__wrapper\" >\n    <div class=\"toggle__body\">\n      <ngx-slider\n        [(value)]=\"value\"\n        [options]=\"options\"\n        (userChangeEnd)=\"sliderEvent()\"\n        (valueChange)=\"valueChange()\"\n        [ngClass]=\"{'slider__light': storageService.themeDark === 'false'}\"\n        >\n      </ngx-slider>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular-slider/ngx-slider */ "mgaL");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");








let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_7__["HomePageRoutingModule"],
            _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_6__["NgxSliderModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.main__title {\n  font-family: \"Lato\", sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  text-align: center;\n  color: #FFFF;\n  margin-top: 63px;\n}\n\n.main__title__light {\n  color: #000;\n}\n\n.top__wrapper {\n  display: flex;\n  padding: 0 38px;\n  justify-content: space-between;\n  margin-top: 20px;\n}\n\n.want__vip__container {\n  display: flex;\n  width: 234px;\n  height: 48px;\n  position: relative;\n  align-items: center;\n}\n\n.want__vip__bg {\n  background: #FE175C;\n  border-radius: 10px;\n  opacity: 0.2;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  z-index: 1;\n}\n\n.want__vip__bg__light {\n  opacity: 0.05;\n}\n\n.want__vip__content {\n  display: flex;\n  z-index: 2;\n  width: 100%;\n  justify-content: space-between;\n  padding: 0 10px;\n}\n\n.lock__btn__wrapper {\n  width: 50px;\n  height: 48px;\n  border-radius: 10px;\n  border: 2px solid #FE175C;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 999;\n  background: #ffffff;\n  border-color: #ffffff;\n}\n\n.lock__btn__wrapper__false {\n  width: 50px;\n  height: 48px;\n  border-radius: 10px;\n  border: 2px solid #FE175C;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 999;\n}\n\n.lock__icon {\n  width: 24px;\n  height: 24px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.speed__text {\n  font-family: \"Lato\", sans-serif;\n  font-size: 16px;\n  color: #FFFF;\n}\n\n.speed__text span {\n  font-family: \"Lato\", sans-serif;\n  font-size: 20px;\n  color: #FFFF;\n  font-weight: 700;\n}\n\n.speed__text::after {\n  content: \"\";\n  position: absolute;\n  width: 1px;\n  height: 28px;\n  background-color: #bc325c57;\n  opacity: 0.4;\n  margin-left: 15px;\n}\n\n.speed__text__light {\n  color: #000;\n}\n\n.speed__text__light span {\n  color: #000;\n}\n\n.speed__text__light::after {\n  content: \"\";\n  position: absolute;\n  width: 1px;\n  height: 28px;\n  opacity: 0.4;\n  margin-left: 15px;\n}\n\n.want__vip__btn {\n  font-family: \"Lato\", sans-serif;\n  font-size: 16px;\n  color: #FFFF;\n  padding: 0;\n  background: #FE175C;\n  border-radius: 6px;\n  padding: 5px 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.want__vip__btn:focus {\n  outline: none;\n}\n\n.power__wrapper {\n  height: 80px;\n  width: 300px;\n  display: flex;\n  position: absolute;\n  top: 175px;\n  left: 39px;\n}\n\n.power__container {\n  display: flex;\n  align-items: center;\n}\n\n.power__bg {\n  height: 80px;\n  width: 100%;\n  position: absolute;\n  z-index: 1;\n}\n\n.power__container {\n  display: flex;\n  width: 100%;\n}\n\n.power__btn {\n  height: 100%;\n  width: 33.3%;\n  margin-right: 3px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1;\n  position: relative;\n}\n\n.power__btn:last-child {\n  margin: 0;\n}\n\n.power__btn__bg {\n  background: #FE175C;\n  opacity: 0.2;\n  width: 100%;\n  height: 100%;\n}\n\n.power__btn__bg__light {\n  opacity: 0.05;\n}\n\n.first {\n  border-radius: 15px 0 0 15px;\n}\n\n.last {\n  border-radius: 0 15px 15px 0;\n}\n\n.power__btn__icon {\n  width: 47px;\n  height: 36px;\n  position: absolute;\n  z-index: 25674534;\n}\n\n.one {\n  background-image: url(\"/assets/ModeIcons/Dark/Active/pwr-1.png\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.one__light {\n  background-image: url(\"/assets/ModeIcons/Light/Active/pwr-1.png\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.two {\n  background-image: url(\"/assets/ModeIcons/Dark/Active/pwr-2.png\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.two__light {\n  background-image: url(\"/assets/ModeIcons/Light/Active/pwr-2.png\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.three {\n  background-image: url(\"/assets/ModeIcons/Dark/Active/pwr-3.png\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.three__light {\n  background-image: url(\"/assets/ModeIcons/Light/Active/pwr-3.png\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.pro__icon {\n  height: 27px;\n  width: 27px;\n  position: absolute;\n  top: -14px;\n  z-index: 999999;\n  background-image: url(\"/assets/ModeIcons/Dark/ProSmallStar.png\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.pro__icon__big__wrapper__abs {\n  position: absolute;\n  top: 347px;\n  left: 165px;\n}\n\n.pro__icon__big__wrapper {\n  position: relative;\n}\n\n.pro__icon__shadow {\n  position: absolute;\n  background-image: url(\"/assets/ModeIcons/Dark/proIconBigShadow.png\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 101px;\n  height: 101px;\n  top: -28px;\n  left: -25px;\n}\n\n.pro__icon__big {\n  position: absolute;\n  background-image: url(\"/assets/ModeIcons/Dark/proIconBig.png\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 52px;\n  height: 52px;\n  z-index: 2;\n}\n\n.toggle__body {\n  height: 380px;\n  width: 123px;\n  border: 4px solid #FE175C;\n  background: none;\n  border-radius: 65px;\n  position: absolute;\n  top: 295px;\n  right: 122px;\n  filter: drop-shadow(1px 2px 10px rgba(254, 23, 92, 0.4));\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-content {\n  position: relative;\n}\n\n.line__svg__container {\n  position: absolute;\n  width: 100%;\n  justify-content: center;\n  display: flex;\n  top: 370px;\n}\n\n.hold__unlock {\n  width: 187px;\n  height: 36px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  position: absolute;\n  z-index: 9999;\n  top: 113px;\n  right: 78px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Lato\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n}\n\n.unlock__bacground {\n  position: absolute;\n  background: linear-gradient(167.96deg, #DF074F 0%, #DF074F 100%), #FE175C;\n  opacity: 0.7;\n  width: 100%;\n  height: 100%;\n  z-index: 9;\n  transition: all 200ms ease;\n}\n\n.wave {\n  transition: all 400ms ease;\n}\n\n.opacity1 {\n  opacity: 0.2;\n}\n\n.opacity2 {\n  opacity: 0.3;\n}\n\n.opacity3 {\n  opacity: 0.4;\n}\n\n.opacity4 {\n  opacity: 0.5;\n}\n\n.opacity5 {\n  opacity: 0.6;\n}\n\n.opacity6 {\n  opacity: 0.7;\n}\n\n.opacity7 {\n  opacity: 0.8;\n}\n\n.animateWave1 {\n  animation: shake 0.7s;\n  animation-iteration-count: infinite;\n}\n\n.animateWave2 {\n  animation: shake 0.6s;\n  animation-iteration-count: infinite;\n}\n\n.animateWave3 {\n  animation: shake 0.5s;\n  animation-iteration-count: infinite;\n}\n\n.animateWave4 {\n  animation: shake 0.4s;\n  animation-iteration-count: infinite;\n}\n\n.animateWave5 {\n  animation: shake 0.3s;\n  animation-iteration-count: infinite;\n}\n\n.animateWave6 {\n  animation: shake 0.2s;\n  animation-iteration-count: infinite;\n}\n\n.animateWave7 {\n  animation: shake 0.1s;\n  animation-iteration-count: infinite;\n}\n\n@keyframes shake {\n  0% {\n    transform: translate(0.2px, 0.2px) rotate(0deg);\n  }\n  5% {\n    transform: translate(0.1px, -0.2px) rotate(0deg);\n  }\n  10% {\n    transform: translate(-0.1px, -1.1px) rotate(-1deg);\n  }\n  15% {\n    transform: translate(-0.2px, -0.1px) rotate(-1deg);\n  }\n  20% {\n    transform: translate(-1.1px, 0px) rotate(1deg);\n  }\n  30% {\n    transform: translate(1.1px, 1.1px) rotate(0deg);\n  }\n  40% {\n    transform: translate(0.1px, -0.1px) rotate(1deg);\n  }\n  50% {\n    transform: translate(-0.1px, 1.1px) rotate(-1deg);\n  }\n  60% {\n    transform: translate(-1.1px, 0.1px) rotate(0deg);\n  }\n  70% {\n    transform: translate(1.1px, 0.1px) rotate(-1deg);\n  }\n  80% {\n    transform: translate(-0.1px, -0.1px) rotate(1deg);\n  }\n  90% {\n    transform: translate(0.1px, 1.1px) rotate(0deg);\n  }\n  100% {\n    transform: translate(0.1px, -1.1px) rotate(-1deg);\n  }\n}\n\n@media screen and (max-width: 375px) and (max-height: 667px) {\n  .main__title {\n    margin-top: 20px;\n  }\n\n  .power__wrapper {\n    top: 135px;\n    left: 45px;\n    height: 70px;\n    width: 290px;\n  }\n\n  .toggle__body {\n    height: 315px;\n    width: 93px;\n    top: 230px;\n    right: 140px;\n  }\n\n  .pro__icon__big__wrapper__abs {\n    top: 265px;\n    left: 167px;\n  }\n\n  .line__svg__container {\n    top: 280px;\n  }\n\n  .pro__icon {\n    height: 24px;\n    width: 24px;\n    top: -12px;\n  }\n\n  .pro__icon__big {\n    width: 45px;\n    height: 45px;\n  }\n\n  .pro__icon__shadow {\n    width: 95px;\n    height: 95px;\n  }\n\n  .hold__unlock {\n    top: 70px;\n  }\n}\n\n@media screen and (min-width: 376px) and (max-width: 414px) and (max-height: 736px) {\n  .main__title {\n    margin-top: 20px;\n  }\n\n  .power__wrapper {\n    top: 150px;\n    left: 39px;\n    height: 90px;\n    width: 336px;\n  }\n\n  .toggle__body {\n    height: 340px;\n    width: 104px;\n    top: 262px;\n    right: 155px;\n  }\n\n  .pro__icon__big__wrapper__abs {\n    top: 290px;\n    left: 185px;\n  }\n\n  .line__svg__container {\n    top: 315px;\n  }\n\n  .pro__icon {\n    height: 30px;\n    width: 30px;\n    top: -16px;\n  }\n\n  .pro__icon__big {\n    width: 45px;\n    height: 45px;\n  }\n\n  .pro__icon__shadow {\n    width: 95px;\n    height: 95px;\n  }\n\n  .want__vip__container {\n    width: 260px;\n    height: 60px;\n  }\n\n  .lock__btn__wrapper {\n    width: 60px;\n    height: 60px;\n  }\n\n  .lock__btn__wrapper__false {\n    width: 60px;\n    height: 60px;\n  }\n\n  .hold__unlock {\n    top: 64px;\n    right: 102px;\n    height: 60px;\n    width: 250px;\n  }\n}\n\n@media screen and (max-width: 375px) and (min-height: 812px) and (max-height: 812px) {\n  .main__title {\n    margin-top: 60px;\n  }\n\n  .top__wrapper {\n    margin-top: 30px;\n  }\n\n  .power__wrapper {\n    top: 205px;\n    left: 38px;\n    height: 90px;\n    width: 300px;\n  }\n\n  .toggle__body {\n    height: 345px;\n    width: 114px;\n    top: 315px;\n    right: 130px;\n  }\n\n  .pro__icon__big__wrapper__abs {\n    top: 350px;\n    left: 166px;\n  }\n\n  .line__svg__container {\n    top: 390px;\n  }\n\n  .pro__icon {\n    height: 30px;\n    width: 30px;\n    top: -16px;\n  }\n\n  .pro__icon__big {\n    width: 45px;\n    height: 45px;\n  }\n\n  .pro__icon__shadow {\n    width: 95px;\n    height: 95px;\n  }\n\n  .want__vip__container {\n    width: 220px;\n    height: 60px;\n  }\n\n  .lock__btn__wrapper__false {\n    width: 60px;\n    height: 60px;\n  }\n\n  .hold__unlock {\n    top: 114px;\n    right: 101px;\n    height: 60px;\n    width: 236px;\n  }\n\n  .lock__btn__wrapper {\n    width: 60px;\n    height: 60px;\n  }\n}\n\n@media screen and (min-width: 414px) and (min-height: 896px) and (max-height: 896px) {\n  .main__title {\n    margin-top: 60px;\n  }\n\n  .top__wrapper {\n    margin-top: 30px;\n  }\n\n  .power__wrapper {\n    top: 205px;\n    left: 38px;\n    height: 90px;\n    width: 339px;\n  }\n\n  .toggle__body {\n    height: 425px;\n    width: 120px;\n    top: 315px;\n    right: 146px;\n  }\n\n  .pro__icon__big__wrapper__abs {\n    top: 350px;\n    left: 183px;\n  }\n\n  .line__svg__container {\n    top: 415px;\n  }\n\n  .pro__icon {\n    height: 30px;\n    width: 30px;\n    top: -16px;\n  }\n\n  .pro__icon__big {\n    width: 50px;\n    height: 50px;\n  }\n\n  .pro__icon__shadow {\n    width: 95px;\n    height: 95px;\n    top: -25px;\n    left: -23px;\n  }\n\n  .want__vip__container {\n    width: 260px;\n    height: 60px;\n  }\n\n  .lock__btn__wrapper__false {\n    width: 60px;\n    height: 60px;\n  }\n\n  .hold__unlock {\n    top: 114px;\n    right: 101px;\n    height: 60px;\n    width: 236px;\n  }\n\n  .lock__btn__wrapper {\n    width: 60px;\n    height: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGOztBQUtBO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFGRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUhGOztBQU1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JB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VUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtFQW9CRjs7RUFqQkE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQW9CRjtBQUNGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5tYWluX190aXRsZXtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjRkZGRjtcbiAgbWFyZ2luLXRvcDogNjNweDtcbn1cblxuLm1haW5fX3RpdGxlX19saWdodHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi50b3BfX3dyYXBwZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDAgMzhweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ud2FudF9fdmlwX19jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAyMzRweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi53YW50X192aXBfX2Jne1xuICBiYWNrZ3JvdW5kOiAjRkUxNzVDO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvcGFjaXR5OiAwLjI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLndhbnRfX3ZpcF9fYmdfX2xpZ2h0e1xuICBvcGFjaXR5OiAwLjA1O1xufVxuXG4ud2FudF9fdmlwX19jb250ZW50e1xuICBkaXNwbGF5OiBmbGV4O1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi5sb2NrX19idG5fX3dyYXBwZXJ7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNGRTE3NUM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiA5OTk7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcblxufVxuXG4ubG9ja19fYnRuX193cmFwcGVyX19mYWxzZXtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI0ZFMTc1QztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLmxvY2tfX2ljb257XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4uc3BlZWRfX3RleHR7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNGRkZGO1xuICBzcGFue1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjRkZGRjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG59XG5cbi5zcGVlZF9fdGV4dDo6YWZ0ZXJ7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmMzMjVjNTc7XG4gIG9wYWNpdHk6IDAuNDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5zcGVlZF9fdGV4dF9fbGlnaHR7XG4gIGNvbG9yOiAjMDAwO1xuICBzcGFue1xuICAgIGNvbG9yOiAjMDAwO1xuICB9XG59XG5cbi5zcGVlZF9fdGV4dF9fbGlnaHQ6OmFmdGVye1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMjhweDtcbiAgb3BhY2l0eTogMC40O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLndhbnRfX3ZpcF9fYnRue1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNGRkZGO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kOiAjRkUxNzVDO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDVweCAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLndhbnRfX3ZpcF9fYnRuOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnBvd2VyX193cmFwcGVye1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE3NXB4O1xuICBsZWZ0OiAzOXB4O1xufVxuXG4ucG93ZXJfX2NvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBvd2VyX19iZ3tcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xufVxuXG4ucG93ZXJfX2NvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wb3dlcl9fYnRue1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAzMy4zJTtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wb3dlcl9fYnRuOmxhc3QtY2hpbGR7XG4gIG1hcmdpbjogMDtcbn1cblxuLnBvd2VyX19idG5fX2Jne1xuICBiYWNrZ3JvdW5kOiAjRkUxNzVDO1xuICBvcGFjaXR5OiAwLjI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wb3dlcl9fYnRuX19iZ19fbGlnaHR7XG4gIG9wYWNpdHk6IDAuMDU7XG59XG5cbi5maXJzdHtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAwIDAgMTVweDtcbn1cblxuLmxhc3R7XG4gIGJvcmRlci1yYWRpdXM6IDAgMTVweCAxNXB4IDA7XG59XG5cbi5wb3dlcl9fYnRuX19pY29ue1xuICB3aWR0aDogNDdweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI1Njc0NTM0O1xufVxuXG4ub25le1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL01vZGVJY29ucy9EYXJrL0FjdGl2ZS9wd3ItMS5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4ub25lX19saWdodHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9Nb2RlSWNvbnMvTGlnaHQvQWN0aXZlL3B3ci0xLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbi50d297XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvTW9kZUljb25zL0RhcmsvQWN0aXZlL3B3ci0yLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbi50d29fX2xpZ2h0e1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL01vZGVJY29ucy9MaWdodC9BY3RpdmUvcHdyLTIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuLnRocmVle1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL01vZGVJY29ucy9EYXJrL0FjdGl2ZS9wd3ItMy5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4udGhyZWVfX2xpZ2h0e1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL01vZGVJY29ucy9MaWdodC9BY3RpdmUvcHdyLTMucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuLnByb19faWNvbntcbiAgaGVpZ2h0OiAyN3B4O1xuICB3aWR0aDogMjdweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xNHB4O1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvTW9kZUljb25zL0RhcmsvUHJvU21hbGxTdGFyLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cblxuLnByb19faWNvbl9fYmlnX193cmFwcGVyX19hYnN7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNDdweDtcbiAgbGVmdDogMTY1cHg7XG59XG5cbi5wcm9fX2ljb25fX2JpZ19fd3JhcHBlcntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHJvX19pY29uX19zaGFkb3d7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9Nb2RlSWNvbnMvRGFyay9wcm9JY29uQmlnU2hhZG93LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHdpZHRoOiAxMDFweDtcbiAgaGVpZ2h0OiAxMDFweDtcbiAgdG9wOiAtMjhweDtcbiAgbGVmdDogLTI1cHg7XG59XG5cbi5wcm9fX2ljb25fX2JpZ3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL01vZGVJY29ucy9EYXJrL3Byb0ljb25CaWcucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgd2lkdGg6IDUycHg7XG4gIGhlaWdodDogNTJweDtcbiAgei1pbmRleDogMjtcbn1cblxuLnRvZ2dsZV9fYm9keXtcbiAgaGVpZ2h0OiAzODBweDtcbiAgd2lkdGg6IDEyM3B4O1xuICBib3JkZXI6IDRweCBzb2xpZCAjRkUxNzVDO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA2NXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjk1cHg7XG4gIHJpZ2h0OiAxMjJweDtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygxcHggMnB4IDEwcHggcmdiYSgyNTQsIDIzLCA5MiwgMC40KSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pb24tY29udGVudHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubGluZV9fc3ZnX19jb250YWluZXJ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0b3A6IDM3MHB4O1xufVxuXG4uaG9sZF9fdW5sb2Nre1xuICB3aWR0aDogMTg3cHg7XG4gIGhlaWdodDogMzZweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTtcbiAgdG9wOiAxMTNweDtcbiAgcmlnaHQ6IDc4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LWZhbWlseTogJ0xhdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG59XG5cbi51bmxvY2tfX2JhY2dyb3VuZHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTY3Ljk2ZGVnLCAjREYwNzRGIDAlLCAjREYwNzRGIDEwMCUpLCAjRkUxNzVDO1xuICBvcGFjaXR5OiAwLjc7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDk7XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xufVxuXG4ud2F2ZXtcbiAgdHJhbnNpdGlvbjogYWxsIDQwMG1zIGVhc2U7XG59XG5cbi5vcGFjaXR5MXtcbiAgb3BhY2l0eTogMC4yO1xufVxuXG4ub3BhY2l0eTIge1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbi5vcGFjaXR5MyB7XG4gIG9wYWNpdHk6IDAuNDtcbn1cbi5vcGFjaXR5NCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5vcGFjaXR5NSB7XG4gIG9wYWNpdHk6IDAuNjtcbn1cbi5vcGFjaXR5NiB7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5vcGFjaXR5NyB7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLmFuaW1hdGVXYXZlMSB7XG4gIGFuaW1hdGlvbjogc2hha2UgMC43cztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG4uYW5pbWF0ZVdhdmUyIHtcbiAgYW5pbWF0aW9uOiBzaGFrZSAwLjZzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cbi5hbmltYXRlV2F2ZTMge1xuICBhbmltYXRpb246IHNoYWtlIDAuNXM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuLmFuaW1hdGVXYXZlNCB7XG4gIGFuaW1hdGlvbjogc2hha2UgMC40cztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG4uYW5pbWF0ZVdhdmU1IHtcbiAgYW5pbWF0aW9uOiBzaGFrZSAwLjNzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cbi5hbmltYXRlV2F2ZTYge1xuICBhbmltYXRpb246IHNoYWtlIDAuMnM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuLmFuaW1hdGVXYXZlNyB7XG4gIGFuaW1hdGlvbjogc2hha2UgMC4xcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMnB4LCAwLjJweCkgcm90YXRlKDBkZWcpOyB9XG4gIDUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4xcHgsIC0wLjJweCkgcm90YXRlKDBkZWcpOyB9XG4gIDEwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0wLjFweCwgLTEuMXB4KSByb3RhdGUoLTFkZWcpOyB9XG4gIDE1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0wLjJweCwgLTAuMXB4KSByb3RhdGUoLTFkZWcpOyB9XG4gIDIwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xLjFweCwgMHB4KSByb3RhdGUoMWRlZyk7IH1cbiAgMzAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMS4xcHgsIDEuMXB4KSByb3RhdGUoMGRlZyk7IH1cbiAgNDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4xcHgsIC0wLjFweCkgcm90YXRlKDFkZWcpOyB9XG4gIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0wLjFweCwgMS4xcHgpIHJvdGF0ZSgtMWRlZyk7IH1cbiAgNjAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEuMXB4LCAwLjFweCkgcm90YXRlKDBkZWcpOyB9XG4gIDcwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDEuMXB4LCAwLjFweCkgcm90YXRlKC0xZGVnKTsgfVxuICA4MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMC4xcHgsIC0wLjFweCkgcm90YXRlKDFkZWcpOyB9XG4gIDkwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMXB4LCAxLjFweCkgcm90YXRlKDBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjFweCwgLTEuMXB4KSByb3RhdGUoLTFkZWcpOyB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSBhbmQgKG1heC1oZWlnaHQ6IDY2N3B4KXtcblxuICAubWFpbl9fdGl0bGV7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuXG4gIC5wb3dlcl9fd3JhcHBlcntcbiAgICB0b3A6IDEzNXB4O1xuICAgIGxlZnQ6IDQ1cHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIHdpZHRoOiAyOTBweDtcbiAgfVxuXG4gIC50b2dnbGVfX2JvZHl7XG4gICAgaGVpZ2h0OiAzMTVweDtcbiAgICB3aWR0aDogOTNweDtcbiAgICB0b3A6IDIzMHB4O1xuICAgIHJpZ2h0OiAxNDBweDtcbiAgfVxuXG4gIC5wcm9fX2ljb25fX2JpZ19fd3JhcHBlcl9fYWJze1xuICAgIHRvcDogMjY1cHg7XG4gICAgbGVmdDogMTY3cHg7XG4gIH1cblxuICAubGluZV9fc3ZnX19jb250YWluZXJ7XG4gICAgdG9wOiAyODBweDtcbiAgfVxuXG4gIC5wcm9fX2ljb257XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIHRvcDogLTEycHg7XG4gIH1cblxuICAucHJvX19pY29uX19iaWd7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICB9XG5cbiAgLnByb19faWNvbl9fc2hhZG93e1xuICAgIHdpZHRoOiA5NXB4O1xuICAgIGhlaWdodDogOTVweDtcblxuICB9XG5cbiAgLmhvbGRfX3VubG9ja3tcbiAgICB0b3A6IDcwcHg7XG4gIH1cblxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzZweCkgYW5kIChtYXgtd2lkdGg6IDQxNHB4KSBhbmQgKG1heC1oZWlnaHQ6IDczNnB4KXtcblxuICAubWFpbl9fdGl0bGV7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuXG4gIC5wb3dlcl9fd3JhcHBlcntcbiAgICB0b3A6IDE1MHB4O1xuICBsZWZ0OiAzOXB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIHdpZHRoOiAzMzZweDtcbiAgfVxuXG4gIC50b2dnbGVfX2JvZHl7XG4gICAgaGVpZ2h0OiAzNDBweDtcbiAgICB3aWR0aDogMTA0cHg7XG4gICAgdG9wOiAyNjJweDtcbiAgICByaWdodDogMTU1cHg7XG4gIH1cblxuICAucHJvX19pY29uX19iaWdfX3dyYXBwZXJfX2Fic3tcbiAgICB0b3A6IDI5MHB4O1xuICAgIGxlZnQ6IDE4NXB4O1xuICB9XG5cbiAgLmxpbmVfX3N2Z19fY29udGFpbmVye1xuICAgIHRvcDogMzE1cHg7XG4gIH1cblxuICAucHJvX19pY29ue1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICB0b3A6IC0xNnB4O1xuICB9XG5cbiAgLnByb19faWNvbl9fYmlne1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgfVxuXG4gIC5wcm9fX2ljb25fX3NoYWRvd3tcbiAgICB3aWR0aDogOTVweDtcbiAgICBoZWlnaHQ6IDk1cHg7XG4gIH1cblxuICAud2FudF9fdmlwX19jb250YWluZXJ7XG4gICAgd2lkdGg6IDI2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgfVxuXG4gIC5sb2NrX19idG5fX3dyYXBwZXJ7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICB9XG5cbiAgLmxvY2tfX2J0bl9fd3JhcHBlcl9fZmFsc2V7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICB9XG5cbiAgLmhvbGRfX3VubG9ja3tcbiAgICB0b3A6IDY0cHg7XG4gICAgcmlnaHQ6IDEwMnB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICB3aWR0aDogMjUwcHg7XG4gIH1cblxufVxuXG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIGFuZCAobWluLWhlaWdodDogODEycHgpIGFuZCAobWF4LWhlaWdodDogODEycHgpe1xuICAubWFpbl9fdGl0bGV7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgfVxuXG4gIC50b3BfX3dyYXBwZXJ7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxuXG4gIC5wb3dlcl9fd3JhcHBlcntcbiAgICB0b3A6IDIwNXB4O1xuICAgIGxlZnQ6IDM4cHg7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxuXG4gIC50b2dnbGVfX2JvZHl7XG4gICAgaGVpZ2h0OiAzNDVweDtcbiAgICB3aWR0aDogMTE0cHg7XG4gICAgdG9wOiAzMTVweDtcbiAgICByaWdodDogMTMwcHg7XG4gIH1cblxuICAucHJvX19pY29uX19iaWdfX3dyYXBwZXJfX2Fic3tcbiAgICB0b3A6IDM1MHB4O1xuICAgIGxlZnQ6IDE2NnB4O1xuICB9XG5cbiAgLmxpbmVfX3N2Z19fY29udGFpbmVye1xuICAgIHRvcDogMzkwcHg7XG4gIH1cblxuICAucHJvX19pY29ue1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICB0b3A6IC0xNnB4O1xuICB9XG5cbiAgLnByb19faWNvbl9fYmlne1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgfVxuXG4gIC5wcm9fX2ljb25fX3NoYWRvd3tcbiAgICB3aWR0aDogOTVweDtcbiAgICBoZWlnaHQ6IDk1cHg7XG4gIH1cblxuICAud2FudF9fdmlwX19jb250YWluZXJ7XG4gICAgd2lkdGg6IDIyMHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgfVxuXG4gIC5sb2NrX19idG5fX3dyYXBwZXJfX2ZhbHNle1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgfVxuXG4gIC5ob2xkX191bmxvY2t7XG4gICAgdG9wOiAxMTRweDtcbiAgICByaWdodDogMTAxcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiAyMzZweDtcbiAgfVxuXG4gIC5sb2NrX19idG5fX3dyYXBwZXJ7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICB9XG5cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDE0cHgpIGFuZCAobWluLWhlaWdodDogODk2cHgpIGFuZCAobWF4LWhlaWdodDogODk2cHgpe1xuICAubWFpbl9fdGl0bGV7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgfVxuXG4gIC50b3BfX3dyYXBwZXJ7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxuXG4gIC5wb3dlcl9fd3JhcHBlcntcbiAgICB0b3A6IDIwNXB4O1xuICAgIGxlZnQ6IDM4cHg7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIHdpZHRoOiAzMzlweDtcbiAgfVxuXG4gIC50b2dnbGVfX2JvZHl7XG4gICAgaGVpZ2h0OiA0MjVweDtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgdG9wOiAzMTVweDtcbiAgICByaWdodDogMTQ2cHg7XG4gIH1cblxuICAucHJvX19pY29uX19iaWdfX3dyYXBwZXJfX2Fic3tcbiAgICB0b3A6IDM1MHB4O1xuICAgIGxlZnQ6IDE4M3B4O1xuICB9XG5cbiAgLmxpbmVfX3N2Z19fY29udGFpbmVye1xuICAgIHRvcDogNDE1cHg7XG4gIH1cblxuICAucHJvX19pY29ue1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICB0b3A6IC0xNnB4O1xuICB9XG5cbiAgLnByb19faWNvbl9fYmlne1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgfVxuXG4gIC5wcm9fX2ljb25fX3NoYWRvd3tcbiAgICB3aWR0aDogOTVweDtcbiAgICBoZWlnaHQ6IDk1cHg7XG4gICAgdG9wOiAtMjVweDtcbiAgICBsZWZ0OiAtMjNweDtcbiAgfVxuXG4gIC53YW50X192aXBfX2NvbnRhaW5lcntcbiAgICB3aWR0aDogMjYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICB9XG5cbiAgLmxvY2tfX2J0bl9fd3JhcHBlcl9fZmFsc2V7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICB9XG5cbiAgLmhvbGRfX3VubG9ja3tcbiAgICB0b3A6IDExNHB4O1xuICAgIHJpZ2h0OiAxMDFweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDIzNnB4O1xuICB9XG5cbiAgLmxvY2tfX2J0bl9fd3JhcHBlcntcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gIH1cblxufVxuIl19 */");

/***/ }),

/***/ "mgaL":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@angular-slider/ngx-slider/__ivy_ngcc__/fesm2015/angular-slider-ngx-slider.js ***!
  \****************************************************************************************************/
/*! exports provided: NgxSliderModule, ChangeContext, PointerType, LabelType, Options, ɵb, ɵc, ɵd, ɵa, ɵe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxSliderModule", function() { return NgxSliderModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeContext", function() { return ChangeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointerType", function() { return PointerType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelType", function() { return LabelType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Options", function() { return Options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return SliderElementDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return SliderHandleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return SliderLabelDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return SliderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return TooltipWrapperComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var detect_passive_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! detect-passive-events */ "A/ap");
/* harmony import */ var detect_passive_events__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(detect_passive_events__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {number} */



const _c0 = ["tooltipTemplate"];
const _c1 = ["leftOuterSelectionBar"];
const _c2 = ["rightOuterSelectionBar"];
const _c3 = ["fullBar"];
const _c4 = ["selectionBar"];
const _c5 = ["minHandle"];
const _c6 = ["maxHandle"];
const _c7 = ["floorLabel"];
const _c8 = ["ceilLabel"];
const _c9 = ["minHandleLabel"];
const _c10 = ["maxHandleLabel"];
const _c11 = ["combinedLabel"];
const _c12 = ["ticksElement"];
function SliderComponent_span_28_ngx_slider_tooltip_wrapper_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ngx-slider-tooltip-wrapper", 31);
} if (rf & 2) {
    const t_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("template", ctx_r14.tooltipTemplate)("tooltip", t_r13.valueTooltip)("placement", t_r13.valueTooltipPlacement)("content", t_r13.value);
} }
function SliderComponent_span_28_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 32);
} if (rf & 2) {
    const t_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", t_r13.legend, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
} }
const _c13 = function (a0) { return { "ngx-slider-selected": a0 }; };
function SliderComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ngx-slider-tooltip-wrapper", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SliderComponent_span_28_ngx_slider_tooltip_wrapper_2_Template, 1, 4, "ngx-slider-tooltip-wrapper", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SliderComponent_span_28_span_3_Template, 1, 1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c13, t_r13.selected))("ngStyle", t_r13.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("template", ctx_r12.tooltipTemplate)("tooltip", t_r13.tooltip)("placement", t_r13.tooltipPlacement);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", t_r13.value != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", t_r13.legend != null);
} }
function TooltipWrapperComponent_ng_container_0_1_ng_template_0_Template(rf, ctx) { }
function TooltipWrapperComponent_ng_container_0_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, TooltipWrapperComponent_ng_container_0_1_ng_template_0_Template, 0, 0, "ng-template");
} }
const _c14 = function (a0, a1, a2) { return { tooltip: a0, placement: a1, content: a2 }; };
function TooltipWrapperComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TooltipWrapperComponent_ng_container_0_1_Template, 1, 0, undefined, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c14, ctx_r0.tooltip, ctx_r0.placement, ctx_r0.content));
} }
function TooltipWrapperComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("title", ctx_r1.tooltip)("data-tooltip-placement", ctx_r1.placement);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.content, " ");
} }
const LabelType = {
    /** Label above low pointer */
    Low: 0,
    /** Label above high pointer */
    High: 1,
    /** Label for minimum slider value */
    Floor: 2,
    /** Label for maximum slider value */
    Ceil: 3,
    /** Label below legend tick */
    TickValue: 4,
};
LabelType[LabelType.Low] = 'Low';
LabelType[LabelType.High] = 'High';
LabelType[LabelType.Floor] = 'Floor';
LabelType[LabelType.Ceil] = 'Ceil';
LabelType[LabelType.TickValue] = 'TickValue';
/**
 * Slider options
 */
class Options {
    constructor() {
        /**
         * Minimum value for a slider.
         * Not applicable when using stepsArray.
         */
        this.floor = 0;
        /**
         * Maximum value for a slider.
         * Not applicable when using stepsArray.
         */
        this.ceil = null;
        /**
         * Step between each value.
         * Not applicable when using stepsArray.
         */
        this.step = 1;
        /**
         * The minimum range authorized on the slider.
         * Applies to range slider only.
         * When using stepsArray, expressed as index into stepsArray.
         */
        this.minRange = null;
        /**
         * The maximum range authorized on the slider.
         * Applies to range slider only.
         * When using stepsArray, expressed as index into stepsArray.
         */
        this.maxRange = null;
        /**
         * Set to true to have a push behavior. When the min handle goes above the max,
         * the max is moved as well (and vice-versa). The range between min and max is
         * defined by the step option (defaults to 1) and can also be overriden by
         * the minRange option. Applies to range slider only.
         */
        this.pushRange = false;
        /**
         * The minimum value authorized on the slider.
         * When using stepsArray, expressed as index into stepsArray.
         */
        this.minLimit = null;
        /**
         * The maximum value authorized on the slider.
         * When using stepsArray, expressed as index into stepsArray.
         */
        this.maxLimit = null;
        /**
         * Custom translate function. Use this if you want to translate values displayed
         * on the slider.
         */
        this.translate = null;
        /**
         * Custom function for combining overlapping labels in range slider.
         * It takes the min and max values (already translated with translate fuction)
         * and should return how these two values should be combined.
         * If not provided, the default function will join the two values with
         * ' - ' as separator.
         */
        this.combineLabels = null;
        /**
         * Use to display legend under ticks (thus, it needs to be used along with
         * showTicks or showTicksValues). The function will be called with each tick
         * value and returned content will be displayed under the tick as a legend.
         * If the returned value is null, then no legend is displayed under
         * the corresponding tick.You can also directly provide the legend values
         * in the stepsArray option.
         */
        this.getLegend = null;
        /**
         * If you want to display a slider with non linear/number steps.
         * Just pass an array with each slider value and that's it; the floor, ceil and step settings
         * of the slider will be computed automatically.
         * By default, the value model and valueHigh model values will be the value of the selected item
         * in the stepsArray.
         * They can also be bound to the index of the selected item by setting the bindIndexForStepsArray
         * option to true.
         */
        this.stepsArray = null;
        /**
         * Set to true to bind the index of the selected item to value model and valueHigh model.
         */
        this.bindIndexForStepsArray = false;
        /**
         * When set to true and using a range slider, the range can be dragged by the selection bar.
         * Applies to range slider only.
         */
        this.draggableRange = false;
        /**
         * Same as draggableRange but the slider range can't be changed.
         * Applies to range slider only.
         */
        this.draggableRangeOnly = false;
        /**
         * Set to true to always show the selection bar before the slider handle.
         */
        this.showSelectionBar = false;
        /**
         * Set to true to always show the selection bar after the slider handle.
         */
        this.showSelectionBarEnd = false;
        /**
         * Set a number to draw the selection bar between this value and the slider handle.
         * When using stepsArray, expressed as index into stepsArray.
         */
        this.showSelectionBarFromValue = null;
        /**
         * Only for range slider. Set to true to visualize in different colour the areas
         * on the left/right (top/bottom for vertical range slider) of selection bar between the handles.
         */
        this.showOuterSelectionBars = false;
        /**
         * Set to true to hide pointer labels
         */
        this.hidePointerLabels = false;
        /**
         * Set to true to hide min / max labels
         */
        this.hideLimitLabels = false;
        /**
         * Set to false to disable the auto-hiding behavior of the limit labels.
         */
        this.autoHideLimitLabels = true;
        /**
         * Set to true to make the slider read-only.
         */
        this.readOnly = false;
        /**
         * Set to true to disable the slider.
         */
        this.disabled = false;
        /**
         * Throttle interval for mouse events in milliseconds.
         * This is provided to avoid a flood of events when moving the slider with mouse.
         */
        this.mouseEventsInterval = 50;
        /**
         * Throttle interval for touch events in milliseconds.
         * This is provided to avoid a flood of events when moving the slider with touch gesture.
         */
        this.touchEventsInterval = 50;
        /**
         * Throttle interval for input changes (changes to bindings or reactive form inputs)
         * This is provided to avoid a flood of events on frequent input binding changes affecting performance.
         */
        this.inputEventsInterval = 100;
        /**
         * Throttle interval for output changes (signalling changes to output bindings and user callbacks)
         * This is provided to avoid a flood of outgoing events affecting Angular app performance.
         */
        this.outputEventsInterval = 100;
        /**
         * Set to true to display a tick for each step of the slider.
         */
        this.showTicks = false;
        /**
         * Set to true to display a tick and the step value for each step of the slider..
         */
        this.showTicksValues = false;
        /* The step between each tick to display. If not set, the step value is used.
            Not used when ticksArray is specified. */
        this.tickStep = null;
        /* The step between displaying each tick step value.
            If not set, then tickStep or step is used, depending on which one is set. */
        this.tickValueStep = null;
        /**
         * Use to display ticks at specific positions.
         * The array contains the index of the ticks that should be displayed.
         * For example, [0, 1, 5] will display a tick for the first, second and sixth values.
         */
        this.ticksArray = null;
        /**
         * Used to display a tooltip when a tick is hovered.
         * Set to a function that returns the tooltip content for a given value.
         */
        this.ticksTooltip = null;
        /**
         * Same as ticksTooltip but for ticks values.
         */
        this.ticksValuesTooltip = null;
        /**
         * Set to true to display the slider vertically.
         * The slider will take the full height of its parent.
         * Changing this value at runtime is not currently supported.
         */
        this.vertical = false;
        /**
         * Function that returns the current color of the selection bar.
         * If your color won't change, don't use this option but set it through CSS.
         * If the returned color depends on a model value (either value or valueHigh),
         * you should use the argument passed to the function.
         * Indeed, when the function is called, there is no certainty that the model
         * has already been updated.
         */
        this.getSelectionBarColor = null;
        /**
         * Function that returns the color of a tick. showTicks must be enabled.
         */
        this.getTickColor = null;
        /**
         * Function that returns the current color of a pointer.
         * If your color won't change, don't use this option but set it through CSS.
         * If the returned color depends on a model value (either value or valueHigh),
         * you should use the argument passed to the function.
         * Indeed, when the function is called, there is no certainty that the model has already been updated.
         * To handle range slider pointers independently, you should evaluate pointerType within the given
         * function where "min" stands for value model and "max" for valueHigh model values.
         */
        this.getPointerColor = null;
        /**
         * Handles are focusable (on click or with tab) and can be modified using the following keyboard controls:
         * Left/bottom arrows: -1
         * Right/top arrows: +1
         * Page-down: -10%
         * Page-up: +10%
         * Home: minimum value
         * End: maximum value
         */
        this.keyboardSupport = true;
        /**
         * If you display the slider in an element that uses transform: scale(0.5), set the scale value to 2
         * so that the slider is rendered properly and the events are handled correctly.
         */
        this.scale = 1;
        /**
         * Set to true to force the value(s) to be rounded to the step, even when modified from the outside.
         * When set to false, if the model values are modified from outside the slider, they are not rounded
         * and can be between two steps.
         */
        this.enforceStep = true;
        /**
         * Set to true to force the value(s) to be normalised to allowed range (floor to ceil), even when modified from the outside.
         * When set to false, if the model values are modified from outside the slider, and they are outside allowed range,
         * the slider may be rendered incorrectly. However, setting this to false may be useful if you want to perform custom normalisation.
         */
        this.enforceRange = true;
        /**
         * Set to true to force the value(s) to be rounded to the nearest step value, even when modified from the outside.
         * When set to false, if the model values are modified from outside the slider, and they are outside allowed range,
         * the slider may be rendered incorrectly. However, setting this to false may be useful if you want to perform custom normalisation.
         */
        this.enforceStepsArray = true;
        /**
         * Set to true to prevent to user from switching the min and max handles. Applies to range slider only.
         */
        this.noSwitching = false;
        /**
         * Set to true to only bind events on slider handles.
         */
        this.onlyBindHandles = false;
        /**
         * Set to true to show graphs right to left.
         * If vertical is true it will be from top to bottom and left / right arrow functions reversed.
         */
        this.rightToLeft = false;
        /**
         * Set to true to reverse keyboard navigation:
         * Right/top arrows: -1
         * Left/bottom arrows: +1
         * Page-up: -10%
         * Page-down: +10%
         * End: minimum value
         * Home: maximum value
         */
        this.reversedControls = false;
        /**
         * Set to true to keep the slider labels inside the slider bounds.
         */
        this.boundPointerLabels = true;
        /**
         * Set to true to use a logarithmic scale to display the slider.
         */
        this.logScale = false;
        /**
         * Function that returns the position on the slider for a given value.
         * The position must be a percentage between 0 and 1.
         * The function should be monotonically increasing or decreasing; otherwise the slider may behave incorrectly.
         */
        this.customValueToPosition = null;
        /**
         * Function that returns the value for a given position on the slider.
         * The position is a percentage between 0 and 1.
         * The function should be monotonically increasing or decreasing; otherwise the slider may behave incorrectly.
         */
        this.customPositionToValue = null;
        /**
         * Precision limit for calculated values.
         * Values used in calculations will be rounded to this number of significant digits
         * to prevent accumulating small floating-point errors.
         */
        this.precisionLimit = 12;
        /**
         * Use to display the selection bar as a gradient.
         * The given object must contain from and to properties which are colors.
         */
        this.selectionBarGradient = null;
        /**
         * Use to add a label directly to the slider for accessibility. Adds the aria-label attribute.
         */
        this.ariaLabel = null;
        /**
         * Use instead of ariaLabel to reference the id of an element which will be used to label the slider.
         * Adds the aria-labelledby attribute.
         */
        this.ariaLabelledBy = null;
        /**
         * Use to add a label directly to the slider range for accessibility. Adds the aria-label attribute.
         */
        this.ariaLabelHigh = null;
        /**
         * Use instead of ariaLabelHigh to reference the id of an element which will be used to label the slider range.
         * Adds the aria-labelledby attribute.
         */
        this.ariaLabelledByHigh = null;
        /**
         * Use to increase rendering performance. If the value is not provided, the slider calculates the with/height of the handle
         */
        this.handleDimension = null;
        /**
         * Use to increase rendering performance. If the value is not provided, the slider calculates the with/height of the bar
         */
        this.barDimension = null;
        /**
         * Enable/disable CSS animations
         */
        this.animate = true;
        /**
         * Enable/disable CSS animations while moving the slider
         */
        this.animateOnMove = false;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {number} */
const PointerType = {
    /** Low pointer */
    Min: 0,
    /** High pointer */
    Max: 1,
};
PointerType[PointerType.Min] = 'Min';
PointerType[PointerType.Max] = 'Max';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ChangeContext {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 *  Collection of functions to handle conversions/lookups of values
 */
class ValueHelper {
    /**
     * @param {?} value
     * @return {?}
     */
    static isNullOrUndefined(value) {
        return value === undefined || value === null;
    }
    /**
     * @param {?} array1
     * @param {?} array2
     * @return {?}
     */
    static areArraysEqual(array1, array2) {
        if (array1.length !== array2.length) {
            return false;
        }
        for (let i = 0; i < array1.length; ++i) {
            if (array1[i] !== array2[i]) {
                return false;
            }
        }
        return true;
    }
    /**
     * @param {?} val
     * @param {?} minVal
     * @param {?} maxVal
     * @return {?}
     */
    static linearValueToPosition(val, minVal, maxVal) {
        /** @type {?} */
        const range = maxVal - minVal;
        return (val - minVal) / range;
    }
    /**
     * @param {?} val
     * @param {?} minVal
     * @param {?} maxVal
     * @return {?}
     */
    static logValueToPosition(val, minVal, maxVal) {
        val = Math.log(val);
        minVal = Math.log(minVal);
        maxVal = Math.log(maxVal);
        /** @type {?} */
        const range = maxVal - minVal;
        return (val - minVal) / range;
    }
    /**
     * @param {?} percent
     * @param {?} minVal
     * @param {?} maxVal
     * @return {?}
     */
    static linearPositionToValue(percent, minVal, maxVal) {
        return percent * (maxVal - minVal) + minVal;
    }
    /**
     * @param {?} percent
     * @param {?} minVal
     * @param {?} maxVal
     * @return {?}
     */
    static logPositionToValue(percent, minVal, maxVal) {
        minVal = Math.log(minVal);
        maxVal = Math.log(maxVal);
        /** @type {?} */
        const value = percent * (maxVal - minVal) + minVal;
        return Math.exp(value);
    }
    /**
     * @param {?} modelValue
     * @param {?} stepsArray
     * @return {?}
     */
    static findStepIndex(modelValue, stepsArray) {
        /** @type {?} */
        const differences = stepsArray.map((step) => Math.abs(modelValue - step.value));
        /** @type {?} */
        let minDifferenceIndex = 0;
        for (let index = 0; index < stepsArray.length; index++) {
            if (differences[index] !== differences[minDifferenceIndex] && differences[index] < differences[minDifferenceIndex]) {
                minDifferenceIndex = index;
            }
        }
        return minDifferenceIndex;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Helper with compatibility functions to support different browsers
 */
class CompatibilityHelper {
    /**
     * Workaround for TouchEvent constructor sadly not being available on all browsers (e.g. Firefox, Safari)
     * @param {?} event
     * @return {?}
     */
    static isTouchEvent(event) {
        if ((/** @type {?} */ (window)).TouchEvent !== undefined) {
            return event instanceof TouchEvent;
        }
        return event.touches !== undefined;
    }
    /**
     * Detect presence of ResizeObserver API
     * @return {?}
     */
    static isResizeObserverAvailable() {
        return (/** @type {?} */ (window)).ResizeObserver !== undefined;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Helper with mathematical functions
 */
class MathHelper {
    /**
     * @param {?} value
     * @param {?} precisionLimit
     * @return {?}
     */
    static roundToPrecisionLimit(value, precisionLimit) {
        return +(value.toPrecision(precisionLimit));
    }
    /**
     * @param {?} value
     * @param {?} modulo
     * @param {?} precisionLimit
     * @return {?}
     */
    static isModuloWithinPrecisionLimit(value, modulo, precisionLimit) {
        /** @type {?} */
        const limit = Math.pow(10, -precisionLimit);
        return Math.abs(value % modulo) <= limit || Math.abs(Math.abs(value % modulo) - modulo) <= limit;
    }
    /**
     * @param {?} value
     * @param {?} floor
     * @param {?} ceil
     * @return {?}
     */
    static clampToRange(value, floor, ceil) {
        return Math.min(Math.max(value, floor), ceil);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class EventListener {
    constructor() {
        this.eventName = null;
        this.events = null;
        this.eventsSubscription = null;
        this.teardownCallback = null;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Helper class to attach event listeners to DOM elements with debounce support using rxjs
 */
class EventListenerHelper {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
    }
    /**
     * @param {?} nativeElement
     * @param {?} eventName
     * @param {?} callback
     * @param {?=} throttleInterval
     * @return {?}
     */
    attachPassiveEventListener(nativeElement, eventName, callback, throttleInterval) {
        // Only use passive event listeners if the browser supports it
        if (detect_passive_events__WEBPACK_IMPORTED_MODULE_2___default.a.hasSupport !== true) {
            return this.attachEventListener(nativeElement, eventName, callback, throttleInterval);
        }
        /** @type {?} */
        const listener = new EventListener();
        listener.eventName = eventName;
        listener.events = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /** @type {?} */
        const observerCallback = (event) => {
            listener.events.next(event);
        };
        nativeElement.addEventListener(eventName, observerCallback, { passive: true, capture: false });
        listener.teardownCallback = () => {
            nativeElement.removeEventListener(eventName, observerCallback, { passive: true, capture: false });
        };
        listener.eventsSubscription = listener.events
            .pipe((!ValueHelper.isNullOrUndefined(throttleInterval))
            ? Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["throttleTime"])(throttleInterval, undefined, { leading: true, trailing: true })
            : Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => { }) // no-op
        )
            .subscribe((event) => {
            callback(event);
        });
        return listener;
    }
    /**
     * @param {?} eventListener
     * @return {?}
     */
    detachEventListener(eventListener) {
        if (!ValueHelper.isNullOrUndefined(eventListener.eventsSubscription)) {
            eventListener.eventsSubscription.unsubscribe();
            eventListener.eventsSubscription = null;
        }
        if (!ValueHelper.isNullOrUndefined(eventListener.events)) {
            eventListener.events.complete();
            eventListener.events = null;
        }
        if (!ValueHelper.isNullOrUndefined(eventListener.teardownCallback)) {
            eventListener.teardownCallback();
            eventListener.teardownCallback = null;
        }
    }
    /**
     * @param {?} nativeElement
     * @param {?} eventName
     * @param {?} callback
     * @param {?=} throttleInterval
     * @return {?}
     */
    attachEventListener(nativeElement, eventName, callback, throttleInterval) {
        /** @type {?} */
        const listener = new EventListener();
        listener.eventName = eventName;
        listener.events = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /** @type {?} */
        const observerCallback = (event) => {
            listener.events.next(event);
        };
        listener.teardownCallback = this.renderer.listen(nativeElement, eventName, observerCallback);
        listener.eventsSubscription = listener.events
            .pipe((!ValueHelper.isNullOrUndefined(throttleInterval))
            ? Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["throttleTime"])(throttleInterval, undefined, { leading: true, trailing: true })
            : Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => { }) // no-op
        )
            .subscribe((event) => { callback(event); });
        return listener;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SliderElementDirective {
    /**
     * @param {?} elemRef
     * @param {?} renderer
     * @param {?} changeDetectionRef
     */
    constructor(elemRef, renderer, changeDetectionRef) {
        this.elemRef = elemRef;
        this.renderer = renderer;
        this.changeDetectionRef = changeDetectionRef;
        this._position = 0;
        this._dimension = 0;
        this._alwaysHide = false;
        this._vertical = false;
        this._scale = 1;
        this.opacity = 1;
        this.visibility = 'visible';
        this.left = '';
        this.bottom = '';
        this.height = '';
        this.width = '';
        this.eventListeners = [];
        this.eventListenerHelper = new EventListenerHelper(this.renderer);
    }
    /**
     * @return {?}
     */
    get position() {
        return this._position;
    }
    /**
     * @return {?}
     */
    get dimension() {
        return this._dimension;
    }
    /**
     * @return {?}
     */
    get alwaysHide() {
        return this._alwaysHide;
    }
    /**
     * @return {?}
     */
    get vertical() {
        return this._vertical;
    }
    /**
     * @return {?}
     */
    get scale() {
        return this._scale;
    }
    /**
     * @param {?} hide
     * @return {?}
     */
    setAlwaysHide(hide) {
        this._alwaysHide = hide;
        if (hide) {
            this.visibility = 'hidden';
        }
        else {
            this.visibility = 'visible';
        }
    }
    /**
     * @return {?}
     */
    hide() {
        this.opacity = 0;
    }
    /**
     * @return {?}
     */
    show() {
        if (this.alwaysHide) {
            return;
        }
        this.opacity = 1;
    }
    /**
     * @return {?}
     */
    isVisible() {
        if (this.alwaysHide) {
            return false;
        }
        return this.opacity !== 0;
    }
    /**
     * @param {?} vertical
     * @return {?}
     */
    setVertical(vertical) {
        this._vertical = vertical;
        if (this._vertical) {
            this.left = '';
            this.width = '';
        }
        else {
            this.bottom = '';
            this.height = '';
        }
    }
    /**
     * @param {?} scale
     * @return {?}
     */
    setScale(scale) {
        this._scale = scale;
    }
    /**
     * @param {?} pos
     * @return {?}
     */
    setPosition(pos) {
        if (this._position !== pos && !this.isRefDestroyed()) {
            this.changeDetectionRef.markForCheck();
        }
        this._position = pos;
        if (this._vertical) {
            this.bottom = Math.round(pos) + 'px';
        }
        else {
            this.left = Math.round(pos) + 'px';
        }
    }
    /**
     * @return {?}
     */
    calculateDimension() {
        /** @type {?} */
        const val = this.getBoundingClientRect();
        if (this.vertical) {
            this._dimension = (val.bottom - val.top) * this.scale;
        }
        else {
            this._dimension = (val.right - val.left) * this.scale;
        }
    }
    /**
     * @param {?} dim
     * @return {?}
     */
    setDimension(dim) {
        if (this._dimension !== dim && !this.isRefDestroyed()) {
            this.changeDetectionRef.markForCheck();
        }
        this._dimension = dim;
        if (this._vertical) {
            this.height = Math.round(dim) + 'px';
        }
        else {
            this.width = Math.round(dim) + 'px';
        }
    }
    /**
     * @return {?}
     */
    getBoundingClientRect() {
        return this.elemRef.nativeElement.getBoundingClientRect();
    }
    /**
     * @param {?} eventName
     * @param {?} callback
     * @param {?=} debounceInterval
     * @return {?}
     */
    on(eventName, callback, debounceInterval) {
        /** @type {?} */
        const listener = this.eventListenerHelper.attachEventListener(this.elemRef.nativeElement, eventName, callback, debounceInterval);
        this.eventListeners.push(listener);
    }
    /**
     * @param {?} eventName
     * @param {?} callback
     * @param {?=} debounceInterval
     * @return {?}
     */
    onPassive(eventName, callback, debounceInterval) {
        /** @type {?} */
        const listener = this.eventListenerHelper.attachPassiveEventListener(this.elemRef.nativeElement, eventName, callback, debounceInterval);
        this.eventListeners.push(listener);
    }
    /**
     * @param {?=} eventName
     * @return {?}
     */
    off(eventName) {
        /** @type {?} */
        let listenersToKeep;
        /** @type {?} */
        let listenersToRemove;
        if (!ValueHelper.isNullOrUndefined(eventName)) {
            listenersToKeep = this.eventListeners.filter((event) => event.eventName !== eventName);
            listenersToRemove = this.eventListeners.filter((event) => event.eventName === eventName);
        }
        else {
            listenersToKeep = [];
            listenersToRemove = this.eventListeners;
        }
        for (const listener of listenersToRemove) {
            this.eventListenerHelper.detachEventListener(listener);
        }
        this.eventListeners = listenersToKeep;
    }
    /**
     * @return {?}
     */
    isRefDestroyed() {
        return ValueHelper.isNullOrUndefined(this.changeDetectionRef) || this.changeDetectionRef['destroyed'];
    }
}
SliderElementDirective.ɵfac = function SliderElementDirective_Factory(t) { return new (t || SliderElementDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"])); };
SliderElementDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: SliderElementDirective, selectors: [["", "ngxSliderElement", ""]], hostVars: 12, hostBindings: function SliderElementDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("opacity", ctx.opacity)("visibility", ctx.visibility)("left", ctx.left)("bottom", ctx.bottom)("height", ctx.height)("width", ctx.width);
    } } });
/** @nocollapse */
SliderElementDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
SliderElementDirective.propDecorators = {
    opacity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['style.opacity',] }],
    visibility: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['style.visibility',] }],
    left: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['style.left',] }],
    bottom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['style.bottom',] }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['style.height',] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['style.width',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SliderElementDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[ngxSliderElement]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }]; }, { opacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['style.opacity']
        }], visibility: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['style.visibility']
        }], left: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['style.left']
        }], bottom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['style.bottom']
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['style.height']
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['style.width']
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SliderHandleDirective extends SliderElementDirective {
    /**
     * @param {?} elemRef
     * @param {?} renderer
     * @param {?} changeDetectionRef
     */
    constructor(elemRef, renderer, changeDetectionRef) {
        super(elemRef, renderer, changeDetectionRef);
        this.active = false;
        this.role = '';
        this.tabindex = '';
        this.ariaOrientation = '';
        this.ariaLabel = '';
        this.ariaLabelledBy = '';
        this.ariaValueNow = '';
        this.ariaValueText = '';
        this.ariaValueMin = '';
        this.ariaValueMax = '';
    }
    /**
     * @return {?}
     */
    focus() {
        this.elemRef.nativeElement.focus();
    }
}
SliderHandleDirective.ɵfac = function SliderHandleDirective_Factory(t) { return new (t || SliderHandleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"])); };
SliderHandleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: SliderHandleDirective, selectors: [["", "ngxSliderHandle", ""]], hostVars: 11, hostBindings: function SliderHandleDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("role", ctx.role)("tabindex", ctx.tabindex)("aria-orientation", ctx.ariaOrientation)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy)("aria-valuenow", ctx.ariaValueNow)("aria-valuetext", ctx.ariaValueText)("aria-valuemin", ctx.ariaValueMin)("aria-valuemax", ctx.ariaValueMax);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ngx-slider-active", ctx.active);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
SliderHandleDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
SliderHandleDirective.propDecorators = {
    active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['class.ngx-slider-active',] }],
    role: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['attr.role',] }],
    tabindex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['attr.tabindex',] }],
    ariaOrientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['attr.aria-orientation',] }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['attr.aria-label',] }],
    ariaLabelledBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['attr.aria-labelledby',] }],
    ariaValueNow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['attr.aria-valuenow',] }],
    ariaValueText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['attr.aria-valuetext',] }],
    ariaValueMin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['attr.aria-valuemin',] }],
    ariaValueMax: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['attr.aria-valuemax',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SliderHandleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[ngxSliderHandle]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }]; }, { active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['class.ngx-slider-active']
        }], role: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['attr.role']
        }], tabindex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['attr.tabindex']
        }], ariaOrientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['attr.aria-orientation']
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['attr.aria-label']
        }], ariaLabelledBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['attr.aria-labelledby']
        }], ariaValueNow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['attr.aria-valuenow']
        }], ariaValueText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['attr.aria-valuetext']
        }], ariaValueMin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['attr.aria-valuemin']
        }], ariaValueMax: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['attr.aria-valuemax']
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SliderLabelDirective extends SliderElementDirective {
    /**
     * @param {?} elemRef
     * @param {?} renderer
     * @param {?} changeDetectionRef
     */
    constructor(elemRef, renderer, changeDetectionRef) {
        super(elemRef, renderer, changeDetectionRef);
        this._value = null;
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        /** @type {?} */
        let recalculateDimension = false;
        if (!this.alwaysHide &&
            (ValueHelper.isNullOrUndefined(this.value) ||
                this.value.length !== value.length ||
                (this.value.length > 0 && this.dimension === 0))) {
            recalculateDimension = true;
        }
        this._value = value;
        this.elemRef.nativeElement.innerHTML = value;
        // Update dimension only when length of the label have changed
        if (recalculateDimension) {
            this.calculateDimension();
        }
    }
}
SliderLabelDirective.ɵfac = function SliderLabelDirective_Factory(t) { return new (t || SliderLabelDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"])); };
SliderLabelDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: SliderLabelDirective, selectors: [["", "ngxSliderLabel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
SliderLabelDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SliderLabelDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[ngxSliderLabel]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class Tick {
    constructor() {
        this.selected = false;
        this.style = {};
        this.tooltip = null;
        this.tooltipPlacement = null;
        this.value = null;
        this.valueTooltip = null;
        this.valueTooltipPlacement = null;
        this.legend = null;
    }
}
class Dragging {
    constructor() {
        this.active = false;
        this.value = 0;
        this.difference = 0;
        this.position = 0;
        this.lowLimit = 0;
        this.highLimit = 0;
    }
}
class ModelValues {
    /**
     * @param {?=} x
     * @param {?=} y
     * @return {?}
     */
    static compare(x, y) {
        if (ValueHelper.isNullOrUndefined(x) && ValueHelper.isNullOrUndefined(y)) {
            return false;
        }
        if (ValueHelper.isNullOrUndefined(x) !== ValueHelper.isNullOrUndefined(y)) {
            return false;
        }
        return x.value === y.value && x.highValue === y.highValue;
    }
}
class ModelChange extends ModelValues {
    /**
     * @param {?=} x
     * @param {?=} y
     * @return {?}
     */
    static compare(x, y) {
        if (ValueHelper.isNullOrUndefined(x) && ValueHelper.isNullOrUndefined(y)) {
            return false;
        }
        if (ValueHelper.isNullOrUndefined(x) !== ValueHelper.isNullOrUndefined(y)) {
            return false;
        }
        return x.value === y.value &&
            x.highValue === y.highValue &&
            x.forceChange === y.forceChange;
    }
}
/** @type {?} */
const NGX_SLIDER_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(() => SliderComponent),
    multi: true,
};
class SliderComponent {
    /**
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} changeDetectionRef
     * @param {?} zone
     */
    constructor(renderer, elementRef, changeDetectionRef, zone) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.changeDetectionRef = changeDetectionRef;
        this.zone = zone;
        // Model for low value of slider. For simple slider, this is the only input. For range slider, this is the low value.
        this.value = null;
        // Output for low value slider to support two-way bindings
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        // Model for high value of slider. Not used in simple slider. For range slider, this is the high value.
        this.highValue = null;
        // Output for high value slider to support two-way bindings
        this.highValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        // An object with all the other options of the slider.
        // Each option can be updated at runtime and the slider will automatically be re-rendered.
        this.options = new Options();
        // Event emitted when user starts interaction with the slider
        this.userChangeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        // Event emitted on each change coming from user interaction
        this.userChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        // Event emitted when user finishes interaction with the slider
        this.userChangeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.initHasRun = false;
        this.inputModelChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.inputModelChangeSubscription = null;
        this.outputModelChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.outputModelChangeSubscription = null;
        this.viewLowValue = null;
        this.viewHighValue = null;
        this.viewOptions = new Options();
        this.handleHalfDimension = 0;
        this.maxHandlePosition = 0;
        this.currentTrackingPointer = null;
        this.currentFocusPointer = null;
        this.firstKeyDown = false;
        this.touchId = null;
        this.dragging = new Dragging();
        // Host element class bindings
        this.sliderElementVerticalClass = false;
        this.sliderElementAnimateClass = false;
        this.sliderElementWithLegendClass = false;
        this.sliderElementDisabledAttr = null;
        this.barStyle = {};
        this.minPointerStyle = {};
        this.maxPointerStyle = {};
        this.fullBarTransparentClass = false;
        this.selectionBarDraggableClass = false;
        this.ticksUnderValuesClass = false;
        this.intermediateTicks = false;
        this.ticks = [];
        this.eventListenerHelper = null;
        this.onMoveEventListener = null;
        this.onEndEventListener = null;
        this.moving = false;
        this.resizeObserver = null;
        this.onTouchedCallback = null;
        this.onChangeCallback = null;
        this.eventListenerHelper = new EventListenerHelper(this.renderer);
    }
    /**
     * @param {?} manualRefresh
     * @return {?}
     */
    set manualRefresh(manualRefresh) {
        this.unsubscribeManualRefresh();
        this.manualRefreshSubscription = manualRefresh.subscribe(() => {
            setTimeout(() => this.calculateViewDimensionsAndDetectChanges());
        });
    }
    /**
     * @param {?} triggerFocus
     * @return {?}
     */
    set triggerFocus(triggerFocus) {
        this.unsubscribeTriggerFocus();
        this.triggerFocusSubscription = triggerFocus.subscribe((pointerType) => {
            this.focusPointer(pointerType);
        });
    }
    /**
     * @return {?}
     */
    get range() {
        return !ValueHelper.isNullOrUndefined(this.value) && !ValueHelper.isNullOrUndefined(this.highValue);
    }
    /**
     * @return {?}
     */
    get showTicks() {
        return this.viewOptions.showTicks;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.viewOptions = new Options();
        Object.assign(this.viewOptions, this.options);
        // We need to run these two things first, before the rest of the init in ngAfterViewInit(),
        // because these two settings are set through @HostBinding and Angular change detection
        // mechanism doesn't like them changing in ngAfterViewInit()
        this.updateDisabledState();
        this.updateVerticalState();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.applyOptions();
        this.subscribeInputModelChangeSubject(this.viewOptions.inputEventsInterval);
        this.subscribeOutputModelChangeSubject(this.viewOptions.outputEventsInterval);
        // Once we apply options, we need to normalise model values for the first time
        this.renormaliseModelValues();
        this.viewLowValue = this.modelValueToViewValue(this.value);
        if (this.range) {
            this.viewHighValue = this.modelValueToViewValue(this.highValue);
        }
        else {
            this.viewHighValue = null;
        }
        this.updateVerticalState(); // need to run this again to cover changes to slider elements
        this.manageElementsStyle();
        this.updateDisabledState();
        this.calculateViewDimensions();
        this.addAccessibility();
        this.updateCeilLabel();
        this.updateFloorLabel();
        this.initHandles();
        this.manageEventsBindings();
        this.subscribeResizeObserver();
        this.initHasRun = true;
        // Run change detection manually to resolve some issues when init procedure changes values used in the view
        if (!this.isRefDestroyed()) {
            this.changeDetectionRef.detectChanges();
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // Always apply options first
        if (!ValueHelper.isNullOrUndefined(changes["options"])) {
            this.onChangeOptions();
        }
        // Then value changes
        if (!ValueHelper.isNullOrUndefined(changes["value"]) ||
            !ValueHelper.isNullOrUndefined(changes["highValue"])) {
            this.inputModelChangeSubject.next({
                value: this.value,
                highValue: this.highValue,
                forceChange: false,
                internalChange: false
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unbindEvents();
        this.unsubscribeResizeObserver();
        this.unsubscribeInputModelChangeSubject();
        this.unsubscribeOutputModelChangeSubject();
        this.unsubscribeManualRefresh();
        this.unsubscribeTriggerFocus();
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        if (obj instanceof Array) {
            this.value = obj[0];
            this.highValue = obj[1];
        }
        else {
            this.value = obj;
        }
        // ngOnChanges() is not called in this instance, so we need to communicate the change manually
        this.inputModelChangeSubject.next({
            value: this.value,
            highValue: this.highValue,
            forceChange: false,
            internalChange: false
        });
    }
    /**
     * @param {?} onChangeCallback
     * @return {?}
     */
    registerOnChange(onChangeCallback) {
        this.onChangeCallback = onChangeCallback;
    }
    /**
     * @param {?} onTouchedCallback
     * @return {?}
     */
    registerOnTouched(onTouchedCallback) {
        this.onTouchedCallback = onTouchedCallback;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.viewOptions.disabled = isDisabled;
        this.updateDisabledState();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        this.calculateViewDimensionsAndDetectChanges();
    }
    /**
     * @param {?=} interval
     * @return {?}
     */
    subscribeInputModelChangeSubject(interval) {
        this.inputModelChangeSubscription = this.inputModelChangeSubject
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(ModelChange.compare), 
        // Hack to reset the status of the distinctUntilChanged() - if a "fake" event comes through with forceChange=true,
        // we forcefully by-pass distinctUntilChanged(), but otherwise drop the event
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((modelChange) => !modelChange.forceChange && !modelChange.internalChange), (!ValueHelper.isNullOrUndefined(interval))
            ? Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["throttleTime"])(interval, undefined, { leading: true, trailing: true })
            : Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => { }) // no-op
        )
            .subscribe((modelChange) => this.applyInputModelChange(modelChange));
    }
    /**
     * @param {?=} interval
     * @return {?}
     */
    subscribeOutputModelChangeSubject(interval) {
        this.outputModelChangeSubscription = this.outputModelChangeSubject
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(ModelChange.compare), (!ValueHelper.isNullOrUndefined(interval))
            ? Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["throttleTime"])(interval, undefined, { leading: true, trailing: true })
            : Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => { }) // no-op
        )
            .subscribe((modelChange) => this.publishOutputModelChange(modelChange));
    }
    /**
     * @return {?}
     */
    subscribeResizeObserver() {
        if (CompatibilityHelper.isResizeObserverAvailable()) {
            this.resizeObserver = new ResizeObserver(() => this.calculateViewDimensionsAndDetectChanges());
            this.resizeObserver.observe(this.elementRef.nativeElement);
        }
    }
    /**
     * @return {?}
     */
    unsubscribeResizeObserver() {
        if (CompatibilityHelper.isResizeObserverAvailable() && this.resizeObserver !== null) {
            this.resizeObserver.disconnect();
            this.resizeObserver = null;
        }
    }
    /**
     * @return {?}
     */
    unsubscribeOnMove() {
        if (!ValueHelper.isNullOrUndefined(this.onMoveEventListener)) {
            this.eventListenerHelper.detachEventListener(this.onMoveEventListener);
            this.onMoveEventListener = null;
        }
    }
    /**
     * @return {?}
     */
    unsubscribeOnEnd() {
        if (!ValueHelper.isNullOrUndefined(this.onEndEventListener)) {
            this.eventListenerHelper.detachEventListener(this.onEndEventListener);
            this.onEndEventListener = null;
        }
    }
    /**
     * @return {?}
     */
    unsubscribeInputModelChangeSubject() {
        if (!ValueHelper.isNullOrUndefined(this.inputModelChangeSubscription)) {
            this.inputModelChangeSubscription.unsubscribe();
            this.inputModelChangeSubscription = null;
        }
    }
    /**
     * @return {?}
     */
    unsubscribeOutputModelChangeSubject() {
        if (!ValueHelper.isNullOrUndefined(this.outputModelChangeSubscription)) {
            this.outputModelChangeSubscription.unsubscribe();
            this.outputModelChangeSubscription = null;
        }
    }
    /**
     * @return {?}
     */
    unsubscribeManualRefresh() {
        if (!ValueHelper.isNullOrUndefined(this.manualRefreshSubscription)) {
            this.manualRefreshSubscription.unsubscribe();
            this.manualRefreshSubscription = null;
        }
    }
    /**
     * @return {?}
     */
    unsubscribeTriggerFocus() {
        if (!ValueHelper.isNullOrUndefined(this.triggerFocusSubscription)) {
            this.triggerFocusSubscription.unsubscribe();
            this.triggerFocusSubscription = null;
        }
    }
    /**
     * @param {?} pointerType
     * @return {?}
     */
    getPointerElement(pointerType) {
        if (pointerType === PointerType.Min) {
            return this.minHandleElement;
        }
        else if (pointerType === PointerType.Max) {
            return this.maxHandleElement;
        }
        return null;
    }
    /**
     * @return {?}
     */
    getCurrentTrackingValue() {
        if (this.currentTrackingPointer === PointerType.Min) {
            return this.viewLowValue;
        }
        else if (this.currentTrackingPointer === PointerType.Max) {
            return this.viewHighValue;
        }
        return null;
    }
    /**
     * @param {?} modelValue
     * @return {?}
     */
    modelValueToViewValue(modelValue) {
        if (ValueHelper.isNullOrUndefined(modelValue)) {
            return NaN;
        }
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray) && !this.viewOptions.bindIndexForStepsArray) {
            return ValueHelper.findStepIndex(+modelValue, this.viewOptions.stepsArray);
        }
        return +modelValue;
    }
    /**
     * @param {?} viewValue
     * @return {?}
     */
    viewValueToModelValue(viewValue) {
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray) && !this.viewOptions.bindIndexForStepsArray) {
            return this.getStepValue(viewValue);
        }
        return viewValue;
    }
    /**
     * @param {?} sliderValue
     * @return {?}
     */
    getStepValue(sliderValue) {
        /** @type {?} */
        const step = this.viewOptions.stepsArray[sliderValue];
        return (!ValueHelper.isNullOrUndefined(step)) ? step.value : NaN;
    }
    /**
     * @return {?}
     */
    applyViewChange() {
        this.value = this.viewValueToModelValue(this.viewLowValue);
        if (this.range) {
            this.highValue = this.viewValueToModelValue(this.viewHighValue);
        }
        this.outputModelChangeSubject.next({
            value: this.value,
            highValue: this.highValue,
            userEventInitiated: true,
            forceChange: false
        });
        // At this point all changes are applied and outputs are emitted, so we should be done.
        // However, input changes are communicated in different stream and we need to be ready to
        // act on the next input change even if it is exactly the same as last input change.
        // Therefore, we send a special event to reset the stream.
        this.inputModelChangeSubject.next({
            value: this.value,
            highValue: this.highValue,
            forceChange: false,
            internalChange: true
        });
    }
    /**
     * @param {?} modelChange
     * @return {?}
     */
    applyInputModelChange(modelChange) {
        /** @type {?} */
        const normalisedModelChange = this.normaliseModelValues(modelChange);
        /** @type {?} */
        const normalisationChange = !ModelValues.compare(modelChange, normalisedModelChange);
        if (normalisationChange) {
            this.value = normalisedModelChange.value;
            this.highValue = normalisedModelChange.highValue;
        }
        this.viewLowValue = this.modelValueToViewValue(normalisedModelChange.value);
        if (this.range) {
            this.viewHighValue = this.modelValueToViewValue(normalisedModelChange.highValue);
        }
        else {
            this.viewHighValue = null;
        }
        this.updateLowHandle(this.valueToPosition(this.viewLowValue));
        if (this.range) {
            this.updateHighHandle(this.valueToPosition(this.viewHighValue));
        }
        this.updateSelectionBar();
        this.updateTicksScale();
        this.updateAriaAttributes();
        if (this.range) {
            this.updateCombinedLabel();
        }
        // At the end, we need to communicate the model change to the outputs as well
        // Normalisation changes are also always forced out to ensure that subscribers always end up in correct state
        this.outputModelChangeSubject.next({
            value: normalisedModelChange.value,
            highValue: normalisedModelChange.highValue,
            forceChange: normalisationChange,
            userEventInitiated: false
        });
    }
    /**
     * @param {?} modelChange
     * @return {?}
     */
    publishOutputModelChange(modelChange) {
        /** @type {?} */
        const emitOutputs = () => {
            this.valueChange.emit(modelChange.value);
            if (this.range) {
                this.highValueChange.emit(modelChange.highValue);
            }
            if (!ValueHelper.isNullOrUndefined(this.onChangeCallback)) {
                if (this.range) {
                    this.onChangeCallback([modelChange.value, modelChange.highValue]);
                }
                else {
                    this.onChangeCallback(modelChange.value);
                }
            }
            if (!ValueHelper.isNullOrUndefined(this.onTouchedCallback)) {
                if (this.range) {
                    this.onTouchedCallback([modelChange.value, modelChange.highValue]);
                }
                else {
                    this.onTouchedCallback(modelChange.value);
                }
            }
        };
        if (modelChange.userEventInitiated) {
            // If this change was initiated by a user event, we can emit outputs in the same tick
            emitOutputs();
            this.userChange.emit(this.getChangeContext());
        }
        else {
            // But, if the change was initated by something else like a change in input bindings,
            // we need to wait until next tick to emit the outputs to keep Angular change detection happy
            setTimeout(() => { emitOutputs(); });
        }
    }
    /**
     * @param {?} input
     * @return {?}
     */
    normaliseModelValues(input) {
        /** @type {?} */
        const normalisedInput = new ModelValues();
        normalisedInput.value = input.value;
        normalisedInput.highValue = input.highValue;
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray)) {
            // When using steps array, only round to nearest step in the array
            // No other enforcement can be done, as the step array may be out of order, and that is perfectly fine
            if (this.viewOptions.enforceStepsArray) {
                /** @type {?} */
                const valueIndex = ValueHelper.findStepIndex(normalisedInput.value, this.viewOptions.stepsArray);
                normalisedInput.value = this.viewOptions.stepsArray[valueIndex].value;
                if (this.range) {
                    /** @type {?} */
                    const highValueIndex = ValueHelper.findStepIndex(normalisedInput.highValue, this.viewOptions.stepsArray);
                    normalisedInput.highValue = this.viewOptions.stepsArray[highValueIndex].value;
                }
            }
            return normalisedInput;
        }
        if (this.viewOptions.enforceStep) {
            normalisedInput.value = this.roundStep(normalisedInput.value);
            if (this.range) {
                normalisedInput.highValue = this.roundStep(normalisedInput.highValue);
            }
        }
        if (this.viewOptions.enforceRange) {
            normalisedInput.value = MathHelper.clampToRange(normalisedInput.value, this.viewOptions.floor, this.viewOptions.ceil);
            if (this.range) {
                normalisedInput.highValue = MathHelper.clampToRange(normalisedInput.highValue, this.viewOptions.floor, this.viewOptions.ceil);
            }
            // Make sure that range slider invariant (value <= highValue) is always satisfied
            if (this.range && input.value > input.highValue) {
                // We know that both values are now clamped correctly, they may just be in the wrong order
                // So the easy solution is to swap them... except swapping is sometimes disabled in options, so we make the two values the same
                if (this.viewOptions.noSwitching) {
                    normalisedInput.value = normalisedInput.highValue;
                }
                else {
                    /** @type {?} */
                    const tempValue = input.value;
                    normalisedInput.value = input.highValue;
                    normalisedInput.highValue = tempValue;
                }
            }
        }
        return normalisedInput;
    }
    /**
     * @return {?}
     */
    renormaliseModelValues() {
        /** @type {?} */
        const previousModelValues = {
            value: this.value,
            highValue: this.highValue
        };
        /** @type {?} */
        const normalisedModelValues = this.normaliseModelValues(previousModelValues);
        if (!ModelValues.compare(normalisedModelValues, previousModelValues)) {
            this.value = normalisedModelValues.value;
            this.highValue = normalisedModelValues.highValue;
            this.outputModelChangeSubject.next({
                value: this.value,
                highValue: this.highValue,
                forceChange: true,
                userEventInitiated: false
            });
        }
    }
    /**
     * @return {?}
     */
    onChangeOptions() {
        if (!this.initHasRun) {
            return;
        }
        /** @type {?} */
        const previousInputEventsInterval = this.viewOptions.inputEventsInterval;
        /** @type {?} */
        const previousOutputEventsInterval = this.viewOptions.outputEventsInterval;
        /** @type {?} */
        const previousOptionsInfluencingEventBindings = this.getOptionsInfluencingEventBindings(this.viewOptions);
        this.applyOptions();
        /** @type {?} */
        const newOptionsInfluencingEventBindings = this.getOptionsInfluencingEventBindings(this.viewOptions);
        /** @type {?} */
        const rebindEvents = !ValueHelper.areArraysEqual(previousOptionsInfluencingEventBindings, newOptionsInfluencingEventBindings);
        if (previousInputEventsInterval !== this.viewOptions.inputEventsInterval) {
            this.unsubscribeInputModelChangeSubject();
            this.subscribeInputModelChangeSubject(this.viewOptions.inputEventsInterval);
        }
        if (previousOutputEventsInterval !== this.viewOptions.outputEventsInterval) {
            this.unsubscribeInputModelChangeSubject();
            this.subscribeInputModelChangeSubject(this.viewOptions.outputEventsInterval);
        }
        // With new options, we need to re-normalise model values if necessary
        this.renormaliseModelValues();
        this.viewLowValue = this.modelValueToViewValue(this.value);
        if (this.range) {
            this.viewHighValue = this.modelValueToViewValue(this.highValue);
        }
        else {
            this.viewHighValue = null;
        }
        this.resetSlider(rebindEvents);
    }
    /**
     * @return {?}
     */
    applyOptions() {
        this.viewOptions = new Options();
        Object.assign(this.viewOptions, this.options);
        this.viewOptions.draggableRange = this.range && this.viewOptions.draggableRange;
        this.viewOptions.draggableRangeOnly = this.range && this.viewOptions.draggableRangeOnly;
        if (this.viewOptions.draggableRangeOnly) {
            this.viewOptions.draggableRange = true;
        }
        this.viewOptions.showTicks = this.viewOptions.showTicks ||
            this.viewOptions.showTicksValues ||
            !ValueHelper.isNullOrUndefined(this.viewOptions.ticksArray);
        if (this.viewOptions.showTicks &&
            (!ValueHelper.isNullOrUndefined(this.viewOptions.tickStep) || !ValueHelper.isNullOrUndefined(this.viewOptions.ticksArray))) {
            this.intermediateTicks = true;
        }
        this.viewOptions.showSelectionBar = this.viewOptions.showSelectionBar ||
            this.viewOptions.showSelectionBarEnd ||
            !ValueHelper.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue);
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray)) {
            this.applyStepsArrayOptions();
        }
        else {
            this.applyFloorCeilOptions();
        }
        if (ValueHelper.isNullOrUndefined(this.viewOptions.combineLabels)) {
            this.viewOptions.combineLabels = (minValue, maxValue) => {
                return minValue + ' - ' + maxValue;
            };
        }
        if (this.viewOptions.logScale && this.viewOptions.floor === 0) {
            throw Error('Can\'t use floor=0 with logarithmic scale');
        }
    }
    /**
     * @return {?}
     */
    applyStepsArrayOptions() {
        this.viewOptions.floor = 0;
        this.viewOptions.ceil = this.viewOptions.stepsArray.length - 1;
        this.viewOptions.step = 1;
        if (ValueHelper.isNullOrUndefined(this.viewOptions.translate)) {
            this.viewOptions.translate = (modelValue) => {
                if (this.viewOptions.bindIndexForStepsArray) {
                    return String(this.getStepValue(modelValue));
                }
                return String(modelValue);
            };
        }
    }
    /**
     * @return {?}
     */
    applyFloorCeilOptions() {
        if (ValueHelper.isNullOrUndefined(this.viewOptions.step)) {
            this.viewOptions.step = 1;
        }
        else {
            this.viewOptions.step = +this.viewOptions.step;
            if (this.viewOptions.step <= 0) {
                this.viewOptions.step = 1;
            }
        }
        if (ValueHelper.isNullOrUndefined(this.viewOptions.ceil) ||
            ValueHelper.isNullOrUndefined(this.viewOptions.floor)) {
            throw Error('floor and ceil options must be supplied');
        }
        this.viewOptions.ceil = +this.viewOptions.ceil;
        this.viewOptions.floor = +this.viewOptions.floor;
        if (ValueHelper.isNullOrUndefined(this.viewOptions.translate)) {
            this.viewOptions.translate = (value) => String(value);
        }
    }
    /**
     * @param {?=} rebindEvents
     * @return {?}
     */
    resetSlider(rebindEvents = true) {
        this.manageElementsStyle();
        this.addAccessibility();
        this.updateCeilLabel();
        this.updateFloorLabel();
        if (rebindEvents) {
            this.unbindEvents();
            this.manageEventsBindings();
        }
        this.updateDisabledState();
        this.calculateViewDimensions();
        this.refocusPointerIfNeeded();
    }
    /**
     * @param {?} pointerType
     * @return {?}
     */
    focusPointer(pointerType) {
        // If not supplied, use min pointer as default
        if (pointerType !== PointerType.Min && pointerType !== PointerType.Max) {
            pointerType = PointerType.Min;
        }
        if (pointerType === PointerType.Min) {
            this.minHandleElement.focus();
        }
        else if (this.range && pointerType === PointerType.Max) {
            this.maxHandleElement.focus();
        }
    }
    /**
     * @return {?}
     */
    refocusPointerIfNeeded() {
        if (!ValueHelper.isNullOrUndefined(this.currentFocusPointer)) {
            this.onPointerFocus(this.currentFocusPointer);
            /** @type {?} */
            const element = this.getPointerElement(this.currentFocusPointer);
            element.focus();
        }
    }
    /**
     * @return {?}
     */
    manageElementsStyle() {
        this.updateScale();
        this.floorLabelElement.setAlwaysHide(this.viewOptions.showTicksValues || this.viewOptions.hideLimitLabels);
        this.ceilLabelElement.setAlwaysHide(this.viewOptions.showTicksValues || this.viewOptions.hideLimitLabels);
        /** @type {?} */
        const hideLabelsForTicks = this.viewOptions.showTicksValues && !this.intermediateTicks;
        this.minHandleLabelElement.setAlwaysHide(hideLabelsForTicks || this.viewOptions.hidePointerLabels);
        this.maxHandleLabelElement.setAlwaysHide(hideLabelsForTicks || !this.range || this.viewOptions.hidePointerLabels);
        this.combinedLabelElement.setAlwaysHide(hideLabelsForTicks || !this.range || this.viewOptions.hidePointerLabels);
        this.selectionBarElement.setAlwaysHide(!this.range && !this.viewOptions.showSelectionBar);
        this.leftOuterSelectionBarElement.setAlwaysHide(!this.range || !this.viewOptions.showOuterSelectionBars);
        this.rightOuterSelectionBarElement.setAlwaysHide(!this.range || !this.viewOptions.showOuterSelectionBars);
        this.fullBarTransparentClass = this.range && this.viewOptions.showOuterSelectionBars;
        this.selectionBarDraggableClass = this.viewOptions.draggableRange && !this.viewOptions.onlyBindHandles;
        this.ticksUnderValuesClass = this.intermediateTicks && this.options.showTicksValues;
        if (this.sliderElementVerticalClass !== this.viewOptions.vertical) {
            this.updateVerticalState();
            // The above change in host component class will not be applied until the end of this cycle
            // However, functions calculating the slider position expect the slider to be already styled as vertical
            // So as a workaround, we need to reset the slider once again to compute the correct values
            setTimeout(() => { this.resetSlider(); });
        }
        // Changing animate class may interfere with slider reset/initialisation, so we should set it separately,
        // after all is properly set up
        if (this.sliderElementAnimateClass !== this.viewOptions.animate) {
            setTimeout(() => { this.sliderElementAnimateClass = this.viewOptions.animate; });
        }
    }
    /**
     * @return {?}
     */
    manageEventsBindings() {
        if (this.viewOptions.disabled || this.viewOptions.readOnly) {
            this.unbindEvents();
        }
        else {
            this.bindEvents();
        }
    }
    /**
     * @return {?}
     */
    updateDisabledState() {
        this.sliderElementDisabledAttr = this.viewOptions.disabled ? 'disabled' : null;
    }
    /**
     * @return {?}
     */
    updateVerticalState() {
        this.sliderElementVerticalClass = this.viewOptions.vertical;
        for (const element of this.getAllSliderElements()) {
            // This is also called before ngAfterInit, so need to check that view child bindings work
            if (!ValueHelper.isNullOrUndefined(element)) {
                element.setVertical(this.viewOptions.vertical);
            }
        }
    }
    /**
     * @return {?}
     */
    updateScale() {
        for (const element of this.getAllSliderElements()) {
            element.setScale(this.viewOptions.scale);
        }
    }
    /**
     * @return {?}
     */
    getAllSliderElements() {
        return [this.leftOuterSelectionBarElement,
            this.rightOuterSelectionBarElement,
            this.fullBarElement,
            this.selectionBarElement,
            this.minHandleElement,
            this.maxHandleElement,
            this.floorLabelElement,
            this.ceilLabelElement,
            this.minHandleLabelElement,
            this.maxHandleLabelElement,
            this.combinedLabelElement,
            this.ticksElement
        ];
    }
    /**
     * @return {?}
     */
    initHandles() {
        this.updateLowHandle(this.valueToPosition(this.viewLowValue));
        /*
           the order here is important since the selection bar should be
           updated after the high handle but before the combined label
           */
        if (this.range) {
            this.updateHighHandle(this.valueToPosition(this.viewHighValue));
        }
        this.updateSelectionBar();
        if (this.range) {
            this.updateCombinedLabel();
        }
        this.updateTicksScale();
    }
    /**
     * @return {?}
     */
    addAccessibility() {
        this.updateAriaAttributes();
        this.minHandleElement.role = 'slider';
        if (this.viewOptions.keyboardSupport &&
            !(this.viewOptions.readOnly || this.viewOptions.disabled)) {
            this.minHandleElement.tabindex = '0';
        }
        else {
            this.minHandleElement.tabindex = '';
        }
        this.minHandleElement.ariaOrientation = this.viewOptions.vertical ? 'vertical' : 'horizontal';
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.ariaLabel)) {
            this.minHandleElement.ariaLabel = this.viewOptions.ariaLabel;
        }
        else if (!ValueHelper.isNullOrUndefined(this.viewOptions.ariaLabelledBy)) {
            this.minHandleElement.ariaLabelledBy = this.viewOptions.ariaLabelledBy;
        }
        if (this.range) {
            this.maxHandleElement.role = 'slider';
            if (this.viewOptions.keyboardSupport &&
                !(this.viewOptions.readOnly || this.viewOptions.disabled)) {
                this.maxHandleElement.tabindex = '0';
            }
            else {
                this.maxHandleElement.tabindex = '';
            }
            this.maxHandleElement.ariaOrientation = this.viewOptions.vertical ? 'vertical' : 'horizontal';
            if (!ValueHelper.isNullOrUndefined(this.viewOptions.ariaLabelHigh)) {
                this.maxHandleElement.ariaLabel = this.viewOptions.ariaLabelHigh;
            }
            else if (!ValueHelper.isNullOrUndefined(this.viewOptions.ariaLabelledByHigh)) {
                this.maxHandleElement.ariaLabelledBy = this.viewOptions.ariaLabelledByHigh;
            }
        }
    }
    /**
     * @return {?}
     */
    updateAriaAttributes() {
        this.minHandleElement.ariaValueNow = (+this.value).toString();
        this.minHandleElement.ariaValueText = this.viewOptions.translate(+this.value, LabelType.Low);
        this.minHandleElement.ariaValueMin = this.viewOptions.floor.toString();
        this.minHandleElement.ariaValueMax = this.viewOptions.ceil.toString();
        if (this.range) {
            this.maxHandleElement.ariaValueNow = (+this.highValue).toString();
            this.maxHandleElement.ariaValueText = this.viewOptions.translate(+this.highValue, LabelType.High);
            this.maxHandleElement.ariaValueMin = this.viewOptions.floor.toString();
            this.maxHandleElement.ariaValueMax = this.viewOptions.ceil.toString();
        }
    }
    /**
     * @return {?}
     */
    calculateViewDimensions() {
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.handleDimension)) {
            this.minHandleElement.setDimension(this.viewOptions.handleDimension);
        }
        else {
            this.minHandleElement.calculateDimension();
        }
        /** @type {?} */
        const handleWidth = this.minHandleElement.dimension;
        this.handleHalfDimension = handleWidth / 2;
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.barDimension)) {
            this.fullBarElement.setDimension(this.viewOptions.barDimension);
        }
        else {
            this.fullBarElement.calculateDimension();
        }
        this.maxHandlePosition = this.fullBarElement.dimension - handleWidth;
        if (this.initHasRun) {
            this.updateFloorLabel();
            this.updateCeilLabel();
            this.initHandles();
        }
    }
    /**
     * @return {?}
     */
    calculateViewDimensionsAndDetectChanges() {
        this.calculateViewDimensions();
        if (!this.isRefDestroyed()) {
            this.changeDetectionRef.detectChanges();
        }
    }
    /**
     * If the slider reference is already destroyed
     * @return {?} boolean - true if ref is destroyed
     */
    isRefDestroyed() {
        return this.changeDetectionRef['destroyed'];
    }
    /**
     * @return {?}
     */
    updateTicksScale() {
        if (!this.viewOptions.showTicks) {
            setTimeout(() => { this.sliderElementWithLegendClass = false; });
            return;
        }
        /** @type {?} */
        const ticksArray = !ValueHelper.isNullOrUndefined(this.viewOptions.ticksArray)
            ? this.viewOptions.ticksArray
            : this.getTicksArray();
        /** @type {?} */
        const translate = this.viewOptions.vertical ? 'translateY' : 'translateX';
        if (this.viewOptions.rightToLeft) {
            ticksArray.reverse();
        }
        /** @type {?} */
        const tickValueStep = !ValueHelper.isNullOrUndefined(this.viewOptions.tickValueStep) ? this.viewOptions.tickValueStep :
            (!ValueHelper.isNullOrUndefined(this.viewOptions.tickStep) ? this.viewOptions.tickStep : this.viewOptions.step);
        /** @type {?} */
        let hasAtLeastOneLegend = false;
        /** @type {?} */
        const newTicks = ticksArray.map((value) => {
            /** @type {?} */
            let position = this.valueToPosition(value);
            if (this.viewOptions.vertical) {
                position = this.maxHandlePosition - position;
            }
            /** @type {?} */
            const translation = translate + '(' + Math.round(position) + 'px)';
            /** @type {?} */
            const tick = new Tick();
            tick.selected = this.isTickSelected(value);
            tick.style = {
                '-webkit-transform': translation,
                '-moz-transform': translation,
                '-o-transform': translation,
                '-ms-transform': translation,
                transform: translation,
            };
            if (tick.selected && !ValueHelper.isNullOrUndefined(this.viewOptions.getSelectionBarColor)) {
                tick.style['background-color'] = this.getSelectionBarColor();
            }
            if (!tick.selected && !ValueHelper.isNullOrUndefined(this.viewOptions.getTickColor)) {
                tick.style['background-color'] = this.getTickColor(value);
            }
            if (!ValueHelper.isNullOrUndefined(this.viewOptions.ticksTooltip)) {
                tick.tooltip = this.viewOptions.ticksTooltip(value);
                tick.tooltipPlacement = this.viewOptions.vertical ? 'right' : 'top';
            }
            if (this.viewOptions.showTicksValues && !ValueHelper.isNullOrUndefined(tickValueStep) &&
                MathHelper.isModuloWithinPrecisionLimit(value, tickValueStep, this.viewOptions.precisionLimit)) {
                tick.value = this.getDisplayValue(value, LabelType.TickValue);
                if (!ValueHelper.isNullOrUndefined(this.viewOptions.ticksValuesTooltip)) {
                    tick.valueTooltip = this.viewOptions.ticksValuesTooltip(value);
                    tick.valueTooltipPlacement = this.viewOptions.vertical
                        ? 'right'
                        : 'top';
                }
            }
            /** @type {?} */
            let legend = null;
            if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray)) {
                /** @type {?} */
                const step = this.viewOptions.stepsArray[value];
                if (!ValueHelper.isNullOrUndefined(step)) {
                    legend = step.legend;
                }
            }
            else if (!ValueHelper.isNullOrUndefined(this.viewOptions.getLegend)) {
                legend = this.viewOptions.getLegend(value);
            }
            if (!ValueHelper.isNullOrUndefined(legend)) {
                tick.legend = legend;
                hasAtLeastOneLegend = true;
            }
            return tick;
        });
        setTimeout(() => { this.sliderElementWithLegendClass = hasAtLeastOneLegend; });
        // We should avoid re-creating the ticks array if possible
        // This both improves performance and makes CSS animations work correctly
        if (!ValueHelper.isNullOrUndefined(this.ticks) && this.ticks.length === newTicks.length) {
            for (let i = 0; i < newTicks.length; ++i) {
                Object.assign(this.ticks[i], newTicks[i]);
            }
        }
        else {
            this.ticks = newTicks;
        }
        if (!this.isRefDestroyed()) {
            this.changeDetectionRef.detectChanges();
        }
    }
    /**
     * @return {?}
     */
    getTicksArray() {
        /** @type {?} */
        const step = (!ValueHelper.isNullOrUndefined(this.viewOptions.tickStep)) ? this.viewOptions.tickStep : this.viewOptions.step;
        /** @type {?} */
        const ticksArray = [];
        /** @type {?} */
        const numberOfValues = 1 + Math.floor(MathHelper.roundToPrecisionLimit(Math.abs(this.viewOptions.ceil - this.viewOptions.floor) / step, this.viewOptions.precisionLimit));
        for (let index = 0; index < numberOfValues; ++index) {
            ticksArray.push(MathHelper.roundToPrecisionLimit(this.viewOptions.floor + step * index, this.viewOptions.precisionLimit));
        }
        return ticksArray;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isTickSelected(value) {
        if (!this.range) {
            if (!ValueHelper.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue)) {
                /** @type {?} */
                const center = this.viewOptions.showSelectionBarFromValue;
                if (this.viewLowValue > center &&
                    value >= center &&
                    value <= this.viewLowValue) {
                    return true;
                }
                else if (this.viewLowValue < center &&
                    value <= center &&
                    value >= this.viewLowValue) {
                    return true;
                }
            }
            else if (this.viewOptions.showSelectionBarEnd) {
                if (value >= this.viewLowValue) {
                    return true;
                }
            }
            else if (this.viewOptions.showSelectionBar && value <= this.viewLowValue) {
                return true;
            }
        }
        if (this.range && value >= this.viewLowValue && value <= this.viewHighValue) {
            return true;
        }
        return false;
    }
    /**
     * @return {?}
     */
    updateFloorLabel() {
        if (!this.floorLabelElement.alwaysHide) {
            this.floorLabelElement.setValue(this.getDisplayValue(this.viewOptions.floor, LabelType.Floor));
            this.floorLabelElement.calculateDimension();
            /** @type {?} */
            const position = this.viewOptions.rightToLeft
                ? this.fullBarElement.dimension - this.floorLabelElement.dimension
                : 0;
            this.floorLabelElement.setPosition(position);
        }
    }
    /**
     * @return {?}
     */
    updateCeilLabel() {
        if (!this.ceilLabelElement.alwaysHide) {
            this.ceilLabelElement.setValue(this.getDisplayValue(this.viewOptions.ceil, LabelType.Ceil));
            this.ceilLabelElement.calculateDimension();
            /** @type {?} */
            const position = this.viewOptions.rightToLeft
                ? 0
                : this.fullBarElement.dimension - this.ceilLabelElement.dimension;
            this.ceilLabelElement.setPosition(position);
        }
    }
    /**
     * @param {?} which
     * @param {?} newPos
     * @return {?}
     */
    updateHandles(which, newPos) {
        if (which === PointerType.Min) {
            this.updateLowHandle(newPos);
        }
        else if (which === PointerType.Max) {
            this.updateHighHandle(newPos);
        }
        this.updateSelectionBar();
        this.updateTicksScale();
        if (this.range) {
            this.updateCombinedLabel();
        }
    }
    /**
     * @param {?} labelType
     * @param {?} newPos
     * @return {?}
     */
    getHandleLabelPos(labelType, newPos) {
        /** @type {?} */
        const labelDimension = (labelType === PointerType.Min)
            ? this.minHandleLabelElement.dimension
            : this.maxHandleLabelElement.dimension;
        /** @type {?} */
        const nearHandlePos = newPos - labelDimension / 2 + this.handleHalfDimension;
        /** @type {?} */
        const endOfBarPos = this.fullBarElement.dimension - labelDimension;
        if (!this.viewOptions.boundPointerLabels) {
            return nearHandlePos;
        }
        if ((this.viewOptions.rightToLeft && labelType === PointerType.Min) ||
            (!this.viewOptions.rightToLeft && labelType === PointerType.Max)) {
            return Math.min(nearHandlePos, endOfBarPos);
        }
        else {
            return Math.min(Math.max(nearHandlePos, 0), endOfBarPos);
        }
    }
    /**
     * @param {?} newPos
     * @return {?}
     */
    updateLowHandle(newPos) {
        this.minHandleElement.setPosition(newPos);
        this.minHandleLabelElement.setValue(this.getDisplayValue(this.viewLowValue, LabelType.Low));
        this.minHandleLabelElement.setPosition(this.getHandleLabelPos(PointerType.Min, newPos));
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.getPointerColor)) {
            this.minPointerStyle = {
                backgroundColor: this.getPointerColor(PointerType.Min),
            };
        }
        if (this.viewOptions.autoHideLimitLabels) {
            this.updateFloorAndCeilLabelsVisibility();
        }
    }
    /**
     * @param {?} newPos
     * @return {?}
     */
    updateHighHandle(newPos) {
        this.maxHandleElement.setPosition(newPos);
        this.maxHandleLabelElement.setValue(this.getDisplayValue(this.viewHighValue, LabelType.High));
        this.maxHandleLabelElement.setPosition(this.getHandleLabelPos(PointerType.Max, newPos));
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.getPointerColor)) {
            this.maxPointerStyle = {
                backgroundColor: this.getPointerColor(PointerType.Max),
            };
        }
        if (this.viewOptions.autoHideLimitLabels) {
            this.updateFloorAndCeilLabelsVisibility();
        }
    }
    /**
     * @return {?}
     */
    updateFloorAndCeilLabelsVisibility() {
        // Show based only on hideLimitLabels if pointer labels are hidden
        if (this.viewOptions.hidePointerLabels) {
            return;
        }
        /** @type {?} */
        let floorLabelHidden = false;
        /** @type {?} */
        let ceilLabelHidden = false;
        /** @type {?} */
        const isMinLabelAtFloor = this.isLabelBelowFloorLabel(this.minHandleLabelElement);
        /** @type {?} */
        const isMinLabelAtCeil = this.isLabelAboveCeilLabel(this.minHandleLabelElement);
        /** @type {?} */
        const isMaxLabelAtCeil = this.isLabelAboveCeilLabel(this.maxHandleLabelElement);
        /** @type {?} */
        const isCombinedLabelAtFloor = this.isLabelBelowFloorLabel(this.combinedLabelElement);
        /** @type {?} */
        const isCombinedLabelAtCeil = this.isLabelAboveCeilLabel(this.combinedLabelElement);
        if (isMinLabelAtFloor) {
            floorLabelHidden = true;
            this.floorLabelElement.hide();
        }
        else {
            floorLabelHidden = false;
            this.floorLabelElement.show();
        }
        if (isMinLabelAtCeil) {
            ceilLabelHidden = true;
            this.ceilLabelElement.hide();
        }
        else {
            ceilLabelHidden = false;
            this.ceilLabelElement.show();
        }
        if (this.range) {
            /** @type {?} */
            const hideCeil = this.combinedLabelElement.isVisible() ? isCombinedLabelAtCeil : isMaxLabelAtCeil;
            /** @type {?} */
            const hideFloor = this.combinedLabelElement.isVisible() ? isCombinedLabelAtFloor : isMinLabelAtFloor;
            if (hideCeil) {
                this.ceilLabelElement.hide();
            }
            else if (!ceilLabelHidden) {
                this.ceilLabelElement.show();
            }
            // Hide or show floor label
            if (hideFloor) {
                this.floorLabelElement.hide();
            }
            else if (!floorLabelHidden) {
                this.floorLabelElement.show();
            }
        }
    }
    /**
     * @param {?} label
     * @return {?}
     */
    isLabelBelowFloorLabel(label) {
        /** @type {?} */
        const pos = label.position;
        /** @type {?} */
        const dim = label.dimension;
        /** @type {?} */
        const floorPos = this.floorLabelElement.position;
        /** @type {?} */
        const floorDim = this.floorLabelElement.dimension;
        return this.viewOptions.rightToLeft
            ? pos + dim >= floorPos - 2
            : pos <= floorPos + floorDim + 2;
    }
    /**
     * @param {?} label
     * @return {?}
     */
    isLabelAboveCeilLabel(label) {
        /** @type {?} */
        const pos = label.position;
        /** @type {?} */
        const dim = label.dimension;
        /** @type {?} */
        const ceilPos = this.ceilLabelElement.position;
        /** @type {?} */
        const ceilDim = this.ceilLabelElement.dimension;
        return this.viewOptions.rightToLeft
            ? pos <= ceilPos + ceilDim + 2
            : pos + dim >= ceilPos - 2;
    }
    /**
     * @return {?}
     */
    updateSelectionBar() {
        /** @type {?} */
        let position = 0;
        /** @type {?} */
        let dimension = 0;
        /** @type {?} */
        const isSelectionBarFromRight = this.viewOptions.rightToLeft
            ? !this.viewOptions.showSelectionBarEnd
            : this.viewOptions.showSelectionBarEnd;
        /** @type {?} */
        const positionForRange = this.viewOptions.rightToLeft
            ? this.maxHandleElement.position + this.handleHalfDimension
            : this.minHandleElement.position + this.handleHalfDimension;
        if (this.range) {
            dimension = Math.abs(this.maxHandleElement.position - this.minHandleElement.position);
            position = positionForRange;
        }
        else {
            if (!ValueHelper.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue)) {
                /** @type {?} */
                const center = this.viewOptions.showSelectionBarFromValue;
                /** @type {?} */
                const centerPosition = this.valueToPosition(center);
                /** @type {?} */
                const isModelGreaterThanCenter = this.viewOptions.rightToLeft
                    ? this.viewLowValue <= center
                    : this.viewLowValue > center;
                if (isModelGreaterThanCenter) {
                    dimension = this.minHandleElement.position - centerPosition;
                    position = centerPosition + this.handleHalfDimension;
                }
                else {
                    dimension = centerPosition - this.minHandleElement.position;
                    position = this.minHandleElement.position + this.handleHalfDimension;
                }
            }
            else if (isSelectionBarFromRight) {
                dimension = Math.ceil(Math.abs(this.maxHandlePosition - this.minHandleElement.position) + this.handleHalfDimension);
                position = Math.floor(this.minHandleElement.position + this.handleHalfDimension);
            }
            else {
                dimension = this.minHandleElement.position + this.handleHalfDimension;
                position = 0;
            }
        }
        this.selectionBarElement.setDimension(dimension);
        this.selectionBarElement.setPosition(position);
        if (this.range && this.viewOptions.showOuterSelectionBars) {
            if (this.viewOptions.rightToLeft) {
                this.rightOuterSelectionBarElement.setDimension(position);
                this.rightOuterSelectionBarElement.setPosition(0);
                this.fullBarElement.calculateDimension();
                this.leftOuterSelectionBarElement.setDimension(this.fullBarElement.dimension - (position + dimension));
                this.leftOuterSelectionBarElement.setPosition(position + dimension);
            }
            else {
                this.leftOuterSelectionBarElement.setDimension(position);
                this.leftOuterSelectionBarElement.setPosition(0);
                this.fullBarElement.calculateDimension();
                this.rightOuterSelectionBarElement.setDimension(this.fullBarElement.dimension - (position + dimension));
                this.rightOuterSelectionBarElement.setPosition(position + dimension);
            }
        }
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.getSelectionBarColor)) {
            /** @type {?} */
            const color = this.getSelectionBarColor();
            this.barStyle = {
                backgroundColor: color,
            };
        }
        else if (!ValueHelper.isNullOrUndefined(this.viewOptions.selectionBarGradient)) {
            /** @type {?} */
            const offset = (!ValueHelper.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue))
                ? this.valueToPosition(this.viewOptions.showSelectionBarFromValue)
                : 0;
            /** @type {?} */
            const reversed = (offset - position > 0 && !isSelectionBarFromRight) || (offset - position <= 0 && isSelectionBarFromRight);
            /** @type {?} */
            const direction = this.viewOptions.vertical
                ? reversed ? 'bottom' : 'top'
                : reversed ? 'left' : 'right';
            this.barStyle = {
                backgroundImage: 'linear-gradient(to ' +
                    direction +
                    ', ' +
                    this.viewOptions.selectionBarGradient.from +
                    ' 0%,' +
                    this.viewOptions.selectionBarGradient.to +
                    ' 100%)',
            };
            if (this.viewOptions.vertical) {
                this.barStyle.backgroundPosition =
                    'center ' +
                        (offset +
                            dimension +
                            position +
                            (reversed ? -this.handleHalfDimension : 0)) +
                        'px';
                this.barStyle.backgroundSize =
                    '100% ' + (this.fullBarElement.dimension - this.handleHalfDimension) + 'px';
            }
            else {
                this.barStyle.backgroundPosition =
                    offset -
                        position +
                        (reversed ? this.handleHalfDimension : 0) +
                        'px center';
                this.barStyle.backgroundSize =
                    this.fullBarElement.dimension - this.handleHalfDimension + 'px 100%';
            }
        }
    }
    /**
     * @return {?}
     */
    getSelectionBarColor() {
        if (this.range) {
            return this.viewOptions.getSelectionBarColor(this.value, this.highValue);
        }
        return this.viewOptions.getSelectionBarColor(this.value);
    }
    /**
     * @param {?} pointerType
     * @return {?}
     */
    getPointerColor(pointerType) {
        if (pointerType === PointerType.Max) {
            return this.viewOptions.getPointerColor(this.highValue, pointerType);
        }
        return this.viewOptions.getPointerColor(this.value, pointerType);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getTickColor(value) {
        return this.viewOptions.getTickColor(value);
    }
    /**
     * @return {?}
     */
    updateCombinedLabel() {
        /** @type {?} */
        let isLabelOverlap = null;
        if (this.viewOptions.rightToLeft) {
            isLabelOverlap =
                this.minHandleLabelElement.position - this.minHandleLabelElement.dimension - 10 <= this.maxHandleLabelElement.position;
        }
        else {
            isLabelOverlap =
                this.minHandleLabelElement.position + this.minHandleLabelElement.dimension + 10 >= this.maxHandleLabelElement.position;
        }
        if (isLabelOverlap) {
            /** @type {?} */
            const lowDisplayValue = this.getDisplayValue(this.viewLowValue, LabelType.Low);
            /** @type {?} */
            const highDisplayValue = this.getDisplayValue(this.viewHighValue, LabelType.High);
            /** @type {?} */
            const combinedLabelValue = this.viewOptions.rightToLeft
                ? this.viewOptions.combineLabels(highDisplayValue, lowDisplayValue)
                : this.viewOptions.combineLabels(lowDisplayValue, highDisplayValue);
            this.combinedLabelElement.setValue(combinedLabelValue);
            /** @type {?} */
            const pos = this.viewOptions.boundPointerLabels
                ? Math.min(Math.max(this.selectionBarElement.position +
                    this.selectionBarElement.dimension / 2 -
                    this.combinedLabelElement.dimension / 2, 0), this.fullBarElement.dimension - this.combinedLabelElement.dimension)
                : this.selectionBarElement.position + this.selectionBarElement.dimension / 2 - this.combinedLabelElement.dimension / 2;
            this.combinedLabelElement.setPosition(pos);
            this.minHandleLabelElement.hide();
            this.maxHandleLabelElement.hide();
            this.combinedLabelElement.show();
        }
        else {
            this.updateHighHandle(this.valueToPosition(this.viewHighValue));
            this.updateLowHandle(this.valueToPosition(this.viewLowValue));
            this.maxHandleLabelElement.show();
            this.minHandleLabelElement.show();
            this.combinedLabelElement.hide();
        }
        if (this.viewOptions.autoHideLimitLabels) {
            this.updateFloorAndCeilLabelsVisibility();
        }
    }
    /**
     * @param {?} value
     * @param {?} which
     * @return {?}
     */
    getDisplayValue(value, which) {
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray) && !this.viewOptions.bindIndexForStepsArray) {
            value = this.getStepValue(value);
        }
        return this.viewOptions.translate(value, which);
    }
    /**
     * @param {?} value
     * @param {?=} customStep
     * @return {?}
     */
    roundStep(value, customStep) {
        /** @type {?} */
        const step = !ValueHelper.isNullOrUndefined(customStep) ? customStep : this.viewOptions.step;
        /** @type {?} */
        let steppedDifference = MathHelper.roundToPrecisionLimit((value - this.viewOptions.floor) / step, this.viewOptions.precisionLimit);
        steppedDifference = Math.round(steppedDifference) * step;
        return MathHelper.roundToPrecisionLimit(this.viewOptions.floor + steppedDifference, this.viewOptions.precisionLimit);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    valueToPosition(val) {
        /** @type {?} */
        let fn = ValueHelper.linearValueToPosition;
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.customValueToPosition)) {
            fn = this.viewOptions.customValueToPosition;
        }
        else if (this.viewOptions.logScale) {
            fn = ValueHelper.logValueToPosition;
        }
        val = MathHelper.clampToRange(val, this.viewOptions.floor, this.viewOptions.ceil);
        /** @type {?} */
        let percent = fn(val, this.viewOptions.floor, this.viewOptions.ceil);
        if (ValueHelper.isNullOrUndefined(percent)) {
            percent = 0;
        }
        if (this.viewOptions.rightToLeft) {
            percent = 1 - percent;
        }
        return percent * this.maxHandlePosition;
    }
    /**
     * @param {?} position
     * @return {?}
     */
    positionToValue(position) {
        /** @type {?} */
        let percent = position / this.maxHandlePosition;
        if (this.viewOptions.rightToLeft) {
            percent = 1 - percent;
        }
        /** @type {?} */
        let fn = ValueHelper.linearPositionToValue;
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.customPositionToValue)) {
            fn = this.viewOptions.customPositionToValue;
        }
        else if (this.viewOptions.logScale) {
            fn = ValueHelper.logPositionToValue;
        }
        /** @type {?} */
        const value = fn(percent, this.viewOptions.floor, this.viewOptions.ceil);
        return !ValueHelper.isNullOrUndefined(value) ? value : 0;
    }
    /**
     * @param {?} event
     * @param {?=} targetTouchId
     * @return {?}
     */
    getEventXY(event, targetTouchId) {
        if (event instanceof MouseEvent) {
            return this.viewOptions.vertical ? event.clientY : event.clientX;
        }
        /** @type {?} */
        let touchIndex = 0;
        /** @type {?} */
        const touches = event.touches;
        if (!ValueHelper.isNullOrUndefined(targetTouchId)) {
            for (let i = 0; i < touches.length; i++) {
                if (touches[i].identifier === targetTouchId) {
                    touchIndex = i;
                    break;
                }
            }
        }
        // Return the target touch or if the target touch was not found in the event
        // returns the coordinates of the first touch
        return this.viewOptions.vertical ? touches[touchIndex].clientY : touches[touchIndex].clientX;
    }
    /**
     * @param {?} event
     * @param {?=} targetTouchId
     * @return {?}
     */
    getEventPosition(event, targetTouchId) {
        /** @type {?} */
        const sliderElementBoundingRect = this.elementRef.nativeElement.getBoundingClientRect();
        /** @type {?} */
        const sliderPos = this.viewOptions.vertical ?
            sliderElementBoundingRect.bottom : sliderElementBoundingRect.left;
        /** @type {?} */
        let eventPos = 0;
        if (this.viewOptions.vertical) {
            eventPos = -this.getEventXY(event, targetTouchId) + sliderPos;
        }
        else {
            eventPos = this.getEventXY(event, targetTouchId) - sliderPos;
        }
        return eventPos * this.viewOptions.scale - this.handleHalfDimension;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    getNearestHandle(event) {
        if (!this.range) {
            return PointerType.Min;
        }
        /** @type {?} */
        const position = this.getEventPosition(event);
        /** @type {?} */
        const distanceMin = Math.abs(position - this.minHandleElement.position);
        /** @type {?} */
        const distanceMax = Math.abs(position - this.maxHandleElement.position);
        if (distanceMin < distanceMax) {
            return PointerType.Min;
        }
        else if (distanceMin > distanceMax) {
            return PointerType.Max;
        }
        else if (!this.viewOptions.rightToLeft) {
            // if event is at the same distance from min/max then if it's at left of minH, we return minH else maxH
            return position < this.minHandleElement.position ? PointerType.Min : PointerType.Max;
        }
        // reverse in rtl
        return position > this.minHandleElement.position ? PointerType.Min : PointerType.Max;
    }
    /**
     * @return {?}
     */
    bindEvents() {
        /** @type {?} */
        const draggableRange = this.viewOptions.draggableRange;
        if (!this.viewOptions.onlyBindHandles) {
            this.selectionBarElement.on('mousedown', (event) => this.onBarStart(null, draggableRange, event, true, true, true));
        }
        if (this.viewOptions.draggableRangeOnly) {
            this.minHandleElement.on('mousedown', (event) => this.onBarStart(PointerType.Min, draggableRange, event, true, true));
            this.maxHandleElement.on('mousedown', (event) => this.onBarStart(PointerType.Max, draggableRange, event, true, true));
        }
        else {
            this.minHandleElement.on('mousedown', (event) => this.onStart(PointerType.Min, event, true, true));
            if (this.range) {
                this.maxHandleElement.on('mousedown', (event) => this.onStart(PointerType.Max, event, true, true));
            }
            if (!this.viewOptions.onlyBindHandles) {
                this.fullBarElement.on('mousedown', (event) => this.onStart(null, event, true, true, true));
                this.ticksElement.on('mousedown', (event) => this.onStart(null, event, true, true, true, true));
            }
        }
        if (!this.viewOptions.onlyBindHandles) {
            this.selectionBarElement.onPassive('touchstart', (event) => this.onBarStart(null, draggableRange, event, true, true, true));
        }
        if (this.viewOptions.draggableRangeOnly) {
            this.minHandleElement.onPassive('touchstart', (event) => this.onBarStart(PointerType.Min, draggableRange, event, true, true));
            this.maxHandleElement.onPassive('touchstart', (event) => this.onBarStart(PointerType.Max, draggableRange, event, true, true));
        }
        else {
            this.minHandleElement.onPassive('touchstart', (event) => this.onStart(PointerType.Min, event, true, true));
            if (this.range) {
                this.maxHandleElement.onPassive('touchstart', (event) => this.onStart(PointerType.Max, event, true, true));
            }
            if (!this.viewOptions.onlyBindHandles) {
                this.fullBarElement.onPassive('touchstart', (event) => this.onStart(null, event, true, true, true));
                this.ticksElement.onPassive('touchstart', (event) => this.onStart(null, event, false, false, true, true));
            }
        }
        if (this.viewOptions.keyboardSupport) {
            this.minHandleElement.on('focus', () => this.onPointerFocus(PointerType.Min));
            if (this.range) {
                this.maxHandleElement.on('focus', () => this.onPointerFocus(PointerType.Max));
            }
        }
    }
    /**
     * @param {?} options
     * @return {?}
     */
    getOptionsInfluencingEventBindings(options) {
        return [
            options.disabled,
            options.readOnly,
            options.draggableRange,
            options.draggableRangeOnly,
            options.onlyBindHandles,
            options.keyboardSupport
        ];
    }
    /**
     * @return {?}
     */
    unbindEvents() {
        this.unsubscribeOnMove();
        this.unsubscribeOnEnd();
        for (const element of this.getAllSliderElements()) {
            if (!ValueHelper.isNullOrUndefined(element)) {
                element.off();
            }
        }
    }
    /**
     * @param {?} pointerType
     * @param {?} draggableRange
     * @param {?} event
     * @param {?} bindMove
     * @param {?} bindEnd
     * @param {?=} simulateImmediateMove
     * @param {?=} simulateImmediateEnd
     * @return {?}
     */
    onBarStart(pointerType, draggableRange, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd) {
        if (draggableRange) {
            this.onDragStart(pointerType, event, bindMove, bindEnd);
        }
        else {
            this.onStart(pointerType, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd);
        }
    }
    /**
     * @param {?} pointerType
     * @param {?} event
     * @param {?} bindMove
     * @param {?} bindEnd
     * @param {?=} simulateImmediateMove
     * @param {?=} simulateImmediateEnd
     * @return {?}
     */
    onStart(pointerType, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd) {
        event.stopPropagation();
        // Only call preventDefault() when handling non-passive events (passive events don't need it)
        if (!CompatibilityHelper.isTouchEvent(event) || !detect_passive_events__WEBPACK_IMPORTED_MODULE_2___default.a.hasSupport) {
            event.preventDefault();
        }
        this.moving = false;
        // We have to do this in case the HTML where the sliders are on
        // have been animated into view.
        this.calculateViewDimensions();
        if (ValueHelper.isNullOrUndefined(pointerType)) {
            pointerType = this.getNearestHandle(event);
        }
        this.currentTrackingPointer = pointerType;
        /** @type {?} */
        const pointerElement = this.getPointerElement(pointerType);
        pointerElement.active = true;
        if (this.viewOptions.keyboardSupport) {
            pointerElement.focus();
        }
        if (bindMove) {
            this.unsubscribeOnMove();
            /** @type {?} */
            const onMoveCallback = (e) => this.dragging.active ? this.onDragMove(e) : this.onMove(e);
            if (CompatibilityHelper.isTouchEvent(event)) {
                this.onMoveEventListener = this.eventListenerHelper.attachPassiveEventListener(document, 'touchmove', onMoveCallback, this.viewOptions.touchEventsInterval);
            }
            else {
                this.onMoveEventListener = this.eventListenerHelper.attachEventListener(document, 'mousemove', onMoveCallback, this.viewOptions.mouseEventsInterval);
            }
        }
        if (bindEnd) {
            this.unsubscribeOnEnd();
            /** @type {?} */
            const onEndCallback = (e) => this.onEnd(e);
            if (CompatibilityHelper.isTouchEvent(event)) {
                this.onEndEventListener = this.eventListenerHelper.attachPassiveEventListener(document, 'touchend', onEndCallback);
            }
            else {
                this.onEndEventListener = this.eventListenerHelper.attachEventListener(document, 'mouseup', onEndCallback);
            }
        }
        this.userChangeStart.emit(this.getChangeContext());
        if (CompatibilityHelper.isTouchEvent(event) && !ValueHelper.isNullOrUndefined((/** @type {?} */ (event)).changedTouches)) {
            // Store the touch identifier
            if (ValueHelper.isNullOrUndefined(this.touchId)) {
                this.touchId = (/** @type {?} */ (event)).changedTouches[0].identifier;
            }
        }
        // Click events, either with mouse or touch gesture are weird. Sometimes they result in full
        // start, move, end sequence, and sometimes, they don't - they only invoke mousedown
        // As a workaround, we simulate the first move event and the end event if it's necessary
        if (simulateImmediateMove) {
            this.onMove(event, true);
        }
        if (simulateImmediateEnd) {
            this.onEnd(event);
        }
    }
    /**
     * @param {?} event
     * @param {?=} fromTick
     * @return {?}
     */
    onMove(event, fromTick) {
        /** @type {?} */
        let touchForThisSlider = null;
        if (CompatibilityHelper.isTouchEvent(event)) {
            /** @type {?} */
            const changedTouches = (/** @type {?} */ (event)).changedTouches;
            for (let i = 0; i < changedTouches.length; i++) {
                if (changedTouches[i].identifier === this.touchId) {
                    touchForThisSlider = changedTouches[i];
                    break;
                }
            }
            if (ValueHelper.isNullOrUndefined(touchForThisSlider)) {
                return;
            }
        }
        if (this.viewOptions.animate && !this.viewOptions.animateOnMove) {
            if (this.moving) {
                this.sliderElementAnimateClass = false;
            }
        }
        this.moving = true;
        /** @type {?} */
        const newPos = !ValueHelper.isNullOrUndefined(touchForThisSlider)
            ? this.getEventPosition(event, touchForThisSlider.identifier)
            : this.getEventPosition(event);
        /** @type {?} */
        let newValue;
        /** @type {?} */
        const ceilValue = this.viewOptions.rightToLeft
            ? this.viewOptions.floor
            : this.viewOptions.ceil;
        /** @type {?} */
        const floorValue = this.viewOptions.rightToLeft ? this.viewOptions.ceil : this.viewOptions.floor;
        if (newPos <= 0) {
            newValue = floorValue;
        }
        else if (newPos >= this.maxHandlePosition) {
            newValue = ceilValue;
        }
        else {
            newValue = this.positionToValue(newPos);
            if (fromTick && !ValueHelper.isNullOrUndefined(this.viewOptions.tickStep)) {
                newValue = this.roundStep(newValue, this.viewOptions.tickStep);
            }
            else {
                newValue = this.roundStep(newValue);
            }
        }
        this.positionTrackingHandle(newValue);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onEnd(event) {
        if (CompatibilityHelper.isTouchEvent(event)) {
            /** @type {?} */
            const changedTouches = (/** @type {?} */ (event)).changedTouches;
            if (changedTouches[0].identifier !== this.touchId) {
                return;
            }
        }
        this.moving = false;
        if (this.viewOptions.animate) {
            this.sliderElementAnimateClass = true;
        }
        this.touchId = null;
        if (!this.viewOptions.keyboardSupport) {
            this.minHandleElement.active = false;
            this.maxHandleElement.active = false;
            this.currentTrackingPointer = null;
        }
        this.dragging.active = false;
        this.unsubscribeOnMove();
        this.unsubscribeOnEnd();
        this.userChangeEnd.emit(this.getChangeContext());
    }
    /**
     * @param {?} pointerType
     * @return {?}
     */
    onPointerFocus(pointerType) {
        /** @type {?} */
        const pointerElement = this.getPointerElement(pointerType);
        pointerElement.on('blur', () => this.onPointerBlur(pointerElement));
        pointerElement.on('keydown', (event) => this.onKeyboardEvent(event));
        pointerElement.on('keyup', () => this.onKeyUp());
        pointerElement.active = true;
        this.currentTrackingPointer = pointerType;
        this.currentFocusPointer = pointerType;
        this.firstKeyDown = true;
    }
    /**
     * @return {?}
     */
    onKeyUp() {
        this.firstKeyDown = true;
        this.userChangeEnd.emit(this.getChangeContext());
    }
    /**
     * @param {?} pointer
     * @return {?}
     */
    onPointerBlur(pointer) {
        pointer.off('blur');
        pointer.off('keydown');
        pointer.off('keyup');
        pointer.active = false;
        if (ValueHelper.isNullOrUndefined(this.touchId)) {
            this.currentTrackingPointer = null;
            this.currentFocusPointer = null;
        }
    }
    /**
     * @param {?} currentValue
     * @return {?}
     */
    getKeyActions(currentValue) {
        /** @type {?} */
        const valueRange = this.viewOptions.ceil - this.viewOptions.floor;
        /** @type {?} */
        let increaseStep = currentValue + this.viewOptions.step;
        /** @type {?} */
        let decreaseStep = currentValue - this.viewOptions.step;
        /** @type {?} */
        let increasePage = currentValue + valueRange / 10;
        /** @type {?} */
        let decreasePage = currentValue - valueRange / 10;
        if (this.viewOptions.reversedControls) {
            increaseStep = currentValue - this.viewOptions.step;
            decreaseStep = currentValue + this.viewOptions.step;
            increasePage = currentValue - valueRange / 10;
            decreasePage = currentValue + valueRange / 10;
        }
        /** @type {?} */
        const actions = {
            UP: increaseStep,
            DOWN: decreaseStep,
            LEFT: decreaseStep,
            RIGHT: increaseStep,
            PAGEUP: increasePage,
            PAGEDOWN: decreasePage,
            HOME: this.viewOptions.reversedControls ? this.viewOptions.ceil : this.viewOptions.floor,
            END: this.viewOptions.reversedControls ? this.viewOptions.floor : this.viewOptions.ceil,
        };
        // right to left means swapping right and left arrows
        if (this.viewOptions.rightToLeft) {
            actions["LEFT"] = increaseStep;
            actions["RIGHT"] = decreaseStep;
            // right to left and vertical means we also swap up and down
            if (this.viewOptions.vertical) {
                actions["UP"] = decreaseStep;
                actions["DOWN"] = increaseStep;
            }
        }
        return actions;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyboardEvent(event) {
        /** @type {?} */
        const currentValue = this.getCurrentTrackingValue();
        /** @type {?} */
        const keyCode = !ValueHelper.isNullOrUndefined(event.keyCode)
            ? event.keyCode
            : event.which;
        /** @type {?} */
        const keys = {
            38: 'UP',
            40: 'DOWN',
            37: 'LEFT',
            39: 'RIGHT',
            33: 'PAGEUP',
            34: 'PAGEDOWN',
            36: 'HOME',
            35: 'END',
        };
        /** @type {?} */
        const actions = this.getKeyActions(currentValue);
        /** @type {?} */
        const key = keys[keyCode];
        /** @type {?} */
        const action = actions[key];
        if (ValueHelper.isNullOrUndefined(action) || ValueHelper.isNullOrUndefined(this.currentTrackingPointer)) {
            return;
        }
        event.preventDefault();
        if (this.firstKeyDown) {
            this.firstKeyDown = false;
            this.userChangeStart.emit(this.getChangeContext());
        }
        /** @type {?} */
        const actionValue = MathHelper.clampToRange(action, this.viewOptions.floor, this.viewOptions.ceil);
        /** @type {?} */
        const newValue = this.roundStep(actionValue);
        if (!this.viewOptions.draggableRangeOnly) {
            this.positionTrackingHandle(newValue);
        }
        else {
            /** @type {?} */
            const difference = this.viewHighValue - this.viewLowValue;
            /** @type {?} */
            let newMinValue;
            /** @type {?} */
            let newMaxValue;
            if (this.currentTrackingPointer === PointerType.Min) {
                newMinValue = newValue;
                newMaxValue = newValue + difference;
                if (newMaxValue > this.viewOptions.ceil) {
                    newMaxValue = this.viewOptions.ceil;
                    newMinValue = newMaxValue - difference;
                }
            }
            else if (this.currentTrackingPointer === PointerType.Max) {
                newMaxValue = newValue;
                newMinValue = newValue - difference;
                if (newMinValue < this.viewOptions.floor) {
                    newMinValue = this.viewOptions.floor;
                    newMaxValue = newMinValue + difference;
                }
            }
            this.positionTrackingBar(newMinValue, newMaxValue);
        }
    }
    /**
     * @param {?} pointerType
     * @param {?} event
     * @param {?} bindMove
     * @param {?} bindEnd
     * @return {?}
     */
    onDragStart(pointerType, event, bindMove, bindEnd) {
        /** @type {?} */
        const position = this.getEventPosition(event);
        this.dragging = new Dragging();
        this.dragging.active = true;
        this.dragging.value = this.positionToValue(position);
        this.dragging.difference = this.viewHighValue - this.viewLowValue;
        this.dragging.lowLimit = this.viewOptions.rightToLeft
            ? this.minHandleElement.position - position
            : position - this.minHandleElement.position;
        this.dragging.highLimit = this.viewOptions.rightToLeft
            ? position - this.maxHandleElement.position
            : this.maxHandleElement.position - position;
        this.onStart(pointerType, event, bindMove, bindEnd);
    }
    /**
     * Get min value depending on whether the newPos is outOfBounds above or below the bar and rightToLeft
     * @param {?} newPos
     * @param {?} outOfBounds
     * @param {?} isAbove
     * @return {?}
     */
    getMinValue(newPos, outOfBounds, isAbove) {
        /** @type {?} */
        const isRTL = this.viewOptions.rightToLeft;
        /** @type {?} */
        let value = null;
        if (outOfBounds) {
            if (isAbove) {
                value = isRTL
                    ? this.viewOptions.floor
                    : this.viewOptions.ceil - this.dragging.difference;
            }
            else {
                value = isRTL
                    ? this.viewOptions.ceil - this.dragging.difference
                    : this.viewOptions.floor;
            }
        }
        else {
            value = isRTL
                ? this.positionToValue(newPos + this.dragging.lowLimit)
                : this.positionToValue(newPos - this.dragging.lowLimit);
        }
        return this.roundStep(value);
    }
    /**
     * Get max value depending on whether the newPos is outOfBounds above or below the bar and rightToLeft
     * @param {?} newPos
     * @param {?} outOfBounds
     * @param {?} isAbove
     * @return {?}
     */
    getMaxValue(newPos, outOfBounds, isAbove) {
        /** @type {?} */
        const isRTL = this.viewOptions.rightToLeft;
        /** @type {?} */
        let value = null;
        if (outOfBounds) {
            if (isAbove) {
                value = isRTL
                    ? this.viewOptions.floor + this.dragging.difference
                    : this.viewOptions.ceil;
            }
            else {
                value = isRTL
                    ? this.viewOptions.ceil
                    : this.viewOptions.floor + this.dragging.difference;
            }
        }
        else {
            if (isRTL) {
                value =
                    this.positionToValue(newPos + this.dragging.lowLimit) +
                        this.dragging.difference;
            }
            else {
                value =
                    this.positionToValue(newPos - this.dragging.lowLimit) +
                        this.dragging.difference;
            }
        }
        return this.roundStep(value);
    }
    /**
     * @param {?=} event
     * @return {?}
     */
    onDragMove(event) {
        /** @type {?} */
        const newPos = this.getEventPosition(event);
        if (this.viewOptions.animate && !this.viewOptions.animateOnMove) {
            if (this.moving) {
                this.sliderElementAnimateClass = false;
            }
        }
        this.moving = true;
        /** @type {?} */
        let ceilLimit;
        /** @type {?} */
        let floorLimit;
        /** @type {?} */
        let floorHandleElement;
        /** @type {?} */
        let ceilHandleElement;
        if (this.viewOptions.rightToLeft) {
            ceilLimit = this.dragging.lowLimit;
            floorLimit = this.dragging.highLimit;
            floorHandleElement = this.maxHandleElement;
            ceilHandleElement = this.minHandleElement;
        }
        else {
            ceilLimit = this.dragging.highLimit;
            floorLimit = this.dragging.lowLimit;
            floorHandleElement = this.minHandleElement;
            ceilHandleElement = this.maxHandleElement;
        }
        /** @type {?} */
        const isUnderFloorLimit = (newPos <= floorLimit);
        /** @type {?} */
        const isOverCeilLimit = (newPos >= this.maxHandlePosition - ceilLimit);
        /** @type {?} */
        let newMinValue;
        /** @type {?} */
        let newMaxValue;
        if (isUnderFloorLimit) {
            if (floorHandleElement.position === 0) {
                return;
            }
            newMinValue = this.getMinValue(newPos, true, false);
            newMaxValue = this.getMaxValue(newPos, true, false);
        }
        else if (isOverCeilLimit) {
            if (ceilHandleElement.position === this.maxHandlePosition) {
                return;
            }
            newMaxValue = this.getMaxValue(newPos, true, true);
            newMinValue = this.getMinValue(newPos, true, true);
        }
        else {
            newMinValue = this.getMinValue(newPos, false, false);
            newMaxValue = this.getMaxValue(newPos, false, false);
        }
        this.positionTrackingBar(newMinValue, newMaxValue);
    }
    /**
     * @param {?} newMinValue
     * @param {?} newMaxValue
     * @return {?}
     */
    positionTrackingBar(newMinValue, newMaxValue) {
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.minLimit) &&
            newMinValue < this.viewOptions.minLimit) {
            newMinValue = this.viewOptions.minLimit;
            newMaxValue = MathHelper.roundToPrecisionLimit(newMinValue + this.dragging.difference, this.viewOptions.precisionLimit);
        }
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.maxLimit) &&
            newMaxValue > this.viewOptions.maxLimit) {
            newMaxValue = this.viewOptions.maxLimit;
            newMinValue = MathHelper.roundToPrecisionLimit(newMaxValue - this.dragging.difference, this.viewOptions.precisionLimit);
        }
        this.viewLowValue = newMinValue;
        this.viewHighValue = newMaxValue;
        this.applyViewChange();
        this.updateHandles(PointerType.Min, this.valueToPosition(newMinValue));
        this.updateHandles(PointerType.Max, this.valueToPosition(newMaxValue));
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    positionTrackingHandle(newValue) {
        newValue = this.applyMinMaxLimit(newValue);
        if (this.range) {
            if (this.viewOptions.pushRange) {
                newValue = this.applyPushRange(newValue);
            }
            else {
                if (this.viewOptions.noSwitching) {
                    if (this.currentTrackingPointer === PointerType.Min &&
                        newValue > this.viewHighValue) {
                        newValue = this.applyMinMaxRange(this.viewHighValue);
                    }
                    else if (this.currentTrackingPointer === PointerType.Max &&
                        newValue < this.viewLowValue) {
                        newValue = this.applyMinMaxRange(this.viewLowValue);
                    }
                }
                newValue = this.applyMinMaxRange(newValue);
                /* This is to check if we need to switch the min and max handles */
                if (this.currentTrackingPointer === PointerType.Min && newValue > this.viewHighValue) {
                    this.viewLowValue = this.viewHighValue;
                    this.applyViewChange();
                    this.updateHandles(PointerType.Min, this.maxHandleElement.position);
                    this.updateAriaAttributes();
                    this.currentTrackingPointer = PointerType.Max;
                    this.minHandleElement.active = false;
                    this.maxHandleElement.active = true;
                    if (this.viewOptions.keyboardSupport) {
                        this.maxHandleElement.focus();
                    }
                }
                else if (this.currentTrackingPointer === PointerType.Max &&
                    newValue < this.viewLowValue) {
                    this.viewHighValue = this.viewLowValue;
                    this.applyViewChange();
                    this.updateHandles(PointerType.Max, this.minHandleElement.position);
                    this.updateAriaAttributes();
                    this.currentTrackingPointer = PointerType.Min;
                    this.maxHandleElement.active = false;
                    this.minHandleElement.active = true;
                    if (this.viewOptions.keyboardSupport) {
                        this.minHandleElement.focus();
                    }
                }
            }
        }
        if (this.getCurrentTrackingValue() !== newValue) {
            if (this.currentTrackingPointer === PointerType.Min) {
                this.viewLowValue = newValue;
                this.applyViewChange();
            }
            else if (this.currentTrackingPointer === PointerType.Max) {
                this.viewHighValue = newValue;
                this.applyViewChange();
            }
            this.updateHandles(this.currentTrackingPointer, this.valueToPosition(newValue));
            this.updateAriaAttributes();
        }
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    applyMinMaxLimit(newValue) {
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.minLimit) && newValue < this.viewOptions.minLimit) {
            return this.viewOptions.minLimit;
        }
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.maxLimit) && newValue > this.viewOptions.maxLimit) {
            return this.viewOptions.maxLimit;
        }
        return newValue;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    applyMinMaxRange(newValue) {
        /** @type {?} */
        const oppositeValue = (this.currentTrackingPointer === PointerType.Min)
            ? this.viewHighValue
            : this.viewLowValue;
        /** @type {?} */
        const difference = Math.abs(newValue - oppositeValue);
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.minRange)) {
            if (difference < this.viewOptions.minRange) {
                if (this.currentTrackingPointer === PointerType.Min) {
                    return MathHelper.roundToPrecisionLimit(this.viewHighValue - this.viewOptions.minRange, this.viewOptions.precisionLimit);
                }
                else if (this.currentTrackingPointer === PointerType.Max) {
                    return MathHelper.roundToPrecisionLimit(this.viewLowValue + this.viewOptions.minRange, this.viewOptions.precisionLimit);
                }
            }
        }
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.maxRange)) {
            if (difference > this.viewOptions.maxRange) {
                if (this.currentTrackingPointer === PointerType.Min) {
                    return MathHelper.roundToPrecisionLimit(this.viewHighValue - this.viewOptions.maxRange, this.viewOptions.precisionLimit);
                }
                else if (this.currentTrackingPointer === PointerType.Max) {
                    return MathHelper.roundToPrecisionLimit(this.viewLowValue + this.viewOptions.maxRange, this.viewOptions.precisionLimit);
                }
            }
        }
        return newValue;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    applyPushRange(newValue) {
        /** @type {?} */
        const difference = (this.currentTrackingPointer === PointerType.Min)
            ? this.viewHighValue - newValue
            : newValue - this.viewLowValue;
        /** @type {?} */
        const minRange = (!ValueHelper.isNullOrUndefined(this.viewOptions.minRange))
            ? this.viewOptions.minRange
            : this.viewOptions.step;
        /** @type {?} */
        const maxRange = this.viewOptions.maxRange;
        // if smaller than minRange
        if (difference < minRange) {
            if (this.currentTrackingPointer === PointerType.Min) {
                this.viewHighValue = MathHelper.roundToPrecisionLimit(Math.min(newValue + minRange, this.viewOptions.ceil), this.viewOptions.precisionLimit);
                newValue = MathHelper.roundToPrecisionLimit(this.viewHighValue - minRange, this.viewOptions.precisionLimit);
                this.applyViewChange();
                this.updateHandles(PointerType.Max, this.valueToPosition(this.viewHighValue));
            }
            else if (this.currentTrackingPointer === PointerType.Max) {
                this.viewLowValue = MathHelper.roundToPrecisionLimit(Math.max(newValue - minRange, this.viewOptions.floor), this.viewOptions.precisionLimit);
                newValue = MathHelper.roundToPrecisionLimit(this.viewLowValue + minRange, this.viewOptions.precisionLimit);
                this.applyViewChange();
                this.updateHandles(PointerType.Min, this.valueToPosition(this.viewLowValue));
            }
            this.updateAriaAttributes();
        }
        else if (!ValueHelper.isNullOrUndefined(maxRange) && difference > maxRange) {
            // if greater than maxRange
            if (this.currentTrackingPointer === PointerType.Min) {
                this.viewHighValue = MathHelper.roundToPrecisionLimit(newValue + maxRange, this.viewOptions.precisionLimit);
                this.applyViewChange();
                this.updateHandles(PointerType.Max, this.valueToPosition(this.viewHighValue));
            }
            else if (this.currentTrackingPointer === PointerType.Max) {
                this.viewLowValue = MathHelper.roundToPrecisionLimit(newValue - maxRange, this.viewOptions.precisionLimit);
                this.applyViewChange();
                this.updateHandles(PointerType.Min, this.valueToPosition(this.viewLowValue));
            }
            this.updateAriaAttributes();
        }
        return newValue;
    }
    /**
     * @return {?}
     */
    getChangeContext() {
        /** @type {?} */
        const changeContext = new ChangeContext();
        changeContext.pointerType = this.currentTrackingPointer;
        changeContext.value = +this.value;
        if (this.range) {
            changeContext.highValue = +this.highValue;
        }
        return changeContext;
    }
}
SliderComponent.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"])); };
SliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SliderComponent, selectors: [["ngx-slider"]], contentQueries: function SliderComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, _c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.tooltipTemplate = _t.first);
    } }, viewQuery: function SliderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 1, SliderElementDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, 1, SliderElementDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c3, 1, SliderElementDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c4, 1, SliderElementDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c5, 1, SliderHandleDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c6, 1, SliderHandleDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c7, 1, SliderLabelDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c8, 1, SliderLabelDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c9, 1, SliderLabelDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c10, 1, SliderLabelDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c11, 1, SliderLabelDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c12, 1, SliderElementDirective);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.leftOuterSelectionBarElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.rightOuterSelectionBarElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.fullBarElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.selectionBarElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.minHandleElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.maxHandleElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.floorLabelElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.ceilLabelElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.minHandleLabelElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.maxHandleLabelElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.combinedLabelElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.ticksElement = _t.first);
    } }, hostAttrs: [1, "ngx-slider"], hostVars: 7, hostBindings: function SliderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resize", function SliderComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", ctx.sliderElementDisabledAttr);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("vertical", ctx.sliderElementVerticalClass)("animate", ctx.sliderElementAnimateClass)("with-legend", ctx.sliderElementWithLegendClass);
    } }, inputs: { value: "value", highValue: "highValue", options: "options", manualRefresh: "manualRefresh", triggerFocus: "triggerFocus" }, outputs: { valueChange: "valueChange", highValueChange: "highValueChange", userChangeStart: "userChangeStart", userChange: "userChange", userChangeEnd: "userChangeEnd" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([NGX_SLIDER_CONTROL_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 29, vars: 13, consts: [["ngxSliderElement", "", 1, "ngx-slider-span", "ngx-slider-bar-wrapper", "ngx-slider-left-out-selection"], ["leftOuterSelectionBar", ""], [1, "ngx-slider-span", "ngx-slider-bar"], ["ngxSliderElement", "", 1, "ngx-slider-span", "ngx-slider-bar-wrapper", "ngx-slider-right-out-selection"], ["rightOuterSelectionBar", ""], ["ngxSliderElement", "", 1, "ngx-slider-span", "ngx-slider-bar-wrapper", "ngx-slider-full-bar"], ["fullBar", ""], ["ngxSliderElement", "", 1, "ngx-slider-span", "ngx-slider-bar-wrapper", "ngx-slider-selection-bar"], ["selectionBar", ""], [1, "ngx-slider-span", "ngx-slider-bar", "ngx-slider-selection", 3, "ngStyle"], ["ngxSliderHandle", "", 1, "ngx-slider-span", "ngx-slider-pointer", "ngx-slider-pointer-min", 3, "ngStyle"], ["minHandle", ""], ["ngxSliderHandle", "", 1, "ngx-slider-span", "ngx-slider-pointer", "ngx-slider-pointer-max", 3, "ngStyle"], ["maxHandle", ""], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-limit", "ngx-slider-floor"], ["floorLabel", ""], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-limit", "ngx-slider-ceil"], ["ceilLabel", ""], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-model-value"], ["minHandleLabel", ""], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-model-high"], ["maxHandleLabel", ""], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-combined"], ["combinedLabel", ""], ["ngxSliderElement", "", 1, "ngx-slider-ticks", 3, "hidden"], ["ticksElement", ""], ["class", "ngx-slider-tick", 3, "ngClass", "ngStyle", 4, "ngFor", "ngForOf"], [1, "ngx-slider-tick", 3, "ngClass", "ngStyle"], [3, "template", "tooltip", "placement"], ["class", "ngx-slider-span ngx-slider-tick-value", 3, "template", "tooltip", "placement", "content", 4, "ngIf"], ["class", "ngx-slider-span ngx-slider-tick-legend", 3, "innerHTML", 4, "ngIf"], [1, "ngx-slider-span", "ngx-slider-tick-value", 3, "template", "tooltip", "placement", "content"], [1, "ngx-slider-span", "ngx-slider-tick-legend", 3, "innerHTML"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "span", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "span", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "span", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "span", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "span", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "span", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "span", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "span", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, SliderComponent_span_28_Template, 4, 9, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ngx-slider-transparent", ctx.fullBarTransparentClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ngx-slider-draggable", ctx.selectionBarDraggableClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx.barStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx.minPointerStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", ctx.range ? "inherit" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx.maxPointerStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ngx-slider-ticks-values-under", ctx.ticksUnderValuesClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.showTicks);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.ticks);
    } }, directives: function () { return [SliderElementDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], SliderHandleDirective, SliderLabelDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], TooltipWrapperComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]]; }, styles: [".ngx-slider{display:inline-block;position:relative;height:4px;width:100%;margin:35px 0 15px;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;touch-action:pan-y}  .ngx-slider.with-legend{margin-bottom:40px}  .ngx-slider[disabled]{cursor:not-allowed}  .ngx-slider[disabled] .ngx-slider-pointer{cursor:not-allowed;background-color:#d8e0f3}  .ngx-slider[disabled] .ngx-slider-draggable{cursor:not-allowed}  .ngx-slider[disabled] .ngx-slider-selection{background:#8b91a2}  .ngx-slider[disabled] .ngx-slider-tick{cursor:not-allowed}  .ngx-slider[disabled] .ngx-slider-tick.ngx-slider-selected{background:#8b91a2}  .ngx-slider .ngx-slider-span{white-space:nowrap;position:absolute;display:inline-block}  .ngx-slider .ngx-slider-base{width:100%;height:100%;padding:0}  .ngx-slider .ngx-slider-bar-wrapper{left:0;box-sizing:border-box;margin-top:-16px;padding-top:16px;width:100%;height:32px;z-index:1}  .ngx-slider .ngx-slider-draggable{cursor:move}  .ngx-slider .ngx-slider-bar{left:0;width:100%;height:4px;z-index:1;background:#d8e0f3;border-radius:2px}  .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-transparent .ngx-slider-bar{background:0 0}  .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-left-out-selection .ngx-slider-bar{background:#df002d}  .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-right-out-selection .ngx-slider-bar{background:#03a688}  .ngx-slider .ngx-slider-selection{z-index:2;background:#0db9f0;border-radius:2px}  .ngx-slider .ngx-slider-pointer{cursor:pointer;width:32px;height:32px;top:-14px;background-color:#0db9f0;z-index:3;border-radius:16px}  .ngx-slider .ngx-slider-pointer:after{content:'';width:8px;height:8px;position:absolute;top:12px;left:12px;border-radius:4px;background:#fff}  .ngx-slider .ngx-slider-pointer:hover:after{background-color:#fff}  .ngx-slider .ngx-slider-pointer.ngx-slider-active{z-index:4}  .ngx-slider .ngx-slider-pointer.ngx-slider-active:after{background-color:#451aff}  .ngx-slider .ngx-slider-bubble{cursor:default;bottom:16px;padding:1px 3px;color:#55637d;font-size:16px}  .ngx-slider .ngx-slider-bubble.ngx-slider-limit{color:#55637d}  .ngx-slider .ngx-slider-ticks{box-sizing:border-box;width:100%;height:0;position:absolute;left:0;top:-3px;margin:0;z-index:1;list-style:none}  .ngx-slider .ngx-slider-ticks-values-under .ngx-slider-tick-value{top:auto;bottom:-36px}  .ngx-slider .ngx-slider-tick{text-align:center;cursor:pointer;width:10px;height:10px;background:#d8e0f3;border-radius:50%;position:absolute;top:0;left:0;margin-left:11px}  .ngx-slider .ngx-slider-tick.ngx-slider-selected{background:#0db9f0}  .ngx-slider .ngx-slider-tick-value{position:absolute;top:-34px;-webkit-transform:translate(-50%,0);transform:translate(-50%,0)}  .ngx-slider .ngx-slider-tick-legend{position:absolute;top:24px;-webkit-transform:translate(-50%,0);transform:translate(-50%,0);max-width:50px;white-space:normal}  .ngx-slider.vertical{position:relative;width:4px;height:100%;margin:0 20px;padding:0;vertical-align:baseline;touch-action:pan-x}  .ngx-slider.vertical .ngx-slider-base{width:100%;height:100%;padding:0}  .ngx-slider.vertical .ngx-slider-bar-wrapper{top:auto;left:0;margin:0 0 0 -16px;padding:0 0 0 16px;height:100%;width:32px}  .ngx-slider.vertical .ngx-slider-bar{bottom:0;left:auto;width:4px;height:100%}  .ngx-slider.vertical .ngx-slider-pointer{left:-14px!important;top:auto;bottom:0}  .ngx-slider.vertical .ngx-slider-bubble{left:16px!important;bottom:0}  .ngx-slider.vertical .ngx-slider-ticks{height:100%;width:0;left:-3px;top:0;z-index:1}  .ngx-slider.vertical .ngx-slider-tick{vertical-align:middle;margin-left:auto;margin-top:11px}  .ngx-slider.vertical .ngx-slider-tick-value{left:24px;top:auto;-webkit-transform:translate(0,-28%);transform:translate(0,-28%)}  .ngx-slider.vertical .ngx-slider-tick-legend{top:auto;right:24px;-webkit-transform:translate(0,-28%);transform:translate(0,-28%);max-width:none;white-space:nowrap}  .ngx-slider.vertical .ngx-slider-ticks-values-under .ngx-slider-tick-value{bottom:auto;left:auto;right:24px}  .ngx-slider *{transition:none}  .ngx-slider.animate .ngx-slider-bar-wrapper{transition:.3s linear}  .ngx-slider.animate .ngx-slider-selection{transition:background-color .3s linear}  .ngx-slider.animate .ngx-slider-pointer{transition:.3s linear}  .ngx-slider.animate .ngx-slider-bubble{transition:.3s linear}  .ngx-slider.animate .ngx-slider-bubble.ngx-slider-limit{transition:opacity .3s linear}  .ngx-slider.animate .ngx-slider-bubble.ngx-slider-combined{transition:opacity .3s linear}  .ngx-slider.animate .ngx-slider-tick{transition:background-color .3s linear}"] });
/** @nocollapse */
SliderComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }
];
SliderComponent.propDecorators = {
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    highValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    highValueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    userChangeStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    userChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    userChangeEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    manualRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    triggerFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    leftOuterSelectionBarElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['leftOuterSelectionBar', { read: SliderElementDirective },] }],
    rightOuterSelectionBarElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['rightOuterSelectionBar', { read: SliderElementDirective },] }],
    fullBarElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['fullBar', { read: SliderElementDirective },] }],
    selectionBarElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['selectionBar', { read: SliderElementDirective },] }],
    minHandleElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['minHandle', { read: SliderHandleDirective },] }],
    maxHandleElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['maxHandle', { read: SliderHandleDirective },] }],
    floorLabelElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['floorLabel', { read: SliderLabelDirective },] }],
    ceilLabelElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['ceilLabel', { read: SliderLabelDirective },] }],
    minHandleLabelElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['minHandleLabel', { read: SliderLabelDirective },] }],
    maxHandleLabelElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['maxHandleLabel', { read: SliderLabelDirective },] }],
    combinedLabelElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['combinedLabel', { read: SliderLabelDirective },] }],
    ticksElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['ticksElement', { read: SliderElementDirective },] }],
    tooltipTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: ['tooltipTemplate',] }],
    sliderElementVerticalClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['class.vertical',] }],
    sliderElementAnimateClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['class.animate',] }],
    sliderElementWithLegendClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['class.with-legend',] }],
    sliderElementDisabledAttr: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['attr.disabled',] }],
    onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['window:resize', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'ngx-slider',
                template: `<!-- // 0 Left selection bar outside two handles -->
<span ngxSliderElement #leftOuterSelectionBar class="ngx-slider-span ngx-slider-bar-wrapper ngx-slider-left-out-selection">
  <span class="ngx-slider-span ngx-slider-bar"></span>
</span>
<!-- // 1 Right selection bar outside two handles -->
<span ngxSliderElement #rightOuterSelectionBar class="ngx-slider-span ngx-slider-bar-wrapper ngx-slider-right-out-selection">
  <span class="ngx-slider-span ngx-slider-bar"></span>
</span>
<!-- // 2 The whole slider bar -->
<span ngxSliderElement #fullBar [class.ngx-slider-transparent]="fullBarTransparentClass" class="ngx-slider-span ngx-slider-bar-wrapper ngx-slider-full-bar">
  <span class="ngx-slider-span ngx-slider-bar"></span>
</span>
<!-- // 3 Selection bar between two handles -->
<span ngxSliderElement #selectionBar [class.ngx-slider-draggable]="selectionBarDraggableClass" class="ngx-slider-span ngx-slider-bar-wrapper ngx-slider-selection-bar">
  <span class="ngx-slider-span ngx-slider-bar ngx-slider-selection" [ngStyle]="barStyle"></span>
</span>
<!-- // 4 Low slider handle -->
<span ngxSliderHandle #minHandle class="ngx-slider-span ngx-slider-pointer ngx-slider-pointer-min" [ngStyle]=minPointerStyle></span>
<!-- // 5 High slider handle -->
<span ngxSliderHandle #maxHandle [style.display]="range ? 'inherit' : 'none'" class="ngx-slider-span ngx-slider-pointer ngx-slider-pointer-max" [ngStyle]=maxPointerStyle></span>
<!-- // 6 Floor label -->
<span ngxSliderLabel #floorLabel class="ngx-slider-span ngx-slider-bubble ngx-slider-limit ngx-slider-floor"></span>
<!-- // 7 Ceiling label -->
<span ngxSliderLabel #ceilLabel class="ngx-slider-span ngx-slider-bubble ngx-slider-limit ngx-slider-ceil"></span>
<!-- // 8 Label above the low slider handle -->
<span ngxSliderLabel #minHandleLabel class="ngx-slider-span ngx-slider-bubble ngx-slider-model-value"></span>
<!-- // 9 Label above the high slider handle -->
<span ngxSliderLabel #maxHandleLabel class="ngx-slider-span ngx-slider-bubble ngx-slider-model-high"></span>
<!-- // 10 Combined range label when the slider handles are close ex. 15 - 17 -->
<span ngxSliderLabel #combinedLabel class="ngx-slider-span ngx-slider-bubble ngx-slider-combined"></span>
<!-- // 11 The ticks -->
<span ngxSliderElement #ticksElement [hidden]="!showTicks" [class.ngx-slider-ticks-values-under]="ticksUnderValuesClass" class="ngx-slider-ticks">
  <span *ngFor="let t of ticks" class="ngx-slider-tick" [ngClass]="{'ngx-slider-selected': t.selected}" [ngStyle]="t.style">
    <ngx-slider-tooltip-wrapper [template]="tooltipTemplate" [tooltip]="t.tooltip" [placement]="t.tooltipPlacement"></ngx-slider-tooltip-wrapper>
    <ngx-slider-tooltip-wrapper *ngIf="t.value != null" class="ngx-slider-span ngx-slider-tick-value"
        [template]="tooltipTemplate" [tooltip]="t.valueTooltip" [placement]="t.valueTooltipPlacement" [content]="t.value"></ngx-slider-tooltip-wrapper>
    <span *ngIf="t.legend != null" class="ngx-slider-span ngx-slider-tick-legend" [innerHTML]="t.legend"></span>
  </span>
</span>`,
                styles: [`::ng-deep .ngx-slider{display:inline-block;position:relative;height:4px;width:100%;margin:35px 0 15px;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;touch-action:pan-y}::ng-deep .ngx-slider.with-legend{margin-bottom:40px}::ng-deep .ngx-slider[disabled]{cursor:not-allowed}::ng-deep .ngx-slider[disabled] .ngx-slider-pointer{cursor:not-allowed;background-color:#d8e0f3}::ng-deep .ngx-slider[disabled] .ngx-slider-draggable{cursor:not-allowed}::ng-deep .ngx-slider[disabled] .ngx-slider-selection{background:#8b91a2}::ng-deep .ngx-slider[disabled] .ngx-slider-tick{cursor:not-allowed}::ng-deep .ngx-slider[disabled] .ngx-slider-tick.ngx-slider-selected{background:#8b91a2}::ng-deep .ngx-slider .ngx-slider-span{white-space:nowrap;position:absolute;display:inline-block}::ng-deep .ngx-slider .ngx-slider-base{width:100%;height:100%;padding:0}::ng-deep .ngx-slider .ngx-slider-bar-wrapper{left:0;box-sizing:border-box;margin-top:-16px;padding-top:16px;width:100%;height:32px;z-index:1}::ng-deep .ngx-slider .ngx-slider-draggable{cursor:move}::ng-deep .ngx-slider .ngx-slider-bar{left:0;width:100%;height:4px;z-index:1;background:#d8e0f3;border-radius:2px}::ng-deep .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-transparent .ngx-slider-bar{background:0 0}::ng-deep .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-left-out-selection .ngx-slider-bar{background:#df002d}::ng-deep .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-right-out-selection .ngx-slider-bar{background:#03a688}::ng-deep .ngx-slider .ngx-slider-selection{z-index:2;background:#0db9f0;border-radius:2px}::ng-deep .ngx-slider .ngx-slider-pointer{cursor:pointer;width:32px;height:32px;top:-14px;background-color:#0db9f0;z-index:3;border-radius:16px}::ng-deep .ngx-slider .ngx-slider-pointer:after{content:'';width:8px;height:8px;position:absolute;top:12px;left:12px;border-radius:4px;background:#fff}::ng-deep .ngx-slider .ngx-slider-pointer:hover:after{background-color:#fff}::ng-deep .ngx-slider .ngx-slider-pointer.ngx-slider-active{z-index:4}::ng-deep .ngx-slider .ngx-slider-pointer.ngx-slider-active:after{background-color:#451aff}::ng-deep .ngx-slider .ngx-slider-bubble{cursor:default;bottom:16px;padding:1px 3px;color:#55637d;font-size:16px}::ng-deep .ngx-slider .ngx-slider-bubble.ngx-slider-limit{color:#55637d}::ng-deep .ngx-slider .ngx-slider-ticks{box-sizing:border-box;width:100%;height:0;position:absolute;left:0;top:-3px;margin:0;z-index:1;list-style:none}::ng-deep .ngx-slider .ngx-slider-ticks-values-under .ngx-slider-tick-value{top:auto;bottom:-36px}::ng-deep .ngx-slider .ngx-slider-tick{text-align:center;cursor:pointer;width:10px;height:10px;background:#d8e0f3;border-radius:50%;position:absolute;top:0;left:0;margin-left:11px}::ng-deep .ngx-slider .ngx-slider-tick.ngx-slider-selected{background:#0db9f0}::ng-deep .ngx-slider .ngx-slider-tick-value{position:absolute;top:-34px;-webkit-transform:translate(-50%,0);transform:translate(-50%,0)}::ng-deep .ngx-slider .ngx-slider-tick-legend{position:absolute;top:24px;-webkit-transform:translate(-50%,0);transform:translate(-50%,0);max-width:50px;white-space:normal}::ng-deep .ngx-slider.vertical{position:relative;width:4px;height:100%;margin:0 20px;padding:0;vertical-align:baseline;touch-action:pan-x}::ng-deep .ngx-slider.vertical .ngx-slider-base{width:100%;height:100%;padding:0}::ng-deep .ngx-slider.vertical .ngx-slider-bar-wrapper{top:auto;left:0;margin:0 0 0 -16px;padding:0 0 0 16px;height:100%;width:32px}::ng-deep .ngx-slider.vertical .ngx-slider-bar{bottom:0;left:auto;width:4px;height:100%}::ng-deep .ngx-slider.vertical .ngx-slider-pointer{left:-14px!important;top:auto;bottom:0}::ng-deep .ngx-slider.vertical .ngx-slider-bubble{left:16px!important;bottom:0}::ng-deep .ngx-slider.vertical .ngx-slider-ticks{height:100%;width:0;left:-3px;top:0;z-index:1}::ng-deep .ngx-slider.vertical .ngx-slider-tick{vertical-align:middle;margin-left:auto;margin-top:11px}::ng-deep .ngx-slider.vertical .ngx-slider-tick-value{left:24px;top:auto;-webkit-transform:translate(0,-28%);transform:translate(0,-28%)}::ng-deep .ngx-slider.vertical .ngx-slider-tick-legend{top:auto;right:24px;-webkit-transform:translate(0,-28%);transform:translate(0,-28%);max-width:none;white-space:nowrap}::ng-deep .ngx-slider.vertical .ngx-slider-ticks-values-under .ngx-slider-tick-value{bottom:auto;left:auto;right:24px}::ng-deep .ngx-slider *{transition:none}::ng-deep .ngx-slider.animate .ngx-slider-bar-wrapper{transition:.3s linear}::ng-deep .ngx-slider.animate .ngx-slider-selection{transition:background-color .3s linear}::ng-deep .ngx-slider.animate .ngx-slider-pointer{transition:.3s linear}::ng-deep .ngx-slider.animate .ngx-slider-bubble{transition:.3s linear}::ng-deep .ngx-slider.animate .ngx-slider-bubble.ngx-slider-limit{transition:opacity .3s linear}::ng-deep .ngx-slider.animate .ngx-slider-bubble.ngx-slider-combined{transition:opacity .3s linear}::ng-deep .ngx-slider.animate .ngx-slider-tick{transition:background-color .3s linear}`],
                host: { class: 'ngx-slider' },
                providers: [NGX_SLIDER_CONTROL_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }]; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], highValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], highValueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], userChangeStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], userChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], userChangeEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], sliderElementVerticalClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['class.vertical']
        }], sliderElementAnimateClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['class.animate']
        }], sliderElementWithLegendClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['class.with-legend']
        }], sliderElementDisabledAttr: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['attr.disabled']
        }], manualRefresh: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], triggerFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
            args: ['window:resize', ['$event']]
        }], leftOuterSelectionBarElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['leftOuterSelectionBar', { read: SliderElementDirective }]
        }], rightOuterSelectionBarElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['rightOuterSelectionBar', { read: SliderElementDirective }]
        }], fullBarElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['fullBar', { read: SliderElementDirective }]
        }], selectionBarElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['selectionBar', { read: SliderElementDirective }]
        }], minHandleElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['minHandle', { read: SliderHandleDirective }]
        }], maxHandleElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['maxHandle', { read: SliderHandleDirective }]
        }], floorLabelElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['floorLabel', { read: SliderLabelDirective }]
        }], ceilLabelElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['ceilLabel', { read: SliderLabelDirective }]
        }], minHandleLabelElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['minHandleLabel', { read: SliderLabelDirective }]
        }], maxHandleLabelElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['maxHandleLabel', { read: SliderLabelDirective }]
        }], combinedLabelElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['combinedLabel', { read: SliderLabelDirective }]
        }], ticksElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['ticksElement', { read: SliderElementDirective }]
        }], tooltipTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: ['tooltipTemplate']
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TooltipWrapperComponent {
}
TooltipWrapperComponent.ɵfac = function TooltipWrapperComponent_Factory(t) { return new (t || TooltipWrapperComponent)(); };
TooltipWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TooltipWrapperComponent, selectors: [["ngx-slider-tooltip-wrapper"]], inputs: { template: "template", tooltip: "tooltip", placement: "placement", content: "content" }, decls: 2, vars: 2, consts: [[4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ngx-slider-inner-tooltip"]], template: function TooltipWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, TooltipWrapperComponent_ng_container_0_Template, 2, 6, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TooltipWrapperComponent_ng_container_1_Template, 3, 3, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.template);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.template);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgTemplateOutlet"]], styles: [".ngx-slider-inner-tooltip[_ngcontent-%COMP%]{height:100%}"] });
TooltipWrapperComponent.propDecorators = {
    template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    tooltip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](TooltipWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'ngx-slider-tooltip-wrapper',
                template: `<ng-container *ngIf="template">
  <ng-template *ngTemplateOutlet="template; context: {tooltip: tooltip, placement: placement, content: content}"></ng-template>
</ng-container>

<ng-container *ngIf="!template">
  <div class="ngx-slider-inner-tooltip" [attr.title]="tooltip" [attr.data-tooltip-placement]="placement">
    {{content}}
  </div>
</ng-container>`,
                styles: [`.ngx-slider-inner-tooltip{height:100%}`]
            }]
    }], null, { template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], tooltip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], placement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * NgxSlider module
 *
 * The module exports the slider component
 */
class NgxSliderModule {
}
NgxSliderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NgxSliderModule });
NgxSliderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function NgxSliderModule_Factory(t) { return new (t || NgxSliderModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NgxSliderModule, { declarations: function () { return [SliderComponent, SliderElementDirective, SliderHandleDirective, SliderLabelDirective, TooltipWrapperComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]]; }, exports: function () { return [SliderComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NgxSliderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]
                ],
                declarations: [
                    SliderComponent,
                    SliderElementDirective,
                    SliderHandleDirective,
                    SliderLabelDirective,
                    TooltipWrapperComponent
                ],
                exports: [
                    SliderComponent
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1zbGlkZXItbmd4LXNsaWRlci5qcyIsInNvdXJjZXMiOlsiQGFuZ3VsYXItc2xpZGVyL25neC1zbGlkZXIvb3B0aW9ucy50cyIsIkBhbmd1bGFyLXNsaWRlci9uZ3gtc2xpZGVyL3BvaW50ZXItdHlwZS50cyIsIkBhbmd1bGFyLXNsaWRlci9uZ3gtc2xpZGVyL2NoYW5nZS1jb250ZXh0LnRzIiwiQGFuZ3VsYXItc2xpZGVyL25neC1zbGlkZXIvdmFsdWUtaGVscGVyLnRzIiwiQGFuZ3VsYXItc2xpZGVyL25neC1zbGlkZXIvY29tcGF0aWJpbGl0eS1oZWxwZXIudHMiLCJAYW5ndWxhci1zbGlkZXIvbmd4LXNsaWRlci9tYXRoLWhlbHBlci50cyIsIkBhbmd1bGFyLXNsaWRlci9uZ3gtc2xpZGVyL2V2ZW50LWxpc3RlbmVyLnRzIiwiQGFuZ3VsYXItc2xpZGVyL25neC1zbGlkZXIvZXZlbnQtbGlzdGVuZXItaGVscGVyLnRzIiwiQGFuZ3VsYXItc2xpZGVyL25neC1zbGlkZXIvc2xpZGVyLWVsZW1lbnQuZGlyZWN0aXZlLnRzIiwiQGFuZ3VsYXItc2xpZGVyL25neC1zbGlkZXIvc2xpZGVyLWhhbmRsZS5kaXJlY3RpdmUudHMiLCJAYW5ndWxhci1zbGlkZXIvbmd4LXNsaWRlci9zbGlkZXItbGFiZWwuZGlyZWN0aXZlLnRzIiwiQGFuZ3VsYXItc2xpZGVyL25neC1zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC50cyIsIkBhbmd1bGFyLXNsaWRlci9uZ3gtc2xpZGVyL3Rvb2x0aXAtd3JhcHBlci5jb21wb25lbnQudHMiLCJAYW5ndWxhci1zbGlkZXIvbmd4LXNsaWRlci9zbGlkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLRSxNQUFHO0FBQ0w7QUFDRSxJQUFBLE9BQUk7QUFDTjtBQUNFLElBQUEsUUFBSztBQUNQO0FBQ0UsSUFBQSxPQUFJO0FBQ047QUFDRSxJQUFBLFlBQVM7QUFDVjtBQUVBLG9CQVhDLEdBQUc7QUFDSSxvQkFDUCxJQUFJO0FBQ0ksb0JBQ1IsS0FBSztBQUNJLG9CQUNULElBQUk7QUFDSSxvQkFDUixTQUFTO0FBR0U7QUFBSTtBQUFrQjtBQTBCbkM7QUFBZ0I7QUFDSDtBQUFZO0FBQ0s7QUFHbkI7QUFBWSxxQkFGSixDQUFDO0FBQ3BCO0FBQ1c7QUFDSztBQUNJO0FBRWIsb0JBRlcsSUFBSTtBQUN0QjtBQUNXO0FBQ0s7QUFDSTtBQUVWLG9CQUZRLENBQUM7QUFDbkI7QUFDVztBQUNLO0FBQ087QUFDSTtBQUVqQix3QkFGWSxJQUFJO0FBQzFCO0FBQ1c7QUFDSztBQUNPO0FBQ0k7QUFFakIsd0JBRlksSUFBSTtBQUMxQjtBQUNXO0FBQ0s7QUFDTztBQUNPO0FBRzVCO0FBQVkseUJBRlUsS0FBSztBQUM3QjtBQUNXO0FBQ0s7QUFDSTtBQUVqQix3QkFGbUIsSUFBSTtBQUMxQjtBQUNXO0FBQ0s7QUFDSTtBQUVqQix3QkFGbUIsSUFBSTtBQUMxQjtBQUNXO0FBQ0s7QUFDRTtBQUFZLHlCQUFJLElBQUk7QUFDdEM7QUFDVztBQUNLO0FBQ0s7QUFDSztBQUV4QjtBQUErQjtBQUFZLDZCQUFILElBQUk7QUFDOUM7QUFDVztBQUNLO0FBQ007QUFDTTtBQUNNO0FBRTVCO0FBRUo7QUFBWSx5QkFGb0IsSUFBSTtBQUN0QztBQUNXO0FBQ0s7QUFDTTtBQUNNO0FBRWxCO0FBQThCO0FBRWxCO0FBRXBCO0FBQVksMEJBRjBCLElBQUk7QUFDNUM7QUFDVztBQUNFO0FBQVksc0NBQVksS0FBSztBQUMxQztBQUNXO0FBQ0s7QUFDSTtBQUFZLDhCQUFILEtBQUs7QUFDbEM7QUFDVztBQUNLO0FBQ0k7QUFBWSxrQ0FBQyxLQUFLO0FBQ3RDO0FBQ1c7QUFDRTtBQUFZLGdDQUFNLEtBQUs7QUFDcEM7QUFDVztBQUNFO0FBQVksbUNBQVMsS0FBSztBQUN2QztBQUNXO0FBQ0k7QUFDSTtBQUFZLHlDQUFRLElBQUk7QUFDM0M7QUFDVztBQUNJO0FBQ0k7QUFBWSxzQ0FBTSxLQUFLO0FBQzFDO0FBQ1c7QUFDRTtBQUFZLGlDQUFPLEtBQUs7QUFDckM7QUFDVztBQUNDO0FBQVksK0JBQU0sS0FBSztBQUNuQztBQUNXO0FBQ0U7QUFBWSxtQ0FBUyxJQUFJO0FBQ3RDO0FBQ1c7QUFDRTtBQUFZLHdCQUFGLEtBQUs7QUFDNUI7QUFDVztBQUNFO0FBQVksd0JBQUYsS0FBSztBQUM1QjtBQUNXO0FBQ0s7QUFDRztBQUFZLG1DQUFFLEVBQUU7QUFDbkM7QUFDVztBQUNLO0FBQ0c7QUFBWSxtQ0FBRSxFQUFFO0FBQ25DO0FBQ1c7QUFDSztBQUNHO0FBQVksbUNBQUUsR0FBRztBQUNwQztBQUNXO0FBQ0s7QUFDRztBQUFZLG9DQUFHLEdBQUc7QUFDckM7QUFDVztBQUNFO0FBQVkseUJBQUQsS0FBSztBQUM3QjtBQUNXO0FBQ0U7QUFBWSwrQkFBSyxLQUFLO0FBQ25DO0FBRUs7QUFDUSx3QkFBUyxJQUFJO0FBQzFCO0FBRUs7QUFDUSw2QkFBYyxJQUFJO0FBQy9CO0FBQ1c7QUFDSztBQUNPO0FBQ0k7QUFFckIsMEJBRm9CLElBQUk7QUFDOUI7QUFDVztBQUNLO0FBQ0k7QUFBWSw0QkFBYSxJQUFJO0FBQ2pEO0FBQ1c7QUFDRTtBQUFZLGtDQUEwQixJQUFJO0FBQ3ZEO0FBQ1c7QUFDSztBQUNPO0FBQ0k7QUFFbkIsd0JBRmUsS0FBSztBQUM1QjtBQUNXO0FBQ0s7QUFDTztBQUNPO0FBQ087QUFFekI7QUFBcUM7QUFBWSxvQ0FBYyxJQUFJO0FBQy9FO0FBQ1c7QUFDRTtBQUFZLDRCQUFvQixJQUFJO0FBQ2pEO0FBQ1c7QUFDSztBQUNPO0FBQ087QUFDTztBQUNPO0FBQ087QUFDSTtBQUFZLCtCQUFPLElBQUk7QUFDOUU7QUFDVztBQUNLO0FBQ087QUFFYjtBQUNTO0FBQ0M7QUFFRTtBQUVQO0FBQVksK0JBRkcsSUFBSTtBQUNsQztBQUNXO0FBQ0s7QUFDSTtBQUVYLHFCQUZVLENBQUM7QUFDcEI7QUFDVztBQUNLO0FBQ087QUFDSTtBQUVyQiwyQkFGb0IsSUFBSTtBQUM5QjtBQUNXO0FBQ0s7QUFDTztBQUNJO0FBRXRCLDRCQUZzQixJQUFJO0FBQy9CO0FBQ1c7QUFDSztBQUNPO0FBQ0k7QUFFM0IsaUNBRmdDLElBQUk7QUFDcEM7QUFDVztBQUNFO0FBQVksMkJBQUMsS0FBSztBQUMvQjtBQUNXO0FBQ0U7QUFBWSwrQkFBSyxLQUFLO0FBQ25DO0FBQ1c7QUFDSztBQUNJO0FBQVksMkJBQU4sS0FBSztBQUMvQjtBQUNXO0FBQ0s7QUFDTztBQUVYO0FBQ0s7QUFDSTtBQUVBO0FBRVI7QUFBWSxnQ0FGTSxLQUFLO0FBQ3BDO0FBQ1c7QUFDRTtBQUFZLGtDQUFRLElBQUk7QUFDckM7QUFDVztBQUNDO0FBQVksd0JBQUQsS0FBSztBQUM1QjtBQUNXO0FBQ0s7QUFDTztBQUNJO0FBQVkscUNBQWEsSUFBSTtBQUN4RDtBQUNXO0FBQ0s7QUFDTztBQUNJO0FBQVkscUNBQWEsSUFBSTtBQUN4RDtBQUNXO0FBQ0s7QUFDTztBQUNJO0FBRXJCLDhCQUZzQixFQUFFO0FBQzlCO0FBQ1c7QUFDSztBQUNJO0FBQVksb0NBQXNCLElBQUk7QUFDMUQ7QUFDVztBQUNFO0FBQVkseUJBQUYsSUFBSTtBQUMzQjtBQUNXO0FBQ0s7QUFDSTtBQUFZLDhCQUFKLElBQUk7QUFDaEM7QUFDVztBQUNFO0FBQVksNkJBQUUsSUFBSTtBQUMvQjtBQUNXO0FBQ0s7QUFDSTtBQUFZLGtDQUFBLElBQUk7QUFDcEM7QUFDVztBQUNFO0FBQVksK0JBQUksSUFBSTtBQUNqQztBQUNXO0FBQ0U7QUFBWSw0QkFBQyxJQUFJO0FBQzlCO0FBQ1c7QUFDRTtBQUFZLHVCQUFILElBQUk7QUFDMUI7QUFDVztBQUNFO0FBQVksNkJBQUcsS0FBSztBQUNqQztBQUNJLENBREg7QUFDRDtBQUFDO0FBQUk7QUFBa0M7QUFBa0U7QUFBSTtBQUFzQjtBQUFzQjtBQUF1QixJQ3ZUOUssTUFBRztBQUNMO0FBQ0UsSUFBQSxNQUFHO0FBQ0o7QUFDQyx3QkFKQSxHQUFHO0FBQ0ksd0JBQ1AsR0FBRztBQUVHO0FBQUM7QUFBSTtBQUFrQztBQUFrRTtBQ0xqSDtBQUFzQixDQUlyQjtBQUNEO0FBQUM7QUFBSTtBQUFrQztBQUFrRTtBQUFJO0FBQUk7QUFBb0U7QUNGckw7QUFBb0I7QUFDbkI7QUFBd0I7QUFBbUI7QUFDMUMsSUFEQSxPQUFPLGlCQUFpQixDQUFDLEtBQVU7QUFBSSxRQUNyQyxPQUFPLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQztBQUNqRCxLQUFHO0FBQ0g7QUFDTztBQUF5QjtBQUF5QjtBQUM5QztBQUFRLElBRGpCLE9BQU8sY0FBYyxDQUFDLE1BQWEsRUFBRSxNQUFhO0FBQUksUUFDcEQsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxNQUFNLEVBQUU7QUFDekMsWUFBTSxPQUFPLEtBQUssQ0FBQztBQUNuQixTQUFLO0FBQ0wsUUFDSSxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtBQUNwRCxZQUFNLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUNuQyxnQkFBUSxPQUFPLEtBQUssQ0FBQztBQUNyQixhQUFPO0FBQ1AsU0FBSztBQUNMLFFBQ0ksT0FBTyxJQUFJLENBQUM7QUFDaEIsS0FBRztBQUNIO0FBQ087QUFBc0I7QUFBeUI7QUFBeUI7QUFDbkU7QUFBUSxJQURsQixPQUFPLHFCQUFxQixDQUFDLEdBQVcsRUFBRSxNQUFjLEVBQUUsTUFBYztBQUFJO0FBQzdELFFBQWIsTUFBTSxLQUFLLEdBQVcsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUMxQyxRQUFJLE9BQU8sQ0FBQyxHQUFHLEdBQUcsTUFBTSxJQUFJLEtBQUssQ0FBQztBQUNsQyxLQUFHO0FBQ0g7QUFDTztBQUFzQjtBQUF5QjtBQUF5QjtBQUNoRTtBQUFRLElBRHJCLE9BQU8sa0JBQWtCLENBQUMsR0FBVyxFQUFFLE1BQWMsRUFBRSxNQUFjO0FBQUksUUFDdkUsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEIsUUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM5QixRQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzlCO0FBQXlCLFFBQXJCLE1BQU0sS0FBSyxHQUFXLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDMUMsUUFBSSxPQUFPLENBQUMsR0FBRyxHQUFHLE1BQU0sSUFBSSxLQUFLLENBQUM7QUFDbEMsS0FBRztBQUNIO0FBQ087QUFBMEI7QUFBeUI7QUFBeUI7QUFDdkU7QUFBUSxJQURsQixPQUFPLHFCQUFxQixDQUFDLE9BQWUsRUFBRSxNQUFjLEVBQUUsTUFBYztBQUFJLFFBQzlFLE9BQU8sT0FBTyxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDaEQsS0FBRztBQUNIO0FBQ087QUFBMEI7QUFBeUI7QUFBeUI7QUFDcEU7QUFBUSxJQURyQixPQUFPLGtCQUFrQixDQUFDLE9BQWUsRUFBRSxNQUFjLEVBQUUsTUFBYztBQUFJLFFBQzNFLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzlCLFFBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDOUI7QUFBeUIsUUFBckIsTUFBTSxLQUFLLEdBQVcsT0FBTyxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDL0QsUUFBSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0IsS0FBRztBQUNIO0FBQ087QUFBNkI7QUFBNkI7QUFBbUI7QUFDakYsSUFERCxPQUFPLGFBQWEsQ0FBQyxVQUFrQixFQUFFLFVBQWtDO0FBQUk7QUFDaEUsUUFBYixNQUFNLFdBQVcsR0FBYSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBMEIsS0FBYSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUM1SDtBQUN3QixRQUFwQixJQUFJLGtCQUFrQixHQUFXLENBQUMsQ0FBQztBQUN2QyxRQUFJLEtBQUssSUFBSSxLQUFLLEdBQVcsQ0FBQyxFQUFFLEtBQUssR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO0FBQ3BFLFlBQU0sSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssV0FBVyxDQUFDLGtCQUFrQixDQUFDLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO0FBQzFILGdCQUFRLGtCQUFrQixHQUFHLEtBQUssQ0FBQztBQUNuQyxhQUFPO0FBQ1AsU0FBSztBQUNMLFFBQ0ksT0FBTyxrQkFBa0IsQ0FBQztBQUM5QixLQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQUM7QUFBSTtBQUFrQztBQUFrRTtBQUFJO0FBQUk7QUFBcUU7QUN2RHRMO0FBQTRCO0FBQzNCO0FBQThHO0FBQ3hGO0FBQW1CO0FBQVEsSUFBekMsT0FBTyxZQUFZLENBQUMsS0FBVTtBQUFJLFFBQ3ZDLElBQUksbUJBQUMsTUFBYSxHQUFFLFVBQVUsS0FBSyxTQUFTLEVBQUU7QUFDbEQsWUFBTSxPQUFPLEtBQUssWUFBWSxVQUFVLENBQUM7QUFDekMsU0FBSztBQUNMLFFBQ0ksT0FBTyxLQUFLLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQztBQUN2QztBQUVDO0FBQVE7QUFDRjtBQUFtQjtBQUFRLElBQXpCLE9BQU8seUJBQXlCO0FBQUssUUFDMUMsT0FBTyxtQkFBQyxNQUFhLEdBQUUsY0FBYyxLQUFLLFNBQVMsQ0FBQztBQUN4RDtBQUVBLENBREM7QUFDRDtBQUFDO0FBQUk7QUFBa0M7QUFBa0U7QUFBSTtBQUFJO0FBQXNDO0FDcEJ2SjtBQUFtQjtBQUNsQjtBQUF3QjtBQUFpQztBQUMzQztBQUFRLElBQXJCLE9BQU8scUJBQXFCLENBQUMsS0FBYSxFQUFFLGNBQXNCO0FBQUksUUFDcEUsT0FBTyxFQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUUsQ0FBQztBQUNsRCxLQUFHO0FBQ0g7QUFDTztBQUF3QjtBQUF5QjtBQUFpQztBQUNyRjtBQUFRLElBRFYsT0FBTyw0QkFBNEIsQ0FBQyxLQUFhLEVBQUUsTUFBYyxFQUFFLGNBQXNCO0FBQUk7QUFDL0UsUUFBWixNQUFNLEtBQUssR0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3hELFFBQUksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUM7QUFDckcsS0FBRztBQUNIO0FBQ087QUFBd0I7QUFBd0I7QUFDckQ7QUFBbUI7QUFBUSxJQUQzQixPQUFPLFlBQVksQ0FBQyxLQUFhLEVBQUUsS0FBYSxFQUFFLElBQVk7QUFBSSxRQUNoRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDbEQsS0FBRztBQUNILENBQUM7QUFDRDtBQUFDO0FBQUk7QUFBa0M7QUFBa0U7QUNkekc7QUFBc0I7QUFDVCx5QkFBUyxJQUFJO0FBQzFCLHNCQUEyQixJQUFJO0FBQy9CLGtDQUFxQyxJQUFJO0FBQ3pDLGdDQUFpQyxJQUFJO0FBQ3JDO0FBQ0ksQ0FESDtBQUNEO0FBQUM7QUFBSTtBQUFrQztBQUFrRTtBQ1B6RztBQUFJO0FBRU87QUFRWDtBQUE0QjtBQUMzQjtBQUEyQjtBQUFRLElBQWxDLFlBQW9CLFFBQW1CO0FBQ3pDLFFBRHNCLGFBQVEsR0FBUixRQUFRLENBQVc7QUFBQyxLQUN2QztBQUNIO0FBQ087QUFBZ0M7QUFBNEI7QUFBMkI7QUFDdkU7QUFBbUI7QUFDMUMsSUFGUywwQkFBMEIsQ0FBQyxhQUFrQixFQUFFLFNBQWlCLEVBQUUsUUFBOEIsRUFDbkcsZ0JBQXlCO0FBQUk7QUFDcUIsUUFDcEQsSUFBSSxtQkFBbUIsQ0FBQyxVQUFVLEtBQUssSUFBSSxFQUFFO0FBQ2pELFlBQU0sT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUM1RixTQUFLO0FBQ0w7QUFDd0IsUUFDcEIsTUFBTSxRQUFRLEdBQWtCLElBQUksYUFBYSxFQUFFLENBQUM7QUFDeEQsUUFBSSxRQUFRLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztBQUNuQyxRQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxPQUFPLEVBQVMsQ0FBQztBQUMzQztBQUN3QixRQUFwQixNQUFNLGdCQUFnQixHQUEyQixDQUFDLEtBQVk7QUFBTyxZQUNuRSxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNsQyxTQUFLLENBQUM7QUFDTixRQUFJLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0FBQ2pHLFFBQ0ksUUFBUSxDQUFDLGdCQUFnQixHQUFHO0FBQVEsWUFDbEMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7QUFDdEcsU0FBSyxDQUFDO0FBQ04sUUFDSSxRQUFRLENBQUMsa0JBQWtCLEdBQUcsUUFBUSxDQUFDLE1BQU07QUFDakQsYUFBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQztBQUM3RCxjQUFVLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQztBQUNyRixjQUFVLEdBQUcsQ0FBQyxTQUFRLENBQUM7QUFDdkIsU0FBTztBQUNQLGFBQU8sU0FBUyxDQUFDLENBQUMsS0FBWTtBQUM5QixZQUFRLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN4QixTQUFPLENBQUMsQ0FBQztBQUNULFFBQ0ksT0FBTyxRQUFRLENBQUM7QUFDcEI7QUFFQztBQUFRO0FBQWdDO0FBQW1CO0FBQzNELElBRFEsbUJBQW1CLENBQUMsYUFBNEI7QUFBSSxRQUN6RCxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO0FBQzFFLFlBQU0sYUFBYSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3JELFlBQU0sYUFBYSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztBQUM5QyxTQUFLO0FBQ0wsUUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUM5RCxZQUFNLGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDdEMsWUFBTSxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztBQUNsQyxTQUFLO0FBQ0wsUUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO0FBQ3hFLFlBQU0sYUFBYSxDQUFDLGdCQUFnQixFQUFFLENBQUM7QUFDdkMsWUFBTSxhQUFhLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO0FBQzVDLFNBQUs7QUFDTDtBQUVDO0FBQVE7QUFBZ0M7QUFBNEI7QUFBMkI7QUFDaEU7QUFDL0I7QUFBUSxJQUZBLG1CQUFtQixDQUFDLGFBQWtCLEVBQUUsU0FBaUIsRUFBRSxRQUE4QixFQUM1RixnQkFBeUI7QUFBSTtBQUN6QixRQUFOLE1BQU0sUUFBUSxHQUFrQixJQUFJLGFBQWEsRUFBRSxDQUFDO0FBQ3hELFFBQUksUUFBUSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7QUFDbkMsUUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTyxFQUFTLENBQUM7QUFDM0M7QUFDd0IsUUFBcEIsTUFBTSxnQkFBZ0IsR0FBMkIsQ0FBQyxLQUFZO0FBQU8sWUFDbkUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbEMsU0FBSyxDQUFDO0FBQ04sUUFDSSxRQUFRLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ2pHLFFBQ0ksUUFBUSxDQUFDLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxNQUFNO0FBQ2pELGFBQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUM7QUFDN0QsY0FBWSxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUM7QUFDdkYsY0FBWSxHQUFHLENBQUMsU0FBUSxDQUFDO0FBQ3pCLFNBQU87QUFDUCxhQUFPLFNBQVMsQ0FBQyxDQUFDLEtBQVksT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDekQsUUFDSSxPQUFPLFFBQVEsQ0FBQztBQUNwQjtBQUVBLENBREM7QUFDRDtBQUFDO0FBQUk7QUFBa0M7QUFBa0U7QUN2RnpHO0FBQStCO0FBQVE7QUFBMEI7QUFBMkI7QUFDN0Q7QUFBUSxJQXNEckMsWUFBc0IsT0FBbUIsRUFBWSxRQUFtQixFQUFZLGtCQUFxQztBQUMzSCxRQUR3QixZQUFPLEdBQVAsT0FBTyxDQUFZO0FBQUMsUUFBVyxhQUFRLEdBQVIsUUFBUSxDQUFXO0FBQUMsUUFBVyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO0FBQUMseUJBOUM5RixDQUFDO0FBQy9CLDBCQUkrQixDQUFDO0FBQ2hDLDJCQUlpQyxLQUFLO0FBQ3RDLHlCQUkrQixLQUFLO0FBQ3BDLHNCQUkyQixDQUFDO0FBQzVCLHVCQUtvQixDQUFDO0FBQ3JCLDBCQUV1QixTQUFTO0FBQ2hDLG9CQUVpQixFQUFFO0FBQ25CLHNCQUVtQixFQUFFO0FBQ3JCLHNCQUVtQixFQUFFO0FBQ3JCLHFCQUVrQixFQUFFO0FBQ3BCLDhCQUU0QyxFQUFFO0FBQzlDLFFBRUksSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3RFLEtBQUc7QUFDSDtBQUNPO0FBQW1CO0FBQVEsSUFqRGhDLElBQUksUUFBUTtBQUFLLFFBQ2YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0FBQzFCLEtBQUc7QUFDSDtBQUNPO0FBQW1CO0FBQzFCLElBQUUsSUFBSSxTQUFTO0FBQUssUUFDaEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0FBQzNCLEtBQUc7QUFDSDtBQUNPO0FBQW1CO0FBQVEsSUFDaEMsSUFBSSxVQUFVO0FBQUssUUFDakIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0FBQzVCLEtBQUc7QUFDSDtBQUNPO0FBQW1CO0FBQVEsSUFDaEMsSUFBSSxRQUFRO0FBQUssUUFDZixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDMUIsS0FBRztBQUNIO0FBQ087QUFBbUI7QUFDdEIsSUFBRixJQUFJLEtBQUs7QUFBSyxRQUNaLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUN2QixLQUFHO0FBQ0g7QUFDTztBQUF1QjtBQUNiO0FBRWhCLElBc0JDLGFBQWEsQ0FBQyxJQUFhO0FBQUksUUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDNUIsUUFBSSxJQUFJLElBQUksRUFBRTtBQUNkLFlBQU0sSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7QUFDakMsU0FBSztBQUFDLGFBQUs7QUFDWCxZQUFNLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0FBQ2xDLFNBQUs7QUFDTCxLQUFHO0FBQ0g7QUFDTztBQUNFO0FBQVEsSUFEZixJQUFJO0FBQUssUUFDUCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNyQixLQUFHO0FBQ0g7QUFDTztBQUNFO0FBQVEsSUFEZixJQUFJO0FBQUssUUFDUCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7QUFDekIsWUFBTSxPQUFPO0FBQ2IsU0FBSztBQUNMLFFBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFDckIsS0FBRztBQUNIO0FBQ087QUFDTjtBQUFRLElBRFAsU0FBUztBQUFLLFFBQ1osSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO0FBQ3pCLFlBQU0sT0FBTyxLQUFLLENBQUM7QUFDbkIsU0FBSztBQUNMLFFBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLENBQUMsQ0FBQztBQUM5QixLQUFHO0FBQ0g7QUFDTztBQUEyQjtBQUN0QjtBQUFRLElBRGxCLFdBQVcsQ0FBQyxRQUFpQjtBQUFJLFFBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0FBQzlCLFFBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO0FBQ3hCLFlBQU0sSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7QUFDckIsWUFBTSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUN0QixTQUFLO0FBQUMsYUFBSztBQUNYLFlBQU0sSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDdkIsWUFBTSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUN2QixTQUFLO0FBQ0wsS0FBRztBQUNIO0FBQ087QUFBd0I7QUFDZjtBQUFRLElBRHRCLFFBQVEsQ0FBQyxLQUFhO0FBQUksUUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFDeEIsS0FBRztBQUNIO0FBQ087QUFBc0I7QUFBbUI7QUFBUSxJQUN0RCxXQUFXLENBQUMsR0FBVztBQUFJLFFBQ3pCLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUU7QUFDMUQsWUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDN0MsU0FBSztBQUNMLFFBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7QUFDekIsUUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDeEIsWUFBTSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQzNDLFNBQUs7QUFBQyxhQUFLO0FBQ1gsWUFBTSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ3pDLFNBQUs7QUFDTCxLQUFHO0FBQ0g7QUFDTztBQUFtQjtBQUFRLElBQ2hDLGtCQUFrQjtBQUFLO0FBQ04sUUFBZixNQUFNLEdBQUcsR0FBZSxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztBQUN6RCxRQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUN2QixZQUFNLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztBQUM1RCxTQUFLO0FBQUMsYUFBSztBQUNYLFlBQU0sSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQzVELFNBQUs7QUFDTCxLQUFHO0FBQ0g7QUFDTztBQUFzQjtBQUFtQjtBQUFRLElBQ3RELFlBQVksQ0FBQyxHQUFXO0FBQUksUUFDMUIsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRTtBQUMzRCxZQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUM3QyxTQUFLO0FBQ0wsUUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztBQUMxQixRQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUN4QixZQUFNLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDM0MsU0FBSztBQUFDLGFBQUs7QUFDWCxZQUFNLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDMUMsU0FBSztBQUNMLEtBQUc7QUFDSDtBQUNPO0FBQW1CO0FBQVEsSUFBaEMscUJBQXFCO0FBQUssUUFDeEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0FBQzlELEtBQUc7QUFDSDtBQUNPO0FBQTRCO0FBQTJCO0FBQ3ZEO0FBQW1CO0FBQVEsSUFEaEMsRUFBRSxDQUFDLFNBQWlCLEVBQUUsUUFBOEIsRUFBRSxnQkFBeUI7QUFBSTtBQUNsRSxRQUFmLE1BQU0sUUFBUSxHQUFrQixJQUFJLENBQUMsbUJBQW1CLENBQUMsbUJBQW1CLENBQzFFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUN6RSxRQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZDLEtBQUc7QUFDSDtBQUNPO0FBQTRCO0FBQTJCO0FBQzlEO0FBQW1CO0FBQVEsSUFEekIsU0FBUyxDQUFDLFNBQWlCLEVBQUUsUUFBOEIsRUFBRSxnQkFBeUI7QUFBSTtBQUN6RSxRQUFmLE1BQU0sUUFBUSxHQUFrQixJQUFJLENBQUMsbUJBQW1CLENBQUMsMEJBQTBCLENBQ2pGLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUN6RSxRQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZDLEtBQUc7QUFDSDtBQUNPO0FBQ0w7QUFBbUI7QUFBUSxJQUQzQixHQUFHLENBQUMsU0FBa0I7QUFBSTtBQUNULFFBQWYsSUFBSSxlQUFlLENBQWtCO0FBQ3pDO0FBQXlCLFFBQXJCLElBQUksaUJBQWlCLENBQWtCO0FBQzNDLFFBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsRUFBRTtBQUNuRCxZQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQW9CLEtBQUssS0FBSyxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsQ0FBQztBQUM1RyxZQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBb0IsS0FBSyxLQUFLLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxDQUFDO0FBQzlHLFNBQUs7QUFBQyxhQUFLO0FBQ1gsWUFBTSxlQUFlLEdBQUcsRUFBRSxDQUFDO0FBQzNCLFlBQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztBQUM5QyxTQUFLO0FBQ0wsUUFDSSxLQUFLLE1BQU0sUUFBUSxJQUFJLGlCQUFpQixFQUFFO0FBQzlDLFlBQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzdELFNBQUs7QUFDTCxRQUNJLElBQUksQ0FBQyxjQUFjLEdBQUcsZUFBZSxDQUFDO0FBQzFDLEtBQUc7QUFDSDtBQUNPO0FBQW1CO0FBQVEsSUFBeEIsY0FBYztBQUFLLFFBQ3pCLE9BQU8sV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUMxRztBQUVBO2tEQTdLQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLG9CQUFvQixjQUMvQjs7O1dBQ0s7QUFBQztBQUFtQjtBQUV2QixZQVZpQixVQUFVO0FBQUksWUFBRixTQUFTO0FBQUksWUFBVyxpQkFBaUI7QUFBRztBQUFHO0FBQ3hELHNCQWlDcEIsV0FBVyxTQUFDLGVBQWU7QUFDekIseUJBRUYsV0FBVyxTQUFDLGtCQUFrQjtBQUM1QixtQkFFRixXQUFXLFNBQUMsWUFBWTtBQUN0QixxQkFFRixXQUFXLFNBQUMsY0FBYztBQUN4QixxQkFFRixXQUFXLFNBQUMsY0FBYztBQUN4QixvQkFFRixXQUFXLFNBQUMsYUFBYTtBQUN4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUM7QUFBQztBQUFJO0FBRVc7QUFDYztBQ3JEckMsMkJBTW1DLFNBQVEsc0JBQXNCO0FBQ2pFO0FBQVE7QUFBMEI7QUFDZjtBQUduQjtBQUFRLElBOEJOLFlBQVksT0FBbUIsRUFBRSxRQUFtQixFQUFFLGtCQUFxQztBQUM3RixRQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixDQUFDLENBQUM7QUFDakQsc0JBbkNvQixLQUFLO0FBQ3pCLG9CQUVpQixFQUFFO0FBQ25CLHdCQUVxQixFQUFFO0FBQ3ZCLCtCQUU0QixFQUFFO0FBQzlCLHlCQUVzQixFQUFFO0FBQ3hCLDhCQUUyQixFQUFFO0FBQzdCLDRCQUV5QixFQUFFO0FBQzNCLDZCQUUwQixFQUFFO0FBQzVCLDRCQUV5QixFQUFFO0FBQzNCLDRCQUV5QixFQUFFO0FBQzNCLEtBT0c7QUFDSDtBQUNNO0FBQW1CO0FBQVEsSUFSL0IsS0FBSztBQUFLLFFBQ1IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDdkMsS0FBRztBQUNIO2lEQXJDQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLG1CQUFtQixjQUM5Qjs7OzswREFDSztBQUFDO0FBQW1CO0FBQ3JCLFlBUGUsVUFBVTtBQUFJLFlBQUYsU0FBUztBQUFJLFlBQVcsaUJBQWlCO0FBQUc7QUFBRztBQUN6RCxxQkFNbkIsV0FBVyxTQUFDLHlCQUF5QjtBQUNuQyxtQkFFRixXQUFXLFNBQUMsV0FBVztBQUNyQix1QkFFRixXQUFXLFNBQUMsZUFBZTtBQUN6Qiw4QkFFRixXQUFXLFNBQUMsdUJBQXVCO0FBQ2pDLHdCQUVGLFdBQVcsU0FBQyxpQkFBaUI7QUFDM0IsNkJBRUYsV0FBVyxTQUFDLHNCQUFzQjtBQUNoQywyQkFFRixXQUFXLFNBQUMsb0JBQW9CO0FBQzlCLDRCQUVGLFdBQVcsU0FBQyxxQkFBcUI7QUFDL0IsMkJBRUYsV0FBVyxTQUFDLG9CQUFvQjtBQUM5QiwyQkFFRixXQUFXLFNBQUMsb0JBQW9CO0FBQy9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQztBQUFDO0FBQUk7QUFFSTtBQUlHO0FDekNuQiwwQkFPa0MsU0FBUSxzQkFBc0I7QUFDaEU7QUFBUTtBQUNQO0FBQ0c7QUFHUTtBQUFRLElBQWxCLFlBQVksT0FBbUIsRUFBRSxRQUFtQixFQUFFLGtCQUFxQztBQUM3RixRQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixDQUFDLENBQUM7QUFDakQsc0JBUDJCLElBQUk7QUFDL0IsS0FNRztBQUNIO0FBQ087QUFBbUI7QUFDMUIsSUFURSxJQUFJLEtBQUs7QUFBSyxRQUNaLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUN2QixLQUFHO0FBQ0g7QUFDTztBQUF3QjtBQUFtQjtBQUFRLElBSXhELFFBQVEsQ0FBQyxLQUFhO0FBQUk7QUFDVCxRQUFmLElBQUksb0JBQW9CLEdBQVksS0FBSyxDQUFDO0FBQzlDLFFBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO0FBQ3hCLGFBQVMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDbEQsZ0JBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLE1BQU07QUFDM0MsaUJBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUMzRCxZQUFNLG9CQUFvQixHQUFHLElBQUksQ0FBQztBQUNsQyxTQUFLO0FBQ0wsUUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUN4QixRQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7QUFDakQ7QUFFRyxRQUFDLElBQUksb0JBQW9CLEVBQUU7QUFDOUIsWUFBTSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztBQUNoQyxTQUFLO0FBQ0wsS0FBRztBQUNIO2dEQS9CQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLGtCQUFrQixjQUM3Qjs2S0FDSztBQUFDO0FBQW1CO0FBQ3JCLFlBUmtDLFVBQVU7QUFBSSxZQUFGLFNBQVM7QUFBSSxZQUF2RCxpQkFBaUI7QUFBRzs7Ozs7OzJJQUFFO0FBQUM7QUFBQztBQUFJO0FBQWtDO0FBQ25CO0FDRHBEO0FBQ0k7QUFFSCx3QkFzRHFCLEtBQUs7QUFDM0IscUJBQWUsRUFBRTtBQUNqQix1QkFBb0IsSUFBSTtBQUN4QixnQ0FBNkIsSUFBSTtBQUNqQyxxQkFBa0IsSUFBSTtBQUN0Qiw0QkFBeUIsSUFBSTtBQUM3QixxQ0FBa0MsSUFBSTtBQUN0QyxzQkFBbUIsSUFBSTtBQUN2QjtBQUVHLENBRkY7QUFFRDtBQUNBO0FBQW9CLHNCQUFBLEtBQUs7QUFDekIscUJBQWtCLENBQUM7QUFDbkIsMEJBQXVCLENBQUM7QUFDeEIsd0JBQXFCLENBQUM7QUFDdEIsd0JBQXFCLENBQUM7QUFDdEIseUJBQXNCLENBQUM7QUFDdkI7QUFFRyxDQUZGO0FBRUQ7QUFDQTtBQUFRO0FBQ0k7QUFFRDtBQUFtQjtBQUFRLElBQTdCLE9BQU8sT0FBTyxDQUFDLENBQWUsRUFBRSxDQUFlO0FBQUksUUFDeEQsSUFBSSxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLElBQUksV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQzlFLFlBQU0sT0FBTyxLQUFLLENBQUM7QUFDbkIsU0FBSztBQUNMLFFBQUksSUFBSSxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEtBQUssV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQy9FLFlBQU0sT0FBTyxLQUFLLENBQUM7QUFDbkIsU0FBSztBQUNMLFFBQUksT0FBTyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLFNBQVMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDO0FBQzlEO0FBRUEsQ0FEQztBQUVELGlCQUFrQixTQUFRLFdBQVc7QUFDckM7QUFBUTtBQUFxQjtBQUFxQjtBQUFtQjtBQUNoRSxJQUdJLE9BQU8sT0FBTyxDQUFDLENBQWUsRUFBRSxDQUFlO0FBQUksUUFDeEQsSUFBSSxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLElBQUksV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQzlFLFlBQU0sT0FBTyxLQUFLLENBQUM7QUFDbkIsU0FBSztBQUNMLFFBQUksSUFBSSxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEtBQUssV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQy9FLFlBQU0sT0FBTyxLQUFLLENBQUM7QUFDbkIsU0FBSztBQUNMLFFBQUksT0FBTyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxLQUFLO0FBQzlCLFlBQVcsQ0FBQyxDQUFDLFNBQVMsS0FBSyxDQUFDLENBQUMsU0FBUztBQUN0QyxZQUFXLENBQUMsQ0FBQyxXQUFXLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQztBQUMzQztBQUVBLENBREM7QUFDRDtBQVNBLE1BQU0saUNBQWlDLEdBQVE7QUFDL0MsSUFBRSxPQUFPLEVBQUUsaUJBQWlCO0FBQzVCO0FBQ0UsSUFBQSxXQUFXLEVBQUUsVUFBVSxDQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2hELElBQUUsS0FBSyxFQUFFLElBQUk7QUFDYixDQUFDLENBQUM7QUFnREY7QUFBd0I7QUFBUTtBQUEyQjtBQUE2QjtBQUN2RTtBQUF1QjtBQUFRLGdCQThMbkIsUUFBbUIsRUFDMUIsWUFDQSxvQkFDQTtBQUFRLFFBSEQsYUFBUSxHQUFSLFFBQVEsQ0FBVztBQUFDLFFBQzNCLGVBQVUsR0FBVixVQUFVO0FBQUUsUUFDWix1QkFBa0IsR0FBbEIsa0JBQWtCO0FBQUUsUUFDcEIsU0FBSSxHQUFKLElBQUk7QUFBRTtBQUtWLHFCQXBNTyxJQUFJO0FBQzdCO0FBQ00sMkJBQ3VDLElBQUksWUFBWSxFQUFFO0FBQy9EO0FBRUsseUJBQ3dCLElBQUk7QUFDakM7QUFDTSwrQkFDMkMsSUFBSSxZQUFZLEVBQUU7QUFDbkU7QUFFSztBQUVMLHVCQUE0QixJQUFJLE9BQU8sRUFBRTtBQUN6QztBQUVLLCtCQUNtRCxJQUFJLFlBQVksRUFBRTtBQUMxRTtBQUVLLDBCQUM4QyxJQUFJLFlBQVksRUFBRTtBQUNyRTtBQUVLLDZCQUNpRCxJQUFJLFlBQVksRUFBRTtBQUN4RSwwQkEyQmdDLEtBQUs7QUFDckMsdUNBRytELElBQUksT0FBTyxFQUFvQjtBQUM5Riw0Q0FBdUQsSUFBSTtBQUMzRCx3Q0FHaUUsSUFBSSxPQUFPLEVBQXFCO0FBQ2pHLDZDQUF3RCxJQUFJO0FBQzVELDRCQUVpQyxJQUFJO0FBQ3JDLDZCQUNrQyxJQUFJO0FBQ3RDLDJCQUNpQyxJQUFJLE9BQU8sRUFBRTtBQUM5QyxtQ0FFd0MsQ0FBQztBQUN6QyxpQ0FDc0MsQ0FBQztBQUN2QyxzQ0FFZ0QsSUFBSTtBQUNwRCxtQ0FDNkMsSUFBSTtBQUNqRCw0QkFDa0MsS0FBSztBQUN2Qyx1QkFDNEIsSUFBSTtBQUNoQyx3QkFDK0IsSUFBSSxRQUFRLEVBQUU7QUFDN0M7QUFHUywwQ0FzRHNDLEtBQUs7QUFDcEQseUNBQzhDLEtBQUs7QUFDbkQsNENBQ2lELEtBQUs7QUFDdEQseUNBQzZDLElBQUk7QUFDakQsd0JBRXlCLEVBQUU7QUFDM0IsK0JBQWdDLEVBQUU7QUFDbEMsK0JBQWdDLEVBQUU7QUFDbEMsdUNBQTRDLEtBQUs7QUFDakQsMENBQStDLEtBQUs7QUFDcEQscUNBQTBDLEtBQUs7QUFDL0MsaUNBUXVDLEtBQUs7QUFDNUMscUJBQ3lCLEVBQUU7QUFDM0IsbUNBRXFELElBQUk7QUFDekQsbUNBQStDLElBQUk7QUFDbkQsa0NBQThDLElBQUk7QUFDbEQsc0JBQzRCLEtBQUs7QUFDakMsOEJBRTJDLElBQUk7QUFDL0MsaUNBRW9ELElBQUk7QUFDeEQsZ0NBQW1ELElBQUk7QUFDdkQsUUFNSSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdEU7QUFFQztBQUFRO0FBQ1U7QUFDVDtBQUFRLElBdEtoQixJQUFhLGFBQWEsQ0FBQyxhQUFpQztBQUM5RCxRQUFJLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0FBQ3BDLFFBQ0ksSUFBSSxDQUFDLHlCQUF5QixHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUM7QUFDN0QsWUFBTSxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsdUNBQXVDLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZFLFNBQUssQ0FBQyxDQUFDO0FBQ1AsS0FBRztBQUNIO0FBQ087QUFBK0I7QUFDdEI7QUFBUSxJQUN0QixJQUFhLFlBQVksQ0FBQyxZQUFnQztBQUM1RCxRQUFJLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0FBQ25DLFFBQ0ksSUFBSSxDQUFDLHdCQUF3QixHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUF3QjtBQUNwRixZQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDckMsU0FBSyxDQUFDLENBQUM7QUFDUCxLQUFHO0FBQ0g7QUFDTztBQUFtQjtBQUFRLFFBQ3JCLEtBQUs7QUFBSyxRQUNuQixPQUFPLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDeEc7QUFFQztBQUFRO0FBQW1CO0FBQVEsUUE2R3ZCLFNBQVM7QUFBSyxRQUN2QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDO0FBQ3RDO0FBRUM7QUFBUTtBQUFtQjtBQUFRLElBNkIzQixRQUFRO0FBQUssUUFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0FBQ3JDLFFBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNsRDtBQUVHO0FBQ0k7QUFDSSxRQUFQLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0FBQy9CLFFBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7QUFDL0I7QUFFQztBQUFRO0FBQW1CO0FBQ3JCLElBQUUsZUFBZTtBQUFLLFFBQ3pCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUN4QixRQUNJLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDaEYsUUFBSSxJQUFJLENBQUMsaUNBQWlDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ2xGO0FBRUcsUUFBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztBQUNsQyxRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvRCxRQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNwQixZQUFNLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN0RSxTQUFLO0FBQUMsYUFBSztBQUNYLFlBQU0sSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7QUFDaEMsU0FBSztBQUNMLFFBQ0ksSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7QUFDL0IsUUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztBQUMvQixRQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0FBQy9CLFFBQUksSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7QUFDbkMsUUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztBQUM1QixRQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUMzQixRQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0FBQzVCLFFBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3ZCLFFBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7QUFDaEMsUUFDSSxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztBQUNuQyxRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQzNCO0FBRUcsUUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFO0FBQ2hDLFlBQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxDQUFDO0FBQzlDLFNBQUs7QUFDTDtBQUVDO0FBQVE7QUFDQztBQUFtQjtBQUFRLElBQTVCLFdBQVcsQ0FBQyxPQUFzQjtBQUFJO0FBQ2YsUUFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLFlBQVMsRUFBRTtBQUN6RCxZQUFNLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUM3QixTQUFLO0FBQ0w7QUFFRyxRQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsT0FBTyxVQUFPO0FBQ3JELFlBQVEsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsT0FBTyxjQUFXLEVBQUU7QUFDM0QsWUFBTSxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDO0FBQ3hDLGdCQUFRLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztBQUN6QixnQkFBUSxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7QUFDakMsZ0JBQVEsV0FBVyxFQUFFLEtBQUs7QUFDMUIsZ0JBQVEsY0FBYyxFQUFFLEtBQUs7QUFDN0IsYUFBTyxDQUFDLENBQUM7QUFDVCxTQUFLO0FBQ0w7QUFFQztBQUFRO0FBQ047QUFBUSxJQUFGLFdBQVc7QUFBSyxRQUNyQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDeEIsUUFDSSxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztBQUNyQyxRQUFJLElBQUksQ0FBQyxrQ0FBa0MsRUFBRSxDQUFDO0FBQzlDLFFBQUksSUFBSSxDQUFDLG1DQUFtQyxFQUFFLENBQUM7QUFDL0MsUUFBSSxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztBQUNwQyxRQUFJLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0FBQ25DO0FBRUM7QUFBUTtBQUFzQjtBQUNqQjtBQUFRLElBQWIsVUFBVSxDQUFDLEdBQVE7QUFBSSxRQUM1QixJQUFJLEdBQUcsWUFBWSxLQUFLLEVBQUU7QUFDOUIsWUFBTSxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxQixZQUFNLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlCLFNBQUs7QUFBQyxhQUFLO0FBQ1gsWUFBTSxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUN2QixTQUFLO0FBQ0w7QUFFRyxRQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUM7QUFDdEMsWUFBTSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7QUFDdkIsWUFBTSxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7QUFDL0IsWUFBTSxXQUFXLEVBQUUsS0FBSztBQUN4QixZQUFNLGNBQWMsRUFBRSxLQUFLO0FBQzNCLFNBQUssQ0FBQyxDQUFDO0FBQ1A7QUFFQztBQUFRO0FBQ0Q7QUFBbUI7QUFBUSxJQUExQixnQkFBZ0IsQ0FBQyxnQkFBcUI7QUFBSSxRQUMvQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7QUFDN0M7QUFFQztBQUFRO0FBQ0E7QUFBbUI7QUFBUSxJQUEzQixpQkFBaUIsQ0FBQyxpQkFBc0I7QUFBSSxRQUNqRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7QUFDL0M7QUFFQztBQUFRO0FBQ1A7QUFBbUI7QUFBUSxJQUFwQixnQkFBZ0IsQ0FBQyxVQUFtQjtBQUFJLFFBQzdDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztBQUMzQyxRQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0FBQy9CO0FBRUM7QUFBUTtBQUF3QjtBQUMxQjtBQUFRLElBQU4sUUFBUSxDQUFDLEtBQVU7QUFBSSxRQUM1QixJQUFJLENBQUMsdUNBQXVDLEVBQUUsQ0FBQztBQUNuRCxLQUFHO0FBQ0g7QUFDTztBQUE0QjtBQUFtQjtBQUFRLElBQXBELGdDQUFnQyxDQUFDLFFBQWlCO0FBQUksUUFDNUQsSUFBSSxDQUFDLDRCQUE0QixHQUFHLElBQUksQ0FBQyx1QkFBdUI7QUFDcEUsYUFBSyxJQUFJLENBQ0gsb0JBQW9CLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQztBQUM5QztBQUNFO0FBQ0UsUUFBQyxNQUFNLENBQUMsQ0FBQyxXQUE2QixLQUFLLENBQUMsV0FBVyxDQUFDLFdBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsRUFDbEcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUM7QUFDL0MsY0FBWSxZQUFZLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDO0FBQy9FLGNBQVksR0FBRyxDQUFDLFNBQVEsQ0FBQztBQUN6QixTQUFLO0FBQ0wsYUFBSyxTQUFTLENBQUMsQ0FBQyxXQUE2QixLQUFLLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0FBQzNGO0FBRUM7QUFBUTtBQUE0QjtBQUFtQjtBQUFRLElBQXRELGlDQUFpQyxDQUFDLFFBQWlCO0FBQUksUUFDN0QsSUFBSSxDQUFDLDZCQUE2QixHQUFHLElBQUksQ0FBQyx3QkFBd0I7QUFDdEUsYUFBTyxJQUFJLENBQ0gsb0JBQW9CLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUN6QyxDQUFDLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQztBQUNqRCxjQUFZLFlBQVksQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUM7QUFDL0UsY0FBWSxHQUFHLENBQUMsU0FBUSxDQUFDO0FBQ3pCLFNBQU87QUFDUCxhQUFPLFNBQVMsQ0FBQyxDQUFDLFdBQThCLEtBQUssSUFBSSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7QUFDakc7QUFFQztBQUFRO0FBQW1CO0FBQVEsSUFBMUIsdUJBQXVCO0FBQUssUUFDbEMsSUFBSSxtQkFBbUIsQ0FBQyx5QkFBeUIsRUFBRSxFQUFFO0FBQ3pELFlBQU0sSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGNBQWMsQ0FBQyxNQUFZLElBQUksQ0FBQyx1Q0FBdUMsRUFBRSxDQUFDLENBQUM7QUFDM0csWUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ2pFLFNBQUs7QUFDTDtBQUVDO0FBQVE7QUFBbUI7QUFBUSxJQUExQix5QkFBeUI7QUFBSyxRQUNwQyxJQUFJLG1CQUFtQixDQUFDLHlCQUF5QixFQUFFLElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxJQUFJLEVBQUU7QUFDekYsWUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3ZDLFlBQU0sSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7QUFDakMsU0FBSztBQUNMO0FBRUM7QUFBUTtBQUFtQjtBQUFRLElBQTFCLGlCQUFpQjtBQUFLLFFBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7QUFDbEUsWUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDN0UsWUFBTSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO0FBQ3RDLFNBQUs7QUFDTDtBQUVDO0FBQVE7QUFBbUI7QUFBUSxJQUExQixnQkFBZ0I7QUFBSyxRQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO0FBQ2pFLFlBQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzVFLFlBQU0sSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztBQUNyQyxTQUFLO0FBQ0w7QUFFQztBQUFRO0FBQW1CO0FBQVEsSUFBMUIsa0NBQWtDO0FBQUssUUFDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsRUFBRTtBQUMzRSxZQUFNLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUN0RCxZQUFNLElBQUksQ0FBQyw0QkFBNEIsR0FBRyxJQUFJLENBQUM7QUFDL0MsU0FBSztBQUNMO0FBRUM7QUFBUTtBQUFtQjtBQUFRLElBQTFCLG1DQUFtQztBQUFLLFFBQzlDLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLEVBQUU7QUFDNUUsWUFBTSxJQUFJLENBQUMsNkJBQTZCLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDdkQsWUFBTSxJQUFJLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDO0FBQ2hELFNBQUs7QUFDTDtBQUVDO0FBQVE7QUFBbUI7QUFBUSxJQUExQix3QkFBd0I7QUFBSyxRQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFO0FBQ3hFLFlBQU0sSUFBSSxDQUFDLHlCQUF5QixDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ25ELFlBQU0sSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQztBQUM1QyxTQUFLO0FBQ0w7QUFFQztBQUFRO0FBQW1CO0FBQVEsSUFBMUIsdUJBQXVCO0FBQUssUUFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsRUFBRTtBQUN2RSxZQUFNLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNsRCxZQUFNLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUM7QUFDM0MsU0FBSztBQUNMO0FBRUM7QUFBUTtBQUE4QjtBQUFtQjtBQUFRLElBQXhELGlCQUFpQixDQUFDLFdBQXdCO0FBQUksUUFDcEQsSUFBSSxXQUFXLEtBQUssV0FBVyxDQUFDLEdBQUcsRUFBRTtBQUN6QyxZQUFNLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0FBQ25DLFNBQUs7QUFBQyxhQUFLLElBQUksV0FBVyxLQUFLLFdBQVcsQ0FBQyxHQUFHLEVBQUU7QUFDaEQsWUFBTSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztBQUNuQyxTQUFLO0FBQ0wsUUFBSSxPQUFPLElBQUksQ0FBQztBQUNoQjtBQUVDO0FBQVE7QUFBbUI7QUFBUSxJQUExQix1QkFBdUI7QUFBSyxRQUNsQyxJQUFJLElBQUksQ0FBQyxzQkFBc0IsS0FBSyxXQUFXLENBQUMsR0FBRyxFQUFFO0FBQ3pELFlBQU0sT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0FBQy9CLFNBQUs7QUFBQyxhQUFLLElBQUksSUFBSSxDQUFDLHNCQUFzQixLQUFLLFdBQVcsQ0FBQyxHQUFHLEVBQUU7QUFDaEUsWUFBTSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7QUFDaEMsU0FBSztBQUNMLFFBQUksT0FBTyxJQUFJLENBQUM7QUFDaEI7QUFFQztBQUFRO0FBQTZCO0FBQW1CO0FBQ3RELElBRE8scUJBQXFCLENBQUMsVUFBa0I7QUFBSSxRQUNsRCxJQUFJLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsRUFBRTtBQUNuRCxZQUFNLE9BQU8sR0FBRyxDQUFDO0FBQ2pCLFNBQUs7QUFDTCxRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsc0JBQXNCLEVBQUU7QUFDakgsWUFBTSxPQUFPLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNqRixTQUFLO0FBQ0wsUUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ3ZCO0FBRUM7QUFBUTtBQUE0QjtBQUFtQjtBQUNyRCxJQURPLHFCQUFxQixDQUFDLFNBQWlCO0FBQUksUUFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsRUFBRTtBQUNqSCxZQUFNLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMxQyxTQUFLO0FBQ0wsUUFBSSxPQUFPLFNBQVMsQ0FBQztBQUNyQjtBQUVDO0FBQVE7QUFBOEI7QUFDbkM7QUFBUSxJQURGLFlBQVksQ0FBQyxXQUFtQjtBQUFJO0FBQzdCLFFBQWIsTUFBTSxJQUFJLEdBQXlCLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ2hGLFFBQUksT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBQ3JFO0FBRUM7QUFBUTtBQUFtQjtBQUM1QixJQURVLGVBQWU7QUFBSyxRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDL0QsUUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDcEIsWUFBTSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDdEUsU0FBSztBQUNMLFFBQ0ksSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQztBQUN2QyxZQUFNLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztBQUN2QixZQUFNLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztBQUMvQixZQUFNLGtCQUFrQixFQUFFLElBQUk7QUFDOUIsWUFBTSxXQUFXLEVBQUUsS0FBSztBQUN4QixTQUFLLENBQUMsQ0FBQztBQUNQO0FBRUc7QUFDSTtBQUNJO0FBQ0ksUUFBWCxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDO0FBQ3RDLFlBQU0sS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO0FBQ3ZCLFlBQU0sU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO0FBQy9CLFlBQU0sV0FBVyxFQUFFLEtBQUs7QUFDeEIsWUFBTSxjQUFjLEVBQUUsSUFBSTtBQUMxQixTQUFLLENBQUMsQ0FBQztBQUNQO0FBRUM7QUFBUTtBQUE4QjtBQUN4QjtBQUFRLElBQWIscUJBQXFCLENBQUMsV0FBNkI7QUFBSTtBQUM5QyxRQUFmLE1BQU0scUJBQXFCLEdBQWdCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN0RjtBQUN3QixRQUNwQixNQUFNLG1CQUFtQixHQUFZLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUscUJBQXFCLENBQUMsQ0FBQztBQUNsRyxRQUFJLElBQUksbUJBQW1CLEVBQUU7QUFDN0IsWUFBTSxJQUFJLENBQUMsS0FBSyxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQztBQUMvQyxZQUFNLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUMsU0FBUyxDQUFDO0FBQ3ZELFNBQUs7QUFDTCxRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hGLFFBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ3BCLFlBQU0sSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdkYsU0FBSztBQUFDLGFBQUs7QUFDWCxZQUFNLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0FBQ2hDLFNBQUs7QUFDTCxRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUNsRSxRQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNwQixZQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0FBQ3RFLFNBQUs7QUFDTCxRQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0FBQzlCLFFBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7QUFDNUIsUUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztBQUNoQyxRQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNwQixZQUFNLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0FBQ2pDLFNBQUs7QUFDTDtBQUVHO0FBQ0ksUUFBSCxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDO0FBQ3ZDLFlBQU0sS0FBSyxFQUFFLHFCQUFxQixDQUFDLEtBQUs7QUFDeEMsWUFBTSxTQUFTLEVBQUUscUJBQXFCLENBQUMsU0FBUztBQUNoRCxZQUFNLFdBQVcsRUFBRSxtQkFBbUI7QUFDdEMsWUFBTSxrQkFBa0IsRUFBRSxLQUFLO0FBQy9CLFNBQUssQ0FBQyxDQUFDO0FBQ1A7QUFFQztBQUFRO0FBQThCO0FBQW1CO0FBQVEsSUFDeEQsd0JBQXdCLENBQUMsV0FBOEI7QUFBSTtBQUNsRCxRQUFmLE1BQU0sV0FBVyxHQUFlO0FBQVEsWUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9DLFlBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ3RCLGdCQUFRLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN6RCxhQUFPO0FBQ1AsWUFDTSxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO0FBQ2pFLGdCQUFRLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtBQUN4QixvQkFBVSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQzVFLGlCQUFTO0FBQUMscUJBQUs7QUFDZixvQkFBVSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25ELGlCQUFTO0FBQ1QsYUFBTztBQUNQLFlBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRTtBQUNsRSxnQkFBUSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDeEIsb0JBQVUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUM3RSxpQkFBUztBQUFDLHFCQUFLO0FBQ2Ysb0JBQVUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwRCxpQkFBUztBQUNULGFBQU87QUFDUCxTQUFLLENBQUM7QUFDTixRQUNJLElBQUksV0FBVyxDQUFDLGtCQUFrQixFQUFFO0FBQ3hDO0FBQ00sWUFBQSxXQUFXLEVBQUUsQ0FBQztBQUNwQixZQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7QUFDcEQsU0FBSztBQUFDLGFBQUs7QUFDWDtBQUNNO0FBQ00sWUFBTixVQUFVLENBQUMsUUFBUSxXQUFXLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMzQyxTQUFLO0FBQ0w7QUFFQztBQUFRO0FBQXdCO0FBQW1CO0FBQVEsSUFBbEQsb0JBQW9CLENBQUMsS0FBa0I7QUFBSTtBQUN6QyxRQUFSLE1BQU0sZUFBZSxHQUFnQixJQUFJLFdBQVcsRUFBRSxDQUFDO0FBQzNELFFBQUksZUFBZSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO0FBQ3hDLFFBQUksZUFBZSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO0FBQ2hELFFBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFO0FBQ3JFO0FBQ007QUFDTSxZQUFOLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRTtBQUM5QztBQUFpQyxnQkFBekIsTUFBTSxVQUFVLEdBQVcsV0FBVyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDakgsZ0JBQVEsZUFBZSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDOUUsZ0JBQ1EsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ3hCO0FBQXFDLG9CQUEzQixNQUFNLGNBQWMsR0FBVyxXQUFXLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUMzSCxvQkFBVSxlQUFlLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUN4RixpQkFBUztBQUNULGFBQU87QUFDUCxZQUNNLE9BQU8sZUFBZSxDQUFDO0FBQzdCLFNBQUs7QUFDTCxRQUNJLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUU7QUFDdEMsWUFBTSxlQUFlLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BFLFlBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ3RCLGdCQUFRLGVBQWUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDOUUsYUFBTztBQUNQLFNBQUs7QUFDTCxRQUNJLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUU7QUFDdkMsWUFBTSxlQUFlLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVILFlBQ00sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ3RCLGdCQUFRLGVBQWUsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdEksYUFBTztBQUNQO0FBRUssWUFBQyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsU0FBUyxFQUFFO0FBQ3ZEO0FBQ1E7QUFDUSxnQkFBUixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFO0FBQzFDLG9CQUFVLGVBQWUsQ0FBQyxLQUFLLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBQztBQUM1RCxpQkFBUztBQUFDLHFCQUFLO0FBQ2Y7QUFBcUMsb0JBQTNCLE1BQU0sU0FBUyxHQUFXLEtBQUssQ0FBQyxLQUFLLENBQUM7QUFDaEQsb0JBQVUsZUFBZSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO0FBQ2xELG9CQUFVLGVBQWUsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQ2hELGlCQUFTO0FBQ1QsYUFBTztBQUNQLFNBQUs7QUFDTCxRQUNJLE9BQU8sZUFBZSxDQUFDO0FBQzNCO0FBRUM7QUFBUTtBQUFtQjtBQUFRLElBQTFCLHNCQUFzQjtBQUFLO0FBQ2xCLFFBQWYsTUFBTSxtQkFBbUIsR0FBZ0I7QUFDN0MsWUFBTSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7QUFDdkIsWUFBTSxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7QUFDL0IsU0FBSyxDQUFDO0FBQ047QUFBeUIsUUFBckIsTUFBTSxxQkFBcUIsR0FBZ0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDOUYsUUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxtQkFBbUIsQ0FBQyxFQUFFO0FBQzFFLFlBQU0sSUFBSSxDQUFDLEtBQUssR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUM7QUFDL0MsWUFBTSxJQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDLFNBQVMsQ0FBQztBQUN2RCxZQUNNLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUM7QUFDekMsZ0JBQVEsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO0FBQ3pCLGdCQUFRLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztBQUNqQyxnQkFBUSxXQUFXLEVBQUUsSUFBSTtBQUN6QixnQkFBUSxrQkFBa0IsRUFBRSxLQUFLO0FBQ2pDLGFBQU8sQ0FBQyxDQUFDO0FBQ1QsU0FBSztBQUNMO0FBRUM7QUFBUTtBQUFtQjtBQUM1QixJQURVLGVBQWU7QUFBSyxRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtBQUMxQixZQUFNLE9BQU87QUFDYixTQUFLO0FBQ0w7QUFDd0IsUUFBcEIsTUFBTSwyQkFBMkIsR0FBVyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDO0FBQ3JGO0FBQXlCLFFBQXJCLE1BQU0sNEJBQTRCLEdBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUN2RjtBQUN3QixRQUFwQixNQUFNLHVDQUF1QyxHQUFjLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDekgsUUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDeEI7QUFDd0IsUUFBcEIsTUFBTSxrQ0FBa0MsR0FBYyxJQUFJLENBQUMsa0NBQWtDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3BIO0FBQXlCLFFBRXJCLE1BQU0sWUFBWSxHQUFZLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyx1Q0FBdUMsRUFBRSxrQ0FBa0MsQ0FBQyxDQUFDO0FBQzNJLFFBQ0ksSUFBSSwyQkFBMkIsS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixFQUFFO0FBQzlFLFlBQU0sSUFBSSxDQUFDLGtDQUFrQyxFQUFFLENBQUM7QUFDaEQsWUFBTSxJQUFJLENBQUMsZ0NBQWdDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ2xGLFNBQUs7QUFDTCxRQUNJLElBQUksNEJBQTRCLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsRUFBRTtBQUNoRixZQUFNLElBQUksQ0FBQyxrQ0FBa0MsRUFBRSxDQUFDO0FBQ2hELFlBQU0sSUFBSSxDQUFDLGdDQUFnQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUNuRixTQUFLO0FBQ0w7QUFFRyxRQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0FBQ2xDLFFBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9ELFFBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ3BCLFlBQU0sSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3RFLFNBQUs7QUFBQyxhQUFLO0FBQ1gsWUFBTSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztBQUNoQyxTQUFLO0FBQ0wsUUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ25DO0FBRUM7QUFBUTtBQUFtQjtBQUFRLElBQzFCLFlBQVk7QUFBSyxRQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7QUFDckMsUUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2xELFFBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQztBQUNwRixRQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDO0FBQzVGLFFBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFFO0FBQzdDLFlBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO0FBQzdDLFNBQUs7QUFDTCxRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUztBQUMzRCxZQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZTtBQUN0QyxZQUFNLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbEUsUUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUztBQUNsQyxhQUFRLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFO0FBQ25JLFlBQU0sSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztBQUNwQyxTQUFLO0FBQ0wsUUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCO0FBQ3pFLFlBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUI7QUFDMUMsWUFBTSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFDakYsUUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUU7QUFDckUsWUFBTSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztBQUNwQyxTQUFLO0FBQUMsYUFBSztBQUNYLFlBQU0sSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7QUFDbkMsU0FBSztBQUNMLFFBQ0ksSUFBSSxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsRUFBRTtBQUN2RSxZQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxHQUFHLENBQUMsUUFBZ0IsRUFBRSxRQUFnQjtBQUFPLGdCQUN6RSxPQUFPLFFBQVEsR0FBRyxLQUFLLEdBQUcsUUFBUSxDQUFDO0FBQzNDLGFBQU8sQ0FBQztBQUNSLFNBQUs7QUFDTCxRQUNJLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO0FBQ25FLFlBQU0sTUFBTSxLQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQztBQUMvRCxTQUFLO0FBQ0w7QUFFQztBQUFRO0FBQW1CO0FBQVEsSUFBMUIsc0JBQXNCO0FBQUssUUFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQy9CLFFBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNuRSxRQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztBQUM5QixRQUNJLElBQUksV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUU7QUFDbkUsWUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxDQUFDLFVBQWtCO0FBQU8sZ0JBQ3JELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsRUFBRTtBQUNyRCxvQkFBVSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDdkQsaUJBQVM7QUFDVCxnQkFBUSxPQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNsQyxhQUFPLENBQUM7QUFDUixTQUFLO0FBQ0w7QUFFQztBQUFRO0FBQW1CO0FBQVEsSUFBMUIscUJBQXFCO0FBQUssUUFDaEMsSUFBSSxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUM5RCxZQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztBQUNoQyxTQUFLO0FBQUMsYUFBSztBQUNYLFlBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztBQUNyRCxZQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO0FBQ3RDLGdCQUFRLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztBQUNsQyxhQUFNO0FBQ04sU0FBSztBQUNMLFFBQ0ksSUFBSSxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7QUFDNUQsWUFBUSxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUMvRCxZQUFNLE1BQU0sS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7QUFDN0QsU0FBSztBQUNMLFFBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztBQUNuRCxRQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7QUFDckQsUUFDSSxJQUFJLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFFO0FBQ25FLFlBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFhLEtBQWEsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzVFLFNBQUs7QUFDTDtBQUVDO0FBQVE7QUFDYTtBQUFtQjtBQUFRLElBQXZDLFdBQVcsQ0FBQyxlQUF3QixJQUFJO0FBQUksUUFDbEQsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7QUFDL0IsUUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztBQUM1QixRQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUMzQixRQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0FBQzVCLFFBQUksSUFBSSxZQUFZLEVBQUU7QUFDdEIsWUFBTSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDMUIsWUFBTSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztBQUNsQyxTQUFLO0FBQ0wsUUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztBQUMvQixRQUFJLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0FBQ25DLFFBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7QUFDbEM7QUFFQztBQUFRO0FBQThCO0FBQ3RCO0FBQVEsSUFBZixZQUFZLENBQUMsV0FBd0I7QUFBSTtBQUNGLFFBQzdDLElBQUksV0FBVyxLQUFLLFdBQVcsQ0FBQyxHQUFHLElBQUksV0FBVyxLQUFLLFdBQVcsQ0FBQyxHQUFHLEVBQUU7QUFDNUUsWUFBTSxXQUFXLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQztBQUNwQyxTQUFLO0FBQ0wsUUFDSSxJQUFJLFdBQVcsS0FBSyxXQUFXLENBQUMsR0FBRyxFQUFFO0FBQ3pDLFlBQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3BDLFNBQUs7QUFBQyxhQUFLLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxXQUFXLEtBQUssV0FBVyxDQUFDLEdBQUcsRUFBRTtBQUM5RCxZQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNwQyxTQUFLO0FBQ0w7QUFFQztBQUFRO0FBQW1CO0FBQVEsSUFBMUIsc0JBQXNCO0FBQUssUUFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRTtBQUNsRSxZQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDcEQ7QUFBNkIsWUFBdkIsTUFBTSxPQUFPLEdBQTBCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUM5RixZQUFNLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN0QixTQUFLO0FBQ0w7QUFFQztBQUFRO0FBQW1CO0FBQVEsSUFDMUIsbUJBQW1CO0FBQUssUUFDOUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3ZCLFFBQ0ksSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQy9HLFFBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQzlHO0FBQ3dCLFFBQXBCLE1BQU0sa0JBQWtCLEdBQVksSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7QUFDcEcsUUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUN2RyxRQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUN0SCxRQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNySCxRQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzlGLFFBQUksSUFBSSxDQUFDLDRCQUE0QixDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDN0csUUFBSSxJQUFJLENBQUMsNkJBQTZCLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUM5RyxRQUNJLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsc0JBQXNCLENBQUM7QUFDekYsUUFBSSxJQUFJLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQztBQUMzRyxRQUFJLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7QUFDeEYsUUFDSSxJQUFJLElBQUksQ0FBQywwQkFBMEIsS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTtBQUN2RSxZQUFNLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0FBQ2pDO0FBQ007QUFDTTtBQUNNLFlBQVosVUFBVSxDQUFDLFFBQWMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3RELFNBQUs7QUFDTDtBQUVHO0FBQ0ksUUFBSCxJQUFJLElBQUksQ0FBQyx5QkFBeUIsS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRTtBQUNyRSxZQUFNLFVBQVUsQ0FBQyxRQUFjLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM3RixTQUFLO0FBQ0w7QUFFQztBQUFRO0FBQW1CO0FBQVEsSUFDMUIsb0JBQW9CO0FBQUssUUFDL0IsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTtBQUNoRSxZQUFNLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUMxQixTQUFLO0FBQUMsYUFBSztBQUNYLFlBQU0sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3hCLFNBQUs7QUFDTDtBQUVDO0FBQVE7QUFBbUI7QUFBUSxJQUMxQixtQkFBbUI7QUFBSyxRQUM5QixJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQztBQUNuRjtBQUVDO0FBQVE7QUFBbUI7QUFBUSxJQUMxQixtQkFBbUI7QUFBSyxRQUM5QixJQUFJLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7QUFDaEUsUUFBSSxLQUFLLE1BQU0sT0FBTyxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxFQUFFO0FBQ3ZEO0FBQ00sWUFBQSxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQ25ELGdCQUFRLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN2RCxhQUFPO0FBQ1AsU0FBSztBQUNMO0FBRUM7QUFBUTtBQUFtQjtBQUN4QixJQURNLFdBQVc7QUFBSyxRQUN0QixLQUFLLE1BQU0sT0FBTyxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxFQUFFO0FBQ3ZELFlBQU0sT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9DLFNBQUs7QUFDTDtBQUVDO0FBQVE7QUFBbUI7QUFBUSxJQUExQixvQkFBb0I7QUFBSyxRQUMvQixPQUFPLENBQUMsSUFBSSxDQUFDLDRCQUE0QjtBQUM3QyxZQUFNLElBQUksQ0FBQyw2QkFBNkI7QUFDeEMsWUFBTSxJQUFJLENBQUMsY0FBYztBQUN6QixZQUFNLElBQUksQ0FBQyxtQkFBbUI7QUFDOUIsWUFBTSxJQUFJLENBQUMsZ0JBQWdCO0FBQzNCLFlBQU0sSUFBSSxDQUFDLGdCQUFnQjtBQUMzQixZQUFNLElBQUksQ0FBQyxpQkFBaUI7QUFDNUIsWUFBTSxJQUFJLENBQUMsZ0JBQWdCO0FBQzNCLFlBQU0sSUFBSSxDQUFDLHFCQUFxQjtBQUNoQyxZQUFNLElBQUksQ0FBQyxxQkFBcUI7QUFDaEMsWUFBTSxJQUFJLENBQUMsb0JBQW9CO0FBQy9CLFlBQU0sSUFBSSxDQUFDLFlBQVk7QUFDdkIsU0FBSyxDQUFDO0FBQ047QUFFQztBQUFRO0FBQW1CO0FBQVEsSUFFMUIsV0FBVztBQUFLLFFBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUNsRTtBQUVHO0FBQ1E7QUFFRTtBQUNSLFFBREQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ3BCLFlBQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7QUFDdEUsU0FBSztBQUNMLFFBQ0ksSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7QUFDOUIsUUFDSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDcEIsWUFBTSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztBQUNqQyxTQUFLO0FBQ0wsUUFDSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztBQUM1QjtBQUVDO0FBQVE7QUFBbUI7QUFBUSxJQUMxQixnQkFBZ0I7QUFBSyxRQUMzQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztBQUNoQyxRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO0FBQzFDLFFBQ0ksSUFBSyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWU7QUFDekMsWUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUc7QUFDbEUsWUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztBQUMzQyxTQUFLO0FBQUMsYUFBSztBQUNYLFlBQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDMUMsU0FBSztBQUNMLFFBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxVQUFVLEdBQUcsWUFBWSxDQUFDO0FBQ2xHLFFBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFFO0FBQ3BFLFlBQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQztBQUNuRSxTQUFLO0FBQUMsYUFBSyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEVBQUU7QUFDaEYsWUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDO0FBQzdFLFNBQUs7QUFDTCxRQUNJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNwQixZQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO0FBQzVDLFlBQ00sSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWU7QUFDMUMsZ0JBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQ25FLGdCQUFRLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO0FBQzdDLGFBQU87QUFBQyxpQkFBSztBQUNiLGdCQUFRLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQzVDLGFBQU87QUFDUCxZQUNNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsVUFBVSxHQUFHLFlBQVksQ0FBQztBQUNwRyxZQUNNLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsRUFBRTtBQUMxRSxnQkFBUSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO0FBQ3pFLGFBQU87QUFBQyxpQkFBSyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsRUFBRTtBQUN0RixnQkFBUSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUM7QUFDbkYsYUFBTztBQUNQLFNBQUs7QUFDTDtBQUVDO0FBQVE7QUFBbUI7QUFBUSxJQUMxQixvQkFBb0I7QUFBSyxRQUMvQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDO0FBQ2xFLFFBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2pHLFFBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUMzRSxRQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDMUUsUUFDSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDcEIsWUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxDQUFDO0FBQ3hFLFlBQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3hHLFlBQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM3RSxZQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDNUUsU0FBSztBQUNMO0FBRUM7QUFBUTtBQUFtQjtBQUFRLElBRTFCLHVCQUF1QjtBQUFLLFFBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsRUFBRTtBQUMxRSxZQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUMzRSxTQUFLO0FBQUMsYUFBSztBQUNYLFlBQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUM7QUFDakQsU0FBSztBQUNMO0FBQ3dCLFFBQXBCLE1BQU0sV0FBVyxHQUFXLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7QUFDaEUsUUFDSSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsV0FBVyxHQUFHLENBQUMsQ0FBQztBQUMvQyxRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFBRTtBQUN2RSxZQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdEUsU0FBSztBQUFDLGFBQUs7QUFDWCxZQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztBQUMvQyxTQUFLO0FBQ0wsUUFDSSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO0FBQ3pFLFFBQ0ksSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO0FBQ3pCLFlBQU0sSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7QUFDOUIsWUFBTSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDN0IsWUFBTSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDekIsU0FBSztBQUNMO0FBRUM7QUFBUTtBQUFtQjtBQUFRLElBQTFCLHVDQUF1QztBQUFLLFFBQ2xELElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0FBQ25DLFFBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRTtBQUNoQyxZQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUM5QyxTQUFJO0FBQ0o7QUFFQztBQUNFO0FBQ0U7QUFFRDtBQUFRLElBQUYsY0FBYztBQUFLLFFBQ3pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ2hEO0FBRUM7QUFBUTtBQUFtQjtBQUN2QixJQUFLLGdCQUFnQjtBQUFLLFFBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTtBQUNyQyxZQUFNLFVBQVUsQ0FBQyxRQUFRLElBQUksQ0FBQyw0QkFBNEIsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdkUsWUFBTSxPQUFPO0FBQ2IsU0FBSztBQUNMO0FBQ3dCLFFBQXBCLE1BQU0sVUFBVSxHQUFhLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDO0FBQzVGLGNBQVEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVO0FBQ25DLGNBQVEsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBQzdCO0FBQXlCLFFBQXJCLE1BQU0sU0FBUyxHQUFXLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLFlBQVksR0FBRyxZQUFZLENBQUM7QUFDdEYsUUFDSSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFO0FBQ3RDLFlBQU0sVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQzNCLFNBQUs7QUFDTDtBQUN3QixRQUFwQixNQUFNLGFBQWEsR0FBVyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYTtBQUNqSSxhQUFTLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN4SDtBQUN3QixRQUFwQixJQUFJLG1CQUFtQixHQUFZLEtBQUssQ0FBQztBQUM3QztBQUN3QixRQUFwQixNQUFNLFFBQVEsR0FBVyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBYTtBQUFPO0FBQzFDLFlBQWpCLElBQUksUUFBUSxHQUFXLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekQsWUFDTSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO0FBQ3JDLGdCQUFRLFFBQVEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDO0FBQ3JELGFBQU87QUFDUDtBQUM0QixZQUF0QixNQUFNLFdBQVcsR0FBVyxTQUFTLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQ2pGO0FBQTZCLFlBQXZCLE1BQU0sSUFBSSxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7QUFDcEMsWUFBTSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDakQsWUFBTSxJQUFJLENBQUMsS0FBSyxHQUFHO0FBQ25CLGdCQUFRLG1CQUFtQixFQUFFLFdBQVc7QUFDeEMsZ0JBQVEsZ0JBQWdCLEVBQUUsV0FBVztBQUNyQyxnQkFBUSxjQUFjLEVBQUUsV0FBVztBQUNuQyxnQkFBUSxlQUFlLEVBQUUsV0FBVztBQUNwQyxnQkFBUSxTQUFTLEVBQUUsV0FBVztBQUM5QixhQUFPLENBQUM7QUFDUixZQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLEVBQUU7QUFDbEcsZ0JBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0FBQ3JFLGFBQU87QUFDUCxZQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEVBQUU7QUFDM0YsZ0JBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbEUsYUFBTztBQUNQLFlBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxFQUFFO0FBQ3pFLGdCQUFRLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDNUQsZ0JBQVEsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDNUUsYUFBTztBQUNQLFlBQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7QUFDM0YsZ0JBQVUsVUFBVSxDQUFDLDRCQUE0QixDQUFDLEtBQUssRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsRUFBRTtBQUMxRyxnQkFBUSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN0RSxnQkFBUSxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsRUFBRTtBQUNqRixvQkFBVSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekUsb0JBQVUsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUTtBQUNoRSwwQkFBYyxPQUFPO0FBQ3JCLDBCQUFjLEtBQUssQ0FBQztBQUNwQixpQkFBUztBQUNULGFBQU87QUFDUDtBQUM0QixZQUF0QixJQUFJLE1BQU0sR0FBVyxJQUFJLENBQUM7QUFDaEMsWUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUU7QUFDdkU7QUFBaUMsZ0JBQXpCLE1BQU0sSUFBSSxHQUF5QixJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM5RSxnQkFBUSxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ2xELG9CQUFVLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQy9CLGlCQUFTO0FBQ1QsYUFBTztBQUFDLGlCQUFLLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFBRTtBQUM3RSxnQkFBUSxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbkQsYUFBTztBQUNQLFlBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUNsRCxnQkFBUSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUM3QixnQkFBUSxtQkFBbUIsR0FBRyxJQUFJLENBQUM7QUFDbkMsYUFBTztBQUNQLFlBQ00sT0FBTyxJQUFJLENBQUM7QUFDbEIsU0FBSyxDQUFDLENBQUM7QUFDUCxRQUNJLFVBQVUsQ0FBQyxRQUFRLElBQUksQ0FBQyw0QkFBNEIsR0FBRyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNuRjtBQUVHO0FBQ0ksUUFBSCxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsTUFBTSxFQUFFO0FBQzdGLFlBQU0sS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7QUFDekQsZ0JBQVEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xELGFBQU87QUFDUCxTQUFLO0FBQUMsYUFBSztBQUNYLFlBQU0sSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7QUFDNUIsU0FBSztBQUNMLFFBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRTtBQUNoQyxZQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUM5QyxTQUFLO0FBQ0w7QUFFQztBQUFRO0FBQW1CO0FBQVEsSUFBMUIsYUFBYTtBQUFLO0FBQ2IsUUFBWCxNQUFNLElBQUksR0FBVyxDQUFDLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7QUFDekk7QUFBeUIsUUFBckIsTUFBTSxVQUFVLEdBQWEsRUFBRSxDQUFDO0FBQ3BDO0FBQ3dCLFFBQXBCLE1BQU0sY0FBYyxHQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FDNUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksRUFDL0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQ2hDLENBQUMsQ0FBQztBQUNQLFFBQUksS0FBSyxJQUFJLEtBQUssR0FBVyxDQUFDLEVBQUUsS0FBSyxHQUFHLGNBQWMsRUFBRSxFQUFFLEtBQUssRUFBRTtBQUNqRSxZQUFNLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLElBQUksR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0FBQ2hJLFNBQUs7QUFDTCxRQUNJLE9BQU8sVUFBVSxDQUFDO0FBQ3RCO0FBRUM7QUFBUTtBQUF3QjtBQUNoQztBQUFRLElBREMsY0FBYyxDQUFDLEtBQWE7QUFBSSxRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNyQixZQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFO0FBQ3RGO0FBQWlDLGdCQUF6QixNQUFNLE1BQU0sR0FBVyxJQUFJLENBQUMsV0FBVyxDQUFDLHlCQUF5QixDQUFDO0FBQzFFLGdCQUFRLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNO0FBQ3RDLG9CQUFZLEtBQUssSUFBSSxNQUFNO0FBQzNCLG9CQUFZLEtBQUssSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO0FBQ3hDLG9CQUFVLE9BQU8sSUFBSSxDQUFDO0FBQ3RCLGlCQUFTO0FBQUMscUJBQUssSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU07QUFDN0Msb0JBQW1CLEtBQUssSUFBSSxNQUFNO0FBQ2xDLG9CQUFtQixLQUFLLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtBQUMvQyxvQkFBVSxPQUFPLElBQUksQ0FBQztBQUN0QixpQkFBUztBQUNULGFBQU87QUFBQyxpQkFBSyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLEVBQUU7QUFDdkQsZ0JBQVEsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtBQUN4QyxvQkFBVSxPQUFPLElBQUksQ0FBQztBQUN0QixpQkFBUztBQUNULGFBQU87QUFBQyxpQkFBSyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7QUFDbEYsZ0JBQVEsT0FBTyxJQUFJLENBQUM7QUFDcEIsYUFBTztBQUNQLFNBQUs7QUFDTCxRQUNJLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtBQUNqRixZQUFNLE9BQU8sSUFBSSxDQUFDO0FBQ2xCLFNBQUs7QUFDTCxRQUNJLE9BQU8sS0FBSyxDQUFDO0FBQ2pCO0FBRUM7QUFBUTtBQUFtQjtBQUFRLElBQzFCLGdCQUFnQjtBQUFLLFFBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFO0FBQzVDLFlBQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3JHLFlBQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixFQUFFLENBQUM7QUFDbEQ7QUFBNkIsWUFBdkIsTUFBTSxRQUFRLEdBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXO0FBQzNELGtCQUFVLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTO0FBQzFFLGtCQUFVLENBQUMsQ0FBQztBQUNaLFlBQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNuRCxTQUFLO0FBQ0w7QUFFQztBQUFRO0FBQW1CO0FBQVEsSUFDMUIsZUFBZTtBQUFLLFFBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFO0FBQzNDLFlBQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ2xHLFlBQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUM7QUFDakQ7QUFBNkIsWUFBdkIsTUFBTSxRQUFRLEdBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXO0FBQzNELGtCQUFVLENBQUM7QUFDWCxrQkFBVSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO0FBQzFFLFlBQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNsRCxTQUFLO0FBQ0w7QUFFQztBQUFRO0FBQXdCO0FBQ3RCO0FBQW1CO0FBQVEsSUFBNUIsYUFBYSxDQUFDLEtBQWtCLEVBQUUsTUFBYztBQUFJLFFBQzFELElBQUksS0FBSyxLQUFLLFdBQVcsQ0FBQyxHQUFHLEVBQUU7QUFDbkMsWUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25DLFNBQUs7QUFBQyxhQUFLLElBQUksS0FBSyxLQUFLLFdBQVcsQ0FBQyxHQUFHLEVBQUU7QUFDMUMsWUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEMsU0FBSztBQUNMLFFBQ0ksSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7QUFDOUIsUUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztBQUM1QixRQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNwQixZQUFNLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0FBQ2pDLFNBQUs7QUFDTDtBQUVDO0FBQVE7QUFBNEI7QUFBeUI7QUFBbUI7QUFDaEYsSUFBUyxpQkFBaUIsQ0FBQyxTQUFzQixFQUFFLE1BQWM7QUFBSTtBQUNyRCxRQUFiLE1BQU0sY0FBYyxHQUFXLENBQUMsU0FBUyxLQUFLLFdBQVcsQ0FBQyxHQUFHO0FBQ2pFLGNBQVEsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFNBQVM7QUFDNUMsY0FBUSxJQUFJLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDO0FBQzdDO0FBQXlCLFFBQXJCLE1BQU0sYUFBYSxHQUFXLE1BQU0sR0FBRyxjQUFjLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztBQUN6RjtBQUF5QixRQUFyQixNQUFNLFdBQVcsR0FBVyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7QUFDL0UsUUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsRUFBRTtBQUM5QyxZQUFNLE9BQU8sYUFBYSxDQUFDO0FBQzNCLFNBQUs7QUFDTCxRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsSUFBSSxTQUFTLEtBQUssV0FBVyxDQUFDLEdBQUc7QUFDdEUsYUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxJQUFJLFNBQVMsS0FBSyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDekUsWUFBTSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ2xELFNBQUs7QUFBQyxhQUFLO0FBQ1gsWUFBTSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDL0QsU0FBSztBQUNMO0FBRUM7QUFBUTtBQUF5QjtBQUM5QjtBQUFRLElBQUYsZUFBZSxDQUFDLE1BQWM7QUFBSSxRQUN4QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzlDLFFBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDaEcsUUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDNUYsUUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLEVBQUU7QUFDMUUsWUFBTSxJQUFJLENBQUMsZUFBZSxHQUFHO0FBQzdCLGdCQUFRLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7QUFDOUQsYUFBTyxDQUFDO0FBQ1IsU0FBSztBQUNMLFFBQ0ksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixFQUFFO0FBQzlDLFlBQU0sSUFBSSxDQUFDLGtDQUFrQyxFQUFFLENBQUM7QUFDaEQsU0FBSztBQUNMO0FBRUM7QUFBUTtBQUF5QjtBQUMvQjtBQUFRLElBQUQsZ0JBQWdCLENBQUMsTUFBYztBQUFJLFFBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDOUMsUUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNsRyxRQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUM1RixRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsRUFBRTtBQUMxRSxZQUFNLElBQUksQ0FBQyxlQUFlLEdBQUc7QUFDN0IsZ0JBQVEsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztBQUM5RCxhQUFPLENBQUM7QUFDUixTQUFLO0FBQ0wsUUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLEVBQUU7QUFDOUMsWUFBTSxJQUFJLENBQUMsa0NBQWtDLEVBQUUsQ0FBQztBQUNoRCxTQUFLO0FBQ0w7QUFFQztBQUFRO0FBQW1CO0FBQzNCLElBQVMsa0NBQWtDO0FBQUs7QUFDb0IsUUFDakUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFO0FBQzVDLFlBQU0sT0FBTztBQUNiLFNBQUs7QUFDTDtBQUF5QixRQUFyQixJQUFJLGdCQUFnQixHQUFZLEtBQUssQ0FBQztBQUMxQztBQUF5QixRQUFyQixJQUFJLGVBQWUsR0FBWSxLQUFLLENBQUM7QUFDekM7QUFBeUIsUUFBckIsTUFBTSxpQkFBaUIsR0FBWSxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDL0Y7QUFBeUIsUUFBckIsTUFBTSxnQkFBZ0IsR0FBWSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDN0Y7QUFBeUIsUUFBckIsTUFBTSxnQkFBZ0IsR0FBWSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDN0Y7QUFBeUIsUUFBckIsTUFBTSxzQkFBc0IsR0FBWSxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDbkc7QUFBeUIsUUFBckIsTUFBTSxxQkFBcUIsR0FBWSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDakcsUUFDSSxJQUFJLGlCQUFpQixFQUFFO0FBQzNCLFlBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO0FBQzlCLFlBQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3BDLFNBQUs7QUFBQyxhQUFLO0FBQ1gsWUFBTSxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7QUFDL0IsWUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDcEMsU0FBSztBQUNMLFFBQ0ksSUFBSSxnQkFBZ0IsRUFBRTtBQUMxQixZQUFNLGVBQWUsR0FBRyxJQUFJLENBQUM7QUFDN0IsWUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDbkMsU0FBSztBQUFDLGFBQUs7QUFDWCxZQUFNLGVBQWUsR0FBRyxLQUFLLENBQUM7QUFDOUIsWUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDbkMsU0FBSztBQUNMLFFBQ0ksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ3BCO0FBQTZCLFlBQXZCLE1BQU0sUUFBUSxHQUFZLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUUsR0FBRyxxQkFBcUIsR0FBRyxnQkFBZ0IsQ0FBQztBQUNqSDtBQUE2QixZQUF2QixNQUFNLFNBQVMsR0FBWSxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxFQUFFLEdBQUcsc0JBQXNCLEdBQUcsaUJBQWlCLENBQUM7QUFDcEgsWUFDTSxJQUFJLFFBQVEsRUFBRTtBQUNwQixnQkFBUSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDckMsYUFBTztBQUFDLGlCQUFLLElBQUksQ0FBQyxlQUFlLEVBQUU7QUFDbkMsZ0JBQVEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3JDLGFBQU87QUFDUDtBQUVLLFlBQUMsSUFBSSxTQUFTLEVBQUU7QUFDckIsZ0JBQVEsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3RDLGFBQU87QUFBQyxpQkFBSyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7QUFDcEMsZ0JBQVEsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3RDLGFBQU87QUFDUCxTQUFLO0FBQ0w7QUFFQztBQUFRO0FBQXdCO0FBQW1CO0FBQVEsSUFBbEQsc0JBQXNCLENBQUMsS0FBMkI7QUFBSTtBQUNoRCxRQUFaLE1BQU0sR0FBRyxHQUFXLEtBQUssQ0FBQyxRQUFRLENBQUM7QUFDdkM7QUFBeUIsUUFBckIsTUFBTSxHQUFHLEdBQVcsS0FBSyxDQUFDLFNBQVMsQ0FBQztBQUN4QztBQUF5QixRQUFyQixNQUFNLFFBQVEsR0FBVyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDO0FBQzdEO0FBQXlCLFFBQXJCLE1BQU0sUUFBUSxHQUFXLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUM7QUFDOUQsUUFBSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVztBQUN2QyxjQUFRLEdBQUcsR0FBRyxHQUFHLElBQUksUUFBUSxHQUFHLENBQUM7QUFDakMsY0FBUSxHQUFHLElBQUksUUFBUSxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7QUFDdkM7QUFFQztBQUFRO0FBQXdCO0FBQW1CO0FBQVEsSUFBbEQscUJBQXFCLENBQUMsS0FBMkI7QUFBSTtBQUMvQyxRQUFaLE1BQU0sR0FBRyxHQUFXLEtBQUssQ0FBQyxRQUFRLENBQUM7QUFDdkM7QUFBeUIsUUFBckIsTUFBTSxHQUFHLEdBQVcsS0FBSyxDQUFDLFNBQVMsQ0FBQztBQUN4QztBQUF5QixRQUFyQixNQUFNLE9BQU8sR0FBVyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDO0FBQzNEO0FBQXlCLFFBQXJCLE1BQU0sT0FBTyxHQUFXLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7QUFDNUQsUUFBSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVztBQUN2QyxjQUFRLEdBQUcsSUFBSSxPQUFPLEdBQUcsT0FBTyxHQUFHLENBQUM7QUFDcEMsY0FBUSxHQUFHLEdBQUcsR0FBRyxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFDakM7QUFFQztBQUFRO0FBQW1CO0FBQVEsSUFDMUIsa0JBQWtCO0FBQUs7QUFDZCxRQUFmLElBQUksUUFBUSxHQUFXLENBQUMsQ0FBQztBQUM3QjtBQUF5QixRQUFyQixJQUFJLFNBQVMsR0FBVyxDQUFDLENBQUM7QUFDOUI7QUFBeUIsUUFBckIsTUFBTSx1QkFBdUIsR0FBWSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVc7QUFDekUsY0FBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CO0FBQy9DLGNBQVUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQztBQUMvQztBQUF5QixRQUFyQixNQUFNLGdCQUFnQixHQUFXLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVztBQUNqRSxjQUFVLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLG1CQUFtQjtBQUNuRSxjQUFVLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO0FBQ3BFLFFBQ0ksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ3BCLFlBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDNUYsWUFBTSxRQUFRLEdBQUcsZ0JBQWdCLENBQUM7QUFDbEMsU0FBSztBQUFDLGFBQUs7QUFDWCxZQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFO0FBQ3RGO0FBQWlDLGdCQUF6QixNQUFNLE1BQU0sR0FBVyxJQUFJLENBQUMsV0FBVyxDQUFDLHlCQUF5QixDQUFDO0FBQzFFO0FBQWlDLGdCQUF6QixNQUFNLGNBQWMsR0FBVyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3BFO0FBQWlDLGdCQUF6QixNQUFNLHdCQUF3QixHQUFZLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVztBQUM5RSxzQkFBYyxJQUFJLENBQUMsWUFBWSxJQUFJLE1BQU07QUFDekMsc0JBQWMsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7QUFDekMsZ0JBQVEsSUFBSSx3QkFBd0IsRUFBRTtBQUN0QyxvQkFBVSxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUM7QUFDdEUsb0JBQVUsUUFBUSxHQUFHLGNBQWMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7QUFDL0QsaUJBQVM7QUFBQyxxQkFBSztBQUNmLG9CQUFVLFNBQVMsR0FBRyxjQUFjLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztBQUN0RSxvQkFBVSxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7QUFDL0UsaUJBQVM7QUFDVCxhQUFPO0FBQUMsaUJBQUssSUFBSSx1QkFBdUIsRUFBRTtBQUMxQyxnQkFBUSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDNUgsZ0JBQVEsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUN6RixhQUFPO0FBQUMsaUJBQUs7QUFDYixnQkFBUSxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7QUFDOUUsZ0JBQVEsUUFBUSxHQUFHLENBQUMsQ0FBQztBQUNyQixhQUFPO0FBQ1AsU0FBSztBQUNMLFFBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNyRCxRQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDbkQsUUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsRUFBRTtBQUMvRCxZQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUU7QUFDeEMsZ0JBQVEsSUFBSSxDQUFDLDZCQUE2QixDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNsRSxnQkFBUSxJQUFJLENBQUMsNkJBQTZCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFELGdCQUFRLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztBQUNqRCxnQkFBUSxJQUFJLENBQUMsNEJBQTRCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxJQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQy9HLGdCQUFRLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxDQUFDO0FBQzVFLGFBQU87QUFBQyxpQkFBSztBQUNiLGdCQUFRLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakUsZ0JBQVEsSUFBSSxDQUFDLDRCQUE0QixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6RCxnQkFBUSxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixFQUFFLENBQUM7QUFDakQsZ0JBQVEsSUFBSSxDQUFDLDZCQUE2QixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsSUFBSSxRQUFRLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUNoSCxnQkFBUSxJQUFJLENBQUMsNkJBQTZCLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsQ0FBQztBQUM3RSxhQUFPO0FBQ1AsU0FBSztBQUNMLFFBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLEVBQUU7QUFDL0U7QUFBNkIsWUFBdkIsTUFBTSxLQUFLLEdBQVcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7QUFDeEQsWUFBTSxJQUFJLENBQUMsUUFBUSxHQUFHO0FBQ3RCLGdCQUFRLGVBQWUsRUFBRSxLQUFLO0FBQzlCLGFBQU8sQ0FBQztBQUNSLFNBQUs7QUFBQyxhQUFLLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO0FBQ3RGO0FBQTZCLFlBQXZCLE1BQU0sTUFBTSxHQUFXLENBQUMsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQztBQUN4RyxrQkFBYyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMseUJBQXlCLENBQUM7QUFDOUUsa0JBQWMsQ0FBQyxDQUFDO0FBQ2hCO0FBQTZCLFlBQXZCLE1BQU0sUUFBUSxHQUFZLENBQUMsTUFBTSxHQUFHLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsTUFBTSxNQUFNLEdBQUcsUUFBUSxJQUFJLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxDQUFDO0FBQzNJO0FBQTZCLFlBQXZCLE1BQU0sU0FBUyxHQUFXLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUTtBQUN6RCxrQkFBWSxRQUFRLEdBQUcsUUFBUSxHQUFHLEtBQUs7QUFDdkMsa0JBQVksUUFBUSxHQUFHLE1BQU0sR0FBRyxPQUFPLENBQUM7QUFDeEMsWUFBTSxJQUFJLENBQUMsUUFBUSxHQUFHO0FBQ3RCLGdCQUFRLGVBQWUsRUFDYixxQkFBcUI7QUFDL0Isb0JBQVUsU0FBUztBQUNuQixvQkFBVSxJQUFJO0FBQ2Qsb0JBQVUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJO0FBQ3BELG9CQUFVLE1BQU07QUFDaEIsb0JBQVUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO0FBQ2xELG9CQUFVLFFBQVE7QUFDbEIsYUFBTyxDQUFDO0FBQ1IsWUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO0FBQ3JDLGdCQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCO0FBQ3hDLG9CQUFVLFNBQVM7QUFDbkIseUJBQVcsTUFBTTtBQUNqQiw0QkFBWSxTQUFTO0FBQ3JCLDRCQUFZLFFBQVE7QUFDcEIsNkJBQWEsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3ZELHdCQUFVLElBQUksQ0FBQztBQUNmLGdCQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYztBQUNwQyxvQkFBVSxPQUFPLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ3RGLGFBQU87QUFBQyxpQkFBSztBQUNiLGdCQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCO0FBQ3hDLG9CQUFVLE1BQU07QUFDaEIsd0JBQVUsUUFBUTtBQUNsQix5QkFBVyxRQUFRLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQztBQUNuRCx3QkFBVSxXQUFXLENBQUM7QUFDdEIsZ0JBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjO0FBQ3BDLG9CQUFVLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUM7QUFDL0UsYUFBTztBQUNQLFNBQUs7QUFDTDtBQUVDO0FBQVE7QUFBbUI7QUFBUSxJQUMxQixvQkFBb0I7QUFBSyxRQUMvQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDcEIsWUFBTSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQzFDLElBQUksQ0FBQyxLQUFLLEVBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FDZixDQUFDO0FBQ1IsU0FBSztBQUNMLFFBQUksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM3RDtBQUVDO0FBQVE7QUFBOEI7QUFBbUI7QUFBUSxJQUN4RCxlQUFlLENBQUMsV0FBd0I7QUFBSSxRQUNsRCxJQUFJLFdBQVcsS0FBSyxXQUFXLENBQUMsR0FBRyxFQUFFO0FBQ3pDLFlBQU0sT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FDckMsSUFBSSxDQUFDLFNBQVMsRUFDZCxXQUFXLENBQ1osQ0FBQztBQUNSLFNBQUs7QUFDTCxRQUFJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQ3JDLElBQUksQ0FBQyxLQUFLLEVBQ1YsV0FBVyxDQUNaLENBQUM7QUFDTjtBQUVDO0FBQVE7QUFBd0I7QUFBbUI7QUFBUSxJQUNsRCxZQUFZLENBQUMsS0FBYTtBQUFJLFFBQ3BDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDaEQ7QUFFQztBQUFRO0FBQW1CO0FBQVEsSUFDMUIsbUJBQW1CO0FBQUs7QUFDZixRQUFmLElBQUksY0FBYyxHQUFZLElBQUksQ0FBQztBQUN2QyxRQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUU7QUFDdEMsWUFBTSxjQUFjO0FBQ3BCLGdCQUFRLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsR0FBRyxFQUFFLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQztBQUMvSCxTQUFLO0FBQUMsYUFBSztBQUNYLFlBQU0sY0FBYztBQUNwQixnQkFBUSxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLEdBQUcsRUFBRSxJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUM7QUFDL0gsU0FBSztBQUNMLFFBQ0ksSUFBSSxjQUFjLEVBQUU7QUFDeEI7QUFBNkIsWUFBdkIsTUFBTSxlQUFlLEdBQVcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM3RjtBQUE2QixZQUF2QixNQUFNLGdCQUFnQixHQUFXLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDaEc7QUFBNkIsWUFBdkIsTUFBTSxrQkFBa0IsR0FBVyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVc7QUFDckUsa0JBQVUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDO0FBQzNFLGtCQUFVLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzVFLFlBQ00sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzdEO0FBQTZCLFlBQXZCLE1BQU0sR0FBRyxHQUFXLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCO0FBQzdELGtCQUFVLElBQUksQ0FBQyxHQUFHLENBQ04sSUFBSSxDQUFDLEdBQUcsQ0FDTixJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUTtBQUMvQyxvQkFBZ0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsR0FBRyxDQUFDO0FBQ3RELG9CQUFnQixJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxHQUFHLENBQUMsRUFDekMsQ0FBQyxDQUNGLEVBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FDcEU7QUFDWCxrQkFBVSxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0FBQy9ILFlBQ00sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqRCxZQUFNLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN4QyxZQUFNLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN4QyxZQUFNLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN2QyxTQUFLO0FBQUMsYUFBSztBQUNYLFlBQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7QUFDdEUsWUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7QUFDcEUsWUFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDeEMsWUFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDeEMsWUFBTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDdkMsU0FBSztBQUNMLFFBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixFQUFFO0FBQzlDLFlBQU0sSUFBSSxDQUFDLGtDQUFrQyxFQUFFLENBQUM7QUFDaEQsU0FBSztBQUNMO0FBRUM7QUFBUTtBQUF3QjtBQUF3QjtBQUFtQjtBQUFRLElBQzFFLGVBQWUsQ0FBQyxLQUFhLEVBQUUsS0FBZ0I7QUFBSSxRQUN6RCxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLHNCQUFzQixFQUFFO0FBQ2pILFlBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdkMsU0FBSztBQUNMLFFBQUksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDcEQ7QUFFQztBQUFRO0FBQXdCO0FBQzNCO0FBQW1CO0FBQVEsSUFBdkIsU0FBUyxDQUFDLEtBQWEsRUFBRSxVQUFtQjtBQUFJO0FBQ3pDLFFBQWIsTUFBTSxJQUFJLEdBQVcsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO0FBQ3pHO0FBQXlCLFFBQXJCLElBQUksaUJBQWlCLEdBQVcsVUFBVSxDQUFDLHFCQUFxQixDQUM5RCxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNoRixRQUFJLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDN0QsUUFBSSxPQUFPLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3pIO0FBRUM7QUFBUTtBQUFzQjtBQUNwQjtBQUFRLElBQVQsZUFBZSxDQUFDLEdBQVc7QUFBSTtBQUN4QixRQUFiLElBQUksRUFBRSxHQUE2QixXQUFXLENBQUMscUJBQXFCLENBQUM7QUFDekUsUUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsRUFBRTtBQUNoRixZQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFDO0FBQ2xELFNBQUs7QUFBQyxhQUFLLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUU7QUFDMUMsWUFBTSxFQUFFLEdBQUcsV0FBVyxDQUFDLGtCQUFrQixDQUFDO0FBQzFDLFNBQUs7QUFDTCxRQUNJLEdBQUcsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3RGO0FBQXlCLFFBQXJCLElBQUksT0FBTyxHQUFXLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNqRixRQUFJLElBQUksV0FBVyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQ2hELFlBQU0sT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNsQixTQUFLO0FBQ0wsUUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFO0FBQ3RDLFlBQU0sT0FBTyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUM7QUFDNUIsU0FBSztBQUNMLFFBQUksT0FBTyxPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO0FBQzVDO0FBRUM7QUFBUTtBQUEyQjtBQUNwQjtBQUFRLElBQWQsZUFBZSxDQUFDLFFBQWdCO0FBQUk7QUFDN0IsUUFBYixJQUFJLE9BQU8sR0FBVyxRQUFRLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO0FBQzVELFFBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRTtBQUN0QyxZQUFNLE9BQU8sR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDO0FBQzVCLFNBQUs7QUFDTDtBQUF5QixRQUFyQixJQUFJLEVBQUUsR0FBNEIsV0FBVyxDQUFDLHFCQUFxQixDQUFDO0FBQ3hFLFFBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFDLEVBQUU7QUFDaEYsWUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQztBQUNsRCxTQUFLO0FBQUMsYUFBSyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO0FBQzFDLFlBQU0sRUFBRSxHQUFHLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQztBQUMxQyxTQUFLO0FBQ0w7QUFBeUIsUUFBckIsTUFBTSxLQUFLLEdBQVcsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3JGLFFBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQzdEO0FBRUM7QUFBUTtBQUF3QjtBQUNyQjtBQUFtQjtBQUFRLElBQTdCLFVBQVUsQ0FBQyxLQUE0QixFQUFFLGFBQXNCO0FBQUksUUFDekUsSUFBSSxLQUFLLFlBQVksVUFBVSxFQUFFO0FBQ3JDLFlBQU0sT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7QUFDdkUsU0FBSztBQUNMO0FBQ3dCLFFBQXBCLElBQUksVUFBVSxHQUFXLENBQUMsQ0FBQztBQUMvQjtBQUF5QixRQUFyQixNQUFNLE9BQU8sR0FBYyxLQUFLLENBQUMsT0FBTyxDQUFDO0FBQzdDLFFBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsRUFBRTtBQUN2RCxZQUFNLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3ZELGdCQUFRLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsS0FBSyxhQUFhLEVBQUU7QUFDckQsb0JBQVUsVUFBVSxHQUFHLENBQUMsQ0FBQztBQUN6QixvQkFBVSxNQUFNO0FBQ2hCLGlCQUFTO0FBQ1QsYUFBTztBQUNQLFNBQUs7QUFDTDtBQUVHO0FBQ0ksUUFBSCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUNqRztBQUVDO0FBQVE7QUFBd0I7QUFBaUM7QUFBbUI7QUFDbEYsSUFBTyxnQkFBZ0IsQ0FBQyxLQUE0QixFQUFFLGFBQXNCO0FBQUk7QUFDbEUsUUFBYixNQUFNLHlCQUF5QixHQUFlLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUM7QUFDeEc7QUFDd0IsUUFBcEIsTUFBTSxTQUFTLEdBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRO0FBQ3ZELFlBQU0seUJBQXlCLENBQUMsTUFBTSxHQUFHLHlCQUF5QixDQUFDLElBQUksQ0FBQztBQUN4RTtBQUF5QixRQUFyQixJQUFJLFFBQVEsR0FBVyxDQUFDLENBQUM7QUFDN0IsUUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO0FBQ25DLFlBQU0sUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLEdBQUcsU0FBUyxDQUFDO0FBQ3BFLFNBQUs7QUFBQyxhQUFLO0FBQ1gsWUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLEdBQUcsU0FBUyxDQUFDO0FBQ25FLFNBQUs7QUFDTCxRQUFJLE9BQU8sUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztBQUN4RTtBQUVDO0FBQVE7QUFBd0I7QUFDckI7QUFBUSxJQUFWLGdCQUFnQixDQUFDLEtBQTRCO0FBQUksUUFDdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDckIsWUFBTSxPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQUM7QUFDN0IsU0FBSztBQUNMO0FBQ3dCLFFBQXBCLE1BQU0sUUFBUSxHQUFXLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMxRDtBQUF5QixRQUFyQixNQUFNLFdBQVcsR0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDcEY7QUFBeUIsUUFBckIsTUFBTSxXQUFXLEdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3BGLFFBQ0ksSUFBSSxXQUFXLEdBQUcsV0FBVyxFQUFFO0FBQ25DLFlBQU0sT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFDO0FBQzdCLFNBQUs7QUFBQyxhQUFLLElBQUksV0FBVyxHQUFHLFdBQVcsRUFBRTtBQUMxQyxZQUFNLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBQztBQUM3QixTQUFLO0FBQUMsYUFBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUU7QUFDOUM7QUFDTSxZQUFBLE9BQU8sUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDO0FBQzNGLFNBQUs7QUFDTDtBQUNJLFFBQUEsT0FBTyxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUM7QUFDekY7QUFFQztBQUFRO0FBQW1CO0FBQVEsSUFDMUIsVUFBVTtBQUFLO0FBQ04sUUFBZixNQUFNLGNBQWMsR0FBWSxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQztBQUNwRSxRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRTtBQUMzQyxZQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUNyQyxDQUFDLEtBQWlCLEtBQVcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUM1RixDQUFDO0FBQ1IsU0FBSztBQUNMLFFBQ0ksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFFO0FBQzdDLFlBQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQ2xDLENBQUMsS0FBaUIsS0FBVyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQ2pHLENBQUM7QUFDUixZQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUNsQyxDQUFDLEtBQWlCLEtBQVcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUNqRyxDQUFDO0FBQ1IsU0FBSztBQUFDLGFBQUs7QUFDWCxZQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUNsQyxDQUFDLEtBQWlCLEtBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQzlFLENBQUM7QUFDUixZQUNNLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtBQUN0QixnQkFBUSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFDbEMsQ0FBQyxLQUFpQixLQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUM5RSxDQUFDO0FBQ1YsYUFBTztBQUNQLFlBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFO0FBQzdDLGdCQUFRLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFDaEMsQ0FBQyxLQUFpQixLQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUN6RSxDQUFDO0FBQ1YsZ0JBQVEsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUM5QixDQUFDLEtBQWlCLEtBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUMvRSxDQUFDO0FBQ1YsYUFBTztBQUNQLFNBQUs7QUFDTCxRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRTtBQUMzQyxZQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUM3QyxDQUFDLEtBQWlCLEtBQVcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUM1RixDQUFDO0FBQ1IsU0FBSztBQUNMLFFBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFFO0FBQzdDLFlBQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQzFDLENBQUMsS0FBaUIsS0FBVyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQ2pHLENBQUM7QUFDUixZQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUMxQyxDQUFDLEtBQWlCLEtBQVcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUNqRyxDQUFDO0FBQ1IsU0FBSztBQUFDLGFBQUs7QUFDWCxZQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUMxQyxDQUFDLEtBQWlCLEtBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQzlFLENBQUM7QUFDUixZQUFNLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtBQUN0QixnQkFBUSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFlBQVksRUFDMUMsQ0FBQyxLQUFpQixLQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUM5RSxDQUFDO0FBQ1YsYUFBTztBQUNQLFlBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFO0FBQzdDLGdCQUFRLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFlBQVksRUFDeEMsQ0FBQyxLQUFpQixLQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUN6RSxDQUFDO0FBQ1YsZ0JBQVEsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUN0QyxDQUFDLEtBQWlCLEtBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUNqRixDQUFDO0FBQ1YsYUFBTztBQUNQLFNBQUs7QUFDTCxRQUNJLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUU7QUFDMUMsWUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFZLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDMUYsWUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDdEIsZ0JBQVEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBWSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzVGLGFBQU87QUFDUCxTQUFLO0FBQ0w7QUFFQztBQUFRO0FBQTBCO0FBQW1CO0FBQVEsSUFBcEQsa0NBQWtDLENBQUMsT0FBZ0I7QUFBSSxRQUM3RCxPQUFPO0FBQ1gsWUFBTSxPQUFPLENBQUMsUUFBUTtBQUN0QixZQUFNLE9BQU8sQ0FBQyxRQUFRO0FBQ3RCLFlBQU0sT0FBTyxDQUFDLGNBQWM7QUFDNUIsWUFBTSxPQUFPLENBQUMsa0JBQWtCO0FBQ2hDLFlBQU0sT0FBTyxDQUFDLGVBQWU7QUFDN0IsWUFBTSxPQUFPLENBQUMsZUFBZTtBQUM3QixTQUFLLENBQUM7QUFDTjtBQUVDO0FBQVE7QUFBbUI7QUFBUSxJQUMxQixZQUFZO0FBQUssUUFDdkIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7QUFDN0IsUUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztBQUM1QixRQUNJLEtBQUssTUFBTSxPQUFPLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFLEVBQUU7QUFDdkQsWUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQ25ELGdCQUFRLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUN0QixhQUFPO0FBQ1AsU0FBSztBQUNMO0FBRUM7QUFBUTtBQUE4QjtBQUFpQztBQUF3QjtBQUMzRTtBQUEwQjtBQUF5QztBQUMxRTtBQUNQO0FBQVEsSUFITCxVQUFVLENBQUMsV0FBd0IsRUFBRSxjQUF1QixFQUFFLEtBQTRCLEVBQ2hHLFFBQWlCLEVBQUUsT0FBZ0IsRUFBRSxxQkFBK0IsRUFBRSxvQkFBOEI7QUFBSSxRQUN4RyxJQUFJLGNBQWMsRUFBRTtBQUN4QixZQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDOUQsU0FBSztBQUFDLGFBQUs7QUFDWCxZQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLG9CQUFvQixDQUFDLENBQUM7QUFDdkcsU0FBSztBQUNMO0FBRUM7QUFBUTtBQUNHO0FBQXdCO0FBQTJCO0FBQ2hEO0FBQXlDO0FBQXdDO0FBQW1CO0FBQzVHLElBRkcsT0FBTyxDQUFDLFdBQXdCLEVBQUUsS0FBNEIsRUFDbEUsUUFBaUIsRUFBRSxPQUFnQixFQUFFLHFCQUErQixFQUFFLG9CQUE4QjtBQUFJLFFBQzFHLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUM1QjtBQUNJLFFBQUEsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsRUFBRTtBQUNyRixZQUFNLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUM3QixTQUFLO0FBQ0wsUUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUN4QjtBQUVHO0FBQ0ksUUFBSCxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztBQUNuQyxRQUNJLElBQUksV0FBVyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxFQUFFO0FBQ3BELFlBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNqRCxTQUFLO0FBQ0wsUUFDSSxJQUFJLENBQUMsc0JBQXNCLEdBQUcsV0FBVyxDQUFDO0FBQzlDO0FBQ3dCLFFBQXBCLE1BQU0sY0FBYyxHQUEwQixJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDdEYsUUFBSSxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztBQUNqQyxRQUNJLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUU7QUFDMUMsWUFBTSxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDN0IsU0FBSztBQUNMLFFBQ0ksSUFBSSxRQUFRLEVBQUU7QUFDbEIsWUFBTSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztBQUMvQjtBQUM0QixZQUF0QixNQUFNLGNBQWMsR0FDbEIsQ0FBQyxDQUF3QixLQUFXLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2RyxZQUNNLElBQUksbUJBQW1CLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ25ELGdCQUFRLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsMEJBQTBCLENBQzVFLFFBQVEsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUN2RixhQUFPO0FBQUMsaUJBQUs7QUFDYixnQkFBUSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixDQUNyRSxRQUFRLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDdkYsYUFBTztBQUNQLFNBQUs7QUFDTCxRQUNJLElBQUksT0FBTyxFQUFFO0FBQ2pCLFlBQU0sSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7QUFDOUI7QUFDNEIsWUFBdEIsTUFBTSxhQUFhLEdBQ2pCLENBQUMsQ0FBd0IsS0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFELFlBQ00sSUFBSSxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDbkQsZ0JBQVEsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQzNILGFBQU87QUFBQyxpQkFBSztBQUNiLGdCQUFRLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUNuSCxhQUFPO0FBQ1AsU0FBSztBQUNMLFFBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztBQUN2RCxRQUNJLElBQUksbUJBQW1CLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLG1CQUFDLEtBQW1CLEdBQUUsY0FBYyxDQUFDLEVBQUU7QUFDekg7QUFDTSxZQUFBLElBQUksV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUN2RCxnQkFBUSxJQUFJLENBQUMsT0FBTyxHQUFHLG1CQUFDLEtBQW1CLEdBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztBQUMxRSxhQUFPO0FBQ1AsU0FBSztBQUNMO0FBRUc7QUFDSTtBQUNJLFFBQVAsSUFBSSxxQkFBcUIsRUFBRTtBQUMvQixZQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQy9CLFNBQUs7QUFDTCxRQUNJLElBQUksb0JBQW9CLEVBQUU7QUFDOUIsWUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3hCLFNBQUs7QUFDTDtBQUVDO0FBQVE7QUFDRjtBQUE0QjtBQUFtQjtBQUFRLElBQXBELE1BQU0sQ0FBQyxLQUE0QixFQUFFLFFBQWtCO0FBQUk7QUFDbEQsUUFBZixJQUFJLGtCQUFrQixHQUFVLElBQUksQ0FBQztBQUN6QyxRQUNJLElBQUksbUJBQW1CLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ2pEO0FBQTZCLFlBQXZCLE1BQU0sY0FBYyxHQUFjLG1CQUFDLEtBQW1CLEdBQUUsY0FBYyxDQUFDO0FBQzdFLFlBQU0sS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDOUQsZ0JBQVEsSUFBSSxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDM0Qsb0JBQVUsa0JBQWtCLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pELG9CQUFVLE1BQU07QUFDaEIsaUJBQVM7QUFDVCxhQUFPO0FBQ1AsWUFDTSxJQUFJLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO0FBQzdELGdCQUFRLE9BQU87QUFDZixhQUFPO0FBQ1AsU0FBSztBQUNMLFFBQ0ksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFO0FBQ3JFLFlBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ3ZCLGdCQUFRLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxLQUFLLENBQUM7QUFDL0MsYUFBTztBQUNQLFNBQUs7QUFDTCxRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCO0FBQ3dCLFFBQXBCLE1BQU0sTUFBTSxHQUFXLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDO0FBQzdFLGNBQVEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxrQkFBa0IsQ0FBQyxVQUFVLENBQUM7QUFDbkUsY0FBUSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckM7QUFBeUIsUUFBckIsSUFBSSxRQUFRLENBQVM7QUFDekI7QUFBeUIsUUFBckIsTUFBTSxTQUFTLEdBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXO0FBQzFELGNBQVUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLO0FBQ2hDLGNBQVUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7QUFDaEM7QUFBeUIsUUFBckIsTUFBTSxVQUFVLEdBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7QUFDN0csUUFDSSxJQUFJLE1BQU0sSUFBSSxDQUFDLEVBQUU7QUFDckIsWUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDO0FBQzVCLFNBQUs7QUFBQyxhQUFLLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtBQUNqRCxZQUFNLFFBQVEsR0FBRyxTQUFTLENBQUM7QUFDM0IsU0FBSztBQUFDLGFBQUs7QUFDWCxZQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzlDLFlBQU0sSUFBSSxRQUFRLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUNqRixnQkFBUSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN2RSxhQUFPO0FBQUMsaUJBQUs7QUFDYixnQkFBUSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM1QyxhQUFPO0FBQ1AsU0FBSztBQUNMLFFBQUksSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzFDO0FBRUM7QUFBUTtBQUF3QjtBQUFtQjtBQUM5QyxJQURJLEtBQUssQ0FBQyxLQUE0QjtBQUFJLFFBQzVDLElBQUksbUJBQW1CLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ2pEO0FBQTZCLFlBQXZCLE1BQU0sY0FBYyxHQUFjLG1CQUFDLEtBQW1CLEdBQUUsY0FBYyxDQUFDO0FBQzdFLFlBQU0sSUFBSSxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDekQsZ0JBQVEsT0FBTztBQUNmLGFBQU87QUFDUCxTQUFLO0FBQ0wsUUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUN4QixRQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUU7QUFDbEMsWUFBTSxJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDO0FBQzVDLFNBQUs7QUFDTCxRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ3hCLFFBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFO0FBQzNDLFlBQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFDM0MsWUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUMzQyxZQUFNLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUM7QUFDekMsU0FBSztBQUNMLFFBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0FBQ2pDLFFBQ0ksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7QUFDN0IsUUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztBQUM1QixRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7QUFDckQ7QUFFQztBQUFRO0FBQThCO0FBQW1CO0FBQ25ELElBREcsY0FBYyxDQUFDLFdBQXdCO0FBQUk7QUFDbEMsUUFBZixNQUFNLGNBQWMsR0FBMEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3RGLFFBQUksY0FBYyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBWSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7QUFDOUUsUUFBSSxjQUFjLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQW9CLEtBQVcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQzlGLFFBQUksY0FBYyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBWSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUMzRCxRQUFJLGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ2pDLFFBQ0ksSUFBSSxDQUFDLHNCQUFzQixHQUFHLFdBQVcsQ0FBQztBQUM5QyxRQUFJLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxXQUFXLENBQUM7QUFDM0MsUUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztBQUM3QjtBQUVDO0FBQVE7QUFDVDtBQUFRLElBREUsT0FBTztBQUFLLFFBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0FBQzdCLFFBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztBQUNyRDtBQUVDO0FBQVE7QUFBMEI7QUFBbUI7QUFBUSxJQUFwRCxhQUFhLENBQUMsT0FBOEI7QUFBSSxRQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3hCLFFBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMzQixRQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDekIsUUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUMzQixRQUFJLElBQUksV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUNyRCxZQUFNLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUM7QUFDekMsWUFBTSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO0FBQ3RDLFNBQUs7QUFDTDtBQUVDO0FBQVE7QUFBK0I7QUFBbUI7QUFBUSxJQUF6RCxhQUFhLENBQUMsWUFBb0I7QUFBSTtBQUNoRCxRQUFJLE1BQU0sVUFBVSxHQUFXLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO0FBQzlFO0FBQ3dCLFFBQXBCLElBQUksWUFBWSxHQUFXLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztBQUNwRTtBQUF5QixRQUFyQixJQUFJLFlBQVksR0FBVyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7QUFDcEU7QUFBeUIsUUFBckIsSUFBSSxZQUFZLEdBQVcsWUFBWSxHQUFHLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDOUQ7QUFBeUIsUUFBckIsSUFBSSxZQUFZLEdBQVcsWUFBWSxHQUFHLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDOUQsUUFDSSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUU7QUFDM0MsWUFBTSxZQUFZLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO0FBQzFELFlBQU0sWUFBWSxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztBQUMxRCxZQUFNLFlBQVksR0FBRyxZQUFZLEdBQUcsVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUNwRCxZQUFNLFlBQVksR0FBRyxZQUFZLEdBQUcsVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUNwRCxTQUFLO0FBQ0w7QUFDd0IsUUFDcEIsTUFBTSxPQUFPLEdBQTRCO0FBQzdDLFlBQU0sRUFBRSxFQUFFLFlBQVk7QUFDdEIsWUFBTSxJQUFJLEVBQUUsWUFBWTtBQUN4QixZQUFNLElBQUksRUFBRSxZQUFZO0FBQ3hCLFlBQU0sS0FBSyxFQUFFLFlBQVk7QUFDekIsWUFBTSxNQUFNLEVBQUUsWUFBWTtBQUMxQixZQUFNLFFBQVEsRUFBRSxZQUFZO0FBQzVCLFlBQU0sSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLO0FBQzlGLFlBQU0sR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJO0FBQzdGLFNBQUssQ0FBQztBQUNOO0FBQ0ksUUFBQSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFO0FBQ3RDLFlBQU0sT0FBTyxXQUFRLFlBQVksQ0FBQztBQUNsQyxZQUFNLE9BQU8sWUFBUyxZQUFZLENBQUM7QUFDbkM7QUFDTSxZQUFBLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUU7QUFDckMsZ0JBQVEsT0FBTyxTQUFNLFlBQVksQ0FBQztBQUNsQyxnQkFBUSxPQUFPLFdBQVEsWUFBWSxDQUFDO0FBQ3BDLGFBQU87QUFDUCxTQUFLO0FBQ0wsUUFBSSxPQUFPLE9BQU8sQ0FBQztBQUNuQjtBQUVDO0FBQVE7QUFBd0I7QUFBbUI7QUFDaEQsSUFETSxlQUFlLENBQUMsS0FBb0I7QUFBSTtBQUMvQixRQUFmLE1BQU0sWUFBWSxHQUFXLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0FBQ2hFO0FBQXlCLFFBQXJCLE1BQU0sT0FBTyxHQUFXLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7QUFDekUsY0FBUSxLQUFLLENBQUMsT0FBTztBQUNyQixjQUFRLEtBQUssQ0FBQyxLQUFLLENBQUM7QUFDcEI7QUFBeUIsUUFBckIsTUFBTSxJQUFJLEdBQWdDO0FBQzlDLFlBQVEsRUFBRSxFQUFFLElBQUk7QUFDaEIsWUFBUSxFQUFFLEVBQUUsTUFBTTtBQUNsQixZQUFRLEVBQUUsRUFBRSxNQUFNO0FBQ2xCLFlBQVEsRUFBRSxFQUFFLE9BQU87QUFDbkIsWUFBUSxFQUFFLEVBQUUsUUFBUTtBQUNwQixZQUFRLEVBQUUsRUFBRSxVQUFVO0FBQ3RCLFlBQVEsRUFBRSxFQUFFLE1BQU07QUFDbEIsWUFBUSxFQUFFLEVBQUUsS0FBSztBQUNqQixTQUFPLENBQUM7QUFDUjtBQUF5QixRQUFyQixNQUFNLE9BQU8sR0FBNEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUM5RTtBQUF5QixRQUFyQixNQUFNLEdBQUcsR0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdEM7QUFBeUIsUUFBckIsTUFBTSxNQUFNLEdBQVcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3hDLFFBQ0ksSUFBSSxXQUFXLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLElBQUksV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFO0FBQzdHLFlBQU0sT0FBTztBQUNiLFNBQUs7QUFDTCxRQUFJLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUMzQixRQUNJLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtBQUMzQixZQUFNLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0FBQ2hDLFlBQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztBQUN6RCxTQUFLO0FBQ0w7QUFDd0IsUUFBcEIsTUFBTSxXQUFXLEdBQVcsVUFBVSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMvRztBQUF5QixRQUFyQixNQUFNLFFBQVEsR0FBVyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3pELFFBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLEVBQUU7QUFDOUMsWUFBTSxJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDNUMsU0FBSztBQUFDLGFBQUs7QUFDWDtBQUE2QixZQUF2QixNQUFNLFVBQVUsR0FBVyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7QUFDeEU7QUFBNkIsWUFBdkIsSUFBSSxXQUFXLENBQVM7QUFDOUI7QUFBNkIsWUFBdkIsSUFBSSxXQUFXLENBQVM7QUFDOUIsWUFDTSxJQUFJLElBQUksQ0FBQyxzQkFBc0IsS0FBSyxXQUFXLENBQUMsR0FBRyxFQUFFO0FBQzNELGdCQUFRLFdBQVcsR0FBRyxRQUFRLENBQUM7QUFDL0IsZ0JBQVEsV0FBVyxHQUFHLFFBQVEsR0FBRyxVQUFVLENBQUM7QUFDNUMsZ0JBQVEsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUU7QUFDakQsb0JBQVUsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO0FBQzlDLG9CQUFVLFdBQVcsR0FBRyxXQUFXLEdBQUcsVUFBVSxDQUFDO0FBQ2pELGlCQUFTO0FBQ1QsYUFBTztBQUFDLGlCQUFLLElBQUksSUFBSSxDQUFDLHNCQUFzQixLQUFLLFdBQVcsQ0FBQyxHQUFHLEVBQUU7QUFDbEUsZ0JBQVEsV0FBVyxHQUFHLFFBQVEsQ0FBQztBQUMvQixnQkFBUSxXQUFXLEdBQUcsUUFBUSxHQUFHLFVBQVUsQ0FBQztBQUM1QyxnQkFBUSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRTtBQUNsRCxvQkFBVSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7QUFDL0Msb0JBQVUsV0FBVyxHQUFHLFdBQVcsR0FBRyxVQUFVLENBQUM7QUFDakQsaUJBQVM7QUFDVCxhQUFPO0FBQ1AsWUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ3pELFNBQUs7QUFDTDtBQUVDO0FBQVE7QUFBOEI7QUFBd0I7QUFDeEM7QUFBMEI7QUFBbUI7QUFBUSxJQUFsRSxXQUFXLENBQUMsV0FBd0IsRUFBRSxLQUE0QixFQUN4RSxRQUFpQixFQUFFLE9BQWdCO0FBQUk7QUFDeEIsUUFBZixNQUFNLFFBQVEsR0FBVyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDMUQsUUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7QUFDbkMsUUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDaEMsUUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3pELFFBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0FBQ3RFLFFBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXO0FBQ3pELGNBQVUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxRQUFRO0FBQ25ELGNBQVUsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7QUFDcEQsUUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVc7QUFDMUQsY0FBVSxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVE7QUFDbkQsY0FBVSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUNwRCxRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDeEQ7QUFFQztBQUFRO0FBQ0Y7QUFBeUI7QUFBOEI7QUFDOUQ7QUFBbUI7QUFBUSxJQURqQixXQUFXLENBQUMsTUFBYyxFQUFFLFdBQW9CLEVBQUUsT0FBZ0I7QUFBSTtBQUMvRCxRQUFiLE1BQU0sS0FBSyxHQUFZLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDO0FBQ3hEO0FBQXlCLFFBQXJCLElBQUksS0FBSyxHQUFXLElBQUksQ0FBQztBQUM3QixRQUNJLElBQUksV0FBVyxFQUFFO0FBQ3JCLFlBQU0sSUFBSSxPQUFPLEVBQUU7QUFDbkIsZ0JBQVEsS0FBSyxHQUFHLEtBQUs7QUFDckIsc0JBQVksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLO0FBQ2xDLHNCQUFZLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO0FBQzdELGFBQU87QUFBQyxpQkFBSztBQUNiLGdCQUFRLEtBQUssR0FBRyxLQUFLO0FBQ3JCLHNCQUFZLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVTtBQUM1RCxzQkFBWSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztBQUNuQyxhQUFPO0FBQ1AsU0FBSztBQUFDLGFBQUs7QUFDWCxZQUFNLEtBQUssR0FBRyxLQUFLO0FBQ25CLGtCQUFVLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO0FBQy9ELGtCQUFVLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDaEUsU0FBSztBQUNMLFFBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2pDO0FBRUM7QUFBUTtBQUNGO0FBQXlCO0FBQThCO0FBQzlEO0FBQW1CO0FBQVEsSUFEakIsV0FBVyxDQUFDLE1BQWMsRUFBRSxXQUFvQixFQUFFLE9BQWdCO0FBQUk7QUFDL0QsUUFBYixNQUFNLEtBQUssR0FBWSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQztBQUN4RDtBQUF5QixRQUFyQixJQUFJLEtBQUssR0FBVyxJQUFJLENBQUM7QUFDN0IsUUFDSSxJQUFJLFdBQVcsRUFBRTtBQUNyQixZQUFNLElBQUksT0FBTyxFQUFFO0FBQ25CLGdCQUFRLEtBQUssR0FBRyxLQUFLO0FBQ3JCLHNCQUFZLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVTtBQUM3RCxzQkFBWSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztBQUNsQyxhQUFPO0FBQUMsaUJBQUs7QUFDYixnQkFBUSxLQUFLLEdBQUcsS0FBSztBQUNyQixzQkFBWSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUk7QUFDakMsc0JBQVksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7QUFDOUQsYUFBTztBQUNQLFNBQUs7QUFBQyxhQUFLO0FBQ1gsWUFBTSxJQUFJLEtBQUssRUFBRTtBQUNqQixnQkFBUSxLQUFLO0FBQ2Isb0JBQVUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7QUFDL0Qsd0JBQVUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7QUFDbkMsYUFBTztBQUFDLGlCQUFLO0FBQ2IsZ0JBQVEsS0FBSztBQUNiLG9CQUFVLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO0FBQy9ELHdCQUFVLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO0FBQ25DLGFBQU87QUFDUCxTQUFLO0FBQ0wsUUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDakM7QUFFQztBQUFRO0FBQXlCO0FBQW1CO0FBQ3BELElBRFMsVUFBVSxDQUFDLEtBQTZCO0FBQUk7QUFDbkMsUUFBZixNQUFNLE1BQU0sR0FBVyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDeEQsUUFDSSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUU7QUFDckUsWUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDdkIsZ0JBQVEsSUFBSSxDQUFDLHlCQUF5QixHQUFHLEtBQUssQ0FBQztBQUMvQyxhQUFPO0FBQ1AsU0FBSztBQUNMLFFBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDdkI7QUFDd0IsUUFBcEIsSUFBSSxTQUFTLENBR2dDO0FBQ2pEO0FBQXlCLFFBSnJCLElBQ0ksVUFBVSxDQUUrQjtBQUNqRDtBQUF5QixRQUpyQixJQUVJLGtCQUFrQixDQUN1QjtBQUNqRDtBQUF5QixRQUpyQixJQUdJLGlCQUFpQixDQUF3QjtBQUNqRCxRQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUU7QUFDdEMsWUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7QUFDekMsWUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7QUFDM0MsWUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7QUFDakQsWUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7QUFDaEQsU0FBSztBQUFDLGFBQUs7QUFDWCxZQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztBQUMxQyxZQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztBQUMxQyxZQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztBQUNqRCxZQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztBQUNoRCxTQUFLO0FBQ0w7QUFDd0IsUUFBcEIsTUFBTSxpQkFBaUIsSUFBYSxNQUFNLElBQUksVUFBVSxDQUFDLENBQUM7QUFDOUQ7QUFBeUIsUUFBckIsTUFBTSxlQUFlLElBQWEsTUFBTSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUMsQ0FBQztBQUNwRjtBQUN3QixRQUFwQixJQUFJLFdBQVcsQ0FBUztBQUM1QjtBQUF5QixRQUFyQixJQUFJLFdBQVcsQ0FBUztBQUM1QixRQUFJLElBQUksaUJBQWlCLEVBQUU7QUFDM0IsWUFBTSxJQUFJLGtCQUFrQixDQUFDLFFBQVEsS0FBSyxDQUFDLEVBQUU7QUFDN0MsZ0JBQVEsT0FBTztBQUNmLGFBQU87QUFDUCxZQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDMUQsWUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzFELFNBQUs7QUFBQyxhQUFLLElBQUksZUFBZSxFQUFFO0FBQ2hDLFlBQU0sSUFBSSxpQkFBaUIsQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLGlCQUFpQixFQUFFO0FBQ2pFLGdCQUFRLE9BQU87QUFDZixhQUFPO0FBQ1AsWUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3pELFlBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN6RCxTQUFLO0FBQUMsYUFBSztBQUNYLFlBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMzRCxZQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDM0QsU0FBSztBQUNMLFFBQ0ksSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUN2RDtBQUVDO0FBQVE7QUFBOEI7QUFDekI7QUFBbUI7QUFBUSxJQUEvQixtQkFBbUIsQ0FBQyxXQUFtQixFQUFFLFdBQW1CO0FBQUksUUFDdEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztBQUNqRSxZQUFRLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTtBQUNqRCxZQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztBQUM5QyxZQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMscUJBQXFCLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDOUgsU0FBSztBQUNMLFFBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztBQUNqRSxZQUFRLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTtBQUNqRCxZQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztBQUM5QyxZQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMscUJBQXFCLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDOUgsU0FBSztBQUNMLFFBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7QUFDcEMsUUFBSSxJQUFJLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQztBQUNyQyxRQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUMzQixRQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7QUFDM0UsUUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0FBQzNFO0FBRUM7QUFBUTtBQUEyQjtBQUFtQjtBQUFRLElBQ3JELHNCQUFzQixDQUFDLFFBQWdCO0FBQUksUUFDakQsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQyxRQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNwQixZQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUU7QUFDdEMsZ0JBQVEsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakQsYUFBTztBQUFDLGlCQUFLO0FBQ2IsZ0JBQVEsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRTtBQUMxQyxvQkFBVSxJQUFJLElBQUksQ0FBQyxzQkFBc0IsS0FBSyxXQUFXLENBQUMsR0FBRztBQUM3RCx3QkFBYyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRTtBQUM3Qyx3QkFBWSxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNqRSxxQkFBVztBQUFDLHlCQUFLLElBQUksSUFBSSxDQUFDLHNCQUFzQixLQUFLLFdBQVcsQ0FBQyxHQUFHO0FBQ3BFLHdCQUFxQixRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTtBQUNuRCx3QkFBWSxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNoRSxxQkFBVztBQUNYLGlCQUFTO0FBQ1QsZ0JBQVEsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNuRDtBQUNRLGdCQUFBLElBQUksSUFBSSxDQUFDLHNCQUFzQixLQUFLLFdBQVcsQ0FBQyxHQUFHLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUU7QUFDOUYsb0JBQVUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO0FBQ2pELG9CQUFVLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUNqQyxvQkFBVSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzlFLG9CQUFVLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0FBQ3RDLG9CQUFVLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDO0FBQ3hELG9CQUFVLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0FBQy9DLG9CQUFVLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQzlDLG9CQUFVLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUU7QUFDaEQsd0JBQVksSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO0FBQzFDLHFCQUFXO0FBQ1gsaUJBQVM7QUFBQyxxQkFBSyxJQUFJLElBQUksQ0FBQyxzQkFBc0IsS0FBSyxXQUFXLENBQUMsR0FBRztBQUNsRSxvQkFBbUIsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUU7QUFDakQsb0JBQVUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0FBQ2pELG9CQUFVLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUNqQyxvQkFBVSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzlFLG9CQUFVLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0FBQ3RDLG9CQUFVLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDO0FBQ3hELG9CQUFVLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0FBQy9DLG9CQUFVLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQzlDLG9CQUFVLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUU7QUFDaEQsd0JBQVksSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO0FBQzFDLHFCQUFXO0FBQ1gsaUJBQVM7QUFDVCxhQUFPO0FBQ1AsU0FBSztBQUNMLFFBQ0ksSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUUsS0FBSyxRQUFRLEVBQUU7QUFDckQsWUFBTSxJQUFJLElBQUksQ0FBQyxzQkFBc0IsS0FBSyxXQUFXLENBQUMsR0FBRyxFQUFFO0FBQzNELGdCQUFRLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO0FBQ3JDLGdCQUFRLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUMvQixhQUFPO0FBQUMsaUJBQUssSUFBSSxJQUFJLENBQUMsc0JBQXNCLEtBQUssV0FBVyxDQUFDLEdBQUcsRUFBRTtBQUNsRSxnQkFBUSxJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQztBQUN0QyxnQkFBUSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDL0IsYUFBTztBQUNQLFlBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQ3RGLFlBQU0sSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7QUFDbEMsU0FBSztBQUNMO0FBRUM7QUFBUTtBQUEyQjtBQUNwQztBQUFRLElBREUsZ0JBQWdCLENBQUMsUUFBZ0I7QUFBSSxRQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO0FBQzNHLFlBQU0sT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztBQUN2QyxTQUFLO0FBQ0wsUUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO0FBQzNHLFlBQU0sT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztBQUN2QyxTQUFLO0FBQ0wsUUFBSSxPQUFPLFFBQVEsQ0FBQztBQUNwQjtBQUVDO0FBQVE7QUFBMkI7QUFDcEM7QUFBUSxJQURFLGdCQUFnQixDQUFDLFFBQWdCO0FBQUk7QUFDOUIsUUFBYixNQUFNLGFBQWEsR0FBVyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsS0FBSyxXQUFXLENBQUMsR0FBRztBQUNsRixjQUFRLElBQUksQ0FBQyxhQUFhO0FBQzFCLGNBQVEsSUFBSSxDQUFDLFlBQVksQ0FBQztBQUMxQjtBQUF5QixRQUFyQixNQUFNLFVBQVUsR0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsQ0FBQztBQUNsRSxRQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUNuRSxZQUFNLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO0FBQ2xELGdCQUFRLElBQUksSUFBSSxDQUFDLHNCQUFzQixLQUFLLFdBQVcsQ0FBQyxHQUFHLEVBQUU7QUFDN0Qsb0JBQVUsT0FBTyxVQUFVLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ25JLGlCQUFTO0FBQUMscUJBQUssSUFBSSxJQUFJLENBQUMsc0JBQXNCLEtBQUssV0FBVyxDQUFDLEdBQUcsRUFBRTtBQUNwRSxvQkFBVSxPQUFPLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDbEksaUJBQVM7QUFDVCxhQUFPO0FBQ1AsU0FBSztBQUNMLFFBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQ25FLFlBQU0sSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUU7QUFDbEQsZ0JBQVEsSUFBSSxJQUFJLENBQUMsc0JBQXNCLEtBQUssV0FBVyxDQUFDLEdBQUcsRUFBRTtBQUM3RCxvQkFBVSxPQUFPLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDbkksaUJBQVM7QUFBQyxxQkFBSyxJQUFJLElBQUksQ0FBQyxzQkFBc0IsS0FBSyxXQUFXLENBQUMsR0FBRyxFQUFFO0FBQ3BFLG9CQUFVLE9BQU8sVUFBVSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNsSSxpQkFBUztBQUNULGFBQU87QUFDUCxTQUFLO0FBQ0wsUUFBSSxPQUFPLFFBQVEsQ0FBQztBQUNwQjtBQUVDO0FBQVE7QUFBMkI7QUFDbEM7QUFBUSxJQURBLGNBQWMsQ0FBQyxRQUFnQjtBQUFJO0FBQzVCLFFBQWIsTUFBTSxVQUFVLEdBQVcsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEtBQUssV0FBVyxDQUFDLEdBQUc7QUFDL0UsY0FBWSxJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVE7QUFDekMsY0FBWSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztBQUN6QztBQUF5QixRQUFyQixNQUFNLFFBQVEsR0FBVyxDQUFDLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO0FBQ3ZGLGNBQVksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRO0FBQ3JDLGNBQVksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7QUFDbEM7QUFBeUIsUUFBckIsTUFBTSxRQUFRLEdBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7QUFDdkQ7QUFDSSxRQUFBLElBQUksVUFBVSxHQUFHLFFBQVEsRUFBRTtBQUMvQixZQUFNLElBQUksSUFBSSxDQUFDLHNCQUFzQixLQUFLLFdBQVcsQ0FBQyxHQUFHLEVBQUU7QUFDM0QsZ0JBQVEsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMscUJBQXFCLENBQ25ELElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDakcsZ0JBQVEsUUFBUSxHQUFHLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3BILGdCQUFRLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUMvQixnQkFBUSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztBQUN0RixhQUFPO0FBQUMsaUJBQUssSUFBSSxJQUFJLENBQUMsc0JBQXNCLEtBQUssV0FBVyxDQUFDLEdBQUcsRUFBRTtBQUNsRSxnQkFBUSxJQUFJLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQyxxQkFBcUIsQ0FDbEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNsRyxnQkFBUSxRQUFRLEdBQUcsVUFBVSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDbkgsZ0JBQVEsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0FBQy9CLGdCQUFRLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0FBQ3JGLGFBQU87QUFDUCxZQUFNLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0FBQ2xDLFNBQUs7QUFBQyxhQUFLLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksVUFBVSxHQUFHLFFBQVEsRUFBRTtBQUNsRjtBQUNNLFlBQUEsSUFBSSxJQUFJLENBQUMsc0JBQXNCLEtBQUssV0FBVyxDQUFDLEdBQUcsRUFBRTtBQUMzRCxnQkFBUSxJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEdBQUcsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDcEgsZ0JBQVEsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0FBQy9CLGdCQUFRLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FDM0UsQ0FBQztBQUNWLGFBQU87QUFBQyxpQkFBSyxJQUFJLElBQUksQ0FBQyxzQkFBc0IsS0FBSyxXQUFXLENBQUMsR0FBRyxFQUFFO0FBQ2xFLGdCQUFRLElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsR0FBRyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNuSCxnQkFBUSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDL0IsZ0JBQVEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7QUFDckYsYUFBTztBQUNQLFlBQU0sSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7QUFDbEMsU0FBSztBQUNMLFFBQUksT0FBTyxRQUFRLENBQUM7QUFDcEI7QUFFQztBQUFRO0FBQW1CO0FBQVEsSUFBMUIsZ0JBQWdCO0FBQUs7QUFDckIsUUFBTixNQUFNLGFBQWEsR0FBa0IsSUFBSSxhQUFhLEVBQUUsQ0FBQztBQUM3RCxRQUFJLGFBQWEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0FBQzVELFFBQUksYUFBYSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDdEMsUUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDcEIsWUFBTSxhQUFhLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUNoRCxTQUFLO0FBQ0wsUUFBSSxPQUFPLGFBQWEsQ0FBQztBQUN6QjtBQUVBOzJDQTl0RUMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxZQUFZLGtCQUN0QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUpBc0NKO0lBQ04sTUFBTSxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c25CQUFnNkosQ0FBQyxrQkFDMTZKLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsa0JBQzdCLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDLGNBQy9DLDAvSEFDSztBQUFDO0FBQW1CO0FBQXlDLFlBL0pqRSxTQUFTO0FBQ1QsWUFGQSxVQUFVO0FBQ1YsWUFLQSxpQkFBaUI7QUFDakIsWUFFQSxNQUFNO0FBQ047QUFBRztBQUVVLG9CQXNKWixLQUFLO0FBQ04sMEJBRUMsTUFBTTtBQUNQLHdCQUdDLEtBQUs7QUFDTiw4QkFFQyxNQUFNO0FBQ1Asc0JBSUMsS0FBSztBQUNOLDhCQUdDLE1BQU07QUFDUCx5QkFHQyxNQUFNO0FBQ1AsNEJBR0MsTUFBTTtBQUNQLDRCQUlDLEtBQUs7QUFBSywyQkFVVixLQUFLO0FBQUssMkNBb0RWLFNBQVMsU0FBQyx1QkFBdUIsRUFBRSxFQUFDLElBQUksRUFBRSxzQkFBc0IsRUFBQztBQUMvRCw0Q0FHRixTQUFTLFNBQUMsd0JBQXdCLEVBQUUsRUFBQyxJQUFJLEVBQUUsc0JBQXNCLEVBQUM7QUFDaEUsNkJBR0YsU0FBUyxTQUFDLFNBQVMsRUFBRSxFQUFDLElBQUksRUFBRSxzQkFBc0IsRUFBQztBQUNqRCxrQ0FHRixTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUMsSUFBSSxFQUFFLHNCQUFzQixFQUFDO0FBQ3RELCtCQUdGLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBQyxJQUFJLEVBQUUscUJBQXFCLEVBQUM7QUFDbEQsK0JBR0YsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFDLElBQUksRUFBRSxxQkFBcUIsRUFBQztBQUNsRCxnQ0FHRixTQUFTLFNBQUMsWUFBWSxFQUFFLEVBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFDO0FBQ2xELCtCQUdGLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUM7QUFDakQsb0NBR0YsU0FBUyxTQUFDLGdCQUFnQixFQUFFLEVBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFDO0FBQ3RELG9DQUdGLFNBQVMsU0FBQyxnQkFBZ0IsRUFBRSxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBQztBQUN0RCxtQ0FHRixTQUFTLFNBQUMsZUFBZSxFQUFFLEVBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFDO0FBQ3JELDJCQUdGLFNBQVMsU0FBQyxjQUFjLEVBQUUsRUFBQyxJQUFJLEVBQUUsc0JBQXNCLEVBQUM7QUFDdEQsOEJBR0YsWUFBWSxTQUFDLGlCQUFpQjtBQUM1Qix5Q0FHRixXQUFXLFNBQUMsZ0JBQWdCO0FBQzFCLHdDQUNGLFdBQVcsU0FBQyxlQUFlO0FBQ3pCLDJDQUNGLFdBQVcsU0FBQyxtQkFBbUI7QUFDN0Isd0NBQ0YsV0FBVyxTQUFDLGVBQWU7QUFDekIsdUJBNEpGLFlBQVksU0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUM7QUFDdkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQztBQUFDO0FBQUk7QUFDSjtBQUdTO0FDdGVqQjtBQUFnQzttREFFL0IsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRTtBQUE0QixrQkFDdEMsUUFBUSxFQUFFLHNXQVFJLGtCQUNkLE1BQU0sRUFBRSxDQUFDO2lCQUF3QyxDQUFDLGNBQ25EOzs7Ozs7c0lBQ0s7QUFBQztBQUVQLHVCQURHLEtBQUs7QUFDTixzQkFFQyxLQUFLO0FBQ04sd0JBRUMsS0FBSztBQUNOLHNCQUVDLEtBQUs7QUFDUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUM7QUFBQztBQUFJO0FBRWE7QUFBa0U7QUM1QnhGO0FBQUk7QUFBb0I7QUFBRztBQUNDO0FBMkI1QjtBQUF3QjsyQ0FmdkIsUUFBUSxTQUFDO0dBQ1IsT0FBTyxFQUFFLHNCQUNQLFlBQVksa0JBQ2Isa0JBQ0QsWUFBWSxFQUFFLHNCQUNaLGVBQWU7T0FDZjtJQUFzQjtXQUN0QixxQkFBcUIsc0JBQ3JCLG9CQUFvQixzQkFDcEIsdUJBQXVCLGtCQUN4QixrQkFDRCxPQUFPLEVBQUUsc0JBQ1AsZUFBZSxrQkFDaEIsY0FDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUNLO0FBQUM7QUFBQztBQUFJO0FBQ0M7QUFBa0U7QUFBSTtBQUFDO0FBQUk7QUFBa0M7QUFBa0U7QUFBSTtBQUFDOztBYnhCQSxBQUFBLEFBRUEsQUFBQSxBQUVBLEFBQUEsQUFFQSxBQUFBLEFBRUEsQUFBQSxBQVJBLEFBQUEsQUFFQSxBQUFBLEFBRUEsQUFBQSxBQUVBLEFBQUEsQUFFQSxBQUFBLEFBNkJBLEFBR0EsQUFBQSxBQUlBLEFBQUEsQUFJQSxBQUFBLEFBS0EsQUFBQSxBQUtBLEFBQUEsQUFNQSxBQUFBLEFBSUEsQUFBQSxBQUlBLEFBQUEsQUFJQSxBQUFBLEFBT0EsQUFBQSxBQVFBLEFBQUEsQUFTQSxBQUFBLEFBR0EsQUFBQSxBQUlBLEFBQUEsQUFJQSxBQUFBLEFBR0EsQUFBQSxBQUdBLEFBQUEsQUFJQSxBQUFBLEFBSUEsQUFBQSxBQUdBLEFBQUEsQUFHQSxBQUFBLEFBR0EsQUFBQSxBQUdBLEFBQUEsQUFHQSxBQUFBLEFBSUEsQUFBQSxBQUlBLEFBQUEsQUFJQSxBQUFBLEFBSUEsQUFBQSxBQUdBLEFBQUEsQUFHQSxBQUFBLEFBSUEsQUFBQSxBQUlBLEFBQUEsQUFLQSxBQUFBLEFBSUEsQUFBQSxBQUdBLEFBQUEsQUFLQSxBQUFBLEFBUUEsQUFBQSxBQUdBLEFBQUEsQUFTQSxBQUFBLEFBVUEsQUFBQSxBQUlBLEFBQUEsQUFLQSxBQUFBLEFBS0EsQUFBQSxBQUtBLEFBQUEsQUFHQSxBQUFBLEFBR0EsQUFBQSxBQUlBLEFBQUEsQUFVQSxBQUFBLEFBR0EsQUFBQSxBQUdBLEFBQUEsQUFLQSxBQUFBLEFBS0EsQUFBQSxBQUtBLEFBQUEsQUFJQSxBQUFBLEFBR0EsQUFBQSxBQUlBLEFBQUEsQUFHQSxBQUFBLEFBSUEsQUFBQSxBQUdBLEFBQUEsQUFHQSxBQUFBLEFBR0EsQUFBQSxBQUdBLEFBQUEsQUFDQSxBQ3RUQSxBQUFBLEFBRUEsQUFBQSxBQUZBLEFBQUEsQUFFQSxBQUFBLEFDSEEsQUFJQSxBQ0RBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFDdERBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFDbkJBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUNiQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQ05BLEFBVUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQ3RGQSxBQXVEQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQTlDQSxBQUFBLEFBS0EsQUFBQSxBQUtBLEFBQUEsQUFLQSxBQUFBLEFBS0EsQUFBQSxBQU1BLEFBQUEsQUFHQSxBQUFBLEFBR0EsQUFBQSxBQUdBLEFBQUEsQUFHQSxBQUFBLEFBR0EsQUFBQSxBQUdBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBL0NBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUEyQkEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBRUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUExS0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQVBBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQWtDQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUNqREEsQUFNQSxBQUFBLEFBQUEsQUFtQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQWxDQSxBQUFBLEFBR0EsQUFBQSxBQUdBLEFBQUEsQUFHQSxBQUFBLEFBR0EsQUFBQSxBQUdBLEFBQUEsQUFHQSxBQUFBLEFBR0EsQUFBQSxBQUdBLEFBQUEsQUFHQSxBQUFBLEFBUUEsQUFOQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQXBDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBTEEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBT0EsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUNsQ0EsQUFPQSxBQUFBLEFBQUEsQUFNQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBTkEsQUFBQSxBQU9BLEFBTkEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFNQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQTlCQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBTkEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFDQUEsQUF5REEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUVBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFFQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUtBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBVUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFnREEsQUErTEEsQUFBQSxBQUNBLEFBQ0EsQUFDQSxBQUhBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUEvTEEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBS0EsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUE0QkEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUdBLEFBQUEsQUFFQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBRUEsQUFBQSxBQUdBLEFBQUEsQUFFQSxBQUFBLEFBRUEsQUFBQSxBQUVBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQTBEQSxBQUFBLEFBRUEsQUFBQSxBQUVBLEFBQUEsQUFFQSxBQUFBLEFBR0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBU0EsQUFBQSxBQUVBLEFBQUEsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFFQSxBQUFBLEFBR0EsQUFBQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBT0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFqS0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQWdIQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQWdDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUtBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFJQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQU1BLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFDQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFJQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBSUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFJQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBS0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQU1BLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUlBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBS0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBT0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBSUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUlBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFJQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUNBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFJQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFLQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBR0EsQUFIQSxBQUNBLEFBQUEsQUFFQSxBQUhBLEFBRUEsQUFBQSxBQUNBLEFBSEEsQUFHQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBM3RFQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQXNDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQTlKQSxBQUFBLEFBREEsQUFBQSxBQU1BLEFBQUEsQUFHQSxBQUFBLEFBeUpBLEFBQUEsQUFHQSxBQUFBLEFBSUEsQUFBQSxBQUdBLEFBQUEsQUFLQSxBQUFBLEFBSUEsQUFBQSxBQUlBLEFBQUEsQUFJQSxBQUFBLEFBS0EsQUFBQSxBQVVBLEFBQUEsQUFvREEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQTZKQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFDamVBLEFBRUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFRQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUdBLEFBQUEsQUFHQSxBQUFBLEFBR0EsQUFBQSxBQ3pCQSxBQTRCQSxBQWZBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvaW50ZXJUeXBlIH0gZnJvbSAnLi9wb2ludGVyLXR5cGUnO1xuXG4vKiogTGFiZWwgdHlwZSAqL1xuZXhwb3J0IGVudW0gTGFiZWxUeXBlIHtcbiAgLyoqIExhYmVsIGFib3ZlIGxvdyBwb2ludGVyICovXG4gIExvdyxcbiAgLyoqIExhYmVsIGFib3ZlIGhpZ2ggcG9pbnRlciAqL1xuICBIaWdoLFxuICAvKiogTGFiZWwgZm9yIG1pbmltdW0gc2xpZGVyIHZhbHVlICovXG4gIEZsb29yLFxuICAvKiogTGFiZWwgZm9yIG1heGltdW0gc2xpZGVyIHZhbHVlICovXG4gIENlaWwsXG4gIC8qKiBMYWJlbCBiZWxvdyBsZWdlbmQgdGljayAqL1xuICBUaWNrVmFsdWVcbn1cblxuLyoqIEZ1bmN0aW9uIHRvIHRyYW5zbGF0ZSBsYWJlbCB2YWx1ZSBpbnRvIHRleHQgKi9cbmV4cG9ydCB0eXBlIFRyYW5zbGF0ZUZ1bmN0aW9uID0gKHZhbHVlOiBudW1iZXIsIGxhYmVsOiBMYWJlbFR5cGUpID0+IHN0cmluZztcbi8qKiBGdW5jdGlvbiB0byBjb21iaW5kICovXG5leHBvcnQgdHlwZSBDb21iaW5lTGFiZWxzRnVuY3Rpb24gPSAobWluTGFiZWw6IHN0cmluZywgbWF4TGFiZWw6IHN0cmluZykgPT4gc3RyaW5nO1xuLyoqIEZ1bmN0aW9uIHRvIHByb3ZpZGUgbGVnZW5kICAqL1xuZXhwb3J0IHR5cGUgR2V0TGVnZW5kRnVuY3Rpb24gPSAodmFsdWU6IG51bWJlcikgPT4gc3RyaW5nO1xuXG4vKiogRnVuY3Rpb24gY29udmVydGluZyBzbGlkZXIgdmFsdWUgdG8gc2xpZGVyIHBvc2l0aW9uICovXG5leHBvcnQgdHlwZSBWYWx1ZVRvUG9zaXRpb25GdW5jdGlvbiA9ICh2YWw6IG51bWJlciwgbWluVmFsOiBudW1iZXIsIG1heFZhbDogbnVtYmVyKSA9PiBudW1iZXI7XG5cbi8qKiBGdW5jdGlvbiBjb252ZXJ0aW5nIHNsaWRlciBwb3NpdGlvbiB0byBzbGlkZXIgdmFsdWUgKi9cbmV4cG9ydCB0eXBlIFBvc2l0aW9uVG9WYWx1ZUZ1bmN0aW9uID0gKHBlcmNlbnQ6IG51bWJlciwgbWluVmFsOiBudW1iZXIsIG1heFZhbDogbnVtYmVyKSA9PiBudW1iZXI7XG5cbi8qKlxuICogQ3VzdG9tIHN0ZXAgZGVmaW5pdGlvblxuICpcbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gc3BlY2lmeSBjdXN0b20gdmFsdWVzIGFuZCBsZWdlbmQgdmFsdWVzIGZvciBzbGlkZXIgdGlja3NcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDdXN0b21TdGVwRGVmaW5pdGlvbiB7XG4gIC8qKiBWYWx1ZSAqL1xuICB2YWx1ZTogbnVtYmVyO1xuICAvKiogTGVnZW5kIChsYWJlbCBmb3IgdGhlIHZhbHVlKSAqL1xuICBsZWdlbmQ/OiBzdHJpbmc7XG59XG5cbi8qKiBTbGlkZXIgb3B0aW9ucyAqL1xuZXhwb3J0IGNsYXNzIE9wdGlvbnMge1xuICAvKiogTWluaW11bSB2YWx1ZSBmb3IgYSBzbGlkZXIuXG4gICAgTm90IGFwcGxpY2FibGUgd2hlbiB1c2luZyBzdGVwc0FycmF5LiAqL1xuICBmbG9vcj86IG51bWJlciA9IDA7XG5cbiAgLyoqIE1heGltdW0gdmFsdWUgZm9yIGEgc2xpZGVyLlxuICAgIE5vdCBhcHBsaWNhYmxlIHdoZW4gdXNpbmcgc3RlcHNBcnJheS4gKi9cbiAgY2VpbD86IG51bWJlciA9IG51bGw7XG5cbiAgLyoqIFN0ZXAgYmV0d2VlbiBlYWNoIHZhbHVlLlxuICAgIE5vdCBhcHBsaWNhYmxlIHdoZW4gdXNpbmcgc3RlcHNBcnJheS4gKi9cbiAgc3RlcD86IG51bWJlciA9IDE7XG5cbiAgLyoqIFRoZSBtaW5pbXVtIHJhbmdlIGF1dGhvcml6ZWQgb24gdGhlIHNsaWRlci5cbiAgICBBcHBsaWVzIHRvIHJhbmdlIHNsaWRlciBvbmx5LlxuICAgIFdoZW4gdXNpbmcgc3RlcHNBcnJheSwgZXhwcmVzc2VkIGFzIGluZGV4IGludG8gc3RlcHNBcnJheS4gKi9cbiAgbWluUmFuZ2U/OiBudW1iZXIgPSBudWxsO1xuXG4gIC8qKiBUaGUgbWF4aW11bSByYW5nZSBhdXRob3JpemVkIG9uIHRoZSBzbGlkZXIuXG4gICAgQXBwbGllcyB0byByYW5nZSBzbGlkZXIgb25seS5cbiAgICBXaGVuIHVzaW5nIHN0ZXBzQXJyYXksIGV4cHJlc3NlZCBhcyBpbmRleCBpbnRvIHN0ZXBzQXJyYXkuICovXG4gIG1heFJhbmdlPzogbnVtYmVyID0gbnVsbDtcblxuICAvKiogU2V0IHRvIHRydWUgdG8gaGF2ZSBhIHB1c2ggYmVoYXZpb3IuIFdoZW4gdGhlIG1pbiBoYW5kbGUgZ29lcyBhYm92ZSB0aGUgbWF4LFxuICAgIHRoZSBtYXggaXMgbW92ZWQgYXMgd2VsbCAoYW5kIHZpY2UtdmVyc2EpLiBUaGUgcmFuZ2UgYmV0d2VlbiBtaW4gYW5kIG1heCBpc1xuICAgIGRlZmluZWQgYnkgdGhlIHN0ZXAgb3B0aW9uIChkZWZhdWx0cyB0byAxKSBhbmQgY2FuIGFsc28gYmUgb3ZlcnJpZGVuIGJ5XG4gICAgdGhlIG1pblJhbmdlIG9wdGlvbi4gQXBwbGllcyB0byByYW5nZSBzbGlkZXIgb25seS4gKi9cbiAgcHVzaFJhbmdlPzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBUaGUgbWluaW11bSB2YWx1ZSBhdXRob3JpemVkIG9uIHRoZSBzbGlkZXIuXG4gICAgV2hlbiB1c2luZyBzdGVwc0FycmF5LCBleHByZXNzZWQgYXMgaW5kZXggaW50byBzdGVwc0FycmF5LiAqL1xuICBtaW5MaW1pdD86IG51bWJlciA9IG51bGw7XG5cbiAgLyoqIFRoZSBtYXhpbXVtIHZhbHVlIGF1dGhvcml6ZWQgb24gdGhlIHNsaWRlci5cbiAgICBXaGVuIHVzaW5nIHN0ZXBzQXJyYXksIGV4cHJlc3NlZCBhcyBpbmRleCBpbnRvIHN0ZXBzQXJyYXkuICovXG4gIG1heExpbWl0PzogbnVtYmVyID0gbnVsbDtcblxuICAvKiogQ3VzdG9tIHRyYW5zbGF0ZSBmdW5jdGlvbi4gVXNlIHRoaXMgaWYgeW91IHdhbnQgdG8gdHJhbnNsYXRlIHZhbHVlcyBkaXNwbGF5ZWRcbiAgICAgIG9uIHRoZSBzbGlkZXIuICovXG4gIHRyYW5zbGF0ZT86IFRyYW5zbGF0ZUZ1bmN0aW9uID0gbnVsbDtcblxuICAvKiogQ3VzdG9tIGZ1bmN0aW9uIGZvciBjb21iaW5pbmcgb3ZlcmxhcHBpbmcgbGFiZWxzIGluIHJhbmdlIHNsaWRlci5cbiAgICAgIEl0IHRha2VzIHRoZSBtaW4gYW5kIG1heCB2YWx1ZXMgKGFscmVhZHkgdHJhbnNsYXRlZCB3aXRoIHRyYW5zbGF0ZSBmdWN0aW9uKVxuICAgICAgYW5kIHNob3VsZCByZXR1cm4gaG93IHRoZXNlIHR3byB2YWx1ZXMgc2hvdWxkIGJlIGNvbWJpbmVkLlxuICAgICAgSWYgbm90IHByb3ZpZGVkLCB0aGUgZGVmYXVsdCBmdW5jdGlvbiB3aWxsIGpvaW4gdGhlIHR3byB2YWx1ZXMgd2l0aFxuICAgICAgJyAtICcgYXMgc2VwYXJhdG9yLiAqL1xuICBjb21iaW5lTGFiZWxzPzogQ29tYmluZUxhYmVsc0Z1bmN0aW9uID0gbnVsbDtcblxuICAvKiogVXNlIHRvIGRpc3BsYXkgbGVnZW5kIHVuZGVyIHRpY2tzICh0aHVzLCBpdCBuZWVkcyB0byBiZSB1c2VkIGFsb25nIHdpdGhcbiAgICAgc2hvd1RpY2tzIG9yIHNob3dUaWNrc1ZhbHVlcykuIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB3aXRoIGVhY2ggdGlja1xuICAgICB2YWx1ZSBhbmQgcmV0dXJuZWQgY29udGVudCB3aWxsIGJlIGRpc3BsYXllZCB1bmRlciB0aGUgdGljayBhcyBhIGxlZ2VuZC5cbiAgICAgSWYgdGhlIHJldHVybmVkIHZhbHVlIGlzIG51bGwsIHRoZW4gbm8gbGVnZW5kIGlzIGRpc3BsYXllZCB1bmRlclxuICAgICB0aGUgY29ycmVzcG9uZGluZyB0aWNrLllvdSBjYW4gYWxzbyBkaXJlY3RseSBwcm92aWRlIHRoZSBsZWdlbmQgdmFsdWVzXG4gICAgIGluIHRoZSBzdGVwc0FycmF5IG9wdGlvbi4gKi9cbiAgZ2V0TGVnZW5kPzogR2V0TGVnZW5kRnVuY3Rpb24gPSBudWxsO1xuXG4gIC8qKiBJZiB5b3Ugd2FudCB0byBkaXNwbGF5IGEgc2xpZGVyIHdpdGggbm9uIGxpbmVhci9udW1iZXIgc3RlcHMuXG4gICAgIEp1c3QgcGFzcyBhbiBhcnJheSB3aXRoIGVhY2ggc2xpZGVyIHZhbHVlIGFuZCB0aGF0J3MgaXQ7IHRoZSBmbG9vciwgY2VpbCBhbmQgc3RlcCBzZXR0aW5nc1xuICAgICBvZiB0aGUgc2xpZGVyIHdpbGwgYmUgY29tcHV0ZWQgYXV0b21hdGljYWxseS5cbiAgICAgQnkgZGVmYXVsdCwgdGhlIHZhbHVlIG1vZGVsIGFuZCB2YWx1ZUhpZ2ggbW9kZWwgdmFsdWVzIHdpbGwgYmUgdGhlIHZhbHVlIG9mIHRoZSBzZWxlY3RlZCBpdGVtXG4gICAgIGluIHRoZSBzdGVwc0FycmF5LlxuICAgICBUaGV5IGNhbiBhbHNvIGJlIGJvdW5kIHRvIHRoZSBpbmRleCBvZiB0aGUgc2VsZWN0ZWQgaXRlbSBieSBzZXR0aW5nIHRoZSBiaW5kSW5kZXhGb3JTdGVwc0FycmF5XG4gICAgIG9wdGlvbiB0byB0cnVlLiAqL1xuICBzdGVwc0FycmF5PzogQ3VzdG9tU3RlcERlZmluaXRpb25bXSA9IG51bGw7XG5cbiAgLyoqIFNldCB0byB0cnVlIHRvIGJpbmQgdGhlIGluZGV4IG9mIHRoZSBzZWxlY3RlZCBpdGVtIHRvIHZhbHVlIG1vZGVsIGFuZCB2YWx1ZUhpZ2ggbW9kZWwuICovXG4gIGJpbmRJbmRleEZvclN0ZXBzQXJyYXk/OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIFdoZW4gc2V0IHRvIHRydWUgYW5kIHVzaW5nIGEgcmFuZ2Ugc2xpZGVyLCB0aGUgcmFuZ2UgY2FuIGJlIGRyYWdnZWQgYnkgdGhlIHNlbGVjdGlvbiBiYXIuXG4gICAgQXBwbGllcyB0byByYW5nZSBzbGlkZXIgb25seS4gKi9cbiAgZHJhZ2dhYmxlUmFuZ2U/OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIFNhbWUgYXMgZHJhZ2dhYmxlUmFuZ2UgYnV0IHRoZSBzbGlkZXIgcmFuZ2UgY2FuJ3QgYmUgY2hhbmdlZC5cbiAgICBBcHBsaWVzIHRvIHJhbmdlIHNsaWRlciBvbmx5LiAqL1xuICBkcmFnZ2FibGVSYW5nZU9ubHk/OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIFNldCB0byB0cnVlIHRvIGFsd2F5cyBzaG93IHRoZSBzZWxlY3Rpb24gYmFyIGJlZm9yZSB0aGUgc2xpZGVyIGhhbmRsZS4gKi9cbiAgc2hvd1NlbGVjdGlvbkJhcj86IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogU2V0IHRvIHRydWUgdG8gYWx3YXlzIHNob3cgdGhlIHNlbGVjdGlvbiBiYXIgYWZ0ZXIgdGhlIHNsaWRlciBoYW5kbGUuICovXG4gIHNob3dTZWxlY3Rpb25CYXJFbmQ/OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqICBTZXQgYSBudW1iZXIgdG8gZHJhdyB0aGUgc2VsZWN0aW9uIGJhciBiZXR3ZWVuIHRoaXMgdmFsdWUgYW5kIHRoZSBzbGlkZXIgaGFuZGxlLlxuICAgIFdoZW4gdXNpbmcgc3RlcHNBcnJheSwgZXhwcmVzc2VkIGFzIGluZGV4IGludG8gc3RlcHNBcnJheS4gKi9cbiAgc2hvd1NlbGVjdGlvbkJhckZyb21WYWx1ZT86IG51bWJlciA9IG51bGw7XG5cbiAgLyoqICBPbmx5IGZvciByYW5nZSBzbGlkZXIuIFNldCB0byB0cnVlIHRvIHZpc3VhbGl6ZSBpbiBkaWZmZXJlbnQgY29sb3VyIHRoZSBhcmVhc1xuICAgIG9uIHRoZSBsZWZ0L3JpZ2h0ICh0b3AvYm90dG9tIGZvciB2ZXJ0aWNhbCByYW5nZSBzbGlkZXIpIG9mIHNlbGVjdGlvbiBiYXIgYmV0d2VlbiB0aGUgaGFuZGxlcy4gKi9cbiAgc2hvd091dGVyU2VsZWN0aW9uQmFycz86IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogU2V0IHRvIHRydWUgdG8gaGlkZSBwb2ludGVyIGxhYmVscyAqL1xuICBoaWRlUG9pbnRlckxhYmVscz86IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogU2V0IHRvIHRydWUgdG8gaGlkZSBtaW4gLyBtYXggbGFiZWxzICAqL1xuICBoaWRlTGltaXRMYWJlbHM/OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHRoZSBhdXRvLWhpZGluZyBiZWhhdmlvciBvZiB0aGUgbGltaXQgbGFiZWxzLiAqL1xuICBhdXRvSGlkZUxpbWl0TGFiZWxzPzogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqIFNldCB0byB0cnVlIHRvIG1ha2UgdGhlIHNsaWRlciByZWFkLW9ubHkuICovXG4gIHJlYWRPbmx5PzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIHRoZSBzbGlkZXIuICovXG4gIGRpc2FibGVkPzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBUaHJvdHRsZSBpbnRlcnZhbCBmb3IgbW91c2UgZXZlbnRzIGluIG1pbGxpc2Vjb25kcy5cbiAgICogVGhpcyBpcyBwcm92aWRlZCB0byBhdm9pZCBhIGZsb29kIG9mIGV2ZW50cyB3aGVuIG1vdmluZyB0aGUgc2xpZGVyIHdpdGggbW91c2UuICovXG4gIG1vdXNlRXZlbnRzSW50ZXJ2YWw/OiBudW1iZXIgPSA1MDtcblxuICAvKiogVGhyb3R0bGUgaW50ZXJ2YWwgZm9yIHRvdWNoIGV2ZW50cyBpbiBtaWxsaXNlY29uZHMuXG4gICAqIFRoaXMgaXMgcHJvdmlkZWQgdG8gYXZvaWQgYSBmbG9vZCBvZiBldmVudHMgd2hlbiBtb3ZpbmcgdGhlIHNsaWRlciB3aXRoIHRvdWNoIGdlc3R1cmUuICovXG4gIHRvdWNoRXZlbnRzSW50ZXJ2YWw/OiBudW1iZXIgPSA1MDtcblxuICAvKiogVGhyb3R0bGUgaW50ZXJ2YWwgZm9yIGlucHV0IGNoYW5nZXMgKGNoYW5nZXMgdG8gYmluZGluZ3Mgb3IgcmVhY3RpdmUgZm9ybSBpbnB1dHMpXG4gICAqIFRoaXMgaXMgcHJvdmlkZWQgdG8gYXZvaWQgYSBmbG9vZCBvZiBldmVudHMgb24gZnJlcXVlbnQgaW5wdXQgYmluZGluZyBjaGFuZ2VzIGFmZmVjdGluZyBwZXJmb3JtYW5jZS4gKi9cbiAgaW5wdXRFdmVudHNJbnRlcnZhbD86IG51bWJlciA9IDEwMDtcblxuICAvKiogVGhyb3R0bGUgaW50ZXJ2YWwgZm9yIG91dHB1dCBjaGFuZ2VzIChzaWduYWxsaW5nIGNoYW5nZXMgdG8gb3V0cHV0IGJpbmRpbmdzIGFuZCB1c2VyIGNhbGxiYWNrcylcbiAgICogVGhpcyBpcyBwcm92aWRlZCB0byBhdm9pZCBhIGZsb29kIG9mIG91dGdvaW5nIGV2ZW50cyBhZmZlY3RpbmcgQW5ndWxhciBhcHAgcGVyZm9ybWFuY2UuICovXG4gIG91dHB1dEV2ZW50c0ludGVydmFsPzogbnVtYmVyID0gMTAwO1xuXG4gIC8qKiBTZXQgdG8gdHJ1ZSB0byBkaXNwbGF5IGEgdGljayBmb3IgZWFjaCBzdGVwIG9mIHRoZSBzbGlkZXIuICovXG4gIHNob3dUaWNrcz86IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogU2V0IHRvIHRydWUgdG8gZGlzcGxheSBhIHRpY2sgYW5kIHRoZSBzdGVwIHZhbHVlIGZvciBlYWNoIHN0ZXAgb2YgdGhlIHNsaWRlci4uICovXG4gIHNob3dUaWNrc1ZhbHVlcz86IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiBUaGUgc3RlcCBiZXR3ZWVuIGVhY2ggdGljayB0byBkaXNwbGF5LiBJZiBub3Qgc2V0LCB0aGUgc3RlcCB2YWx1ZSBpcyB1c2VkLlxuICAgIE5vdCB1c2VkIHdoZW4gdGlja3NBcnJheSBpcyBzcGVjaWZpZWQuICovXG4gIHRpY2tTdGVwPzogbnVtYmVyID0gbnVsbDtcblxuICAvKiBUaGUgc3RlcCBiZXR3ZWVuIGRpc3BsYXlpbmcgZWFjaCB0aWNrIHN0ZXAgdmFsdWUuXG4gICAgSWYgbm90IHNldCwgdGhlbiB0aWNrU3RlcCBvciBzdGVwIGlzIHVzZWQsIGRlcGVuZGluZyBvbiB3aGljaCBvbmUgaXMgc2V0LiAqL1xuICB0aWNrVmFsdWVTdGVwPzogbnVtYmVyID0gbnVsbDtcblxuICAvKiogVXNlIHRvIGRpc3BsYXkgdGlja3MgYXQgc3BlY2lmaWMgcG9zaXRpb25zLlxuICAgIFRoZSBhcnJheSBjb250YWlucyB0aGUgaW5kZXggb2YgdGhlIHRpY2tzIHRoYXQgc2hvdWxkIGJlIGRpc3BsYXllZC5cbiAgICBGb3IgZXhhbXBsZSwgWzAsIDEsIDVdIHdpbGwgZGlzcGxheSBhIHRpY2sgZm9yIHRoZSBmaXJzdCwgc2Vjb25kIGFuZCBzaXh0aCB2YWx1ZXMuICovXG4gIHRpY2tzQXJyYXk/OiBudW1iZXJbXSA9IG51bGw7XG5cbiAgLyoqIFVzZWQgdG8gZGlzcGxheSBhIHRvb2x0aXAgd2hlbiBhIHRpY2sgaXMgaG92ZXJlZC5cbiAgICBTZXQgdG8gYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHRvb2x0aXAgY29udGVudCBmb3IgYSBnaXZlbiB2YWx1ZS4gKi9cbiAgdGlja3NUb29sdGlwPzogKHZhbHVlOiBudW1iZXIpID0+IHN0cmluZyA9IG51bGw7XG5cbiAgLyoqIFNhbWUgYXMgdGlja3NUb29sdGlwIGJ1dCBmb3IgdGlja3MgdmFsdWVzLiAqL1xuICB0aWNrc1ZhbHVlc1Rvb2x0aXA/OiAodmFsdWU6IG51bWJlcikgPT4gc3RyaW5nID0gbnVsbDtcblxuICAvKiogU2V0IHRvIHRydWUgdG8gZGlzcGxheSB0aGUgc2xpZGVyIHZlcnRpY2FsbHkuXG4gICAgVGhlIHNsaWRlciB3aWxsIHRha2UgdGhlIGZ1bGwgaGVpZ2h0IG9mIGl0cyBwYXJlbnQuXG4gICAgQ2hhbmdpbmcgdGhpcyB2YWx1ZSBhdCBydW50aW1lIGlzIG5vdCBjdXJyZW50bHkgc3VwcG9ydGVkLiAqL1xuICB2ZXJ0aWNhbD86IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogRnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBjdXJyZW50IGNvbG9yIG9mIHRoZSBzZWxlY3Rpb24gYmFyLlxuICAgIElmIHlvdXIgY29sb3Igd29uJ3QgY2hhbmdlLCBkb24ndCB1c2UgdGhpcyBvcHRpb24gYnV0IHNldCBpdCB0aHJvdWdoIENTUy5cbiAgICBJZiB0aGUgcmV0dXJuZWQgY29sb3IgZGVwZW5kcyBvbiBhIG1vZGVsIHZhbHVlIChlaXRoZXIgdmFsdWUgb3IgdmFsdWVIaWdoKSxcbiAgICB5b3Ugc2hvdWxkIHVzZSB0aGUgYXJndW1lbnQgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbi5cbiAgICBJbmRlZWQsIHdoZW4gdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCwgdGhlcmUgaXMgbm8gY2VydGFpbnR5IHRoYXQgdGhlIG1vZGVsXG4gICAgaGFzIGFscmVhZHkgYmVlbiB1cGRhdGVkLiovXG4gIGdldFNlbGVjdGlvbkJhckNvbG9yPzogKG1pblZhbHVlOiBudW1iZXIsIG1heFZhbHVlPzogbnVtYmVyKSA9PiBzdHJpbmcgPSBudWxsO1xuXG4gIC8qKiBGdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGNvbG9yIG9mIGEgdGljay4gc2hvd1RpY2tzIG11c3QgYmUgZW5hYmxlZC4gKi9cbiAgZ2V0VGlja0NvbG9yPzogKHZhbHVlOiBudW1iZXIpID0+IHN0cmluZyA9IG51bGw7XG5cbiAgLyoqIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgY3VycmVudCBjb2xvciBvZiBhIHBvaW50ZXIuXG4gICAgSWYgeW91ciBjb2xvciB3b24ndCBjaGFuZ2UsIGRvbid0IHVzZSB0aGlzIG9wdGlvbiBidXQgc2V0IGl0IHRocm91Z2ggQ1NTLlxuICAgIElmIHRoZSByZXR1cm5lZCBjb2xvciBkZXBlbmRzIG9uIGEgbW9kZWwgdmFsdWUgKGVpdGhlciB2YWx1ZSBvciB2YWx1ZUhpZ2gpLFxuICAgIHlvdSBzaG91bGQgdXNlIHRoZSBhcmd1bWVudCBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uLlxuICAgIEluZGVlZCwgd2hlbiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkLCB0aGVyZSBpcyBubyBjZXJ0YWludHkgdGhhdCB0aGUgbW9kZWwgaGFzIGFscmVhZHkgYmVlbiB1cGRhdGVkLlxuICAgIFRvIGhhbmRsZSByYW5nZSBzbGlkZXIgcG9pbnRlcnMgaW5kZXBlbmRlbnRseSwgeW91IHNob3VsZCBldmFsdWF0ZSBwb2ludGVyVHlwZSB3aXRoaW4gdGhlIGdpdmVuXG4gICAgZnVuY3Rpb24gd2hlcmUgXCJtaW5cIiBzdGFuZHMgZm9yIHZhbHVlIG1vZGVsIGFuZCBcIm1heFwiIGZvciB2YWx1ZUhpZ2ggbW9kZWwgdmFsdWVzLiAqL1xuICBnZXRQb2ludGVyQ29sb3I/OiAodmFsdWU6IG51bWJlciwgcG9pbnRlclR5cGU6IFBvaW50ZXJUeXBlKSA9PiBzdHJpbmcgPSBudWxsO1xuXG4gIC8qKiBIYW5kbGVzIGFyZSBmb2N1c2FibGUgKG9uIGNsaWNrIG9yIHdpdGggdGFiKSBhbmQgY2FuIGJlIG1vZGlmaWVkIHVzaW5nIHRoZSBmb2xsb3dpbmcga2V5Ym9hcmQgY29udHJvbHM6XG4gICAgTGVmdC9ib3R0b20gYXJyb3dzOiAtMVxuICAgIFJpZ2h0L3RvcCBhcnJvd3M6ICsxXG4gICAgUGFnZS1kb3duOiAtMTAlXG4gICAgUGFnZS11cDogKzEwJVxuICAgIEhvbWU6IG1pbmltdW0gdmFsdWVcbiAgICBFbmQ6IG1heGltdW0gdmFsdWVcbiAgICovXG4gIGtleWJvYXJkU3VwcG9ydD86IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKiBJZiB5b3UgZGlzcGxheSB0aGUgc2xpZGVyIGluIGFuIGVsZW1lbnQgdGhhdCB1c2VzIHRyYW5zZm9ybTogc2NhbGUoMC41KSwgc2V0IHRoZSBzY2FsZSB2YWx1ZSB0byAyXG4gICAgc28gdGhhdCB0aGUgc2xpZGVyIGlzIHJlbmRlcmVkIHByb3Blcmx5IGFuZCB0aGUgZXZlbnRzIGFyZSBoYW5kbGVkIGNvcnJlY3RseS4gKi9cbiAgc2NhbGU/OiBudW1iZXIgPSAxO1xuXG4gIC8qKiBTZXQgdG8gdHJ1ZSB0byBmb3JjZSB0aGUgdmFsdWUocykgdG8gYmUgcm91bmRlZCB0byB0aGUgc3RlcCwgZXZlbiB3aGVuIG1vZGlmaWVkIGZyb20gdGhlIG91dHNpZGUuXG4gICAgV2hlbiBzZXQgdG8gZmFsc2UsIGlmIHRoZSBtb2RlbCB2YWx1ZXMgYXJlIG1vZGlmaWVkIGZyb20gb3V0c2lkZSB0aGUgc2xpZGVyLCB0aGV5IGFyZSBub3Qgcm91bmRlZFxuICAgIGFuZCBjYW4gYmUgYmV0d2VlbiB0d28gc3RlcHMuICovXG4gIGVuZm9yY2VTdGVwPzogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqIFNldCB0byB0cnVlIHRvIGZvcmNlIHRoZSB2YWx1ZShzKSB0byBiZSBub3JtYWxpc2VkIHRvIGFsbG93ZWQgcmFuZ2UgKGZsb29yIHRvIGNlaWwpLCBldmVuIHdoZW4gbW9kaWZpZWQgZnJvbSB0aGUgb3V0c2lkZS5cbiAgICBXaGVuIHNldCB0byBmYWxzZSwgaWYgdGhlIG1vZGVsIHZhbHVlcyBhcmUgbW9kaWZpZWQgZnJvbSBvdXRzaWRlIHRoZSBzbGlkZXIsIGFuZCB0aGV5IGFyZSBvdXRzaWRlIGFsbG93ZWQgcmFuZ2UsXG4gICAgdGhlIHNsaWRlciBtYXkgYmUgcmVuZGVyZWQgaW5jb3JyZWN0bHkuIEhvd2V2ZXIsIHNldHRpbmcgdGhpcyB0byBmYWxzZSBtYXkgYmUgdXNlZnVsIGlmIHlvdSB3YW50IHRvIHBlcmZvcm0gY3VzdG9tIG5vcm1hbGlzYXRpb24uICovXG4gIGVuZm9yY2VSYW5nZT86IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKiBTZXQgdG8gdHJ1ZSB0byBmb3JjZSB0aGUgdmFsdWUocykgdG8gYmUgcm91bmRlZCB0byB0aGUgbmVhcmVzdCBzdGVwIHZhbHVlLCBldmVuIHdoZW4gbW9kaWZpZWQgZnJvbSB0aGUgb3V0c2lkZS5cbiAgICBXaGVuIHNldCB0byBmYWxzZSwgaWYgdGhlIG1vZGVsIHZhbHVlcyBhcmUgbW9kaWZpZWQgZnJvbSBvdXRzaWRlIHRoZSBzbGlkZXIsIGFuZCB0aGV5IGFyZSBvdXRzaWRlIGFsbG93ZWQgcmFuZ2UsXG4gICAgdGhlIHNsaWRlciBtYXkgYmUgcmVuZGVyZWQgaW5jb3JyZWN0bHkuIEhvd2V2ZXIsIHNldHRpbmcgdGhpcyB0byBmYWxzZSBtYXkgYmUgdXNlZnVsIGlmIHlvdSB3YW50IHRvIHBlcmZvcm0gY3VzdG9tIG5vcm1hbGlzYXRpb24uICovXG4gIGVuZm9yY2VTdGVwc0FycmF5PzogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqIFNldCB0byB0cnVlIHRvIHByZXZlbnQgdG8gdXNlciBmcm9tIHN3aXRjaGluZyB0aGUgbWluIGFuZCBtYXggaGFuZGxlcy4gQXBwbGllcyB0byByYW5nZSBzbGlkZXIgb25seS4gKi9cbiAgbm9Td2l0Y2hpbmc/OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIFNldCB0byB0cnVlIHRvIG9ubHkgYmluZCBldmVudHMgb24gc2xpZGVyIGhhbmRsZXMuICovXG4gIG9ubHlCaW5kSGFuZGxlcz86IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogU2V0IHRvIHRydWUgdG8gc2hvdyBncmFwaHMgcmlnaHQgdG8gbGVmdC5cbiAgICBJZiB2ZXJ0aWNhbCBpcyB0cnVlIGl0IHdpbGwgYmUgZnJvbSB0b3AgdG8gYm90dG9tIGFuZCBsZWZ0IC8gcmlnaHQgYXJyb3cgZnVuY3Rpb25zIHJldmVyc2VkLiAqL1xuICByaWdodFRvTGVmdD86IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogU2V0IHRvIHRydWUgdG8gcmV2ZXJzZSBrZXlib2FyZCBuYXZpZ2F0aW9uOlxuICAgIFJpZ2h0L3RvcCBhcnJvd3M6IC0xXG4gICAgTGVmdC9ib3R0b20gYXJyb3dzOiArMVxuICAgIFBhZ2UtdXA6IC0xMCVcbiAgICBQYWdlLWRvd246ICsxMCVcbiAgICBFbmQ6IG1pbmltdW0gdmFsdWVcbiAgICBIb21lOiBtYXhpbXVtIHZhbHVlXG4gICAqL1xuICByZXZlcnNlZENvbnRyb2xzPzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBTZXQgdG8gdHJ1ZSB0byBrZWVwIHRoZSBzbGlkZXIgbGFiZWxzIGluc2lkZSB0aGUgc2xpZGVyIGJvdW5kcy4gKi9cbiAgYm91bmRQb2ludGVyTGFiZWxzPzogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqIFNldCB0byB0cnVlIHRvIHVzZSBhIGxvZ2FyaXRobWljIHNjYWxlIHRvIGRpc3BsYXkgdGhlIHNsaWRlci4gICovXG4gIGxvZ1NjYWxlPzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBGdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHBvc2l0aW9uIG9uIHRoZSBzbGlkZXIgZm9yIGEgZ2l2ZW4gdmFsdWUuXG4gICAgVGhlIHBvc2l0aW9uIG11c3QgYmUgYSBwZXJjZW50YWdlIGJldHdlZW4gMCBhbmQgMS5cbiAgICBUaGUgZnVuY3Rpb24gc2hvdWxkIGJlIG1vbm90b25pY2FsbHkgaW5jcmVhc2luZyBvciBkZWNyZWFzaW5nOyBvdGhlcndpc2UgdGhlIHNsaWRlciBtYXkgYmVoYXZlIGluY29ycmVjdGx5LiAqL1xuICBjdXN0b21WYWx1ZVRvUG9zaXRpb24/OiBWYWx1ZVRvUG9zaXRpb25GdW5jdGlvbiA9IG51bGw7XG5cbiAgLyoqIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgdmFsdWUgZm9yIGEgZ2l2ZW4gcG9zaXRpb24gb24gdGhlIHNsaWRlci5cbiAgICBUaGUgcG9zaXRpb24gaXMgYSBwZXJjZW50YWdlIGJldHdlZW4gMCBhbmQgMS5cbiAgICBUaGUgZnVuY3Rpb24gc2hvdWxkIGJlIG1vbm90b25pY2FsbHkgaW5jcmVhc2luZyBvciBkZWNyZWFzaW5nOyBvdGhlcndpc2UgdGhlIHNsaWRlciBtYXkgYmVoYXZlIGluY29ycmVjdGx5LiAqL1xuICBjdXN0b21Qb3NpdGlvblRvVmFsdWU/OiBQb3NpdGlvblRvVmFsdWVGdW5jdGlvbiA9IG51bGw7XG5cbiAgLyoqIFByZWNpc2lvbiBsaW1pdCBmb3IgY2FsY3VsYXRlZCB2YWx1ZXMuXG4gICAgVmFsdWVzIHVzZWQgaW4gY2FsY3VsYXRpb25zIHdpbGwgYmUgcm91bmRlZCB0byB0aGlzIG51bWJlciBvZiBzaWduaWZpY2FudCBkaWdpdHNcbiAgICB0byBwcmV2ZW50IGFjY3VtdWxhdGluZyBzbWFsbCBmbG9hdGluZy1wb2ludCBlcnJvcnMuICovXG4gIHByZWNpc2lvbkxpbWl0PzogbnVtYmVyID0gMTI7XG5cbiAgLyoqIFVzZSB0byBkaXNwbGF5IHRoZSBzZWxlY3Rpb24gYmFyIGFzIGEgZ3JhZGllbnQuXG4gICAgVGhlIGdpdmVuIG9iamVjdCBtdXN0IGNvbnRhaW4gZnJvbSBhbmQgdG8gcHJvcGVydGllcyB3aGljaCBhcmUgY29sb3JzLiAqL1xuICBzZWxlY3Rpb25CYXJHcmFkaWVudD86IHtmcm9tOiBzdHJpbmcsIHRvOiBzdHJpbmd9ID0gbnVsbDtcblxuICAvKiogVXNlIHRvIGFkZCBhIGxhYmVsIGRpcmVjdGx5IHRvIHRoZSBzbGlkZXIgZm9yIGFjY2Vzc2liaWxpdHkuIEFkZHMgdGhlIGFyaWEtbGFiZWwgYXR0cmlidXRlLiAqL1xuICBhcmlhTGFiZWw/OiBzdHJpbmcgPSBudWxsO1xuXG4gIC8qKiBVc2UgaW5zdGVhZCBvZiBhcmlhTGFiZWwgdG8gcmVmZXJlbmNlIHRoZSBpZCBvZiBhbiBlbGVtZW50IHdoaWNoIHdpbGwgYmUgdXNlZCB0byBsYWJlbCB0aGUgc2xpZGVyLlxuICAgIEFkZHMgdGhlIGFyaWEtbGFiZWxsZWRieSBhdHRyaWJ1dGUuICovXG4gIGFyaWFMYWJlbGxlZEJ5Pzogc3RyaW5nID0gbnVsbDtcblxuICAvKiogVXNlIHRvIGFkZCBhIGxhYmVsIGRpcmVjdGx5IHRvIHRoZSBzbGlkZXIgcmFuZ2UgZm9yIGFjY2Vzc2liaWxpdHkuIEFkZHMgdGhlIGFyaWEtbGFiZWwgYXR0cmlidXRlLiAqL1xuICBhcmlhTGFiZWxIaWdoPzogc3RyaW5nID0gbnVsbDtcblxuICAvKiogVXNlIGluc3RlYWQgb2YgYXJpYUxhYmVsSGlnaCB0byByZWZlcmVuY2UgdGhlIGlkIG9mIGFuIGVsZW1lbnQgd2hpY2ggd2lsbCBiZSB1c2VkIHRvIGxhYmVsIHRoZSBzbGlkZXIgcmFuZ2UuXG4gICAgQWRkcyB0aGUgYXJpYS1sYWJlbGxlZGJ5IGF0dHJpYnV0ZS4gKi9cbiAgYXJpYUxhYmVsbGVkQnlIaWdoPzogc3RyaW5nID0gbnVsbDtcblxuICAvKiogVXNlIHRvIGluY3JlYXNlIHJlbmRlcmluZyBwZXJmb3JtYW5jZS4gSWYgdGhlIHZhbHVlIGlzIG5vdCBwcm92aWRlZCwgdGhlIHNsaWRlciBjYWxjdWxhdGVzIHRoZSB3aXRoL2hlaWdodCBvZiB0aGUgaGFuZGxlICovXG4gIGhhbmRsZURpbWVuc2lvbj86IG51bWJlciA9IG51bGw7XG5cbiAgLyoqIFVzZSB0byBpbmNyZWFzZSByZW5kZXJpbmcgcGVyZm9ybWFuY2UuIElmIHRoZSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQsIHRoZSBzbGlkZXIgY2FsY3VsYXRlcyB0aGUgd2l0aC9oZWlnaHQgb2YgdGhlIGJhciAqL1xuICBiYXJEaW1lbnNpb24/OiBudW1iZXIgPSBudWxsO1xuXG4gIC8qKiBFbmFibGUvZGlzYWJsZSBDU1MgYW5pbWF0aW9ucyAqL1xuICBhbmltYXRlPzogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqIEVuYWJsZS9kaXNhYmxlIENTUyBhbmltYXRpb25zIHdoaWxlIG1vdmluZyB0aGUgc2xpZGVyICovXG4gIGFuaW1hdGVPbk1vdmU/OiBib29sZWFuID0gZmFsc2U7XG59XG4iLCIvKiogUG9pbnRlciB0eXBlICovXG5leHBvcnQgZW51bSBQb2ludGVyVHlwZSB7XG4gIC8qKiBMb3cgcG9pbnRlciAqL1xuICBNaW4sXG4gIC8qKiBIaWdoIHBvaW50ZXIgKi9cbiAgTWF4XG59XG4iLCJpbXBvcnQgeyBQb2ludGVyVHlwZSB9IGZyb20gJy4vcG9pbnRlci10eXBlJztcblxuZXhwb3J0IGNsYXNzIENoYW5nZUNvbnRleHQge1xuICB2YWx1ZTogbnVtYmVyO1xuICBoaWdoVmFsdWU/OiBudW1iZXI7XG4gIHBvaW50ZXJUeXBlOiBQb2ludGVyVHlwZTtcbn1cbiIsImltcG9ydCB7IEN1c3RvbVN0ZXBEZWZpbml0aW9uIH0gZnJvbSAnLi9vcHRpb25zJztcblxuLyoqXG4gKiAgQ29sbGVjdGlvbiBvZiBmdW5jdGlvbnMgdG8gaGFuZGxlIGNvbnZlcnNpb25zL2xvb2t1cHMgb2YgdmFsdWVzXG4gKi9cbmV4cG9ydCBjbGFzcyBWYWx1ZUhlbHBlciB7XG4gIHN0YXRpYyBpc051bGxPclVuZGVmaW5lZCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGw7XG4gIH1cblxuICBzdGF0aWMgYXJlQXJyYXlzRXF1YWwoYXJyYXkxOiBhbnlbXSwgYXJyYXkyOiBhbnlbXSk6IGJvb2xlYW4ge1xuICAgIGlmIChhcnJheTEubGVuZ3RoICE9PSBhcnJheTIubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGFycmF5MS5sZW5ndGg7ICsraSkge1xuICAgICAgaWYgKGFycmF5MVtpXSAhPT0gYXJyYXkyW2ldKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHN0YXRpYyBsaW5lYXJWYWx1ZVRvUG9zaXRpb24odmFsOiBudW1iZXIsIG1pblZhbDogbnVtYmVyLCBtYXhWYWw6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgcmFuZ2U6IG51bWJlciA9IG1heFZhbCAtIG1pblZhbDtcbiAgICByZXR1cm4gKHZhbCAtIG1pblZhbCkgLyByYW5nZTtcbiAgfVxuXG4gIHN0YXRpYyBsb2dWYWx1ZVRvUG9zaXRpb24odmFsOiBudW1iZXIsIG1pblZhbDogbnVtYmVyLCBtYXhWYWw6IG51bWJlcik6IG51bWJlciB7XG4gICAgdmFsID0gTWF0aC5sb2codmFsKTtcbiAgICBtaW5WYWwgPSBNYXRoLmxvZyhtaW5WYWwpO1xuICAgIG1heFZhbCA9IE1hdGgubG9nKG1heFZhbCk7XG4gICAgY29uc3QgcmFuZ2U6IG51bWJlciA9IG1heFZhbCAtIG1pblZhbDtcbiAgICByZXR1cm4gKHZhbCAtIG1pblZhbCkgLyByYW5nZTtcbiAgfVxuXG4gIHN0YXRpYyBsaW5lYXJQb3NpdGlvblRvVmFsdWUocGVyY2VudDogbnVtYmVyLCBtaW5WYWw6IG51bWJlciwgbWF4VmFsOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBwZXJjZW50ICogKG1heFZhbCAtIG1pblZhbCkgKyBtaW5WYWw7XG4gIH1cblxuICBzdGF0aWMgbG9nUG9zaXRpb25Ub1ZhbHVlKHBlcmNlbnQ6IG51bWJlciwgbWluVmFsOiBudW1iZXIsIG1heFZhbDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBtaW5WYWwgPSBNYXRoLmxvZyhtaW5WYWwpO1xuICAgIG1heFZhbCA9IE1hdGgubG9nKG1heFZhbCk7XG4gICAgY29uc3QgdmFsdWU6IG51bWJlciA9IHBlcmNlbnQgKiAobWF4VmFsIC0gbWluVmFsKSArIG1pblZhbDtcbiAgICByZXR1cm4gTWF0aC5leHAodmFsdWUpO1xuICB9XG5cbiAgc3RhdGljIGZpbmRTdGVwSW5kZXgobW9kZWxWYWx1ZTogbnVtYmVyLCBzdGVwc0FycmF5OiBDdXN0b21TdGVwRGVmaW5pdGlvbltdKTogbnVtYmVyIHtcbiAgICBjb25zdCBkaWZmZXJlbmNlczogbnVtYmVyW10gPSBzdGVwc0FycmF5Lm1hcCgoc3RlcDogQ3VzdG9tU3RlcERlZmluaXRpb24pOiBudW1iZXIgPT4gTWF0aC5hYnMobW9kZWxWYWx1ZSAtIHN0ZXAudmFsdWUpKTtcblxuICAgIGxldCBtaW5EaWZmZXJlbmNlSW5kZXg6IG51bWJlciA9IDA7XG4gICAgZm9yIChsZXQgaW5kZXg6IG51bWJlciA9IDA7IGluZGV4IDwgc3RlcHNBcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGlmIChkaWZmZXJlbmNlc1tpbmRleF0gIT09IGRpZmZlcmVuY2VzW21pbkRpZmZlcmVuY2VJbmRleF0gJiYgZGlmZmVyZW5jZXNbaW5kZXhdIDwgZGlmZmVyZW5jZXNbbWluRGlmZmVyZW5jZUluZGV4XSkge1xuICAgICAgICBtaW5EaWZmZXJlbmNlSW5kZXggPSBpbmRleDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWluRGlmZmVyZW5jZUluZGV4O1xuICB9XG59XG4iLCIvLyBEZWNsYXJhdGlvbiBmb3IgUmVzaXplT2JzZXJ2ZXIgYSBuZXcgQVBJIGF2YWlsYWJsZSBpbiBzb21lIG9mIG5ld2VzdCBicm93c2Vyczpcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9SZXNpemVPYnNlcnZlclxuZGVjbGFyZSBjbGFzcyBSZXNpemVPYnNlcnZlciB7XG59XG5cbi8qKiBIZWxwZXIgd2l0aCBjb21wYXRpYmlsaXR5IGZ1bmN0aW9ucyB0byBzdXBwb3J0IGRpZmZlcmVudCBicm93c2VycyAqL1xuZXhwb3J0IGNsYXNzIENvbXBhdGliaWxpdHlIZWxwZXIge1xuICAvKiogV29ya2Fyb3VuZCBmb3IgVG91Y2hFdmVudCBjb25zdHJ1Y3RvciBzYWRseSBub3QgYmVpbmcgYXZhaWxhYmxlIG9uIGFsbCBicm93c2VycyAoZS5nLiBGaXJlZm94LCBTYWZhcmkpICovXG4gIHB1YmxpYyBzdGF0aWMgaXNUb3VjaEV2ZW50KGV2ZW50OiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAoKHdpbmRvdyBhcyBhbnkpLlRvdWNoRXZlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGV2ZW50IGluc3RhbmNlb2YgVG91Y2hFdmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gZXZlbnQudG91Y2hlcyAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqIERldGVjdCBwcmVzZW5jZSBvZiBSZXNpemVPYnNlcnZlciBBUEkgKi9cbiAgcHVibGljIHN0YXRpYyBpc1Jlc2l6ZU9ic2VydmVyQXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAod2luZG93IGFzIGFueSkuUmVzaXplT2JzZXJ2ZXIgIT09IHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiLyoqIEhlbHBlciB3aXRoIG1hdGhlbWF0aWNhbCBmdW5jdGlvbnMgKi9cbmV4cG9ydCBjbGFzcyBNYXRoSGVscGVyIHtcbiAgLyogUm91bmQgbnVtYmVycyB0byBhIGdpdmVuIG51bWJlciBvZiBzaWduaWZpY2FudCBkaWdpdHMgKi9cbiAgc3RhdGljIHJvdW5kVG9QcmVjaXNpb25MaW1pdCh2YWx1ZTogbnVtYmVyLCBwcmVjaXNpb25MaW1pdDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKyggdmFsdWUudG9QcmVjaXNpb24ocHJlY2lzaW9uTGltaXQpICk7XG4gIH1cblxuICBzdGF0aWMgaXNNb2R1bG9XaXRoaW5QcmVjaXNpb25MaW1pdCh2YWx1ZTogbnVtYmVyLCBtb2R1bG86IG51bWJlciwgcHJlY2lzaW9uTGltaXQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGxpbWl0OiBudW1iZXIgPSBNYXRoLnBvdygxMCwgLXByZWNpc2lvbkxpbWl0KTtcbiAgICByZXR1cm4gTWF0aC5hYnModmFsdWUgJSBtb2R1bG8pIDw9IGxpbWl0IHx8IE1hdGguYWJzKE1hdGguYWJzKHZhbHVlICUgbW9kdWxvKSAtIG1vZHVsbykgPD0gbGltaXQ7XG4gIH1cblxuICBzdGF0aWMgY2xhbXBUb1JhbmdlKHZhbHVlOiBudW1iZXIsIGZsb29yOiBudW1iZXIsIGNlaWw6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCBmbG9vciksIGNlaWwpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIEV2ZW50TGlzdGVuZXIge1xuICBldmVudE5hbWU6IHN0cmluZyA9IG51bGw7XG4gIGV2ZW50czogU3ViamVjdDxFdmVudD4gPSBudWxsO1xuICBldmVudHNTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gIHRlYXJkb3duQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSBudWxsO1xufVxuIiwiaW1wb3J0IHsgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0aHJvdHRsZVRpbWUsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCBkZXRlY3RQYXNzaXZlRXZlbnRzIGZyb20gJ2RldGVjdC1wYXNzaXZlLWV2ZW50cyc7XG5cbmltcG9ydCB7IEV2ZW50TGlzdGVuZXIgfSBmcm9tICcuL2V2ZW50LWxpc3RlbmVyJztcbmltcG9ydCB7IFZhbHVlSGVscGVyIH0gZnJvbSAnLi92YWx1ZS1oZWxwZXInO1xuXG4vKipcbiAqIEhlbHBlciBjbGFzcyB0byBhdHRhY2ggZXZlbnQgbGlzdGVuZXJzIHRvIERPTSBlbGVtZW50cyB3aXRoIGRlYm91bmNlIHN1cHBvcnQgdXNpbmcgcnhqc1xuICovXG5leHBvcnQgY2xhc3MgRXZlbnRMaXN0ZW5lckhlbHBlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICB9XG5cbiAgcHVibGljIGF0dGFjaFBhc3NpdmVFdmVudExpc3RlbmVyKG5hdGl2ZUVsZW1lbnQ6IGFueSwgZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiAoZXZlbnQ6IGFueSkgPT4gdm9pZCxcbiAgICAgIHRocm90dGxlSW50ZXJ2YWw/OiBudW1iZXIpOiBFdmVudExpc3RlbmVyIHtcbiAgICAvLyBPbmx5IHVzZSBwYXNzaXZlIGV2ZW50IGxpc3RlbmVycyBpZiB0aGUgYnJvd3NlciBzdXBwb3J0cyBpdFxuICAgIGlmIChkZXRlY3RQYXNzaXZlRXZlbnRzLmhhc1N1cHBvcnQgIT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmF0dGFjaEV2ZW50TGlzdGVuZXIobmF0aXZlRWxlbWVudCwgZXZlbnROYW1lLCBjYWxsYmFjaywgdGhyb3R0bGVJbnRlcnZhbCk7XG4gICAgfVxuXG4gICAgLy8gQW5ndWxhciBkb2Vzbid0IHN1cHBvcnQgcGFzc2l2ZSBldmVudCBoYW5kbGVycyAoeWV0KSwgc28gd2UgbmVlZCB0byByb2xsIG91ciBvd24gY29kZSB1c2luZyBuYXRpdmUgZnVuY3Rpb25zXG4gICAgY29uc3QgbGlzdGVuZXI6IEV2ZW50TGlzdGVuZXIgPSBuZXcgRXZlbnRMaXN0ZW5lcigpO1xuICAgIGxpc3RlbmVyLmV2ZW50TmFtZSA9IGV2ZW50TmFtZTtcbiAgICBsaXN0ZW5lci5ldmVudHMgPSBuZXcgU3ViamVjdDxFdmVudD4oKTtcblxuICAgIGNvbnN0IG9ic2VydmVyQ2FsbGJhY2s6IChldmVudDogRXZlbnQpID0+IHZvaWQgPSAoZXZlbnQ6IEV2ZW50KTogdm9pZCA9PiB7XG4gICAgICBsaXN0ZW5lci5ldmVudHMubmV4dChldmVudCk7XG4gICAgfTtcbiAgICBuYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBvYnNlcnZlckNhbGxiYWNrLCB7cGFzc2l2ZTogdHJ1ZSwgY2FwdHVyZTogZmFsc2V9KTtcblxuICAgIGxpc3RlbmVyLnRlYXJkb3duQ2FsbGJhY2sgPSAoKTogdm9pZCA9PiB7XG4gICAgICBuYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBvYnNlcnZlckNhbGxiYWNrLCB7cGFzc2l2ZTogdHJ1ZSwgY2FwdHVyZTogZmFsc2V9KTtcbiAgICB9O1xuXG4gICAgbGlzdGVuZXIuZXZlbnRzU3Vic2NyaXB0aW9uID0gbGlzdGVuZXIuZXZlbnRzXG4gICAgICAucGlwZSgoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRocm90dGxlSW50ZXJ2YWwpKVxuICAgICAgICA/IHRocm90dGxlVGltZSh0aHJvdHRsZUludGVydmFsLCB1bmRlZmluZWQsIHsgbGVhZGluZzogdHJ1ZSwgdHJhaWxpbmc6IHRydWV9KVxuICAgICAgICA6IHRhcCgoKSA9PiB7fSkgLy8gbm8tb3BcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgICBjYWxsYmFjayhldmVudCk7XG4gICAgICB9KTtcblxuICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgfVxuXG4gIHB1YmxpYyBkZXRhY2hFdmVudExpc3RlbmVyKGV2ZW50TGlzdGVuZXI6IEV2ZW50TGlzdGVuZXIpOiB2b2lkIHtcbiAgICBpZiAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKGV2ZW50TGlzdGVuZXIuZXZlbnRzU3Vic2NyaXB0aW9uKSkge1xuICAgICAgZXZlbnRMaXN0ZW5lci5ldmVudHNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIGV2ZW50TGlzdGVuZXIuZXZlbnRzU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKGV2ZW50TGlzdGVuZXIuZXZlbnRzKSkge1xuICAgICAgZXZlbnRMaXN0ZW5lci5ldmVudHMuY29tcGxldGUoKTtcbiAgICAgIGV2ZW50TGlzdGVuZXIuZXZlbnRzID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKGV2ZW50TGlzdGVuZXIudGVhcmRvd25DYWxsYmFjaykpIHtcbiAgICAgIGV2ZW50TGlzdGVuZXIudGVhcmRvd25DYWxsYmFjaygpO1xuICAgICAgZXZlbnRMaXN0ZW5lci50ZWFyZG93bkNhbGxiYWNrID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYXR0YWNoRXZlbnRMaXN0ZW5lcihuYXRpdmVFbGVtZW50OiBhbnksIGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjazogKGV2ZW50OiBhbnkpID0+IHZvaWQsXG4gICAgICB0aHJvdHRsZUludGVydmFsPzogbnVtYmVyKTogRXZlbnRMaXN0ZW5lciB7XG4gICAgY29uc3QgbGlzdGVuZXI6IEV2ZW50TGlzdGVuZXIgPSBuZXcgRXZlbnRMaXN0ZW5lcigpO1xuICAgIGxpc3RlbmVyLmV2ZW50TmFtZSA9IGV2ZW50TmFtZTtcbiAgICBsaXN0ZW5lci5ldmVudHMgPSBuZXcgU3ViamVjdDxFdmVudD4oKTtcblxuICAgIGNvbnN0IG9ic2VydmVyQ2FsbGJhY2s6IChldmVudDogRXZlbnQpID0+IHZvaWQgPSAoZXZlbnQ6IEV2ZW50KTogdm9pZCA9PiB7XG4gICAgICBsaXN0ZW5lci5ldmVudHMubmV4dChldmVudCk7XG4gICAgfTtcblxuICAgIGxpc3RlbmVyLnRlYXJkb3duQ2FsbGJhY2sgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbihuYXRpdmVFbGVtZW50LCBldmVudE5hbWUsIG9ic2VydmVyQ2FsbGJhY2spO1xuXG4gICAgbGlzdGVuZXIuZXZlbnRzU3Vic2NyaXB0aW9uID0gbGlzdGVuZXIuZXZlbnRzXG4gICAgICAucGlwZSgoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRocm90dGxlSW50ZXJ2YWwpKVxuICAgICAgICAgID8gdGhyb3R0bGVUaW1lKHRocm90dGxlSW50ZXJ2YWwsIHVuZGVmaW5lZCwgeyBsZWFkaW5nOiB0cnVlLCB0cmFpbGluZzogdHJ1ZX0pXG4gICAgICAgICAgOiB0YXAoKCkgPT4ge30pIC8vIG5vLW9wXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChldmVudDogRXZlbnQpID0+IHsgY2FsbGJhY2soZXZlbnQpOyB9KTtcblxuICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIEhvc3RCaW5kaW5nLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXZlbnRMaXN0ZW5lckhlbHBlciB9IGZyb20gJy4vZXZlbnQtbGlzdGVuZXItaGVscGVyJztcbmltcG9ydCB7IEV2ZW50TGlzdGVuZXIgfSBmcm9tICcuL2V2ZW50LWxpc3RlbmVyJztcbmltcG9ydCB7IFZhbHVlSGVscGVyIH0gZnJvbSAnLi92YWx1ZS1oZWxwZXInO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmd4U2xpZGVyRWxlbWVudF0nXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckVsZW1lbnREaXJlY3RpdmUge1xuICBwcml2YXRlIF9wb3NpdGlvbjogbnVtYmVyID0gMDtcbiAgZ2V0IHBvc2l0aW9uKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGltZW5zaW9uOiBudW1iZXIgPSAwO1xuICBnZXQgZGltZW5zaW9uKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2RpbWVuc2lvbjtcbiAgfVxuXG4gIHByaXZhdGUgX2Fsd2F5c0hpZGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZ2V0IGFsd2F5c0hpZGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Fsd2F5c0hpZGU7XG4gIH1cblxuICBwcml2YXRlIF92ZXJ0aWNhbDogYm9vbGVhbiA9IGZhbHNlO1xuICBnZXQgdmVydGljYWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnRpY2FsO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2NhbGU6IG51bWJlciA9IDE7XG4gIGdldCBzY2FsZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zY2FsZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUub3BhY2l0eScpXG4gIG9wYWNpdHk6IG51bWJlciA9IDE7XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS52aXNpYmlsaXR5JylcbiAgdmlzaWJpbGl0eTogc3RyaW5nID0gJ3Zpc2libGUnO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUubGVmdCcpXG4gIGxlZnQ6IHN0cmluZyA9ICcnO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUuYm90dG9tJylcbiAgYm90dG9tOiBzdHJpbmcgPSAnJztcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodCcpXG4gIGhlaWdodDogc3RyaW5nID0gJyc7XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aCcpXG4gIHdpZHRoOiBzdHJpbmcgPSAnJztcblxuICBwcml2YXRlIGV2ZW50TGlzdGVuZXJIZWxwZXI6IEV2ZW50TGlzdGVuZXJIZWxwZXI7XG4gIHByaXZhdGUgZXZlbnRMaXN0ZW5lcnM6IEV2ZW50TGlzdGVuZXJbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBlbGVtUmVmOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJvdGVjdGVkIGNoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB0aGlzLmV2ZW50TGlzdGVuZXJIZWxwZXIgPSBuZXcgRXZlbnRMaXN0ZW5lckhlbHBlcih0aGlzLnJlbmRlcmVyKTtcbiAgfVxuXG4gIHNldEFsd2F5c0hpZGUoaGlkZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX2Fsd2F5c0hpZGUgPSBoaWRlO1xuICAgIGlmIChoaWRlKSB7XG4gICAgICB0aGlzLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIH1cbiAgfVxuXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5vcGFjaXR5ID0gMDtcbiAgfVxuXG4gIHNob3coKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWx3YXlzSGlkZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMub3BhY2l0eSA9IDE7XG4gIH1cblxuICBpc1Zpc2libGUoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuYWx3YXlzSGlkZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5vcGFjaXR5ICE9PSAwO1xuICB9XG5cbiAgc2V0VmVydGljYWwodmVydGljYWw6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl92ZXJ0aWNhbCA9IHZlcnRpY2FsO1xuICAgIGlmICh0aGlzLl92ZXJ0aWNhbCkge1xuICAgICAgdGhpcy5sZWZ0ID0gJyc7XG4gICAgICB0aGlzLndpZHRoID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYm90dG9tID0gJyc7XG4gICAgICB0aGlzLmhlaWdodCA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIHNldFNjYWxlKHNjYWxlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9zY2FsZSA9IHNjYWxlO1xuICB9XG5cbiAgIC8vIFNldCBlbGVtZW50IGxlZnQvdG9wIHBvc2l0aW9uIGRlcGVuZGluZyBvbiB3aGV0aGVyIHNsaWRlciBpcyBob3Jpem9udGFsIG9yIHZlcnRpY2FsXG4gIHNldFBvc2l0aW9uKHBvczogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3Bvc2l0aW9uICE9PSBwb3MgJiYgIXRoaXMuaXNSZWZEZXN0cm95ZWQoKSkge1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb25SZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fcG9zaXRpb24gPSBwb3M7XG4gICAgaWYgKHRoaXMuX3ZlcnRpY2FsKSB7XG4gICAgICB0aGlzLmJvdHRvbSA9IE1hdGgucm91bmQocG9zKSArICdweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGVmdCA9IE1hdGgucm91bmQocG9zKSArICdweCc7XG4gICAgfVxuICB9XG5cbiAgLy8gQ2FsY3VsYXRlIGVsZW1lbnQncyB3aWR0aC9oZWlnaHQgZGVwZW5kaW5nIG9uIHdoZXRoZXIgc2xpZGVyIGlzIGhvcml6b250YWwgb3IgdmVydGljYWxcbiAgY2FsY3VsYXRlRGltZW5zaW9uKCk6IHZvaWQge1xuICAgIGNvbnN0IHZhbDogQ2xpZW50UmVjdCA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgIHRoaXMuX2RpbWVuc2lvbiA9ICh2YWwuYm90dG9tIC0gdmFsLnRvcCkgKiB0aGlzLnNjYWxlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kaW1lbnNpb24gPSAodmFsLnJpZ2h0IC0gdmFsLmxlZnQpICogdGhpcy5zY2FsZTtcbiAgICB9XG4gIH1cblxuICAvLyBTZXQgZWxlbWVudCB3aWR0aC9oZWlnaHQgZGVwZW5kaW5nIG9uIHdoZXRoZXIgc2xpZGVyIGlzIGhvcml6b250YWwgb3IgdmVydGljYWxcbiAgc2V0RGltZW5zaW9uKGRpbTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2RpbWVuc2lvbiAhPT0gZGltICYmICF0aGlzLmlzUmVmRGVzdHJveWVkKCkpIHtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIHRoaXMuX2RpbWVuc2lvbiA9IGRpbTtcbiAgICBpZiAodGhpcy5fdmVydGljYWwpIHtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5yb3VuZChkaW0pICsgJ3B4JztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy53aWR0aCA9IE1hdGgucm91bmQoZGltKSArICdweCc7XG4gICAgfVxuICB9XG5cbiAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk6IENsaWVudFJlY3Qge1xuICAgIHJldHVybiB0aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgfVxuXG4gIG9uKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjazogKGV2ZW50OiBhbnkpID0+IHZvaWQsIGRlYm91bmNlSW50ZXJ2YWw/OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lciA9IHRoaXMuZXZlbnRMaXN0ZW5lckhlbHBlci5hdHRhY2hFdmVudExpc3RlbmVyKFxuICAgICAgdGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQsIGV2ZW50TmFtZSwgY2FsbGJhY2ssIGRlYm91bmNlSW50ZXJ2YWwpO1xuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gIH1cblxuICBvblBhc3NpdmUoZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiAoZXZlbnQ6IGFueSkgPT4gdm9pZCwgZGVib3VuY2VJbnRlcnZhbD86IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGxpc3RlbmVyOiBFdmVudExpc3RlbmVyID0gdGhpcy5ldmVudExpc3RlbmVySGVscGVyLmF0dGFjaFBhc3NpdmVFdmVudExpc3RlbmVyKFxuICAgICAgdGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQsIGV2ZW50TmFtZSwgY2FsbGJhY2ssIGRlYm91bmNlSW50ZXJ2YWwpO1xuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gIH1cblxuICBvZmYoZXZlbnROYW1lPzogc3RyaW5nKTogdm9pZCB7XG4gICAgbGV0IGxpc3RlbmVyc1RvS2VlcDogRXZlbnRMaXN0ZW5lcltdO1xuICAgIGxldCBsaXN0ZW5lcnNUb1JlbW92ZTogRXZlbnRMaXN0ZW5lcltdO1xuICAgIGlmICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQoZXZlbnROYW1lKSkge1xuICAgICAgbGlzdGVuZXJzVG9LZWVwID0gdGhpcy5ldmVudExpc3RlbmVycy5maWx0ZXIoKGV2ZW50OiBFdmVudExpc3RlbmVyKSA9PiBldmVudC5ldmVudE5hbWUgIT09IGV2ZW50TmFtZSk7XG4gICAgICBsaXN0ZW5lcnNUb1JlbW92ZSA9IHRoaXMuZXZlbnRMaXN0ZW5lcnMuZmlsdGVyKChldmVudDogRXZlbnRMaXN0ZW5lcikgPT4gZXZlbnQuZXZlbnROYW1lID09PSBldmVudE5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0ZW5lcnNUb0tlZXAgPSBbXTtcbiAgICAgIGxpc3RlbmVyc1RvUmVtb3ZlID0gdGhpcy5ldmVudExpc3RlbmVycztcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIGxpc3RlbmVyc1RvUmVtb3ZlKSB7XG4gICAgICB0aGlzLmV2ZW50TGlzdGVuZXJIZWxwZXIuZGV0YWNoRXZlbnRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgdGhpcy5ldmVudExpc3RlbmVycyA9IGxpc3RlbmVyc1RvS2VlcDtcbiAgfVxuXG4gIHByaXZhdGUgaXNSZWZEZXN0cm95ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIFZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuY2hhbmdlRGV0ZWN0aW9uUmVmKSB8fCB0aGlzLmNoYW5nZURldGVjdGlvblJlZlsnZGVzdHJveWVkJ107XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBIb3N0QmluZGluZywgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNsaWRlckVsZW1lbnREaXJlY3RpdmUgfSBmcm9tICcuL3NsaWRlci1lbGVtZW50LmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ3hTbGlkZXJIYW5kbGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJIYW5kbGVEaXJlY3RpdmUgZXh0ZW5kcyBTbGlkZXJFbGVtZW50RGlyZWN0aXZlIHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5uZ3gtc2xpZGVyLWFjdGl2ZScpXG4gIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgcm9sZTogc3RyaW5nID0gJyc7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnRhYmluZGV4JylcbiAgdGFiaW5kZXg6IHN0cmluZyA9ICcnO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLW9yaWVudGF0aW9uJylcbiAgYXJpYU9yaWVudGF0aW9uOiBzdHJpbmcgPSAnJztcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1sYWJlbCcpXG4gIGFyaWFMYWJlbDogc3RyaW5nID0gJyc7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtbGFiZWxsZWRieScpXG4gIGFyaWFMYWJlbGxlZEJ5OiBzdHJpbmcgPSAnJztcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS12YWx1ZW5vdycpXG4gIGFyaWFWYWx1ZU5vdzogc3RyaW5nID0gJyc7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtdmFsdWV0ZXh0JylcbiAgYXJpYVZhbHVlVGV4dDogc3RyaW5nID0gJyc7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtdmFsdWVtaW4nKVxuICBhcmlhVmFsdWVNaW46IHN0cmluZyA9ICcnO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLXZhbHVlbWF4JylcbiAgYXJpYVZhbHVlTWF4OiBzdHJpbmcgPSAnJztcblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoZWxlbVJlZjogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKGVsZW1SZWYsIHJlbmRlcmVyLCBjaGFuZ2VEZXRlY3Rpb25SZWYpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNsaWRlckVsZW1lbnREaXJlY3RpdmUgfSBmcm9tICcuL3NsaWRlci1lbGVtZW50LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBWYWx1ZUhlbHBlciB9IGZyb20gJy4vdmFsdWUtaGVscGVyJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25neFNsaWRlckxhYmVsXSdcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyTGFiZWxEaXJlY3RpdmUgZXh0ZW5kcyBTbGlkZXJFbGVtZW50RGlyZWN0aXZlIHtcbiAgcHJpdmF0ZSBfdmFsdWU6IHN0cmluZyA9IG51bGw7XG4gIGdldCB2YWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVsZW1SZWY6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIGNoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihlbGVtUmVmLCByZW5kZXJlciwgY2hhbmdlRGV0ZWN0aW9uUmVmKTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBsZXQgcmVjYWxjdWxhdGVEaW1lbnNpb246IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGlmICghdGhpcy5hbHdheXNIaWRlICYmXG4gICAgICAgIChWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZhbHVlKSB8fFxuICAgICAgICAgdGhpcy52YWx1ZS5sZW5ndGggIT09IHZhbHVlLmxlbmd0aCB8fFxuICAgICAgICAgKHRoaXMudmFsdWUubGVuZ3RoID4gMCAmJiB0aGlzLmRpbWVuc2lvbiA9PT0gMCkpKSB7XG4gICAgICByZWNhbGN1bGF0ZURpbWVuc2lvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSB2YWx1ZTtcblxuICAgIC8vIFVwZGF0ZSBkaW1lbnNpb24gb25seSB3aGVuIGxlbmd0aCBvZiB0aGUgbGFiZWwgaGF2ZSBjaGFuZ2VkXG4gICAgaWYgKHJlY2FsY3VsYXRlRGltZW5zaW9uKSB7XG4gICAgICB0aGlzLmNhbGN1bGF0ZURpbWVuc2lvbigpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIEV2ZW50RW1pdHRlcixcbiAgT3V0cHV0LFxuICBDb250ZW50Q2hpbGQsXG4gIFRlbXBsYXRlUmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgZm9yd2FyZFJlZixcbiAgTmdab25lXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgdGhyb3R0bGVUaW1lLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCBkZXRlY3RQYXNzaXZlRXZlbnRzIGZyb20gJ2RldGVjdC1wYXNzaXZlLWV2ZW50cyc7XG5cbmltcG9ydCB7XG4gIE9wdGlvbnMsXG4gIExhYmVsVHlwZSxcbiAgVmFsdWVUb1Bvc2l0aW9uRnVuY3Rpb24sXG4gIFBvc2l0aW9uVG9WYWx1ZUZ1bmN0aW9uLFxuICBDdXN0b21TdGVwRGVmaW5pdGlvblxufSBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IHsgUG9pbnRlclR5cGUgfSBmcm9tICcuL3BvaW50ZXItdHlwZSc7XG5pbXBvcnQgeyBDaGFuZ2VDb250ZXh0IH0gZnJvbSAnLi9jaGFuZ2UtY29udGV4dCc7XG5pbXBvcnQgeyBWYWx1ZUhlbHBlciB9IGZyb20gJy4vdmFsdWUtaGVscGVyJztcbmltcG9ydCB7IENvbXBhdGliaWxpdHlIZWxwZXIgfSBmcm9tICcuL2NvbXBhdGliaWxpdHktaGVscGVyJztcbmltcG9ydCB7IE1hdGhIZWxwZXIgfSBmcm9tICcuL21hdGgtaGVscGVyJztcbmltcG9ydCB7IEV2ZW50TGlzdGVuZXIgfSBmcm9tICcuL2V2ZW50LWxpc3RlbmVyJztcbmltcG9ydCB7IEV2ZW50TGlzdGVuZXJIZWxwZXIgfSBmcm9tICcuL2V2ZW50LWxpc3RlbmVyLWhlbHBlcic7XG5pbXBvcnQgeyBTbGlkZXJFbGVtZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9zbGlkZXItZWxlbWVudC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU2xpZGVySGFuZGxlRGlyZWN0aXZlIH0gZnJvbSAnLi9zbGlkZXItaGFuZGxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTbGlkZXJMYWJlbERpcmVjdGl2ZSB9IGZyb20gJy4vc2xpZGVyLWxhYmVsLmRpcmVjdGl2ZSc7XG5cbi8vIERlY2xhcmF0aW9uIGZvciBSZXNpemVPYnNlcnZlciBhIG5ldyBBUEkgYXZhaWxhYmxlIGluIHNvbWUgb2YgbmV3ZXN0IGJyb3dzZXJzOlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1Jlc2l6ZU9ic2VydmVyXG5kZWNsYXJlIGNsYXNzIFJlc2l6ZU9ic2VydmVyIHtcbiAgY29uc3RydWN0b3IoY2FsbGJhY2s6ICgpID0+IHZvaWQpO1xuICBvYnNlcnZlKHRhcmdldDogYW55KTogdm9pZDtcbiAgdW5vYnNlcnZlKHRhcmdldDogYW55KTogdm9pZDtcbiAgZGlzY29ubmVjdCgpOiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgVGljayB7XG4gIHNlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHN0eWxlOiBhbnkgPSB7fTtcbiAgdG9vbHRpcDogc3RyaW5nID0gbnVsbDtcbiAgdG9vbHRpcFBsYWNlbWVudDogc3RyaW5nID0gbnVsbDtcbiAgdmFsdWU6IHN0cmluZyA9IG51bGw7XG4gIHZhbHVlVG9vbHRpcDogc3RyaW5nID0gbnVsbDtcbiAgdmFsdWVUb29sdGlwUGxhY2VtZW50OiBzdHJpbmcgPSBudWxsO1xuICBsZWdlbmQ6IHN0cmluZyA9IG51bGw7XG59XG5cbmNsYXNzIERyYWdnaW5nIHtcbiAgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIHZhbHVlOiBudW1iZXIgPSAwO1xuICBkaWZmZXJlbmNlOiBudW1iZXIgPSAwO1xuICBwb3NpdGlvbjogbnVtYmVyID0gMDtcbiAgbG93TGltaXQ6IG51bWJlciA9IDA7XG4gIGhpZ2hMaW1pdDogbnVtYmVyID0gMDtcbn1cblxuY2xhc3MgTW9kZWxWYWx1ZXMge1xuICB2YWx1ZTogbnVtYmVyO1xuICBoaWdoVmFsdWU6IG51bWJlcjtcblxuICBwdWJsaWMgc3RhdGljIGNvbXBhcmUoeD86IE1vZGVsVmFsdWVzLCB5PzogTW9kZWxWYWx1ZXMpOiBib29sZWFuIHtcbiAgICBpZiAoVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQoeCkgJiYgVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQoeSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKFZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHgpICE9PSBWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4geC52YWx1ZSA9PT0geS52YWx1ZSAmJiB4LmhpZ2hWYWx1ZSA9PT0geS5oaWdoVmFsdWU7XG4gIH1cbn1cblxuY2xhc3MgTW9kZWxDaGFuZ2UgZXh0ZW5kcyBNb2RlbFZhbHVlcyB7XG4gIC8vIEZsYWcgdXNlZCB0byBieS1wYXNzIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkgZmlsdGVyIG9uIGlucHV0IHZhbHVlc1xuICAvLyAoc29tZXRpbWVzIHRoZXJlIGlzIGEgbmVlZCB0byBwYXNzIHZhbHVlcyB0aHJvdWdoIGV2ZW4gdGhvdWdoIHRoZSBtb2RlbCB2YWx1ZXMgaGF2ZSBub3QgY2hhbmdlZClcbiAgZm9yY2VDaGFuZ2U6IGJvb2xlYW47XG5cbiAgcHVibGljIHN0YXRpYyBjb21wYXJlKHg/OiBNb2RlbENoYW5nZSwgeT86IE1vZGVsQ2hhbmdlKTogYm9vbGVhbiB7XG4gICAgaWYgKFZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHgpICYmIFZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh4KSAhPT0gVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQoeSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHgudmFsdWUgPT09IHkudmFsdWUgJiZcbiAgICAgICAgICAgeC5oaWdoVmFsdWUgPT09IHkuaGlnaFZhbHVlICYmXG4gICAgICAgICAgIHguZm9yY2VDaGFuZ2UgPT09IHkuZm9yY2VDaGFuZ2U7XG4gIH1cbn1cblxuY2xhc3MgSW5wdXRNb2RlbENoYW5nZSBleHRlbmRzIE1vZGVsQ2hhbmdlIHtcbiAgaW50ZXJuYWxDaGFuZ2U6IGJvb2xlYW47XG59XG5cbmNsYXNzIE91dHB1dE1vZGVsQ2hhbmdlIGV4dGVuZHMgTW9kZWxDaGFuZ2Uge1xuICB1c2VyRXZlbnRJbml0aWF0ZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IE5HWF9TTElERVJfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmUgKi9cbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2xpZGVyQ29tcG9uZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1zbGlkZXInLFxuICB0ZW1wbGF0ZTogYDwhLS0gLy8gMCBMZWZ0IHNlbGVjdGlvbiBiYXIgb3V0c2lkZSB0d28gaGFuZGxlcyAtLT5cbjxzcGFuIG5neFNsaWRlckVsZW1lbnQgI2xlZnRPdXRlclNlbGVjdGlvbkJhciBjbGFzcz1cIm5neC1zbGlkZXItc3BhbiBuZ3gtc2xpZGVyLWJhci13cmFwcGVyIG5neC1zbGlkZXItbGVmdC1vdXQtc2VsZWN0aW9uXCI+XG4gIDxzcGFuIGNsYXNzPVwibmd4LXNsaWRlci1zcGFuIG5neC1zbGlkZXItYmFyXCI+PC9zcGFuPlxuPC9zcGFuPlxuPCEtLSAvLyAxIFJpZ2h0IHNlbGVjdGlvbiBiYXIgb3V0c2lkZSB0d28gaGFuZGxlcyAtLT5cbjxzcGFuIG5neFNsaWRlckVsZW1lbnQgI3JpZ2h0T3V0ZXJTZWxlY3Rpb25CYXIgY2xhc3M9XCJuZ3gtc2xpZGVyLXNwYW4gbmd4LXNsaWRlci1iYXItd3JhcHBlciBuZ3gtc2xpZGVyLXJpZ2h0LW91dC1zZWxlY3Rpb25cIj5cbiAgPHNwYW4gY2xhc3M9XCJuZ3gtc2xpZGVyLXNwYW4gbmd4LXNsaWRlci1iYXJcIj48L3NwYW4+XG48L3NwYW4+XG48IS0tIC8vIDIgVGhlIHdob2xlIHNsaWRlciBiYXIgLS0+XG48c3BhbiBuZ3hTbGlkZXJFbGVtZW50ICNmdWxsQmFyIFtjbGFzcy5uZ3gtc2xpZGVyLXRyYW5zcGFyZW50XT1cImZ1bGxCYXJUcmFuc3BhcmVudENsYXNzXCIgY2xhc3M9XCJuZ3gtc2xpZGVyLXNwYW4gbmd4LXNsaWRlci1iYXItd3JhcHBlciBuZ3gtc2xpZGVyLWZ1bGwtYmFyXCI+XG4gIDxzcGFuIGNsYXNzPVwibmd4LXNsaWRlci1zcGFuIG5neC1zbGlkZXItYmFyXCI+PC9zcGFuPlxuPC9zcGFuPlxuPCEtLSAvLyAzIFNlbGVjdGlvbiBiYXIgYmV0d2VlbiB0d28gaGFuZGxlcyAtLT5cbjxzcGFuIG5neFNsaWRlckVsZW1lbnQgI3NlbGVjdGlvbkJhciBbY2xhc3Mubmd4LXNsaWRlci1kcmFnZ2FibGVdPVwic2VsZWN0aW9uQmFyRHJhZ2dhYmxlQ2xhc3NcIiBjbGFzcz1cIm5neC1zbGlkZXItc3BhbiBuZ3gtc2xpZGVyLWJhci13cmFwcGVyIG5neC1zbGlkZXItc2VsZWN0aW9uLWJhclwiPlxuICA8c3BhbiBjbGFzcz1cIm5neC1zbGlkZXItc3BhbiBuZ3gtc2xpZGVyLWJhciBuZ3gtc2xpZGVyLXNlbGVjdGlvblwiIFtuZ1N0eWxlXT1cImJhclN0eWxlXCI+PC9zcGFuPlxuPC9zcGFuPlxuPCEtLSAvLyA0IExvdyBzbGlkZXIgaGFuZGxlIC0tPlxuPHNwYW4gbmd4U2xpZGVySGFuZGxlICNtaW5IYW5kbGUgY2xhc3M9XCJuZ3gtc2xpZGVyLXNwYW4gbmd4LXNsaWRlci1wb2ludGVyIG5neC1zbGlkZXItcG9pbnRlci1taW5cIiBbbmdTdHlsZV09bWluUG9pbnRlclN0eWxlPjwvc3Bhbj5cbjwhLS0gLy8gNSBIaWdoIHNsaWRlciBoYW5kbGUgLS0+XG48c3BhbiBuZ3hTbGlkZXJIYW5kbGUgI21heEhhbmRsZSBbc3R5bGUuZGlzcGxheV09XCJyYW5nZSA/ICdpbmhlcml0JyA6ICdub25lJ1wiIGNsYXNzPVwibmd4LXNsaWRlci1zcGFuIG5neC1zbGlkZXItcG9pbnRlciBuZ3gtc2xpZGVyLXBvaW50ZXItbWF4XCIgW25nU3R5bGVdPW1heFBvaW50ZXJTdHlsZT48L3NwYW4+XG48IS0tIC8vIDYgRmxvb3IgbGFiZWwgLS0+XG48c3BhbiBuZ3hTbGlkZXJMYWJlbCAjZmxvb3JMYWJlbCBjbGFzcz1cIm5neC1zbGlkZXItc3BhbiBuZ3gtc2xpZGVyLWJ1YmJsZSBuZ3gtc2xpZGVyLWxpbWl0IG5neC1zbGlkZXItZmxvb3JcIj48L3NwYW4+XG48IS0tIC8vIDcgQ2VpbGluZyBsYWJlbCAtLT5cbjxzcGFuIG5neFNsaWRlckxhYmVsICNjZWlsTGFiZWwgY2xhc3M9XCJuZ3gtc2xpZGVyLXNwYW4gbmd4LXNsaWRlci1idWJibGUgbmd4LXNsaWRlci1saW1pdCBuZ3gtc2xpZGVyLWNlaWxcIj48L3NwYW4+XG48IS0tIC8vIDggTGFiZWwgYWJvdmUgdGhlIGxvdyBzbGlkZXIgaGFuZGxlIC0tPlxuPHNwYW4gbmd4U2xpZGVyTGFiZWwgI21pbkhhbmRsZUxhYmVsIGNsYXNzPVwibmd4LXNsaWRlci1zcGFuIG5neC1zbGlkZXItYnViYmxlIG5neC1zbGlkZXItbW9kZWwtdmFsdWVcIj48L3NwYW4+XG48IS0tIC8vIDkgTGFiZWwgYWJvdmUgdGhlIGhpZ2ggc2xpZGVyIGhhbmRsZSAtLT5cbjxzcGFuIG5neFNsaWRlckxhYmVsICNtYXhIYW5kbGVMYWJlbCBjbGFzcz1cIm5neC1zbGlkZXItc3BhbiBuZ3gtc2xpZGVyLWJ1YmJsZSBuZ3gtc2xpZGVyLW1vZGVsLWhpZ2hcIj48L3NwYW4+XG48IS0tIC8vIDEwIENvbWJpbmVkIHJhbmdlIGxhYmVsIHdoZW4gdGhlIHNsaWRlciBoYW5kbGVzIGFyZSBjbG9zZSBleC4gMTUgLSAxNyAtLT5cbjxzcGFuIG5neFNsaWRlckxhYmVsICNjb21iaW5lZExhYmVsIGNsYXNzPVwibmd4LXNsaWRlci1zcGFuIG5neC1zbGlkZXItYnViYmxlIG5neC1zbGlkZXItY29tYmluZWRcIj48L3NwYW4+XG48IS0tIC8vIDExIFRoZSB0aWNrcyAtLT5cbjxzcGFuIG5neFNsaWRlckVsZW1lbnQgI3RpY2tzRWxlbWVudCBbaGlkZGVuXT1cIiFzaG93VGlja3NcIiBbY2xhc3Mubmd4LXNsaWRlci10aWNrcy12YWx1ZXMtdW5kZXJdPVwidGlja3NVbmRlclZhbHVlc0NsYXNzXCIgY2xhc3M9XCJuZ3gtc2xpZGVyLXRpY2tzXCI+XG4gIDxzcGFuICpuZ0Zvcj1cImxldCB0IG9mIHRpY2tzXCIgY2xhc3M9XCJuZ3gtc2xpZGVyLXRpY2tcIiBbbmdDbGFzc109XCJ7J25neC1zbGlkZXItc2VsZWN0ZWQnOiB0LnNlbGVjdGVkfVwiIFtuZ1N0eWxlXT1cInQuc3R5bGVcIj5cbiAgICA8bmd4LXNsaWRlci10b29sdGlwLXdyYXBwZXIgW3RlbXBsYXRlXT1cInRvb2x0aXBUZW1wbGF0ZVwiIFt0b29sdGlwXT1cInQudG9vbHRpcFwiIFtwbGFjZW1lbnRdPVwidC50b29sdGlwUGxhY2VtZW50XCI+PC9uZ3gtc2xpZGVyLXRvb2x0aXAtd3JhcHBlcj5cbiAgICA8bmd4LXNsaWRlci10b29sdGlwLXdyYXBwZXIgKm5nSWY9XCJ0LnZhbHVlICE9IG51bGxcIiBjbGFzcz1cIm5neC1zbGlkZXItc3BhbiBuZ3gtc2xpZGVyLXRpY2stdmFsdWVcIlxuICAgICAgICBbdGVtcGxhdGVdPVwidG9vbHRpcFRlbXBsYXRlXCIgW3Rvb2x0aXBdPVwidC52YWx1ZVRvb2x0aXBcIiBbcGxhY2VtZW50XT1cInQudmFsdWVUb29sdGlwUGxhY2VtZW50XCIgW2NvbnRlbnRdPVwidC52YWx1ZVwiPjwvbmd4LXNsaWRlci10b29sdGlwLXdyYXBwZXI+XG4gICAgPHNwYW4gKm5nSWY9XCJ0LmxlZ2VuZCAhPSBudWxsXCIgY2xhc3M9XCJuZ3gtc2xpZGVyLXNwYW4gbmd4LXNsaWRlci10aWNrLWxlZ2VuZFwiIFtpbm5lckhUTUxdPVwidC5sZWdlbmRcIj48L3NwYW4+XG4gIDwvc3Bhbj5cbjwvc3Bhbj5gLFxuICBzdHlsZXM6IFtgOjpuZy1kZWVwIC5uZ3gtc2xpZGVye2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDo0cHg7d2lkdGg6MTAwJTttYXJnaW46MzVweCAwIDE1cHg7dmVydGljYWwtYWxpZ246bWlkZGxlOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt0b3VjaC1hY3Rpb246cGFuLXl9OjpuZy1kZWVwIC5uZ3gtc2xpZGVyLndpdGgtbGVnZW5ke21hcmdpbi1ib3R0b206NDBweH06Om5nLWRlZXAgLm5neC1zbGlkZXJbZGlzYWJsZWRde2N1cnNvcjpub3QtYWxsb3dlZH06Om5nLWRlZXAgLm5neC1zbGlkZXJbZGlzYWJsZWRdIC5uZ3gtc2xpZGVyLXBvaW50ZXJ7Y3Vyc29yOm5vdC1hbGxvd2VkO2JhY2tncm91bmQtY29sb3I6I2Q4ZTBmM306Om5nLWRlZXAgLm5neC1zbGlkZXJbZGlzYWJsZWRdIC5uZ3gtc2xpZGVyLWRyYWdnYWJsZXtjdXJzb3I6bm90LWFsbG93ZWR9OjpuZy1kZWVwIC5uZ3gtc2xpZGVyW2Rpc2FibGVkXSAubmd4LXNsaWRlci1zZWxlY3Rpb257YmFja2dyb3VuZDojOGI5MWEyfTo6bmctZGVlcCAubmd4LXNsaWRlcltkaXNhYmxlZF0gLm5neC1zbGlkZXItdGlja3tjdXJzb3I6bm90LWFsbG93ZWR9OjpuZy1kZWVwIC5uZ3gtc2xpZGVyW2Rpc2FibGVkXSAubmd4LXNsaWRlci10aWNrLm5neC1zbGlkZXItc2VsZWN0ZWR7YmFja2dyb3VuZDojOGI5MWEyfTo6bmctZGVlcCAubmd4LXNsaWRlciAubmd4LXNsaWRlci1zcGFue3doaXRlLXNwYWNlOm5vd3JhcDtwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmlubGluZS1ibG9ja306Om5nLWRlZXAgLm5neC1zbGlkZXIgLm5neC1zbGlkZXItYmFzZXt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3BhZGRpbmc6MH06Om5nLWRlZXAgLm5neC1zbGlkZXIgLm5neC1zbGlkZXItYmFyLXdyYXBwZXJ7bGVmdDowO2JveC1zaXppbmc6Ym9yZGVyLWJveDttYXJnaW4tdG9wOi0xNnB4O3BhZGRpbmctdG9wOjE2cHg7d2lkdGg6MTAwJTtoZWlnaHQ6MzJweDt6LWluZGV4OjF9OjpuZy1kZWVwIC5uZ3gtc2xpZGVyIC5uZ3gtc2xpZGVyLWRyYWdnYWJsZXtjdXJzb3I6bW92ZX06Om5nLWRlZXAgLm5neC1zbGlkZXIgLm5neC1zbGlkZXItYmFye2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDo0cHg7ei1pbmRleDoxO2JhY2tncm91bmQ6I2Q4ZTBmMztib3JkZXItcmFkaXVzOjJweH06Om5nLWRlZXAgLm5neC1zbGlkZXIgLm5neC1zbGlkZXItYmFyLXdyYXBwZXIubmd4LXNsaWRlci10cmFuc3BhcmVudCAubmd4LXNsaWRlci1iYXJ7YmFja2dyb3VuZDowIDB9OjpuZy1kZWVwIC5uZ3gtc2xpZGVyIC5uZ3gtc2xpZGVyLWJhci13cmFwcGVyLm5neC1zbGlkZXItbGVmdC1vdXQtc2VsZWN0aW9uIC5uZ3gtc2xpZGVyLWJhcntiYWNrZ3JvdW5kOiNkZjAwMmR9OjpuZy1kZWVwIC5uZ3gtc2xpZGVyIC5uZ3gtc2xpZGVyLWJhci13cmFwcGVyLm5neC1zbGlkZXItcmlnaHQtb3V0LXNlbGVjdGlvbiAubmd4LXNsaWRlci1iYXJ7YmFja2dyb3VuZDojMDNhNjg4fTo6bmctZGVlcCAubmd4LXNsaWRlciAubmd4LXNsaWRlci1zZWxlY3Rpb257ei1pbmRleDoyO2JhY2tncm91bmQ6IzBkYjlmMDtib3JkZXItcmFkaXVzOjJweH06Om5nLWRlZXAgLm5neC1zbGlkZXIgLm5neC1zbGlkZXItcG9pbnRlcntjdXJzb3I6cG9pbnRlcjt3aWR0aDozMnB4O2hlaWdodDozMnB4O3RvcDotMTRweDtiYWNrZ3JvdW5kLWNvbG9yOiMwZGI5ZjA7ei1pbmRleDozO2JvcmRlci1yYWRpdXM6MTZweH06Om5nLWRlZXAgLm5neC1zbGlkZXIgLm5neC1zbGlkZXItcG9pbnRlcjphZnRlcntjb250ZW50OicnO3dpZHRoOjhweDtoZWlnaHQ6OHB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxMnB4O2xlZnQ6MTJweDtib3JkZXItcmFkaXVzOjRweDtiYWNrZ3JvdW5kOiNmZmZ9OjpuZy1kZWVwIC5uZ3gtc2xpZGVyIC5uZ3gtc2xpZGVyLXBvaW50ZXI6aG92ZXI6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmfTo6bmctZGVlcCAubmd4LXNsaWRlciAubmd4LXNsaWRlci1wb2ludGVyLm5neC1zbGlkZXItYWN0aXZle3otaW5kZXg6NH06Om5nLWRlZXAgLm5neC1zbGlkZXIgLm5neC1zbGlkZXItcG9pbnRlci5uZ3gtc2xpZGVyLWFjdGl2ZTphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiM0NTFhZmZ9OjpuZy1kZWVwIC5uZ3gtc2xpZGVyIC5uZ3gtc2xpZGVyLWJ1YmJsZXtjdXJzb3I6ZGVmYXVsdDtib3R0b206MTZweDtwYWRkaW5nOjFweCAzcHg7Y29sb3I6IzU1NjM3ZDtmb250LXNpemU6MTZweH06Om5nLWRlZXAgLm5neC1zbGlkZXIgLm5neC1zbGlkZXItYnViYmxlLm5neC1zbGlkZXItbGltaXR7Y29sb3I6IzU1NjM3ZH06Om5nLWRlZXAgLm5neC1zbGlkZXIgLm5neC1zbGlkZXItdGlja3N7Ym94LXNpemluZzpib3JkZXItYm94O3dpZHRoOjEwMCU7aGVpZ2h0OjA7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDotM3B4O21hcmdpbjowO3otaW5kZXg6MTtsaXN0LXN0eWxlOm5vbmV9OjpuZy1kZWVwIC5uZ3gtc2xpZGVyIC5uZ3gtc2xpZGVyLXRpY2tzLXZhbHVlcy11bmRlciAubmd4LXNsaWRlci10aWNrLXZhbHVle3RvcDphdXRvO2JvdHRvbTotMzZweH06Om5nLWRlZXAgLm5neC1zbGlkZXIgLm5neC1zbGlkZXItdGlja3t0ZXh0LWFsaWduOmNlbnRlcjtjdXJzb3I6cG9pbnRlcjt3aWR0aDoxMHB4O2hlaWdodDoxMHB4O2JhY2tncm91bmQ6I2Q4ZTBmMztib3JkZXItcmFkaXVzOjUwJTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7bWFyZ2luLWxlZnQ6MTFweH06Om5nLWRlZXAgLm5neC1zbGlkZXIgLm5neC1zbGlkZXItdGljay5uZ3gtc2xpZGVyLXNlbGVjdGVke2JhY2tncm91bmQ6IzBkYjlmMH06Om5nLWRlZXAgLm5neC1zbGlkZXIgLm5neC1zbGlkZXItdGljay12YWx1ZXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTM0cHg7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLDApfTo6bmctZGVlcCAubmd4LXNsaWRlciAubmd4LXNsaWRlci10aWNrLWxlZ2VuZHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MjRweDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsMCk7bWF4LXdpZHRoOjUwcHg7d2hpdGUtc3BhY2U6bm9ybWFsfTo6bmctZGVlcCAubmd4LXNsaWRlci52ZXJ0aWNhbHtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDo0cHg7aGVpZ2h0OjEwMCU7bWFyZ2luOjAgMjBweDtwYWRkaW5nOjA7dmVydGljYWwtYWxpZ246YmFzZWxpbmU7dG91Y2gtYWN0aW9uOnBhbi14fTo6bmctZGVlcCAubmd4LXNsaWRlci52ZXJ0aWNhbCAubmd4LXNsaWRlci1iYXNle3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cGFkZGluZzowfTo6bmctZGVlcCAubmd4LXNsaWRlci52ZXJ0aWNhbCAubmd4LXNsaWRlci1iYXItd3JhcHBlcnt0b3A6YXV0bztsZWZ0OjA7bWFyZ2luOjAgMCAwIC0xNnB4O3BhZGRpbmc6MCAwIDAgMTZweDtoZWlnaHQ6MTAwJTt3aWR0aDozMnB4fTo6bmctZGVlcCAubmd4LXNsaWRlci52ZXJ0aWNhbCAubmd4LXNsaWRlci1iYXJ7Ym90dG9tOjA7bGVmdDphdXRvO3dpZHRoOjRweDtoZWlnaHQ6MTAwJX06Om5nLWRlZXAgLm5neC1zbGlkZXIudmVydGljYWwgLm5neC1zbGlkZXItcG9pbnRlcntsZWZ0Oi0xNHB4IWltcG9ydGFudDt0b3A6YXV0bztib3R0b206MH06Om5nLWRlZXAgLm5neC1zbGlkZXIudmVydGljYWwgLm5neC1zbGlkZXItYnViYmxle2xlZnQ6MTZweCFpbXBvcnRhbnQ7Ym90dG9tOjB9OjpuZy1kZWVwIC5uZ3gtc2xpZGVyLnZlcnRpY2FsIC5uZ3gtc2xpZGVyLXRpY2tze2hlaWdodDoxMDAlO3dpZHRoOjA7bGVmdDotM3B4O3RvcDowO3otaW5kZXg6MX06Om5nLWRlZXAgLm5neC1zbGlkZXIudmVydGljYWwgLm5neC1zbGlkZXItdGlja3t2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tdG9wOjExcHh9OjpuZy1kZWVwIC5uZ3gtc2xpZGVyLnZlcnRpY2FsIC5uZ3gtc2xpZGVyLXRpY2stdmFsdWV7bGVmdDoyNHB4O3RvcDphdXRvOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgwLC0yOCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwtMjglKX06Om5nLWRlZXAgLm5neC1zbGlkZXIudmVydGljYWwgLm5neC1zbGlkZXItdGljay1sZWdlbmR7dG9wOmF1dG87cmlnaHQ6MjRweDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMCwtMjglKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsLTI4JSk7bWF4LXdpZHRoOm5vbmU7d2hpdGUtc3BhY2U6bm93cmFwfTo6bmctZGVlcCAubmd4LXNsaWRlci52ZXJ0aWNhbCAubmd4LXNsaWRlci10aWNrcy12YWx1ZXMtdW5kZXIgLm5neC1zbGlkZXItdGljay12YWx1ZXtib3R0b206YXV0bztsZWZ0OmF1dG87cmlnaHQ6MjRweH06Om5nLWRlZXAgLm5neC1zbGlkZXIgKnt0cmFuc2l0aW9uOm5vbmV9OjpuZy1kZWVwIC5uZ3gtc2xpZGVyLmFuaW1hdGUgLm5neC1zbGlkZXItYmFyLXdyYXBwZXJ7dHJhbnNpdGlvbjouM3MgbGluZWFyfTo6bmctZGVlcCAubmd4LXNsaWRlci5hbmltYXRlIC5uZ3gtc2xpZGVyLXNlbGVjdGlvbnt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjNzIGxpbmVhcn06Om5nLWRlZXAgLm5neC1zbGlkZXIuYW5pbWF0ZSAubmd4LXNsaWRlci1wb2ludGVye3RyYW5zaXRpb246LjNzIGxpbmVhcn06Om5nLWRlZXAgLm5neC1zbGlkZXIuYW5pbWF0ZSAubmd4LXNsaWRlci1idWJibGV7dHJhbnNpdGlvbjouM3MgbGluZWFyfTo6bmctZGVlcCAubmd4LXNsaWRlci5hbmltYXRlIC5uZ3gtc2xpZGVyLWJ1YmJsZS5uZ3gtc2xpZGVyLWxpbWl0e3RyYW5zaXRpb246b3BhY2l0eSAuM3MgbGluZWFyfTo6bmctZGVlcCAubmd4LXNsaWRlci5hbmltYXRlIC5uZ3gtc2xpZGVyLWJ1YmJsZS5uZ3gtc2xpZGVyLWNvbWJpbmVke3RyYW5zaXRpb246b3BhY2l0eSAuM3MgbGluZWFyfTo6bmctZGVlcCAubmd4LXNsaWRlci5hbmltYXRlIC5uZ3gtc2xpZGVyLXRpY2t7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4zcyBsaW5lYXJ9YF0sXG4gIGhvc3Q6IHsgY2xhc3M6ICduZ3gtc2xpZGVyJyB9LFxuICBwcm92aWRlcnM6IFtOR1hfU0xJREVSX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgLy8gTW9kZWwgZm9yIGxvdyB2YWx1ZSBvZiBzbGlkZXIuIEZvciBzaW1wbGUgc2xpZGVyLCB0aGlzIGlzIHRoZSBvbmx5IGlucHV0LiBGb3IgcmFuZ2Ugc2xpZGVyLCB0aGlzIGlzIHRoZSBsb3cgdmFsdWUuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB2YWx1ZTogbnVtYmVyID0gbnVsbDtcbiAgLy8gT3V0cHV0IGZvciBsb3cgdmFsdWUgc2xpZGVyIHRvIHN1cHBvcnQgdHdvLXdheSBiaW5kaW5nc1xuICBAT3V0cHV0KClcbiAgcHVibGljIHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyBNb2RlbCBmb3IgaGlnaCB2YWx1ZSBvZiBzbGlkZXIuIE5vdCB1c2VkIGluIHNpbXBsZSBzbGlkZXIuIEZvciByYW5nZSBzbGlkZXIsIHRoaXMgaXMgdGhlIGhpZ2ggdmFsdWUuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBoaWdoVmFsdWU6IG51bWJlciA9IG51bGw7XG4gIC8vIE91dHB1dCBmb3IgaGlnaCB2YWx1ZSBzbGlkZXIgdG8gc3VwcG9ydCB0d28td2F5IGJpbmRpbmdzXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgaGlnaFZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyBBbiBvYmplY3Qgd2l0aCBhbGwgdGhlIG90aGVyIG9wdGlvbnMgb2YgdGhlIHNsaWRlci5cbiAgLy8gRWFjaCBvcHRpb24gY2FuIGJlIHVwZGF0ZWQgYXQgcnVudGltZSBhbmQgdGhlIHNsaWRlciB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgcmUtcmVuZGVyZWQuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBvcHRpb25zOiBPcHRpb25zID0gbmV3IE9wdGlvbnMoKTtcblxuICAvLyBFdmVudCBlbWl0dGVkIHdoZW4gdXNlciBzdGFydHMgaW50ZXJhY3Rpb24gd2l0aCB0aGUgc2xpZGVyXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgdXNlckNoYW5nZVN0YXJ0OiBFdmVudEVtaXR0ZXI8Q2hhbmdlQ29udGV4dD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLy8gRXZlbnQgZW1pdHRlZCBvbiBlYWNoIGNoYW5nZSBjb21pbmcgZnJvbSB1c2VyIGludGVyYWN0aW9uXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgdXNlckNoYW5nZTogRXZlbnRFbWl0dGVyPENoYW5nZUNvbnRleHQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8vIEV2ZW50IGVtaXR0ZWQgd2hlbiB1c2VyIGZpbmlzaGVzIGludGVyYWN0aW9uIHdpdGggdGhlIHNsaWRlclxuICBAT3V0cHV0KClcbiAgcHVibGljIHVzZXJDaGFuZ2VFbmQ6IEV2ZW50RW1pdHRlcjxDaGFuZ2VDb250ZXh0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwcml2YXRlIG1hbnVhbFJlZnJlc2hTdWJzY3JpcHRpb246IGFueTtcbiAgLy8gSW5wdXQgZXZlbnQgdGhhdCB0cmlnZ2VycyBzbGlkZXIgcmVmcmVzaCAocmUtcG9zaXRpb25pbmcgb2Ygc2xpZGVyIGVsZW1lbnRzKVxuICBASW5wdXQoKSBzZXQgbWFudWFsUmVmcmVzaChtYW51YWxSZWZyZXNoOiBFdmVudEVtaXR0ZXI8dm9pZD4pIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlTWFudWFsUmVmcmVzaCgpO1xuXG4gICAgdGhpcy5tYW51YWxSZWZyZXNoU3Vic2NyaXB0aW9uID0gbWFudWFsUmVmcmVzaC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNhbGN1bGF0ZVZpZXdEaW1lbnNpb25zQW5kRGV0ZWN0Q2hhbmdlcygpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdHJpZ2dlckZvY3VzU3Vic2NyaXB0aW9uOiBhbnk7XG4gIC8vIElucHV0IGV2ZW50IHRoYXQgdHJpZ2dlcnMgc2V0dGluZyBmb2N1cyBvbiBnaXZlbiBzbGlkZXIgaGFuZGxlXG4gIEBJbnB1dCgpIHNldCB0cmlnZ2VyRm9jdXModHJpZ2dlckZvY3VzOiBFdmVudEVtaXR0ZXI8dm9pZD4pIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlVHJpZ2dlckZvY3VzKCk7XG5cbiAgICB0aGlzLnRyaWdnZXJGb2N1c1N1YnNjcmlwdGlvbiA9IHRyaWdnZXJGb2N1cy5zdWJzY3JpYmUoKHBvaW50ZXJUeXBlOiBQb2ludGVyVHlwZSkgPT4ge1xuICAgICAgdGhpcy5mb2N1c1BvaW50ZXIocG9pbnRlclR5cGUpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gU2xpZGVyIHR5cGUsIHRydWUgbWVhbnMgcmFuZ2Ugc2xpZGVyXG4gIHB1YmxpYyBnZXQgcmFuZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZhbHVlKSAmJiAhVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5oaWdoVmFsdWUpO1xuICB9XG5cbiAgLy8gU2V0IHRvIHRydWUgaWYgaW5pdCBtZXRob2QgYWxyZWFkeSBleGVjdXRlZFxuICBwcml2YXRlIGluaXRIYXNSdW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvLyBDaGFuZ2VzIGluIG1vZGVsIGlucHV0cyBhcmUgcGFzc2VkIHRocm91Z2ggdGhpcyBzdWJqZWN0XG4gIC8vIFRoZXNlIGFyZSBhbGwgY2hhbmdlcyBjb21pbmcgaW4gZnJvbSBvdXRzaWRlIHRoZSBjb21wb25lbnQgdGhyb3VnaCBpbnB1dCBiaW5kaW5ncyBvciByZWFjdGl2ZSBmb3JtIGlucHV0c1xuICBwcml2YXRlIGlucHV0TW9kZWxDaGFuZ2VTdWJqZWN0OiBTdWJqZWN0PElucHV0TW9kZWxDaGFuZ2U+ID0gbmV3IFN1YmplY3Q8SW5wdXRNb2RlbENoYW5nZT4oKTtcbiAgcHJpdmF0ZSBpbnB1dE1vZGVsQ2hhbmdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBudWxsO1xuXG4gIC8vIENoYW5nZXMgdG8gbW9kZWwgb3V0cHV0cyBhcmUgcGFzc2VkIHRocm91Z2ggdGhpcyBzdWJqZWN0XG4gIC8vIFRoZXNlIGFyZSBhbGwgY2hhbmdlcyB0aGF0IG5lZWQgdG8gYmUgY29tbXVuaWNhdGVkIHRvIG91dHB1dCBlbWl0dGVycyBhbmQgcmVnaXN0ZXJlZCBjYWxsYmFja3NcbiAgcHJpdmF0ZSBvdXRwdXRNb2RlbENoYW5nZVN1YmplY3Q6IFN1YmplY3Q8T3V0cHV0TW9kZWxDaGFuZ2U+ID0gbmV3IFN1YmplY3Q8T3V0cHV0TW9kZWxDaGFuZ2U+KCk7XG4gIHByaXZhdGUgb3V0cHV0TW9kZWxDaGFuZ2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiA9IG51bGw7XG5cbiAgLy8gTG93IHZhbHVlIHN5bmNlZCB0byBtb2RlbCBsb3cgdmFsdWVcbiAgcHJpdmF0ZSB2aWV3TG93VmFsdWU6IG51bWJlciA9IG51bGw7XG4gIC8vIEhpZ2ggdmFsdWUgc3luY2VkIHRvIG1vZGVsIGhpZ2ggdmFsdWVcbiAgcHJpdmF0ZSB2aWV3SGlnaFZhbHVlOiBudW1iZXIgPSBudWxsO1xuICAvLyBPcHRpb25zIHN5bmNlZCB0byBtb2RlbCBvcHRpb25zLCBiYXNlZCBvbiBkZWZhdWx0c1xuICBwcml2YXRlIHZpZXdPcHRpb25zOiBPcHRpb25zID0gbmV3IE9wdGlvbnMoKTtcblxuICAvLyBIYWxmIG9mIHRoZSB3aWR0aCBvciBoZWlnaHQgb2YgdGhlIHNsaWRlciBoYW5kbGVzXG4gIHByaXZhdGUgaGFuZGxlSGFsZkRpbWVuc2lvbjogbnVtYmVyID0gMDtcbiAgLy8gTWF4aW11bSBwb3NpdGlvbiB0aGUgc2xpZGVyIGhhbmRsZSBjYW4gaGF2ZVxuICBwcml2YXRlIG1heEhhbmRsZVBvc2l0aW9uOiBudW1iZXIgPSAwO1xuXG4gIC8vIFdoaWNoIGhhbmRsZSBpcyBjdXJyZW50bHkgdHJhY2tlZCBmb3IgbW92ZSBldmVudHNcbiAgcHJpdmF0ZSBjdXJyZW50VHJhY2tpbmdQb2ludGVyOiBQb2ludGVyVHlwZSA9IG51bGw7XG4gIC8vIEludGVybmFsIHZhcmlhYmxlIHRvIGtlZXAgdHJhY2sgb2YgdGhlIGZvY3VzIGVsZW1lbnRcbiAgcHJpdmF0ZSBjdXJyZW50Rm9jdXNQb2ludGVyOiBQb2ludGVyVHlwZSA9IG51bGw7XG4gIC8vIFVzZWQgdG8gY2FsbCBvblN0YXJ0IG9uIHRoZSBmaXJzdCBrZXlkb3duIGV2ZW50XG4gIHByaXZhdGUgZmlyc3RLZXlEb3duOiBib29sZWFuID0gZmFsc2U7XG4gIC8vIEN1cnJlbnQgdG91Y2ggaWQgb2YgdG91Y2ggZXZlbnQgYmVpbmcgaGFuZGxlZFxuICBwcml2YXRlIHRvdWNoSWQ6IG51bWJlciA9IG51bGw7XG4gIC8vIFZhbHVlcyByZWNvcmRlZCB3aGVuIGZpcnN0IGRyYWdnaW5nIHRoZSBiYXJcbiAgcHJpdmF0ZSBkcmFnZ2luZzogRHJhZ2dpbmcgPSBuZXcgRHJhZ2dpbmcoKTtcblxuICAvKiBTbGlkZXIgRE9NIGVsZW1lbnRzICovXG5cbiAgLy8gTGVmdCBzZWxlY3Rpb24gYmFyIG91dHNpZGUgdHdvIGhhbmRsZXNcbiAgQFZpZXdDaGlsZCgnbGVmdE91dGVyU2VsZWN0aW9uQmFyJywge3JlYWQ6IFNsaWRlckVsZW1lbnREaXJlY3RpdmV9KVxuICBwcml2YXRlIGxlZnRPdXRlclNlbGVjdGlvbkJhckVsZW1lbnQ6IFNsaWRlckVsZW1lbnREaXJlY3RpdmU7XG5cbiAgLy8gUmlnaHQgc2VsZWN0aW9uIGJhciBvdXRzaWRlIHR3byBoYW5kbGVzXG4gIEBWaWV3Q2hpbGQoJ3JpZ2h0T3V0ZXJTZWxlY3Rpb25CYXInLCB7cmVhZDogU2xpZGVyRWxlbWVudERpcmVjdGl2ZX0pXG4gIHByaXZhdGUgcmlnaHRPdXRlclNlbGVjdGlvbkJhckVsZW1lbnQ6IFNsaWRlckVsZW1lbnREaXJlY3RpdmU7XG5cbiAgLy8gVGhlIHdob2xlIHNsaWRlciBiYXJcbiAgQFZpZXdDaGlsZCgnZnVsbEJhcicsIHtyZWFkOiBTbGlkZXJFbGVtZW50RGlyZWN0aXZlfSlcbiAgcHJpdmF0ZSBmdWxsQmFyRWxlbWVudDogU2xpZGVyRWxlbWVudERpcmVjdGl2ZTtcblxuICAvLyBIaWdobGlnaHQgYmV0d2VlbiB0d28gaGFuZGxlc1xuICBAVmlld0NoaWxkKCdzZWxlY3Rpb25CYXInLCB7cmVhZDogU2xpZGVyRWxlbWVudERpcmVjdGl2ZX0pXG4gIHByaXZhdGUgc2VsZWN0aW9uQmFyRWxlbWVudDogU2xpZGVyRWxlbWVudERpcmVjdGl2ZTtcblxuICAvLyBMZWZ0IHNsaWRlciBoYW5kbGVcbiAgQFZpZXdDaGlsZCgnbWluSGFuZGxlJywge3JlYWQ6IFNsaWRlckhhbmRsZURpcmVjdGl2ZX0pXG4gIHByaXZhdGUgbWluSGFuZGxlRWxlbWVudDogU2xpZGVySGFuZGxlRGlyZWN0aXZlO1xuXG4gIC8vIFJpZ2h0IHNsaWRlciBoYW5kbGVcbiAgQFZpZXdDaGlsZCgnbWF4SGFuZGxlJywge3JlYWQ6IFNsaWRlckhhbmRsZURpcmVjdGl2ZX0pXG4gIHByaXZhdGUgbWF4SGFuZGxlRWxlbWVudDogU2xpZGVySGFuZGxlRGlyZWN0aXZlO1xuXG4gIC8vIEZsb29yIGxhYmVsXG4gIEBWaWV3Q2hpbGQoJ2Zsb29yTGFiZWwnLCB7cmVhZDogU2xpZGVyTGFiZWxEaXJlY3RpdmV9KVxuICBwcml2YXRlIGZsb29yTGFiZWxFbGVtZW50OiBTbGlkZXJMYWJlbERpcmVjdGl2ZTtcblxuICAvLyBDZWlsaW5nIGxhYmVsXG4gIEBWaWV3Q2hpbGQoJ2NlaWxMYWJlbCcsIHtyZWFkOiBTbGlkZXJMYWJlbERpcmVjdGl2ZX0pXG4gIHByaXZhdGUgY2VpbExhYmVsRWxlbWVudDogU2xpZGVyTGFiZWxEaXJlY3RpdmU7XG5cbiAgLy8gTGFiZWwgYWJvdmUgdGhlIGxvdyB2YWx1ZVxuICBAVmlld0NoaWxkKCdtaW5IYW5kbGVMYWJlbCcsIHtyZWFkOiBTbGlkZXJMYWJlbERpcmVjdGl2ZX0pXG4gIHByaXZhdGUgbWluSGFuZGxlTGFiZWxFbGVtZW50OiBTbGlkZXJMYWJlbERpcmVjdGl2ZTtcblxuICAvLyBMYWJlbCBhYm92ZSB0aGUgaGlnaCB2YWx1ZVxuICBAVmlld0NoaWxkKCdtYXhIYW5kbGVMYWJlbCcsIHtyZWFkOiBTbGlkZXJMYWJlbERpcmVjdGl2ZX0pXG4gIHByaXZhdGUgbWF4SGFuZGxlTGFiZWxFbGVtZW50OiBTbGlkZXJMYWJlbERpcmVjdGl2ZTtcblxuICAvLyBDb21iaW5lZCBsYWJlbFxuICBAVmlld0NoaWxkKCdjb21iaW5lZExhYmVsJywge3JlYWQ6IFNsaWRlckxhYmVsRGlyZWN0aXZlfSlcbiAgcHJpdmF0ZSBjb21iaW5lZExhYmVsRWxlbWVudDogU2xpZGVyTGFiZWxEaXJlY3RpdmU7XG5cbiAgLy8gVGhlIHRpY2tzXG4gIEBWaWV3Q2hpbGQoJ3RpY2tzRWxlbWVudCcsIHtyZWFkOiBTbGlkZXJFbGVtZW50RGlyZWN0aXZlfSlcbiAgcHJpdmF0ZSB0aWNrc0VsZW1lbnQ6IFNsaWRlckVsZW1lbnREaXJlY3RpdmU7XG5cbiAgLy8gT3B0aW9uYWwgY3VzdG9tIHRlbXBsYXRlIGZvciBkaXNwbGF5aW5nIHRvb2x0aXBzXG4gIEBDb250ZW50Q2hpbGQoJ3Rvb2x0aXBUZW1wbGF0ZScpXG4gIHB1YmxpYyB0b29sdGlwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLy8gSG9zdCBlbGVtZW50IGNsYXNzIGJpbmRpbmdzXG4gIEBIb3N0QmluZGluZygnY2xhc3MudmVydGljYWwnKVxuICBwdWJsaWMgc2xpZGVyRWxlbWVudFZlcnRpY2FsQ2xhc3M6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbmltYXRlJylcbiAgcHVibGljIHNsaWRlckVsZW1lbnRBbmltYXRlQ2xhc3M6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy53aXRoLWxlZ2VuZCcpXG4gIHB1YmxpYyBzbGlkZXJFbGVtZW50V2l0aExlZ2VuZENsYXNzOiBib29sZWFuID0gZmFsc2U7XG4gIEBIb3N0QmluZGluZygnYXR0ci5kaXNhYmxlZCcpXG4gIHB1YmxpYyBzbGlkZXJFbGVtZW50RGlzYWJsZWRBdHRyOiBzdHJpbmcgPSBudWxsO1xuXG4gIC8vIENTUyBzdHlsZXMgYW5kIGNsYXNzIGZsYWdzXG4gIHB1YmxpYyBiYXJTdHlsZTogYW55ID0ge307XG4gIHB1YmxpYyBtaW5Qb2ludGVyU3R5bGU6IGFueSA9IHt9O1xuICBwdWJsaWMgbWF4UG9pbnRlclN0eWxlOiBhbnkgPSB7fTtcbiAgcHVibGljIGZ1bGxCYXJUcmFuc3BhcmVudENsYXNzOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBzZWxlY3Rpb25CYXJEcmFnZ2FibGVDbGFzczogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgdGlja3NVbmRlclZhbHVlc0NsYXNzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy8gV2hldGhlciB0byBzaG93L2hpZGUgdGlja3NcbiAgcHVibGljIGdldCBzaG93VGlja3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlld09wdGlvbnMuc2hvd1RpY2tzO1xuICB9XG5cbiAgLyogSWYgdGlja1N0ZXAgaXMgc2V0IG9yIHRpY2tzQXJyYXkgaXMgc3BlY2lmaWVkLlxuICAgICBJbiB0aGlzIGNhc2UsIHRpY2tzIHZhbHVlcyBzaG91bGQgYmUgZGlzcGxheWVkIGJlbG93IHRoZSBzbGlkZXIuICovXG4gIHByaXZhdGUgaW50ZXJtZWRpYXRlVGlja3M6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8gVGlja3MgYXJyYXkgYXMgZGlzcGxheWVkIGluIHZpZXdcbiAgcHVibGljIHRpY2tzOiBUaWNrW10gPSBbXTtcblxuICAvLyBFdmVudCBsaXN0ZW5lcnNcbiAgcHJpdmF0ZSBldmVudExpc3RlbmVySGVscGVyOiBFdmVudExpc3RlbmVySGVscGVyID0gbnVsbDtcbiAgcHJpdmF0ZSBvbk1vdmVFdmVudExpc3RlbmVyOiBFdmVudExpc3RlbmVyID0gbnVsbDtcbiAgcHJpdmF0ZSBvbkVuZEV2ZW50TGlzdGVuZXI6IEV2ZW50TGlzdGVuZXIgPSBudWxsO1xuICAvLyBXaGV0aGVyIGN1cnJlbnRseSBtb3ZpbmcgdGhlIHNsaWRlciAoYmV0d2VlbiBvblN0YXJ0KCkgYW5kIG9uRW5kKCkpXG4gIHByaXZhdGUgbW92aW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy8gT2JzZXJ2ZXIgZm9yIHNsaWRlciBlbGVtZW50IHJlc2l6ZSBldmVudHNcbiAgcHJpdmF0ZSByZXNpemVPYnNlcnZlcjogUmVzaXplT2JzZXJ2ZXIgPSBudWxsO1xuXG4gIC8vIENhbGxiYWNrcyBmb3IgcmVhY3RpdmUgZm9ybXMgc3VwcG9ydFxuICBwcml2YXRlIG9uVG91Y2hlZENhbGxiYWNrOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9IG51bGw7XG4gIHByaXZhdGUgb25DaGFuZ2VDYWxsYmFjazogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSBudWxsO1xuXG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgem9uZTogTmdab25lKSB7XG4gICAgdGhpcy5ldmVudExpc3RlbmVySGVscGVyID0gbmV3IEV2ZW50TGlzdGVuZXJIZWxwZXIodGhpcy5yZW5kZXJlcik7XG4gIH1cblxuICAvLyBPbkluaXQgaW50ZXJmYWNlXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnZpZXdPcHRpb25zID0gbmV3IE9wdGlvbnMoKTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMudmlld09wdGlvbnMsIHRoaXMub3B0aW9ucyk7XG5cbiAgICAvLyBXZSBuZWVkIHRvIHJ1biB0aGVzZSB0d28gdGhpbmdzIGZpcnN0LCBiZWZvcmUgdGhlIHJlc3Qgb2YgdGhlIGluaXQgaW4gbmdBZnRlclZpZXdJbml0KCksXG4gICAgLy8gYmVjYXVzZSB0aGVzZSB0d28gc2V0dGluZ3MgYXJlIHNldCB0aHJvdWdoIEBIb3N0QmluZGluZyBhbmQgQW5ndWxhciBjaGFuZ2UgZGV0ZWN0aW9uXG4gICAgLy8gbWVjaGFuaXNtIGRvZXNuJ3QgbGlrZSB0aGVtIGNoYW5naW5nIGluIG5nQWZ0ZXJWaWV3SW5pdCgpXG4gICAgdGhpcy51cGRhdGVEaXNhYmxlZFN0YXRlKCk7XG4gICAgdGhpcy51cGRhdGVWZXJ0aWNhbFN0YXRlKCk7XG4gIH1cblxuICAvLyBBZnRlclZpZXdJbml0IGludGVyZmFjZVxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYXBwbHlPcHRpb25zKCk7XG5cbiAgICB0aGlzLnN1YnNjcmliZUlucHV0TW9kZWxDaGFuZ2VTdWJqZWN0KHRoaXMudmlld09wdGlvbnMuaW5wdXRFdmVudHNJbnRlcnZhbCk7XG4gICAgdGhpcy5zdWJzY3JpYmVPdXRwdXRNb2RlbENoYW5nZVN1YmplY3QodGhpcy52aWV3T3B0aW9ucy5vdXRwdXRFdmVudHNJbnRlcnZhbCk7XG5cbiAgICAvLyBPbmNlIHdlIGFwcGx5IG9wdGlvbnMsIHdlIG5lZWQgdG8gbm9ybWFsaXNlIG1vZGVsIHZhbHVlcyBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICB0aGlzLnJlbm9ybWFsaXNlTW9kZWxWYWx1ZXMoKTtcblxuICAgIHRoaXMudmlld0xvd1ZhbHVlID0gdGhpcy5tb2RlbFZhbHVlVG9WaWV3VmFsdWUodGhpcy52YWx1ZSk7XG4gICAgaWYgKHRoaXMucmFuZ2UpIHtcbiAgICAgIHRoaXMudmlld0hpZ2hWYWx1ZSA9IHRoaXMubW9kZWxWYWx1ZVRvVmlld1ZhbHVlKHRoaXMuaGlnaFZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52aWV3SGlnaFZhbHVlID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVZlcnRpY2FsU3RhdGUoKTsgLy8gbmVlZCB0byBydW4gdGhpcyBhZ2FpbiB0byBjb3ZlciBjaGFuZ2VzIHRvIHNsaWRlciBlbGVtZW50c1xuICAgIHRoaXMubWFuYWdlRWxlbWVudHNTdHlsZSgpO1xuICAgIHRoaXMudXBkYXRlRGlzYWJsZWRTdGF0ZSgpO1xuICAgIHRoaXMuY2FsY3VsYXRlVmlld0RpbWVuc2lvbnMoKTtcbiAgICB0aGlzLmFkZEFjY2Vzc2liaWxpdHkoKTtcbiAgICB0aGlzLnVwZGF0ZUNlaWxMYWJlbCgpO1xuICAgIHRoaXMudXBkYXRlRmxvb3JMYWJlbCgpO1xuICAgIHRoaXMuaW5pdEhhbmRsZXMoKTtcbiAgICB0aGlzLm1hbmFnZUV2ZW50c0JpbmRpbmdzKCk7XG5cbiAgICB0aGlzLnN1YnNjcmliZVJlc2l6ZU9ic2VydmVyKCk7XG5cbiAgICB0aGlzLmluaXRIYXNSdW4gPSB0cnVlO1xuXG4gICAgLy8gUnVuIGNoYW5nZSBkZXRlY3Rpb24gbWFudWFsbHkgdG8gcmVzb2x2ZSBzb21lIGlzc3VlcyB3aGVuIGluaXQgcHJvY2VkdXJlIGNoYW5nZXMgdmFsdWVzIHVzZWQgaW4gdGhlIHZpZXdcbiAgICBpZiAoIXRoaXMuaXNSZWZEZXN0cm95ZWQoKSkge1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIC8vIE9uQ2hhbmdlcyBpbnRlcmZhY2VcbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAvLyBBbHdheXMgYXBwbHkgb3B0aW9ucyBmaXJzdFxuICAgIGlmICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQoY2hhbmdlcy5vcHRpb25zKSkge1xuICAgICAgdGhpcy5vbkNoYW5nZU9wdGlvbnMoKTtcbiAgICB9XG5cbiAgICAvLyBUaGVuIHZhbHVlIGNoYW5nZXNcbiAgICBpZiAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKGNoYW5nZXMudmFsdWUpIHx8XG4gICAgICAgICFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZChjaGFuZ2VzLmhpZ2hWYWx1ZSkpIHtcbiAgICAgIHRoaXMuaW5wdXRNb2RlbENoYW5nZVN1YmplY3QubmV4dCh7XG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICBoaWdoVmFsdWU6IHRoaXMuaGlnaFZhbHVlLFxuICAgICAgICBmb3JjZUNoYW5nZTogZmFsc2UsXG4gICAgICAgIGludGVybmFsQ2hhbmdlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gT25EZXN0cm95IGludGVyZmFjZVxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51bmJpbmRFdmVudHMoKTtcblxuICAgIHRoaXMudW5zdWJzY3JpYmVSZXNpemVPYnNlcnZlcigpO1xuICAgIHRoaXMudW5zdWJzY3JpYmVJbnB1dE1vZGVsQ2hhbmdlU3ViamVjdCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmVPdXRwdXRNb2RlbENoYW5nZVN1YmplY3QoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlTWFudWFsUmVmcmVzaCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmVUcmlnZ2VyRm9jdXMoKTtcbiAgfVxuXG4gIC8vIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZVxuICBwdWJsaWMgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge1xuICAgIGlmIChvYmogaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgdGhpcy52YWx1ZSA9IG9ialswXTtcbiAgICAgIHRoaXMuaGlnaFZhbHVlID0gb2JqWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gb2JqO1xuICAgIH1cblxuICAgIC8vIG5nT25DaGFuZ2VzKCkgaXMgbm90IGNhbGxlZCBpbiB0aGlzIGluc3RhbmNlLCBzbyB3ZSBuZWVkIHRvIGNvbW11bmljYXRlIHRoZSBjaGFuZ2UgbWFudWFsbHlcbiAgICB0aGlzLmlucHV0TW9kZWxDaGFuZ2VTdWJqZWN0Lm5leHQoe1xuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICBoaWdoVmFsdWU6IHRoaXMuaGlnaFZhbHVlLFxuICAgICAgZm9yY2VDaGFuZ2U6IGZhbHNlLFxuICAgICAgaW50ZXJuYWxDaGFuZ2U6IGZhbHNlXG4gICAgfSk7XG4gIH1cblxuICAvLyBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2VcbiAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjazogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gb25DaGFuZ2VDYWxsYmFjaztcbiAgfVxuXG4gIC8vIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZVxuICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQob25Ub3VjaGVkQ2FsbGJhY2s6IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBvblRvdWNoZWRDYWxsYmFjaztcbiAgfVxuXG4gIC8vIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZVxuICBwdWJsaWMgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy52aWV3T3B0aW9ucy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgdGhpcy51cGRhdGVEaXNhYmxlZFN0YXRlKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uUmVzaXplKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNhbGN1bGF0ZVZpZXdEaW1lbnNpb25zQW5kRGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVJbnB1dE1vZGVsQ2hhbmdlU3ViamVjdChpbnRlcnZhbD86IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuaW5wdXRNb2RlbENoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMuaW5wdXRNb2RlbENoYW5nZVN1YmplY3RcbiAgICAucGlwZShcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKE1vZGVsQ2hhbmdlLmNvbXBhcmUpLFxuICAgICAgLy8gSGFjayB0byByZXNldCB0aGUgc3RhdHVzIG9mIHRoZSBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpIC0gaWYgYSBcImZha2VcIiBldmVudCBjb21lcyB0aHJvdWdoIHdpdGggZm9yY2VDaGFuZ2U9dHJ1ZSxcbiAgICAgIC8vIHdlIGZvcmNlZnVsbHkgYnktcGFzcyBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLCBidXQgb3RoZXJ3aXNlIGRyb3AgdGhlIGV2ZW50XG4gICAgICBmaWx0ZXIoKG1vZGVsQ2hhbmdlOiBJbnB1dE1vZGVsQ2hhbmdlKSA9PiAhbW9kZWxDaGFuZ2UuZm9yY2VDaGFuZ2UgJiYgIW1vZGVsQ2hhbmdlLmludGVybmFsQ2hhbmdlKSxcbiAgICAgICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQoaW50ZXJ2YWwpKVxuICAgICAgICAgID8gdGhyb3R0bGVUaW1lKGludGVydmFsLCB1bmRlZmluZWQsIHsgbGVhZGluZzogdHJ1ZSwgdHJhaWxpbmc6IHRydWV9KVxuICAgICAgICAgIDogdGFwKCgpID0+IHt9KSAvLyBuby1vcFxuICAgIClcbiAgICAuc3Vic2NyaWJlKChtb2RlbENoYW5nZTogSW5wdXRNb2RlbENoYW5nZSkgPT4gdGhpcy5hcHBseUlucHV0TW9kZWxDaGFuZ2UobW9kZWxDaGFuZ2UpKTtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlT3V0cHV0TW9kZWxDaGFuZ2VTdWJqZWN0KGludGVydmFsPzogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5vdXRwdXRNb2RlbENoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMub3V0cHV0TW9kZWxDaGFuZ2VTdWJqZWN0XG4gICAgICAucGlwZShcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoTW9kZWxDaGFuZ2UuY29tcGFyZSksXG4gICAgICAgICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQoaW50ZXJ2YWwpKVxuICAgICAgICAgID8gdGhyb3R0bGVUaW1lKGludGVydmFsLCB1bmRlZmluZWQsIHsgbGVhZGluZzogdHJ1ZSwgdHJhaWxpbmc6IHRydWV9KVxuICAgICAgICAgIDogdGFwKCgpID0+IHt9KSAvLyBuby1vcFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgobW9kZWxDaGFuZ2U6IE91dHB1dE1vZGVsQ2hhbmdlKSA9PiB0aGlzLnB1Ymxpc2hPdXRwdXRNb2RlbENoYW5nZShtb2RlbENoYW5nZSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVSZXNpemVPYnNlcnZlcigpOiB2b2lkIHtcbiAgICBpZiAoQ29tcGF0aWJpbGl0eUhlbHBlci5pc1Jlc2l6ZU9ic2VydmVyQXZhaWxhYmxlKCkpIHtcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKCk6IHZvaWQgPT4gdGhpcy5jYWxjdWxhdGVWaWV3RGltZW5zaW9uc0FuZERldGVjdENoYW5nZXMoKSk7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdW5zdWJzY3JpYmVSZXNpemVPYnNlcnZlcigpOiB2b2lkIHtcbiAgICBpZiAoQ29tcGF0aWJpbGl0eUhlbHBlci5pc1Jlc2l6ZU9ic2VydmVyQXZhaWxhYmxlKCkgJiYgdGhpcy5yZXNpemVPYnNlcnZlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVuc3Vic2NyaWJlT25Nb3ZlKCk6IHZvaWQge1xuICAgIGlmICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5vbk1vdmVFdmVudExpc3RlbmVyKSkge1xuICAgICAgdGhpcy5ldmVudExpc3RlbmVySGVscGVyLmRldGFjaEV2ZW50TGlzdGVuZXIodGhpcy5vbk1vdmVFdmVudExpc3RlbmVyKTtcbiAgICAgIHRoaXMub25Nb3ZlRXZlbnRMaXN0ZW5lciA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1bnN1YnNjcmliZU9uRW5kKCk6IHZvaWQge1xuICAgIGlmICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5vbkVuZEV2ZW50TGlzdGVuZXIpKSB7XG4gICAgICB0aGlzLmV2ZW50TGlzdGVuZXJIZWxwZXIuZGV0YWNoRXZlbnRMaXN0ZW5lcih0aGlzLm9uRW5kRXZlbnRMaXN0ZW5lcik7XG4gICAgICB0aGlzLm9uRW5kRXZlbnRMaXN0ZW5lciA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1bnN1YnNjcmliZUlucHV0TW9kZWxDaGFuZ2VTdWJqZWN0KCk6IHZvaWQge1xuICAgIGlmICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5pbnB1dE1vZGVsQ2hhbmdlU3Vic2NyaXB0aW9uKSkge1xuICAgICAgdGhpcy5pbnB1dE1vZGVsQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmlucHV0TW9kZWxDaGFuZ2VTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdW5zdWJzY3JpYmVPdXRwdXRNb2RlbENoYW5nZVN1YmplY3QoKTogdm9pZCB7XG4gICAgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLm91dHB1dE1vZGVsQ2hhbmdlU3Vic2NyaXB0aW9uKSkge1xuICAgICAgdGhpcy5vdXRwdXRNb2RlbENoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5vdXRwdXRNb2RlbENoYW5nZVN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1bnN1YnNjcmliZU1hbnVhbFJlZnJlc2goKTogdm9pZCB7XG4gICAgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLm1hbnVhbFJlZnJlc2hTdWJzY3JpcHRpb24pKSB7XG4gICAgICB0aGlzLm1hbnVhbFJlZnJlc2hTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMubWFudWFsUmVmcmVzaFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1bnN1YnNjcmliZVRyaWdnZXJGb2N1cygpOiB2b2lkIHtcbiAgICBpZiAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudHJpZ2dlckZvY3VzU3Vic2NyaXB0aW9uKSkge1xuICAgICAgdGhpcy50cmlnZ2VyRm9jdXNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMudHJpZ2dlckZvY3VzU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFBvaW50ZXJFbGVtZW50KHBvaW50ZXJUeXBlOiBQb2ludGVyVHlwZSk6IFNsaWRlckhhbmRsZURpcmVjdGl2ZSB7XG4gICAgaWYgKHBvaW50ZXJUeXBlID09PSBQb2ludGVyVHlwZS5NaW4pIHtcbiAgICAgIHJldHVybiB0aGlzLm1pbkhhbmRsZUVsZW1lbnQ7XG4gICAgfSBlbHNlIGlmIChwb2ludGVyVHlwZSA9PT0gUG9pbnRlclR5cGUuTWF4KSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXhIYW5kbGVFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q3VycmVudFRyYWNraW5nVmFsdWUoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5jdXJyZW50VHJhY2tpbmdQb2ludGVyID09PSBQb2ludGVyVHlwZS5NaW4pIHtcbiAgICAgIHJldHVybiB0aGlzLnZpZXdMb3dWYWx1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudFRyYWNraW5nUG9pbnRlciA9PT0gUG9pbnRlclR5cGUuTWF4KSB7XG4gICAgICByZXR1cm4gdGhpcy52aWV3SGlnaFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgbW9kZWxWYWx1ZVRvVmlld1ZhbHVlKG1vZGVsVmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKFZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKG1vZGVsVmFsdWUpKSB7XG4gICAgICByZXR1cm4gTmFOO1xuICAgIH1cblxuICAgIGlmICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy52aWV3T3B0aW9ucy5zdGVwc0FycmF5KSAmJiAhdGhpcy52aWV3T3B0aW9ucy5iaW5kSW5kZXhGb3JTdGVwc0FycmF5KSB7XG4gICAgICByZXR1cm4gVmFsdWVIZWxwZXIuZmluZFN0ZXBJbmRleCgrbW9kZWxWYWx1ZSwgdGhpcy52aWV3T3B0aW9ucy5zdGVwc0FycmF5KTtcbiAgICB9XG4gICAgcmV0dXJuICttb2RlbFZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSB2aWV3VmFsdWVUb01vZGVsVmFsdWUodmlld1ZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy52aWV3T3B0aW9ucy5zdGVwc0FycmF5KSAmJiAhdGhpcy52aWV3T3B0aW9ucy5iaW5kSW5kZXhGb3JTdGVwc0FycmF5KSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRTdGVwVmFsdWUodmlld1ZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZpZXdWYWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3RlcFZhbHVlKHNsaWRlclZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHN0ZXA6IEN1c3RvbVN0ZXBEZWZpbml0aW9uID0gdGhpcy52aWV3T3B0aW9ucy5zdGVwc0FycmF5W3NsaWRlclZhbHVlXTtcbiAgICByZXR1cm4gKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZChzdGVwKSkgPyBzdGVwLnZhbHVlIDogTmFOO1xuICB9XG5cbiAgcHJpdmF0ZSBhcHBseVZpZXdDaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudmlld1ZhbHVlVG9Nb2RlbFZhbHVlKHRoaXMudmlld0xvd1ZhbHVlKTtcbiAgICBpZiAodGhpcy5yYW5nZSkge1xuICAgICAgdGhpcy5oaWdoVmFsdWUgPSB0aGlzLnZpZXdWYWx1ZVRvTW9kZWxWYWx1ZSh0aGlzLnZpZXdIaWdoVmFsdWUpO1xuICAgIH1cblxuICAgIHRoaXMub3V0cHV0TW9kZWxDaGFuZ2VTdWJqZWN0Lm5leHQoe1xuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICBoaWdoVmFsdWU6IHRoaXMuaGlnaFZhbHVlLFxuICAgICAgdXNlckV2ZW50SW5pdGlhdGVkOiB0cnVlLFxuICAgICAgZm9yY2VDaGFuZ2U6IGZhbHNlXG4gICAgfSk7XG5cbiAgICAvLyBBdCB0aGlzIHBvaW50IGFsbCBjaGFuZ2VzIGFyZSBhcHBsaWVkIGFuZCBvdXRwdXRzIGFyZSBlbWl0dGVkLCBzbyB3ZSBzaG91bGQgYmUgZG9uZS5cbiAgICAvLyBIb3dldmVyLCBpbnB1dCBjaGFuZ2VzIGFyZSBjb21tdW5pY2F0ZWQgaW4gZGlmZmVyZW50IHN0cmVhbSBhbmQgd2UgbmVlZCB0byBiZSByZWFkeSB0b1xuICAgIC8vIGFjdCBvbiB0aGUgbmV4dCBpbnB1dCBjaGFuZ2UgZXZlbiBpZiBpdCBpcyBleGFjdGx5IHRoZSBzYW1lIGFzIGxhc3QgaW5wdXQgY2hhbmdlLlxuICAgIC8vIFRoZXJlZm9yZSwgd2Ugc2VuZCBhIHNwZWNpYWwgZXZlbnQgdG8gcmVzZXQgdGhlIHN0cmVhbS5cbiAgICB0aGlzLmlucHV0TW9kZWxDaGFuZ2VTdWJqZWN0Lm5leHQoe1xuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICBoaWdoVmFsdWU6IHRoaXMuaGlnaFZhbHVlLFxuICAgICAgZm9yY2VDaGFuZ2U6IGZhbHNlLFxuICAgICAgaW50ZXJuYWxDaGFuZ2U6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEFwcGx5IG1vZGVsIGNoYW5nZSB0byB0aGUgc2xpZGVyIHZpZXdcbiAgcHJpdmF0ZSBhcHBseUlucHV0TW9kZWxDaGFuZ2UobW9kZWxDaGFuZ2U6IElucHV0TW9kZWxDaGFuZ2UpOiB2b2lkIHtcbiAgICBjb25zdCBub3JtYWxpc2VkTW9kZWxDaGFuZ2U6IE1vZGVsVmFsdWVzID0gdGhpcy5ub3JtYWxpc2VNb2RlbFZhbHVlcyhtb2RlbENoYW5nZSk7XG5cbiAgICAvLyBJZiBub3JtYWxpc2VkIG1vZGVsIGNoYW5nZSBpcyBkaWZmZXJlbnQsIGFwcGx5IHRoZSBjaGFuZ2UgdG8gdGhlIG1vZGVsIHZhbHVlc1xuICAgIGNvbnN0IG5vcm1hbGlzYXRpb25DaGFuZ2U6IGJvb2xlYW4gPSAhTW9kZWxWYWx1ZXMuY29tcGFyZShtb2RlbENoYW5nZSwgbm9ybWFsaXNlZE1vZGVsQ2hhbmdlKTtcbiAgICBpZiAobm9ybWFsaXNhdGlvbkNoYW5nZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IG5vcm1hbGlzZWRNb2RlbENoYW5nZS52YWx1ZTtcbiAgICAgIHRoaXMuaGlnaFZhbHVlID0gbm9ybWFsaXNlZE1vZGVsQ2hhbmdlLmhpZ2hWYWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLnZpZXdMb3dWYWx1ZSA9IHRoaXMubW9kZWxWYWx1ZVRvVmlld1ZhbHVlKG5vcm1hbGlzZWRNb2RlbENoYW5nZS52YWx1ZSk7XG4gICAgaWYgKHRoaXMucmFuZ2UpIHtcbiAgICAgIHRoaXMudmlld0hpZ2hWYWx1ZSA9IHRoaXMubW9kZWxWYWx1ZVRvVmlld1ZhbHVlKG5vcm1hbGlzZWRNb2RlbENoYW5nZS5oaWdoVmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZpZXdIaWdoVmFsdWUgPSBudWxsO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlTG93SGFuZGxlKHRoaXMudmFsdWVUb1Bvc2l0aW9uKHRoaXMudmlld0xvd1ZhbHVlKSk7XG4gICAgaWYgKHRoaXMucmFuZ2UpIHtcbiAgICAgIHRoaXMudXBkYXRlSGlnaEhhbmRsZSh0aGlzLnZhbHVlVG9Qb3NpdGlvbih0aGlzLnZpZXdIaWdoVmFsdWUpKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVTZWxlY3Rpb25CYXIoKTtcbiAgICB0aGlzLnVwZGF0ZVRpY2tzU2NhbGUoKTtcbiAgICB0aGlzLnVwZGF0ZUFyaWFBdHRyaWJ1dGVzKCk7XG4gICAgaWYgKHRoaXMucmFuZ2UpIHtcbiAgICAgIHRoaXMudXBkYXRlQ29tYmluZWRMYWJlbCgpO1xuICAgIH1cblxuICAgIC8vIEF0IHRoZSBlbmQsIHdlIG5lZWQgdG8gY29tbXVuaWNhdGUgdGhlIG1vZGVsIGNoYW5nZSB0byB0aGUgb3V0cHV0cyBhcyB3ZWxsXG4gICAgLy8gTm9ybWFsaXNhdGlvbiBjaGFuZ2VzIGFyZSBhbHNvIGFsd2F5cyBmb3JjZWQgb3V0IHRvIGVuc3VyZSB0aGF0IHN1YnNjcmliZXJzIGFsd2F5cyBlbmQgdXAgaW4gY29ycmVjdCBzdGF0ZVxuICAgIHRoaXMub3V0cHV0TW9kZWxDaGFuZ2VTdWJqZWN0Lm5leHQoe1xuICAgICAgdmFsdWU6IG5vcm1hbGlzZWRNb2RlbENoYW5nZS52YWx1ZSxcbiAgICAgIGhpZ2hWYWx1ZTogbm9ybWFsaXNlZE1vZGVsQ2hhbmdlLmhpZ2hWYWx1ZSxcbiAgICAgIGZvcmNlQ2hhbmdlOiBub3JtYWxpc2F0aW9uQ2hhbmdlLFxuICAgICAgdXNlckV2ZW50SW5pdGlhdGVkOiBmYWxzZVxuICAgIH0pO1xuICB9XG5cbiAgLy8gUHVibGlzaCBtb2RlbCBjaGFuZ2UgdG8gb3V0cHV0IGV2ZW50IGVtaXR0ZXJzIGFuZCByZWdpc3RlcmVkIGNhbGxiYWNrc1xuICBwcml2YXRlIHB1Ymxpc2hPdXRwdXRNb2RlbENoYW5nZShtb2RlbENoYW5nZTogT3V0cHV0TW9kZWxDaGFuZ2UpOiB2b2lkIHtcbiAgICBjb25zdCBlbWl0T3V0cHV0czogKCkgPT4gdm9pZCA9ICgpOiB2b2lkID0+IHtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdChtb2RlbENoYW5nZS52YWx1ZSk7XG4gICAgICBpZiAodGhpcy5yYW5nZSkge1xuICAgICAgICB0aGlzLmhpZ2hWYWx1ZUNoYW5nZS5lbWl0KG1vZGVsQ2hhbmdlLmhpZ2hWYWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5vbkNoYW5nZUNhbGxiYWNrKSkge1xuICAgICAgICBpZiAodGhpcy5yYW5nZSkge1xuICAgICAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayhbbW9kZWxDaGFuZ2UudmFsdWUsIG1vZGVsQ2hhbmdlLmhpZ2hWYWx1ZV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayhtb2RlbENoYW5nZS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5vblRvdWNoZWRDYWxsYmFjaykpIHtcbiAgICAgICAgaWYgKHRoaXMucmFuZ2UpIHtcbiAgICAgICAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrKFttb2RlbENoYW5nZS52YWx1ZSwgbW9kZWxDaGFuZ2UuaGlnaFZhbHVlXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayhtb2RlbENoYW5nZS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKG1vZGVsQ2hhbmdlLnVzZXJFdmVudEluaXRpYXRlZCkge1xuICAgICAgLy8gSWYgdGhpcyBjaGFuZ2Ugd2FzIGluaXRpYXRlZCBieSBhIHVzZXIgZXZlbnQsIHdlIGNhbiBlbWl0IG91dHB1dHMgaW4gdGhlIHNhbWUgdGlja1xuICAgICAgZW1pdE91dHB1dHMoKTtcbiAgICAgIHRoaXMudXNlckNoYW5nZS5lbWl0KHRoaXMuZ2V0Q2hhbmdlQ29udGV4dCgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQnV0LCBpZiB0aGUgY2hhbmdlIHdhcyBpbml0YXRlZCBieSBzb21ldGhpbmcgZWxzZSBsaWtlIGEgY2hhbmdlIGluIGlucHV0IGJpbmRpbmdzLFxuICAgICAgLy8gd2UgbmVlZCB0byB3YWl0IHVudGlsIG5leHQgdGljayB0byBlbWl0IHRoZSBvdXRwdXRzIHRvIGtlZXAgQW5ndWxhciBjaGFuZ2UgZGV0ZWN0aW9uIGhhcHB5XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHsgZW1pdE91dHB1dHMoKTsgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBub3JtYWxpc2VNb2RlbFZhbHVlcyhpbnB1dDogTW9kZWxWYWx1ZXMpOiBNb2RlbFZhbHVlcyB7XG4gICAgY29uc3Qgbm9ybWFsaXNlZElucHV0OiBNb2RlbFZhbHVlcyA9IG5ldyBNb2RlbFZhbHVlcygpO1xuICAgIG5vcm1hbGlzZWRJbnB1dC52YWx1ZSA9IGlucHV0LnZhbHVlO1xuICAgIG5vcm1hbGlzZWRJbnB1dC5oaWdoVmFsdWUgPSBpbnB1dC5oaWdoVmFsdWU7XG5cbiAgICBpZiAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudmlld09wdGlvbnMuc3RlcHNBcnJheSkpIHtcbiAgICAgIC8vIFdoZW4gdXNpbmcgc3RlcHMgYXJyYXksIG9ubHkgcm91bmQgdG8gbmVhcmVzdCBzdGVwIGluIHRoZSBhcnJheVxuICAgICAgLy8gTm8gb3RoZXIgZW5mb3JjZW1lbnQgY2FuIGJlIGRvbmUsIGFzIHRoZSBzdGVwIGFycmF5IG1heSBiZSBvdXQgb2Ygb3JkZXIsIGFuZCB0aGF0IGlzIHBlcmZlY3RseSBmaW5lXG4gICAgICBpZiAodGhpcy52aWV3T3B0aW9ucy5lbmZvcmNlU3RlcHNBcnJheSkge1xuICAgICAgICBjb25zdCB2YWx1ZUluZGV4OiBudW1iZXIgPSBWYWx1ZUhlbHBlci5maW5kU3RlcEluZGV4KG5vcm1hbGlzZWRJbnB1dC52YWx1ZSwgdGhpcy52aWV3T3B0aW9ucy5zdGVwc0FycmF5KTtcbiAgICAgICAgbm9ybWFsaXNlZElucHV0LnZhbHVlID0gdGhpcy52aWV3T3B0aW9ucy5zdGVwc0FycmF5W3ZhbHVlSW5kZXhdLnZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLnJhbmdlKSB7XG4gICAgICAgICAgY29uc3QgaGlnaFZhbHVlSW5kZXg6IG51bWJlciA9IFZhbHVlSGVscGVyLmZpbmRTdGVwSW5kZXgobm9ybWFsaXNlZElucHV0LmhpZ2hWYWx1ZSwgdGhpcy52aWV3T3B0aW9ucy5zdGVwc0FycmF5KTtcbiAgICAgICAgICBub3JtYWxpc2VkSW5wdXQuaGlnaFZhbHVlID0gdGhpcy52aWV3T3B0aW9ucy5zdGVwc0FycmF5W2hpZ2hWYWx1ZUluZGV4XS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbm9ybWFsaXNlZElucHV0O1xuICAgIH1cblxuICAgIGlmICh0aGlzLnZpZXdPcHRpb25zLmVuZm9yY2VTdGVwKSB7XG4gICAgICBub3JtYWxpc2VkSW5wdXQudmFsdWUgPSB0aGlzLnJvdW5kU3RlcChub3JtYWxpc2VkSW5wdXQudmFsdWUpO1xuICAgICAgaWYgKHRoaXMucmFuZ2UpIHtcbiAgICAgICAgbm9ybWFsaXNlZElucHV0LmhpZ2hWYWx1ZSA9IHRoaXMucm91bmRTdGVwKG5vcm1hbGlzZWRJbnB1dC5oaWdoVmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnZpZXdPcHRpb25zLmVuZm9yY2VSYW5nZSkge1xuICAgICAgbm9ybWFsaXNlZElucHV0LnZhbHVlID0gTWF0aEhlbHBlci5jbGFtcFRvUmFuZ2Uobm9ybWFsaXNlZElucHV0LnZhbHVlLCB0aGlzLnZpZXdPcHRpb25zLmZsb29yLCB0aGlzLnZpZXdPcHRpb25zLmNlaWwpO1xuXG4gICAgICBpZiAodGhpcy5yYW5nZSkge1xuICAgICAgICBub3JtYWxpc2VkSW5wdXQuaGlnaFZhbHVlID0gTWF0aEhlbHBlci5jbGFtcFRvUmFuZ2Uobm9ybWFsaXNlZElucHV0LmhpZ2hWYWx1ZSwgdGhpcy52aWV3T3B0aW9ucy5mbG9vciwgdGhpcy52aWV3T3B0aW9ucy5jZWlsKTtcbiAgICAgIH1cblxuICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgcmFuZ2Ugc2xpZGVyIGludmFyaWFudCAodmFsdWUgPD0gaGlnaFZhbHVlKSBpcyBhbHdheXMgc2F0aXNmaWVkXG4gICAgICBpZiAodGhpcy5yYW5nZSAmJiBpbnB1dC52YWx1ZSA+IGlucHV0LmhpZ2hWYWx1ZSkge1xuICAgICAgICAvLyBXZSBrbm93IHRoYXQgYm90aCB2YWx1ZXMgYXJlIG5vdyBjbGFtcGVkIGNvcnJlY3RseSwgdGhleSBtYXkganVzdCBiZSBpbiB0aGUgd3Jvbmcgb3JkZXJcbiAgICAgICAgLy8gU28gdGhlIGVhc3kgc29sdXRpb24gaXMgdG8gc3dhcCB0aGVtLi4uIGV4Y2VwdCBzd2FwcGluZyBpcyBzb21ldGltZXMgZGlzYWJsZWQgaW4gb3B0aW9ucywgc28gd2UgbWFrZSB0aGUgdHdvIHZhbHVlcyB0aGUgc2FtZVxuICAgICAgICBpZiAodGhpcy52aWV3T3B0aW9ucy5ub1N3aXRjaGluZykge1xuICAgICAgICAgIG5vcm1hbGlzZWRJbnB1dC52YWx1ZSA9IG5vcm1hbGlzZWRJbnB1dC5oaWdoVmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdGVtcFZhbHVlOiBudW1iZXIgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgICBub3JtYWxpc2VkSW5wdXQudmFsdWUgPSBpbnB1dC5oaWdoVmFsdWU7XG4gICAgICAgICAgbm9ybWFsaXNlZElucHV0LmhpZ2hWYWx1ZSA9IHRlbXBWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub3JtYWxpc2VkSW5wdXQ7XG4gIH1cblxuICBwcml2YXRlIHJlbm9ybWFsaXNlTW9kZWxWYWx1ZXMoKTogdm9pZCB7XG4gICAgY29uc3QgcHJldmlvdXNNb2RlbFZhbHVlczogTW9kZWxWYWx1ZXMgPSB7XG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgIGhpZ2hWYWx1ZTogdGhpcy5oaWdoVmFsdWVcbiAgICB9O1xuICAgIGNvbnN0IG5vcm1hbGlzZWRNb2RlbFZhbHVlczogTW9kZWxWYWx1ZXMgPSB0aGlzLm5vcm1hbGlzZU1vZGVsVmFsdWVzKHByZXZpb3VzTW9kZWxWYWx1ZXMpO1xuICAgIGlmICghTW9kZWxWYWx1ZXMuY29tcGFyZShub3JtYWxpc2VkTW9kZWxWYWx1ZXMsIHByZXZpb3VzTW9kZWxWYWx1ZXMpKSB7XG4gICAgICB0aGlzLnZhbHVlID0gbm9ybWFsaXNlZE1vZGVsVmFsdWVzLnZhbHVlO1xuICAgICAgdGhpcy5oaWdoVmFsdWUgPSBub3JtYWxpc2VkTW9kZWxWYWx1ZXMuaGlnaFZhbHVlO1xuXG4gICAgICB0aGlzLm91dHB1dE1vZGVsQ2hhbmdlU3ViamVjdC5uZXh0KHtcbiAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgIGhpZ2hWYWx1ZTogdGhpcy5oaWdoVmFsdWUsXG4gICAgICAgIGZvcmNlQ2hhbmdlOiB0cnVlLFxuICAgICAgICB1c2VyRXZlbnRJbml0aWF0ZWQ6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uQ2hhbmdlT3B0aW9ucygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaW5pdEhhc1J1bikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHByZXZpb3VzSW5wdXRFdmVudHNJbnRlcnZhbDogbnVtYmVyID0gdGhpcy52aWV3T3B0aW9ucy5pbnB1dEV2ZW50c0ludGVydmFsO1xuICAgIGNvbnN0IHByZXZpb3VzT3V0cHV0RXZlbnRzSW50ZXJ2YWw6IG51bWJlciA9IHRoaXMudmlld09wdGlvbnMub3V0cHV0RXZlbnRzSW50ZXJ2YWw7XG5cbiAgICBjb25zdCBwcmV2aW91c09wdGlvbnNJbmZsdWVuY2luZ0V2ZW50QmluZGluZ3M6IGJvb2xlYW5bXSA9IHRoaXMuZ2V0T3B0aW9uc0luZmx1ZW5jaW5nRXZlbnRCaW5kaW5ncyh0aGlzLnZpZXdPcHRpb25zKTtcblxuICAgIHRoaXMuYXBwbHlPcHRpb25zKCk7XG5cbiAgICBjb25zdCBuZXdPcHRpb25zSW5mbHVlbmNpbmdFdmVudEJpbmRpbmdzOiBib29sZWFuW10gPSB0aGlzLmdldE9wdGlvbnNJbmZsdWVuY2luZ0V2ZW50QmluZGluZ3ModGhpcy52aWV3T3B0aW9ucyk7XG4gICAgLy8gQXZvaWQgcmUtYmluZGluZyBldmVudHMgaW4gY2FzZSBub3RoaW5nIGNoYW5nZXMgdGhhdCBjYW4gaW5mbHVlbmNlIGl0XG4gICAgLy8gSXQgbWFrZXMgaXQgcG9zc2libGUgdG8gY2hhbmdlIG9wdGlvbnMgd2hpbGUgZHJhZ2dpbmcgdGhlIHNsaWRlclxuICAgIGNvbnN0IHJlYmluZEV2ZW50czogYm9vbGVhbiA9ICFWYWx1ZUhlbHBlci5hcmVBcnJheXNFcXVhbChwcmV2aW91c09wdGlvbnNJbmZsdWVuY2luZ0V2ZW50QmluZGluZ3MsIG5ld09wdGlvbnNJbmZsdWVuY2luZ0V2ZW50QmluZGluZ3MpO1xuXG4gICAgaWYgKHByZXZpb3VzSW5wdXRFdmVudHNJbnRlcnZhbCAhPT0gdGhpcy52aWV3T3B0aW9ucy5pbnB1dEV2ZW50c0ludGVydmFsKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlSW5wdXRNb2RlbENoYW5nZVN1YmplY3QoKTtcbiAgICAgIHRoaXMuc3Vic2NyaWJlSW5wdXRNb2RlbENoYW5nZVN1YmplY3QodGhpcy52aWV3T3B0aW9ucy5pbnB1dEV2ZW50c0ludGVydmFsKTtcbiAgICB9XG5cbiAgICBpZiAocHJldmlvdXNPdXRwdXRFdmVudHNJbnRlcnZhbCAhPT0gdGhpcy52aWV3T3B0aW9ucy5vdXRwdXRFdmVudHNJbnRlcnZhbCkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZUlucHV0TW9kZWxDaGFuZ2VTdWJqZWN0KCk7XG4gICAgICB0aGlzLnN1YnNjcmliZUlucHV0TW9kZWxDaGFuZ2VTdWJqZWN0KHRoaXMudmlld09wdGlvbnMub3V0cHV0RXZlbnRzSW50ZXJ2YWwpO1xuICAgIH1cblxuICAgIC8vIFdpdGggbmV3IG9wdGlvbnMsIHdlIG5lZWQgdG8gcmUtbm9ybWFsaXNlIG1vZGVsIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICB0aGlzLnJlbm9ybWFsaXNlTW9kZWxWYWx1ZXMoKTtcblxuICAgIHRoaXMudmlld0xvd1ZhbHVlID0gdGhpcy5tb2RlbFZhbHVlVG9WaWV3VmFsdWUodGhpcy52YWx1ZSk7XG4gICAgaWYgKHRoaXMucmFuZ2UpIHtcbiAgICAgIHRoaXMudmlld0hpZ2hWYWx1ZSA9IHRoaXMubW9kZWxWYWx1ZVRvVmlld1ZhbHVlKHRoaXMuaGlnaFZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52aWV3SGlnaFZhbHVlID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLnJlc2V0U2xpZGVyKHJlYmluZEV2ZW50cyk7XG4gIH1cblxuICAvLyBSZWFkIHRoZSB1c2VyIG9wdGlvbnMgYW5kIGFwcGx5IHRoZW0gdG8gdGhlIHNsaWRlciBtb2RlbFxuICBwcml2YXRlIGFwcGx5T3B0aW9ucygpOiB2b2lkIHtcbiAgICB0aGlzLnZpZXdPcHRpb25zID0gbmV3IE9wdGlvbnMoKTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMudmlld09wdGlvbnMsIHRoaXMub3B0aW9ucyk7XG5cbiAgICB0aGlzLnZpZXdPcHRpb25zLmRyYWdnYWJsZVJhbmdlID0gdGhpcy5yYW5nZSAmJiB0aGlzLnZpZXdPcHRpb25zLmRyYWdnYWJsZVJhbmdlO1xuICAgIHRoaXMudmlld09wdGlvbnMuZHJhZ2dhYmxlUmFuZ2VPbmx5ID0gdGhpcy5yYW5nZSAmJiB0aGlzLnZpZXdPcHRpb25zLmRyYWdnYWJsZVJhbmdlT25seTtcbiAgICBpZiAodGhpcy52aWV3T3B0aW9ucy5kcmFnZ2FibGVSYW5nZU9ubHkpIHtcbiAgICAgIHRoaXMudmlld09wdGlvbnMuZHJhZ2dhYmxlUmFuZ2UgPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMudmlld09wdGlvbnMuc2hvd1RpY2tzID0gdGhpcy52aWV3T3B0aW9ucy5zaG93VGlja3MgfHxcbiAgICAgIHRoaXMudmlld09wdGlvbnMuc2hvd1RpY2tzVmFsdWVzIHx8XG4gICAgICAhVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy52aWV3T3B0aW9ucy50aWNrc0FycmF5KTtcbiAgICBpZiAodGhpcy52aWV3T3B0aW9ucy5zaG93VGlja3MgJiZcbiAgICAgICAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudmlld09wdGlvbnMudGlja1N0ZXApIHx8ICFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZpZXdPcHRpb25zLnRpY2tzQXJyYXkpKSkge1xuICAgICAgdGhpcy5pbnRlcm1lZGlhdGVUaWNrcyA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy52aWV3T3B0aW9ucy5zaG93U2VsZWN0aW9uQmFyID0gdGhpcy52aWV3T3B0aW9ucy5zaG93U2VsZWN0aW9uQmFyIHx8XG4gICAgICB0aGlzLnZpZXdPcHRpb25zLnNob3dTZWxlY3Rpb25CYXJFbmQgfHxcbiAgICAgICFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZpZXdPcHRpb25zLnNob3dTZWxlY3Rpb25CYXJGcm9tVmFsdWUpO1xuXG4gICAgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZpZXdPcHRpb25zLnN0ZXBzQXJyYXkpKSB7XG4gICAgICB0aGlzLmFwcGx5U3RlcHNBcnJheU9wdGlvbnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hcHBseUZsb29yQ2VpbE9wdGlvbnMoKTtcbiAgICB9XG5cbiAgICBpZiAoVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy52aWV3T3B0aW9ucy5jb21iaW5lTGFiZWxzKSkge1xuICAgICAgdGhpcy52aWV3T3B0aW9ucy5jb21iaW5lTGFiZWxzID0gKG1pblZhbHVlOiBzdHJpbmcsIG1heFZhbHVlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgICByZXR1cm4gbWluVmFsdWUgKyAnIC0gJyArIG1heFZhbHVlO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy52aWV3T3B0aW9ucy5sb2dTY2FsZSAmJiB0aGlzLnZpZXdPcHRpb25zLmZsb29yID09PSAwKSB7XG4gICAgICB0aHJvdyBFcnJvcignQ2FuXFwndCB1c2UgZmxvb3I9MCB3aXRoIGxvZ2FyaXRobWljIHNjYWxlJyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhcHBseVN0ZXBzQXJyYXlPcHRpb25zKCk6IHZvaWQge1xuICAgIHRoaXMudmlld09wdGlvbnMuZmxvb3IgPSAwO1xuICAgIHRoaXMudmlld09wdGlvbnMuY2VpbCA9IHRoaXMudmlld09wdGlvbnMuc3RlcHNBcnJheS5sZW5ndGggLSAxO1xuICAgIHRoaXMudmlld09wdGlvbnMuc3RlcCA9IDE7XG5cbiAgICBpZiAoVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy52aWV3T3B0aW9ucy50cmFuc2xhdGUpKSB7XG4gICAgICB0aGlzLnZpZXdPcHRpb25zLnRyYW5zbGF0ZSA9IChtb2RlbFZhbHVlOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICAgICAgICBpZiAodGhpcy52aWV3T3B0aW9ucy5iaW5kSW5kZXhGb3JTdGVwc0FycmF5KSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZyh0aGlzLmdldFN0ZXBWYWx1ZShtb2RlbFZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb2RlbFZhbHVlKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhcHBseUZsb29yQ2VpbE9wdGlvbnMoKTogdm9pZCB7XG4gICAgaWYgKFZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudmlld09wdGlvbnMuc3RlcCkpIHtcbiAgICAgIHRoaXMudmlld09wdGlvbnMuc3RlcCA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmlld09wdGlvbnMuc3RlcCA9ICt0aGlzLnZpZXdPcHRpb25zLnN0ZXA7XG4gICAgICBpZiAodGhpcy52aWV3T3B0aW9ucy5zdGVwIDw9IDApIHtcbiAgICAgICAgdGhpcy52aWV3T3B0aW9ucy5zdGVwID0gMTtcbiAgICAgfVxuICAgIH1cblxuICAgIGlmIChWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZpZXdPcHRpb25zLmNlaWwpIHx8XG4gICAgICAgIFZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudmlld09wdGlvbnMuZmxvb3IpKSB7XG4gICAgICB0aHJvdyBFcnJvcignZmxvb3IgYW5kIGNlaWwgb3B0aW9ucyBtdXN0IGJlIHN1cHBsaWVkJyk7XG4gICAgfVxuICAgIHRoaXMudmlld09wdGlvbnMuY2VpbCA9ICt0aGlzLnZpZXdPcHRpb25zLmNlaWw7XG4gICAgdGhpcy52aWV3T3B0aW9ucy5mbG9vciA9ICt0aGlzLnZpZXdPcHRpb25zLmZsb29yO1xuXG4gICAgaWYgKFZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudmlld09wdGlvbnMudHJhbnNsYXRlKSkge1xuICAgICAgdGhpcy52aWV3T3B0aW9ucy50cmFuc2xhdGUgPSAodmFsdWU6IG51bWJlcik6IHN0cmluZyA9PiBTdHJpbmcodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJlc2V0cyBzbGlkZXJcbiAgcHJpdmF0ZSByZXNldFNsaWRlcihyZWJpbmRFdmVudHM6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgdGhpcy5tYW5hZ2VFbGVtZW50c1N0eWxlKCk7XG4gICAgdGhpcy5hZGRBY2Nlc3NpYmlsaXR5KCk7XG4gICAgdGhpcy51cGRhdGVDZWlsTGFiZWwoKTtcbiAgICB0aGlzLnVwZGF0ZUZsb29yTGFiZWwoKTtcbiAgICBpZiAocmViaW5kRXZlbnRzKSB7XG4gICAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xuICAgICAgdGhpcy5tYW5hZ2VFdmVudHNCaW5kaW5ncygpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZURpc2FibGVkU3RhdGUoKTtcbiAgICB0aGlzLmNhbGN1bGF0ZVZpZXdEaW1lbnNpb25zKCk7XG4gICAgdGhpcy5yZWZvY3VzUG9pbnRlcklmTmVlZGVkKCk7XG4gIH1cblxuICAvLyBTZXRzIGZvY3VzIG9uIHRoZSBzcGVjaWZpZWQgcG9pbnRlclxuICBwcml2YXRlIGZvY3VzUG9pbnRlcihwb2ludGVyVHlwZTogUG9pbnRlclR5cGUpOiB2b2lkIHtcbiAgICAvLyBJZiBub3Qgc3VwcGxpZWQsIHVzZSBtaW4gcG9pbnRlciBhcyBkZWZhdWx0XG4gICAgaWYgKHBvaW50ZXJUeXBlICE9PSBQb2ludGVyVHlwZS5NaW4gJiYgcG9pbnRlclR5cGUgIT09IFBvaW50ZXJUeXBlLk1heCkge1xuICAgICAgcG9pbnRlclR5cGUgPSBQb2ludGVyVHlwZS5NaW47XG4gICAgfVxuXG4gICAgaWYgKHBvaW50ZXJUeXBlID09PSBQb2ludGVyVHlwZS5NaW4pIHtcbiAgICAgIHRoaXMubWluSGFuZGxlRWxlbWVudC5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yYW5nZSAmJiBwb2ludGVyVHlwZSA9PT0gUG9pbnRlclR5cGUuTWF4KSB7XG4gICAgICB0aGlzLm1heEhhbmRsZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlZm9jdXNQb2ludGVySWZOZWVkZWQoKTogdm9pZCB7XG4gICAgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLmN1cnJlbnRGb2N1c1BvaW50ZXIpKSB7XG4gICAgICB0aGlzLm9uUG9pbnRlckZvY3VzKHRoaXMuY3VycmVudEZvY3VzUG9pbnRlcik7XG4gICAgICBjb25zdCBlbGVtZW50OiBTbGlkZXJIYW5kbGVEaXJlY3RpdmUgPSB0aGlzLmdldFBvaW50ZXJFbGVtZW50KHRoaXMuY3VycmVudEZvY3VzUG9pbnRlcik7XG4gICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gVXBkYXRlIGVhY2ggZWxlbWVudHMgc3R5bGUgYmFzZWQgb24gb3B0aW9uc1xuICBwcml2YXRlIG1hbmFnZUVsZW1lbnRzU3R5bGUoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVTY2FsZSgpO1xuXG4gICAgdGhpcy5mbG9vckxhYmVsRWxlbWVudC5zZXRBbHdheXNIaWRlKHRoaXMudmlld09wdGlvbnMuc2hvd1RpY2tzVmFsdWVzIHx8IHRoaXMudmlld09wdGlvbnMuaGlkZUxpbWl0TGFiZWxzKTtcbiAgICB0aGlzLmNlaWxMYWJlbEVsZW1lbnQuc2V0QWx3YXlzSGlkZSh0aGlzLnZpZXdPcHRpb25zLnNob3dUaWNrc1ZhbHVlcyB8fCB0aGlzLnZpZXdPcHRpb25zLmhpZGVMaW1pdExhYmVscyk7XG5cbiAgICBjb25zdCBoaWRlTGFiZWxzRm9yVGlja3M6IGJvb2xlYW4gPSB0aGlzLnZpZXdPcHRpb25zLnNob3dUaWNrc1ZhbHVlcyAmJiAhdGhpcy5pbnRlcm1lZGlhdGVUaWNrcztcbiAgICB0aGlzLm1pbkhhbmRsZUxhYmVsRWxlbWVudC5zZXRBbHdheXNIaWRlKGhpZGVMYWJlbHNGb3JUaWNrcyB8fCB0aGlzLnZpZXdPcHRpb25zLmhpZGVQb2ludGVyTGFiZWxzKTtcbiAgICB0aGlzLm1heEhhbmRsZUxhYmVsRWxlbWVudC5zZXRBbHdheXNIaWRlKGhpZGVMYWJlbHNGb3JUaWNrcyB8fCAhdGhpcy5yYW5nZSB8fCB0aGlzLnZpZXdPcHRpb25zLmhpZGVQb2ludGVyTGFiZWxzKTtcbiAgICB0aGlzLmNvbWJpbmVkTGFiZWxFbGVtZW50LnNldEFsd2F5c0hpZGUoaGlkZUxhYmVsc0ZvclRpY2tzIHx8ICF0aGlzLnJhbmdlIHx8IHRoaXMudmlld09wdGlvbnMuaGlkZVBvaW50ZXJMYWJlbHMpO1xuICAgIHRoaXMuc2VsZWN0aW9uQmFyRWxlbWVudC5zZXRBbHdheXNIaWRlKCF0aGlzLnJhbmdlICYmICF0aGlzLnZpZXdPcHRpb25zLnNob3dTZWxlY3Rpb25CYXIpO1xuICAgIHRoaXMubGVmdE91dGVyU2VsZWN0aW9uQmFyRWxlbWVudC5zZXRBbHdheXNIaWRlKCF0aGlzLnJhbmdlIHx8ICF0aGlzLnZpZXdPcHRpb25zLnNob3dPdXRlclNlbGVjdGlvbkJhcnMpO1xuICAgIHRoaXMucmlnaHRPdXRlclNlbGVjdGlvbkJhckVsZW1lbnQuc2V0QWx3YXlzSGlkZSghdGhpcy5yYW5nZSB8fCAhdGhpcy52aWV3T3B0aW9ucy5zaG93T3V0ZXJTZWxlY3Rpb25CYXJzKTtcblxuICAgIHRoaXMuZnVsbEJhclRyYW5zcGFyZW50Q2xhc3MgPSB0aGlzLnJhbmdlICYmIHRoaXMudmlld09wdGlvbnMuc2hvd091dGVyU2VsZWN0aW9uQmFycztcbiAgICB0aGlzLnNlbGVjdGlvbkJhckRyYWdnYWJsZUNsYXNzID0gdGhpcy52aWV3T3B0aW9ucy5kcmFnZ2FibGVSYW5nZSAmJiAhdGhpcy52aWV3T3B0aW9ucy5vbmx5QmluZEhhbmRsZXM7XG4gICAgdGhpcy50aWNrc1VuZGVyVmFsdWVzQ2xhc3MgPSB0aGlzLmludGVybWVkaWF0ZVRpY2tzICYmIHRoaXMub3B0aW9ucy5zaG93VGlja3NWYWx1ZXM7XG5cbiAgICBpZiAodGhpcy5zbGlkZXJFbGVtZW50VmVydGljYWxDbGFzcyAhPT0gdGhpcy52aWV3T3B0aW9ucy52ZXJ0aWNhbCkge1xuICAgICAgdGhpcy51cGRhdGVWZXJ0aWNhbFN0YXRlKCk7XG4gICAgICAvLyBUaGUgYWJvdmUgY2hhbmdlIGluIGhvc3QgY29tcG9uZW50IGNsYXNzIHdpbGwgbm90IGJlIGFwcGxpZWQgdW50aWwgdGhlIGVuZCBvZiB0aGlzIGN5Y2xlXG4gICAgICAvLyBIb3dldmVyLCBmdW5jdGlvbnMgY2FsY3VsYXRpbmcgdGhlIHNsaWRlciBwb3NpdGlvbiBleHBlY3QgdGhlIHNsaWRlciB0byBiZSBhbHJlYWR5IHN0eWxlZCBhcyB2ZXJ0aWNhbFxuICAgICAgLy8gU28gYXMgYSB3b3JrYXJvdW5kLCB3ZSBuZWVkIHRvIHJlc2V0IHRoZSBzbGlkZXIgb25jZSBhZ2FpbiB0byBjb21wdXRlIHRoZSBjb3JyZWN0IHZhbHVlc1xuICAgICAgc2V0VGltZW91dCgoKTogdm9pZCA9PiB7IHRoaXMucmVzZXRTbGlkZXIoKTsgfSk7XG4gICAgfVxuXG4gICAgLy8gQ2hhbmdpbmcgYW5pbWF0ZSBjbGFzcyBtYXkgaW50ZXJmZXJlIHdpdGggc2xpZGVyIHJlc2V0L2luaXRpYWxpc2F0aW9uLCBzbyB3ZSBzaG91bGQgc2V0IGl0IHNlcGFyYXRlbHksXG4gICAgLy8gYWZ0ZXIgYWxsIGlzIHByb3Blcmx5IHNldCB1cFxuICAgIGlmICh0aGlzLnNsaWRlckVsZW1lbnRBbmltYXRlQ2xhc3MgIT09IHRoaXMudmlld09wdGlvbnMuYW5pbWF0ZSkge1xuICAgICAgc2V0VGltZW91dCgoKTogdm9pZCA9PiB7IHRoaXMuc2xpZGVyRWxlbWVudEFuaW1hdGVDbGFzcyA9IHRoaXMudmlld09wdGlvbnMuYW5pbWF0ZTsgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gTWFuYWdlIHRoZSBldmVudHMgYmluZGluZ3MgYmFzZWQgb24gcmVhZE9ubHkgYW5kIGRpc2FibGVkIG9wdGlvbnNcbiAgcHJpdmF0ZSBtYW5hZ2VFdmVudHNCaW5kaW5ncygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52aWV3T3B0aW9ucy5kaXNhYmxlZCB8fCB0aGlzLnZpZXdPcHRpb25zLnJlYWRPbmx5KSB7XG4gICAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG4gIH1cblxuICAvLyBTZXQgdGhlIGRpc2FibGVkIHN0YXRlIGJhc2VkIG9uIGRpc2FibGVkIG9wdGlvblxuICBwcml2YXRlIHVwZGF0ZURpc2FibGVkU3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5zbGlkZXJFbGVtZW50RGlzYWJsZWRBdHRyID0gdGhpcy52aWV3T3B0aW9ucy5kaXNhYmxlZCA/ICdkaXNhYmxlZCcgOiBudWxsO1xuICB9XG5cbiAgLy8gU2V0IHZlcnRpY2FsIHN0YXRlIGJhc2VkIG9uIHZlcnRpY2FsIG9wdGlvblxuICBwcml2YXRlIHVwZGF0ZVZlcnRpY2FsU3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5zbGlkZXJFbGVtZW50VmVydGljYWxDbGFzcyA9IHRoaXMudmlld09wdGlvbnMudmVydGljYWw7XG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIHRoaXMuZ2V0QWxsU2xpZGVyRWxlbWVudHMoKSkge1xuICAgICAgLy8gVGhpcyBpcyBhbHNvIGNhbGxlZCBiZWZvcmUgbmdBZnRlckluaXQsIHNvIG5lZWQgdG8gY2hlY2sgdGhhdCB2aWV3IGNoaWxkIGJpbmRpbmdzIHdvcmtcbiAgICAgIGlmICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQoZWxlbWVudCkpIHtcbiAgICAgICAgZWxlbWVudC5zZXRWZXJ0aWNhbCh0aGlzLnZpZXdPcHRpb25zLnZlcnRpY2FsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVNjYWxlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiB0aGlzLmdldEFsbFNsaWRlckVsZW1lbnRzKCkpIHtcbiAgICAgIGVsZW1lbnQuc2V0U2NhbGUodGhpcy52aWV3T3B0aW9ucy5zY2FsZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRBbGxTbGlkZXJFbGVtZW50cygpOiBTbGlkZXJFbGVtZW50RGlyZWN0aXZlW10ge1xuICAgIHJldHVybiBbdGhpcy5sZWZ0T3V0ZXJTZWxlY3Rpb25CYXJFbGVtZW50LFxuICAgICAgdGhpcy5yaWdodE91dGVyU2VsZWN0aW9uQmFyRWxlbWVudCxcbiAgICAgIHRoaXMuZnVsbEJhckVsZW1lbnQsXG4gICAgICB0aGlzLnNlbGVjdGlvbkJhckVsZW1lbnQsXG4gICAgICB0aGlzLm1pbkhhbmRsZUVsZW1lbnQsXG4gICAgICB0aGlzLm1heEhhbmRsZUVsZW1lbnQsXG4gICAgICB0aGlzLmZsb29yTGFiZWxFbGVtZW50LFxuICAgICAgdGhpcy5jZWlsTGFiZWxFbGVtZW50LFxuICAgICAgdGhpcy5taW5IYW5kbGVMYWJlbEVsZW1lbnQsXG4gICAgICB0aGlzLm1heEhhbmRsZUxhYmVsRWxlbWVudCxcbiAgICAgIHRoaXMuY29tYmluZWRMYWJlbEVsZW1lbnQsXG4gICAgICB0aGlzLnRpY2tzRWxlbWVudFxuICAgIF07XG4gIH1cblxuICAvLyBJbml0aWFsaXplIHNsaWRlciBoYW5kbGVzIHBvc2l0aW9ucyBhbmQgbGFiZWxzXG4gIC8vIFJ1biBvbmx5IG9uY2UgZHVyaW5nIGluaXRpYWxpemF0aW9uIGFuZCBldmVyeSB0aW1lIHZpZXcgcG9ydCBjaGFuZ2VzIHNpemVcbiAgcHJpdmF0ZSBpbml0SGFuZGxlcygpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUxvd0hhbmRsZSh0aGlzLnZhbHVlVG9Qb3NpdGlvbih0aGlzLnZpZXdMb3dWYWx1ZSkpO1xuXG4gICAgLypcbiAgIHRoZSBvcmRlciBoZXJlIGlzIGltcG9ydGFudCBzaW5jZSB0aGUgc2VsZWN0aW9uIGJhciBzaG91bGQgYmVcbiAgIHVwZGF0ZWQgYWZ0ZXIgdGhlIGhpZ2ggaGFuZGxlIGJ1dCBiZWZvcmUgdGhlIGNvbWJpbmVkIGxhYmVsXG4gICAqL1xuICAgIGlmICh0aGlzLnJhbmdlKSB7XG4gICAgICB0aGlzLnVwZGF0ZUhpZ2hIYW5kbGUodGhpcy52YWx1ZVRvUG9zaXRpb24odGhpcy52aWV3SGlnaFZhbHVlKSk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVTZWxlY3Rpb25CYXIoKTtcblxuICAgIGlmICh0aGlzLnJhbmdlKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNvbWJpbmVkTGFiZWwoKTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVRpY2tzU2NhbGUoKTtcbiAgfVxuXG4gIC8vIEFkZHMgYWNjZXNzaWJpbGl0eSBhdHRyaWJ1dGVzLCBydW4gb25seSBvbmNlIGR1cmluZyBpbml0aWFsaXphdGlvblxuICBwcml2YXRlIGFkZEFjY2Vzc2liaWxpdHkoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVBcmlhQXR0cmlidXRlcygpO1xuXG4gICAgdGhpcy5taW5IYW5kbGVFbGVtZW50LnJvbGUgPSAnc2xpZGVyJztcblxuICAgIGlmICggdGhpcy52aWV3T3B0aW9ucy5rZXlib2FyZFN1cHBvcnQgJiZcbiAgICAgICEodGhpcy52aWV3T3B0aW9ucy5yZWFkT25seSB8fCB0aGlzLnZpZXdPcHRpb25zLmRpc2FibGVkKSApIHtcbiAgICAgIHRoaXMubWluSGFuZGxlRWxlbWVudC50YWJpbmRleCA9ICcwJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5taW5IYW5kbGVFbGVtZW50LnRhYmluZGV4ID0gJyc7XG4gICAgfVxuXG4gICAgdGhpcy5taW5IYW5kbGVFbGVtZW50LmFyaWFPcmllbnRhdGlvbiA9IHRoaXMudmlld09wdGlvbnMudmVydGljYWwgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuXG4gICAgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZpZXdPcHRpb25zLmFyaWFMYWJlbCkpIHtcbiAgICAgIHRoaXMubWluSGFuZGxlRWxlbWVudC5hcmlhTGFiZWwgPSB0aGlzLnZpZXdPcHRpb25zLmFyaWFMYWJlbDtcbiAgICB9IGVsc2UgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZpZXdPcHRpb25zLmFyaWFMYWJlbGxlZEJ5KSkge1xuICAgICAgdGhpcy5taW5IYW5kbGVFbGVtZW50LmFyaWFMYWJlbGxlZEJ5ID0gdGhpcy52aWV3T3B0aW9ucy5hcmlhTGFiZWxsZWRCeTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yYW5nZSkge1xuICAgICAgdGhpcy5tYXhIYW5kbGVFbGVtZW50LnJvbGUgPSAnc2xpZGVyJztcblxuICAgICAgaWYgKHRoaXMudmlld09wdGlvbnMua2V5Ym9hcmRTdXBwb3J0ICYmXG4gICAgICAgICEodGhpcy52aWV3T3B0aW9ucy5yZWFkT25seSB8fCB0aGlzLnZpZXdPcHRpb25zLmRpc2FibGVkKSkge1xuICAgICAgICB0aGlzLm1heEhhbmRsZUVsZW1lbnQudGFiaW5kZXggPSAnMCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1heEhhbmRsZUVsZW1lbnQudGFiaW5kZXggPSAnJztcbiAgICAgIH1cblxuICAgICAgdGhpcy5tYXhIYW5kbGVFbGVtZW50LmFyaWFPcmllbnRhdGlvbiA9IHRoaXMudmlld09wdGlvbnMudmVydGljYWwgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuXG4gICAgICBpZiAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudmlld09wdGlvbnMuYXJpYUxhYmVsSGlnaCkpIHtcbiAgICAgICAgdGhpcy5tYXhIYW5kbGVFbGVtZW50LmFyaWFMYWJlbCA9IHRoaXMudmlld09wdGlvbnMuYXJpYUxhYmVsSGlnaDtcbiAgICAgIH0gZWxzZSBpZiAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudmlld09wdGlvbnMuYXJpYUxhYmVsbGVkQnlIaWdoKSkge1xuICAgICAgICB0aGlzLm1heEhhbmRsZUVsZW1lbnQuYXJpYUxhYmVsbGVkQnkgPSB0aGlzLnZpZXdPcHRpb25zLmFyaWFMYWJlbGxlZEJ5SGlnaDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBVcGRhdGVzIGFyaWEgYXR0cmlidXRlcyBhY2NvcmRpbmcgdG8gY3VycmVudCB2YWx1ZXNcbiAgcHJpdmF0ZSB1cGRhdGVBcmlhQXR0cmlidXRlcygpOiB2b2lkIHtcbiAgICB0aGlzLm1pbkhhbmRsZUVsZW1lbnQuYXJpYVZhbHVlTm93ID0gKCt0aGlzLnZhbHVlKS50b1N0cmluZygpO1xuICAgIHRoaXMubWluSGFuZGxlRWxlbWVudC5hcmlhVmFsdWVUZXh0ID0gdGhpcy52aWV3T3B0aW9ucy50cmFuc2xhdGUoK3RoaXMudmFsdWUsIExhYmVsVHlwZS5Mb3cpO1xuICAgIHRoaXMubWluSGFuZGxlRWxlbWVudC5hcmlhVmFsdWVNaW4gPSB0aGlzLnZpZXdPcHRpb25zLmZsb29yLnRvU3RyaW5nKCk7XG4gICAgdGhpcy5taW5IYW5kbGVFbGVtZW50LmFyaWFWYWx1ZU1heCA9IHRoaXMudmlld09wdGlvbnMuY2VpbC50b1N0cmluZygpO1xuXG4gICAgaWYgKHRoaXMucmFuZ2UpIHtcbiAgICAgIHRoaXMubWF4SGFuZGxlRWxlbWVudC5hcmlhVmFsdWVOb3cgPSAoK3RoaXMuaGlnaFZhbHVlKS50b1N0cmluZygpO1xuICAgICAgdGhpcy5tYXhIYW5kbGVFbGVtZW50LmFyaWFWYWx1ZVRleHQgPSB0aGlzLnZpZXdPcHRpb25zLnRyYW5zbGF0ZSgrdGhpcy5oaWdoVmFsdWUsIExhYmVsVHlwZS5IaWdoKTtcbiAgICAgIHRoaXMubWF4SGFuZGxlRWxlbWVudC5hcmlhVmFsdWVNaW4gPSB0aGlzLnZpZXdPcHRpb25zLmZsb29yLnRvU3RyaW5nKCk7XG4gICAgICB0aGlzLm1heEhhbmRsZUVsZW1lbnQuYXJpYVZhbHVlTWF4ID0gdGhpcy52aWV3T3B0aW9ucy5jZWlsLnRvU3RyaW5nKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gQ2FsY3VsYXRlIGRpbWVuc2lvbnMgdGhhdCBhcmUgZGVwZW5kZW50IG9uIHZpZXcgcG9ydCBzaXplXG4gIC8vIFJ1biBvbmNlIGR1cmluZyBpbml0aWFsaXphdGlvbiBhbmQgZXZlcnkgdGltZSB2aWV3IHBvcnQgY2hhbmdlcyBzaXplLlxuICBwcml2YXRlIGNhbGN1bGF0ZVZpZXdEaW1lbnNpb25zKCk6IHZvaWQge1xuICAgIGlmICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy52aWV3T3B0aW9ucy5oYW5kbGVEaW1lbnNpb24pKSB7XG4gICAgICB0aGlzLm1pbkhhbmRsZUVsZW1lbnQuc2V0RGltZW5zaW9uKHRoaXMudmlld09wdGlvbnMuaGFuZGxlRGltZW5zaW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5taW5IYW5kbGVFbGVtZW50LmNhbGN1bGF0ZURpbWVuc2lvbigpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVdpZHRoOiBudW1iZXIgPSB0aGlzLm1pbkhhbmRsZUVsZW1lbnQuZGltZW5zaW9uO1xuXG4gICAgdGhpcy5oYW5kbGVIYWxmRGltZW5zaW9uID0gaGFuZGxlV2lkdGggLyAyO1xuXG4gICAgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZpZXdPcHRpb25zLmJhckRpbWVuc2lvbikpIHtcbiAgICAgIHRoaXMuZnVsbEJhckVsZW1lbnQuc2V0RGltZW5zaW9uKHRoaXMudmlld09wdGlvbnMuYmFyRGltZW5zaW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mdWxsQmFyRWxlbWVudC5jYWxjdWxhdGVEaW1lbnNpb24oKTtcbiAgICB9XG5cbiAgICB0aGlzLm1heEhhbmRsZVBvc2l0aW9uID0gdGhpcy5mdWxsQmFyRWxlbWVudC5kaW1lbnNpb24gLSBoYW5kbGVXaWR0aDtcblxuICAgIGlmICh0aGlzLmluaXRIYXNSdW4pIHtcbiAgICAgIHRoaXMudXBkYXRlRmxvb3JMYWJlbCgpO1xuICAgICAgdGhpcy51cGRhdGVDZWlsTGFiZWwoKTtcbiAgICAgIHRoaXMuaW5pdEhhbmRsZXMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZVZpZXdEaW1lbnNpb25zQW5kRGV0ZWN0Q2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmNhbGN1bGF0ZVZpZXdEaW1lbnNpb25zKCk7XG4gICAgaWYgKCF0aGlzLmlzUmVmRGVzdHJveWVkKCkpIHtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJZiB0aGUgc2xpZGVyIHJlZmVyZW5jZSBpcyBhbHJlYWR5IGRlc3Ryb3llZFxuICAgKiBAcmV0dXJucyBib29sZWFuIC0gdHJ1ZSBpZiByZWYgaXMgZGVzdHJveWVkXG4gICAqL1xuICBwcml2YXRlIGlzUmVmRGVzdHJveWVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZURldGVjdGlvblJlZlsnZGVzdHJveWVkJ107XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIHRpY2tzIHBvc2l0aW9uXG4gIHByaXZhdGUgdXBkYXRlVGlja3NTY2FsZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMudmlld09wdGlvbnMuc2hvd1RpY2tzKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5zbGlkZXJFbGVtZW50V2l0aExlZ2VuZENsYXNzID0gZmFsc2U7IH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRpY2tzQXJyYXk6IG51bWJlcltdID0gIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudmlld09wdGlvbnMudGlja3NBcnJheSlcbiAgICAgID8gdGhpcy52aWV3T3B0aW9ucy50aWNrc0FycmF5XG4gICAgICA6IHRoaXMuZ2V0VGlja3NBcnJheSgpO1xuICAgIGNvbnN0IHRyYW5zbGF0ZTogc3RyaW5nID0gdGhpcy52aWV3T3B0aW9ucy52ZXJ0aWNhbCA/ICd0cmFuc2xhdGVZJyA6ICd0cmFuc2xhdGVYJztcblxuICAgIGlmICh0aGlzLnZpZXdPcHRpb25zLnJpZ2h0VG9MZWZ0KSB7XG4gICAgICB0aWNrc0FycmF5LnJldmVyc2UoKTtcbiAgICB9XG5cbiAgICBjb25zdCB0aWNrVmFsdWVTdGVwOiBudW1iZXIgPSAhVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy52aWV3T3B0aW9ucy50aWNrVmFsdWVTdGVwKSA/IHRoaXMudmlld09wdGlvbnMudGlja1ZhbHVlU3RlcCA6XG4gICAgICAgICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy52aWV3T3B0aW9ucy50aWNrU3RlcCkgPyB0aGlzLnZpZXdPcHRpb25zLnRpY2tTdGVwIDogdGhpcy52aWV3T3B0aW9ucy5zdGVwKTtcblxuICAgIGxldCBoYXNBdExlYXN0T25lTGVnZW5kOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdCBuZXdUaWNrczogVGlja1tdID0gdGlja3NBcnJheS5tYXAoKHZhbHVlOiBudW1iZXIpOiBUaWNrID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbjogbnVtYmVyID0gdGhpcy52YWx1ZVRvUG9zaXRpb24odmFsdWUpO1xuXG4gICAgICBpZiAodGhpcy52aWV3T3B0aW9ucy52ZXJ0aWNhbCkge1xuICAgICAgICBwb3NpdGlvbiA9IHRoaXMubWF4SGFuZGxlUG9zaXRpb24gLSBwb3NpdGlvbjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdHJhbnNsYXRpb246IHN0cmluZyA9IHRyYW5zbGF0ZSArICcoJyArIE1hdGgucm91bmQocG9zaXRpb24pICsgJ3B4KSc7XG4gICAgICBjb25zdCB0aWNrOiBUaWNrID0gbmV3IFRpY2soKTtcbiAgICAgIHRpY2suc2VsZWN0ZWQgPSB0aGlzLmlzVGlja1NlbGVjdGVkKHZhbHVlKTtcbiAgICAgIHRpY2suc3R5bGUgPSB7XG4gICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6IHRyYW5zbGF0aW9uLFxuICAgICAgICAnLW1vei10cmFuc2Zvcm0nOiB0cmFuc2xhdGlvbixcbiAgICAgICAgJy1vLXRyYW5zZm9ybSc6IHRyYW5zbGF0aW9uLFxuICAgICAgICAnLW1zLXRyYW5zZm9ybSc6IHRyYW5zbGF0aW9uLFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0aW9uLFxuICAgICAgfTtcbiAgICAgIGlmICh0aWNrLnNlbGVjdGVkICYmICFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZpZXdPcHRpb25zLmdldFNlbGVjdGlvbkJhckNvbG9yKSkge1xuICAgICAgICB0aWNrLnN0eWxlWydiYWNrZ3JvdW5kLWNvbG9yJ10gPSB0aGlzLmdldFNlbGVjdGlvbkJhckNvbG9yKCk7XG4gICAgICB9XG4gICAgICBpZiAoIXRpY2suc2VsZWN0ZWQgJiYgIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudmlld09wdGlvbnMuZ2V0VGlja0NvbG9yKSkge1xuICAgICAgICB0aWNrLnN0eWxlWydiYWNrZ3JvdW5kLWNvbG9yJ10gPSB0aGlzLmdldFRpY2tDb2xvcih2YWx1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudmlld09wdGlvbnMudGlja3NUb29sdGlwKSkge1xuICAgICAgICB0aWNrLnRvb2x0aXAgPSB0aGlzLnZpZXdPcHRpb25zLnRpY2tzVG9vbHRpcCh2YWx1ZSk7XG4gICAgICAgIHRpY2sudG9vbHRpcFBsYWNlbWVudCA9IHRoaXMudmlld09wdGlvbnMudmVydGljYWwgPyAncmlnaHQnIDogJ3RvcCc7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy52aWV3T3B0aW9ucy5zaG93VGlja3NWYWx1ZXMgJiYgIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRpY2tWYWx1ZVN0ZXApICYmXG4gICAgICAgICAgTWF0aEhlbHBlci5pc01vZHVsb1dpdGhpblByZWNpc2lvbkxpbWl0KHZhbHVlLCB0aWNrVmFsdWVTdGVwLCB0aGlzLnZpZXdPcHRpb25zLnByZWNpc2lvbkxpbWl0KSkge1xuICAgICAgICB0aWNrLnZhbHVlID0gdGhpcy5nZXREaXNwbGF5VmFsdWUodmFsdWUsIExhYmVsVHlwZS5UaWNrVmFsdWUpO1xuICAgICAgICBpZiAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudmlld09wdGlvbnMudGlja3NWYWx1ZXNUb29sdGlwKSkge1xuICAgICAgICAgIHRpY2sudmFsdWVUb29sdGlwID0gdGhpcy52aWV3T3B0aW9ucy50aWNrc1ZhbHVlc1Rvb2x0aXAodmFsdWUpO1xuICAgICAgICAgIHRpY2sudmFsdWVUb29sdGlwUGxhY2VtZW50ID0gdGhpcy52aWV3T3B0aW9ucy52ZXJ0aWNhbFxuICAgICAgICAgICAgPyAncmlnaHQnXG4gICAgICAgICAgICA6ICd0b3AnO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBsZWdlbmQ6IHN0cmluZyA9IG51bGw7XG4gICAgICBpZiAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudmlld09wdGlvbnMuc3RlcHNBcnJheSkpIHtcbiAgICAgICAgY29uc3Qgc3RlcDogQ3VzdG9tU3RlcERlZmluaXRpb24gPSB0aGlzLnZpZXdPcHRpb25zLnN0ZXBzQXJyYXlbdmFsdWVdO1xuICAgICAgICBpZiAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHN0ZXApKSB7XG4gICAgICAgICAgbGVnZW5kID0gc3RlcC5sZWdlbmQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudmlld09wdGlvbnMuZ2V0TGVnZW5kKSkge1xuICAgICAgICBsZWdlbmQgPSB0aGlzLnZpZXdPcHRpb25zLmdldExlZ2VuZCh2YWx1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKGxlZ2VuZCkpIHtcbiAgICAgICAgdGljay5sZWdlbmQgPSBsZWdlbmQ7XG4gICAgICAgIGhhc0F0TGVhc3RPbmVMZWdlbmQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGljaztcbiAgICB9KTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLnNsaWRlckVsZW1lbnRXaXRoTGVnZW5kQ2xhc3MgPSBoYXNBdExlYXN0T25lTGVnZW5kOyB9KTtcblxuICAgIC8vIFdlIHNob3VsZCBhdm9pZCByZS1jcmVhdGluZyB0aGUgdGlja3MgYXJyYXkgaWYgcG9zc2libGVcbiAgICAvLyBUaGlzIGJvdGggaW1wcm92ZXMgcGVyZm9ybWFuY2UgYW5kIG1ha2VzIENTUyBhbmltYXRpb25zIHdvcmsgY29ycmVjdGx5XG4gICAgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnRpY2tzKSAmJiB0aGlzLnRpY2tzLmxlbmd0aCA9PT0gbmV3VGlja3MubGVuZ3RoKSB7XG4gICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpICA8IG5ld1RpY2tzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy50aWNrc1tpXSwgbmV3VGlja3NbaV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRpY2tzID0gbmV3VGlja3M7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmlzUmVmRGVzdHJveWVkKCkpIHtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFRpY2tzQXJyYXkoKTogbnVtYmVyW10ge1xuICAgIGNvbnN0IHN0ZXA6IG51bWJlciA9ICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy52aWV3T3B0aW9ucy50aWNrU3RlcCkpID8gdGhpcy52aWV3T3B0aW9ucy50aWNrU3RlcCA6IHRoaXMudmlld09wdGlvbnMuc3RlcDtcbiAgICBjb25zdCB0aWNrc0FycmF5OiBudW1iZXJbXSA9IFtdO1xuXG4gICAgY29uc3QgbnVtYmVyT2ZWYWx1ZXM6IG51bWJlciA9IDEgKyBNYXRoLmZsb29yKE1hdGhIZWxwZXIucm91bmRUb1ByZWNpc2lvbkxpbWl0KFxuICAgICAgTWF0aC5hYnModGhpcy52aWV3T3B0aW9ucy5jZWlsIC0gdGhpcy52aWV3T3B0aW9ucy5mbG9vcikgLyBzdGVwLFxuICAgICAgdGhpcy52aWV3T3B0aW9ucy5wcmVjaXNpb25MaW1pdFxuICAgICkpO1xuICAgIGZvciAobGV0IGluZGV4OiBudW1iZXIgPSAwOyBpbmRleCA8IG51bWJlck9mVmFsdWVzOyArK2luZGV4KSB7XG4gICAgICB0aWNrc0FycmF5LnB1c2goTWF0aEhlbHBlci5yb3VuZFRvUHJlY2lzaW9uTGltaXQodGhpcy52aWV3T3B0aW9ucy5mbG9vciArIHN0ZXAgKiBpbmRleCwgdGhpcy52aWV3T3B0aW9ucy5wcmVjaXNpb25MaW1pdCkpO1xuICAgIH1cblxuICAgIHJldHVybiB0aWNrc0FycmF5O1xuICB9XG5cbiAgcHJpdmF0ZSBpc1RpY2tTZWxlY3RlZCh2YWx1ZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLnJhbmdlKSB7XG4gICAgICBpZiAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudmlld09wdGlvbnMuc2hvd1NlbGVjdGlvbkJhckZyb21WYWx1ZSkpIHtcbiAgICAgICAgY29uc3QgY2VudGVyOiBudW1iZXIgPSB0aGlzLnZpZXdPcHRpb25zLnNob3dTZWxlY3Rpb25CYXJGcm9tVmFsdWU7XG4gICAgICAgIGlmICh0aGlzLnZpZXdMb3dWYWx1ZSA+IGNlbnRlciAmJlxuICAgICAgICAgICAgdmFsdWUgPj0gY2VudGVyICYmXG4gICAgICAgICAgICB2YWx1ZSA8PSB0aGlzLnZpZXdMb3dWYWx1ZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudmlld0xvd1ZhbHVlIDwgY2VudGVyICYmXG4gICAgICAgICAgICAgICAgICAgdmFsdWUgPD0gY2VudGVyICYmXG4gICAgICAgICAgICAgICAgICAgdmFsdWUgPj0gdGhpcy52aWV3TG93VmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnZpZXdPcHRpb25zLnNob3dTZWxlY3Rpb25CYXJFbmQpIHtcbiAgICAgICAgaWYgKHZhbHVlID49IHRoaXMudmlld0xvd1ZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy52aWV3T3B0aW9ucy5zaG93U2VsZWN0aW9uQmFyICYmIHZhbHVlIDw9IHRoaXMudmlld0xvd1ZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnJhbmdlICYmIHZhbHVlID49IHRoaXMudmlld0xvd1ZhbHVlICYmIHZhbHVlIDw9IHRoaXMudmlld0hpZ2hWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gVXBkYXRlIHBvc2l0aW9uIG9mIHRoZSBmbG9vciBsYWJlbFxuICBwcml2YXRlIHVwZGF0ZUZsb29yTGFiZWwoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmZsb29yTGFiZWxFbGVtZW50LmFsd2F5c0hpZGUpIHtcbiAgICAgIHRoaXMuZmxvb3JMYWJlbEVsZW1lbnQuc2V0VmFsdWUodGhpcy5nZXREaXNwbGF5VmFsdWUodGhpcy52aWV3T3B0aW9ucy5mbG9vciwgTGFiZWxUeXBlLkZsb29yKSk7XG4gICAgICB0aGlzLmZsb29yTGFiZWxFbGVtZW50LmNhbGN1bGF0ZURpbWVuc2lvbigpO1xuICAgICAgY29uc3QgcG9zaXRpb246IG51bWJlciA9IHRoaXMudmlld09wdGlvbnMucmlnaHRUb0xlZnRcbiAgICAgICAgPyB0aGlzLmZ1bGxCYXJFbGVtZW50LmRpbWVuc2lvbiAtIHRoaXMuZmxvb3JMYWJlbEVsZW1lbnQuZGltZW5zaW9uXG4gICAgICAgIDogMDtcbiAgICAgIHRoaXMuZmxvb3JMYWJlbEVsZW1lbnQuc2V0UG9zaXRpb24ocG9zaXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIC8vIFVwZGF0ZSBwb3NpdGlvbiBvZiB0aGUgY2VpbGluZyBsYWJlbFxuICBwcml2YXRlIHVwZGF0ZUNlaWxMYWJlbCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuY2VpbExhYmVsRWxlbWVudC5hbHdheXNIaWRlKSB7XG4gICAgICB0aGlzLmNlaWxMYWJlbEVsZW1lbnQuc2V0VmFsdWUodGhpcy5nZXREaXNwbGF5VmFsdWUodGhpcy52aWV3T3B0aW9ucy5jZWlsLCBMYWJlbFR5cGUuQ2VpbCkpO1xuICAgICAgdGhpcy5jZWlsTGFiZWxFbGVtZW50LmNhbGN1bGF0ZURpbWVuc2lvbigpO1xuICAgICAgY29uc3QgcG9zaXRpb246IG51bWJlciA9IHRoaXMudmlld09wdGlvbnMucmlnaHRUb0xlZnRcbiAgICAgICAgPyAwXG4gICAgICAgIDogdGhpcy5mdWxsQmFyRWxlbWVudC5kaW1lbnNpb24gLSB0aGlzLmNlaWxMYWJlbEVsZW1lbnQuZGltZW5zaW9uO1xuICAgICAgdGhpcy5jZWlsTGFiZWxFbGVtZW50LnNldFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgICB9XG4gIH1cblxuICAvLyBVcGRhdGUgc2xpZGVyIGhhbmRsZXMgYW5kIGxhYmVsIHBvc2l0aW9uc1xuICBwcml2YXRlIHVwZGF0ZUhhbmRsZXMod2hpY2g6IFBvaW50ZXJUeXBlLCBuZXdQb3M6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh3aGljaCA9PT0gUG9pbnRlclR5cGUuTWluKSB7XG4gICAgICB0aGlzLnVwZGF0ZUxvd0hhbmRsZShuZXdQb3MpO1xuICAgIH0gZWxzZSBpZiAod2hpY2ggPT09IFBvaW50ZXJUeXBlLk1heCkge1xuICAgICAgdGhpcy51cGRhdGVIaWdoSGFuZGxlKG5ld1Bvcyk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVTZWxlY3Rpb25CYXIoKTtcbiAgICB0aGlzLnVwZGF0ZVRpY2tzU2NhbGUoKTtcbiAgICBpZiAodGhpcy5yYW5nZSkge1xuICAgICAgdGhpcy51cGRhdGVDb21iaW5lZExhYmVsKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHdvcmsgb3V0IHRoZSBwb3NpdGlvbiBmb3IgaGFuZGxlIGxhYmVscyBkZXBlbmRpbmcgb24gUlRMIG9yIG5vdFxuICBwcml2YXRlIGdldEhhbmRsZUxhYmVsUG9zKGxhYmVsVHlwZTogUG9pbnRlclR5cGUsIG5ld1BvczogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBsYWJlbERpbWVuc2lvbjogbnVtYmVyID0gKGxhYmVsVHlwZSA9PT0gUG9pbnRlclR5cGUuTWluKVxuICAgICAgPyB0aGlzLm1pbkhhbmRsZUxhYmVsRWxlbWVudC5kaW1lbnNpb25cbiAgICAgIDogdGhpcy5tYXhIYW5kbGVMYWJlbEVsZW1lbnQuZGltZW5zaW9uO1xuICAgIGNvbnN0IG5lYXJIYW5kbGVQb3M6IG51bWJlciA9IG5ld1BvcyAtIGxhYmVsRGltZW5zaW9uIC8gMiArIHRoaXMuaGFuZGxlSGFsZkRpbWVuc2lvbjtcbiAgICBjb25zdCBlbmRPZkJhclBvczogbnVtYmVyID0gdGhpcy5mdWxsQmFyRWxlbWVudC5kaW1lbnNpb24gLSBsYWJlbERpbWVuc2lvbjtcblxuICAgIGlmICghdGhpcy52aWV3T3B0aW9ucy5ib3VuZFBvaW50ZXJMYWJlbHMpIHtcbiAgICAgIHJldHVybiBuZWFySGFuZGxlUG9zO1xuICAgIH1cblxuICAgIGlmICgodGhpcy52aWV3T3B0aW9ucy5yaWdodFRvTGVmdCAmJiBsYWJlbFR5cGUgPT09IFBvaW50ZXJUeXBlLk1pbikgfHxcbiAgICAgICAoIXRoaXMudmlld09wdGlvbnMucmlnaHRUb0xlZnQgJiYgbGFiZWxUeXBlID09PSBQb2ludGVyVHlwZS5NYXgpKSB7XG4gICAgICByZXR1cm4gTWF0aC5taW4obmVhckhhbmRsZVBvcywgZW5kT2ZCYXJQb3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobmVhckhhbmRsZVBvcywgMCksIGVuZE9mQmFyUG9zKTtcbiAgICB9XG4gIH1cblxuICAvLyBVcGRhdGUgbG93IHNsaWRlciBoYW5kbGUgcG9zaXRpb24gYW5kIGxhYmVsXG4gIHByaXZhdGUgdXBkYXRlTG93SGFuZGxlKG5ld1BvczogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5taW5IYW5kbGVFbGVtZW50LnNldFBvc2l0aW9uKG5ld1Bvcyk7XG4gICAgdGhpcy5taW5IYW5kbGVMYWJlbEVsZW1lbnQuc2V0VmFsdWUodGhpcy5nZXREaXNwbGF5VmFsdWUodGhpcy52aWV3TG93VmFsdWUsIExhYmVsVHlwZS5Mb3cpKTtcbiAgICB0aGlzLm1pbkhhbmRsZUxhYmVsRWxlbWVudC5zZXRQb3NpdGlvbih0aGlzLmdldEhhbmRsZUxhYmVsUG9zKFBvaW50ZXJUeXBlLk1pbiwgbmV3UG9zKSk7XG5cbiAgICBpZiAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudmlld09wdGlvbnMuZ2V0UG9pbnRlckNvbG9yKSkge1xuICAgICAgdGhpcy5taW5Qb2ludGVyU3R5bGUgPSB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5nZXRQb2ludGVyQ29sb3IoUG9pbnRlclR5cGUuTWluKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudmlld09wdGlvbnMuYXV0b0hpZGVMaW1pdExhYmVscykge1xuICAgICAgdGhpcy51cGRhdGVGbG9vckFuZENlaWxMYWJlbHNWaXNpYmlsaXR5KCk7XG4gICAgfVxuICB9XG5cbiAgLy8gVXBkYXRlIGhpZ2ggc2xpZGVyIGhhbmRsZSBwb3NpdGlvbiBhbmQgbGFiZWxcbiAgcHJpdmF0ZSB1cGRhdGVIaWdoSGFuZGxlKG5ld1BvczogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5tYXhIYW5kbGVFbGVtZW50LnNldFBvc2l0aW9uKG5ld1Bvcyk7XG4gICAgdGhpcy5tYXhIYW5kbGVMYWJlbEVsZW1lbnQuc2V0VmFsdWUodGhpcy5nZXREaXNwbGF5VmFsdWUodGhpcy52aWV3SGlnaFZhbHVlLCBMYWJlbFR5cGUuSGlnaCkpO1xuICAgIHRoaXMubWF4SGFuZGxlTGFiZWxFbGVtZW50LnNldFBvc2l0aW9uKHRoaXMuZ2V0SGFuZGxlTGFiZWxQb3MoUG9pbnRlclR5cGUuTWF4LCBuZXdQb3MpKTtcblxuICAgIGlmICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy52aWV3T3B0aW9ucy5nZXRQb2ludGVyQ29sb3IpKSB7XG4gICAgICB0aGlzLm1heFBvaW50ZXJTdHlsZSA9IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmdldFBvaW50ZXJDb2xvcihQb2ludGVyVHlwZS5NYXgpLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHRoaXMudmlld09wdGlvbnMuYXV0b0hpZGVMaW1pdExhYmVscykge1xuICAgICAgdGhpcy51cGRhdGVGbG9vckFuZENlaWxMYWJlbHNWaXNpYmlsaXR5KCk7XG4gICAgfVxuICB9XG5cbiAgLy8gU2hvdy9oaWRlIGZsb29yL2NlaWxpbmcgbGFiZWxcbiAgcHJpdmF0ZSB1cGRhdGVGbG9vckFuZENlaWxMYWJlbHNWaXNpYmlsaXR5KCk6IHZvaWQge1xuICAgIC8vIFNob3cgYmFzZWQgb25seSBvbiBoaWRlTGltaXRMYWJlbHMgaWYgcG9pbnRlciBsYWJlbHMgYXJlIGhpZGRlblxuICAgIGlmICh0aGlzLnZpZXdPcHRpb25zLmhpZGVQb2ludGVyTGFiZWxzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBmbG9vckxhYmVsSGlkZGVuOiBib29sZWFuID0gZmFsc2U7XG4gICAgbGV0IGNlaWxMYWJlbEhpZGRlbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGNvbnN0IGlzTWluTGFiZWxBdEZsb29yOiBib29sZWFuID0gdGhpcy5pc0xhYmVsQmVsb3dGbG9vckxhYmVsKHRoaXMubWluSGFuZGxlTGFiZWxFbGVtZW50KTtcbiAgICBjb25zdCBpc01pbkxhYmVsQXRDZWlsOiBib29sZWFuID0gdGhpcy5pc0xhYmVsQWJvdmVDZWlsTGFiZWwodGhpcy5taW5IYW5kbGVMYWJlbEVsZW1lbnQpO1xuICAgIGNvbnN0IGlzTWF4TGFiZWxBdENlaWw6IGJvb2xlYW4gPSB0aGlzLmlzTGFiZWxBYm92ZUNlaWxMYWJlbCh0aGlzLm1heEhhbmRsZUxhYmVsRWxlbWVudCk7XG4gICAgY29uc3QgaXNDb21iaW5lZExhYmVsQXRGbG9vcjogYm9vbGVhbiA9IHRoaXMuaXNMYWJlbEJlbG93Rmxvb3JMYWJlbCh0aGlzLmNvbWJpbmVkTGFiZWxFbGVtZW50KTtcbiAgICBjb25zdCBpc0NvbWJpbmVkTGFiZWxBdENlaWw6IGJvb2xlYW4gPSB0aGlzLmlzTGFiZWxBYm92ZUNlaWxMYWJlbCh0aGlzLmNvbWJpbmVkTGFiZWxFbGVtZW50KTtcblxuICAgIGlmIChpc01pbkxhYmVsQXRGbG9vcikge1xuICAgICAgZmxvb3JMYWJlbEhpZGRlbiA9IHRydWU7XG4gICAgICB0aGlzLmZsb29yTGFiZWxFbGVtZW50LmhpZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmxvb3JMYWJlbEhpZGRlbiA9IGZhbHNlO1xuICAgICAgdGhpcy5mbG9vckxhYmVsRWxlbWVudC5zaG93KCk7XG4gICAgfVxuXG4gICAgaWYgKGlzTWluTGFiZWxBdENlaWwpIHtcbiAgICAgIGNlaWxMYWJlbEhpZGRlbiA9IHRydWU7XG4gICAgICB0aGlzLmNlaWxMYWJlbEVsZW1lbnQuaGlkZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjZWlsTGFiZWxIaWRkZW4gPSBmYWxzZTtcbiAgICAgIHRoaXMuY2VpbExhYmVsRWxlbWVudC5zaG93KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucmFuZ2UpIHtcbiAgICAgIGNvbnN0IGhpZGVDZWlsOiBib29sZWFuID0gdGhpcy5jb21iaW5lZExhYmVsRWxlbWVudC5pc1Zpc2libGUoKSA/IGlzQ29tYmluZWRMYWJlbEF0Q2VpbCA6IGlzTWF4TGFiZWxBdENlaWw7XG4gICAgICBjb25zdCBoaWRlRmxvb3I6IGJvb2xlYW4gPSB0aGlzLmNvbWJpbmVkTGFiZWxFbGVtZW50LmlzVmlzaWJsZSgpID8gaXNDb21iaW5lZExhYmVsQXRGbG9vciA6IGlzTWluTGFiZWxBdEZsb29yO1xuXG4gICAgICBpZiAoaGlkZUNlaWwpIHtcbiAgICAgICAgdGhpcy5jZWlsTGFiZWxFbGVtZW50LmhpZGUoKTtcbiAgICAgIH0gZWxzZSBpZiAoIWNlaWxMYWJlbEhpZGRlbikge1xuICAgICAgICB0aGlzLmNlaWxMYWJlbEVsZW1lbnQuc2hvdygpO1xuICAgICAgfVxuXG4gICAgICAvLyBIaWRlIG9yIHNob3cgZmxvb3IgbGFiZWxcbiAgICAgIGlmIChoaWRlRmxvb3IpIHtcbiAgICAgICAgdGhpcy5mbG9vckxhYmVsRWxlbWVudC5oaWRlKCk7XG4gICAgICB9IGVsc2UgaWYgKCFmbG9vckxhYmVsSGlkZGVuKSB7XG4gICAgICAgIHRoaXMuZmxvb3JMYWJlbEVsZW1lbnQuc2hvdygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaXNMYWJlbEJlbG93Rmxvb3JMYWJlbChsYWJlbDogU2xpZGVyTGFiZWxEaXJlY3RpdmUpOiBib29sZWFuIHtcbiAgICBjb25zdCBwb3M6IG51bWJlciA9IGxhYmVsLnBvc2l0aW9uO1xuICAgIGNvbnN0IGRpbTogbnVtYmVyID0gbGFiZWwuZGltZW5zaW9uO1xuICAgIGNvbnN0IGZsb29yUG9zOiBudW1iZXIgPSB0aGlzLmZsb29yTGFiZWxFbGVtZW50LnBvc2l0aW9uO1xuICAgIGNvbnN0IGZsb29yRGltOiBudW1iZXIgPSB0aGlzLmZsb29yTGFiZWxFbGVtZW50LmRpbWVuc2lvbjtcbiAgICByZXR1cm4gdGhpcy52aWV3T3B0aW9ucy5yaWdodFRvTGVmdFxuICAgICAgPyBwb3MgKyBkaW0gPj0gZmxvb3JQb3MgLSAyXG4gICAgICA6IHBvcyA8PSBmbG9vclBvcyArIGZsb29yRGltICsgMjtcbiAgfVxuXG4gIHByaXZhdGUgaXNMYWJlbEFib3ZlQ2VpbExhYmVsKGxhYmVsOiBTbGlkZXJMYWJlbERpcmVjdGl2ZSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHBvczogbnVtYmVyID0gbGFiZWwucG9zaXRpb247XG4gICAgY29uc3QgZGltOiBudW1iZXIgPSBsYWJlbC5kaW1lbnNpb247XG4gICAgY29uc3QgY2VpbFBvczogbnVtYmVyID0gdGhpcy5jZWlsTGFiZWxFbGVtZW50LnBvc2l0aW9uO1xuICAgIGNvbnN0IGNlaWxEaW06IG51bWJlciA9IHRoaXMuY2VpbExhYmVsRWxlbWVudC5kaW1lbnNpb247XG4gICAgcmV0dXJuIHRoaXMudmlld09wdGlvbnMucmlnaHRUb0xlZnRcbiAgICAgID8gcG9zIDw9IGNlaWxQb3MgKyBjZWlsRGltICsgMlxuICAgICAgOiBwb3MgKyBkaW0gPj0gY2VpbFBvcyAtIDI7XG4gIH1cblxuICAvLyBVcGRhdGUgc2xpZGVyIHNlbGVjdGlvbiBiYXIsIGNvbWJpbmVkIGxhYmVsIGFuZCByYW5nZSBsYWJlbFxuICBwcml2YXRlIHVwZGF0ZVNlbGVjdGlvbkJhcigpOiB2b2lkIHtcbiAgICBsZXQgcG9zaXRpb246IG51bWJlciA9IDA7XG4gICAgbGV0IGRpbWVuc2lvbjogbnVtYmVyID0gMDtcbiAgICBjb25zdCBpc1NlbGVjdGlvbkJhckZyb21SaWdodDogYm9vbGVhbiA9IHRoaXMudmlld09wdGlvbnMucmlnaHRUb0xlZnRcbiAgICAgICAgPyAhdGhpcy52aWV3T3B0aW9ucy5zaG93U2VsZWN0aW9uQmFyRW5kXG4gICAgICAgIDogdGhpcy52aWV3T3B0aW9ucy5zaG93U2VsZWN0aW9uQmFyRW5kO1xuICAgIGNvbnN0IHBvc2l0aW9uRm9yUmFuZ2U6IG51bWJlciA9IHRoaXMudmlld09wdGlvbnMucmlnaHRUb0xlZnRcbiAgICAgICAgPyB0aGlzLm1heEhhbmRsZUVsZW1lbnQucG9zaXRpb24gKyB0aGlzLmhhbmRsZUhhbGZEaW1lbnNpb25cbiAgICAgICAgOiB0aGlzLm1pbkhhbmRsZUVsZW1lbnQucG9zaXRpb24gKyB0aGlzLmhhbmRsZUhhbGZEaW1lbnNpb247XG5cbiAgICBpZiAodGhpcy5yYW5nZSkge1xuICAgICAgZGltZW5zaW9uID0gTWF0aC5hYnModGhpcy5tYXhIYW5kbGVFbGVtZW50LnBvc2l0aW9uIC0gdGhpcy5taW5IYW5kbGVFbGVtZW50LnBvc2l0aW9uKTtcbiAgICAgIHBvc2l0aW9uID0gcG9zaXRpb25Gb3JSYW5nZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZpZXdPcHRpb25zLnNob3dTZWxlY3Rpb25CYXJGcm9tVmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IGNlbnRlcjogbnVtYmVyID0gdGhpcy52aWV3T3B0aW9ucy5zaG93U2VsZWN0aW9uQmFyRnJvbVZhbHVlO1xuICAgICAgICBjb25zdCBjZW50ZXJQb3NpdGlvbjogbnVtYmVyID0gdGhpcy52YWx1ZVRvUG9zaXRpb24oY2VudGVyKTtcbiAgICAgICAgY29uc3QgaXNNb2RlbEdyZWF0ZXJUaGFuQ2VudGVyOiBib29sZWFuID0gdGhpcy52aWV3T3B0aW9ucy5yaWdodFRvTGVmdFxuICAgICAgICAgICAgPyB0aGlzLnZpZXdMb3dWYWx1ZSA8PSBjZW50ZXJcbiAgICAgICAgICAgIDogdGhpcy52aWV3TG93VmFsdWUgPiBjZW50ZXI7XG4gICAgICAgIGlmIChpc01vZGVsR3JlYXRlclRoYW5DZW50ZXIpIHtcbiAgICAgICAgICBkaW1lbnNpb24gPSB0aGlzLm1pbkhhbmRsZUVsZW1lbnQucG9zaXRpb24gLSBjZW50ZXJQb3NpdGlvbjtcbiAgICAgICAgICBwb3NpdGlvbiA9IGNlbnRlclBvc2l0aW9uICsgdGhpcy5oYW5kbGVIYWxmRGltZW5zaW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpbWVuc2lvbiA9IGNlbnRlclBvc2l0aW9uIC0gdGhpcy5taW5IYW5kbGVFbGVtZW50LnBvc2l0aW9uO1xuICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5taW5IYW5kbGVFbGVtZW50LnBvc2l0aW9uICsgdGhpcy5oYW5kbGVIYWxmRGltZW5zaW9uO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzU2VsZWN0aW9uQmFyRnJvbVJpZ2h0KSB7XG4gICAgICAgIGRpbWVuc2lvbiA9IE1hdGguY2VpbChNYXRoLmFicyh0aGlzLm1heEhhbmRsZVBvc2l0aW9uIC0gdGhpcy5taW5IYW5kbGVFbGVtZW50LnBvc2l0aW9uKSArIHRoaXMuaGFuZGxlSGFsZkRpbWVuc2lvbik7XG4gICAgICAgIHBvc2l0aW9uID0gTWF0aC5mbG9vcih0aGlzLm1pbkhhbmRsZUVsZW1lbnQucG9zaXRpb24gKyB0aGlzLmhhbmRsZUhhbGZEaW1lbnNpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGltZW5zaW9uID0gdGhpcy5taW5IYW5kbGVFbGVtZW50LnBvc2l0aW9uICsgdGhpcy5oYW5kbGVIYWxmRGltZW5zaW9uO1xuICAgICAgICBwb3NpdGlvbiA9IDA7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0aW9uQmFyRWxlbWVudC5zZXREaW1lbnNpb24oZGltZW5zaW9uKTtcbiAgICB0aGlzLnNlbGVjdGlvbkJhckVsZW1lbnQuc2V0UG9zaXRpb24ocG9zaXRpb24pO1xuICAgIGlmICh0aGlzLnJhbmdlICYmIHRoaXMudmlld09wdGlvbnMuc2hvd091dGVyU2VsZWN0aW9uQmFycykge1xuICAgICAgaWYgKHRoaXMudmlld09wdGlvbnMucmlnaHRUb0xlZnQpIHtcbiAgICAgICAgdGhpcy5yaWdodE91dGVyU2VsZWN0aW9uQmFyRWxlbWVudC5zZXREaW1lbnNpb24ocG9zaXRpb24pO1xuICAgICAgICB0aGlzLnJpZ2h0T3V0ZXJTZWxlY3Rpb25CYXJFbGVtZW50LnNldFBvc2l0aW9uKDApO1xuICAgICAgICB0aGlzLmZ1bGxCYXJFbGVtZW50LmNhbGN1bGF0ZURpbWVuc2lvbigpO1xuICAgICAgICB0aGlzLmxlZnRPdXRlclNlbGVjdGlvbkJhckVsZW1lbnQuc2V0RGltZW5zaW9uKHRoaXMuZnVsbEJhckVsZW1lbnQuZGltZW5zaW9uIC0gKHBvc2l0aW9uICsgZGltZW5zaW9uKSk7XG4gICAgICAgIHRoaXMubGVmdE91dGVyU2VsZWN0aW9uQmFyRWxlbWVudC5zZXRQb3NpdGlvbihwb3NpdGlvbiArIGRpbWVuc2lvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxlZnRPdXRlclNlbGVjdGlvbkJhckVsZW1lbnQuc2V0RGltZW5zaW9uKHBvc2l0aW9uKTtcbiAgICAgICAgdGhpcy5sZWZ0T3V0ZXJTZWxlY3Rpb25CYXJFbGVtZW50LnNldFBvc2l0aW9uKDApO1xuICAgICAgICB0aGlzLmZ1bGxCYXJFbGVtZW50LmNhbGN1bGF0ZURpbWVuc2lvbigpO1xuICAgICAgICB0aGlzLnJpZ2h0T3V0ZXJTZWxlY3Rpb25CYXJFbGVtZW50LnNldERpbWVuc2lvbih0aGlzLmZ1bGxCYXJFbGVtZW50LmRpbWVuc2lvbiAtIChwb3NpdGlvbiArIGRpbWVuc2lvbikpO1xuICAgICAgICB0aGlzLnJpZ2h0T3V0ZXJTZWxlY3Rpb25CYXJFbGVtZW50LnNldFBvc2l0aW9uKHBvc2l0aW9uICsgZGltZW5zaW9uKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZpZXdPcHRpb25zLmdldFNlbGVjdGlvbkJhckNvbG9yKSkge1xuICAgICAgY29uc3QgY29sb3I6IHN0cmluZyA9IHRoaXMuZ2V0U2VsZWN0aW9uQmFyQ29sb3IoKTtcbiAgICAgIHRoaXMuYmFyU3R5bGUgPSB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IsXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudmlld09wdGlvbnMuc2VsZWN0aW9uQmFyR3JhZGllbnQpKSB7XG4gICAgICBjb25zdCBvZmZzZXQ6IG51bWJlciA9ICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy52aWV3T3B0aW9ucy5zaG93U2VsZWN0aW9uQmFyRnJvbVZhbHVlKSlcbiAgICAgICAgICAgID8gdGhpcy52YWx1ZVRvUG9zaXRpb24odGhpcy52aWV3T3B0aW9ucy5zaG93U2VsZWN0aW9uQmFyRnJvbVZhbHVlKVxuICAgICAgICAgICAgOiAwO1xuICAgICAgY29uc3QgcmV2ZXJzZWQ6IGJvb2xlYW4gPSAob2Zmc2V0IC0gcG9zaXRpb24gPiAwICYmICFpc1NlbGVjdGlvbkJhckZyb21SaWdodCkgfHwgKG9mZnNldCAtIHBvc2l0aW9uIDw9IDAgJiYgaXNTZWxlY3Rpb25CYXJGcm9tUmlnaHQpO1xuICAgICAgY29uc3QgZGlyZWN0aW9uOiBzdHJpbmcgPSB0aGlzLnZpZXdPcHRpb25zLnZlcnRpY2FsXG4gICAgICAgICAgPyByZXZlcnNlZCA/ICdib3R0b20nIDogJ3RvcCdcbiAgICAgICAgICA6IHJldmVyc2VkID8gJ2xlZnQnIDogJ3JpZ2h0JztcbiAgICAgIHRoaXMuYmFyU3R5bGUgPSB7XG4gICAgICAgIGJhY2tncm91bmRJbWFnZTpcbiAgICAgICAgICAnbGluZWFyLWdyYWRpZW50KHRvICcgK1xuICAgICAgICAgIGRpcmVjdGlvbiArXG4gICAgICAgICAgJywgJyArXG4gICAgICAgICAgdGhpcy52aWV3T3B0aW9ucy5zZWxlY3Rpb25CYXJHcmFkaWVudC5mcm9tICtcbiAgICAgICAgICAnIDAlLCcgK1xuICAgICAgICAgIHRoaXMudmlld09wdGlvbnMuc2VsZWN0aW9uQmFyR3JhZGllbnQudG8gK1xuICAgICAgICAgICcgMTAwJSknLFxuICAgICAgfTtcbiAgICAgIGlmICh0aGlzLnZpZXdPcHRpb25zLnZlcnRpY2FsKSB7XG4gICAgICAgIHRoaXMuYmFyU3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID1cbiAgICAgICAgICAnY2VudGVyICcgK1xuICAgICAgICAgIChvZmZzZXQgK1xuICAgICAgICAgICAgZGltZW5zaW9uICtcbiAgICAgICAgICAgIHBvc2l0aW9uICtcbiAgICAgICAgICAgIChyZXZlcnNlZCA/IC10aGlzLmhhbmRsZUhhbGZEaW1lbnNpb24gOiAwKSkgK1xuICAgICAgICAgICdweCc7XG4gICAgICAgIHRoaXMuYmFyU3R5bGUuYmFja2dyb3VuZFNpemUgPVxuICAgICAgICAgICcxMDAlICcgKyAodGhpcy5mdWxsQmFyRWxlbWVudC5kaW1lbnNpb24gLSB0aGlzLmhhbmRsZUhhbGZEaW1lbnNpb24pICsgJ3B4JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYmFyU3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID1cbiAgICAgICAgICBvZmZzZXQgLVxuICAgICAgICAgIHBvc2l0aW9uICtcbiAgICAgICAgICAocmV2ZXJzZWQgPyB0aGlzLmhhbmRsZUhhbGZEaW1lbnNpb24gOiAwKSArXG4gICAgICAgICAgJ3B4IGNlbnRlcic7XG4gICAgICAgIHRoaXMuYmFyU3R5bGUuYmFja2dyb3VuZFNpemUgPVxuICAgICAgICAgIHRoaXMuZnVsbEJhckVsZW1lbnQuZGltZW5zaW9uIC0gdGhpcy5oYW5kbGVIYWxmRGltZW5zaW9uICsgJ3B4IDEwMCUnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFdyYXBwZXIgYXJvdW5kIHRoZSBnZXRTZWxlY3Rpb25CYXJDb2xvciBvZiB0aGUgdXNlciB0byBwYXNzIHRvIGNvcnJlY3QgcGFyYW1ldGVyc1xuICBwcml2YXRlIGdldFNlbGVjdGlvbkJhckNvbG9yKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMucmFuZ2UpIHtcbiAgICAgIHJldHVybiB0aGlzLnZpZXdPcHRpb25zLmdldFNlbGVjdGlvbkJhckNvbG9yKFxuICAgICAgICB0aGlzLnZhbHVlLFxuICAgICAgICB0aGlzLmhpZ2hWYWx1ZVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudmlld09wdGlvbnMuZ2V0U2VsZWN0aW9uQmFyQ29sb3IodGhpcy52YWx1ZSk7XG4gIH1cblxuICAvLyBXcmFwcGVyIGFyb3VuZCB0aGUgZ2V0UG9pbnRlckNvbG9yIG9mIHRoZSB1c2VyIHRvIHBhc3MgdG8gIGNvcnJlY3QgcGFyYW1ldGVyc1xuICBwcml2YXRlIGdldFBvaW50ZXJDb2xvcihwb2ludGVyVHlwZTogUG9pbnRlclR5cGUpOiBzdHJpbmcge1xuICAgIGlmIChwb2ludGVyVHlwZSA9PT0gUG9pbnRlclR5cGUuTWF4KSB7XG4gICAgICByZXR1cm4gdGhpcy52aWV3T3B0aW9ucy5nZXRQb2ludGVyQ29sb3IoXG4gICAgICAgIHRoaXMuaGlnaFZhbHVlLFxuICAgICAgICBwb2ludGVyVHlwZVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudmlld09wdGlvbnMuZ2V0UG9pbnRlckNvbG9yKFxuICAgICAgdGhpcy52YWx1ZSxcbiAgICAgIHBvaW50ZXJUeXBlXG4gICAgKTtcbiAgfVxuXG4gIC8vIFdyYXBwZXIgYXJvdW5kIHRoZSBnZXRUaWNrQ29sb3Igb2YgdGhlIHVzZXIgdG8gcGFzcyB0byBjb3JyZWN0IHBhcmFtZXRlcnNcbiAgcHJpdmF0ZSBnZXRUaWNrQ29sb3IodmFsdWU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudmlld09wdGlvbnMuZ2V0VGlja0NvbG9yKHZhbHVlKTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSBjb21iaW5lZCBsYWJlbCBwb3NpdGlvbiBhbmQgdmFsdWVcbiAgcHJpdmF0ZSB1cGRhdGVDb21iaW5lZExhYmVsKCk6IHZvaWQge1xuICAgIGxldCBpc0xhYmVsT3ZlcmxhcDogYm9vbGVhbiA9IG51bGw7XG4gICAgaWYgKHRoaXMudmlld09wdGlvbnMucmlnaHRUb0xlZnQpIHtcbiAgICAgIGlzTGFiZWxPdmVybGFwID1cbiAgICAgICAgdGhpcy5taW5IYW5kbGVMYWJlbEVsZW1lbnQucG9zaXRpb24gLSB0aGlzLm1pbkhhbmRsZUxhYmVsRWxlbWVudC5kaW1lbnNpb24gLSAxMCA8PSB0aGlzLm1heEhhbmRsZUxhYmVsRWxlbWVudC5wb3NpdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgaXNMYWJlbE92ZXJsYXAgPVxuICAgICAgICB0aGlzLm1pbkhhbmRsZUxhYmVsRWxlbWVudC5wb3NpdGlvbiArIHRoaXMubWluSGFuZGxlTGFiZWxFbGVtZW50LmRpbWVuc2lvbiArIDEwID49IHRoaXMubWF4SGFuZGxlTGFiZWxFbGVtZW50LnBvc2l0aW9uO1xuICAgIH1cblxuICAgIGlmIChpc0xhYmVsT3ZlcmxhcCkge1xuICAgICAgY29uc3QgbG93RGlzcGxheVZhbHVlOiBzdHJpbmcgPSB0aGlzLmdldERpc3BsYXlWYWx1ZSh0aGlzLnZpZXdMb3dWYWx1ZSwgTGFiZWxUeXBlLkxvdyk7XG4gICAgICBjb25zdCBoaWdoRGlzcGxheVZhbHVlOiBzdHJpbmcgPSB0aGlzLmdldERpc3BsYXlWYWx1ZSh0aGlzLnZpZXdIaWdoVmFsdWUsIExhYmVsVHlwZS5IaWdoKTtcbiAgICAgIGNvbnN0IGNvbWJpbmVkTGFiZWxWYWx1ZTogc3RyaW5nID0gdGhpcy52aWV3T3B0aW9ucy5yaWdodFRvTGVmdFxuICAgICAgICA/IHRoaXMudmlld09wdGlvbnMuY29tYmluZUxhYmVscyhoaWdoRGlzcGxheVZhbHVlLCBsb3dEaXNwbGF5VmFsdWUpXG4gICAgICAgIDogdGhpcy52aWV3T3B0aW9ucy5jb21iaW5lTGFiZWxzKGxvd0Rpc3BsYXlWYWx1ZSwgaGlnaERpc3BsYXlWYWx1ZSk7XG5cbiAgICAgIHRoaXMuY29tYmluZWRMYWJlbEVsZW1lbnQuc2V0VmFsdWUoY29tYmluZWRMYWJlbFZhbHVlKTtcbiAgICAgIGNvbnN0IHBvczogbnVtYmVyID0gdGhpcy52aWV3T3B0aW9ucy5ib3VuZFBvaW50ZXJMYWJlbHNcbiAgICAgICAgPyBNYXRoLm1pbihcbiAgICAgICAgICAgIE1hdGgubWF4KFxuICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkJhckVsZW1lbnQucG9zaXRpb24gK1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uQmFyRWxlbWVudC5kaW1lbnNpb24gLyAyIC1cbiAgICAgICAgICAgICAgICB0aGlzLmNvbWJpbmVkTGFiZWxFbGVtZW50LmRpbWVuc2lvbiAvIDIsXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICB0aGlzLmZ1bGxCYXJFbGVtZW50LmRpbWVuc2lvbiAtIHRoaXMuY29tYmluZWRMYWJlbEVsZW1lbnQuZGltZW5zaW9uXG4gICAgICAgICAgKVxuICAgICAgICA6IHRoaXMuc2VsZWN0aW9uQmFyRWxlbWVudC5wb3NpdGlvbiArIHRoaXMuc2VsZWN0aW9uQmFyRWxlbWVudC5kaW1lbnNpb24gLyAyIC0gdGhpcy5jb21iaW5lZExhYmVsRWxlbWVudC5kaW1lbnNpb24gLyAyO1xuXG4gICAgICB0aGlzLmNvbWJpbmVkTGFiZWxFbGVtZW50LnNldFBvc2l0aW9uKHBvcyk7XG4gICAgICB0aGlzLm1pbkhhbmRsZUxhYmVsRWxlbWVudC5oaWRlKCk7XG4gICAgICB0aGlzLm1heEhhbmRsZUxhYmVsRWxlbWVudC5oaWRlKCk7XG4gICAgICB0aGlzLmNvbWJpbmVkTGFiZWxFbGVtZW50LnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cGRhdGVIaWdoSGFuZGxlKHRoaXMudmFsdWVUb1Bvc2l0aW9uKHRoaXMudmlld0hpZ2hWYWx1ZSkpO1xuICAgICAgdGhpcy51cGRhdGVMb3dIYW5kbGUodGhpcy52YWx1ZVRvUG9zaXRpb24odGhpcy52aWV3TG93VmFsdWUpKTtcbiAgICAgIHRoaXMubWF4SGFuZGxlTGFiZWxFbGVtZW50LnNob3coKTtcbiAgICAgIHRoaXMubWluSGFuZGxlTGFiZWxFbGVtZW50LnNob3coKTtcbiAgICAgIHRoaXMuY29tYmluZWRMYWJlbEVsZW1lbnQuaGlkZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy52aWV3T3B0aW9ucy5hdXRvSGlkZUxpbWl0TGFiZWxzKSB7XG4gICAgICB0aGlzLnVwZGF0ZUZsb29yQW5kQ2VpbExhYmVsc1Zpc2liaWxpdHkoKTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm4gdGhlIHRyYW5zbGF0ZWQgdmFsdWUgaWYgYSB0cmFuc2xhdGUgZnVuY3Rpb24gaXMgcHJvdmlkZWQgZWxzZSB0aGUgb3JpZ2luYWwgdmFsdWVcbiAgcHJpdmF0ZSBnZXREaXNwbGF5VmFsdWUodmFsdWU6IG51bWJlciwgd2hpY2g6IExhYmVsVHlwZSk6IHN0cmluZyB7XG4gICAgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZpZXdPcHRpb25zLnN0ZXBzQXJyYXkpICYmICF0aGlzLnZpZXdPcHRpb25zLmJpbmRJbmRleEZvclN0ZXBzQXJyYXkpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5nZXRTdGVwVmFsdWUodmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy52aWV3T3B0aW9ucy50cmFuc2xhdGUodmFsdWUsIHdoaWNoKTtcbiAgfVxuXG4gIC8vIFJvdW5kIHZhbHVlIHRvIHN0ZXAgYW5kIHByZWNpc2lvbiBiYXNlZCBvbiBtaW5WYWx1ZVxuICBwcml2YXRlIHJvdW5kU3RlcCh2YWx1ZTogbnVtYmVyLCBjdXN0b21TdGVwPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBzdGVwOiBudW1iZXIgPSAhVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQoY3VzdG9tU3RlcCkgPyBjdXN0b21TdGVwIDogdGhpcy52aWV3T3B0aW9ucy5zdGVwO1xuICAgIGxldCBzdGVwcGVkRGlmZmVyZW5jZTogbnVtYmVyID0gTWF0aEhlbHBlci5yb3VuZFRvUHJlY2lzaW9uTGltaXQoXG4gICAgICAodmFsdWUgLSB0aGlzLnZpZXdPcHRpb25zLmZsb29yKSAvIHN0ZXAsIHRoaXMudmlld09wdGlvbnMucHJlY2lzaW9uTGltaXQpO1xuICAgIHN0ZXBwZWREaWZmZXJlbmNlID0gTWF0aC5yb3VuZChzdGVwcGVkRGlmZmVyZW5jZSkgKiBzdGVwO1xuICAgIHJldHVybiBNYXRoSGVscGVyLnJvdW5kVG9QcmVjaXNpb25MaW1pdCh0aGlzLnZpZXdPcHRpb25zLmZsb29yICsgc3RlcHBlZERpZmZlcmVuY2UsIHRoaXMudmlld09wdGlvbnMucHJlY2lzaW9uTGltaXQpO1xuICB9XG5cbiAgLy8gVHJhbnNsYXRlIHZhbHVlIHRvIHBpeGVsIHBvc2l0aW9uXG4gIHByaXZhdGUgdmFsdWVUb1Bvc2l0aW9uKHZhbDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBsZXQgZm46IFZhbHVlVG9Qb3NpdGlvbkZ1bmN0aW9uICA9IFZhbHVlSGVscGVyLmxpbmVhclZhbHVlVG9Qb3NpdGlvbjtcbiAgICBpZiAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudmlld09wdGlvbnMuY3VzdG9tVmFsdWVUb1Bvc2l0aW9uKSkge1xuICAgICAgZm4gPSB0aGlzLnZpZXdPcHRpb25zLmN1c3RvbVZhbHVlVG9Qb3NpdGlvbjtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmlld09wdGlvbnMubG9nU2NhbGUpIHtcbiAgICAgIGZuID0gVmFsdWVIZWxwZXIubG9nVmFsdWVUb1Bvc2l0aW9uO1xuICAgIH1cblxuICAgIHZhbCA9IE1hdGhIZWxwZXIuY2xhbXBUb1JhbmdlKHZhbCwgdGhpcy52aWV3T3B0aW9ucy5mbG9vciwgdGhpcy52aWV3T3B0aW9ucy5jZWlsKTtcbiAgICBsZXQgcGVyY2VudDogbnVtYmVyID0gZm4odmFsLCB0aGlzLnZpZXdPcHRpb25zLmZsb29yLCB0aGlzLnZpZXdPcHRpb25zLmNlaWwpO1xuICAgIGlmIChWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZChwZXJjZW50KSkge1xuICAgICAgcGVyY2VudCA9IDA7XG4gICAgfVxuICAgIGlmICh0aGlzLnZpZXdPcHRpb25zLnJpZ2h0VG9MZWZ0KSB7XG4gICAgICBwZXJjZW50ID0gMSAtIHBlcmNlbnQ7XG4gICAgfVxuICAgIHJldHVybiBwZXJjZW50ICogdGhpcy5tYXhIYW5kbGVQb3NpdGlvbjtcbiAgfVxuXG4gIC8vIFRyYW5zbGF0ZSBwb3NpdGlvbiB0byBtb2RlbCB2YWx1ZVxuICBwcml2YXRlIHBvc2l0aW9uVG9WYWx1ZShwb3NpdGlvbjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBsZXQgcGVyY2VudDogbnVtYmVyID0gcG9zaXRpb24gLyB0aGlzLm1heEhhbmRsZVBvc2l0aW9uO1xuICAgIGlmICh0aGlzLnZpZXdPcHRpb25zLnJpZ2h0VG9MZWZ0KSB7XG4gICAgICBwZXJjZW50ID0gMSAtIHBlcmNlbnQ7XG4gICAgfVxuICAgIGxldCBmbjogUG9zaXRpb25Ub1ZhbHVlRnVuY3Rpb24gPSBWYWx1ZUhlbHBlci5saW5lYXJQb3NpdGlvblRvVmFsdWU7XG4gICAgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZpZXdPcHRpb25zLmN1c3RvbVBvc2l0aW9uVG9WYWx1ZSkpIHtcbiAgICAgIGZuID0gdGhpcy52aWV3T3B0aW9ucy5jdXN0b21Qb3NpdGlvblRvVmFsdWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLnZpZXdPcHRpb25zLmxvZ1NjYWxlKSB7XG4gICAgICBmbiA9IFZhbHVlSGVscGVyLmxvZ1Bvc2l0aW9uVG9WYWx1ZTtcbiAgICB9XG4gICAgY29uc3QgdmFsdWU6IG51bWJlciA9IGZuKHBlcmNlbnQsIHRoaXMudmlld09wdGlvbnMuZmxvb3IsIHRoaXMudmlld09wdGlvbnMuY2VpbCk7XG4gICAgcmV0dXJuICFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh2YWx1ZSkgPyB2YWx1ZSA6IDA7XG4gIH1cblxuICAvLyBHZXQgdGhlIFgtY29vcmRpbmF0ZSBvciBZLWNvb3JkaW5hdGUgb2YgYW4gZXZlbnRcbiAgcHJpdmF0ZSBnZXRFdmVudFhZKGV2ZW50OiBNb3VzZUV2ZW50fFRvdWNoRXZlbnQsIHRhcmdldFRvdWNoSWQ/OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLnZpZXdPcHRpb25zLnZlcnRpY2FsID8gZXZlbnQuY2xpZW50WSA6IGV2ZW50LmNsaWVudFg7XG4gICAgfVxuXG4gICAgbGV0IHRvdWNoSW5kZXg6IG51bWJlciA9IDA7XG4gICAgY29uc3QgdG91Y2hlczogVG91Y2hMaXN0ID0gZXZlbnQudG91Y2hlcztcbiAgICBpZiAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRhcmdldFRvdWNoSWQpKSB7XG4gICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodG91Y2hlc1tpXS5pZGVudGlmaWVyID09PSB0YXJnZXRUb3VjaElkKSB7XG4gICAgICAgICAgdG91Y2hJbmRleCA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIHRhcmdldCB0b3VjaCBvciBpZiB0aGUgdGFyZ2V0IHRvdWNoIHdhcyBub3QgZm91bmQgaW4gdGhlIGV2ZW50XG4gICAgLy8gcmV0dXJucyB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIGZpcnN0IHRvdWNoXG4gICAgcmV0dXJuIHRoaXMudmlld09wdGlvbnMudmVydGljYWwgPyB0b3VjaGVzW3RvdWNoSW5kZXhdLmNsaWVudFkgOiB0b3VjaGVzW3RvdWNoSW5kZXhdLmNsaWVudFg7XG4gIH1cblxuICAvLyBDb21wdXRlIHRoZSBldmVudCBwb3NpdGlvbiBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgc2xpZGVyIGlzIGhvcml6b250YWwgb3IgdmVydGljYWxcbiAgcHJpdmF0ZSBnZXRFdmVudFBvc2l0aW9uKGV2ZW50OiBNb3VzZUV2ZW50fFRvdWNoRXZlbnQsIHRhcmdldFRvdWNoSWQ/OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHNsaWRlckVsZW1lbnRCb3VuZGluZ1JlY3Q6IENsaWVudFJlY3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGNvbnN0IHNsaWRlclBvczogbnVtYmVyID0gdGhpcy52aWV3T3B0aW9ucy52ZXJ0aWNhbCA/XG4gICAgICBzbGlkZXJFbGVtZW50Qm91bmRpbmdSZWN0LmJvdHRvbSA6IHNsaWRlckVsZW1lbnRCb3VuZGluZ1JlY3QubGVmdDtcbiAgICBsZXQgZXZlbnRQb3M6IG51bWJlciA9IDA7XG4gICAgaWYgKHRoaXMudmlld09wdGlvbnMudmVydGljYWwpIHtcbiAgICAgIGV2ZW50UG9zID0gLXRoaXMuZ2V0RXZlbnRYWShldmVudCwgdGFyZ2V0VG91Y2hJZCkgKyBzbGlkZXJQb3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2ZW50UG9zID0gdGhpcy5nZXRFdmVudFhZKGV2ZW50LCB0YXJnZXRUb3VjaElkKSAtIHNsaWRlclBvcztcbiAgICB9XG4gICAgcmV0dXJuIGV2ZW50UG9zICogdGhpcy52aWV3T3B0aW9ucy5zY2FsZSAtIHRoaXMuaGFuZGxlSGFsZkRpbWVuc2lvbjtcbiAgfVxuXG4gIC8vIEdldCB0aGUgaGFuZGxlIGNsb3Nlc3QgdG8gYW4gZXZlbnRcbiAgcHJpdmF0ZSBnZXROZWFyZXN0SGFuZGxlKGV2ZW50OiBNb3VzZUV2ZW50fFRvdWNoRXZlbnQpOiBQb2ludGVyVHlwZSB7XG4gICAgaWYgKCF0aGlzLnJhbmdlKSB7XG4gICAgICByZXR1cm4gUG9pbnRlclR5cGUuTWluO1xuICAgIH1cblxuICAgIGNvbnN0IHBvc2l0aW9uOiBudW1iZXIgPSB0aGlzLmdldEV2ZW50UG9zaXRpb24oZXZlbnQpO1xuICAgIGNvbnN0IGRpc3RhbmNlTWluOiBudW1iZXIgPSBNYXRoLmFicyhwb3NpdGlvbiAtIHRoaXMubWluSGFuZGxlRWxlbWVudC5wb3NpdGlvbik7XG4gICAgY29uc3QgZGlzdGFuY2VNYXg6IG51bWJlciA9IE1hdGguYWJzKHBvc2l0aW9uIC0gdGhpcy5tYXhIYW5kbGVFbGVtZW50LnBvc2l0aW9uKTtcblxuICAgIGlmIChkaXN0YW5jZU1pbiA8IGRpc3RhbmNlTWF4KSB7XG4gICAgICByZXR1cm4gUG9pbnRlclR5cGUuTWluO1xuICAgIH0gZWxzZSBpZiAoZGlzdGFuY2VNaW4gPiBkaXN0YW5jZU1heCkge1xuICAgICAgcmV0dXJuIFBvaW50ZXJUeXBlLk1heDtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnZpZXdPcHRpb25zLnJpZ2h0VG9MZWZ0KSB7XG4gICAgICAvLyBpZiBldmVudCBpcyBhdCB0aGUgc2FtZSBkaXN0YW5jZSBmcm9tIG1pbi9tYXggdGhlbiBpZiBpdCdzIGF0IGxlZnQgb2YgbWluSCwgd2UgcmV0dXJuIG1pbkggZWxzZSBtYXhIXG4gICAgICByZXR1cm4gcG9zaXRpb24gPCB0aGlzLm1pbkhhbmRsZUVsZW1lbnQucG9zaXRpb24gPyBQb2ludGVyVHlwZS5NaW4gOiBQb2ludGVyVHlwZS5NYXg7XG4gICAgfVxuICAgIC8vIHJldmVyc2UgaW4gcnRsXG4gICAgcmV0dXJuIHBvc2l0aW9uID4gdGhpcy5taW5IYW5kbGVFbGVtZW50LnBvc2l0aW9uID8gUG9pbnRlclR5cGUuTWluIDogUG9pbnRlclR5cGUuTWF4O1xuICB9XG5cbiAgLy8gQmluZCBtb3VzZSBhbmQgdG91Y2ggZXZlbnRzIHRvIHNsaWRlciBoYW5kbGVzXG4gIHByaXZhdGUgYmluZEV2ZW50cygpOiB2b2lkIHtcbiAgICBjb25zdCBkcmFnZ2FibGVSYW5nZTogYm9vbGVhbiA9IHRoaXMudmlld09wdGlvbnMuZHJhZ2dhYmxlUmFuZ2U7XG5cbiAgICBpZiAoIXRoaXMudmlld09wdGlvbnMub25seUJpbmRIYW5kbGVzKSB7XG4gICAgICB0aGlzLnNlbGVjdGlvbkJhckVsZW1lbnQub24oJ21vdXNlZG93bicsXG4gICAgICAgIChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4gdGhpcy5vbkJhclN0YXJ0KG51bGwsIGRyYWdnYWJsZVJhbmdlLCBldmVudCwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudmlld09wdGlvbnMuZHJhZ2dhYmxlUmFuZ2VPbmx5KSB7XG4gICAgICB0aGlzLm1pbkhhbmRsZUVsZW1lbnQub24oJ21vdXNlZG93bicsXG4gICAgICAgIChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4gdGhpcy5vbkJhclN0YXJ0KFBvaW50ZXJUeXBlLk1pbiwgZHJhZ2dhYmxlUmFuZ2UsIGV2ZW50LCB0cnVlLCB0cnVlKVxuICAgICAgKTtcbiAgICAgIHRoaXMubWF4SGFuZGxlRWxlbWVudC5vbignbW91c2Vkb3duJyxcbiAgICAgICAgKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCA9PiB0aGlzLm9uQmFyU3RhcnQoUG9pbnRlclR5cGUuTWF4LCBkcmFnZ2FibGVSYW5nZSwgZXZlbnQsIHRydWUsIHRydWUpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1pbkhhbmRsZUVsZW1lbnQub24oJ21vdXNlZG93bicsXG4gICAgICAgIChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4gdGhpcy5vblN0YXJ0KFBvaW50ZXJUeXBlLk1pbiwgZXZlbnQsIHRydWUsIHRydWUpXG4gICAgICApO1xuXG4gICAgICBpZiAodGhpcy5yYW5nZSkge1xuICAgICAgICB0aGlzLm1heEhhbmRsZUVsZW1lbnQub24oJ21vdXNlZG93bicsXG4gICAgICAgICAgKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCA9PiB0aGlzLm9uU3RhcnQoUG9pbnRlclR5cGUuTWF4LCBldmVudCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy52aWV3T3B0aW9ucy5vbmx5QmluZEhhbmRsZXMpIHtcbiAgICAgICAgdGhpcy5mdWxsQmFyRWxlbWVudC5vbignbW91c2Vkb3duJyxcbiAgICAgICAgICAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHRoaXMub25TdGFydChudWxsLCBldmVudCwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy50aWNrc0VsZW1lbnQub24oJ21vdXNlZG93bicsXG4gICAgICAgICAgKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCA9PiB0aGlzLm9uU3RhcnQobnVsbCwgZXZlbnQsIHRydWUsIHRydWUsIHRydWUsIHRydWUpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnZpZXdPcHRpb25zLm9ubHlCaW5kSGFuZGxlcykge1xuICAgICAgdGhpcy5zZWxlY3Rpb25CYXJFbGVtZW50Lm9uUGFzc2l2ZSgndG91Y2hzdGFydCcsXG4gICAgICAgIChldmVudDogVG91Y2hFdmVudCk6IHZvaWQgPT4gdGhpcy5vbkJhclN0YXJ0KG51bGwsIGRyYWdnYWJsZVJhbmdlLCBldmVudCwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSlcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICh0aGlzLnZpZXdPcHRpb25zLmRyYWdnYWJsZVJhbmdlT25seSkge1xuICAgICAgdGhpcy5taW5IYW5kbGVFbGVtZW50Lm9uUGFzc2l2ZSgndG91Y2hzdGFydCcsXG4gICAgICAgIChldmVudDogVG91Y2hFdmVudCk6IHZvaWQgPT4gdGhpcy5vbkJhclN0YXJ0KFBvaW50ZXJUeXBlLk1pbiwgZHJhZ2dhYmxlUmFuZ2UsIGV2ZW50LCB0cnVlLCB0cnVlKVxuICAgICAgKTtcbiAgICAgIHRoaXMubWF4SGFuZGxlRWxlbWVudC5vblBhc3NpdmUoJ3RvdWNoc3RhcnQnLFxuICAgICAgICAoZXZlbnQ6IFRvdWNoRXZlbnQpOiB2b2lkID0+IHRoaXMub25CYXJTdGFydChQb2ludGVyVHlwZS5NYXgsIGRyYWdnYWJsZVJhbmdlLCBldmVudCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWluSGFuZGxlRWxlbWVudC5vblBhc3NpdmUoJ3RvdWNoc3RhcnQnLFxuICAgICAgICAoZXZlbnQ6IFRvdWNoRXZlbnQpOiB2b2lkID0+IHRoaXMub25TdGFydChQb2ludGVyVHlwZS5NaW4sIGV2ZW50LCB0cnVlLCB0cnVlKVxuICAgICAgKTtcbiAgICAgIGlmICh0aGlzLnJhbmdlKSB7XG4gICAgICAgIHRoaXMubWF4SGFuZGxlRWxlbWVudC5vblBhc3NpdmUoJ3RvdWNoc3RhcnQnLFxuICAgICAgICAgIChldmVudDogVG91Y2hFdmVudCk6IHZvaWQgPT4gdGhpcy5vblN0YXJ0KFBvaW50ZXJUeXBlLk1heCwgZXZlbnQsIHRydWUsIHRydWUpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMudmlld09wdGlvbnMub25seUJpbmRIYW5kbGVzKSB7XG4gICAgICAgIHRoaXMuZnVsbEJhckVsZW1lbnQub25QYXNzaXZlKCd0b3VjaHN0YXJ0JyxcbiAgICAgICAgICAoZXZlbnQ6IFRvdWNoRXZlbnQpOiB2b2lkID0+IHRoaXMub25TdGFydChudWxsLCBldmVudCwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy50aWNrc0VsZW1lbnQub25QYXNzaXZlKCd0b3VjaHN0YXJ0JyxcbiAgICAgICAgICAoZXZlbnQ6IFRvdWNoRXZlbnQpOiB2b2lkID0+IHRoaXMub25TdGFydChudWxsLCBldmVudCwgZmFsc2UsIGZhbHNlLCB0cnVlLCB0cnVlKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnZpZXdPcHRpb25zLmtleWJvYXJkU3VwcG9ydCkge1xuICAgICAgdGhpcy5taW5IYW5kbGVFbGVtZW50Lm9uKCdmb2N1cycsICgpOiB2b2lkID0+IHRoaXMub25Qb2ludGVyRm9jdXMoUG9pbnRlclR5cGUuTWluKSk7XG4gICAgICBpZiAodGhpcy5yYW5nZSkge1xuICAgICAgICB0aGlzLm1heEhhbmRsZUVsZW1lbnQub24oJ2ZvY3VzJywgKCk6IHZvaWQgPT4gdGhpcy5vblBvaW50ZXJGb2N1cyhQb2ludGVyVHlwZS5NYXgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldE9wdGlvbnNJbmZsdWVuY2luZ0V2ZW50QmluZGluZ3Mob3B0aW9uczogT3B0aW9ucyk6IGJvb2xlYW5bXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIG9wdGlvbnMuZGlzYWJsZWQsXG4gICAgICBvcHRpb25zLnJlYWRPbmx5LFxuICAgICAgb3B0aW9ucy5kcmFnZ2FibGVSYW5nZSxcbiAgICAgIG9wdGlvbnMuZHJhZ2dhYmxlUmFuZ2VPbmx5LFxuICAgICAgb3B0aW9ucy5vbmx5QmluZEhhbmRsZXMsXG4gICAgICBvcHRpb25zLmtleWJvYXJkU3VwcG9ydFxuICAgIF07XG4gIH1cblxuICAvLyBVbmJpbmQgbW91c2UgYW5kIHRvdWNoIGV2ZW50cyB0byBzbGlkZXIgaGFuZGxlc1xuICBwcml2YXRlIHVuYmluZEV2ZW50cygpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlT25Nb3ZlKCk7XG4gICAgdGhpcy51bnN1YnNjcmliZU9uRW5kKCk7XG5cbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgdGhpcy5nZXRBbGxTbGlkZXJFbGVtZW50cygpKSB7XG4gICAgICBpZiAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKGVsZW1lbnQpKSB7XG4gICAgICAgIGVsZW1lbnQub2ZmKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvbkJhclN0YXJ0KHBvaW50ZXJUeXBlOiBQb2ludGVyVHlwZSwgZHJhZ2dhYmxlUmFuZ2U6IGJvb2xlYW4sIGV2ZW50OiBNb3VzZUV2ZW50fFRvdWNoRXZlbnQsXG4gICAgYmluZE1vdmU6IGJvb2xlYW4sIGJpbmRFbmQ6IGJvb2xlYW4sIHNpbXVsYXRlSW1tZWRpYXRlTW92ZT86IGJvb2xlYW4sIHNpbXVsYXRlSW1tZWRpYXRlRW5kPzogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChkcmFnZ2FibGVSYW5nZSkge1xuICAgICAgdGhpcy5vbkRyYWdTdGFydChwb2ludGVyVHlwZSwgZXZlbnQsIGJpbmRNb3ZlLCBiaW5kRW5kKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vblN0YXJ0KHBvaW50ZXJUeXBlLCBldmVudCwgYmluZE1vdmUsIGJpbmRFbmQsIHNpbXVsYXRlSW1tZWRpYXRlTW92ZSwgc2ltdWxhdGVJbW1lZGlhdGVFbmQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIG9uU3RhcnQgZXZlbnQgaGFuZGxlclxuICBwcml2YXRlIG9uU3RhcnQocG9pbnRlclR5cGU6IFBvaW50ZXJUeXBlLCBldmVudDogTW91c2VFdmVudHxUb3VjaEV2ZW50LFxuICAgICAgYmluZE1vdmU6IGJvb2xlYW4sIGJpbmRFbmQ6IGJvb2xlYW4sIHNpbXVsYXRlSW1tZWRpYXRlTW92ZT86IGJvb2xlYW4sIHNpbXVsYXRlSW1tZWRpYXRlRW5kPzogYm9vbGVhbik6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIC8vIE9ubHkgY2FsbCBwcmV2ZW50RGVmYXVsdCgpIHdoZW4gaGFuZGxpbmcgbm9uLXBhc3NpdmUgZXZlbnRzIChwYXNzaXZlIGV2ZW50cyBkb24ndCBuZWVkIGl0KVxuICAgIGlmICghQ29tcGF0aWJpbGl0eUhlbHBlci5pc1RvdWNoRXZlbnQoZXZlbnQpIHx8ICFkZXRlY3RQYXNzaXZlRXZlbnRzLmhhc1N1cHBvcnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcblxuICAgIC8vIFdlIGhhdmUgdG8gZG8gdGhpcyBpbiBjYXNlIHRoZSBIVE1MIHdoZXJlIHRoZSBzbGlkZXJzIGFyZSBvblxuICAgIC8vIGhhdmUgYmVlbiBhbmltYXRlZCBpbnRvIHZpZXcuXG4gICAgdGhpcy5jYWxjdWxhdGVWaWV3RGltZW5zaW9ucygpO1xuXG4gICAgaWYgKFZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHBvaW50ZXJUeXBlKSkge1xuICAgICAgcG9pbnRlclR5cGUgPSB0aGlzLmdldE5lYXJlc3RIYW5kbGUoZXZlbnQpO1xuICAgIH1cblxuICAgIHRoaXMuY3VycmVudFRyYWNraW5nUG9pbnRlciA9IHBvaW50ZXJUeXBlO1xuXG4gICAgY29uc3QgcG9pbnRlckVsZW1lbnQ6IFNsaWRlckhhbmRsZURpcmVjdGl2ZSA9IHRoaXMuZ2V0UG9pbnRlckVsZW1lbnQocG9pbnRlclR5cGUpO1xuICAgIHBvaW50ZXJFbGVtZW50LmFjdGl2ZSA9IHRydWU7XG5cbiAgICBpZiAodGhpcy52aWV3T3B0aW9ucy5rZXlib2FyZFN1cHBvcnQpIHtcbiAgICAgIHBvaW50ZXJFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgaWYgKGJpbmRNb3ZlKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlT25Nb3ZlKCk7XG5cbiAgICAgIGNvbnN0IG9uTW92ZUNhbGxiYWNrOiAoKGU6IE1vdXNlRXZlbnR8VG91Y2hFdmVudCkgPT4gdm9pZCkgPVxuICAgICAgICAoZTogTW91c2VFdmVudHxUb3VjaEV2ZW50KTogdm9pZCA9PiB0aGlzLmRyYWdnaW5nLmFjdGl2ZSA/IHRoaXMub25EcmFnTW92ZShlKSA6IHRoaXMub25Nb3ZlKGUpO1xuXG4gICAgICBpZiAoQ29tcGF0aWJpbGl0eUhlbHBlci5pc1RvdWNoRXZlbnQoZXZlbnQpKSB7XG4gICAgICAgIHRoaXMub25Nb3ZlRXZlbnRMaXN0ZW5lciA9IHRoaXMuZXZlbnRMaXN0ZW5lckhlbHBlci5hdHRhY2hQYXNzaXZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBkb2N1bWVudCwgJ3RvdWNobW92ZScsIG9uTW92ZUNhbGxiYWNrLCB0aGlzLnZpZXdPcHRpb25zLnRvdWNoRXZlbnRzSW50ZXJ2YWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vbk1vdmVFdmVudExpc3RlbmVyID0gdGhpcy5ldmVudExpc3RlbmVySGVscGVyLmF0dGFjaEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgZG9jdW1lbnQsICdtb3VzZW1vdmUnLCBvbk1vdmVDYWxsYmFjaywgdGhpcy52aWV3T3B0aW9ucy5tb3VzZUV2ZW50c0ludGVydmFsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYmluZEVuZCkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZU9uRW5kKCk7XG5cbiAgICAgIGNvbnN0IG9uRW5kQ2FsbGJhY2s6ICgoZTogTW91c2VFdmVudHxUb3VjaEV2ZW50KSA9PiB2b2lkKSA9XG4gICAgICAgIChlOiBNb3VzZUV2ZW50fFRvdWNoRXZlbnQpOiB2b2lkID0+IHRoaXMub25FbmQoZSk7XG5cbiAgICAgIGlmIChDb21wYXRpYmlsaXR5SGVscGVyLmlzVG91Y2hFdmVudChldmVudCkpIHtcbiAgICAgICAgdGhpcy5vbkVuZEV2ZW50TGlzdGVuZXIgPSB0aGlzLmV2ZW50TGlzdGVuZXJIZWxwZXIuYXR0YWNoUGFzc2l2ZUV2ZW50TGlzdGVuZXIoZG9jdW1lbnQsICd0b3VjaGVuZCcsIG9uRW5kQ2FsbGJhY2spO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vbkVuZEV2ZW50TGlzdGVuZXIgPSB0aGlzLmV2ZW50TGlzdGVuZXJIZWxwZXIuYXR0YWNoRXZlbnRMaXN0ZW5lcihkb2N1bWVudCwgJ21vdXNldXAnLCBvbkVuZENhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnVzZXJDaGFuZ2VTdGFydC5lbWl0KHRoaXMuZ2V0Q2hhbmdlQ29udGV4dCgpKTtcblxuICAgIGlmIChDb21wYXRpYmlsaXR5SGVscGVyLmlzVG91Y2hFdmVudChldmVudCkgJiYgIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKChldmVudCBhcyBUb3VjaEV2ZW50KS5jaGFuZ2VkVG91Y2hlcykpIHtcbiAgICAgIC8vIFN0b3JlIHRoZSB0b3VjaCBpZGVudGlmaWVyXG4gICAgICBpZiAoVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy50b3VjaElkKSkge1xuICAgICAgICB0aGlzLnRvdWNoSWQgPSAoZXZlbnQgYXMgVG91Y2hFdmVudCkuY2hhbmdlZFRvdWNoZXNbMF0uaWRlbnRpZmllcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDbGljayBldmVudHMsIGVpdGhlciB3aXRoIG1vdXNlIG9yIHRvdWNoIGdlc3R1cmUgYXJlIHdlaXJkLiBTb21ldGltZXMgdGhleSByZXN1bHQgaW4gZnVsbFxuICAgIC8vIHN0YXJ0LCBtb3ZlLCBlbmQgc2VxdWVuY2UsIGFuZCBzb21ldGltZXMsIHRoZXkgZG9uJ3QgLSB0aGV5IG9ubHkgaW52b2tlIG1vdXNlZG93blxuICAgIC8vIEFzIGEgd29ya2Fyb3VuZCwgd2Ugc2ltdWxhdGUgdGhlIGZpcnN0IG1vdmUgZXZlbnQgYW5kIHRoZSBlbmQgZXZlbnQgaWYgaXQncyBuZWNlc3NhcnlcbiAgICBpZiAoc2ltdWxhdGVJbW1lZGlhdGVNb3ZlKSB7XG4gICAgICB0aGlzLm9uTW92ZShldmVudCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHNpbXVsYXRlSW1tZWRpYXRlRW5kKSB7XG4gICAgICB0aGlzLm9uRW5kKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICAvLyBvbk1vdmUgZXZlbnQgaGFuZGxlclxuICBwcml2YXRlIG9uTW92ZShldmVudDogTW91c2VFdmVudHxUb3VjaEV2ZW50LCBmcm9tVGljaz86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBsZXQgdG91Y2hGb3JUaGlzU2xpZGVyOiBUb3VjaCA9IG51bGw7XG5cbiAgICBpZiAoQ29tcGF0aWJpbGl0eUhlbHBlci5pc1RvdWNoRXZlbnQoZXZlbnQpKSB7XG4gICAgICBjb25zdCBjaGFuZ2VkVG91Y2hlczogVG91Y2hMaXN0ID0gKGV2ZW50IGFzIFRvdWNoRXZlbnQpLmNoYW5nZWRUb3VjaGVzO1xuICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChjaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyID09PSB0aGlzLnRvdWNoSWQpIHtcbiAgICAgICAgICB0b3VjaEZvclRoaXNTbGlkZXIgPSBjaGFuZ2VkVG91Y2hlc1tpXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodG91Y2hGb3JUaGlzU2xpZGVyKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudmlld09wdGlvbnMuYW5pbWF0ZSAmJiAhdGhpcy52aWV3T3B0aW9ucy5hbmltYXRlT25Nb3ZlKSB7XG4gICAgICBpZiAodGhpcy5tb3ZpbmcpIHtcbiAgICAgICAgdGhpcy5zbGlkZXJFbGVtZW50QW5pbWF0ZUNsYXNzID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuXG4gICAgY29uc3QgbmV3UG9zOiBudW1iZXIgPSAhVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodG91Y2hGb3JUaGlzU2xpZGVyKVxuICAgICAgPyB0aGlzLmdldEV2ZW50UG9zaXRpb24oZXZlbnQsIHRvdWNoRm9yVGhpc1NsaWRlci5pZGVudGlmaWVyKVxuICAgICAgOiB0aGlzLmdldEV2ZW50UG9zaXRpb24oZXZlbnQpO1xuICAgIGxldCBuZXdWYWx1ZTogbnVtYmVyO1xuICAgIGNvbnN0IGNlaWxWYWx1ZTogbnVtYmVyID0gdGhpcy52aWV3T3B0aW9ucy5yaWdodFRvTGVmdFxuICAgICAgICA/IHRoaXMudmlld09wdGlvbnMuZmxvb3JcbiAgICAgICAgOiB0aGlzLnZpZXdPcHRpb25zLmNlaWw7XG4gICAgY29uc3QgZmxvb3JWYWx1ZTogbnVtYmVyID0gdGhpcy52aWV3T3B0aW9ucy5yaWdodFRvTGVmdCA/IHRoaXMudmlld09wdGlvbnMuY2VpbCA6IHRoaXMudmlld09wdGlvbnMuZmxvb3I7XG5cbiAgICBpZiAobmV3UG9zIDw9IDApIHtcbiAgICAgIG5ld1ZhbHVlID0gZmxvb3JWYWx1ZTtcbiAgICB9IGVsc2UgaWYgKG5ld1BvcyA+PSB0aGlzLm1heEhhbmRsZVBvc2l0aW9uKSB7XG4gICAgICBuZXdWYWx1ZSA9IGNlaWxWYWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3VmFsdWUgPSB0aGlzLnBvc2l0aW9uVG9WYWx1ZShuZXdQb3MpO1xuICAgICAgaWYgKGZyb21UaWNrICYmICFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZpZXdPcHRpb25zLnRpY2tTdGVwKSkge1xuICAgICAgICBuZXdWYWx1ZSA9IHRoaXMucm91bmRTdGVwKG5ld1ZhbHVlLCB0aGlzLnZpZXdPcHRpb25zLnRpY2tTdGVwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1ZhbHVlID0gdGhpcy5yb3VuZFN0ZXAobmV3VmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnBvc2l0aW9uVHJhY2tpbmdIYW5kbGUobmV3VmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkVuZChldmVudDogTW91c2VFdmVudHxUb3VjaEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKENvbXBhdGliaWxpdHlIZWxwZXIuaXNUb3VjaEV2ZW50KGV2ZW50KSkge1xuICAgICAgY29uc3QgY2hhbmdlZFRvdWNoZXM6IFRvdWNoTGlzdCA9IChldmVudCBhcyBUb3VjaEV2ZW50KS5jaGFuZ2VkVG91Y2hlcztcbiAgICAgIGlmIChjaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyICE9PSB0aGlzLnRvdWNoSWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMubW92aW5nID0gZmFsc2U7XG4gICAgaWYgKHRoaXMudmlld09wdGlvbnMuYW5pbWF0ZSkge1xuICAgICAgdGhpcy5zbGlkZXJFbGVtZW50QW5pbWF0ZUNsYXNzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLnRvdWNoSWQgPSBudWxsO1xuXG4gICAgaWYgKCF0aGlzLnZpZXdPcHRpb25zLmtleWJvYXJkU3VwcG9ydCkge1xuICAgICAgdGhpcy5taW5IYW5kbGVFbGVtZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5tYXhIYW5kbGVFbGVtZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5jdXJyZW50VHJhY2tpbmdQb2ludGVyID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5kcmFnZ2luZy5hY3RpdmUgPSBmYWxzZTtcblxuICAgIHRoaXMudW5zdWJzY3JpYmVPbk1vdmUoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlT25FbmQoKTtcblxuICAgIHRoaXMudXNlckNoYW5nZUVuZC5lbWl0KHRoaXMuZ2V0Q2hhbmdlQ29udGV4dCgpKTtcbiAgfVxuXG4gIHByaXZhdGUgb25Qb2ludGVyRm9jdXMocG9pbnRlclR5cGU6IFBvaW50ZXJUeXBlKTogdm9pZCB7XG4gICAgY29uc3QgcG9pbnRlckVsZW1lbnQ6IFNsaWRlckhhbmRsZURpcmVjdGl2ZSA9IHRoaXMuZ2V0UG9pbnRlckVsZW1lbnQocG9pbnRlclR5cGUpO1xuICAgIHBvaW50ZXJFbGVtZW50Lm9uKCdibHVyJywgKCk6IHZvaWQgPT4gdGhpcy5vblBvaW50ZXJCbHVyKHBvaW50ZXJFbGVtZW50KSk7XG4gICAgcG9pbnRlckVsZW1lbnQub24oJ2tleWRvd24nLCAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkID0+IHRoaXMub25LZXlib2FyZEV2ZW50KGV2ZW50KSk7XG4gICAgcG9pbnRlckVsZW1lbnQub24oJ2tleXVwJywgKCk6IHZvaWQgPT4gdGhpcy5vbktleVVwKCkpO1xuICAgIHBvaW50ZXJFbGVtZW50LmFjdGl2ZSA9IHRydWU7XG5cbiAgICB0aGlzLmN1cnJlbnRUcmFja2luZ1BvaW50ZXIgPSBwb2ludGVyVHlwZTtcbiAgICB0aGlzLmN1cnJlbnRGb2N1c1BvaW50ZXIgPSBwb2ludGVyVHlwZTtcbiAgICB0aGlzLmZpcnN0S2V5RG93biA9IHRydWU7XG4gIH1cblxuICBwcml2YXRlIG9uS2V5VXAoKTogdm9pZCB7XG4gICAgdGhpcy5maXJzdEtleURvd24gPSB0cnVlO1xuICAgIHRoaXMudXNlckNoYW5nZUVuZC5lbWl0KHRoaXMuZ2V0Q2hhbmdlQ29udGV4dCgpKTtcbiAgfVxuXG4gIHByaXZhdGUgb25Qb2ludGVyQmx1cihwb2ludGVyOiBTbGlkZXJIYW5kbGVEaXJlY3RpdmUpOiB2b2lkIHtcbiAgICBwb2ludGVyLm9mZignYmx1cicpO1xuICAgIHBvaW50ZXIub2ZmKCdrZXlkb3duJyk7XG4gICAgcG9pbnRlci5vZmYoJ2tleXVwJyk7XG4gICAgcG9pbnRlci5hY3RpdmUgPSBmYWxzZTtcbiAgICBpZiAoVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy50b3VjaElkKSkge1xuICAgICAgdGhpcy5jdXJyZW50VHJhY2tpbmdQb2ludGVyID0gbnVsbDtcbiAgICAgIHRoaXMuY3VycmVudEZvY3VzUG9pbnRlciA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRLZXlBY3Rpb25zKGN1cnJlbnRWYWx1ZTogbnVtYmVyKToge1trZXk6IHN0cmluZ106IG51bWJlcn0ge1xuICAgIGNvbnN0IHZhbHVlUmFuZ2U6IG51bWJlciA9IHRoaXMudmlld09wdGlvbnMuY2VpbCAtIHRoaXMudmlld09wdGlvbnMuZmxvb3I7XG5cbiAgICBsZXQgaW5jcmVhc2VTdGVwOiBudW1iZXIgPSBjdXJyZW50VmFsdWUgKyB0aGlzLnZpZXdPcHRpb25zLnN0ZXA7XG4gICAgbGV0IGRlY3JlYXNlU3RlcDogbnVtYmVyID0gY3VycmVudFZhbHVlIC0gdGhpcy52aWV3T3B0aW9ucy5zdGVwO1xuICAgIGxldCBpbmNyZWFzZVBhZ2U6IG51bWJlciA9IGN1cnJlbnRWYWx1ZSArIHZhbHVlUmFuZ2UgLyAxMDtcbiAgICBsZXQgZGVjcmVhc2VQYWdlOiBudW1iZXIgPSBjdXJyZW50VmFsdWUgLSB2YWx1ZVJhbmdlIC8gMTA7XG5cbiAgICBpZiAodGhpcy52aWV3T3B0aW9ucy5yZXZlcnNlZENvbnRyb2xzKSB7XG4gICAgICBpbmNyZWFzZVN0ZXAgPSBjdXJyZW50VmFsdWUgLSB0aGlzLnZpZXdPcHRpb25zLnN0ZXA7XG4gICAgICBkZWNyZWFzZVN0ZXAgPSBjdXJyZW50VmFsdWUgKyB0aGlzLnZpZXdPcHRpb25zLnN0ZXA7XG4gICAgICBpbmNyZWFzZVBhZ2UgPSBjdXJyZW50VmFsdWUgLSB2YWx1ZVJhbmdlIC8gMTA7XG4gICAgICBkZWNyZWFzZVBhZ2UgPSBjdXJyZW50VmFsdWUgKyB2YWx1ZVJhbmdlIC8gMTA7XG4gICAgfVxuXG4gICAgLy8gTGVmdCB0byByaWdodCBkZWZhdWx0IGFjdGlvbnNcbiAgICBjb25zdCBhY3Rpb25zOiB7W2tleTogc3RyaW5nXTogbnVtYmVyfSA9IHtcbiAgICAgIFVQOiBpbmNyZWFzZVN0ZXAsXG4gICAgICBET1dOOiBkZWNyZWFzZVN0ZXAsXG4gICAgICBMRUZUOiBkZWNyZWFzZVN0ZXAsXG4gICAgICBSSUdIVDogaW5jcmVhc2VTdGVwLFxuICAgICAgUEFHRVVQOiBpbmNyZWFzZVBhZ2UsXG4gICAgICBQQUdFRE9XTjogZGVjcmVhc2VQYWdlLFxuICAgICAgSE9NRTogdGhpcy52aWV3T3B0aW9ucy5yZXZlcnNlZENvbnRyb2xzID8gdGhpcy52aWV3T3B0aW9ucy5jZWlsIDogdGhpcy52aWV3T3B0aW9ucy5mbG9vcixcbiAgICAgIEVORDogdGhpcy52aWV3T3B0aW9ucy5yZXZlcnNlZENvbnRyb2xzID8gdGhpcy52aWV3T3B0aW9ucy5mbG9vciA6IHRoaXMudmlld09wdGlvbnMuY2VpbCxcbiAgICB9O1xuICAgIC8vIHJpZ2h0IHRvIGxlZnQgbWVhbnMgc3dhcHBpbmcgcmlnaHQgYW5kIGxlZnQgYXJyb3dzXG4gICAgaWYgKHRoaXMudmlld09wdGlvbnMucmlnaHRUb0xlZnQpIHtcbiAgICAgIGFjdGlvbnMuTEVGVCA9IGluY3JlYXNlU3RlcDtcbiAgICAgIGFjdGlvbnMuUklHSFQgPSBkZWNyZWFzZVN0ZXA7XG4gICAgICAvLyByaWdodCB0byBsZWZ0IGFuZCB2ZXJ0aWNhbCBtZWFucyB3ZSBhbHNvIHN3YXAgdXAgYW5kIGRvd25cbiAgICAgIGlmICh0aGlzLnZpZXdPcHRpb25zLnZlcnRpY2FsKSB7XG4gICAgICAgIGFjdGlvbnMuVVAgPSBkZWNyZWFzZVN0ZXA7XG4gICAgICAgIGFjdGlvbnMuRE9XTiA9IGluY3JlYXNlU3RlcDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFjdGlvbnM7XG4gIH1cblxuICBwcml2YXRlIG9uS2V5Ym9hcmRFdmVudChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZTogbnVtYmVyID0gdGhpcy5nZXRDdXJyZW50VHJhY2tpbmdWYWx1ZSgpO1xuICAgIGNvbnN0IGtleUNvZGU6IG51bWJlciA9ICFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZChldmVudC5rZXlDb2RlKVxuICAgICAgPyBldmVudC5rZXlDb2RlXG4gICAgICA6IGV2ZW50LndoaWNoO1xuICAgIGNvbnN0IGtleXM6IHtba2V5Q29kZTogbnVtYmVyXTogc3RyaW5nfSA9IHtcbiAgICAgICAgMzg6ICdVUCcsXG4gICAgICAgIDQwOiAnRE9XTicsXG4gICAgICAgIDM3OiAnTEVGVCcsXG4gICAgICAgIDM5OiAnUklHSFQnLFxuICAgICAgICAzMzogJ1BBR0VVUCcsXG4gICAgICAgIDM0OiAnUEFHRURPV04nLFxuICAgICAgICAzNjogJ0hPTUUnLFxuICAgICAgICAzNTogJ0VORCcsXG4gICAgICB9O1xuICAgIGNvbnN0IGFjdGlvbnM6IHtba2V5OiBzdHJpbmddOiBudW1iZXJ9ID0gdGhpcy5nZXRLZXlBY3Rpb25zKGN1cnJlbnRWYWx1ZSk7XG4gICAgY29uc3Qga2V5OiBzdHJpbmcgPSBrZXlzW2tleUNvZGVdO1xuICAgIGNvbnN0IGFjdGlvbjogbnVtYmVyID0gYWN0aW9uc1trZXldO1xuXG4gICAgaWYgKFZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKGFjdGlvbikgfHwgVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5jdXJyZW50VHJhY2tpbmdQb2ludGVyKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKHRoaXMuZmlyc3RLZXlEb3duKSB7XG4gICAgICB0aGlzLmZpcnN0S2V5RG93biA9IGZhbHNlO1xuICAgICAgdGhpcy51c2VyQ2hhbmdlU3RhcnQuZW1pdCh0aGlzLmdldENoYW5nZUNvbnRleHQoKSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aW9uVmFsdWU6IG51bWJlciA9IE1hdGhIZWxwZXIuY2xhbXBUb1JhbmdlKGFjdGlvbiwgdGhpcy52aWV3T3B0aW9ucy5mbG9vciwgdGhpcy52aWV3T3B0aW9ucy5jZWlsKTtcbiAgICBjb25zdCBuZXdWYWx1ZTogbnVtYmVyID0gdGhpcy5yb3VuZFN0ZXAoYWN0aW9uVmFsdWUpO1xuICAgIGlmICghdGhpcy52aWV3T3B0aW9ucy5kcmFnZ2FibGVSYW5nZU9ubHkpIHtcbiAgICAgIHRoaXMucG9zaXRpb25UcmFja2luZ0hhbmRsZShuZXdWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRpZmZlcmVuY2U6IG51bWJlciA9IHRoaXMudmlld0hpZ2hWYWx1ZSAtIHRoaXMudmlld0xvd1ZhbHVlO1xuICAgICAgbGV0IG5ld01pblZhbHVlOiBudW1iZXI7XG4gICAgICBsZXQgbmV3TWF4VmFsdWU6IG51bWJlcjtcblxuICAgICAgaWYgKHRoaXMuY3VycmVudFRyYWNraW5nUG9pbnRlciA9PT0gUG9pbnRlclR5cGUuTWluKSB7XG4gICAgICAgIG5ld01pblZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIG5ld01heFZhbHVlID0gbmV3VmFsdWUgKyBkaWZmZXJlbmNlO1xuICAgICAgICBpZiAobmV3TWF4VmFsdWUgPiB0aGlzLnZpZXdPcHRpb25zLmNlaWwpIHtcbiAgICAgICAgICBuZXdNYXhWYWx1ZSA9IHRoaXMudmlld09wdGlvbnMuY2VpbDtcbiAgICAgICAgICBuZXdNaW5WYWx1ZSA9IG5ld01heFZhbHVlIC0gZGlmZmVyZW5jZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRUcmFja2luZ1BvaW50ZXIgPT09IFBvaW50ZXJUeXBlLk1heCkge1xuICAgICAgICBuZXdNYXhWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICBuZXdNaW5WYWx1ZSA9IG5ld1ZhbHVlIC0gZGlmZmVyZW5jZTtcbiAgICAgICAgaWYgKG5ld01pblZhbHVlIDwgdGhpcy52aWV3T3B0aW9ucy5mbG9vcikge1xuICAgICAgICAgIG5ld01pblZhbHVlID0gdGhpcy52aWV3T3B0aW9ucy5mbG9vcjtcbiAgICAgICAgICBuZXdNYXhWYWx1ZSA9IG5ld01pblZhbHVlICsgZGlmZmVyZW5jZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5wb3NpdGlvblRyYWNraW5nQmFyKG5ld01pblZhbHVlLCBuZXdNYXhWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gb25EcmFnU3RhcnQgZXZlbnQgaGFuZGxlciwgaGFuZGxlcyBkcmFnZ2luZyBvZiB0aGUgbWlkZGxlIGJhclxuICBwcml2YXRlIG9uRHJhZ1N0YXJ0KHBvaW50ZXJUeXBlOiBQb2ludGVyVHlwZSwgZXZlbnQ6IE1vdXNlRXZlbnR8VG91Y2hFdmVudCxcbiAgICBiaW5kTW92ZTogYm9vbGVhbiwgYmluZEVuZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IHBvc2l0aW9uOiBudW1iZXIgPSB0aGlzLmdldEV2ZW50UG9zaXRpb24oZXZlbnQpO1xuXG4gICAgdGhpcy5kcmFnZ2luZyA9IG5ldyBEcmFnZ2luZygpO1xuICAgIHRoaXMuZHJhZ2dpbmcuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmRyYWdnaW5nLnZhbHVlID0gdGhpcy5wb3NpdGlvblRvVmFsdWUocG9zaXRpb24pO1xuICAgIHRoaXMuZHJhZ2dpbmcuZGlmZmVyZW5jZSA9IHRoaXMudmlld0hpZ2hWYWx1ZSAtIHRoaXMudmlld0xvd1ZhbHVlO1xuICAgIHRoaXMuZHJhZ2dpbmcubG93TGltaXQgPSB0aGlzLnZpZXdPcHRpb25zLnJpZ2h0VG9MZWZ0XG4gICAgICAgID8gdGhpcy5taW5IYW5kbGVFbGVtZW50LnBvc2l0aW9uIC0gcG9zaXRpb25cbiAgICAgICAgOiBwb3NpdGlvbiAtIHRoaXMubWluSGFuZGxlRWxlbWVudC5wb3NpdGlvbjtcbiAgICB0aGlzLmRyYWdnaW5nLmhpZ2hMaW1pdCA9IHRoaXMudmlld09wdGlvbnMucmlnaHRUb0xlZnRcbiAgICAgICAgPyBwb3NpdGlvbiAtIHRoaXMubWF4SGFuZGxlRWxlbWVudC5wb3NpdGlvblxuICAgICAgICA6IHRoaXMubWF4SGFuZGxlRWxlbWVudC5wb3NpdGlvbiAtIHBvc2l0aW9uO1xuXG4gICAgdGhpcy5vblN0YXJ0KHBvaW50ZXJUeXBlLCBldmVudCwgYmluZE1vdmUsIGJpbmRFbmQpO1xuICB9XG5cbiAgLyoqIEdldCBtaW4gdmFsdWUgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIG5ld1BvcyBpcyBvdXRPZkJvdW5kcyBhYm92ZSBvciBiZWxvdyB0aGUgYmFyIGFuZCByaWdodFRvTGVmdCAqL1xuICBwcml2YXRlIGdldE1pblZhbHVlKG5ld1BvczogbnVtYmVyLCBvdXRPZkJvdW5kczogYm9vbGVhbiwgaXNBYm92ZTogYm9vbGVhbik6IG51bWJlciB7XG4gICAgY29uc3QgaXNSVEw6IGJvb2xlYW4gPSB0aGlzLnZpZXdPcHRpb25zLnJpZ2h0VG9MZWZ0O1xuICAgIGxldCB2YWx1ZTogbnVtYmVyID0gbnVsbDtcblxuICAgIGlmIChvdXRPZkJvdW5kcykge1xuICAgICAgaWYgKGlzQWJvdmUpIHtcbiAgICAgICAgdmFsdWUgPSBpc1JUTFxuICAgICAgICAgID8gdGhpcy52aWV3T3B0aW9ucy5mbG9vclxuICAgICAgICAgIDogdGhpcy52aWV3T3B0aW9ucy5jZWlsIC0gdGhpcy5kcmFnZ2luZy5kaWZmZXJlbmNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBpc1JUTFxuICAgICAgICAgID8gdGhpcy52aWV3T3B0aW9ucy5jZWlsIC0gdGhpcy5kcmFnZ2luZy5kaWZmZXJlbmNlXG4gICAgICAgICAgOiB0aGlzLnZpZXdPcHRpb25zLmZsb29yO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IGlzUlRMXG4gICAgICAgID8gdGhpcy5wb3NpdGlvblRvVmFsdWUobmV3UG9zICsgdGhpcy5kcmFnZ2luZy5sb3dMaW1pdClcbiAgICAgICAgOiB0aGlzLnBvc2l0aW9uVG9WYWx1ZShuZXdQb3MgLSB0aGlzLmRyYWdnaW5nLmxvd0xpbWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucm91bmRTdGVwKHZhbHVlKTtcbiAgfVxuXG4gIC8qKiBHZXQgbWF4IHZhbHVlIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBuZXdQb3MgaXMgb3V0T2ZCb3VuZHMgYWJvdmUgb3IgYmVsb3cgdGhlIGJhciBhbmQgcmlnaHRUb0xlZnQgKi9cbiAgcHJpdmF0ZSBnZXRNYXhWYWx1ZShuZXdQb3M6IG51bWJlciwgb3V0T2ZCb3VuZHM6IGJvb2xlYW4sIGlzQWJvdmU6IGJvb2xlYW4pOiBudW1iZXIge1xuICAgIGNvbnN0IGlzUlRMOiBib29sZWFuID0gdGhpcy52aWV3T3B0aW9ucy5yaWdodFRvTGVmdDtcbiAgICBsZXQgdmFsdWU6IG51bWJlciA9IG51bGw7XG5cbiAgICBpZiAob3V0T2ZCb3VuZHMpIHtcbiAgICAgIGlmIChpc0Fib3ZlKSB7XG4gICAgICAgIHZhbHVlID0gaXNSVExcbiAgICAgICAgICA/IHRoaXMudmlld09wdGlvbnMuZmxvb3IgKyB0aGlzLmRyYWdnaW5nLmRpZmZlcmVuY2VcbiAgICAgICAgICA6IHRoaXMudmlld09wdGlvbnMuY2VpbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gaXNSVExcbiAgICAgICAgICA/IHRoaXMudmlld09wdGlvbnMuY2VpbFxuICAgICAgICAgIDogdGhpcy52aWV3T3B0aW9ucy5mbG9vciArIHRoaXMuZHJhZ2dpbmcuZGlmZmVyZW5jZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlzUlRMKSB7XG4gICAgICAgIHZhbHVlID1cbiAgICAgICAgICB0aGlzLnBvc2l0aW9uVG9WYWx1ZShuZXdQb3MgKyB0aGlzLmRyYWdnaW5nLmxvd0xpbWl0KSArXG4gICAgICAgICAgdGhpcy5kcmFnZ2luZy5kaWZmZXJlbmNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPVxuICAgICAgICAgIHRoaXMucG9zaXRpb25Ub1ZhbHVlKG5ld1BvcyAtIHRoaXMuZHJhZ2dpbmcubG93TGltaXQpICtcbiAgICAgICAgICB0aGlzLmRyYWdnaW5nLmRpZmZlcmVuY2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucm91bmRTdGVwKHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgb25EcmFnTW92ZShldmVudD86IE1vdXNlRXZlbnR8VG91Y2hFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IG5ld1BvczogbnVtYmVyID0gdGhpcy5nZXRFdmVudFBvc2l0aW9uKGV2ZW50KTtcblxuICAgIGlmICh0aGlzLnZpZXdPcHRpb25zLmFuaW1hdGUgJiYgIXRoaXMudmlld09wdGlvbnMuYW5pbWF0ZU9uTW92ZSkge1xuICAgICAgaWYgKHRoaXMubW92aW5nKSB7XG4gICAgICAgIHRoaXMuc2xpZGVyRWxlbWVudEFuaW1hdGVDbGFzcyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcblxuICAgIGxldCBjZWlsTGltaXQ6IG51bWJlcixcbiAgICAgICAgZmxvb3JMaW1pdDogbnVtYmVyLFxuICAgICAgICBmbG9vckhhbmRsZUVsZW1lbnQ6IFNsaWRlckhhbmRsZURpcmVjdGl2ZSxcbiAgICAgICAgY2VpbEhhbmRsZUVsZW1lbnQ6IFNsaWRlckhhbmRsZURpcmVjdGl2ZTtcbiAgICBpZiAodGhpcy52aWV3T3B0aW9ucy5yaWdodFRvTGVmdCkge1xuICAgICAgY2VpbExpbWl0ID0gdGhpcy5kcmFnZ2luZy5sb3dMaW1pdDtcbiAgICAgIGZsb29yTGltaXQgPSB0aGlzLmRyYWdnaW5nLmhpZ2hMaW1pdDtcbiAgICAgIGZsb29ySGFuZGxlRWxlbWVudCA9IHRoaXMubWF4SGFuZGxlRWxlbWVudDtcbiAgICAgIGNlaWxIYW5kbGVFbGVtZW50ID0gdGhpcy5taW5IYW5kbGVFbGVtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBjZWlsTGltaXQgPSB0aGlzLmRyYWdnaW5nLmhpZ2hMaW1pdDtcbiAgICAgIGZsb29yTGltaXQgPSB0aGlzLmRyYWdnaW5nLmxvd0xpbWl0O1xuICAgICAgZmxvb3JIYW5kbGVFbGVtZW50ID0gdGhpcy5taW5IYW5kbGVFbGVtZW50O1xuICAgICAgY2VpbEhhbmRsZUVsZW1lbnQgPSB0aGlzLm1heEhhbmRsZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgaXNVbmRlckZsb29yTGltaXQ6IGJvb2xlYW4gPSAobmV3UG9zIDw9IGZsb29yTGltaXQpO1xuICAgIGNvbnN0IGlzT3ZlckNlaWxMaW1pdDogYm9vbGVhbiA9IChuZXdQb3MgPj0gdGhpcy5tYXhIYW5kbGVQb3NpdGlvbiAtIGNlaWxMaW1pdCk7XG5cbiAgICBsZXQgbmV3TWluVmFsdWU6IG51bWJlcjtcbiAgICBsZXQgbmV3TWF4VmFsdWU6IG51bWJlcjtcbiAgICBpZiAoaXNVbmRlckZsb29yTGltaXQpIHtcbiAgICAgIGlmIChmbG9vckhhbmRsZUVsZW1lbnQucG9zaXRpb24gPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbmV3TWluVmFsdWUgPSB0aGlzLmdldE1pblZhbHVlKG5ld1BvcywgdHJ1ZSwgZmFsc2UpO1xuICAgICAgbmV3TWF4VmFsdWUgPSB0aGlzLmdldE1heFZhbHVlKG5ld1BvcywgdHJ1ZSwgZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAoaXNPdmVyQ2VpbExpbWl0KSB7XG4gICAgICBpZiAoY2VpbEhhbmRsZUVsZW1lbnQucG9zaXRpb24gPT09IHRoaXMubWF4SGFuZGxlUG9zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbmV3TWF4VmFsdWUgPSB0aGlzLmdldE1heFZhbHVlKG5ld1BvcywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICBuZXdNaW5WYWx1ZSA9IHRoaXMuZ2V0TWluVmFsdWUobmV3UG9zLCB0cnVlLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3TWluVmFsdWUgPSB0aGlzLmdldE1pblZhbHVlKG5ld1BvcywgZmFsc2UsIGZhbHNlKTtcbiAgICAgIG5ld01heFZhbHVlID0gdGhpcy5nZXRNYXhWYWx1ZShuZXdQb3MsIGZhbHNlLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgdGhpcy5wb3NpdGlvblRyYWNraW5nQmFyKG5ld01pblZhbHVlLCBuZXdNYXhWYWx1ZSk7XG4gIH1cblxuICAvLyBTZXQgdGhlIG5ldyB2YWx1ZSBhbmQgcG9zaXRpb24gZm9yIHRoZSBlbnRpcmUgYmFyXG4gIHByaXZhdGUgcG9zaXRpb25UcmFja2luZ0JhcihuZXdNaW5WYWx1ZTogbnVtYmVyLCBuZXdNYXhWYWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZpZXdPcHRpb25zLm1pbkxpbWl0KSAmJlxuICAgICAgICBuZXdNaW5WYWx1ZSA8IHRoaXMudmlld09wdGlvbnMubWluTGltaXQpIHtcbiAgICAgIG5ld01pblZhbHVlID0gdGhpcy52aWV3T3B0aW9ucy5taW5MaW1pdDtcbiAgICAgIG5ld01heFZhbHVlID0gTWF0aEhlbHBlci5yb3VuZFRvUHJlY2lzaW9uTGltaXQobmV3TWluVmFsdWUgKyB0aGlzLmRyYWdnaW5nLmRpZmZlcmVuY2UsIHRoaXMudmlld09wdGlvbnMucHJlY2lzaW9uTGltaXQpO1xuICAgIH1cbiAgICBpZiAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudmlld09wdGlvbnMubWF4TGltaXQpICYmXG4gICAgICAgIG5ld01heFZhbHVlID4gdGhpcy52aWV3T3B0aW9ucy5tYXhMaW1pdCkge1xuICAgICAgbmV3TWF4VmFsdWUgPSB0aGlzLnZpZXdPcHRpb25zLm1heExpbWl0O1xuICAgICAgbmV3TWluVmFsdWUgPSBNYXRoSGVscGVyLnJvdW5kVG9QcmVjaXNpb25MaW1pdChuZXdNYXhWYWx1ZSAtIHRoaXMuZHJhZ2dpbmcuZGlmZmVyZW5jZSwgdGhpcy52aWV3T3B0aW9ucy5wcmVjaXNpb25MaW1pdCk7XG4gICAgfVxuXG4gICAgdGhpcy52aWV3TG93VmFsdWUgPSBuZXdNaW5WYWx1ZTtcbiAgICB0aGlzLnZpZXdIaWdoVmFsdWUgPSBuZXdNYXhWYWx1ZTtcbiAgICB0aGlzLmFwcGx5Vmlld0NoYW5nZSgpO1xuICAgIHRoaXMudXBkYXRlSGFuZGxlcyhQb2ludGVyVHlwZS5NaW4sIHRoaXMudmFsdWVUb1Bvc2l0aW9uKG5ld01pblZhbHVlKSk7XG4gICAgdGhpcy51cGRhdGVIYW5kbGVzKFBvaW50ZXJUeXBlLk1heCwgdGhpcy52YWx1ZVRvUG9zaXRpb24obmV3TWF4VmFsdWUpKTtcbiAgfVxuXG4gIC8vIFNldCB0aGUgbmV3IHZhbHVlIGFuZCBwb3NpdGlvbiB0byB0aGUgY3VycmVudCB0cmFja2luZyBoYW5kbGVcbiAgcHJpdmF0ZSBwb3NpdGlvblRyYWNraW5nSGFuZGxlKG5ld1ZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBuZXdWYWx1ZSA9IHRoaXMuYXBwbHlNaW5NYXhMaW1pdChuZXdWYWx1ZSk7XG4gICAgaWYgKHRoaXMucmFuZ2UpIHtcbiAgICAgIGlmICh0aGlzLnZpZXdPcHRpb25zLnB1c2hSYW5nZSkge1xuICAgICAgICBuZXdWYWx1ZSA9IHRoaXMuYXBwbHlQdXNoUmFuZ2UobmV3VmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMudmlld09wdGlvbnMubm9Td2l0Y2hpbmcpIHtcbiAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VHJhY2tpbmdQb2ludGVyID09PSBQb2ludGVyVHlwZS5NaW4gJiZcbiAgICAgICAgICAgICAgbmV3VmFsdWUgPiB0aGlzLnZpZXdIaWdoVmFsdWUpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gdGhpcy5hcHBseU1pbk1heFJhbmdlKHRoaXMudmlld0hpZ2hWYWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRUcmFja2luZ1BvaW50ZXIgPT09IFBvaW50ZXJUeXBlLk1heCAmJlxuICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPCB0aGlzLnZpZXdMb3dWYWx1ZSkge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSB0aGlzLmFwcGx5TWluTWF4UmFuZ2UodGhpcy52aWV3TG93VmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBuZXdWYWx1ZSA9IHRoaXMuYXBwbHlNaW5NYXhSYW5nZShuZXdWYWx1ZSk7XG4gICAgICAgIC8qIFRoaXMgaXMgdG8gY2hlY2sgaWYgd2UgbmVlZCB0byBzd2l0Y2ggdGhlIG1pbiBhbmQgbWF4IGhhbmRsZXMgKi9cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRyYWNraW5nUG9pbnRlciA9PT0gUG9pbnRlclR5cGUuTWluICYmIG5ld1ZhbHVlID4gdGhpcy52aWV3SGlnaFZhbHVlKSB7XG4gICAgICAgICAgdGhpcy52aWV3TG93VmFsdWUgPSB0aGlzLnZpZXdIaWdoVmFsdWU7XG4gICAgICAgICAgdGhpcy5hcHBseVZpZXdDaGFuZ2UoKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUhhbmRsZXMoUG9pbnRlclR5cGUuTWluLCB0aGlzLm1heEhhbmRsZUVsZW1lbnQucG9zaXRpb24pO1xuICAgICAgICAgIHRoaXMudXBkYXRlQXJpYUF0dHJpYnV0ZXMoKTtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRUcmFja2luZ1BvaW50ZXIgPSBQb2ludGVyVHlwZS5NYXg7XG4gICAgICAgICAgdGhpcy5taW5IYW5kbGVFbGVtZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMubWF4SGFuZGxlRWxlbWVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgIGlmICh0aGlzLnZpZXdPcHRpb25zLmtleWJvYXJkU3VwcG9ydCkge1xuICAgICAgICAgICAgdGhpcy5tYXhIYW5kbGVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudFRyYWNraW5nUG9pbnRlciA9PT0gUG9pbnRlclR5cGUuTWF4ICYmXG4gICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPCB0aGlzLnZpZXdMb3dWYWx1ZSkge1xuICAgICAgICAgIHRoaXMudmlld0hpZ2hWYWx1ZSA9IHRoaXMudmlld0xvd1ZhbHVlO1xuICAgICAgICAgIHRoaXMuYXBwbHlWaWV3Q2hhbmdlKCk7XG4gICAgICAgICAgdGhpcy51cGRhdGVIYW5kbGVzKFBvaW50ZXJUeXBlLk1heCwgdGhpcy5taW5IYW5kbGVFbGVtZW50LnBvc2l0aW9uKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUFyaWFBdHRyaWJ1dGVzKCk7XG4gICAgICAgICAgdGhpcy5jdXJyZW50VHJhY2tpbmdQb2ludGVyID0gUG9pbnRlclR5cGUuTWluO1xuICAgICAgICAgIHRoaXMubWF4SGFuZGxlRWxlbWVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLm1pbkhhbmRsZUVsZW1lbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICBpZiAodGhpcy52aWV3T3B0aW9ucy5rZXlib2FyZFN1cHBvcnQpIHtcbiAgICAgICAgICAgIHRoaXMubWluSGFuZGxlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmdldEN1cnJlbnRUcmFja2luZ1ZhbHVlKCkgIT09IG5ld1ZhbHVlKSB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50VHJhY2tpbmdQb2ludGVyID09PSBQb2ludGVyVHlwZS5NaW4pIHtcbiAgICAgICAgdGhpcy52aWV3TG93VmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgdGhpcy5hcHBseVZpZXdDaGFuZ2UoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50VHJhY2tpbmdQb2ludGVyID09PSBQb2ludGVyVHlwZS5NYXgpIHtcbiAgICAgICAgdGhpcy52aWV3SGlnaFZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIHRoaXMuYXBwbHlWaWV3Q2hhbmdlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZUhhbmRsZXModGhpcy5jdXJyZW50VHJhY2tpbmdQb2ludGVyLCB0aGlzLnZhbHVlVG9Qb3NpdGlvbihuZXdWYWx1ZSkpO1xuICAgICAgdGhpcy51cGRhdGVBcmlhQXR0cmlidXRlcygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXBwbHlNaW5NYXhMaW1pdChuZXdWYWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudmlld09wdGlvbnMubWluTGltaXQpICYmIG5ld1ZhbHVlIDwgdGhpcy52aWV3T3B0aW9ucy5taW5MaW1pdCkge1xuICAgICAgcmV0dXJuIHRoaXMudmlld09wdGlvbnMubWluTGltaXQ7XG4gICAgfVxuICAgIGlmICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy52aWV3T3B0aW9ucy5tYXhMaW1pdCkgJiYgbmV3VmFsdWUgPiB0aGlzLnZpZXdPcHRpb25zLm1heExpbWl0KSB7XG4gICAgICByZXR1cm4gdGhpcy52aWV3T3B0aW9ucy5tYXhMaW1pdDtcbiAgICB9XG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBhcHBseU1pbk1heFJhbmdlKG5ld1ZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IG9wcG9zaXRlVmFsdWU6IG51bWJlciA9ICh0aGlzLmN1cnJlbnRUcmFja2luZ1BvaW50ZXIgPT09IFBvaW50ZXJUeXBlLk1pbilcbiAgICAgID8gdGhpcy52aWV3SGlnaFZhbHVlXG4gICAgICA6IHRoaXMudmlld0xvd1ZhbHVlO1xuICAgIGNvbnN0IGRpZmZlcmVuY2U6IG51bWJlciA9IE1hdGguYWJzKG5ld1ZhbHVlIC0gb3Bwb3NpdGVWYWx1ZSk7XG4gICAgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZpZXdPcHRpb25zLm1pblJhbmdlKSkge1xuICAgICAgaWYgKGRpZmZlcmVuY2UgPCB0aGlzLnZpZXdPcHRpb25zLm1pblJhbmdlKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUcmFja2luZ1BvaW50ZXIgPT09IFBvaW50ZXJUeXBlLk1pbikge1xuICAgICAgICAgIHJldHVybiBNYXRoSGVscGVyLnJvdW5kVG9QcmVjaXNpb25MaW1pdCh0aGlzLnZpZXdIaWdoVmFsdWUgLSB0aGlzLnZpZXdPcHRpb25zLm1pblJhbmdlLCB0aGlzLnZpZXdPcHRpb25zLnByZWNpc2lvbkxpbWl0KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRUcmFja2luZ1BvaW50ZXIgPT09IFBvaW50ZXJUeXBlLk1heCkge1xuICAgICAgICAgIHJldHVybiBNYXRoSGVscGVyLnJvdW5kVG9QcmVjaXNpb25MaW1pdCh0aGlzLnZpZXdMb3dWYWx1ZSArIHRoaXMudmlld09wdGlvbnMubWluUmFuZ2UsIHRoaXMudmlld09wdGlvbnMucHJlY2lzaW9uTGltaXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy52aWV3T3B0aW9ucy5tYXhSYW5nZSkpIHtcbiAgICAgIGlmIChkaWZmZXJlbmNlID4gdGhpcy52aWV3T3B0aW9ucy5tYXhSYW5nZSkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50VHJhY2tpbmdQb2ludGVyID09PSBQb2ludGVyVHlwZS5NaW4pIHtcbiAgICAgICAgICByZXR1cm4gTWF0aEhlbHBlci5yb3VuZFRvUHJlY2lzaW9uTGltaXQodGhpcy52aWV3SGlnaFZhbHVlIC0gdGhpcy52aWV3T3B0aW9ucy5tYXhSYW5nZSwgdGhpcy52aWV3T3B0aW9ucy5wcmVjaXNpb25MaW1pdCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50VHJhY2tpbmdQb2ludGVyID09PSBQb2ludGVyVHlwZS5NYXgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aEhlbHBlci5yb3VuZFRvUHJlY2lzaW9uTGltaXQodGhpcy52aWV3TG93VmFsdWUgKyB0aGlzLnZpZXdPcHRpb25zLm1heFJhbmdlLCB0aGlzLnZpZXdPcHRpb25zLnByZWNpc2lvbkxpbWl0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3VmFsdWU7XG4gIH1cblxuICBwcml2YXRlIGFwcGx5UHVzaFJhbmdlKG5ld1ZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IGRpZmZlcmVuY2U6IG51bWJlciA9ICh0aGlzLmN1cnJlbnRUcmFja2luZ1BvaW50ZXIgPT09IFBvaW50ZXJUeXBlLk1pbilcbiAgICAgICAgICA/IHRoaXMudmlld0hpZ2hWYWx1ZSAtIG5ld1ZhbHVlXG4gICAgICAgICAgOiBuZXdWYWx1ZSAtIHRoaXMudmlld0xvd1ZhbHVlO1xuICAgIGNvbnN0IG1pblJhbmdlOiBudW1iZXIgPSAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudmlld09wdGlvbnMubWluUmFuZ2UpKVxuICAgICAgICAgID8gdGhpcy52aWV3T3B0aW9ucy5taW5SYW5nZVxuICAgICAgICAgIDogdGhpcy52aWV3T3B0aW9ucy5zdGVwO1xuICAgIGNvbnN0IG1heFJhbmdlOiBudW1iZXIgPSB0aGlzLnZpZXdPcHRpb25zLm1heFJhbmdlO1xuICAgIC8vIGlmIHNtYWxsZXIgdGhhbiBtaW5SYW5nZVxuICAgIGlmIChkaWZmZXJlbmNlIDwgbWluUmFuZ2UpIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRUcmFja2luZ1BvaW50ZXIgPT09IFBvaW50ZXJUeXBlLk1pbikge1xuICAgICAgICB0aGlzLnZpZXdIaWdoVmFsdWUgPSBNYXRoSGVscGVyLnJvdW5kVG9QcmVjaXNpb25MaW1pdChcbiAgICAgICAgICBNYXRoLm1pbihuZXdWYWx1ZSArIG1pblJhbmdlLCB0aGlzLnZpZXdPcHRpb25zLmNlaWwpLCB0aGlzLnZpZXdPcHRpb25zLnByZWNpc2lvbkxpbWl0KTtcbiAgICAgICAgbmV3VmFsdWUgPSBNYXRoSGVscGVyLnJvdW5kVG9QcmVjaXNpb25MaW1pdCh0aGlzLnZpZXdIaWdoVmFsdWUgLSBtaW5SYW5nZSwgdGhpcy52aWV3T3B0aW9ucy5wcmVjaXNpb25MaW1pdCk7XG4gICAgICAgIHRoaXMuYXBwbHlWaWV3Q2hhbmdlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlSGFuZGxlcyhQb2ludGVyVHlwZS5NYXgsIHRoaXMudmFsdWVUb1Bvc2l0aW9uKHRoaXMudmlld0hpZ2hWYWx1ZSkpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRUcmFja2luZ1BvaW50ZXIgPT09IFBvaW50ZXJUeXBlLk1heCkge1xuICAgICAgICB0aGlzLnZpZXdMb3dWYWx1ZSA9IE1hdGhIZWxwZXIucm91bmRUb1ByZWNpc2lvbkxpbWl0KFxuICAgICAgICAgIE1hdGgubWF4KG5ld1ZhbHVlIC0gbWluUmFuZ2UsIHRoaXMudmlld09wdGlvbnMuZmxvb3IpLCB0aGlzLnZpZXdPcHRpb25zLnByZWNpc2lvbkxpbWl0KTtcbiAgICAgICAgbmV3VmFsdWUgPSBNYXRoSGVscGVyLnJvdW5kVG9QcmVjaXNpb25MaW1pdCh0aGlzLnZpZXdMb3dWYWx1ZSArIG1pblJhbmdlLCB0aGlzLnZpZXdPcHRpb25zLnByZWNpc2lvbkxpbWl0KTtcbiAgICAgICAgdGhpcy5hcHBseVZpZXdDaGFuZ2UoKTtcbiAgICAgICAgdGhpcy51cGRhdGVIYW5kbGVzKFBvaW50ZXJUeXBlLk1pbiwgdGhpcy52YWx1ZVRvUG9zaXRpb24odGhpcy52aWV3TG93VmFsdWUpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlQXJpYUF0dHJpYnV0ZXMoKTtcbiAgICB9IGVsc2UgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZChtYXhSYW5nZSkgJiYgZGlmZmVyZW5jZSA+IG1heFJhbmdlKSB7XG4gICAgICAvLyBpZiBncmVhdGVyIHRoYW4gbWF4UmFuZ2VcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRUcmFja2luZ1BvaW50ZXIgPT09IFBvaW50ZXJUeXBlLk1pbikge1xuICAgICAgICB0aGlzLnZpZXdIaWdoVmFsdWUgPSBNYXRoSGVscGVyLnJvdW5kVG9QcmVjaXNpb25MaW1pdChuZXdWYWx1ZSArIG1heFJhbmdlLCB0aGlzLnZpZXdPcHRpb25zLnByZWNpc2lvbkxpbWl0KTtcbiAgICAgICAgdGhpcy5hcHBseVZpZXdDaGFuZ2UoKTtcbiAgICAgICAgdGhpcy51cGRhdGVIYW5kbGVzKFBvaW50ZXJUeXBlLk1heCwgdGhpcy52YWx1ZVRvUG9zaXRpb24odGhpcy52aWV3SGlnaFZhbHVlKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRUcmFja2luZ1BvaW50ZXIgPT09IFBvaW50ZXJUeXBlLk1heCkge1xuICAgICAgICB0aGlzLnZpZXdMb3dWYWx1ZSA9IE1hdGhIZWxwZXIucm91bmRUb1ByZWNpc2lvbkxpbWl0KG5ld1ZhbHVlIC0gbWF4UmFuZ2UsIHRoaXMudmlld09wdGlvbnMucHJlY2lzaW9uTGltaXQpO1xuICAgICAgICB0aGlzLmFwcGx5Vmlld0NoYW5nZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUhhbmRsZXMoUG9pbnRlclR5cGUuTWluLCB0aGlzLnZhbHVlVG9Qb3NpdGlvbih0aGlzLnZpZXdMb3dWYWx1ZSkpO1xuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGVBcmlhQXR0cmlidXRlcygpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3VmFsdWU7XG4gIH1cblxuICBwcml2YXRlIGdldENoYW5nZUNvbnRleHQoKTogQ2hhbmdlQ29udGV4dCB7XG4gICAgY29uc3QgY2hhbmdlQ29udGV4dDogQ2hhbmdlQ29udGV4dCA9IG5ldyBDaGFuZ2VDb250ZXh0KCk7XG4gICAgY2hhbmdlQ29udGV4dC5wb2ludGVyVHlwZSA9IHRoaXMuY3VycmVudFRyYWNraW5nUG9pbnRlcjtcbiAgICBjaGFuZ2VDb250ZXh0LnZhbHVlID0gK3RoaXMudmFsdWU7XG4gICAgaWYgKHRoaXMucmFuZ2UpIHtcbiAgICAgIGNoYW5nZUNvbnRleHQuaGlnaFZhbHVlID0gK3RoaXMuaGlnaFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gY2hhbmdlQ29udGV4dDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXNsaWRlci10b29sdGlwLXdyYXBwZXInLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgKm5nSWY9XCJ0ZW1wbGF0ZVwiPlxuICA8bmctdGVtcGxhdGUgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZTsgY29udGV4dDoge3Rvb2x0aXA6IHRvb2x0aXAsIHBsYWNlbWVudDogcGxhY2VtZW50LCBjb250ZW50OiBjb250ZW50fVwiPjwvbmctdGVtcGxhdGU+XG48L25nLWNvbnRhaW5lcj5cblxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF0ZW1wbGF0ZVwiPlxuICA8ZGl2IGNsYXNzPVwibmd4LXNsaWRlci1pbm5lci10b29sdGlwXCIgW2F0dHIudGl0bGVdPVwidG9vbHRpcFwiIFthdHRyLmRhdGEtdG9vbHRpcC1wbGFjZW1lbnRdPVwicGxhY2VtZW50XCI+XG4gICAge3tjb250ZW50fX1cbiAgPC9kaXY+XG48L25nLWNvbnRhaW5lcj5gLFxuICBzdHlsZXM6IFtgLm5neC1zbGlkZXItaW5uZXItdG9vbHRpcHtoZWlnaHQ6MTAwJX1gXVxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwV3JhcHBlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHRvb2x0aXA6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBwbGFjZW1lbnQ6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBjb250ZW50OiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFNsaWRlckNvbXBvbmVudCB9IGZyb20gJy4vc2xpZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTbGlkZXJFbGVtZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9zbGlkZXItZWxlbWVudC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU2xpZGVySGFuZGxlRGlyZWN0aXZlIH0gZnJvbSAnLi9zbGlkZXItaGFuZGxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTbGlkZXJMYWJlbERpcmVjdGl2ZSB9IGZyb20gJy4vc2xpZGVyLWxhYmVsLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUb29sdGlwV3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbHRpcC13cmFwcGVyLmNvbXBvbmVudCc7XG5cbi8qKlxuICogTmd4U2xpZGVyIG1vZHVsZVxuICpcbiAqIFRoZSBtb2R1bGUgZXhwb3J0cyB0aGUgc2xpZGVyIGNvbXBvbmVudFxuICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFNsaWRlckNvbXBvbmVudCxcbiAgICBTbGlkZXJFbGVtZW50RGlyZWN0aXZlLFxuICAgIFNsaWRlckhhbmRsZURpcmVjdGl2ZSxcbiAgICBTbGlkZXJMYWJlbERpcmVjdGl2ZSxcbiAgICBUb29sdGlwV3JhcHBlckNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgU2xpZGVyQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4U2xpZGVyTW9kdWxlIHsgfVxuIl19

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ "oo/y");
/* harmony import */ var _ionic_native_taptic_engine_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/taptic-engine/ngx */ "GGhZ");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../app.component */ "Sy1n");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../services/storage.service */ "n90K");








let HomePage = class HomePage {
    constructor(vibration, taptic, appComponent, storageService) {
        this.vibration = vibration;
        this.taptic = taptic;
        this.appComponent = appComponent;
        this.storageService = storageService;
        this.value = 0;
        this.options = {
            floor: 0,
            ceil: 7,
            vertical: true,
            showTicks: false,
            animateOnMove: true,
            animate: true,
            hidePointerLabels: true,
            hideLimitLabels: true,
            showSelectionBar: true,
            maxLimit: 4
        };
        this.svgOpacity = '0.1';
        this.bottomPosition = 7;
        this.luckImg = "/assets/ModeIcons/Dark/padlock.png";
        this.luckImgLight = "/assets/ModeIcons/Light/padlockIcon.png";
        this.luckEmiter = false;
        this.holdUnlock = "/assets/ModeIcons/Dark/holdToUnLock.png";
    }
    ngOnInit() {
        document.querySelector('.bottom__navigate__container').style.display = 'flex';
        setTimeout(() => {
            document.querySelector('.bottom__navigate__container').style.opacity = '1';
        }, 300);
    }
    ;
    sliderEvent() {
        if (this.value > 3 && !this.appComponent.pay) {
            this.appComponent.presentModal();
            this.value = 3;
        }
    }
    ;
    valueChange() {
    }
    vibroPower(id) {
        if (id > 1 && !this.appComponent.pay) {
            this.appComponent.presentModal();
        }
    }
    luckEvent(e) {
        if (!this.luckEmiter) {
            document.querySelector('.bottom__navigate__disabled').style.display = 'flex';
            document.querySelector('.bottom__navigate').style.display = 'none';
            this.luckImg = "/assets/ModeIcons/Dark/luckClose.png";
            this.luckEmiter = true;
        }
    }
    onPress($event) {
        setTimeout(() => {
            this.luckEmiter = false;
            this.luckImg = "/assets/ModeIcons/Dark/padlock.png";
            document.querySelector('.bottom__navigate__disabled').style.display = 'none';
            document.querySelector('.bottom__navigate').style.display = 'flex';
        }, 500);
    }
    eventVip() {
        this.appComponent.presentModal();
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_4__["Vibration"] },
    { type: _ionic_native_taptic_engine_ngx__WEBPACK_IMPORTED_MODULE_5__["TapticEngine"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map