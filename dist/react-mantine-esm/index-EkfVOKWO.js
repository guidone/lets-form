/* LetsForm react-mantine v0.12.6 - ESM */
import { a as _extends, m as makeClassName, l as lfLog } from './index-BWoMptXJ.js';
import React from 'react';
import 'react-hook-form';

var Hidden = function Hidden(_ref) {
  var name = _ref.name;
  return /*#__PURE__*/React.createElement("div", _extends({}, makeClassName('hidden', name), {
    style: {
      padding: '10px'
    }
  }), "Hidden field: ", /*#__PURE__*/React.createElement("em", null, name));
};
lfLog('Loaded RSuite5.Hidden');

export { Hidden as default };
