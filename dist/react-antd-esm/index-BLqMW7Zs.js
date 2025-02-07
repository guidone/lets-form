/* LetsForm react-antd v0.12.10 - ESM */
import { _ as _objectWithoutProperties, m as makeClassName, a as _extends, l as lfLog } from './index-CUzwYSlb.js';
import React from 'react';

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

lfLog('Loaded AntD.ReactView');

export { ReactView as default };
