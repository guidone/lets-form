/* LetsForm Generator v0.7.12 - ESM */
import { I as I18N, l as lfLog, b as _extends, O as _objectDestructuringEmpty } from './index-DRF8thTp.js';
import React__default from 'react';
import { M as MuiGenericInput } from './index-5vk-52hG.js';
import '@mui/material/TextField';
import '@mui/material/FormControl';
import '@mui/material/FormHelperText';
import '@mui/material/InputAdornment';
import './index-DDB-YTXQ.js';
import './index-Bu_z0pfR.js';

// DOC: https://mui.com/material-ui/api/input/

var Textarea = I18N(function (_ref) {
  var rest = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/React__default.createElement(MuiGenericInput, _extends({
    className: "lf-control-textarea",
    component: "textarea",
    multiline: true
  }, rest));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded MUI.Textarea');

export { Textarea as default };
