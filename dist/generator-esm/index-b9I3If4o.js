/* LetsForm Generator v0.12.15 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, h as _isDate, b as _isString, j as isValidDate, a as _extends } from './index-7LChbcm9.js';
import React, { useCallback } from 'react';
import { M as MuiGenericDate } from './index-DXs4DcZY.js';
import '@mui/material/FormControl';
import '@mui/material/FormHelperText';
import '@mui/material/FormLabel';
import '@mui/x-date-pickers/DatePicker';
import '@mui/x-date-pickers/DateTimePicker';
import './dayjs.min-CnNAece3.js';

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
