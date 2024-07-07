/* LetsForm react-rsuite5 v0.9.3 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, A as _isDate, a as _isString, K as isValidTime, B as isValidDate, b as _extends, p as passRest, g as _slicedToArray } from './index-mO_HhniH.js';
import React, { useCallback } from 'react';
import { R as RSuiteGenericDate } from './index-C-GWpNHq-B_hbVBNm.js';
import 'react-hook-form';
import 'rsuite';
import './index-eOrnPMH8.js';
import './index-CPlHLHJ-.js';
import './index-cDTTgCy6.js';
import './index-qCcFwkYg-V9-C5riE.js';
import './index-BWLHZfn1-LQm15E1Z.js';

/* LetsForm react-rsuite5 v0.9.1 - ESM */
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
