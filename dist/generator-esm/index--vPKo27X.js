/* LetsForm Generator v0.11.6 - ESM */
import React from 'react';
import { Input } from '@mantine/core';
import { I as I18N, l as lfLog } from './index-BL-8Kev-.js';
import { P as Placeholder } from './index-BPx9WUjM.js';
import 'react-hook-form';

var PlaceholderMantine = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    text = _ref.text;
  return /*#__PURE__*/React.createElement(Input.Wrapper, {
    className: "lf-control-rate",
    "data-lf-field-name": name,
    description: hint,
    inputWrapperOrder: ['label', 'input', 'description', 'error'],
    label: label
  }, /*#__PURE__*/React.createElement(Placeholder, {
    text: text
  }));
}, ['label', 'hint', 'text']);
lfLog('Loaded Mantine.Placeholder');

export { PlaceholderMantine as default };
