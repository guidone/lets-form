/* LetsForm react-material-ui v0.12.7 - ESM */
import { _ as _objectWithoutProperties, m as makeClassName, a as _extends, l as lfLog } from './index-D30NQATD.js';
import React from 'react';
import 'react-hook-form';

var _excluded = ["name", "view", "className"];
var ReactView = function ReactView(_ref) {
  var name = _ref.name,
    view = _ref.view,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var View = view;
  return /*#__PURE__*/React.createElement("div", makeClassName('react-view', name, className), View && /*#__PURE__*/React.createElement(View, _extends({
    name: name
  }, rest)));
};

lfLog('Loaded MUI.ReactView');

export { ReactView as default };
