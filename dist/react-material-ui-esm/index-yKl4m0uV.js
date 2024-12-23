/* LetsForm react-material-ui v0.12.1 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, a as _extends } from './index-CWgY_m7E.js';
import React, { useCallback } from 'react';
import { M as MuiGenericInput } from './index-CkClnDjN.js';
import 'react-hook-form';
import '@mui/material/TextField';
import '@mui/material/FormControl';
import '@mui/material/FormHelperText';
import '@mui/material/InputAdornment';
import '@mui/material/FormLabel';

var _excluded = ["onChange"];
// DOC: https://mui.com/material-ui/api/input/

var TextInput = I18N(function (_ref) {
  var onChange = _ref.onChange,
    rest = _objectWithoutProperties(_ref, _excluded);
  var handleChange = useCallback(function (event) {
    onChange(event.target.value);
  }, [onChange]);
  return /*#__PURE__*/React.createElement(MuiGenericInput, _extends({
    className: "lf-control-input-text",
    component: "input-text",
    onChange: handleChange
  }, rest));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded MUI.InputText');

export { TextInput as default };
