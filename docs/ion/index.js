"use strict";
(self["webpackChunkceramic_pro"] = self["webpackChunkceramic_pro"] || []).push([[821],{

/***/ 317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ Select)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Select = /*#__PURE__*/function () {
  function Select(containerClass) {
    _classCallCheck(this, Select);
    this.container = document.querySelector(containerClass);
    this.display = document.querySelector(containerClass + '-display');
    this.menu = document.querySelector(containerClass + '-menu');
    this.options = document.querySelectorAll(containerClass + '-option');
  }
  _createClass(Select, [{
    key: "init",
    value: function init() {
      var _this = this;
      this.display.addEventListener('click', function () {
        return _this.toggle();
      });
      this.options.forEach(function (option, i) {
        if (i === 0) {
          _this.setValue(option.dataset.value, option.textContent);
        }
        option.addEventListener('click', function () {
          _this.setValue(option.dataset.value, option.textContent);
        });
      });
      document.body.addEventListener('click', function (e) {
        if (!_this.container.contains(e.target)) {
          _this.close();
        }
      });
    }
  }, {
    key: "open",
    value: function open() {
      this.display.classList.add('isOpen');
      this.menu.classList.add('isOpen');
    }
  }, {
    key: "close",
    value: function close() {
      this.display.classList.remove('isOpen');
      this.menu.classList.remove('isOpen');
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.display.classList.toggle('isOpen');
      this.menu.classList.toggle('isOpen');
    }
  }, {
    key: "setValue",
    value: function setValue(value, label) {
      this.display.setAttribute('data-value', value);
      this.display.textContent = label;
      this.value = {
        value: value,
        label: label
      };
      this.close();
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.value;
    }
  }]);
  return Select;
}();

/***/ }),

/***/ 76:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./src/lib/select/index.js
var lib_select = __webpack_require__(317);
;// CONCATENATED MODULE: ./src/assets/ion-hero.png
const ion_hero_namespaceObject = __webpack_require__.p + "images/ion-hero.png";
;// CONCATENATED MODULE: ./src/assets/ion-hero-back.jpg
const ion_hero_back_namespaceObject = __webpack_require__.p + "images/ion-hero-back.jpg";
;// CONCATENATED MODULE: ./src/assets/ion-base-coat.png
const ion_base_coat_namespaceObject = __webpack_require__.p + "images/ion-base-coat.png";
;// CONCATENATED MODULE: ./src/assets/ion-top-coat.png
const ion_top_coat_namespaceObject = __webpack_require__.p + "images/ion-top-coat.png";
;// CONCATENATED MODULE: ./src/assets/ceramic-pro-ion-schema.png
const ceramic_pro_ion_schema_namespaceObject = __webpack_require__.p + "images/ceramic-pro-ion-schema.png";
;// CONCATENATED MODULE: ./src/assets/ceramic-pro-9h-schema.png
const ceramic_pro_9h_schema_namespaceObject = __webpack_require__.p + "images/ceramic-pro-9h-schema.png";
;// CONCATENATED MODULE: ./src/assets/polygon.png
const polygon_namespaceObject = __webpack_require__.p + "images/polygon.png";
;// CONCATENATED MODULE: ./src/assets/black-logo.png
const black_logo_namespaceObject = __webpack_require__.p + "images/black-logo.png";
;// CONCATENATED MODULE: ./src/assets/ion-banner.png
const ion_banner_namespaceObject = __webpack_require__.p + "images/ion-banner.png";
;// CONCATENATED MODULE: ./src/assets/ion-footer-banner.png
const ion_footer_banner_namespaceObject = __webpack_require__.p + "images/ion-footer-banner.png";
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/ion/index.scss
var ion = __webpack_require__(167);
;// CONCATENATED MODULE: ./src/pages/ion/index.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(ion/* default */.Z, options);




       /* harmony default export */ const pages_ion = (ion/* default */.Z && ion/* default.locals */.Z.locals ? ion/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/pages/ion/index.js











var img = [ion_hero_namespaceObject, ion_hero_back_namespaceObject, ion_base_coat_namespaceObject, ion_top_coat_namespaceObject, ceramic_pro_ion_schema_namespaceObject, ceramic_pro_9h_schema_namespaceObject, polygon_namespaceObject, black_logo_namespaceObject, ion_banner_namespaceObject, ion_footer_banner_namespaceObject];
img.length = 0;

new lib_select/* Select */.P('.select-lang').init();

/***/ }),

/***/ 167:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [216], () => (__webpack_exec__(76)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);