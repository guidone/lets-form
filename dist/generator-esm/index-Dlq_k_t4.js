/* LetsForm Generator v0.7.13-beta-10 - ESM */
import { I as I18N, l as lfLog, b as _extends, O as _objectDestructuringEmpty } from './index-BAXBRwhg.js';
import React from 'react';
import { M as MuiGenericInput } from './index-CK-nFf6X.js';
import 'react-hook-form';
import '@mui/material/TextField';
import '@mui/material/FormControl';
import '@mui/material/FormHelperText';
import '@mui/material/InputAdornment';
import './index-Bgds6fDa.js';
import './index-BRu5WDAK.js';

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
