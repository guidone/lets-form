/* LetsForm Generator v0.12.16 - ESM */
import React, { useId } from 'react';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import { P as Placeholder } from './index-BHHSewla.js';
import { I as I18N, l as lfLog, m as makeClassName } from './index-C17qSwW1.js';

var PlaceholderMUI = I18N(function (_ref) {
  var hint = _ref.hint,
    text = _ref.text,
    name = _ref.name,
    label = _ref.label,
    className = _ref.className;
  var controlId = useId();
  return /*#__PURE__*/React.createElement(FormControl, makeClassName('placeholder', name, className), label && /*#__PURE__*/React.createElement(FormLabel, {
    id: controlId
  }, label), /*#__PURE__*/React.createElement(Placeholder, {
    text: text
  }), hint && /*#__PURE__*/React.createElement(FormHelperText, null, hint));
}, ['label', 'hint', 'text']);
lfLog('Loaded MUI.Placeholder');

export { PlaceholderMUI as default };
