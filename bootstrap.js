(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("dayjs"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types", "dayjs"], factory);
	else if(typeof exports === 'object')
		exports["lets-form-bootstrap"] = factory(require("react"), require("prop-types"), require("dayjs"));
	else
		root["lets-form-bootstrap"] = factory(root["react"], root["prop-types"], root["dayjs"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__8156__, __WEBPACK_EXTERNAL_MODULE__5099__, __WEBPACK_EXTERNAL_MODULE__5760__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
___CSS_LOADER_EXPORT___.push([module.id, ".lf-control-divider{min-height:15px;font-size:1px;display:flex;margin-bottom:var(--lf-field-margin)}.lf-control-divider .bar{width:100%;margin-top:5px;margin-bottom:5px}", "",{"version":3,"sources":["webpack://./common/divider/divider.scss"],"names":[],"mappings":"AAAA,oBACE,eAAA,CACA,aAAA,CACA,YAAA,CACA,oCAAA,CAEA,yBACE,UAAA,CACA,cAAA,CACA,iBAAA","sourcesContent":[".lf-control-divider {\n  min-height: 15px;\n  font-size: 1px;\n  display: flex;\n  margin-bottom: var(--lf-field-margin);\n\n  .bar {\n    width: 100%;\n    margin-top: 5px;\n    margin-bottom: 5px;\n  }\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".lf-control-group{margin-bottom:var(--lf-field-margin)}.lf-control-group.bottom-border.open{border-bottom:1px solid #e5e5ea;padding-bottom:15px}.lf-control-group .header{align-items:center;background:rgba(0,0,0,0);display:flex;margin:15px 0px;height:1px;flex-direction:row}.lf-control-group .header .inner-text{flex:0 0 auto;padding:0 12px;display:inline-block}.lf-control-group .header:before{border-top:1px solid #e5e5ea;content:\"\";flex:1 0}.lf-control-group .header:after{border-top:1px solid #e5e5ea;content:\"\";flex:1 0}.lf-control-group .header.left:before{flex:0 0 10px}.lf-control-group .header.right:after{flex:0 0 10px}", "",{"version":3,"sources":["webpack://./common/group/group.scss"],"names":[],"mappings":"AAAA,kBACE,oCAAA,CAEA,qCACE,+BAAA,CACA,mBAAA,CAGF,0BACE,kBAAA,CACA,wBAAA,CACA,YAAA,CACA,eAAA,CACA,UAAA,CACA,kBAAA,CAEA,sCACE,aAAA,CACA,cAAA,CACA,oBAAA,CAGF,iCACE,4BAAA,CACA,UAAA,CACA,QAAA,CAGF,gCACE,4BAAA,CACA,UAAA,CACA,QAAA,CAIA,sCACE,aAAA,CAKF,sCACE,aAAA","sourcesContent":[".lf-control-group {\n  margin-bottom: var(--lf-field-margin);\n\n  &.bottom-border.open {\n    border-bottom: 1px solid #e5e5ea;\n    padding-bottom: 15px;\n  }\n\n  .header {\n    align-items: center;\n    background: transparent;\n    display: flex;\n    margin: 15px 0px;\n    height: 1px;\n    flex-direction: row;\n\n    .inner-text {\n      flex: 0 0 auto;\n      padding: 0 12px;\n      display: inline-block;\n    }\n\n    &:before {\n      border-top: 1px solid #e5e5ea;\n      content: \"\";\n      flex: 1 0;\n    }\n\n    &:after {\n      border-top: 1px solid #e5e5ea;\n      content: \"\";\n      flex: 1 0;\n    }\n\n    &.left {\n      &:before {\n        flex: 0 0 10px;\n      }\n    }\n\n    &.right {\n      &:after {\n        flex: 0 0 10px;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".lf-control-three-columns{margin-bottom:var(--lf-field-margin);display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-content:stretch;align-items:stretch;min-height:40px}.lf-control-three-columns .left{flex:1 0;align-self:auto;margin-right:var(--lf-field-column-margin)}.lf-control-three-columns .center{margin-right:var(--lf-field-column-margin);flex:1 0;align-self:auto}.lf-control-three-columns .right{flex:1 0;align-self:auto}.lf-control-three-columns .left:empty{display:none}.lf-control-three-columns.layout-0-1-0 .left{flex:0 0}.lf-control-three-columns.layout-0-1-0 .center{flex:1 0}.lf-control-three-columns.layout-0-1-0 .right{flex:0 0}.lf-control-three-columns.layout-1-0-0 .left{flex:1 0}.lf-control-three-columns.layout-1-0-0 .center{flex:0 0}.lf-control-three-columns.layout-1-0-0 .right{flex:0 0}.lf-control-three-columns.layout-1-1-1 .left{flex:1 0}.lf-control-three-columns.layout-1-1-1 .center{flex:1 0}.lf-control-three-columns.layout-1-1-1 .right{flex:1 0}.lf-control-three-columns.layout-1-1-2 .left{flex:1 0}.lf-control-three-columns.layout-1-1-2 .center{flex:1 0}.lf-control-three-columns.layout-1-1-2 .right{flex:2 0}.lf-control-three-columns.layout-1-2-1 .left{flex:1 0}.lf-control-three-columns.layout-1-2-1 .center{flex:2 0}.lf-control-three-columns.layout-1-2-1 .right{flex:1 0}.lf-control-three-columns.layout-2-1-1 .left{flex:2 0}.lf-control-three-columns.layout-2-1-1 .center{flex:1 0}.lf-control-three-columns.layout-2-1-1 .right{flex:1 0}.lf-control-three-columns.layout-1-1-3 .left{flex:1 0}.lf-control-three-columns.layout-1-1-3 .center{flex:1 0}.lf-control-three-columns.layout-1-1-3 .right{flex:3 0}.lf-control-three-columns.layout-1-3-1 .left{flex:1 0}.lf-control-three-columns.layout-1-3-1 .center{flex:3 0}.lf-control-three-columns.layout-1-3-1 .right{flex:1 0}.lf-control-three-columns.layout-3-1-1 .left{flex:3 0}.lf-control-three-columns.layout-3-1-1 .center{flex:1 0}.lf-control-three-columns.layout-3-1-1 .right{flex:1 0}.lf-form-react-rsuite5 .lf-three-columns{margin-bottom:var(--lf-field-margin)}", "",{"version":3,"sources":["webpack://./common/three-columns/three-columns.scss"],"names":[],"mappings":"AAAA,0BACE,oCAAA,CACA,YAAA,CACA,kBAAA,CACA,cAAA,CACA,0BAAA,CACA,qBAAA,CACA,mBAAA,CACA,eAAA,CAUA,gCACE,QAAA,CACA,eAAA,CACA,0CAAA,CAGF,kCACE,0CAAA,CACA,QAAA,CACA,eAAA,CAGF,iCACE,QAAA,CACA,eAAA,CAGF,sCACE,YAAA,CAIA,6CACE,QAAA,CAEF,+CACE,QAAA,CAEF,8CACE,QAAA,CAKF,6CACE,QAAA,CAEF,+CACE,QAAA,CAEF,8CACE,QAAA,CAKF,6CACE,QAAA,CAEF,+CACE,QAAA,CAEF,8CACE,QAAA,CAKF,6CACE,QAAA,CAEF,+CACE,QAAA,CAEF,8CACE,QAAA,CAKF,6CACE,QAAA,CAEF,+CACE,QAAA,CAEF,8CACE,QAAA,CAKF,6CACE,QAAA,CAEF,+CACE,QAAA,CAEF,8CACE,QAAA,CAKF,6CACE,QAAA,CAEF,+CACE,QAAA,CAEF,8CACE,QAAA,CAKF,6CACE,QAAA,CAEF,+CACE,QAAA,CAEF,8CACE,QAAA,CAKF,6CACE,QAAA,CAEF,+CACE,QAAA,CAEF,8CACE,QAAA,CAQJ,yCACE,oCAAA","sourcesContent":[".lf-control-three-columns {\n  margin-bottom: var(--lf-field-margin);\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-content: stretch;\n  align-items: stretch;\n  min-height: 40px;\n\n  /*.left, .right, .center {\n    .rs-form-control-wrapper {\n      > .rs-input, > .rs-input-number {\n        //width: auto;\n      }\n    }\n  }*/\n\n  .left {\n    flex: 1 0;\n    align-self: auto;\n    margin-right: var(--lf-field-column-margin);\n  }\n\n  .center {\n    margin-right: var(--lf-field-column-margin);\n    flex: 1 0;\n    align-self: auto;\n  }\n\n  .right {\n    flex: 1 0;\n    align-self: auto;\n  }\n\n  .left:empty {\n    display: none;\n  }\n\n  &.layout-0-1-0 {\n    .left {\n      flex: 0 0;\n    }\n    .center {\n      flex: 1 0;\n    }\n    .right {\n      flex: 0 0;\n    }\n  }\n\n  &.layout-1-0-0 {\n    .left {\n      flex: 1 0;\n    }\n    .center {\n      flex: 0 0;\n    }\n    .right {\n      flex: 0 0;\n    }\n  }\n\n  &.layout-1-1-1 {\n    .left {\n      flex: 1 0;\n    }\n    .center {\n      flex: 1 0;\n    }\n    .right {\n      flex: 1 0;\n    }\n  }\n\n  &.layout-1-1-2 {\n    .left {\n      flex: 1 0;\n    }\n    .center {\n      flex: 1 0;\n    }\n    .right {\n      flex: 2 0;\n    }\n  }\n\n  &.layout-1-2-1 {\n    .left {\n      flex: 1 0;\n    }\n    .center {\n      flex: 2 0;\n    }\n    .right {\n      flex: 1 0;\n    }\n  }\n\n  &.layout-2-1-1 {\n    .left {\n      flex: 2 0;\n    }\n    .center {\n      flex: 1 0;\n    }\n    .right {\n      flex: 1 0;\n    }\n  }\n\n  &.layout-1-1-3 {\n    .left {\n      flex: 1 0;\n    }\n    .center {\n      flex: 1 0;\n    }\n    .right {\n      flex: 3 0;\n    }\n  }\n\n  &.layout-1-3-1 {\n    .left {\n      flex: 1 0;\n    }\n    .center {\n      flex: 3 0;\n    }\n    .right {\n      flex: 1 0;\n    }\n  }\n\n  &.layout-3-1-1 {\n    .left {\n      flex: 3 0;\n    }\n    .center {\n      flex: 1 0;\n    }\n    .right {\n      flex: 1 0;\n    }\n  }\n\n\n}\n\n.lf-form-react-rsuite5 {\n  .lf-three-columns {\n    margin-bottom: var(--lf-field-margin);\n  }\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".lf-control-two-columns{margin-bottom:var(--lf-field-margin);display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-content:stretch;align-items:stretch;min-height:40px}.lf-control-two-columns .left{flex:1 0;align-self:auto;margin-right:var(--lf-field-column-margin)}.lf-control-two-columns .right{flex:1 0;align-self:auto}.lf-control-two-columns.layout-1-2 .left{flex:1 0}.lf-control-two-columns.layout-1-2 .right{flex:2 0}.lf-control-two-columns.layout-1-3 .left{flex:1 0}.lf-control-two-columns.layout-1-3 .right{flex:3 0}.lf-control-two-columns.layout-1-4 .left{flex:1 0}.lf-control-two-columns.layout-1-4 .right{flex:4 0}.lf-control-two-columns.layout-1-5 .left{flex:1 0}.lf-control-two-columns.layout-1-5 .right{flex:4 0}.lf-control-two-columns.layout-2-1 .left{flex:2 0}.lf-control-two-columns.layout-2-1 .right{flex:1 0}.lf-control-two-columns.layout-3-1 .left{flex:3 0}.lf-control-two-columns.layout-3-1 .right{flex:1 0}.lf-control-two-columns.layout-4-1 .left{flex:4 0}.lf-control-two-columns.layout-4-1 .right{flex:1 0}.lf-control-two-columns.layout-5-1 .left{flex:4 0}.lf-control-two-columns.layout-5-1 .right{flex:1 0}.lf-control-two-columns.layout-3-2 .left{flex:3 0}.lf-control-two-columns.layout-3-2 .right{flex:2 0}.lf-control-two-columns.layout-2-3 .left{flex:2 0}.lf-control-two-columns.layout-2-3 .right{flex:3 0}.lf-control-two-columns.layout-0-1 .left{flex:0 0 auto}.lf-control-two-columns.layout-0-1 .right{flex:1 0}.lf-control-two-columns.layout-1-0 .left{flex:1 0}.lf-control-two-columns.layout-1-0 .right{flex:0 0 auto}.lf-form-react-rsuite5 .lf-two-columns{margin-bottom:var(--lf-field-margin)}", "",{"version":3,"sources":["webpack://./common/two-columns/two-columns.scss"],"names":[],"mappings":"AAAA,wBACE,oCAAA,CACA,YAAA,CACA,kBAAA,CACA,cAAA,CACA,0BAAA,CACA,qBAAA,CACA,mBAAA,CACA,eAAA,CAEA,8BACE,QAAA,CACA,eAAA,CACA,0CAAA,CAGF,+BACE,QAAA,CACA,eAAA,CAIA,yCACE,QAAA,CAEF,0CACE,QAAA,CAKF,yCACE,QAAA,CAEF,0CACE,QAAA,CAKF,yCACE,QAAA,CAEF,0CACE,QAAA,CAKF,yCACE,QAAA,CAEF,0CACE,QAAA,CAKF,yCACE,QAAA,CAEF,0CACE,QAAA,CAKF,yCACE,QAAA,CAEF,0CACE,QAAA,CAKF,yCACE,QAAA,CAEF,0CACE,QAAA,CAKF,yCACE,QAAA,CAEF,0CACE,QAAA,CAKF,yCACE,QAAA,CAEF,0CACE,QAAA,CAKF,yCACE,QAAA,CAEF,0CACE,QAAA,CAKF,yCACE,aAAA,CAEF,0CACE,QAAA,CAKF,yCACE,QAAA,CAEF,0CACE,aAAA,CAMJ,uCACE,oCAAA","sourcesContent":[".lf-control-two-columns {\n  margin-bottom: var(--lf-field-margin);\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-content: stretch;\n  align-items: stretch;\n  min-height: 40px;\n\n  .left {\n    flex: 1 0;\n    align-self: auto;\n    margin-right: var(--lf-field-column-margin);\n  }\n\n  .right {\n    flex: 1 0;\n    align-self: auto;\n  }\n\n  &.layout-1-2 {\n    .left {\n      flex: 1 0;\n    }\n    .right {\n      flex: 2 0;\n    }\n  }\n\n  &.layout-1-3 {\n    .left {\n      flex: 1 0;\n    }\n    .right {\n      flex: 3 0;\n    }\n  }\n\n  &.layout-1-4 {\n    .left {\n      flex: 1 0;\n    }\n    .right {\n      flex: 4 0;\n    }\n  }\n\n  &.layout-1-5 {\n    .left {\n      flex: 1 0;\n    }\n    .right {\n      flex: 4 0;\n    }\n  }\n\n  &.layout-2-1 {\n    .left {\n      flex: 2 0;\n    }\n    .right {\n      flex: 1 0;\n    }\n  }\n\n  &.layout-3-1 {\n    .left {\n      flex: 3 0;\n    }\n    .right {\n      flex: 1 0;\n    }\n  }\n\n  &.layout-4-1 {\n    .left {\n      flex: 4 0;\n    }\n    .right {\n      flex: 1 0;\n    }\n  }\n\n  &.layout-5-1 {\n    .left {\n      flex: 4 0;\n    }\n    .right {\n      flex: 1 0;\n    }\n  }\n\n  &.layout-3-2 {\n    .left {\n      flex: 3 0;\n    }\n    .right {\n      flex: 2 0;\n    }\n  }\n\n  &.layout-2-3 {\n    .left {\n      flex: 2 0;\n    }\n    .right {\n      flex: 3 0;\n    }\n  }\n\n  &.layout-0-1 {\n    .left {\n      flex: 0 0 auto;\n    }\n    .right {\n      flex: 1 0;\n    }\n  }\n\n  &.layout-1-0 {\n    .left {\n      flex: 1 0;\n    }\n    .right {\n      flex: 0 0 auto;\n    }\n  }\n}\n\n.lf-form-react-rsuite5 {\n  .lf-two-columns {\n    margin-bottom: var(--lf-field-margin);\n  }\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".lf-form{--lf-field-margin: 24px;--lf-field-column-margin: 20px}.lf-icon-asterisk{margin-top:-3px;display:inline-block}.lf-missing-component{border:1px solid #bbb;background-color:#f6f6f6;padding:20px;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-content:stretch;align-items:flex-start}.lf-missing-component .icon{order:0;flex:0 0;align-self:auto;margin-top:2px}.lf-missing-component .tag-component{background-color:#673ab7;color:#fff;font-size:12px;padding:1px 4px 2px 4px;border-radius:3px;line-height:17px}.lf-missing-component .message{display:inline-block;margin-left:10px;order:0;flex:1 0;align-self:auto}", "",{"version":3,"sources":["webpack://./generator/index.scss"],"names":[],"mappings":"AAAA,SACE,uBAAA,CACA,8BAAA,CAGF,kBACE,eAAA,CACA,oBAAA,CAGF,sBACE,qBAAA,CACA,wBAAA,CACA,YAAA,CACA,YAAA,CACA,kBAAA,CACA,cAAA,CACA,0BAAA,CACA,qBAAA,CACA,sBAAA,CAEA,4BACE,OAAA,CACA,QAAA,CACA,eAAA,CACA,cAAA,CAGF,qCACE,wBAAA,CACA,UAAA,CACA,cAAA,CACA,uBAAA,CACA,iBAAA,CACA,gBAAA,CAGF,+BACE,oBAAA,CACA,gBAAA,CACA,OAAA,CACA,QAAA,CACA,eAAA","sourcesContent":[".lf-form {\n  --lf-field-margin: 24px;\n  --lf-field-column-margin: 20px;\n}\n\n.lf-icon-asterisk {\n  margin-top: -3px;\n  display: inline-block;\n}\n\n.lf-missing-component {\n  border: 1px solid #bbbbbb;\n  background-color: #f6f6f6;\n  padding: 20px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-content: stretch;\n  align-items: flex-start;\n\n  .icon {\n    order: 0;\n    flex: 0 0;\n    align-self: auto;\n    margin-top: 2px;\n  }\n\n  .tag-component {\n    background-color: #673ab7;\n    color: #ffffff;\n    font-size: 12px;\n    padding: 1px 4px 2px 4px;\n    border-radius: 3px;\n    line-height: 17px;\n  }\n\n  .message {\n    display: inline-block;\n    margin-left: 10px;\n    order: 0;\n    flex: 1 0;\n    align-self: auto;\n  }\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".lf-form-react-bootstrap .lf-toolbar{margin-top:15px}", "",{"version":3,"sources":["webpack://./react-bootstrap/form/index.scss"],"names":[],"mappings":"AAAA,qCACE,eAAA","sourcesContent":[".lf-form-react-bootstrap .lf-toolbar {\n  margin-top: 15px;\n}"],"sourceRoot":""}]);
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

/***/ 2705:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(5639);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


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

/***/ 280:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(5569);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


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

/***/ 1811:
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

/***/ 292:
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

/***/ 5639:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(1957);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


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

/***/ 7305:
/***/ ((module) => {

"use strict";
var microdown=function(){function l(n,e,r){return"<"+n+(r?" "+Object.keys(r).map(function(n){return r[n]?n+'="'+(a(r[n])||"")+'"':""}).join(" "):"")+">"+e+"</"+n+">"}function c(n,e){return e=n.match(/^[+-]/m)?"ul":"ol",n?"<"+e+">"+n.replace(/(?:[+-]|\d+\.) +(.*)\n?(([ \t].*\n?)*)/g,function(n,e,r){return"<li>"+g(e+"\n"+(t=r||"").replace(new RegExp("^"+(t.match(/^\s+/)||"")[0],"gm"),"").replace(o,c))+"</li>";var t})+"</"+e+">":""}function e(r,t,u,c){return function(n,e){return n=n.replace(t,u),l(r,c?c(n):n)}}function t(n,u){return f(n,[/<!--((.|\n)*?)-->/g,"\x3c!--$1--\x3e",/^("""|```)(.*)\n((.*\n)*?)\1/gm,function(n,e,r,t){return'"""'===e?l("div",p(t,u),{class:r}):u&&u.preCode?l("pre",l("code",a(t),{class:r})):l("pre",a(t),{class:r})},/(^>.*\n?)+/gm,e("blockquote",/^> ?(.*)$/gm,"$1",r),/((^|\n)\|.+)+/g,e("table",/^.*(\n\|---.*?)?$/gm,function(n,t){return e("tr",/\|(-?)([^|]*)\1(\|$)?/gm,function(n,e,r){return l(e||t?"th":"td",g(r))})(n.slice(0,n.length-(t||"").length))}),o,c,/#\[([^\]]+?)]/g,'<a name="$1"></a>',/^(#+) +(.*)(?:$)/gm,function(n,e,r){return l("h"+e.length,g(r))},/^(===+|---+)(?=\s*$)/gm,"<hr>"],p,u)}var i=this,a=function(n){return n?n.replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""},o=/(?:(^|\n)([+-]|\d+\.) +(.*(\n[ \t]+.*)*))+/g,g=function c(n,i){var o=[];return n=(n||"").trim().replace(/`([^`]*)`/g,function(n,e){return"\\"+o.push(l("code",a(e)))}).replace(/[!&]?\[([!&]?\[.*?\)|[^\]]*?)]\((.*?)( .*?)?\)|(\w+:\/\/[$\-.+!*'()/,\w]+)/g,function(n,e,r,t,u){return u?i?n:"\\"+o.push(l("a",u,{href:u})):"&"==n[0]?(e=e.match(/^(.+),(.+),([^ \]]+)( ?.+?)?$/),"\\"+o.push(l("iframe","",{width:e[1],height:e[2],frameborder:e[3],class:e[4],src:r,title:t}))):"\\"+o.push("!"==n[0]?l("img","",{src:r,alt:e,title:t}):l("a",c(e,1),{href:r,title:t}))}),n=function r(n){return n.replace(/\\(\d+)/g,function(n,e){return r(o[Number.parseInt(e)-1])})}(i?n:r(n))},r=function t(n){return f(n,[/([*_]{1,3})((.|\n)+?)\1/g,function(n,e,r){return e=e.length,r=t(r),1<e&&(r=l("strong",r)),e%2&&(r=l("em",r)),r},/(~{1,3})((.|\n)+?)\1/g,function(n,e,r){return l([,"u","s","del"][e.length],t(r))},/  \n|\n  /g,"<br>"],t)},f=function(n,e,r,t){for(var u,c=0;c<e.length;){if(u=e[c++].exec(n))return r(n.slice(0,u.index),t)+("string"==typeof e[c]?e[c].replace(/\$(\d)/g,function(n,e){return u[e]}):e[c].apply(i,u))+r(n.slice(u.index+u[0].length),t);c++}return n},p=function(n,e){n=n.replace(/[\r\v\b\f]/g,"").replace(/\\./g,function(n){return"&#"+n.charCodeAt(1)+";"});var r=t(n,e);return r!==n||r.match(/^[\s\n]*$/i)||(r=g(r).replace(/((.|\n)+?)(\n\n+|$)/g,function(n,e){return l("p",e)})),r.replace(/&#(\d+);/g,function(n,e){return String.fromCharCode(parseInt(e))})};return{parse:p,block:t,inline:r,inlineBlock:g}}(); true&&(module.exports=microdown);

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

/***/ 5760:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__5760__;

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
  "FIELDS_KEY": () => (/* reexport */ FIELDS_KEY),
  "FRAMEWORKS": () => (/* reexport */ FRAMEWORKS),
  "FRAMEWORKS_LABELS": () => (/* reexport */ FRAMEWORKS_LABELS),
  "Fields": () => (/* binding */ Fields),
  "Forms": () => (/* binding */ Forms),
  "addField": () => (/* reexport */ addField),
  "applyFormRules": () => (/* reexport */ applyFormRules),
  "applyTransformers": () => (/* reexport */ applyTransformers),
  "cleanUp": () => (/* reexport */ cleanUp),
  "collectNames": () => (/* reexport */ collectNames),
  "createEmptyField": () => (/* reexport */ createEmptyField),
  "default": () => (/* binding */ react_bootstrap),
  "deleteField": () => (/* reexport */ deleteField),
  "fillIds": () => (/* reexport */ fillIds),
  "filterFields": () => (/* reexport */ filterFields),
  "filterOptions": () => (/* reexport */ filterOptions),
  "findField": () => (/* reexport */ findField),
  "getLocales": () => (/* reexport */ getLocales),
  "i18n": () => (/* reexport */ i18n),
  "isEmptyForm": () => (/* reexport */ isEmptyForm),
  "isI18n": () => (/* reexport */ isI18n),
  "isUrl": () => (/* reexport */ isUrl),
  "isValidDayjsFormat": () => (/* reexport */ isValidDayjsFormat),
  "makeWidthStyle": () => (/* reexport */ makeWidthStyle),
  "mapFields": () => (/* reexport */ mapFields),
  "passRest": () => (/* reexport */ passRest),
  "reduceFields": () => (/* reexport */ reduceFields),
  "replaceField": () => (/* reexport */ replaceField),
  "validateRulesDefinition": () => (/* reexport */ validateRulesDefinition)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(8156);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/lodash/uniqueId.js
var uniqueId = __webpack_require__(3955);
var uniqueId_default = /*#__PURE__*/__webpack_require__.n(uniqueId);
// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(7557);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);
// EXTERNAL MODULE: ./node_modules/lodash/trim.js
var trim = __webpack_require__(2742);
var trim_default = /*#__PURE__*/__webpack_require__.n(trim);
// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(1609);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
// EXTERNAL MODULE: ./node_modules/lodash/isString.js
var isString = __webpack_require__(7037);
var isString_default = /*#__PURE__*/__webpack_require__.n(isString);
;// CONCATENATED MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs


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

const HookFormContext = external_react_.createContext(null);
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
const useFormContext = () => external_react_.useContext(HookFormContext);
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
    const _props = external_react_.useRef(props);
    _props.current = props;
    external_react_.useEffect(() => {
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
    const [formState, updateFormState] = external_react_.useState(control._formState);
    const _mounted = external_react_.useRef(true);
    const _localProxyFormState = external_react_.useRef({
        isDirty: false,
        isLoading: false,
        dirtyFields: false,
        touchedFields: false,
        isValidating: false,
        isValid: false,
        errors: false,
    });
    const _name = external_react_.useRef(name);
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
    external_react_.useEffect(() => {
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

var index_esm_isString = (value) => typeof value === 'string';

var generateWatchOutput = (names, _names, formValues, isGlobal, defaultValue) => {
    if (index_esm_isString(names)) {
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
    const _name = external_react_.useRef(name);
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
    const [value, updateValue] = external_react_.useState(control._getWatch(name, defaultValue));
    external_react_.useEffect(() => control._removeUnmounted());
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
    const _registerProps = external_react_.useRef(control.register(name, {
        ...props.rules,
        value,
    }));
    external_react_.useEffect(() => {
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
            onChange: external_react_.useCallback((event) => _registerProps.current.onChange({
                target: {
                    value: getEventValue(event),
                    name: name,
                },
                type: EVENTS.CHANGE,
            }), [name]),
            onBlur: external_react_.useCallback(() => _registerProps.current.onBlur({
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

var isMessage = (value) => index_esm_isString(value);

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
            if (index_esm_isString(maxOutput.value) && inputValue) {
                exceedMax = isTime
                    ? convertTimeToDate(inputValue) > convertTimeToDate(maxOutput.value)
                    : isWeek
                        ? inputValue > maxOutput.value
                        : valueDate > new Date(maxOutput.value);
            }
            if (index_esm_isString(minOutput.value) && inputValue) {
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
        (index_esm_isString(inputValue) || (isFieldArray && Array.isArray(inputValue)))) {
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
    if (pattern && !isEmpty && index_esm_isString(inputValue)) {
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
        : valueAsDate && index_esm_isString(value)
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
                : index_esm_isString(names)
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
            ...(!index_esm_isString(name) ||
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
            : index_esm_isString(fieldNames)
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
    const _formControl = external_react_.useRef();
    const [formState, updateFormState] = external_react_.useState({
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
    external_react_.useEffect(() => {
        if (props.values && !deepEqual(props.values, control._defaultValues)) {
            control._reset(props.values, control._options.resetOptions);
        }
    }, [props.values, control]);
    external_react_.useEffect(() => {
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

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/lodash/isObject.js
var lodash_isObject = __webpack_require__(3218);
var isObject_default = /*#__PURE__*/__webpack_require__.n(lodash_isObject);
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

;// CONCATENATED MODULE: ./assets/icons/plus-circle.js

var PlusCircle = function PlusCircle(_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === void 0 ? 24 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 24 : _ref$height,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#000000' : _ref$color;
  return /*#__PURE__*/React.createElement("svg", {
    width: "".concat(width, "px"),
    height: "".concat(height, "px"),
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
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
  return /*#__PURE__*/React.createElement("svg", {
    width: "".concat(width, "px"),
    height: "".concat(height, "px"),
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
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
    strokeSidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
;// CONCATENATED MODULE: ./assets/icons/index.js








;// CONCATENATED MODULE: ./components/required-icon/index.js


var RequiredIcon = function RequiredIcon() {
  return /*#__PURE__*/external_react_default().createElement(Asterisk, {
    color: "#ff6633",
    width: 12,
    height: 12,
    style: {
      marginLeft: '3px'
    }
  });
};

// EXTERNAL MODULE: ./node_modules/lodash/isFunction.js
var lodash_isFunction = __webpack_require__(3560);
var isFunction_default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction);
;// CONCATENATED MODULE: ./helpers/map-fields.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
  if (!fields) {
    return fields;
  }
  // replace with predicated
  var newFields = fields.map(function (field) {
    var newField = predicate(field);
    if (field.component === 'group') {
      var _newFields = mapFields(field.fields, predicate);
      if (_newFields !== field.fields) {
        newField = _objectSpread(_objectSpread({}, newField), {}, {
          fields: _newFields
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
    }
    return newField;
  });

  // check if some element of the array is changed, keep instance consistency otherwise
  var hasChanges = fields.some(function (field, idx) {
    return field !== newFields[idx];
  });
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
    if (!field.id) {
      return fill_ids_objectSpread({
        id: uniqueId_default()(namespace)
      }, field);
    }
    return field;
  });
};

// EXTERNAL MODULE: ./node_modules/lodash/isArray.js
var isArray = __webpack_require__(1469);
var isArray_default = /*#__PURE__*/__webpack_require__.n(isArray);
// EXTERNAL MODULE: ./node_modules/lodash/isNumber.js
var isNumber = __webpack_require__(1763);
var isNumber_default = /*#__PURE__*/__webpack_require__.n(isNumber);
// EXTERNAL MODULE: ./node_modules/lodash/isBoolean.js
var lodash_isBoolean = __webpack_require__(1584);
var isBoolean_default = /*#__PURE__*/__webpack_require__.n(lodash_isBoolean);
// EXTERNAL MODULE: ./node_modules/lodash/keys.js
var keys = __webpack_require__(3674);
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);
;// CONCATENATED MODULE: ./costants.js
var FRAMEWORKS = ['react', 'react-rsuite5', 'react-material-ui', 'react-bootstrap', 'react-antd'];
var FRAMEWORKS_LABELS = ['React', 'React + RSuite5', 'React + MaterialUI', 'React + Bootstrap', 'React + Ant Design'];
var FIELDS_KEY = ['fields', 'leftFields', 'rightField', 'centerFields'];
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
  var keysToRemove = Object.keys(obj).filter(function (key) {
    return !locales.includes(key);
  });
  return !isEmpty_default()(keysToRemove) ? omit_default()(obj, keysToRemove) : obj;
};
var removeUnusedLocalesFromObj = function removeUnusedLocalesFromObj(obj, locales) {
  var cloned = cleanup_objectSpread({}, obj);
  Object.keys(obj).filter(function (key) {
    return key !== 'rules';
  }) // don't apply to rules
  .forEach(function (key) {
    if (isArray_default()(cloned[key])) {
      cloned[key] = cloned[key].map(function (item) {
        return removeUnusedLocalesFromObj(item, locales);
      });
    } else if (isI18n(cloned[key])) {
      cloned[key] = removeUnusedLocalesFromI18n(cloned[key], locales);
    }
  });
  return cloned;
};

/**
 * cleanUp
 * Remove id from json file and all empty keys
 * @param {*} json
 * @returns
 */
var cleanUp = function cleanUp(json) {
  var emptyKeys = keys_default()(json).filter(function (key) {
    return isEmpty_default()(json[key]) && !(isBoolean_default()(json[key]) || isNumber_default()(json[key]));
  });
  var cleanedUp = omit_default()(json, emptyKeys);
  return cleanup_objectSpread(cleanup_objectSpread({}, cleanedUp), {}, {
    fields: mapFields(json.fields, function (field) {
      // clone and remove id
      var cloned = omit_default()(field, 'id');
      // clean all platform subkeys
      FRAMEWORKS.forEach(function (key) {
        if (cloned[key]) {
          cloned[key] = removeEmptyKeys(cloned[key]);
          // remove if empty after cleaning
          if (Object.keys(cloned[key]).length === 0) {
            delete cloned[key];
          }
        }
      });
      // collect all empty keys
      cloned = removeEmptyKeys(cloned);
      // cycle all keys and check if it's an i18n object
      if (isArray_default()(json.locales) && !isEmpty_default()(json.locales)) {
        cloned = removeUnusedLocalesFromObj(cloned, json.locales);
      }
      return cloned;
    })
  });
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

var addField = function addField(form, newField, id) {
  var target = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'fields';
  if (id != null) {
    return add_field_objectSpread(add_field_objectSpread({}, form), {}, {
      fields: mapFields(form.fields,
      // if right field id, append to fields
      function (field) {
        if (field.id === id) {
          return add_field_objectSpread(add_field_objectSpread({}, field), {}, add_field_defineProperty({}, target, [].concat(_toConsumableArray(field[target] || []), [newField])));
        }
        return field;
      })
    });
  } else {
    return add_field_objectSpread(add_field_objectSpread({}, form), {}, {
      fields: [].concat(_toConsumableArray(form.fields), [newField])
    });
  }
};

// EXTERNAL MODULE: ./node_modules/lodash/clone.js
var clone = __webpack_require__(6678);
var clone_default = /*#__PURE__*/__webpack_require__.n(clone);
;// CONCATENATED MODULE: ./helpers/reduce-fields.js



var reduceFields = function reduceFields(fields, predicate) {
  var accumulator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (isEmpty_default()(fields) || !isArray_default()(fields)) {
    return accumulator;
  }
  var result = clone_default()(accumulator);
  fields.forEach(function (field) {
    result = predicate(field, result);
    if (field.component === 'group') {
      result = reduceFields(field.fields, predicate, result);
    } else if (field.component === 'two-columns') {
      result = reduceFields(field.leftFields, predicate, result);
      result = reduceFields(field.rightFields, predicate, result);
    } else if (field.component === 'three-columns') {
      result = reduceFields(field.leftFields, predicate, result);
      result = reduceFields(field.centerFields, predicate, result);
      result = reduceFields(field.rightFields, predicate, result);
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
  var defaultValues = framework && Manifests[component] && Manifests[component].defaults && Manifests[component].defaults[framework] ? Manifests[component].defaults[framework] : {};
  return find_field_objectSpread({
    component: component,
    label: "Field ".concat(countFields + 1),
    name: newName,
    id: newId
  }, defaultValues);
};
var findField = function findField(fields, predicate) {
  if (isEmpty_default()(fields) || !isArray_default()(fields)) {
    return null;
  }
  var found = fields.find(predicate);
  fields.forEach(function (field) {
    if (!found) {
      if (field.component === 'group') {
        found = findField(field.fields, predicate);
      } else if (field.component === 'two-columns') {
        found = findField(field.leftFields, predicate) || findField(field.rightFields, predicate);
      } else if (field.component === 'three-columns') {
        found = findField(field.leftFields, predicate) || findField(field.centerFields, predicate) || findField(field.rightFields, predicate);
      }
    }
  });
  return found;
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
    return value;
  } else if (isObject_default()(value)) {
    if (locale && value[locale]) {
      return value[locale];
    }
    // if there's no dialect, then try with the first two letters
    if (locale && value[locale.substr(0, 2)]) {
      return value[locale.substr(0, 2)];
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
const mappings_namespaceObject = JSON.parse('{"text-input":{"name":null,"label":null,"hint":null,"placeholder":null,"disabled":null,"readOnly":null,"hidden":null,"fullWidth":["react","react-rsuite5","react-material-ui","react-bootstrap","react-antd"],"width":["react","react-rsuite5","react-material-ui","react-bootstrap","react-antd"],"size":["react-rsuite5","react-material-ui","react-bootstrap","react-antd"],"prefix":["react-rsuite5","react-material-ui","react-bootstrap","react-antd"],"inside":["react-rsuite5"],"postfix":["react-rsuite5","react-material-ui","react-bootstrap","react-antd"],"tooltip":["react-rsuite5","react-antd"],"floatingLabel":["react-material-ui","react-bootstrap"],"disableUnderline":["react-material-ui"],"variant":["react-material-ui"],"color":["react-material-ui"],"showCount":["react-antd"],"maxLength":["react-antd"],"allowClear":["react-antd"],"bordered":["react-antd"],"inputMode":null,"autocomplete":null,"inputType":null,"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"toggle":{"name":null,"label":null,"hint":null,"disabled":null,"readOnly":null,"hidden":null,"size":["react-rsuite5","react-material-ui","react-antd"],"checkedChildren":["react-rsuite5","react-antd"],"unCheckedChildren":["react-rsuite5","react-antd"],"tooltip":["react-rsuite5","react-antd"],"color":["react-material-ui"],"labelPlacement":["react-material-ui"],"disableRipple":["react-material-ui"],"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"select":{"name":null,"label":null,"hint":null,"placeholder":null,"options":null,"filterKey":null,"filterValue":null,"disabled":null,"readOnly":null,"hidden":null,"placement":["react-rsuite5","react-antd"],"size":["react-rsuite5","react-material-ui","react-bootstrap","react-antd"],"block":["react-rsuite5"],"searchable":["react-rsuite5"],"cleanable":["react-rsuite5"],"tooltip":["react-rsuite5","react-antd"],"appearance":["react-rsuite5"],"autoWidth":["react-material-ui"],"fullWidth":["react-material-ui"],"width":["react-material-ui","react-antd"],"floatingLabel":["react-material-ui","react-bootstrap"],"variant":["react-material-ui"],"allowClear":["react-antd"],"bordered":["react-antd"],"showSearch":["react-antd"],"showArrow":["react-antd"],"virtual":["react-antd"],"listHeight":["react-antd"],"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"group":{"name":null,"label":null,"hidden":null,"align":null,"collapsible":null,"open":null,"bottomBorder":null},"two-columns":{"name":null,"layout":null,"leftAlignment":null,"rightAlignment":null,"hidden":null},"three-columns":{"name":null,"layout":null,"leftAlignment":null,"centerAlignment":null,"rightAlignment":null,"hidden":null},"array":{"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"input-number":{"name":null,"label":null,"hint":null,"placeholder":null,"disabled":null,"readOnly":null,"hidden":null,"size":["react-rsuite5","react-antd"],"width":["react-rsuite5","react-antd"],"allowClear":["react-rsuite5"],"min":["react-rsuite5","react-antd"],"step":["react-rsuite5","react-antd"],"max":["react-rsuite5","react-antd"],"prefix":["react-rsuite5"],"inside":["react-rsuite5"],"postfix":["react-rsuite5"],"tooltip":["react-rsuite5","react-antd"],"showControls":["react-antd"],"stringMode":["react-antd"],"bordered":["react-antd"],"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"slider":{"name":null,"label":null,"hint":null,"disabled":null,"readOnly":null,"hidden":null,"tooltip":["react-rsuite5"],"min":["react-rsuite5","react-material-ui","react-bootstrap","react-antd"],"step":["react-rsuite5","react-material-ui","react-bootstrap","react-antd"],"max":["react-rsuite5","react-material-ui","react-bootstrap","react-antd"],"vertical":["react-rsuite5"],"progress":["react-rsuite5"],"showTooltip":["react-rsuite5"],"graduated":["react-rsuite5"],"marks":["react-rsuite5","react-antd"],"size":["react-material-ui"],"color":["react-material-ui"],"fullWidth":["react-material-ui"],"width":["react-material-ui"],"valueLabelDisplay":["react-material-ui"],"showMarks":["react-material-ui"],"customMarks":["react-material-ui"],"keyboard":["react-antd"],"dots":["react-antd"],"reverse":["react-antd"],"tooltipOpen":["react-antd"],"tooltipPlacement":["react-antd"],"included":["react-antd"],"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"date":{"name":null,"label":null,"hint":null,"placeholder":null,"disabled":null,"readOnly":null,"hidden":null,"format":["react-rsuite5","react-material-ui","react-antd"],"block":["react-rsuite5"],"cleanable":["react-rsuite5"],"editable":["react-rsuite5"],"oneTap":["react-rsuite5"],"showMeridian":["react-rsuite5"],"showWeekNumbers":["react-rsuite5"],"isoWeek":["react-rsuite5"],"size":["react-rsuite5","react-bootstrap","react-antd"],"appearance":["react-rsuite5"],"placement":["react-rsuite5","react-antd"],"fullWidth":["react-material-ui"],"disableFuture":["react-material-ui"],"disableHighlightToday":["react-material-ui"],"disableOpenPicker":["react-material-ui"],"disablePast":["react-material-ui"],"displayWeekNumber":["react-material-ui"],"reduceAnimations":["react-material-ui"],"showDaysOutsideCurrentMonth":["react-material-ui"],"maxDate":["react-material-ui"],"minDate":["react-material-ui"],"prefix":["react-bootstrap"],"postfix":["react-bootstrap"],"floatingLabel":["react-bootstrap"],"width":["react-antd"],"bordered":["react-antd"],"allowClear":["react-antd"],"tooltip":["react-antd"],"showTime":["react-antd"],"showNow":["react-antd"],"showToday":["react-antd"],"picker":["react-antd"],"mode":["react-antd"],"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"checkbox":{"name":null,"label":null,"hint":null,"disabled":null,"readOnly":null,"hidden":null,"indeterminate":["react-rsuite5"],"size":["react-material-ui"],"color":["react-material-ui"],"labelPlacement":["react-material-ui"],"disableRipple":["react-material-ui"],"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"checkbox-group":{"name":null,"label":null,"hint":null,"options":null,"disabled":null,"readOnly":null,"hidden":null,"inline":["react-rsuite5","react-bootstrap"],"tooltip":["react-rsuite5"],"reverse":["react-bootstrap"],"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"radio-group":{"name":null,"label":null,"hint":null,"options":null,"disabled":null,"readOnly":null,"hidden":null,"inline":["react-rsuite5","react-antd"],"tooltip":["react-rsuite5","react-antd"],"optionType":["react-antd"],"size":["react-antd"]},"input-tag":{"name":null,"label":null,"hint":null,"disabled":null,"readOnly":null,"hidden":null,"trigger":["react-rsuite5"],"block":["react-rsuite5"],"size":["react-rsuite5"],"tooltip":["react-rsuite5"],"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"input-mask":{"name":null,"label":null,"hint":null,"placeholder":null,"disabled":null,"readOnly":null,"hidden":null,"mask":["react-rsuite5"],"guide":["react-rsuite5"],"keepCharPositions":["react-rsuite5"],"showMask":["react-rsuite5"],"placeholderChar":["react-rsuite5"],"tooltip":["react-rsuite5"],"size":["react-rsuite5"],"prefix":["react-rsuite5"],"inside":["react-rsuite5"],"postfix":["react-rsuite5"],"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"textarea":{"name":null,"label":null,"hint":null,"placeholder":null,"disabled":null,"readOnly":null,"hidden":null,"size":["react","react-bootstrap","react-antd"],"width":["react","react-antd"],"rows":["react","react-rsuite5","react-bootstrap"],"tooltip":["react-rsuite5","react-antd"],"showCount":["react-antd"],"maxLength":["react-antd"],"allowClear":["react-antd"],"autoSize":["react-antd"],"bordered":["react-antd"],"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"rate":{"name":null,"label":null,"hint":null,"disabled":null,"readOnly":null,"hidden":null,"allowHalf":["react-rsuite5","react-antd"],"cleanable":["react-rsuite5"],"vertical":["react-rsuite5"],"max":["react-rsuite5","react-material-ui"],"color":["react-rsuite5"],"size":["react-rsuite5","react-material-ui"],"tooltip":["react-rsuite5","react-antd"],"precision":["react-material-ui"],"count":["react-antd"],"allowClear":["react-antd"],"tooltips":["react-antd"],"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"placeholder":{"name":null,"label":null,"hint":null,"text":null,"hidden":null,"tooltip":["react-rsuite5","react-antd"],"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"multiselect":{"name":null,"label":null,"hint":null,"options":null,"placeholder":null,"disabled":null,"readOnly":null,"hidden":null,"placement":["react-rsuite5","react-antd"],"size":["react-rsuite5","react-antd"],"block":["react-rsuite5"],"searchable":["react-rsuite5"],"cleanable":["react-rsuite5"],"tooltip":["react-rsuite5","react-antd"],"preventOverflow":["react-rsuite5"],"width":["react-antd"],"listHeight":["react-antd"],"allowClear":["react-antd"],"bordered":["react-antd"],"showSearch":["react-antd"],"showArrow":["react-antd"],"virtual":["react-antd"],"maxTagCount":["react-antd"],"maxTagPlaceholder":["react-antd"],"maxTagTextLength":["react-antd"],"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"multiselect-language":{"name":null,"label":null,"hint":null,"placeholder":null,"disabled":null,"readOnly":null,"hidden":null,"placement":["react-rsuite5"],"size":["react-rsuite5"],"tooltip":["react-rsuite5"],"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"input-text-i18n":{"name":null,"label":null,"hint":null,"placeholder":null,"disabled":null,"readOnly":null,"hidden":null,"size":["react-rsuite5"],"width":["react-rsuite5"],"textarea":["react-rsuite5"],"rows":["react-rsuite5"],"tooltip":["react-rsuite5"],"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"select-states":{"name":null,"label":null,"hint":null,"placeholder":null,"filterKey":null,"filterValue":null,"disabled":null,"readOnly":null,"hidden":null,"country":null,"placement":["react-rsuite5","react-antd"],"size":["react-rsuite5","react-material-ui","react-bootstrap","react-antd"],"block":["react-rsuite5"],"searchable":["react-rsuite5"],"cleanable":["react-rsuite5"],"tooltip":["react-rsuite5","react-antd"],"appearance":["react-rsuite5"],"autoWidth":["react-material-ui"],"fullWidth":["react-material-ui"],"width":["react-material-ui","react-antd"],"floatingLabel":["react-material-ui","react-bootstrap"],"variant":["react-material-ui"],"allowClear":["react-antd"],"bordered":["react-antd"],"showSearch":["react-antd"],"showArrow":["react-antd"],"virtual":["react-antd"],"listHeight":["react-antd"],"validationMinLength":"validation","validationMin":"validation","validationMaxLength":"validation","validationMax":"validation","validationPattern":"validation","validationMessage":"validation","required":null},"placeholder-image":{"name":null,"url":null,"maxWidth":null,"minHeight":null,"align":null,"marginTop":null,"marginBottom":null,"hidden":null},"button":{"name":null,"initialValue":null,"buttonType":null,"labelOn":null,"labelOff":null,"iconOn":null,"iconOff":null,"hint":null,"hidden":null,"size":["react-rsuite5"],"appearance":["react-rsuite5"]},"divider":{"name":null,"size":null,"color":null,"hidden":null}}');
;// CONCATENATED MODULE: ./helpers/apply-transformers.js





function apply_transformers_typeof(obj) { "@babel/helpers - typeof"; return apply_transformers_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, apply_transformers_typeof(obj); }
function apply_transformers_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function apply_transformers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? apply_transformers_ownKeys(Object(source), !0).forEach(function (key) { apply_transformers_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : apply_transformers_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function apply_transformers_defineProperty(obj, key, value) { key = apply_transformers_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function apply_transformers_toPropertyKey(arg) { var key = apply_transformers_toPrimitive(arg, "string"); return apply_transformers_typeof(key) === "symbol" ? key : String(key); }
function apply_transformers_toPrimitive(input, hint) { if (apply_transformers_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (apply_transformers_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



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
    values: Object.freeze(apply_transformers_objectSpread({}, currenValues))
  };
};
var applyTransformers = function applyTransformers(formName, framework, fields, transformers, values, onJavascriptError) {
  if (isArray_default()(transformers) && !isEmpty_default()(transformers) && isFunction_default()(transformers[0])) {
    var newFields = fields;
    // apply all transformers
    transformers.filter(function (transformer) {
      return isFunction_default()(transformer);
    }).forEach(function (transformer) {
      var api = new ApiFactory(formName, framework, fields, values);
      try {
        newFields = transformer(api);
      } catch (e) {
        console.error('[LetsForm] Error on transformer: ', e);
        var error = new Error('Error executing transformer: ' + e.message, {
          cause: e
        });
        error.errorType = 'runtime';
        onJavascriptError(error);
      }
    });
    return newFields;
  }
  return fields;
};

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
;// CONCATENATED MODULE: ./helpers/index.js





















;// CONCATENATED MODULE: ./components/i18n/index.js

function i18n_typeof(obj) { "@babel/helpers - typeof"; return i18n_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, i18n_typeof(obj); }
function i18n_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function i18n_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? i18n_ownKeys(Object(source), !0).forEach(function (key) { i18n_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : i18n_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function i18n_defineProperty(obj, key, value) { key = i18n_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function i18n_toPropertyKey(arg) { var key = i18n_toPrimitive(arg, "string"); return i18n_typeof(key) === "symbol" ? key : String(key); }
function i18n_toPrimitive(input, hint) { if (i18n_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (i18n_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var I18N = function I18N(Component) {
  var propNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var funcPropNames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return function (props) {
    var lfLocale = props.lfLocale;
    var newProps = Object.keys(props).reduce(function (acc, propName) {
      // translate simpe field
      if (propNames.includes(propName)) {
        return i18n_objectSpread(i18n_objectSpread({}, acc), {}, i18n_defineProperty({}, propName, i18n(props[propName], lfLocale)));
      } else if (isFunction_default()(funcPropNames[propName])) {
        // pass the value trough the mapper
        var translated = funcPropNames[propName](props[propName], function (string) {
          return i18n(string, lfLocale);
        });
        return i18n_objectSpread(i18n_objectSpread({}, acc), {}, i18n_defineProperty({}, propName, translated));
      }
      return i18n_objectSpread(i18n_objectSpread({}, acc), {}, i18n_defineProperty({}, propName, props[propName]));
    }, {});
    return /*#__PURE__*/external_react_default().createElement(Component, newProps);
  };
};
;// CONCATENATED MODULE: ./components/index.js



;// CONCATENATED MODULE: ./form-context/index.js

var FormContext = /*#__PURE__*/(0,external_react_.createContext)();
/* harmony default export */ const form_context = (FormContext);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./generator/index.scss
var cjs_js_generator = __webpack_require__(5861);
;// CONCATENATED MODULE: ./generator/index.scss

      
      
      
      
      
      
      
      
      

var generator_options = {};

generator_options.styleTagTransform = (styleTagTransform_default());
generator_options.setAttributes = (setAttributesWithoutAttributes_default());

      generator_options.insert = insertBySelector_default().bind(null, "head");
    
generator_options.domAPI = (styleDomAPI_default());
generator_options.insertStyleElement = (insertStyleElement_default());

var generator_update = injectStylesIntoStyleTag_default()(cjs_js_generator/* default */.Z, generator_options);




       /* harmony default export */ const generator = (cjs_js_generator/* default */.Z && cjs_js_generator/* default.locals */.Z.locals ? cjs_js_generator/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./generator/index.js





function generator_typeof(obj) { "@babel/helpers - typeof"; return generator_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, generator_typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || generator_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function generator_toConsumableArray(arr) { return generator_arrayWithoutHoles(arr) || generator_iterableToArray(arr) || generator_unsupportedIterableToArray(arr) || generator_nonIterableSpread(); }
function generator_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function generator_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return generator_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return generator_arrayLikeToArray(o, minLen); }
function generator_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function generator_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return generator_arrayLikeToArray(arr); }
function generator_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function generator_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function generator_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? generator_ownKeys(Object(source), !0).forEach(function (key) { generator_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : generator_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function generator_defineProperty(obj, key, value) { key = generator_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function generator_toPropertyKey(arg) { var key = generator_toPrimitive(arg, "string"); return generator_typeof(key) === "symbol" ? key : String(key); }
function generator_toPrimitive(input, hint) { if (generator_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (generator_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* eslint-disable no-new-func */







//import PropTypes from 'prop-types';



var DEBUG_RENDER = true;
var enrichWithLabels = function enrichWithLabels(validationErrors, fields) {
  var result = generator_objectSpread({}, validationErrors);
  var collectLabels = reduceFields(fields, function (field, accumulator) {
    return field.label ? generator_objectSpread(generator_objectSpread({}, accumulator), {}, generator_defineProperty({}, field.name, field.label)) : accumulator;
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
    if (isString_default()(validation.message)) {
      errorMessage = validation.message;
    } else if (isI18n(validation.message)) {
      var _i18n;
      errorMessage = (_i18n = i18n(validation.message, locale)) !== null && _i18n !== void 0 ? _i18n : 'Field is required';
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
    if (!isEmpty_default()(trim_default()(validation.validate))) {
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
          } else if (isString_default()(v)) {
            return v;
          } else if (isI18n(v)) {
            return i18n(v, locale);
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
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "lf-missing-component"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "icon"
  }, /*#__PURE__*/external_react_default().createElement(Warning, {
    color: "#ff6633",
    height: 16
  })), /*#__PURE__*/external_react_default().createElement("div", {
    className: "message"
  }, "The component ", /*#__PURE__*/external_react_default().createElement("span", {
    className: "tag-component"
  }, lfComponent), " (", /*#__PURE__*/external_react_default().createElement("em", null, "\"", label, "\""), ") is not available for this framework (", /*#__PURE__*/external_react_default().createElement("b", null, lfFramework), ")"));
};
var collectTransformers = function collectTransformers(form, onJavascriptError) {
  var fieldList = reduceFields(form.fields, function (field, accumulator) {
    if (field.component !== 'group' && field.component !== 'two-columns' && field.component !== 'three-columns') {
      return [].concat(generator_toConsumableArray(accumulator), [field.name]);
    }
    return accumulator;
  }, []);
  var mainTransformer;
  try {
    mainTransformer = !isEmpty_default()(form.transformer) ? makeTransformer(form.transformer, fieldList) : null;
  } catch (e) {
    var error = new Error('Error compiling main transformer: ' + e.message, {
      cause: e
    });
    error.sourceCode = form.transformer;
    console.log('salvo il code', error.sourceCode);
    error.errorType = 'compile';
    onJavascriptError(error);
  }
  var collected = reduceFields(form.fields, function (field, acc) {
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
      if (transformer != null) {
        return [].concat(generator_toConsumableArray(acc), [transformer]);
      }
    }
    return acc;
  }, []);
  return mainTransformer != null ? [mainTransformer].concat(generator_toConsumableArray(collected || [])) : collected;
};
var makeTransformer = function makeTransformer(str, fieldList) {
  if (isEmpty_default()(str)) {
    return null;
  }
  try {
    var spreadVars = '';
    if (!isEmpty_default()(fieldList)) {
      spreadVars = 'const { ' + fieldList.join(', ') + ' } = values;\n';
    }
    return new Function('api', "const { setValue, disable, enable, values, show, hide, css, element, style } = api;\n" + spreadVars + str + '\nreturn api.fields();' // leave /n or a comment can void anything
    );
  } catch (e) {
    console.error("LetsForm] Invalid JavaScript code for rules", e);
    console.error("LetsForm] Transformer: ", str);
    throw e;
  }
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
      debug = _ref3.debug,
      disabled = _ref3.disabled,
      readOnly = _ref3.readOnly,
      plaintext = _ref3.plaintext,
      errors = _ref3.errors,
      showErrors = _ref3.showErrors,
      _ref3$level = _ref3.level,
      level = _ref3$level === void 0 ? 1 : _ref3$level,
      locale = _ref3.locale,
      onJavascriptError = _ref3.onJavascriptError;
    var renderedFields = (fields || []).filter(function (field) {
      return Wrapper || field.hidden !== true;
    }).map(function (field, index) {
      var Component;
      if (Fields[field.component] && Fields[field.component][framework]) {
        Component = Fields[field.component][framework];
      } else if (Fields[field.component] && Fields[field.component]['*']) {
        Component = Fields[field.component]['*'];
      } else {
        Component = MissingComponent;
      }
      // remove mandatory fields and platform specific fields
      var additionalFields = omit_default()(field, ['id', 'name', 'label', 'hint', 'disabled', 'readOnly', 'plaintext', 'size', 'placeholder', 'component'].concat(generator_toConsumableArray(FRAMEWORKS)));

      // special case of group
      if (field.component === 'group') {
        var component = /*#__PURE__*/external_react_default().createElement(Component, _extends({
          key: field.name,
          lfComponent: field.component,
          lfFramework: framework,
          lfLocale: locale,
          name: field.name,
          label: field.label,
          hint: field.hint,
          disabled: field.disabled
        }, additionalFields), /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, renderFields({
          Wrapper: Wrapper,
          GroupWrapper: GroupWrapper,
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
          onJavascriptError: onJavascriptError
        }), BottomView && /*#__PURE__*/external_react_default().createElement(BottomView, {
          key: "bottom_view_".concat(field.name),
          field: field,
          target: "fields"
        })));
        return GroupWrapper ? /*#__PURE__*/external_react_default().createElement(GroupWrapper, {
          key: "wrapper_".concat(field.name),
          field: field,
          level: level,
          index: index
        }, component) : component;
      } else if (field.component === 'two-columns') {
        var _component = /*#__PURE__*/external_react_default().createElement(Component, _extends({
          key: field.name,
          lfComponent: field.component,
          lfFramework: framework,
          lfLocale: locale,
          name: field.name
        }, additionalFields), function (column) {
          if (column === 'left') {
            return /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, renderFields({
              Wrapper: Wrapper,
              GroupWrapper: GroupWrapper,
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
              onJavascriptError: onJavascriptError
            }), BottomView && /*#__PURE__*/external_react_default().createElement(BottomView, {
              key: "bottom_view_".concat(field.name),
              field: field,
              target: "leftFields"
            }));
          } else if (column === 'right') {
            return /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, renderFields({
              Wrapper: Wrapper,
              GroupWrapper: GroupWrapper,
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
              onJavascriptError: onJavascriptError
            }), BottomView && /*#__PURE__*/external_react_default().createElement(BottomView, {
              key: "bottom_view_".concat(field.name),
              field: field,
              target: "rightFields"
            }));
          }
        });
        return GroupWrapper ? /*#__PURE__*/external_react_default().createElement(GroupWrapper, {
          key: "wrapper_".concat(field.name),
          level: level,
          field: field,
          index: index
        }, _component) : _component;
      } else if (field.component === 'three-columns') {
        var _component2 = /*#__PURE__*/external_react_default().createElement(Component, _extends({
          key: "three-columns-".concat(field.name),
          name: field.name,
          lfComponent: field.component,
          lfFramework: framework,
          lfLocale: locale
        }, additionalFields), function (column) {
          if (column === 'left') {
            return /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, renderFields({
              Wrapper: Wrapper,
              GroupWrapper: GroupWrapper,
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
              onJavascriptError: onJavascriptError
            }), BottomView && /*#__PURE__*/external_react_default().createElement(BottomView, {
              key: "bottom_view_".concat(field.name),
              field: field,
              target: "leftFields"
            }));
          } else if (column === 'center') {
            return /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, renderFields({
              Wrapper: Wrapper,
              GroupWrapper: GroupWrapper,
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
              onJavascriptError: onJavascriptError
            }), BottomView && /*#__PURE__*/external_react_default().createElement(BottomView, {
              key: "bottom_view_".concat(field.name),
              field: field,
              target: "centerFields"
            }));
          } else if (column === 'right') {
            return /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, renderFields({
              Wrapper: Wrapper,
              GroupWrapper: GroupWrapper,
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
              onJavascriptError: onJavascriptError
            }), BottomView && /*#__PURE__*/external_react_default().createElement(BottomView, {
              key: "bottom_view_".concat(field.name),
              field: field,
              target: "rightFields"
            }));
          }
        });
        return GroupWrapper ? /*#__PURE__*/external_react_default().createElement(GroupWrapper, {
          key: "wrapper_".concat(field.name),
          field: field,
          level: level,
          index: index
        }, _component2) : _component2;
      }

      // generate the validation rule, takes into account react-hook-form
      // validation format and i18n strings
      var rules = translateValidation(generator_objectSpread({
        required: field.required
      }, field.validation), locale, onJavascriptError);
      console.log(" --rules ".concat(field.name), rules);
      return /*#__PURE__*/external_react_default().createElement(Controller, {
        key: "field_".concat(field.name),
        name: field.name,
        rules: rules,
        control: control,
        render: function render(_ref4) {
          var fieldInfo = _ref4.field;
          var component = /*#__PURE__*/external_react_default().createElement(Component
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
            plaintex: plaintext || field.plaintext,
            size: field.size,
            placeholder: field.placeholder,
            error: errors && errors[field.name] ? showErrors === 'inline' ? errorToString(errors[field.name]) : true : undefined
          }, additionalFields, field[framework], {
            onChange: function onChange(value, opts) {
              // TODO use callback
              fieldInfo.onChange(value);
              _onChange(generator_objectSpread(generator_objectSpread({}, getValues()), {}, generator_defineProperty({}, field.name, value)), opts);
            }
          }));
          return Wrapper ? /*#__PURE__*/external_react_default().createElement(Wrapper, {
            key: "wrapper_".concat(field.name),
            field: field,
            level: level,
            index: index
          }, component) : component;
        }
      });
    });
    return renderedFields;
  };
  var FormGenerator = /*#__PURE__*/external_react_default().memo(function (_ref5) {
    var _form$name;
    var framework = _ref5.framework,
      form = _ref5.form,
      _ref5$onChange = _ref5.onChange,
      onChange = _ref5$onChange === void 0 ? function () {} : _ref5$onChange,
      _ref5$onSubmit = _ref5.onSubmit,
      onSubmit = _ref5$onSubmit === void 0 ? function () {} : _ref5$onSubmit,
      _ref5$onReset = _ref5.onReset,
      onReset = _ref5$onReset === void 0 ? function () {} : _ref5$onReset,
      _ref5$onError = _ref5.onError,
      onError = _ref5$onError === void 0 ? function () {} : _ref5$onError,
      _ref5$onJavascriptErr = _ref5.onJavascriptError,
      onJavascriptError = _ref5$onJavascriptErr === void 0 ? function () {} : _ref5$onJavascriptErr,
      locale = _ref5.locale,
      wrapper = _ref5.wrapper,
      groupWrapper = _ref5.groupWrapper,
      bottomView = _ref5.bottomView,
      _ref5$defaultValues = _ref5.defaultValues,
      defaultValues = _ref5$defaultValues === void 0 ? {} : _ref5$defaultValues,
      _ref5$onlyFields = _ref5.onlyFields,
      onlyFields = _ref5$onlyFields === void 0 ? false : _ref5$onlyFields,
      _ref5$debug = _ref5.debug,
      debug = _ref5$debug === void 0 ? false : _ref5$debug,
      _ref5$disabled = _ref5.disabled,
      disabled = _ref5$disabled === void 0 ? false : _ref5$disabled,
      _ref5$readOnly = _ref5.readOnly,
      readOnly = _ref5$readOnly === void 0 ? false : _ref5$readOnly,
      _ref5$plaintext = _ref5.plaintext,
      plaintext = _ref5$plaintext === void 0 ? false : _ref5$plaintext,
      _ref5$hideToolbar = _ref5.hideToolbar,
      hideToolbar = _ref5$hideToolbar === void 0 ? false : _ref5$hideToolbar,
      children = _ref5.children,
      className = _ref5.className;
    if (debug) {
      console.log("[LetsForm] Render form (".concat(form.name, ")"));
    }
    var showErrors = form.showErrors;
    var _useState = (0,external_react_.useState)((_form$name = form.name) !== null && _form$name !== void 0 ? _form$name : uniqueId_default()('form_')),
      _useState2 = _slicedToArray(_useState, 2),
      formName = _useState2[0],
      setFormName = _useState2[1];
    var _useState3 = (0,external_react_.useState)(collectTransformers(form, onJavascriptError)),
      _useState4 = _slicedToArray(_useState3, 2),
      transformers = _useState4[0],
      setTransformers = _useState4[1];
    var _useForm = useForm({
        defaultValues: defaultValues,
        mode: form.validationMode
      }),
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.formState.errors,
      reset = _useForm.reset,
      control = _useForm.control,
      getValues = _useForm.getValues;
    var _useState5 = (0,external_react_.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      validationErrors = _useState6[0],
      setValidationErrors = _useState6[1];
    // store form fields, apply immediately transformers (collected from all fields)
    var _useState7 = (0,external_react_.useState)(applyTransformers(formName, framework, form.fields, transformers, defaultValues, onJavascriptError)),
      _useState8 = _slicedToArray(_useState7, 2),
      formFields = _useState8[0],
      setFormFields = _useState8[1];

    // update internal state if form changes
    (0,external_react_.useEffect)(function () {
      var _form$name2;
      var newTransformers = collectTransformers(form, onJavascriptError);
      var newFormFields = applyTransformers(formName, framework, form.fields, newTransformers, defaultValues, onJavascriptError);
      setFormFields(newFormFields);
      setFormName((_form$name2 = form.name) !== null && _form$name2 !== void 0 ? _form$name2 : uniqueId_default()('form_'));
      setTransformers(newTransformers);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [form, framework] // don't put defaultValues here
    );

    var onHandleSubmit = (0,external_react_.useCallback)(function (data) {
      setValidationErrors(null);
      onSubmit(data);
    }, [onSubmit]);
    var onHandleError = (0,external_react_.useCallback)(function (data) {
      setValidationErrors(data);
      onError(data);
    }, [onError]);
    var handleReset = (0,external_react_.useCallback)(function () {
      setValidationErrors(null);
      reset(defaultValues);
    }, [defaultValues, reset]);
    var handleChange = (0,external_react_.useCallback)(function (values) {
      var newFormFields = applyTransformers(formName, framework, formFields, transformers, values, onJavascriptError);
      if (newFormFields !== formFields) {
        setFormFields(newFormFields);
      }
      onChange(values);
    }, [onChange, formFields, formName, transformers, framework, onJavascriptError]);
    if (debug) {
      console.log('[LetsForm] Validation', errors);
    }
    var Form = Forms[framework];
    var Wrapper = wrapper;
    var GroupWrapper = groupWrapper;
    var BottomView = bottomView;
    return /*#__PURE__*/external_react_default().createElement(form_context.Provider, {
      value: {
        locales: form.locales,
        locale: locale
        // ..more
      }
    }, /*#__PURE__*/external_react_default().createElement("div", {
      className: classnames_default()('lf-lets-form', className)
    }, validationErrors && showErrors === 'groupedTop' && /*#__PURE__*/external_react_default().createElement(ValidationErrors, {
      className: "top",
      locale: locale,
      errors: enrichWithLabels(validationErrors, formFields)
    }), /*#__PURE__*/external_react_default().createElement(Form, _extends({
      onSubmit: handleSubmit(onHandleSubmit, onHandleError),
      name: formName,
      defaultValues: defaultValues,
      onlyFields: onlyFields,
      hideToolbar: hideToolbar,
      onReset: handleReset,
      disabled: disabled,
      readOnly: readOnly,
      plaintext: plaintext
    }, omit_default()(form, 'id', 'fields', 'version')), renderFields({
      Wrapper: Wrapper,
      GroupWrapper: GroupWrapper,
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
      onJavascriptError: onJavascriptError
    }), children, validationErrors && (showErrors === 'groupedBottom' || isEmpty_default()(showErrors)) && /*#__PURE__*/external_react_default().createElement(ValidationErrors, {
      className: "bottom",
      locale: locale,
      errors: enrichWithLabels(validationErrors, formFields)
    }))));
  }, function (prevProps, nextProps) {
    if (DEBUG_RENDER) {
      console.log("[LetsForm] Form generator ".concat(nextProps.form.name ? '(' + nextProps.form.name + ")" : '', " re-render: ") + ' framework=' + (prevProps.framework === nextProps.framework) + ' onChange=' + (prevProps.onChange === nextProps.onChange) + ' wrapper=' + (prevProps.wrapper === nextProps.wrapper) + ' form=' + (prevProps.form === nextProps.form) + ' locale=' + (prevProps.locale === nextProps.locale));
    }
    var isEqual = prevProps.framework === nextProps.framework && prevProps.onChange === nextProps.onChange && prevProps.wrapper === nextProps.wrapper && prevProps.form === nextProps.form && prevProps.locale === nextProps.locale;
    console.log('Is re-rendering?', !isEqual);
    return isEqual;
  });
  FormGenerator.displayName = 'FormGenerator';
  return FormGenerator;
};

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

const FormContext_FormContext = /*#__PURE__*/external_react_.createContext({});
/* harmony default export */ const esm_FormContext = (FormContext_FormContext);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./react-bootstrap/form/index.scss
var cjs_js_react_bootstrap_form = __webpack_require__(8484);
;// CONCATENATED MODULE: ./react-bootstrap/form/index.scss

      
      
      
      
      
      
      
      
      

var form_options = {};

form_options.styleTagTransform = (styleTagTransform_default());
form_options.setAttributes = (setAttributesWithoutAttributes_default());

      form_options.insert = insertBySelector_default().bind(null, "head");
    
form_options.domAPI = (styleDomAPI_default());
form_options.insertStyleElement = (insertStyleElement_default());

var form_update = injectStylesIntoStyleTag_default()(cjs_js_react_bootstrap_form/* default */.Z, form_options);




       /* harmony default export */ const react_bootstrap_form = (cjs_js_react_bootstrap_form/* default */.Z && cjs_js_react_bootstrap_form/* default.locals */.Z.locals ? cjs_js_react_bootstrap_form/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./react-bootstrap/form/index.js




var FormBootstrap = function FormBootstrap(_ref) {
  var name = _ref.name,
    children = _ref.children,
    onSubmit = _ref.onSubmit,
    onReset = _ref.onReset,
    _ref$hideToolbar = _ref.hideToolbar,
    hideToolbar = _ref$hideToolbar === void 0 ? false : _ref$hideToolbar;
  return /*#__PURE__*/external_react_default().createElement(esm_Form, {
    className: "lf-form lf-form-react-bootstrap",
    "data-lf-form-name": name,
    onSubmit: onSubmit
  }, /*#__PURE__*/external_react_default().createElement("div", null, children), !hideToolbar && /*#__PURE__*/external_react_default().createElement("div", {
    className: "lf-toolbar"
  }, /*#__PURE__*/external_react_default().createElement(react_bootstrap_esm_Button, {
    variant: "primary",
    onClick: onSubmit
  }, "Submit"), ' ', /*#__PURE__*/external_react_default().createElement(react_bootstrap_esm_Button, {
    variant: "secondary",
    onClick: onReset
  }, "Cancel")));
};

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
// EXTERNAL MODULE: ./node_modules/micro-down/dist/index.js
var dist = __webpack_require__(7305);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./common/placeholder/placeholder.scss
var placeholder = __webpack_require__(860);
;// CONCATENATED MODULE: ./common/placeholder/placeholder.scss

      
      
      
      
      
      
      
      
      

var placeholder_options = {};

placeholder_options.styleTagTransform = (styleTagTransform_default());
placeholder_options.setAttributes = (setAttributesWithoutAttributes_default());

      placeholder_options.insert = insertBySelector_default().bind(null, "head");
    
placeholder_options.domAPI = (styleDomAPI_default());
placeholder_options.insertStyleElement = (insertStyleElement_default());

var placeholder_update = injectStylesIntoStyleTag_default()(placeholder/* default */.Z, placeholder_options);




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
        __html: dist_default().parse(text)
      }
    });
  } else {
    return /*#__PURE__*/external_react_default().createElement("div", null);
  }
};

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./common/three-columns/three-columns.scss
var three_columns = __webpack_require__(1861);
;// CONCATENATED MODULE: ./common/three-columns/three-columns.scss

      
      
      
      
      
      
      
      
      

var three_columns_options = {};

three_columns_options.styleTagTransform = (styleTagTransform_default());
three_columns_options.setAttributes = (setAttributesWithoutAttributes_default());

      three_columns_options.insert = insertBySelector_default().bind(null, "head");
    
three_columns_options.domAPI = (styleDomAPI_default());
three_columns_options.insertStyleElement = (insertStyleElement_default());

var three_columns_update = injectStylesIntoStyleTag_default()(three_columns/* default */.Z, three_columns_options);




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

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./common/two-columns/two-columns.scss
var two_columns = __webpack_require__(5318);
;// CONCATENATED MODULE: ./common/two-columns/two-columns.scss

      
      
      
      
      
      
      
      
      

var two_columns_options = {};

two_columns_options.styleTagTransform = (styleTagTransform_default());
two_columns_options.setAttributes = (setAttributesWithoutAttributes_default());

      two_columns_options.insert = insertBySelector_default().bind(null, "head");
    
two_columns_options.domAPI = (styleDomAPI_default());
two_columns_options.insertStyleElement = (insertStyleElement_default());

var two_columns_update = injectStylesIntoStyleTag_default()(two_columns/* default */.Z, two_columns_options);




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

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./common/group/group.scss
var group = __webpack_require__(88);
;// CONCATENATED MODULE: ./common/group/group.scss

      
      
      
      
      
      
      
      
      

var group_options = {};

group_options.styleTagTransform = (styleTagTransform_default());
group_options.setAttributes = (setAttributesWithoutAttributes_default());

      group_options.insert = insertBySelector_default().bind(null, "head");
    
group_options.domAPI = (styleDomAPI_default());
group_options.insertStyleElement = (insertStyleElement_default());

var group_update = injectStylesIntoStyleTag_default()(group/* default */.Z, group_options);




       /* harmony default export */ const group_group = (group/* default */.Z && group/* default.locals */.Z.locals ? group/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./common/group/index.js
function group_slicedToArray(arr, i) { return group_arrayWithHoles(arr) || group_iterableToArrayLimit(arr, i) || group_unsupportedIterableToArray(arr, i) || group_nonIterableRest(); }
function group_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function group_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return group_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return group_arrayLikeToArray(o, minLen); }
function group_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function group_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function group_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */





var Group = I18N(function (_ref) {
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
    _useState2 = group_slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var handleClick = (0,external_react_.useCallback)(function (event) {
    event.preventDefault();
    setIsOpen(!isOpen);
  }, [isOpen]);
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
  }, isOpen ? /*#__PURE__*/external_react_default().createElement(ChevronUp, {
    color: "#3498ff"
  }) : /*#__PURE__*/external_react_default().createElement(ChevronDown, {
    color: "#3498ff"
  })))), (isOpen || !collapsible) && /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, children));
}, ['label']);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./common/placeholder-image/placeholder-image.scss
var placeholder_image = __webpack_require__(2558);
;// CONCATENATED MODULE: ./common/placeholder-image/placeholder-image.scss

      
      
      
      
      
      
      
      
      

var placeholder_image_options = {};

placeholder_image_options.styleTagTransform = (styleTagTransform_default());
placeholder_image_options.setAttributes = (setAttributesWithoutAttributes_default());

      placeholder_image_options.insert = insertBySelector_default().bind(null, "head");
    
placeholder_image_options.domAPI = (styleDomAPI_default());
placeholder_image_options.insertStyleElement = (insertStyleElement_default());

var placeholder_image_update = injectStylesIntoStyleTag_default()(placeholder_image/* default */.Z, placeholder_image_options);




       /* harmony default export */ const placeholder_image_placeholder_image = (placeholder_image/* default */.Z && placeholder_image/* default.locals */.Z.locals ? placeholder_image/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./common/placeholder-image/index.js



// add maxHeight
// generalize for all components
// cleanup
// spostare in layout

var PlaceholderImage = function PlaceholderImage(_ref) {
  var url = _ref.url,
    label = _ref.label,
    name = _ref.name,
    maxWidth = _ref.maxWidth,
    minHeight = _ref.minHeight,
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
      minHeight: minHeight ? minHeight : undefined,
      textAlign: align ? align : undefined
    }
  }));
};

;// CONCATENATED MODULE: ./common/text-or-icon/index.js


var TextOrIcon = function TextOrIcon(str) {
  if (isUrl(str)) {
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

;// CONCATENATED MODULE: ./common/react-view/index.js
var react_view_excluded = ["name", "view"];
function react_view_extends() { react_view_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return react_view_extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = react_view_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function react_view_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ReactView = function ReactView(_ref) {
  var name = _ref.name,
    view = _ref.view,
    rest = _objectWithoutProperties(_ref, react_view_excluded);
  var View = view;
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "lf-control-react-view",
    "data-lf-field-name": name
  }, View && /*#__PURE__*/external_react_default().createElement(View, react_view_extends({
    name: name
  }, rest)));
};

;// CONCATENATED MODULE: ./common/index.js








;// CONCATENATED MODULE: ./react-bootstrap/input-text/index.js


var input_text_excluded = ["name", "label", "hint", "value", "onChange", "onBlur", "size", "inputType", "inputMode", "autocomplete", "disabled", "readOnly", "plaintext", "error", "required", "prefix", "postfix", "placeholder", "fullWidth", "width", "floatingLabel"];
function input_text_extends() { input_text_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return input_text_extends.apply(this, arguments); }
function input_text_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = input_text_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function input_text_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








// DOC: https://react-bootstrap.github.io/forms/form-control/#form-control-props

var TextInput = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    size = _ref.size,
    inputType = _ref.inputType,
    inputMode = _ref.inputMode,
    autocomplete = _ref.autocomplete,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    _ref$plaintext = _ref.plaintext,
    plaintext = _ref$plaintext === void 0 ? false : _ref$plaintext,
    error = _ref.error,
    required = _ref.required,
    prefix = _ref.prefix,
    postfix = _ref.postfix,
    placeholder = _ref.placeholder,
    fullWidth = _ref.fullWidth,
    width = _ref.width,
    _ref$floatingLabel = _ref.floatingLabel,
    floatingLabel = _ref$floatingLabel === void 0 ? false : _ref$floatingLabel,
    rest = input_text_objectWithoutProperties(_ref, input_text_excluded);
  var handleChange = (0,external_react_.useCallback)(function (e) {
    onChange(e.target.value);
  }, [onChange]);
  var inner = /*#__PURE__*/external_react_default().createElement(esm_Form.Control, input_text_extends({
    name: name,
    type: inputType !== null && inputType !== void 0 ? inputType : 'text',
    inputmode: inputMode,
    autocomplete: autocomplete,
    value: value,
    plaintext: plaintext,
    onChange: handleChange,
    size: size,
    placeholder: placeholder,
    onBlur: onBlur,
    disabled: disabled,
    readOnly: readOnly,
    isInvalid: error != null,
    style: makeWidthStyle(fullWidth, width)
  }, passRest(rest)));
  var innerGroup = inner;
  var needsGroup = postfix || prefix;
  if (needsGroup) {
    innerGroup = /*#__PURE__*/external_react_default().createElement(esm_InputGroup, null, prefix && /*#__PURE__*/external_react_default().createElement(esm_InputGroup.Text, null, TextOrIcon(prefix)), inner, postfix && /*#__PURE__*/external_react_default().createElement(esm_InputGroup.Text, null, TextOrIcon(postfix)));
  }
  var useFloatingLabels = floatingLabel && !needsGroup;
  return /*#__PURE__*/external_react_default().createElement(esm_Form.Group, {
    className: "lf-control-input-text mb-3",
    "data-lf-field-name": name
  }, useFloatingLabels && /*#__PURE__*/external_react_default().createElement(esm_FloatingLabel, {
    label: label,
    className: "mb-3"
  }, innerGroup), !useFloatingLabels && /*#__PURE__*/external_react_default().createElement(esm_Form.Label, null, label, required && /*#__PURE__*/external_react_default().createElement(RequiredIcon, null)), !useFloatingLabels && innerGroup, hint && !error && /*#__PURE__*/external_react_default().createElement(esm_Form.Text, null, hint), isString_default()(error) && !isEmpty_default()(error) && /*#__PURE__*/external_react_default().createElement(esm_Form.Control.Feedback, {
    type: "invalid"
  }, error));
}, ['label', 'hint', 'placeholder']);

;// CONCATENATED MODULE: ./react-bootstrap/select/index.js
function select_typeof(obj) { "@babel/helpers - typeof"; return select_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, select_typeof(obj); }


var select_excluded = ["name", "label", "hint", "value", "size", "placeholder", "options", "disabled", "readOnly", "required", "error", "onChange", "onBlur", "plaintext", "floatingLabel", "filterKey", "filterValue"];
function select_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function select_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? select_ownKeys(Object(source), !0).forEach(function (key) { select_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : select_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function select_defineProperty(obj, key, value) { key = select_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function select_toPropertyKey(arg) { var key = select_toPrimitive(arg, "string"); return select_typeof(key) === "symbol" ? key : String(key); }
function select_toPrimitive(input, hint) { if (select_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (select_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function select_extends() { select_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return select_extends.apply(this, arguments); }
function select_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = select_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function select_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var Select = I18N(function (_ref) {
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
    plaintext = _ref.plaintext,
    _ref$floatingLabel = _ref.floatingLabel,
    floatingLabel = _ref$floatingLabel === void 0 ? false : _ref$floatingLabel,
    filterKey = _ref.filterKey,
    filterValue = _ref.filterValue,
    rest = select_objectWithoutProperties(_ref, select_excluded);
  var handleChange = (0,external_react_.useCallback)(function (e) {
    onChange(e.target.value !== placeholder ? e.target.value : undefined);
  }, [onChange, placeholder]);
  var filteredOptions = filterOptions(options, filterValue, filterKey);
  var inner = /*#__PURE__*/external_react_default().createElement(esm_Form.Select, select_extends({
    name: name,
    value: value,
    plaintext: plaintext,
    onChange: handleChange,
    size: size,
    placeholder: placeholder,
    onBlur: onBlur,
    disabled: disabled,
    readOnly: readOnly,
    isInvalid: error != null
  }, passRest(rest)), placeholder && /*#__PURE__*/external_react_default().createElement("option", null, placeholder), (filteredOptions !== null && filteredOptions !== void 0 ? filteredOptions : []).map(function (_ref2) {
    var value = _ref2.value,
      label = _ref2.label;
    return /*#__PURE__*/external_react_default().createElement("option", {
      value: value,
      key: value
    }, label);
  }));
  return /*#__PURE__*/external_react_default().createElement(esm_Form.Group, {
    className: "lf-control-input-text mb-3",
    "data-lf-field-name": name
  }, !floatingLabel && /*#__PURE__*/external_react_default().createElement(esm_Form.Label, null, label, required && /*#__PURE__*/external_react_default().createElement(RequiredIcon, null)), !floatingLabel && inner, floatingLabel && /*#__PURE__*/external_react_default().createElement(esm_FloatingLabel, {
    label: label
  }, inner), hint && !error && /*#__PURE__*/external_react_default().createElement(esm_Form.Text, null, hint), isString_default()(error) && !isEmpty_default()(error) && /*#__PURE__*/external_react_default().createElement(esm_Form.Control.Feedback, {
    type: "invalid"
  }, error));
}, ['label', 'hint', 'placeholder'], {
  options: function options(value, i18n) {
    return (value !== null && value !== void 0 ? value : []).map(function (value) {
      return select_objectSpread(select_objectSpread({}, value), {}, {
        label: i18n(value.label)
      });
    });
  }
});

;// CONCATENATED MODULE: ./react-bootstrap/checkbox/index.js


var checkbox_excluded = ["name", "label", "hint", "value", "placeholder", "plaintext", "tooltip", "disabled", "readOnly", "required", "error", "onChange", "onBlur", "appearance", "locale", "format"];
function checkbox_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = checkbox_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function checkbox_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Checkbox = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    placeholder = _ref.placeholder,
    plaintext = _ref.plaintext,
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
    className: "lf-control-checkbox mb-3",
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


var toggle_excluded = ["name", "label", "hint", "value", "placeholder", "plaintext", "tooltip", "disabled", "readOnly", "required", "error", "onChange", "onBlur", "appearance", "locale", "format"];
function toggle_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = toggle_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function toggle_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Toggle = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    placeholder = _ref.placeholder,
    plaintext = _ref.plaintext,
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
    className: "lf-control-checkbox mb-3",
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

;// CONCATENATED MODULE: ./react-bootstrap/checkbox-group/index.js
function checkbox_group_typeof(obj) { "@babel/helpers - typeof"; return checkbox_group_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, checkbox_group_typeof(obj); }



var checkbox_group_excluded = ["name", "label", "hint", "value", "plaintext", "disabled", "readOnly", "required", "inline", "reverse", "error", "onChange", "onBlur", "options"];
function checkbox_group_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function checkbox_group_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? checkbox_group_ownKeys(Object(source), !0).forEach(function (key) { checkbox_group_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : checkbox_group_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function checkbox_group_defineProperty(obj, key, value) { key = checkbox_group_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function checkbox_group_toPropertyKey(arg) { var key = checkbox_group_toPrimitive(arg, "string"); return checkbox_group_typeof(key) === "symbol" ? key : String(key); }
function checkbox_group_toPrimitive(input, hint) { if (checkbox_group_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (checkbox_group_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function checkbox_group_extends() { checkbox_group_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return checkbox_group_extends.apply(this, arguments); }
function checkbox_group_toConsumableArray(arr) { return checkbox_group_arrayWithoutHoles(arr) || checkbox_group_iterableToArray(arr) || checkbox_group_unsupportedIterableToArray(arr) || checkbox_group_nonIterableSpread(); }
function checkbox_group_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function checkbox_group_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function checkbox_group_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return checkbox_group_arrayLikeToArray(arr); }
function checkbox_group_slicedToArray(arr, i) { return checkbox_group_arrayWithHoles(arr) || checkbox_group_iterableToArrayLimit(arr, i) || checkbox_group_unsupportedIterableToArray(arr, i) || checkbox_group_nonIterableRest(); }
function checkbox_group_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function checkbox_group_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return checkbox_group_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return checkbox_group_arrayLikeToArray(o, minLen); }
function checkbox_group_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function checkbox_group_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function checkbox_group_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function checkbox_group_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = checkbox_group_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function checkbox_group_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var CheckboxGroupBootstrap = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    plaintext = _ref.plaintext,
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
    _useState2 = checkbox_group_slicedToArray(_useState, 2),
    values = _useState2[0],
    setValues = _useState2[1];
  var handleChange = (0,external_react_.useCallback)(function (e) {
    var newValues;
    if (values.includes(e.target.value)) {
      newValues = values.filter(function (value) {
        return value !== e.target.value;
      });
    } else {
      newValues = [].concat(checkbox_group_toConsumableArray(values), [e.target.value]);
    }
    setValues(newValues);
    onChange(newValues);
  }, [onChange, values]);
  return /*#__PURE__*/external_react_default().createElement(esm_Form.Group, {
    className: "lf-control-checkbox-group mb-3",
    "data-lf-field-name": name
  }, /*#__PURE__*/external_react_default().createElement(esm_Form.Label, null, label, required && /*#__PURE__*/external_react_default().createElement(RequiredIcon, null)), /*#__PURE__*/external_react_default().createElement("div", null, (options !== null && options !== void 0 ? options : []).map(function (_ref2, idx) {
    var value = _ref2.value,
      label = _ref2.label;
    return /*#__PURE__*/external_react_default().createElement(esm_Form.Check, {
      type: "checkbox",
      key: value,
      reverse: reverse,
      inline: inline
    }, /*#__PURE__*/external_react_default().createElement(esm_Form.Check.Input, checkbox_group_extends({
      disabled: disabled,
      value: value,
      name: name,
      isInvalid: error != null,
      checked: values.includes(value),
      onChange: handleChange
    }, omit_default()(rest, 'lfFramework', 'lfComponent'))), label && /*#__PURE__*/external_react_default().createElement(esm_Form.Check.Label, null, label), isString_default()(error) && !isEmpty_default()(error) && idx === options.length - 1 && /*#__PURE__*/external_react_default().createElement(esm_Form.Control.Feedback, {
      type: "invalid"
    }, error));
  })), hint && /*#__PURE__*/external_react_default().createElement(esm_Form.Text, null, hint), isString_default()(error) && !isEmpty_default()(error) && /*#__PURE__*/external_react_default().createElement(esm_Form.Control.Feedback, {
    type: "invalid"
  }, error));
}, ['label', 'hint'], {
  options: function options(value, i18n) {
    return (value !== null && value !== void 0 ? value : []).map(function (value) {
      return checkbox_group_objectSpread(checkbox_group_objectSpread({}, value), {}, {
        label: i18n(value.label)
      });
    });
  }
});

;// CONCATENATED MODULE: ./react-bootstrap/radio-group/index.js
function radio_group_typeof(obj) { "@babel/helpers - typeof"; return radio_group_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, radio_group_typeof(obj); }



var radio_group_excluded = ["name", "label", "hint", "value", "plaintext", "disabled", "readOnly", "required", "inline", "reverse", "error", "onChange", "onBlur", "options"];
function radio_group_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function radio_group_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? radio_group_ownKeys(Object(source), !0).forEach(function (key) { radio_group_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : radio_group_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function radio_group_defineProperty(obj, key, value) { key = radio_group_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function radio_group_toPropertyKey(arg) { var key = radio_group_toPrimitive(arg, "string"); return radio_group_typeof(key) === "symbol" ? key : String(key); }
function radio_group_toPrimitive(input, hint) { if (radio_group_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (radio_group_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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



var RadioGroupBootstrap = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    plaintext = _ref.plaintext,
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
    className: "lf-control-radio-group mb-3",
    "data-lf-field-name": name
  }, /*#__PURE__*/external_react_default().createElement(esm_Form.Label, null, label, required && /*#__PURE__*/external_react_default().createElement(RequiredIcon, null)), /*#__PURE__*/external_react_default().createElement("div", null, (options !== null && options !== void 0 ? options : []).map(function (_ref2, idx) {
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
      isInvalid: error != null,
      checked: values.includes(value),
      onChange: handleChange
    }, omit_default()(rest, 'lfFramework', 'lfComponent'))), label && /*#__PURE__*/external_react_default().createElement(esm_Form.Check.Label, null, label), isString_default()(error) && !isEmpty_default()(error) && idx === options.length - 1 && /*#__PURE__*/external_react_default().createElement(esm_Form.Control.Feedback, {
      type: "invalid"
    }, error));
  })), hint && /*#__PURE__*/external_react_default().createElement(esm_Form.Text, null, hint), isString_default()(error) && !isEmpty_default()(error) && /*#__PURE__*/external_react_default().createElement(esm_Form.Control.Feedback, {
    type: "invalid"
  }, error));
}, ['label', 'hint'], {
  options: function options(value, i18n) {
    return (value !== null && value !== void 0 ? value : []).map(function (value) {
      return radio_group_objectSpread(radio_group_objectSpread({}, value), {}, {
        label: i18n(value.label)
      });
    });
  }
});

;// CONCATENATED MODULE: ./react-bootstrap/placeholder/index.js




var PlaceholderBootstrap = I18N(function (_ref) {
  var label = _ref.label,
    hint = _ref.hint,
    text = _ref.text,
    name = _ref.name;
  return /*#__PURE__*/external_react_default().createElement(esm_Form.Group, {
    className: "lf-control-placeholder mb-3",
    "data-lf-field-name": name
  }, /*#__PURE__*/external_react_default().createElement(esm_Form.Label, null, label), /*#__PURE__*/external_react_default().createElement(Placeholder, {
    text: text
  }), hint && /*#__PURE__*/external_react_default().createElement(esm_Form.Text, null, hint));
}, ['label', 'hint', 'text']);

;// CONCATENATED MODULE: ./react-bootstrap/placeholder-image/index.js

// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(5760);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
;// CONCATENATED MODULE: ./react-bootstrap/date/index.js


function date_slicedToArray(arr, i) { return date_arrayWithHoles(arr) || date_iterableToArrayLimit(arr, i) || date_unsupportedIterableToArray(arr, i) || date_nonIterableRest(); }
function date_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function date_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return date_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return date_arrayLikeToArray(o, minLen); }
function date_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function date_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function date_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







// DOC: https://react-bootstrap.github.io/forms/form-control/#form-control-props

var date_Date = I18N(function (_ref) {
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
    _ref$plaintext = _ref.plaintext,
    plaintext = _ref$plaintext === void 0 ? false : _ref$plaintext,
    error = _ref.error,
    required = _ref.required,
    prefix = _ref.prefix,
    postfix = _ref.postfix,
    placeholder = _ref.placeholder,
    _ref$floatingLabel = _ref.floatingLabel,
    floatingLabel = _ref$floatingLabel === void 0 ? false : _ref$floatingLabel;
  var defaultDate = external_dayjs_default()(value);
  var _useState = (0,external_react_.useState)(defaultDate.isValid() ? defaultDate.format('YYYY-MM-DD') : null),
    _useState2 = date_slicedToArray(_useState, 2),
    currentDate = _useState2[0],
    setCurrentDate = _useState2[1];
  var handleChange = (0,external_react_.useCallback)(function (e) {
    setCurrentDate(e.target.value);
    if (e.target.value) {
      // set to mid day, otherwise at midnight, with positive GMT
      // a date x becomes x - 1 in GMT
      var d = external_dayjs_default()(e.target.value).hour(12);
      onChange(d.isValid() ? d.toDate() : undefined);
    } else {
      onChange(undefined);
    }
  }, [onChange]);
  var inner = /*#__PURE__*/external_react_default().createElement(esm_Form.Control, {
    type: "date",
    name: name,
    value: currentDate,
    plaintext: plaintext,
    onChange: handleChange,
    size: size,
    placeholder: placeholder,
    onBlur: onBlur,
    disabled: disabled,
    readOnly: readOnly,
    isInvalid: error != null
  });
  var innerGroup = inner;
  var needsGroup = postfix || prefix;
  if (needsGroup) {
    innerGroup = /*#__PURE__*/external_react_default().createElement(esm_InputGroup, null, prefix && /*#__PURE__*/external_react_default().createElement(esm_InputGroup.Text, null, prefix), inner, postfix && /*#__PURE__*/external_react_default().createElement(esm_InputGroup.Text, null, postfix));
  }
  var useFloatingLabels = floatingLabel && !needsGroup;
  return /*#__PURE__*/external_react_default().createElement(esm_Form.Group, {
    className: "lf-control-input-text mb-3",
    "data-lf-field-name": name
  }, useFloatingLabels && /*#__PURE__*/external_react_default().createElement(esm_FloatingLabel, {
    label: label,
    className: "mb-3"
  }, innerGroup), !useFloatingLabels && /*#__PURE__*/external_react_default().createElement(esm_Form.Label, null, label, required && /*#__PURE__*/external_react_default().createElement(RequiredIcon, null)), !useFloatingLabels && innerGroup, hint && !error && /*#__PURE__*/external_react_default().createElement(esm_Form.Text, null, hint), isString_default()(error) && !isEmpty_default()(error) && /*#__PURE__*/external_react_default().createElement(esm_Form.Control.Feedback, {
    type: "invalid"
  }, error));
}, ['label', 'hint', 'placeholder']);

;// CONCATENATED MODULE: ./react-bootstrap/textarea/index.js






// DOC: https://react-bootstrap.github.io/forms/form-control/#form-control-props

var Textarea = I18N(function (_ref) {
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
    _ref$plaintext = _ref.plaintext,
    plaintext = _ref$plaintext === void 0 ? false : _ref$plaintext,
    error = _ref.error,
    required = _ref.required,
    rows = _ref.rows,
    placeholder = _ref.placeholder;
  var handleChange = (0,external_react_.useCallback)(function (e) {
    onChange(e.target.value);
  }, [onChange]);
  return /*#__PURE__*/external_react_default().createElement(esm_Form.Group, {
    className: "lf-control-input-text mb-3",
    "data-lf-field-name": name
  }, /*#__PURE__*/external_react_default().createElement(esm_Form.Label, null, label, required && /*#__PURE__*/external_react_default().createElement(RequiredIcon, null)), /*#__PURE__*/external_react_default().createElement(esm_Form.Control, {
    name: name,
    as: "textarea",
    rows: rows,
    value: value,
    plaintext: plaintext,
    onChange: handleChange,
    size: size,
    placeholder: placeholder,
    onBlur: onBlur,
    disabled: disabled,
    readOnly: readOnly,
    isInvalid: error != null
  }), hint && !error && /*#__PURE__*/external_react_default().createElement(esm_Form.Text, null, hint), isString_default()(error) && !isEmpty_default()(error) && /*#__PURE__*/external_react_default().createElement(esm_Form.Control.Feedback, {
    type: "invalid"
  }, error));
}, ['label', 'hint', 'placeholder']);

;// CONCATENATED MODULE: ./react-bootstrap/slider/index.js






// DOC: https://react-bootstrap.github.io/forms/form-control/#form-control-props

var Slider = I18N(function (_ref) {
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
    className: "lf-control-input-text mb-3",
    "data-lf-field-name": name
  }, /*#__PURE__*/external_react_default().createElement(esm_Form.Label, null, label, required && /*#__PURE__*/external_react_default().createElement(RequiredIcon, null)), /*#__PURE__*/external_react_default().createElement(esm_Form.Range, {
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

;// CONCATENATED MODULE: ./react-bootstrap/three-columns/index.js

;// CONCATENATED MODULE: ./react-bootstrap/two-columns/index.js

;// CONCATENATED MODULE: ./react-bootstrap/group/index.js

;// CONCATENATED MODULE: ./react-bootstrap/divider/index.js

;// CONCATENATED MODULE: ./react-bootstrap/react-view/index.js

;// CONCATENATED MODULE: ./react-bootstrap/index.js
var react_bootstrap_excluded = ["framework", "children"];
function react_bootstrap_extends() { react_bootstrap_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return react_bootstrap_extends.apply(this, arguments); }
function react_bootstrap_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = react_bootstrap_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function react_bootstrap_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



















var Fields = {
  'text-input': {
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
    'react-bootstrap': PlaceholderImage
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
    'react-bootstrap': ThreeColumns
  },
  'two-columns': {
    'react-bootstrap': TwoColumns
  },
  'group': {
    'react-bootstrap': Group
  },
  'radio-group': {
    'react-bootstrap': RadioGroupBootstrap
  },
  'divider': {
    'react-bootstrap': Divider
  },
  'react-view': {
    'react-bootstrap': ReactView
  }
};
var Forms = {
  'react-bootstrap': FormBootstrap
};
var FormGenerator = GenerateGenerator({
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