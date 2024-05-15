/* LetsForm Generator v0.7.13-beta-10 - ESM */
import React from 'react';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { M as MuiLabel } from './index-BRu5WDAK.js';
import { P as Placeholder } from './index-69adFn5F.js';
import { I as I18N, l as lfLog } from './index-BAXBRwhg.js';
import 'react-hook-form';

var PlaceholderMUI = I18N(function (_ref) {
  var hint = _ref.hint,
    text = _ref.text,
    name = _ref.name,
    label = _ref.label;
  return /*#__PURE__*/React.createElement(FormControl, {
    className: "lf-control-placeholder",
    "data-lf-field-name": name
  }, label && /*#__PURE__*/React.createElement(MuiLabel, {
    id: "mui_input_text_".concat(name)
  }, label), /*#__PURE__*/React.createElement(Placeholder, {
    text: text
  }), hint && /*#__PURE__*/React.createElement(FormHelperText, null, hint));
}, ['label', 'hint', 'text']);
lfLog('Loaded MUI.Placeholder');

export { PlaceholderMUI as default };
