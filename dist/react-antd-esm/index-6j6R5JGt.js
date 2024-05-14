/* LetsForm react-antd v0.7.13-beta-9 - ESM */
import React from 'react';
import { l as lfLog } from './index-BICfY6Nk.js';
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

lfLog('Loaded AntD.Divider');

export { Divider as default };
