(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Misha\Desktop\Web\simple-budget-analitik\_front\src\main.ts */"zUnb");


/***/ }),

/***/ "1s+b":
/*!*********************************************************************!*\
  !*** ./src/app/components/customization/customization.component.ts ***!
  \*********************************************************************/
/*! exports provided: CustomizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizationComponent", function() { return CustomizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../change-pass/change-pass.component */ "k8fZ");
/* harmony import */ var _delete_akk_delete_akk_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../delete-akk/delete-akk.component */ "UPYz");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");








class CustomizationComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    showChangePass() {
        this.dialog.open(_change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_1__["ChangePassComponent"]);
    }
    showDeleteAkk() {
        this.dialog.open(_delete_akk_delete_akk_component__WEBPACK_IMPORTED_MODULE_2__["DeleteAkkComponent"]);
    }
}
CustomizationComponent.ɵfac = function CustomizationComponent_Factory(t) { return new (t || CustomizationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
CustomizationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomizationComponent, selectors: [["app-customization"]], decls: 14, vars: 0, consts: [[1, "container"], ["mat-menu-item", "", 3, "click"], [1, "xbutton"], ["mat-icon-button", "", "mat-dialog-close", ""]], template: function CustomizationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizationComponent_Template_button_click_3_listener() { return ctx.showChangePass(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizationComponent_Template_button_click_7_listener() { return ctx.showDeleteAkk(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogClose"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], styles: ["div[_ngcontent-%COMP%] {\n  position: relative;\n}\ndiv[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 7px;\n}\ndiv[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  text-align: center;\n}\ndiv[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\ndiv[_ngcontent-%COMP%]   .xbutton[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -18px;\n  right: -18px;\n  color: red;\n}\n.pading[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWcvcmVnLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2N1c3RvbWl6YXRpb24vY3VzdG9taXphdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0FDQUo7QURDSTtFQUNJLGVBQUE7QUNDUjtBRENJO0VBQ0ksa0JBQUE7QUNDUjtBRENJO0VBQ0ksZUFBQTtBQ0NSO0FEQ0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0NSO0FERUE7RUFDSSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2N1c3RvbWl6YXRpb24vY3VzdG9taXphdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5kaXZ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoMXtcclxuICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICB9XHJcbiAgICBmb3Jte1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIGJ1dHRvbntcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICB9XHJcbiAgICAueGJ1dHRvbntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAtMThweDtcclxuICAgICAgICByaWdodDogLTE4cHg7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgIH1cclxufVxyXG4ucGFkaW5ne1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIFxyXG59XHJcbiIsImRpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmRpdiBoMSB7XG4gIG1hcmdpbi10b3A6IDdweDtcbn1cbmRpdiBmb3JtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuZGl2IGJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbmRpdiAueGJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMThweDtcbiAgcmlnaHQ6IC0xOHB4O1xuICBjb2xvcjogcmVkO1xufVxuXG4ucGFkaW5nIHtcbiAgcGFkZGluZzogMTBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomizationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-customization',
                templateUrl: './customization.component.html',
                styleUrls: ['./customization.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "7pko":
/*!*********************************************************!*\
  !*** ./src/app/components/privacy/privacy.component.ts ***!
  \*********************************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PrivacyComponent {
    constructor() { }
    ngOnInit() {
    }
}
PrivacyComponent.ɵfac = function PrivacyComponent_Factory(t) { return new (t || PrivacyComponent)(); };
PrivacyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrivacyComponent, selectors: [["app-privacy"]], decls: 73, vars: 0, consts: [[1, "privacyContainer"], ["ol", ""], [2, "height", "100px"]], template: function PrivacyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041E\u0431\u0449\u0438\u0435 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0422\u0412\u041E\u0419 \u0411\u042E\u0414\u0416\u0415\u0422 (\u0434\u0430\u043B\u0435\u0435 \u2013 \u00AB\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435\u00BB) - \u044D\u0442\u043E \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 \u0434\u043B\u044F \u0432\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0436\u0443\u0440\u043D\u0430\u043B\u0430 \u0434\u043E\u0445\u043E\u0434\u043E\u0432 \u0438 \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u041D\u0430\u0441\u0442\u043E\u044F\u0449\u0430\u044F \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 (\u0434\u0430\u043B\u0435\u0435 \u2013 \u00AB\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430\u00BB) \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u0442 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F \u043C\u0435\u0436\u0434\u0443 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0435\u0439 \u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F (\u0434\u0430\u043B\u0435\u0435 \u2013 \u00AB\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F\u00BB) \u0438 \u0412\u0430\u043C\u0438 (\u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043B\u0438\u0446\u043E\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u0441\u0435\u0442\u0438 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442), \u0434\u0430\u043B\u0435\u0435 \u00AB\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u00BB, \u043F\u043E \u043F\u043E\u0432\u043E\u0434\u0443 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044F:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0423\u0447\u0435\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F, \u0432\u0432\u043E\u0434\u0438\u043C\u044B\u0435 \u043F\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0417\u0430\u043F\u0438\u0441\u0438, \u0441\u043E\u0437\u0434\u0430\u043D\u043D\u044B\u0435 \u0441\u0430\u043C\u0438\u043C \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C, \u043E\u043F\u0438\u0441\u044B\u0432\u0430\u044E\u0449\u0438\u0435 \u0434\u043E\u0445\u043E\u0434\u044B \u0438 \u0440\u0430\u0441\u0445\u043E\u0434\u044B \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F, \u0444\u043E\u0440\u043C\u0438\u0440\u0443\u044E\u0449\u0438\u0435 \u0435\u0433\u043E \u0442\u0430\u043A \u043D\u0430\u0437\u044B\u0432\u0430\u0435\u043C\u044B\u0439 \"\u0431\u044E\u0434\u0436\u0435\u0442\".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0412\u0441\u0435 \u0437\u0430\u043F\u0438\u0441\u0438 \u0434\u043E\u0445\u043E\u0434\u043E\u0432 \u0438 \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432 \u043D\u0435 \u043C\u043E\u0433\u0443\u0442 \u0441\u0447\u0438\u0442\u0430\u0442\u044C\u0441\u044F (\u0438 \u043D\u0435 \u043E\u0431\u044F\u0437\u0430\u043D\u044B \u0431\u044B\u0442\u044C) \u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u043D\u044B\u043C\u0438, \u043D\u0435 \u0438\u043C\u0435\u044E\u0442 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F, \u0438 \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043A\u0430\u043A \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442 \u0441\u0431\u043E\u0440, \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0438 \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F (\u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445) \u0434\u043B\u044F \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F. \u0422\u0430\u043A Email \u0430\u0434\u0440\u0435\u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u043A\u0430\u043A \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0439 login \u043F\u0440\u0438 \u0430\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438. \u0422\u0430\u043A\u0436\u0435 Email \u0430\u0434\u0440\u0435\u0441 \u043C\u043E\u0436\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0434\u043B\u044F \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0430\u0440\u043E\u043B\u044F.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u0412\u0441\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F, \u0432\u0432\u043E\u0434\u0438\u043C\u0430\u044F \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C, \u0445\u0440\u0430\u043D\u0438\u0442\u0441\u044F \u0432 \u0431\u0430\u0437\u0435 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438 \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043F\u0440\u0438 \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u043D\u0433\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u041F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u0412\u0441\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0438 \u0437\u0430\u043F\u0438\u0441\u0438 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u043C\u0438, \u043D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0435\u0439 \u0432 \u043B\u0438\u0447\u043D\u044B\u0445 \u0446\u0435\u043B\u044F\u0445 \u0438 \u043D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u044E\u0442\u0441\u044F \u0442\u0440\u0435\u0442\u044C\u0438\u043C \u0441\u0442\u043E\u0440\u043E\u043D\u0430\u043C, \u0437\u0430 \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435\u043C \u0441\u043B\u0443\u0447\u0430\u0435\u0432, \u043A\u043E\u0433\u0434\u0430 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0443 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u043E\u0440\u0433\u0430\u043D\u0430\u043C \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0417\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u0417\u0430\u0449\u0438\u0442\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0438 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u043E\u043D\u043D\u043E-\u043F\u0440\u0430\u0432\u043E\u0432\u044B\u0435 \u043C\u0435\u0440\u044B \u0432 \u0446\u0435\u043B\u044F\u0445 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044F \u0437\u0430\u0449\u0438\u0442\u044B \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u0445 \u043E\u0442 \u043D\u0435\u043F\u0440\u0430\u0432\u043E\u043C\u0435\u0440\u043D\u043E\u0433\u043E \u0438\u043B\u0438 \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u043D\u0438\u043C, \u0443\u043D\u0438\u0447\u0442\u043E\u0436\u0435\u043D\u0438\u044F, \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F, \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F, \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F, \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u044F, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043E\u0442 \u0438\u043D\u044B\u0445 \u043D\u0435\u043F\u0440\u0430\u0432\u043E\u043C\u0435\u0440\u043D\u044B\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u041F\u0440\u0430\u0432\u0430 \u0438 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0441\u0442\u043E\u0440\u043E\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043E\u0431\u044F\u0437\u0443\u0435\u0442\u0441\u044F \u0441\u043E\u0431\u043B\u044E\u0434\u0430\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0439 \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0438, \u0438 \u0437\u0430 \u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u0435 \u0434\u0430\u043D\u043D\u043E\u0439 \u043D\u0435\u0441\u0435\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u043F\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u043C\u0443 \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0443 \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043D\u0435 \u043D\u0435\u0441\u0435\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0437\u0430 \u0440\u0430\u0437\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435, \u0435\u0441\u043B\u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0443 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u043E\u0440\u0433\u0430\u043D\u0430\u043C \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043D\u0435 \u043D\u0435\u0441\u0435\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0437\u0430 \u0440\u0430\u0437\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435, \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u0435, \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0438\u043B\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435, \u0435\u0441\u043B\u0438 \u0443 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043A\u0430\u043A\u0438\u043C-\u043B\u0438\u0431\u043E \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C \u0431\u044B\u043B\u0438 \u0443\u043A\u0440\u0430\u0434\u0435\u043D\u044B login c \u043F\u0430\u0440\u043E\u043B\u0435\u043C, \u0438\u043B\u0438 \u043A\u043B\u044E\u0447\u0438 \u0441\u0435\u0441\u0441\u0438\u0438.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043E\u0431\u044F\u0437\u0430\u043D \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0442\u044C\u0441\u044F \u0441 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0439 \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043F\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438, \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u0432 \u0433\u0430\u043B\u043E\u0447\u043A\u0443 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u043C \u043F\u043E\u043B\u0435 \u0444\u043E\u0440\u043C\u044B.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043C\u043E\u0436\u0435\u0442 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0432\u043E\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442, \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435 \u0445\u0440\u0430\u043D\u0438\u0442\u0441\u044F \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u043E \u043F\u0443\u043D\u043A\u0442\u0443 7 \u0434\u0430\u043D\u043D\u043E\u0439 \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0438.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u0425\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435 \u0445\u0440\u0430\u043D\u0438\u0442\u0441\u044F \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0435\u0439 \u0431\u0435\u0441\u0441\u0440\u043E\u0447\u043D\u043E \u0434\u043E \u0442\u0435\u0445 \u043F\u043E\u0440, \u043F\u043E\u043A\u0430 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043D\u0435 \u0443\u0434\u0430\u043B\u0438\u0442 \u0441\u0432\u043E\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442, \u0438\u043B\u0438 \u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043D\u0435 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u043D\u0435\u0442 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C, \u0430 \u043F\u043E\u0441\u043B\u0435 \u044D\u0442\u043E\u0433\u043E \u2013 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0441\u0440\u043E\u043A\u0430, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0433\u043E \u0438 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043D\u0435 \u043E\u0431\u044F\u0437\u0430\u043D\u0430 \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u0438 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044E \u043F\u0440\u0438 \u0438\u0445 \u043F\u043E\u0442\u0435\u0440\u0435 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043D\u0435 \u043D\u0435\u0441\u0435\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0437\u0430 \u043F\u043E\u0442\u0435\u0440\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043F\u043E \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043F\u0440\u0438\u0447\u0438\u043D\u0430\u043C \u0438\u043B\u0438 \u043E\u0448\u0438\u0431\u043A\u0430\u043C, \u0435\u0441\u043B\u0438 \u044D\u0442\u0438 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043E\u0448\u0438\u0431\u043A\u0438 \u0438\u043B\u0438 \u043F\u0440\u0438\u0447\u0438\u043D\u044B \u0432\u044B\u0437\u0432\u0430\u043D\u044B \u043D\u0435 \u043F\u043E \u0432\u0438\u043D\u0435 \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0438 \u0434\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0439 \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\u041D\u0430\u0441\u0442\u043E\u044F\u0449\u0430\u044F \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0430 \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0435\u0439 \u0441 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435\u043C \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043F\u043E\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043E\u043C \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u043D\u043E\u0432\u043E\u0439 \u0440\u0435\u0434\u0430\u043A\u0446\u0438\u0438 \u0438\u0437\u043C\u0435\u043D\u044F\u0435\u043C\u043E\u0439 \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 (\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438). \u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432 \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0435, \u0432\u043D\u0435\u0441\u0435\u043D\u043D\u044B\u0435 \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0435\u0439, \u0432\u0441\u0442\u0443\u043F\u0430\u044E\u0442 \u0432 \u0441\u0438\u043B\u0443 \u0441 \u043C\u043E\u043C\u0435\u043D\u0442\u0430 \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 (\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438) \u043D\u043E\u0432\u043E\u0439 \u0440\u0435\u0434\u0430\u043A\u0446\u0438\u0438 \u0442\u0430\u043A\u043E\u0439 \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0438.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\u0412\u043E\u043F\u0440\u043E\u0441\u044B, \u043D\u0435 \u0443\u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0439 \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439, \u043F\u043E\u0434\u043B\u0435\u0436\u0430\u0442 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u044E \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\u0420\u0435\u0434\u0430\u043A\u0446\u0438\u044F \u043E\u0442 17.02.2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "div", 2);
    } }, styles: [".privacyContainer[_ngcontent-%COMP%] {\n  text-align: justify;\n  width: 70%;\n  margin: auto;\n  padding-top: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcml2YWN5L3ByaXZhY3kuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJpdmFjeS9wcml2YWN5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaXZhY3lDb250YWluZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivacyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-privacy',
                templateUrl: './privacy.component.html',
                styleUrls: ['./privacy.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9pw4":
/*!*****************************************************!*\
  !*** ./src/app/components/table/table.component.ts ***!
  \*****************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var src_app_services_budget_items_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/budget-items.service */ "i1pR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");









function TableComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0421\u0443\u043C\u043C\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { green: a0, red: a1 }; };
function TableComponent_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, element_r10.amount >= 0, element_r10.amount < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r10.amount, " ");
} }
function TableComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0414\u0430\u0442\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, element_r11.amount >= 0, element_r11.amount < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, element_r11.date, "dd.MM.yyyy"), " ");
} }
function TableComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, element_r12.amount >= 0, element_r12.amount < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r12.category, " ");
} }
function TableComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableComponent_td_13_Template_mat_icon_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.deleteBudgetItem($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "delete_forever ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, element_r13.amount >= 0, element_r13.amount < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r14);
} }
function TableComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 19);
} }
function TableComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 20);
} }
const _c1 = function () { return [5, 10, 20]; };
class TableComponent {
    constructor(budgetItemsService) {
        this.budgetItemsService = budgetItemsService;
        this.tableColumns = ["amount", "date", "category", "description"];
    }
    _ready() {
        document.getElementsByClassName('mat-paginator-page-size-label')[0].innerHTML = 'Показать по ';
    }
    ngAfterViewInit() {
        this.budgetItemsService.clearBudgetItems(false);
        this.budgetItemsService.fetchBudgetItems();
        this.budgetItemsService.getBudgetItems();
        document.addEventListener("DOMContentLoaded", this._ready);
        this.budgetItemsService.subject.subscribe({ next: bItems => {
                this.BUDGET_ITEMS_DATA = bItems;
                this.budgetItems = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.BUDGET_ITEMS_DATA);
                this.budgetItems.paginator = this.paginator;
            } });
    }
    deleteBudgetItem(e) {
        let elem = e.currentTarget;
        let index = +elem.children[0].innerHTML;
        this.budgetItemsService.deleteBudgetItem(index);
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_budget_items_service__WEBPACK_IMPORTED_MODULE_3__["BudgetItemsService"])); };
TableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["app-table"]], viewQuery: function TableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 17, vars: 5, consts: [[1, "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "amount"], ["style", "padding-right: 5px;", "mat-header-cell", "", 4, "matHeaderCellDef"], ["style", "padding-right: 5px;", "mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["matColumnDef", "date"], ["matColumnDef", "category"], ["matColumnDef", "description"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "description", 3, "ngClass", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", "", 2, "padding-right", "5px"], ["mat-cell", "", 2, "padding-right", "5px", 3, "ngClass"], ["mat-header-cell", ""], ["mat-cell", "", 1, "description", 3, "ngClass"], [1, "oun-input-icon", 3, "click"], [2, "display", "none"], ["mat-header-row", ""], ["mat-row", ""]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableComponent_th_3_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableComponent_td_4_Template, 2, 5, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TableComponent_th_6_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TableComponent_td_7_Template, 3, 8, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TableComponent_th_9_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TableComponent_td_10_Template, 2, 5, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TableComponent_th_12_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TableComponent_td_13_Template, 6, 6, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TableComponent_tr_14_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TableComponent_tr_15_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mat-paginator", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.budgetItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.tableColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.tableColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.oun-mainBord[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 115px;\n  justify-content: center;\n}\n\n.oun-mainBord[_ngcontent-%COMP%]   .oun-mainBord-name[_ngcontent-%COMP%] {\n  text-align: center;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n.oun-mainBord[_ngcontent-%COMP%]   .oun-mainBord-totalBudget[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  text-align: center;\n}\n\n.green[_ngcontent-%COMP%] {\n  background: rgba(205, 252, 106, 0.3);\n}\n\n.red[_ngcontent-%COMP%] {\n  background: rgba(255, 125, 115, 0.4);\n}\n\n.body-app[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntd.description[_ngcontent-%COMP%] {\n  position: relative;\n  padding-right: 30px;\n  max-width: 580px;\n}\n\n.red[_ngcontent-%COMP%] {\n  background-color: rgba(255, 125, 115, 0.4);\n  color: black;\n}\n\n.green[_ngcontent-%COMP%] {\n  background-color: rgba(205, 252, 106, 0.2);\n  color: black;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n  user-select: none;\n  cursor: pointer;\n  position: absolute;\n  right: 15px;\n  top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCQTtFQUNJLFNBQUE7QUM5Qko7O0FEZ0NBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFsQ1k7RUFtQ1osdUJBQUE7QUM3Qko7O0FEaUNJO0VBRUksa0JBQUE7RUFwQkoseUJBQUE7RUFDQSxpQkFBQTtBQ1RKOztBRGdDSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUM5QlI7O0FEa0NBO0VBQ0ksb0NBOUNjO0FDZWxCOztBRGlDQTtFQUNJLG9DQTVDZTtBQ2NuQjs7QURpQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQzlCSjs7QUEvQkE7RUFDSSxXQUFBO0FBa0NKOztBQTlCRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQWlDSjs7QUE1QkM7RUFDSywwQ0RGYTtFQ0diLFlBQUE7QUErQk47O0FBN0JDO0VBQ0ssMENEVmU7RUNXZixZQUFBO0FBZ0NOOztBQTlCSTtFRENBLHlCQUFBO0VBQ0EsaUJBQUE7RUNBRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQW9DTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS1oaWdodHNcclxuJHRvcEhpZ2h0OiA2MHB4O1xyXG4kbWFpbkJvcmRIaWdodDogMTE1cHg7XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tY29sb3JzXHJcblxyXG4kdGl0bGVCYWNrZ3JvdW5kOmxpZ2h0ZW4oIzlEOUJGMCwgMDUlKTtcclxuLy8gZ3JlZW4gY2xhc3NcclxuJGdyZWVuQmFja2dyb3VuZDogcmdiYSgjQ0RGQzZBLCAwLjMpO1xyXG4kZ3JlZW5CYWNrZ3JvdW5kSXRlbTpyZ2JhKCNDREZDNkEsIDAuMik7XHJcbiRncmVlblRleHQ6IGJsYWNrO1xyXG4vLyByZWQgY2xhc3NcclxuJHJlZEJhY2tncm91bmQ6cmVkO1xyXG4kcmVkQmFja2dyb3VuZEl0ZW06cmdiYSgjRkY3RDczLDAuNCk7XHJcbiRyZWRUZXh0OiBibGFjaztcclxuXHJcblxyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tbWl4aW5zXHJcbkBtaXhpbiBub25lLXVzZXItc2VsZWN0KCl7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tc3R5bGVzIGZvciByb290IGNvbXBvbmVudFxyXG5cclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNntcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4ub3VuLW1haW5Cb3Jke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6ICRtYWluQm9yZEhpZ2h0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBcclxuXHJcbiAgICBcclxuICAgIC5vdW4tbWFpbkJvcmQtbmFtZXtcclxuXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIEBpbmNsdWRlIG5vbmUtdXNlci1zZWxlY3QoKTtcclxuIFxyXG4gICAgfVxyXG4gICAgLm91bi1tYWluQm9yZC10b3RhbEJ1ZGdldHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufSAgICAgXHJcblxyXG4uZ3JlZW57XHJcbiAgICBiYWNrZ3JvdW5kOiAkZ3JlZW5CYWNrZ3JvdW5kO1xyXG59XHJcbi5yZWR7XHJcbiAgICBiYWNrZ3JvdW5kOiAkcmVkQmFja2dyb3VuZEl0ZW07XHJcbn1cclxuXHJcbi5ib2R5LWFwcHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgXHJcbn1cclxuXHJcbiIsImgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICBtYXJnaW46IDA7XG59XG5cbi5vdW4tbWFpbkJvcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDExNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5vdW4tbWFpbkJvcmQgLm91bi1tYWluQm9yZC1uYW1lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLm91bi1tYWluQm9yZCAub3VuLW1haW5Cb3JkLXRvdGFsQnVkZ2V0IHtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ3JlZW4ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIwNSwgMjUyLCAxMDYsIDAuMyk7XG59XG5cbi5yZWQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTI1LCAxMTUsIDAuNCk7XG59XG5cbi5ib2R5LWFwcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRkLmRlc2NyaXB0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBtYXgtd2lkdGg6IDU4MHB4O1xufVxuXG4ucmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDEyNSwgMTE1LCAwLjQpO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5ncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA1LCAyNTIsIDEwNiwgMC4yKTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5tYXQtaWNvbiB7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTVweDtcbiAgdG9wOiAxMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-table',
                templateUrl: './table.component.html',
                styleUrls: ['./table.component.scss']
            }]
    }], function () { return [{ type: src_app_services_budget_items_service__WEBPACK_IMPORTED_MODULE_3__["BudgetItemsService"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }] }); })();


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

