/* LetsForm Generator v0.12.17 - ESM */
import React from 'react';
import Form from 'react-bootstrap/Form';
import { P as Placeholder } from './index-Bymev441.js';
import { I as I18N, l as lfLog, m as makeClassName } from './index-DTpeATkX.js';

var PlaceholderBootstrap = I18N(function (_ref) {
  var label = _ref.label,
    hint = _ref.hint,
    text = _ref.text,
    name = _ref.name,
    className = _ref.className;
  return /*#__PURE__*/React.createElement(Form.Group, makeClassName('placeholder', name, className), label && /*#__PURE__*/React.createElement(Form.Label, null, label), /*#__PURE__*/React.createElement(Placeholder, {
    text: text
  }), hint && /*#__PURE__*/React.createElement(Form.Text, null, hint));
}, ['label', 'hint', 'text']);
lfLog('Loaded ReactBootrap.Placeholder');

export { PlaceholderBootstrap as default };
