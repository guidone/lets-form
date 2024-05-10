/* LetsForm react-material-ui v0.7.11 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, a as _extends, i as i18nOptions } from './index-izK62cEO.js';
import React, { useCallback } from 'react';
import { M as MuiGenericSelect } from './index-t1JeK7A2.js';
import './index-CTO9p9sJ.js';
import '@mui/material/InputLabel';
import '@mui/material/MenuItem';
import '@mui/material/FormControl';
import '@mui/material/Select';
import '@mui/material/FormHelperText';
import '@mui/material/Checkbox';
import '@mui/material/ListItemText';

var _excluded = ["onChange", "value"];
var MuiSelect = I18N(function (_ref) {
  var onChange = _ref.onChange,
    value = _ref.value,
    rest = _objectWithoutProperties(_ref, _excluded);
  var handleChange = useCallback(function (e) {
    return onChange(e.target.value);
  }, [onChange]);
  return /*#__PURE__*/React.createElement(MuiGenericSelect, _extends({
    className: "lf-control-select",
    component: "select",
    value: value,
    onChange: handleChange
  }, rest));
}, ['label', 'hint', 'placeholder'], {
  options: i18nOptions
});
lfLog('Loaded MUI.Select');

export { MuiSelect as default };
