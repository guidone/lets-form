/* LetsForm Generator v0.12.4 - ESM */
import { I as I18N, l as lfLog, a as _extends, m as makeClassName } from './index-lOgms5Ca.js';
import React from 'react';
import { Input } from '@mantine/core';
import { P as Placeholder } from './index-CMc1RMWd.js';
import 'react-hook-form';

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
