/* LetsForm Generator v0.12.16 - ESM */
import React from 'react';
import { Form } from 'rsuite';
import { R as RequiredIcon } from './index-wUiIMWZM.js';
import { I as I18N, l as lfLog, m as makeClassName } from './index-C17qSwW1.js';
import { P as Placeholder } from './index-BHHSewla.js';

var PlaceholderRSuite5 = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
    text = _ref.text,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    className = _ref.className;
  return /*#__PURE__*/React.createElement(Form.Group, makeClassName('placeholder', name, className), label && /*#__PURE__*/React.createElement(Form.ControlLabel, null, label, hint && tooltip && /*#__PURE__*/React.createElement(Form.HelpText, {
    tooltip: true
  }, hint), required && /*#__PURE__*/React.createElement(RequiredIcon, null)), /*#__PURE__*/React.createElement(Placeholder, {
    text: text
  }), hint && !tooltip && /*#__PURE__*/React.createElement(Form.HelpText, null, hint));
}, ['label', 'hint', 'text']);
lfLog('Loaded RSuite5.Placeholder');

export { PlaceholderRSuite5 as default };
