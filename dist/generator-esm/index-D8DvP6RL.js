/* LetsForm Generator v0.7.12 - ESM */
import { I as I18N, l as lfLog, a as _objectWithoutProperties, b as _extends } from './index-DRF8thTp.js';
import React__default, { useCallback } from 'react';
import { M as MuiGenericInput } from './index-5vk-52hG.js';
import '@mui/material/TextField';
import '@mui/material/FormControl';
import '@mui/material/FormHelperText';
import '@mui/material/InputAdornment';
import './index-DDB-YTXQ.js';
import './index-Bu_z0pfR.js';

var _excluded = ["onChange"];
// DOC: https://mui.com/material-ui/api/input/

var TextInput = I18N(function (_ref) {
  var onChange = _ref.onChange,
    rest = _objectWithoutProperties(_ref, _excluded);
  var handleChange = useCallback(function (event) {
    onChange(event.target.value);
  }, [onChange]);
  return /*#__PURE__*/React__default.createElement(MuiGenericInput, _extends({
    className: "lf-control-input-text",
    component: "input-text",
    onChange: handleChange
  }, rest));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded MUI.InputText');

export { TextInput as default };
