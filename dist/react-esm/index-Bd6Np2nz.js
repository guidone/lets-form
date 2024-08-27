/* LetsForm react v0.10.5 - ESM */
import React from 'react';
import { l as lfLog } from './index-ZiBrtorE.js';
import 'react-hook-form';

var Hidden = function Hidden(_ref) {
  var name = _ref.name;
  return /*#__PURE__*/React.createElement("div", {
    className: "lf-control-hidden",
    style: {
      padding: '10px'
    }
  }, "Hidden field: ", /*#__PURE__*/React.createElement("em", null, name));
};
lfLog('Loaded RSuite5.Hidden');

export { Hidden as default };
