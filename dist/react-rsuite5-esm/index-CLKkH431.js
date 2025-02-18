/* LetsForm react-rsuite5 v0.12.13 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, A as _isDate, b as _isString, B as isValidDate, a as _extends, p as passRest } from './index-D0ZXbyA_.js';
import React, { useCallback } from 'react';
import { R as RSuiteGenericDate } from './index-BO7Nbns-.js';
import 'rsuite';
import './index-DAqJknYG.js';
import './index-DTG9Vulo.js';

var _excluded = ["onChange", "value"];
var SelectDate = I18N(function (_ref) {
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
    if (isValidDate(d)) {
      onChange(d.toISOString().split('T')[0]);
    }
  }, [onChange]);
  return /*#__PURE__*/React.createElement(RSuiteGenericDate, _extends({
    component: "date",
    value: currentValue,
    onChange: handleChange
  }, passRest(rest)));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded RSuite5.SelectDate');

export { SelectDate as default };
