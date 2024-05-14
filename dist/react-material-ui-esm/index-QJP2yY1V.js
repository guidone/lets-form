/* LetsForm react-material-ui v0.7.13-beta-4 - ESM */
import { I as I18N, l as lfLog, a as _extends, C as _objectDestructuringEmpty } from './index-BzFLU_oF.js';
import React from 'react';
import { M as MuiGenericInput } from './index-BOA0sM3Z.js';
import 'react-hook-form';
import '@mui/material/TextField';
import '@mui/material/FormControl';
import '@mui/material/FormHelperText';
import '@mui/material/InputAdornment';
import './index-EoAH1DTd.js';

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
