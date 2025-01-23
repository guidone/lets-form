/* LetsForm Generator v0.12.7 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, j as isValidDate, a as _extends } from './index-h7N_rf2c.js';
import React, { useCallback } from 'react';
import { R as ReactGenericInput } from './index-CUQVCRys.js';
import 'react-hook-form';
import './index-D8n8cD5X.js';

var _excluded = ["onChange", "value"];
var DateInput = I18N(function (_ref) {
  var onChange = _ref.onChange,
    value = _ref.value,
    rest = _objectWithoutProperties(_ref, _excluded);
  var handleChange = useCallback(function (e) {
    return onChange(e.target.value);
  }, [onChange]);
  var currentDate = value;
  if (isValidDate(value)) {
    // only take 2023-11-12
    currentDate = value.toISOString().split('T')[0];
  }
  return /*#__PURE__*/React.createElement(ReactGenericInput, _extends({
    inputType: "date",
    component: "date",
    value: currentDate,
    onChange: handleChange
  }, rest));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded React.Date');

export { DateInput as default };
