/* LetsForm Generator v0.7.15 - ESM */
import React__default from 'react';
import { P as Placeholder } from './index-CIXJZPah.js';
import { I as I18N, l as lfLog } from './index-BlDYFeHM.js';

var PlaceholderReact = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    text = _ref.text;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "lf-form-react-control-group lf-control-placeholder",
    "data-lf-field-name": name
  }, label && /*#__PURE__*/React__default.createElement("label", {
    for: name
  }, label), /*#__PURE__*/React__default.createElement(Placeholder, {
    text: text
  }), hint && /*#__PURE__*/React__default.createElement("div", {
    className: "lf-form-react-message"
  }, hint));
}, ['label', 'hint', 'text']);
lfLog('Loaded React.Placeholder');

export { PlaceholderReact as default };
