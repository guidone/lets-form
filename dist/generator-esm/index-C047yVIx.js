/* LetsForm Generator v0.12.2 - ESM */
import React from 'react';
import { P as Placeholder } from './index-DX5jBLEl.js';
import { I as I18N, l as lfLog } from './index-C4M6Y7eO.js';
import 'react-hook-form';

var PlaceholderReact = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    text = _ref.text;
  return /*#__PURE__*/React.createElement("div", {
    className: "lf-form-react-control-group lf-control-placeholder",
    "data-lf-field-name": name
  }, label && /*#__PURE__*/React.createElement("label", {
    for: name
  }, label), /*#__PURE__*/React.createElement(Placeholder, {
    text: text
  }), hint && /*#__PURE__*/React.createElement("div", {
    className: "lf-form-react-message"
  }, hint));
}, ['label', 'hint', 'text']);
lfLog('Loaded React.Placeholder');

export { PlaceholderReact as default };
