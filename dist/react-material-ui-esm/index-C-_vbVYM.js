/* LetsForm react-material-ui v0.13.0 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, f as _isString, a as _extends } from './index-DJ3Q1Yyt.js';
import React, { useCallback } from 'react';
import { M as MuiGenericInput } from './index-DAp2QrwL.js';
import '@mui/material/TextField';
import '@mui/material/FormControl';
import '@mui/material/FormHelperText';
import '@mui/material/InputAdornment';
import '@mui/material/FormLabel';
import './index-CYpvl7_0.js';

var _excluded = ["onChange"];

// DOC: https://mui.com/material-ui/api/input/

var hasDecimals = function hasDecimals(f) {
  return _isString(f) && (f.includes(',') || f.includes('.'));
};
var InputNumber = I18N(function (_ref) {
  var onChange = _ref.onChange,
    rest = _objectWithoutProperties(_ref, _excluded);
  var handleChange = useCallback(function (e) {
    var value = e.target.value;
    var parsed;
    if (_isString(value)) {
      if (value === '') {
        // void if the user deleted all chars
        parsed = null;
      } else if (hasDecimals(value)) {
        parsed = parseFloat(value);
      } else {
        parsed = parseInt(value, 10);
      }
      if (!isNaN(parsed)) {
        onChange(parsed);
      }
    }
  }, [onChange]);
  return /*#__PURE__*/React.createElement(MuiGenericInput, _extends({
    component: "input-number",
    onChange: handleChange,
    inputType: "number"
  }, rest));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded MUI.InputNumber');

export { InputNumber as default };
