/* LetsForm Generator v0.12.1 - ESM */
import { I as I18N, l as lfLog, a as _objectWithoutProperties, h as _isDate, _ as _isString, j as isValidDate, b as _extends, p as passRest } from './index-2o0Won09.js';
import React, { useCallback } from 'react';
import { R as RSuiteGenericDate } from './index-33k9Yutb.js';
import 'react-hook-form';
import 'rsuite';
import './index-D6sfikgG.js';
import './index-D_AprHhH.js';

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
    value: currentValue,
    onChange: handleChange
  }, passRest(rest)));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded RSuite5.SelectDate');

export { SelectDate as default };
