/* LetsForm Generator v0.7.12 - ESM */
import { I as I18N, l as lfLog, a as _objectWithoutProperties, h as _isDate, _ as _isString, j as isValidDate, b as _extends } from './index-DRF8thTp.js';
import React__default, { useCallback } from 'react';
import { M as MuiGenericDate } from './index-DO3DHisJ.js';
import '@mui/material/FormControl';
import '@mui/material/FormHelperText';
import './dayjs.min-D0DJWlqb.js';
import '@mui/x-date-pickers/DatePicker';
import '@mui/x-date-pickers/DateTimePicker';

var _excluded = ["onChange", "value"];

// DOC: https://mui.com/x/api/date-pickers/date-picker/
//      https://mui.com/x/react-date-pickers/adapters-locale/

var MuiDate = I18N(function (_ref) {
  var onChange = _ref.onChange,
    value = _ref.value,
    rest = _objectWithoutProperties(_ref, _excluded);
  // also accepts string dates
  var currentValue;
  if (_isDate(value)) {
    currentValue = value;
  } else if (_isString(value)) {
    var d = new Date(value);
    if (isValidDate(d)) {
      currentValue = d;
    }
  }

  // send always date string in format yyyy-mm-dd
  var handleChange = useCallback(function (d) {
    if (d.toDate && isValidDate(d.toDate())) {
      onChange(d.toDate().toISOString().split('T')[0]);
    }
  }, [onChange]);
  return /*#__PURE__*/React__default.createElement(MuiGenericDate, _extends({
    value: currentValue,
    className: "lf-control-date",
    component: "date",
    onChange: handleChange
  }, rest));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded MUI.Date');

export { MuiDate as default };