/***/ "B4IF":
/*!***********************************************************************!*\
  !*** ./src/app/components/main-component/main-component.component.ts ***!
  \***********************************************************************/
/*! exports provided: MainComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponentComponent", function() { return MainComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../change-pass/change-pass.component */ "k8fZ");
/* harmony import */ var src_app_services_total_budget_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/total-budget.service */ "eMvC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _current_period_current_period_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../current-period/current-period.component */ "im1p");










const _c0 = function (a0, a1) { return { "green": a0, "red": a1 }; };
class MainComponentComponent {
    constructor(totalbudgetService, route, authService, dialog, _snackBar, router) {
        this.totalbudgetService = totalbudgetService;
        this.route = route;
        this.authService = authService;
        this.dialog = dialog;
        this._snackBar = _snackBar;
        this.router = router;
    }
    ngOnInit() {
        this.totalbudgetService.getTotalBudget();
        this.totalbudgetService.subject.subscribe({ next: tBudget => {
                this.totalBudget = tBudget;
            } });
        this.viewChangePass();
    }
    viewChangePass() {
        if (location.href.indexOf("forgetPass") !== -1) {
            this.route.queryParams.subscribe((queryParam) => {
                let accessToken = queryParam['id'];
                this.authService.getForgetPass(accessToken).subscribe((data) => {
                    if (data.success) {
                        this.dialog.open(_change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_1__["ChangePassComponent"]);
                    }
                    else {
                        if (data.msg == "jwt expired") {
                            this._snackBar.open("Срок действительности запроса на смену пароля истёк. Пожалуйста повторите попытку", "Ошибка!");
                            this.router.navigate(['/']);
                        }
                    }
                });
            });
        }
    }
}
MainComponentComponent.ɵfac = function MainComponentComponent_Factory(t) { return new (t || MainComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_total_budget_service__WEBPACK_IMPORTED_MODULE_2__["TotalBudgetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
MainComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponentComponent, selectors: [["app-main-component"]], decls: 10, vars: 9, consts: [[1, "body-app"], [1, "oun-mainBord", 3, "ngClass"], [1, "oun-mainBord-name"], [2, "font-size", "20px"], [1, "oun-mainBord-totalBudget"], [2, "font-size", "23px"]], template: function MainComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0423 \u0432\u0430\u0441 \u043D\u0430 \u0441\u0447\u0435\u0442\u0443:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-current-period");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, ctx.totalBudget >= 0, ctx.totalBudget < 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](8, 2, ctx.totalBudget, "RUB", "symbol-narrow"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _current_period_current_period_component__WEBPACK_IMPORTED_MODULE_8__["CurrentPeriodComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]], styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.oun-mainBord[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 115px;\n  justify-content: center;\n}\n\n.oun-mainBord[_ngcontent-%COMP%]   .oun-mainBord-name[_ngcontent-%COMP%] {\n  text-align: center;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n.oun-mainBord[_ngcontent-%COMP%]   .oun-mainBord-totalBudget[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  text-align: center;\n}\n\n.green[_ngcontent-%COMP%] {\n  background: rgba(205, 252, 106, 0.3);\n}\n\n.red[_ngcontent-%COMP%] {\n  background: rgba(255, 125, 115, 0.4);\n}\n\n.body-app[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4tY29tcG9uZW50L21haW4tY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCQTtFQUNJLFNBQUE7QUM5Qko7O0FEZ0NBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFsQ1k7RUFtQ1osdUJBQUE7QUM3Qko7O0FEaUNJO0VBRUksa0JBQUE7RUFwQkoseUJBQUE7RUFDQSxpQkFBQTtBQ1RKOztBRGdDSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUM5QlI7O0FEa0NBO0VBQ0ksb0NBOUNjO0FDZWxCOztBRGlDQTtFQUNJLG9DQTVDZTtBQ2NuQjs7QURpQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQzlCSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1jb21wb25lbnQvbWFpbi1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS1oaWdodHNcclxuJHRvcEhpZ2h0OiA2MHB4O1xyXG4kbWFpbkJvcmRIaWdodDogMTE1cHg7XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tY29sb3JzXHJcblxyXG4kdGl0bGVCYWNrZ3JvdW5kOmxpZ2h0ZW4oIzlEOUJGMCwgMDUlKTtcclxuLy8gZ3JlZW4gY2xhc3NcclxuJGdyZWVuQmFja2dyb3VuZDogcmdiYSgjQ0RGQzZBLCAwLjMpO1xyXG4kZ3JlZW5CYWNrZ3JvdW5kSXRlbTpyZ2JhKCNDREZDNkEsIDAuMik7XHJcbiRncmVlblRleHQ6IGJsYWNrO1xyXG4vLyByZWQgY2xhc3NcclxuJHJlZEJhY2tncm91bmQ6cmVkO1xyXG4kcmVkQmFja2dyb3VuZEl0ZW06cmdiYSgjRkY3RDczLDAuNCk7XHJcbiRyZWRUZXh0OiBibGFjaztcclxuXHJcblxyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tbWl4aW5zXHJcbkBtaXhpbiBub25lLXVzZXItc2VsZWN0KCl7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tc3R5bGVzIGZvciByb290IGNvbXBvbmVudFxyXG5cclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNntcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4ub3VuLW1haW5Cb3Jke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6ICRtYWluQm9yZEhpZ2h0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBcclxuXHJcbiAgICBcclxuICAgIC5vdW4tbWFpbkJvcmQtbmFtZXtcclxuXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIEBpbmNsdWRlIG5vbmUtdXNlci1zZWxlY3QoKTtcclxuIFxyXG4gICAgfVxyXG4gICAgLm91bi1tYWluQm9yZC10b3RhbEJ1ZGdldHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufSAgICAgXHJcblxyXG4uZ3JlZW57XHJcbiAgICBiYWNrZ3JvdW5kOiAkZ3JlZW5CYWNrZ3JvdW5kO1xyXG59XHJcbi5yZWR7XHJcbiAgICBiYWNrZ3JvdW5kOiAkcmVkQmFja2dyb3VuZEl0ZW07XHJcbn1cclxuXHJcbi5ib2R5LWFwcHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgXHJcbn1cclxuXHJcbiIsImgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICBtYXJnaW46IDA7XG59XG5cbi5vdW4tbWFpbkJvcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDExNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5vdW4tbWFpbkJvcmQgLm91bi1tYWluQm9yZC1uYW1lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLm91bi1tYWluQm9yZCAub3VuLW1haW5Cb3JkLXRvdGFsQnVkZ2V0IHtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ3JlZW4ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIwNSwgMjUyLCAxMDYsIDAuMyk7XG59XG5cbi5yZWQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTI1LCAxMTUsIDAuNCk7XG59XG5cbi5ib2R5LWFwcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-component',
                templateUrl: './main-component.component.html',
                styleUrls: ['./main-component.component.scss']
            }]
    }], function () { return [{ type: src_app_services_total_budget_service__WEBPACK_IMPORTED_MODULE_2__["TotalBudgetService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "F33o":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NotFoundComponent {
    constructor() { }
    ngOnInit() {
        window.location.replace("/404");
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 2, vars: 0, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 404 - Page not found ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "FaTN":
/*!*************************************************!*\
  !*** ./src/app/components/reg/reg.component.ts ***!
  \*************************************************/
/*! exports provided: RegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegComponent", function() { return RegComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_budget_items_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/budget-items.service */ "i1pR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");















function RegComponent_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RegComponent {
    constructor(authService, _snackBar, dialogRef, budgetItemService, router) {
        this.authService = authService;
        this._snackBar = _snackBar;
        this.dialogRef = dialogRef;
        this.budgetItemService = budgetItemService;
        this.router = router;
        this.host = location.hostname;
        this.hrefPolycy = "/privacy";
        this.regForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            privacyPolicy: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, this.privacyPolicyValidator),
            isSaveTable: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true),
        });
    }
    ngOnInit() {
    }
    submit() {
        let regFormSubmit = this.regForm.value;
        this.authService.registerUser(regFormSubmit).subscribe((data) => {
            if (data.success) {
                this._snackBar.open(data.msg, "Успешно!", {
                    duration: 2000,
                });
                this.dialogRef.close();
                this.authService.loginUser({ email: regFormSubmit.email, password: regFormSubmit.password, isSaveTable: regFormSubmit.isSaveTable }).subscribe((data) => {
                    if (data.success) {
                        if (regFormSubmit.isSaveTable)
                            this.budgetItemService.pushAllBudgetItems();
                    }
                    else
                        this._snackBar.open(data.msg, "Ошибка!");
                });
            }
            else {
                this._snackBar.open(data.msg, "Ошибка!");
            }
        }, err => {
            console.log(err);
            this._snackBar.open(err.message, "Ошибка!");
        }); //end subscribe of registerUser
    }
    showPrivacyPolicy() {
        window.open(this.router.serializeUrl(this.router.createUrlTree(["/privacy"])));
        return false;
    }
    privacyPolicyValidator(control) {
        if (control.value === false) {
            return { "privacyPolicy": true };
        }
        return null;
    }
}
RegComponent.ɵfac = function RegComponent_Factory(t) { return new (t || RegComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_budget_items_service__WEBPACK_IMPORTED_MODULE_5__["BudgetItemsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
RegComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegComponent, selectors: [["app-reg"]], decls: 32, vars: 5, consts: [[1, "container", "pading"], [1, "example-form", 3, "formGroup", "ngSubmit"], ["placeholder", "\u0438\u043C\u044F", "matInput", "", "type", "text", "formControlName", "name"], [4, "ngIf"], ["placeholder", "email", "matInput", "", "type", "email", "formControlName", "email"], ["placeholder", "password", "matInput", "", "type", "password", "formControlName", "password"], ["formControlName", "privacyPolicy", 1, "example-margin"], [2, "white-space", "pre-line", 3, "href", "click"], ["formControlName", "isSaveTable", 1, "example-margin"], [2, "white-space", "pre-line"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], [1, "xbutton"], ["mat-icon-button", "", "mat-dialog-close", ""]], template: function RegComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0424\u043E\u0440\u043C\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegComponent_Template_form_ngSubmit_3_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RegComponent_mat_error_6_Template, 2, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RegComponent_mat_error_13_Template, 2, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-checkbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u042F \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C \u0441 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegComponent_Template_a_click_17_listener() { return ctx.showPrivacyPolicy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-checkbox", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0442\u0435\u043A\u0443\u0449\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0438\u0437 \u0442\u0430\u0431\u043B\u0438\u0446\u044B (\u0435\u0441\u043B\u0438 \u043E\u043D\u0438 \u0435\u0441\u0442\u044C)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.regForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.regForm.controls.name.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.regForm.controls.password.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.hrefPolycy, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.regForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogClose"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]], styles: ["div[_ngcontent-%COMP%] {\n  position: relative;\n}\ndiv[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 7px;\n}\ndiv[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  text-align: center;\n}\ndiv[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\ndiv[_ngcontent-%COMP%]   .xbutton[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -18px;\n  right: -18px;\n  color: red;\n}\n.pading[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWcvcmVnLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7QUFBSjtBQUNJO0VBQ0ksZUFBQTtBQUNSO0FBQ0k7RUFDSSxrQkFBQTtBQUNSO0FBQ0k7RUFDSSxlQUFBO0FBQ1I7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBQ1I7QUFFQTtFQUNJLGFBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnL3JlZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5kaXZ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoMXtcclxuICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICB9XHJcbiAgICBmb3Jte1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIGJ1dHRvbntcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICB9XHJcbiAgICAueGJ1dHRvbntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAtMThweDtcclxuICAgICAgICByaWdodDogLTE4cHg7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgIH1cclxufVxyXG4ucGFkaW5ne1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIFxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reg',
                templateUrl: './reg.component.html',
                styleUrls: ['./reg.component.scss']
            }]
    }], function () { return [{ type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] }, { type: src_app_services_budget_items_service__WEBPACK_IMPORTED_MODULE_5__["BudgetItemsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


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
/* harmony import */ var _components_top_top_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/top/top.component */ "xx2E");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'Твой бюджет';
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_components_top_top_component__WEBPACK_IMPORTED_MODULE_1__["TopComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.oun-mainBord[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 115px;\n  justify-content: center;\n}\n\n.oun-mainBord[_ngcontent-%COMP%]   .oun-mainBord-name[_ngcontent-%COMP%] {\n  text-align: center;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n.oun-mainBord[_ngcontent-%COMP%]   .oun-mainBord-totalBudget[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  text-align: center;\n}\n\n.green[_ngcontent-%COMP%] {\n  background: rgba(205, 252, 106, 0.3);\n}\n\n.red[_ngcontent-%COMP%] {\n  background: rgba(255, 125, 115, 0.4);\n}\n\n.body-app[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCQTtFQUNJLFNBQUE7QUE5Qko7O0FBZ0NBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFsQ1k7RUFtQ1osdUJBQUE7QUE3Qko7O0FBaUNJO0VBRUksa0JBQUE7RUFwQkoseUJBQUE7RUFDQSxpQkFBQTtBQVRKOztBQWdDSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUE5QlI7O0FBa0NBO0VBQ0ksb0NBOUNjO0FBZWxCOztBQWlDQTtFQUNJLG9DQTVDZTtBQWNuQjs7QUFpQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQTlCSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLWhpZ2h0c1xyXG4kdG9wSGlnaHQ6IDYwcHg7XHJcbiRtYWluQm9yZEhpZ2h0OiAxMTVweDtcclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS1jb2xvcnNcclxuXHJcbiR0aXRsZUJhY2tncm91bmQ6bGlnaHRlbigjOUQ5QkYwLCAwNSUpO1xyXG4vLyBncmVlbiBjbGFzc1xyXG4kZ3JlZW5CYWNrZ3JvdW5kOiByZ2JhKCNDREZDNkEsIDAuMyk7XHJcbiRncmVlbkJhY2tncm91bmRJdGVtOnJnYmEoI0NERkM2QSwgMC4yKTtcclxuJGdyZWVuVGV4dDogYmxhY2s7XHJcbi8vIHJlZCBjbGFzc1xyXG4kcmVkQmFja2dyb3VuZDpyZWQ7XHJcbiRyZWRCYWNrZ3JvdW5kSXRlbTpyZ2JhKCNGRjdENzMsMC40KTtcclxuJHJlZFRleHQ6IGJsYWNrO1xyXG5cclxuXHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS1taXhpbnNcclxuQG1peGluIG5vbmUtdXNlci1zZWxlY3QoKXtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS1zdHlsZXMgZm9yIHJvb3QgY29tcG9uZW50XHJcblxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2e1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5vdW4tbWFpbkJvcmR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogJG1haW5Cb3JkSGlnaHQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIFxyXG5cclxuICAgIFxyXG4gICAgLm91bi1tYWluQm9yZC1uYW1le1xyXG5cclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgQGluY2x1ZGUgbm9uZS11c2VyLXNlbGVjdCgpO1xyXG4gXHJcbiAgICB9XHJcbiAgICAub3VuLW1haW5Cb3JkLXRvdGFsQnVkZ2V0e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59ICAgICBcclxuXHJcbi5ncmVlbntcclxuICAgIGJhY2tncm91bmQ6ICRncmVlbkJhY2tncm91bmQ7XHJcbn1cclxuLnJlZHtcclxuICAgIGJhY2tncm91bmQ6ICRyZWRCYWNrZ3JvdW5kSXRlbTtcclxufVxyXG5cclxuLmJvZHktYXBwe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "UPYz":
/*!***************************************************************!*\
  !*** ./src/app/components/delete-akk/delete-akk.component.ts ***!
  \***************************************************************/
/*! exports provided: DeleteAkkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteAkkComponent", function() { return DeleteAkkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");












function DeleteAkkComponent_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DeleteAkkComponent {
    constructor(authService, _snackBar, dialogRefDel) {
        this.authService = authService;
        this._snackBar = _snackBar;
        this.dialogRefDel = dialogRefDel;
        this.deleteAkkForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            oldPass: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    ngOnInit() {
    }
    submit() {
        let body = {
            pass: this.deleteAkkForm.value.oldPass,
            accessToken: localStorage.getItem("accessToken")
        };
        this.authService.deleteAkk(body).subscribe((data) => {
            if (data.success) {
                this._snackBar.open(data.msg, "Успешно", { duration: 2000 });
                this.dialogRefDel.close();
                window.location.reload();
            }
            else {
                this._snackBar.open(data.msg, "Ошибка");
            }
        });
    }
}
DeleteAkkComponent.ɵfac = function DeleteAkkComponent_Factory(t) { return new (t || DeleteAkkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"])); };
DeleteAkkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteAkkComponent, selectors: [["app-delete-akk"]], decls: 14, vars: 3, consts: [[1, "container"], [1, "example-form", 3, "formGroup", "ngSubmit"], ["placeholder", "password", "matInput", "", "type", "password", "formControlName", "oldPass"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], [1, "xbutton"], ["mat-icon-button", "", "mat-dialog-close", ""]], template: function DeleteAkkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DeleteAkkComponent_Template_form_ngSubmit_3_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DeleteAkkComponent_mat_error_6_Template, 2, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.deleteAkkForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deleteAkkForm.controls.oldPass.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.deleteAkkForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogClose"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]], styles: ["div[_ngcontent-%COMP%] {\n  position: relative;\n}\ndiv[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 7px;\n}\ndiv[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  text-align: center;\n}\ndiv[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\ndiv[_ngcontent-%COMP%]   .xbutton[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -18px;\n  right: -18px;\n  color: red;\n}\n.pading[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWcvcmVnLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2RlbGV0ZS1ha2svZGVsZXRlLWFray5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0FDQUo7QURDSTtFQUNJLGVBQUE7QUNDUjtBRENJO0VBQ0ksa0JBQUE7QUNDUjtBRENJO0VBQ0ksZUFBQTtBQ0NSO0FEQ0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0NSO0FERUE7RUFDSSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RlbGV0ZS1ha2svZGVsZXRlLWFray5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5kaXZ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoMXtcclxuICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICB9XHJcbiAgICBmb3Jte1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIGJ1dHRvbntcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICB9XHJcbiAgICAueGJ1dHRvbntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAtMThweDtcclxuICAgICAgICByaWdodDogLTE4cHg7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgIH1cclxufVxyXG4ucGFkaW5ne1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIFxyXG59XHJcbiIsImRpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmRpdiBoMSB7XG4gIG1hcmdpbi10b3A6IDdweDtcbn1cbmRpdiBmb3JtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuZGl2IGJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbmRpdiAueGJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMThweDtcbiAgcmlnaHQ6IC0xOHB4O1xuICBjb2xvcjogcmVkO1xufVxuXG4ucGFkaW5nIHtcbiAgcGFkZGluZzogMTBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteAkkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-delete-akk',
                templateUrl: './delete-akk.component.html',
                styleUrls: ['./delete-akk.component.scss']
            }]
    }], function () { return [{ type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var src_app_services_budget_items_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/budget-items.service */ "i1pR");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");














function LoginComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(dialogRef, authService, _snackBar, budgetItemsService) {
        this.dialogRef = dialogRef;
        this.authService = authService;
        this._snackBar = _snackBar;
        this.budgetItemsService = budgetItemsService;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            isSaveTable: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true),
        });
    }
    ngOnInit() {
    }
    submit() {
        let loginFormSubmit = this.loginForm.value;
        this.authService.loginUser(loginFormSubmit).subscribe((data) => {
            if (data.success) {
                this.dialogRef.close();
                this._snackBar.open(data.msg, "Успешно!", {
                    duration: 2000,
                });
                if (loginFormSubmit.isSaveTable) {
                    this.budgetItemsService.pushAllBudgetItems().then(value => {
                        this.budgetItemsService.clearBudgetItems(false);
                        this.budgetItemsService.fetchBudgetItems();
                        window.location.reload();
                    });
                }
                else {
                    this.budgetItemsService.clearBudgetItems(false);
                    this.budgetItemsService.fetchBudgetItems();
                }
            }
            else
                this._snackBar.open(data.msg, "Ошибка!");
        });
    }
    forgotPass() {
        let loginFormSubmit = this.loginForm.value;
        if (!loginFormSubmit.email)
            this._snackBar.open("Введите Email", "Ошибка!");
        else {
            if (!loginFormSubmit.isSaveTable)
                this.budgetItemsService.clearBudgetItems();
            this.authService.forgetPass(loginFormSubmit.email).subscribe((data) => {
                if (data.success)
                    this._snackBar.open("На Ваш Email сейчас прийдет письмо с сылкой для смены пароля. Пожалуйста перейдите по ней", "Успешно!");
                else {
                    if (data.msg == "No user")
                        this._snackBar.open("Пользователь не найден", "Ошибка!");
                }
            }, err => console.log(err));
        }
        return false;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_budget_items_service__WEBPACK_IMPORTED_MODULE_5__["BudgetItemsService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 27, vars: 3, consts: [[1, "container", "pading"], [1, "example-form", 3, "formGroup", "ngSubmit"], ["placeholder", "email", "matInput", "", "type", "email", "formControlName", "email"], ["placeholder", "password", "matInput", "", "type", "password", "formControlName", "password"], [4, "ngIf"], ["href", "", 3, "click"], ["formControlName", "isSaveTable", 1, "example-margin"], [2, "white-space", "pre-line"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], [1, "xbutton"], ["mat-icon-button", "", "mat-dialog-close", ""]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0412\u0445\u043E\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_mat_error_9_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_11_listener() { return ctx.forgotPass(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-checkbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0442\u0435\u043A\u0443\u0449\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0438\u0437 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u0442\u0430\u0431\u043B\u0438\u0446\u044B (\u0435\u0441\u043B\u0438 \u043E\u043D\u0438 \u0435\u0441\u0442\u044C)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0412\u043E\u0439\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm.controls.password.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: ["div[_ngcontent-%COMP%] {\n  position: relative;\n}\ndiv[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 7px;\n}\ndiv[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  text-align: center;\n}\ndiv[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\ndiv[_ngcontent-%COMP%]   .xbutton[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -18px;\n  right: -18px;\n  color: red;\n}\n.pading[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWcvcmVnLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7QUNBSjtBRENJO0VBQ0ksZUFBQTtBQ0NSO0FEQ0k7RUFDSSxrQkFBQTtBQ0NSO0FEQ0k7RUFDSSxlQUFBO0FDQ1I7QURDSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDQ1I7QURFQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZGl2e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaDF7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgfVxyXG4gICAgZm9ybXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgfVxyXG4gICAgLnhidXR0b257XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogLTE4cHg7XHJcbiAgICAgICAgcmlnaHQ6IC0xOHB4O1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcbn1cclxuLnBhZGluZ3tcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBcclxufVxyXG4iLCJkaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5kaXYgaDEge1xuICBtYXJnaW4tdG9wOiA3cHg7XG59XG5kaXYgZm9ybSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmRpdiBidXR0b24ge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5kaXYgLnhidXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTE4cHg7XG4gIHJpZ2h0OiAtMThweDtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnBhZGluZyB7XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }, { type: src_app_services_budget_items_service__WEBPACK_IMPORTED_MODULE_5__["BudgetItemsService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_top_top_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/top/top.component */ "xx2E");
/* harmony import */ var _components_current_period_current_period_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/current-period/current-period.component */ "im1p");
/* harmony import */ var _components_budget_item_form_budget_item_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/budget-item-form/budget-item-form.component */ "hxVZ");
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/table/table.component */ "9pw4");
/* harmony import */ var _components_reg_reg_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/reg/reg.component */ "FaTN");
/* harmony import */ var _components_main_component_main_component_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/main-component/main-component.component */ "B4IF");
/* harmony import */ var _components_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/privacy/privacy.component */ "7pko");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/change-pass/change-pass.component */ "k8fZ");
/* harmony import */ var _components_customization_customization_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/customization/customization.component */ "1s+b");
/* harmony import */ var _components_delete_akk_delete_akk_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/delete-akk/delete-akk.component */ "UPYz");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "F33o");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/host.service */ "yPQU");
/* harmony import */ var _services_budget_items_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/budget-items.service */ "i1pR");






