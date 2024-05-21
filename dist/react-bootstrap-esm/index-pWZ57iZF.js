/* LetsForm react-bootstrap v0.7.15 - ESM */
import React__default from 'react';
import { _ as _objectWithoutProperties, a as _extends, l as lfLog } from './index-DQH6lAHw.js';

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

lfLog('Loaded ReactBootrap.ReactView');

export { ReactView as default };
