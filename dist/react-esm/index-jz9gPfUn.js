/* LetsForm react v0.7.18 - ESM */
import React from 'react';
import { l as lfLog } from './index-B9CesDk7.js';
import 'react-hook-form';

var Divider = function Divider(_ref) {
  var name = _ref.name,
    size = _ref.size,
    color = _ref.color;
  return /*#__PURE__*/React.createElement("div", {
    className: "lf-control-divider",
    "data-lf-field-name": name
  }, /*#__PURE__*/React.createElement("div", {
    className: "bar",
    style: {
      height: "".concat(size, "px"),
      backgroundColor: color
    }
  }, "&npsb;"));
};

lfLog('Loaded React.Divider');

export { Divider as default };