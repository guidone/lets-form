/* LetsForm react-rsuite5 v0.9.4 - ESM */
import { I as I18N, _ as _objectWithoutProperties, A as _isDate, a as _isString, K as isValidTime, B as isValidDate, b as _extends, p as passRest, l as lfLog, g as _slicedToArray } from './index-mO_HhniH-DcmwUe2s.js';
import React, { useCallback } from 'react';
import { R as RSuiteGenericDate } from './index-C-GWpNHq-B_hbVBNm-5cnyyacO.js';
import 'react-hook-form';
import 'rsuite';
import './index-DpKM_8GA.js';
import './index-CPlHLHJ--7S9GFri9.js';
import './index-cDTTgCy6-D4x1bGkI.js';
import './index-DC6uVyk8.js';
import './index-BvswBXlW.js';
import './index-DcwatjKC.js';
import './index-qCcFwkYg-V9-C5riE-DjMQWSV5.js';
import './index-BWLHZfn1-LQm15E1Z-B7Ct_VJB.js';

/* LetsForm react-rsuite5 v0.9.3 - ESM */

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