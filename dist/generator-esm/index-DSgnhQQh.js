/* LetsForm Generator v0.7.12 - ESM */
import { a as _objectWithoutProperties, b as _extends } from './index-DRF8thTp.js';
import React__default from 'react';

var _excluded = ["name", "view"];
var ReactView = function ReactView(_ref) {
  var name = _ref.name,
    view = _ref.view,
    rest = _objectWithoutProperties(_ref, _excluded);
  var View = view;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "lf-control-react-view",
    "data-lf-field-name": name
  }, View && /*#__PURE__*/React__default.createElement(View, _extends({
    name: name
  }, rest)));
};

export { ReactView as R };
