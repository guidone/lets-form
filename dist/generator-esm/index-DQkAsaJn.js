/* LetsForm Generator v0.12.1 - ESM */
import { M as isValidTime, d as _slicedToArray, I as I18N, l as lfLog, a as _objectWithoutProperties, h as _isDate, _ as _isString, j as isValidDate, b as _extends, p as passRest } from './index-2o0Won09.js';
import React, { useCallback } from 'react';
import { R as RSuiteGenericDate } from './index-33k9Yutb.js';
import 'react-hook-form';
import 'rsuite';
import './index-D6sfikgG.js';
import './index-D_AprHhH.js';

var toInt = function toInt(s) {
  return !isNaN(parseInt(s, 10)) ? parseInt(s, 10) : undefined;
};
var todayWithTime = function todayWithTime(s) {
  if (isValidTime(s)) {
    var _s$split = s.split(':'),
      _s$split2 = _slicedToArray(_s$split, 3),
      hours = _s$split2[0],
      minutes = _s$split2[1],
      seconds = _s$split2[2];
    var d = new Date();
    d.setHours(toInt(hours), toInt(minutes), toInt(seconds));
    return d;
  }
  return undefined;
};

var _excluded = ["onChange", "value"];
var SelectTime = I18N(function (_ref) {
  var onChange = _ref.onChange,
    value = _ref.value,
    rest = _objectWithoutProperties(_ref, _excluded);
  // also accepts string dates
  var currentValue;
  if (_isDate(value)) {
    currentValue = value;
  } else if (_isString(value)) {
    if (isValidTime(value)) {
      currentValue = todayWithTime(value);
    }
  }

  // send always time string in iso format
  var handleChange = useCallback(function (d) {
    if (isValidDate(d)) {
      onChange(d.toLocaleTimeString());
    } else {
      onChange(null);
    }
  }, [onChange]);
  return /*#__PURE__*/React.createElement(RSuiteGenericDate, _extends({
    value: currentValue,
    onChange: handleChange
  }, passRest(rest)));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded RSuite5.SelectTime');

export { SelectTime as default };
