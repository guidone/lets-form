/* LetsForm react-material-ui v0.10.3 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, e as _isDate, f as _isString, g as isValidDate, a as _extends } from './index-D_d41-Ph.js';
import React, { useCallback } from 'react';
import { M as MuiGenericDate } from './index-CwMDrJky.js';
import 'react-hook-form';
import '@mui/material/FormControl';
import '@mui/material/FormHelperText';
import '@mui/material/FormLabel';
import '@mui/x-date-pickers/DatePicker';
import '@mui/x-date-pickers/DateTimePicker';
import './dayjs.min-PZVWLFbE.js';

var _excluded = ["onChange", "value"];

// DOC: https://mui.com/x/api/date-pickers/date-picker/
//      https://mui.com/x/react-date-pickers/adapters-locale/

var MuiDateTime = I18N(function (_ref) {
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
      onChange(d.toDate().toISOString());
    }
  }, [onChange]);
  return /*#__PURE__*/React.createElement(MuiGenericDate, _extends({
    value: currentValue,
    className: "lf-control-datetime",
    component: "datetime",
    datetime: true,
    onChange: handleChange
  }, rest));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded MUI.DateTime');

export { MuiDateTime as default };
