(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-grid-list cols=\"3\" rowHeight=\"4em\">\n    <mat-grid-tile [routerLink]=\"['/landing']\" [rowspan]=\"3\" [colspan]=\"3\">\n        <img  src=\"../assets/giro_logo_big.png\">\n    </mat-grid-tile>\n\n    <mat-grid-tile rowHeight=\"3em\" [colspan]=\"3\">\n      <p>Giro d'Iseo Web Application</p>\n    </mat-grid-tile>\n\n    <mat-grid-tile rowHeight=\"3em\" [colspan]=\"3\">\n      <p><small>Virsion 0.0.1.2+</small></p>\n    </mat-grid-tile>\n\n    <mat-grid-tile rowHeight=\"3em\" [colspan]=\"3\">\n      <p><small>Copyright REGA Risk Sharing (C) 2019</small></p>\n    </mat-grid-tile>\n    \n</mat-grid-list>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tags_tags_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tags/tags.component */ "./src/app/tags/tags.component.ts");
/* harmony import */ var _tag_detail_tag_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tag-detail/tag-detail.component */ "./src/app/tag-detail/tag-detail.component.ts");
/* harmony import */ var _tag_registration_tag_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tag-registration/tag-registration.component */ "./src/app/tag-registration/tag-registration.component.ts");
/* harmony import */ var _tag_reg_sms_tag_reg_sms_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tag-reg-sms/tag-reg-sms.component */ "./src/app/tag-reg-sms/tag-reg-sms.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _sms_confirmation_sms_confirmation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sms-confirmation/sms-confirmation.component */ "./src/app/sms-confirmation/sms-confirmation.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _profile_update_profile_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile-update/profile-update.component */ "./src/app/profile-update/profile-update.component.ts");
/* harmony import */ var _ride_ride_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ride/ride.component */ "./src/app/ride/ride.component.ts");
/* harmony import */ var _ride_detail_ride_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ride-detail/ride-detail.component */ "./src/app/ride-detail/ride-detail.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _getstarted_getstarted_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./getstarted/getstarted.component */ "./src/app/getstarted/getstarted.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: 'landing', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"] },
    { path: 'tags', component: _tags_tags_component__WEBPACK_IMPORTED_MODULE_2__["TagsComponent"] },
    { path: 'reg', component: _tag_registration_tag_registration_component__WEBPACK_IMPORTED_MODULE_4__["TagRegistrationComponent"] },
    { path: 'tag/:id', component: _tag_detail_tag_detail_component__WEBPACK_IMPORTED_MODULE_3__["TagDetailComponent"] },
    { path: 'regsms/:id/:mobile', component: _tag_reg_sms_tag_reg_sms_component__WEBPACK_IMPORTED_MODULE_5__["TagRegSmsComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'profile', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__["UserProfileComponent"] },
    { path: 'smsconfirm/:mobile', component: _sms_confirmation_sms_confirmation_component__WEBPACK_IMPORTED_MODULE_9__["SmsConfirmationComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"] },
    { path: 'update', component: _profile_update_profile_update_component__WEBPACK_IMPORTED_MODULE_11__["ProfileUpdateComponent"] },
    { path: 'ride', component: _ride_ride_component__WEBPACK_IMPORTED_MODULE_12__["RideComponent"] },
    { path: 'ride/:id', component: _ride_detail_ride_detail_component__WEBPACK_IMPORTED_MODULE_13__["RideDetailComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"] },
    { path: 'getstarted', component: _getstarted_getstarted_component__WEBPACK_IMPORTED_MODULE_15__["GetstartedComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-nav-bar></app-nav-bar>\n<router-outlet></router-outlet>\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "Giro d'Iseo";
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _tags_tags_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tags/tags.component */ "./src/app/tags/tags.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _tag_detail_tag_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tag-detail/tag-detail.component */ "./src/app/tag-detail/tag-detail.component.ts");
/* harmony import */ var _tag_registration_tag_registration_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tag-registration/tag-registration.component */ "./src/app/tag-registration/tag-registration.component.ts");
/* harmony import */ var _tag_reg_sms_tag_reg_sms_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tag-reg-sms/tag-reg-sms.component */ "./src/app/tag-reg-sms/tag-reg-sms.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _sms_confirmation_sms_confirmation_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./sms-confirmation/sms-confirmation.component */ "./src/app/sms-confirmation/sms-confirmation.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _tag_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./tag.service */ "./src/app/tag.service.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _profile_update_profile_update_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./profile-update/profile-update.component */ "./src/app/profile-update/profile-update.component.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _rider_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./rider.service */ "./src/app/rider.service.ts");
/* harmony import */ var _ride_ride_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./ride/ride.component */ "./src/app/ride/ride.component.ts");
/* harmony import */ var _clock_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./clock.service */ "./src/app/clock.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _ride_detail_ride_detail_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./ride-detail/ride-detail.component */ "./src/app/ride-detail/ride-detail.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var ngx_gravatar__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ngx-gravatar */ "./node_modules/ngx-gravatar/fesm5/ngx-gravatar.js");
/* harmony import */ var _images_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./images.service */ "./src/app/images.service.ts");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _getstarted_getstarted_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./getstarted/getstarted.component */ "./src/app/getstarted/getstarted.component.ts");
/* harmony import */ var videogular2_core__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! videogular2/core */ "./node_modules/videogular2/core.js");
/* harmony import */ var videogular2_core__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(videogular2_core__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var videogular2_controls__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! videogular2/controls */ "./node_modules/videogular2/controls.js");
/* harmony import */ var videogular2_controls__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(videogular2_controls__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! videogular2/overlay-play */ "./node_modules/videogular2/overlay-play.js");
/* harmony import */ var videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var videogular2_buffering__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! videogular2/buffering */ "./node_modules/videogular2/buffering.js");
/* harmony import */ var videogular2_buffering__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(videogular2_buffering__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _tags_tags_component__WEBPACK_IMPORTED_MODULE_7__["TagsComponent"],
                _tag_detail_tag_detail_component__WEBPACK_IMPORTED_MODULE_17__["TagDetailComponent"],
                _tag_registration_tag_registration_component__WEBPACK_IMPORTED_MODULE_18__["TagRegistrationComponent"],
                _tag_reg_sms_tag_reg_sms_component__WEBPACK_IMPORTED_MODULE_19__["TagRegSmsComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_22__["NavBarComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_24__["LandingComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"],
                _sms_confirmation_sms_confirmation_component__WEBPACK_IMPORTED_MODULE_27__["SmsConfirmationComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_28__["UserProfileComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_32__["AboutComponent"],
                _profile_update_profile_update_component__WEBPACK_IMPORTED_MODULE_33__["ProfileUpdateComponent"],
                _ride_ride_component__WEBPACK_IMPORTED_MODULE_38__["RideComponent"],
                _ride_detail_ride_detail_component__WEBPACK_IMPORTED_MODULE_41__["RideDetailComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_42__["DashboardComponent"],
                _getstarted_getstarted_component__WEBPACK_IMPORTED_MODULE_46__["GetstartedComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorageModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_21__["AngularFireAuthModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__["MatGridListModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__["MatExpansionModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_36__["MatNativeDateModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_40__["MatTableModule"],
                ngx_gravatar__WEBPACK_IMPORTED_MODULE_43__["GravatarModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_45__["MatProgressBarModule"],
                videogular2_core__WEBPACK_IMPORTED_MODULE_47__["VgCoreModule"],
                videogular2_buffering__WEBPACK_IMPORTED_MODULE_50__["VgBufferingModule"],
                videogular2_controls__WEBPACK_IMPORTED_MODULE_48__["VgControlsModule"],
                videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_49__["VgOverlayPlayModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_51__["MatCardModule"]
            ],
            providers: [
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_21__["AngularFireAuthModule"],
                _auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"],
                _tag_service__WEBPACK_IMPORTED_MODULE_29__["TagService"],
                _angular_common__WEBPACK_IMPORTED_MODULE_31__["DatePipe"],
                _rider_service__WEBPACK_IMPORTED_MODULE_37__["RiderService"],
                _clock_service__WEBPACK_IMPORTED_MODULE_39__["ClockService"],
                _images_service__WEBPACK_IMPORTED_MODULE_44__["ImagesService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(_firebaseAuth, router) {
        var _this = this;
        this._firebaseAuth = _firebaseAuth;
        this.router = router;
        this.userDetails = null;
        this.user = _firebaseAuth.authState;
        this.user.subscribe(function (user) {
            if (user) {
                _this.userDetails = user;
                console.log("AuthService: constructor: userDetails:");
                console.log(_this.userDetails);
            }
            else {
                _this.userDetails = null;
            }
        });
    }
    AuthService.prototype.getUser = function () {
        return this.user;
    };
    AuthService.prototype.signInWithPhoneNumber = function (phoneNumber, appVerifier, cb) {
        var _this = this;
        this._firebaseAuth.auth.signInWithPhoneNumber(phoneNumber, appVerifier)
            .then(function (confirmationResult) {
            _this.confirmation = confirmationResult; // make a copy
            console.log("AuthService: signInWithPhoneNumber: confirmation object");
            console.log(_this.confirmation);
            cb(null, confirmationResult);
        })
            .catch(function (error) {
            console.error("AuthService: signInWithPhoneNumber: " + error);
            cb(error, null);
        });
    };
    AuthService.prototype.getConfirmation = function (code, cb) {
        var _this = this;
        if (!this.confirmation) {
            var errMsg = 'AuthSevice: error: the confirmationResult object is missing';
            console.error(errMsg);
            cb(errMsg, null);
        }
        else {
            // check confirmation
            this.confirmation.confirm(code)
                .then(function (result) { _this.user = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result.user); cb(null, result.user); })
                .catch(function (error) { return cb(error, null); });
        }
    };
    AuthService.prototype.authenticated = function () {
        if (this.userDetails == null) {
            return false;
        }
        else {
            return true;
        }
    };
    AuthService.prototype.getUID = function () {
        if (this.userDetails == null) {
            return null;
        }
        else {
            return this.userDetails.uid;
        }
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this._firebaseAuth.auth.signOut().then(function () {
            // Sign-out successful.
            console.log("AuthService: sing out");
            _this.router.navigate(['/']);
        }).catch(function (error) {
            console.error("AuthService: error: " + error);
        });
    };
    AuthService.prototype.getUserPhone = function () {
        if (!this.userDetails) {
            return null;
        }
        else {
            return this.userDetails.phoneNumber;
        }
    };
    AuthService.prototype.getUserName = function () {
        if (!this.userDetails) {
            return null;
        }
        else {
            return this.userDetails.displayName;
        }
    };
    AuthService.prototype.getUserEmail = function () {
        if (!this.userDetails) {
            return null;
        }
        else {
            return this.userDetails.email;
        }
    };
    AuthService.prototype.getUserPhotoURL = function () {
        if (!this.userDetails) {
            return null;
        }
        else {
            return this.userDetails.photoURL;
        }
    };
    AuthService.prototype.updateProfileCB = function (username, photoURL, cb) {
        var user = this._firebaseAuth.auth.currentUser;
        user.updateProfile({ displayName: username, photoURL: photoURL })
            .then(function () { return cb(null); })
            .catch(function (error) { return cb(error); });
    };
    AuthService.prototype.updateEmailCB = function (email, cb) {
        var user = this._firebaseAuth.auth.currentUser;
        user.updateEmail(email)
            .then(function () { return cb(null); })
            .catch(function (error) { return cb(error); });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/clock.service.ts":
/*!**********************************!*\
  !*** ./src/app/clock.service.ts ***!
  \**********************************/
/*! exports provided: ClockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockService", function() { return ClockService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClockService = /** @class */ (function () {
    function ClockService() {
        var _this = this;
        this.clock = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (obsever) {
            _this.timeoutId = setTimeout(function () {
                obsever.next(new Date);
                return { unsubscribe: function () {
                        clearTimeout(this.timeoutId);
                    } };
            }, 100);
        });
    }
    ClockService.prototype.getClock = function () {
        return this.clock;
    };
    ClockService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ClockService);
    return ClockService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n  }\n\n.mat-cell .mat-icon {\n    -webkit-transform: scale(0.6);\n            transform: scale(0.6);\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list  cols=\"3\" rowHeight=\"3em\">\n  <mat-grid-tile>\n    <button (click)=\"gotoBack()\" mat-icon-button>\n      <mat-icon>arrow_back_ios</mat-icon>\n    </button>\n  </mat-grid-tile>\n\n  <mat-grid-tile>\n    <h3>Dashboard</h3>\n  </mat-grid-tile>\n\n  <mat-grid-tile>\n    <button (click)=\"update()\" mat-icon-button>\n      <mat-icon>autorenew</mat-icon>\n    </button> \n  </mat-grid-tile>\n\n  <mat-grid-tile [rowspan]=\"2\" [colspan]=\"3\">      \n    Best ride time for all Giro d'Iseo riders\n  </mat-grid-tile>\n  \n</mat-grid-list>\n\n<div *ngIf=\"rides\">\n  <table *ngIf=\"rides.length>0\" mat-table [dataSource]=\"rides | slice:start:end\" class=\"mat-elevation-z8\">\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <th mat-header-cell *matHeaderCellDef> No. </th>\n      <td mat-cell *matCellDef=\"let element; let i = index;\"> {{i+1}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"avatar\">\n        <th mat-header-cell *matHeaderCellDef></th>\n        <td mat-cell *matCellDef=\"let element\"><img *ngIf=\"element.rider && element.rider.avatar\" ngxGravatar size=\"30\" [fallback]=\"'monsterid'\" [src]=\"element.rider.avatar\"></td>\n      </ng-container>\n\n    <ng-container matColumnDef=\"nikname\">\n      <th mat-header-cell *matHeaderCellDef> Rider </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.rider?element.rider.nikname:\"N/A\"}}</td>\n    </ng-container>\n    \n    <ng-container matColumnDef=\"date\">\n      <th mat-header-cell *matHeaderCellDef> Date </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.start|date:\"dd-MM-yyyy\"}}</td>\n    </ng-container>\n    \n    <ng-container matColumnDef=\"start\">\n      <th mat-header-cell *matHeaderCellDef> Start </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.start|date:\"HH:mm\"}}</td>\n    </ng-container>\n    \n    <ng-container matColumnDef=\"finish\">\n      <th mat-header-cell *matHeaderCellDef> Finish </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.finish|date:\"HH:mm:ss\"}}</td>\n    </ng-container>\n      \n    <ng-container matColumnDef=\"time\">\n      <th mat-header-cell *matHeaderCellDef> Time </th>\n      <td mat-cell *matCellDef=\"let element\"> {{(element.finish-element.start)|date:\"HH:mm:ss\":\"+00\"}} </td>\n    </ng-container>\n    \n    <ng-container matColumnDef=\"link\">\n      <th mat-header-cell *matHeaderCellDef> Details </th>\n      <td mat-cell *matCellDef=\"let element\"> <button (click)=\"gotoRide(element.id)\" mat-icon-button> <mat-icon>call_made</mat-icon></button> </td>\n    </ng-container>\n      \n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n  <br>\n      \n  <mat-paginator *ngIf=\"rides.length>0\" [length]=\"rides.length\"\n                [pageSize]=\"10\"\n                [pageSizeOptions]=\"[1, 5, 10, 25, 100]\"\n                (page)=\"setPage($event)\">\n  </mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tag_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tag.service */ "./src/app/tag.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _rider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rider.service */ "./src/app/rider.service.ts");
/* harmony import */ var _ride_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ride.service */ "./src/app/ride.service.ts");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../parameters */ "./src/app/parameters.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(zone, tagService, authService, route, router, riderService, rideService, datePipe, location, param) {
        this.zone = zone;
        this.tagService = tagService;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.riderService = riderService;
        this.rideService = rideService;
        this.datePipe = datePipe;
        this.location = location;
        this.param = param;
        this.displayedColumns = ['position', 'avatar', 'nikname', 'start', 'time', 'link'];
        console.log(this.param);
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.start = 0;
        this.end = 10;
        this.getRides();
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    DashboardComponent.prototype.setPage = function (e) {
        console.log(e);
        var pageIndex = e.pageIndex, pageSize = e.pageSize;
        this.start = pageIndex * pageSize;
        this.end = this.start + pageSize;
    };
    DashboardComponent.prototype.update = function () {
        this.rideService.setOrder('time');
    };
    DashboardComponent.prototype.gotoBack = function () {
        this.location.back();
    };
    DashboardComponent.prototype.getRides = function () {
        var _this = this;
        this.sub = this.rideService.getRides()
            .subscribe(function (rides) { return _this.rides = rides; });
    };
    DashboardComponent.prototype.gotoRide = function (id) {
        this.router.navigate(["/ride/" + id]);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")],
            providers: [_parameters__WEBPACK_IMPORTED_MODULE_7__["RideParameters"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _tag_service__WEBPACK_IMPORTED_MODULE_3__["TagService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _rider_service__WEBPACK_IMPORTED_MODULE_5__["RiderService"],
            _ride_service__WEBPACK_IMPORTED_MODULE_6__["RideService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _parameters__WEBPACK_IMPORTED_MODULE_7__["RideParameters"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/getstarted/getstarted.component.css":
/*!*****************************************************!*\
  !*** ./src/app/getstarted/getstarted.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".vg-player {\n    width: 400px;\n}"

/***/ }),

/***/ "./src/app/getstarted/getstarted.component.html":
/*!******************************************************!*\
  !*** ./src/app/getstarted/getstarted.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"3\" rowHeight=\"3em\">\n  \n  <mat-grid-tile>\n    <button (click)=\"gotoBack()\" mat-icon-button>\n      <mat-icon>arrow_back_ios</mat-icon>\n    </button>\n  </mat-grid-tile>\n\n  <mat-grid-tile>\n    <h3>Join Giro d'Iseo</h3>\n  </mat-grid-tile>\n  \n  <mat-grid-tile></mat-grid-tile>\n</mat-grid-list>\n\n<p>Ride around Iseo lake, earning points and use them to buy local goods and services with discounts.</p>\n\n<mat-grid-list cols=\"3\" rowHeight=\"3em\">\n    <mat-grid-tile [colspan]=\"3\">\n      <h3>To be a club meber</h3>\n    </mat-grid-tile>\n  </mat-grid-list>\n\n<mat-action-list>\n  <button mat-list-item [routerLink]=\"['/reg']\" > 1. Press here to register new tag &nbsp; <mat-icon>add_circle_outline</mat-icon></button>\n  <button mat-list-item [routerLink]=\"['/ride']\"> 2. Press here to start new ride &nbsp; &nbsp; &nbsp; <mat-icon>directions_bike</mat-icon></button>\n  <button mat-list-item [routerLink]=\"['/dashboard']\"> 3. Press here to view all results &nbsp; &nbsp; <mat-icon>dashboard</mat-icon> </button>\n</mat-action-list>\n"

/***/ }),

/***/ "./src/app/getstarted/getstarted.component.ts":
/*!****************************************************!*\
  !*** ./src/app/getstarted/getstarted.component.ts ***!
  \****************************************************/
/*! exports provided: GetstartedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetstartedComponent", function() { return GetstartedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetstartedComponent = /** @class */ (function () {
    function GetstartedComponent(location) {
        this.location = location;
    }
    GetstartedComponent.prototype.ngOnInit = function () {
    };
    GetstartedComponent.prototype.gotoBack = function () {
        this.location.back();
    };
    GetstartedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-getstarted',
            template: __webpack_require__(/*! ./getstarted.component.html */ "./src/app/getstarted/getstarted.component.html"),
            styles: [__webpack_require__(/*! ./getstarted.component.css */ "./src/app/getstarted/getstarted.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], GetstartedComponent);
    return GetstartedComponent;
}());



/***/ }),

/***/ "./src/app/images.service.ts":
/*!***********************************!*\
  !*** ./src/app/images.service.ts ***!
  \***********************************/
/*! exports provided: ImagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesService", function() { return ImagesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImagesService = /** @class */ (function () {
    function ImagesService(storage) {
        this.storage = storage;
    }
    ImagesService.prototype.uploadAvatar = function (id, avatar) {
        // create full path to the file with id as subdirectory
        var filePath = id + "/images/" + avatar.name;
        var ref = this.storage.ref(filePath);
        // upload and return task
        return this.storage.upload(filePath, avatar);
    };
    ImagesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"]])
    ], ImagesService);
    return ImagesService;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n    max-width: 380px;\n  }\n  \n  img {\n    max-height: 380px;\n  }\n  "

/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<mat-card class=\"example-card\">\n    <mat-card-header>\n      <mat-card-title>Fun, Wellness, Savings</mat-card-title>\n      <mat-card-subtitle>Ride around Iseo lake, earning points and use them to buy local goods and services with discounts.</mat-card-subtitle>\n    </mat-card-header>\n  \n        <img  [routerLink]=\"['/getstarted']\"mat-card-image src=\"../assets/girodiseo.jpg\" alt=\"Get Started\">\n\n    <mat-card-content>\n      <strong>Join the Giro d'Iseo to make the riding even more fun!</strong>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-raised-button [routerLink]=\"['/getstarted']\" color=\"warn\">Get started</button>\n      <button mat-raised-button [routerLink]=\"['/dashboard']\" color=\"primary\">See results</button>\n    </mat-card-actions>\n  </mat-card>\n  \n\n\n\n\n"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"3\" rowHeight=\"3em\">\n    <mat-grid-tile [colspan]=\"3\">\n      <h3>User login</h3>\n    </mat-grid-tile>\n    \n</mat-grid-list>\n\n<form class=\"example-form\">\n\n  <mat-grid-list cols=\"3\" rowHeight=\"3em\">\n\n    <mat-grid-tile [rowspan]=\"3\" [colspan]=\"3\">\n      <mat-form-field>\n        <input matInput name=\"mobile\" type=\"text\" placeholder=\"Enter mobile\" required minlenght=\"7\" [(ngModel)]=\"mobile\">\n        <mat-hint align=\"start\">Example: <strong>+16505551234</strong> </mat-hint>\n      </mat-form-field>\n    </mat-grid-tile>\n\n    <mat-grid-tile [colspan]=\"3\">\n      {{msg}}\n    </mat-grid-tile>\n\n    <mat-grid-tile>\n      <button mat-raised-button color=\"primary\" [disabled]=\"!mobile || progress\" (click)=\"login($event)\">Login</button>\n    </mat-grid-tile>\n\n    <mat-grid-tile>\n\n    </mat-grid-tile>\n\n    <mat-grid-tile>\n      <button mat-raised-button color=\"warn\" [disabled]=\"!mobile || progress\" (click)=\"clear()\">Clear</button>\n    </mat-grid-tile>\n  \n    <mat-grid-tile [colspan]=\"3\">\n    </mat-grid-tile>\n\n  </mat-grid-list>\n</form>\n\n<div id=\"recaptcha-container\"></div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tag_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tag.service */ "./src/app/tag.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(zone, tagService, authService, route, router) {
        this.zone = zone;
        this.tagService = tagService;
        this.authService = authService;
        this.route = route;
        this.router = router;
    }
    LoginComponent.prototype.ngAfterViewInit = function () {
        // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        // Add 'implements AfterViewInit' to the class.
        this.recaptchaVerifier = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].RecaptchaVerifier('recaptcha-container');
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.clear();
    };
    LoginComponent.prototype.clear = function () {
        this.mobile = null;
        this.msg = null;
        this.progress = false;
    };
    LoginComponent.prototype.login = function (e) {
        var _this = this;
        this.progress = true;
        e.preventDefault();
        e.stopPropagation();
        this.authService.signInWithPhoneNumber(this.mobile, this.recaptchaVerifier, function (error, confirmationResult) {
            if (error) {
                // Login error
                console.error("LoginComponent: login: " + error);
                _this.msg = error;
                _this.progress = false;
            }
            else {
                // I've got a confirmation object, lets go to the SMS confirmation screen
                // Need to use NgZone.run to go back to Angular zone exec env
                _this.zone.run(function () { return _this.router.navigate(["/smsconfirm/" + _this.mobile]); })
                    .then(function () { return console.log('LoginComponent: login: navigated to smsconfirm'); })
                    .catch(function (err) { return console.error(err); });
                console.log("Has confirmation for " + _this.mobile);
                console.log(confirmationResult);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _tag_service__WEBPACK_IMPORTED_MODULE_2__["TagService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <mat-grid-list cols=\"8\" rowHeight=\"3em\">\n    <mat-grid-tile (click)=\"gotoHome()\" [colspan]=\"3\">\n      <img  src=\"../assets/girologo.png\">&nbsp;&nbsp;<h3>Giro d'Iseo</h3>\n    </mat-grid-tile>\n   \n    <mat-grid-tile></mat-grid-tile>\n    \n    <mat-grid-tile (click)=\"gotoReg()\" [colspan]=\"2\"><small>{{nikname}}</small></mat-grid-tile>\n    <mat-grid-tile>\n        <button (click)=\"gotoReg()\" mat-icon-button>\n            <mat-icon>{{authenticated()?\"account_circle\":\"add_circle_outline\"}}</mat-icon>\n        </button>\n    </mat-grid-tile>\n    <mat-grid-tile>\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n            <mat-icon>more_vert</mat-icon>\n        </button>\n          <mat-menu #menu=\"matMenu\">\n            <button mat-menu-item (click)=\"gotoHome()\">Home</button>\n            <button mat-menu-item (click)=\"gotoRide()\">Ride</button>\n            <button mat-menu-item (click)=\"gotoDashboard()\">Dashboard</button>\n            <button mat-menu-item (click)=\"gotoTags()\">Tag list</button>\n            <button mat-menu-item (click)=\"gotoAbout()\">About</button>\n            <button (click)=\"logout()\" mat-menu-item>{{authenticated()?\"Logout\":\"Login\"}}</button>\n          </mat-menu>\n    </mat-grid-tile>\n  </mat-grid-list>\n  <mat-divider></mat-divider>\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rider.service */ "./src/app/rider.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(authService, router, riderService) {
        this.authService = authService;
        this.router = router;
        this.riderService = riderService;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user_subs = this.authService.getUser().subscribe(function (user) {
            if (user) {
                _this.mobile = user.phoneNumber;
                _this.getRider();
            }
            else {
                _this.mobile = null;
                _this.nikname = null;
            }
        });
        if (this.authService.authenticated()) {
            this.loginIcon = 'account_circle';
        }
        else {
            this.mobile = null;
            this.nikname = null;
            this.loginIcon = 'add_circle_outline';
        }
    };
    NavBarComponent.prototype.ngOnDestroy = function () {
        if (this.rider_subs) {
            this.rider_subs.unsubscribe();
        }
    };
    NavBarComponent.prototype.getRider = function () {
        var _this = this;
        this.rider_subs = this.riderService.getRiderByMobile(this.mobile)
            .subscribe(function (riders) {
            if (riders) {
                if (riders.length > 0) {
                    console.log('navbar');
                    console.log(riders[0]);
                    _this.rider = riders[0];
                    _this.nikname = _this.rider.nikname;
                }
            }
        });
    };
    NavBarComponent.prototype.authenticated = function () {
        return this.authService.authenticated();
    };
    NavBarComponent.prototype.logout = function () {
        if (this.authenticated()) {
            this.authService.logout();
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    NavBarComponent.prototype.gotoTags = function () {
        this.router.navigate(['/tags']);
    };
    NavBarComponent.prototype.gotoRide = function () {
        this.router.navigate(['/ride']);
    };
    NavBarComponent.prototype.gotoAbout = function () {
        this.router.navigate(['/about']);
    };
    NavBarComponent.prototype.gotoDashboard = function () {
        this.router.navigate(['/dashboard']);
    };
    NavBarComponent.prototype.gotoReg = function () {
        if (this.authenticated()) {
            this.router.navigate(['/profile']);
        }
        else {
            this.router.navigate(['/reg']);
        }
    };
    NavBarComponent.prototype.gotoHome = function () {
        this.router.navigate(['/']);
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _rider_service__WEBPACK_IMPORTED_MODULE_3__["RiderService"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/parameters.ts":
/*!*******************************!*\
  !*** ./src/app/parameters.ts ***!
  \*******************************/
/*! exports provided: RideParameters, Parameters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideParameters", function() { return RideParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parameters", function() { return Parameters; });
var RideParameters = /** @class */ (function () {
    function RideParameters() {
        this.mintime = 1000 * 6;
        this.maxtime = 1000 * 60 * 60 * 3;
    }
    return RideParameters;
}());

var Parameters = /** @class */ (function () {
    function Parameters() {
    }
    return Parameters;
}());



/***/ }),

/***/ "./src/app/profile-update/profile-update.component.css":
/*!*************************************************************!*\
  !*** ./src/app/profile-update/profile-update.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=\"file\"] {\n    display: none;\n}\n.custom-file-upload {\n        border: 1px solid #ccc;\n        display: inline-block;\n        padding: 6px 12px;\n        cursor: pointer;\n}\n.mat-progress-bar {\n    width: 50px;\n}"

/***/ }),

/***/ "./src/app/profile-update/profile-update.component.html":
/*!**************************************************************!*\
  !*** ./src/app/profile-update/profile-update.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"3\" rowHeight=\"3em\">\n    <mat-grid-tile [colspan]=\"3\">\n      <h3>Profile Update</h3>\n    </mat-grid-tile>\n    \n    <mat-grid-tile [colspan]=\"3\">\n        <label for=\"file-upload\">\n            <img ngxGravatar size=\"44\" [fallback]=\"'monsterid'\" [md5Hash]=\"hash\" [src]=\"avatarURL()\">\n          <input id=\"file-upload\" type=\"file\" (change)=\"handleFileInput($event.target.files)\"/>\n        </label>\n    </mat-grid-tile>\n\n    <mat-grid-tile>\n    </mat-grid-tile>\n\n    <mat-grid-tile>\n      <mat-progress-bar *ngIf=\"avatar\" mode=\"determinate\" value=\"uploadPercent | async\"></mat-progress-bar>\n    </mat-grid-tile>\n\n    <mat-grid-tile>\n        <mat-icon *ngIf=\"updates.avatar\">check_circle_outline</mat-icon>\n    </mat-grid-tile>\n    \n</mat-grid-list>\n\n<form class=\"example-form\">\n\n  <mat-grid-list cols=\"3\" rowHeight=\"3em\">\n\n    <mat-grid-tile [rowspan]=\"2\" [colspan]=\"2\">\n      <mat-form-field>\n        <input matInput name=\"username\" type=\"text\" placeholder=\"Enter name\" required [(ngModel)]=\"username\">\n        <mat-hint align=\"start\">Example: <strong>John Smith</strong> </mat-hint>\n      </mat-form-field>\n    </mat-grid-tile>\n\n    <mat-grid-tile [rowspan]=\"2\">\n      <mat-icon *ngIf=\"updates.username\">check_circle_outline</mat-icon>\n    </mat-grid-tile>\n\n    <mat-grid-tile [rowspan]=\"2\" [colspan]=\"2\">\n      <mat-form-field>\n        <input matInput name=\"email\" type=\"text\" placeholder=\"Enter email\" [(ngModel)]=\"email\">\n        <mat-hint align=\"start\">Example: <strong>smith.john@gmail.com</strong> </mat-hint>\n      </mat-form-field>\n    </mat-grid-tile>\n\n    <mat-grid-tile [rowspan]=\"2\">\n      <mat-icon *ngIf=\"updates.email\">check_circle_outline</mat-icon>\n    </mat-grid-tile>\n\n    <mat-grid-tile [rowspan]=\"2\" [colspan]=\"2\">\n        <mat-form-field>\n          <input matInput name=\"nikname\" type=\"text\" placeholder=\"Enter nikname\" [(ngModel)]=\"nikname\">\n          <mat-hint align=\"start\">Example: <strong>Colnago Rider</strong> </mat-hint>\n        </mat-form-field>\n      </mat-grid-tile>\n  \n      <mat-grid-tile [rowspan]=\"2\">\n        <mat-icon *ngIf=\"updates.nikname\">check_circle_outline</mat-icon>\n      </mat-grid-tile>\n\n    <mat-grid-tile [rowspan]=\"2\" [colspan]=\"3\">\n      {{msg}}\n    </mat-grid-tile>\n\n    <mat-grid-tile>\n        <button mat-raised-button color=\"primary\" [disabled]=\"!username || progress\" (click)=\"update($event)\">Update</button>\n    </mat-grid-tile>\n\n    <mat-grid-tile>\n\n    </mat-grid-tile>\n\n    <mat-grid-tile>\n        <button mat-raised-button color=\"warn\" [disabled]=\"progress\" (click)=\"cancel()\">Cancel</button>\n    </mat-grid-tile>\n  \n    <mat-grid-tile [colspan]=\"3\">\n    </mat-grid-tile>\n\n  </mat-grid-list>\n</form>\n"

/***/ }),

/***/ "./src/app/profile-update/profile-update.component.ts":
/*!************************************************************!*\
  !*** ./src/app/profile-update/profile-update.component.ts ***!
  \************************************************************/
/*! exports provided: ProfileUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileUpdateComponent", function() { return ProfileUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tag_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tag.service */ "./src/app/tag.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _rider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rider.service */ "./src/app/rider.service.ts");
/* harmony import */ var _images_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images.service */ "./src/app/images.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProfileUpdateComponent = /** @class */ (function () {
    function ProfileUpdateComponent(zone, tagService, authService, route, router, riderService, imagesService, storage) {
        this.zone = zone;
        this.tagService = tagService;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.riderService = riderService;
        this.imagesService = imagesService;
        this.storage = storage;
    }
    ProfileUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clear();
        this.riderService.getRiderByMobile(this.authService.getUserPhone())
            .subscribe(function (riders) {
            if (riders) {
                if (riders.length > 0) {
                    _this.rider = riders[0];
                    _this.nikname = _this.rider.nikname;
                    _this.hash = _this.rider.id;
                }
            }
        });
    };
    ProfileUpdateComponent.prototype.avatarURL = function () {
        if (this.avatar) {
            return this.avatar;
        }
        if (this.rider) {
            return this.rider.avatar;
        }
    };
    ProfileUpdateComponent.prototype.clear = function () {
        this.mobile = this.authService.getUserPhone();
        this.username = this.authService.getUserName();
        this.email = this.authService.getUserEmail();
        this.progress = false;
        this.msg = null;
        this.avatar = null;
        this.percentage = 0;
        this.updates = { username: false, email: false, nikname: false, rider: false, newrider: false, avatar: false };
    };
    ProfileUpdateComponent.prototype.update = function (e) {
        var _this = this;
        this.progress = true;
        e.preventDefault();
        e.stopPropagation();
        if (this.username) {
            this.authService.updateProfileCB(this.username, null, function (err) {
                if (err) {
                    _this.msg = err;
                    _this.progress = false;
                    _this.updates.username = false;
                    console.log("ProfileUpdateComponent: update: " + err);
                }
                else {
                    _this.progress = false;
                    _this.updates.username = true;
                    _this.msg = 'Profile is updated';
                }
            });
        }
        if (this.email) {
            this.authService.updateEmailCB(this.email, function (err) {
                if (err) {
                    _this.msg = err;
                    _this.progress = false;
                    _this.updates.email = false;
                    console.log("ProfileUpdateComponent: update: " + err);
                }
                else {
                    _this.progress = false;
                    _this.updates.email = true;
                    _this.msg = 'Profile is updated';
                }
            });
        }
        if (this.nikname) {
            if (this.rider) {
                this.rider.nikname = this.nikname;
                this.updates.rider = true;
            }
            else {
                this.rider = { id: this.authService.getUID(), mobile: this.mobile, nikname: this.nikname };
                this.updates.rider = true;
                this.updates.newrider = true;
            }
        }
        if (this.avatar) {
            if (this.rider) {
                this.rider.avatar = this.avatar;
                this.updates.avatar = true;
            }
            else {
                this.rider = { id: this.authService.getUID(), mobile: this.mobile, nikname: this.nikname, avatar: this.avatar };
                this.updates.rider = true;
                this.updates.newrider = true;
            }
        }
        if (this.updates.rider) {
            if (this.updates.newrider) {
                this.riderService.addNewRiderCB(this.rider, function (err, ref) {
                    if (err) {
                        _this.msg = err;
                        _this.progress = false;
                    }
                    else {
                        _this.progress = false;
                        _this.updates.rider = true;
                        _this.updates.newrider = false;
                        if (_this.nikname) {
                            _this.updates.nikname = true;
                        }
                        _this.msg = 'Profile is updated';
                    }
                });
            }
            else {
                this.riderService.updateRiderByIdCB(this.rider, function (err, ref) {
                    if (err) {
                        _this.msg = err;
                        _this.progress = false;
                    }
                    else {
                        _this.progress = false;
                        _this.updates.rider = true;
                        _this.updates.newrider = false;
                        if (_this.nikname) {
                            _this.updates.nikname = true;
                        }
                        if (_this.avatar) {
                            _this.updates.avatar = true;
                        }
                        _this.msg = 'Profile is updated';
                    }
                });
            }
        }
    };
    ProfileUpdateComponent.prototype.cancel = function () {
        this.router.navigate(["/profile"]);
    };
    ProfileUpdateComponent.prototype.handleFileInput = function (files) {
        var _this = this;
        var file = files[0];
        var filePath = this.authService.getUID() + "/images/" + file.name;
        var fileRef = this.storage.ref(filePath);
        var task = this.storage.upload(filePath, file);
        // observe percentage changes
        this.uploadPercent = task.percentageChanges();
        // get notified when the download URL is available
        task.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
            _this.downloadURL = fileRef.getDownloadURL();
            _this.downloadURL.subscribe(function (url) { return _this.avatar = url; });
        }))
            .subscribe();
    };
    ProfileUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-update',
            template: __webpack_require__(/*! ./profile-update.component.html */ "./src/app/profile-update/profile-update.component.html"),
            styles: [__webpack_require__(/*! ./profile-update.component.css */ "./src/app/profile-update/profile-update.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _tag_service__WEBPACK_IMPORTED_MODULE_3__["TagService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _rider_service__WEBPACK_IMPORTED_MODULE_5__["RiderService"],
            _images_service__WEBPACK_IMPORTED_MODULE_6__["ImagesService"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"]])
    ], ProfileUpdateComponent);
    return ProfileUpdateComponent;
}());



/***/ }),

/***/ "./src/app/ride-detail/ride-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/ride-detail/ride-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ride-detail/ride-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/ride-detail/ride-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list *ngIf=\"ride; else loading;\"cols=\"3\" rowHeight=\"3em\">\n    \n    <mat-grid-tile>\n      <button (click)=\"gotoBack()\" mat-icon-button>\n        <mat-icon>arrow_back_ios</mat-icon>\n      </button>\n    </mat-grid-tile>\n\n    <mat-grid-tile><h3>Ride details</h3></mat-grid-tile>\n\n    <mat-grid-tile></mat-grid-tile>\n\n    <mat-grid-tile *ngIf=\"ride.rider\"></mat-grid-tile>\n\n    <mat-grid-tile *ngIf=\"ride.rider\"><img *ngIf=\"ride.rider && ride.rider.avatar\" ngxGravatar size=\"46\" [fallback]=\"'monsterid'\" [src]=\"ride.rider.avatar\"></mat-grid-tile>\n\n    <mat-grid-tile *ngIf=\"ride.rider\"></mat-grid-tile>\n\n    <mat-grid-tile *ngIf=\"ride.rider\"></mat-grid-tile>\n\n    <mat-grid-tile *ngIf=\"ride.rider\"><strong>{{ride.rider?ride.rider.nikname:\"\"}}</strong></mat-grid-tile>\n\n    <mat-grid-tile *ngIf=\"ride.rider\"></mat-grid-tile>\n\n    <mat-grid-tile>Date:</mat-grid-tile>\n\n    <mat-grid-tile>{{ride.start|date:\"dd-MM-yyyy\"}}</mat-grid-tile>\n\n    <mat-grid-tile></mat-grid-tile>\n\n    <mat-grid-tile>Start:</mat-grid-tile>\n\n    <mat-grid-tile>{{ride.start|date:\"HH:mm:ss\"}}</mat-grid-tile>\n\n    <mat-grid-tile></mat-grid-tile>\n\n    <mat-grid-tile>Finish:</mat-grid-tile>\n\n    <mat-grid-tile>{{ride.finish|date:\"HH:mm:ss\"}}</mat-grid-tile>\n\n    <mat-grid-tile></mat-grid-tile>\n    \n    <mat-grid-tile>Time:</mat-grid-tile>\n\n    <mat-grid-tile>{{(ride.finish-ride.start)|date:\"HH:mm:ss\":\"+00\"}}</mat-grid-tile>\n\n    <mat-grid-tile></mat-grid-tile>\n\n\n    <mat-grid-tile [colspan]=\"3\">\n        <button mat-stroked-button (click)=\"gotoTagById(ride.tagid)\">{{ride.tagid}}</button>\n    </mat-grid-tile>\n\n\n</mat-grid-list>\n"

/***/ }),

