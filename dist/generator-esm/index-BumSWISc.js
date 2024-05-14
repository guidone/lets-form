/* LetsForm Generator v0.7.12 - ESM */
import React__default from 'react';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { M as MuiLabel } from './index-Bu_z0pfR.js';
import { P as Placeholder } from './index-CSaxjGTS.js';
import { I as I18N, l as lfLog } from './index-DRF8thTp.js';

var PlaceholderMUI = I18N(function (_ref) {
  var hint = _ref.hint,
    text = _ref.text,
    name = _ref.name,
    label = _ref.label;
  return /*#__PURE__*/React__default.createElement(FormControl, {
    className: "lf-control-placeholder",
    "data-lf-field-name": name
  }, label && /*#__PURE__*/React__default.createElement(MuiLabel, {
    id: "mui_input_text_".concat(name)
  }, label), /*#__PURE__*/React__default.createElement(Placeholder, {
    text: text
  }), hint && /*#__PURE__*/React__default.createElement(FormHelperText, null, hint));
}, ['label', 'hint', 'text']);
lfLog('Loaded MUI.Placeholder');

export { PlaceholderMUI as default };
