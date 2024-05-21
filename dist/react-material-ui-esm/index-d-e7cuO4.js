/* LetsForm react-material-ui v0.7.15 - ESM */
import { _ as _objectWithoutProperties, a as _extends, l as lfLog } from './index-Blt8-2Sd.js';
import React from 'react';

var _excluded = ["name", "view"];
var ReactView = function ReactView(_ref) {
  var name = _ref.name,
    view = _ref.view,
    rest = _objectWithoutProperties(_ref, _excluded);
  var View = view;
  return /*#__PURE__*/React.createElement("div", {
    className: "lf-control-react-view",
    "data-lf-field-name": name
  }, View && /*#__PURE__*/React.createElement(View, _extends({
    name: name
  }, rest)));
};

lfLog('Loaded MUI.ReactView');

export { ReactView as default };
