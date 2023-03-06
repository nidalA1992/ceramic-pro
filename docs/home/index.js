"use strict";
(self["webpackChunkceramic_pro"] = self["webpackChunkceramic_pro"] || []).push([[177],{

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

/***/ 865:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/@splidejs/splide/dist/js/splide.esm.js
var splide_esm = __webpack_require__(595);
// EXTERNAL MODULE: ./src/lib/select/index.js
var lib_select = __webpack_require__(317);
;// CONCATENATED MODULE: ./src/assets/dir-slide-1.png
const dir_slide_1_namespaceObject = __webpack_require__.p + "images/dir-slide-1.png";
;// CONCATENATED MODULE: ./src/assets/dir-slide-2.png
const dir_slide_2_namespaceObject = __webpack_require__.p + "images/dir-slide-2.png";
;// CONCATENATED MODULE: ./src/assets/dir-slide-3.png
const dir_slide_3_namespaceObject = __webpack_require__.p + "images/dir-slide-3.png";
;// CONCATENATED MODULE: ./src/assets/dir-slide-4.png
const dir_slide_4_namespaceObject = __webpack_require__.p + "images/dir-slide-4.png";
;// CONCATENATED MODULE: ./src/assets/dir-slide-5.png
const dir_slide_5_namespaceObject = __webpack_require__.p + "images/dir-slide-5.png";
;// CONCATENATED MODULE: ./src/assets/dir-slide-6.png
const dir_slide_6_namespaceObject = __webpack_require__.p + "images/dir-slide-6.png";
;// CONCATENATED MODULE: ./src/assets/product-1.png
const product_1_namespaceObject = __webpack_require__.p + "images/product-1.png";
;// CONCATENATED MODULE: ./src/assets/iso-img.png
const iso_img_namespaceObject = __webpack_require__.p + "images/iso-img.png";
;// CONCATENATED MODULE: ./src/assets/light-on.png
const light_on_namespaceObject = __webpack_require__.p + "images/light-on.png";
;// CONCATENATED MODULE: ./src/assets/70-img.svg
const _70_img_namespaceObject = __webpack_require__.p + "images/70-img.svg";
;// CONCATENATED MODULE: ./src/assets/news-1.png
const news_1_namespaceObject = __webpack_require__.p + "images/news-1.png";
;// CONCATENATED MODULE: ./src/assets/news-2.png
const news_2_namespaceObject = __webpack_require__.p + "images/news-2.png";
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/home/index.scss
var home = __webpack_require__(740);
;// CONCATENATED MODULE: ./src/pages/home/index.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(home/* default */.Z, options);




       /* harmony default export */ const pages_home = (home/* default */.Z && home/* default.locals */.Z.locals ? home/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/pages/home/index.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }















var imgs = [dir_slide_1_namespaceObject, dir_slide_2_namespaceObject, dir_slide_3_namespaceObject, dir_slide_4_namespaceObject, dir_slide_5_namespaceObject, dir_slide_6_namespaceObject, product_1_namespaceObject, iso_img_namespaceObject, light_on_namespaceObject, _70_img_namespaceObject, news_1_namespaceObject, news_2_namespaceObject];
imgs.length = 0;
var home_options = {
  type: "loop",
  perPage: 1,
  perMove: 1,
  pauseOnHover: false,
  pauseOnFocus: true,
  speed: 1500,
  gap: "15px",
  arrows: false,
  pagination: true,
  easing: "ease-in-out",
  drag: "free",
  snap: true,
  // autoplay: true,
  interval: 3500,
  resetProgress: false,
  updateOnMove: true,
  lazyLoad: "nearby",
  arrowPath: "M43.0607 13.0607C43.6464 12.4749 43.6464 11.5251 43.0607 10.9393L33.5147 1.3934C32.9289 0.807611 31.9792 0.807611 31.3934 1.3934C30.8076 1.97919 30.8076 2.92893 31.3934 3.51472L39.8787 12L31.3934 20.4853C30.8076 21.0711 30.8076 22.0208 31.3934 22.6066C31.9792 23.1924 32.9289 23.1924 33.5147 22.6066L43.0607 13.0607ZM42 10.5L0 10.5V13.5L42 13.5V10.5Z",
  breakpoints: {
    960: {
      perPage: 1
    }
  }
};
var options2 = _objectSpread(_objectSpread({}, home_options), {}, {
  gap: 0,
  pagination: false,
  arrows: true
});
new splide_esm/* Splide */.tv(".hero", home_options).mount();
new splide_esm/* Splide */.tv(".directions", options2).mount();
new splide_esm/* Splide */.tv(".products-slider", _objectSpread(_objectSpread({}, options2), {}, {
  perPage: 3,
  width: "80%",
  fixedWidth: "33%",
  breakpoints: {
    900: {
      perPage: 2,
      fixedWidth: "50%"
    },
    600: {
      perPage: 1,
      width: "100%",
      fixedWidth: "100%"
    }
  }
})).mount();
new splide_esm/* Splide */.tv(".benefits-slider", home_options).mount();
new lib_select/* Select */.P('.select-lang').init();

/***/ }),

/***/ 740:
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
/******/ __webpack_require__.O(0, [216], () => (__webpack_exec__(865)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);