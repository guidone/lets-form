(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("react-bootstrap"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types", "react-bootstrap"], factory);
	else if(typeof exports === 'object')
		exports["lets-form-bootstrap"] = factory(require("react"), require("prop-types"), require("react-bootstrap"));
	else
		root["lets-form-bootstrap"] = factory(root["react"], root["prop-types"], root["react-bootstrap"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__8156__, __WEBPACK_EXTERNAL_MODULE__5099__, __WEBPACK_EXTERNAL_MODULE__2636__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 2113:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "dn": () => (/* reexport */ Asterisk),
  "_M": () => (/* reexport */ ChevronDown),
  "Kh": () => (/* reexport */ ChevronUp),
  "Sg": () => (/* reexport */ MinusCircle),
  "FU": () => (/* reexport */ PlusCircle),
  "v3": () => (/* reexport */ Warning)
});

// UNUSED EXPORTS: CrossCirle, IconCheck

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(8156);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./assets/icons/plus-circle.js

var PlusCircle = function PlusCircle(_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === void 0 ? 24 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 24 : _ref$height,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#000000' : _ref$color;
  return /*#__PURE__*/external_react_default().createElement("svg", {
    width: "".concat(width, "px"),
    height: "".concat(height, "px"),
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, /*#__PURE__*/external_react_default().createElement("path", {
    fill: color,
    fillRule: "evenodd",
    d: "M10 3a7 7 0 100 14 7 7 0 000-14zm-9 7a9 9 0 1118 0 9 9 0 01-18 0zm14 .069a1 1 0 01-1 1h-2.931V14a1 1 0 11-2 0v-2.931H6a1 1 0 110-2h3.069V6a1 1 0 112 0v3.069H14a1 1 0 011 1z"
  }));
};
;// CONCATENATED MODULE: ./assets/icons/minus-circle.js

var MinusCircle = function MinusCircle(_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === void 0 ? 24 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 24 : _ref$height,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#000000' : _ref$color;
  return /*#__PURE__*/external_react_default().createElement("svg", {
    width: "".concat(width, "px"),
    height: "".concat(height, "px"),
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/external_react_default().createElement("path", {
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM7 11C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H7Z"
  }));
};
;// CONCATENATED MODULE: ./assets/icons/chevron-down.js

var ChevronDown = function ChevronDown(_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === void 0 ? 24 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 24 : _ref$height,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#000000' : _ref$color;
  return /*#__PURE__*/external_react_default().createElement("svg", {
    width: "".concat(width, "px"),
    height: "".concat(height, "px"),
    fill: color,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/external_react_default().createElement("path", {
    d: "M17,8H7a1,1,0,0,0-.768,1.641l5,6a1,1,0,0,0,1.536,0l5-6A1,1,0,0,0,17,8Zm-5,5.438L9.135,10h5.73Z"
  }));
};
;// CONCATENATED MODULE: ./assets/icons/chevron-up.js

var ChevronUp = function ChevronUp(_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === void 0 ? 24 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 24 : _ref$height,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#000000' : _ref$color;
  return /*#__PURE__*/external_react_default().createElement("svg", {
    width: "".concat(width, "px"),
    height: "".concat(height, "px"),
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/external_react_default().createElement("path", {
    fill: color,
    d: "M12.768,8.359a1.035,1.035,0,0,0-1.536,0l-5,6A1,1,0,0,0,7,16H17a1,1,0,0,0,.768-1.641ZM9.135,14,12,10.563,14.865,14Z"
  }));
};
;// CONCATENATED MODULE: ./assets/icons/asterisk.js

var Asterisk = function Asterisk(_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === void 0 ? 24 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 24 : _ref$height,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#000000' : _ref$color,
    style = _ref.style;
  return /*#__PURE__*/external_react_default().createElement("svg", {
    width: "".concat(width, "px"),
    height: "".concat(height, "px"),
    style: style,
    version: "1.1",
    id: "_x32_",
    className: "lf-icon-asterisk",
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/external_react_default().createElement("g", null, /*#__PURE__*/external_react_default().createElement("polygon", {
    style: {
      fill: color
    },
    className: "st0",
    points: "501.539,169.221 453.886,86.7 303.669,173.449 303.669,0 208.365,0 208.365,173.479 58.114,86.73\r 10.461,169.261 160.674,255.99 10.501,342.71 58.154,425.231 208.365,338.482 208.365,512 303.669,512 303.669,338.542\r 453.846,425.271 501.499,342.74 351.267,255.99 \t"
  })));
};
;// CONCATENATED MODULE: ./assets/icons/warning.js

var Warning = function Warning(_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === void 0 ? 24 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 24 : _ref$height,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#000000' : _ref$color;
  return /*#__PURE__*/external_react_default().createElement("svg", {
    fill: color,
    width: "".concat(width, "px"),
    height: "".concat(height, "px"),
    viewBox: "0 0 1920 1920",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/external_react_default().createElement("path", {
    d: "M960 0c530.193 0 960 429.807 960 960s-429.807 960-960 960S0 1490.193 0 960 429.807 0 960 0Zm-9.838 1342.685c-84.47 0-153.19 68.721-153.19 153.19 0 84.47 68.72 153.192 153.19 153.192s153.19-68.721 153.19-153.191-68.72-153.19-153.19-153.19ZM1153.658 320H746.667l99.118 898.623h208.755L1153.658 320Z",
    fillRule: "evenodd"
  }));
};
;// CONCATENATED MODULE: ./assets/icons/cross-circle.js

var CrossCirle = function CrossCirle(_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === void 0 ? 24 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 24 : _ref$height,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#000000' : _ref$color;
  return /*#__PURE__*/React.createElement("svg", {
    width: "".concat(width, "px"),
    height: "".concat(height, "px"),
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 8L8 16M8.00001 8L16 16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
;// CONCATENATED MODULE: ./assets/icons/index.js









/***/ }),

/***/ 8727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Group)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(8156);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./assets/icons/index.js + 7 modules
var icons = __webpack_require__(2113);
// EXTERNAL MODULE: ./components/index.js + 4 modules
var components = __webpack_require__(5593);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(7795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(3565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(4589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./common/group/group.scss
var group = __webpack_require__(88);
;// CONCATENATED MODULE: ./common/group/group.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(group/* default */.Z, options);




       /* harmony default export */ const group_group = (group/* default */.Z && group/* default.locals */.Z.locals ? group/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./common/group/index.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */





var Group = (0,components/* I18N */.mb)(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$open = _ref.open,
    open = _ref$open === void 0 ? true : _ref$open,
    _ref$collapsible = _ref.collapsible,
    collapsible = _ref$collapsible === void 0 ? true : _ref$collapsible,
    _ref$bottomBorder = _ref.bottomBorder,
    bottomBorder = _ref$bottomBorder === void 0 ? false : _ref$bottomBorder,
    align = _ref.align,
    children = _ref.children;
  var _useState = (0,external_react_.useState)(open),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var handleClick = (0,external_react_.useCallback)(function (event) {
    event.preventDefault();
    setIsOpen(!isOpen);
  }, [isOpen]);
  // if open changes, then change status
  (0,external_react_.useEffect)(function () {
    setIsOpen(open);
  }, [open]);
  return /*#__PURE__*/external_react_default().createElement("div", {
    "data-lf-field-name": name,
    className: classnames_default()('lf-control-group', {
      'bottom-border': bottomBorder,
      'open': isOpen,
      'close': !isOpen
    })
  }, /*#__PURE__*/external_react_default().createElement("div", {
    role: "separator",
    className: classnames_default()('header', align)
  }, /*#__PURE__*/external_react_default().createElement("span", {
    className: "inner-text"
  }, label, collapsible && /*#__PURE__*/external_react_default().createElement("a", {
    href: "#",
    className: "lf-btn-collapse",
    disabled: disabled,
    appearance: "link",
    onClick: handleClick
  }, isOpen ? /*#__PURE__*/external_react_default().createElement(icons/* ChevronUp */.Kh, {
    color: "#3498ff"
  }) : /*#__PURE__*/external_react_default().createElement(icons/* ChevronDown */._M, {
    color: "#3498ff"
  })))), (isOpen || !collapsible) && /*#__PURE__*/external_react_default().createElement("div", null, children));
}, ['label']);


/***/ }),

/***/ 1782:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "iz": () => (/* reexport */ Divider),
  "ZA": () => (/* reexport */ group/* Group */.Z),
  "v0": () => (/* reexport */ ListArray),
  "ah": () => (/* reexport */ MakeButton),
  "Vm": () => (/* reexport */ Placeholder),
  "GX": () => (/* reexport */ TextOrIcon),
  "$z": () => (/* reexport */ three_columns/* ThreeColumns */.$),
  "VZ": () => (/* reexport */ two_columns/* TwoColumns */.V)
});

// UNUSED EXPORTS: ButtonsToggleGroup, CommonIcon, PlaceholderImage, ReactView

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(8156);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(1609);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
// EXTERNAL MODULE: ./libs/micro-down.js
var micro_down = __webpack_require__(9300);
var micro_down_default = /*#__PURE__*/__webpack_require__.n(micro_down);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(7795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(3565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(4589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./common/placeholder/placeholder.scss
var placeholder = __webpack_require__(860);
;// CONCATENATED MODULE: ./common/placeholder/placeholder.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(placeholder/* default */.Z, options);




       /* harmony default export */ const placeholder_placeholder = (placeholder/* default */.Z && placeholder/* default.locals */.Z.locals ? placeholder/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./common/placeholder/index.js




var Placeholder = function Placeholder(_ref) {
  var text = _ref.text,
    name = _ref.name;
  if (!isEmpty_default()(text)) {
    return /*#__PURE__*/external_react_default().createElement("div", {
      className: "lf-control-placeholder",
      "data-lf-field-name": name,
      dangerouslySetInnerHTML: {
        __html: micro_down_default().parse(text)
      }
    });
  } else {
    return /*#__PURE__*/external_react_default().createElement("div", null);
  }
};

// EXTERNAL MODULE: ./common/three-columns/index.js + 1 modules
var three_columns = __webpack_require__(7645);
// EXTERNAL MODULE: ./common/two-columns/index.js + 1 modules
var two_columns = __webpack_require__(963);
// EXTERNAL MODULE: ./common/group/index.js + 1 modules
var group = __webpack_require__(8727);
// EXTERNAL MODULE: ./common/placeholder-image/index.js + 1 modules
var placeholder_image = __webpack_require__(8587);
// EXTERNAL MODULE: ./helpers/index.js + 30 modules
var helpers = __webpack_require__(8145);
;// CONCATENATED MODULE: ./common/text-or-icon/index.js


var TextOrIcon = function TextOrIcon(str) {
  if ((0,helpers/* isUrl */.CB)(str)) {
    return /*#__PURE__*/external_react_default().createElement("img", {
      className: "lf-prefix-icon",
      src: str,
      alt: "icon"
    });
  } else {
    return /*#__PURE__*/external_react_default().createElement("span", null, str);
  }
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./common/divider/divider.scss
var divider = __webpack_require__(1760);
;// CONCATENATED MODULE: ./common/divider/divider.scss

      
      
      
      
      
      
      
      
      

var divider_options = {};

divider_options.styleTagTransform = (styleTagTransform_default());
divider_options.setAttributes = (setAttributesWithoutAttributes_default());

      divider_options.insert = insertBySelector_default().bind(null, "head");
    
divider_options.domAPI = (styleDomAPI_default());
divider_options.insertStyleElement = (insertStyleElement_default());

var divider_update = injectStylesIntoStyleTag_default()(divider/* default */.Z, divider_options);




       /* harmony default export */ const divider_divider = (divider/* default */.Z && divider/* default.locals */.Z.locals ? divider/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./common/divider/index.js


var Divider = function Divider(_ref) {
  var name = _ref.name,
    size = _ref.size,
    color = _ref.color;
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "lf-control-divider",
    "data-lf-field-name": name
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "bar",
    style: {
      height: "".concat(size, "px"),
      backgroundColor: color
    }
  }, "&npsb;"));
};

// EXTERNAL MODULE: ./common/react-view/index.js
var react_view = __webpack_require__(8169);
// EXTERNAL MODULE: ./node_modules/lodash/isNumber.js
var isNumber = __webpack_require__(1763);
var isNumber_default = /*#__PURE__*/__webpack_require__.n(isNumber);
// EXTERNAL MODULE: ./node_modules/lodash/uniqueId.js
var uniqueId = __webpack_require__(3955);
var uniqueId_default = /*#__PURE__*/__webpack_require__.n(uniqueId);
// EXTERNAL MODULE: ./node_modules/lodash/isString.js
var isString = __webpack_require__(7037);
var isString_default = /*#__PURE__*/__webpack_require__.n(isString);
// EXTERNAL MODULE: ./node_modules/lodash/isArray.js
var isArray = __webpack_require__(1469);
var isArray_default = /*#__PURE__*/__webpack_require__.n(isArray);
// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(7557);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);
// EXTERNAL MODULE: ./hooks/index.js
var hooks = __webpack_require__(5490);
;// CONCATENATED MODULE: ./common/array/helpers/is-empty-item.js
var isEmptyItem = function isEmptyItem(obj) {
  return Object.keys(obj).filter(function (key) {
    return key !== 'id';
  }).every(function (key) {
    return obj[key] === null || obj[key] === undefined || obj[key] === '';
  });
};
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./assets/icons/index.js + 7 modules
var icons = __webpack_require__(2113);
;// CONCATENATED MODULE: ./common/array/views/array-item.js
/* eslint-disable jsx-a11y/anchor-is-valid */



var IconButton = function IconButton(_ref) {
  var _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    className = _ref.className,
    Icon = _ref.icon,
    onClick = _ref.onClick;
  var handleClick = (0,external_react_.useCallback)(function (e) {
    e.preventDefault();
    if (!disabled) {
      onClick();
    }
  }, [disabled, onClick]);
  return /*#__PURE__*/external_react_default().createElement("a", {
    href: "#",
    className: classnames_default()('lf-icon-button', className, {
      disabled: disabled
    }),
    onClick: handleClick
  }, Icon);
};
var ArrayItem = function ArrayItem(_ref2) {
  var name = _ref2.name,
    children = _ref2.children,
    item = _ref2.item,
    disabled = _ref2.disabled,
    readOnly = _ref2.readOnly,
    _ref2$onAdd = _ref2.onAdd,
    onAdd = _ref2$onAdd === void 0 ? function () {} : _ref2$onAdd,
    _ref2$onRemove = _ref2.onRemove,
    onRemove = _ref2$onRemove === void 0 ? function () {} : _ref2$onRemove,
    _ref2$disableAdd = _ref2.disableAdd,
    disableAdd = _ref2$disableAdd === void 0 ? false : _ref2$disableAdd,
    _ref2$showAdd = _ref2.showAdd,
    showAdd = _ref2$showAdd === void 0 ? false : _ref2$showAdd,
    _ref2$leftMargin = _ref2.leftMargin,
    leftMargin = _ref2$leftMargin === void 0 ? 10 : _ref2$leftMargin;
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "lf-control-common-array-item"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "inner-form"
  }, children), /*#__PURE__*/external_react_default().createElement("div", {
    className: "buttons"
  }, showAdd && /*#__PURE__*/external_react_default().createElement(IconButton, {
    disabled: disableAdd || disabled || readOnly,
    className: "arrow",
    appearance: "link",
    icon: /*#__PURE__*/external_react_default().createElement(icons/* PlusCircle */.FU, {
      height: 16,
      width: 16,
      color: "#3498ff"
    }),
    size: "sm",
    onClick: onAdd
  }), !showAdd && /*#__PURE__*/external_react_default().createElement(IconButton, {
    className: "arrow",
    disabled: disabled || readOnly,
    appearance: "link",
    icon: /*#__PURE__*/external_react_default().createElement(icons/* MinusCircle */.Sg, {
      height: 16,
      width: 16,
      color: "#3498ff"
    }),
    size: "sm",
    onClick: function onClick(event) {
      onRemove(item);
    }
  })));
};

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./common/array/list-array.scss
var list_array = __webpack_require__(3010);
;// CONCATENATED MODULE: ./common/array/list-array.scss

      
      
      
      
      
      
      
      
      

var list_array_options = {};

list_array_options.styleTagTransform = (styleTagTransform_default());
list_array_options.setAttributes = (setAttributesWithoutAttributes_default());

      list_array_options.insert = insertBySelector_default().bind(null, "head");
    
list_array_options.domAPI = (styleDomAPI_default());
list_array_options.insertStyleElement = (insertStyleElement_default());

var list_array_update = injectStylesIntoStyleTag_default()(list_array/* default */.Z, list_array_options);




       /* harmony default export */ const array_list_array = (list_array/* default */.Z && list_array/* default.locals */.Z.locals ? list_array/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./common/array/index.js






function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }







/**
 * Check if object is empty or all the keys are empty
 * @param {*} obj 
 * @returns 
 */
var isEmptyObject = function isEmptyObject(obj) {
  return isEmpty_default()(obj) || Object.keys(obj).every(function (key) {
    return isEmpty_default()(obj[key]);
  });
};

/**
 * flatArrayOfString
 * If an array of object can be flattned (one keuy), then return a flat array, otherwise raise expection
 * @param {*} a 
 * @returns 
 */
var flatArrayOfString = function flatArrayOfString(a) {
  var canBeFlat = a.every(function (obj) {
    return Object.keys(obj).length === 1;
  });
  if (!canBeFlat) {
    throw new Error("Cannot be flattened");
  }
  return a.map(function (obj) {
    return obj[Object.keys(obj)[0]];
  });
};
var formatArray = function formatArray(a) {
  var arrayType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'arrayOfObject';
  var cleaned = a.map(function (i) {
    return omit_default()(i, 'id');
  }).filter(function (i) {
    return !isEmptyObject(i);
  });
  console.log('cleaned', cleaned);
  try {
    var flattened = flatArrayOfString(cleaned);
    if (arrayType === 'arrayOfString') {
      return flattened;
    } else if (arrayType === 'commaSeparated') {
      return flattened.join(',');
    }
  } catch (e) {
    // do nothing, return as is
  }
  return cleaned;
};
var makeDefaultValue = function makeDefaultValue(defaultValue, arrayType, form) {
  if (arrayType === 'arrayOfString') {
    var isArrayOfString = isArray_default()(defaultValue) && defaultValue.every(function (s) {
      return isString_default()(s);
    });
    var names = (0,helpers/* collectNames */.BI)(form);
    // if it's an array of string
    if (isArrayOfString && names.length === 1) {
      return defaultValue.map(function (s) {
        return _defineProperty({
          id: uniqueId_default()()
        }, names[0], s);
      });
    }
    return [{
      id: uniqueId_default()()
    }];
  } else if (arrayType === 'commaSeparated') {
    var _names = (0,helpers/* collectNames */.BI)(form);
    if (_names.length === 1 && isString_default()(defaultValue) && !isEmpty_default()(defaultValue)) {
      return defaultValue.split(',').map(function (s) {
        return _defineProperty({
          id: uniqueId_default()()
        }, _names[0], s);
      });
    }
    return [{
      id: uniqueId_default()()
    }];
  } else {
    return isArray_default()(defaultValue) && !isEmpty_default()(defaultValue) ? (0,helpers/* fillIds */.Mw)(defaultValue) : [{
      id: uniqueId_default()()
    }];
  }
};
var ListArray = function ListArray(_ref3) {
  var LetsFormComponent = _ref3.LetsFormComponent,
    value = _ref3.value,
    _ref3$onChange = _ref3.onChange,
    _onChange = _ref3$onChange === void 0 ? function () {} : _ref3$onChange,
    _ref3$disabled = _ref3.disabled,
    disabled = _ref3$disabled === void 0 ? false : _ref3$disabled,
    _ref3$readOnly = _ref3.readOnly,
    readOnly = _ref3$readOnly === void 0 ? false : _ref3$readOnly,
    fields = _ref3.fields,
    _ref3$layout = _ref3.layout,
    layout = _ref3$layout === void 0 ? 'vertical' : _ref3$layout,
    maxHeight = _ref3.maxHeight,
    lfLocale = _ref3.lfLocale,
    _ref3$leftMargin = _ref3.leftMargin,
    leftMargin = _ref3$leftMargin === void 0 ? 0 : _ref3$leftMargin,
    children = _ref3.children,
    _ref3$arrayType = _ref3.arrayType,
    arrayType = _ref3$arrayType === void 0 ? 'arrayOfObject' : _ref3$arrayType;
  var _useFormContext = (0,hooks/* useFormContext */.G)(),
    locales = _useFormContext.locales;
  var form = {
    layout: layout,
    fluid: true,
    locales: locales,
    // copy the locales from the main form
    fields: fields
  };
  var _useState = (0,external_react_.useState)(makeDefaultValue(value, arrayType, form)),
    _useState2 = _slicedToArray(_useState, 2),
    items = _useState2[0],
    setItems = _useState2[1];
  var style = {};
  if (maxHeight) {
    //style.maxHeigth = _.isNumber(maxHeigth) ? `${maxHeigth}px` : maxHeigth;
    style = {
      maxHeight: "".concat(maxHeight, "px"),
      overflowY: 'scroll'
    };
  }
  if (leftMargin != null) {
    style.marginLeft = isNumber_default()(leftMargin) ? "".concat(leftMargin, "px") : leftMargin;
  }
  var handleAdd = (0,external_react_.useCallback)(function () {
    setItems(function (items) {
      return [].concat(_toConsumableArray(items), [{
        id: uniqueId_default()()
      }]);
    });
  }, []);
  var handleRemove = (0,external_react_.useCallback)(function (item) {
    var newItems = items.filter(function (i) {
      return i.id !== item.id;
    });
    setItems(newItems);
    _onChange(formatArray(newItems, arrayType));
  }, [items, _onChange, arrayType]);
  if (children) {
    return /*#__PURE__*/external_react_default().createElement("div", {
      style: {
        padding: '0px 10px 1px 10px'
      }
    }, children);
  }
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "lf-control-common-array",
    style: style
  }, (isArray_default()(items) ? items : []).map(function (item, idx) {
    var canAdd = idx === items.length - 1 && !isEmptyItem(item);
    var showAdd = idx === items.length - 1 || items.length === 1;
    return /*#__PURE__*/external_react_default().createElement(ArrayItem, {
      key: item.id,
      item: item,
      disabled: disabled,
      readOnly: readOnly,
      disableAdd: !canAdd,
      showAdd: showAdd,
      onAdd: handleAdd,
      onRemove: handleRemove
    }, /*#__PURE__*/external_react_default().createElement(LetsFormComponent, {
      form: form,
      locale: lfLocale,
      disabled: disabled,
      readOnly: readOnly,
      defaultValues: item,
      onlyFields: true,
      onChange: function onChange(value) {
        var newItems = items.map(function (i) {
          return i.id === value.id ? value : i;
        });
        setItems(newItems);
        _onChange(formatArray(newItems, arrayType));
      }
    }));
  }));
};

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./common/icon/common-icon.scss
var common_icon = __webpack_require__(6159);
;// CONCATENATED MODULE: ./common/icon/common-icon.scss

      
      
      
      
      
      
      
      
      

var common_icon_options = {};

common_icon_options.styleTagTransform = (styleTagTransform_default());
common_icon_options.setAttributes = (setAttributesWithoutAttributes_default());

      common_icon_options.insert = insertBySelector_default().bind(null, "head");
    
common_icon_options.domAPI = (styleDomAPI_default());
common_icon_options.insertStyleElement = (insertStyleElement_default());

var common_icon_update = injectStylesIntoStyleTag_default()(common_icon/* default */.Z, common_icon_options);




       /* harmony default export */ const icon_common_icon = (common_icon/* default */.Z && common_icon/* default.locals */.Z.locals ? common_icon/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./common/icon/index.js
/* eslint-disable jsx-a11y/anchor-is-valid */



var CommonIcon = function CommonIcon(_ref) {
  var src = _ref.src,
    className = _ref.className,
    alt = _ref.alt,
    _onClick = _ref.onClick,
    size = _ref.size;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('lf-common-icon', className, {
      small: size === 'small',
      large: size === 'large'
      //[size]: COMMON_ICON_SIZES.includes(size)
    })
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();
      _onClick();
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt
  })));
};

// EXTERNAL MODULE: ./node_modules/lodash/isFunction.js
var isFunction = __webpack_require__(3560);
var isFunction_default = /*#__PURE__*/__webpack_require__.n(isFunction);
;// CONCATENATED MODULE: ./common/button/index.js


var _excluded = ["ButtonComponent", "OnStateProps", "OffStateProps", "name", "labelOn", "labelOff", "labelLink", "iconOn", "iconOff", "iconLink", "size", "href", "appearance", "fullWidth", "width", "onChange", "onBlur", "value", "buttonType", "hint", "initialValue"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function button_slicedToArray(arr, i) { return button_arrayWithHoles(arr) || button_iterableToArrayLimit(arr, i) || button_unsupportedIterableToArray(arr, i) || button_nonIterableRest(); }
function button_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function button_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return button_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return button_arrayLikeToArray(o, minLen); }
function button_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function button_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function button_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var GenericButton = function GenericButton(_ref) {
  var ButtonComponent = _ref.ButtonComponent,
    OnStateProps = _ref.OnStateProps,
    OffStateProps = _ref.OffStateProps,
    name = _ref.name,
    labelOn = _ref.labelOn,
    labelOff = _ref.labelOff,
    labelLink = _ref.labelLink,
    iconOn = _ref.iconOn,
    iconOff = _ref.iconOff,
    iconLink = _ref.iconLink,
    size = _ref.size,
    href = _ref.href,
    appearance = _ref.appearance,
    fullWidth = _ref.fullWidth,
    width = _ref.width,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    value = _ref.value,
    buttonType = _ref.buttonType,
    hint = _ref.hint,
    initialValue = _ref.initialValue,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useState = (0,external_react_.useState)(value || initialValue),
    _useState2 = button_slicedToArray(_useState, 2),
    checked = _useState2[0],
    setChecked = _useState2[1];
  var handleClick = (0,external_react_.useCallback)(function () {
    var newValue = !checked;
    setChecked(!checked);
    onChange(newValue, name);
  }, [onChange, checked, name]);
  var inner;
  if (buttonType === 'toggle') {
    inner = /*#__PURE__*/external_react_default().createElement(ButtonComponent, _extends({
      size: size,
      onClick: handleClick,
      onBlur: onBlur,
      icon: checked ? iconOn : iconOff,
      label: checked ? labelOn : labelOff,
      hint: hint,
      style: (0,helpers/* makeWidthStyle */.PZ)(fullWidth, width)
    }, (0,helpers/* passRest */.QF)(omit_default()(rest, 'label')), checked ? OnStateProps : OffStateProps));
  } else if (buttonType === 'link') {
    inner = /*#__PURE__*/external_react_default().createElement(ButtonComponent, _extends({
      size: size,
      onBlur: onBlur,
      appearance: appearance,
      hint: hint,
      label: labelLink,
      icon: iconLink,
      href: href,
      target: "_blank",
      style: (0,helpers/* makeWidthStyle */.PZ)(fullWidth, width)
    }, (0,helpers/* passRest */.QF)(omit_default()(rest, 'label'))));
  }
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "lf-control-button",
    "data-lf-field-name": name
  }, inner);
};
var MakeButton = function MakeButton(ButtonComponent, OnStateProps, OffStateProps) {
  return function (props) {
    return /*#__PURE__*/external_react_default().createElement(GenericButton, _extends({
      ButtonComponent: ButtonComponent,
      OnStateProps: isFunction_default()(OnStateProps) ? OnStateProps(props) : OnStateProps,
      OffStateProps: isFunction_default()(OffStateProps) ? OffStateProps(props) : OffStateProps
    }, props));
  };
};

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./common/buttons-toggle-group/buttons-toggle-group.scss
var buttons_toggle_group = __webpack_require__(5883);
;// CONCATENATED MODULE: ./common/buttons-toggle-group/buttons-toggle-group.scss

      
      
      
      
      
      
      
      
      

var buttons_toggle_group_options = {};

buttons_toggle_group_options.styleTagTransform = (styleTagTransform_default());
buttons_toggle_group_options.setAttributes = (setAttributesWithoutAttributes_default());

      buttons_toggle_group_options.insert = insertBySelector_default().bind(null, "head");
    
buttons_toggle_group_options.domAPI = (styleDomAPI_default());
buttons_toggle_group_options.insertStyleElement = (insertStyleElement_default());

var buttons_toggle_group_update = injectStylesIntoStyleTag_default()(buttons_toggle_group/* default */.Z, buttons_toggle_group_options);




       /* harmony default export */ const buttons_toggle_group_buttons_toggle_group = (buttons_toggle_group/* default */.Z && buttons_toggle_group/* default.locals */.Z.locals ? buttons_toggle_group/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./common/buttons-toggle-group/index.js

function buttons_toggle_group_typeof(obj) { "@babel/helpers - typeof"; return buttons_toggle_group_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, buttons_toggle_group_typeof(obj); }
function buttons_toggle_group_toConsumableArray(arr) { return buttons_toggle_group_arrayWithoutHoles(arr) || buttons_toggle_group_iterableToArray(arr) || buttons_toggle_group_unsupportedIterableToArray(arr) || buttons_toggle_group_nonIterableSpread(); }
function buttons_toggle_group_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function buttons_toggle_group_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function buttons_toggle_group_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return buttons_toggle_group_arrayLikeToArray(arr); }
function buttons_toggle_group_slicedToArray(arr, i) { return buttons_toggle_group_arrayWithHoles(arr) || buttons_toggle_group_iterableToArrayLimit(arr, i) || buttons_toggle_group_unsupportedIterableToArray(arr, i) || buttons_toggle_group_nonIterableRest(); }
function buttons_toggle_group_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function buttons_toggle_group_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return buttons_toggle_group_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return buttons_toggle_group_arrayLikeToArray(o, minLen); }
function buttons_toggle_group_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function buttons_toggle_group_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function buttons_toggle_group_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { buttons_toggle_group_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function buttons_toggle_group_defineProperty(obj, key, value) { key = buttons_toggle_group_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function buttons_toggle_group_toPropertyKey(arg) { var key = buttons_toggle_group_toPrimitive(arg, "string"); return buttons_toggle_group_typeof(key) === "symbol" ? key : String(key); }
function buttons_toggle_group_toPrimitive(input, hint) { if (buttons_toggle_group_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (buttons_toggle_group_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var getInitialValue = function getInitialValue(value, multiple) {
  return multiple ? (_isArray(value) ? value : []).reduce(function (acc, value) {
    return _objectSpread(_objectSpread({}, acc), {}, buttons_toggle_group_defineProperty({}, value, true));
  }, {}) : buttons_toggle_group_defineProperty({}, value, true);
};
var ButtonsToggleGroup = function ButtonsToggleGroup(_ref2) {
  var value = _ref2.value,
    options = _ref2.options,
    onChange = _ref2.onChange,
    size = _ref2.size,
    _ref2$multiple = _ref2.multiple,
    multiple = _ref2$multiple === void 0 ? false : _ref2$multiple,
    disabled = _ref2.disabled,
    ButtonComponent = _ref2.ButtonComponent;
  var _useState = useState(getInitialValue(value, multiple)),
    _useState2 = buttons_toggle_group_slicedToArray(_useState, 2),
    values = _useState2[0],
    setValues = _useState2[1];
  var handleClick = useCallback(function (value, name) {
    var newValues = multiple ? _objectSpread(_objectSpread({}, values), {}, buttons_toggle_group_defineProperty({}, name, value)) : buttons_toggle_group_defineProperty({}, name, value);
    setValues(newValues);
    var newValue = options.reduce(function (acc, option) {
      return newValues[option.value] ? [].concat(buttons_toggle_group_toConsumableArray(acc), [option.value]) : acc;
    }, []);
    onChange(multiple ? newValue : newValue[0]);
  }, [onChange, options, values, multiple]);
  return /*#__PURE__*/React.createElement("div", null, (options !== null && options !== void 0 ? options : []).map(function (_ref4) {
    var value = _ref4.value,
      label = _ref4.label;
    return /*#__PURE__*/React.createElement(ButtonComponent, {
      key: value + values[value],
      buttonType: "toggle",
      labelOn: label,
      name: value,
      initialValue: values[value],
      labelOff: label,
      size: size,
      disabled: disabled,
      onChange: handleClick
    });
  }));
};

;// CONCATENATED MODULE: ./common/index.js













/***/ }),

/***/ 8587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "N": () => (/* binding */ PlaceholderImage)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(8156);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(7795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(3565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(4589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./common/placeholder-image/placeholder-image.scss
var placeholder_image = __webpack_require__(2558);
;// CONCATENATED MODULE: ./common/placeholder-image/placeholder-image.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(placeholder_image/* default */.Z, options);




       /* harmony default export */ const placeholder_image_placeholder_image = (placeholder_image/* default */.Z && placeholder_image/* default.locals */.Z.locals ? placeholder_image/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./common/placeholder-image/index.js


var PlaceholderImage = function PlaceholderImage(_ref) {
  var url = _ref.url,
    label = _ref.label,
    name = _ref.name,
    maxWidth = _ref.maxWidth,
    maxHeight = _ref.maxHeight,
    marginTop = _ref.marginTop,
    marginBottom = _ref.marginBottom,
    align = _ref.align;
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "lf-control-placeholder-image",
    "data-lf-field-name": name,
    style: {
      textAlign: align ? align : undefined
    }
  }, url && /*#__PURE__*/external_react_default().createElement("img", {
    src: url,
    alt: label || name,
    style: {
      marginTop: marginTop ? marginTop : undefined,
      marginBottom: marginBottom ? marginBottom : undefined,
      maxWidth: maxWidth ? maxWidth : undefined,
      maxHeight: maxHeight ? maxHeight : undefined,
      textAlign: align ? align : undefined
    }
  }));
};


/***/ }),

/***/ 8169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ ReactView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8156);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _excluded = ["name", "view"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ReactView = function ReactView(_ref) {
  var name = _ref.name,
    view = _ref.view,
    rest = _objectWithoutProperties(_ref, _excluded);
  var View = view;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "lf-control-react-view",
    "data-lf-field-name": name
  }, View && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(View, _extends({
    name: name
  }, rest)));
};


/***/ }),

/***/ 7645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* binding */ ThreeColumns)
});

// EXTERNAL MODULE: ./node_modules/lodash/isFunction.js
var isFunction = __webpack_require__(3560);
var isFunction_default = /*#__PURE__*/__webpack_require__.n(isFunction);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(8156);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(7795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(3565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(4589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./common/three-columns/three-columns.scss
var three_columns = __webpack_require__(1861);
;// CONCATENATED MODULE: ./common/three-columns/three-columns.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(three_columns/* default */.Z, options);




       /* harmony default export */ const three_columns_three_columns = (three_columns/* default */.Z && three_columns/* default.locals */.Z.locals ? three_columns/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./common/three-columns/index.js




var ThreeColumns = function ThreeColumns(_ref) {
  var name = _ref.name,
    layout = _ref.layout,
    children = _ref.children,
    leftAlignment = _ref.leftAlignment,
    centerAlignment = _ref.centerAlignment,
    rightAlignment = _ref.rightAlignment;
  return /*#__PURE__*/external_react_default().createElement("div", {
    "data-lf-field-name": name,
    className: classnames_default()('lf-control-three-columns', layout)
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "left",
    style: {
      alignSelf: leftAlignment ? leftAlignment : undefined
    }
  }, isFunction_default()(children) && children('left')), /*#__PURE__*/external_react_default().createElement("div", {
    className: "center",
    style: {
      alignSelf: centerAlignment ? centerAlignment : undefined
    }
  }, isFunction_default()(children) && children('center')), /*#__PURE__*/external_react_default().createElement("div", {
    className: "right",
    style: {
      alignSelf: rightAlignment ? rightAlignment : undefined
    }
  }, isFunction_default()(children) && children('right')));
};


/***/ }),

/***/ 963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": () => (/* binding */ TwoColumns)
});

// EXTERNAL MODULE: ./node_modules/lodash/isFunction.js
var isFunction = __webpack_require__(3560);
var isFunction_default = /*#__PURE__*/__webpack_require__.n(isFunction);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(8156);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(7795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(3565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(4589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./common/two-columns/two-columns.scss
var two_columns = __webpack_require__(5318);
;// CONCATENATED MODULE: ./common/two-columns/two-columns.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(two_columns/* default */.Z, options);




       /* harmony default export */ const two_columns_two_columns = (two_columns/* default */.Z && two_columns/* default.locals */.Z.locals ? two_columns/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./common/two-columns/index.js




var TwoColumns = function TwoColumns(_ref) {
  var name = _ref.name,
    children = _ref.children,
    layout = _ref.layout,
    leftAlignment = _ref.leftAlignment,
    rightAlignment = _ref.rightAlignment;
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: classnames_default()('lf-control-two-columns', layout),
    "data-lf-field-name": name
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "left",
    style: {
      alignSelf: leftAlignment ? leftAlignment : undefined
    }
  }, isFunction_default()(children) && children('left')), /*#__PURE__*/external_react_default().createElement("div", {
    className: "right",
    style: {
      alignSelf: rightAlignment ? rightAlignment : undefined
    }
  }, isFunction_default()(children) && children('right')));
};


/***/ }),

/***/ 5593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "mb": () => (/* reexport */ I18N),
  "T_": () => (/* reexport */ RequiredIcon),
  "qf": () => (/* reexport */ ValidationErrors)
});

// UNUSED EXPORTS: IfNotPlaintext, Plaintext

// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(1609);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
// EXTERNAL MODULE: ./node_modules/lodash/isObject.js
var isObject = __webpack_require__(3218);
var isObject_default = /*#__PURE__*/__webpack_require__.n(isObject);
// EXTERNAL MODULE: ./node_modules/lodash/isString.js
var isString = __webpack_require__(7037);
var isString_default = /*#__PURE__*/__webpack_require__.n(isString);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(8156);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(7795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(3565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(4589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./components/validation-errors/index.scss
var validation_errors = __webpack_require__(7242);
;// CONCATENATED MODULE: ./components/validation-errors/index.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(validation_errors/* default */.Z, options);




       /* harmony default export */ const components_validation_errors = (validation_errors/* default */.Z && validation_errors/* default.locals */.Z.locals ? validation_errors/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./components/validation-errors/index.js






var tx = function tx(str, locale) {
  if (isString_default()(str)) {
    return str;
  } else if (isObject_default()(str)) {
    if (!isEmpty_default()(str[locale])) {
      return str[locale];
    } else if (!isEmpty_default()(str['en-US'])) {
      return str['en-US'];
    } else if (Object.keys(str).length !== 0) {
      return str[Object.keys(str)[0]];
    } else {
      return '';
    }
  }
};
var ValidationErrors = function ValidationErrors(_ref) {
  var _ref$errors = _ref.errors,
    errors = _ref$errors === void 0 ? {} : _ref$errors,
    className = _ref.className,
    locale = _ref.locale;
  var keys = Object.keys(errors);
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: classnames_default()('lf-validation-errors', className)
  }, keys.map(function (fieldName) {
    var label = fieldName;
    if (errors[fieldName] && errors[fieldName].ref && errors[fieldName].ref.label) {
      label = tx(errors[fieldName].ref.label, locale);
    }
    return /*#__PURE__*/external_react_default().createElement("div", {
      key: fieldName
    }, /*#__PURE__*/external_react_default().createElement("b", null, label, ":"), "\xA0", errors[fieldName].message ? errors[fieldName].message : 'This is required');
  }));
};

// EXTERNAL MODULE: ./assets/icons/index.js + 7 modules
var icons = __webpack_require__(2113);
;// CONCATENATED MODULE: ./components/required-icon/index.js


var RequiredIcon = function RequiredIcon() {
  return /*#__PURE__*/external_react_default().createElement(icons/* Asterisk */.dn, {
    color: "#ff6633",
    width: 12,
    height: 12,
    style: {
      marginLeft: '3px'
    }
  });
};

// EXTERNAL MODULE: ./node_modules/lodash/isFunction.js
var isFunction = __webpack_require__(3560);
var isFunction_default = /*#__PURE__*/__webpack_require__.n(isFunction);
// EXTERNAL MODULE: ./helpers/index.js + 30 modules
var helpers = __webpack_require__(8145);
;// CONCATENATED MODULE: ./components/i18n/index.js

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var I18N = function I18N(Component) {
  var propNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var funcPropNames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return function (props) {
    var lfLocale = props.lfLocale;
    var newProps = Object.keys(props).reduce(function (acc, propName) {
      // translate simpe field
      if (propNames.includes(propName)) {
        return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, propName, (0,helpers/* i18n */.ag)(props[propName], lfLocale)));
      } else if (isFunction_default()(funcPropNames[propName])) {
        // pass the value trough the mapper
        var translated = funcPropNames[propName](props[propName], function (string) {
          return (0,helpers/* i18n */.ag)(string, lfLocale);
        });
        return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, propName, translated));
      }
      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, propName, props[propName]));
    }, {});
    return /*#__PURE__*/external_react_default().createElement(Component, newProps);
  };
};
// EXTERNAL MODULE: ./components/plaintext/index.js + 6 modules
var plaintext = __webpack_require__(7808);
;// CONCATENATED MODULE: ./components/index.js




// WARNING: do not import framework specific component here or it will
// include UI library into a wrong package (i.e., rsuite into lets-form/antd)

/***/ }),

/***/ 6089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Q": () => (/* binding */ PlaintextForm)
});

// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(1609);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
// EXTERNAL MODULE: ./node_modules/lodash/pick.js
var pick = __webpack_require__(8718);
var pick_default = /*#__PURE__*/__webpack_require__.n(pick);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(8156);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/plaintext/index.js + 6 modules
var plaintext = __webpack_require__(7808);
// EXTERNAL MODULE: ./common/index.js + 14 modules
var common = __webpack_require__(1782);
// EXTERNAL MODULE: ./helpers/index.js + 30 modules
var helpers = __webpack_require__(8145);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(7795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(3565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(4589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./components/plaintext-form/plaintext-form.scss
var plaintext_form = __webpack_require__(51);
;// CONCATENATED MODULE: ./components/plaintext-form/plaintext-form.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(plaintext_form/* default */.Z, options);




       /* harmony default export */ const plaintext_form_plaintext_form = (plaintext_form/* default */.Z && plaintext_form/* default.locals */.Z.locals ? plaintext_form/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./components/plaintext-form/index.js


function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var PlaintextLabel = function PlaintextLabel(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "lf-plaintext-field-label"
  }, children);
};
var renderFields = function renderFields(fields, locale, framework) {
  var currentValues = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  return (fields || []).map(function (field) {
    if (field.component === 'group') {
      return /*#__PURE__*/external_react_default().createElement(common/* Group */.ZA, _extends({
        key: field.name,
        collapsible: false,
        label: field.label
      }, pick_default()(field, ['bottomBorder', 'align'])), renderFields(field.fields, locale, framework, currentValues));
    } else if (field.component === 'two-columns') {
      return /*#__PURE__*/external_react_default().createElement(common/* TwoColumns */.VZ, _extends({
        key: field.name
      }, pick_default()(field, ['layout', 'leftAlignment', 'rightAlignment'])), function (column) {
        if (column === 'left') {
          return renderFields(field.leftFields, locale, framework, currentValues);
        } else if (column === 'right') {
          return renderFields(field.rightFields, locale, framework, currentValues);
        }
      });
    } else if (field.component === 'three-columns') {
      return /*#__PURE__*/external_react_default().createElement(common/* ThreeColumns */.$z, _extends({
        key: field.name
      }, pick_default()(field, ['layout', 'leftAlignment', 'centerAlignment', 'rightAlignment'])), function (column) {
        if (column === 'left') {
          return renderFields(field.leftFields, locale, framework, currentValues);
        } else if (column === 'center') {
          return renderFields(field.centerFields, locale, framework, currentValues);
        } else if (column === 'right') {
          return renderFields(field.rightFields, locale, framework, currentValues);
        }
      });
    } else if (field.component === 'tabs') {
      var subkeys = Object.keys(field.fields);
      var _fields = subkeys.map(function (subkey) {
        return renderFields(field.fields[subkey], locale, framework, currentValues);
      });
      return /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, _fields);
    }
    return /*#__PURE__*/external_react_default().createElement("div", {
      key: field.name,
      className: "lf-plaintext-field lf-control-".concat(field.component)
    }, /*#__PURE__*/external_react_default().createElement(PlaintextLabel, null, (0,helpers/* isI18n */.QK)(field.label) ? (0,helpers/* i18n */.ag)(field.label, locale) : field.label), /*#__PURE__*/external_react_default().createElement(plaintext/* Plaintext */.U, {
      component: field.component,
      locale: locale,
      value: currentValues[field.name],
      options: field.options
    }));
  });
};
var PlaintextForm = function PlaintextForm(_ref2) {
  var form = _ref2.form,
    locale = _ref2.locale,
    framework = _ref2.framework,
    currentValues = _ref2.currentValues;
  var fields = form.fields;
  if (isEmpty_default()(fields)) {
    return /*#__PURE__*/external_react_default().createElement("span", null);
  }
  console.log('plaintext--->', currentValues);
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "lf-form lf-form-plaintext"
  }, renderFields(fields, locale, framework, currentValues));
};


/***/ }),

/***/ 7808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "U": () => (/* binding */ Plaintext)
});

// UNUSED EXPORTS: IfNotPlaintext

// EXTERNAL MODULE: ./node_modules/lodash/isArray.js
var isArray = __webpack_require__(1469);
var isArray_default = /*#__PURE__*/__webpack_require__.n(isArray);
// EXTERNAL MODULE: ./node_modules/lodash/isString.js
var isString = __webpack_require__(7037);
var isString_default = /*#__PURE__*/__webpack_require__.n(isString);
// EXTERNAL MODULE: ./node_modules/lodash/isDate.js
var isDate = __webpack_require__(7960);
var isDate_default = /*#__PURE__*/__webpack_require__.n(isDate);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(8156);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./helpers/index.js + 30 modules
var helpers = __webpack_require__(8145);
;// CONCATENATED MODULE: ./components/plaintext/locales/yes.json
const yes_namespaceObject = JSON.parse('{"en-US":"Yes","af-ZA":"Ja","ar":"نعم","bg-BG":"Да","ca-AD":"Sí","cs-CZ":"Ano","cy-GB":"Ie","da-DK":"Ja","de-AT":"Ja","de-CH":"Ja","de-DE":"Ja","el-GR":"Ναί","en-GB":"Yes","es-CL":"Sí","es-ES":"Sí","es-MX":"Sí","et-EE":"Jah","eu":"Bai","fa-IR":"آره","fi-FI":"Joo","fr-CA":"Oui","fr-FR":"Oui","he-IL":"כן","hi-IN":"हाँ","hr-HR":"Da","hu-HU":"Igen","id-ID":"Ya","is-IS":"Já","it-IT":"Si","ja-JP":"はい","km-KH":"បាត","ko-KR":"예","la":"Sic","lt-LT":"Taip","lv-LV":"Jā","mn-MN":"Мон","nb-NO":"Ja","nl-NL":"Ja","pl-PL":"Tak","pt-BR":"Sim","pt-PT":"Sim","ro-RO":"da","ru-RU":"Да","sk-SK":"Áno","sl-SI":"DA","sr-RS":"да","sv-SE":"Ja","th-TH":"ใช่","tr-TR":"Evet","uk-UA":"Так","vi-VN":"Đúng","zh-CN":"是的","zh-TW":"是的"}');
;// CONCATENATED MODULE: ./components/plaintext/locales/no.json
const no_namespaceObject = JSON.parse('{"en-US":"No","af-ZA":"Geen","ar":"لا","bg-BG":"Не","ca-AD":"No","cs-CZ":"Ne","cy-GB":"Na","da-DK":"Ingen","de-AT":"NEIN","de-CH":"NEIN","de-DE":"NEIN","el-GR":"Οχι","en-GB":"No","es-CL":"No","es-ES":"No","es-MX":"No","et-EE":"Mitte","eu":"Ez-","fa-IR":"هیچ","fi-FI":"Ei","fr-CA":"Non","fr-FR":"Non","he-IL":"לא","hi-IN":"नहीं","hr-HR":"Ne","hu-HU":"Nem","id-ID":"TIDAK","is-IS":"Nei","it-IT":"No","ja-JP":"いいえ","km-KH":"ដេលក្ផាន","ko-KR":"아니요","la":"Non","lt-LT":"Ne","lv-LV":"Nē","mn-MN":"-Гүй / -битгий","nb-NO":"Nei","nl-NL":"Nee","pl-PL":"NIE","pt-BR":"Não","pt-PT":"Não","ro-RO":"Nu","ru-RU":"Нет","sk-SK":"Nie","sl-SI":"Ne","sr-RS":"Не","sv-SE":"Nej","th-TH":"เลขที่","tr-TR":"HAYIR","uk-UA":"Немає","vi-VN":"KHÔNG","zh-CN":"不","zh-TW":"不"}');
;// CONCATENATED MODULE: ./components/plaintext/locales/element.json
const element_namespaceObject = JSON.parse('{"en-US":"element","af-ZA":"element","ar":"عنصر","bg-BG":"Елемент","ca-AD":"element","cs-CZ":"živel","cy-GB":"elfen","da-DK":"element","de-AT":"element","de-CH":"element","de-DE":"element","el-GR":"στοιχείο","en-GB":"element","es-CL":"elemento","es-ES":"elemento","es-MX":"elemento","et-EE":"element","eu":"osagai","fa-IR":"عنصر","fi-FI":"elementti","fr-CA":"élément","fr-FR":"élément","he-IL":"אֵלֵמֶנט","hi-IN":"तत्व","hr-HR":"element","hu-HU":"elem","id-ID":"elemen","is-IS":"Element","it-IT":"elemento","ja-JP":"エレメント","km-KH":"ធាតុ","ko-KR":"요소","la":"elementum","lt-LT":"elementas","lv-LV":"elements","mn-MN":"бүрэлдэхүүн","nb-NO":"element","nl-NL":"element","pl-PL":"element","pt-BR":"elemento","pt-PT":"elemento","ro-RO":"element","ru-RU":"элемент","sk-SK":"element","sl-SI":"element","sr-RS":"елемент","sv-SE":"element","th-TH":"องค์ประกอบ","tr-TR":"eleman","uk-UA":"елемент","vi-VN":"yếu tố","zh-CN":"元素","zh-TW":"元素"}');
;// CONCATENATED MODULE: ./components/plaintext/locales/elements.json
const elements_namespaceObject = JSON.parse('{"en-US":"elements","af-ZA":"elemente","ar":"عناصر","bg-BG":"елементи","ca-AD":"elements","cs-CZ":"Prvky","cy-GB":"elfennau","da-DK":"elementer","de-AT":"elemente","de-CH":"elemente","de-DE":"elemente","el-GR":"στοιχεία","en-GB":"elements","es-CL":"elementos","es-ES":"elementos","es-MX":"elementos","et-EE":"elemendid","eu":"elementuak","fa-IR":"عناصر","fi-FI":"elementit","fr-CA":"éléments","fr-FR":"éléments","he-IL":"אלמנטים","hi-IN":"तत्वों","hr-HR":"elementi","hu-HU":"elemek","id-ID":"elemen","is-IS":"þættir","it-IT":"elementi","ja-JP":"要素","km-KH":"ធាតុ","ko-KR":"강요","la":"elementa","lt-LT":"elementai","lv-LV":"elementi","mn-MN":"Элэглэлт","nb-NO":"elementer","nl-NL":"elementen","pl-PL":"elementy","pt-BR":"elementos","pt-PT":"elementos","ro-RO":"elemente","ru-RU":"элементы","sk-SK":"prvky","sl-SI":"elementi","sr-RS":"елементи","sv-SE":"element","th-TH":"องค์ประกอบ","tr-TR":"elementler","uk-UA":"елементи","vi-VN":"các yếu tố","zh-CN":"元素","zh-TW":"元素"}');
;// CONCATENATED MODULE: ./components/plaintext/locales/no-elements.json
const no_elements_namespaceObject = JSON.parse('{"en-US":"No elements","af-ZA":"Geen elemente nie","ar":"لا عناصر","bg-BG":"Без елементи","ca-AD":"Sense elements","cs-CZ":"Žádné prvky","cy-GB":"Dim Elfennau","da-DK":"Ingen elementer","de-AT":"Keine Elemente","de-CH":"Keine Elemente","de-DE":"Keine Elemente","el-GR":"Χωρίς στοιχεία","en-GB":"No elements","es-CL":"Sin elementos","es-ES":"Sin elementos","es-MX":"Sin elementos","et-EE":"Elemente pole","eu":"Elementurik ez","fa-IR":"بدون عنصر","fi-FI":"Ei elementtejä","fr-CA":"Pas d\'éléments","fr-FR":"Pas d\'éléments","he-IL":"אין אלמנטים","hi-IN":"कोई तत्व नहीं","hr-HR":"Nema elemenata","hu-HU":"Nincs elem","id-ID":"tidak ada elemen","is-IS":"Engir þættir","it-IT":"Nessun elemento","ja-JP":"要素はありません","km-KH":"គ្មានធាតុ","ko-KR":"요소가 없습니다","la":"Nulla elementa","lt-LT":"Jokių elementų","lv-LV":"Nav elementu","mn-MN":"элемент байхгүй","nb-NO":"Ingen elementer","nl-NL":"Geen elementen","pl-PL":"bez elementów","pt-BR":"Sem elementos","pt-PT":"Sem elementos","ro-RO":"Fără elemente","ru-RU":"Нет элементов","sk-SK":"Žiadne prvky","sl-SI":"Brez elementov","sr-RS":"Нема елемената","sv-SE":"Inga element","th-TH":"ไม่มีองค์ประกอบ","tr-TR":"Element Yok","uk-UA":"немає елементів","vi-VN":"Không có yếu tố","zh-CN":"没有元素","zh-TW":"没有元素"}');
;// CONCATENATED MODULE: ./components/plaintext/locales/index.js






;// CONCATENATED MODULE: ./components/plaintext/index.js



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



var Plaintext = function Plaintext(_ref) {
  var value = _ref.value,
    component = _ref.component,
    options = _ref.options,
    locale = _ref.locale;
  var d;
  switch (component) {
    case 'input-number':
    case 'rate':
    case 'slider':
      return /*#__PURE__*/external_react_default().createElement("div", {
        className: "plaintext-value"
      }, value);
    case 'input-text':
      return /*#__PURE__*/external_react_default().createElement("div", {
        className: "plaintext-value"
      }, value);
    case 'date':
      if (isDate_default()(value)) {
        d = value;
      } else if (isString_default()(value) && (0,helpers/* isValidDate */.qb)(new Date(value))) {
        d = new Date(value);
      }
      return /*#__PURE__*/external_react_default().createElement("div", {
        className: "plaintext-value"
      }, d ? d.toLocaleDateString() : '');
    case 'datetime':
      if (isDate_default()(value)) {
        d = value;
      } else if (isString_default()(value) && (0,helpers/* isValidDate */.qb)(new Date(value))) {
        d = new Date(value);
      }
      return /*#__PURE__*/external_react_default().createElement("div", {
        className: "plaintext-value"
      }, d ? d.toLocaleDateString() + ' ' + d.toLocaleTimeString() : '');
    case 'toggle':
    case 'checkbox':
      if (value === true || value === 1) {
        return /*#__PURE__*/external_react_default().createElement("div", {
          className: "plaintext-value"
        }, (0,helpers/* i18n */.ag)(yes_namespaceObject, locale));
      } else if (value === false || value === 0) {
        return /*#__PURE__*/external_react_default().createElement("div", {
          className: "plaintext-value"
        }, (0,helpers/* i18n */.ag)(no_namespaceObject, locale));
      }
      return /*#__PURE__*/external_react_default().createElement("div", {
        className: "plaintext-value"
      });
    case 'radio-group':
    case 'radio-tile':
    case 'select':
      var found = (options !== null && options !== void 0 ? options : []).find(function (option) {
        return option.value === value;
      });
      var label = '';
      if (found) {
        if ((0,helpers/* isI18n */.QK)(found.label)) {
          label = (0,helpers/* i18n */.ag)(found.label, locale);
        } else {
          label = found.label;
        }
      }
      return /*#__PURE__*/external_react_default().createElement("div", {
        className: "plaintext-value"
      }, label);
    case 'checkbox-group':
    case 'multiselect':
      var selectedOptions = (options !== null && options !== void 0 ? options : []).filter(function (option) {
        return (value !== null && value !== void 0 ? value : []).includes(option.value);
      });
      var founds = selectedOptions.map(function (option) {
        return (0,helpers/* isI18n */.QK)(option.label) ? (0,helpers/* i18n */.ag)(option.label, locale) : option.label;
      });
      return /*#__PURE__*/external_react_default().createElement("div", null, founds.join(', '));
    case 'array':
      return /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, isArray_default()(value) && /*#__PURE__*/external_react_default().createElement("div", {
        className: "plaintext-value"
      }, /*#__PURE__*/external_react_default().createElement("span", {
        className: "count"
      }, value.length), ' ', value.length > 1 ? (0,helpers/* i18n */.ag)(elements_namespaceObject, locale) : (0,helpers/* i18n */.ag)(element_namespaceObject, locale)), !isArray_default()(value) && /*#__PURE__*/external_react_default().createElement("div", {
        className: "plaintext-value"
      }, (0,helpers/* i18n */.ag)(no_elements_namespaceObject, locale)));
    case 'textarea':
      return /*#__PURE__*/external_react_default().createElement("div", {
        className: "plaintext-value",
        dangerouslySetInnerHTML: {
          __html: (value || '').replaceAll('\n', '<br/>')
        }
      });
    case 'placeholder':
    case 'placeholder-image':
      return /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null);
    default:
      return /*#__PURE__*/external_react_default().createElement("div", {
        className: "plaintext-value"
      }, _typeof(value) !== 'object' ? value : '');
  }
};
var IfNotPlaintext = function IfNotPlaintext(_ref2) {
  var plaintext = _ref2.plaintext,
    value = _ref2.value,
    component = _ref2.component,
    options = _ref2.options,
    children = _ref2.children,
    locale = _ref2.locale;
  if (plaintext) {
    return /*#__PURE__*/React.createElement(Plaintext, {
      value: value,
      component: component,
      options: options,
      locale: locale
    });
  } else {
    return children;
  }
};


/***/ }),

/***/ 8064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MQ": () => (/* binding */ FRAMEWORKS),
/* harmony export */   "fj": () => (/* binding */ FIELDS_KEY),
/* harmony export */   "hZ": () => (/* binding */ FRAMEWORKS_LABELS)
/* harmony export */ });
var FRAMEWORKS = ['react', 'react-rsuite5', 'react-material-ui', 'react-bootstrap', 'react-antd'];
var FRAMEWORKS_LABELS = ['React', 'React + RSuite5', 'React + MaterialUI', 'React + Bootstrap', 'React + Ant Design'];
var FIELDS_KEY = ['fields', 'leftFields', 'rightField', 'centerFields'];

/***/ }),

/***/ 5137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8156);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var FormContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormContext);

/***/ }),

/***/ 7274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ GenerateGenerator)
/* harmony export */ });
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3955);
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1469);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7557);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_trim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2742);
/* harmony import */ var lodash_trim__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_trim__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1609);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7037);
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isString__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8156);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7536);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5593);
/* harmony import */ var _costants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8064);
/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2113);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8145);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5490);
/* harmony import */ var _form_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5137);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4685);
/* harmony import */ var _components_plaintext_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6089);






function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _asyncIterator(iterable) { var method, async, sync, retry = 2; for ("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;) { if (async && null != (method = iterable[async])) return method.call(iterable); if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable)); async = "@@asyncIterator", sync = "@@iterator"; } throw new TypeError("Object is not async iterable"); }
function AsyncFromSyncIterator(s) { function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object.")); var done = r.done; return Promise.resolve(r.value).then(function (value) { return { value: value, done: done }; }); } return AsyncFromSyncIterator = function AsyncFromSyncIterator(s) { this.s = s, this.n = s.next; }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, return: function _return(value) { var ret = this.s.return; return void 0 === ret ? Promise.resolve({ value: value, done: !0 }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments)); }, throw: function _throw(value) { var thr = this.s.return; return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments)); } }, new AsyncFromSyncIterator(s); }
/* eslint-disable no-new-func */











var DEBUG_RENDER = true;
var enrichWithLabels = function enrichWithLabels(validationErrors, fields) {
  var result = _objectSpread({}, validationErrors);
  var collectLabels = (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .reduceFields */ .f3)(fields, function (field, accumulator) {
    return field.label ? _objectSpread(_objectSpread({}, accumulator), {}, _defineProperty({}, field.name, field.label)) : accumulator;
  }, {});
  Object.keys(result).forEach(function (key) {
    if (result[key] && result[key].ref && collectLabels[result[key].ref.name]) {
      result[key].ref.label = collectLabels[result[key].ref.name];
    }
  });
  return result;
};
var errorToString = function errorToString(error) {
  if (error) {
    if (error.message) {
      return error.message;
    } else if (error.type === 'required') {
      return 'This field is required';
    } else if (error.type === 'minLength') {
      return 'Text is too short';
    } else if (error.type === 'maxLength') {
      return 'Text is too long';
    } else if (error.type === 'max') {
      return 'Value is too big';
    } else if (error.type === 'min') {
      return 'Value is too small';
    }
    return 'Invalid value';
  }
  return undefined;
};
var translateValidation = function translateValidation(validation, locale, onJavascriptError) {
  // if any validation object
  if (validation != null) {
    var errorMessage;
    if (lodash_isString__WEBPACK_IMPORTED_MODULE_5___default()(validation.message)) {
      errorMessage = validation.message;
    } else if ((0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .isI18n */ .QK)(validation.message)) {
      var _i18n;
      errorMessage = (_i18n = (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .i18n */ .ag)(validation.message, locale)) !== null && _i18n !== void 0 ? _i18n : 'Field is required';
    } else {
      errorMessage = 'Field is required';
    }
    var result = {};
    if (validation.required) {
      result.required = errorMessage;
    }
    // min / max validation
    ['min', 'max', 'minLength', 'maxLength'].forEach(function (key) {
      if (validation[key] != null) {
        result[key] = {
          value: validation[key],
          message: errorMessage
        };
      }
    });
    // validation with regex
    if (validation.pattern) {
      result.pattern = {
        value: new RegExp(validation.pattern),
        message: errorMessage
      };
    }
    if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4___default()(lodash_trim__WEBPACK_IMPORTED_MODULE_3___default()(validation.validate))) {
      try {
        var validator = new Function('value', 'formValues', validation.validate);
        // wrap the validator function, if returns strictly false then re-use
        // the provided message, if it's a string return the string, but it will not i18n
        result.validate = function (value, formValues) {
          var v;
          try {
            v = validator(value, formValues);
          } catch (e) {
            console.error("[LetsForm] Error executing validate function: ", e);
            var error = new Error('Error compiling validate function: ' + e.message, {
              cause: e
            });
            error.sourceCode = validation.validate;
            error.errorType = 'runtime';
            onJavascriptError(error);
          }
          if (v === true) {
            return true;
          } else if (v === false) {
            return errorMessage;
          } else if (lodash_isString__WEBPACK_IMPORTED_MODULE_5___default()(v)) {
            return v;
          } else if ((0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .isI18n */ .QK)(v)) {
            return (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .i18n */ .ag)(v, locale);
          }
          return true;
        };
      } catch (e) {
        console.error("[LetsForm] Invalid validate function: ", e);
        var error = new Error('Error compiling validate function: ' + e.message, {
          cause: e
        });
        error.sourceCode = validation.validate;
        error.errorType = 'compile';
        onJavascriptError(error);
      }
    } else {
      result.validate = undefined;
    }
    return result;
  }
  return validation;
};
var MissingComponent = function MissingComponent(_ref) {
  var lfComponent = _ref.lfComponent,
    label = _ref.label,
    lfFramework = _ref.lfFramework;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
    className: "lf-missing-component"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
    className: "icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_assets_icons__WEBPACK_IMPORTED_MODULE_9__/* .Warning */ .v3, {
    color: "#ff6633",
    height: 16
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
    className: "message"
  }, "The component ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("span", {
    className: "tag-component"
  }, lfComponent), " (", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("em", null, "\"", lodash_isString__WEBPACK_IMPORTED_MODULE_5___default()(label) ? label : 'unknown', "\""), ") is not available for this framework (", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("b", null, lfFramework), ")"));
};
var collectTransformers = function collectTransformers(form, onJavascriptError) {
  var transformers = {};

  // collect all fieldlist needed to compile the transformer
  var fieldList = (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .reduceFields */ .f3)(form.fields, function (field, accumulator) {
    if (field.component !== 'group' && field.component !== 'two-columns' && field.component !== 'three-columns') {
      return [].concat(_toConsumableArray(accumulator), [field.name]);
    }
    return accumulator;
  }, [], {
    array: false
  } // don't include array
  );

  // compile transformer of the form
  try {
    if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4___default()(form.transformer)) {
      transformers.onRender = [makeTransformer(form.transformer, fieldList)];
    }
  } catch (e) {
    var error = new Error('Error compiling main transformer: ' + e.message, {
      cause: e
    });
    error.sourceCode = form.transformer;
    error.errorType = 'compile';
    onJavascriptError(error);
  }

  // collect transformers for each field and put it onChange
  transformers = (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .reduceFields */ .f3)(form.fields, function (field, acc) {
    if (field.transformer) {
      var transformer;
      try {
        transformer = makeTransformer(field.transformer, fieldList);
      } catch (e) {
        var _error = new Error('Error compiling transformer. ' + e.message, {
          cause: e
        });
        _error.sourceCode = field.transformer;
        _error.errorType = 'compile';
        onJavascriptError(_error);
      }
      // push into the onChange list of txs
      if (transformer != null) {
        if (acc.onChange == null) {
          acc.onChange = {};
        }
        acc.onChange[field.name] = [transformer];
      }
    }
    return acc;
  }, transformers, {
    array: false
  } // don't include array
  );

  return transformers;
};

// Use eval to get the contructor since RCA polyfill this and returns a normal function constructor
// eslint-disable-next-line no-eval
var AsyncGeneratorFunction = eval('(() => async function* () {}.constructor)()');
var makeTransformer = function makeTransformer(str, fieldList) {
  if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4___default()(str)) {
    return null;
  }
  // yielding is manual
  var yieldedStr = str.replaceAll("yield();", 'yield Promise.resolve(api.fields());\n');
  try {
    var spreadVars = '';
    if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4___default()(fieldList)) {
      spreadVars = 'const { ' + fieldList.join(', ') + ' } = values;\n';
    }
    var tx = new AsyncGeneratorFunction('api', "const { setValue, enable, disable, values, show, hide, css, element, style, arraySetValue } = api;\n" + spreadVars + yieldedStr + '\nyield Promise.resolve(api.fields());' // leave /n or a comment can void anything
    );

    return tx;
  } catch (e) {
    console.error("[LetsForm] Invalid JavaScript code for rules", e);
    console.error("[LetsForm] Transformer: ", yieldedStr);
    throw e;
  }
};

/**
 * Merge additional components to the main library
 * @param {*} main
 * @param {*} additional
 * @returns
 */
var mergeComponents = function mergeComponents(main, additional) {
  // if not empty, then merge, overwriting is ok
  if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4___default()(additional) && Object.keys(additional).length !== 0) {
    Object.keys(additional).forEach(function (componentName) {
      if (main[componentName] == null) {
        main[componentName] = additional[componentName];
      } else {
        main[componentName] = _objectSpread(_objectSpread({}, main[componentName]), additional[componentName]);
      }
    });
  }
  return main;
};
var GenerateGenerator = function GenerateGenerator(_ref2) {
  var Forms = _ref2.Forms,
    Fields = _ref2.Fields;
  var renderFields = function renderFields(_ref3) {
    var fields = _ref3.fields,
      control = _ref3.control,
      framework = _ref3.framework,
      _onChange = _ref3.onChange,
      getValues = _ref3.getValues,
      Wrapper = _ref3.Wrapper,
      GroupWrapper = _ref3.GroupWrapper,
      BottomView = _ref3.BottomView,
      PlaceholderWrapper = _ref3.PlaceholderWrapper,
      debug = _ref3.debug,
      disabled = _ref3.disabled,
      readOnly = _ref3.readOnly,
      plaintext = _ref3.plaintext,
      errors = _ref3.errors,
      showErrors = _ref3.showErrors,
      _ref3$level = _ref3.level,
      level = _ref3$level === void 0 ? 1 : _ref3$level,
      locale = _ref3.locale,
      onJavascriptError = _ref3.onJavascriptError,
      Components = _ref3.Components,
      prependView = _ref3.prependView;
    var renderedFields = (fields || []).filter(function (field) {
      return Wrapper || field.hidden !== true;
    }).map(function (field, index) {
      var Component;
      if (Components[field.component] && Components[field.component][framework]) {
        Component = Components[field.component][framework];
      } else if (Components[field.component] && Components[field.component]['*']) {
        Component = Components[field.component]['*'];
      } else {
        Component = MissingComponent;
      }
      // remove mandatory fields and platform specific fields
      var additionalFields = lodash_omit__WEBPACK_IMPORTED_MODULE_2___default()(field, ['id', 'name', 'label', 'hint', 'disabled', 'readOnly', 'plaintext', 'size', 'placeholder', 'component'].concat(_toConsumableArray(_costants__WEBPACK_IMPORTED_MODULE_15__/* .FRAMEWORKS */ .MQ)));

      // special case of group
      if (field.component === 'group') {
        var component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(Component, _extends({
          key: field.name,
          lfComponent: field.component,
          lfFramework: framework,
          lfLocale: locale,
          name: field.name,
          label: field.label,
          hint: field.hint,
          disabled: field.disabled
        }, additionalFields), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null, renderFields({
          Wrapper: Wrapper,
          GroupWrapper: GroupWrapper,
          PlaceholderWrapper: PlaceholderWrapper,
          BottomView: BottomView,
          onChange: _onChange,
          fields: field.fields,
          control: control,
          framework: framework,
          getValues: getValues,
          disabled: disabled,
          readOnly: readOnly,
          plaintext: plaintext,
          errors: errors,
          showErrors: showErrors,
          level: level + 1,
          locale: locale,
          onJavascriptError: onJavascriptError,
          Components: Components,
          prependView: PlaceholderWrapper && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(PlaceholderWrapper, {
            key: "wrapper_top_field",
            parentField: field,
            parentFieldTarget: "fields",
            nextField: field.fields && field.fields.length ? field.fields[0] : null
          })
        }), BottomView && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(BottomView, {
          context: "group",
          key: "bottom_view_".concat(field.name),
          field: field,
          target: "fields"
        })));
        return GroupWrapper ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(GroupWrapper, {
          key: "wrapper_".concat(field.name),
          field: field,
          level: level,
          index: index,
          className: "group"
        }, component) : component;
      } else if (field.component === 'tabs') {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_16__/* .Controller */ .Qr, {
          key: "field_".concat(field.name),
          name: field.name,
          control: control,
          render: function render(_ref4) {
            var _values$field$name;
            var fieldInfo = _ref4.field;
            var values = getValues();
            var component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(Component, _extends({
              key: field.name,
              lfComponent: field.component,
              lfFramework: framework,
              lfLocale: locale,
              name: field.name,
              label: field.label,
              hint: field.hint,
              disabled: field.disabled,
              value: (_values$field$name = values[field.name]) !== null && _values$field$name !== void 0 ? _values$field$name : undefined,
              onChange: function onChange(value, opts) {
                // TODO use callback
                fieldInfo.onChange(value);
                _onChange(_objectSpread(_objectSpread({}, getValues()), {}, _defineProperty({}, field.name, value)), field.name);
              }
            }, additionalFields, field[framework]), function (tab) {
              return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null, renderFields({
                Wrapper: Wrapper,
                GroupWrapper: GroupWrapper,
                PlaceholderWrapper: PlaceholderWrapper,
                BottomView: BottomView,
                onChange: _onChange,
                fields: field.fields && lodash_isArray__WEBPACK_IMPORTED_MODULE_1___default()(field.fields[tab]) ? field.fields[tab] : [],
                control: control,
                framework: framework,
                getValues: getValues,
                disabled: disabled,
                readOnly: readOnly,
                plaintext: plaintext,
                errors: errors,
                showErrors: showErrors,
                level: level + 1,
                locale: locale,
                onJavascriptError: onJavascriptError,
                Components: Components,
                prependView: PlaceholderWrapper && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(PlaceholderWrapper, {
                  key: "wrapper_top_field",
                  parentField: field,
                  parentFieldTarget: "fields",
                  parentFieldSubTarget: tab,
                  nextField: field.fields && field.fields.length ? field.fields[0] : null
                })
              }), BottomView && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(BottomView, {
                context: "tabs",
                key: "bottom_view_".concat(field.name),
                field: field,
                target: "fields",
                subtarget: tab
              }));
            });
            return GroupWrapper ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(GroupWrapper, {
              key: "wrapper_".concat(field.name),
              field: field,
              level: level,
              index: index,
              className: "tabs"
            }, component) : component;
          }
        });
      } else if (field.component === 'array' && GroupWrapper) {
        var _component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(Component, _extends({
          key: field.name,
          lfComponent: field.component,
          lfFramework: framework,
          lfLocale: locale,
          name: field.name,
          label: field.label,
          hint: field.hint,
          disabled: field.disabled
        }, additionalFields), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null, renderFields({
          Wrapper: Wrapper,
          GroupWrapper: GroupWrapper,
          PlaceholderWrapper: PlaceholderWrapper,
          BottomView: BottomView,
          onChange: _onChange,
          fields: field.fields,
          control: control,
          framework: framework,
          getValues: getValues,
          disabled: disabled,
          readOnly: readOnly,
          plaintext: plaintext,
          errors: errors,
          showErrors: showErrors,
          level: level + 1,
          locale: locale,
          onJavascriptError: onJavascriptError,
          Components: Components,
          prependView: PlaceholderWrapper && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(PlaceholderWrapper, {
            key: "wrapper_top_field",
            parentField: field,
            parentFieldTarget: "fields",
            nextField: field.fields && field.fields.length ? field.fields[0] : null
          })
        }), BottomView && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(BottomView, {
          context: "array",
          key: "bottom_view_".concat(field.name),
          field: field,
          target: "fields"
        })));
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(GroupWrapper, {
          key: "wrapper_".concat(field.name),
          field: field,
          level: level,
          index: index,
          className: "array"
        }, _component);
      } else if (field.component === 'two-columns') {
        var _component2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(Component, _extends({
          key: field.name,
          lfComponent: field.component,
          lfFramework: framework,
          lfLocale: locale,
          name: field.name
        }, additionalFields), function (column) {
          if (column === 'left') {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null, renderFields({
              Wrapper: Wrapper,
              GroupWrapper: GroupWrapper,
              PlaceholderWrapper: PlaceholderWrapper,
              BottomView: BottomView,
              onChange: _onChange,
              fields: field.leftFields,
              control: control,
              framework: framework,
              getValues: getValues,
              disabled: disabled,
              readOnly: readOnly,
              plaintext: plaintext,
              errors: errors,
              showErrors: showErrors,
              level: level + 1,
              locale: locale,
              onJavascriptError: onJavascriptError,
              Components: Components,
              prependView: PlaceholderWrapper && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(PlaceholderWrapper, {
                key: "wrapper_top_field",
                parentField: field,
                parentFieldTarget: "leftFields",
                nextField: field.leftFields && field.leftFields.length ? field.leftFields[0] : null
              })
            }), BottomView && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(BottomView, {
              context: "two-columns",
              key: "bottom_view_".concat(field.name),
              field: field,
              target: "leftFields"
            }));
          } else if (column === 'right') {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null, renderFields({
              Wrapper: Wrapper,
              GroupWrapper: GroupWrapper,
              PlaceholderWrapper: PlaceholderWrapper,
              BottomView: BottomView,
              onChange: _onChange,
              fields: field.rightFields,
              control: control,
              framework: framework,
              getValues: getValues,
              disabled: disabled,
              readOnly: readOnly,
              plaintext: plaintext,
              errors: errors,
              showErrors: showErrors,
              level: level + 1,
              locale: locale,
              onJavascriptError: onJavascriptError,
              Components: Components,
              prependView: PlaceholderWrapper && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(PlaceholderWrapper, {
                key: "wrapper_top_field",
                parentField: field,
                parentFieldTarget: "rightFields",
                nextField: field.rightFields && field.rightFields.length ? field.rightFields[0] : null
              })
            }), BottomView && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(BottomView, {
              context: "two-columns",
              key: "bottom_view_".concat(field.name),
              field: field,
              target: "rightFields"
            }));
          }
        });
        return GroupWrapper ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(GroupWrapper, {
          key: "wrapper_".concat(field.name),
          className: "two-columns",
          level: level,
          field: field,
          index: index
        }, _component2) : _component2;
      } else if (field.component === 'three-columns') {
        var _component3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(Component, _extends({
          key: "three-columns-".concat(field.name),
          name: field.name,
          lfComponent: field.component,
          lfFramework: framework,
          lfLocale: locale
        }, additionalFields), function (column) {
          if (column === 'left') {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null, renderFields({
              Wrapper: Wrapper,
              GroupWrapper: GroupWrapper,
              PlaceholderWrapper: PlaceholderWrapper,
              BottomView: BottomView,
              onChange: _onChange,
              fields: field.leftFields,
              control: control,
              framework: framework,
              getValues: getValues,
              disabled: disabled,
              readOnly: readOnly,
              plaintext: plaintext,
              errors: errors,
              showErrors: showErrors,
              level: level + 1,
              locale: locale,
              onJavascriptError: onJavascriptError,
              Components: Components,
              prependView: PlaceholderWrapper && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(PlaceholderWrapper, {
                key: "wrapper_top_field",
                parentField: field,
                parentFieldTarget: "leftFields",
                nextField: field.leftFields && field.leftFields.length ? field.leftFields[0] : null
              })
            }), BottomView && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(BottomView, {
              context: "three-columns",
              key: "bottom_view_".concat(field.name),
              field: field,
              target: "leftFields"
            }));
          } else if (column === 'center') {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null, renderFields({
              Wrapper: Wrapper,
              GroupWrapper: GroupWrapper,
              PlaceholderWrapper: PlaceholderWrapper,
              BottomView: BottomView,
              onChange: _onChange,
              fields: field.centerFields,
              control: control,
              framework: framework,
              getValues: getValues,
              disabled: disabled,
              readOnly: readOnly,
              plaintext: plaintext,
              errors: errors,
              showErrors: showErrors,
              level: level + 1,
              locale: locale,
              onJavascriptError: onJavascriptError,
              Components: Components,
              prependView: PlaceholderWrapper && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(PlaceholderWrapper, {
                key: "wrapper_top_field",
                parentField: field,
                parentFieldTarget: "centerFields",
                nextField: field.centerFields && field.centerFields.length ? field.centerFields[0] : null
              })
            }), BottomView && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(BottomView, {
              context: "three-columns",
              key: "bottom_view_".concat(field.name),
              field: field,
              target: "centerFields"
            }));
          } else if (column === 'right') {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null, renderFields({
              Wrapper: Wrapper,
              GroupWrapper: GroupWrapper,
              PlaceholderWrapper: PlaceholderWrapper,
              BottomView: BottomView,
              onChange: _onChange,
              fields: field.rightFields,
              control: control,
              framework: framework,
              getValues: getValues,
              disabled: disabled,
              readOnly: readOnly,
              plaintext: plaintext,
              errors: errors,
              showErrors: showErrors,
              level: level + 1,
              locale: locale,
              onJavascriptError: onJavascriptError,
              Components: Components,
              prependView: PlaceholderWrapper && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(PlaceholderWrapper, {
                key: "wrapper_top_field",
                parentField: field,
                parentFieldTarget: "rightFields",
                nextField: field.rightFields && field.rightFields.length ? field.rightFields[0] : null
              })
            }), BottomView && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(BottomView, {
              context: "three-columns",
              key: "bottom_view_".concat(field.name),
              field: field,
              target: "rightFields"
            }));
          }
        });
        return GroupWrapper ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(GroupWrapper, {
          key: "wrapper_".concat(field.name),
          className: "three-columns",
          field: field,
          level: level,
          index: index
        }, _component3) : _component3;
      }

      // generate the validation rule, takes into account react-hook-form
      // validation format and i18n strings
      var rules = translateValidation(_objectSpread({
        required: field.required
      }, field.validation), locale, onJavascriptError);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_16__/* .Controller */ .Qr, {
        key: "field_".concat(field.name),
        name: field.name,
        rules: rules,
        control: control,
        render: function render(_ref5) {
          var fieldInfo = _ref5.field;
          var component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(Component
          // not sure about this, not passing the ref
          , _extends({
            name: fieldInfo.name,
            value: fieldInfo.value,
            onBlur: fieldInfo.onBlur,
            key: "field_".concat(field.name),
            lfComponent: field.component,
            lfFramework: framework,
            lfLocale: locale,
            label: field.label,
            hint: field.hint,
            disabled: disabled || field.disabled,
            readOnly: readOnly || field.readOnly,
            plaintext: plaintext,
            size: field.size,
            placeholder: field.placeholder,
            error: errors && errors[field.name] ? showErrors === 'inline' ? errorToString(errors[field.name]) : true : undefined
          }, additionalFields, field[framework], {
            onChange: function onChange(value, opts) {
              // TODO use callback
              fieldInfo.onChange(value);
              _onChange(_objectSpread(_objectSpread({}, getValues()), {}, _defineProperty({}, field.name, value)), field.name);
            }
          }));
          return Wrapper ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(Wrapper, {
            key: "wrapper_".concat(field.name),
            field: field,
            level: level,
            index: index
          }, component) : component;
        }
      });
    });

    //console.log('prependView', prependView)
    //return renderedFields;
    return prependView ? [prependView].concat(_toConsumableArray(renderedFields)) : renderedFields;
  };
  var FormGenerator = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().memo(function (_ref6) {
    var _form$name;
    var framework = _ref6.framework,
      form = _ref6.form,
      _ref6$onChange = _ref6.onChange,
      onChange = _ref6$onChange === void 0 ? function () {} : _ref6$onChange,
      _ref6$onSubmit = _ref6.onSubmit,
      onSubmit = _ref6$onSubmit === void 0 ? function () {} : _ref6$onSubmit,
      _ref6$onReset = _ref6.onReset,
      onReset = _ref6$onReset === void 0 ? function () {} : _ref6$onReset,
      _ref6$onError = _ref6.onError,
      onError = _ref6$onError === void 0 ? function () {} : _ref6$onError,
      _ref6$onJavascriptErr = _ref6.onJavascriptError,
      onJavascriptError = _ref6$onJavascriptErr === void 0 ? function () {} : _ref6$onJavascriptErr,
      locale = _ref6.locale,
      wrapper = _ref6.wrapper,
      groupWrapper = _ref6.groupWrapper,
      placeholderWrapper = _ref6.placeholderWrapper,
      bottomView = _ref6.bottomView,
      _ref6$defaultValues = _ref6.defaultValues,
      defaultValues = _ref6$defaultValues === void 0 ? {} : _ref6$defaultValues,
      _ref6$onlyFields = _ref6.onlyFields,
      onlyFields = _ref6$onlyFields === void 0 ? false : _ref6$onlyFields,
      _ref6$debug = _ref6.debug,
      debug = _ref6$debug === void 0 ? false : _ref6$debug,
      _ref6$disabled = _ref6.disabled,
      disabled = _ref6$disabled === void 0 ? false : _ref6$disabled,
      _ref6$readOnly = _ref6.readOnly,
      readOnly = _ref6$readOnly === void 0 ? false : _ref6$readOnly,
      _ref6$plaintext = _ref6.plaintext,
      plaintext = _ref6$plaintext === void 0 ? false : _ref6$plaintext,
      _ref6$hideToolbar = _ref6.hideToolbar,
      hideToolbar = _ref6$hideToolbar === void 0 ? false : _ref6$hideToolbar,
      custom = _ref6.custom,
      children = _ref6.children,
      components = _ref6.components,
      className = _ref6.className,
      hideCancel = _ref6.hideCancel,
      hideSubmit = _ref6.hideSubmit,
      _ref6$demo = _ref6.demo,
      demo = _ref6$demo === void 0 ? false : _ref6$demo;
    var showErrors = form.showErrors;
    var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)((_form$name = form.name) !== null && _form$name !== void 0 ? _form$name : lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()('form_')),
      _useState2 = _slicedToArray(_useState, 2),
      formName = _useState2[0],
      setFormName = _useState2[1];
    (0,_hooks__WEBPACK_IMPORTED_MODULE_11__/* .useStylesheet */ .R)(formName, form.css);
    var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      transformers = _useState4[0],
      setTransformers = _useState4[1];
    var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_16__/* .useForm */ .cI)({
        defaultValues: defaultValues,
        mode: form.validationMode
      }),
      handleSubmit = _useForm.handleSubmit,
      _useForm$formState = _useForm.formState,
      errors = _useForm$formState.errors,
      isValid = _useForm$formState.isValid,
      reset = _useForm.reset,
      control = _useForm.control,
      getValues = _useForm.getValues;
    var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      validationErrors = _useState6[0],
      setValidationErrors = _useState6[1];
    // store form fields, apply immediately transformers (collected from all fields)
    var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      formFields = _useState8[0],
      setFormFields = _useState8[1];

    // update internal state if form changes
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
      var f = /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var _form$name2;
          var newTransformers, newFields, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, newFormFields, onChangeFields, idx, _iteratorAbruptCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _newFormFields;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                newTransformers = collectTransformers(form, onJavascriptError); // initial fields values
                newFields = form.fields; // apply onRender transformers
                if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4___default()(newTransformers.onRender)) {
                  _context.next = 32;
                  break;
                }
                _iteratorAbruptCompletion = false;
                _didIteratorError = false;
                _context.prev = 5;
                _iterator = _asyncIterator((0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .applyTransformers */ .Zr)(formName, framework, newFields, newTransformers.onRender, defaultValues, onJavascriptError));
              case 7:
                _context.next = 9;
                return _iterator.next();
              case 9:
                if (!(_iteratorAbruptCompletion = !(_step = _context.sent).done)) {
                  _context.next = 16;
                  break;
                }
                newFormFields = _step.value;
                newFields = newFormFields;
                setFormFields(newFormFields);
              case 13:
                _iteratorAbruptCompletion = false;
                _context.next = 7;
                break;
              case 16:
                _context.next = 22;
                break;
              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](5);
                _didIteratorError = true;
                _iteratorError = _context.t0;
              case 22:
                _context.prev = 22;
                _context.prev = 23;
                if (!(_iteratorAbruptCompletion && _iterator.return != null)) {
                  _context.next = 27;
                  break;
                }
                _context.next = 27;
                return _iterator.return();
              case 27:
                _context.prev = 27;
                if (!_didIteratorError) {
                  _context.next = 30;
                  break;
                }
                throw _iteratorError;
              case 30:
                return _context.finish(27);
              case 31:
                return _context.finish(22);
              case 32:
                // collect list of fields with an onChange transformer
                onChangeFields = Object.keys(newTransformers.onChange || {}).filter(function (fieldName) {
                  return !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4___default()(newTransformers.onChange[fieldName]);
                }); // execute all onChange transformers at the bootstrap of the form
                idx = 0;
              case 34:
                if (!(idx < onChangeFields.length)) {
                  _context.next = 67;
                  break;
                }
                _iteratorAbruptCompletion2 = false;
                _didIteratorError2 = false;
                _context.prev = 37;
                _iterator2 = _asyncIterator((0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .applyTransformers */ .Zr)(formName, framework, newFields, newTransformers.onChange[onChangeFields[idx]], defaultValues, onJavascriptError));
              case 39:
                _context.next = 41;
                return _iterator2.next();
              case 41:
                if (!(_iteratorAbruptCompletion2 = !(_step2 = _context.sent).done)) {
                  _context.next = 48;
                  break;
                }
                _newFormFields = _step2.value;
                newFields = _newFormFields;
                setFormFields(_newFormFields);
              case 45:
                _iteratorAbruptCompletion2 = false;
                _context.next = 39;
                break;
              case 48:
                _context.next = 54;
                break;
              case 50:
                _context.prev = 50;
                _context.t1 = _context["catch"](37);
                _didIteratorError2 = true;
                _iteratorError2 = _context.t1;
              case 54:
                _context.prev = 54;
                _context.prev = 55;
                if (!(_iteratorAbruptCompletion2 && _iterator2.return != null)) {
                  _context.next = 59;
                  break;
                }
                _context.next = 59;
                return _iterator2.return();
              case 59:
                _context.prev = 59;
                if (!_didIteratorError2) {
                  _context.next = 62;
                  break;
                }
                throw _iteratorError2;
              case 62:
                return _context.finish(59);
              case 63:
                return _context.finish(54);
              case 64:
                idx++;
                _context.next = 34;
                break;
              case 67:
                setFormName((_form$name2 = form.name) !== null && _form$name2 !== void 0 ? _form$name2 : lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()('form_'));
                setTransformers(newTransformers);

                // if transformed fields different than current one, then save
                if (newFields !== formFields) {
                  setFormFields(newFields);
                }
              case 70:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[5, 18, 22, 32], [23,, 27, 31], [37, 50, 54, 64], [55,, 59, 63]]);
        }));
        return function f() {
          return _ref7.apply(this, arguments);
        };
      }();
      f();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [form, framework] // don't put defaultValues here
    );

    var onHandleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(function (data) {
      setValidationErrors(null);
      onSubmit(data);
    }, [onSubmit]);
    var onHandleError = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(function (data) {
      setValidationErrors(data);
      onError(data);
    }, [onError]);
    var handleReset = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(function () {
      setValidationErrors(null);
      reset(defaultValues);
      onReset();
    }, [defaultValues, reset, onReset]);
    var handleChange = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)( /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(values, fieldName) {
        var newFields, _iteratorAbruptCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, f, _iteratorAbruptCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, _f;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              // execute main transformer
              newFields = formFields;
              if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4___default()(transformers.onRender)) {
                _context2.next = 31;
                break;
              }
              _iteratorAbruptCompletion3 = false;
              _didIteratorError3 = false;
              _context2.prev = 4;
              _iterator3 = _asyncIterator((0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .applyTransformers */ .Zr)(formName, framework, newFields, transformers.onRender, values, onJavascriptError));
            case 6:
              _context2.next = 8;
              return _iterator3.next();
            case 8:
              if (!(_iteratorAbruptCompletion3 = !(_step3 = _context2.sent).done)) {
                _context2.next = 15;
                break;
              }
              f = _step3.value;
              newFields = f;
              if (f !== formFields) {
                setFormFields(f);
              }
            case 12:
              _iteratorAbruptCompletion3 = false;
              _context2.next = 6;
              break;
            case 15:
              _context2.next = 21;
              break;
            case 17:
              _context2.prev = 17;
              _context2.t0 = _context2["catch"](4);
              _didIteratorError3 = true;
              _iteratorError3 = _context2.t0;
            case 21:
              _context2.prev = 21;
              _context2.prev = 22;
              if (!(_iteratorAbruptCompletion3 && _iterator3.return != null)) {
                _context2.next = 26;
                break;
              }
              _context2.next = 26;
              return _iterator3.return();
            case 26:
              _context2.prev = 26;
              if (!_didIteratorError3) {
                _context2.next = 29;
                break;
              }
              throw _iteratorError3;
            case 29:
              return _context2.finish(26);
            case 30:
              return _context2.finish(21);
            case 31:
              if (!(transformers.onChange != null && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4___default()(transformers.onChange[fieldName]))) {
                _context2.next = 61;
                break;
              }
              // execute the async generator transformer
              _iteratorAbruptCompletion4 = false;
              _didIteratorError4 = false;
              _context2.prev = 34;
              _iterator4 = _asyncIterator((0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .applyTransformers */ .Zr)(formName, framework, newFields, transformers.onChange[fieldName], values, onJavascriptError));
            case 36:
              _context2.next = 38;
              return _iterator4.next();
            case 38:
              if (!(_iteratorAbruptCompletion4 = !(_step4 = _context2.sent).done)) {
                _context2.next = 45;
                break;
              }
              _f = _step4.value;
              newFields = _f;
              if (_f !== formFields) {
                setFormFields(_f);
              }
            case 42:
              _iteratorAbruptCompletion4 = false;
              _context2.next = 36;
              break;
            case 45:
              _context2.next = 51;
              break;
            case 47:
              _context2.prev = 47;
              _context2.t1 = _context2["catch"](34);
              _didIteratorError4 = true;
              _iteratorError4 = _context2.t1;
            case 51:
              _context2.prev = 51;
              _context2.prev = 52;
              if (!(_iteratorAbruptCompletion4 && _iterator4.return != null)) {
                _context2.next = 56;
                break;
              }
              _context2.next = 56;
              return _iterator4.return();
            case 56:
              _context2.prev = 56;
              if (!_didIteratorError4) {
                _context2.next = 59;
                break;
              }
              throw _iteratorError4;
            case 59:
              return _context2.finish(56);
            case 60:
              return _context2.finish(51);
            case 61:
              onChange(values);
            case 62:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[4, 17, 21, 31], [22,, 26, 30], [34, 47, 51, 61], [52,, 56, 60]]);
      }));
      return function (_x2, _x3) {
        return _ref8.apply(this, arguments);
      };
    }(), [onChange, formFields, formName, transformers, framework, onJavascriptError]);
    if (debug) {
      console.log('[LetsForm] Validation', errors);
    }
    var Form = Forms[framework];
    var Wrapper = wrapper;
    var GroupWrapper = groupWrapper;
    var BottomView = bottomView;
    var PlaceholderWrapper = placeholderWrapper;
    if (plaintext) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_plaintext_form__WEBPACK_IMPORTED_MODULE_14__/* .PlaintextForm */ .Q, {
        form: form,
        locale: locale,
        framework: framework,
        currentValues: getValues()
      });
    }
    // get errors from state or from hook, perhaps state is not needed
    var formErrors = !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4___default()(errors) ? errors : validationErrors;
    if (debug) {
      console.log("[LetsForm] Render form (".concat(form.name, ")"));
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_form_context__WEBPACK_IMPORTED_MODULE_12__/* ["default"].Provider */ .Z.Provider, {
      value: {
        locales: form.locales,
        locale: locale
        // ..more
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('lf-lets-form', {
        'lf-lets-form-edit-mode': demo
      }, className)
    }, formErrors && showErrors === 'groupedTop' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components__WEBPACK_IMPORTED_MODULE_8__/* .ValidationErrors */ .qf, {
      className: "top",
      locale: locale,
      errors: enrichWithLabels(formErrors, formFields)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(Form, _extends({
      onSubmit: handleSubmit(onHandleSubmit, onHandleError),
      name: formName,
      defaultValues: defaultValues,
      onlyFields: onlyFields,
      hideToolbar: hideToolbar,
      onReset: handleReset,
      disabled: disabled,
      disabledSubmit: form.disableSubmitOnError && !isValid,
      readOnly: readOnly,
      plaintext: plaintext,
      locale: locale
    }, lodash_omit__WEBPACK_IMPORTED_MODULE_2___default()(form, 'id', 'fields', 'version'), {
      labelSubmit: (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .i18n */ .ag)(form.labelSubmit, locale) || 'Submit',
      labelCancel: (0,_helpers__WEBPACK_IMPORTED_MODULE_10__/* .i18n */ .ag)(form.labelCancel, locale) || 'Cancel',
      hideCancel: hideCancel,
      hideSubmit: hideSubmit,
      custom: custom
    }), renderFields({
      Wrapper: Wrapper,
      GroupWrapper: GroupWrapper,
      PlaceholderWrapper: PlaceholderWrapper,
      BottomView: BottomView,
      onChange: handleChange,
      fields: formFields,
      // take from state
      control: control,
      framework: framework,
      getValues: getValues,
      debug: debug,
      errors: errors,
      disabled: disabled || form.disabled,
      readOnly: readOnly || form.readOnly,
      plaintext: plaintext || form.plaintext,
      showErrors: showErrors,
      locale: locale,
      onJavascriptError: onJavascriptError,
      Components: mergeComponents(Fields, components)
    }), children, formErrors && (showErrors === 'groupedBottom' || lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4___default()(showErrors)) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components__WEBPACK_IMPORTED_MODULE_8__/* .ValidationErrors */ .qf, {
      className: "bottom",
      locale: locale,
      errors: enrichWithLabels(formErrors, formFields)
    })), demo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
      className: "label-test-buttons"
    }, "Test buttons")));
  }, function (prevProps, nextProps) {
    if (DEBUG_RENDER) {
      console.log("[LetsForm] Form generator ".concat(nextProps.form.name ? '(' + nextProps.form.name + ")" : '', " re-render: ") + ' framework=' + (prevProps.framework === nextProps.framework) + ' onChange=' + (prevProps.onChange === nextProps.onChange) + ' wrapper=' + (prevProps.wrapper === nextProps.wrapper) + ' form=' + (prevProps.form === nextProps.form) + ' locale=' + (prevProps.locale === nextProps.locale) + ' plaintext=' + (prevProps.plaintext === nextProps.plaintext) + ' disabled=' + (prevProps.disabled === nextProps.disabled));
    }
    var isEqual = prevProps.framework === nextProps.framework && prevProps.onChange === nextProps.onChange && prevProps.wrapper === nextProps.wrapper && prevProps.form === nextProps.form && prevProps.locale === nextProps.locale && prevProps.plaintext === nextProps.plaintext && prevProps.disabled === nextProps.disabled;
    console.log('Is re-rendering?', !isEqual);
    return isEqual;
  });
  FormGenerator.displayName = 'FormGenerator';
  return FormGenerator;
};


/***/ }),

/***/ 8145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "xS": () => (/* reexport */ addField),
  "eX": () => (/* reexport */ applyFormRules),
  "Zr": () => (/* reexport */ applyTransformers),
  "Lx": () => (/* reexport */ cleanUp),
  "FN": () => (/* reexport */ collectIds),
  "BI": () => (/* reexport */ collectNames),
  "bc": () => (/* reexport */ createEmptyField),
  "AK": () => (/* reexport */ deleteField),
  "Mw": () => (/* reexport */ fillIds),
  "qH": () => (/* reexport */ filterFields),
  "MN": () => (/* reexport */ filterOptions),
  "PI": () => (/* reexport */ findField),
  "qs": () => (/* reexport */ formHelper),
  "rc": () => (/* reexport */ getFieldById),
  "IP": () => (/* reexport */ getLocales),
  "ag": () => (/* reexport */ i18n),
  "Lo": () => (/* reexport */ i18nOptions),
  "c_": () => (/* reexport */ isChildrenOf),
  "Oc": () => (/* reexport */ isEmptyForm),
  "QK": () => (/* reexport */ isI18n),
  "CB": () => (/* reexport */ isUrl),
  "qb": () => (/* reexport */ isValidDate),
  "az": () => (/* reexport */ isValidDayjsFormat),
  "PZ": () => (/* reexport */ makeWidthStyle),
  "vn": () => (/* reexport */ mapFields),
  "QF": () => (/* reexport */ passRest),
  "f3": () => (/* reexport */ reduceFields),
  "DN": () => (/* reexport */ replaceField),
  "nK": () => (/* reexport */ validateJSONForm),
  "Dd": () => (/* reexport */ validateRulesDefinition)
});

// EXTERNAL MODULE: ./node_modules/lodash/flatten.js
var flatten = __webpack_require__(5564);
var flatten_default = /*#__PURE__*/__webpack_require__.n(flatten);
// EXTERNAL MODULE: ./node_modules/lodash/isArray.js
var isArray = __webpack_require__(1469);
var isArray_default = /*#__PURE__*/__webpack_require__.n(isArray);
// EXTERNAL MODULE: ./node_modules/lodash/isObject.js
var isObject = __webpack_require__(3218);
var isObject_default = /*#__PURE__*/__webpack_require__.n(isObject);
;// CONCATENATED MODULE: ./helpers/map-fields.js



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * processFieldsHash
 * Tkae a field and process the "fields" key, which can be ah hash of value / array of fields
 * @param {*} field 
 * @param {*} predicate 
 * @returns 
 */
var processFieldsHash = function processFieldsHash(field, predicate) {
  var newField = field;
  var subkeys = Object.keys(field.fields);
  subkeys.forEach(function (subkey) {
    var newFields = mapFields(field.fields[subkey], predicate);
    if (newFields !== field.fields[subkey]) {
      newField = _objectSpread(_objectSpread({}, newField), {}, {
        fields: _objectSpread(_objectSpread({}, newField.fields), {}, _defineProperty({}, subkey, newFields))
      });
    }
  });
  return newField;
};

/**
 * mapFields
 * Return an array of fields with the only elements changed by the predicate, it takes a field as parameter
 * and return the same field or a changed one. It recursively iterate over subfields for group, two-columns and
 * three columns components
 * @param {Array} fields
 * @param {Function} predicate Take a field as paramenter and return a field object
 * @returns
 */
var mapFields = function mapFields(fields) {
  var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (obj) {
    return obj;
  };
  var needsFlatten = false;
  if (!fields) {
    return fields;
  }
  // replace with predicated
  var newFields = fields.map(function (field) {
    var newField = predicate(field);
    // if returns an array, means the mapping is replacing with two fields
    // and it will need to be flattened later
    if (Array.isArray(newField)) {
      needsFlatten = true;
    }
    if (field.component === 'group') {
      var _newFields = mapFields(field.fields, predicate);
      if (_newFields !== field.fields) {
        newField = _objectSpread(_objectSpread({}, newField), {}, {
          fields: _newFields
        });
      }
    } else if (field.component === 'array') {
      var _newFields2 = mapFields(field.fields, predicate);
      if (_newFields2 !== field.fields) {
        newField = _objectSpread(_objectSpread({}, newField), {}, {
          fields: _newFields2
        });
      }
    } else if (field.component === 'two-columns') {
      var newLeftFields = mapFields(field.leftFields, predicate);
      if (newLeftFields !== field.leftFields) {
        newField = _objectSpread(_objectSpread({}, newField), {}, {
          leftFields: newLeftFields
        });
      }
      var newRightFields = mapFields(field.rightFields, predicate);
      if (newRightFields !== field.rightFields) {
        newField = _objectSpread(_objectSpread({}, newField), {}, {
          rightFields: newRightFields
        });
      }
    } else if (field.component === 'three-columns') {
      var _newLeftFields = mapFields(field.leftFields, predicate);
      if (_newLeftFields !== field.leftFields) {
        newField = _objectSpread(_objectSpread({}, newField), {}, {
          leftFields: _newLeftFields
        });
      }
      var newCenterFields = mapFields(field.centerFields, predicate);
      if (newCenterFields !== field.centerFields) {
        newField = _objectSpread(_objectSpread({}, newField), {}, {
          centerFields: newCenterFields
        });
      }
      var _newRightFields = mapFields(field.rightFields, predicate);
      if (_newRightFields !== field.rightFields) {
        newField = _objectSpread(_objectSpread({}, newField), {}, {
          rightFields: _newRightFields
        });
      }
    } else if (field.component === 'tabs' && isObject_default()(field.fields) && !isArray_default()(field.fields)) {
      // Problem here: the new field can be an array because the map field, can return an array with 
      // additional field to be put somewhere in the mapping, of those only the one of type "tab" need to be
      // mapped, the other one must be left untouched since they where added by the helper method
      if (isArray_default()(newField)) {
        // if an array is returned, then it's already changed, we don't need to worry too much about
        // referential integrity
        // here only process the original field
        newField = newField.map(function (fieldToProcess) {
          if (fieldToProcess === field) {
            return processFieldsHash(fieldToProcess, predicate);
          }
          return fieldToProcess;
        });
      } else {
        newField = processFieldsHash(newField, predicate);
      }
    }
    return newField;
  });
  var hasChanges;
  if (needsFlatten) {
    // if needs to be flattened, for sure is changed
    newFields = flatten_default()(newFields);
    hasChanges = true;
  } else {
    // check if some element of the array is changed, keep instance consistency otherwise
    hasChanges = fields.some(function (field, idx) {
      return field !== newFields[idx];
    });
  }
  return hasChanges ? newFields : fields;
};

;// CONCATENATED MODULE: ./helpers/replace-field.js
function replace_field_typeof(obj) { "@babel/helpers - typeof"; return replace_field_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, replace_field_typeof(obj); }
function replace_field_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function replace_field_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? replace_field_ownKeys(Object(source), !0).forEach(function (key) { replace_field_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : replace_field_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function replace_field_defineProperty(obj, key, value) { key = replace_field_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function replace_field_toPropertyKey(arg) { var key = replace_field_toPrimitive(arg, "string"); return replace_field_typeof(key) === "symbol" ? key : String(key); }
function replace_field_toPrimitive(input, hint) { if (replace_field_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (replace_field_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var replaceField = function replaceField(form, field) {
  return replace_field_objectSpread(replace_field_objectSpread({}, form), {}, {
    fields: mapFields(form.fields, function (currentField) {
      if (currentField.id === field.id) {
        return field;
      }
      return currentField;
    })
  });
};

;// CONCATENATED MODULE: ./helpers/filter-fields.js


function filter_fields_typeof(obj) { "@babel/helpers - typeof"; return filter_fields_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, filter_fields_typeof(obj); }
function filter_fields_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function filter_fields_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? filter_fields_ownKeys(Object(source), !0).forEach(function (key) { filter_fields_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : filter_fields_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function filter_fields_defineProperty(obj, key, value) { key = filter_fields_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function filter_fields_toPropertyKey(arg) { var key = filter_fields_toPrimitive(arg, "string"); return filter_fields_typeof(key) === "symbol" ? key : String(key); }
function filter_fields_toPrimitive(input, hint) { if (filter_fields_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (filter_fields_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * filterFields
 * Filter field calling recursively fields in group, two-columns, three columns
 * @param {Array} fields
 * @param {Function} predicate Take a field as paramenter and return a field object
 * @returns
 */
var filterFields = function filterFields(fields) {
  var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (obj) {
    return obj;
  };
  if (!fields) {
    return fields;
  }
  // replace with predicated
  var newFields = fields.map(function (field) {
    if (!predicate(field)) {
      return null;
    }
    var newField = field;
    if (field.component === 'group') {
      var _newFields = filterFields(field.fields, predicate);
      if (_newFields !== field.fields) {
        newField = filter_fields_objectSpread(filter_fields_objectSpread({}, newField), {}, {
          fields: _newFields
        });
      }
    } else if (field.component === 'array') {
      var _newFields2 = filterFields(field.fields, predicate);
      if (_newFields2 !== field.fields) {
        newField = filter_fields_objectSpread(filter_fields_objectSpread({}, newField), {}, {
          fields: _newFields2
        });
      }
    } else if (field.component === 'two-columns') {
      var newLeftFields = filterFields(field.leftFields, predicate);
      if (newLeftFields !== field.leftFields) {
        newField = filter_fields_objectSpread(filter_fields_objectSpread({}, newField), {}, {
          leftFields: newLeftFields
        });
      }
      var newRightFields = filterFields(field.rightFields, predicate);
      if (newRightFields !== field.rightFields) {
        newField = filter_fields_objectSpread(filter_fields_objectSpread({}, newField), {}, {
          rightFields: newRightFields
        });
      }
    } else if (field.component === 'three-columns') {
      var _newLeftFields = filterFields(field.leftFields, predicate);
      if (_newLeftFields !== field.leftFields) {
        newField = filter_fields_objectSpread(filter_fields_objectSpread({}, newField), {}, {
          leftFields: _newLeftFields
        });
      }
      var newCenterFields = filterFields(field.centerFields, predicate);
      if (newCenterFields !== field.centerFields) {
        newField = filter_fields_objectSpread(filter_fields_objectSpread({}, newField), {}, {
          centerFields: newCenterFields
        });
      }
      var _newRightFields = filterFields(field.rightFields, predicate);
      if (_newRightFields !== field.rightFields) {
        newField = filter_fields_objectSpread(filter_fields_objectSpread({}, newField), {}, {
          rightFields: _newRightFields
        });
      }
    } else if (field.component === 'tabs' && isObject_default()(field.fields) && !isArray_default()(field.fields)) {
      var subkeys = Object.keys(field.fields);
      // scan all keys of fields and reapply, if different instance, create a new instance
      // of new field
      subkeys.forEach(function (subkey) {
        var newFields = filterFields(field.fields[subkey], predicate);
        if (newFields !== field.fields[subkey]) {
          newField = filter_fields_objectSpread(filter_fields_objectSpread({}, newField), {}, {
            fields: filter_fields_objectSpread(filter_fields_objectSpread({}, newField.fields), {}, filter_fields_defineProperty({}, subkey, newFields))
          });
        }
      });
    }
    return newField;
  }).filter(Boolean);

  // check if some element of the array is changed, keep instance consistency otherwise
  var hasChanges = fields.length !== newFields.length || fields.some(function (field, idx) {
    return field !== newFields[idx];
  });
  return hasChanges ? newFields : fields;
};

;// CONCATENATED MODULE: ./helpers/delete-field.js
function delete_field_typeof(obj) { "@babel/helpers - typeof"; return delete_field_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, delete_field_typeof(obj); }
function delete_field_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function delete_field_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? delete_field_ownKeys(Object(source), !0).forEach(function (key) { delete_field_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : delete_field_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function delete_field_defineProperty(obj, key, value) { key = delete_field_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function delete_field_toPropertyKey(arg) { var key = delete_field_toPrimitive(arg, "string"); return delete_field_typeof(key) === "symbol" ? key : String(key); }
function delete_field_toPrimitive(input, hint) { if (delete_field_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (delete_field_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var deleteField = function deleteField(form, field) {
  return delete_field_objectSpread(delete_field_objectSpread({}, form), {}, {
    fields: filterFields(form.fields, function (currentField) {
      return currentField.id !== field.id;
    })
  });
};

// EXTERNAL MODULE: ./node_modules/lodash/uniqueId.js
var uniqueId = __webpack_require__(3955);
var uniqueId_default = /*#__PURE__*/__webpack_require__.n(uniqueId);
;// CONCATENATED MODULE: ./helpers/fill-ids.js

function fill_ids_typeof(obj) { "@babel/helpers - typeof"; return fill_ids_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, fill_ids_typeof(obj); }
function fill_ids_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function fill_ids_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? fill_ids_ownKeys(Object(source), !0).forEach(function (key) { fill_ids_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : fill_ids_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function fill_ids_defineProperty(obj, key, value) { key = fill_ids_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function fill_ids_toPropertyKey(arg) { var key = fill_ids_toPrimitive(arg, "string"); return fill_ids_typeof(key) === "symbol" ? key : String(key); }
function fill_ids_toPrimitive(input, hint) { if (fill_ids_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (fill_ids_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var fillIds = function fillIds(fields) {
  var namespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return mapFields(fields, function (field) {
    // if not id, then create it
    if (!field.id) {
      return fill_ids_objectSpread({
        id: uniqueId_default()(namespace)
      }, field);
    }
    // special case of array
    //if (field.component === 'array') {
    //  field.fields = fillIds(field.fields);
    //}
    return field;
  });
};

// EXTERNAL MODULE: ./node_modules/lodash/pick.js
var pick = __webpack_require__(8718);
var pick_default = /*#__PURE__*/__webpack_require__.n(pick);
// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(7557);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);
// EXTERNAL MODULE: ./node_modules/lodash/isNumber.js
var isNumber = __webpack_require__(1763);
var isNumber_default = /*#__PURE__*/__webpack_require__.n(isNumber);
// EXTERNAL MODULE: ./node_modules/lodash/isBoolean.js
var isBoolean = __webpack_require__(1584);
var isBoolean_default = /*#__PURE__*/__webpack_require__.n(isBoolean);
// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(1609);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
// EXTERNAL MODULE: ./node_modules/lodash/keys.js
var keys = __webpack_require__(3674);
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);
// EXTERNAL MODULE: ./costants.js
var costants = __webpack_require__(8064);
;// CONCATENATED MODULE: ./helpers/is-i18n.js

var isI18n = function isI18n(obj) {
  return isObject_default()(obj) && Object.keys(obj).every(function (key) {
    return key.length === 2 || key.length === 5 && key[2] === '-';
  });
};
;// CONCATENATED MODULE: ./helpers/cleanup.js







function cleanup_typeof(obj) { "@babel/helpers - typeof"; return cleanup_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, cleanup_typeof(obj); }
function cleanup_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function cleanup_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? cleanup_ownKeys(Object(source), !0).forEach(function (key) { cleanup_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : cleanup_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function cleanup_defineProperty(obj, key, value) { key = cleanup_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function cleanup_toPropertyKey(arg) { var key = cleanup_toPrimitive(arg, "string"); return cleanup_typeof(key) === "symbol" ? key : String(key); }
function cleanup_toPrimitive(input, hint) { if (cleanup_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (cleanup_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var collectEmptyKeys = function collectEmptyKeys(obj) {
  return keys_default()(obj).filter(function (key) {
    return isEmpty_default()(obj[key]) && !(isBoolean_default()(obj[key]) || isNumber_default()(obj[key]));
  });
};
var removeEmptyKeys = function removeEmptyKeys(obj) {
  // collect all empty keys
  var emptyKeys = collectEmptyKeys(obj);
  // clone and remove id and empty keys
  return omit_default()(obj, emptyKeys);
};
var removeUnusedLocalesFromI18n = function removeUnusedLocalesFromI18n(obj, locales) {
  if (isArray_default()(locales) && !isEmpty_default()(locales)) {
    var keysToRemove = Object.keys(obj).filter(function (key) {
      return !locales.includes(key);
    });
    var cleaned = !isEmpty_default()(keysToRemove) ? omit_default()(obj, keysToRemove) : obj;
    if (Object.keys(cleaned).length !== 0) {
      return cleaned;
    }
    return null;
  } else {
    // no locales specified, so try to extract english dialect or the first available key
    if (obj['en-US']) {
      return obj['en-US'];
    } else if (obj['en-GB']) {
      return obj['en-GB'];
    } else if (Object.keys(obj).length !== 0) {
      return obj[Object.keys(obj)[0]];
    }
    return null;
  }
};
var removeUnusedLocalesFromObj = function removeUnusedLocalesFromObj(obj, locales) {
  var cloned = cleanup_objectSpread({}, obj);
  Object.keys(obj || {}).forEach(function (key) {
    if (isArray_default()(cloned[key])) {
      cloned[key] = cloned[key].map(function (item) {
        return removeUnusedLocalesFromObj(item, locales);
      });
    } else if (isI18n(cloned[key])) {
      cloned[key] = removeUnusedLocalesFromI18n(cloned[key], locales);
    } else if (key === 'validation' && isI18n(cloned.validation.message)) {
      cloned.validation = cleanup_objectSpread(cleanup_objectSpread({}, cloned.validation), {}, {
        message: removeUnusedLocalesFromI18n(cloned.validation.message, locales)
      });
    }
  });
  return cloned;
};
var removeUnusedTabs = function removeUnusedTabs(obj) {
  if (obj.component === 'tabs') {
    return cleanup_objectSpread(cleanup_objectSpread({}, obj), {}, {
      fields: pick_default()(obj.fields, (obj.tabs || []).map(function (tab) {
        return tab.value;
      }))
    });
  }
  return obj;
};

/**
 * cleanUp
 * Remove id from json file and all empty keys
 * @param {*} json
 * @returns
 */
var cleanUp = function cleanUp(json, framework) {
  var cloned = cleanup_objectSpread({}, json);

  // remove unused locales
  if (cloned.labelSubmit && isI18n(cloned.labelSubmit)) {
    cloned.labelSubmit = removeUnusedLocalesFromI18n(cloned.labelSubmit, json.locales);
  }
  if (cloned.labelCancel && isI18n(cloned.labelCancel)) {
    cloned.labelCancel = removeUnusedLocalesFromI18n(cloned.labelCancel, json.locales);
  }
  var emptyKeys = keys_default()(cloned).filter(function (key) {
    return isEmpty_default()(cloned[key]) && !(isBoolean_default()(cloned[key]) || isNumber_default()(cloned[key]));
  });
  var cleanedUp = omit_default()(cloned, emptyKeys);
  var newForm = cleanup_objectSpread(cleanup_objectSpread({}, cleanedUp), {}, {
    fields: mapFields(json.fields, function (field) {
      // clone and remove id
      var cloned = omit_default()(field, 'id');
      // clean all platform subkeys
      costants/* FRAMEWORKS.forEach */.MQ.forEach(function (key) {
        if (cloned[key]) {
          cloned[key] = removeEmptyKeys(cloned[key]);
          // remove if empty after cleaning
          if (Object.keys(cloned[key]).length === 0) {
            delete cloned[key];
          }
        }
      });
      // remove all other frameworks if one is specified
      if (framework) {
        costants/* FRAMEWORKS.filter */.MQ.filter(function (s) {
          return s !== framework;
        }).forEach(function (framework) {
          return delete cloned[framework];
        });
      }
      // collect all empty keys
      cloned = removeEmptyKeys(cloned);
      // cycle all keys and check if it's an i18n object
      cloned = removeUnusedLocalesFromObj(cloned, json.locales);
      // remove unused tabl
      cloned = removeUnusedTabs(cloned);
      return cloned;
    })
  });
  return newForm;
};

;// CONCATENATED MODULE: ./helpers/add-field.js

function add_field_typeof(obj) { "@babel/helpers - typeof"; return add_field_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, add_field_typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function add_field_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function add_field_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? add_field_ownKeys(Object(source), !0).forEach(function (key) { add_field_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : add_field_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function add_field_defineProperty(obj, key, value) { key = add_field_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function add_field_toPropertyKey(arg) { var key = add_field_toPrimitive(arg, "string"); return add_field_typeof(key) === "symbol" ? key : String(key); }
function add_field_toPrimitive(input, hint) { if (add_field_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (add_field_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/**
 * addField
 * @param {*} form The form to add the field to 
 * @param {*} newField The new field { component: '', ... } or array of fields
 * @param {*} id Id of the component to add the field to
 * @param {*} target the fields key of the components: "fields", "tabs", "leftFields", "rightFields", ...
 * @param {*} subtarget the index of the target in case it's an array
 * @returns 
 */
var addField = function addField(form, newField, id) {
  var target = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'fields';
  var subtarget = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  // can add multiple fields at once
  var toAdd = isArray_default()(newField) ? newField : [newField];
  if (id != null) {
    return add_field_objectSpread(add_field_objectSpread({}, form), {}, {
      fields: mapFields(form.fields,
      // if right field id, append to fields
      function (field) {
        if (field.id === id) {
          if (subtarget != null) {
            return add_field_objectSpread(add_field_objectSpread({}, field), {}, add_field_defineProperty({}, target, add_field_objectSpread(add_field_objectSpread({}, field[target] || []), {}, add_field_defineProperty({}, subtarget, [].concat(_toConsumableArray(field[target] && field[target][subtarget] ? field[target][subtarget] : []), _toConsumableArray(toAdd))))));
          } else {
            // old way
            return add_field_objectSpread(add_field_objectSpread({}, field), {}, add_field_defineProperty({}, target, [].concat(_toConsumableArray(field[target] || []), _toConsumableArray(toAdd))));
          }
        }
        return field;
      })
    });
  } else {
    return add_field_objectSpread(add_field_objectSpread({}, form), {}, {
      fields: [].concat(_toConsumableArray(form.fields), _toConsumableArray(toAdd))
    });
  }
};

// EXTERNAL MODULE: ./node_modules/lodash/clone.js
var clone = __webpack_require__(6678);
var clone_default = /*#__PURE__*/__webpack_require__.n(clone);
;// CONCATENATED MODULE: ./helpers/reduce-fields.js




function reduce_fields_typeof(obj) { "@babel/helpers - typeof"; return reduce_fields_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, reduce_fields_typeof(obj); }
function reduce_fields_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function reduce_fields_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? reduce_fields_ownKeys(Object(source), !0).forEach(function (key) { reduce_fields_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : reduce_fields_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function reduce_fields_defineProperty(obj, key, value) { key = reduce_fields_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function reduce_fields_toPropertyKey(arg) { var key = reduce_fields_toPrimitive(arg, "string"); return reduce_fields_typeof(key) === "symbol" ? key : String(key); }
function reduce_fields_toPrimitive(input, hint) { if (reduce_fields_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (reduce_fields_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var reduceFields = function reduceFields(fields, predicate) {
  var accumulator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var options = reduce_fields_objectSpread({
    'group': true,
    'array': true,
    'two-columns': true,
    'three-columns': true
  }, opts);
  if (isEmpty_default()(fields) || !isArray_default()(fields)) {
    return accumulator;
  }
  var result = clone_default()(accumulator);
  fields.forEach(function (field) {
    result = predicate(field, result);
    if (field.component === 'group' && options.group) {
      result = reduceFields(field.fields, predicate, result, opts);
    } else if (field.component === 'array' && options.array) {
      result = reduceFields(field.fields, predicate, result, opts);
    } else if (field.component === 'two-columns' && options['two-columns']) {
      result = reduceFields(field.leftFields, predicate, result, opts);
      result = reduceFields(field.rightFields, predicate, result, opts);
    } else if (field.component === 'three-columns' && options['three-columns']) {
      result = reduceFields(field.leftFields, predicate, result, opts);
      result = reduceFields(field.centerFields, predicate, result, opts);
      result = reduceFields(field.rightFields, predicate, result, opts);
    } else if (field.component === 'tabs' && isObject_default()(field.fields) && !isArray_default()(field.fields)) {
      var subkeys = Object.keys(field.fields);
      subkeys.forEach(function (subkey) {
        result = reduceFields(field.fields[subkey], predicate, result, opts);
      });
    }
  });
  return result;
};

;// CONCATENATED MODULE: ./helpers/find-field.js




function find_field_typeof(obj) { "@babel/helpers - typeof"; return find_field_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, find_field_typeof(obj); }
function find_field_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function find_field_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? find_field_ownKeys(Object(source), !0).forEach(function (key) { find_field_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : find_field_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function find_field_defineProperty(obj, key, value) { key = find_field_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function find_field_toPropertyKey(arg) { var key = find_field_toPrimitive(arg, "string"); return find_field_typeof(key) === "symbol" ? key : String(key); }
function find_field_toPrimitive(input, hint) { if (find_field_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (find_field_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var createEmptyField = function createEmptyField(Manifests, fields, component, framework) {
  var countFields = reduceFields(fields, function (field, accumulator) {
    return accumulator + 1;
  }, 0);
  var newId = uniqueId_default()("field_".concat(countFields + 1, "_"));
  var newName = "field_".concat(countFields + 1);
  var retries = 0;
  var exists = fieldExists(fields, function (field) {
    return field.name === newName || field.id === newId;
  });
  while (exists && retries < 100) {
    newId = newId + '_1';
    newName = newName + '_1';
    // eslint-disable-next-line no-loop-func
    exists = fieldExists(fields, function (field) {
      return field.name === newName || field.id === newId;
    });
    ++retries;
  }
  var newField = {
    component: component,
    label: "Field ".concat(countFields + 1),
    name: newName,
    id: newId
  };

  // if component has default values
  if (Manifests[component] && Manifests[component].defaultValues) {
    // apply all defaults for all platforms
    Object.keys(Manifests[component].defaultValues).forEach(function (framework) {
      newField = find_field_objectSpread(find_field_objectSpread({}, newField), Manifests[component].defaultValues[framework]);
    });
    // be sure to apply the current framework as last one (in case it includes non framework specific values)
    if (Manifests[component].defaultValues[framework]) {
      newField = find_field_objectSpread(find_field_objectSpread({}, newField), Manifests[component].defaultValues[framework]);
    }
  }
  return newField;
};
var findField = function findField(fields, predicate) {
  if (isEmpty_default()(fields) || !isArray_default()(fields)) {
    return null;
  }
  var found = fields.find(predicate);
  fields.forEach(function (field) {
    if (!found) {
      if (field.component === 'group' || field.component === 'array') {
        found = findField(field.fields, predicate);
      } else if (field.component === 'two-columns') {
        found = findField(field.leftFields, predicate) || findField(field.rightFields, predicate);
      } else if (field.component === 'three-columns') {
        found = findField(field.leftFields, predicate) || findField(field.centerFields, predicate) || findField(field.rightFields, predicate);
      } else if (field.component === 'tabs' && isObject_default()(field.fields) && !isArray_default()(field.fields)) {
        var subkeys = Object.keys(field.fields);
        subkeys.forEach(function (subkey) {
          if (!found) {
            var search = findField(field.fields[subkey], predicate);
            if (search) {
              found = search;
            }
          }
        });
      }
    }
  });
  return found;
};
var getFieldById = function getFieldById(fields, id) {
  return findField(fields, function (field) {
    return field.id === id;
  });
};
var fieldExists = function fieldExists(fields, predicate) {
  return findField(fields, predicate) != null;
};

;// CONCATENATED MODULE: ./helpers/apply-form-rules.js



function apply_form_rules_typeof(obj) { "@babel/helpers - typeof"; return apply_form_rules_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, apply_form_rules_typeof(obj); }
function apply_form_rules_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function apply_form_rules_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? apply_form_rules_ownKeys(Object(source), !0).forEach(function (key) { apply_form_rules_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : apply_form_rules_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function apply_form_rules_defineProperty(obj, key, value) { key = apply_form_rules_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function apply_form_rules_toPropertyKey(arg) { var key = apply_form_rules_toPrimitive(arg, "string"); return apply_form_rules_typeof(key) === "symbol" ? key : String(key); }
function apply_form_rules_toPrimitive(input, hint) { if (apply_form_rules_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (apply_form_rules_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var testCondition = function testCondition(condition) {
  var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if ((condition === null || condition === void 0 ? void 0 : condition.type) === 'checked' && !isEmpty_default()(condition === null || condition === void 0 ? void 0 : condition.field) && values[condition.field] === true) {
    return true;
  } else if ((condition === null || condition === void 0 ? void 0 : condition.type) === 'unchecked' && !isEmpty_default()(condition === null || condition === void 0 ? void 0 : condition.field) && values[condition.field] === false) {
    return true;
  } else if ((condition === null || condition === void 0 ? void 0 : condition.type) === 'eq' && !isEmpty_default()(condition === null || condition === void 0 ? void 0 : condition.field) && condition !== null && condition !== void 0 && condition.value &&
  // could be anything
  // eslint-disable-next-line eqeqeq
  values[condition.field] == condition.value) {
    return true;
  } else if ((condition === null || condition === void 0 ? void 0 : condition.type) === 'neq' && !isEmpty_default()(condition === null || condition === void 0 ? void 0 : condition.field) && condition !== null && condition !== void 0 && condition.value &&
  // could be anything
  // eslint-disable-next-line eqeqeq
  values[condition.field] != condition.value) {
    return true;
  } else if ((condition === null || condition === void 0 ? void 0 : condition.type) === 'not_empty' && !isEmpty_default()(condition === null || condition === void 0 ? void 0 : condition.field) &&
  // eslint-disable-next-line eqeqeq
  values[condition.field] != null && values[condition.field] !== '') {
    return true;
  } else if ((condition === null || condition === void 0 ? void 0 : condition.type) === 'empty' && !isEmpty_default()(condition === null || condition === void 0 ? void 0 : condition.field) && (
  // eslint-disable-next-line eqeqeq
  values[condition.field] == null || values[condition.field] === '')) {
    return true;
  }
  return false;
};
var testConditions = function testConditions(conditions, values) {
  if (isArray_default()(conditions)) {
    if (!isEmpty_default()(conditions)) {
      return conditions.every(function (condition) {
        return testCondition(condition, values);
      });
    }
    return false;
  }
  return testCondition(conditions, values);
};
var PREDICATES = {
  enable: function enable(names) {
    return function (field) {
      if (names.indexOf(field.name) !== -1) {
        return apply_form_rules_objectSpread(apply_form_rules_objectSpread({}, field), {}, {
          disabled: false
        });
      }
      return field;
    };
  },
  disable: function disable(names) {
    return function (field) {
      if (names.indexOf(field.name) !== -1) {
        return apply_form_rules_objectSpread(apply_form_rules_objectSpread({}, field), {}, {
          disabled: true
        });
      }
      return field;
    };
  },
  show: function show(names) {
    return function (field) {
      if (names.indexOf(field.name) !== -1) {
        return apply_form_rules_objectSpread(apply_form_rules_objectSpread({}, field), {}, {
          hidden: false
        });
      }
      return field;
    };
  },
  hide: function hide(names) {
    return function (field) {
      if (names.indexOf(field.name) !== -1) {
        return apply_form_rules_objectSpread(apply_form_rules_objectSpread({}, field), {}, {
          hidden: true
        });
      }
      return field;
    };
  },
  setValue: function setValue(names, object, condition, values) {
    return function (field) {
      if (names.indexOf(field.name) !== -1 && isObject_default()(object) && !isEmpty_default()(object.key) && !isEmpty_default()(object.value)) {
        return apply_form_rules_objectSpread(apply_form_rules_objectSpread({}, field), {}, apply_form_rules_defineProperty({}, object.key, evaluateValue(object.value, {
          values: values,
          condition: condition
        })));
      }
      return field;
    };
  }
};

// TODO implement more ${} tokens
var evaluateValue = function evaluateValue(value, _ref) {
  var values = _ref.values,
    condition = _ref.condition;
  // eslint-disable-next-line no-template-curly-in-string
  if (value === '${VALUE}') {
    return values[condition.field];
    // eslint-disable-next-line no-template-curly-in-string
  } else if (value === '${EMPTY}') {
    return '';
    // eslint-disable-next-line no-template-curly-in-string
  } else if (value === '${NULL}') {
    return null;
    // eslint-disable-next-line no-template-curly-in-string
  } else if (value === '${UNDEFINED}') {
    return null;
  } else {
    return value;
  }
};
var applyFormRules = function applyFormRules(fields, rules, values) {
  if (!Array.isArray(rules) || rules.length === 0) {
    return fields;
  }
  var newFields = fields;
  rules.forEach(function (rule) {
    // if test condition passes and exists a predicate, then execute it
    if (testConditions(rule.condition, values)) {
      // if there's a verb for it, then apply it
      if (PREDICATES[rule.verb]) {
        newFields = mapFields(newFields, PREDICATES[rule.verb](rule.names, rule.object, rule.condition, values));
      }
    }
  });
  return newFields;
};

;// CONCATENATED MODULE: ./helpers/validate-rules-definition.js
function validate_rules_definition_typeof(obj) { "@babel/helpers - typeof"; return validate_rules_definition_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, validate_rules_definition_typeof(obj); }
var validateRulesDefinition = function validateRulesDefinition(rules) {
  if (Array.isArray(rules)) {
    // empty is ok
    if (rules.length === 0) {
      return null;
    }
    var genericFormat = rules.every(function (rule) {
      return validate_rules_definition_typeof(rule) === 'object' && rule.condition != null && rule.verb != null;
    });
    return genericFormat ? null : 'Every rule should be an object with these keys: condition, verb and optionally names';
  }
  return 'Rules object is not an array';
};

// EXTERNAL MODULE: ./node_modules/lodash/isString.js
var isString = __webpack_require__(7037);
var isString_default = /*#__PURE__*/__webpack_require__.n(isString);
;// CONCATENATED MODULE: ./helpers/is-valid-dayjs-format.js


var DAYJS_VALID_TOKENS = ['YY', 'YYYY', 'M', 'MM', 'MMM', 'MMMM', 'D', 'DD', 'Do', 'd', 'dd', 'ddd', 'dddd', 'A', 'a', 'H', 'HH', 'h', 'hh', 'm', 'mm', 's', 'ss'];
var isValidDayjsFormat = function isValidDayjsFormat(str) {
  if (isString_default()(str) && !isEmpty_default()(str)) {
    var tokens = str.match(/([A-Za-z0-9]{1,})/gm);
    var isValid = tokens.every(function (t) {
      return DAYJS_VALID_TOKENS.includes(t);
    });
    if (!isValid) {
      console.error(["MUI: The token \"".concat(str, "\" is not supported by the Date and Time Pickers."), 'Please try using another token or open an issue on https://github.com/mui/mui-x/issues/new/choose if you think it should be supported.'].join('\n'));
    }
    return isValid;
  }
  return false;
};

;// CONCATENATED MODULE: ./common/data/locales.json
const locales_namespaceObject = JSON.parse('{"Q":{"af-ZA":["Afrikaans","Afrikaans"],"ar":["العربية","Arabic"],"bg-BG":["Български","Bulgarian"],"ca-AD":["Català","Catalan"],"cs-CZ":["Čeština","Czech"],"cy-GB":["Cymraeg","Welsh"],"da-DK":["Dansk","Danish"],"de-AT":["Deutsch (Österreich)","German (Austria)"],"de-CH":["Deutsch (Schweiz)","German (Switzerland)"],"de-DE":["Deutsch (Deutschland)","German (Germany)"],"el-GR":["Ελληνικά","Greek"],"en-GB":["English (UK)","English (UK)"],"en-US":["English (US)","English (US)"],"es-CL":["Español (Chile)","Spanish (Chile)"],"es-ES":["Español (España)","Spanish (Spain)"],"es-MX":["Español (México)","Spanish (Mexico)"],"et-EE":["Eesti keel","Estonian"],"eu":["Euskara","Basque"],"fa-IR":["فارسی","Persian"],"fi-FI":["Suomi","Finnish"],"fr-CA":["Français (Canada)","French (Canada)"],"fr-FR":["Français (France)","French (France)"],"he-IL":["עברית","Hebrew"],"hi-IN":["हिंदी","Hindi"],"hr-HR":["Hrvatski","Croatian"],"hu-HU":["Magyar","Hungarian"],"id-ID":["Bahasa Indonesia","Indonesian"],"is-IS":["Íslenska","Icelandic"],"it-IT":["Italiano","Italian"],"ja-JP":["日本語","Japanese"],"km-KH":["ភាសាខ្មែរ","Khmer"],"ko-KR":["한국어","Korean"],"la":["Latina","Latin"],"lt-LT":["Lietuvių kalba","Lithuanian"],"lv-LV":["Latviešu","Latvian"],"mn-MN":["Монгол","Mongolian"],"nb-NO":["Norsk bokmål","Norwegian (Bokmål)"],"nl-NL":["Nederlands","Dutch"],"nn-NO":["Norsk nynorsk","Norwegian (Nynorsk)"],"pl-PL":["Polski","Polish"],"pt-BR":["Português (Brasil)","Portuguese (Brazil)"],"pt-PT":["Português (Portugal)","Portuguese (Portugal)"],"ro-RO":["Română","Romanian"],"ru-RU":["Русский","Russian"],"sk-SK":["Slovenčina","Slovak"],"sl-SI":["Slovenščina","Slovenian"],"sr-RS":["Српски / Srpski","Serbian"],"sv-SE":["Svenska","Swedish"],"th-TH":["ไทย","Thai"],"tr-TR":["Türkçe","Turkish"],"uk-UA":["Українська","Ukrainian"],"vi-VN":["Tiếng Việt","Vietnamese"],"zh-CN":["中文 (中国大陆)","Chinese (PRC)"],"zh-TW":["中文 (台灣)","Chinese (Taiwan)"]}}');
;// CONCATENATED MODULE: ./helpers/get-locales.js

var LANGUAGES_OPTIONS = Object.keys(locales_namespaceObject.Q).map(function (lang) {
  return {
    code: lang,
    name: locales_namespaceObject.Q[lang][1],
    label: "".concat(locales_namespaceObject.Q[lang][1])
  };
});
var getLocales = function getLocales() {
  return LANGUAGES_OPTIONS;
};
;// CONCATENATED MODULE: ./helpers/i18n.js


var i18n = function i18n(value, locale) {
  if (isString_default()(value)) {
    // if string, then return it
    return value;
  } else if (isObject_default()(value)) {
    var language = (locale || 'en-US').substr(0, 2);
    // if exact match of the locale
    if (locale && value[locale]) {
      return value[locale];
    }
    // if there's no dialect, then try with the first two letters
    if (locale && value[language]) {
      return value[language];
    }
    // then try with another dialect, i.e. there are translations for fr-FR and
    // the locale is fr-CA, try first with any fr-FR if present
    var firstDialect = Object.keys(value).find(function (locale) {
      return locale.startsWith(language);
    });
    if (firstDialect) {
      return value[firstDialect];
    }
    // if nothing found, defaults to english but with warning
    if (value['en'] || value['en-UK'] || value['en-US']) {
      if (!locale) {
        console.warn("[LetsForm] missing locale for translation, defaulting to English: ", value);
      } else {
        console.warn("[LetsForm] missing translation for ".concat(locale, ", defaulting to English: "), value);
      }
      return value['en'] || value['en-UK'] || value['en-US'];
    }
    console.warn("[LetsForm] missing translation for ".concat(locale, ": "), value);
    return '';
  }
  return value;
};
;// CONCATENATED MODULE: ./helpers/pass-rest.js

var passRest = function passRest(props) {
  return omit_default()(props, 'lfFramework', 'lfComponent', 'lfLocale', 'transformer');
};
;// CONCATENATED MODULE: ./helpers/filter-options.js


var filterOptions = function filterOptions(options, filterValue) {
  var filterKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'value';
  if (isArray_default()(options) && !isEmpty_default()(filterKey) && !isEmpty_default()(filterValue)) {
    return options.filter(function (item) {
      return item[filterKey] === filterValue;
    });
  }
  return options;
};
;// CONCATENATED MODULE: ./helpers/is-empty-form.js
var isEmptyForm = function isEmptyForm(form) {
  return !form || !Array.isArray(form.fields) || form.fields.length === 0;
};
;// CONCATENATED MODULE: ./mappings.json
const mappings_namespaceObject = JSON.parse('{"input-text":{"name":null,"label":null,"hint":null,"placeholder":null,"disabled":null,"readOnly":null,"hidden":null,"fullWidth":["react","react-rsuite5","react-material-ui","react-bootstrap","react-antd"],"width":["react","react-rsuite5","react-material-ui","react-bootstrap","react-antd"],"size":["react-rsuite5","react-material-ui","react-bootstrap","react-antd"],"prefix":["react-rsuite5","react-material-ui","react-bootstrap","react-antd"],"inside":["react-rsuite5"],"postfix":["react-rsuite5","react-material-ui","react-bootstrap","react-antd"],"tooltip":["react-rsuite5","react-antd"],"variant":["react-material-ui"],"color":["react-material-ui"],"floatingLabel":["react-material-ui","react-bootstrap"],"disableUnderline":["react-material-ui"],"showCount":["react-antd"],"maxLength":["react-antd"],"allowClear":["react-antd"],"bordered":["react-antd"],"inputMode":null,"autocomplete":null,"inputType":null,"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"toggle":{"name":null,"label":null,"hint":null,"disabled":null,"readOnly":null,"hidden":null,"size":["react-rsuite5","react-material-ui","react-antd"],"checkedChildren":["react-rsuite5","react-antd"],"unCheckedChildren":["react-rsuite5","react-antd"],"tooltip":["react-rsuite5","react-antd"],"color":["react-material-ui"],"labelPlacement":["react-material-ui"],"disableRipple":["react-material-ui"],"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"select":{"name":null,"label":null,"hint":null,"placeholder":null,"options":null,"value":null,"image":null,"showImageOptions":null,"filterKey":null,"filterValue":null,"disabled":null,"readOnly":null,"hidden":null,"fullWidth":["react","react-material-ui","react-antd"],"width":["react","react-material-ui","react-antd"],"placement":["react-rsuite5","react-antd"],"size":["react-rsuite5","react-material-ui","react-bootstrap","react-antd"],"block":["react-rsuite5"],"searchable":["react-rsuite5"],"cleanable":["react-rsuite5"],"tooltip":["react-rsuite5","react-antd"],"appearance":["react-rsuite5"],"autoWidth":["react-material-ui"],"floatingLabel":["react-material-ui","react-bootstrap"],"variant":["react-material-ui"],"popupMatchSelectWidth":["react-antd"],"listHeight":["react-antd"],"allowClear":["react-antd"],"bordered":["react-antd"],"showSearch":["react-antd"],"showArrow":["react-antd"],"virtual":["react-antd"],"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"group":{"name":null,"label":null,"hidden":null,"align":null,"collapsible":null,"open":null,"bottomBorder":null},"two-columns":{"name":null,"layout":null,"leftAlignment":null,"rightAlignment":null,"hidden":null},"three-columns":{"name":null,"layout":null,"leftAlignment":null,"centerAlignment":null,"rightAlignment":null,"hidden":null},"array":{"name":null,"label":null,"hint":null,"disabled":null,"readOnly":null,"hidden":null,"layout":null,"arrayType":null,"tooltip":["react-rsuite5"],"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"input-number":{"name":null,"label":null,"hint":null,"placeholder":null,"disabled":null,"readOnly":null,"hidden":null,"size":["react-rsuite5","react-material-ui","react-bootstrap","react-antd"],"fullWidth":["react-rsuite5","react-material-ui","react-bootstrap","react-antd"],"width":["react-rsuite5","react-material-ui","react-bootstrap","react-antd"],"allowClear":["react-rsuite5"],"min":["react-rsuite5","react-bootstrap","react-antd"],"step":["react-rsuite5","react-bootstrap","react-antd"],"max":["react-rsuite5","react-bootstrap","react-antd"],"prefix":["react-rsuite5","react-material-ui","react-bootstrap"],"inside":["react-rsuite5"],"postfix":["react-rsuite5","react-material-ui","react-bootstrap"],"tooltip":["react-rsuite5","react-antd"],"variant":["react-material-ui"],"color":["react-material-ui"],"floatingLabel":["react-material-ui","react-bootstrap"],"disableUnderline":["react-material-ui"],"showControls":["react-antd"],"stringMode":["react-antd"],"bordered":["react-antd"],"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"slider":{"name":null,"label":["react-rsuite5","react-material-ui","react-antd"],"hint":null,"disabled":null,"readOnly":null,"hidden":null,"tooltip":["react-rsuite5"],"min":["react-rsuite5","react-material-ui","react-bootstrap","react-antd"],"step":["react-rsuite5","react-material-ui","react-bootstrap","react-antd"],"max":["react-rsuite5","react-material-ui","react-bootstrap","react-antd"],"vertical":["react-rsuite5"],"progress":["react-rsuite5"],"showTooltip":["react-rsuite5"],"graduated":["react-rsuite5"],"marks":["react-rsuite5","react-antd"],"value":["react-rsuite5","react-material-ui","react-antd"],"size":["react-material-ui"],"color":["react-material-ui"],"fullWidth":["react-material-ui"],"width":["react-material-ui"],"valueLabelDisplay":["react-material-ui"],"showMarks":["react-material-ui"],"customMarks":["react-material-ui"],"keyboard":["react-antd"],"dots":["react-antd"],"reverse":["react-antd"],"tooltipOpen":["react-antd"],"tooltipPlacement":["react-antd"],"included":["react-antd"],"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"date":{"name":null,"label":null,"hint":null,"placeholder":null,"disabled":null,"readOnly":null,"hidden":null,"format":["react-rsuite5","react-material-ui","react-antd"],"block":["react-rsuite5"],"cleanable":["react-rsuite5"],"editable":["react-rsuite5"],"oneTap":["react-rsuite5"],"showMeridian":["react-rsuite5"],"showWeekNumbers":["react-rsuite5"],"isoWeek":["react-rsuite5"],"size":["react-rsuite5","react-bootstrap","react-antd"],"appearance":["react-rsuite5"],"placement":["react-rsuite5","react-antd"],"fullWidth":["react-material-ui","react-bootstrap","react-antd"],"disableFuture":["react-material-ui"],"disableHighlightToday":["react-material-ui"],"disableOpenPicker":["react-material-ui"],"disablePast":["react-material-ui"],"displayWeekNumber":["react-material-ui"],"reduceAnimations":["react-material-ui"],"showDaysOutsideCurrentMonth":["react-material-ui"],"maxDate":["react-material-ui"],"minDate":["react-material-ui"],"views":["react-material-ui"],"prefix":["react-bootstrap"],"postfix":["react-bootstrap"],"floatingLabel":["react-bootstrap"],"width":["react-bootstrap","react-antd"],"bordered":["react-antd"],"allowClear":["react-antd"],"tooltip":["react-antd"],"showTime":["react-antd"],"showNow":["react-antd"],"showToday":["react-antd"],"picker":["react-antd"],"mode":["react-antd"],"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"checkbox":{"name":null,"label":null,"hint":null,"disabled":null,"readOnly":null,"hidden":null,"indeterminate":["react-rsuite5"],"tooltip":["react-rsuite5"],"size":["react-material-ui"],"color":["react-material-ui"],"labelPlacement":["react-material-ui"],"disableRipple":["react-material-ui"],"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"checkbox-group":{"name":null,"label":null,"hint":null,"options":null,"value":null,"disabled":null,"readOnly":null,"hidden":null,"inline":["react-rsuite5","react-bootstrap"],"tooltip":["react-rsuite5"],"size":["react-material-ui"],"color":["react-material-ui"],"labelPlacement":["react-material-ui"],"reverse":["react-bootstrap"],"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"radio-group":{"name":null,"label":null,"hint":null,"options":null,"value":null,"disabled":null,"readOnly":null,"hidden":null,"inline":["react-rsuite5","react-bootstrap","react-antd"],"appearance":["react-rsuite5"],"tooltip":["react-rsuite5","react-antd"],"size":["react-material-ui","react-antd"],"color":["react-material-ui"],"labelPlacement":["react-material-ui"],"row":["react-material-ui"],"reverse":["react-bootstrap"],"optionType":["react-antd"],"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"input-tag":{"name":null,"label":null,"hint":null,"disabled":null,"readOnly":null,"hidden":null,"trigger":["react-rsuite5"],"block":["react-rsuite5"],"size":["react-rsuite5"],"tooltip":["react-rsuite5"],"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"input-mask":{"name":null,"label":null,"hint":null,"placeholder":null,"disabled":null,"readOnly":null,"hidden":null,"mask":["react-rsuite5"],"guide":["react-rsuite5"],"keepCharPositions":["react-rsuite5"],"showMask":["react-rsuite5"],"placeholderChar":["react-rsuite5"],"fullWidth":["react-rsuite5"],"width":["react-rsuite5"],"size":["react-rsuite5"],"tooltip":["react-rsuite5"],"prefix":["react-rsuite5"],"inside":["react-rsuite5"],"postfix":["react-rsuite5"],"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"textarea":{"name":null,"label":null,"hint":null,"placeholder":null,"disabled":null,"readOnly":null,"hidden":null,"fullWidth":["react","react-rsuite5","react-material-ui","react-bootstrap","react-antd"],"width":["react","react-rsuite5","react-material-ui","react-bootstrap","react-antd"],"rows":["react","react-rsuite5","react-bootstrap"],"size":["react-rsuite5","react-material-ui","react-bootstrap","react-antd"],"tooltip":["react-rsuite5","react-antd"],"variant":["react-material-ui"],"color":["react-material-ui"],"floatingLabel":["react-material-ui"],"disableUnderline":["react-material-ui"],"maxRows":["react-material-ui"],"showCount":["react-antd"],"maxLength":["react-antd"],"allowClear":["react-antd"],"autoSize":["react-antd"],"bordered":["react-antd"],"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"rate":{"name":null,"label":null,"hint":null,"disabled":null,"readOnly":null,"hidden":null,"allowHalf":["react-rsuite5","react-antd"],"cleanable":["react-rsuite5"],"vertical":["react-rsuite5"],"max":["react-rsuite5","react-material-ui"],"color":["react-rsuite5"],"size":["react-rsuite5","react-material-ui"],"tooltip":["react-rsuite5","react-antd","react-antd"],"precision":["react-material-ui"],"count":["react-antd"],"allowClear":["react-antd"],"tooltips":["react-antd"],"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"placeholder":{"name":null,"label":null,"hint":null,"text":null,"hidden":null,"tooltip":["react-rsuite5","react-antd"],"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"multiselect":{"name":null,"label":null,"hint":null,"options":null,"value":null,"placeholder":null,"disabled":null,"readOnly":null,"hidden":null,"placement":["react-rsuite5","react-antd"],"size":["react-rsuite5","react-material-ui","react-antd"],"multiselectMode":["react-rsuite5"],"block":["react-rsuite5"],"searchable":["react-rsuite5"],"cleanable":["react-rsuite5"],"tooltip":["react-rsuite5","react-antd"],"preventOverflow":["react-rsuite5"],"autoWidth":["react-material-ui"],"fullWidth":["react-material-ui"],"width":["react-material-ui","react-antd"],"floatingLabel":["react-material-ui"],"variant":["react-material-ui"],"listHeight":["react-antd"],"allowClear":["react-antd"],"bordered":["react-antd"],"showSearch":["react-antd"],"showArrow":["react-antd"],"virtual":["react-antd"],"maxTagCount":["react-antd"],"maxTagPlaceholder":["react-antd"],"maxTagTextLength":["react-antd"],"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"multiselect-language":{"name":null,"label":null,"hint":null,"placeholder":null,"disabled":null,"readOnly":null,"hidden":null,"placement":["react-rsuite5"],"size":["react-rsuite5"],"tooltip":["react-rsuite5"],"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"input-text-i18n":{"name":null,"label":null,"hint":null,"placeholder":null,"disabled":null,"readOnly":null,"hidden":null,"size":["react-rsuite5"],"width":["react-rsuite5"],"textarea":["react-rsuite5"],"rows":["react-rsuite5"],"tooltip":["react-rsuite5"],"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"placeholder-image":{"name":null,"url":null,"align":null,"hidden":null,"maxWidth":["react","react-rsuite5","react-material-ui","react-bootstrap","react-antd"],"maxHeight":["react","react-rsuite5","react-material-ui","react-bootstrap","react-antd"],"marginTop":["react","react-rsuite5","react-material-ui","react-bootstrap","react-antd"],"marginBottom":["react","react-rsuite5","react-material-ui","react-bootstrap","react-antd"]},"button":{"name":null,"buttonType":null,"placeholderOn":null,"labelOn":null,"iconOn":null,"placeholderOff":null,"labelOff":null,"iconOff":null,"initialValue":null,"placeholder":null,"labelLink":null,"iconLink":null,"href":null,"hint":null,"fullWidth":null,"width":null,"hidden":null,"size":["react-rsuite5","react-material-ui","react-bootstrap","react-antd"],"appearance":["react-rsuite5"],"tooltip":["react-rsuite5"],"variant":["react-material-ui","react-bootstrap"],"color":["react-material-ui"],"type":["react-antd"]},"divider":{"name":null,"size":null,"color":null,"hidden":null},"datetime":{"name":null,"label":null,"hint":null,"placeholder":null,"disabled":null,"readOnly":null,"hidden":null,"format":["react-rsuite5","react-material-ui","react-antd"],"block":["react-rsuite5"],"cleanable":["react-rsuite5"],"editable":["react-rsuite5"],"oneTap":["react-rsuite5"],"showMeridian":["react-rsuite5"],"showWeekNumbers":["react-rsuite5"],"isoWeek":["react-rsuite5"],"size":["react-rsuite5","react-bootstrap","react-antd"],"appearance":["react-rsuite5"],"placement":["react-rsuite5","react-antd"],"fullWidth":["react-material-ui","react-bootstrap","react-antd"],"disableFuture":["react-material-ui"],"disableHighlightToday":["react-material-ui"],"disableOpenPicker":["react-material-ui"],"disablePast":["react-material-ui"],"displayWeekNumber":["react-material-ui"],"reduceAnimations":["react-material-ui"],"showDaysOutsideCurrentMonth":["react-material-ui"],"maxDate":["react-material-ui"],"minDate":["react-material-ui"],"views":["react-material-ui"],"prefix":["react-bootstrap"],"postfix":["react-bootstrap"],"floatingLabel":["react-bootstrap"],"width":["react-bootstrap","react-antd"],"bordered":["react-antd"],"allowClear":["react-antd"],"tooltip":["react-antd"],"showNow":["react-antd"],"showToday":["react-antd"],"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"tabs":{"name":null,"label":null,"hint":null,"tabs":null,"value":null,"hidden":null,"appearance":["react-rsuite5"],"reversed":["react-rsuite5"],"justified":["react-rsuite5"],"indicatorColor":["react-material-ui"],"textColor":["react-material-ui"],"centered":["react-material-ui","react-antd"],"fullWidth":["react-material-ui"],"variant":["react-bootstrap"],"transition":["react-bootstrap"],"fill":["react-bootstrap"],"justify":["react-bootstrap"],"size":["react-antd"],"tabType":["react-antd"],"animated":["react-antd"],"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"radio-tile":{"name":null,"label":null,"hint":null,"options":null,"value":null,"description":null,"icon":null,"initalOption":null,"disabled":null,"hidden":null,"inline":["react-rsuite5"],"iconWidth":["react-rsuite5"],"iconHeight":["react-rsuite5"],"tooltip":["react-rsuite5"],"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"upload":{"name":null,"label":null,"hint":null,"disabled":null,"hidden":null,"accept":["react-rsuite5","react-antd"],"acceptedFile":["react-rsuite5","react-antd"],"listType":["react-rsuite5","react-antd"],"maxPreviewFileSize":["react-rsuite5"],"tooltip":["react-rsuite5","react-antd"],"fileListVisible":["react-rsuite5"],"disabledFileItem":["react-rsuite5"],"multiple":["react-rsuite5","react-antd"],"removable":["react-rsuite5"],"draggable":["react-rsuite5","react-antd"],"uploadButtonLabel":["react-rsuite5","react-antd"],"uploadButtonAppearance":["react-rsuite5","react-antd"],"uploadButtonSize":["react-rsuite5","react-antd"],"draggableText":["react-rsuite5","react-antd"],"draggableHeight":["react-rsuite5","react-antd"],"maxCount":["react-antd"],"showUploadList":["react-antd"],"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"buttons-toggle-group":{"name":null,"label":null,"hint":null,"options":null,"value":null,"multiple":null,"disabled":null,"readOnly":null,"hidden":null,"size":["react-rsuite5","react-antd"],"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null}}');
;// CONCATENATED MODULE: ./helpers/apply-transformers.js




function apply_transformers_typeof(obj) { "@babel/helpers - typeof"; return apply_transformers_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, apply_transformers_typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == apply_transformers_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function apply_transformers_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function apply_transformers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? apply_transformers_ownKeys(Object(source), !0).forEach(function (key) { apply_transformers_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : apply_transformers_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function apply_transformers_defineProperty(obj, key, value) { key = apply_transformers_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function apply_transformers_toPropertyKey(arg) { var key = apply_transformers_toPrimitive(arg, "string"); return apply_transformers_typeof(key) === "symbol" ? key : String(key); }
function apply_transformers_toPrimitive(input, hint) { if (apply_transformers_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (apply_transformers_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _awaitAsyncGenerator(value) { return new _OverloadYield(value, 0); }
function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }
function _AsyncGenerator(gen) { var front, back; function resume(key, arg) { try { var result = gen[key](arg), value = result.value, overloaded = value instanceof _OverloadYield; Promise.resolve(overloaded ? value.v : value).then(function (arg) { if (overloaded) { var nextKey = "return" === key ? "return" : "next"; if (!value.k || arg.done) return resume(nextKey, arg); arg = gen[nextKey](arg).value; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: !0 }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: !1 }); } (front = front.next) ? resume(front.key, front.arg) : back = null; } this._invoke = function (key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; back ? back = back.next = request : (front = back = request, resume(key, arg)); }); }, "function" != typeof gen.return && (this.return = void 0); }
_AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function () { return this; }, _AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); }, _AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); }, _AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };
function _OverloadYield(value, kind) { this.v = value, this.k = kind; }
function _asyncIterator(iterable) { var method, async, sync, retry = 2; for ("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;) { if (async && null != (method = iterable[async])) return method.call(iterable); if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable)); async = "@@asyncIterator", sync = "@@iterator"; } throw new TypeError("Object is not async iterable"); }
function AsyncFromSyncIterator(s) { function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object.")); var done = r.done; return Promise.resolve(r.value).then(function (value) { return { value: value, done: done }; }); } return AsyncFromSyncIterator = function AsyncFromSyncIterator(s) { this.s = s, this.n = s.next; }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, return: function _return(value) { var ret = this.s.return; return void 0 === ret ? Promise.resolve({ value: value, done: !0 }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments)); }, throw: function _throw(value) { var thr = this.s.return; return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments)); } }, new AsyncFromSyncIterator(s); }



// cannot import manifest, need to stay in the other repo
// this is going open source, while the manifests are ip


var translateValidationKey = function translateValidationKey(str) {
  if (str.startsWith('validation')) {
    str = str.replace(/^validation/, '');
    if (str.length !== 0) {
      str = str[0].toLowerCase() + str.slice(1);
    }
    return str;
  } else {
    return str;
  }
};
var ApiFactory = function ApiFactory(formName, framework, formFields, currenValues) {
  var _fields = formFields;
  var fieldExists = function fieldExists(name) {
    if (findField(_fields, function (field) {
      return field.name === name;
    }) != null) {
      return true;
    } else {
      throw new Error("Field \"".concat(name, "\" doesn't exist in the form"));
    }
  };
  return {
    fields: function fields() {
      return _fields;
    },
    element: function element(name) {
      if (!fieldExists(name)) {
        return;
      }
      var form = document.querySelector("[data-lf-form-name=".concat(formName, "]"));
      if (form) {
        return form.querySelector("[data-lf-field-name=".concat(name, "]"));
      }
      return null;
    },
    style: function style(name, prop, value) {
      if (!fieldExists(name)) {
        return;
      }
      // find the form, then the element, then apply the style
      var form = document.querySelector("[data-lf-form-name=".concat(formName, "]"));
      if (form) {
        var element = form.querySelector("[data-lf-field-name=".concat(name, "]"));
        if (element) {
          if (isString_default()(prop)) {
            element.style[prop] = value;
          } else if (isObject_default()(prop)) {
            Object.keys(prop).forEach(function (key) {
              return element.style[key] = prop[key];
            });
          }
        }
      }
    },
    css: function css(className, obj) {
      // find the form
      var form = document.querySelector("[data-lf-form-name=".concat(formName, "]"));
      if (form) {
        var element = form.querySelector(className);
        if (element && isObject_default()(obj)) {
          Object.keys(obj).forEach(function (key) {
            return element.style[key] = obj[key];
          });
        }
      }
    },
    setValue: function setValue(name, key, value) {
      if (!fieldExists(name)) {
        return;
      }
      _fields = mapFields(_fields, function (field) {
        if (field.name === name) {
          // check if the field exists in the manifest mapping
          // and if needs to be added in a framework sub set
          if (mappings_namespaceObject[field.component] && mappings_namespaceObject[field.component][key] !== undefined) {
            if (mappings_namespaceObject[field.component][key] === null) {
              // key property exists but it's just common property to all frameworks
              return apply_transformers_objectSpread(apply_transformers_objectSpread({}, field), {}, apply_transformers_defineProperty({}, key, value));
            } else if (mappings_namespaceObject[field.component][key] === 'validation') {
              var _field$validation;
              // handle special case of validation fields
              return apply_transformers_objectSpread(apply_transformers_objectSpread({}, field), {}, {
                validation: apply_transformers_objectSpread(apply_transformers_objectSpread({}, (_field$validation = field.validation) !== null && _field$validation !== void 0 ? _field$validation : {}), {}, apply_transformers_defineProperty({}, translateValidationKey(key), value))
              });
              // handle special case of validation
            } else if (isArray_default()(mappings_namespaceObject[field.component][key]) && mappings_namespaceObject[field.component][key].includes(framework)) {
              var _field$framework;
              // key property it's a framework specific key, belongs to one or more frameworks, so it must be
              // set in the specific subset, use the current framework so set it
              return apply_transformers_objectSpread(apply_transformers_objectSpread({}, field), {}, apply_transformers_defineProperty({}, framework, apply_transformers_objectSpread(apply_transformers_objectSpread({}, (_field$framework = field[framework]) !== null && _field$framework !== void 0 ? _field$framework : {}), {}, apply_transformers_defineProperty({}, key, value))));
            } else {
              console.warning("[LetsForm] cannot set key \"".concat(key, "\" for component \"").concat(field.component, "\" in framework \"").concat(framework, "\""));
            }
          } else {
            console.error("[LetsForm] cannot set key \"".concat(key, "\" for component \"").concat(field.component, "\""));
          }
        }
        return field;
      });
    },
    enable: function enable(name) {
      if (!fieldExists(name)) {
        return;
      }
      _fields = mapFields(_fields, function (field) {
        if (field.name === name) {
          return apply_transformers_objectSpread(apply_transformers_objectSpread({}, field), {}, {
            disabled: false
          });
        }
        return field;
      });
    },
    disable: function disable(name) {
      if (!fieldExists(name)) {
        return;
      }
      _fields = mapFields(_fields, function (field) {
        if (field.name === name) {
          return apply_transformers_objectSpread(apply_transformers_objectSpread({}, field), {}, {
            disabled: true
          });
        }
        return field;
      });
    },
    show: function show(name) {
      if (!fieldExists(name)) {
        return;
      }
      _fields = mapFields(_fields, function (field) {
        if (field.name === name) {
          return apply_transformers_objectSpread(apply_transformers_objectSpread({}, field), {}, {
            hidden: false
          });
        }
        return field;
      });
    },
    hide: function hide(name) {
      if (!fieldExists(name)) {
        return;
      }
      _fields = mapFields(_fields, function (field) {
        if (field.name === name) {
          return apply_transformers_objectSpread(apply_transformers_objectSpread({}, field), {}, {
            hidden: true
          });
        }
        return field;
      });
    },
    /**
     * Change field property inside and array
     * @param {*} arrayName
     * @param {*} arrayFieldName
     * @param {*} key
     * @param {*} value
     * @returns
     */
    arraySetValue: function arraySetValue(arrayName, arrayFieldName, key, value) {
      if (!fieldExists(arrayName)) {
        return;
      }
      _fields = mapFields(_fields, function (arrayField) {
        if (arrayField.component === 'array' && arrayField.name === arrayName) {
          var newFields = mapFields(arrayField.fields, function (field) {
            if (field.name === arrayFieldName) {
              return apply_transformers_objectSpread(apply_transformers_objectSpread({}, field), {}, apply_transformers_defineProperty({}, key, value));
            }
            return field;
          });
          return apply_transformers_objectSpread(apply_transformers_objectSpread({}, arrayField), {}, {
            fields: newFields
          });
        }
        return arrayField;
      });
    },
    values: Object.freeze(apply_transformers_objectSpread({}, currenValues))
  };
};
var applyTransformers = /*#__PURE__*/function () {
  var _ref = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(formName, framework, fields, transformers, values, onJavascriptError) {
    var newFields, txs, idx, api, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, f, error;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(isArray_default()(transformers) && !isEmpty_default()(transformers))) {
            _context.next = 52;
            break;
          }
          newFields = fields; // apply all transformers
          txs = transformers;
          /*.filter(transformer => _.isFunction(transformer))*/
          idx = 0;
        case 4:
          if (!(idx < txs.length)) {
            _context.next = 48;
            break;
          }
          api = new ApiFactory(formName, framework, newFields, values);
          _context.prev = 6;
          //newFields = await txs[idx](api);
          //console.log('sto per chiamare', txs[idx])
          _iteratorAbruptCompletion = false;
          _didIteratorError = false;
          _context.prev = 9;
          _iterator = _asyncIterator(txs[idx](api));
        case 11:
          _context.next = 13;
          return _awaitAsyncGenerator(_iterator.next());
        case 13:
          if (!(_iteratorAbruptCompletion = !(_step = _context.sent).done)) {
            _context.next = 21;
            break;
          }
          f = _step.value;
          newFields = f;
          _context.next = 18;
          return f;
        case 18:
          _iteratorAbruptCompletion = false;
          _context.next = 11;
          break;
        case 21:
          _context.next = 27;
          break;
        case 23:
          _context.prev = 23;
          _context.t0 = _context["catch"](9);
          _didIteratorError = true;
          _iteratorError = _context.t0;
        case 27:
          _context.prev = 27;
          _context.prev = 28;
          if (!(_iteratorAbruptCompletion && _iterator.return != null)) {
            _context.next = 32;
            break;
          }
          _context.next = 32;
          return _awaitAsyncGenerator(_iterator.return());
        case 32:
          _context.prev = 32;
          if (!_didIteratorError) {
            _context.next = 35;
            break;
          }
          throw _iteratorError;
        case 35:
          return _context.finish(32);
        case 36:
          return _context.finish(27);
        case 37:
          _context.next = 45;
          break;
        case 39:
          _context.prev = 39;
          _context.t1 = _context["catch"](6);
          console.error('[LetsForm] Error on transformer: ', _context.t1);
          error = new Error('Error executing transformer: ' + _context.t1.message, {
            cause: _context.t1
          });
          error.errorType = 'runtime';
          onJavascriptError(error);
        case 45:
          idx++;
          _context.next = 4;
          break;
        case 48:
          _context.next = 50;
          return newFields;
        case 50:
          _context.next = 54;
          break;
        case 52:
          _context.next = 54;
          return fields;
        case 54:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[6, 39], [9, 23, 27, 37], [28,, 32, 36]]);
  }));
  return function applyTransformers(_x, _x2, _x3, _x4, _x5, _x6) {
    return _ref.apply(this, arguments);
  };
}();

;// CONCATENATED MODULE: ./helpers/is-url.js

var isUrl = function isUrl(url) {
  return isString_default()(url) && url.match(/^http[s]{0,1}:\/\//);
};
;// CONCATENATED MODULE: ./helpers/make-width-style.js
function make_width_style_typeof(obj) { "@babel/helpers - typeof"; return make_width_style_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, make_width_style_typeof(obj); }
function make_width_style_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function make_width_style_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? make_width_style_ownKeys(Object(source), !0).forEach(function (key) { make_width_style_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : make_width_style_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function make_width_style_defineProperty(obj, key, value) { key = make_width_style_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function make_width_style_toPropertyKey(arg) { var key = make_width_style_toPrimitive(arg, "string"); return make_width_style_typeof(key) === "symbol" ? key : String(key); }
function make_width_style_toPrimitive(input, hint) { if (make_width_style_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (make_width_style_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var makeWidthStyle = function makeWidthStyle(fullWidth, width) {
  var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (fullWidth) {
    return make_width_style_objectSpread(make_width_style_objectSpread({}, style), {}, {
      width: '100%'
    });
  } else if (width) {
    return make_width_style_objectSpread(make_width_style_objectSpread({}, style), {}, {
      width: "".concat(parseInt(width, 10), "px")
    });
  }
  return make_width_style_objectSpread(make_width_style_objectSpread({}, style), {}, {
    width: 'auto'
  });
};
;// CONCATENATED MODULE: ./helpers/collect-names.js


function collect_names_toConsumableArray(arr) { return collect_names_arrayWithoutHoles(arr) || collect_names_iterableToArray(arr) || collect_names_unsupportedIterableToArray(arr) || collect_names_nonIterableSpread(); }
function collect_names_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function collect_names_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return collect_names_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return collect_names_arrayLikeToArray(o, minLen); }
function collect_names_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function collect_names_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return collect_names_arrayLikeToArray(arr); }
function collect_names_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var collectNames = function collectNames(form) {
  if (form && isArray_default()(form.fields) && !isEmpty_default()(form.fields)) {
    return reduceFields(form.fields, function (field, accumulator) {
      if (!accumulator.includes(field.name)) {
        return [].concat(collect_names_toConsumableArray(accumulator), [field.name]);
      }
      return accumulator;
    }, []);
  }
  return [];
};
;// CONCATENATED MODULE: ./helpers/is-valid-date.js
var isValidDate = function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
};
;// CONCATENATED MODULE: ./helpers/form-helper.js

function form_helper_typeof(obj) { "@babel/helpers - typeof"; return form_helper_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, form_helper_typeof(obj); }
function form_helper_toConsumableArray(arr) { return form_helper_arrayWithoutHoles(arr) || form_helper_iterableToArray(arr) || form_helper_unsupportedIterableToArray(arr) || form_helper_nonIterableSpread(); }
function form_helper_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function form_helper_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return form_helper_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return form_helper_arrayLikeToArray(o, minLen); }
function form_helper_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function form_helper_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return form_helper_arrayLikeToArray(arr); }
function form_helper_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function form_helper_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function form_helper_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? form_helper_ownKeys(Object(source), !0).forEach(function (key) { form_helper_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : form_helper_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function form_helper_defineProperty(obj, key, value) { key = form_helper_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function form_helper_toPropertyKey(arg) { var key = form_helper_toPrimitive(arg, "string"); return form_helper_typeof(key) === "symbol" ? key : String(key); }
function form_helper_toPrimitive(input, hint) { if (form_helper_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (form_helper_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var formHelper = function formHelper(_form2) {
  var _form = form_helper_objectSpread({}, _form2);
  var _fields = form_helper_toConsumableArray(_form2.fields);
  var _skip = false;
  var makeHelper = function makeHelper(params) {
    return function (fieldName) {
      var fieldNames = Array.isArray(fieldName) ? fieldName : [fieldName];
      _fields = mapFields(_fields, function (field) {
        if (fieldNames.includes(field.name)) {
          return form_helper_objectSpread(form_helper_objectSpread({}, field), params);
        }
        return field;
      });
      return obj;
    };
  };
  var obj = {
    filter: function filter(predicate) {
      _fields = filterFields(_fields, predicate);
      return obj;
    },
    enable: makeHelper({
      disabled: false
    }),
    disable: makeHelper({
      disabled: true
    }),
    hide: makeHelper({
      hidden: true
    }),
    show: makeHelper({
      hidden: false
    }),
    set: function set(key, value) {
      _form[key] = value;
      return obj;
    },
    map: function map(predicate) {
      _fields = mapFields(_fields, predicate);
      return obj;
    },
    skip: function skip(_skip2) {
      _skip = _skip2;
      return obj;
    },
    setField: function setField(fieldName, key, value) {
      var toReplace = isObject_default()(key) ? key : form_helper_defineProperty({}, key, value);
      _fields = mapFields(_fields, function (field) {
        if (field.name === fieldName) {
          return form_helper_objectSpread(form_helper_objectSpread({}, field), toReplace);
        }
        return field;
      });
      return obj;
    },
    form: function form() {
      // if skip, then just return the same form
      if (_skip) {
        return _form2;
      }
      return form_helper_objectSpread(form_helper_objectSpread({}, _form), {}, {
        fields: _fields
      });
    }
  };
  return obj;
};

;// CONCATENATED MODULE: ./helpers/i18n-options.js
function i18n_options_typeof(obj) { "@babel/helpers - typeof"; return i18n_options_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, i18n_options_typeof(obj); }
function i18n_options_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function i18n_options_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? i18n_options_ownKeys(Object(source), !0).forEach(function (key) { i18n_options_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : i18n_options_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function i18n_options_defineProperty(obj, key, value) { key = i18n_options_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function i18n_options_toPropertyKey(arg) { var key = i18n_options_toPrimitive(arg, "string"); return i18n_options_typeof(key) === "symbol" ? key : String(key); }
function i18n_options_toPrimitive(input, hint) { if (i18n_options_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (i18n_options_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var i18nOptions = function i18nOptions(value, i18n) {
  return (value !== null && value !== void 0 ? value : []).filter(function (value) {
    return value != null;
  }).map(function (value) {
    return i18n_options_objectSpread(i18n_options_objectSpread({}, value), {}, {
      label: i18n(value.label)
    });
  });
};
;// CONCATENATED MODULE: ./helpers/is-children-of.js
function is_children_of_typeof(obj) { "@babel/helpers - typeof"; return is_children_of_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, is_children_of_typeof(obj); }


function is_children_of_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function is_children_of_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? is_children_of_ownKeys(Object(source), !0).forEach(function (key) { is_children_of_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : is_children_of_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function is_children_of_defineProperty(obj, key, value) { key = is_children_of_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function is_children_of_toPropertyKey(arg) { var key = is_children_of_toPrimitive(arg, "string"); return is_children_of_typeof(key) === "symbol" ? key : String(key); }
function is_children_of_toPrimitive(input, hint) { if (is_children_of_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (is_children_of_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function is_children_of_toConsumableArray(arr) { return is_children_of_arrayWithoutHoles(arr) || is_children_of_iterableToArray(arr) || is_children_of_unsupportedIterableToArray(arr) || is_children_of_nonIterableSpread(); }
function is_children_of_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function is_children_of_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return is_children_of_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return is_children_of_arrayLikeToArray(o, minLen); }
function is_children_of_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function is_children_of_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return is_children_of_arrayLikeToArray(arr); }
function is_children_of_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var collectIds = function collectIds(fields) {
  return reduceFields(fields || [], function (field, accumulator) {
    if (!accumulator.includes(field.id)) {
      return [].concat(is_children_of_toConsumableArray(accumulator), [field.id]);
    }
    return accumulator;
  }, []);
};

/**
 * isChildrenOf
 * Returns true if the field (id: fieldId) is a child (nested field) of a field with id parentFieldId
 * @param {*} fieldId 
 * @param {*} parentFieldId 
 * @param {*} fields 
 * @returns 
 */
var isChildrenOf = function isChildrenOf(fieldId, parentFieldId, fields) {
  if (isEmpty_default()(parentFieldId) || isEmpty_default()(fieldId)) {
    return false;
  }
  // for each fields, collect all subIds
  var obj = reduceFields(fields, function (field, accumulator) {
    if (field.fields || field.leftFields || field.rightFields || field.centerFields) {
      accumulator = is_children_of_objectSpread(is_children_of_objectSpread({}, accumulator), {}, is_children_of_defineProperty({}, field.id, collectIds([field])));
    }
    return accumulator;
  }, {});
  // then check if parentFieldIs contains as subfield with this id
  if (obj && isArray_default()(obj[parentFieldId])) {
    return obj[parentFieldId].includes(fieldId);
  }
  return false;
};

// EXTERNAL MODULE: ./node_modules/lodash/uniq.js
var uniq = __webpack_require__(4908);
var uniq_default = /*#__PURE__*/__webpack_require__.n(uniq);
;// CONCATENATED MODULE: ./manifest.json
const manifest_namespaceObject = JSON.parse('{"input-text":{"label":"Input Text","category":"general","name":"input-text","description":"Basic input text","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"placeholder","type":"string | i18n","description":"Placeholder text, visibile when the field is empty"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"readOnly","type":"boolean","description":"Put the field in read only mode"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"},{"name":"inputMode","type":"string","options":["none","text","decimal","numeric","tel","search","email","url"]},{"name":"autocomplete","type":"string","options":["off","on","name","honorific-prefix","given-name","additional-name","family-name","honorific-suffix","nickname","email","username","new-password","current-password","one-time-code","organization-title","organization","street-address","address-line1","address-line2","address-line3","address-level4","address-level3","address-level2","address-level1","country","country-name","postal-code","cc-name","cc-given-name","cc-additional-name","cc-family-name","cc-number","cc-exp","cc-exp-month","cc-exp-year","cc-csc","cc-type","transaction-currency","transaction-amount","language","bday","bday-day","bday-month","bday-year","sex","tel","tel-country-code","tel-national","tel-area-code","tel-local","tel-extension","impp","url","photo"]},{"name":"inputType","type":"string","description":"Set the HTML 5 input type, some framework may have specific components for some of these type","options":["button","checkbox","color","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"]}],"react":[{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"}],"react-rsuite5":[{"name":"size","type":"string","description":"Size of the field","options":["lg","md","sm","xs"]},{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"prefix","type":"string","description":"Fixed heading text"},{"name":"inside","type":"boolean","description":"Show prefix and postfix inside the input box"},{"name":"postfix","type":"string","description":"Fixed trailing text"},{"name":"tooltip","type":"boolean","description":"Show hint as tooltip next to label"}],"react-material-ui":[{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"size","type":"string","description":"Size of the field","options":["small","medium"]},{"name":"variant","type":"string","options":["outlined","filled","standard"]},{"name":"color","type":"string","options":["error","info","primary","secondary","success","warning"]},{"name":"floatingLabel","type":"boolean","description":"Show floating label for the control"},{"name":"disableUnderline","type":"boolean","description":"Disable underline in \\"filled\\" and \\"standard\\" variant"},{"name":"prefix","type":"string","description":"Fixed heading text"},{"name":"postfix","type":"string","description":"Fixed trailing text"}],"react-bootstrap":[{"name":"size","type":"string","description":"Size of the field","options":["lg","sm"]},{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"prefix","type":"string","description":"Fixed heading text"},{"name":"postfix","type":"string","description":"Fixed trailing text"},{"name":"floatingLabel","type":"boolean","description":"Enable floating labels with Bootstrap’s textual form fields, not available with prefix/postfix"}],"react-antd":[{"name":"size","type":"string","description":"Size of the field","options":["small","default","large"]},{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"prefix","type":"string","description":"Fixed heading text"},{"name":"postfix","type":"string","description":"Fixed trailing text"},{"name":"showCount","type":"boolean"},{"name":"maxLength","type":"number"},{"name":"allowClear","type":"boolean"},{"name":"tooltip","type":"boolean"},{"name":"bordered","type":"boolean"}],"frameworks":["react-rsuite5","react-material-ui","react","react-bootstrap","react-antd"]},"toggle":{"label":"Toggle","category":"general","name":"toggle","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"readOnly","type":"boolean","description":"Put the field in read only mode"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react-rsuite5":[{"name":"size","type":"string","description":"Size of the field","options":["lg","md","sm","xs"]},{"name":"checkedChildren","type":"string | i18n"},{"name":"unCheckedChildren","type":"string | i18n"},{"name":"tooltip","type":"boolean","description":"Show hint as tooltip next to label"}],"react-material-ui":[{"name":"size","type":"string","description":"Size of the field","options":["small","medium","large"]},{"name":"color","type":"string","options":["error","info","primary","secondary","success","warning"]},{"name":"labelPlacement","type":"string","options":["top","start","bottom","end"]},{"name":"disableRipple","type":"boolean","description":"Disable CSS ripple effect"}],"react-antd":[{"name":"size","type":"string","description":"Size of the field","options":["default","small"]},{"name":"tooltip","type":"boolean"},{"name":"checkedChildren","type":"string | i18n"},{"name":"unCheckedChildren","type":"string | i18n"}],"frameworks":["react-rsuite5","react-material-ui","react-bootstrap","react-antd"]},"select":{"label":"Select","category":"general","description":"Select / Combo box","name":"select","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"placeholder","type":"string | i18n","description":"Placeholder text, visibile when the field is empty"},{"name":"options","type":"array"},{"name":"showImageOptions","type":"boolean","description":"Show image field for Select options to be displayed in the drop-down"},{"name":"filterKey","type":"string"},{"name":"filterValue","type":"string"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"readOnly","type":"boolean","description":"Put the field in read only mode"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react":[{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"}],"react-rsuite5":[{"name":"placement","type":"string","options":["topStart","topEnd","leftStart","rightStart","leftEnd","rightEnd","bottomStart","bottomEnd","auto","autoVerticalStart","autoVerticalEnd","autoHorizontalStart","autoHorizontalEnd"]},{"name":"size","type":"string","description":"Size of the field","options":["lg","md","sm","xs"]},{"name":"block","type":"boolean","description":"Only in fluid layout"},{"name":"searchable","type":"boolean"},{"name":"cleanable","type":"boolean"},{"name":"tooltip","type":"boolean","description":"Show hint as tooltip next to label"},{"name":"appearance","type":"string","options":["default","subtle"]}],"react-material-ui":[{"name":"size","type":"string","description":"Size of the field","options":["small","medium"]},{"name":"autoWidth","type":"boolean","description":"If true, the width of the popover will automatically be set according to the items inside the menu, otherwise it will be at least the width of the select input."},{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"floatingLabel","type":"boolean","description":"Show floating label for the control"},{"name":"variant","type":"string","options":["outlined","filled","standard"]}],"react-bootstrap":[{"name":"size","type":"string","description":"Size of the field","options":["lg","sm"]},{"name":"floatingLabel","type":"boolean","description":"Enable floating labels with Bootstrap’s textual form fields, not available with prefix/postfix"}],"react-antd":[{"name":"size","type":"string","description":"Size of the field","options":["small","default","large"]},{"name":"popupMatchSelectWidth","type":"boolean","description":"Determine whether the popup menu and the select input are the same width"},{"name":"listHeight","type":"number","description":"Config popup height"},{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"allowClear","type":"boolean"},{"name":"bordered","type":"boolean"},{"name":"placement","type":"string","options":["bottomLeft","bottomRight","topLeft","topRight"]},{"name":"showSearch","type":"boolean","description":"Whether select is searchable"},{"name":"showArrow","type":"boolean","description":"Whether to show the drop-down arrow"},{"name":"virtual","type":"boolean"},{"name":"tooltip","type":"boolean"}],"frameworks":["react-rsuite5","react-material-ui","react","react-bootstrap","react-antd"]},"group":{"label":"Group","category":"layout","name":"group","description":"Visually Group a set of fields, can be collapsed","common":[{"name":"name","type":"string"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"},{"name":"align","type":"string","options":["left","center","right"]},{"name":"collapsible","type":"boolean"},{"name":"open","type":"boolean"},{"name":"bottomBorder","type":"boolean"}],"frameworks":["react-rsuite5","react-material-ui","react","react-bootstrap","react-antd"]},"two-columns":{"label":"Two Columns","category":"layout","name":"two-columns","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"layout","type":"string","options":["layout-1-1","layout-1-2","layout-1-3","layout-1-4","layout-2-1","layout-3-1","layout-4-1","layout-2-3","layout-3-2","layout-0-1","layout-1-0"]},{"name":"leftAlignment","type":"string","description":"Flex \\"align-self\\" attribute for the column","options":["auto","baseline","center","end","flex-end","flex-start","inherit","initial","normal","revert","self-end","self-start","start","stretch","unset"]},{"name":"rightAlignment","type":"string","description":"Flex \\"align-self\\" attribute for the column","options":["auto","baseline","center","end","flex-end","flex-start","inherit","initial","normal","revert","self-end","self-start","start","stretch","unset"]},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"frameworks":["react-rsuite5","react-material-ui","react","react-bootstrap","react-antd"]},"three-columns":{"label":"Three Columns","category":"layout","name":"three-columns","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"layout","type":"string","options":["layout-0-1-0","layout-1-0-0","layout-1-1-1","layout-1-1-2","layout-1-2-1","layout-2-1-1","layout-1-1-3","layout-1-3-1","layout-3-1-1"]},{"name":"leftAlignment","type":"string","description":"Flex \\"align-self\\" attribute for the column","options":["auto","baseline","center","end","flex-end","flex-start","inherit","initial","normal","revert","self-end","self-start","start","stretch","unset"]},{"name":"centerAlignment","type":"string","description":"Flex \\"align-self\\" attribute for the column","options":["auto","baseline","center","end","flex-end","flex-start","inherit","initial","normal","revert","self-end","self-start","start","stretch","unset"]},{"name":"rightAlignment","type":"string","description":"Flex \\"align-self\\" attribute for the column","options":["auto","baseline","center","end","flex-end","flex-start","inherit","initial","normal","revert","self-end","self-start","start","stretch","unset"]},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"frameworks":["react-rsuite5","react-material-ui","react","react-bootstrap","react-antd"]},"array":{"label":"List Array","category":"general","name":"array","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"readOnly","type":"boolean","description":"Put the field in read only mode"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"},{"name":"layout","type":"string","options":["vertical","horizontal","inline"]},{"name":"arrayType","type":"string","description":"Defines the result of the list component, \\"arrayOfString\\" and \\"commaSeparated\\" only applies if list field has only one field","options":["arrayOfObject","arrayOfString","commaSeparated"]}],"react-rsuite5":[{"name":"tooltip","type":"boolean","description":"Show hint as tooltip next to label"}],"frameworks":["react-rsuite5","react-material-ui","react","react-bootstrap","react-antd"]},"input-number":{"label":"Input number","category":"general","name":"input-number","description":"Basic input number field, returns a numeric value","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"placeholder","type":"string | i18n","description":"Placeholder text, visibile when the field is empty"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"readOnly","type":"boolean","description":"Put the field in read only mode"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react-rsuite5":[{"name":"size","type":"string","description":"Size of the field","options":["lg","md","sm","xs"]},{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"allowClear","type":"boolean"},{"name":"min","type":"number"},{"name":"step","type":"number"},{"name":"max","type":"number"},{"name":"prefix","type":"string","description":"Fixed heading text"},{"name":"inside","type":"boolean","description":"Show prefix and postfix inside the input box"},{"name":"postfix","type":"string","description":"Fixed trailing text"},{"name":"tooltip","type":"boolean","description":"Show hint as tooltip next to label"}],"react-material-ui":[{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"size","type":"string","description":"Size of the field","options":["small","medium"]},{"name":"variant","type":"string","options":["outlined","filled","standard"]},{"name":"color","type":"string","options":["error","info","primary","secondary","success","warning"]},{"name":"floatingLabel","type":"boolean","description":"Show floating label for the control"},{"name":"disableUnderline","type":"boolean","description":"Disable underline in \\"filled\\" and \\"standard\\" variant"},{"name":"prefix","type":"string","description":"Fixed heading text"},{"name":"postfix","type":"string","description":"Fixed trailing text"}],"react-bootstrap":[{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"size","type":"string","description":"Size of the field","options":["lg","sm"]},{"name":"prefix","type":"string","description":"Fixed heading text"},{"name":"postfix","type":"string","description":"Fixed trailing text"},{"name":"floatingLabel","type":"boolean","description":"Enable floating labels with Bootstrap’s textual form fields, not available with prefix/postfix"},{"name":"min","type":"number"},{"name":"step","type":"number"},{"name":"max","type":"number"}],"react-antd":[{"name":"min","type":"number"},{"name":"step","type":"number"},{"name":"max","type":"number"},{"name":"showControls","type":"boolean","description":"Whether to show +- controls, or set custom arrows icon"},{"name":"stringMode","type":"boolean","description":"Set value as string to support high precision decimals. Will return string value by onChange"},{"name":"bordered","type":"boolean"},{"name":"size","type":"string","description":"Size of the field","options":["small","default","large"]},{"name":"tooltip","type":"boolean"},{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"}],"frameworks":["react-rsuite5","react-material-ui","react-bootstrap","react-antd"]},"slider":{"label":"Slider","category":"general","name":"slider","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"readOnly","type":"boolean","description":"Put the field in read only mode"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react-rsuite5":[{"name":"tooltip","type":"boolean","description":"Show hint as tooltip next to label"},{"name":"min","type":"number"},{"name":"step","type":"number"},{"name":"max","type":"number"},{"name":"vertical","type":"boolean"},{"name":"progress","type":"boolean","description":"Show sliding progress bar"},{"name":"showTooltip","type":"boolean","description":"Whether to show Tooltip when sliding"},{"name":"graduated","type":"boolean"},{"name":"marks","type":"array","description":"Customize labels on the render ruler"}],"react-material-ui":[{"name":"size","type":"string","description":"Size of the field","options":["small","medium"]},{"name":"color","type":"string","options":["error","info","primary","secondary","success","warning"]},{"name":"min","type":"number"},{"name":"step","type":"number"},{"name":"max","type":"number"},{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"valueLabelDisplay","type":"string","description":"How to show the value of the label","options":["auto","on","off"]},{"name":"showMarks","type":"boolean"},{"name":"customMarks","type":"array","description":"Customize labels on the render ruler"}],"react-bootstrap":[{"name":"min","type":"number"},{"name":"step","type":"number"},{"name":"max","type":"number"}],"react-antd":[{"name":"keyboard","type":"boolean","description":"Support using keyboard to move handlers"},{"name":"dots","type":"boolean","description":"Whether the thumb can drag over tick only"},{"name":"reverse","type":"boolean","description":"Reverse the component"},{"name":"min","type":"number"},{"name":"step","type":"number"},{"name":"max","type":"number"},{"name":"tooltipOpen","type":"boolean","description":"Tooltip behaviour, checked always open, unchecked always close"},{"name":"tooltipPlacement","type":"string","options":["top","left","right","bottom","topLeft","topRight","bottomLeft","bottomRight","topLeft","topRight","leftTop","leftBottom","rightTop","rightBottom"]},{"name":"marks","type":"array","description":"Customize labels on the render ruler"},{"name":"included","type":"boolean","description":"Make effect when marks not null, true means containment and false means coordinative"}],"frameworks":["react-rsuite5","react-material-ui","react-bootstrap","react-antd"]},"date":{"label":"Date","category":"general","description":"Date field, returns a string in ISO-8601 format (i.e., 1972-10-01)","name":"date","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"placeholder","type":"string | i18n","description":"Placeholder text, visibile when the field is empty"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"readOnly","type":"boolean","description":"Put the field in read only mode"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react-rsuite5":[{"name":"format","type":"string","description":"Check https://date-fns.org library for available formats"},{"name":"block","type":"boolean","description":"Only in fluid layout"},{"name":"cleanable","type":"boolean"},{"name":"editable","type":"boolean","description":"Rendered as an input, the date can be entered via the keyboard"},{"name":"oneTap","type":"boolean","description":"One click to complete the selection date"},{"name":"showMeridian","type":"boolean","description":"Display hours in 12 format"},{"name":"showWeekNumbers","type":"boolean"},{"name":"isoWeek","type":"boolean","description":"ISO 8601 standard, each calendar week begins on Monday and Sunday on the seventh day"},{"name":"size","type":"string","description":"Size of the field","options":["lg","md","sm","xs"]},{"name":"appearance","type":"string","options":["default","subtle"]},{"name":"placement","type":"string","options":["topStart","topEnd","leftStart","rightStart","leftEnd","rightEnd","bottomStart","bottomEnd","auto","autoVerticalStart","autoVerticalEnd","autoHorizontalStart","autoHorizontalEnd"]}],"react-material-ui":[{"name":"format","type":"string","description":"Date format, i.e. DD/MM/YYYY"},{"name":"fullWidth","type":"boolean","description":"Set the width of the container field to 100%"},{"name":"disableFuture","type":"boolean"},{"name":"disableHighlightToday","type":"boolean"},{"name":"disableOpenPicker","type":"boolean"},{"name":"disablePast","type":"boolean"},{"name":"displayWeekNumber","type":"boolean"},{"name":"reduceAnimations","type":"boolean"},{"name":"showDaysOutsideCurrentMonth","type":"boolean"},{"name":"maxDate","type":"date"},{"name":"minDate","type":"date"},{"name":"views","type":"[string]","options":["day","month","year"]}],"react-bootstrap":[{"name":"size","type":"string","description":"Size of the field","options":["lg","sm"]},{"name":"prefix","type":"string","description":"Fixed heading text"},{"name":"postfix","type":"string","description":"Fixed trailing text"},{"name":"floatingLabel","type":"boolean","description":"Enable floating labels with Bootstrap’s textual form fields, not available with prefix/postfix"},{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"}],"react-antd":[{"name":"size","type":"string","description":"Size of the field","options":["small","default","large"]},{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"bordered","type":"boolean"},{"name":"allowClear","type":"boolean"},{"name":"tooltip","type":"boolean"},{"name":"showTime","type":"boolean"},{"name":"showNow","type":"boolean","description":"Show now button"},{"name":"showToday","type":"boolean","description":"Show today button"},{"name":"placement","type":"string","options":["bottomLeft","bottomRight","topLeft","topRight"]},{"name":"format","type":"string","description":"Date format, i.e. DD/MM/YYYY"},{"name":"picker","type":"string","options":["date","week","month","quarter","year"]},{"name":"mode","type":"string","options":["time","date","month","year","decade"]}],"frameworks":["react-rsuite5","react-material-ui","react","react-bootstrap","react-antd"]},"checkbox":{"label":"Checkbox","category":"general","name":"checkbox","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"readOnly","type":"boolean","description":"Put the field in read only mode"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react-rsuite5":[{"name":"indeterminate","type":"boolean","description":"Status can be indeterminate (null), cycle values trough false, inderminate, true"},{"name":"tooltip","type":"boolean","description":"Show hint as tooltip next to label"}],"react-material-ui":[{"name":"size","type":"string","description":"Size of the field","options":["small","medium","large"]},{"name":"color","type":"string","options":["error","info","primary","secondary","success","warning"]},{"name":"labelPlacement","type":"string","options":["top","start","bottom","end"]},{"name":"disableRipple","type":"boolean","description":"Disable CSS ripple effect"}],"frameworks":["react-rsuite5","react-material-ui","react","react-bootstrap","react-antd"]},"checkbox-group":{"label":"Checkbox Group","category":"general","name":"checkbox-group","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"options","type":"array"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"readOnly","type":"boolean","description":"Put the field in read only mode"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react-rsuite5":[{"name":"inline","type":"boolean"},{"name":"tooltip","type":"boolean","description":"Show hint as tooltip next to label"}],"react-material-ui":[{"name":"size","type":"string","description":"Size of the field","options":["small","medium","large"]},{"name":"color","type":"string","options":["error","info","primary","secondary","success","warning"]},{"name":"labelPlacement","type":"string","options":["top","start","bottom","end"]}],"react-bootstrap":[{"name":"inline","type":"boolean"},{"name":"reverse","type":"boolean"}],"frameworks":["react-rsuite5","react-material-ui","react-bootstrap","react-antd"]},"radio-group":{"label":"Radio Group","category":"general","name":"radio-group","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"options","type":"array"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"readOnly","type":"boolean","description":"Put the field in read only mode"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react-rsuite5":[{"name":"inline","type":"boolean"},{"name":"appearance","type":"string","description":"Show as default radio control or stacked buttons","options":["default","picker"]},{"name":"tooltip","type":"boolean","description":"Show hint as tooltip next to label"}],"react-material-ui":[{"name":"size","type":"string","description":"Size of the field","options":["small","medium","large"]},{"name":"color","type":"string","options":["error","info","primary","secondary","success","warning"]},{"name":"labelPlacement","type":"string","options":["top","start","bottom","end"]},{"name":"row","type":"boolean"}],"react-bootstrap":[{"name":"inline","type":"boolean"},{"name":"reverse","type":"boolean"}],"react-antd":[{"name":"optionType","type":"string","options":["default","button"]},{"name":"size","type":"string","description":"Size of the field","options":["small","default","large"]},{"name":"inline","type":"boolean"},{"name":"tooltip","type":"boolean"}],"frameworks":["react-rsuite5","react-material-ui","react-bootstrap","react-antd"]},"input-tag":{"label":"Tag Input","category":"general","name":"input-tag","description":"Input tags, create tags, returns an array of string","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"readOnly","type":"boolean","description":"Put the field in read only mode"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react-rsuite5":[{"name":"trigger","type":"[string]","description":"Set the trigger for creating tags","options":["Enter","Space","Comma"]},{"name":"block","type":"boolean","description":"Only in fluid layout"},{"name":"size","type":"string","description":"Size of the field","options":["lg","md","sm","xs"]},{"name":"tooltip","type":"boolean","description":"Show hint as tooltip next to label"}],"frameworks":["react-rsuite5"]},"input-mask":{"label":"Input Mask","category":"general","name":"input-mask","description":"Masked input text","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"placeholder","type":"string | i18n","description":"Placeholder text, visibile when the field is empty"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"readOnly","type":"boolean","description":"Put the field in read only mode"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react-rsuite5":[{"name":"mask","type":"string","description":"Use ${d} - digits, ${D} - any non digits, ${a} - any non alpha chars, ${w} - any word chars "},{"name":"guide","type":"boolean"},{"name":"keepCharPositions","type":"boolean","description":"When true, adding or deleting characters will not affect the position of existing characters"},{"name":"showMask","type":"boolean","description":"When the input value is empty, the mask is displayed as a placeholder instead of a regular placeholder"},{"name":"placeholderChar","type":"string","description":"The placeholder character represents the fillable spot in the mask"},{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"size","type":"string","description":"Size of the field","options":["lg","md","sm","xs"]},{"name":"tooltip","type":"boolean","description":"Show hint as tooltip next to label"},{"name":"prefix","type":"string","description":"Fixed heading text"},{"name":"inside","type":"boolean","description":"Show prefix and postfix inside the input box"},{"name":"postfix","type":"string","description":"Fixed trailing text"}],"frameworks":["react-rsuite5"]},"textarea":{"label":"Textarea","category":"general","name":"textarea","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"placeholder","type":"string | i18n","description":"Placeholder text, visibile when the field is empty"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"readOnly","type":"boolean","description":"Put the field in read only mode"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react":[{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"rows","type":"number"}],"react-rsuite5":[{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"size","type":"string","description":"Size of the field","options":["lg","md","sm","xs"]},{"name":"rows","type":"number"},{"name":"tooltip","type":"boolean","description":"Show hint as tooltip next to label"}],"react-material-ui":[{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"size","type":"string","description":"Size of the field","options":["small","medium"]},{"name":"variant","type":"string","options":["outlined","filled","standard"]},{"name":"color","type":"string","options":["error","info","primary","secondary","success","warning"]},{"name":"floatingLabel","type":"boolean","description":"Show floating label for the control"},{"name":"disableUnderline","type":"boolean","description":"Disable underline in \\"filled\\" and \\"standard\\" variant"},{"name":"maxRows","type":"number"}],"react-bootstrap":[{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"size","type":"string","description":"Size of the field","options":["lg","sm"]},{"name":"rows","type":"number"}],"react-antd":[{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"size","type":"string","description":"Size of the field","options":["small","default","large"]},{"name":"showCount","type":"boolean"},{"name":"maxLength","type":"number"},{"name":"allowClear","type":"boolean"},{"name":"autoSize","type":"boolean"},{"name":"bordered","type":"boolean"},{"name":"tooltip","type":"boolean"}],"frameworks":["react-rsuite5","react-material-ui","react","react-bootstrap","react-antd"]},"rate":{"label":"Rate","category":"general","name":"rate","description":"Five stars rating field","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"readOnly","type":"boolean","description":"Put the field in read only mode"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react-rsuite5":[{"name":"allowHalf","type":"boolean"},{"name":"cleanable","type":"boolean"},{"name":"vertical","type":"boolean","description":"Vertical direction when half selected"},{"name":"max","type":"number"},{"name":"color","type":"string","options":["red","orange","yellow","green","cyan","blue","violet"]},{"name":"size","type":"string","description":"Size of the field","options":["lg","md","sm","xs"]},{"name":"tooltip","type":"boolean","description":"Show hint as tooltip next to label"}],"react-material-ui":[{"name":"size","type":"string","description":"Size of the field","options":["small","medium","large"]},{"name":"precision","type":"string","description":"The minimum increment value change allowed","options":[0.1,0.2,0.5,1]},{"name":"max","type":"number"}],"react-antd":[{"name":"count","type":"number"},{"name":"allowHalf","type":"boolean","description":"Allow half votes"},{"name":"allowClear","type":"boolean"},{"name":"tooltips","type":"array","description":"Customize tooltip for each value"},{"name":"tooltip","type":"boolean"}],"frameworks":["react-rsuite5","react-material-ui","react-antd"]},"placeholder":{"label":"Placeholder","category":"layout","name":"placeholder","description":"Generic placeholder for an image inside the form, supports basic parameters like width, height and margin","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"text","type":"string | i18n","description":"Supports markdown (i.e., **bold**, _italics_)"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react-rsuite5":[{"name":"tooltip","type":"boolean","description":"Show hint as tooltip next to label"}],"react-antd":[{"name":"tooltip","type":"boolean"}],"frameworks":["react-rsuite5","react-material-ui","react","react-bootstrap","react-antd"]},"multiselect":{"label":"MultiSelect","category":"general","name":"multiselect","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"options","type":"array"},{"name":"placeholder","type":"string | i18n","description":"Placeholder text, visibile when the field is empty"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"readOnly","type":"boolean","description":"Put the field in read only mode"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react-rsuite5":[{"name":"placement","type":"string","options":["topStart","topEnd","leftStart","rightStart","leftEnd","rightEnd","bottomStart","bottomEnd","auto","autoVerticalStart","autoVerticalEnd","autoHorizontalStart","autoHorizontalEnd"]},{"name":"size","type":"string","description":"Size of the field","options":["lg","md","sm","xs"]},{"name":"multiselectMode","type":"string","description":"Show the selected values as tag element or plain string","options":["tag","plain"]},{"name":"block","type":"boolean","description":"Only in fluid layout"},{"name":"searchable","type":"boolean"},{"name":"cleanable","type":"boolean"},{"name":"tooltip","type":"boolean","description":"Show hint as tooltip next to label"},{"name":"preventOverflow","type":"boolean","description":"Prevent floating element overflow"}],"react-material-ui":[{"name":"size","type":"string","description":"Size of the field","options":["small","medium"]},{"name":"autoWidth","type":"boolean","description":"If true, the width of the popover will automatically be set according to the items inside the menu, otherwise it will be at least the width of the select input."},{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"floatingLabel","type":"boolean","description":"Show floating label for the control"},{"name":"variant","type":"string","options":["outlined","filled","standard"]}],"react-antd":[{"name":"size","type":"string","description":"Size of the field","options":["small","default","large"]},{"name":"width","type":"number"},{"name":"listHeight","type":"number","description":"Config popup height"},{"name":"allowClear","type":"boolean"},{"name":"bordered","type":"boolean"},{"name":"showSearch","type":"boolean","description":"Whether select is searchable"},{"name":"showArrow","type":"boolean","description":"Whether to show the drop-down arrow"},{"name":"virtual","type":"boolean"},{"name":"tooltip","type":"boolean"},{"name":"placement","type":"string","options":["bottomLeft","bottomRight","topLeft","topRight"]},{"name":"maxTagCount","type":"number","description":"Maximum number of selectable elements"},{"name":"maxTagPlaceholder","type":"string","description":"Placeholder to show when max number of element is reached"},{"name":"maxTagTextLength","type":"number","description":"Maximum length of text tags"}],"frameworks":["react-rsuite5","react-material-ui","react-antd"]},"multiselect-language":{"label":"Locales","category":"advanced","description":"Select one or more locales, returns an array (i.e. it-IT, en-GB, ...)","name":"multiselect-language","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"placeholder","type":"string | i18n","description":"Placeholder text, visibile when the field is empty"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"readOnly","type":"boolean","description":"Put the field in read only mode"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react-rsuite5":[{"name":"placement","type":"string","options":["topStart","topEnd","leftStart","rightStart","leftEnd","rightEnd","bottomStart","bottomEnd","auto","autoVerticalStart","autoVerticalEnd","autoHorizontalStart","autoHorizontalEnd"]},{"name":"size","type":"string","description":"Size of the field","options":["lg","md","sm","xs"]},{"name":"tooltip","type":"boolean","description":"Show hint as tooltip next to label"}],"frameworks":["react-rsuite5"]},"placeholder-image":{"label":"Placeholder Image","category":"layout","name":"placeholder-image","description":"Image placeholder","common":[{"name":"name","type":"string"},{"name":"url","type":"string"},{"name":"align","type":"string","options":["left","center","right"]},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react":[{"name":"maxWidth","type":"number"},{"name":"maxHeight","type":"number"},{"name":"marginTop","type":"number"},{"name":"marginBottom","type":"number"}],"react-rsuite5":[{"name":"maxWidth","type":"number"},{"name":"maxHeight","type":"number"},{"name":"marginTop","type":"number"},{"name":"marginBottom","type":"number"}],"react-material-ui":[{"name":"maxWidth","type":"number"},{"name":"maxHeight","type":"number"},{"name":"marginTop","type":"number"},{"name":"marginBottom","type":"number"}],"react-bootstrap":[{"name":"maxWidth","type":"number"},{"name":"maxHeight","type":"number"},{"name":"marginTop","type":"number"},{"name":"marginBottom","type":"number"}],"react-antd":[{"name":"maxWidth","type":"number"},{"name":"maxHeight","type":"number"},{"name":"marginTop","type":"number"},{"name":"marginBottom","type":"number"}],"frameworks":["react-rsuite5","react-material-ui","react","react-bootstrap","react-antd"]},"button":{"label":"Button","category":"layout","description":"Icon button, can be used as toggle button or just a link button","name":"button","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"buttonType","type":"string","description":"Type of button: toggle 2-states button or link button","options":["toggle","link"]},{"name":"labelOn","type":"string | i18n"},{"name":"iconOn","type":"string"},{"name":"labelOff","type":"string | i18n"},{"name":"iconOff","type":"string"},{"name":"initialValue","type":"boolean"},{"name":"labelLink","type":"string | i18n"},{"name":"iconLink","type":"string"},{"name":"href","type":"string"},{"name":"hint","type":"string | i18n","description":"Show hint in a tooltip"},{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react-rsuite5":[{"name":"size","type":"string","description":"Size of the field","options":["lg","md","sm","xs"]},{"name":"appearance","type":"string","description":"Only available for link-type buttons","options":["default","primary","subtle","link","ghost"]},{"name":"tooltip","type":"boolean","description":"Show hint as tooltip next to label"}],"react-material-ui":[{"name":"size","type":"string","description":"Size of the field","options":["small","medium","large"]},{"name":"variant","type":"string","options":["outlined","filled","standard"]},{"name":"color","type":"string","options":["error","info","primary","secondary","success","warning"]}],"react-bootstrap":[{"name":"variant","type":"string","options":["primary","secondary","success","warning","danger","info","light","dark","link"]},{"name":"size","type":"string","description":"Size of the field","options":["lg","sm"]}],"react-antd":[{"name":"size","type":"string","description":"Size of the field","options":["small","default","large"]},{"name":"type","type":"string","description":"Only available for link-type buttons","options":["primary","default","dashed","text","link"]}],"frameworks":["react-rsuite5","react-material-ui","react-bootstrap","react-antd"]},"divider":{"label":"Divider","category":"layout","description":"Layout divider, customizable with size and color","name":"divider","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"size","type":"number","description":"Thickness of the divider"},{"name":"color","type":"string"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"frameworks":["react-rsuite5","react-material-ui","react","react-bootstrap","react-antd"]},"datetime":{"label":"Date Time","category":"general","name":"datetime","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"placeholder","type":"string | i18n","description":"Placeholder text, visibile when the field is empty"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"readOnly","type":"boolean","description":"Put the field in read only mode"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react-rsuite5":[{"name":"format","type":"string","description":"Check https://date-fns.org library for available formats"},{"name":"block","type":"boolean","description":"Only in fluid layout"},{"name":"cleanable","type":"boolean"},{"name":"editable","type":"boolean","description":"Rendered as an input, the date can be entered via the keyboard"},{"name":"oneTap","type":"boolean","description":"One click to complete the selection date"},{"name":"showMeridian","type":"boolean","description":"Display hours in 12 format"},{"name":"showWeekNumbers","type":"boolean"},{"name":"isoWeek","type":"boolean","description":"ISO 8601 standard, each calendar week begins on Monday and Sunday on the seventh day"},{"name":"size","type":"string","description":"Size of the field","options":["lg","md","sm","xs"]},{"name":"appearance","type":"string","options":["default","subtle"]},{"name":"placement","type":"string","options":["topStart","topEnd","leftStart","rightStart","leftEnd","rightEnd","bottomStart","bottomEnd","auto","autoVerticalStart","autoVerticalEnd","autoHorizontalStart","autoHorizontalEnd"]}],"react-material-ui":[{"name":"format","type":"string","description":"Date format, i.e. DD/MM/YYYY"},{"name":"fullWidth","type":"boolean","description":"Set the width of the container field to 100%"},{"name":"disableFuture","type":"boolean"},{"name":"disableHighlightToday","type":"boolean"},{"name":"disableOpenPicker","type":"boolean"},{"name":"disablePast","type":"boolean"},{"name":"displayWeekNumber","type":"boolean"},{"name":"reduceAnimations","type":"boolean"},{"name":"showDaysOutsideCurrentMonth","type":"boolean"},{"name":"maxDate","type":"date"},{"name":"minDate","type":"date"},{"name":"views","type":"[string]","options":["hours","minutes","seconds","day","month","year"]}],"react-bootstrap":[{"name":"size","type":"string","description":"Size of the field","options":["lg","sm"]},{"name":"prefix","type":"string","description":"Fixed heading text"},{"name":"postfix","type":"string","description":"Fixed trailing text"},{"name":"floatingLabel","type":"boolean","description":"Enable floating labels with Bootstrap’s textual form fields, not available with prefix/postfix"},{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"}],"react-antd":[{"name":"size","type":"string","description":"Size of the field","options":["small","default","large"]},{"name":"fullWidth","type":"boolean","description":"Set the width of the field to 100% of the enclosing container"},{"name":"width","type":"number","description":"Set the width (in pixel) of the field"},{"name":"bordered","type":"boolean"},{"name":"allowClear","type":"boolean"},{"name":"tooltip","type":"boolean"},{"name":"showNow","type":"boolean","description":"Show now button"},{"name":"showToday","type":"boolean","description":"Show today button"},{"name":"placement","type":"string","options":["bottomLeft","bottomRight","topLeft","topRight"]},{"name":"format","type":"string","description":"Date format, i.e. DD/MM/YYYY"}],"frameworks":["react-rsuite5","react-material-ui","react","react-bootstrap","react-antd"]},"tabs":{"label":"Tabs","category":"layout","description":"Layout component for tabs","name":"tabs","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"tabs","type":"array"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react-rsuite5":[{"name":"appearance","type":"string","options":["default","tabs","subtle"]},{"name":"reversed","type":"boolean"},{"name":"justified","type":"boolean"}],"react-material-ui":[{"name":"indicatorColor","type":"string","options":["primary","secondary"]},{"name":"textColor","type":"string","options":["primary","secondary","inherit"]},{"name":"centered","type":"boolean","description":"If true, the tabs are centered. This prop is intended for large views"},{"name":"fullWidth","type":"boolean","description":"Will make the tabs grow to use all the available space"}],"react-bootstrap":[{"name":"variant","type":"string","options":["tabs","pills","underline"]},{"name":"transition","type":"boolean","description":"Sets a default animation strategy for all children"},{"name":"fill","type":"boolean","description":"Have all Tabss proportionately fill all available width"},{"name":"justify","type":"boolean","description":"Have all Tabs evenly fill all available width"}],"react-antd":[{"name":"size","type":"string","description":"Size of the field","options":["small","middle","large"]},{"name":"tabType","type":"string","options":["line","card"]},{"name":"animated","type":"boolean"},{"name":"centered","type":"boolean"}],"frameworks":["react-rsuite5","react-material-ui","react-bootstrap","react-antd"]},"radio-tile":{"label":"Radio Tile","description":"Radio control with card, description and icon","category":"general","name":"radio-tile","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"options","type":"array"},{"name":"initalOption","type":"string"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react-rsuite5":[{"name":"inline","type":"boolean","description":"Use inline layout"},{"name":"iconWidth","type":"number"},{"name":"iconHeight","type":"number"},{"name":"tooltip","type":"boolean","description":"Show hint as tooltip next to label"}],"frameworks":["react-rsuite5"]},"upload":{"label":"Upload","category":"general","name":"upload","description":"Upload file control, returns an array of json with file info and blob","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react-rsuite5":[{"name":"accept","type":"array","description":"Accepted files, file extension or mime type: .doc, .pdf, video/*, image/png, etc. "},{"name":"listType","type":"string","options":["text","picture-text","picture"]},{"name":"maxPreviewFileSize","type":"number","description":"Set the maximum limit for preview files"},{"name":"tooltip","type":"boolean","description":"Show hint as tooltip next to label"},{"name":"fileListVisible","type":"boolean"},{"name":"disabledFileItem","type":"boolean"},{"name":"multiple","type":"boolean","description":"Allow selecting multiple files"},{"name":"removable","type":"boolean"},{"name":"draggable","type":"boolean"},{"name":"uploadButtonLabel","type":"string | i18n"},{"name":"uploadButtonAppearance","type":"string","options":["default","primary","subtle","link","ghost"]},{"name":"uploadButtonSize","type":"string","options":["lg","md","sm","xs"]},{"name":"draggableText","type":"string | i18n"},{"name":"draggableHeight","type":"number"}],"react-antd":[{"name":"accept","type":"array","description":"Accepted files, file extension or mime type: .doc, .pdf, video/*, image/png, etc. "},{"name":"multiple","type":"boolean","description":"Allow selecting multiple files"},{"name":"listType","type":"string","description":"Built-in stylesheets, support for four types: text, picture, picture-card or picture-circle","options":["text","picture","picture-card","picture-circle"]},{"name":"maxCount","type":"number"},{"name":"showUploadList","type":"boolean"},{"name":"uploadButtonLabel","type":"string | i18n"},{"name":"uploadButtonAppearance","type":"string","options":["primary","default","dashed","text","link"]},{"name":"uploadButtonSize","type":"string","options":["small","default","large"]},{"name":"draggable","type":"boolean"},{"name":"draggableText","type":"string | i18n"},{"name":"draggableHeight","type":"number"},{"name":"tooltip","type":"boolean"}],"frameworks":["react-rsuite5","react-antd"]},"buttons-toggle-group":{"label":"Toggle Buttons","category":"layout","description":"List of toggle buttons, works like a radio group, returns an array of string","name":"buttons-toggle-group","common":[{"name":"name","type":"string","description":"The name of the field and the key of the JSON"},{"name":"label","type":"string | i18n","description":"Label of the field"},{"name":"hint","type":"string | i18n","description":"Help text for the field (generally shown below the input box)"},{"name":"options","type":"array"},{"name":"multiple","type":"boolean","description":"Allow to select multiple values"},{"name":"disabled","type":"boolean","description":"Disables and greys out the field"},{"name":"readOnly","type":"boolean","description":"Put the field in read only mode"},{"name":"hidden","type":"boolean","description":"Hides the field from the form"}],"react-rsuite5":[{"name":"size","type":"string","description":"Size of the field","options":["lg","md","sm","xs"]}],"react-antd":[{"name":"size","type":"string","description":"Size of the field","options":["small","default","large"]}],"frameworks":["react-rsuite5","react-antd"]}}');
;// CONCATENATED MODULE: ./helpers/validate-form.js




function validate_form_toConsumableArray(arr) { return validate_form_arrayWithoutHoles(arr) || validate_form_iterableToArray(arr) || validate_form_unsupportedIterableToArray(arr) || validate_form_nonIterableSpread(); }
function validate_form_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function validate_form_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return validate_form_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return validate_form_arrayLikeToArray(o, minLen); }
function validate_form_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function validate_form_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return validate_form_arrayLikeToArray(arr); }
function validate_form_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



var LAYOUT_FIELDS = ['group', 'two-columns', 'three-columns'];
var validateJSONForm = function validateJSONForm(json) {
  if (!isObject_default()(json)) {
    return 'Not a valid JSON object';
  }
  if (!json.version || !isNumber_default()(json.version)) {
    return 'Not a valid LetsForm object, missing "version" value';
  }
  if (isEmpty_default()(json.fields)) {
    return 'Missing or empty "fields" value';
  }

  // check that all fields have component key
  var missingComponentFields = filterFields(json.fields, function (field) {
    return isEmpty_default()(field.component);
  });
  if (!isEmpty_default()(missingComponentFields)) {
    return 'All fields must includes a "component" key (' + missingComponentFields.length + ' incorrect json objects) ';
  }

  // check all non layouts fields have "name" key
  var missingNameFields = filterFields(json.fields, function (field) {
    return !LAYOUT_FIELDS.includes(field.component) && isEmpty_default()(field.name);
  });
  if (!isEmpty_default()(missingNameFields)) {
    return 'Fields (excepts layouts fields like "group") must have a "name" key, check these fields/components: ' + uniq_default()(missingNameFields.map(function (field) {
      return field.component;
    }));
  }

  // collect all component names and check they exists
  var usedComponets = uniq_default()(reduceFields(json.fields, function (field, acc) {
    return [].concat(validate_form_toConsumableArray(acc), [field.component]);
  }, []));
  var availableComponents = Object.keys(manifest_namespaceObject);
  var unknownCommponents = usedComponets.filter(function (component) {
    return !availableComponents.includes(component);
  });
  if (unknownCommponents.length !== 0) {
    return 'Form contains unknows component(s): ' + unknownCommponents.join(', ');
  }
  return null;
};

;// CONCATENATED MODULE: ./helpers/index.js



























/***/ }),

/***/ 5490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ useFormContext),
/* harmony export */   "R": () => (/* binding */ useStylesheet)
/* harmony export */ });
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1609);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8156);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _form_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5137);



var useFormContext = function useFormContext() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_form_context__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);

  // put here some defaults

  return context;
};
var useStylesheet = function useStylesheet(id, css) {
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(css)) {
      var head = document.head;
      var style = document.createElement("style");
      style.id = "letsform-sheet-".concat(id);
      style.innerHTML = css.replaceAll('.lf-current-form', ".lf-lets-form [data-lf-form-name=".concat(id, "]"));
      head.appendChild(style);
    }
    return function () {
      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(css)) {
        var _document$querySelect;
        (_document$querySelect = document.querySelector("#letsform-sheet-".concat(id))) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.remove();
      }
    };
  }, [css, id]);
};

/***/ }),

/***/ 9300:
/***/ ((module) => {

/* eslint-disable no-loop-func */
var microdown = function () {
  var _this = this;
  /*
   * tag helper
   */
  var tag = function tag(_tag, text, values) {
      return "<".concat(_tag + (values ? ' ' + Object.keys(values).map(function (k) {
        return values[k] ? "".concat(k, "=\"").concat(encode(values[k]) || '', "\"") : '';
      }).join(' ') : ''), ">").concat(text, "</").concat(_tag, ">");
    },
    /**
     * outdent all rows by first as reference
     */
    outdent = function outdent(text) {
      return text.replace(new RegExp('^' + (text.match(/^\s+/) || '')[0], 'gm'), '');
    },
    /**
     * encode double quotes and HTML tags to entities
     */
    encode = function encode(text) {
      return text ? text.replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;') : '';
    },
    /**
     * recursive list parser
     */
    listR = /(?:(^|\n)([+-]|\d+\.) +(.*(\n[ \t]+.*)*))+/g,
    list = function list(text, temp) {
      temp = text.match(/^[+-]/m) ? 'ul' : 'ol';
      return text ? "<".concat(temp, ">").concat(text.replace(/(?:[+-]|\d+\.) +(.*)\n?(([ \t].*\n?)*)/g, function (match, a, b) {
        return "<li>".concat(inlineBlock("".concat(a, "\n").concat(outdent(b || '').replace(listR, list))), "</li>");
      }), "</").concat(temp, ">") : '';
    },
    /**
     * function chain of replacements
     */
    chain = function chain(t, regex, replacement, parser) {
      return function (match, a) {
        match = match.replace(regex, replacement);
        return tag(t, parser ? parser(match) : match);
      };
    },
    block = function block(text, options) {
      return p(text, [
      // BLOCK STUFF ===============================

      // comments
      /<!--((.|\n)*?)-->/g, '<!--$1-->',
      // pre format block
      /^("""|```)(.*)\n((.*\n)*?)\1/gm, function (match, wrapper, c, text) {
        return wrapper === '"""' ? tag('div', parse(text, options), {
          class: c
        }) : options && options.preCode ? tag('pre', tag('code', encode(text), {
          class: c
        })) : tag('pre', encode(text), {
          class: c
        });
      },
      // blockquotes
      /(^>.*\n?)+/gm, chain('blockquote', /^> ?(.*)$/gm, '$1', inline),
      // tables
      /((^|\n)\|.+)+/g, chain('table', /^.*(\n\|---.*?)?$/gm, function (match, subline) {
        return chain('tr', /\|(-?)([^|]*)\1(\|$)?/gm, function (match, type, text) {
          return tag(type || subline ? 'th' : 'td', inlineBlock(text));
        })(match.slice(0, match.length - (subline || '').length));
      }),
      // lists
      listR, list,
      //anchor
      /#\[([^\]]+?)]/g, '<a name="$1"></a>',
      // headlines
      /^(#+) +(.*)(?:$)/gm, function (match, h, text) {
        return tag('h' + h.length, inlineBlock(text));
      },
      // horizontal rule
      /^(===+|---+)(?=\s*$)/gm, '<hr>'], parse, options);
    },
    inlineBlock = function inlineBlock(text, dontInline) {
      var temp = [],
        injectInlineBlock = function injectInlineBlock(text) {
          return text.replace(/\\(\d+)/g, function (match, code) {
            return injectInlineBlock(temp[Number.parseInt(code) - 1]);
          });
        };
      text = (text || '').trim()
      // inline code block
      .replace(/`([^`]*)`/g, function (match, text) {
        return '\\' + temp.push(tag('code', encode(text)));
      })
      // inline media (a / img / iframe)
      .replace(/[!&]?\[([!&]?\[.*?\)|[^\]]*?)]\((.*?)( .*?)?\)|(\w+:\/\/[$\-.+!*'()/,\w]+)/g, function (match, text, href, title, link) {
        if (link) {
          return dontInline ? match : '\\' + temp.push(tag('a', link, {
            target: '_blank'
          }));
        }
        if (match[0] === '&') {
          text = text.match(/^(.+),(.+),([^ \]]+)( ?.+?)?$/);
          return '\\' + temp.push(tag('iframe', '', {
            width: text[1],
            height: text[2],
            frameborder: text[3],
            class: text[4],
            src: href,
            title: title
          }));
        }
        return '\\' + temp.push(match[0] === '!' ? tag('img', '', {
          src: href,
          alt: text,
          title: title
        }) : tag('a', inlineBlock(text, 1), {
          href: href,
          title: title,
          target: '_blank'
        }));
      });
      text = injectInlineBlock(dontInline ? text : inline(text));
      return text;
    },
    inline = function inline(text) {
      return p(text, [
      // bold, italic, bold & italic
      /([*_]{1,3})((.|\n)+?)\1/g, function (match, k, text) {
        k = k.length;
        text = inline(text);
        if (k > 1) text = tag('strong', text);
        if (k % 2) text = tag('em', text);
        return text;
      },
      // strike through
      /(~{1,3})((.|\n)+?)\1/g,
      // eslint-disable-next-line no-sparse-arrays
      function (match, k, text) {
        return tag([, 'u', 's', 'del'][k.length], inline(text));
      },
      // replace remaining newlines with a <br>
      // eslint-disable-next-line no-regex-spaces
      /  \n|\n  /g, '<br>'], inline);
    },
    p = function p(text, rules, parse, options) {
      var i = 0,
        f;
      while (i < rules.length) {
        // eslint-disable-next-line no-cond-assign
        if (f = rules[i++].exec(text)) {
          return parse(text.slice(0, f.index), options) + (typeof rules[i] === 'string' ? rules[i].replace(/\$(\d)/g, function (m, d) {
            return f[d];
          }) : rules[i].apply(_this, f)) + parse(text.slice(f.index + f[0].length), options);
        }
        i++;
      }
      return text;
    },
    parse = function parse(text, options) {
      // clean input
      text = text.replace(/[\r\v\b\f]/g, '').replace(/\\./g, function (match) {
        return "&#".concat(match.charCodeAt(1), ";");
      });
      var temp = block(text, options);
      if (temp === text && !temp.match(/^[\s\n]*$/i)) {
        temp = inlineBlock(temp)
        // handle paragraphs
        .replace(/((.|\n)+?)(\n\n+|$)/g, function (match, text) {
          return tag('p', text);
        });
      }
      return temp.replace(/&#(\d+);/g, function (match, code) {
        return String.fromCharCode(parseInt(code));
      });
    };
  return {
    parse: parse,
    block: block,
    inline: inline,
    inlineBlock: inlineBlock
  };
}();
if (true) {
  module.exports = microdown;
}

/***/ }),

/***/ 4184:
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ 3010:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".lf-control-common-array{margin-top:0px !important}.lf-control-common-array .lf-control-common-array-item{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-content:stretch;align-items:stretch;position:relative;border-left:5px solid #ddd;padding-left:10px;padding-top:5px;padding-bottom:5px;margin-top:5px !important}.lf-control-common-array .lf-control-common-array-item>.inner-form{order:0;flex:1 0;align-self:auto;--lf-field-margin: 4px;--lf-field-column-margin: 10px}.lf-control-common-array .lf-control-common-array-item>.buttons{flex:0 0 auto;align-self:center;margin-left:6px}.lf-icon-button{display:inline-block;min-height:16px;min-width:16px;padding:4px;border-radius:3px}.lf-icon-button.disabled{opacity:.6}.lf-icon-button:not(.disabled):hover{background-color:#eee}", "",{"version":3,"sources":["webpack://./common/array/list-array.scss"],"names":[],"mappings":"AAAA,yBACE,yBAAA,CAEA,uDACE,YAAA,CACA,kBAAA,CACA,gBAAA,CACA,0BAAA,CACA,qBAAA,CACA,mBAAA,CACA,iBAAA,CACA,0BAAA,CACA,iBAAA,CACA,eAAA,CACA,kBAAA,CACA,yBAAA,CAMA,mEACE,OAAA,CACA,QAAA,CACA,eAAA,CACA,sBAAA,CACA,8BAAA,CAGF,gEACE,aAAA,CACA,iBAAA,CACA,eAAA,CAMN,gBACE,oBAAA,CACA,eAAA,CACA,cAAA,CACA,WAAA,CACA,iBAAA,CAEA,yBACE,UAAA,CAGF,qCACE,qBAAA","sourcesContent":[".lf-control-common-array {\n  margin-top: 0px !important;\n\n  .lf-control-common-array-item {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-content: stretch;\n    align-items: stretch;\n    position: relative;\n    border-left: 5px solid #dddddd;\n    padding-left: 10px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    margin-top: 5px !important;\n\n    /*.rs-form-group {\n      margin-bottom: 5px !important;\n    }*/\n\n    > .inner-form {\n      order: 0;\n      flex: 1 0;\n      align-self: auto;\n      --lf-field-margin: 4px;\n      --lf-field-column-margin: 10px;\n    }\n\n    > .buttons {\n      flex: 0 0 auto;\n      align-self: center;\n      margin-left: 6px;\n    }\n  }\n\n}\n\n.lf-icon-button {\n  display: inline-block;\n  min-height: 16px;\n  min-width: 16px;\n  padding: 4px;\n  border-radius: 3px;\n\n  &.disabled {\n    opacity: 0.6;\n  }\n\n  &:not(.disabled):hover {\n    background-color: #eeeeee;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5883:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".lf-control-button-toggle-group .lf-control-button{display:inline-block;margin-top:0px !important}.lf-control-button-toggle-group .lf-control-button:not(:first-child){margin-left:var(--lf-field-button-margin)}", "",{"version":3,"sources":["webpack://./common/buttons-toggle-group/buttons-toggle-group.scss"],"names":[],"mappings":"AACE,mDACE,oBAAA,CAEA,yBAAA,CAEA,qEACE,yCAAA","sourcesContent":[".lf-control-button-toggle-group {\n  .lf-control-button {\n    display: inline-block;\n       \n    margin-top: 0px !important; \n  \n    &:not(:first-child) {\n      margin-left: var(--lf-field-button-margin);\n    }\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1760:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".lf-control-divider{min-height:15px;font-size:1px;display:flex}.lf-control-divider .bar{width:100%;margin-top:5px;margin-bottom:5px}", "",{"version":3,"sources":["webpack://./common/divider/divider.scss"],"names":[],"mappings":"AAAA,oBACE,eAAA,CACA,aAAA,CACA,YAAA,CAGA,yBACE,UAAA,CACA,cAAA,CACA,iBAAA","sourcesContent":[".lf-control-divider {\n  min-height: 15px;\n  font-size: 1px;\n  display: flex;\n\n\n  .bar {\n    width: 100%;\n    margin-top: 5px;\n    margin-bottom: 5px;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 88:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".lf-control-group .header svg{display:inline-block}.lf-control-group.bottom-border.open{border-bottom:1px solid #e5e5ea;padding-bottom:15px}.lf-control-group .header{align-items:center;background:rgba(0,0,0,0);display:flex;margin:15px 0px;height:1px;flex-direction:row}.lf-control-group .header .inner-text{flex:0 0 auto;padding:0 12px;display:inline-block}.lf-control-group .header:before{border-top:1px solid #e5e5ea;content:\"\";flex:1 0}.lf-control-group .header:after{border-top:1px solid #e5e5ea;content:\"\";flex:1 0}.lf-control-group .header.left:before{flex:0 0 10px}.lf-control-group .header.right:after{flex:0 0 10px}", "",{"version":3,"sources":["webpack://./common/group/group.scss"],"names":[],"mappings":"AAGI,8BACE,oBAAA,CAIJ,qCACE,+BAAA,CACA,mBAAA,CAGF,0BACE,kBAAA,CACA,wBAAA,CACA,YAAA,CACA,eAAA,CACA,UAAA,CACA,kBAAA,CAEA,sCACE,aAAA,CACA,cAAA,CACA,oBAAA,CAGF,iCACE,4BAAA,CACA,UAAA,CACA,QAAA,CAGF,gCACE,4BAAA,CACA,UAAA,CACA,QAAA,CAIA,sCACE,aAAA,CAKF,sCACE,aAAA","sourcesContent":[".lf-control-group {\n\n  .header {\n    svg {\n      display: inline-block;\n    }\n  }\n\n  &.bottom-border.open {\n    border-bottom: 1px solid #e5e5ea;\n    padding-bottom: 15px;\n  }\n\n  .header {\n    align-items: center;\n    background: transparent;\n    display: flex;\n    margin: 15px 0px;\n    height: 1px;\n    flex-direction: row;\n\n    .inner-text {\n      flex: 0 0 auto;\n      padding: 0 12px;\n      display: inline-block;\n    }\n\n    &:before {\n      border-top: 1px solid #e5e5ea;\n      content: \"\";\n      flex: 1 0;\n    }\n\n    &:after {\n      border-top: 1px solid #e5e5ea;\n      content: \"\";\n      flex: 1 0;\n    }\n\n    &.left {\n      &:before {\n        flex: 0 0 10px;\n      }\n    }\n\n    &.right {\n      &:after {\n        flex: 0 0 10px;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6159:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".lf-common-icon img{max-width:32px;max-height:32px}.lf-common-icon.small img{max-width:24px;max-height:24px}.lf-common-icon.large img{max-width:40px;max-height:40px}", "",{"version":3,"sources":["webpack://./common/icon/common-icon.scss"],"names":[],"mappings":"AACE,oBACE,cAAA,CACA,eAAA,CAIA,0BACE,cAAA,CACA,eAAA,CAMF,0BACE,cAAA,CACA,eAAA","sourcesContent":[".lf-common-icon {\n  img {\n    max-width: 32px;\n    max-height: 32px;\n  }\n\n  &.small {\n    img {\n      max-width: 24px;\n      max-height: 24px;\n\n    }\n  }\n\n  &.large {\n    img {\n      max-width: 40px;\n      max-height: 40px;\n    }\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2558:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".lf-control-placeholder-image{min-height:20px}", "",{"version":3,"sources":["webpack://./common/placeholder-image/placeholder-image.scss"],"names":[],"mappings":"AAAA,8BACE,eAAA","sourcesContent":[".lf-control-placeholder-image {\n  min-height: 20px;\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 860:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".lf-control-placeholder ol,.lf-control-placeholder ul{padding-left:1rem}", "",{"version":3,"sources":["webpack://./common/placeholder/placeholder.scss"],"names":[],"mappings":"AACE,sDACE,iBAAA","sourcesContent":[".lf-control-placeholder {\n  ol, ul {\n    padding-left: 1rem;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1861:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".lf-control-three-columns{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-content:stretch;align-items:stretch;min-height:20px}.lf-control-three-columns .left{flex:1 0;align-self:auto;margin-right:var(--lf-field-column-margin)}.lf-control-three-columns .center{margin-right:var(--lf-field-column-margin);flex:1 0;align-self:auto}.lf-control-three-columns .right{flex:1 0;align-self:auto}.lf-control-three-columns .left:empty{display:none}.lf-control-three-columns.layout-0-1-0 .left{flex:0 0}.lf-control-three-columns.layout-0-1-0 .center{flex:1 0}.lf-control-three-columns.layout-0-1-0 .right{flex:0 0}.lf-control-three-columns.layout-1-0-0 .left{flex:1 0}.lf-control-three-columns.layout-1-0-0 .center{flex:0 0}.lf-control-three-columns.layout-1-0-0 .right{flex:0 0}.lf-control-three-columns.layout-1-1-1 .left{flex:1 0}.lf-control-three-columns.layout-1-1-1 .center{flex:1 0}.lf-control-three-columns.layout-1-1-1 .right{flex:1 0}.lf-control-three-columns.layout-1-1-2 .left{flex:1 0}.lf-control-three-columns.layout-1-1-2 .center{flex:1 0}.lf-control-three-columns.layout-1-1-2 .right{flex:2 0}.lf-control-three-columns.layout-1-2-1 .left{flex:1 0}.lf-control-three-columns.layout-1-2-1 .center{flex:2 0}.lf-control-three-columns.layout-1-2-1 .right{flex:1 0}.lf-control-three-columns.layout-2-1-1 .left{flex:2 0}.lf-control-three-columns.layout-2-1-1 .center{flex:1 0}.lf-control-three-columns.layout-2-1-1 .right{flex:1 0}.lf-control-three-columns.layout-1-1-3 .left{flex:1 0}.lf-control-three-columns.layout-1-1-3 .center{flex:1 0}.lf-control-three-columns.layout-1-1-3 .right{flex:3 0}.lf-control-three-columns.layout-1-3-1 .left{flex:1 0}.lf-control-three-columns.layout-1-3-1 .center{flex:3 0}.lf-control-three-columns.layout-1-3-1 .right{flex:1 0}.lf-control-three-columns.layout-3-1-1 .left{flex:3 0}.lf-control-three-columns.layout-3-1-1 .center{flex:1 0}.lf-control-three-columns.layout-3-1-1 .right{flex:1 0}", "",{"version":3,"sources":["webpack://./common/three-columns/three-columns.scss"],"names":[],"mappings":"AAAA,0BACE,YAAA,CACA,kBAAA,CACA,cAAA,CACA,0BAAA,CACA,qBAAA,CACA,mBAAA,CACA,eAAA,CAUA,gCACE,QAAA,CACA,eAAA,CACA,0CAAA,CAGF,kCACE,0CAAA,CACA,QAAA,CACA,eAAA,CAGF,iCACE,QAAA,CACA,eAAA,CAGF,sCACE,YAAA,CAIA,6CACE,QAAA,CAEF,+CACE,QAAA,CAEF,8CACE,QAAA,CAKF,6CACE,QAAA,CAEF,+CACE,QAAA,CAEF,8CACE,QAAA,CAKF,6CACE,QAAA,CAEF,+CACE,QAAA,CAEF,8CACE,QAAA,CAKF,6CACE,QAAA,CAEF,+CACE,QAAA,CAEF,8CACE,QAAA,CAKF,6CACE,QAAA,CAEF,+CACE,QAAA,CAEF,8CACE,QAAA,CAKF,6CACE,QAAA,CAEF,+CACE,QAAA,CAEF,8CACE,QAAA,CAKF,6CACE,QAAA,CAEF,+CACE,QAAA,CAEF,8CACE,QAAA,CAKF,6CACE,QAAA,CAEF,+CACE,QAAA,CAEF,8CACE,QAAA,CAKF,6CACE,QAAA,CAEF,+CACE,QAAA,CAEF,8CACE,QAAA","sourcesContent":[".lf-control-three-columns {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-content: stretch;\n  align-items: stretch;\n  min-height: 20px;\n\n  /*.left, .right, .center {\n    .rs-form-control-wrapper {\n      > .rs-input, > .rs-input-number {\n        //width: auto;\n      }\n    }\n  }*/\n\n  .left {\n    flex: 1 0;\n    align-self: auto;\n    margin-right: var(--lf-field-column-margin);\n  }\n\n  .center {\n    margin-right: var(--lf-field-column-margin);\n    flex: 1 0;\n    align-self: auto;\n  }\n\n  .right {\n    flex: 1 0;\n    align-self: auto;\n  }\n\n  .left:empty {\n    display: none;\n  }\n\n  &.layout-0-1-0 {\n    .left {\n      flex: 0 0;\n    }\n    .center {\n      flex: 1 0;\n    }\n    .right {\n      flex: 0 0;\n    }\n  }\n\n  &.layout-1-0-0 {\n    .left {\n      flex: 1 0;\n    }\n    .center {\n      flex: 0 0;\n    }\n    .right {\n      flex: 0 0;\n    }\n  }\n\n  &.layout-1-1-1 {\n    .left {\n      flex: 1 0;\n    }\n    .center {\n      flex: 1 0;\n    }\n    .right {\n      flex: 1 0;\n    }\n  }\n\n  &.layout-1-1-2 {\n    .left {\n      flex: 1 0;\n    }\n    .center {\n      flex: 1 0;\n    }\n    .right {\n      flex: 2 0;\n    }\n  }\n\n  &.layout-1-2-1 {\n    .left {\n      flex: 1 0;\n    }\n    .center {\n      flex: 2 0;\n    }\n    .right {\n      flex: 1 0;\n    }\n  }\n\n  &.layout-2-1-1 {\n    .left {\n      flex: 2 0;\n    }\n    .center {\n      flex: 1 0;\n    }\n    .right {\n      flex: 1 0;\n    }\n  }\n\n  &.layout-1-1-3 {\n    .left {\n      flex: 1 0;\n    }\n    .center {\n      flex: 1 0;\n    }\n    .right {\n      flex: 3 0;\n    }\n  }\n\n  &.layout-1-3-1 {\n    .left {\n      flex: 1 0;\n    }\n    .center {\n      flex: 3 0;\n    }\n    .right {\n      flex: 1 0;\n    }\n  }\n\n  &.layout-3-1-1 {\n    .left {\n      flex: 3 0;\n    }\n    .center {\n      flex: 1 0;\n    }\n    .right {\n      flex: 1 0;\n    }\n  }\n\n\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5318:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".lf-control-two-columns{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-content:stretch;align-items:stretch;min-height:20px}.lf-control-two-columns .left{flex:1 0;align-self:auto;margin-right:var(--lf-field-column-margin)}.lf-control-two-columns .right{flex:1 0;align-self:auto}.lf-control-two-columns.layout-1-2 .left{flex:1 0}.lf-control-two-columns.layout-1-2 .right{flex:2 0}.lf-control-two-columns.layout-1-3 .left{flex:1 0}.lf-control-two-columns.layout-1-3 .right{flex:3 0}.lf-control-two-columns.layout-1-4 .left{flex:1 0}.lf-control-two-columns.layout-1-4 .right{flex:4 0}.lf-control-two-columns.layout-1-5 .left{flex:1 0}.lf-control-two-columns.layout-1-5 .right{flex:4 0}.lf-control-two-columns.layout-2-1 .left{flex:2 0}.lf-control-two-columns.layout-2-1 .right{flex:1 0}.lf-control-two-columns.layout-3-1 .left{flex:3 0}.lf-control-two-columns.layout-3-1 .right{flex:1 0}.lf-control-two-columns.layout-4-1 .left{flex:4 0}.lf-control-two-columns.layout-4-1 .right{flex:1 0}.lf-control-two-columns.layout-5-1 .left{flex:4 0}.lf-control-two-columns.layout-5-1 .right{flex:1 0}.lf-control-two-columns.layout-3-2 .left{flex:3 0}.lf-control-two-columns.layout-3-2 .right{flex:2 0}.lf-control-two-columns.layout-2-3 .left{flex:2 0}.lf-control-two-columns.layout-2-3 .right{flex:3 0}.lf-control-two-columns.layout-0-1 .left{flex:0 0 auto}.lf-control-two-columns.layout-0-1 .right{flex:1 0}.lf-control-two-columns.layout-1-0 .left{flex:1 0}.lf-control-two-columns.layout-1-0 .right{flex:0 0 auto}.lf-form-react-rsuite5 .lf-two-columns{margin-bottom:var(--lf-field-margin)}", "",{"version":3,"sources":["webpack://./common/two-columns/two-columns.scss"],"names":[],"mappings":"AAAA,wBACE,YAAA,CACA,kBAAA,CACA,cAAA,CACA,0BAAA,CACA,qBAAA,CACA,mBAAA,CACA,eAAA,CAEA,8BACE,QAAA,CACA,eAAA,CACA,0CAAA,CAGF,+BACE,QAAA,CACA,eAAA,CAIA,yCACE,QAAA,CAEF,0CACE,QAAA,CAKF,yCACE,QAAA,CAEF,0CACE,QAAA,CAKF,yCACE,QAAA,CAEF,0CACE,QAAA,CAKF,yCACE,QAAA,CAEF,0CACE,QAAA,CAKF,yCACE,QAAA,CAEF,0CACE,QAAA,CAKF,yCACE,QAAA,CAEF,0CACE,QAAA,CAKF,yCACE,QAAA,CAEF,0CACE,QAAA,CAKF,yCACE,QAAA,CAEF,0CACE,QAAA,CAKF,yCACE,QAAA,CAEF,0CACE,QAAA,CAKF,yCACE,QAAA,CAEF,0CACE,QAAA,CAKF,yCACE,aAAA,CAEF,0CACE,QAAA,CAKF,yCACE,QAAA,CAEF,0CACE,aAAA,CAMJ,uCACE,oCAAA","sourcesContent":[".lf-control-two-columns {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-content: stretch;\n  align-items: stretch;\n  min-height: 20px;\n\n  .left {\n    flex: 1 0;\n    align-self: auto;\n    margin-right: var(--lf-field-column-margin);\n  }\n\n  .right {\n    flex: 1 0;\n    align-self: auto;\n  }\n\n  &.layout-1-2 {\n    .left {\n      flex: 1 0;\n    }\n    .right {\n      flex: 2 0;\n    }\n  }\n\n  &.layout-1-3 {\n    .left {\n      flex: 1 0;\n    }\n    .right {\n      flex: 3 0;\n    }\n  }\n\n  &.layout-1-4 {\n    .left {\n      flex: 1 0;\n    }\n    .right {\n      flex: 4 0;\n    }\n  }\n\n  &.layout-1-5 {\n    .left {\n      flex: 1 0;\n    }\n    .right {\n      flex: 4 0;\n    }\n  }\n\n  &.layout-2-1 {\n    .left {\n      flex: 2 0;\n    }\n    .right {\n      flex: 1 0;\n    }\n  }\n\n  &.layout-3-1 {\n    .left {\n      flex: 3 0;\n    }\n    .right {\n      flex: 1 0;\n    }\n  }\n\n  &.layout-4-1 {\n    .left {\n      flex: 4 0;\n    }\n    .right {\n      flex: 1 0;\n    }\n  }\n\n  &.layout-5-1 {\n    .left {\n      flex: 4 0;\n    }\n    .right {\n      flex: 1 0;\n    }\n  }\n\n  &.layout-3-2 {\n    .left {\n      flex: 3 0;\n    }\n    .right {\n      flex: 2 0;\n    }\n  }\n\n  &.layout-2-3 {\n    .left {\n      flex: 2 0;\n    }\n    .right {\n      flex: 3 0;\n    }\n  }\n\n  &.layout-0-1 {\n    .left {\n      flex: 0 0 auto;\n    }\n    .right {\n      flex: 1 0;\n    }\n  }\n\n  &.layout-1-0 {\n    .left {\n      flex: 1 0;\n    }\n    .right {\n      flex: 0 0 auto;\n    }\n  }\n}\n\n.lf-form-react-rsuite5 {\n  .lf-two-columns {\n    margin-bottom: var(--lf-field-margin);\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 51:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".lf-form-plaintext{font-size:var(--lf-font-size)}.lf-form-plaintext .lf-plaintext-field-label{font-weight:600;color:#333}.lf-form-plaintext .plaintext-value:empty::before{content:\"-\"}", "",{"version":3,"sources":["webpack://./components/plaintext-form/plaintext-form.scss"],"names":[],"mappings":"AAAA,mBACE,6BAAA,CAEA,6CACE,eAAA,CACA,UAAA,CAGF,kDACE,WAAA","sourcesContent":[".lf-form-plaintext {\n  font-size: var(--lf-font-size);\n\n  .lf-plaintext-field-label {\n    font-weight: 600;\n    color: #333333;\n  }\n\n  .plaintext-value:empty::before {\n    content: \"-\";\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7242:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".lf-validation-errors{border:1px solid #eebdd2;background-color:#ffddd2;padding:15px;color:#000}.lf-validation-errors.bottom{margin-top:15px}.lf-validation-errors.top{margin-bottom:15px}", "",{"version":3,"sources":["webpack://./components/validation-errors/index.scss"],"names":[],"mappings":"AAAA,sBACE,wBAAA,CACA,wBAAA,CACA,YAAA,CACA,UAAA,CAEA,6BACE,eAAA,CAGF,0BACE,kBAAA","sourcesContent":[".lf-validation-errors {\n  border: 1px solid #eebdd2;\n  background-color: #ffddd2;\n  padding: 15px;\n  color: #000000;\n\n  &.bottom {\n    margin-top: 15px;\n  }\n\n  &.top {\n    margin-bottom: 15px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5861:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".lf-lets-form .label-test-buttons{float:right;background-color:#ccc;color:#555;font-size:10px;padding:1px 3px;margin-top:-16px;border-top-left-radius:3px;text-transform:uppercase}.lf-lets-form.lf-lets-form-edit-mode .lf-buttons{padding:10px;background-image:linear-gradient(45deg, #eeeeee 25%, #ffffff 25%, #ffffff 50%, #eeeeee 50%, #eeeeee 75%, #ffffff 75%, #ffffff 100%);background-size:56.57px 56.57px}.lf-form{--lf-field-margin: 16px;--lf-field-column-margin: 16px;--lf-font-size: 15px;--lf-field-button-margin: 10px;--lf-highligh-color: #ff6633;--lf-hover-color: #FF9F85;--lf-drop-highlight-color: #3498ff}.lf-form.lf-form-buttons-align-center .lf-buttons{justify-content:center}.lf-form.lf-form-buttons-align-left .lf-buttons{justify-content:flex-start}.lf-form.lf-form-buttons-align-right .lf-buttons{justify-content:flex-end}.lf-form .lf-buttons{margin-top:var(--lf-field-margin)}.lf-form [class*=lf-control]:not(:first-child){margin-top:var(--lf-field-margin);margin-bottom:0px !important}.lf-form .lf-control-common-array .lf-control-common-array-item{--lf-field-margin: 15px}.lf-form .lf-control-common-array .lf-control-common-array-item [class^=lf-control]{margin-bottom:0px}.lf-form .lf-control-common-array .lf-control-common-array-item [class^=lf-control]:not(:first-child){margin-top:10px}.lf-icon-asterisk{margin-top:-3px;display:inline-block}.lf-missing-component{border:1px solid #bbb;background-color:#f6f6f6;padding:20px;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-content:stretch;align-items:flex-start}.lf-missing-component .icon{order:0;flex:0 0;align-self:auto;margin-top:2px}.lf-missing-component .tag-component{background-color:#673ab7;color:#fff;font-size:12px;padding:1px 4px 2px 4px;border-radius:3px;line-height:17px}.lf-missing-component .message{display:inline-block;margin-left:10px;order:0;flex:1 0;align-self:auto}", "",{"version":3,"sources":["webpack://./generator/index.scss"],"names":[],"mappings":"AAEE,kCACE,WAAA,CACA,qBAAA,CACA,UAAA,CACA,cAAA,CACA,eAAA,CACA,gBAAA,CACA,0BAAA,CACA,wBAAA,CAIA,iDACE,YAAA,CACA,mIAAA,CACA,+BAAA,CAKN,SACE,uBAAA,CACA,8BAAA,CACA,oBAAA,CACA,8BAAA,CACA,4BAAA,CACA,yBAAA,CACA,kCAAA,CAGE,kDACE,sBAAA,CAIF,gDACE,0BAAA,CAIF,iDACE,wBAAA,CAIJ,qBACE,iCAAA,CAIF,+CACE,iCAAA,CACA,4BAAA,CAKA,gEACE,uBAAA,CAEA,oFACE,iBAAA,CAGF,sGAEE,eAAA,CAMR,kBACE,eAAA,CACA,oBAAA,CAGF,sBACE,qBAAA,CACA,wBAAA,CACA,YAAA,CACA,YAAA,CACA,kBAAA,CACA,cAAA,CACA,0BAAA,CACA,qBAAA,CACA,sBAAA,CAEA,4BACE,OAAA,CACA,QAAA,CACA,eAAA,CACA,cAAA,CAGF,qCACE,wBAAA,CACA,UAAA,CACA,cAAA,CACA,uBAAA,CACA,iBAAA,CACA,gBAAA,CAGF,+BACE,oBAAA,CACA,gBAAA,CACA,OAAA,CACA,QAAA,CACA,eAAA","sourcesContent":[".lf-lets-form{\n\n  .label-test-buttons {\n    float: right;\n    background-color: #cccccc;\n    color: #555555;\n    font-size: 10px;\n    padding: 1px 3px;\n    margin-top: -16px;\n    border-top-left-radius: 3px;\n    text-transform: uppercase;\n  }\n\n  &.lf-lets-form-edit-mode {\n    .lf-buttons {\n      padding: 10px;\n      background-image: linear-gradient(45deg, #eeeeee 25%, #ffffff 25%, #ffffff 50%, #eeeeee 50%, #eeeeee 75%, #ffffff 75%, #ffffff 100%);\n      background-size: 56.57px 56.57px;\n    }\n  }\n}\n\n.lf-form {\n  --lf-field-margin: 16px;\n  --lf-field-column-margin: 16px;\n  --lf-font-size: 15px;\n  --lf-field-button-margin: 10px;\n  --lf-highligh-color: #ff6633;\n  --lf-hover-color: #FF9F85;\n  --lf-drop-highlight-color: #3498ff;\n\n  &.lf-form-buttons-align-center {\n    .lf-buttons {\n      justify-content: center;\n    }\n  }\n  &.lf-form-buttons-align-left {\n    .lf-buttons {\n      justify-content: flex-start;\n    }\n  }\n  &.lf-form-buttons-align-right {\n    .lf-buttons {\n      justify-content: flex-end;\n    }\n  }\n\n  .lf-buttons {\n    margin-top: var(--lf-field-margin);\n  }\n\n  // as a general rule, components have a top margin, unless they are the first of their container\n  [class*=lf-control]:not(:first-child) {\n    margin-top: var(--lf-field-margin);\n    margin-bottom: 0px !important;\n  }\n\n  .lf-control-common-array {\n\n    .lf-control-common-array-item {\n      --lf-field-margin: 15px;\n\n      [class^=lf-control] {\n        margin-bottom: 0px;\n      }\n\n      [class^=lf-control]:not(:first-child) {\n        //margin-top: var(--lf-field-margin);\n        margin-top: 10px;\n      }\n    }\n  }\n}\n\n.lf-icon-asterisk {\n  margin-top: -3px;\n  display: inline-block;\n}\n\n.lf-missing-component {\n  border: 1px solid #bbbbbb;\n  background-color: #f6f6f6;\n  padding: 20px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-content: stretch;\n  align-items: flex-start;\n\n  .icon {\n    order: 0;\n    flex: 0 0;\n    align-self: auto;\n    margin-top: 2px;\n  }\n\n  .tag-component {\n    background-color: #673ab7;\n    color: #ffffff;\n    font-size: 12px;\n    padding: 1px 4px 2px 4px;\n    border-radius: 3px;\n    line-height: 17px;\n  }\n\n  .message {\n    display: inline-block;\n    margin-left: 10px;\n    order: 0;\n    flex: 1 0;\n    align-self: auto;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7559:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".lf-form-react-bootstrap .lf-control-button{min-height:20px}.lf-form-react-bootstrap .lf-control-button .lf-icon{max-width:20px;max-height:20px;margin-top:-2px;margin-right:5px}.lf-form-react-bootstrap .lf-control-button .btn-lg .lf-icon{max-width:24px;max-height:24px}.lf-form-react-bootstrap .lf-control-button .btn-sm .lf-icon{max-width:16px;max-height:16px}", "",{"version":3,"sources":["webpack://./react-bootstrap/button/button.scss"],"names":[],"mappings":"AACE,4CACE,eAAA,CAEA,qDACE,cAAA,CACA,eAAA,CACA,eAAA,CACA,gBAAA,CAIA,6DACE,cAAA,CACA,eAAA,CAKF,6DACE,cAAA,CACA,eAAA","sourcesContent":[".lf-form-react-bootstrap {\n  .lf-control-button {\n    min-height: 20px;\n    \n    .lf-icon {\n      max-width: 20px;\n      max-height: 20px;\n      margin-top: -2px;\n      margin-right: 5px;\n    }\n\n    .btn-lg {\n      .lf-icon {\n        max-width: 24px;\n        max-height: 24px;\n      }\n    }\n\n    .btn-sm {\n      .lf-icon {\n        max-width: 16px;\n        max-height: 16px;\n      }\n    }\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 8484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".lf-form-react-bootstrap .lf-buttons{display:flex}.lf-form-react-bootstrap .lf-buttons button:not(:first-child){margin-left:10px}", "",{"version":3,"sources":["webpack://./react-bootstrap/form/index.scss"],"names":[],"mappings":"AACE,qCACE,YAAA,CAEA,8DACE,gBAAA","sourcesContent":[".lf-form-react-bootstrap {\n  .lf-buttons {\n    display: flex;\n\n    button:not(:first-child) {\n      margin-left: 10px;\n    }\n  }\n\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 8315:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".lf-form-react-bootstrap .lf-control-tabs [role=tabpanel]{padding-top:var(--lf-field-margin)}", "",{"version":3,"sources":["webpack://./react-bootstrap/tabs/tabs.scss"],"names":[],"mappings":"AAEI,0DACE,kCAAA","sourcesContent":[".lf-form-react-bootstrap {\n  .lf-control-tabs {\n    [role=tabpanel] {\n      padding-top: var(--lf-field-margin);\n    }\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3645:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 7537:
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 8668:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(1469);

/**
 * Casts `value` as an array if it's not one.
 *
 * @static
 * @memberOf _
 * @since 4.4.0
 * @category Lang
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast array.
 * @example
 *
 * _.castArray(1);
 * // => [1]
 *
 * _.castArray({ 'a': 1 });
 * // => [{ 'a': 1 }]
 *
 * _.castArray('abc');
 * // => ['abc']
 *
 * _.castArray(null);
 * // => [null]
 *
 * _.castArray(undefined);
 * // => [undefined]
 *
 * _.castArray();
 * // => []
 *
 * var array = [1, 2, 3];
 * console.log(_.castArray(array) === array);
 * // => true
 */
function castArray() {
  if (!arguments.length) {
    return [];
  }
  var value = arguments[0];
  return isArray(value) ? value : [value];
}

module.exports = castArray;


/***/ }),

/***/ 2705:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(5639);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ 6874:
/***/ ((module) => {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ 7443:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIndexOf = __webpack_require__(2118);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ 1196:
/***/ ((module) => {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),

/***/ 9932:
/***/ ((module) => {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ 2488:
/***/ ((module) => {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ 4286:
/***/ ((module) => {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),

/***/ 4865:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(9465),
    eq = __webpack_require__(7813);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ 9465:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(8777);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ 5990:
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ 1078:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(2488),
    isFlattenable = __webpack_require__(7285);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ 7786:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(1811),
    toKey = __webpack_require__(327);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ 4239:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ 13:
/***/ ((module) => {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ 2118:
/***/ ((module) => {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ 1761:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(4239),
    isObjectLike = __webpack_require__(7005);

/** `Object#toString` result references. */
var dateTag = '[object Date]';

/**
 * The base implementation of `_.isDate` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
 */
function baseIsDate(value) {
  return isObjectLike(value) && baseGetTag(value) == dateTag;
}

module.exports = baseIsDate;


/***/ }),

/***/ 280:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(5569);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ 5970:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var basePickBy = __webpack_require__(3012),
    hasIn = __webpack_require__(9095);

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}

module.exports = basePick;


/***/ }),

/***/ 3012:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(7786),
    baseSet = __webpack_require__(611),
    castPath = __webpack_require__(1811);

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;


/***/ }),

/***/ 611:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(4865),
    castPath = __webpack_require__(1811),
    isIndex = __webpack_require__(5776),
    isObject = __webpack_require__(3218),
    toKey = __webpack_require__(327);

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),

/***/ 4259:
/***/ ((module) => {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ 531:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(2705),
    arrayMap = __webpack_require__(9932),
    isArray = __webpack_require__(1469),
    isSymbol = __webpack_require__(3448);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ 7561:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trimmedEndIndex = __webpack_require__(7990);

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ 7518:
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ 5652:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(8668),
    arrayIncludes = __webpack_require__(7443),
    arrayIncludesWith = __webpack_require__(1196),
    cacheHas = __webpack_require__(4757),
    createSet = __webpack_require__(3593),
    setToArray = __webpack_require__(1814);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),

/***/ 7406:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(1811),
    last = __webpack_require__(928),
    parent = __webpack_require__(292),
    toKey = __webpack_require__(327);

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

module.exports = baseUnset;


/***/ }),

/***/ 4757:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIndexOf = __webpack_require__(2118);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ 1811:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(1469),
    isKey = __webpack_require__(5403),
    stringToPath = __webpack_require__(5514),
    toString = __webpack_require__(9833);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ 180:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSlice = __webpack_require__(4259);

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ }),

/***/ 5512:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIndexOf = __webpack_require__(2118);

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the last unmatched string symbol.
 */
function charsEndIndex(strSymbols, chrSymbols) {
  var index = strSymbols.length;

  while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

module.exports = charsEndIndex;


/***/ }),

/***/ 9817:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIndexOf = __webpack_require__(2118);

/**
 * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the first unmatched string symbol.
 */
function charsStartIndex(strSymbols, chrSymbols) {
  var index = -1,
      length = strSymbols.length;

  while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

module.exports = charsStartIndex;


/***/ }),

/***/ 8363:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(4865),
    baseAssignValue = __webpack_require__(9465);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ 3593:
/***/ ((module) => {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ 696:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPlainObject = __webpack_require__(8630);

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return isPlainObject(value) ? undefined : value;
}

module.exports = customOmitClone;


/***/ }),

/***/ 8777:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(852);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ 9021:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var flatten = __webpack_require__(5564),
    overRest = __webpack_require__(5357),
    setToString = __webpack_require__(61);

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),

/***/ 1957:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ 6904:
/***/ ((module) => {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ 852:
/***/ ((module) => {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ 5924:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(5569);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ 4160:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ 222:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(1811),
    isArguments = __webpack_require__(5694),
    isArray = __webpack_require__(1469),
    isIndex = __webpack_require__(5776),
    isLength = __webpack_require__(1780),
    toKey = __webpack_require__(327);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ 2689:
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ 7285:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(2705),
    isArguments = __webpack_require__(5694),
    isArray = __webpack_require__(1469);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ 5776:
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ 5403:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(1469),
    isSymbol = __webpack_require__(3448);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ 5726:
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ 4523:
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ 1167:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(1957);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


/***/ }),

/***/ 5569:
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ 5357:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var apply = __webpack_require__(6874);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ 292:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(7786),
    baseSlice = __webpack_require__(4259);

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

module.exports = parent;


/***/ }),

/***/ 5639:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(1957);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ 1814:
/***/ ((module) => {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ 61:
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ 3140:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var asciiToArray = __webpack_require__(4286),
    hasUnicode = __webpack_require__(2689),
    unicodeToArray = __webpack_require__(676);

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),

/***/ 5514:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoizeCapped = __webpack_require__(4523);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ 327:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isSymbol = __webpack_require__(3448);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ 7990:
/***/ ((module) => {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ 676:
/***/ ((module) => {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),

/***/ 6678:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseClone = __webpack_require__(5990);

/** Used to compose bitmasks for cloning. */
var CLONE_SYMBOLS_FLAG = 4;

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG);
}

module.exports = clone;


/***/ }),

/***/ 7813:
/***/ ((module) => {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ 5564:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFlatten = __webpack_require__(1078);

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),

/***/ 9095:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseHasIn = __webpack_require__(13),
    hasPath = __webpack_require__(222);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ 5694:
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ 1469:
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ 8612:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(3560),
    isLength = __webpack_require__(1780);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ 1584:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(4239),
    isObjectLike = __webpack_require__(7005);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]';

/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
 * @example
 *
 * _.isBoolean(false);
 * // => true
 *
 * _.isBoolean(null);
 * // => false
 */
function isBoolean(value) {
  return value === true || value === false ||
    (isObjectLike(value) && baseGetTag(value) == boolTag);
}

module.exports = isBoolean;


/***/ }),

/***/ 4144:
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ 7960:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsDate = __webpack_require__(1761),
    baseUnary = __webpack_require__(7518),
    nodeUtil = __webpack_require__(1167);

/* Node.js helper references. */
var nodeIsDate = nodeUtil && nodeUtil.isDate;

/**
 * Checks if `value` is classified as a `Date` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
 * @example
 *
 * _.isDate(new Date);
 * // => true
 *
 * _.isDate('Mon April 23 2012');
 * // => false
 */
var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

module.exports = isDate;


/***/ }),

/***/ 1609:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseKeys = __webpack_require__(280),
    getTag = __webpack_require__(4160),
    isArguments = __webpack_require__(5694),
    isArray = __webpack_require__(1469),
    isArrayLike = __webpack_require__(8612),
    isBuffer = __webpack_require__(4144),
    isPrototype = __webpack_require__(5726),
    isTypedArray = __webpack_require__(6719);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

module.exports = isEmpty;


/***/ }),

/***/ 3560:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(4239),
    isObject = __webpack_require__(3218);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ 1780:
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ 1763:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(4239),
    isObjectLike = __webpack_require__(7005);

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && baseGetTag(value) == numberTag);
}

module.exports = isNumber;


/***/ }),

/***/ 3218:
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ 7005:
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ 8630:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(4239),
    getPrototype = __webpack_require__(5924),
    isObjectLike = __webpack_require__(7005);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ 7037:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(4239),
    isArray = __webpack_require__(1469),
    isObjectLike = __webpack_require__(7005);

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),

/***/ 3448:
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ 6719:
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ 3674:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(5569);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ 928:
/***/ ((module) => {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),

/***/ 7557:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(9932),
    baseClone = __webpack_require__(5990),
    baseUnset = __webpack_require__(7406),
    castPath = __webpack_require__(1811),
    copyObject = __webpack_require__(8363),
    customOmitClone = __webpack_require__(696),
    flatRest = __webpack_require__(9021),
    getAllKeysIn = __webpack_require__(6904);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});

module.exports = omit;


/***/ }),

/***/ 8718:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var basePick = __webpack_require__(5970),
    flatRest = __webpack_require__(9021);

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});

module.exports = pick;


/***/ }),

/***/ 9833:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseToString = __webpack_require__(531);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ 2742:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseToString = __webpack_require__(531),
    baseTrim = __webpack_require__(7561),
    castSlice = __webpack_require__(180),
    charsEndIndex = __webpack_require__(5512),
    charsStartIndex = __webpack_require__(9817),
    stringToArray = __webpack_require__(3140),
    toString = __webpack_require__(9833);

/**
 * Removes leading and trailing whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trim('  abc  ');
 * // => 'abc'
 *
 * _.trim('-_-abc-_-', '_-');
 * // => 'abc'
 *
 * _.map(['  foo  ', '  bar  '], _.trim);
 * // => ['foo', 'bar']
 */
function trim(string, chars, guard) {
  string = toString(string);
  if (string && (guard || chars === undefined)) {
    return baseTrim(string);
  }
  if (!string || !(chars = baseToString(chars))) {
    return string;
  }
  var strSymbols = stringToArray(string),
      chrSymbols = stringToArray(chars),
      start = charsStartIndex(strSymbols, chrSymbols),
      end = charsEndIndex(strSymbols, chrSymbols) + 1;

  return castSlice(strSymbols, start, end).join('');
}

module.exports = trim;


/***/ }),

/***/ 4908:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseUniq = __webpack_require__(5652);

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? baseUniq(array) : [];
}

module.exports = uniq;


/***/ }),

/***/ 3955:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toString = __webpack_require__(9833);

/** Used to generate unique IDs. */
var idCounter = 0;

/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {string} [prefix=''] The value to prefix the ID with.
 * @returns {string} Returns the unique ID.
 * @example
 *
 * _.uniqueId('contact_');
 * // => 'contact_104'
 *
 * _.uniqueId();
 * // => '105'
 */
function uniqueId(prefix) {
  var id = ++idCounter;
  return toString(prefix) + id;
}

module.exports = uniqueId;


/***/ }),

/***/ 5251:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(8156),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 5893:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(5251);
} else {}


/***/ }),

/***/ 4685:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5861);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals : undefined);


/***/ }),

/***/ 3379:
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 9216:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 3565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 7795:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 4589:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 2473:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "production" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ 5099:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__5099__;

/***/ }),

/***/ 8156:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__8156__;

/***/ }),

/***/ 2636:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__2636__;

/***/ }),

/***/ 7536:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Qr": () => (/* binding */ Controller),
/* harmony export */   "cI": () => (/* binding */ useForm)
/* harmony export */ });
/* unused harmony exports FormProvider, appendErrors, get, set, useController, useFieldArray, useFormContext, useFormState, useWatch */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8156);


var isCheckBoxInput = (element) => element.type === 'checkbox';

var isDateObject = (value) => value instanceof Date;

var isNullOrUndefined = (value) => value == null;

const isObjectType = (value) => typeof value === 'object';
var isObject = (value) => !isNullOrUndefined(value) &&
    !Array.isArray(value) &&
    isObjectType(value) &&
    !isDateObject(value);

var getEventValue = (event) => isObject(event) && event.target
    ? isCheckBoxInput(event.target)
        ? event.target.checked
        : event.target.value
    : event;

var getNodeParentName = (name) => name.substring(0, name.search(/\.\d+(\.|$)/)) || name;

var isNameInFieldArray = (names, name) => names.has(getNodeParentName(name));

var isPlainObject = (tempObject) => {
    const prototypeCopy = tempObject.constructor && tempObject.constructor.prototype;
    return (isObject(prototypeCopy) && prototypeCopy.hasOwnProperty('isPrototypeOf'));
};

var isWeb = typeof window !== 'undefined' &&
    typeof window.HTMLElement !== 'undefined' &&
    typeof document !== 'undefined';

function cloneObject(data) {
    let copy;
    const isArray = Array.isArray(data);
    if (data instanceof Date) {
        copy = new Date(data);
    }
    else if (data instanceof Set) {
        copy = new Set(data);
    }
    else if (!(isWeb && (data instanceof Blob || data instanceof FileList)) &&
        (isArray || isObject(data))) {
        copy = isArray ? [] : {};
        if (!Array.isArray(data) && !isPlainObject(data)) {
            copy = data;
        }
        else {
            for (const key in data) {
                copy[key] = cloneObject(data[key]);
            }
        }
    }
    else {
        return data;
    }
    return copy;
}

var compact = (value) => Array.isArray(value) ? value.filter(Boolean) : [];

var isUndefined = (val) => val === undefined;

var get = (obj, path, defaultValue) => {
    if (!path || !isObject(obj)) {
        return defaultValue;
    }
    const result = compact(path.split(/[,[\].]+?/)).reduce((result, key) => isNullOrUndefined(result) ? result : result[key], obj);
    return isUndefined(result) || result === obj
        ? isUndefined(obj[path])
            ? defaultValue
            : obj[path]
        : result;
};

const EVENTS = {
    BLUR: 'blur',
    FOCUS_OUT: 'focusout',
    CHANGE: 'change',
};
const VALIDATION_MODE = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all',
};
const INPUT_VALIDATION_RULES = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
};

const HookFormContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
/**
 * This custom hook allows you to access the form context. useFormContext is intended to be used in deeply nested structures, where it would become inconvenient to pass the context as a prop. To be used with {@link FormProvider}.
 *
 * @remarks
 * [API](https://react-hook-form.com/api/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
 *
 * @returns return all useForm methods
 *
 * @example
 * ```tsx
 * function App() {
 *   const methods = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <FormProvider {...methods} >
 *       <form onSubmit={methods.handleSubmit(onSubmit)}>
 *         <NestedInput />
 *         <input type="submit" />
 *       </form>
 *     </FormProvider>
 *   );
 * }
 *
 *  function NestedInput() {
 *   const { register } = useFormContext(); // retrieve all hook methods
 *   return <input {...register("test")} />;
 * }
 * ```
 */
const useFormContext = () => react__WEBPACK_IMPORTED_MODULE_0__.useContext(HookFormContext);
/**
 * A provider component that propagates the `useForm` methods to all children components via [React Context](https://reactjs.org/docs/context.html) API. To be used with {@link useFormContext}.
 *
 * @remarks
 * [API](https://react-hook-form.com/api/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
 *
 * @param props - all useFrom methods
 *
 * @example
 * ```tsx
 * function App() {
 *   const methods = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <FormProvider {...methods} >
 *       <form onSubmit={methods.handleSubmit(onSubmit)}>
 *         <NestedInput />
 *         <input type="submit" />
 *       </form>
 *     </FormProvider>
 *   );
 * }
 *
 *  function NestedInput() {
 *   const { register } = useFormContext(); // retrieve all hook methods
 *   return <input {...register("test")} />;
 * }
 * ```
 */
const FormProvider = (props) => {
    const { children, ...data } = props;
    return (React.createElement(HookFormContext.Provider, { value: data }, children));
};

var getProxyFormState = (formState, control, localProxyFormState, isRoot = true) => {
    const result = {
        defaultValues: control._defaultValues,
    };
    for (const key in formState) {
        Object.defineProperty(result, key, {
            get: () => {
                const _key = key;
                if (control._proxyFormState[_key] !== VALIDATION_MODE.all) {
                    control._proxyFormState[_key] = !isRoot || VALIDATION_MODE.all;
                }
                localProxyFormState && (localProxyFormState[_key] = true);
                return formState[_key];
            },
        });
    }
    return result;
};

var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;

var shouldRenderFormState = (formStateData, _proxyFormState, updateFormState, isRoot) => {
    updateFormState(formStateData);
    const { name, ...formState } = formStateData;
    return (isEmptyObject(formState) ||
        Object.keys(formState).length >= Object.keys(_proxyFormState).length ||
        Object.keys(formState).find((key) => _proxyFormState[key] ===
            (!isRoot || VALIDATION_MODE.all)));
};

var convertToArrayPayload = (value) => (Array.isArray(value) ? value : [value]);

var shouldSubscribeByName = (name, signalName, exact) => exact && signalName
    ? name === signalName
    : !name ||
        !signalName ||
        name === signalName ||
        convertToArrayPayload(name).some((currentName) => currentName &&
            (currentName.startsWith(signalName) ||
                signalName.startsWith(currentName)));

function useSubscribe(props) {
    const _props = react__WEBPACK_IMPORTED_MODULE_0__.useRef(props);
    _props.current = props;
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        const subscription = !props.disabled &&
            _props.current.subject &&
            _props.current.subject.subscribe({
                next: _props.current.next,
            });
        return () => {
            subscription && subscription.unsubscribe();
        };
    }, [props.disabled]);
}

/**
 * This custom hook allows you to subscribe to each form state, and isolate the re-render at the custom hook level. It has its scope in terms of form state subscription, so it would not affect other useFormState and useForm. Using this hook can reduce the re-render impact on large and complex form application.
 *
 * @remarks
 * [API](https://react-hook-form.com/api/useformstate) • [Demo](https://codesandbox.io/s/useformstate-75xly)
 *
 * @param props - include options on specify fields to subscribe. {@link UseFormStateReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, control } = useForm({
 *     defaultValues: {
 *     firstName: "firstName"
 *   }});
 *   const { dirtyFields } = useFormState({
 *     control
 *   });
 *   const onSubmit = (data) => console.log(data);
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input {...register("firstName")} placeholder="First Name" />
 *       {dirtyFields.firstName && <p>Field is dirty.</p>}
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */
function useFormState(props) {
    const methods = useFormContext();
    const { control = methods.control, disabled, name, exact } = props || {};
    const [formState, updateFormState] = react__WEBPACK_IMPORTED_MODULE_0__.useState(control._formState);
    const _mounted = react__WEBPACK_IMPORTED_MODULE_0__.useRef(true);
    const _localProxyFormState = react__WEBPACK_IMPORTED_MODULE_0__.useRef({
        isDirty: false,
        isLoading: false,
        dirtyFields: false,
        touchedFields: false,
        isValidating: false,
        isValid: false,
        errors: false,
    });
    const _name = react__WEBPACK_IMPORTED_MODULE_0__.useRef(name);
    _name.current = name;
    useSubscribe({
        disabled,
        next: (value) => _mounted.current &&
            shouldSubscribeByName(_name.current, value.name, exact) &&
            shouldRenderFormState(value, _localProxyFormState.current, control._updateFormState) &&
            updateFormState({
                ...control._formState,
                ...value,
            }),
        subject: control._subjects.state,
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        _mounted.current = true;
        const isDirty = control._proxyFormState.isDirty && control._getDirty();
        if (isDirty !== control._formState.isDirty) {
            control._subjects.state.next({
                isDirty,
            });
        }
        _localProxyFormState.current.isValid && control._updateValid(true);
        return () => {
            _mounted.current = false;
        };
    }, [control]);
    return getProxyFormState(formState, control, _localProxyFormState.current, false);
}

var isString = (value) => typeof value === 'string';

var generateWatchOutput = (names, _names, formValues, isGlobal, defaultValue) => {
    if (isString(names)) {
        isGlobal && _names.watch.add(names);
        return get(formValues, names, defaultValue);
    }
    if (Array.isArray(names)) {
        return names.map((fieldName) => (isGlobal && _names.watch.add(fieldName), get(formValues, fieldName)));
    }
    isGlobal && (_names.watchAll = true);
    return formValues;
};

/**
 * Custom hook to subscribe to field change and isolate re-rendering at the component level.
 *
 * @remarks
 *
 * [API](https://react-hook-form.com/api/usewatch) • [Demo](https://codesandbox.io/s/react-hook-form-v7-ts-usewatch-h9i5e)
 *
 * @example
 * ```tsx
 * const { watch } = useForm();
 * const values = useWatch({
 *   name: "fieldName"
 *   control,
 * })
 * ```
 */
function useWatch(props) {
    const methods = useFormContext();
    const { control = methods.control, name, defaultValue, disabled, exact, } = props || {};
    const _name = react__WEBPACK_IMPORTED_MODULE_0__.useRef(name);
    _name.current = name;
    useSubscribe({
        disabled,
        subject: control._subjects.values,
        next: (formState) => {
            if (shouldSubscribeByName(_name.current, formState.name, exact)) {
                updateValue(cloneObject(generateWatchOutput(_name.current, control._names, formState.values || control._formValues, false, defaultValue)));
            }
        },
    });
    const [value, updateValue] = react__WEBPACK_IMPORTED_MODULE_0__.useState(control._getWatch(name, defaultValue));
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => control._removeUnmounted());
    return value;
}

var isKey = (value) => /^\w*$/.test(value);

var stringToPath = (input) => compact(input.replace(/["|']|\]/g, '').split(/\.|\[/));

function set(object, path, value) {
    let index = -1;
    const tempPath = isKey(path) ? [path] : stringToPath(path);
    const length = tempPath.length;
    const lastIndex = length - 1;
    while (++index < length) {
        const key = tempPath[index];
        let newValue = value;
        if (index !== lastIndex) {
            const objValue = object[key];
            newValue =
                isObject(objValue) || Array.isArray(objValue)
                    ? objValue
                    : !isNaN(+tempPath[index + 1])
                        ? []
                        : {};
        }
        object[key] = newValue;
        object = object[key];
    }
    return object;
}

/**
 * Custom hook to work with controlled component, this function provide you with both form and field level state. Re-render is isolated at the hook level.
 *
 * @remarks
 * [API](https://react-hook-form.com/api/usecontroller) • [Demo](https://codesandbox.io/s/usecontroller-0o8px)
 *
 * @param props - the path name to the form field value, and validation rules.
 *
 * @returns field properties, field and form state. {@link UseControllerReturn}
 *
 * @example
 * ```tsx
 * function Input(props) {
 *   const { field, fieldState, formState } = useController(props);
 *   return (
 *     <div>
 *       <input {...field} placeholder={props.name} />
 *       <p>{fieldState.isTouched && "Touched"}</p>
 *       <p>{formState.isSubmitted ? "submitted" : ""}</p>
 *     </div>
 *   );
 * }
 * ```
 */
function useController(props) {
    const methods = useFormContext();
    const { name, control = methods.control, shouldUnregister } = props;
    const isArrayField = isNameInFieldArray(control._names.array, name);
    const value = useWatch({
        control,
        name,
        defaultValue: get(control._formValues, name, get(control._defaultValues, name, props.defaultValue)),
        exact: true,
    });
    const formState = useFormState({
        control,
        name,
    });
    const _registerProps = react__WEBPACK_IMPORTED_MODULE_0__.useRef(control.register(name, {
        ...props.rules,
        value,
    }));
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        const _shouldUnregisterField = control._options.shouldUnregister || shouldUnregister;
        const updateMounted = (name, value) => {
            const field = get(control._fields, name);
            if (field) {
                field._f.mount = value;
            }
        };
        updateMounted(name, true);
        if (_shouldUnregisterField) {
            const value = cloneObject(get(control._options.defaultValues, name));
            set(control._defaultValues, name, value);
            if (isUndefined(get(control._formValues, name))) {
                set(control._formValues, name, value);
            }
        }
        return () => {
            (isArrayField
                ? _shouldUnregisterField && !control._state.action
                : _shouldUnregisterField)
                ? control.unregister(name)
                : updateMounted(name, false);
        };
    }, [name, control, isArrayField, shouldUnregister]);
    return {
        field: {
            name,
            value,
            onChange: react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event) => _registerProps.current.onChange({
                target: {
                    value: getEventValue(event),
                    name: name,
                },
                type: EVENTS.CHANGE,
            }), [name]),
            onBlur: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => _registerProps.current.onBlur({
                target: {
                    value: get(control._formValues, name),
                    name: name,
                },
                type: EVENTS.BLUR,
            }), [name, control]),
            ref: (elm) => {
                const field = get(control._fields, name);
                if (field && elm) {
                    field._f.ref = {
                        focus: () => elm.focus(),
                        select: () => elm.select(),
                        setCustomValidity: (message) => elm.setCustomValidity(message),
                        reportValidity: () => elm.reportValidity(),
                    };
                }
            },
        },
        formState,
        fieldState: Object.defineProperties({}, {
            invalid: {
                enumerable: true,
                get: () => !!get(formState.errors, name),
            },
            isDirty: {
                enumerable: true,
                get: () => !!get(formState.dirtyFields, name),
            },
            isTouched: {
                enumerable: true,
                get: () => !!get(formState.touchedFields, name),
            },
            error: {
                enumerable: true,
                get: () => get(formState.errors, name),
            },
        }),
    };
}

/**
 * Component based on `useController` hook to work with controlled component.
 *
 * @remarks
 * [API](https://react-hook-form.com/api/usecontroller/controller) • [Demo](https://codesandbox.io/s/react-hook-form-v6-controller-ts-jwyzw) • [Video](https://www.youtube.com/watch?v=N2UNk_UCVyA)
 *
 * @param props - the path name to the form field value, and validation rules.
 *
 * @returns provide field handler functions, field and form state.
 *
 * @example
 * ```tsx
 * function App() {
 *   const { control } = useForm<FormValues>({
 *     defaultValues: {
 *       test: ""
 *     }
 *   });
 *
 *   return (
 *     <form>
 *       <Controller
 *         control={control}
 *         name="test"
 *         render={({ field: { onChange, onBlur, value, ref }, formState, fieldState }) => (
 *           <>
 *             <input
 *               onChange={onChange} // send value to hook form
 *               onBlur={onBlur} // notify when input is touched
 *               value={value} // return updated value
 *               ref={ref} // set ref for focus management
 *             />
 *             <p>{formState.isSubmitted ? "submitted" : ""}</p>
 *             <p>{fieldState.isTouched ? "touched" : ""}</p>
 *           </>
 *         )}
 *       />
 *     </form>
 *   );
 * }
 * ```
 */
const Controller = (props) => props.render(useController(props));

var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => validateAllFieldCriteria
    ? {
        ...errors[name],
        types: {
            ...(errors[name] && errors[name].types ? errors[name].types : {}),
            [type]: message || true,
        },
    }
    : {};

const focusFieldBy = (fields, callback, fieldsNames) => {
    for (const key of fieldsNames || Object.keys(fields)) {
        const field = get(fields, key);
        if (field) {
            const { _f, ...currentField } = field;
            if (_f && callback(_f.name)) {
                if (_f.ref.focus) {
                    _f.ref.focus();
                    break;
                }
                else if (_f.refs && _f.refs[0].focus) {
                    _f.refs[0].focus();
                    break;
                }
            }
            else if (isObject(currentField)) {
                focusFieldBy(currentField, callback);
            }
        }
    }
};

var generateId = () => {
    const d = typeof performance === 'undefined' ? Date.now() : performance.now() * 1000;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16 + d) % 16 | 0;
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
};

var getFocusFieldName = (name, index, options = {}) => options.shouldFocus || isUndefined(options.shouldFocus)
    ? options.focusName ||
        `${name}.${isUndefined(options.focusIndex) ? index : options.focusIndex}.`
    : '';

var getValidationModes = (mode) => ({
    isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
    isOnBlur: mode === VALIDATION_MODE.onBlur,
    isOnChange: mode === VALIDATION_MODE.onChange,
    isOnAll: mode === VALIDATION_MODE.all,
    isOnTouch: mode === VALIDATION_MODE.onTouched,
});

var isWatched = (name, _names, isBlurEvent) => !isBlurEvent &&
    (_names.watchAll ||
        _names.watch.has(name) ||
        [..._names.watch].some((watchName) => name.startsWith(watchName) &&
            /^\.\w+/.test(name.slice(watchName.length))));

var updateFieldArrayRootError = (errors, error, name) => {
    const fieldArrayErrors = compact(get(errors, name));
    set(fieldArrayErrors, 'root', error[name]);
    set(errors, name, fieldArrayErrors);
    return errors;
};

var isBoolean = (value) => typeof value === 'boolean';

var isFileInput = (element) => element.type === 'file';

var isFunction = (value) => typeof value === 'function';

var isHTMLElement = (value) => {
    if (!isWeb) {
        return false;
    }
    const owner = value ? value.ownerDocument : 0;
    return (value instanceof
        (owner && owner.defaultView ? owner.defaultView.HTMLElement : HTMLElement));
};

var isMessage = (value) => isString(value);

var isRadioInput = (element) => element.type === 'radio';

var isRegex = (value) => value instanceof RegExp;

const defaultResult = {
    value: false,
    isValid: false,
};
const validResult = { value: true, isValid: true };
var getCheckboxValue = (options) => {
    if (Array.isArray(options)) {
        if (options.length > 1) {
            const values = options
                .filter((option) => option && option.checked && !option.disabled)
                .map((option) => option.value);
            return { value: values, isValid: !!values.length };
        }
        return options[0].checked && !options[0].disabled
            ? // @ts-expect-error expected to work in the browser
                options[0].attributes && !isUndefined(options[0].attributes.value)
                    ? isUndefined(options[0].value) || options[0].value === ''
                        ? validResult
                        : { value: options[0].value, isValid: true }
                    : validResult
            : defaultResult;
    }
    return defaultResult;
};

const defaultReturn = {
    isValid: false,
    value: null,
};
var getRadioValue = (options) => Array.isArray(options)
    ? options.reduce((previous, option) => option && option.checked && !option.disabled
        ? {
            isValid: true,
            value: option.value,
        }
        : previous, defaultReturn)
    : defaultReturn;

function getValidateError(result, ref, type = 'validate') {
    if (isMessage(result) ||
        (Array.isArray(result) && result.every(isMessage)) ||
        (isBoolean(result) && !result)) {
        return {
            type,
            message: isMessage(result) ? result : '',
            ref,
        };
    }
}

var getValueAndMessage = (validationData) => isObject(validationData) && !isRegex(validationData)
    ? validationData
    : {
        value: validationData,
        message: '',
    };

var validateField = async (field, formValues, validateAllFieldCriteria, shouldUseNativeValidation, isFieldArray) => {
    const { ref, refs, required, maxLength, minLength, min, max, pattern, validate, name, valueAsNumber, mount, disabled, } = field._f;
    const inputValue = get(formValues, name);
    if (!mount || disabled) {
        return {};
    }
    const inputRef = refs ? refs[0] : ref;
    const setCustomValidity = (message) => {
        if (shouldUseNativeValidation && inputRef.reportValidity) {
            inputRef.setCustomValidity(isBoolean(message) ? '' : message || '');
            inputRef.reportValidity();
        }
    };
    const error = {};
    const isRadio = isRadioInput(ref);
    const isCheckBox = isCheckBoxInput(ref);
    const isRadioOrCheckbox = isRadio || isCheckBox;
    const isEmpty = ((valueAsNumber || isFileInput(ref)) &&
        isUndefined(ref.value) &&
        isUndefined(inputValue)) ||
        (isHTMLElement(ref) && ref.value === '') ||
        inputValue === '' ||
        (Array.isArray(inputValue) && !inputValue.length);
    const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
    const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
        const message = exceedMax ? maxLengthMessage : minLengthMessage;
        error[name] = {
            type: exceedMax ? maxType : minType,
            message,
            ref,
            ...appendErrorsCurry(exceedMax ? maxType : minType, message),
        };
    };
    if (isFieldArray
        ? !Array.isArray(inputValue) || !inputValue.length
        : required &&
            ((!isRadioOrCheckbox && (isEmpty || isNullOrUndefined(inputValue))) ||
                (isBoolean(inputValue) && !inputValue) ||
                (isCheckBox && !getCheckboxValue(refs).isValid) ||
                (isRadio && !getRadioValue(refs).isValid))) {
        const { value, message } = isMessage(required)
            ? { value: !!required, message: required }
            : getValueAndMessage(required);
        if (value) {
            error[name] = {
                type: INPUT_VALIDATION_RULES.required,
                message,
                ref: inputRef,
                ...appendErrorsCurry(INPUT_VALIDATION_RULES.required, message),
            };
            if (!validateAllFieldCriteria) {
                setCustomValidity(message);
                return error;
            }
        }
    }
    if (!isEmpty && (!isNullOrUndefined(min) || !isNullOrUndefined(max))) {
        let exceedMax;
        let exceedMin;
        const maxOutput = getValueAndMessage(max);
        const minOutput = getValueAndMessage(min);
        if (!isNullOrUndefined(inputValue) && !isNaN(inputValue)) {
            const valueNumber = ref.valueAsNumber ||
                (inputValue ? +inputValue : inputValue);
            if (!isNullOrUndefined(maxOutput.value)) {
                exceedMax = valueNumber > maxOutput.value;
            }
            if (!isNullOrUndefined(minOutput.value)) {
                exceedMin = valueNumber < minOutput.value;
            }
        }
        else {
            const valueDate = ref.valueAsDate || new Date(inputValue);
            const convertTimeToDate = (time) => new Date(new Date().toDateString() + ' ' + time);
            const isTime = ref.type == 'time';
            const isWeek = ref.type == 'week';
            if (isString(maxOutput.value) && inputValue) {
                exceedMax = isTime
                    ? convertTimeToDate(inputValue) > convertTimeToDate(maxOutput.value)
                    : isWeek
                        ? inputValue > maxOutput.value
                        : valueDate > new Date(maxOutput.value);
            }
            if (isString(minOutput.value) && inputValue) {
                exceedMin = isTime
                    ? convertTimeToDate(inputValue) < convertTimeToDate(minOutput.value)
                    : isWeek
                        ? inputValue < minOutput.value
                        : valueDate < new Date(minOutput.value);
            }
        }
        if (exceedMax || exceedMin) {
            getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
            if (!validateAllFieldCriteria) {
                setCustomValidity(error[name].message);
                return error;
            }
        }
    }
    if ((maxLength || minLength) &&
        !isEmpty &&
        (isString(inputValue) || (isFieldArray && Array.isArray(inputValue)))) {
        const maxLengthOutput = getValueAndMessage(maxLength);
        const minLengthOutput = getValueAndMessage(minLength);
        const exceedMax = !isNullOrUndefined(maxLengthOutput.value) &&
            inputValue.length > +maxLengthOutput.value;
        const exceedMin = !isNullOrUndefined(minLengthOutput.value) &&
            inputValue.length < +minLengthOutput.value;
        if (exceedMax || exceedMin) {
            getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
            if (!validateAllFieldCriteria) {
                setCustomValidity(error[name].message);
                return error;
            }
        }
    }
    if (pattern && !isEmpty && isString(inputValue)) {
        const { value: patternValue, message } = getValueAndMessage(pattern);
        if (isRegex(patternValue) && !inputValue.match(patternValue)) {
            error[name] = {
                type: INPUT_VALIDATION_RULES.pattern,
                message,
                ref,
                ...appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message),
            };
            if (!validateAllFieldCriteria) {
                setCustomValidity(message);
                return error;
            }
        }
    }
    if (validate) {
        if (isFunction(validate)) {
            const result = await validate(inputValue, formValues);
            const validateError = getValidateError(result, inputRef);
            if (validateError) {
                error[name] = {
                    ...validateError,
                    ...appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message),
                };
                if (!validateAllFieldCriteria) {
                    setCustomValidity(validateError.message);
                    return error;
                }
            }
        }
        else if (isObject(validate)) {
            let validationResult = {};
            for (const key in validate) {
                if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
                    break;
                }
                const validateError = getValidateError(await validate[key](inputValue, formValues), inputRef, key);
                if (validateError) {
                    validationResult = {
                        ...validateError,
                        ...appendErrorsCurry(key, validateError.message),
                    };
                    setCustomValidity(validateError.message);
                    if (validateAllFieldCriteria) {
                        error[name] = validationResult;
                    }
                }
            }
            if (!isEmptyObject(validationResult)) {
                error[name] = {
                    ref: inputRef,
                    ...validationResult,
                };
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
    }
    setCustomValidity(true);
    return error;
};

function append(data, value) {
    return [...data, ...convertToArrayPayload(value)];
}

var fillEmptyArray = (value) => Array.isArray(value) ? value.map(() => undefined) : undefined;

function insert(data, index, value) {
    return [
        ...data.slice(0, index),
        ...convertToArrayPayload(value),
        ...data.slice(index),
    ];
}

var moveArrayAt = (data, from, to) => {
    if (!Array.isArray(data)) {
        return [];
    }
    if (isUndefined(data[to])) {
        data[to] = undefined;
    }
    data.splice(to, 0, data.splice(from, 1)[0]);
    return data;
};

function prepend(data, value) {
    return [...convertToArrayPayload(value), ...convertToArrayPayload(data)];
}

function removeAtIndexes(data, indexes) {
    let i = 0;
    const temp = [...data];
    for (const index of indexes) {
        temp.splice(index - i, 1);
        i++;
    }
    return compact(temp).length ? temp : [];
}
var removeArrayAt = (data, index) => isUndefined(index)
    ? []
    : removeAtIndexes(data, convertToArrayPayload(index).sort((a, b) => a - b));

var swapArrayAt = (data, indexA, indexB) => {
    data[indexA] = [data[indexB], (data[indexB] = data[indexA])][0];
};

function baseGet(object, updatePath) {
    const length = updatePath.slice(0, -1).length;
    let index = 0;
    while (index < length) {
        object = isUndefined(object) ? index++ : object[updatePath[index++]];
    }
    return object;
}
function isEmptyArray(obj) {
    for (const key in obj) {
        if (!isUndefined(obj[key])) {
            return false;
        }
    }
    return true;
}
function unset(object, path) {
    const paths = Array.isArray(path)
        ? path
        : isKey(path)
            ? [path]
            : stringToPath(path);
    const childObject = paths.length === 1 ? object : baseGet(object, paths);
    const index = paths.length - 1;
    const key = paths[index];
    if (childObject) {
        delete childObject[key];
    }
    if (index !== 0 &&
        ((isObject(childObject) && isEmptyObject(childObject)) ||
            (Array.isArray(childObject) && isEmptyArray(childObject)))) {
        unset(object, paths.slice(0, -1));
    }
    return object;
}

var updateAt = (fieldValues, index, value) => {
    fieldValues[index] = value;
    return fieldValues;
};

/**
 * A custom hook that exposes convenient methods to perform operations with a list of dynamic inputs that need to be appended, updated, removed etc. • [Demo](https://codesandbox.io/s/react-hook-form-usefieldarray-ssugn) • [Video](https://youtu.be/4MrbfGSFY2A)
 *
 * @remarks
 * [API](https://react-hook-form.com/api/usefieldarray) • [Demo](https://codesandbox.io/s/react-hook-form-usefieldarray-ssugn)
 *
 * @param props - useFieldArray props
 *
 * @returns methods - functions to manipulate with the Field Arrays (dynamic inputs) {@link UseFieldArrayReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, control, handleSubmit, reset, trigger, setError } = useForm({
 *     defaultValues: {
 *       test: []
 *     }
 *   });
 *   const { fields, append } = useFieldArray({
 *     control,
 *     name: "test"
 *   });
 *
 *   return (
 *     <form onSubmit={handleSubmit(data => console.log(data))}>
 *       {fields.map((item, index) => (
 *          <input key={item.id} {...register(`test.${index}.firstName`)}  />
 *       ))}
 *       <button type="button" onClick={() => append({ firstName: "bill" })}>
 *         append
 *       </button>
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */
function useFieldArray(props) {
    const methods = useFormContext();
    const { control = methods.control, name, keyName = 'id', shouldUnregister, } = props;
    const [fields, setFields] = React.useState(control._getFieldArray(name));
    const ids = React.useRef(control._getFieldArray(name).map(generateId));
    const _fieldIds = React.useRef(fields);
    const _name = React.useRef(name);
    const _actioned = React.useRef(false);
    _name.current = name;
    _fieldIds.current = fields;
    control._names.array.add(name);
    props.rules &&
        control.register(name, props.rules);
    useSubscribe({
        next: ({ values, name: fieldArrayName, }) => {
            if (fieldArrayName === _name.current || !fieldArrayName) {
                const fieldValues = get(values, _name.current);
                if (Array.isArray(fieldValues)) {
                    setFields(fieldValues);
                    ids.current = fieldValues.map(generateId);
                }
            }
        },
        subject: control._subjects.array,
    });
    const updateValues = React.useCallback((updatedFieldArrayValues) => {
        _actioned.current = true;
        control._updateFieldArray(name, updatedFieldArrayValues);
    }, [control, name]);
    const append$1 = (value, options) => {
        const appendValue = convertToArrayPayload(cloneObject(value));
        const updatedFieldArrayValues = append(control._getFieldArray(name), appendValue);
        control._names.focus = getFocusFieldName(name, updatedFieldArrayValues.length - 1, options);
        ids.current = append(ids.current, appendValue.map(generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._updateFieldArray(name, updatedFieldArrayValues, append, {
            argA: fillEmptyArray(value),
        });
    };
    const prepend$1 = (value, options) => {
        const prependValue = convertToArrayPayload(cloneObject(value));
        const updatedFieldArrayValues = prepend(control._getFieldArray(name), prependValue);
        control._names.focus = getFocusFieldName(name, 0, options);
        ids.current = prepend(ids.current, prependValue.map(generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._updateFieldArray(name, updatedFieldArrayValues, prepend, {
            argA: fillEmptyArray(value),
        });
    };
    const remove = (index) => {
        const updatedFieldArrayValues = removeArrayAt(control._getFieldArray(name), index);
        ids.current = removeArrayAt(ids.current, index);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._updateFieldArray(name, updatedFieldArrayValues, removeArrayAt, {
            argA: index,
        });
    };
    const insert$1 = (index, value, options) => {
        const insertValue = convertToArrayPayload(cloneObject(value));
        const updatedFieldArrayValues = insert(control._getFieldArray(name), index, insertValue);
        control._names.focus = getFocusFieldName(name, index, options);
        ids.current = insert(ids.current, index, insertValue.map(generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._updateFieldArray(name, updatedFieldArrayValues, insert, {
            argA: index,
            argB: fillEmptyArray(value),
        });
    };
    const swap = (indexA, indexB) => {
        const updatedFieldArrayValues = control._getFieldArray(name);
        swapArrayAt(updatedFieldArrayValues, indexA, indexB);
        swapArrayAt(ids.current, indexA, indexB);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._updateFieldArray(name, updatedFieldArrayValues, swapArrayAt, {
            argA: indexA,
            argB: indexB,
        }, false);
    };
    const move = (from, to) => {
        const updatedFieldArrayValues = control._getFieldArray(name);
        moveArrayAt(updatedFieldArrayValues, from, to);
        moveArrayAt(ids.current, from, to);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._updateFieldArray(name, updatedFieldArrayValues, moveArrayAt, {
            argA: from,
            argB: to,
        }, false);
    };
    const update = (index, value) => {
        const updateValue = cloneObject(value);
        const updatedFieldArrayValues = updateAt(control._getFieldArray(name), index, updateValue);
        ids.current = [...updatedFieldArrayValues].map((item, i) => !item || i === index ? generateId() : ids.current[i]);
        updateValues(updatedFieldArrayValues);
        setFields([...updatedFieldArrayValues]);
        control._updateFieldArray(name, updatedFieldArrayValues, updateAt, {
            argA: index,
            argB: updateValue,
        }, true, false);
    };
    const replace = (value) => {
        const updatedFieldArrayValues = convertToArrayPayload(cloneObject(value));
        ids.current = updatedFieldArrayValues.map(generateId);
        updateValues([...updatedFieldArrayValues]);
        setFields([...updatedFieldArrayValues]);
        control._updateFieldArray(name, [...updatedFieldArrayValues], (data) => data, {}, true, false);
    };
    React.useEffect(() => {
        control._state.action = false;
        isWatched(name, control._names) &&
            control._subjects.state.next({
                ...control._formState,
            });
        if (_actioned.current &&
            (!getValidationModes(control._options.mode).isOnSubmit ||
                control._formState.isSubmitted)) {
            if (control._options.resolver) {
                control._executeSchema([name]).then((result) => {
                    const error = get(result.errors, name);
                    const existingError = get(control._formState.errors, name);
                    if (existingError ? !error && existingError.type : error && error.type) {
                        error
                            ? set(control._formState.errors, name, error)
                            : unset(control._formState.errors, name);
                        control._subjects.state.next({
                            errors: control._formState.errors,
                        });
                    }
                });
            }
            else {
                const field = get(control._fields, name);
                if (field && field._f) {
                    validateField(field, control._formValues, control._options.criteriaMode === VALIDATION_MODE.all, control._options.shouldUseNativeValidation, true).then((error) => !isEmptyObject(error) &&
                        control._subjects.state.next({
                            errors: updateFieldArrayRootError(control._formState.errors, error, name),
                        }));
                }
            }
        }
        control._subjects.values.next({
            name,
            values: { ...control._formValues },
        });
        control._names.focus &&
            focusFieldBy(control._fields, (key) => !!key && key.startsWith(control._names.focus || ''));
        control._names.focus = '';
        control._updateValid();
    }, [fields, name, control]);
    React.useEffect(() => {
        !get(control._formValues, name) && control._updateFieldArray(name);
        return () => {
            (control._options.shouldUnregister || shouldUnregister) &&
                control.unregister(name);
        };
    }, [name, control, keyName, shouldUnregister]);
    return {
        swap: React.useCallback(swap, [updateValues, name, control]),
        move: React.useCallback(move, [updateValues, name, control]),
        prepend: React.useCallback(prepend$1, [updateValues, name, control]),
        append: React.useCallback(append$1, [updateValues, name, control]),
        remove: React.useCallback(remove, [updateValues, name, control]),
        insert: React.useCallback(insert$1, [updateValues, name, control]),
        update: React.useCallback(update, [updateValues, name, control]),
        replace: React.useCallback(replace, [updateValues, name, control]),
        fields: React.useMemo(() => fields.map((field, index) => ({
            ...field,
            [keyName]: ids.current[index] || generateId(),
        })), [fields, keyName]),
    };
}

function createSubject() {
    let _observers = [];
    const next = (value) => {
        for (const observer of _observers) {
            observer.next && observer.next(value);
        }
    };
    const subscribe = (observer) => {
        _observers.push(observer);
        return {
            unsubscribe: () => {
                _observers = _observers.filter((o) => o !== observer);
            },
        };
    };
    const unsubscribe = () => {
        _observers = [];
    };
    return {
        get observers() {
            return _observers;
        },
        next,
        subscribe,
        unsubscribe,
    };
}

var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);

function deepEqual(object1, object2) {
    if (isPrimitive(object1) || isPrimitive(object2)) {
        return object1 === object2;
    }
    if (isDateObject(object1) && isDateObject(object2)) {
        return object1.getTime() === object2.getTime();
    }
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (const key of keys1) {
        const val1 = object1[key];
        if (!keys2.includes(key)) {
            return false;
        }
        if (key !== 'ref') {
            const val2 = object2[key];
            if ((isDateObject(val1) && isDateObject(val2)) ||
                (isObject(val1) && isObject(val2)) ||
                (Array.isArray(val1) && Array.isArray(val2))
                ? !deepEqual(val1, val2)
                : val1 !== val2) {
                return false;
            }
        }
    }
    return true;
}

var isMultipleSelect = (element) => element.type === `select-multiple`;

var isRadioOrCheckbox = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);

var live = (ref) => isHTMLElement(ref) && ref.isConnected;

var objectHasFunction = (data) => {
    for (const key in data) {
        if (isFunction(data[key])) {
            return true;
        }
    }
    return false;
};

function markFieldsDirty(data, fields = {}) {
    const isParentNodeArray = Array.isArray(data);
    if (isObject(data) || isParentNodeArray) {
        for (const key in data) {
            if (Array.isArray(data[key]) ||
                (isObject(data[key]) && !objectHasFunction(data[key]))) {
                fields[key] = Array.isArray(data[key]) ? [] : {};
                markFieldsDirty(data[key], fields[key]);
            }
            else if (!isNullOrUndefined(data[key])) {
                fields[key] = true;
            }
        }
    }
    return fields;
}
function getDirtyFieldsFromDefaultValues(data, formValues, dirtyFieldsFromValues) {
    const isParentNodeArray = Array.isArray(data);
    if (isObject(data) || isParentNodeArray) {
        for (const key in data) {
            if (Array.isArray(data[key]) ||
                (isObject(data[key]) && !objectHasFunction(data[key]))) {
                if (isUndefined(formValues) ||
                    isPrimitive(dirtyFieldsFromValues[key])) {
                    dirtyFieldsFromValues[key] = Array.isArray(data[key])
                        ? markFieldsDirty(data[key], [])
                        : { ...markFieldsDirty(data[key]) };
                }
                else {
                    getDirtyFieldsFromDefaultValues(data[key], isNullOrUndefined(formValues) ? {} : formValues[key], dirtyFieldsFromValues[key]);
                }
            }
            else {
                dirtyFieldsFromValues[key] = !deepEqual(data[key], formValues[key]);
            }
        }
    }
    return dirtyFieldsFromValues;
}
var getDirtyFields = (defaultValues, formValues) => getDirtyFieldsFromDefaultValues(defaultValues, formValues, markFieldsDirty(formValues));

var getFieldValueAs = (value, { valueAsNumber, valueAsDate, setValueAs }) => isUndefined(value)
    ? value
    : valueAsNumber
        ? value === ''
            ? NaN
            : value
                ? +value
                : value
        : valueAsDate && isString(value)
            ? new Date(value)
            : setValueAs
                ? setValueAs(value)
                : value;

function getFieldValue(_f) {
    const ref = _f.ref;
    if (_f.refs ? _f.refs.every((ref) => ref.disabled) : ref.disabled) {
        return;
    }
    if (isFileInput(ref)) {
        return ref.files;
    }
    if (isRadioInput(ref)) {
        return getRadioValue(_f.refs).value;
    }
    if (isMultipleSelect(ref)) {
        return [...ref.selectedOptions].map(({ value }) => value);
    }
    if (isCheckBoxInput(ref)) {
        return getCheckboxValue(_f.refs).value;
    }
    return getFieldValueAs(isUndefined(ref.value) ? _f.ref.value : ref.value, _f);
}

var getResolverOptions = (fieldsNames, _fields, criteriaMode, shouldUseNativeValidation) => {
    const fields = {};
    for (const name of fieldsNames) {
        const field = get(_fields, name);
        field && set(fields, name, field._f);
    }
    return {
        criteriaMode,
        names: [...fieldsNames],
        fields,
        shouldUseNativeValidation,
    };
};

var getRuleValue = (rule) => isUndefined(rule)
    ? rule
    : isRegex(rule)
        ? rule.source
        : isObject(rule)
            ? isRegex(rule.value)
                ? rule.value.source
                : rule.value
            : rule;

var hasValidation = (options) => options.mount &&
    (options.required ||
        options.min ||
        options.max ||
        options.maxLength ||
        options.minLength ||
        options.pattern ||
        options.validate);

function schemaErrorLookup(errors, _fields, name) {
    const error = get(errors, name);
    if (error || isKey(name)) {
        return {
            error,
            name,
        };
    }
    const names = name.split('.');
    while (names.length) {
        const fieldName = names.join('.');
        const field = get(_fields, fieldName);
        const foundError = get(errors, fieldName);
        if (field && !Array.isArray(field) && name !== fieldName) {
            return { name };
        }
        if (foundError && foundError.type) {
            return {
                name: fieldName,
                error: foundError,
            };
        }
        names.pop();
    }
    return {
        name,
    };
}

var skipValidation = (isBlurEvent, isTouched, isSubmitted, reValidateMode, mode) => {
    if (mode.isOnAll) {
        return false;
    }
    else if (!isSubmitted && mode.isOnTouch) {
        return !(isTouched || isBlurEvent);
    }
    else if (isSubmitted ? reValidateMode.isOnBlur : mode.isOnBlur) {
        return !isBlurEvent;
    }
    else if (isSubmitted ? reValidateMode.isOnChange : mode.isOnChange) {
        return isBlurEvent;
    }
    return true;
};

var unsetEmptyArray = (ref, name) => !compact(get(ref, name)).length && unset(ref, name);

const defaultOptions = {
    mode: VALIDATION_MODE.onSubmit,
    reValidateMode: VALIDATION_MODE.onChange,
    shouldFocusError: true,
};
function createFormControl(props = {}, flushRootRender) {
    let _options = {
        ...defaultOptions,
        ...props,
    };
    let _formState = {
        submitCount: 0,
        isDirty: false,
        isLoading: isFunction(_options.defaultValues),
        isValidating: false,
        isSubmitted: false,
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: false,
        touchedFields: {},
        dirtyFields: {},
        errors: {},
    };
    let _fields = {};
    let _defaultValues = isObject(_options.defaultValues) || isObject(_options.values)
        ? cloneObject(_options.defaultValues || _options.values) || {}
        : {};
    let _formValues = _options.shouldUnregister
        ? {}
        : cloneObject(_defaultValues);
    let _state = {
        action: false,
        mount: false,
        watch: false,
    };
    let _names = {
        mount: new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
    };
    let delayErrorCallback;
    let timer = 0;
    const _proxyFormState = {
        isDirty: false,
        dirtyFields: false,
        touchedFields: false,
        isValidating: false,
        isValid: false,
        errors: false,
    };
    const _subjects = {
        values: createSubject(),
        array: createSubject(),
        state: createSubject(),
    };
    const shouldCaptureDirtyFields = props.resetOptions && props.resetOptions.keepDirtyValues;
    const validationModeBeforeSubmit = getValidationModes(_options.mode);
    const validationModeAfterSubmit = getValidationModes(_options.reValidateMode);
    const shouldDisplayAllAssociatedErrors = _options.criteriaMode === VALIDATION_MODE.all;
    const debounce = (callback) => (wait) => {
        clearTimeout(timer);
        timer = setTimeout(callback, wait);
    };
    const _updateValid = async (shouldUpdateValid) => {
        if (_proxyFormState.isValid || shouldUpdateValid) {
            const isValid = _options.resolver
                ? isEmptyObject((await _executeSchema()).errors)
                : await executeBuiltInValidation(_fields, true);
            if (isValid !== _formState.isValid) {
                _subjects.state.next({
                    isValid,
                });
            }
        }
    };
    const _updateIsValidating = (value) => _proxyFormState.isValidating &&
        _subjects.state.next({
            isValidating: value,
        });
    const _updateFieldArray = (name, values = [], method, args, shouldSetValues = true, shouldUpdateFieldsAndState = true) => {
        if (args && method) {
            _state.action = true;
            if (shouldUpdateFieldsAndState && Array.isArray(get(_fields, name))) {
                const fieldValues = method(get(_fields, name), args.argA, args.argB);
                shouldSetValues && set(_fields, name, fieldValues);
            }
            if (shouldUpdateFieldsAndState &&
                Array.isArray(get(_formState.errors, name))) {
                const errors = method(get(_formState.errors, name), args.argA, args.argB);
                shouldSetValues && set(_formState.errors, name, errors);
                unsetEmptyArray(_formState.errors, name);
            }
            if (_proxyFormState.touchedFields &&
                shouldUpdateFieldsAndState &&
                Array.isArray(get(_formState.touchedFields, name))) {
                const touchedFields = method(get(_formState.touchedFields, name), args.argA, args.argB);
                shouldSetValues && set(_formState.touchedFields, name, touchedFields);
            }
            if (_proxyFormState.dirtyFields) {
                _formState.dirtyFields = getDirtyFields(_defaultValues, _formValues);
            }
            _subjects.state.next({
                name,
                isDirty: _getDirty(name, values),
                dirtyFields: _formState.dirtyFields,
                errors: _formState.errors,
                isValid: _formState.isValid,
            });
        }
        else {
            set(_formValues, name, values);
        }
    };
    const updateErrors = (name, error) => {
        set(_formState.errors, name, error);
        _subjects.state.next({
            errors: _formState.errors,
        });
    };
    const updateValidAndValue = (name, shouldSkipSetValueAs, value, ref) => {
        const field = get(_fields, name);
        if (field) {
            const defaultValue = get(_formValues, name, isUndefined(value) ? get(_defaultValues, name) : value);
            isUndefined(defaultValue) ||
                (ref && ref.defaultChecked) ||
                shouldSkipSetValueAs
                ? set(_formValues, name, shouldSkipSetValueAs ? defaultValue : getFieldValue(field._f))
                : setFieldValue(name, defaultValue);
            _state.mount && _updateValid();
        }
    };
    const updateTouchAndDirty = (name, fieldValue, isBlurEvent, shouldDirty, shouldRender) => {
        let shouldUpdateField = false;
        let isPreviousDirty = false;
        const output = {
            name,
        };
        if (!isBlurEvent || shouldDirty) {
            if (_proxyFormState.isDirty) {
                isPreviousDirty = _formState.isDirty;
                _formState.isDirty = output.isDirty = _getDirty();
                shouldUpdateField = isPreviousDirty !== output.isDirty;
            }
            const isCurrentFieldPristine = deepEqual(get(_defaultValues, name), fieldValue);
            isPreviousDirty = get(_formState.dirtyFields, name);
            isCurrentFieldPristine
                ? unset(_formState.dirtyFields, name)
                : set(_formState.dirtyFields, name, true);
            output.dirtyFields = _formState.dirtyFields;
            shouldUpdateField =
                shouldUpdateField ||
                    (_proxyFormState.dirtyFields &&
                        isPreviousDirty !== !isCurrentFieldPristine);
        }
        if (isBlurEvent) {
            const isPreviousFieldTouched = get(_formState.touchedFields, name);
            if (!isPreviousFieldTouched) {
                set(_formState.touchedFields, name, isBlurEvent);
                output.touchedFields = _formState.touchedFields;
                shouldUpdateField =
                    shouldUpdateField ||
                        (_proxyFormState.touchedFields &&
                            isPreviousFieldTouched !== isBlurEvent);
            }
        }
        shouldUpdateField && shouldRender && _subjects.state.next(output);
        return shouldUpdateField ? output : {};
    };
    const shouldRenderByError = (name, isValid, error, fieldState) => {
        const previousFieldError = get(_formState.errors, name);
        const shouldUpdateValid = _proxyFormState.isValid &&
            isBoolean(isValid) &&
            _formState.isValid !== isValid;
        if (props.delayError && error) {
            delayErrorCallback = debounce(() => updateErrors(name, error));
            delayErrorCallback(props.delayError);
        }
        else {
            clearTimeout(timer);
            delayErrorCallback = null;
            error
                ? set(_formState.errors, name, error)
                : unset(_formState.errors, name);
        }
        if ((error ? !deepEqual(previousFieldError, error) : previousFieldError) ||
            !isEmptyObject(fieldState) ||
            shouldUpdateValid) {
            const updatedFormState = {
                ...fieldState,
                ...(shouldUpdateValid && isBoolean(isValid) ? { isValid } : {}),
                errors: _formState.errors,
                name,
            };
            _formState = {
                ..._formState,
                ...updatedFormState,
            };
            _subjects.state.next(updatedFormState);
        }
        _updateIsValidating(false);
    };
    const _executeSchema = async (name) => _options.resolver(_formValues, _options.context, getResolverOptions(name || _names.mount, _fields, _options.criteriaMode, _options.shouldUseNativeValidation));
    const executeSchemaAndUpdateState = async (names) => {
        const { errors } = await _executeSchema();
        if (names) {
            for (const name of names) {
                const error = get(errors, name);
                error
                    ? set(_formState.errors, name, error)
                    : unset(_formState.errors, name);
            }
        }
        else {
            _formState.errors = errors;
        }
        return errors;
    };
    const executeBuiltInValidation = async (fields, shouldOnlyCheckValid, context = {
        valid: true,
    }) => {
        for (const name in fields) {
            const field = fields[name];
            if (field) {
                const { _f, ...fieldValue } = field;
                if (_f) {
                    const isFieldArrayRoot = _names.array.has(_f.name);
                    const fieldError = await validateField(field, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation && !shouldOnlyCheckValid, isFieldArrayRoot);
                    if (fieldError[_f.name]) {
                        context.valid = false;
                        if (shouldOnlyCheckValid) {
                            break;
                        }
                    }
                    !shouldOnlyCheckValid &&
                        (get(fieldError, _f.name)
                            ? isFieldArrayRoot
                                ? updateFieldArrayRootError(_formState.errors, fieldError, _f.name)
                                : set(_formState.errors, _f.name, fieldError[_f.name])
                            : unset(_formState.errors, _f.name));
                }
                fieldValue &&
                    (await executeBuiltInValidation(fieldValue, shouldOnlyCheckValid, context));
            }
        }
        return context.valid;
    };
    const _removeUnmounted = () => {
        for (const name of _names.unMount) {
            const field = get(_fields, name);
            field &&
                (field._f.refs
                    ? field._f.refs.every((ref) => !live(ref))
                    : !live(field._f.ref)) &&
                unregister(name);
        }
        _names.unMount = new Set();
    };
    const _getDirty = (name, data) => (name && data && set(_formValues, name, data),
        !deepEqual(getValues(), _defaultValues));
    const _getWatch = (names, defaultValue, isGlobal) => generateWatchOutput(names, _names, {
        ...(_state.mount
            ? _formValues
            : isUndefined(defaultValue)
                ? _defaultValues
                : isString(names)
                    ? { [names]: defaultValue }
                    : defaultValue),
    }, isGlobal, defaultValue);
    const _getFieldArray = (name) => compact(get(_state.mount ? _formValues : _defaultValues, name, props.shouldUnregister ? get(_defaultValues, name, []) : []));
    const setFieldValue = (name, value, options = {}) => {
        const field = get(_fields, name);
        let fieldValue = value;
        if (field) {
            const fieldReference = field._f;
            if (fieldReference) {
                !fieldReference.disabled &&
                    set(_formValues, name, getFieldValueAs(value, fieldReference));
                fieldValue =
                    isHTMLElement(fieldReference.ref) && isNullOrUndefined(value)
                        ? ''
                        : value;
                if (isMultipleSelect(fieldReference.ref)) {
                    [...fieldReference.ref.options].forEach((optionRef) => (optionRef.selected = fieldValue.includes(optionRef.value)));
                }
                else if (fieldReference.refs) {
                    if (isCheckBoxInput(fieldReference.ref)) {
                        fieldReference.refs.length > 1
                            ? fieldReference.refs.forEach((checkboxRef) => (!checkboxRef.defaultChecked || !checkboxRef.disabled) &&
                                (checkboxRef.checked = Array.isArray(fieldValue)
                                    ? !!fieldValue.find((data) => data === checkboxRef.value)
                                    : fieldValue === checkboxRef.value))
                            : fieldReference.refs[0] &&
                                (fieldReference.refs[0].checked = !!fieldValue);
                    }
                    else {
                        fieldReference.refs.forEach((radioRef) => (radioRef.checked = radioRef.value === fieldValue));
                    }
                }
                else if (isFileInput(fieldReference.ref)) {
                    fieldReference.ref.value = '';
                }
                else {
                    fieldReference.ref.value = fieldValue;
                    if (!fieldReference.ref.type) {
                        _subjects.values.next({
                            name,
                            values: { ..._formValues },
                        });
                    }
                }
            }
        }
        (options.shouldDirty || options.shouldTouch) &&
            updateTouchAndDirty(name, fieldValue, options.shouldTouch, options.shouldDirty, true);
        options.shouldValidate && trigger(name);
    };
    const setValues = (name, value, options) => {
        for (const fieldKey in value) {
            const fieldValue = value[fieldKey];
            const fieldName = `${name}.${fieldKey}`;
            const field = get(_fields, fieldName);
            (_names.array.has(name) ||
                !isPrimitive(fieldValue) ||
                (field && !field._f)) &&
                !isDateObject(fieldValue)
                ? setValues(fieldName, fieldValue, options)
                : setFieldValue(fieldName, fieldValue, options);
        }
    };
    const setValue = (name, value, options = {}) => {
        const field = get(_fields, name);
        const isFieldArray = _names.array.has(name);
        const cloneValue = cloneObject(value);
        set(_formValues, name, cloneValue);
        if (isFieldArray) {
            _subjects.array.next({
                name,
                values: { ..._formValues },
            });
            if ((_proxyFormState.isDirty || _proxyFormState.dirtyFields) &&
                options.shouldDirty) {
                _subjects.state.next({
                    name,
                    dirtyFields: getDirtyFields(_defaultValues, _formValues),
                    isDirty: _getDirty(name, cloneValue),
                });
            }
        }
        else {
            field && !field._f && !isNullOrUndefined(cloneValue)
                ? setValues(name, cloneValue, options)
                : setFieldValue(name, cloneValue, options);
        }
        isWatched(name, _names) && _subjects.state.next({ ..._formState });
        _subjects.values.next({
            name,
            values: { ..._formValues },
        });
        !_state.mount && flushRootRender();
    };
    const onChange = async (event) => {
        const target = event.target;
        let name = target.name;
        let isFieldValueUpdated = true;
        const field = get(_fields, name);
        const getCurrentFieldValue = () => target.type ? getFieldValue(field._f) : getEventValue(event);
        if (field) {
            let error;
            let isValid;
            const fieldValue = getCurrentFieldValue();
            const isBlurEvent = event.type === EVENTS.BLUR || event.type === EVENTS.FOCUS_OUT;
            const shouldSkipValidation = (!hasValidation(field._f) &&
                !_options.resolver &&
                !get(_formState.errors, name) &&
                !field._f.deps) ||
                skipValidation(isBlurEvent, get(_formState.touchedFields, name), _formState.isSubmitted, validationModeAfterSubmit, validationModeBeforeSubmit);
            const watched = isWatched(name, _names, isBlurEvent);
            set(_formValues, name, fieldValue);
            if (isBlurEvent) {
                field._f.onBlur && field._f.onBlur(event);
                delayErrorCallback && delayErrorCallback(0);
            }
            else if (field._f.onChange) {
                field._f.onChange(event);
            }
            const fieldState = updateTouchAndDirty(name, fieldValue, isBlurEvent, false);
            const shouldRender = !isEmptyObject(fieldState) || watched;
            !isBlurEvent &&
                _subjects.values.next({
                    name,
                    type: event.type,
                    values: { ..._formValues },
                });
            if (shouldSkipValidation) {
                _proxyFormState.isValid && _updateValid();
                return (shouldRender &&
                    _subjects.state.next({ name, ...(watched ? {} : fieldState) }));
            }
            !isBlurEvent && watched && _subjects.state.next({ ..._formState });
            _updateIsValidating(true);
            if (_options.resolver) {
                const { errors } = await _executeSchema([name]);
                const previousErrorLookupResult = schemaErrorLookup(_formState.errors, _fields, name);
                const errorLookupResult = schemaErrorLookup(errors, _fields, previousErrorLookupResult.name || name);
                error = errorLookupResult.error;
                name = errorLookupResult.name;
                isValid = isEmptyObject(errors);
            }
            else {
                error = (await validateField(field, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation))[name];
                isFieldValueUpdated =
                    isNaN(fieldValue) ||
                        fieldValue === get(_formValues, name, fieldValue);
                if (isFieldValueUpdated) {
                    if (error) {
                        isValid = false;
                    }
                    else if (_proxyFormState.isValid) {
                        isValid = await executeBuiltInValidation(_fields, true);
                    }
                }
            }
            if (isFieldValueUpdated) {
                field._f.deps &&
                    trigger(field._f.deps);
                shouldRenderByError(name, isValid, error, fieldState);
            }
        }
    };
    const trigger = async (name, options = {}) => {
        let isValid;
        let validationResult;
        const fieldNames = convertToArrayPayload(name);
        _updateIsValidating(true);
        if (_options.resolver) {
            const errors = await executeSchemaAndUpdateState(isUndefined(name) ? name : fieldNames);
            isValid = isEmptyObject(errors);
            validationResult = name
                ? !fieldNames.some((name) => get(errors, name))
                : isValid;
        }
        else if (name) {
            validationResult = (await Promise.all(fieldNames.map(async (fieldName) => {
                const field = get(_fields, fieldName);
                return await executeBuiltInValidation(field && field._f ? { [fieldName]: field } : field);
            }))).every(Boolean);
            !(!validationResult && !_formState.isValid) && _updateValid();
        }
        else {
            validationResult = isValid = await executeBuiltInValidation(_fields);
        }
        _subjects.state.next({
            ...(!isString(name) ||
                (_proxyFormState.isValid && isValid !== _formState.isValid)
                ? {}
                : { name }),
            ...(_options.resolver || !name ? { isValid } : {}),
            errors: _formState.errors,
            isValidating: false,
        });
        options.shouldFocus &&
            !validationResult &&
            focusFieldBy(_fields, (key) => key && get(_formState.errors, key), name ? fieldNames : _names.mount);
        return validationResult;
    };
    const getValues = (fieldNames) => {
        const values = {
            ..._defaultValues,
            ...(_state.mount ? _formValues : {}),
        };
        return isUndefined(fieldNames)
            ? values
            : isString(fieldNames)
                ? get(values, fieldNames)
                : fieldNames.map((name) => get(values, name));
    };
    const getFieldState = (name, formState) => ({
        invalid: !!get((formState || _formState).errors, name),
        isDirty: !!get((formState || _formState).dirtyFields, name),
        isTouched: !!get((formState || _formState).touchedFields, name),
        error: get((formState || _formState).errors, name),
    });
    const clearErrors = (name) => {
        name &&
            convertToArrayPayload(name).forEach((inputName) => unset(_formState.errors, inputName));
        _subjects.state.next({
            errors: name ? _formState.errors : {},
        });
    };
    const setError = (name, error, options) => {
        const ref = (get(_fields, name, { _f: {} })._f || {}).ref;
        set(_formState.errors, name, {
            ...error,
            ref,
        });
        _subjects.state.next({
            name,
            errors: _formState.errors,
            isValid: false,
        });
        options && options.shouldFocus && ref && ref.focus && ref.focus();
    };
    const watch = (name, defaultValue) => isFunction(name)
        ? _subjects.values.subscribe({
            next: (payload) => name(_getWatch(undefined, defaultValue), payload),
        })
        : _getWatch(name, defaultValue, true);
    const unregister = (name, options = {}) => {
        for (const fieldName of name ? convertToArrayPayload(name) : _names.mount) {
            _names.mount.delete(fieldName);
            _names.array.delete(fieldName);
            if (!options.keepValue) {
                unset(_fields, fieldName);
                unset(_formValues, fieldName);
            }
            !options.keepError && unset(_formState.errors, fieldName);
            !options.keepDirty && unset(_formState.dirtyFields, fieldName);
            !options.keepTouched && unset(_formState.touchedFields, fieldName);
            !_options.shouldUnregister &&
                !options.keepDefaultValue &&
                unset(_defaultValues, fieldName);
        }
        _subjects.values.next({
            values: { ..._formValues },
        });
        _subjects.state.next({
            ..._formState,
            ...(!options.keepDirty ? {} : { isDirty: _getDirty() }),
        });
        !options.keepIsValid && _updateValid();
    };
    const register = (name, options = {}) => {
        let field = get(_fields, name);
        const disabledIsDefined = isBoolean(options.disabled);
        set(_fields, name, {
            ...(field || {}),
            _f: {
                ...(field && field._f ? field._f : { ref: { name } }),
                name,
                mount: true,
                ...options,
            },
        });
        _names.mount.add(name);
        field
            ? disabledIsDefined &&
                set(_formValues, name, options.disabled
                    ? undefined
                    : get(_formValues, name, getFieldValue(field._f)))
            : updateValidAndValue(name, true, options.value);
        return {
            ...(disabledIsDefined ? { disabled: options.disabled } : {}),
            ...(_options.shouldUseNativeValidation
                ? {
                    required: !!options.required,
                    min: getRuleValue(options.min),
                    max: getRuleValue(options.max),
                    minLength: getRuleValue(options.minLength),
                    maxLength: getRuleValue(options.maxLength),
                    pattern: getRuleValue(options.pattern),
                }
                : {}),
            name,
            onChange,
            onBlur: onChange,
            ref: (ref) => {
                if (ref) {
                    register(name, options);
                    field = get(_fields, name);
                    const fieldRef = isUndefined(ref.value)
                        ? ref.querySelectorAll
                            ? ref.querySelectorAll('input,select,textarea')[0] || ref
                            : ref
                        : ref;
                    const radioOrCheckbox = isRadioOrCheckbox(fieldRef);
                    const refs = field._f.refs || [];
                    if (radioOrCheckbox
                        ? refs.find((option) => option === fieldRef)
                        : fieldRef === field._f.ref) {
                        return;
                    }
                    set(_fields, name, {
                        _f: {
                            ...field._f,
                            ...(radioOrCheckbox
                                ? {
                                    refs: [
                                        ...refs.filter(live),
                                        fieldRef,
                                        ...(Array.isArray(get(_defaultValues, name)) ? [{}] : []),
                                    ],
                                    ref: { type: fieldRef.type, name },
                                }
                                : { ref: fieldRef }),
                        },
                    });
                    updateValidAndValue(name, false, undefined, fieldRef);
                }
                else {
                    field = get(_fields, name, {});
                    if (field._f) {
                        field._f.mount = false;
                    }
                    (_options.shouldUnregister || options.shouldUnregister) &&
                        !(isNameInFieldArray(_names.array, name) && _state.action) &&
                        _names.unMount.add(name);
                }
            },
        };
    };
    const _focusError = () => _options.shouldFocusError &&
        focusFieldBy(_fields, (key) => key && get(_formState.errors, key), _names.mount);
    const handleSubmit = (onValid, onInvalid) => async (e) => {
        if (e) {
            e.preventDefault && e.preventDefault();
            e.persist && e.persist();
        }
        let fieldValues = cloneObject(_formValues);
        _subjects.state.next({
            isSubmitting: true,
        });
        if (_options.resolver) {
            const { errors, values } = await _executeSchema();
            _formState.errors = errors;
            fieldValues = values;
        }
        else {
            await executeBuiltInValidation(_fields);
        }
        unset(_formState.errors, 'root');
        if (isEmptyObject(_formState.errors)) {
            _subjects.state.next({
                errors: {},
            });
            await onValid(fieldValues, e);
        }
        else {
            if (onInvalid) {
                await onInvalid({ ..._formState.errors }, e);
            }
            _focusError();
            setTimeout(_focusError);
        }
        _subjects.state.next({
            isSubmitted: true,
            isSubmitting: false,
            isSubmitSuccessful: isEmptyObject(_formState.errors),
            submitCount: _formState.submitCount + 1,
            errors: _formState.errors,
        });
    };
    const resetField = (name, options = {}) => {
        if (get(_fields, name)) {
            if (isUndefined(options.defaultValue)) {
                setValue(name, get(_defaultValues, name));
            }
            else {
                setValue(name, options.defaultValue);
                set(_defaultValues, name, options.defaultValue);
            }
            if (!options.keepTouched) {
                unset(_formState.touchedFields, name);
            }
            if (!options.keepDirty) {
                unset(_formState.dirtyFields, name);
                _formState.isDirty = options.defaultValue
                    ? _getDirty(name, get(_defaultValues, name))
                    : _getDirty();
            }
            if (!options.keepError) {
                unset(_formState.errors, name);
                _proxyFormState.isValid && _updateValid();
            }
            _subjects.state.next({ ..._formState });
        }
    };
    const _reset = (formValues, keepStateOptions = {}) => {
        const updatedValues = formValues || _defaultValues;
        const cloneUpdatedValues = cloneObject(updatedValues);
        const values = formValues && !isEmptyObject(formValues)
            ? cloneUpdatedValues
            : _defaultValues;
        if (!keepStateOptions.keepDefaultValues) {
            _defaultValues = updatedValues;
        }
        if (!keepStateOptions.keepValues) {
            if (keepStateOptions.keepDirtyValues || shouldCaptureDirtyFields) {
                for (const fieldName of _names.mount) {
                    get(_formState.dirtyFields, fieldName)
                        ? set(values, fieldName, get(_formValues, fieldName))
                        : setValue(fieldName, get(values, fieldName));
                }
            }
            else {
                if (isWeb && isUndefined(formValues)) {
                    for (const name of _names.mount) {
                        const field = get(_fields, name);
                        if (field && field._f) {
                            const fieldReference = Array.isArray(field._f.refs)
                                ? field._f.refs[0]
                                : field._f.ref;
                            if (isHTMLElement(fieldReference)) {
                                const form = fieldReference.closest('form');
                                if (form) {
                                    form.reset();
                                    break;
                                }
                            }
                        }
                    }
                }
                _fields = {};
            }
            _formValues = props.shouldUnregister
                ? keepStateOptions.keepDefaultValues
                    ? cloneObject(_defaultValues)
                    : {}
                : cloneUpdatedValues;
            _subjects.array.next({
                values: { ...values },
            });
            _subjects.values.next({
                values: { ...values },
            });
        }
        _names = {
            mount: new Set(),
            unMount: new Set(),
            array: new Set(),
            watch: new Set(),
            watchAll: false,
            focus: '',
        };
        !_state.mount && flushRootRender();
        _state.mount = !_proxyFormState.isValid || !!keepStateOptions.keepIsValid;
        _state.watch = !!props.shouldUnregister;
        _subjects.state.next({
            submitCount: keepStateOptions.keepSubmitCount
                ? _formState.submitCount
                : 0,
            isDirty: keepStateOptions.keepDirty
                ? _formState.isDirty
                : !!(keepStateOptions.keepDefaultValues &&
                    !deepEqual(formValues, _defaultValues)),
            isSubmitted: keepStateOptions.keepIsSubmitted
                ? _formState.isSubmitted
                : false,
            dirtyFields: keepStateOptions.keepDirtyValues
                ? _formState.dirtyFields
                : keepStateOptions.keepDefaultValues && formValues
                    ? getDirtyFields(_defaultValues, formValues)
                    : {},
            touchedFields: keepStateOptions.keepTouched
                ? _formState.touchedFields
                : {},
            errors: keepStateOptions.keepErrors ? _formState.errors : {},
            isSubmitting: false,
            isSubmitSuccessful: false,
        });
    };
    const reset = (formValues, keepStateOptions) => _reset(isFunction(formValues)
        ? formValues(_formValues)
        : formValues, keepStateOptions);
    const setFocus = (name, options = {}) => {
        const field = get(_fields, name);
        const fieldReference = field && field._f;
        if (fieldReference) {
            const fieldRef = fieldReference.refs
                ? fieldReference.refs[0]
                : fieldReference.ref;
            if (fieldRef.focus) {
                fieldRef.focus();
                options.shouldSelect && fieldRef.select();
            }
        }
    };
    const _updateFormState = (updatedFormState) => {
        _formState = {
            ..._formState,
            ...updatedFormState,
        };
    };
    if (isFunction(_options.defaultValues)) {
        _options.defaultValues().then((values) => {
            reset(values, _options.resetOptions);
            _subjects.state.next({
                isLoading: false,
            });
        });
    }
    return {
        control: {
            register,
            unregister,
            getFieldState,
            _executeSchema,
            _getWatch,
            _getDirty,
            _updateValid,
            _removeUnmounted,
            _updateFieldArray,
            _getFieldArray,
            _reset,
            _updateFormState,
            _subjects,
            _proxyFormState,
            get _fields() {
                return _fields;
            },
            get _formValues() {
                return _formValues;
            },
            get _state() {
                return _state;
            },
            set _state(value) {
                _state = value;
            },
            get _defaultValues() {
                return _defaultValues;
            },
            get _names() {
                return _names;
            },
            set _names(value) {
                _names = value;
            },
            get _formState() {
                return _formState;
            },
            set _formState(value) {
                _formState = value;
            },
            get _options() {
                return _options;
            },
            set _options(value) {
                _options = {
                    ..._options,
                    ...value,
                };
            },
        },
        trigger,
        register,
        handleSubmit,
        watch,
        setValue,
        getValues,
        reset,
        resetField,
        clearErrors,
        unregister,
        setError,
        setFocus,
        getFieldState,
    };
}

/**
 * Custom hook to manage the entire form.
 *
 * @remarks
 * [API](https://react-hook-form.com/api/useform) • [Demo](https://codesandbox.io/s/react-hook-form-get-started-ts-5ksmm) • [Video](https://www.youtube.com/watch?v=RkXv4AXXC_4)
 *
 * @param props - form configuration and validation parameters.
 *
 * @returns methods - individual functions to manage the form state. {@link UseFormReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, watch, formState: { errors } } = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   console.log(watch("example"));
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input defaultValue="test" {...register("example")} />
 *       <input {...register("exampleRequired", { required: true })} />
 *       {errors.exampleRequired && <span>This field is required</span>}
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */
function useForm(props = {}) {
    const _formControl = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const [formState, updateFormState] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
        isDirty: false,
        isValidating: false,
        isLoading: isFunction(props.defaultValues),
        isSubmitted: false,
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: false,
        submitCount: 0,
        dirtyFields: {},
        touchedFields: {},
        errors: {},
        defaultValues: isFunction(props.defaultValues)
            ? undefined
            : props.defaultValues,
    });
    if (!_formControl.current) {
        _formControl.current = {
            ...createFormControl(props, () => updateFormState((formState) => ({ ...formState }))),
            formState,
        };
    }
    const control = _formControl.current.control;
    control._options = props;
    useSubscribe({
        subject: control._subjects.state,
        next: (value) => {
            if (shouldRenderFormState(value, control._proxyFormState, control._updateFormState, true)) {
                updateFormState({ ...control._formState });
            }
        },
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        if (props.values && !deepEqual(props.values, control._defaultValues)) {
            control._reset(props.values, control._options.resetOptions);
        }
    }, [props.values, control]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        if (!control._state.mount) {
            control._updateValid();
            control._state.mount = true;
        }
        if (control._state.watch) {
            control._state.watch = false;
            control._subjects.state.next({ ...control._formState });
        }
        control._removeUnmounted();
    });
    _formControl.current.formState = getProxyFormState(formState, control);
    return _formControl.current;
}


//# sourceMappingURL=index.esm.mjs.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "FIELDS_KEY": () => (/* reexport */ costants/* FIELDS_KEY */.fj),
  "FRAMEWORKS": () => (/* reexport */ costants/* FRAMEWORKS */.MQ),
  "FRAMEWORKS_LABELS": () => (/* reexport */ costants/* FRAMEWORKS_LABELS */.hZ),
  "Fields": () => (/* binding */ Fields),
  "Forms": () => (/* binding */ Forms),
  "addField": () => (/* reexport */ helpers/* addField */.xS),
  "applyFormRules": () => (/* reexport */ helpers/* applyFormRules */.eX),
  "applyTransformers": () => (/* reexport */ helpers/* applyTransformers */.Zr),
  "cleanUp": () => (/* reexport */ helpers/* cleanUp */.Lx),
  "collectIds": () => (/* reexport */ helpers/* collectIds */.FN),
  "collectNames": () => (/* reexport */ helpers/* collectNames */.BI),
  "createEmptyField": () => (/* reexport */ helpers/* createEmptyField */.bc),
  "default": () => (/* binding */ react_bootstrap),
  "deleteField": () => (/* reexport */ helpers/* deleteField */.AK),
  "fillIds": () => (/* reexport */ helpers/* fillIds */.Mw),
  "filterFields": () => (/* reexport */ helpers/* filterFields */.qH),
  "filterOptions": () => (/* reexport */ helpers/* filterOptions */.MN),
  "findField": () => (/* reexport */ helpers/* findField */.PI),
  "formHelper": () => (/* reexport */ helpers/* formHelper */.qs),
  "getFieldById": () => (/* reexport */ helpers/* getFieldById */.rc),
  "getLocales": () => (/* reexport */ helpers/* getLocales */.IP),
  "i18n": () => (/* reexport */ helpers/* i18n */.ag),
  "i18nOptions": () => (/* reexport */ helpers/* i18nOptions */.Lo),
  "isChildrenOf": () => (/* reexport */ helpers/* isChildrenOf */.c_),
  "isEmptyForm": () => (/* reexport */ helpers/* isEmptyForm */.Oc),
  "isI18n": () => (/* reexport */ helpers/* isI18n */.QK),
  "isUrl": () => (/* reexport */ helpers/* isUrl */.CB),
  "isValidDate": () => (/* reexport */ helpers/* isValidDate */.qb),
  "isValidDayjsFormat": () => (/* reexport */ helpers/* isValidDayjsFormat */.az),
  "makeWidthStyle": () => (/* reexport */ helpers/* makeWidthStyle */.PZ),
  "mapFields": () => (/* reexport */ helpers/* mapFields */.vn),
  "passRest": () => (/* reexport */ helpers/* passRest */.QF),
  "reduceFields": () => (/* reexport */ helpers/* reduceFields */.f3),
  "replaceField": () => (/* reexport */ helpers/* replaceField */.DN),
  "validateJSONForm": () => (/* reexport */ helpers/* validateJSONForm */.nK),
  "validateRulesDefinition": () => (/* reexport */ helpers/* validateRulesDefinition */.Dd)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(8156);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./generator/index.js
var generator = __webpack_require__(7274);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(5099);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Feedback.js




const propTypes = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: (external_prop_types_default()).string,
  /** Display feedback as a tooltip. */
  tooltip: (external_prop_types_default()).bool,
  as: (external_prop_types_default()).elementType
};
const Feedback = /*#__PURE__*/external_react_.forwardRef(
// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({
  as: Component = 'div',
  className,
  type = 'valid',
  tooltip = false,
  ...props
}, ref) => /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
  ...props,
  ref: ref,
  className: classnames_default()(className, `${type}-${tooltip ? 'tooltip' : 'feedback'}`)
}));
Feedback.displayName = 'Feedback';
Feedback.propTypes = propTypes;
/* harmony default export */ const esm_Feedback = (Feedback);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormContext.js


// TODO

const FormContext = /*#__PURE__*/external_react_.createContext({});
/* harmony default export */ const esm_FormContext = (FormContext);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/ThemeProvider.js



const DEFAULT_BREAKPOINTS = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
const DEFAULT_MIN_BREAKPOINT = 'xs';
const ThemeContext = /*#__PURE__*/external_react_.createContext({
  prefixes: {},
  breakpoints: DEFAULT_BREAKPOINTS,
  minBreakpoint: DEFAULT_MIN_BREAKPOINT
});
const {
  Consumer,
  Provider
} = ThemeContext;
function ThemeProvider({
  prefixes = {},
  breakpoints = DEFAULT_BREAKPOINTS,
  minBreakpoint = DEFAULT_MIN_BREAKPOINT,
  dir,
  children
}) {
  const contextValue = useMemo(() => ({
    prefixes: {
      ...prefixes
    },
    breakpoints,
    minBreakpoint,
    dir
  }), [prefixes, breakpoints, minBreakpoint, dir]);
  return /*#__PURE__*/_jsx(Provider, {
    value: contextValue,
    children: children
  });
}
function useBootstrapPrefix(prefix, defaultPrefix) {
  const {
    prefixes
  } = (0,external_react_.useContext)(ThemeContext);
  return prefix || prefixes[defaultPrefix] || defaultPrefix;
}
function useBootstrapBreakpoints() {
  const {
    breakpoints
  } = (0,external_react_.useContext)(ThemeContext);
  return breakpoints;
}
function useBootstrapMinBreakpoint() {
  const {
    minBreakpoint
  } = (0,external_react_.useContext)(ThemeContext);
  return minBreakpoint;
}
function useIsRTL() {
  const {
    dir
  } = useContext(ThemeContext);
  return dir === 'rtl';
}
function createBootstrapComponent(Component, opts) {
  if (typeof opts === 'string') opts = {
    prefix: opts
  };
  const isClassy = Component.prototype && Component.prototype.isReactComponent;
  // If it's a functional component make sure we don't break it with a ref
  const {
    prefix,
    forwardRefAs = isClassy ? 'ref' : 'innerRef'
  } = opts;
  const Wrapped = /*#__PURE__*/React.forwardRef(({
    ...props
  }, ref) => {
    props[forwardRefAs] = ref;
    const bsPrefix = useBootstrapPrefix(props.bsPrefix, prefix);
    return /*#__PURE__*/_jsx(Component, {
      ...props,
      bsPrefix: bsPrefix
    });
  });
  Wrapped.displayName = `Bootstrap(${Component.displayName || Component.name})`;
  return Wrapped;
}

/* harmony default export */ const esm_ThemeProvider = ((/* unused pure expression or super */ null && (ThemeProvider)));
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormCheckInput.js






const FormCheckInput = /*#__PURE__*/external_react_.forwardRef(({
  id,
  bsPrefix,
  className,
  type = 'checkbox',
  isValid = false,
  isInvalid = false,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'input',
  ...props
}, ref) => {
  const {
    controlId
  } = (0,external_react_.useContext)(esm_FormContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-check-input');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
    ...props,
    ref: ref,
    type: type,
    id: id || controlId,
    className: classnames_default()(className, bsPrefix, isValid && 'is-valid', isInvalid && 'is-invalid')
  });
});
FormCheckInput.displayName = 'FormCheckInput';
/* harmony default export */ const esm_FormCheckInput = (FormCheckInput);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormCheckLabel.js






const FormCheckLabel = /*#__PURE__*/external_react_.forwardRef(({
  bsPrefix,
  className,
  htmlFor,
  ...props
}, ref) => {
  const {
    controlId
  } = (0,external_react_.useContext)(esm_FormContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-check-label');
  return /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
    ...props,
    ref: ref,
    htmlFor: htmlFor || controlId,
    className: classnames_default()(className, bsPrefix)
  });
});
FormCheckLabel.displayName = 'FormCheckLabel';
/* harmony default export */ const esm_FormCheckLabel = (FormCheckLabel);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/ElementChildren.js


/**
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid elements".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 */
function map(children, func) {
  let index = 0;
  return React.Children.map(children, child => /*#__PURE__*/React.isValidElement(child) ? func(child, index++) : child);
}

/**
 * Iterates through children that are "valid elements".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 */
function forEach(children, func) {
  let index = 0;
  React.Children.forEach(children, child => {
    if ( /*#__PURE__*/React.isValidElement(child)) func(child, index++);
  });
}

/**
 * Finds whether a component's `children` prop includes a React element of the
 * specified type.
 */
function hasChildOfType(children, type) {
  return external_react_.Children.toArray(children).some(child => /*#__PURE__*/external_react_.isValidElement(child) && child.type === type);
}

;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormCheck.js












const FormCheck = /*#__PURE__*/external_react_.forwardRef(({
  id,
  bsPrefix,
  bsSwitchPrefix,
  inline = false,
  reverse = false,
  disabled = false,
  isValid = false,
  isInvalid = false,
  feedbackTooltip = false,
  feedback,
  feedbackType,
  className,
  style,
  title = '',
  type = 'checkbox',
  label,
  children,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as = 'input',
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-check');
  bsSwitchPrefix = useBootstrapPrefix(bsSwitchPrefix, 'form-switch');
  const {
    controlId
  } = (0,external_react_.useContext)(esm_FormContext);
  const innerFormContext = (0,external_react_.useMemo)(() => ({
    controlId: id || controlId
  }), [controlId, id]);
  const hasLabel = !children && label != null && label !== false || hasChildOfType(children, esm_FormCheckLabel);
  const input = /*#__PURE__*/(0,jsx_runtime.jsx)(esm_FormCheckInput, {
    ...props,
    type: type === 'switch' ? 'checkbox' : type,
    ref: ref,
    isValid: isValid,
    isInvalid: isInvalid,
    disabled: disabled,
    as: as
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_FormContext.Provider, {
    value: innerFormContext,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      style: style,
      className: classnames_default()(className, hasLabel && bsPrefix, inline && `${bsPrefix}-inline`, reverse && `${bsPrefix}-reverse`, type === 'switch' && bsSwitchPrefix),
      children: children || /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [input, hasLabel && /*#__PURE__*/(0,jsx_runtime.jsx)(esm_FormCheckLabel, {
          title: title,
          children: label
        }), feedback && /*#__PURE__*/(0,jsx_runtime.jsx)(esm_Feedback, {
          type: feedbackType,
          tooltip: feedbackTooltip,
          children: feedback
        })]
      })
    })
  });
});
FormCheck.displayName = 'FormCheck';
/* harmony default export */ const esm_FormCheck = (Object.assign(FormCheck, {
  Input: esm_FormCheckInput,
  Label: esm_FormCheckLabel
}));
// EXTERNAL MODULE: ./node_modules/warning/warning.js
var warning = __webpack_require__(2473);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormControl.js








const FormControl = /*#__PURE__*/external_react_.forwardRef(({
  bsPrefix,
  type,
  size,
  htmlSize,
  id,
  className,
  isValid = false,
  isInvalid = false,
  plaintext,
  readOnly,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'input',
  ...props
}, ref) => {
  const {
    controlId
  } = (0,external_react_.useContext)(esm_FormContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-control');
  let classes;
  if (plaintext) {
    classes = {
      [`${bsPrefix}-plaintext`]: true
    };
  } else {
    classes = {
      [bsPrefix]: true,
      [`${bsPrefix}-${size}`]: size
    };
  }
   false ? 0 : void 0;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
    ...props,
    type: type,
    size: htmlSize,
    ref: ref,
    readOnly: readOnly,
    id: id || controlId,
    className: classnames_default()(className, classes, isValid && `is-valid`, isInvalid && `is-invalid`, type === 'color' && `${bsPrefix}-color`)
  });
});
FormControl.displayName = 'FormControl';
/* harmony default export */ const esm_FormControl = (Object.assign(FormControl, {
  Feedback: esm_Feedback
}));
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/camelize.js
var rHyphen = /-(.)/g;
function camelize(string) {
  return string.replace(rHyphen, function (_, chr) {
    return chr.toUpperCase();
  });
}
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/createWithBsPrefix.js





const pascalCase = str => str[0].toUpperCase() + camelize(str).slice(1);
// TODO: emstricten & fix the typing here! `createWithBsPrefix<TElementType>...`
function createWithBsPrefix(prefix, {
  displayName = pascalCase(prefix),
  Component,
  defaultProps
} = {}) {
  const BsComponent = /*#__PURE__*/external_react_.forwardRef(({
    className,
    bsPrefix,
    as: Tag = Component || 'div',
    ...props
  }, ref) => {
    const resolvedPrefix = useBootstrapPrefix(bsPrefix, prefix);
    return /*#__PURE__*/(0,jsx_runtime.jsx)(Tag, {
      ref: ref,
      className: classnames_default()(className, resolvedPrefix),
      ...props
    });
  });
  BsComponent.defaultProps = defaultProps;
  BsComponent.displayName = displayName;
  return BsComponent;
}
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormFloating.js

/* harmony default export */ const FormFloating = (createWithBsPrefix('form-floating'));
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormGroup.js




const FormGroup = /*#__PURE__*/external_react_.forwardRef(({
  controlId,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  const context = (0,external_react_.useMemo)(() => ({
    controlId
  }), [controlId]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_FormContext.Provider, {
    value: context,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
      ...props,
      ref: ref
    })
  });
});
FormGroup.displayName = 'FormGroup';
/* harmony default export */ const esm_FormGroup = (FormGroup);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Col.js




function useCol({
  as,
  bsPrefix,
  className,
  ...props
}) {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'col');
  const breakpoints = useBootstrapBreakpoints();
  const minBreakpoint = useBootstrapMinBreakpoint();
  const spans = [];
  const classes = [];
  breakpoints.forEach(brkPoint => {
    const propValue = props[brkPoint];
    delete props[brkPoint];
    let span;
    let offset;
    let order;
    if (typeof propValue === 'object' && propValue != null) {
      ({
        span,
        offset,
        order
      } = propValue);
    } else {
      span = propValue;
    }
    const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : '';
    if (span) spans.push(span === true ? `${bsPrefix}${infix}` : `${bsPrefix}${infix}-${span}`);
    if (order != null) classes.push(`order${infix}-${order}`);
    if (offset != null) classes.push(`offset${infix}-${offset}`);
  });
  return [{
    ...props,
    className: classnames_default()(className, ...spans, ...classes)
  }, {
    as,
    bsPrefix,
    spans
  }];
}
const Col = /*#__PURE__*/external_react_.forwardRef(
// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
(props, ref) => {
  const [{
    className,
    ...colProps
  }, {
    as: Component = 'div',
    bsPrefix,
    spans
  }] = useCol(props);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
    ...colProps,
    ref: ref,
    className: classnames_default()(className, !spans.length && bsPrefix)
  });
});
Col.displayName = 'Col';
/* harmony default export */ const esm_Col = (Col);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormLabel.js








const defaultProps = {
  column: false,
  visuallyHidden: false
};
const FormLabel = /*#__PURE__*/external_react_.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'label',
  bsPrefix,
  column,
  visuallyHidden,
  className,
  htmlFor,
  ...props
}, ref) => {
  const {
    controlId
  } = (0,external_react_.useContext)(esm_FormContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-label');
  let columnClass = 'col-form-label';
  if (typeof column === 'string') columnClass = `${columnClass} ${columnClass}-${column}`;
  const classes = classnames_default()(className, bsPrefix, visuallyHidden && 'visually-hidden', column && columnClass);
   false ? 0 : void 0;
  htmlFor = htmlFor || controlId;
  if (column) return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_Col, {
    ref: ref,
    as: "label",
    className: classes,
    htmlFor: htmlFor,
    ...props
  });
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    (0,jsx_runtime.jsx)(Component, {
      ref: ref,
      className: classes,
      htmlFor: htmlFor,
      ...props
    })
  );
});
FormLabel.displayName = 'FormLabel';
FormLabel.defaultProps = defaultProps;
/* harmony default export */ const esm_FormLabel = (FormLabel);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormRange.js






const FormRange = /*#__PURE__*/external_react_.forwardRef(({
  bsPrefix,
  className,
  id,
  ...props
}, ref) => {
  const {
    controlId
  } = (0,external_react_.useContext)(esm_FormContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-range');
  return /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
    ...props,
    type: "range",
    ref: ref,
    className: classnames_default()(className, bsPrefix),
    id: id || controlId
  });
});
FormRange.displayName = 'FormRange';
/* harmony default export */ const esm_FormRange = (FormRange);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormSelect.js






const FormSelect = /*#__PURE__*/external_react_.forwardRef(({
  bsPrefix,
  size,
  htmlSize,
  className,
  isValid = false,
  isInvalid = false,
  id,
  ...props
}, ref) => {
  const {
    controlId
  } = (0,external_react_.useContext)(esm_FormContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-select');
  return /*#__PURE__*/(0,jsx_runtime.jsx)("select", {
    ...props,
    size: htmlSize,
    ref: ref,
    className: classnames_default()(className, bsPrefix, size && `${bsPrefix}-${size}`, isValid && `is-valid`, isInvalid && `is-invalid`),
    id: id || controlId
  });
});
FormSelect.displayName = 'FormSelect';
/* harmony default export */ const esm_FormSelect = (FormSelect);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormText.js




const FormText = /*#__PURE__*/external_react_.forwardRef(
// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({
  bsPrefix,
  className,
  as: Component = 'small',
  muted,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-text');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
    ...props,
    ref: ref,
    className: classnames_default()(className, bsPrefix, muted && 'text-muted')
  });
});
FormText.displayName = 'FormText';
/* harmony default export */ const esm_FormText = (FormText);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Switch.js



const Switch = /*#__PURE__*/external_react_.forwardRef((props, ref) => /*#__PURE__*/(0,jsx_runtime.jsx)(esm_FormCheck, {
  ...props,
  ref: ref,
  type: "switch"
}));
Switch.displayName = 'Switch';
/* harmony default export */ const esm_Switch = (Object.assign(Switch, {
  Input: esm_FormCheck.Input,
  Label: esm_FormCheck.Label
}));
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FloatingLabel.js






const FloatingLabel = /*#__PURE__*/external_react_.forwardRef(({
  bsPrefix,
  className,
  children,
  controlId,
  label,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-floating');
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(esm_FormGroup, {
    ref: ref,
    className: classnames_default()(className, bsPrefix),
    controlId: controlId,
    ...props,
    children: [children, /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
      htmlFor: controlId,
      children: label
    })]
  });
});
FloatingLabel.displayName = 'FloatingLabel';
/* harmony default export */ const esm_FloatingLabel = (FloatingLabel);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Form.js














const Form_propTypes = {
  /**
   * The Form `ref` will be forwarded to the underlying element,
   * which means, unless it's rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */
  _ref: (external_prop_types_default()).any,
  /**
   * Mark a form as having been validated. Setting it to `true` will
   * toggle any validation styles on the forms elements.
   */
  validated: (external_prop_types_default()).bool,
  as: (external_prop_types_default()).elementType
};
const Form = /*#__PURE__*/external_react_.forwardRef(({
  className,
  validated,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'form',
  ...props
}, ref) => /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
  ...props,
  ref: ref,
  className: classnames_default()(className, validated && 'was-validated')
}));
Form.displayName = 'Form';
Form.propTypes = Form_propTypes;
/* harmony default export */ const esm_Form = (Object.assign(Form, {
  Group: esm_FormGroup,
  Control: esm_FormControl,
  Floating: FormFloating,
  Check: esm_FormCheck,
  Switch: esm_Switch,
  Label: esm_FormLabel,
  Text: esm_FormText,
  Range: esm_FormRange,
  Select: esm_FormSelect,
  FloatingLabel: esm_FloatingLabel
}));
;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/Button.js
const _excluded = ["as", "disabled"];
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


function isTrivialHref(href) {
  return !href || href.trim() === '#';
}
function useButtonProps({
  tagName,
  disabled,
  href,
  target,
  rel,
  role,
  onClick,
  tabIndex = 0,
  type
}) {
  if (!tagName) {
    if (href != null || target != null || rel != null) {
      tagName = 'a';
    } else {
      tagName = 'button';
    }
  }
  const meta = {
    tagName
  };
  if (tagName === 'button') {
    return [{
      type: type || 'button',
      disabled
    }, meta];
  }
  const handleClick = event => {
    if (disabled || tagName === 'a' && isTrivialHref(href)) {
      event.preventDefault();
    }
    if (disabled) {
      event.stopPropagation();
      return;
    }
    onClick == null ? void 0 : onClick(event);
  };
  const handleKeyDown = event => {
    if (event.key === ' ') {
      event.preventDefault();
      handleClick(event);
    }
  };
  if (tagName === 'a') {
    // Ensure there's a href so Enter can trigger anchor button.
    href || (href = '#');
    if (disabled) {
      href = undefined;
    }
  }
  return [{
    role: role != null ? role : 'button',
    // explicitly undefined so that it overrides the props disabled in a spread
    // e.g. <Tag {...props} {...hookProps} />
    disabled: undefined,
    tabIndex: disabled ? undefined : tabIndex,
    href,
    target: tagName === 'a' ? target : undefined,
    'aria-disabled': !disabled ? undefined : disabled,
    rel: tagName === 'a' ? rel : undefined,
    onClick: handleClick,
    onKeyDown: handleKeyDown
  }, meta];
}
const Button = /*#__PURE__*/external_react_.forwardRef((_ref, ref) => {
  let {
      as: asProp,
      disabled
    } = _ref,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  const [buttonProps, {
    tagName: Component
  }] = useButtonProps(Object.assign({
    tagName: asProp,
    disabled
  }, props));
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, Object.assign({}, props, buttonProps, {
    ref: ref
  }));
});
Button.displayName = 'Button';
/* harmony default export */ const esm_Button = ((/* unused pure expression or super */ null && (Button)));
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Button.js





const Button_defaultProps = {
  variant: 'primary',
  active: false,
  disabled: false
};
const Button_Button = /*#__PURE__*/external_react_.forwardRef(({
  as,
  bsPrefix,
  variant,
  size,
  active,
  className,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'btn');
  const [buttonProps, {
    tagName
  }] = useButtonProps({
    tagName: as,
    ...props
  });
  const Component = tagName;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
    ...buttonProps,
    ...props,
    ref: ref,
    className: classnames_default()(className, prefix, active && 'active', variant && `${prefix}-${variant}`, size && `${prefix}-${size}`, props.href && props.disabled && 'disabled')
  });
});
Button_Button.displayName = 'Button';
Button_Button.defaultProps = Button_defaultProps;
/* harmony default export */ const react_bootstrap_esm_Button = (Button_Button);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(7795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(3565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(4589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./react-bootstrap/form/index.scss
var cjs_js_react_bootstrap_form = __webpack_require__(8484);
;// CONCATENATED MODULE: ./react-bootstrap/form/index.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(cjs_js_react_bootstrap_form/* default */.Z, options);




       /* harmony default export */ const react_bootstrap_form = (cjs_js_react_bootstrap_form/* default */.Z && cjs_js_react_bootstrap_form/* default.locals */.Z.locals ? cjs_js_react_bootstrap_form/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./react-bootstrap/form/index.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





var FormBootstrap = function FormBootstrap(_ref) {
  var name = _ref.name,
    children = _ref.children,
    onSubmit = _ref.onSubmit,
    buttonsAlign = _ref.buttonsAlign,
    onReset = _ref.onReset,
    _ref$hideToolbar = _ref.hideToolbar,
    hideToolbar = _ref$hideToolbar === void 0 ? false : _ref$hideToolbar,
    _ref$onlyFields = _ref.onlyFields,
    onlyFields = _ref$onlyFields === void 0 ? false : _ref$onlyFields,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$disabledSubmit = _ref.disabledSubmit,
    disabledSubmit = _ref$disabledSubmit === void 0 ? false : _ref$disabledSubmit,
    plaintext = _ref.plaintext,
    _ref$labelSubmit = _ref.labelSubmit,
    labelSubmit = _ref$labelSubmit === void 0 ? 'Submit' : _ref$labelSubmit,
    _ref$labelCancel = _ref.labelCancel,
    labelCancel = _ref$labelCancel === void 0 ? 'Cancel' : _ref$labelCancel,
    custom = _ref.custom;
  return /*#__PURE__*/external_react_default().createElement(esm_Form, {
    className: classnames_default()('lf-form lf-form-react-bootstrap', _defineProperty({}, buttonsAlign ? "lf-form-buttons-align-".concat(buttonsAlign) : undefined, true)),
    "data-lf-form-name": name,
    onSubmit: onSubmit
  }, /*#__PURE__*/external_react_default().createElement("div", null, children), !hideToolbar && !onlyFields && !plaintext && /*#__PURE__*/external_react_default().createElement("div", {
    className: "lf-buttons"
  }, /*#__PURE__*/external_react_default().createElement(react_bootstrap_esm_Button, {
    variant: "primary",
    onClick: onSubmit,
    disabled: disabled || disabledSubmit
  }, labelSubmit), /*#__PURE__*/external_react_default().createElement(react_bootstrap_esm_Button, {
    variant: "secondary",
    onClick: onReset,
    disabled: disabled
  }, labelCancel), custom));
};

// EXTERNAL MODULE: ./components/index.js + 4 modules
var components = __webpack_require__(5593);
// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(1609);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
// EXTERNAL MODULE: ./node_modules/lodash/isString.js
var isString = __webpack_require__(7037);
var isString_default = /*#__PURE__*/__webpack_require__.n(isString);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/InputGroupContext.js

const context = /*#__PURE__*/external_react_.createContext(null);
context.displayName = 'InputGroupContext';
/* harmony default export */ const InputGroupContext = (context);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/InputGroup.js








const InputGroupText = createWithBsPrefix('input-group-text', {
  Component: 'span'
});
const InputGroupCheckbox = props => /*#__PURE__*/(0,jsx_runtime.jsx)(InputGroupText, {
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(esm_FormCheckInput, {
    type: "checkbox",
    ...props
  })
});
const InputGroupRadio = props => /*#__PURE__*/(0,jsx_runtime.jsx)(InputGroupText, {
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(esm_FormCheckInput, {
    type: "radio",
    ...props
  })
});
/**
 *
 * @property {InputGroupText} Text
 * @property {InputGroupRadio} Radio
 * @property {InputGroupCheckbox} Checkbox
 */
const InputGroup = /*#__PURE__*/external_react_.forwardRef(({
  bsPrefix,
  size,
  hasValidation,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'input-group');

  // Intentionally an empty object. Used in detecting if a dropdown
  // exists under an input group.
  const contextValue = (0,external_react_.useMemo)(() => ({}), []);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(InputGroupContext.Provider, {
    value: contextValue,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
      ref: ref,
      ...props,
      className: classnames_default()(className, bsPrefix, size && `${bsPrefix}-${size}`, hasValidation && 'has-validation')
    })
  });
});
InputGroup.displayName = 'InputGroup';
/* harmony default export */ const esm_InputGroup = (Object.assign(InputGroup, {
  Text: InputGroupText,
  Radio: InputGroupRadio,
  Checkbox: InputGroupCheckbox
}));
// EXTERNAL MODULE: ./helpers/index.js + 30 modules
var helpers = __webpack_require__(8145);
// EXTERNAL MODULE: ./common/index.js + 14 modules
var common = __webpack_require__(1782);
;// CONCATENATED MODULE: ./components/bootstrap-generic-input/index.js


var bootstrap_generic_input_excluded = ["name", "label", "hint", "value", "onChange", "onBlur", "size", "className", "inputType", "inputMode", "autocomplete", "lfLocale", "disabled", "readOnly", "plaintext", "error", "component", "required", "prefix", "postfix", "placeholder", "fullWidth", "width", "floatingLabel"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = bootstrap_generic_input_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function bootstrap_generic_input_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








// DOC: https://react-bootstrap.github.io/forms/form-control/#form-control-props

var BootstrapGenericInput = function BootstrapGenericInput(_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    size = _ref.size,
    className = _ref.className,
    inputType = _ref.inputType,
    inputMode = _ref.inputMode,
    autocomplete = _ref.autocomplete,
    lfLocale = _ref.lfLocale,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    _ref$plaintext = _ref.plaintext,
    plaintext = _ref$plaintext === void 0 ? false : _ref$plaintext,
    error = _ref.error,
    component = _ref.component,
    required = _ref.required,
    prefix = _ref.prefix,
    postfix = _ref.postfix,
    placeholder = _ref.placeholder,
    fullWidth = _ref.fullWidth,
    width = _ref.width,
    _ref$floatingLabel = _ref.floatingLabel,
    floatingLabel = _ref$floatingLabel === void 0 ? false : _ref$floatingLabel,
    rest = _objectWithoutProperties(_ref, bootstrap_generic_input_excluded);
  var inner = /*#__PURE__*/external_react_default().createElement(esm_Form.Control, _extends({
    name: name,
    type: inputType !== null && inputType !== void 0 ? inputType : 'text',
    inputmode: inputMode,
    autocomplete: autocomplete,
    value: value,
    plaintext: plaintext,
    onChange: onChange,
    size: size,
    placeholder: placeholder,
    onBlur: onBlur,
    disabled: disabled,
    readOnly: readOnly,
    isInvalid: error != null,
    style: (0,helpers/* makeWidthStyle */.PZ)(fullWidth, width)
  }, (0,helpers/* passRest */.QF)(rest)));
  var innerGroup = inner;
  var needsGroup = postfix || prefix;
  if (needsGroup) {
    innerGroup = /*#__PURE__*/external_react_default().createElement(esm_InputGroup, null, prefix && /*#__PURE__*/external_react_default().createElement(esm_InputGroup.Text, null, (0,common/* TextOrIcon */.GX)(prefix)), inner, postfix && /*#__PURE__*/external_react_default().createElement(esm_InputGroup.Text, null, (0,common/* TextOrIcon */.GX)(postfix)));
  }
  var useFloatingLabels = floatingLabel && !needsGroup;
  return /*#__PURE__*/external_react_default().createElement(esm_Form.Group, {
    className: className,
    "data-lf-field-name": name
  }, useFloatingLabels && /*#__PURE__*/external_react_default().createElement(esm_FloatingLabel, {
    label: label
  }, innerGroup), !useFloatingLabels && /*#__PURE__*/external_react_default().createElement(esm_Form.Label, null, label, required && /*#__PURE__*/external_react_default().createElement(components/* RequiredIcon */.T_, null)), !useFloatingLabels && innerGroup, hint && !error && /*#__PURE__*/external_react_default().createElement(esm_Form.Text, null, hint), isString_default()(error) && !isEmpty_default()(error) && /*#__PURE__*/external_react_default().createElement(esm_Form.Control.Feedback, {
    type: "invalid"
  }, error));
};

;// CONCATENATED MODULE: ./react-bootstrap/input-text/index.js
var input_text_excluded = ["onChange"];
function input_text_extends() { input_text_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return input_text_extends.apply(this, arguments); }
function input_text_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = input_text_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function input_text_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




// DOC: https://react-bootstrap.github.io/forms/form-control/#form-control-props

var TextInput = (0,components/* I18N */.mb)(function (_ref) {
  var onChange = _ref.onChange,
    rest = input_text_objectWithoutProperties(_ref, input_text_excluded);
  var handleChange = (0,external_react_.useCallback)(function (e) {
    onChange(e.target.value);
  }, [onChange]);
  return /*#__PURE__*/external_react_default().createElement(BootstrapGenericInput, input_text_extends({
    className: "lf-control-input-text",
    component: "input-text",
    onChange: handleChange
  }, rest));
}, ['label', 'hint', 'placeholder']);

;// CONCATENATED MODULE: ./react-bootstrap/select/index.js


var select_excluded = ["name", "label", "hint", "value", "size", "placeholder", "options", "disabled", "readOnly", "required", "error", "onChange", "onBlur", "floatingLabel", "filterKey", "filterValue"];
function select_extends() { select_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return select_extends.apply(this, arguments); }
function select_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = select_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function select_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var Select = (0,components/* I18N */.mb)(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    size = _ref.size,
    placeholder = _ref.placeholder,
    options = _ref.options,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    error = _ref.error,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    _ref$floatingLabel = _ref.floatingLabel,
    floatingLabel = _ref$floatingLabel === void 0 ? false : _ref$floatingLabel,
    filterKey = _ref.filterKey,
    filterValue = _ref.filterValue,
    rest = select_objectWithoutProperties(_ref, select_excluded);
  var handleChange = (0,external_react_.useCallback)(function (e) {
    onChange(e.target.value !== placeholder ? e.target.value : undefined);
  }, [onChange, placeholder]);
  var filteredOptions = (0,helpers/* filterOptions */.MN)(options, filterValue, filterKey);
  var inner = /*#__PURE__*/external_react_default().createElement(esm_Form.Select, select_extends({
    name: name,
    value: value,
    onChange: handleChange,
    size: size,
    placeholder: placeholder,
    onBlur: onBlur,
    disabled: disabled,
    readOnly: readOnly,
    isInvalid: error != null
  }, (0,helpers/* passRest */.QF)(rest)), placeholder && /*#__PURE__*/external_react_default().createElement("option", null, placeholder), (filteredOptions !== null && filteredOptions !== void 0 ? filteredOptions : []).map(function (_ref2) {
    var value = _ref2.value,
      label = _ref2.label;
    return /*#__PURE__*/external_react_default().createElement("option", {
      value: value,
      key: value
    }, label);
  }));
  return /*#__PURE__*/external_react_default().createElement(esm_Form.Group, {
    className: "lf-control-input-text",
    "data-lf-field-name": name
  }, !floatingLabel && /*#__PURE__*/external_react_default().createElement(esm_Form.Label, null, label, required && /*#__PURE__*/external_react_default().createElement(components/* RequiredIcon */.T_, null)), !floatingLabel && inner, floatingLabel && /*#__PURE__*/external_react_default().createElement(esm_FloatingLabel, {
    label: label
  }, inner), hint && !error && /*#__PURE__*/external_react_default().createElement(esm_Form.Text, null, hint), isString_default()(error) && !isEmpty_default()(error) && /*#__PURE__*/external_react_default().createElement(esm_Form.Control.Feedback, {
    type: "invalid"
  }, error));
}, ['label', 'hint', 'placeholder'], {
  options: helpers/* i18nOptions */.Lo
});

;// CONCATENATED MODULE: ./react-bootstrap/checkbox/index.js


var checkbox_excluded = ["name", "label", "hint", "value", "placeholder", "tooltip", "disabled", "readOnly", "required", "error", "onChange", "onBlur", "appearance", "locale", "format"];
function checkbox_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = checkbox_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function checkbox_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Checkbox = (0,components/* I18N */.mb)(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    placeholder = _ref.placeholder,
    _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    error = _ref.error,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    appearance = _ref.appearance,
    locale = _ref.locale,
    format = _ref.format,
    rest = checkbox_objectWithoutProperties(_ref, checkbox_excluded);
  var handleChange = (0,external_react_.useCallback)(function (e) {
    onChange(e.target.checked);
  }, [onChange]);
  return /*#__PURE__*/external_react_default().createElement(esm_Form.Group, {
    className: "lf-control-checkbox",
    "data-lf-field-name": name
  }, /*#__PURE__*/external_react_default().createElement(esm_Form.Check, {
    type: "checkbox"
  }, /*#__PURE__*/external_react_default().createElement(esm_Form.Check.Input, {
    onChange: handleChange,
    onBlur: onBlur,
    disabled: disabled,
    isInvalid: error != null,
    checked: value
  }), label && /*#__PURE__*/external_react_default().createElement(esm_Form.Check.Label, null, label), isString_default()(error) && !isEmpty_default()(error) && /*#__PURE__*/external_react_default().createElement(esm_Form.Control.Feedback, {
    type: "invalid"
  }, error)), hint && /*#__PURE__*/external_react_default().createElement(esm_Form.Text, null, hint));
}, ['label', 'hint']);
;

;// CONCATENATED MODULE: ./react-bootstrap/toggle/index.js


var toggle_excluded = ["name", "label", "hint", "value", "placeholder", "lfLocale", "tooltip", "disabled", "readOnly", "required", "error", "onChange", "onBlur", "appearance", "locale", "format"];
function toggle_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = toggle_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function toggle_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Toggle = (0,components/* I18N */.mb)(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    placeholder = _ref.placeholder,
    lfLocale = _ref.lfLocale,
    _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    error = _ref.error,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    appearance = _ref.appearance,
    locale = _ref.locale,
    format = _ref.format,
    rest = toggle_objectWithoutProperties(_ref, toggle_excluded);
  var handleChange = (0,external_react_.useCallback)(function (e) {
    onChange(e.target.checked);
  }, [onChange]);
  return /*#__PURE__*/external_react_default().createElement(esm_Form.Group, {
    className: "lf-control-checkbox",
    "data-lf-field-name": name
  }, /*#__PURE__*/external_react_default().createElement(esm_Form.Check, {
    type: "switch"
  }, /*#__PURE__*/external_react_default().createElement(esm_Form.Check.Input, {
    onChange: handleChange,
    onBlur: onBlur,
    disabled: disabled,
    isInvalid: error != null
  }), label && /*#__PURE__*/external_react_default().createElement(esm_Form.Check.Label, null, label), isString_default()(error) && !isEmpty_default()(error) && /*#__PURE__*/external_react_default().createElement(esm_Form.Control.Feedback, {
    type: "invalid"
  }, error)), hint && /*#__PURE__*/external_react_default().createElement(esm_Form.Text, null, hint));
}, ['label', 'hint']);

// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(7557);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);
;// CONCATENATED MODULE: ./react-bootstrap/checkbox-group/index.js



var checkbox_group_excluded = ["name", "label", "hint", "value", "disabled", "readOnly", "required", "inline", "reverse", "error", "onChange", "onBlur", "options"];
function checkbox_group_extends() { checkbox_group_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return checkbox_group_extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function checkbox_group_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = checkbox_group_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function checkbox_group_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var CheckboxGroupBootstrap = (0,components/* I18N */.mb)(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    _ref$inline = _ref.inline,
    inline = _ref$inline === void 0 ? false : _ref$inline,
    _ref$reverse = _ref.reverse,
    reverse = _ref$reverse === void 0 ? false : _ref$reverse,
    error = _ref.error,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    rest = checkbox_group_objectWithoutProperties(_ref, checkbox_group_excluded);
  var _useState = (0,external_react_.useState)(value !== null && value !== void 0 ? value : []),
    _useState2 = _slicedToArray(_useState, 2),
    values = _useState2[0],
    setValues = _useState2[1];
  var handleChange = (0,external_react_.useCallback)(function (e) {
    var newValues;
    if (values.includes(e.target.value)) {
      newValues = values.filter(function (value) {
        return value !== e.target.value;
      });
    } else {
      newValues = [].concat(_toConsumableArray(values), [e.target.value]);
    }
    setValues(newValues);
    onChange(newValues);
  }, [onChange, values]);
  return /*#__PURE__*/external_react_default().createElement(esm_Form.Group, {
    className: "lf-control-checkbox-group",
    "data-lf-field-name": name
  }, /*#__PURE__*/external_react_default().createElement(esm_Form.Label, null, label, required && /*#__PURE__*/external_react_default().createElement(components/* RequiredIcon */.T_, null)), /*#__PURE__*/external_react_default().createElement("div", null, (options !== null && options !== void 0 ? options : []).map(function (_ref2, idx) {
    var value = _ref2.value,
      label = _ref2.label;
    return /*#__PURE__*/external_react_default().createElement(esm_Form.Check, {
      type: "checkbox",
      key: value,
      reverse: reverse,
      inline: inline
    }, /*#__PURE__*/external_react_default().createElement(esm_Form.Check.Input, checkbox_group_extends({
      disabled: disabled,
      id: "".concat(name, "_").concat(value),
      value: value,
      name: name,
      isInvalid: error != null,
      checked: values.includes(value),
      onChange: handleChange
    }, omit_default()(rest, 'lfFramework', 'lfComponent'))), label && /*#__PURE__*/external_react_default().createElement(esm_Form.Check.Label, {
      htmlFor: "".concat(name, "_").concat(value)
    }, label), isString_default()(error) && !isEmpty_default()(error) && idx === options.length - 1 && /*#__PURE__*/external_react_default().createElement(esm_Form.Control.Feedback, {
      type: "invalid"
    }, error));
  })), hint && /*#__PURE__*/external_react_default().createElement(esm_Form.Text, null, hint), isString_default()(error) && !isEmpty_default()(error) && /*#__PURE__*/external_react_default().createElement(esm_Form.Control.Feedback, {
    type: "invalid"
  }, error));
}, ['label', 'hint'], {
  options: helpers/* i18nOptions */.Lo
});

;// CONCATENATED MODULE: ./react-bootstrap/radio-group/index.js



var radio_group_excluded = ["name", "label", "hint", "value", "disabled", "readOnly", "required", "inline", "reverse", "error", "onChange", "onBlur", "options"];
function radio_group_extends() { radio_group_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return radio_group_extends.apply(this, arguments); }
function radio_group_toConsumableArray(arr) { return radio_group_arrayWithoutHoles(arr) || radio_group_iterableToArray(arr) || radio_group_unsupportedIterableToArray(arr) || radio_group_nonIterableSpread(); }
function radio_group_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function radio_group_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function radio_group_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return radio_group_arrayLikeToArray(arr); }
function radio_group_slicedToArray(arr, i) { return radio_group_arrayWithHoles(arr) || radio_group_iterableToArrayLimit(arr, i) || radio_group_unsupportedIterableToArray(arr, i) || radio_group_nonIterableRest(); }
function radio_group_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function radio_group_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return radio_group_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return radio_group_arrayLikeToArray(o, minLen); }
function radio_group_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function radio_group_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function radio_group_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function radio_group_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = radio_group_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function radio_group_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var RadioGroupBootstrap = (0,components/* I18N */.mb)(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    _ref$inline = _ref.inline,
    inline = _ref$inline === void 0 ? false : _ref$inline,
    _ref$reverse = _ref.reverse,
    reverse = _ref$reverse === void 0 ? false : _ref$reverse,
    error = _ref.error,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    rest = radio_group_objectWithoutProperties(_ref, radio_group_excluded);
  var _useState = (0,external_react_.useState)(value !== null && value !== void 0 ? value : []),
    _useState2 = radio_group_slicedToArray(_useState, 2),
    values = _useState2[0],
    setValues = _useState2[1];
  var handleChange = (0,external_react_.useCallback)(function (e) {
    var newValues;
    if (values.includes(e.target.value)) {
      newValues = values.filter(function (value) {
        return value !== e.target.value;
      });
    } else {
      newValues = [].concat(radio_group_toConsumableArray(values), [e.target.value]);
    }
    setValues(newValues);
    onChange(newValues);
  }, [onChange, values]);
  return /*#__PURE__*/external_react_default().createElement(esm_Form.Group, {
    className: "lf-control-radio-group",
    "data-lf-field-name": name
  }, /*#__PURE__*/external_react_default().createElement(esm_Form.Label, null, label, required && /*#__PURE__*/external_react_default().createElement(components/* RequiredIcon */.T_, null)), /*#__PURE__*/external_react_default().createElement("div", null, (options !== null && options !== void 0 ? options : []).map(function (_ref2, idx) {
    var value = _ref2.value,
      label = _ref2.label;
    return /*#__PURE__*/external_react_default().createElement(esm_Form.Check, {
      type: "checkbox",
      key: value,
      reverse: reverse,
      inline: inline
    }, /*#__PURE__*/external_react_default().createElement(esm_Form.Check.Input, radio_group_extends({
      disabled: disabled,
      type: "radio",
      value: value,
      name: name,
      id: "".concat(name, "_").concat(value),
      isInvalid: error != null,
      checked: values.includes(value),
      onChange: handleChange
    }, omit_default()(rest, 'lfFramework', 'lfComponent'))), label && /*#__PURE__*/external_react_default().createElement(esm_Form.Check.Label, {
      htmlFor: "".concat(name, "_").concat(value)
    }, label), isString_default()(error) && !isEmpty_default()(error) && idx === options.length - 1 && /*#__PURE__*/external_react_default().createElement(esm_Form.Control.Feedback, {
      type: "invalid"
    }, error));
  })), hint && /*#__PURE__*/external_react_default().createElement(esm_Form.Text, null, hint), isString_default()(error) && !isEmpty_default()(error) && /*#__PURE__*/external_react_default().createElement(esm_Form.Control.Feedback, {
    type: "invalid"
  }, error));
}, ['label', 'hint'], {
  options: helpers/* i18nOptions */.Lo
});

;// CONCATENATED MODULE: ./react-bootstrap/placeholder/index.js




var PlaceholderBootstrap = (0,components/* I18N */.mb)(function (_ref) {
  var label = _ref.label,
    hint = _ref.hint,
    text = _ref.text,
    name = _ref.name;
  return /*#__PURE__*/external_react_default().createElement(esm_Form.Group, {
    className: "lf-control-placeholder",
    "data-lf-field-name": name
  }, label && /*#__PURE__*/external_react_default().createElement(esm_Form.Label, null, label), /*#__PURE__*/external_react_default().createElement(common/* Placeholder */.Vm, {
    text: text
  }), hint && /*#__PURE__*/external_react_default().createElement(esm_Form.Text, null, hint));
}, ['label', 'hint', 'text']);

// EXTERNAL MODULE: ./common/placeholder-image/index.js + 1 modules
var placeholder_image = __webpack_require__(8587);
;// CONCATENATED MODULE: ./react-bootstrap/placeholder-image/index.js

// EXTERNAL MODULE: ./node_modules/lodash/isDate.js
var isDate = __webpack_require__(7960);
var isDate_default = /*#__PURE__*/__webpack_require__.n(isDate);
;// CONCATENATED MODULE: ./react-bootstrap/date/index.js

var date_excluded = ["onChange", "value"];
function date_extends() { date_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return date_extends.apply(this, arguments); }
function date_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = date_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function date_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




// DOC: https://react-bootstrap.github.io/forms/form-control/#form-control-props

var date_Date = (0,components/* I18N */.mb)(function (_ref) {
  var onChange = _ref.onChange,
    value = _ref.value,
    rest = date_objectWithoutProperties(_ref, date_excluded);
  var handleChange = (0,external_react_.useCallback)(function (e) {
    return onChange(e.target.value);
  }, [onChange]);
  var currentDate = value;
  if (isDate_default()(value)) {
    // only take 2023-11-12
    currentDate = value.toISOString().split('T')[0];
  }
  return /*#__PURE__*/external_react_default().createElement(BootstrapGenericInput, date_extends({
    className: "lf-control-date",
    inputType: "date",
    component: "date",
    value: currentDate,
    onChange: handleChange
  }, rest));
}, ['label', 'hint', 'placeholder']);

;// CONCATENATED MODULE: ./react-bootstrap/datetime/index.js

var datetime_excluded = ["onChange", "value"];
function datetime_extends() { datetime_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return datetime_extends.apply(this, arguments); }
function datetime_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = datetime_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function datetime_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




// DOC: https://react-bootstrap.github.io/forms/form-control/#form-control-props

var DateTime = (0,components/* I18N */.mb)(function (_ref) {
  var onChange = _ref.onChange,
    value = _ref.value,
    rest = datetime_objectWithoutProperties(_ref, datetime_excluded);
  var handleChange = (0,external_react_.useCallback)(function (e) {
    onChange(e.target.value);
  }, [onChange]);
  var currentDate = value;
  if (isDate_default()(value)) {
    // only keep iso up to the minutes digits
    var match = value.toISOString().match(/(.*?T[0-9]{1,2}:[0-9]{1,2})/gm);
    if (match != null) {
      currentDate = match[0];
    }
  }
  return /*#__PURE__*/external_react_default().createElement(BootstrapGenericInput, datetime_extends({
    className: "lf-control-date",
    inputType: "datetime-local",
    component: "datetime",
    value: currentDate,
    onChange: handleChange
  }, rest));
}, ['label', 'hint', 'placeholder']);

;// CONCATENATED MODULE: ./react-bootstrap/textarea/index.js


var textarea_excluded = ["name", "label", "hint", "value", "onChange", "onBlur", "size", "disabled", "readOnly", "error", "required", "rows", "placeholder", "width", "fullWidth"];
function textarea_extends() { textarea_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return textarea_extends.apply(this, arguments); }
function textarea_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = textarea_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function textarea_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





// DOC: https://react-bootstrap.github.io/forms/form-control/#form-control-props

var Textarea = (0,components/* I18N */.mb)(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    size = _ref.size,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    error = _ref.error,
    required = _ref.required,
    rows = _ref.rows,
    placeholder = _ref.placeholder,
    width = _ref.width,
    fullWidth = _ref.fullWidth,
    rest = textarea_objectWithoutProperties(_ref, textarea_excluded);
  var handleChange = (0,external_react_.useCallback)(function (e) {
    onChange(e.target.value);
  }, [onChange]);
  return /*#__PURE__*/external_react_default().createElement(esm_Form.Group, {
    className: "lf-control-input-text",
    "data-lf-field-name": name
  }, /*#__PURE__*/external_react_default().createElement(esm_Form.Label, null, label, required && /*#__PURE__*/external_react_default().createElement(components/* RequiredIcon */.T_, null)), /*#__PURE__*/external_react_default().createElement(esm_Form.Control, textarea_extends({
    name: name,
    as: "textarea",
    rows: rows,
    value: value,
    onChange: handleChange,
    size: size,
    placeholder: placeholder,
    onBlur: onBlur,
    disabled: disabled,
    readOnly: readOnly,
    isInvalid: error != null,
    style: (0,helpers/* makeWidthStyle */.PZ)(fullWidth, width)
  }, (0,helpers/* passRest */.QF)(rest))), hint && !error && /*#__PURE__*/external_react_default().createElement(esm_Form.Text, null, hint), isString_default()(error) && !isEmpty_default()(error) && /*#__PURE__*/external_react_default().createElement(esm_Form.Control.Feedback, {
    type: "invalid"
  }, error));
}, ['label', 'hint', 'placeholder']);

;// CONCATENATED MODULE: ./react-bootstrap/slider/index.js






// DOC: https://react-bootstrap.github.io/forms/form-control/#form-control-props

var Slider = (0,components/* I18N */.mb)(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    error = _ref.error,
    required = _ref.required,
    placeholder = _ref.placeholder,
    min = _ref.min,
    max = _ref.max,
    step = _ref.step;
  var handleChange = (0,external_react_.useCallback)(function (e) {
    onChange(e.target.value);
  }, [onChange]);
  return /*#__PURE__*/external_react_default().createElement(esm_Form.Group, {
    className: "lf-control-input-text",
    "data-lf-field-name": name
  }, /*#__PURE__*/external_react_default().createElement(esm_Form.Label, null, label, required && /*#__PURE__*/external_react_default().createElement(components/* RequiredIcon */.T_, null)), /*#__PURE__*/external_react_default().createElement(esm_Form.Range, {
    name: name,
    defaultValue: value,
    onChange: handleChange,
    min: min,
    max: max,
    step: step,
    placeholder: placeholder,
    onBlur: onBlur,
    disabled: disabled,
    readOnly: readOnly,
    isInvalid: error != null
  }), hint && !error && /*#__PURE__*/external_react_default().createElement(esm_Form.Text, null, hint), isString_default()(error) && !isEmpty_default()(error) && /*#__PURE__*/external_react_default().createElement(esm_Form.Control.Feedback, {
    type: "invalid"
  }, error));
}, ['label', 'hint', 'placeholder']);

// EXTERNAL MODULE: ./common/three-columns/index.js + 1 modules
var three_columns = __webpack_require__(7645);
;// CONCATENATED MODULE: ./react-bootstrap/three-columns/index.js

// EXTERNAL MODULE: ./common/two-columns/index.js + 1 modules
var two_columns = __webpack_require__(963);
;// CONCATENATED MODULE: ./react-bootstrap/two-columns/index.js

// EXTERNAL MODULE: ./common/group/index.js + 1 modules
var group = __webpack_require__(8727);
;// CONCATENATED MODULE: ./react-bootstrap/group/index.js

;// CONCATENATED MODULE: ./react-bootstrap/divider/index.js

// EXTERNAL MODULE: ./common/react-view/index.js
var react_view = __webpack_require__(8169);
;// CONCATENATED MODULE: ./react-bootstrap/react-view/index.js

;// CONCATENATED MODULE: ./react-bootstrap/array/index.js


var array_excluded = ["hint", "required", "tooltip", "name", "label", "error"];
function array_extends() { array_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return array_extends.apply(this, arguments); }
function array_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = array_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function array_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var ListArrayBootstrap = (0,components/* I18N */.mb)(function (_ref) {
  var hint = _ref.hint,
    required = _ref.required,
    tooltip = _ref.tooltip,
    name = _ref.name,
    label = _ref.label,
    error = _ref.error,
    rest = array_objectWithoutProperties(_ref, array_excluded);
  return /*#__PURE__*/external_react_default().createElement(esm_Form.Group, {
    "data-lf-field-name": name,
    className: "lf-control-array"
  }, label && /*#__PURE__*/external_react_default().createElement(esm_Form.Label, null, label, required && /*#__PURE__*/external_react_default().createElement(components/* RequiredIcon */.T_, null)), /*#__PURE__*/external_react_default().createElement(common/* ListArray */.v0, array_extends({
    LetsFormComponent: react_bootstrap
  }, rest)), hint && !error && /*#__PURE__*/external_react_default().createElement(esm_Form.Text, null, hint), isString_default()(error) && !isEmpty_default()(error) && /*#__PURE__*/external_react_default().createElement(esm_Form.Control.Feedback, {
    type: "invalid"
  }, error));
}, ['label', 'hint']);

;// CONCATENATED MODULE: ./react-bootstrap/input-number/index.js

var input_number_excluded = ["onChange"];
function input_number_extends() { input_number_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return input_number_extends.apply(this, arguments); }
function input_number_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = input_number_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function input_number_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var hasDecimals = function hasDecimals(f) {
  return isString_default()(f) && (f.includes(',') || f.includes('.'));
};

// DOC: https://react-bootstrap.github.io/forms/form-control/#form-control-props

var InputNumber = (0,components/* I18N */.mb)(function (_ref) {
  var onChange = _ref.onChange,
    rest = input_number_objectWithoutProperties(_ref, input_number_excluded);
  var handleChange = (0,external_react_.useCallback)(function (e) {
    var value = e.target.value;
    var parsed;
    if (isString_default()(value)) {
      if (value === '') {
        // void if the user deleted all chars
        parsed = null;
      } else if (hasDecimals(value)) {
        parsed = parseFloat(value);
      } else {
        parsed = parseInt(value, 10);
      }
      if (!isNaN(parsed)) {
        onChange(parsed);
      }
    }
  }, [onChange]);
  return /*#__PURE__*/external_react_default().createElement(BootstrapGenericInput, input_number_extends({
    className: "lf-control-input-number",
    component: "input-number",
    onChange: handleChange,
    inputType: "number",
    step: "5"
  }, rest));
}, ['label', 'hint', 'placeholder']);

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(2636);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./react-bootstrap/tabs/tabs.scss
var tabs = __webpack_require__(8315);
;// CONCATENATED MODULE: ./react-bootstrap/tabs/tabs.scss

      
      
      
      
      
      
      
      
      

var tabs_options = {};

tabs_options.styleTagTransform = (styleTagTransform_default());
tabs_options.setAttributes = (setAttributesWithoutAttributes_default());

      tabs_options.insert = insertBySelector_default().bind(null, "head");
    
tabs_options.domAPI = (styleDomAPI_default());
tabs_options.insertStyleElement = (insertStyleElement_default());

var tabs_update = injectStylesIntoStyleTag_default()(tabs/* default */.Z, tabs_options);




       /* harmony default export */ const tabs_tabs = (tabs/* default */.Z && tabs/* default.locals */.Z.locals ? tabs/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./react-bootstrap/tabs/index.js

var tabs_excluded = ["name", "value", "tabs", "onChange", "children", "variant", "transition", "fill", "justify"];
function tabs_extends() { tabs_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return tabs_extends.apply(this, arguments); }
function tabs_slicedToArray(arr, i) { return tabs_arrayWithHoles(arr) || tabs_iterableToArrayLimit(arr, i) || tabs_unsupportedIterableToArray(arr, i) || tabs_nonIterableRest(); }
function tabs_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function tabs_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return tabs_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return tabs_arrayLikeToArray(o, minLen); }
function tabs_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function tabs_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function tabs_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function tabs_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = tabs_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function tabs_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var TabsReactBootstrap = (0,components/* I18N */.mb)(function (_ref) {
  var name = _ref.name,
    value = _ref.value,
    tabs = _ref.tabs,
    onChange = _ref.onChange,
    children = _ref.children,
    variant = _ref.variant,
    transition = _ref.transition,
    fill = _ref.fill,
    justify = _ref.justify,
    rest = tabs_objectWithoutProperties(_ref, tabs_excluded);
  var defaultKey = value;
  if (!defaultKey && !isEmpty_default()(tabs)) {
    defaultKey = tabs[0].value;
  }
  var _useState = (0,external_react_.useState)(defaultKey),
    _useState2 = tabs_slicedToArray(_useState, 2),
    active = _useState2[0],
    setActive = _useState2[1];
  var handleKey = (0,external_react_.useCallback)(function (key) {
    setActive(key);
    onChange(key);
  }, [onChange]);
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "lf-control-tabs",
    "data-lf-field-name": name
  }, /*#__PURE__*/external_react_default().createElement(external_react_bootstrap_.Tabs, tabs_extends({
    activeKey: active,
    onSelect: handleKey,
    variant: variant || 'tabs',
    transition: transition === false ? false : undefined,
    fill: fill,
    justify: justify
  }, (0,helpers/* passRest */.QF)(rest)), (tabs || []).map(function (tab) {
    return /*#__PURE__*/external_react_default().createElement(external_react_bootstrap_.Tab, {
      key: tab.value,
      eventKey: tab.value,
      title: tab.label
    }, children(active));
  })));
}, [], {
  tabs: helpers/* i18nOptions */.Lo
});

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./react-bootstrap/button/button.scss
var button_button = __webpack_require__(7559);
;// CONCATENATED MODULE: ./react-bootstrap/button/button.scss

      
      
      
      
      
      
      
      
      

var button_options = {};

button_options.styleTagTransform = (styleTagTransform_default());
button_options.setAttributes = (setAttributesWithoutAttributes_default());

      button_options.insert = insertBySelector_default().bind(null, "head");
    
button_options.domAPI = (styleDomAPI_default());
button_options.insertStyleElement = (insertStyleElement_default());

var button_update = injectStylesIntoStyleTag_default()(button_button/* default */.Z, button_options);




       /* harmony default export */ const react_bootstrap_button_button = (button_button/* default */.Z && button_button/* default.locals */.Z.locals ? button_button/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./react-bootstrap/button/index.js

var button_excluded = ["label", "icon", "hint"];
function button_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = button_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function button_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/* eslint-disable jsx-a11y/alt-text */





var BootstrapButton = function BootstrapButton(_ref) {
  var label = _ref.label,
    icon = _ref.icon,
    hint = _ref.hint,
    rest = button_objectWithoutProperties(_ref, button_excluded);
  var inner;
  if (!isEmpty_default()(label) && !isEmpty_default()(icon)) {
    inner = /*#__PURE__*/external_react_default().createElement(external_react_bootstrap_.Button, rest, /*#__PURE__*/external_react_default().createElement("img", {
      className: "lf-icon",
      src: icon
    }), label);
  } else if (!isEmpty_default()(label) && isEmpty_default()(icon)) {
    inner = /*#__PURE__*/external_react_default().createElement(external_react_bootstrap_.Button, rest, label);
  } else if (isEmpty_default()(label) && !isEmpty_default()(icon)) {
    inner = /*#__PURE__*/external_react_default().createElement(external_react_bootstrap_.Button, rest, /*#__PURE__*/external_react_default().createElement("img", {
      className: "lf-icon",
      src: icon
    }));
  } else {
    inner = /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null);
  }
  return /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, inner, hint && /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement(external_react_bootstrap_.Form.Text, null, hint)));
};
var BiStateButton = (0,components/* I18N */.mb)((0,common/* MakeButton */.ah)(BootstrapButton, function (props) {
  return {
    variant: props.variant || 'primary'
  };
}, function (props) {
  return {
    variant: 'outline-' + (props.variant || 'primary')
  };
}), ['labelOn', 'labelOff', 'labelLink', 'hint']);

// EXTERNAL MODULE: ./costants.js
var costants = __webpack_require__(8064);
;// CONCATENATED MODULE: ./react-bootstrap/index.js
var react_bootstrap_excluded = ["framework", "children"];
function react_bootstrap_extends() { react_bootstrap_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return react_bootstrap_extends.apply(this, arguments); }
function react_bootstrap_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = react_bootstrap_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function react_bootstrap_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
























var Fields = {
  'input-text': {
    'react-bootstrap': TextInput
  },
  'select': {
    'react-bootstrap': Select
  },
  'checkbox': {
    'react-bootstrap': Checkbox
  },
  'toggle': {
    'react-bootstrap': Toggle
  },
  'checkbox-group': {
    'react-bootstrap': CheckboxGroupBootstrap
  },
  'placeholder': {
    'react-bootstrap': PlaceholderBootstrap
  },
  'placeholder-image': {
    'react-bootstrap': placeholder_image/* PlaceholderImage */.N
  },
  'date': {
    'react-bootstrap': date_Date
  },
  'textarea': {
    'react-bootstrap': Textarea
  },
  'slider': {
    'react-bootstrap': Slider
  },
  'three-columns': {
    'react-bootstrap': three_columns/* ThreeColumns */.$
  },
  'two-columns': {
    'react-bootstrap': two_columns/* TwoColumns */.V
  },
  'group': {
    'react-bootstrap': group/* Group */.Z
  },
  'radio-group': {
    'react-bootstrap': RadioGroupBootstrap
  },
  'divider': {
    'react-bootstrap': common/* Divider */.iz
  },
  'react-view': {
    'react-bootstrap': react_view/* ReactView */.Y
  },
  'datetime': {
    'react-bootstrap': DateTime
  },
  'array': {
    'react-bootstrap': ListArrayBootstrap
  },
  'input-number': {
    'react-bootstrap': InputNumber
  },
  'tabs': {
    'react-bootstrap': TabsReactBootstrap
  },
  'button': {
    'react-bootstrap': BiStateButton
  }
};
var Forms = {
  'react-bootstrap': FormBootstrap
};
var FormGenerator = (0,generator/* GenerateGenerator */.x)({
  Fields: Fields,
  Forms: Forms
});
var LetsForm = function LetsForm(_ref) {
  var framework = _ref.framework,
    children = _ref.children,
    rest = react_bootstrap_objectWithoutProperties(_ref, react_bootstrap_excluded);
  return /*#__PURE__*/external_react_default().createElement(FormGenerator, react_bootstrap_extends({
    framework: "react-bootstrap"
  }, rest), children);
};
/* harmony default export */ const react_bootstrap = (LetsForm);



})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=lets-form-bootstrap.min.js.map