/* LetsForm Generator v0.12.8 - ESM */
import React from 'react';
import { P as Placeholder } from './index-DdUx5uGX.js';
import { I as I18N, l as lfLog, m as makeClassName } from './index-B4BwMGiC.js';

var PlaceholderReact = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    text = _ref.text,
    className = _ref.className;
  return /*#__PURE__*/React.createElement("div", makeClassName('placeholder', name, 'lf-form-react-control-group', className), label && /*#__PURE__*/React.createElement("label", {
    for: name
  }, label), /*#__PURE__*/React.createElement(Placeholder, {
    text: text
  }), hint && /*#__PURE__*/React.createElement("div", {
    className: "lf-form-react-message"
  }, hint));
}, ['label', 'hint', 'text']);
lfLog('Loaded React.Placeholder');

export { PlaceholderReact as default };
