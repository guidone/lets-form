/* LetsForm Generator v0.7.12 - ESM */
import React__default from 'react';
import { Input } from '@mantine/core';
import { I as I18N, l as lfLog } from './index-DRF8thTp.js';
import { P as Placeholder } from './index-CSaxjGTS.js';

var PlaceholderMantine = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    text = _ref.text;
  return /*#__PURE__*/React__default.createElement(Input.Wrapper, {
    className: "lf-control-rate",
    "data-lf-field-name": name,
    description: hint,
    inputWrapperOrder: ['label', 'input', 'description', 'error'],
    label: label
  }, /*#__PURE__*/React__default.createElement(Placeholder, {
    text: text
  }));
}, ['label', 'hint', 'text']);
lfLog('Loaded Mantine.Placeholder');

export { PlaceholderMantine as default };