/***/ "./src/app/ride-detail/ride-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/ride-detail/ride-detail.component.ts ***!
  \******************************************************/
/*! exports provided: RideDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideDetailComponent", function() { return RideDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tag_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tag.service */ "./src/app/tag.service.ts");
/* harmony import */ var _ride_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ride.service */ "./src/app/ride.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RideDetailComponent = /** @class */ (function () {
    function RideDetailComponent(tagService, route, location, router, rideService) {
        this.tagService = tagService;
        this.route = route;
        this.location = location;
        this.router = router;
        this.rideService = rideService;
    }
    RideDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.rideService.getRideByIdCB(+id, function (err, ride) {
            if (err) {
                console.error("RideDetailComponent: ngOnInit: ride not found " + id);
            }
            else {
                _this.ride = ride;
                console.log(_this.ride);
            }
        });
    };
    RideDetailComponent.prototype.gotoBack = function () {
        this.location.back();
    };
    RideDetailComponent.prototype.gotoTagById = function (id) {
        this.router.navigate(["/tag/" + id]);
    };
    RideDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ride-detail',
            template: __webpack_require__(/*! ./ride-detail.component.html */ "./src/app/ride-detail/ride-detail.component.html"),
            styles: [__webpack_require__(/*! ./ride-detail.component.css */ "./src/app/ride-detail/ride-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_tag_service__WEBPACK_IMPORTED_MODULE_3__["TagService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ride_service__WEBPACK_IMPORTED_MODULE_4__["RideService"]])
    ], RideDetailComponent);
    return RideDetailComponent;
}());



