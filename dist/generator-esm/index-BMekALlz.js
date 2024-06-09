/* LetsForm Generator v0.7.17 - ESM */
import React from 'react';
import { R as RequiredIcon } from './index-Bsaw5JhI.js';
import { s as styleInject } from './index-DfGaniFQ.js';

var css_248z = ".lf-react-material-ui-label {\n  color: rgba(0, 0, 0, 0.6);\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.4375em;\n  letter-spacing: 0.00938em;\n  padding: 0;\n  position: relative;\n  display: block;\n  transform-origin: top left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 100%;\n  transform: none;\n  position: inherit;\n  margin-top: 0px;\n}";
styleInject(css_248z);

var MuiLabel = function MuiLabel(_ref) {
  var children = _ref.children,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required;
  return /*#__PURE__*/React.createElement("div", {
    className: "lf-react-material-ui-label"
  }, children, required && /*#__PURE__*/React.createElement(RequiredIcon, null));
};

export { MuiLabel as M };