/* ------------------------------- components ------------------------------- */













/* ----------------------------- materialize.io ----------------------------- */












/* --------------------------- service and classes -------------------------- */




class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_31__["AuthService"], _services_host_service__WEBPACK_IMPORTED_MODULE_32__["HostService"], _services_budget_items_service__WEBPACK_IMPORTED_MODULE_33__["BudgetItemsService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__["MatAutocompleteModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__["MatSnackBarModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__["MatDialogModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _components_top_top_component__WEBPACK_IMPORTED_MODULE_7__["TopComponent"],
        _components_current_period_current_period_component__WEBPACK_IMPORTED_MODULE_8__["CurrentPeriodComponent"],
        _components_budget_item_form_budget_item_form_component__WEBPACK_IMPORTED_MODULE_9__["BudgetItemFormComponent"],
        _components_table_table_component__WEBPACK_IMPORTED_MODULE_10__["TableComponent"],
        _components_reg_reg_component__WEBPACK_IMPORTED_MODULE_11__["RegComponent"],
        _components_main_component_main_component_component__WEBPACK_IMPORTED_MODULE_12__["MainComponentComponent"],
        _components_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_13__["PrivacyComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
        _components_change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_15__["ChangePassComponent"],
        _components_customization_customization_component__WEBPACK_IMPORTED_MODULE_16__["CustomizationComponent"],
        _components_delete_akk_delete_akk_component__WEBPACK_IMPORTED_MODULE_17__["DeleteAkkComponent"],
        _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__["NotFoundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__["MatAutocompleteModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__["MatSnackBarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__["MatDialogModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _components_top_top_component__WEBPACK_IMPORTED_MODULE_7__["TopComponent"],
                    _components_current_period_current_period_component__WEBPACK_IMPORTED_MODULE_8__["CurrentPeriodComponent"],
                    _components_budget_item_form_budget_item_form_component__WEBPACK_IMPORTED_MODULE_9__["BudgetItemFormComponent"],
                    _components_table_table_component__WEBPACK_IMPORTED_MODULE_10__["TableComponent"],
                    _components_reg_reg_component__WEBPACK_IMPORTED_MODULE_11__["RegComponent"],
                    _components_main_component_main_component_component__WEBPACK_IMPORTED_MODULE_12__["MainComponentComponent"],
                    _components_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_13__["PrivacyComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                    _components_change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_15__["ChangePassComponent"],
                    _components_customization_customization_component__WEBPACK_IMPORTED_MODULE_16__["CustomizationComponent"],
                    _components_delete_akk_delete_akk_component__WEBPACK_IMPORTED_MODULE_17__["DeleteAkkComponent"],
                    _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__["NotFoundComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__["MatAutocompleteModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTableModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__["MatSnackBarModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__["MatDialogModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"]
                ],
                providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_31__["AuthService"], _services_host_service__WEBPACK_IMPORTED_MODULE_32__["HostService"], _services_budget_items_service__WEBPACK_IMPORTED_MODULE_33__["BudgetItemsService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "eMvC":
/*!**************************************************!*\
  !*** ./src/app/services/total-budget.service.ts ***!
  \**************************************************/
/*! exports provided: TotalBudgetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalBudgetService", function() { return TotalBudgetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _budget_items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./budget-items.service */ "i1pR");




class TotalBudgetService {
    constructor(budgetItemsService) {
        this.budgetItemsService = budgetItemsService;
        this.totalBudget = 0;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.budgetItemsService.subject.subscribe({ next: (bItems) => {
                this.totalBudget = 0;
                bItems.forEach(item => this.totalBudget += item.amount);
                this.subject.next(this.totalBudget);
            } });
        this.budgetItemsService.getBudgetItems();
    }
    getTotalBudget() {
        this.subject.next(this.totalBudget);
    }
}
TotalBudgetService.ɵfac = function TotalBudgetService_Factory(t) { return new (t || TotalBudgetService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_budget_items_service__WEBPACK_IMPORTED_MODULE_2__["BudgetItemsService"])); };
TotalBudgetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TotalBudgetService, factory: TotalBudgetService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TotalBudgetService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _budget_items_service__WEBPACK_IMPORTED_MODULE_2__["BudgetItemsService"] }]; }, null); })();