/***/ }),

/***/ "./src/app/ride.service.ts":
/*!*********************************!*\
  !*** ./src/app/ride.service.ts ***!
  \*********************************/
/*! exports provided: RideService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideService", function() { return RideService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RideService = /** @class */ (function () {
    function RideService(datePipe, db) {
        this.datePipe = datePipe;
        this.db = db;
        this.number$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](1000);
        this.start$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.order$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('time');
        this.rides = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.number$, this.start$, this.order$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_a) {
            var num = _a[0], start = _a[1], order = _a[2];
            return db.collection('rides', function (ref) {
                var query = ref;
                query = query.where('time', '>', 0);
                if (num) {
                    query = query.limit(num);
                }
                if (order) {
                    query = query.orderBy(order);
                    if (start) {
                        query = query.startAt(start);
                    }
                }
                return query;
            }).valueChanges();
        }));
        this.where$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.ride = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.where$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_a) {
            var where = _a[0];
            return db.collection('rides', function (ref) {
                var query = ref;
                if (where) {
                    query = query.where('tagid', '==', where);
                }
                query = query.where('open', '==', true);
                query = query.limit(1);
                return query;
            }).valueChanges();
        }));
        this.tagid$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.tagRides = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.tagid$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_a) {
            var tagid = _a[0];
            return db.collection('rides', function (ref) {
                var query = ref;
                query = query.where('tagid', '==', tagid);
                query = query.orderBy('start');
                return query;
            }).valueChanges();
        }));
    }
    RideService.prototype.getRides = function () {
        return this.rides;
    };
    RideService.prototype.setNumber = function (num) {
        this.number$.next(num);
    };
    RideService.prototype.setStart = function (start) {
        this.start$.next(start);
    };
    RideService.prototype.setOrder = function (order) {
        this.order$.next(order);
    };
    RideService.prototype.getRideByTagId = function (tagid) {
        this.where$.next(tagid);
        return this.ride;
    };
    RideService.prototype.getRideByTagIdCB = function (tagid, cb) {
        this.db.collection('rides').ref.where('tagid', '==', tagid)
            .get()
            .then(function (querySnapshot) {
            if (querySnapshot.empty) {
                cb(null);
            }
            else {
                cb(querySnapshot.docs[0]);
            }
        });
    };
    RideService.prototype.getRidesByTagId = function (tagid) {
        this.tagid$.next(tagid);
        return this.tagRides;
    };
    RideService.prototype.getRidesByTagIdCB = function (tagid, cb) {
        this.db.collection('rides').ref.where('tagid', '==', tagid)
            .get()
            .then(function (querySnapshot) {
            if (querySnapshot.empty) {
                cb(null);
            }
            else {
                cb(querySnapshot.docs);
            }
        });
    };
    RideService.prototype.addNewRideCB = function (ride, cb) {
        this.db.collection('rides').add(ride)
            .then(function (ref) { return cb(null, ref); })
            .catch(function (err) { return cb(err, null); });
    };
    RideService.prototype.updateRideByRefCB = function (ref, ride, cb) {
        this.db.collection('rides').doc(ref).update(ride)
            .then(function () { return cb(null); })
            .catch(function (err) { return cb(err); });
    };
    RideService.prototype.updateRideByIdCB = function (ride, cb) {
        var _this = this;
        this.db.collection('rides').ref.where('id', '==', ride.id)
            .get()
            .then(function (querySnapshot) {
            if (querySnapshot.empty) {
                cb('not fount', null);
            }
            else {
                var doc_1 = querySnapshot.docs[0];
                _this.db.collection('rides').doc(doc_1.id).update(ride)
                    .then(function () { return cb(null, doc_1.ref); })
                    .catch(function (err) { return cb(err, null); });
            }
        });
    };
    RideService.prototype.getRideByIdCB = function (id, cb) {
        this.db.collection('rides').ref.where('id', '==', id)
            .get()
            .then(function (querySnapshot) {
            if (querySnapshot.empty) {
                cb('not fount', null);
            }
            else {
                var doc = querySnapshot.docs[0];
                cb(null, doc.data());
            }
        });
    };
    RideService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], RideService);
    return RideService;
}());



