/* LetsForm react-material-ui v0.7.17 - ESM */
import React from 'react';
import { B as styleInject } from './index-Bn6T5Ftl.js';

var Asterisk = function Asterisk(_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === void 0 ? 24 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 24 : _ref$height,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#000000' : _ref$color,
    style = _ref.style;
  return /*#__PURE__*/React.createElement("svg", {
    width: "".concat(width, "px"),
    height: "".concat(height, "px"),
    style: style,
    version: "1.1",
    id: "_x32_",
    className: "lf-icon-asterisk",
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
    style: {
      fill: color
    },
    className: "st0",
    points: "501.539,169.221 453.886,86.7 303.669,173.449 303.669,0 208.365,0 208.365,173.479 58.114,86.73\r 10.461,169.261 160.674,255.99 10.501,342.71 58.154,425.231 208.365,338.482 208.365,512 303.669,512 303.669,338.542\r 453.846,425.271 501.499,342.74 351.267,255.99 \t"
  })));
};

var RequiredIcon = function RequiredIcon() {
  return /*#__PURE__*/React.createElement(Asterisk, {
    color: "#ff6633",
    width: 12,
    height: 12,
    style: {
      marginLeft: '3px'
    }
  });
};

var css_248z = ".lf-react-material-ui-label {\n  color: rgba(0, 0, 0, 0.6);\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.4375em;\n  letter-spacing: 0.00938em;\n  padding: 0;\n  position: relative;\n  display: block;\n  transform-origin: top left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 100%;\n  transform: none;\n  position: inherit;\n  margin-top: 0px;\n}";
styleInject(css_248z);

var MuiLabel = function MuiLabel(_ref) {
  var children = _ref.children,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required;
  return /*#__PURE__*/React.createElement("div", {
    className: "lf-react-material-ui-label"
  }, children, required && /*#__PURE__*/React.createElement(RequiredIcon, null));
};

export { MuiLabel as M };
