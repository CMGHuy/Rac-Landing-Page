function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../persistent/templatesXLSX/ImportTypeMapping.json":
  /*!**********************************************************!*\
    !*** ../persistent/templatesXLSX/ImportTypeMapping.json ***!
    \**********************************************************/

  /*! exports provided: RSC, RIL, RIB, RCL, RCB, RCC, RIC, default */

  /***/
  function persistentTemplatesXLSXImportTypeMappingJson(module) {
    module.exports = JSON.parse("{\"RSC\":\"Importer Feedback Upload\",\"RIL\":\"Chassis Load Upload (Importer)\",\"RIB\":\"Chassis Load Upload (Importer)\",\"RCL\":\"Chassis Load Upload (Customer)\",\"RCB\":\"Chassis Load Upload (Customer)\",\"RCC\":\"Chassis Load Correction Upload (Customer)\",\"RIC\":\"Chassis Load Correction Upload (Importer)\"}");
    /***/
  },

  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/alert-dialog/alert-dialog.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/alert-dialog/alert-dialog.component.ts ***!
    \********************************************************/

  /*! exports provided: AlertDialogComponent */

  /***/
  function srcAppAlertDialogAlertDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertDialogComponent", function () {
      return AlertDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var ngx_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-clipboard */
    "./node_modules/ngx-clipboard/__ivy_ngcc__/fesm2015/ngx-clipboard.js");
    /* harmony import */


    var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/clipboard */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function AlertDialogComponent_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function AlertDialogComponent_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r2.successImageSource, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function AlertDialogComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", ".", ctx_r4.failImageSource, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function AlertDialogComponent_mat_dialog_content_9_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var text_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](text_r8);
      }
    }

    function AlertDialogComponent_mat_dialog_content_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AlertDialogComponent_mat_dialog_content_9_div_1_Template, 3, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.dataKey);
      }
    }

    function AlertDialogComponent_mat_dialog_content_10_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var text_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](text_r10);
      }
    }

    function AlertDialogComponent_mat_dialog_content_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AlertDialogComponent_mat_dialog_content_10_div_1_Template, 3, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.dataKey);
      }
    }

    var AlertDialogComponent = /*#__PURE__*/function () {
      function AlertDialogComponent(clipboardService, clipboard, data, dialogRef) {
        _classCallCheck(this, AlertDialogComponent);

        this.clipboardService = clipboardService;
        this.clipboard = clipboard;
        this.data = data;
        this.dialogRef = dialogRef;
        this.contentToClipboard = '';
        this.successImageSource = '../../assets/images/successfulUpload.png';
        this.failImageSource = '../../assets/images/failedUpload.png';
      }

      _createClass(AlertDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _webpack_require__ = __webpack_require__(
          /*! detect-browser */
          "./node_modules/detect-browser/es/index.js"),
              detect = _webpack_require__.detect;

          var browserDetected = detect();
          this.browser = browserDetected.name;
          this.dataKey = this.data.dataKey;

          var _iterator = _createForOfIteratorHelper(this.dataKey),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var line = _step.value;
              this.contentToClipboard += line;
              this.contentToClipboard += "\n";
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }, {
        key: "copied",
        value: function copied(event) {
          if (event.isSuccess) {
            console.log("Copy successful");
            alert("Copy successful");
          } else {
            console.log("Copy failed" + "This functionality is blocked by your browser.\n" + "Please use a different browser or copy the error messages manually.");
            alert("Copy failed:\n" + "This functionality is blocked by your browser.\n" + "Please use a different browser or copy the error messages manually.");
          }
        }
      }]);

      return AlertDialogComponent;
    }();

    AlertDialogComponent.ɵfac = function AlertDialogComponent_Factory(t) {
      return new (t || AlertDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["Clipboard"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
    };

    AlertDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AlertDialogComponent,
      selectors: [["app-alert-dialog"]],
      decls: 14,
      vars: 6,
      consts: [["align", "end"], ["mat-dialog-close", "", 1, "closeDialogButton"], ["align", "center"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""], ["align", "center", "class", "dialogContentBelow3", 4, "ngIf"], ["align", "center", "tabindex", "0", "class", "mat-typography dialogContentOver3", 4, "ngIf"], ["align", "center", 2, "margin-top", "30px"], ["ngxClipboard", "", "mat-button", "", 1, "copyButton", 3, "cbContent", "cbOnError", "cbOnSuccess"], ["align", "center", "alt", "successful Upload", 3, "src"], ["align", "center", "alt", "failed Upload", 3, "src"], ["align", "center", 1, "dialogContentBelow3"], [4, "ngFor", "ngForOf"], [2, "font-size", "25px"], ["align", "center", "tabindex", "0", 1, "mat-typography", "dialogContentOver3"], [2, "font-size", "20px"]],
      template: function AlertDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-actions", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2716");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AlertDialogComponent_ng_container_4_Template, 1, 0, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AlertDialogComponent_ng_template_5_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AlertDialogComponent_ng_template_7_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AlertDialogComponent_mat_dialog_content_9_Template, 2, 1, "mat-dialog-content", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AlertDialogComponent_mat_dialog_content_10_Template, 2, 1, "mat-dialog-content", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-dialog-actions", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cbOnError", function AlertDialogComponent_Template_button_cbOnError_12_listener($event) {
            return ctx.copied($event);
          })("cbOnSuccess", function AlertDialogComponent_Template_button_cbOnSuccess_12_listener($event) {
            return ctx.copied($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Copy to clipboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.errorCode == "0")("ngIfThen", _r1)("ngIfElse", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataKey.length <= 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataKey.length > 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cbContent", ctx.contentToClipboard);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: [".mat-dialog-container\r\n{\r\n  background-color:#001e50!important;\r\n  border: 1px solid#001e50 !important;\r\n  border-radius: 5px!important;\r\n  width: 80vw!important;\r\n}\r\n.closeDialogButton[_ngcontent-%COMP%]\r\n{\r\n  font-size: 25px;\r\n  background-color:#006384;\r\n  color: white;\r\n  border: 1px solid;\r\n  border-radius: 5px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n.closeDialogButton[_ngcontent-%COMP%]:focus, .closeDialogButton[_ngcontent-%COMP%]:hover\r\n{\r\n  box-shadow: 0 -6px 10px 0 #AED6F1  , 0 6px 10px 0 #AED6F1 ;\r\n}\r\n.copyButton[_ngcontent-%COMP%]\r\n{\r\n  background-color: #D6EAF8;\r\n}\r\n.copyButton[_ngcontent-%COMP%]:focus, .copyButton[_ngcontent-%COMP%]:hover\r\n{\r\n  box-shadow: 0 -6px 10px 0 #AED6F1  , 0 6px 10px 0 #AED6F1 ;\r\n  background-color: white;\r\n}\r\n.dialogContentBelow3[_ngcontent-%COMP%]\r\n{\r\n  color: white;\r\n  text-align: center;\r\n  margin-top: 50px;\r\n  font-size: 22px;\r\n}\r\n.dialogContentOver3[_ngcontent-%COMP%]\r\n{\r\n  color: white;\r\n  text-align: center;\r\n  margin-top: 30px;\r\n  max-height: 50vh!important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxlcnQtZGlhbG9nL2FsZXJ0LWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGtDQUFrQztFQUNsQyxtQ0FBbUM7RUFDbkMsNEJBQTRCO0VBQzVCLHFCQUFxQjtBQUN2QjtBQUNBOztFQUVFLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7OztFQUdFLDBEQUEwRDtBQUM1RDtBQUNBOztFQUVFLHlCQUF5QjtBQUMzQjtBQUNBOzs7RUFHRSwwREFBMEQ7RUFDMUQsdUJBQXVCO0FBQ3pCO0FBQ0E7O0VBRUUsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBOztFQUVFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2FsZXJ0LWRpYWxvZy9hbGVydC1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXJcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzAwMWU1MCFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQjMDAxZTUwICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4IWltcG9ydGFudDtcclxuICB3aWR0aDogODB2dyFpbXBvcnRhbnQ7XHJcbn1cclxuLmNsb3NlRGlhbG9nQnV0dG9uXHJcbntcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMDA2Mzg0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuLmNsb3NlRGlhbG9nQnV0dG9uOmZvY3VzLFxyXG4uY2xvc2VEaWFsb2dCdXR0b246aG92ZXJcclxue1xyXG4gIGJveC1zaGFkb3c6IDAgLTZweCAxMHB4IDAgI0FFRDZGMSAgLCAwIDZweCAxMHB4IDAgI0FFRDZGMSA7XHJcbn1cclxuLmNvcHlCdXR0b25cclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNENkVBRjg7XHJcbn1cclxuLmNvcHlCdXR0b246Zm9jdXMsXHJcbi5jb3B5QnV0dG9uOmhvdmVyXHJcbntcclxuICBib3gtc2hhZG93OiAwIC02cHggMTBweCAwICNBRUQ2RjEgICwgMCA2cHggMTBweCAwICNBRUQ2RjEgO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5kaWFsb2dDb250ZW50QmVsb3czXHJcbntcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcbi5kaWFsb2dDb250ZW50T3ZlcjNcclxue1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXgtaGVpZ2h0OiA1MHZoIWltcG9ydGFudDtcclxufVxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-alert-dialog',
          templateUrl: './alert-dialog.component.html',
          styleUrls: ['./alert-dialog.component.css']
        }]
      }], function () {
        return [{
          type: ngx_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardService"]
        }, {
          type: _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["Clipboard"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./landing-page/landing-page.component */
    "./src/app/landing-page/landing-page.component.ts");

    var AppComponent = /*#__PURE__*/function () {
      //@Input() tokenValue: any;
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'RacLPUI';
        this.companyTitel = document.getElementById("companyVariable").textContent;
        this.typeImport = document.getElementById("importTypeVariable").textContent;
        this.token = document.getElementById("token").textContent;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.selectedPage = this.typeImport;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 4,
      consts: [[3, "component", "typeImport", "token", "companyTitel", "componentChange"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "landing-page-root", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("componentChange", function AppComponent_Template_landing_page_root_componentChange_1_listener($event) {
            return ctx.selectedPage = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("component", ctx.selectedPage)("typeImport", ctx.typeImport)("token", ctx.token)("companyTitel", ctx.companyTitel);
        }
      },
      directives: [_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_1__["LandingPageComponent"]],
      styles: ["div[_ngcontent-%COMP%]\r\n{\r\n  background-color:#001e50;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow-x: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzAwMWU1MDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./landing-page/landing-page.component */
    "./src/app/landing-page/landing-page.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./alert-dialog/alert-dialog.component */
    "./src/app/alert-dialog/alert-dialog.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _loader_upload_file_loader_upload_file_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./loader-upload-file/loader-upload-file.component */
    "./src/app/loader-upload-file/loader-upload-file.component.ts");
    /* harmony import */


    var _block_page_block_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./block-page/block-page.component */
    "./src/app/block-page/block-page.component.ts");
    /* harmony import */


    var ngx_clipboard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ngx-clipboard */
    "./node_modules/ngx-clipboard/__ivy_ngcc__/fesm2015/ngx-clipboard.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_18__["ClipboardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_12__["LandingPageComponent"], _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_14__["AlertDialogComponent"], _loader_upload_file_loader_upload_file_component__WEBPACK_IMPORTED_MODULE_16__["LoaderUploadFileComponent"], _block_page_block_page_component__WEBPACK_IMPORTED_MODULE_17__["BlockPageComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_18__["ClipboardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_12__["LandingPageComponent"], _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_14__["AlertDialogComponent"], _loader_upload_file_loader_upload_file_component__WEBPACK_IMPORTED_MODULE_16__["LoaderUploadFileComponent"], _block_page_block_page_component__WEBPACK_IMPORTED_MODULE_17__["BlockPageComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_18__["ClipboardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]],
          entryComponents: [_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_14__["AlertDialogComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/block-page/block-page.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/block-page/block-page.component.ts ***!
    \****************************************************/

  /*! exports provided: BlockPageComponent */

  /***/
  function srcAppBlockPageBlockPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlockPageComponent", function () {
      return BlockPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BlockPageComponent = /*#__PURE__*/function () {
      function BlockPageComponent() {
        _classCallCheck(this, BlockPageComponent);
      }

      _createClass(BlockPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BlockPageComponent;
    }();

    BlockPageComponent.ɵfac = function BlockPageComponent_Factory(t) {
      return new (t || BlockPageComponent)();
    };

    BlockPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlockPageComponent,
      selectors: [["app-block-page"]],
      decls: 10,
      vars: 0,
      consts: [["charset", "ISO-8859-1"]],
      template: function BlockPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "VW backoffice has started reimbursement processing, it is no longer possible to upload data.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Please contact your key account manager if necessary.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2NrLXBhZ2UvYmxvY2stcGFnZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlockPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-block-page',
          templateUrl: './block-page.component.html',
          styleUrls: ['./block-page.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/landing-page/backend.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/landing-page/backend.service.ts ***!
    \*************************************************/

  /*! exports provided: BackendService */

  /***/
  function srcAppLandingPageBackendServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackendService", function () {
      return BackendService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var BackendService = /*#__PURE__*/function () {
      function BackendService(http) {
        _classCallCheck(this, BackendService);

        this.http = http;
        this.backendUrl = '/v1/lp/upload';
        this.httpOptions = {
          //headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' }),
          observe: 'events',
          params: {}
        };
      }

      _createClass(BackendService, [{
        key: "upload",
        value: function upload(data, token) {
          this.httpOptions.params = {
            token: token
          };
          return this.http.post(this.backendUrl, data, this.httpOptions);
        }
      }]);

      return BackendService;
    }();

    BackendService.ɵfac = function BackendService_Factory(t) {
      return new (t || BackendService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    BackendService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BackendService,
      factory: BackendService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackendService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/landing-page/landing-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/landing-page/landing-page.component.ts ***!
    \********************************************************/

  /*! exports provided: LandingPageComponent */

  /***/
  function srcAppLandingPageLandingPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function () {
      return LandingPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../alert-dialog/alert-dialog.component */
    "./src/app/alert-dialog/alert-dialog.component.ts");
    /* harmony import */


    var _persistent_templatesXLSX_ImportTypeMapping_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../persistent/templatesXLSX/ImportTypeMapping.json */
    "../persistent/templatesXLSX/ImportTypeMapping.json");

    var _persistent_templatesXLSX_ImportTypeMapping_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../../../../persistent/templatesXLSX/ImportTypeMapping.json */
    "../persistent/templatesXLSX/ImportTypeMapping.json", 1);
    /* harmony import */


    var _backend_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./backend.service */
    "./src/app/landing-page/backend.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _loader_upload_file_loader_upload_file_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../loader-upload-file/loader-upload-file.component */
    "./src/app/loader-upload-file/loader-upload-file.component.ts");

    function LandingPageComponent_button_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingPageComponent_button_16_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Submit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LandingPageComponent_button_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LandingPageComponent = /*#__PURE__*/function () {
      function LandingPageComponent(backendService, dialog, router) {
        _classCallCheck(this, LandingPageComponent);

        this.backendService = backendService;
        this.dialog = dialog;
        this.router = router;
        this.title = 'RaC-Landing-Page';
        this.fileNameDisplay = null;
        this.defaultLabelText = "Choose a file";
        this.wrongFileText = ['Invalid input Format, only CSV, XLSX, XLS is allowed!'];
        this.successfulText = ['File uploaded successfully! You will receive a confirmation email upon successful import.'];
        this.boxShadowStyle = '0 -6px 10px 0 #AED6F1  , 0 6px 10px 0 #AED6F1 ';
        this.fileUpload = null;
        this.uploadMessage = null;
        this.errorCode = null;
        this.fakeButtonOn = true;
        this.submitButtonOn = false;
        this.loaderOn = false;
        this.importName = "RIL";
        this.componentChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(LandingPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fileNameDisplay = this.defaultLabelText;
          this.showFullImportType();
        }
      }, {
        key: "showFullImportType",
        value: function showFullImportType() {
          var importTypeData = JSON.parse(JSON.stringify(_persistent_templatesXLSX_ImportTypeMapping_json__WEBPACK_IMPORTED_MODULE_3__));

          for (var prop in importTypeData) {
            if (this.typeImport == prop) {
              this.importTypeFullName = importTypeData[prop];
              console.log(this.importTypeFullName);
              console.log(this.typeImport);
            }
          }
        }
      }, {
        key: "setComponentOff",
        value: function setComponentOff() {
          this.component = 'blockedPage';
          this.componentChange.emit(this.component);
          console.log(this.component);
        }
      }, {
        key: "verifyFile",
        value: function verifyFile(event) {
          var fileName = event.target.files[0].name;
          var allowedExtensions = /(\.xlsx|\.xls|\.xlt|\.csv)$/i;

          if (!allowedExtensions.exec(fileName)) {
            fileName = '';
            this.fileNameDisplay = this.defaultLabelText;
            this.openDialog(this.wrongFileText, 1);
            this.fakeButtonOn = true;
            this.submitButtonOn = false;
          } else {
            this.fileNameDisplay = fileName;
            this.fileUpload = event.target.files.item(0);
            console.log(this.fileUpload);
            this.fakeButtonOn = false;
            this.submitButtonOn = true;
          }

          event.target.value = null;
        }
      }, {
        key: "openDialog",
        value: function openDialog(inputData, inputErrorCode) {
          this.dialog.open(_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_2__["AlertDialogComponent"], {
            data: {
              errorCode: inputErrorCode,
              dataKey: inputData
            }
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this = this;

          var formData = new FormData();
          formData.append('csvfile', this.fileUpload);
          this.loaderOn = true;
          this.backendService.upload(formData, this.token).subscribe(function (res) {
            if (res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
              console.log(res);
              _this.uploadMessage = res.body.errorMessages;
              _this.errorCode = res.body.errorCode;

              if (_this.uploadMessage && _this.errorCode) {
                _this.loaderOn = false;

                if (res.body.errorMessages[0] == "BlockedByBo") {
                  _this.setComponentOff(); // this.router.navigate(['./block-page'],{replaceUrl:true})
                  //this.zone.run(() => { this.router.navigate(['./block-page'], { replaceUrl: true }); });


                  console.log("navigate successful");
                } else {
                  if (_this.errorCode == "0") {
                    _this.uploadMessage = _this.successfulText;
                  }

                  _this.openDialog(_this.uploadMessage, _this.errorCode);
                }
              }
            }
          }, function (err) {
            return console.log(err);
          });
        }
      }]);

      return LandingPageComponent;
    }();

    LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) {
      return new (t || LandingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LandingPageComponent,
      selectors: [["landing-page-root"]],
      inputs: {
        typeImport: "typeImport",
        companyTitel: "companyTitel",
        token: "token",
        component: "component",
        importTypeFullName: "importTypeFullName"
      },
      outputs: {
        componentChange: "componentChange"
      },
      decls: 19,
      vars: 6,
      consts: [["role", "banner", 1, "toolbar"], ["id", "VWLogo", "alt", "VW Logo", "src", "../../assets/images/VW_Fleet_Logo.png"], ["role", "main", 1, "content"], ["align", "center", 1, "container"], ["type", "file", "id", "customFile", "name", "filename", "required", "", 1, "custom-file-input", "custom-file-input-1", 2, "display", "none", 3, "change"], ["for", "customFile"], ["width", "20", "height", "17", "viewBox", "0 0 20 17"], ["type", "submit", "id", "submitButton", "class", "submit-button", 3, "click", 4, "ngIf"], ["type", "button", "id", "fakeSubmitButton", "class", "submit-button", "disabled", "disabled", 4, "ngIf"], [3, "loaderEnable"], ["type", "submit", "id", "submitButton", 1, "submit-button", 3, "click"], ["type", "button", "id", "fakeSubmitButton", "disabled", "disabled", 1, "submit-button"], [1, "fa", "fa-minus-circle"]],
      template: function LandingPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LandingPageComponent_Template_input_change_9_listener($event) {
            return ctx.verifyFile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "cloud_upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LandingPageComponent_button_16_Template, 3, 0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LandingPageComponent_button_17_Template, 3, 0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-loader-upload-file", 9);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.companyTitel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.importTypeFullName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fileNameDisplay);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitButtonOn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fakeButtonOn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loaderEnable", ctx.loaderOn);
        }
      },
      directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _loader_upload_file_loader_upload_file_component__WEBPACK_IMPORTED_MODULE_9__["LoaderUploadFileComponent"]],
      styles: ["@import url('https://fonts.googleapis.com/css?family=Poppins:200i,400&display=swap');\r\n\r\n[_ngcontent-%COMP%]:root\r\n{\r\n  --color-darkblue-alpha: rgba(27, 27, 50, 0.8);\r\n  --color-green: #37af65;\r\n}\r\n\r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after\r\n{\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.toolbar[_ngcontent-%COMP%] {\r\n  background-color:white;\r\n  height: 120px;\r\n  background-position: left;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n#VWLogo[_ngcontent-%COMP%]\r\n{\r\n  display: block;\r\n  margin-left: 30px;\r\n  padding-top: 5px;\r\n  width: 110px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\nh4[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]\r\n{\r\n  margin-top: 70px;\r\n  text-align: center;\r\n  font-size: 60px;\r\n  color: white;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin: 3.125rem auto 0 auto;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1.4;\r\n  color: rgba(27, 27, 50, 0.8) !important;\r\n  height: 60%;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    max-width: 1000px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    max-width: 1200px;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.custom-file-input[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]\r\n{\r\n  max-width: 80%;\r\n  font-size: 35px;\r\n  font-weight: 700;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  overflow: hidden;\r\n  padding: 0.625rem 1.25rem;\r\n  margin: 20px;\r\n}\r\n\r\n.custom-file-input[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  width: 1em;\r\n  height: 1em;\r\n  vertical-align: middle;\r\n  fill: currentColor;\r\n  margin-top: -0.25em;\r\n  \r\n  margin-right: 0.25em;\r\n  \r\n}\r\n\r\n.custom-file-input-1[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\r\n  color: #f1e5e6;\r\n  background-color: #001e50;\r\n  border: solid white;\r\n  border-radius: 10px;\r\n}\r\n\r\n.custom-file-input-1[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], .custom-file-input-1.has-focus[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%], .custom-file-input-1[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:hover {\r\n  background-color: white;\r\n  color: #001e50;\r\n  border: solid #001e50;\r\n  box-shadow: 0 -6px 10px 0 #AED6F1  , 0 6px 10px 0 #AED6F1 ;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n#fakeSubmitButton[_ngcontent-%COMP%]\r\n{\r\n  background-color: darkgray;\r\n  cursor: not-allowed;\r\n}\r\n\r\n#submitButton[_ngcontent-%COMP%]\r\n{\r\n  background-color: #37af65;\r\n  cursor: pointer;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%]\r\n{\r\n  width: 27%;\r\n  font-size: 22px;\r\n  padding: 0.75rem;\r\n  color: inherit;\r\n  border-radius: 10px;\r\n  margin-top: 150px;\r\n  height: 70px;\r\n  font-size: 25px;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]\r\n{\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  position: relative;\r\n  transition: 0.5s;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after\r\n{\r\n  content: '\\00bb';\r\n  position: absolute;\r\n  opacity: 0;\r\n  top: 0;\r\n  right: -20px;\r\n  transition: 0.5s;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]\r\n{\r\n  padding-right: 25px;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:after\r\n{\r\n  opacity: 1;\r\n  right: 0;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%]:focus   span[_ngcontent-%COMP%]\r\n{\r\n  padding-right: 25px;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%]:focus\r\n{\r\n  box-shadow: 0 -6px 10px 0 #AED6F1  , 0 6px 10px 0 #AED6F1 ;\r\n}\r\n\r\n#submitButton[_ngcontent-%COMP%]:hover\r\n{\r\n box-shadow: 0 -6px 10px 0 #AED6F1  , 0 6px 10px 0 #AED6F1 ;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%]:focus   span[_ngcontent-%COMP%]:after\r\n{\r\n  opacity: 1;\r\n  right: 0;\r\n}\r\n\r\ni[_ngcontent-%COMP%]\r\n{\r\n  margin-left: 10px;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]{\r\n  font-size: 35px!important;\r\n  margin-right:10px;\r\n  margin-top:10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9GQUFvRjs7QUFFcEY7O0VBRUUsNkNBQTZDO0VBQzdDLHNCQUFzQjtBQUN4Qjs7QUFFQTs7OztFQUlFLHNCQUFzQjtBQUN4Qjs7QUFDQSx1SEFBdUg7O0FBQ3ZILFVBQVU7O0FBQ1Y7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6Qiw0QkFBNEI7QUFDOUI7O0FBQ0E7O0VBRUUsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUNBLHVIQUF1SDs7QUFDdkgsZ0NBQWdDOztBQUNoQzs7RUFFRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUEsdUhBQXVIOztBQUN2SCxZQUFZOztBQUNaO0VBQ0UsV0FBVztFQUNYLDRCQUE0QjtFQUM1QixrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsdUNBQXVDO0VBQ3ZDLFdBQVc7QUFDYjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUNBLHVIQUF1SDs7QUFDdkgsY0FBYzs7QUFDZDs7RUFFRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixvQkFBb0I7RUFDcEIsUUFBUTtBQUNWOztBQUNBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUNBOzs7RUFHRSx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQiwwREFBMEQ7QUFDNUQ7O0FBQ0EsdUhBQXVIOztBQUN2SCxnQkFBZ0I7O0FBQ2hCOztFQUVFLDBCQUEwQjtFQUMxQixtQkFBbUI7QUFDckI7O0FBQ0E7O0VBRUUseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBQ0E7O0VBRUUsVUFBVTtFQUNWLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBQ0E7O0VBRUUsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUNBOztFQUVFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE1BQU07RUFDTixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUNBOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxVQUFVO0VBQ1YsUUFBUTtBQUNWOztBQUNBOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFDQTs7RUFFRSwwREFBMEQ7QUFDNUQ7O0FBQ0E7O0NBRUMsMERBQTBEO0FBQzNEOztBQUNBOztFQUVFLFVBQVU7RUFDVixRQUFRO0FBQ1Y7O0FBQ0E7O0VBRUUsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjIwMGksNDAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuOnJvb3Rcclxue1xyXG4gIC0tY29sb3ItZGFya2JsdWUtYWxwaGE6IHJnYmEoMjcsIDI3LCA1MCwgMC44KTtcclxuICAtLWNvbG9yLWdyZWVuOiAjMzdhZjY1O1xyXG59XHJcblxyXG4qLFxyXG4qOjpiZWZvcmUsXHJcbio6OmFmdGVyXHJcbntcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKlRvb2xiYXIqL1xyXG4udG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG4jVldMb2dvXHJcbntcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIHdpZHRoOiAxMTBweDtcclxufVxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLypDb21wYW55IHRpdGVsIGFuZCBpbXBvcnQgdHlwZSovXHJcbmg0LGgyXHJcbntcclxuICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDYwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLypDb250YWluZXIqL1xyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDMuMTI1cmVtIGF1dG8gMCBhdXRvO1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICBjb2xvcjogcmdiYSgyNywgMjcsIDUwLCAwLjgpICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA2MCU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIH1cclxufVxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLypDaG9vc2UgRmlsZSovXHJcbi5jdXN0b20tZmlsZS1pbnB1dCArIGxhYmVsXHJcbntcclxuICBtYXgtd2lkdGg6IDgwJTtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nOiAwLjYyNXJlbSAxLjI1cmVtO1xyXG4gIG1hcmdpbjogMjBweDtcclxufVxyXG4uY3VzdG9tLWZpbGUtaW5wdXQgKyBsYWJlbCBzcGFuIHtcclxuICB3aWR0aDogMWVtO1xyXG4gIGhlaWdodDogMWVtO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgZmlsbDogY3VycmVudENvbG9yO1xyXG4gIG1hcmdpbi10b3A6IC0wLjI1ZW07XHJcbiAgLyogNHB4ICovXHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1ZW07XHJcbiAgLyogNHB4ICovXHJcbn1cclxuLmN1c3RvbS1maWxlLWlucHV0LTEgKyBsYWJlbCB7XHJcbiAgY29sb3I6ICNmMWU1ZTY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMWU1MDtcclxuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmN1c3RvbS1maWxlLWlucHV0LTE6Zm9jdXMgKyBsYWJlbCxcclxuLmN1c3RvbS1maWxlLWlucHV0LTEuaGFzLWZvY3VzICsgbGFiZWwsXHJcbi5jdXN0b20tZmlsZS1pbnB1dC0xICsgbGFiZWw6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiAjMDAxZTUwO1xyXG4gIGJvcmRlcjogc29saWQgIzAwMWU1MDtcclxuICBib3gtc2hhZG93OiAwIC02cHggMTBweCAwICNBRUQ2RjEgICwgMCA2cHggMTBweCAwICNBRUQ2RjEgO1xyXG59XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKlN1Ym1pdCBidXR0b24qL1xyXG4jZmFrZVN1Ym1pdEJ1dHRvblxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG4jc3VibWl0QnV0dG9uXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzdhZjY1O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc3VibWl0LWJ1dHRvblxyXG57XHJcbiAgd2lkdGg6IDI3JTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgcGFkZGluZzogMC43NXJlbTtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gIGhlaWdodDogNzBweDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuLnN1Ym1pdC1idXR0b24gc3BhblxyXG57XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG4uc3VibWl0LWJ1dHRvbiBzcGFuOmFmdGVyXHJcbntcclxuICBjb250ZW50OiAnXFwwMGJiJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IC0yMHB4O1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuLnN1Ym1pdC1idXR0b246aG92ZXIgc3BhblxyXG57XHJcbiAgcGFkZGluZy1yaWdodDogMjVweDtcclxufVxyXG5cclxuLnN1Ym1pdC1idXR0b246aG92ZXIgc3BhbjphZnRlclxyXG57XHJcbiAgb3BhY2l0eTogMTtcclxuICByaWdodDogMDtcclxufVxyXG4uc3VibWl0LWJ1dHRvbjpmb2N1cyBzcGFuXHJcbntcclxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG59XHJcbi5zdWJtaXQtYnV0dG9uOmZvY3VzXHJcbntcclxuICBib3gtc2hhZG93OiAwIC02cHggMTBweCAwICNBRUQ2RjEgICwgMCA2cHggMTBweCAwICNBRUQ2RjEgO1xyXG59XHJcbiNzdWJtaXRCdXR0b246aG92ZXJcclxue1xyXG4gYm94LXNoYWRvdzogMCAtNnB4IDEwcHggMCAjQUVENkYxICAsIDAgNnB4IDEwcHggMCAjQUVENkYxIDtcclxufVxyXG4uc3VibWl0LWJ1dHRvbjpmb2N1cyBzcGFuOmFmdGVyXHJcbntcclxuICBvcGFjaXR5OiAxO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcbmlcclxue1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LWljb257XHJcbiAgZm9udC1zaXplOiAzNXB4IWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6MTBweDtcclxuICBtYXJnaW4tdG9wOjEwcHg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'landing-page-root',
          templateUrl: './landing-page.component.html',
          styleUrls: ['./landing-page.component.css']
        }]
      }], function () {
        return [{
          type: _backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      }, {
        typeImport: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        companyTitel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        token: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        component: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        importTypeFullName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        componentChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/loader-upload-file/loader-upload-file.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/loader-upload-file/loader-upload-file.component.ts ***!
    \********************************************************************/

  /*! exports provided: LoaderUploadFileComponent */

  /***/
  function srcAppLoaderUploadFileLoaderUploadFileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderUploadFileComponent", function () {
      return LoaderUploadFileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    function LoaderUploadFileComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-progress-spinner", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LoaderUploadFileComponent = /*#__PURE__*/function () {
      function LoaderUploadFileComponent() {
        _classCallCheck(this, LoaderUploadFileComponent);
      }

      _createClass(LoaderUploadFileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoaderUploadFileComponent;
    }();

    LoaderUploadFileComponent.ɵfac = function LoaderUploadFileComponent_Factory(t) {
      return new (t || LoaderUploadFileComponent)();
    };

    LoaderUploadFileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoaderUploadFileComponent,
      selectors: [["app-loader-upload-file"]],
      inputs: {
        loaderEnable: "loaderEnable"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "overlay", 4, "ngIf"], [1, "overlay"], [1, "center-spinner"], ["diameter", "200", "mode", "indeterminate"]],
      template: function LoaderUploadFileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoaderUploadFileComponent_div_0_Template, 3, 0, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaderEnable);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinner"]],
      styles: ["#uploadingText[_ngcontent-%COMP%]\r\n{\r\n  text-align: center;\r\n  margin-top: 30px;\r\n  font-size: 35px;\r\n  color: white;\r\n}\r\n.center-spinner[_ngcontent-%COMP%]\r\n{\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translateX(-50%) translateY(-50%);\r\n}\r\n.overlay[_ngcontent-%COMP%]\r\n{\r\n  height:100vh;\r\n  width:100%;\r\n  background-color:rgba(0, 0, 0, 0.286);\r\n  z-index:    10;\r\n  top:        0;\r\n  left:       0;\r\n  position:   fixed;\r\n}\r\n[_nghost-%COMP%]     .mat-progress-spinner circle, .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]\r\n{\r\n  stroke: #0CC20C;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGVyLXVwbG9hZC1maWxlL2xvYWRlci11cGxvYWQtZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUNBOztFQUVFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUdULDRDQUE0QztBQUM5QztBQUNBOztFQUVFLFlBQVk7RUFDWixVQUFVO0VBQ1YscUNBQXFDO0VBQ3JDLGNBQWM7RUFDZCxhQUFhO0VBQ2IsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjtBQUNBOztFQUVFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9sb2FkZXItdXBsb2FkLWZpbGUvbG9hZGVyLXVwbG9hZC1maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdXBsb2FkaW5nVGV4dFxyXG57XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY2VudGVyLXNwaW5uZXJcclxue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcbi5vdmVybGF5XHJcbntcclxuICBoZWlnaHQ6MTAwdmg7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC4yODYpO1xyXG4gIHotaW5kZXg6ICAgIDEwO1xyXG4gIHRvcDogICAgICAgIDA7XHJcbiAgbGVmdDogICAgICAgMDtcclxuICBwb3NpdGlvbjogICBmaXhlZDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1zcGlubmVyIGNpcmNsZSwgLm1hdC1zcGlubmVyIGNpcmNsZVxyXG57XHJcbiAgc3Ryb2tlOiAjMENDMjBDO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderUploadFileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-loader-upload-file',
          templateUrl: './loader-upload-file.component.html',
          styleUrls: ['./loader-upload-file.component.css']
        }]
      }], function () {
        return [];
      }, {
        loaderEnable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\h.cao\Desktop\Intellij\Rac-Landing-Page\RacLPUI\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map