/***/ }),

/***/ "./src/app/ride/ride.component.css":
/*!*****************************************!*\
  !*** ./src/app/ride/ride.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n  }\n\n  .mat-cell .mat-icon {\n    -webkit-transform: scale(0.6);\n            transform: scale(0.6);\n}"

/***/ }),

/***/ "./src/app/ride/ride.component.html":
/*!******************************************!*\
  !*** ./src/app/ride/ride.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-grid-list  cols=\"3\" rowHeight=\"3em\">\n    <mat-grid-tile>\n        <button (click)=\"gotoBack()\" mat-icon-button>\n            <mat-icon>arrow_back_ios</mat-icon>\n        </button>\n      </mat-grid-tile>\n\n    <mat-grid-tile>\n      <h3>Ride</h3>\n    </mat-grid-tile>\n\n    <mat-grid-tile>\n        <small>{{nikname}}</small>\n    </mat-grid-tile>\n  \n  </mat-grid-list>\n\n<mat-accordion>\n      <mat-expansion-panel (opened)=\"getTags()\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Tags\n          </mat-panel-title>\n          <mat-panel-description>\n            Select tag to start a ride\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n    \n        <span *ngFor=\"let tag of tags\">\n            <button mat-stroked-button [disabled]=\"tagid === tag.id\" (click)=\"select(tag.id)\">{{tag.id}}</button>&nbsp;\n        </span>\n    \n      </mat-expansion-panel>\n  </mat-accordion>\n\n  <mat-grid-list *ngIf=\"ride; else loading\" cols=\"3\" rowHeight=\"3em\">\n    <mat-grid-tile [colspan]=\"3\">\n      <h3>Current Ride</h3>\n    </mat-grid-tile>\n  \n    <mat-grid-tile>\n      {{ride.start|date:\"dd-MM-yyyy\"}}\n    </mat-grid-tile>\n  \n    <mat-grid-tile>\n      {{ride.start|date:\"HH:mm:ss\"}}\n    </mat-grid-tile>\n  \n    <mat-grid-tile *ngIf=\"!ride.finish\">\n      {{timestemp|date:\"HH:mm:ss\":\"+00\"}}\n    </mat-grid-tile>\n\n    <mat-grid-tile *ngIf=\"ride.finish\">\n        {{(ride.finish-ride.start)|date:\"HH:mm:ss\":\"+00\"}}\n      </mat-grid-tile>\n  </mat-grid-list>\n\n  <mat-grid-list  *ngIf=\"rides; else loading\" cols=\"3\" rowHeight=\"3em\">\n      \n      <mat-grid-tile  [rowspan] = \"2\" [colspan]=\"3\">\n        <button *ngIf=\"!ride\" mat-stroked-button mat-raised-button color=\"primary\" [disabled]=\"progress\" (click)=\"startRide($event)\">Start</button>\n        <button *ngIf=\"ride\" mat-stroked-button mat-raised-button color=\"warn\" [disabled]=\"progress || !ride.open\" (click)=\"finishRide($event)\">End</button>\n      </mat-grid-tile>\n  </mat-grid-list>\n  \n  <div *ngIf=\"rides\">\n      <table *ngIf=\"rides.length>0\" mat-table [dataSource]=\"rides | slice:start:end\" class=\"mat-elevation-z8\">\n\n          <!--- Note that these columns can be defined in any order.\n                The actual rendered columns are set as a property on the row definition\" -->\n        \n          <!-- Position Column -->\n          <ng-container matColumnDef=\"date\">\n              <th mat-header-cell *matHeaderCellDef> Date </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.start|date:\"dd-MM-yyyy\"}}</td>\n            </ng-container>\n\n          <!-- Position Column -->\n          <ng-container matColumnDef=\"start\">\n            <th mat-header-cell *matHeaderCellDef> Start </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.start|date:\"HH:mm:ss\"}}</td>\n          </ng-container>\n        \n          <!-- Name Column -->\n          <ng-container matColumnDef=\"finish\">\n            <th mat-header-cell *matHeaderCellDef> Finish </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.finish|date:\"HH:mm:ss\"}}</td>\n          </ng-container>\n        \n          <!-- Weight Column -->\n          <ng-container matColumnDef=\"time\">\n            <th mat-header-cell *matHeaderCellDef> Time </th>\n            <td mat-cell *matCellDef=\"let element\"> {{(element.finish-element.start)|date:\"HH:mm:ss\":\"+00\"}} </td>\n          </ng-container>\n        \n          <!-- Weight Column -->\n          <ng-container matColumnDef=\"link\">\n              <th mat-header-cell *matHeaderCellDef> Details </th>\n              <td mat-cell *matCellDef=\"let element\"> <button (click)=\"gotoRide(element.id)\" mat-icon-button> <mat-icon>call_made</mat-icon></button> </td>\n            </ng-container>\n        \n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n        <br>\n        \n    <mat-paginator *ngIf=\"rides.length>0\" [length]=\"rides.length\"\n                  [pageSize]=\"10\"\n                  [pageSizeOptions]=\"[1, 5, 10, 25, 100]\"\n                  (page)=\"setPage($event)\">\n    </mat-paginator>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/ride/ride.component.ts":
/*!****************************************!*\
  !*** ./src/app/ride/ride.component.ts ***!
  \****************************************/
