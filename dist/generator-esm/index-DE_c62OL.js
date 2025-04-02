/* LetsForm Generator v0.12.15 - ESM */
import { I as I18N, l as lfLog, a as _extends, m as makeClassName } from './index-7LChbcm9.js';
import React from 'react';
import { Input } from '@mantine/core';
import { P as Placeholder } from './index-BtmfghTi.js';

var PlaceholderMantine = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    text = _ref.text,
    className = _ref.className;
  return /*#__PURE__*/React.createElement(Input.Wrapper, _extends({}, makeClassName('placeholder', name, className), {
    description: hint,
    inputWrapperOrder: ['label', 'input', 'description', 'error'],
    label: label
  }), /*#__PURE__*/React.createElement(Placeholder, {
    text: text
  }));
}, ['label', 'hint', 'text']);
lfLog('Loaded Mantine.Placeholder');

export { PlaceholderMantine as default };
