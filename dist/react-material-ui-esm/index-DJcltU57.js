/* LetsForm react-material-ui v0.12.16 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, a as _extends } from './index-CEqW8_MD.js';
import React, { useCallback } from 'react';
import { M as MuiGenericInput } from './index-CwEV0ccu.js';
import '@mui/material/TextField';
import '@mui/material/FormControl';
import '@mui/material/FormHelperText';
import '@mui/material/InputAdornment';
import '@mui/material/FormLabel';
import './index-Bh2GpDjK.js';

var _excluded = ["onChange"];

// DOC: https://mui.com/material-ui/api/input/

var Textarea = I18N(function (_ref) {
  var onChange = _ref.onChange,
    rest = _objectWithoutProperties(_ref, _excluded);
  var handleChange = useCallback(function (event) {
    onChange(event.target.value);
  }, [onChange]);
  return /*#__PURE__*/React.createElement(MuiGenericInput, _extends({
    component: "textarea",
    onChange: handleChange,
    multiline: true
  }, rest));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded MUI.Textarea');

export { Textarea as default };
