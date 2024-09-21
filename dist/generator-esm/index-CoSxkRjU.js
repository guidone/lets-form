/* LetsForm Generator v0.11.0 - ESM */
import React from 'react';
import Form from 'react-bootstrap/Form';
import { P as Placeholder } from './index-isbavMa2.js';
import { I as I18N, l as lfLog } from './index-BxsBDXDY.js';
import 'react-hook-form';

var PlaceholderBootstrap = I18N(function (_ref) {
  var label = _ref.label,
    hint = _ref.hint,
    text = _ref.text,
    name = _ref.name;
  return /*#__PURE__*/React.createElement(Form.Group, {
    className: "lf-control-placeholder",
    "data-lf-field-name": name
  }, label && /*#__PURE__*/React.createElement(Form.Label, null, label), /*#__PURE__*/React.createElement(Placeholder, {
    text: text
  }), hint && /*#__PURE__*/React.createElement(Form.Text, null, hint));
}, ['label', 'hint', 'text']);
lfLog('Loaded ReactBootrap.Placeholder');

export { PlaceholderBootstrap as default };
