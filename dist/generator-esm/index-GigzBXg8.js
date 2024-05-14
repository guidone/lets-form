/* LetsForm Generator v0.7.12 - ESM */
import { I as I18N, l as lfLog, b as _extends, O as _objectDestructuringEmpty } from './index-DQrFGv9M.js';
import React from 'react';
import { M as MuiGenericInput } from './index-BkIFIyM7.js';
import 'react-hook-form';
import '@mui/material/TextField';
import '@mui/material/FormControl';
import '@mui/material/FormHelperText';
import '@mui/material/InputAdornment';
import './index-BP_pQbVw.js';
import './index-BmiIqC-m.js';

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