/***/ }),

/***/ "hxVZ":
/*!***************************************************************************!*\
  !*** ./src/app/components/budget-item-form/budget-item-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: BudgetItemFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetItemFormComponent", function() { return BudgetItemFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_budget_items_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/budget-items.service */ "i1pR");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");













function BudgetItemFormComponent_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043C\u043C\u0443");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BudgetItemFormComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BudgetItemFormComponent_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r5, " ");
} }
function BudgetItemFormComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class BudgetItemFormComponent {
    constructor(budgetItemsService, _snackBar) {
        this.budgetItemsService = budgetItemsService;
        this._snackBar = _snackBar;
        this.budgetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this._formatDate(new Date()), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
        });
        this.categories = [];
    }
    ngOnInit() {
        this.filteredOptions = this.budgetForm.controls["category"].valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(""), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((value) => this._filter(value)));
        this.budgetItemsService.getBudgetItems();
        this.budgetItemsService.subject.subscribe({
            next: bItems => {
                this.categories = bItems.map(item => item.category);
                this.categories = this._filterCategory(this.categories);
                this.budgetForm.controls.category.setValue('');
            }
        });
    }
    submit() {
        let bItem = this.budgetForm.value;
        this.budgetItemsService.addBudgetItem(bItem);
        this.shoCompleteMessage();
        this.budgetForm.controls.amount.reset();
        this.budgetForm.controls.category.setValue('');
        this.budgetForm.controls.description.reset();
    }
    shoCompleteMessage() {
        this._snackBar.open("Запись добавлена", "Успешно", {
            duration: 2000,
        });
    }
    _filterCategory(categoryArr) {
        let arrRes = [];
        categoryArr.forEach((item) => {
            if (arrRes.indexOf(item) == -1)
                arrRes.push(item);
        });
        this.budgetForm.controls.amount;
        return arrRes;
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.categories.filter((option) => option.toLowerCase().indexOf(filterValue) === 0);
    }
    _formatDate(date) {
        let year = "" + date.getFullYear();
        let month = date.getMonth() + 1;
        let monthStr;
        if (month < 10)
            monthStr = "0" + month;
        else
            monthStr = "" + month;
        let day = date.getDate();
        let dayStr;
        if (day < 10)
            dayStr = "0" + day;
        else
            dayStr = "" + day;
        return year + "-" + monthStr + "-" + dayStr;
    }
}
BudgetItemFormComponent.ɵfac = function BudgetItemFormComponent_Factory(t) { return new (t || BudgetItemFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_budget_items_service__WEBPACK_IMPORTED_MODULE_3__["BudgetItemsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
BudgetItemFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BudgetItemFormComponent, selectors: [["app-budget-item-form"]], decls: 21, vars: 9, consts: [[1, "container"], [1, "example-form", 3, "formGroup", "ngSubmit"], [1, "example-form-field"], ["placeholder", "\u0421\u0443\u043C\u043C\u0430", "matInput", "", "type", "number", "formControlName", "amount"], [4, "ngIf"], ["placeholder", "\u0414\u0430\u0442\u0430", "matInput", "", "type", "date", "formControlName", "date"], [1, "example-full-width"], ["type", "text", "placeholder", "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F", "aria-label", "Number", "matInput", "", "formControlName", "category", 3, "matAutocomplete"], ["autoActiveFirstOption", ""], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439", "type", "text", "formControlName", "description"], ["mat-raised-button", "", "color", "primary", 3, "disabled"], [3, "value"]], template: function BudgetItemFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0417\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u0434\u043E\u0445\u043E\u0434 (\u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E \"\u0421\u0443\u043C\u043C\u044B\") \u0438\u043B\u0438 \u0440\u0430\u0441\u0445\u043E\u0434 (\u043E\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435) \u043A \u0441\u0432\u043E\u0435\u043C\u0443 \u0431\u044E\u0434\u0436\u0435\u0442\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function BudgetItemFormComponent_Template_form_ngSubmit_3_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BudgetItemFormComponent_mat_error_6_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BudgetItemFormComponent_mat_error_9_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-autocomplete", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BudgetItemFormComponent_mat_option_14_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, BudgetItemFormComponent_mat_error_16_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.budgetForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.budgetForm.controls.amount.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.budgetForm.controls.date.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 7, ctx.filteredOptions));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.budgetForm.controls.category.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.budgetForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  margin: 12px;\n  margin-top: 25px;\n  font-size: 16px;\n}\n.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: 25px;\n  color: grey;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: normal;\n}\n.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  margin-left: 25px;\n}\n.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9idWRnZXQtaXRlbS1mb3JtL2J1ZGdldC1pdGVtLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0o7QUFBSTtFQUNHLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlEQUFBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBRUEsc0JBQUE7QUFDUjtBQUdJO0VBRUksZ0JBQUE7RUFDQSxpQkFBQTtBQUZSO0FBSU87RUFDSyxrQkFBQTtBQUZaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9idWRnZXQtaXRlbS1mb3JtL2J1ZGdldC1pdGVtLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiAxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHB7XHJcbiAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIC8vZm9udDogNDAwIDE0cHgvMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmb3Jte1xyXG5cclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG5cclxuICAgICAgIG1hdC1mb3JtLWZpZWxke1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcblxyXG4gICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BudgetItemFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-budget-item-form",
                templateUrl: "./budget-item-form.component.html",
                styleUrls: ["./budget-item-form.component.scss"],
            }]
    }], function () { return [{ type: src_app_services_budget_items_service__WEBPACK_IMPORTED_MODULE_3__["BudgetItemsService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "i1pR":
/*!**************************************************!*\
  !*** ./src/app/services/budget-items.service.ts ***!
  \**************************************************/
/*! exports provided: BudgetItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetItemsService", function() { return BudgetItemsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "lGQG");





class BudgetItemsService {
    constructor(authService) {
        this.authService = authService;
        this.budgetItems = [];
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    addBudgetItem(bItem) {
        let now = new Date();
        bItem.date = new Date(bItem.date);
        bItem.date.setHours(now.getHours());
        bItem.date.setMinutes(now.getMinutes());
        bItem.date.setSeconds(now.getSeconds());
        bItem.itemID = this._generateItemID();
        this.budgetItems.push(bItem);
        this.sortBudgetItems();
        this.subject.next(this.budgetItems);
        this.authService.sendAddItem(bItem).subscribe((data) => {
            if (data.msg == "logout") {
                this.clearBudgetItems();
            }
        });
    }
    _generateItemID() {
        let id = Math.random() * Math.random() * 1000000 + "." + (+new Date());
        return id;
    }
    getBudgetItems() {
        this.subject.next(this.budgetItems);
    }
    sortBudgetItems() {
        this.budgetItems.sort((a, b) => {
            return (+(new Date(b.date)) - +(new Date(a.date)));
        });
    }
    deleteBudgetItem(index) {
        let itemID = this.budgetItems[index].itemID;
        this.budgetItems.splice(index, 1);
        this.subject.next(this.budgetItems);
        this.authService.sendDeleteItem(itemID).subscribe((data) => {
            if (data.msg == "logout") {
                this.clearBudgetItems();
            }
        });
    }
    clearBudgetItems(isSubject = true) {
        this.budgetItems = [];
        if (isSubject)
            this.subject.next(this.budgetItems);
    }
    pushAllBudgetItems() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            for (let item of this.budgetItems) {
                yield this.authService.sendAddItem(item).subscribe(err => console.log(err));
            }
            return true;
        });
    }
    fetchBudgetItems() {
        this.authService.sendFetchBudgetItems().subscribe((data) => {
            if (data.success) {
                this.budgetItems = data.budgetItems;
                this.sortBudgetItems();
                this.subject.next(this.budgetItems);
            }
        });
    }
}
BudgetItemsService.ɵfac = function BudgetItemsService_Factory(t) { return new (t || BudgetItemsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
BudgetItemsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BudgetItemsService, factory: BudgetItemsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BudgetItemsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "im1p":
/*!***********************************************************************!*\
  !*** ./src/app/components/current-period/current-period.component.ts ***!
  \***********************************************************************/
/*! exports provided: CurrentPeriodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentPeriodComponent", function() { return CurrentPeriodComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _budget_item_form_budget_item_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../budget-item-form/budget-item-form.component */ "hxVZ");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../table/table.component */ "9pw4");




class CurrentPeriodComponent {
    constructor() { }
    ngOnInit() {
    }
}
CurrentPeriodComponent.ɵfac = function CurrentPeriodComponent_Factory(t) { return new (t || CurrentPeriodComponent)(); };
CurrentPeriodComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CurrentPeriodComponent, selectors: [["app-current-period"]], decls: 2, vars: 0, template: function CurrentPeriodComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-budget-item-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-table");
    } }, directives: [_budget_item_form_budget_item_form_component__WEBPACK_IMPORTED_MODULE_1__["BudgetItemFormComponent"], _table_table_component__WEBPACK_IMPORTED_MODULE_2__["TableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VycmVudC1wZXJpb2QvY3VycmVudC1wZXJpb2QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrentPeriodComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-current-period',
                templateUrl: './current-period.component.html',
                styleUrls: ['./current-period.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "k8fZ":
/*!*****************************************************************!*\
  !*** ./src/app/components/change-pass/change-pass.component.ts ***!
  \*****************************************************************/
/*! exports provided: ChangePassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePassComponent", function() { return ChangePassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");













function ChangePassComponent_mat_form_field_4_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0442\u0430\u0440\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChangePassComponent_mat_form_field_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChangePassComponent_mat_form_field_4_mat_error_2_Template, 2, 0, "mat-error", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.changePassForm.controls.oldPass.invalid);
} }
function ChangePassComponent_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ChangePassComponent {
    constructor(dialogRef, authService, _snackBar, router) {
        this.dialogRef = dialogRef;
        this.authService = authService;
        this._snackBar = _snackBar;
        this.router = router;
        this.changePassForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            oldPass: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, this.oldPassValidator),
            newPass: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    ngOnInit() {
        this.tempPassToken = localStorage.getItem("tempPassToken");
    }
    submit() {
        let passForm = this.changePassForm.value;
        if (this.tempPassToken) {
            let body = {
                tempPassToken: this.tempPassToken,
                newPass: passForm.newPass,
                accessToken: localStorage.accessToken
            };
            this.authService.changePass(body).subscribe((data) => {
                if (data.success) {
                    localStorage.removeItem("tempPassToken");
                    this._snackBar.open("Пароль успешно заменен", "Успешно!", { duration: 2000, });
                    this.authService.getUserName();
                    this.dialogRef.close();
                    this.router.navigate(['/']);
                }
                else {
                    if (data.msg == "jwt expired") {
                        localStorage.removeItem("tempPassToken");
                        this._snackBar.open("Истек срок действительности временного пароля. После завершения текущей сессии повторите попытку.", "Ошибка");
                        this.dialogRef.close();
                        this.router.navigate(['/']);
                        this.authService.getUserName();
                    }
                }
            }, err => { console.log(err); });
        }
        else {
            let body = {
                oldPass: passForm.oldPass,
                newPass: passForm.newPass,
                accessToken: localStorage.accessToken
            };
            this.authService.changePass(body).subscribe((data) => {
                if (data.success) {
                    this.dialogRef.close();
                    this.router.navigate(['/']);
                    this._snackBar.open("Пароль успешно заменен", "Успешно!", { duration: 2000, });
                }
                else {
                    if (data.msg == "Старый пароль не верен") {
                        this.dialogRef.close();
                        this.router.navigate(['/']);
                        this._snackBar.open(data.msg, "Ошибка!");
                    }
                }
            });
        }
    }
    onClickXbutton() {
        this.router.navigate(['/']);
    }
    oldPassValidator(control) {
        if (!this.tempPassToken && control.value === false) {
            return { "tempPas": true };
        }
        return null;
    }
}
ChangePassComponent.ɵfac = function ChangePassComponent_Factory(t) { return new (t || ChangePassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
ChangePassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangePassComponent, selectors: [["app-change-pass"]], decls: 16, vars: 4, consts: [[1, "container"], [1, "example-form", 3, "formGroup", "ngSubmit"], [4, "ngIf"], ["placeholder", "new password", "matInput", "", "type", "password", "formControlName", "newPass"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], [1, "xbutton", 3, "click"], ["mat-icon-button", "", "mat-dialog-close", ""], ["placeholder", "old password", "matInput", "", "type", "password", "formControlName", "oldPass"]], template: function ChangePassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0421\u043C\u0435\u043D\u0430 \u043F\u0430\u0440\u043E\u043B\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChangePassComponent_Template_form_ngSubmit_3_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChangePassComponent_mat_form_field_4_Template, 3, 1, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChangePassComponent_mat_error_8_Template, 2, 0, "mat-error", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePassComponent_Template_span_click_12_listener() { return ctx.onClickXbutton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.changePassForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.tempPassToken);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.changePassForm.controls.newPass.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.changePassForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]], styles: ["div[_ngcontent-%COMP%] {\n  position: relative;\n}\ndiv[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 7px;\n}\ndiv[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  text-align: center;\n}\ndiv[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\ndiv[_ngcontent-%COMP%]   .xbutton[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -18px;\n  right: -18px;\n  color: red;\n}\n.pading[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWcvcmVnLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NoYW5nZS1wYXNzL2NoYW5nZS1wYXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7QUNBSjtBRENJO0VBQ0ksZUFBQTtBQ0NSO0FEQ0k7RUFDSSxrQkFBQTtBQ0NSO0FEQ0k7RUFDSSxlQUFBO0FDQ1I7QURDSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDQ1I7QURFQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhbmdlLXBhc3MvY2hhbmdlLXBhc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZGl2e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaDF7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgfVxyXG4gICAgZm9ybXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgfVxyXG4gICAgLnhidXR0b257XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogLTE4cHg7XHJcbiAgICAgICAgcmlnaHQ6IC0xOHB4O1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcbn1cclxuLnBhZGluZ3tcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBcclxufVxyXG4iLCJkaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5kaXYgaDEge1xuICBtYXJnaW4tdG9wOiA3cHg7XG59XG5kaXYgZm9ybSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmRpdiBidXR0b24ge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5kaXYgLnhidXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTE4cHg7XG4gIHJpZ2h0OiAtMThweDtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnBhZGluZyB7XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePassComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-change-pass',
                templateUrl: './change-pass.component.html',
                styleUrls: ['./change-pass.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/host.service */ "yPQU");






class AuthService {
    constructor(http, hostService) {
        this.http = http;
        this.hostService = hostService;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    registerUser(regFormValues) {
        if (!regFormValues.privacyPolicy)
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](subscriber => {
                subscriber.next(JSON.stringify({ success: false, msg: "Нет согласия с Политикой Конфидециальности" }));
            });
        else {
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers.append("contentType", "application/json");
            return this.http
                .post(this.hostService.getHost() + "account/reg", regFormValues, { headers: headers });
        }
    }
    loginUser(user) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append("contentType", "application/json");
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](subscriber => {
            this.http
                .post(this.hostService.getHost() + "account/login", user, { headers: headers }).subscribe((data) => {
                if (data.success) {
                    this.userName = data.userName;
                    localStorage.setItem("userName", data.userName);
                    localStorage.setItem("accessToken", data.accessToken);
                    localStorage.setItem("refreshToken", data.refreshToken);
                    this.subject.next(this.userName);
                }
                subscriber.next(data);
            });
        });
    }
    logOut() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append("contentType", "application/json");
        let logout = { accessToken: localStorage.getItem("accessToken") };
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](subscriber => {
            this.http
                .post(this.hostService.getHost() + "account/logout", logout, { headers: headers }).subscribe((data) => {
                if (data.success) {
                    this.userName = null;
                    localStorage.clear();
                    this.subject.next(this.userName);
                }
                else {
                    localStorage.clear();
                    this.getUserName();
                }
                subscriber.next(data);
            });
        });
    }
    getUserName() {
        this.userName = localStorage.getItem("userName");
        this.subject.next(this.userName);
    }
    refreshTokens() {
        let tokens = {
            accessToken: localStorage.getItem("accessToken"),
            refreshToken: localStorage.getItem("refreshToken")
        };
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append("contentType", "application/json");
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](subscriber => {
            this.http
                .post(this.hostService.getHost() + "account/refreshTokens", tokens, { headers: headers }).subscribe((data) => {
                if (data.success) {
                    localStorage.setItem("userName", data.userName);
                    localStorage.setItem("accessToken", data.accessToken);
                    localStorage.setItem("refreshToken", data.refreshToken);
                    this.getUserName();
                    subscriber.next({ success: true, msg: "OK" });
                }
                else {
                    this.logOut().subscribe((data) => {
                        window.location.reload();
                    });
                }
                ;
            }, err => console.log(err));
        });
    }
    forgetPass(email) {
        let body = {
            email: email
        };
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append("contentType", "application/json");
        return this.http.post(this.hostService.getHost() + "account/forgetPass", body, { headers: headers });
    }
    getForgetPass(accessToken) {
        let body = {
            accessToken: accessToken
        };
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append("contentType", "application/json");
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](subscriber => {
            this.http.post(this.hostService.getHost() + "account/getForgetPass", body, { headers: headers }).subscribe((data) => {
                if (data.success) {
                    this.userName = data.userName;
                    localStorage.setItem("userName", data.userName);
                    localStorage.setItem("accessToken", data.accessToken);
                    localStorage.setItem("refreshToken", data.refreshToken);
                    localStorage.setItem("tempPassToken", data.tempPassToken);
                    this.getUserName();
                    subscriber.next({ success: true, msg: data.msg, data: data });
                }
                else {
                    if (data.msg == "jwt expired") {
                        subscriber.next({ success: false, msg: "jwt expired" });
                    }
                }
            });
        });
    }
    changePass(body) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append("contentType", "application/json");
        return this.http.post(this.hostService.getHost() + "account/changePass", body, { headers: headers });
    }
    deleteAkk(body) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append("contentType", "application/json");
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](subscriber => {
            this.http.post(this.hostService.getHost() + "account/deleteAkk", body, { headers: headers }).subscribe((data) => {
                if (data.success) {
                    localStorage.clear();
                    this.getUserName();
                    subscriber.next(data);
                }
                else {
                    subscriber.next(data);
                }
            });
        });
    }
    /* -------------------------------------------------------------------------- */
    /*                        budgetItemsService ServerSide                       */
    /* -------------------------------------------------------------------------- */
    sendAddItem(bitem) {
        let body = {
            accessToken: localStorage.getItem("accessToken"),
            bitem: bitem,
        };
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append("contentType", "application/json");
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](subscriber => {
            this.http.post(this.hostService.getHost() + 'budgetItems/addItem', body, { headers: headers }).subscribe((data) => {
                if (!data.success) {
                    if (data.msg == "jwt expired") {
                        this.refreshTokens().subscribe((data) => {
                            if (data.success)
                                this.sendAddItem(bitem).subscribe(err => {
                                    console.log(err);
                                });
                        });
                    }
                    else {
                        if (data.msg == "Нет токена") {
                            subscriber.next({ success: true, msg: "Не выполнен вход" });
                        }
                        else {
                            this.logOut().subscribe((data) => subscriber.next({ success: false, msg: "logout" }));
                        }
                    }
                }
            }, err => {
                console.log(err);
            });
        });
    }
    sendDeleteItem(itemId) {
        let body = {
            accessToken: localStorage.getItem("accessToken"),
            itemId: itemId,
        };
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append("contentType", "application/json");
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](subscriber => {
            this.http.post(this.hostService.getHost() + 'budgetItems/deleteItem', body, { headers: headers }).subscribe((data) => {
                if (!data.success) {
                    if (data.msg === "jwt expired") {
                        this.refreshTokens().subscribe((data) => {
                            if (data.success) {
                                this.sendDeleteItem(itemId).subscribe(err => console.log(err));
                            }
                        });
                    }
                    else {
                        if (data.msg == "Нет токена") {
                            subscriber.next({ success: true, msg: "Не выполнен вход" });
                        }
                        else {
                            this.logOut().subscribe((data) => subscriber.next({ success: false, msg: "logout" }));
                        }
                    }
                }
            }, err => {
                console.log(err);
            });
        });
    }
    sendFetchBudgetItems() {
        let body = {
            accessToken: localStorage.getItem("accessToken"),
        };
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append("contentType", "application/json");
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](subscriber => {
            this.http.post(this.hostService.getHost() + 'budgetItems/fetchBudgetItems', body, { headers: headers }).subscribe((data) => {
                if (!data.success) {
                    if (data.msg === "jwt expired") {
                        this.refreshTokens().subscribe((data) => {
                            if (data.success) {
                                this.sendFetchBudgetItems().subscribe((data) => {
                                    if (data.success)
                                        subscriber.next(data);
                                }, err => console.log(err));
                            }
                        });
                    }
                    else {
                        if (data.msg == "Нет токена") {
                            subscriber.next({ success: false, msg: "Не выполнен вход" });
                        }
                        else {
                            this.logOut().subscribe((data) => subscriber.next({ success: false, msg: "logout" }));
                        }
                    }
                }
                else {
                    subscriber.next(data);
                }
            });
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_main_component_main_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main-component/main-component.component */ "B4IF");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "F33o");
/* harmony import */ var _components_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/privacy/privacy.component */ "7pko");