/*! exports provided: RideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideComponent", function() { return RideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tag_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tag.service */ "./src/app/tag.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _rider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rider.service */ "./src/app/rider.service.ts");
/* harmony import */ var _ride_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ride.service */ "./src/app/ride.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../parameters */ "./src/app/parameters.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var RideComponent = /** @class */ (function () {
    function RideComponent(zone, tagService, authService, route, router, riderService, rideService, datePipe, location, param) {
        this.zone = zone;
        this.tagService = tagService;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.riderService = riderService;
        this.rideService = rideService;
        this.datePipe = datePipe;
        this.location = location;
        this.param = param;
        this.displayedColumns = ['date', 'start', 'finish', 'time', 'link'];
        console.log(this.param);
    }
    RideComponent.prototype.ngOnInit = function () {
        this.clear();
        this.getTags();
        this.getRider();
    };
    RideComponent.prototype.ngOnDestroy = function () {
        if (this.tags_subs) {
            this.tags_subs.unsubscribe();
        }
        if (this.rides_subs) {
            this.rides_subs.unsubscribe();
        }
        if (this.ride_subs) {
            this.ride_subs.unsubscribe();
        }
        if (this.timer_subs) {
            this.timer_subs.unsubscribe();
        }
        if (this.rider_subs) {
            this.rider_subs.unsubscribe();
        }
    };
    RideComponent.prototype.clear = function () {
        this.tagid = null;
        this.start = 0;
        this.end = 10;
        this.progress = false;
    };
    RideComponent.prototype.gotoRide = function (id) {
        this.router.navigate(["/ride/" + id]);
    };
    RideComponent.prototype.getTags = function () {
        var _this = this;
        this.tags_subs = this.tagService.getTagsByMobile(this.authService.getUserPhone())
            .subscribe(function (tags) { return _this.tags = tags; });
    };
    RideComponent.prototype.getRider = function () {
        var _this = this;
        this.rider_subs = this.riderService.getRiderByMobile(this.authService.getUserPhone())
            .subscribe(function (riders) {
            if (riders) {
                if (riders.length > 0) {
                    _this.rider = riders[0];
                    _this.nikname = _this.rider.nikname;
                    _this.avatar = _this.rider.avatar;
                }
            }
        });
    };
    RideComponent.prototype.getRides = function () {
        var _this = this;
        this.rides_subs = this.rideService.getRidesByTagId(this.tagid)
            .subscribe(function (rides) { return _this.rides = rides; });
    };
    RideComponent.prototype.getRide = function () {
        var _this = this;
        this.ride_subs = this.rideService.getRideByTagId(this.tagid)
            .subscribe(function (rides) {
            if (rides.length > 0) {
                _this.ride = rides[0];
                _this.timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["timer"])(0, 1000);
                _this.timer_subs = _this.timer.subscribe(function (t) {
                    _this.timestemp = new Date().getTime() - _this.ride.start;
                    _this.hours = Math.floor(_this.timestemp / 1000 / 60 / 60);
                    _this.minutes = Math.floor(_this.timestemp / 1000 / 60);
                    _this.seconds = Math.floor(_this.timestemp / 1000);
                });
            }
        });
    };
    RideComponent.prototype.select = function (tagid) {
        this.tagid = tagid;
        this.getRides();
        this.getRide();
    };
    RideComponent.prototype.setPage = function (e) {
        console.log(e);
        var pageIndex = e.pageIndex, pageSize = e.pageSize;
        this.start = pageIndex * pageSize;
        this.end = this.start + pageSize;
    };
    RideComponent.prototype.startRide = function (e) {
        var _this = this;
        if (!this.tagid) {
            return;
        }
        this.progress = true;
        e.preventDefault();
        e.stopPropagation();
        var start = new Date().getTime();
        var tagid = this.tagid;
        var id = Math.random() * 1000 + start;
        var open = true;
        var rider = this.rider;
        var ride;
        if (rider) {
            ride = { id: id, tagid: tagid, start: start, open: open, rider: rider };
        }
        else {
            ride = { id: id, tagid: tagid, start: start, open: open };
        }
        this.rideService.addNewRideCB(ride, function (err, ref) {
            if (err) {
                _this.progress = false;
                console.error(err);
            }
            else {
                _this.progress = false;
                _this.getRides();
            }
        });
    };
    RideComponent.prototype.finishRide = function (e) {
        var _this = this;
        this.progress = true;
        e.preventDefault();
        e.stopPropagation();
        var finish = new Date().getTime();
        this.ride.finish = finish;
        this.ride.open = false;
        var time = finish - this.ride.start;
        if (time > this.param.mintime && time < this.param.maxtime) {
            this.ride.time = time;
            console.log("RideComponent: finishRide: record ride time: " + time);
        }
        else {
            this.ride.time = 0;
            console.log("RideComponent: finishRide: ride time: " + time + " is out of range [" + this.param.mintime + ", " + this.param.maxtime + "]");
        }
        this.rideService.updateRideByIdCB(this.ride, function (err, ref) {
            if (err) {
                _this.progress = false;
                console.error(err);
            }
            else {
                _this.progress = false;
                _this.getRides();
            }
        });
    };
    RideComponent.prototype.gotoBack = function () {
        this.location.back();
    };
    RideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ride',
            template: __webpack_require__(/*! ./ride.component.html */ "./src/app/ride/ride.component.html"),
            styles: [__webpack_require__(/*! ./ride.component.css */ "./src/app/ride/ride.component.css")],
            providers: [_parameters__WEBPACK_IMPORTED_MODULE_8__["RideParameters"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _tag_service__WEBPACK_IMPORTED_MODULE_3__["TagService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _rider_service__WEBPACK_IMPORTED_MODULE_5__["RiderService"],
            _ride_service__WEBPACK_IMPORTED_MODULE_6__["RideService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _parameters__WEBPACK_IMPORTED_MODULE_8__["RideParameters"]])
    ], RideComponent);
    return RideComponent;
}());



/***/ }),

/***/ "./src/app/rider.service.ts":
/*!**********************************!*\
  !*** ./src/app/rider.service.ts ***!
  \**********************************/
