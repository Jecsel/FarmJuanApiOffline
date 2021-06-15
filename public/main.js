(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+jqZ":
/*!****************************************************************!*\
  !*** ./src/app/components/auth/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");










function RegisterComponent_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const roles_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", roles_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", roles_r1, " ");
} }
class RegisterComponent {
    constructor() {
        this.Roles = ['SuperAdmin', 'Admin', 'Farmer'];
    }
    ngOnInit() {
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 17, vars: 1, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "signup-wrapper"], [1, "box"], ["mat-card-image", "", "src", "../../../assets/images/logo.png", 1, "signup-logo"], [1, "signup-form"], [1, "signup-full-width"], ["matInput", "", "placeholder", "Username"], ["matInput", "", "placeholder", "Password"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-stroked-button", "", "color", "accent", 1, "btn-block"], [3, "value"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Choose a role...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RegisterComponent_mat_option_14_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Roles);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardImage"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  min-height: 100vh;\n  background: #e2e2e2;\n}\n\n.app-header[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 2;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\n.signup-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.signup-wrapper[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%] {\n  min-width: 100%;\n  max-width: 300px;\n  width: 100%;\n}\n\n.signup-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.signup-wrapper[_ngcontent-%COMP%]   .signup-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.signup-wrapper[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  padding: 40px 70px 50px;\n}\n\n.signup-wrapper[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n  border: 1px solid currentColor;\n  line-height: 54px;\n  background: #FFF7FA;\n}\n\n.signup-wrapper[_ngcontent-%COMP%]   .mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 0.8375em 0;\n}\n\n.signup-wrapper[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  display: block;\n  font-weight: 700;\n}\n\n.signup-wrapper[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin: 0;\n}\n\n.positronx[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #ffffff;\n}\n\n.box[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  opacity: 1;\n  float: left;\n  padding: 60px 50px 40px 50px;\n  width: 100%;\n  background: #fff;\n  border-radius: 10px;\n  transform: scale(1);\n  -webkit-transform: scale(1);\n  -ms-transform: scale(1);\n  z-index: 5;\n  max-width: 330px;\n}\n\n.box[_ngcontent-%COMP%]   .signup-logo[_ngcontent-%COMP%] {\n  width: calc(19% + 32px);\n}\n\n.box[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  transform: scale(0.95);\n  -webkit-transform: scale(0.95);\n  -ms-transform: scale(0.95);\n  top: -20px;\n  opacity: 0.8;\n  z-index: -1;\n}\n\n.box[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 100%;\n  height: 30px;\n  border-radius: 10px;\n  position: absolute;\n  top: -10px;\n  background: rgba(255, 255, 255, 0.6);\n  left: 0;\n  transform: scale(0.95);\n  -webkit-transform: scale(0.95);\n  -ms-transform: scale(0.95);\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsWUFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLGlEQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUdBO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGlIQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0FBQUY7O0FBQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0U7RUFDRSxXQUFBO0FBQ0o7O0FBQ0U7RUFDRSxXQUFBO0FBQ0o7O0FBQ0U7RUFDRSx1QkFBQTtBQUNKOztBQUNFO0VBQ0UsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0U7RUFDRSxtQkFBQTtBQUNKOztBQUNFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQUk7RUFDSSxlQUFBO0VBQ0EsU0FBQTtBQUVSOztBQUlBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFFRTtFQUNFLHVCQUFBO0FBQUo7O0FBRUU7RUFDRSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFBSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSxPQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQUFKIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCxcclxuYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6ICNlMmUyZTI7XHJcblxyXG59XHJcblxyXG4uYXBwLWhlYWRlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiAyO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAuMTIpO1xyXG59XHJcblxyXG4uc2lnbnVwLXdyYXBwZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAuc2lnbnVwLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuYnRuLWJsb2NrIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuc2lnbnVwLWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5tYXQtY2FyZCB7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDcwcHggNTBweDtcclxuICB9XHJcbiAgLm1hdC1zdHJva2VkLWJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XHJcbiAgICBsaW5lLWhlaWdodDogNTRweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkY3RkE7XHJcbiAgfVxyXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gICAgcGFkZGluZzogMC44Mzc1ZW0gMDtcclxuICB9XHJcbiAgbWF0LWNhcmQtaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWF0LWNhcmQtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4ucG9zaXRyb254IHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5ib3gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDA7XHJcbiAgb3BhY2l0eTogMTtcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nOiA2MHB4IDUwcHggNDBweCA1MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB6LWluZGV4OiA1O1xyXG4gIG1heC13aWR0aDogMzMwcHg7XHJcbiAgLnNpZ251cC1sb2dve1xyXG4gICAgd2lkdGg6IGNhbGMoMTklICsgMzJweCk7XHJcbiAgfVxyXG4gIC5iYWNrIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoLjk1KTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoLjk1KTtcclxuICAgIHRvcDogLTIwcHg7XHJcbiAgICBvcGFjaXR5OiAuODtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuICA6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0xMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNik7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC45NSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfVxyXG4gIFxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\Projects\Batman\DatabaseSystemRepos\RsbsaWeb\src\main.ts */"zUnb");


/***/ }),

/***/ "3WGE":
/*!*************************************************************!*\
  !*** ./src/app/services/api-service/api-service.service.ts ***!
  \*************************************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class ApiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                Accept: '*/*',
                'Content-Type': 'application/json'
            }),
        };
    }
    // ----------- GET REQUEST -------------//
    getInitData() {
        return this.httpClient.get(this.baseUrl + 'v1/enrollment', this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            return response;
        }));
    }
    getFarmerProfile(id) {
        return this.httpClient.get(this.baseUrl + 'v1/enrollment/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            localStorage.setItem('farmerProfile', response);
            return response;
        }));
    }
    getLivelihood() {
        return this.httpClient.get(this.baseUrl + 'v1/enrollment/get_main_livelihood')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            localStorage.setItem('livelihood_data', response.toString());
            return response;
        }));
    }
    // ----------- POST REQUEST -------------//
    postProfile(model) {
        return this.httpClient.post(this.baseUrl + 'v1/enrollment', model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            localStorage.setItem('profileID', response.profile_id);
            return response;
        }));
    }
    postLivelihood(model) {
        return this.httpClient.post(this.baseUrl + 'v1/enrollment/create_livelihoods', model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            return response;
        }));
    }
    getAllFarmers(model) {
        return this.httpClient.post(this.baseUrl + 'v1/dashboard/list', model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            return response;
        }));
    }
    login(model) {
        return this.httpClient.post(this.baseUrl + 'v1/user/sign_in', model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            const user = response;
            if (user) {
                localStorage.setItem('token', user.token);
            }
            return;
        }));
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://localhost:3002/'
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

/***/ "CO7N":
/*!*******************************************************!*\
  !*** ./src/app/components/angular-material.module.ts ***!
  \*******************************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/tree */ "FvrZ");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _farm_juan_home_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./farm-juan/home/dashboard/dashboard.component */ "xLmw");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _farm_juan_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./farm-juan/main-header/main-header.component */ "XKf/");
/* harmony import */ var _farm_juan_home_home_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./farm-juan/home/home.component */ "WLto");
/* harmony import */ var _farm_juan_home_farmer_farmer_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./farm-juan/home/farmer/farmer.component */ "yIyN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _farm_juan_home_farmer_enroll_profile_profile_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./farm-juan/home/farmer/enroll-profile/profile.component */ "Pkb/");
/* harmony import */ var _farm_juan_home_farmer_enroll_livelihood_enroll_livelihood_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./farm-juan/home/farmer/enroll-livelihood/enroll-livelihood.component */ "RoTw");
/* harmony import */ var _farm_juan_home_farmer_enroll_parcel_enroll_parcel_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./farm-juan/home/farmer/enroll-parcel/enroll-parcel.component */ "Koon");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/core */ "fXoL");
















