const routes = [
    { path: '', component: _components_main_component_main_component_component__WEBPACK_IMPORTED_MODULE_2__["MainComponentComponent"] },
    { path: 'privacy', component: _components_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_4__["PrivacyComponent"] },
    { path: 'forgetPass', component: _components_main_component_main_component_component__WEBPACK_IMPORTED_MODULE_2__["MainComponentComponent"] },
    { path: '**', component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xx2E":
/*!*************************************************!*\
  !*** ./src/app/components/top/top.component.ts ***!
  \*************************************************/
/*! exports provided: TopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopComponent", function() { return TopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _customization_customization_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customization/customization.component */ "1s+b");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.component */ "W3Zi");
/* harmony import */ var _reg_reg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reg/reg.component */ "FaTN");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var src_app_services_budget_items_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/budget-items.service */ "i1pR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");













function TopComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0412\u0445\u043E\u0434 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u043D\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TopComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.name, "");
} }
function TopComponent_mat_icon_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TopComponent_mat_icon_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TopComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.logOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "snpan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0412\u044B\u0439\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TopComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopComponent_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.customization(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "snpan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TopComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopComponent_ng_template_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.showLoginForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0412\u043E\u0439\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopComponent_ng_template_14_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.showRegForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TopComponent {
    constructor(dialog, authService, _snackBar, budgetItemsService) {
        this.dialog = dialog;
        this.authService = authService;
        this._snackBar = _snackBar;
        this.budgetItemsService = budgetItemsService;
        this.isLogin = false;
    }
    ngOnInit() {
        this.authService.subject.subscribe({ next: userName => {
                this.name = userName;
                this.isLogin = !!userName;
            } });
        this.authService.getUserName();
    }
    showRegForm() {
        this.dialog.open(_reg_reg_component__WEBPACK_IMPORTED_MODULE_3__["RegComponent"], { width: '300px' });
    }
    showLoginForm() {
        this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]);
    }
    logOut() {
        this.authService.logOut().subscribe((data) => {
            if (data.success) {
                this.budgetItemsService.clearBudgetItems();
                this._snackBar.open(data.msg, "Успешно!", {
                    duration: 2000,
                });
            }
            else
                this._snackBar.open(data.msg, "Ошибка!");
        });
    }
    customization() {
        this.dialog.open(_customization_customization_component__WEBPACK_IMPORTED_MODULE_1__["CustomizationComponent"], { autoFocus: false });
    }
}
TopComponent.ɵfac = function TopComponent_Factory(t) { return new (t || TopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_budget_items_service__WEBPACK_IMPORTED_MODULE_7__["BudgetItemsService"])); };
TopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopComponent, selectors: [["app-top"]], decls: 16, vars: 8, consts: [["mat-dialog-content", "", 1, "oun-title", 2, "margin", "0", "padding", "0"], [2, "text-align", "center", "width", "100%", "position", "absolute"], [1, "total-badget"], ["style", "text-align: center;", 4, "ngIf", "ngIfElse"], ["unset1", ""], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], [4, "ngIf"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngIf", "ngIfElse"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["unset", ""], [2, "text-align", "center"], ["mat-menu-item", "", 3, "click"]], template: function TopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0442\u0432\u043E\u0439 \u0431\u044E\u0434\u0436\u0435\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TopComponent_span_4_Template, 4, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TopComponent_ng_template_5_Template, 2, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TopComponent_mat_icon_8_Template, 2, 0, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TopComponent_mat_icon_9_Template, 2, 0, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-menu", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TopComponent_button_12_Template, 3, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TopComponent_button_13_Template, 3, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TopComponent_ng_template_14_Template, 6, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLogin)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogin)("ngIfElse", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogin);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["_MatMenu"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuItem"]], styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.oun-mainBord[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 115px;\n  justify-content: center;\n}\n\n.oun-mainBord[_ngcontent-%COMP%]   .oun-mainBord-name[_ngcontent-%COMP%] {\n  text-align: center;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n.oun-mainBord[_ngcontent-%COMP%]   .oun-mainBord-totalBudget[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  text-align: center;\n}\n\n.green[_ngcontent-%COMP%] {\n  background: rgba(205, 252, 106, 0.3);\n}\n\n.red[_ngcontent-%COMP%] {\n  background: rgba(255, 125, 115, 0.4);\n}\n\n.body-app[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n}\n\n.oun-title[_ngcontent-%COMP%], .oun-input-icon[_ngcontent-%COMP%], .oun-input-icond[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n.oun-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  height: 60px;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 0.5px 10px 0px rgba(0, 0, 0, 0.12);\n  background-color: #b3b1f3;\n}\n\n.oun-title[_ngcontent-%COMP%]   .total-badget[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: 500;\n}\n\n.oun-title[_ngcontent-%COMP%]   .oun-input-icon[_ngcontent-%COMP%] {\n  display: flex;\n  height: 60px;\n  align-items: center;\n  z-index: 0;\n  cursor: pointer;\n  margin-right: 18px;\n}\n\n.oun-title[_ngcontent-%COMP%]   .oun-input-icon[_ngcontent-%COMP%]   .oun-input-icond[_ngcontent-%COMP%] {\n  margin-right: 18px;\n  align-items: center;\n  font-size: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RvcC90b3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JBO0VBQ0ksU0FBQTtBQzlCSjs7QURnQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQWxDWTtFQW1DWix1QkFBQTtBQzdCSjs7QURpQ0k7RUFFSSxrQkFBQTtFQXBCSix5QkFBQTtFQUNBLGlCQUFBO0FDVEo7O0FEZ0NJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQzlCUjs7QURrQ0E7RUFDSSxvQ0E5Q2M7QUNlbEI7O0FEaUNBO0VBQ0ksb0NBNUNlO0FDY25COztBRGlDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDOUJKOztBQTlCQTtFRHFCSSx5QkFBQTtFQUNBLGlCQUFBO0FDZUo7O0FBakNBO0VBRUksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZRFZPO0VDV1AsNEhBQUE7RUFFQSx5QkRSYTtBQzBDakI7O0FBaENJO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQWtDUjs7QUEvQkk7RUFFSSxhQUFBO0VBQ0EsWUR2Qkc7RUN3QkgsbUJBQUE7RUFDQSxVQUFBO0VBRUEsZUFBQTtFQUNBLGtCQUFBO0FBK0JSOztBQTdCUTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBK0JaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b3AvdG9wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0taGlnaHRzXHJcbiR0b3BIaWdodDogNjBweDtcclxuJG1haW5Cb3JkSGlnaHQ6IDExNXB4O1xyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLWNvbG9yc1xyXG5cclxuJHRpdGxlQmFja2dyb3VuZDpsaWdodGVuKCM5RDlCRjAsIDA1JSk7XHJcbi8vIGdyZWVuIGNsYXNzXHJcbiRncmVlbkJhY2tncm91bmQ6IHJnYmEoI0NERkM2QSwgMC4zKTtcclxuJGdyZWVuQmFja2dyb3VuZEl0ZW06cmdiYSgjQ0RGQzZBLCAwLjIpO1xyXG4kZ3JlZW5UZXh0OiBibGFjaztcclxuLy8gcmVkIGNsYXNzXHJcbiRyZWRCYWNrZ3JvdW5kOnJlZDtcclxuJHJlZEJhY2tncm91bmRJdGVtOnJnYmEoI0ZGN0Q3MywwLjQpO1xyXG4kcmVkVGV4dDogYmxhY2s7XHJcblxyXG5cclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLW1peGluc1xyXG5AbWl4aW4gbm9uZS11c2VyLXNlbGVjdCgpe1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLXN0eWxlcyBmb3Igcm9vdCBjb21wb25lbnRcclxuXHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDZ7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLm91bi1tYWluQm9yZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAkbWFpbkJvcmRIaWdodDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgXHJcblxyXG4gICAgXHJcbiAgICAub3VuLW1haW5Cb3JkLW5hbWV7XHJcblxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBAaW5jbHVkZSBub25lLXVzZXItc2VsZWN0KCk7XHJcbiBcclxuICAgIH1cclxuICAgIC5vdW4tbWFpbkJvcmQtdG90YWxCdWRnZXR7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMThweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn0gICAgIFxyXG5cclxuLmdyZWVue1xyXG4gICAgYmFja2dyb3VuZDogJGdyZWVuQmFja2dyb3VuZDtcclxufVxyXG4ucmVke1xyXG4gICAgYmFja2dyb3VuZDogJHJlZEJhY2tncm91bmRJdGVtO1xyXG59XHJcblxyXG4uYm9keS1hcHB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIFxyXG59XHJcblxyXG4iLCJoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgbWFyZ2luOiAwO1xufVxuXG4ub3VuLW1haW5Cb3JkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMTVweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ub3VuLW1haW5Cb3JkIC5vdW4tbWFpbkJvcmQtbmFtZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5vdW4tbWFpbkJvcmQgLm91bi1tYWluQm9yZC10b3RhbEJ1ZGdldCB7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdyZWVuIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDUsIDI1MiwgMTA2LCAwLjMpO1xufVxuXG4ucmVkIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDEyNSwgMTE1LCAwLjQpO1xufVxuXG4uYm9keS1hcHAge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ub3VuLXRpdGxlLCAub3VuLWlucHV0LWljb24sIC5vdW4taW5wdXQtaWNvbmQge1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ub3VuLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAwLjVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNiMWYzO1xufVxuLm91bi10aXRsZSAudG90YWwtYmFkZ2V0IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5vdW4tdGl0bGUgLm91bi1pbnB1dC1pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMThweDtcbn1cbi5vdW4tdGl0bGUgLm91bi1pbnB1dC1pY29uIC5vdW4taW5wdXQtaWNvbmQge1xuICBtYXJnaW4tcmlnaHQ6IDE4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-top',
                templateUrl: './top.component.html',
                styleUrls: ['./top.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }, { type: src_app_services_budget_items_service__WEBPACK_IMPORTED_MODULE_7__["BudgetItemsService"] }]; }, null); })();


/***/ }),

/***/ "yPQU":
/*!******************************************!*\
  !*** ./src/app/services/host.service.ts ***!
  \******************************************/
/*! exports provided: HostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostService", function() { return HostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HostService {
    constructor() {
        this.host = '';
    }
    getHost() {
        return this.host;
    }
}
HostService.ɵfac = function HostService_Factory(t) { return new (t || HostService)(); };
HostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HostService, factory: HostService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HostService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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