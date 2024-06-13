/* LetsForm react-rsuite5 v0.8.2 - ESM */
import React from 'react';

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

export { RequiredIcon as R };
