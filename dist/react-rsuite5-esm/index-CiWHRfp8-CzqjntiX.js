/* LetsForm react-rsuite5 v0.9.4 - ESM */
import { _ as _objectWithoutProperties, b as _extends, l as lfLog } from './index-DpKM_8GA.js';
import React from 'react';
import 'react-hook-form';
import './index-DC6uVyk8.js';
import 'rsuite';
import './index-BvswBXlW.js';
import './index-DcwatjKC.js';

/* LetsForm react-rsuite5 v0.9.3 - ESM */
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
lfLog('Loaded RSuite5.ReactView');

export { ReactView as default };