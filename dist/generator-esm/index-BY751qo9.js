/* LetsForm Generator v0.11.3 - ESM */
import React from 'react';
import { Form } from 'rsuite';
import { R as RequiredIcon } from './index-BS8hBd7R.js';
import { I as I18N, l as lfLog } from './index-hDo1kas4.js';
import { P as Placeholder } from './index-CC0lSRpA.js';
import 'react-hook-form';

var PlaceholderRSuite5 = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
    text = _ref.text,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required;
  return /*#__PURE__*/React.createElement(Form.Group, {
    "data-lf-field-name": name,
    className: "lf-control-placeholder"
  }, label && /*#__PURE__*/React.createElement(Form.ControlLabel, null, label, hint && tooltip && /*#__PURE__*/React.createElement(Form.HelpText, {
    tooltip: true
  }, hint), required && /*#__PURE__*/React.createElement(RequiredIcon, null)), /*#__PURE__*/React.createElement(Placeholder, {
    text: text
  }), hint && !tooltip && /*#__PURE__*/React.createElement(Form.HelpText, null, hint));
}, ['label', 'hint', 'text']);
lfLog('Loaded RSuite5.Placeholder');

export { PlaceholderRSuite5 as default };
