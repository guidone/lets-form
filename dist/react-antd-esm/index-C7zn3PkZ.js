/* LetsForm react-antd v0.10.0 - ESM */
import { _ as _objectWithoutProperties, a as _extends, l as lfLog } from './index-DNwovyfY.js';
import React from 'react';
import 'react-hook-form';

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

lfLog('Loaded AntD.ReactView');

export { ReactView as default };
