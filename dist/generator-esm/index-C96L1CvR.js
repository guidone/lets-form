/* LetsForm Generator v0.9.5 - ESM */
import React, { useId } from 'react';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import { P as Placeholder } from './index-Di8btOIq.js';
import { I as I18N, l as lfLog } from './index-nKThgXMM.js';
import 'react-hook-form';

var PlaceholderMUI = I18N(function (_ref) {
  var hint = _ref.hint,
    text = _ref.text,
    name = _ref.name,
    label = _ref.label;
  var controlId = useId();
  return /*#__PURE__*/React.createElement(FormControl, {
    className: "lf-control-placeholder",
    "data-lf-field-name": name
  }, label && /*#__PURE__*/React.createElement(FormLabel, {
    id: controlId
  }, label), /*#__PURE__*/React.createElement(Placeholder, {
    text: text
  }), hint && /*#__PURE__*/React.createElement(FormHelperText, null, hint));
}, ['label', 'hint', 'text']);
lfLog('Loaded MUI.Placeholder');

export { PlaceholderMUI as default };