/*! exports provided: RiderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiderService", function() { return RiderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RiderService = /** @class */ (function () {
    function RiderService(datePipe, db) {
        this.datePipe = datePipe;
        this.db = db;
        this.number$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](1000);
        this.start$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.order$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('id');
        this.riders = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.number$, this.start$, this.order$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_a) {
            var num = _a[0], start = _a[1], order = _a[2];
            return db.collection('riders', function (ref) {
                var query = ref;
                if (num) {
                    query = query.limit(num);
                }
                if (order) {
                    query = query.orderBy(order);
                    if (start) {
                        query = query.startAt(start);
                    }
                }
                return query;
            }).valueChanges();
        }));
        this.where$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.rider = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.where$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_a) {
            var where = _a[0];
            return db.collection('riders', function (ref) {
                var query = ref;
                if (where) {
                    query = query.where('id', '==', where);
                }
                query = query.limit(1);
                return query;
            }).valueChanges();
        }));
        this.mobile$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.userRider = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.mobile$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_a) {
            var mobile = _a[0];
            return db.collection('riders', function (ref) {
                var query = ref;
                query = query.where('mobile', '==', mobile);
                return query;
            }).valueChanges();
        }));
    }
    RiderService.prototype.getRiders = function () {
        return this.riders;
    };
    RiderService.prototype.setNumber = function (num) {
        this.number$.next(num);
    };
    RiderService.prototype.setStart = function (start) {
        this.start$.next(start);
    };
    RiderService.prototype.setOrder = function (order) {
        this.order$.next(order);
    };
    RiderService.prototype.getRiderById = function (id) {
        this.where$.next(id);
        return this.rider;
    };
    RiderService.prototype.getRiderByIdCB = function (id, cb) {
        this.db.collection('riders').ref.where('id', '==', id)
            .get()
            .then(function (querySnapshot) {
            if (querySnapshot.empty) {
                cb(null);
            }
            else {
                cb(querySnapshot.docs[0]);
            }
        });
    };
    RiderService.prototype.getRiderByMobile = function (mobile) {
        this.mobile$.next(mobile);
        return this.userRider;
    };
    RiderService.prototype.getRiderByMobileCB = function (mobile, cb) {
        this.db.collection('riders').ref.where('mobile', '==', mobile)
            .get()
            .then(function (querySnapshot) {
            if (querySnapshot.empty) {
                cb(null);
            }
            else {
                cb(querySnapshot.docs[0]);
            }
        });
    };
    RiderService.prototype.addNewRiderCB = function (rider, cb) {
        this.db.collection('riders').add(rider)
            .then(function (ref) { return cb(null, ref); })
            .catch(function (err) { return cb(err, null); });
    };
    RiderService.prototype.updateRiderByIdCB = function (rider, cb) {
        var _this = this;
        this.db.collection('riders').ref.where('id', '==', rider.id)
            .get()
            .then(function (querySnapshot) {
            if (querySnapshot.empty) {
                console.error("RiderService: updateRiderByIdCB: rider not found for id " + rider.id);
                cb("RiderService: updateRiderByIdCB: rider not found for id " + rider.id, null);
            }
            else {
                var doc = querySnapshot.docs[0];
                // update tag doc
                console.log("RiderService: updateRiderByIdCB: updating rider for id: " + rider.id);
                _this.db.collection('riders').doc(doc.id).update(rider);
                cb(null, doc);
            }
        });
    };
    RiderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], RiderService);
    return RiderService;
}());



/***/ }),

/***/ "./src/app/sms-confirmation/sms-confirmation.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/sms-confirmation/sms-confirmation.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sms-confirmation/sms-confirmation.component.html":
/*!******************************************************************!*\
  !*** ./src/app/sms-confirmation/sms-confirmation.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"3\" rowHeight=\"3em\">\n    <mat-grid-tile [colspan]=\"3\">\n      <h3>SMS confirmation</h3>\n    </mat-grid-tile>\n    \n</mat-grid-list>\n\n<form class=\"example-form\">\n\n  <mat-grid-list cols=\"3\" rowHeight=\"3em\">\n\n    <mat-grid-tile [rowspan]=\"3\" [colspan]=\"3\">\n      <mat-form-field>\n        <input matInput name=\"smscode\" type=\"text\" placeholder=\"Enter sms code\" required minlenght=\"6\" [(ngModel)]=\"smscode\">\n      </mat-form-field>\n    </mat-grid-tile>\n\n    <mat-grid-tile [colspan]=\"3\">\n      {{msg}}\n    </mat-grid-tile>\n\n    <mat-grid-tile>\n      <button mat-raised-button color=\"primary\" [disabled]=\"!smscode || progress\" (click)=\"confirm($event)\">Confirm</button>\n    </mat-grid-tile>\n\n    <mat-grid-tile>\n\n    </mat-grid-tile>\n\n    <mat-grid-tile>\n      <button mat-raised-button color=\"warn\" [disabled]=\"!smscode || progress\" (click)=\"clear()\">Clear</button>\n    </mat-grid-tile>\n  \n    <mat-grid-tile [colspan]=\"3\">\n    </mat-grid-tile>\n\n  </mat-grid-list>\n</form>\n\n"

/***/ }),

/***/ "./src/app/sms-confirmation/sms-confirmation.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/sms-confirmation/sms-confirmation.component.ts ***!
  \****************************************************************/
/*! exports provided: SmsConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmsConfirmationComponent", function() { return SmsConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tag_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tag.service */ "./src/app/tag.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SmsConfirmationComponent = /** @class */ (function () {
    function SmsConfirmationComponent(zone, tagService, authService, route, router) {
        this.zone = zone;
        this.tagService = tagService;
        this.authService = authService;
        this.route = route;
        this.router = router;
    }
    SmsConfirmationComponent.prototype.ngOnInit = function () {
        this.clear();
        this.getMobile();
    };
    SmsConfirmationComponent.prototype.clear = function () {
        this.smscode = null;
        this.msg = null;
        this.progress = false;
    };
    SmsConfirmationComponent.prototype.getMobile = function () {
        this.mobile = this.route.snapshot.paramMap.get('mobile');
    };
    SmsConfirmationComponent.prototype.confirm = function (e) {
        var _this = this;
        this.progress = true;
        e.preventDefault();
        e.stopPropagation();
        this.authService.getConfirmation(this.smscode, function (error, user) {
            if (error) {
                _this.msg = error;
                _this.progress = false;
            }
            else {
                console.log(user);
                // registration is confirmed move to client profile
                _this.zone.run(function () { return _this.router.navigate(["/profile"]); })
                    .then(function () { return console.log('SmsConfirmationComponent: confirm: navigated to profile'); })
                    .catch(function (err) { return console.error(err); });
            }
        });
    };
    SmsConfirmationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sms-confirmation',
            template: __webpack_require__(/*! ./sms-confirmation.component.html */ "./src/app/sms-confirmation/sms-confirmation.component.html"),
            styles: [__webpack_require__(/*! ./sms-confirmation.component.css */ "./src/app/sms-confirmation/sms-confirmation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _tag_service__WEBPACK_IMPORTED_MODULE_2__["TagService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SmsConfirmationComponent);
    return SmsConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/tag-detail/tag-detail.component.css":
/*!*****************************************************!*\
  !*** ./src/app/tag-detail/tag-detail.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n}\n  \n.example-full-width {\n    width: 100%;\n}\n  \n.example-short {\n    width: 30%;\n}\n  \n.example-half {\n    width: 50%;\n}\n  \ntable {\n    width: 100%;\n  }\n  \n.mat-cell .mat-icon {\n    -webkit-transform: scale(0.6);\n            transform: scale(0.6);\n}"

/***/ }),

/***/ "./src/app/tag-detail/tag-detail.component.html":
/*!******************************************************!*\
  !*** ./src/app/tag-detail/tag-detail.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list *ngIf=\"tags; else loading;\"cols=\"3\" rowHeight=\"3em\">\n    \n    <mat-grid-tile>\n        <button (click)=\"gotoBack()\" mat-icon-button>\n            <mat-icon>arrow_back_ios</mat-icon>\n        </button>\n      </mat-grid-tile>\n\n    <mat-grid-tile>\n      <h3>Tag details</h3>\n    </mat-grid-tile>\n\n    <mat-grid-tile>\n        \n      </mat-grid-tile>\n\n    <mat-grid-tile  *ngIf=\"tags.length > 0\" [colspan]=\"3\">\n        <h3>{{tags[0].id}}</h3>\n      </mat-grid-tile>\n\n    <mat-grid-tile *ngIf=\"tags.length > 0\">\n        Registered:\n    </mat-grid-tile>\n\n    <mat-grid-tile [colspan]=\"2\" *ngIf=\"tags.length > 0\">\n        {{tags[0].regDate}}\n    </mat-grid-tile>\n\n    <mat-grid-tile *ngIf=\"tags.length > 0 && tags[0].reg\">\n        Mobile:\n    </mat-grid-tile>\n\n    <mat-grid-tile [colspan]=\"2\" *ngIf=\"tags.length > 0 && tags[0].reg\">\n        {{tags[0].reg.mobile}}\n    </mat-grid-tile>\n\n    <mat-grid-tile *ngIf=\"tags.length > 0 && tags[0].reg\">\n        SMS code:\n    </mat-grid-tile>\n\n    <mat-grid-tile [colspan]=\"2\" *ngIf=\"tags.length > 0 && tags[0].reg\">\n        {{tags[0].reg.sms}}\n    </mat-grid-tile>\n    \n</mat-grid-list>\n\n<div *ngIf=\"rides\">\n    <table *ngIf=\"rides.length>0\" mat-table [dataSource]=\"rides | slice:start:end\" class=\"mat-elevation-z8\">\n\n        <!--- Note that these columns can be defined in any order.\n              The actual rendered columns are set as a property on the row definition\" -->\n      \n        <!-- Position Column -->\n        <ng-container matColumnDef=\"date\">\n            <th mat-header-cell *matHeaderCellDef> Date </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.start|date:\"dd-MM-yyyy\"}}</td>\n          </ng-container>\n\n        <!-- Position Column -->\n        <ng-container matColumnDef=\"start\">\n          <th mat-header-cell *matHeaderCellDef> Start </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.start|date:\"HH:mm:ss\"}}</td>\n        </ng-container>\n      \n        <!-- Name Column -->\n        <ng-container matColumnDef=\"finish\">\n          <th mat-header-cell *matHeaderCellDef> Finish </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.finish|date:\"HH:mm:ss\"}}</td>\n        </ng-container>\n      \n        <!-- Weight Column -->\n        <ng-container matColumnDef=\"time\">\n          <th mat-header-cell *matHeaderCellDef> Time </th>\n          <td mat-cell *matCellDef=\"let element\"> {{(element.finish-element.start)|date:\"HH:mm:ss\":\"+00\"}} </td>\n        </ng-container>\n\n        <!-- Weight Column -->\n        <ng-container matColumnDef=\"link\">\n            <th mat-header-cell *matHeaderCellDef> Details </th>\n            <td mat-cell *matCellDef=\"let element\"> <button (click)=\"gotoRide(element.id)\" mat-icon-button> <mat-icon>call_made</mat-icon></button> </td>\n          </ng-container>\n      \n      \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n      <br>\n      \n  <mat-paginator *ngIf=\"rides.length>0\" [length]=\"rides.length\"\n                [pageSize]=\"10\"\n                [pageSizeOptions]=\"[1, 5, 10, 25, 100]\"\n                (page)=\"setPage($event)\">\n  </mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/tag-detail/tag-detail.component.ts":
/*!****************************************************!*\
  !*** ./src/app/tag-detail/tag-detail.component.ts ***!
  \****************************************************/
