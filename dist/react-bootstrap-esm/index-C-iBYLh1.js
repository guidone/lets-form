/* LetsForm react-bootstrap v0.7.10 - ESM */
import React__default from 'react';
import { l as lfLog } from './index-CB1ACAly.js';

var Divider = function Divider(_ref) {
  var name = _ref.name,
    size = _ref.size,
    color = _ref.color;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "lf-control-divider",
    "data-lf-field-name": name
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "bar",
    style: {
      height: "".concat(size, "px"),
      backgroundColor: color
    }
  }, "&npsb;"));
};

lfLog('Loaded ReactBootrap.Divider');

export { Divider as default };