const materialModules = [
    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["CdkTreeModule"],
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__["MatSnackBarModule"],
    _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__["MatSortModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
    _angular_material_tree__WEBPACK_IMPORTED_MODULE_27__["MatTreeModule"],
    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"],
    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
    _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__["MatBadgeModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_29__["MatGridListModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_31__["MatDatepickerModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_33__["MatStepperModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_39__["ReactiveFormsModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"]
];
class AngularMaterialModule {
}
AngularMaterialModule.ɵfac = function AngularMaterialModule_Factory(t) { return new (t || AngularMaterialModule)(); };
AngularMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵdefineNgModule"]({ type: AngularMaterialModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_35__["AppComponent"]] });
AngularMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            ...materialModules
        ], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["CdkTreeModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_27__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__["MatBadgeModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_29__["MatGridListModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_31__["MatDatepickerModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_33__["MatStepperModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_39__["ReactiveFormsModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵsetNgModuleScope"](AngularMaterialModule, { declarations: [_farm_juan_home_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_34__["DashboardComponent"],
        _farm_juan_home_farmer_farmer_component__WEBPACK_IMPORTED_MODULE_38__["FarmerComponent"],
        _farm_juan_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_36__["MainHeaderComponent"],
        _farm_juan_home_home_component__WEBPACK_IMPORTED_MODULE_37__["HomeComponent"],
        _farm_juan_home_farmer_enroll_profile_profile_component__WEBPACK_IMPORTED_MODULE_40__["ProfileComponent"],
        _farm_juan_home_farmer_enroll_livelihood_enroll_livelihood_component__WEBPACK_IMPORTED_MODULE_41__["EnrollLivelihoodComponent"],
        _farm_juan_home_farmer_enroll_parcel_enroll_parcel_component__WEBPACK_IMPORTED_MODULE_42__["EnrollParcelComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["CdkTreeModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_27__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__["MatBadgeModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_29__["MatGridListModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_31__["MatDatepickerModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_33__["MatStepperModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_39__["ReactiveFormsModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"]], exports: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["CdkTreeModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_27__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__["MatBadgeModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_29__["MatGridListModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_31__["MatDatepickerModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_33__["MatStepperModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_39__["ReactiveFormsModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"]] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵsetComponentScope"](_farm_juan_home_farmer_farmer_component__WEBPACK_IMPORTED_MODULE_38__["FarmerComponent"], [_farm_juan_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_36__["MainHeaderComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _farm_juan_home_farmer_enroll_profile_profile_component__WEBPACK_IMPORTED_MODULE_40__["ProfileComponent"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_39__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_39__["FormControlDirective"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggle"], _farm_juan_home_farmer_enroll_livelihood_enroll_livelihood_component__WEBPACK_IMPORTED_MODULE_41__["EnrollLivelihoodComponent"],
    _farm_juan_home_farmer_enroll_parcel_enroll_parcel_component__WEBPACK_IMPORTED_MODULE_42__["EnrollParcelComponent"]], []);


/***/ }),

/***/ "HzFZ":
/*!**********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-service/api-service.service */ "3WGE");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");











class LoginComponent {
    constructor(router, apiService) {
        this.router = router;
        this.apiService = apiService;
        this.hide = true;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
    }
    ngOnInit() {
        this.data = { credential: {} };
    }
    submitLogin() {
        this.data.credential = this.form.value;
        this.apiService.login(this.data).subscribe(next => {
            this.router.navigate(['home']);
        }, err => {
            this.error_message = err.error;
            alert(this.error_message);
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 19, vars: 5, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "login-wrapper"], [1, "box"], ["mat-card-image", "", "src", "../../../assets/images/logo.png", 1, "login-logo"], [1, "login-form", 3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "login-full-width"], ["matInput", "", "placeholder", "Username", "required", "required", "formControlName", "username"], ["matInput", "", "required", "required", "formControlName", "password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-stroked-button", "", "color", "accent", 1, "btn-block"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() { return ctx.submitLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_14_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardImage"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  min-height: 100vh;\n  background: #e2e2e2;\n}\n\n.app-header[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 2;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\n.login-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #eee;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%] {\n  min-width: 100%;\n  max-width: 300px;\n  width: 100%;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .login-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  padding: 40px 70px 50px;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n  border: 1px solid currentColor;\n  line-height: 54px;\n  background: #FFF7FA;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 0.8375em 0;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  display: block;\n  font-weight: 700;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin: 0;\n}\n\n.box[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  opacity: 1;\n  float: left;\n  padding: 60px 50px 40px 50px;\n  width: 100%;\n  background: #fff;\n  border-radius: 10px;\n  transform: scale(1);\n  -webkit-transform: scale(1);\n  -ms-transform: scale(1);\n  z-index: 5;\n  max-width: 330px;\n}\n\n.box[_ngcontent-%COMP%]   .login-logo[_ngcontent-%COMP%] {\n  width: calc(19% + 32px);\n}\n\n.box[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  transform: scale(0.95);\n  -webkit-transform: scale(0.95);\n  -ms-transform: scale(0.95);\n  top: -20px;\n  opacity: 0.8;\n  z-index: -1;\n}\n\n.box[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 100%;\n  border-radius: 10px;\n  position: absolute;\n  top: -10px;\n  background: rgba(255, 255, 255, 0.6);\n  left: 0;\n  transform: scale(0.95);\n  -webkit-transform: scale(0.95);\n  -ms-transform: scale(0.95);\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsWUFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLGlEQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUdBO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGlIQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFDRTtFQUNFLFdBQUE7QUFDSjs7QUFDRTtFQUNFLFdBQUE7QUFDSjs7QUFDRTtFQUNFLHVCQUFBO0FBQ0o7O0FBQ0U7RUFDRSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDRTtFQUNFLG1CQUFBO0FBQ0o7O0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFBSTtFQUNJLGVBQUE7RUFDQSxTQUFBO0FBRVI7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFFRTtFQUNFLHVCQUFBO0FBQUo7O0FBRUU7RUFDRSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFBSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLE9BQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FBQUoiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLFxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogI2UyZTJlMjtcclxuXHJcbn1cclxuXHJcbi5hcHAtaGVhZGVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIC4xMik7XHJcbn1cclxuXHJcbi5sb2dpbi13cmFwcGVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI2VlZTtcclxuICAubG9naW4tZm9ybSB7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5idG4tYmxvY2sge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5sb2dpbi1mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAubWF0LWNhcmQge1xyXG4gICAgcGFkZGluZzogNDBweCA3MHB4IDUwcHg7XHJcbiAgfVxyXG4gIC5tYXQtc3Ryb2tlZC1idXR0b24ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xyXG4gICAgbGluZS1oZWlnaHQ6IDU0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGN0ZBO1xyXG4gIH1cclxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICAgIHBhZGRpbmc6IDAuODM3NWVtIDA7XHJcbiAgfVxyXG4gIG1hdC1jYXJkLWhlYWRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hdC1jYXJkLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmJveCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDYwcHggNTBweCA0MHB4IDUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIHotaW5kZXg6IDU7XHJcbiAgbWF4LXdpZHRoOiAzMzBweDtcclxuICAubG9naW4tbG9nb3tcclxuICAgIHdpZHRoOiBjYWxjKDE5JSArIDMycHgpO1xyXG4gIH1cclxuICAuYmFjayB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC45NSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjk1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKC45NSk7XHJcbiAgICB0b3A6IC0yMHB4O1xyXG4gICAgb3BhY2l0eTogLjg7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9XHJcbiAgOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjYpO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoLjk1KTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoLjk1KTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuICBcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "Koon":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/farm-juan/home/farmer/enroll-parcel/enroll-parcel.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: EnrollParcelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrollParcelComponent", function() { return EnrollParcelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-service/api-service.service */ "3WGE");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");










function EnrollParcelComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "MAIN LIVELIHOOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EnrollParcelComponent_div_11_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.closeDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "OWNERSHIP DOCUMENT NO.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "CHOOSE FILE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "MUNICIPALITY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "BARANGAY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "LOT NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "TOTAL FARM AREA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "FARM LAND DESCRIPTION");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-checkbox", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "REGISTERED OWNER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-checkbox", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "OTHERS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-form-field", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Please Specify");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-checkbox", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "TENANT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-form-field", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Name of Land Owner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-checkbox", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "LESSEE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-form-field", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Name of Lessee");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "CROP COMMODITY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-form-field", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Please Specify");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "FOR LIVESTOCK/POULTRY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-form-field", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Specify head count");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-checkbox", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "FARM AREA (HA)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-form-field", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "FARM TYPE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-form-field", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Please Specify");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "mat-label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "PRACTIONER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "mat-form-field", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Please Specify");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "mat-card-actions", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Add Farm Land Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EnrollParcelComponent_div_11_Template_button_click_119_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.sendData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.livelihoodFormGroup);
} }
class EnrollParcelComponent {
    constructor(formBuilder, apiService) {
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.filterIsOpen = false;
    }
    ngOnInit() {
        this.declareFormBuilder();
        this.farmerID = localStorage.getItem("profileID");
        this.initData();
    }
    declareFormBuilder() {
        this.livelihoodFormGroup = this.formBuilder.group({
            ownership_document_no: [''],
            document_file: [''],
            municipality_id: [''],
            brgy: [''],
            total_farm_area: [''],
            is_registered_owner: [''],
            is_other: [''],
            other_spec: [''],
            is_tenant: [''],
            tenant_spec: [''],
            is_lessee: [''],
            lessee_spec: [''],
            crop_commodity_id: [''],
            head_count: [''],
            farm_area: [''],
            farm_type_id: [''],
            organic_practioner: [''],
        });
    }
    initData() {
    }
    sendData() {
        alert("Successfully Saved!");
    }
    openDialog() {
        this.filterIsOpen = true;
        // this.dialog.open(FilterDialogComponent);
    }
    closeDialog() {
        this.filterIsOpen = false;
        // this.dialog.open(FilterDialogComponent);
    }
}
EnrollParcelComponent.ɵfac = function EnrollParcelComponent_Factory(t) { return new (t || EnrollParcelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
EnrollParcelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EnrollParcelComponent, selectors: [["app-enroll-parcel"]], decls: 12, vars: 1, consts: [[1, "container"], [1, "livelihood-container"], [1, "d-flex", "justify-content-center", "mt-3"], ["mat-card-avatar", "", "src", "../../../assets/images/document.png", "alt", "", 1, "resource-img"], [1, "d-flex", "justify-content-center"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["class", "parcel-container", 4, "ngIf"], [1, "parcel-container"], [1, "parcel-box"], [1, "p-5"], [1, "d-flex", "justify-content-between"], [1, "mt-5"], ["mat-mini-fab", "", "color", "primary", "aria-label", "Example icon button with a menu icon", 3, "click"], [3, "formGroup"], [1, "break-line"], [1, "row"], [1, "col-4"], ["matInput", "", "formControlName", "ownership_document_no", "required", ""], ["matInput", "", "formControlName", "document_file", "required", ""], ["matInput", "", "formControlName", "municipality_id", "required", ""], ["matInput", "", "formControlName", "brgy", "required", ""], ["matInput", "", "formControlName", "lot_no", "required", ""], ["matInput", "", "formControlName", "total_farm_area", "required", ""], [1, "card", "p-3"], [1, "description-container", "desc-content"], ["formControlName", "is_registered_owner", 1, "ml-3"], [1, "d-flex", "flex-column"], ["formControlName", "is_other", 1, "pl-3"], [1, "ml-3"], ["matInput", "", "formControlName", "other_spec"], ["formControlName", "is_tenant", 1, "pl-3"], ["matInput", "", "formControlName", "tenant_spec"], ["formControlName", "is_lessee", 1, "pl-3"], ["matInput", "", "formControlName", "lessee_spec"], [1, "card", "desc-content", "mt-2", "p-2"], [1, "pl-3"], ["matInput", "", "formControlName", "crop_commodity_id"], ["matInput", "", "formControlName", "head_count"], ["matInput", "", "formControlName", "farm_area"], ["matInput", "", "formControlName", "farm_type_id"], ["matInput", "", "formControlName", "organic_practioner"], [1, "d-flex", "justify-content-center", "pt-3"], ["mat-raised-button", "", "color", "accent", 1, "mb-1"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function EnrollParcelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EnrollParcelComponent_Template_button_click_7_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add Parcel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EnrollParcelComponent_div_11_Template, 121, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filterIsOpen);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckbox"]], styles: [".livelihood-container[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 40px -20px rgba(56, 73, 107, 0.2);\n  border: 1px solid #ddd;\n  min-height: 420px;\n}\n.livelihood-container[_ngcontent-%COMP%]   .break-line[_ngcontent-%COMP%] {\n  margin: 10px 0px;\n  border-bottom: 1px solid #ddd;\n}\n.livelihood-container[_ngcontent-%COMP%]   .description-container[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 15px;\n}\n.livelihood-container[_ngcontent-%COMP%]   .resource-img[_ngcontent-%COMP%] {\n  height: 120px;\n  width: 120px;\n  border: 2px solid lightgrey;\n  padding: 5px;\n}\n.livelihood-container[_ngcontent-%COMP%]   .desc-content[_ngcontent-%COMP%] {\n  background-color: #eee;\n}\n.livelihood-container[_ngcontent-%COMP%]   .parcel-container[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.5);\n}\n.livelihood-container[_ngcontent-%COMP%]   .parcel-container[_ngcontent-%COMP%]   .parcel-box[_ngcontent-%COMP%] {\n  position: fixed;\n  min-width: 400px;\n  max-width: 60%;\n  max-height: 70%;\n  overflow: scroll;\n  top: 100px;\n  left: 0px;\n  right: 0px;\n  margin: auto;\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n  background: #fff;\n  color: rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxlbnJvbGwtcGFyY2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0RBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFBSTtFQUNJLGdCQUFBO0VBQ0EsNkJBQUE7QUFFUjtBQUFJO0VBQ0ksc0JBQUE7RUFDQSxhQUFBO0FBRVI7QUFBSTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0FBRVI7QUFBSTtFQUNJLHNCQUFBO0FBRVI7QUFBSTtFQUNJLHlCQUFBO0FBRVI7QUFEUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsOEhBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBR1oiLCJmaWxlIjoiZW5yb2xsLXBhcmNlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXZlbGlob29kLWNvbnRhaW5lcntcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCA0MHB4IC0yMHB4IHJnYig1NiA3MyAxMDcgLyAyMCUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIG1pbi1oZWlnaHQ6IDQyMHB4O1xyXG4gICAgLmJyZWFrLWxpbmV7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgIH1cclxuICAgIC5kZXNjcmlwdGlvbi1jb250YWluZXJ7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLnJlc291cmNlLWltZ3tcclxuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG4gICAgLmRlc2MtY29udGVudHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgfVxyXG4gICAgLnBhcmNlbC1jb250YWluZXJ7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAucGFyY2VsLWJveHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogNzAlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgICAgICAgICB0b3A6IDEwMHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDExcHggMTVweCAtN3B4IHJnYigwIDAgMCAvIDIwJSksIDBweCAyNHB4IDM4cHggM3B4IHJnYigwIDAgMCAvIDE0JSksIDBweCA5cHggNDZweCA4cHggcmdiKDAgMCAwIC8gMTIlKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Pkb/":
/*!**************************************************************************************!*\
  !*** ./src/app/components/farm-juan/home/farmer/enroll-profile/profile.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _farmer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../farmer.component */ "yIyN");
/* harmony import */ var src_app_services_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api-service/api-service.service */ "3WGE");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "FKr1");



















function ProfileComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, "Personal Details");
} }
function ProfileComponent_mat_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", option_r17.name, " ");
} }
function ProfileComponent_mat_option_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const region_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", region_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", region_r18.name, " ");
} }
function ProfileComponent_mat_option_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const province_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", province_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", province_r19.name, " ");
} }
function ProfileComponent_mat_option_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const municipality_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", municipality_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", municipality_r20.name, " ");
} }
function ProfileComponent_mat_option_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const civil_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", civil_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", civil_r21.name, " ");
} }
function ProfileComponent_ng_template_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, "Almost there");
} }
function ProfileComponent_mat_option_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const education_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", education_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", education_r22.name, " ");
} }
function ProfileComponent_ng_template_194_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, "Done");
} }
class ProfileComponent {
    constructor(farmerComponent, formBuilder, apiService) {
        this.farmerComponent = farmerComponent;
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.profileControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.genderControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.regionControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.provinceControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.municipalityControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.civilControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.educationControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.declareFormBuilder();
            this.getInitData();
        });
    }
    declareFormBuilder() {
        this.profileFormGroup = this.formBuilder.group({
            last_name: [''],
            first_name: ['Kit'],
            middle_name: ['Galicia'],
            extension_name: ['Jr'],
            gender: [''],
            house: ['823'],
            street: ['B Mayor'],
            brgy: ['177'],
            region: [''],
            province: [''],
            municipality: [''],
            user_contact_number: ['09384170763'],
            dob: ['1995-04-19 13:05:32'],
            place_of_birth: ['Tabugon Santa Fe Romblon'],
            religion: ['Roman Catholic'],
            civil_status: [''],
            spouse_name: ['None'],
            mother_name: ['Jho'],
            agrarian: [true]
        });
        this.otherFormGroup = this.formBuilder.group({
            education_attaintments: [1],
            person_to_notify: ['Abegail Cruz'],
            emergency_person_number: ['09504185332'],
            household_head: [false],
            household_name: ['Ron'],
            household_head_relationship: ['Father'],
            numbers_household_member: ['10'],
            numbers_of_male: ['4'],
            numbers_of_female: ['6'],
            person_with_disability: [true],
            four_p_beneficiary: [true],
            member_of_association: [true],
            association_number: ['AS - 0011'],
            member_of_indigenous_group: [true],
            with_government_id: [true],
            government_number: ['SSS-23423-0'],
            indigenous_id: ['IND-9378']
        });
    }
    submitProfile() {
        this.data = this.setResponseBody();
        console.log('submit profile', this.data);
        this.apiService.postProfile(this.data).subscribe((res) => {
            this.farmerID == undefined || this.farmerID == null || this.farmerID == '' ? this.farmerComponent.ngOnInit() : '';
            alert(res.message);
        }, err => {
            console.log(err.message);
        });
    }
    setResponseBody() {
        this.responseBody = { enrollment: Object.assign(Object.assign({}, this.profileFormGroup.value), this.otherFormGroup.value) };
        console.log('responseBody', this.responseBody);
        this.responseBody.enrollment.gender = this.genderControl.value.id;
        this.responseBody.enrollment.region = this.regionControl.value.id;
        this.responseBody.enrollment.province = this.provinceControl.value.id;
        this.responseBody.enrollment.municipality = this.municipalityControl.value.id;
        this.responseBody.enrollment.civil_status = this.civilControl.value.id;
        this.responseBody.enrollment.education_attaintments = this.educationControl.value.id;
        this.farmerID != undefined && this.farmerID != '' && this.farmerID == null ? this.responseBody.enrollment.profile_id = this.farmerID : '';
        return this.responseBody;
    }
    getInitData() {
        this.apiService.getInitData()
            .subscribe(res => {
            this.farmData = res;
            console.log(this.farmData);
            this.regionOptions = this.farmData.regions;
            this.genderOptions = this.farmData.genders;
            this.provinceOptions = this.farmData.provinces;
            this.municipalityOptions = this.farmData.municipalities;
            this.civilOptions = this.farmData.civil_statuses;
            this.educationOptions = this.farmData.education_attaintments;
            this.filterEducation();
            this.filterRegion();
            this.filterGender();
            this.filterProvince();
            this.filterMunicipality();
            this.filterCivil();
        }, error => {
            alert(error.data.message);
        });
        this.farmerID = localStorage.getItem("profileID");
        if (this.farmerID != null && this.farmerID != '') {
            this.apiService
                .getFarmerProfile(parseInt(this.farmerID))
                .subscribe((res) => {
                this.farmerProfile = res;
                this.setNewVal();
            }, (err) => {
                // console.log(err.message);
                alert(err.message);
            });
        }
    }
    filterEducation() {
        this.educationFilteredOptions = this.educationControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(name => name ? this._filterEducation(name) : this.educationOptions.slice()));
    }
    filterCivil() {
        this.civilFilteredOptions = this.civilControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(name => name ? this._filterCivil(name) : this.civilOptions.slice()));
    }
    filterProvince() {
        this.provinceFilteredOptions = this.provinceControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(name => name ? this._filterProvince(name) : this.provinceOptions.slice()));
    }
    filterMunicipality() {
        this.municipalityFilteredOptions = this.municipalityControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(name => name ? this._filterMunicipality(name) : this.municipalityOptions.slice()));
    }
    filterRegion() {
        this.regionFilteredOptions = this.regionControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(name => name ? this._filterRegion(name) : this.regionOptions.slice()));
    }
    filterGender() {
        this.genderFilteredOptions = this.genderControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(name => name ? this._filterGender(name) : this.genderOptions.slice()));
    }
    setNewVal() {
        var p = this.farmerProfile.profile;
        var c = this.profileFormGroup.controls;
        var o = this.otherFormGroup.controls;
        c.last_name.setValue(p.last_name);
        c.first_name.setValue(p.first_name);
        c.middle_name.setValue(p.extension_name);
        c.extension_name.setValue(p.extension_name);
        this.genderControl.setValue(p.gender);
        c.house.setValue(p.house);
        c.street.setValue(p.street);
        c.brgy.setValue(p.brgy);
        this.regionControl.setValue(p.region);
        this.provinceControl.setValue(p.province);
        this.municipalityControl.setValue(p.municipality);
        c.user_contact_number.setValue(p.user_contact_number);
        c.dob.setValue(p.dob);
        c.place_of_birth.setValue(p.place_of_birth);
        c.religion.setValue(p.religion);
        this.civilControl.setValue(p.civil_status);
        c.spouse_name.setValue(p.spouse_name);
        c.mother_name.setValue(p.mother_name);
        c.agrarian.setValue(p.agrarian);
        this.educationControl.setValue(p.education_attaintment);
        o.person_to_notify.setValue(p.emergency_person_name);
        o.emergency_person_number.setValue(p.emergency_person_number);
        o.household_head.setValue(p.household_head);
        o.household_name.setValue(p.household_name);
        o.household_head_relationship.setValue(p.household_head_relationship);
        o.numbers_household_member.setValue(p.numbers_household_member);
        o.numbers_of_male.setValue(p.numbers_of_male);
        o.numbers_of_female.setValue(p.numbers_of_female);
        o.person_with_disability.setValue(p.pwd);
        o.four_p_beneficiary.setValue(p.four_p_beneficiary);
        o.member_of_association.setValue(p.member_association);
        o.association_number.setValue(p.association_number);
        o.member_of_indigenous_group.setValue(p.indigenous_group);
        o.indigenous_id.setValue(p.indigenous_id);
    }
    displayFn(common) {
        return common && common.name ? common.name : '';
    }
    _filterCivil(name) {
        const filterValue = name.toLowerCase();
        return this.civilOptions.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
    }
    _filterEducation(name) {
        const filterValue = name.toLowerCase();
        return this.educationOptions.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
    }
    _filterProvince(name) {
        const filterValue = name.toLowerCase();
        return this.provinceOptions.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
    }
    _filterMunicipality(name) {
        const filterValue = name.toLowerCase();
        return this.municipalityOptions.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
    }
    _filterGender(name) {
        const filterValue = name.toLowerCase();
        return this.genderOptions.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
    }
    _filterRegion(name) {
        const filterValue = name.toLowerCase();
        return this.regionOptions.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_farmer_component__WEBPACK_IMPORTED_MODULE_5__["FarmerComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
                provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["STEPPER_GLOBAL_OPTIONS"], useValue: { showError: true }
            }])], decls: 202, vars: 42, consts: [[1, "container"], [1, "profile-container"], ["stepper", ""], ["errorMessage", "Field is required!", 3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["cols", "3", "rowHeight", "1:1"], ["matInput", "", "placeholder", "Last name", "formControlName", "last_name", "required", ""], ["matInput", "", "placeholder", "Last name", "formControlName", "first_name", "required", ""], ["matInput", "", "placeholder", "Last name", "formControlName", "middle_name", "required", ""], ["cols", "3", "rowHeight", "2:1"], ["matInput", "", "placeholder", "Extension name", "formControlName", "extension_name", "required", ""], [1, "example-full-width"], ["type", "text", "matInput", "", 3, "formControl", "matAutocomplete"], [3, "displayWith"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "house", "required", ""], ["matInput", "", "formControlName", "street", "required", ""], ["matInput", "", "formControlName", "brgy", "required", ""], ["autoRegion", "matAutocomplete"], ["autoProvince", "matAutocomplete"], ["autoMunicipality", "matAutocomplete"], ["matInput", "", "formControlName", "user_contact_number", "required", ""], ["appearance", "fill", 1, "bDateField"], ["matInput", "", "formControlName", "dob", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "formControlName", "place_of_birth", "required", ""], ["matInput", "", "formControlName", "religion", "required", ""], ["autoCivil", "matAutocomplete"], ["matInput", "", "formControlName", "spouse_name", "required", ""], ["cols", "1", "rowHeight", "2:1"], ["matInput", "", "formControlName", "mother_name", "required", ""], ["mat-raised-button", "", "color", "primary", "matStepperNext", ""], ["errorMessage", "Field is Required", 3, "stepControl"], ["cols", "2", "rowHeight", "2:1"], ["autoEducation", "matAutocomplete"], ["matInput", "", "formControlName", "person_to_notify", "required", ""], ["maxlength", "11", "matInput", "", "formControlName", "emergency_person_number", "required", ""], ["formControlName", "household_head", 1, "pl-3"], ["matInput", "", "formControlName", "household_name"], ["matInput", "", "formControlName", "household_head_relationship"], ["matInput", "", "formControlName", "numbers_household_member"], ["matInput", "", "formControlName", "numbers_of_male"], ["matInput", "", "formControlName", "numbers_of_female"], ["cols", "1"], [1, "row"], [1, "col-6", "ml15"], ["formControlName", "person_with_disability"], [1, "col-6"], ["formControlName", "four_p_beneficiary"], ["formControlName", "with_government_id"], [1, "mr-2"], ["matInput", "", "formControlName", "government_number"], ["formControlName", "member_of_association"], ["matInput", "", "formControlName", "association_number"], ["formControlName", "member_of_indigenous_group"], ["matInput", "", "formControlName", "indigenous_id"], ["mat-raised-button", "", "color", "accent", "matStepperPrevious", ""], ["mat-raised-button", "", "color", "accent", "matStepperPrevious", "", 1, "mr-2"], ["mat-raised-button", "", "color", "primary", 1, "btn-block", "wAuto", 3, "click"], [3, "value"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-horizontal-stepper", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ProfileComponent_ng_template_5_Template, 1, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-grid-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Middle Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-grid-list", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Extension Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Sex");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "mat-autocomplete", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, ProfileComponent_mat_option_30_Template, 2, 2, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](31, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "mat-grid-list", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "House/Lot/Bldg. No");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Street/Sitio/Subdv.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Barangay");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "mat-grid-list", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Region");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "mat-autocomplete", 14, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](52, ProfileComponent_mat_option_52_Template, 2, 2, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](53, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "Province");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](57, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "mat-autocomplete", 14, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, ProfileComponent_mat_option_60_Template, 2, 2, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](61, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "Municipality");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](65, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "mat-autocomplete", 14, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](68, ProfileComponent_mat_option_68_Template, 2, 2, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](69, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "mat-grid-list", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](74, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "mat-form-field", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, "Date of Birth");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](78, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](79, "mat-datepicker-toggle", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](80, "mat-datepicker", null, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, "Place of Birth");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](85, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "mat-grid-list", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, "Religion");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](90, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](93, "Civil Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](94, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "mat-autocomplete", 14, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](97, ProfileComponent_mat_option_97_Template, 2, 2, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](98, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, "Name of Spouse (If Married)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](102, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "mat-grid-list", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](106, "MOTHER'S MAIDEN NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](107, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](111, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "mat-step", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](114, ProfileComponent_ng_template_114_Template, 1, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "mat-grid-list", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](118, "Highest Form Of Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](119, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "mat-autocomplete", 14, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](122, ProfileComponent_mat_option_122_Template, 2, 2, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](123, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](126, "Person to notify in case of emergency");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](127, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](130, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](131, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](132, "mat-grid-list", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](133, "mat-checkbox", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](134, "Household Head");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](135, "mat-grid-list", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](136, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](137, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](138, "If No, Name of Household Head");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](139, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](140, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](141, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](142, "Relationship");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](143, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](144, "mat-grid-list", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](145, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](146, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](147, "No. Of Living Household Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](148, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](149, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](150, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](151, "No. Of Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](152, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](153, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](154, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](155, "No. Of Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](156, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](157, "mat-grid-list", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](158, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](159, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](160, "mat-checkbox", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](161, "Person With Disability (PWD)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](162, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](163, "mat-checkbox", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](164, "4P'S BENEFICIARY");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](165, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](166, "mat-checkbox", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](167, "WITH GOVERNMENT ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](168, "mat-form-field", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](169, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](170, "If Yes, Please Specify ID Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](171, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](172, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](173, "mat-checkbox", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](174, "Member Of Any Farmers Association");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](175, "mat-form-field", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](176, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](177, "If Yes, Please Specify ID Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](178, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](179, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](180, "mat-checkbox", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](181, "Member of a Indigenous Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](182, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](183, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](184, "If Yes, Please Specify ID Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](185, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](186, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](187, "mat-card-actions", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](188, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](189, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](190, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](191, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](192, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](193, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](194, ProfileComponent_ng_template_194_Template, 1, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](195, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](196, "You are now done.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](197, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](198, "button", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](199, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](200, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_200_listener() { return ctx.submitProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](201, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](29);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](51);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](59);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](67);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](81);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](96);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("stepControl", ctx.profileFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.profileFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.genderControl)("matAutocomplete", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("displayWith", ctx.displayFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](31, 30, ctx.genderFilteredOptions));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.regionControl)("matAutocomplete", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("displayWith", ctx.displayFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](53, 32, ctx.regionFilteredOptions));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.provinceControl)("matAutocomplete", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("displayWith", ctx.displayFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](61, 34, ctx.provinceFilteredOptions));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.municipalityControl)("matAutocomplete", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("displayWith", ctx.displayFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](69, 36, ctx.municipalityFilteredOptions));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matDatepicker", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.civilControl)("matAutocomplete", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("displayWith", ctx.displayFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](98, 38, ctx.civilFilteredOptions));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("stepControl", ctx.otherFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.otherFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.educationControl)("matAutocomplete", _r14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("displayWith", ctx.displayFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](123, 40, ctx.educationFilteredOptions));
    } }, directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepLabel"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridList"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepicker"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperNext"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckbox"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperPrevious"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]], styles: [".profile-container[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 40px -20px rgba(56, 73, 107, 0.2);\n  border: 1px solid #ddd;\n}\n.profile-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  margin-right: 15px;\n}\n.profile-container[_ngcontent-%COMP%]   .ml15[_ngcontent-%COMP%] {\n  padding-left: 27px;\n}\n.profile-container[_ngcontent-%COMP%]   .wAuto[_ngcontent-%COMP%] {\n  width: auto;\n}\n.profile-container[_ngcontent-%COMP%]   .bDateField[_ngcontent-%COMP%] {\n  max-width: 180px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxwcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0RBQUE7RUFDQSxzQkFBQTtBQUNKO0FBQUk7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBRVI7QUFBSTtFQUVJLGtCQUFBO0FBQ1I7QUFDSTtFQUNJLFdBQUE7QUFDUjtBQUNJO0VBQ0ksZ0JBQUE7QUFDUiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtY29udGFpbmVye1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDQwcHggLTIwcHggcmdiKDU2IDczIDEwNyAvIDIwJSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAubWwxNXtcclxuICAgICAgICAvLyBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI3cHg7XHJcbiAgICB9XHJcbiAgICAud0F1dG97XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICB9XHJcbiAgICAuYkRhdGVGaWVsZHtcclxuICAgICAgICBtYXgtd2lkdGg6IDE4MHB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "RoTw":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/farm-juan/home/farmer/enroll-livelihood/enroll-livelihood.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: EnrollLivelihoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrollLivelihoodComponent", function() { return EnrollLivelihoodComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-service/api-service.service */ "3WGE");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










function EnrollLivelihoodComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "TYPE OF FARMING ACTIVITY");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-checkbox", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "RICE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-checkbox", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "CORN");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-checkbox", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "OTHER CROPS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Please Specify");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-checkbox", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "LIVESTOCK");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Please Specify");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-checkbox", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "POULTRY");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Please Specify");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EnrollLivelihoodComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "TYPE OF WORK");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-checkbox", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "LAND PREPARATION");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-checkbox", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "PLANTING/TRANSPLANTING");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-checkbox", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "CULTIVATION");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-checkbox", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "HARVESTING");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-checkbox", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "OTHER, PLEASE SPECIFY");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Please Specify");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EnrollLivelihoodComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "TYPE OF FISHING ACTIVITY");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-checkbox", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "FISH CAPTURE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-checkbox", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "AQUACULTURE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-checkbox", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "GLEANING");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-checkbox", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "FISH PROCESSING");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-checkbox", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "FISH VENDING");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-checkbox", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "OTHER, PLEASE SPECIFY");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Please Specify");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class EnrollLivelihoodComponent {
    constructor(formBuilder, apiService) {
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.livelihoodData = {
            'livelihood': {
                'activity_id': 3,
                'farming': '2000',
                'non_farming': '1000',
                'profile_id': null,
                'livelihood_type_data': []
            }
        };
    }
    ngOnInit() {
        this.declareFormBuilder();
        this.farmerID = localStorage.getItem('profileID');
        this.initData();
    }
    initData() {
    }
    declareFormBuilder() {
        this.livelihoodFormGroup = this.formBuilder.group({
            farmer: [true],
            farmer_rice: [true],
            farmer_corn: [true],
            farmer_other_crops: [true],
            farmer_other_crops_spec: ['Special Corn'],
            farmer_livestock: [false],
            farmer_livestock_spec: [''],
            farmer_poultry: [false],
            farmer_poultry_spec: [''],
            farmworker: [false],
            farmworker_land: [false],
            farmworker_planting: [false],
            farmworker_cultivation: [false],
            farmworker_harvesting: [false],
            farmworker_other: [false],
            farmworker_other_spec: [''],
            fisherfolk: [false],
            fisherfolk_capture: [false],
            fisherfolk_aquaculture: [false],
            fisherfolk_gleaning: [false],
            fisherfolk_processing: [false],
            fisherfolk_vending: [false],
            fisherfolk_vending_spec: [''],
            farming: ['10000', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            non_farming: ['20000', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
    checkFarmer(ev) {
        let live = this.livelihoodFormGroup.controls;
        if (ev) {
            live.farmworker.setValue(false);
            live.fisherfolk.setValue(false);
            live.farmworker_land.setValue(false);
            live.farmworker_planting.setValue(false);
            live.farmworker_cultivation.setValue(false);
            live.farmworker_harvesting.setValue(false);
            live.farmworker_other.setValue(false);
            live.farmworker_other_spec.setValue('');
            live.fisherfolk_capture.setValue(false);
            live.fisherfolk_aquaculture.setValue(false);
            live.fisherfolk_gleaning.setValue(false);
            live.fisherfolk_processing.setValue(false);
            live.fisherfolk_vending.setValue(false);
            live.fisherfolk_vending_spec.setValue('');
        }
    }
    checkFarmWorker(ev) {
        let live = this.livelihoodFormGroup.controls;
        if (ev) {
            live.farmer.setValue(false);
            live.farmer_rice.setValue(false);
            live.farmer_corn.setValue(false);
            live.farmer_other_crops.setValue(false);
            live.farmer_other_crops_spec.setValue('');
            live.farmer_livestock.setValue(false);
            live.farmer_livestock_spec.setValue('');
            live.farmer_poultry.setValue(false);
            live.farmer_poultry_spec.setValue('');
            live.fisherfolk.setValue(false);
            live.fisherfolk_capture.setValue(false);
            live.fisherfolk_aquaculture.setValue(false);
            live.fisherfolk_gleaning.setValue(false);
            live.fisherfolk_processing.setValue(false);
            live.fisherfolk_vending.setValue(false);
            live.fisherfolk_vending_spec.setValue('');
        }
    }
    checkFisherFolk(ev) {
        let live = this.livelihoodFormGroup.controls;
        if (ev) {
            live.farmer.setValue(false);
            live.farmer_rice.setValue(false);
            live.farmer_corn.setValue(false);
            live.farmer_other_crops.setValue(false);
            live.farmer_other_crops_spec.setValue('');
            live.farmer_livestock.setValue(false);
            live.farmer_livestock_spec.setValue('');
            live.farmer_poultry.setValue(false);
            live.farmer_poultry_spec.setValue('');
            live.farmworker.setValue(false);
            live.farmworker_land.setValue(false);
            live.farmworker_planting.setValue(false);
            live.farmworker_cultivation.setValue(false);
            live.farmworker_harvesting.setValue(false);
            live.farmworker_other.setValue(false);
            live.farmworker_other_spec.setValue('');
        }
    }
    saveLivelihood() {
        this.validateDate();
        this.apiService
            .postLivelihood(this.livelihoodData)
            .subscribe((res) => {
            alert('Saved Successfully!');
        }, (err) => {
            console.log(err);
            alert(err);
        });
    }
    validateDate() {
        let d = this.livelihoodFormGroup.value;
        let type_data = [];
        let live = this.livelihoodFormGroup.controls;
        this.livelihoodData.livelihood.profile_id = this.farmerID === null || this.farmerID === undefined || this.farmerID === '' ? null : this.farmerID;
        this.livelihoodData.livelihood.farming = d.farming;
        this.livelihoodData.livelihood.non_farming = d.non_farming;
        for (let key in d) {
            if (d.hasOwnProperty(key)) {
                switch (key) {
                    case 'farmer':
                        if (d[key]) {
                            this.livelihoodData.livelihood.activity_id = 1;
                        }
                        break;
                    case 'farmworker':
                        if (d[key]) {
                            this.livelihoodData.livelihood.activity_id = 2;
                        }
                        break;
                    case 'farmer':
                        if (d[key]) {
                            this.livelihoodData.livelihood.activity_id = 3;
                        }
                        break;
                    case 'farmer_rice':
                        if (d[key]) {
                            type_data.push({
                                'activity_type_id': 1,
                                'description': ''
                            });
                        }
                        break;
                    case 'farmer_corn':
                        if (d[key]) {
                            type_data.push({
                                'activity_type_id': 2,
                                'description': ''
                            });
                        }
                        break;
                    case 'farmer_other_crops':
                        if (d[key]) {
                            type_data.push({
                                'activity_type_id': 3,
                                'description': live.farmer_other_crops_spec.value
                            });
                        }
                        break;
                    case 'farmer_livestock':
                        if (d[key]) {
                            type_data.push({
                                'activity_type_id': 4,
                                'description': live.farmer_livestock_spec.value
                            });
                        }
                        break;
                    case 'farmer_poultry':
                        if (d[key]) {
                            type_data.push({
                                'activity_type_id': 5,
                                'description': live.farmer_poultry_spec.value
                            });
                        }
                        break;
                    case 'farmworker_land':
                        if (d[key]) {
                            type_data.push({
                                'activity_type_id': 6,
                                'description': ''
                            });
                        }
                        break;
                    case 'farmworker_planting':
                        if (d[key]) {
                            type_data.push({
                                'activity_type_id': 7,
                                'description': ''
                            });
                        }
                        break;
                    case 'farmworker_cultivation':
                        if (d[key]) {
                            type_data.push({
                                'activity_type_id': 8,
                                'description': ''
                            });
                        }
                        break;
                    case 'farmworker_harvesting':
                        if (d[key]) {
                            type_data.push({
                                'activity_type_id': 9,
                                'description': ''
                            });
                        }
                        break;
                    case 'farmworker_other':
                        if (d[key]) {
                            type_data.push({
                                'activity_type_id': 10,
                                'description': live.farmworker_other_spec.value
                            });
                        }
                        break;
                    case 'fisherfolk':
                        if (d[key]) {
                            type_data.push({
                                'activity_type_id': 11,
                                'description': ''
                            });
                        }
                        break;
                    case 'fisherfolk_capture':
                        if (d[key]) {
                            type_data.push({
                                'activity_type_id': 12,
                                'description': ''
                            });
                        }
                        break;
                    case 'fisherfolk_aquaculture':
                        if (d[key]) {
                            type_data.push({
                                'activity_type_id': 13,
                                'description': ''
                            });
                        }
                        break;
                    case 'fisherfolk_gleaning':
                        if (d[key]) {
                            type_data.push({
                                'activity_type_id': 14,
                                'description': ''
                            });
                        }
                        break;
                    case 'fisherfolk_processing':
                        if (d[key]) {
                            type_data.push({
                                'activity_type_id': 15,
                                'description': ''
                            });
                        }
                        break;
                    case 'fisherfolk_vending':
                        if (d[key]) {
                            type_data.push({
                                'activity_type_id': 16,
                                'description': live.fisherfolk_vending_spec.value
                            });
                        }
                        break;
                }
            }
        }
        this.livelihoodData.livelihood.livelihood_type_data = type_data;
        console.log(this.livelihoodData);
    }
}
EnrollLivelihoodComponent.ɵfac = function EnrollLivelihoodComponent_Factory(t) { return new (t || EnrollLivelihoodComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
EnrollLivelihoodComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EnrollLivelihoodComponent, selectors: [["app-enroll-livelihood"]], decls: 36, vars: 4, consts: [[1, "container"], [1, "livelihood-container"], [1, "p-5"], [3, "formGroup"], [1, "content-header", "mt-2"], ["formControlName", "farmer", 1, "", 3, "change"], ["class", "mt-2", 4, "ngIf"], ["formControlName", "farmworker", 1, "", 3, "change"], ["formControlName", "fisherfolk", 1, "", 3, "change"], [1, "row"], [1, "col-6"], [1, "d-flex", "flex-column"], ["matInput", "", "formControlName", "farming", "required", ""], ["matInput", "", "formControlName", "non_farming", "required", ""], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "mt-2"], [1, "col-4"], ["formControlName", "farmer_rice", 1, "pl-3"], ["formControlName", "farmer_corn", 1, "pl-3"], ["formControlName", "farmer_other_crops", 1, "pl-3"], [1, "ml-3"], ["matInput", "", "formControlName", "farmer_other_crops_spec"], ["formControlName", "farmer_livestock", 1, "pl-3"], ["matInput", "", "formControlName", "farmer_livestock_spec"], ["formControlName", "farmer_poultry", 1, "pl-3"], ["matInput", "", "formControlName", "farmer_poultry_spec"], ["formControlName", "farmworker_land", 1, "pl-3"], ["formControlName", "farmworker_planting", 1, "pl-3"], ["formControlName", "farmworker_cultivation", 1, "pl-3"], ["formControlName", "farmworker_harvesting", 1, "pl-3"], ["formControlName", "farmworker_other", 1, "pl-3"], ["matInput", "", "formControlName", "farmworker_other_spec"], ["formControlName", "fisherfolk", 1, "pl-3"], ["formControlName", "fisherfolk_capture", 1, "pl-3"], ["formControlName", "fisherfolk_aquaculture", 1, "pl-3"], ["formControlName", "fisherfolk_gleaning", 1, "pl-3"], ["formControlName", "fisherfolk_processing", 1, "pl-3"], [1, "col-8"], ["formControlName", "fisherfolk_vending", 1, "pl-3"], ["matInput", "", "formControlName", "fisherfolk_vending_spec"]], template: function EnrollLivelihoodComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "MAIN LIVELIHOOD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EnrollLivelihoodComponent_Template_mat_checkbox_change_7_listener($event) { return ctx.checkFarmer($event.checked); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "FARMERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, EnrollLivelihoodComponent_div_9_Template, 35, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-checkbox", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EnrollLivelihoodComponent_Template_mat_checkbox_change_11_listener($event) { return ctx.checkFarmWorker($event.checked); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "FARMWORKER / LABORER ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, EnrollLivelihoodComponent_div_13_Template, 25, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-checkbox", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EnrollLivelihoodComponent_Template_mat_checkbox_change_15_listener($event) { return ctx.checkFisherFolk($event.checked); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "FISHERFOLK");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, EnrollLivelihoodComponent_div_17_Template, 28, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "GROSS ANNUAL INCOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "FARMING");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "NON FARMING");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EnrollLivelihoodComponent_Template_button_click_34_listener() { return ctx.saveLivelihood(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.livelihoodFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.livelihoodFormGroup.value.farmer);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.livelihoodFormGroup.value.farmworker);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.livelihoodFormGroup.value.fisherfolk);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: [".livelihood-container[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 40px -20px rgba(56, 73, 107, 0.2);\n  border: 1px solid #ddd;\n}\n.livelihood-container[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%] {\n  border-top: 1px solid #bbb;\n  border-bottom: 1px solid #bbb;\n  background-color: #eee;\n  padding: 10px 2px;\n}\n.livelihood-container[_ngcontent-%COMP%]   .break-line[_ngcontent-%COMP%] {\n  margin: 10px 0px;\n  border-bottom: 1px solid #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxlbnJvbGwtbGl2ZWxpaG9vZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9EQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUFJO0VBQ0ksMEJBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFFUjtBQUFJO0VBQ0ksZ0JBQUE7RUFDQSw2QkFBQTtBQUVSIiwiZmlsZSI6ImVucm9sbC1saXZlbGlob29kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpdmVsaWhvb2QtY29udGFpbmVye1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDQwcHggLTIwcHggcmdiKDU2IDczIDEwNyAvIDIwJSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgLmNvbnRlbnQtaGVhZGVye1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYmJiO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmJiO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAycHg7XHJcbiAgICB9XHJcbiAgICAuYnJlYWstbGluZXtcclxuICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'RsbsaWeb';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 0px 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgcGFkZGluZzogMHB4IDc1cHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "WLto":
/*!*************************************************************!*\
  !*** ./src/app/components/farm-juan/home/home.component.ts ***!
  \*************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _main_header_main_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main-header/main-header.component */ "XKf/");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");






class HomeComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    selectFarm() {
        this.router.navigate(['dashboard']);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 82, vars: 0, consts: [[1, "container"], [1, "resource-overview"], [1, "well"], [1, "pad-header"], [1, "header-span"], [1, "row"], [1, "col-lg-4", "col-md-4", "col-sm-12"], [1, "example-card"], [1, "d-flex", "justify-content-center"], ["mat-card-avatar", "", "src", "../../../assets/images/farm.png", "alt", "", 1, "resource-img"], ["mat-raised-button", "", "color", "accent"], ["mat-card-avatar", "", "src", "../../../assets/images/farmer.png", "alt", "", 1, "resource-img"], ["mat-card-avatar", "", "src", "../../../assets/images/document.png", "alt", "", 1, "resource-img"], [1, "col-lg-3", "col-md-4", "col-sm-12"], ["mat-card-avatar", "", 1, "example-header-image"], ["mat-card-image", "", "src", "../../../assets/images/caliraya.jpg", "alt", "", 2, "height", "130px"], ["mat-button", "", 3, "click"], ["mat-card-image", "", "src", "../../../assets/images/ilocos_sur.png", "alt", "", 2, "height", "130px"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Resource Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Farms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "2 farms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Add Farms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Farmers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "103 farmers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Add Farmers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Parcel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "23 parcels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Add Parcel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Farms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Caliraya Farm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Caliraya, Laguna");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_68_listener() { return ctx.selectFarm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "SELECT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "RSBSA Farm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Dog Breed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_80_listener() { return ctx.selectFarm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "SELECT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_2__["MainHeaderComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardImage"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 0px 75px;\n  max-width: inherit;\n}\n\n.well[_ngcontent-%COMP%] {\n  border: solid 2px #f2f2f2;\n  border-radius: 5px;\n  background: #fafafa;\n  min-height: 20px;\n  padding: 20px;\n  margin: 10px 0px;\n}\n\n.header-span[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 1.2;\n  text-align: left;\n  color: #5fc21e;\n}\n\n.resource-overview[_ngcontent-%COMP%]   .pad-header[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n.resource-overview[_ngcontent-%COMP%]   .resource-img[_ngcontent-%COMP%] {\n  height: 120px;\n  width: 120px;\n  border: 2px solid lightgrey;\n  padding: 5px;\n}\n\n.resource-overview[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%] {\n  background: lightblue;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxnbG9iYWwuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNFSjs7QUFoQkk7RUFDSSxvQkFBQTtBQW1CUjs7QUFqQkk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQW1CUjs7QUFqQkk7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFtQlIiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRnbG9iYWwtZ3JlZW4gOiAjNWZjMjFlO1xyXG4uY29udGFpbmVye1xyXG4gICAgcGFkZGluZzogMHB4IDc1cHg7XHJcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XHJcbn1cclxuLndlbGwge1xyXG4gICAgYm9yZGVyOiBzb2xpZCAycHggI2YyZjJmMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZzoyMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxufVxyXG4uaGVhZGVyLXNwYW57XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiAjNWZjMjFlO1xyXG59IiwiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDBweCA3NXB4O1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59XG5cbi53ZWxsIHtcbiAgYm9yZGVyOiBzb2xpZCAycHggI2YyZjJmMjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICBtaW4taGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuXG4uaGVhZGVyLXNwYW4ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjNWZjMjFlO1xufVxuXG4ucmVzb3VyY2Utb3ZlcnZpZXcgLnBhZC1oZWFkZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi5yZXNvdXJjZS1vdmVydmlldyAucmVzb3VyY2UtaW1nIHtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgd2lkdGg6IDEyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyZXk7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5yZXNvdXJjZS1vdmVydmlldyBtYXQtZ3JpZC10aWxlIHtcbiAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "XKf/":
/*!***************************************************************************!*\
  !*** ./src/app/components/farm-juan/main-header/main-header.component.ts ***!
  \***************************************************************************/
/*! exports provided: MainHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainHeaderComponent", function() { return MainHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");




class MainHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainHeaderComponent.ɵfac = function MainHeaderComponent_Factory(t) { return new (t || MainHeaderComponent)(); };
MainHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainHeaderComponent, selectors: [["app-main-header"]], decls: 14, vars: 0, consts: [["color", "primary", 1, "container"], [1, "main-header-spacer"], ["mat-icon-button", "", "aria-label", "main-header icon-button with heart icon", 1, "main-header-icon", "favorite-icon"], ["mat-icon-button", "", "aria-label", "main-header icon-button with share icon", 1, "main-header-icon"], ["mat-icon-button", "", "aria-label", "main-header icon-button with menu icon", 1, "main-header-icon"]], template: function MainHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Farm Juan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 0px 75px;\n  max-width: inherit;\n}\n\n.well[_ngcontent-%COMP%] {\n  border: solid 2px #f2f2f2;\n  border-radius: 5px;\n  background: #fafafa;\n  min-height: 20px;\n  padding: 20px;\n  margin: 10px 0px;\n}\n\n.header-span[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 1.2;\n  text-align: left;\n  color: #5fc21e;\n}\n\n.main-header-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  background: darkgreen;\n  color: #fff;\n  box-shadow: 0 10px 20px 0 rgba(136, 136, 136, 0.15);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxnbG9iYWwuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWFpbi1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FERUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDRUo7O0FBakJBO0VBQ0ksY0FBQTtBQW9CSjs7QUFsQkE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxtREFBQTtBQXFCSiIsImZpbGUiOiJtYWluLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRnbG9iYWwtZ3JlZW4gOiAjNWZjMjFlO1xyXG4uY29udGFpbmVye1xyXG4gICAgcGFkZGluZzogMHB4IDc1cHg7XHJcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XHJcbn1cclxuLndlbGwge1xyXG4gICAgYm9yZGVyOiBzb2xpZCAycHggI2YyZjJmMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZzoyMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxufVxyXG4uaGVhZGVyLXNwYW57XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiAjNWZjMjFlO1xyXG59IiwiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDBweCA3NXB4O1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59XG5cbi53ZWxsIHtcbiAgYm9yZGVyOiBzb2xpZCAycHggI2YyZjJmMjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICBtaW4taGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuXG4uaGVhZGVyLXNwYW4ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjNWZjMjFlO1xufVxuXG4ubWFpbi1oZWFkZXItc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6IGRhcmtncmVlbjtcbiAgY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IDAgcmdiYSgxMzYsIDEzNiwgMTM2LCAwLjE1KTtcbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/auth/login/login.component */ "HzFZ");
/* harmony import */ var _components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/auth/register/register.component */ "+jqZ");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_angular_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/angular-material.module */ "CO7N");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _http_interceptors_auth_interceptor_auth_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./http-interceptors/auth-interceptor/auth-interceptor.interceptor */ "g7o5");
/* harmony import */ var _services_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/api-service/api-service.service */ "3WGE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
            useClass: _http_interceptors_auth_interceptor_auth_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_10__["AuthInterceptorInterceptor"],
            multi: true,
        },
        _services_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _components_angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        _components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _components_angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]] }); })();