/*! exports provided: TagDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagDetailComponent", function() { return TagDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tag_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tag.service */ "./src/app/tag.service.ts");
/* harmony import */ var _ride_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ride.service */ "./src/app/ride.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TagDetailComponent = /** @class */ (function () {
    function TagDetailComponent(tagService, route, location, router, rideService) {
        this.tagService = tagService;
        this.route = route;
        this.location = location;
        this.router = router;
        this.rideService = rideService;
        this.displayedColumns = ['date', 'start', 'finish', 'time', 'link'];
    }
    TagDetailComponent.prototype.ngOnInit = function () {
        this.start = 0;
        this.end = 10;
        this.getTag();
    };
    TagDetailComponent.prototype.getTag = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.tagService.getTagById(id)
            .subscribe(function (tags) { return _this.tags = tags; });
        this.rideService.getRidesByTagId(id)
            .subscribe(function (rides) { return _this.rides = rides; });
    };
    TagDetailComponent.prototype.gotoTags = function () {
        this.router.navigate(["/tags"]);
    };
    TagDetailComponent.prototype.gotoBack = function () {
        this.location.back();
    };
    TagDetailComponent.prototype.gotoRide = function (id) {
        this.router.navigate(["/ride/" + id]);
    };
    TagDetailComponent.prototype.setPage = function (e) {
        console.log(e);
        var pageIndex = e.pageIndex, pageSize = e.pageSize;
        this.start = pageIndex * pageSize;
        this.end = this.start + pageSize;
    };
    TagDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tag-detail',
            template: __webpack_require__(/*! ./tag-detail.component.html */ "./src/app/tag-detail/tag-detail.component.html"),
            styles: [__webpack_require__(/*! ./tag-detail.component.css */ "./src/app/tag-detail/tag-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_tag_service__WEBPACK_IMPORTED_MODULE_3__["TagService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ride_service__WEBPACK_IMPORTED_MODULE_4__["RideService"]])
    ], TagDetailComponent);
    return TagDetailComponent;
}());



/***/ }),

/***/ "./src/app/tag-reg-sms/tag-reg-sms.component.css":
/*!*******************************************************!*\
  !*** ./src/app/tag-reg-sms/tag-reg-sms.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tag-reg-sms/tag-reg-sms.component.html":
/*!********************************************************!*\
  !*** ./src/app/tag-reg-sms/tag-reg-sms.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"tags; else loading\">\n    <h2 *ngIf=\"tags.length === 0\">Tag not found</h2>\n    <div *ngIf=\"tags.length > 0\">\n      <h2>Tag Registration</h2>\n      <div><span>id: </span>{{tags[0].id}}</div>\n    </div>\n    <br><br>\n\n    <form class=\"example-form\">\n      <table class=\"example-half\" cellspacing=\"0\">\n        <tr>\n          <td>\n            <mat-form-field>\n              <input matInput name=\"smscode\" type=\"text\" placeholder=\"Enter sms code\" required minlength=\"4\" [(ngModel)]=\"smscode\">\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr *ngIf=\"msg\">\n          <td>\n            {{msg}}\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <button mat-raised-button color=\"primary\" [disabled]=\"!smscode || registered || progress\" (click)=\"confirm($event)\">Confirm</button>\n          </td>\n          <td>\n            <button mat-raised-button color=\"warn\" [disabled]=\"!smscode || registered || progress\" (click)=\"gotoBack()\">Cancel</button>\n          </td>\n        </tr>\n      </table>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/tag-reg-sms/tag-reg-sms.component.ts":
/*!******************************************************!*\
  !*** ./src/app/tag-reg-sms/tag-reg-sms.component.ts ***!
  \******************************************************/
/*! exports provided: TagRegSmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagRegSmsComponent", function() { return TagRegSmsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tag_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tag.service */ "./src/app/tag.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TagRegSmsComponent = /** @class */ (function () {
    function TagRegSmsComponent(tagService, authService, route, location, router) {
        this.tagService = tagService;
        this.authService = authService;
        this.route = route;
        this.location = location;
        this.router = router;
    }
    TagRegSmsComponent.prototype.ngOnInit = function () {
        this.getTag();
        this.clear();
    };
    TagRegSmsComponent.prototype.clear = function () {
        this.smscode = null;
        this.msg = null;
        this.registered = false;
        this.progress = false;
    };
    TagRegSmsComponent.prototype.getTag = function () {
        var _this = this;
        this.tagid = this.route.snapshot.paramMap.get('id');
        this.mobile = this.route.snapshot.paramMap.get('mobile');
        this.tagService.getTagById(this.tagid)
            .subscribe(function (tags) { return _this.tags = tags; });
    };
    TagRegSmsComponent.prototype.gotoBack = function () {
        this.router.navigate(["/reg"]);
    };
    TagRegSmsComponent.prototype.confirm = function (e) {
        var _this = this;
        this.progress = true;
        e.preventDefault();
        e.stopPropagation();
        var reg = {
            mobile: this.mobile,
            sms: '******'
        };
        this.authService.getConfirmation(this.smscode, function (error, user) {
            if (error) {
                _this.msg = error;
                _this.progress = false;
            }
            else {
                console.log(user);
                // registration is confirmed
                if (_this.tags[0]) {
                    console.log("TagRegSmsComponent: confirm: seting reg date for " + _this.tags[0].id);
                    _this.tagService.setRegDate(_this.tags[0].id, function (err, doc) {
                        if (err) {
                            _this.msg = err;
                            _this.progress = false;
                            _this.registered = false;
                        }
                        else {
                            _this.msg = "Tag registration date updated";
                            _this.progress = false;
                            _this.registered = true;
                            _this.router.navigate(["/profile"]);
                        }
                    });
                }
                else {
                    console.log("TagRegSmsComponent: confirm: adding new tag with id " + _this.tagid);
                    _this.tagService.setRegistration(_this.tagid, null, reg);
                    _this.msg = "Tag is registered";
                    _this.progress = false;
                    _this.registered = true;
                    _this.router.navigate(["/profile"]);
                }
            }
        });
    };
    TagRegSmsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tag-reg-sms',
            template: __webpack_require__(/*! ./tag-reg-sms.component.html */ "./src/app/tag-reg-sms/tag-reg-sms.component.html"),
            styles: [__webpack_require__(/*! ./tag-reg-sms.component.css */ "./src/app/tag-reg-sms/tag-reg-sms.component.css")],
        }),
        __metadata("design:paramtypes", [_tag_service__WEBPACK_IMPORTED_MODULE_2__["TagService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TagRegSmsComponent);
    return TagRegSmsComponent;
}());



/***/ }),

/***/ "./src/app/tag-registration/tag-registration.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/tag-registration/tag-registration.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4 {\n    text-align: center;\n  }\n\np {\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/tag-registration/tag-registration.component.html":
/*!******************************************************************!*\
  !*** ./src/app/tag-registration/tag-registration.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"3\" rowHeight=\"3em\">\n\n  <mat-grid-tile>\n    <button (click)=\"gotoBack()\" mat-icon-button>\n      <mat-icon>arrow_back_ios</mat-icon>\n    </button>\n  </mat-grid-tile>\n\n  <mat-grid-tile><h3>Tag registration</h3></mat-grid-tile>\n\n  <mat-grid-tile></mat-grid-tile>\n\n  <mat-grid-tile [colspan]=\"3\" [rowspan]=\"2\">\n    <h4 >Please enter mobile phone number and unique tag ID to recieve SMS registration code</h4>\n  </mat-grid-tile>\n  <mat-grid-tile [colspan]=\"3\">\n    <h4>Don't have a tag?</h4> \n  </mat-grid-tile>\n\n  <mat-grid-tile></mat-grid-tile>\n\n  <mat-grid-tile >\n      <button (click)=\"generate()\" mat-icon-button>\n          <mat-icon>get_app</mat-icon>\n        </button>\n  </mat-grid-tile>\n\n  <mat-grid-tile></mat-grid-tile>\n    \n</mat-grid-list>\n\n<form class=\"example-form\">\n\n  <mat-grid-list cols=\"3\" rowHeight=\"3em\">\n\n    <mat-grid-tile [rowspan]=\"2\" [colspan]=\"3\">\n      <mat-form-field>\n        <input matInput name=\"tagid\" type=\"text\" placeholder=\"Enter tag id\" required minlength=\"14\" [(ngModel)]=\"tagid\">\n        <mat-hint align=\"start\">Example: <strong>12345678901234</strong> </mat-hint>\n      </mat-form-field>\n    </mat-grid-tile>\n\n    <mat-grid-tile [rowspan]=\"2\" [colspan]=\"3\">\n      <mat-form-field>\n        <input matInput name=\"mobile\" type=\"text\" placeholder=\"Enter mobile\" required minlenght=\"7\" [(ngModel)]=\"mobile\">\n        <mat-hint align=\"start\">Example: <strong>+16505551234</strong> </mat-hint>\n      </mat-form-field>\n    </mat-grid-tile>\n\n    <mat-grid-tile [colspan]=\"3\">\n      {{msg}}\n    </mat-grid-tile>\n\n    <mat-grid-tile>\n        <button mat-raised-button color=\"primary\" [disabled]=\"!tagid || !mobile || progress\" (click)=\"reg($event)\">Register</button>\n    </mat-grid-tile>\n\n    <mat-grid-tile>\n\n    </mat-grid-tile>\n\n    <mat-grid-tile>\n        <button mat-raised-button color=\"warn\" [disabled]=\"!tagid || !mobile || progress\" (click)=\"clear()\">Clear</button>\n    </mat-grid-tile>\n  \n    <mat-grid-tile [colspan]=\"3\">\n    </mat-grid-tile>\n\n  </mat-grid-list>\n</form>\n\n<div id=\"recaptcha-container\"></div>"

/***/ }),

/***/ "./src/app/tag-registration/tag-registration.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/tag-registration/tag-registration.component.ts ***!
  \****************************************************************/
/*! exports provided: TagRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagRegistrationComponent", function() { return TagRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tag_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tag.service */ "./src/app/tag.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TagRegistrationComponent = /** @class */ (function () {
    function TagRegistrationComponent(zone, tagService, authService, route, router, location) {
        this.zone = zone;
        this.tagService = tagService;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.location = location;
    }
    TagRegistrationComponent.prototype.ngAfterViewInit = function () {
        // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        // Add 'implements AfterViewInit' to the class.
        this.recaptchaVerifier = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].RecaptchaVerifier('recaptcha-container');
    };
    TagRegistrationComponent.prototype.ngOnInit = function () {
        this.clear();
    };
    TagRegistrationComponent.prototype.clear = function () {
        this.tagid = null;
        this.mobile = null;
        this.msg = null;
        this.progress = false;
    };
    TagRegistrationComponent.prototype.reg = function (e) {
        var _this = this;
        this.progress = true;
        e.preventDefault();
        e.stopPropagation();
        this.authService.signInWithPhoneNumber(this.mobile, this.recaptchaVerifier, function (error, confirmationResult) {
            if (error) {
                console.error("TagRegistrationComponent: reg: " + error);
                _this.msg = error;
                _this.progress = false;
            }
            else {
                // I've got a confirmation object, lets go to the SMS confirmation screen
                // Need to use NgZone.run to go back to Angular zone exec env
                _this.zone.run(function () { return _this.router.navigate(["/regsms/" + _this.tagid + "/" + _this.mobile]); })
                    .then(function () { return console.log('TagRegistrationComponent: reg: navigated to regsms'); })
                    .catch(function (err) { return console.error(err); });
                console.log("TagRegistrationComponent: reg: confirmation for " + _this.mobile);
                console.log(confirmationResult);
            }
        });
    };
    TagRegistrationComponent.prototype.gotoBack = function () {
        this.location.back();
    };
    TagRegistrationComponent.prototype.generate = function () {
        var tagid = Math.random();
        tagid = tagid * 1e14;
        tagid = Math.floor(tagid);
        this.tagid = tagid.toString();
    };
    TagRegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tag-registration',
            template: __webpack_require__(/*! ./tag-registration.component.html */ "./src/app/tag-registration/tag-registration.component.html"),
            styles: [__webpack_require__(/*! ./tag-registration.component.css */ "./src/app/tag-registration/tag-registration.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _tag_service__WEBPACK_IMPORTED_MODULE_2__["TagService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], TagRegistrationComponent);
    return TagRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/tag.service.ts":
