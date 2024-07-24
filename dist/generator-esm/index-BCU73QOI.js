/* LetsForm Generator v0.9.4 - ESM */
import { I as I18N, l as lfLog, a as _objectWithoutProperties, k as isValidDate, b as _extends } from './index-CR64ICt9.js';
import React, { useCallback } from 'react';
import { R as ReactGenericInput } from './index-BZW8W2OS.js';
import 'react-hook-form';
import './index-DHcRgead.js';

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
    className: "lf-control-date",
    value: currentDate,
    onChange: handleChange
  }, rest));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded React.Date');

export { DateInput as default };
