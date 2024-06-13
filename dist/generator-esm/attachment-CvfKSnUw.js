/* LetsForm Generator v0.8.2 - ESM */
import React from 'react';
import { s as styleInject } from './index-cqv1y9Al.js';

function formatBytes(bytes) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  if (!+bytes) return '0 Bytes';
  var k = 1024;
  var dm = decimals < 0 ? 0 : decimals;
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  var i = Math.floor(Math.log(bytes) / Math.log(k));
  return "".concat(parseFloat((bytes / Math.pow(k, i)).toFixed(dm)), " ").concat(sizes[i]);
}

var css_248z = ".lf-left-dots-with-fixed-right {\n  display: flex;\n  width: inherit;\n  overflow: hidden;\n}\n.lf-left-dots-with-fixed-right .lf-left-dots {\n  flex: 1 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 100%;\n}\n.lf-left-dots-with-fixed-right .lf-right-fixed {\n  flex: 0 0;\n  white-space: nowrap;\n}";
styleInject(css_248z);

/**
 * LetfDotsWithFixedRight
 * Layout component to have a fixed view on the right and a expandable view on the left
 * which takes all remaining space and show ellipsis if the text overflows
 * @param {*} param0
 * @returns
 */
var LetfDotsWithFixedRight = function LetfDotsWithFixedRight(_ref) {
  var left = _ref.left,
    right = _ref.right;
  return /*#__PURE__*/React.createElement("div", {
    className: "lf-left-dots-with-fixed-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lf-left-dots"
  }, left), /*#__PURE__*/React.createElement("div", {
    className: "lf-right-fixed"
  }, right));
};

var IconAttachment = function IconAttachment(_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === void 0 ? 24 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 24 : _ref$height,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#000000' : _ref$color;
  return /*#__PURE__*/React.createElement("svg", {
    width: "".concat(width, "px"),
    height: "".concat(height, "px"),
    viewBox: "-8 0 32 32",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Page-1",
    stroke: "none",
    "stroke-width": "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Icon-Set",
    transform: "translate(-212.000000, -151.000000)",
    fill: color
  }, /*#__PURE__*/React.createElement("path", {
    d: "M226,155 L226,175 C226,178.313 223.313,181 220,181 C216.687,181 214,178.313 214,175 L214,157 C214,154.791 215.791,153 218,153 C220.209,153 222,154.791 222,157 L222,175 C222,176.104 221.104,177 220,177 C218.896,177 218,176.104 218,175 L218,159 L216,159 L216,175 C216,177.209 217.791,179 220,179 C222.209,179 224,177.209 224,175 L224,157 C224,153.687 221.313,151 218,151 C214.687,151 212,153.687 212,157 L212,176 C212.493,179.945 215.921,183 220,183 C224.079,183 227.507,179.945 228,176 L228,155 L226,155",
    id: "attachment"
  }))));
};

export { IconAttachment as I, LetfDotsWithFixedRight as L, formatBytes as f };