/*!********************************!*\
  !*** ./src/app/tag.service.ts ***!
  \********************************/
/*! exports provided: TagService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagService", function() { return TagService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TagService = /** @class */ (function () {
    function TagService(datePipe, db) {
        this.datePipe = datePipe;
        this.db = db;
        this.number$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](1000);
        this.start$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.order$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('id');
        this.tags = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.number$, this.start$, this.order$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_a) {
            var num = _a[0], start = _a[1], order = _a[2];
            return db.collection('tags', function (ref) {
                var query = ref;
                if (num) {
                    query = query.limit(num);
                }
                if (order) {
                    query = query.orderBy(order);
                    if (start) {
                        query = query.startAt(start);
                    }
                }
                return query;
            }).valueChanges();
        }));
        this.where$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.tag = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.where$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_a) {
            var where = _a[0];
            return db.collection('tags', function (ref) {
                var query = ref;
                if (where) {
                    query = query.where('id', '==', where);
                }
                query = query.limit(1);
                return query;
            }).valueChanges();
        }));
        this.mobile$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.userTags = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.mobile$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_a) {
            var mobile = _a[0];
            return db.collection('tags', function (ref) {
                var query = ref;
                query = query.where('reg.mobile', '==', mobile);
                return query;
            }).valueChanges();
        }));
    }
    TagService.prototype.getTagById = function (id) {
        this.where$.next(id);
        return this.tag;
    };
    TagService.prototype.getTagByIdCB = function (id, cb) {
        this.db.collection('tags').ref.where('id', '==', id)
            .get()
            .then(function (querySnapshot) {
            if (querySnapshot.empty) {
                cb(null);
            }
            else {
                cb(querySnapshot.docs[0]);
            }
        });
    };
    TagService.prototype.getTagsByMobile = function (mobile) {
        this.mobile$.next(mobile);
        return this.userTags;
    };
    TagService.prototype.setRegistration = function (id, docRef, reg) {
        var regDate = this.datePipe.transform(new Date(), 'dd-MM-yy');
        if (docRef) {
            console.log("TagService: update tag ref: " + docRef + " and id: " + id);
            this.db.collection('tags').doc(docRef).update({ reg: reg });
        }
        else {
            console.log("TagService: add new tag " + id);
            this.db.collection('tags').add({ id: id, regDate: regDate, reg: reg });
        }
    };
    TagService.prototype.setRegDate = function (id, cb) {
        var _this = this;
        this.db.collection('tags').ref.where('id', '==', id)
            .get()
            .then(function (querySnapshot) {
            if (querySnapshot.empty) {
                console.error("TagService: setRegDate: tag not found for id " + id);
                cb("TagService: setRegDate: tag not found for id " + id, null);
            }
            else {
                var doc = querySnapshot.docs[0];
                var regDate = _this.datePipe.transform(new Date(), 'dd-MM-yy');
                // update tag doc
                console.log("TagService: setRegDate: set regDate: " + regDate + " for id: " + id);
                _this.db.collection('tags').doc(doc.id).update({ regDate: regDate });
                cb(null, doc);
            }
        });
    };
    TagService.prototype.getTags = function () {
        return this.tags;
    };
    TagService.prototype.setNumber = function (num) {
        this.number$.next(num);
    };
    TagService.prototype.setStart = function (start) {
        this.start$.next(start);
    };
    TagService.prototype.setOrder = function (order) {
        this.order$.next(order);
    };
    TagService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], TagService);
    return TagService;
}());



/***/ }),

/***/ "./src/app/tags/tags.component.css":
/*!*****************************************!*\
  !*** ./src/app/tags/tags.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n}\n  \n.example-full-width {\n    width: 100%;\n}\n  \n.example-short {\n    width: 30%;\n}\n  \n.example-half {\n    width: 50%;\n}"

/***/ }),

/***/ "./src/app/tags/tags.component.html":
/*!******************************************!*\
  !*** ./src/app/tags/tags.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list *ngIf=\"tags; else loading\" cols=\"3\" rowHeight=\"3em\">\n    <mat-grid-tile [colspan]=\"3\">\n      <h3>Tags list</h3>\n    </mat-grid-tile>\n    <mat-grid-tile *ngFor=\"let tag of tags | slice:start:end\" [colspan]=\"3\">\n      <button mat-stroked-button (click)=\"gotoTagById(tag)\">{{tag.id}}</button>\n    </mat-grid-tile>\n</mat-grid-list>\n\n<mat-paginator *ngIf=\"tags; else loading\" [length]=\"tags.length\"\n              [pageSize]=\"10\"\n              [pageSizeOptions]=\"[1, 5, 10, 25, 100]\"\n              (page)=\"setPage($event)\">\n</mat-paginator>\n"

/***/ }),

/***/ "./src/app/tags/tags.component.ts":
/*!****************************************!*\
  !*** ./src/app/tags/tags.component.ts ***!
  \****************************************/
/*! exports provided: TagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsComponent", function() { return TagsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tag_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tag.service */ "./src/app/tag.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TagsComponent = /** @class */ (function () {
    function TagsComponent(tagService, route, router) {
        this.tagService = tagService;
        this.route = route;
        this.router = router;
    }
    TagsComponent.prototype.ngOnInit = function () {
        this.getTags();
        this.clear();
    };
    TagsComponent.prototype.clear = function () {
        this.start = 0;
        this.end = 10;
    };
    TagsComponent.prototype.getTags = function () {
        var _this = this;
        this.tagService.getTags()
            .subscribe(function (tags) { return _this.tags = tags; });
    };
    TagsComponent.prototype.gotoTagById = function (tag) {
        var tagId = tag ? tag.id : null;
        this.router.navigate(["/tag/" + tagId]);
    };
    TagsComponent.prototype.setPage = function (e) {
        console.log(e);
        var pageIndex = e.pageIndex, pageSize = e.pageSize;
        this.start = pageIndex * pageSize;
        this.end = this.start + pageSize;
    };
    TagsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tags',
            template: __webpack_require__(/*! ./tags.component.html */ "./src/app/tags/tags.component.html"),
            styles: [__webpack_require__(/*! ./tags.component.css */ "./src/app/tags/tags.component.css")]
        }),
        __metadata("design:paramtypes", [_tag_service__WEBPACK_IMPORTED_MODULE_2__["TagService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TagsComponent);
    return TagsComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"3\" rowHeight=\"3em\">\n\n  <mat-grid-tile>\n  </mat-grid-tile>\n\n  <mat-grid-tile>\n    <h3>Profile</h3>\n  </mat-grid-tile>\n\n  <mat-grid-tile>\n  </mat-grid-tile>\n\n  <mat-grid-tile *ngIf=\"name()\">\n    Name\n  </mat-grid-tile>\n\n  <mat-grid-tile *ngIf=\"name()\">\n  </mat-grid-tile>\n\n  <mat-grid-tile *ngIf=\"name()\">\n    {{name()}}\n  </mat-grid-tile>\n\n  <mat-grid-tile *ngIf=\"phone()\">\n    Mobile\n  </mat-grid-tile>\n\n  <mat-grid-tile *ngIf=\"phone()\">\n  </mat-grid-tile>\n\n  <mat-grid-tile *ngIf=\"phone()\">\n    {{phone()}}\n  </mat-grid-tile>\n\n  <mat-grid-tile *ngIf=\"rider\">\n      Nikname\n    </mat-grid-tile>\n  \n    <mat-grid-tile *ngIf=\"rider\">\n    </mat-grid-tile>\n  \n    <mat-grid-tile *ngIf=\"rider\">\n      {{rider.nikname}}\n    </mat-grid-tile>\n\n</mat-grid-list>\n\n<mat-accordion>\n    <mat-expansion-panel (opened)=\"getTags()\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Tags\n        </mat-panel-title>\n        <mat-panel-description>\n          Open to see your tags\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n  \n      <span *ngFor=\"let tag of tags\">\n          <button mat-stroked-button (click)=\"gotoTagById(tag)\">{{tag.id}}</button>&nbsp;\n      </span>\n  \n    </mat-expansion-panel>\n</mat-accordion>\n  \n<mat-grid-list cols=\"3\" rowHeight=\"3em\">\n\n  <mat-grid-tile [colspan]=\"3\">\n  </mat-grid-tile>\n\n  <mat-grid-tile *ngIf=\"authenticated()\">\n    <button mat-raised-button color=\"warn\" [disabled]=\"!authenticated()\" (click)=\"logout()\">Logout</button>\n  </mat-grid-tile>\n  \n  <mat-grid-tile *ngIf=\"authenticated()\">\n    \n  </mat-grid-tile>\n  \n  <mat-grid-tile *ngIf=\"authenticated()\">\n    <button mat-raised-button color=\"primary\" [disabled]=\"!authenticated()\" (click)=\"gotoUpdate()\">Update</button>\n  </mat-grid-tile>\n\n  <mat-grid-tile *ngIf=\"!authenticated()\" [colspan]=\"3\">\n    No user logged in\n  </mat-grid-tile>\n\n</mat-grid-list>\n\n\n  "

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tag_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tag.service */ "./src/app/tag.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _rider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rider.service */ "./src/app/rider.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(tagService, authService, riderService, route, router) {
        this.tagService = tagService;
        this.authService = authService;
        this.riderService = riderService;
        this.route = route;
        this.router = router;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.riderService.getRiderByMobile(this.authService.getUserPhone())
            .subscribe(function (riders) {
            if (riders) {
                if (riders.length > 0) {
                    _this.rider = riders[0];
                }
            }
        });
    };
    UserProfileComponent.prototype.ngAfterViewInit = function () {
        this.getTags();
    };
    UserProfileComponent.prototype.getTags = function () {
        var _this = this;
        this.tagService.getTagsByMobile(this.phone())
            .subscribe(function (tags) { return _this.tags = tags; });
    };
    UserProfileComponent.prototype.phone = function () {
        return this.authService.getUserPhone();
    };
    UserProfileComponent.prototype.name = function () {
        return this.authService.getUserName();
    };
    UserProfileComponent.prototype.authenticated = function () {
        return this.authService.authenticated();
    };
    UserProfileComponent.prototype.logout = function () {
        this.authService.logout();
    };
    UserProfileComponent.prototype.gotoUpdate = function () {
        this.router.navigate(["/update"]);
    };
    UserProfileComponent.prototype.gotoTagById = function (tag) {
        var tagId = tag ? tag.id : null;
        this.router.navigate(["/tag/" + tagId]);
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-profile/user-profile.component.css")],
            providers: [_tag_service__WEBPACK_IMPORTED_MODULE_2__["TagService"]]
        }),
        __metadata("design:paramtypes", [_tag_service__WEBPACK_IMPORTED_MODULE_2__["TagService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _rider_service__WEBPACK_IMPORTED_MODULE_4__["RiderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyARllasipU-7JhdvtkRV25er--zMyOPEW0',
        authDomain: 'cloud-firestore-test-d95bf.firebaseapp.com',
        databaseURL: 'https://cloud-firestore-test-d95bf.firebaseio.com',
        projectId: 'cloud-firestore-test-d95bf',
        storageBucket: 'cloud-firestore-test-d95bf.appspot.com',
        messagingSenderId: '740765205427'
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sergei/cloud-firestore-test/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map