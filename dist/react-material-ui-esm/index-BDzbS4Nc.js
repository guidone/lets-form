/* LetsForm react-material-ui v0.7.12 - ESM */
import { I as I18N, l as lfLog, a as _extends, C as _objectDestructuringEmpty } from './index-Dwcnb7Ir.js';
import React from 'react';
import { M as MuiGenericInput } from './index-DylovROP.js';
import '@mui/material/TextField';
import '@mui/material/FormControl';
import '@mui/material/FormHelperText';
import '@mui/material/InputAdornment';
import './index-Ck_YN3zP.js';

// DOC: https://mui.com/material-ui/api/input/

var Textarea = I18N(function (_ref) {
  var rest = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/React.createElement(MuiGenericInput, _extends({
    className: "lf-control-textarea",
    component: "textarea",
    multiline: true
  }, rest));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded MUI.Textarea');

export { Textarea as default };