/***/ }),

/***/ "g7o5":
/*!************************************************************************************!*\
  !*** ./src/app/http-interceptors/auth-interceptor/auth-interceptor.interceptor.ts ***!
  \************************************************************************************/
/*! exports provided: AuthInterceptorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptorInterceptor", function() { return AuthInterceptorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AuthInterceptorInterceptor {
    constructor() { }
    intercept(req, next) {
        req = req.clone({
            setHeaders: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'x-access-token': `${localStorage.getItem('token')}`,
            },
        });
        return next.handle(req);
    }
}
AuthInterceptorInterceptor.ɵfac = function AuthInterceptorInterceptor_Factory(t) { return new (t || AuthInterceptorInterceptor)(); };
AuthInterceptorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptorInterceptor, factory: AuthInterceptorInterceptor.ɵfac });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/auth/login/login.component */ "HzFZ");
/* harmony import */ var _components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/auth/register/register.component */ "+jqZ");
/* harmony import */ var _components_farm_juan_home_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/farm-juan/home/dashboard/dashboard.component */ "xLmw");
/* harmony import */ var _components_farm_juan_home_farmer_farmer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/farm-juan/home/farmer/farmer.component */ "yIyN");
/* harmony import */ var _components_farm_juan_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/farm-juan/home/home.component */ "WLto");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'register', component: _components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'home', component: _components_farm_juan_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'dashboard', component: _components_farm_juan_home_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'farmer', component: _components_farm_juan_home_farmer_farmer_component__WEBPACK_IMPORTED_MODULE_4__["FarmerComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xLmw":
/*!****************************************************************************!*\
  !*** ./src/app/components/farm-juan/home/dashboard/dashboard.component.ts ***!
  \****************************************************************************/
/*! exports provided: DashboardComponent, FilterDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterDialogComponent", function() { return FilterDialogComponent; });
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/api-service/api-service.service */ "3WGE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _main_header_main_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../main-header/main-header.component */ "XKf/");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
























function DashboardComponent_div_19_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_19_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r22.id, " ");
} }
function DashboardComponent_div_19_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Last Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_19_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r23.last_name, " ");
} }
function DashboardComponent_div_19_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " First Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_19_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r24.first_name, " ");
} }
function DashboardComponent_div_19_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " MUNICIPALITY ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_19_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r25.municipality, " ");
} }
function DashboardComponent_div_19_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " MUNICIPALITY ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_19_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r26.province, " ");
} }
function DashboardComponent_div_19_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Lot No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_19_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r27.lot_no, " ");
} }
function DashboardComponent_div_19_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Location ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_19_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r28.farm_address, " ");
} }
function DashboardComponent_div_19_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Tenant Stat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_19_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r29.ten_status, " ");
} }
function DashboardComponent_div_19_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " No. Has ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_19_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r30.total_farm_area, " ");
} }
function DashboardComponent_div_19_tr_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 39);
} }
function DashboardComponent_div_19_tr_30_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DashboardComponent_div_19_tr_30_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r33); const row_r31 = ctx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r32.selectFarmer(row_r31); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r31 = ctx.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("demo-row-is-clicked", ctx_r21.clickedRows.has(row_r31));
} }
const _c0 = function () { return [5, 10, 20]; };
function DashboardComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](2, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, DashboardComponent_div_19_th_3_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, DashboardComponent_div_19_td_4_Template, 2, 1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](5, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, DashboardComponent_div_19_th_6_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, DashboardComponent_div_19_td_7_Template, 2, 1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](8, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, DashboardComponent_div_19_th_9_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, DashboardComponent_div_19_td_10_Template, 2, 1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](11, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, DashboardComponent_div_19_th_12_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, DashboardComponent_div_19_td_13_Template, 2, 1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](14, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, DashboardComponent_div_19_th_15_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, DashboardComponent_div_19_td_16_Template, 2, 1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](17, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, DashboardComponent_div_19_th_18_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, DashboardComponent_div_19_td_19_Template, 2, 1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](20, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, DashboardComponent_div_19_th_21_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, DashboardComponent_div_19_td_22_Template, 2, 1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](23, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, DashboardComponent_div_19_th_24_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, DashboardComponent_div_19_td_25_Template, 2, 1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](26, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, DashboardComponent_div_19_th_27_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, DashboardComponent_div_19_td_28_Template, 2, 1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, DashboardComponent_div_19_tr_29_Template, 1, 0, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, DashboardComponent_div_19_tr_30_Template, 1, 2, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "mat-paginator", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](4, _c0));
} }
function DashboardComponent_div_91_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const municipality_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", municipality_r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", municipality_r36.name, " ");
} }
function DashboardComponent_div_91_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h3", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DashboardComponent_div_91_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r37.closeDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "form", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Municipality");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-autocomplete", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, DashboardComponent_div_91_mat_option_15_Template, 2, 2, "mat-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-checkbox", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "IRRIGATED");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-checkbox", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "RAINFED UPLAND");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-checkbox", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "RAINFED LOWLAND");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](14);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r1.filterFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx_r1.municipalityControl)("matAutocomplete", _r34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("displayWith", ctx_r1.displayFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 5, ctx_r1.municipalityFilteredOptions));
} }
class DashboardComponent {
    constructor(dialog, apiService, formBuilder, router) {
        this.dialog = dialog;
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.clickedRows = new Set();
        this.panelOpenState = false;
        this.filterIsOpen = false;
        // dataSources = new MatTableDataSource<UserModel>(PROFILE_DATA);
        this.userData = [];
        this.municipalityData = { "municipalities": [{ "id": 0, "name": "All" }] };
        this.data = [];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.errorMessage = '';
        this.municipalityControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.displayedColumns = [
            'refNo', 'lastName', 'firstName', 'municipality',
            'province', 'lotNo', 'farmAddress', 'tenStatus', 'noHas'
        ];
    }
    ngOnInit() {
        this.initFilterFormGroup();
        this.apiService
            .getAllFarmers({ page: 1 })
            .subscribe(res => {
            this.data.push(res);
            console.log(res);
            this.userData.push(this.data[0].profiles);
            const profileData = this.userData[0];
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](profileData);
            this.dataSource.sort = this.sort;
            setTimeout(() => this.dataSource.paginator = this.paginator);
            this.municipalityControl.setValue({ "id": 0, "name": "All" });
            this.data[0].municipalities.forEach((element) => {
                this.municipalityData.municipalities.push(element);
            });
            this.municipalityOptions = this.municipalityData.municipalities;
            this.filterMunicipality();
        }, err => {
            this.errorMessage = err.error;
        });
    }
    filterMunicipality() {
        this.municipalityFilteredOptions = this.municipalityControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(name => name ? this._filterMunicipality(name) : this.municipalityOptions.slice()));
    }
    displayFn(common) {
        return common && common.name ? common.name : '';
    }
    _filterMunicipality(name) {
        const filterValue = name.toLowerCase();
        return this.municipalityOptions.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
    }
    initFilterFormGroup() {
        this.filterFormGroup = this.formBuilder.group({
            irrigated: [true],
            upland: [true],
            lowland: [true]
        });
    }
    addFarmer() {
        localStorage.setItem('profileID', '');
        this.router.navigate(['farmer']);
    }
    backToDashboard() {
        this.router.navigate(['home']);
    }
    openDialog() {
        this.filterIsOpen = true;
        // this.dialog.open(FilterDialogComponent);
    }
    closeDialog() {
        this.filterIsOpen = false;
        // this.dialog.open(FilterDialogComponent);
    }
    selectFarmer(row) {
        localStorage.setItem('profileID', row.id);
        this.router.navigate(['farmer']);
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_0__["MatSort"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 92, vars: 2, consts: [[1, "farm-container", "mb-3"], [1, "dashboard-link", 3, "click"], [1, "container"], [1, "row"], [1, "col-lg-3", "col-md-3", "col-sm-12"], ["hideToggle", "", "default", "", 1, "paddingTop"], [1, "col-lg-9", "col-md-9", "col-sm-12"], [1, "d-flex", "justify-content-end"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["class", "mat-elevation-z8", 4, "ngIf"], [1, "well"], [1, "d-flex", "justify-content-start", "px-2"], ["mat-stroked-button", "", "color", "accent", 3, "click"], [1, "dashboard-card"], [1, "card-header"], [1, "d-flex", "flex-column"], [1, "d-flex", "justify-content-center"], [1, "material-icons", "card-icon"], [1, "card-content"], [1, "d-flex", "justify-content-center", "p-3"], ["class", "card p-3 filter-container", 4, "ngIf"], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "refNo"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "lastName"], ["matColumnDef", "firstName"], ["matColumnDef", "municipality"], ["matColumnDef", "province"], ["matColumnDef", "lotNo"], ["matColumnDef", "farmAddress"], ["matColumnDef", "tenStatus"], ["matColumnDef", "noHas"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "demo-row-is-clicked", "click", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click"], [1, "card", "p-3", "filter-container"], [1, "d-flex", "justify-content-between"], [1, "mt-5"], ["mat-mini-fab", "", "color", "primary", "aria-label", "Example icon button with a menu icon", 3, "click"], [3, "formGroup"], ["type", "text", "matInput", "", 3, "formControl", "matAutocomplete"], [3, "displayWith"], ["autoMunicipality", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "irrigated"], ["formControlName", "upland"], ["formControlName", "lowland"], [3, "value"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-main-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DashboardComponent_Template_mat_label_click_2_listener() { return ctx.backToDashboard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-expansion-panel", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_15_listener() { return ctx.addFarmer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Add Farmers");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, DashboardComponent_div_19_Template, 32, 5, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_22_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "filter_list");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, " person");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "TOTAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "FARM LAND");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "128 ha");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, " person");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "TOTAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "FARMERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, " person");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "TOTAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "LABORERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "67");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, " person");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, "TOTAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86, "FISHERFOLKS");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "72");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](91, DashboardComponent_div_91_Template, 24, 7, "div", 20);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.filterIsOpen);
    } }, directives: [_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_9__["MainHeaderComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionPanelTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_0__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_0__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["AsyncPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 0px 75px;\n  max-width: inherit;\n}\n\n.well[_ngcontent-%COMP%] {\n  border: solid 2px #f2f2f2;\n  border-radius: 5px;\n  background: #fafafa;\n  min-height: 20px;\n  padding: 20px;\n  margin: 10px 0px;\n}\n\n.header-span[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 1.2;\n  text-align: left;\n  color: #5fc21e;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.add-farmer-container[_ngcontent-%COMP%] {\n  border: solid 2px #f2f2f2;\n  border-radius: 5px;\n  color: white;\n  background: #5fc21e;\n  min-height: 20px;\n  padding: 5px 20px;\n  margin: 10px 0px;\n}\n\n.add-farmer-container[_ngcontent-%COMP%]   .header-span[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 18px;\n}\n\n.demo-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-row[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%] {\n  border-bottom: 1px solid transparent;\n  border-top: 1px solid transparent;\n  cursor: pointer;\n}\n\n.mat-row[_ngcontent-%COMP%]:hover   .mat-cell[_ngcontent-%COMP%] {\n  border-color: currentColor;\n  font-weight: bold;\n}\n\n.demo-row-is-clicked[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.filter-container[_ngcontent-%COMP%] {\n  position: fixed;\n  min-width: 400px;\n  max-width: 400px;\n  top: 202px;\n  left: 0px;\n  right: 0px;\n  margin: auto;\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n  background: #fff;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.paddingTop[_ngcontent-%COMP%] {\n  margin-top: 67px;\n}\n\n.dashboard-link[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #00a700;\n  cursor: pointer;\n  margin: 10px 0;\n  font-weight: bold;\n  font-size: 15px;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  margin: 5px;\n  padding: 0px;\n}\n\nmat-card[_ngcontent-%COMP%]   .dashboard-card[_ngcontent-%COMP%] {\n  min-height: 150px;\n  color: white;\n  font-size: 16px;\n  text-align: center;\n  font-weight: bold;\n}\n\nmat-card[_ngcontent-%COMP%]   .dashboard-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #5fc21e;\n  min-height: 80px;\n}\n\nmat-card[_ngcontent-%COMP%]   .dashboard-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n\nmat-card[_ngcontent-%COMP%]   .dashboard-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  min-height: 70px;\n  color: gray;\n}\n\n.mat-stroked-button[_ngcontent-%COMP%]:not(.mat-button-disabled) {\n  border-color: #ff4081;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGdsb2JhbC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0VKOztBQWpCQTtFQUNJLFdBQUE7QUFvQko7O0FBbEJBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQXFCSjs7QUFwQkk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQXNCUjs7QUFuQkE7RUFDSSxXQUFBO0FBc0JKOztBQW5CRTtFQUNFLG9DQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0FBc0JKOztBQW5CRTtFQUNFLDBCQUFBO0VBQ0EsaUJBQUE7QUFzQko7O0FBbkJFO0VBQ0UsaUJBQUE7QUFzQko7O0FBcEJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsOEhBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBdUJKOztBQXJCQTtFQUNJLGdCQUFBO0FBd0JKOztBQXRCQTtFQUNJLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUF5Qko7O0FBdkJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUEwQko7O0FBekJJO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUEyQlI7O0FBMUJRO0VBQ0kseUJEcEVJO0VDcUVKLGdCQUFBO0FBNEJaOztBQTNCWTtFQUNJLGVBQUE7QUE2QmhCOztBQTFCUTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQTRCWjs7QUF2QkE7RUFDSSxxQkFBQTtBQTBCSiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZ2xvYmFsLWdyZWVuIDogIzVmYzIxZTtcclxuLmNvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDBweCA3NXB4O1xyXG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xyXG59XHJcbi53ZWxsIHtcclxuICAgIGJvcmRlcjogc29saWQgMnB4ICNmMmYyZjI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgbWluLWhlaWdodDogMjBweDtcclxuICAgIHBhZGRpbmc6MjBweDtcclxuICAgIG1hcmdpbjogMTBweCAwcHg7XHJcbn1cclxuLmhlYWRlci1zcGFue1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogIzVmYzIxZTtcclxufSIsIi5jb250YWluZXIge1xuICBwYWRkaW5nOiAwcHggNzVweDtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xufVxuXG4ud2VsbCB7XG4gIGJvcmRlcjogc29saWQgMnB4ICNmMmYyZjI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgbWluLWhlaWdodDogMjBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbn1cblxuLmhlYWRlci1zcGFuIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMS4yO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzVmYzIxZTtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFkZC1mYXJtZXItY29udGFpbmVyIHtcbiAgYm9yZGVyOiBzb2xpZCAycHggI2YyZjJmMjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICM1ZmMyMWU7XG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuLmFkZC1mYXJtZXItY29udGFpbmVyIC5oZWFkZXItc3BhbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uZGVtby10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LXJvdyAubWF0LWNlbGwge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWF0LXJvdzpob3ZlciAubWF0LWNlbGwge1xuICBib3JkZXItY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kZW1vLXJvdy1pcy1jbGlja2VkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5maWx0ZXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBtaW4td2lkdGg6IDQwMHB4O1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICB0b3A6IDIwMnB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgYm94LXNoYWRvdzogMHB4IDExcHggMTVweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDI0cHggMzhweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDlweCA0NnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4ucGFkZGluZ1RvcCB7XG4gIG1hcmdpbi10b3A6IDY3cHg7XG59XG5cbi5kYXNoYm9hcmQtbGluayB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDBhNzAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMTBweCAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5tYXQtY2FyZCB7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5tYXQtY2FyZCAuZGFzaGJvYXJkLWNhcmQge1xuICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5tYXQtY2FyZCAuZGFzaGJvYXJkLWNhcmQgLmNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVmYzIxZTtcbiAgbWluLWhlaWdodDogODBweDtcbn1cbm1hdC1jYXJkIC5kYXNoYm9hcmQtY2FyZCAuY2FyZC1oZWFkZXIgLmNhcmQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cbm1hdC1jYXJkIC5kYXNoYm9hcmQtY2FyZCAuY2FyZC1jb250ZW50IHtcbiAgbWluLWhlaWdodDogNzBweDtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5tYXQtc3Ryb2tlZC1idXR0b246bm90KC5tYXQtYnV0dG9uLWRpc2FibGVkKSB7XG4gIGJvcmRlci1jb2xvcjogI2ZmNDA4MTtcbn0iXX0= */"] });
// const PROFILE_DATA: UserModel[] = [
//   {
//     "id": 27,
//     "user_id": 1,
//     "first_name": "Kit",
//     "middle_name": "Galicia",
//     "last_name": "Sumabat",
//     "gender": "Male",
//     "house": "823",
//     "street": "B Mayor",
//     "brgy": "177",
//     "region": "NCR",
//     "municipality": "Alilem",
//     "province": "Ilocos Norte",
//     "user_contact_number": "09384170763",
//     "dob": "1995-04-19",
//     "ref_number": '',
//     "total_farm_area": "N/A",
//     "farm_address": "N/A",
//     "ten_status": "N/A",
//     "lot_no": "N/A"
//   },
//   {
//     "id": 26,
//     "user_id": 1,
//     "first_name": "Kit",
//     "middle_name": "Galicia",
//     "last_name": "Sumabat",
//     "gender": "Male",
//     "house": "823",
//     "street": "B Mayor",
//     "brgy": "177",
//     "region": "NCR",
//     "municipality": "Alilem",
//     "province": "Ilocos Norte",
//     "user_contact_number": "09384170763",
//     "dob": "1995-04-19",
//     "ref_number": '',
//     "total_farm_area": "N/A",
//     "farm_address": "N/A",
//     "ten_status": "N/A",
//     "lot_no": "N/A"
//   },
//   {
//     "id": 25,
//     "user_id": 1,
//     "first_name": "Kit",
//     "middle_name": "Galicia",
//     "last_name": "Sumabat",
//     "gender": "Male",
//     "house": "823",
//     "street": "B Mayor",
//     "brgy": "177",
//     "region": "NCR",
//     "municipality": "Alilem",
//     "province": "Ilocos Norte",
//     "user_contact_number": "09384170763",
//     "dob": "1995-04-19",
//     "ref_number": '',
//     "total_farm_area": "N/A",
//     "farm_address": "N/A",
//     "ten_status": "N/A",
//     "lot_no": "N/A"
//   },
//   {
//     "id": 24,
//     "user_id": 1,
//     "first_name": "Kit",
//     "middle_name": "Galicia",
//     "last_name": "Sumabat",
//     "gender": "Male",
//     "house": "823",
//     "street": "B Mayor",
//     "brgy": "177",
//     "region": "NCR",
//     "municipality": "Alilem",
//     "province": "Ilocos Norte",
//     "user_contact_number": "09384170763",
//     "dob": "1995-04-19",
//     "ref_number": '',
//     "total_farm_area": "N/A",
//     "farm_address": "N/A",
//     "ten_status": "N/A",
//     "lot_no": "N/A"
//   },
//   {
//     "id": 23,
//     "user_id": 1,
//     "first_name": "Christian",
//     "middle_name": "Galicia",
//     "last_name": "Sumabat",
//     "gender": "Male",
//     "house": "823",
//     "street": "B Mayor",
//     "brgy": "177",
//     "region": "NCR",
//     "municipality": "Alilem",
//     "province": "Ilocos Norte",
//     "user_contact_number": "09384170763",
//     "dob": "1995-04-19",
//     "ref_number": '',
//     "total_farm_area": "N/A",
//     "farm_address": "N/A",
//     "ten_status": "N/A",
//     "lot_no": "N/A"
//   },
//   {
//     "id": 22,
//     "user_id": 1,
//     "first_name": "Kit",
//     "middle_name": "Galicia",
//     "last_name": "Sumabat",
//     "gender": "Male",
//     "house": "823",
//     "street": "B Mayor",
//     "brgy": "177",
//     "region": "NCR",
//     "municipality": "Alilem",
//     "province": "Ilocos Norte",
//     "user_contact_number": "09384170763",
//     "dob": "1995-04-19",
//     "ref_number": '',
//     "total_farm_area": "N/A",
//     "farm_address": "N/A",
//     "ten_status": "N/A",
//     "lot_no": "N/A"
//   },
//   {
//     "id": 21,
//     "user_id": 1,
//     "first_name": "Kit",
//     "middle_name": "Galicia",
//     "last_name": "Sumabat",
//     "gender": "Male",
//     "house": "823",
//     "street": "B Mayor",
//     "brgy": "177",
//     "region": "NCR",
//     "municipality": "Alilem",
//     "province": "Ilocos Norte",
//     "user_contact_number": "09384170763",
//     "dob": "1995-04-19",
//     "ref_number": '',
//     "total_farm_area": "N/A",
//     "farm_address": "N/A",
//     "ten_status": "N/A",
//     "lot_no": "N/A"
//   },
//   {
//     "id": 20,
//     "user_id": 1,
//     "first_name": "Jecsel",
//     "middle_name": "Galicia",
//     "last_name": "Tinao",
//     "gender": "Male",
//     "house": "823",
//     "street": "B Mayor",
//     "brgy": "177",
//     "region": "NCR",
//     "municipality": "Alilem",
//     "province": "Ilocos Norte",
//     "user_contact_number": "09384170763",
//     "dob": "1995-04-19",
//     "ref_number": '',
//     "total_farm_area": "N/A",
//     "farm_address": "N/A",
//     "ten_status": "N/A",
//     "lot_no": "N/A"
//   },
//   {
//     "id": 19,
//     "user_id": 1,
//     "first_name": "Jecsel",
//     "middle_name": "Galicia",
//     "last_name": "Tinao",
//     "gender": "Male",
//     "house": "823",
//     "street": "B Mayor",
//     "brgy": "177",
//     "region": "NCR",
//     "municipality": "Alilem",
//     "province": "Ilocos Norte",
//     "user_contact_number": "09384170763",
//     "dob": "1995-04-19",
//     "ref_number": '',
//     "total_farm_area": "N/A",
//     "farm_address": "N/A",
//     "ten_status": "N/A",
//     "lot_no": "N/A"
//   },
//   {
//     "id": 18,
//     "user_id": 1,
//     "first_name": "Kit",
//     "middle_name": "Galicia",
//     "last_name": "Sumabat",
//     "gender": "Male",
//     "house": "823",
//     "street": "B Mayor",
//     "brgy": "177",
//     "region": "NCR",
//     "municipality": "Alilem",
//     "province": "Ilocos Norte",
//     "user_contact_number": "09384170763",
//     "dob": "1995-04-19",
//     "ref_number": '',
//     "total_farm_area": "N/A",
//     "farm_address": "N/A",
//     "ten_status": "N/A",
//     "lot_no": "N/A"
//   }
// ];
class FilterDialogComponent {
    ngAfterViewInit() {
        throw new Error('Method not implemented.');
    }
}
FilterDialogComponent.ɵfac = function FilterDialogComponent_Factory(t) { return new (t || FilterDialogComponent)(); };
FilterDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: FilterDialogComponent, selectors: [["app-filter-dialog"]], decls: 7, vars: 0, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", ""]], template: function FilterDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "All Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "yIyN":
/*!**********************************************************************!*\
  !*** ./src/app/components/farm-juan/home/farmer/farmer.component.ts ***!
  \**********************************************************************/
/*! exports provided: FarmerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerComponent", function() { return FarmerComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-service/api-service.service */ "3WGE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





function FarmerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FarmerComponent_div_5_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FarmerComponent_div_5_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-enroll-livelihood");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FarmerComponent_div_5_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-enroll-parcel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FarmerComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-button-toggle-group", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-button-toggle", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-button-toggle", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Livelihood");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-button-toggle", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Parcel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, FarmerComponent_div_5_div_31_Template, 2, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, FarmerComponent_div_5_div_32_Template, 2, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, FarmerComponent_div_5_div_33_Template, 2, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r1.data.profile.first_name, " ", ctx_r1.data.profile.last_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r1.data.profile.municipality.name, ", ", ctx_r1.data.profile.province.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.data.profile.ref_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r1.toggleMenuControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.toggleMenuControl.value === "profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.toggleMenuControl.value === "livelihood");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.toggleMenuControl.value === "parcel");
} }
class FarmerComponent {
    constructor(formBuilder, apiService, router) {
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.router = router;
        this.hasProfile = false;
        this.hasLivelihood = false;
        this.hasParcel = false;
        this.toggleMenuControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
    }
    ngOnInit() {
        this.farmerID = localStorage.getItem("profileID");
        this.getInitData(this.farmerID);
    }
    getInitData(farmerID) {
        this.toggleMenuControl.setValue('profile');
        if (farmerID != null && farmerID != '') {
            this.apiService
                .getFarmerProfile(this.farmerID)
                .subscribe((res) => {
                console.log(res);
                this.data = res;
                this.data.profile !== undefined ? this.hasProfile = !this.hasProfile : this.hasProfile = this.hasProfile;
            }, (err) => {
                console.log(err);
                alert("Something went wrong. Please contact admin!");
                this.hasProfile = false;
            });
        }
    }
    backToDashboard() {
        this.router.navigate(['dashboard']);
    }
}
FarmerComponent.ɵfac = function FarmerComponent_Factory(t) { return new (t || FarmerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
FarmerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FarmerComponent, selectors: [["app-farmer"]], decls: 6, vars: 2, consts: [[1, "farm-container", "mb-3"], [1, "dashboard-link", 3, "click"], [4, "ngIf"], [1, "farm-container"], [1, "row"], [1, "col-3"], [1, "card"], [1, "farm-wallpaper"], [1, "d-flex", "justify-content-center", "pt-3"], ["src", "../../../../../assets/images/kit.jpg", "alt", "Cinque Terre", "width", "150", "height", "150", 1, "rounded-circle"], [1, "d-flex", "justify-content-center"], [1, "left-panel"], [1, "center"], ["name", "menu", "aria-label", "Font Style", "vertical", "", 1, "toggle-menu", 3, "formControl"], ["value", "profile"], ["value", "livelihood"], ["value", "parcel"], [1, "col-9"]], template: function FarmerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-main-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FarmerComponent_Template_mat_label_click_2_listener() { return ctx.backToDashboard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "DASHBOARD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FarmerComponent_div_4_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, FarmerComponent_div_5_Template, 34, 9, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.hasProfile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasProfile && ctx.data);
    } }, styles: [".farm-container[_ngcontent-%COMP%]   .ml15[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n.farm-container[_ngcontent-%COMP%]   .farm-wallpaper[_ngcontent-%COMP%] {\n  background-color: #00a700;\n  height: 92px;\n}\n.farm-container[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%] {\n  padding-top: 100px;\n}\n.farm-container[_ngcontent-%COMP%]   .toggle-menu[_ngcontent-%COMP%] {\n  border-radius: 0px;\n  border: none;\n}\n.farm-container[_ngcontent-%COMP%]   .toggle-menu[_ngcontent-%COMP%]   .mat-button-toggle-checked[_ngcontent-%COMP%] {\n  background-color: #00a70080;\n  color: rgba(0, 0, 0, 0.54);\n}\n.farm-container[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.dashboard-link[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #00a700;\n  cursor: pointer;\n  margin: 10px 0;\n  font-weight: bold;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGZhcm1lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGlCQUFBO0FBQVI7QUFFSTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQUFSO0FBRUk7RUFDSSxrQkFBQTtBQUFSO0FBRUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFBUjtBQUNRO0VBQ0ksMkJBQUE7RUFDQSwwQkFBQTtBQUNaO0FBRUk7RUFDSSxrQkFBQTtBQUFSO0FBR0E7RUFDSSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQUoiLCJmaWxlIjoiZmFybWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhcm0tY29udGFpbmVye1xyXG4gICAgLm1sMTV7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuZmFybS13YWxscGFwZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTcwMCA7XHJcbiAgICAgICAgaGVpZ2h0OiA5MnB4O1xyXG4gICAgfVxyXG4gICAgLmxlZnQtcGFuZWx7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgLnRvZ2dsZS1tZW51e1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhNzAwODA7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLC41NCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNlbnRlcntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuLmRhc2hib2FyZC1saW5re1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMGE3MDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map