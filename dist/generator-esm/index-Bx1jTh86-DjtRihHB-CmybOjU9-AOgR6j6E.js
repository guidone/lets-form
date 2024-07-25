/* LetsForm Generator v0.9.5 - ESM */
import { I as I18N, _ as _objectWithoutProperties, B as _isDate, a as _isString, M as isValidTime, C as isValidDate, b as _extends, p as passRest, l as lfLog, g as _slicedToArray } from './index-DpKM_8GA-eSPfMLwa-JpnNUllM.js';
import React, { useCallback } from 'react';
import { R as RSuiteGenericDate } from './index-Cytb4B8C-DpiMS2s0-CLgkAFVC-BVbyDQmp.js';
import 'react-hook-form';
import 'rsuite';
import './index-DMeoKa6v-DS-Z1tAK.js';
import './index-Cn9nwTB0.js';
import './index-BvswBXlW-BfKr8aRy-DJCFx722.js';
import './index-DcwatjKC-BlmBmtLq-Bl6ZBl9o.js';
import './index-BSRGt_hk-CHB_aTs8.js';
import './index-CJYOLjUg-BuYaf1ph.js';
import './index-nKThgXMM.js';
import './index-6FBKir1_.js';
import './cross-circle-BhcLUIwD.js';
import './index-CjbtUGG-.js';
import './index-CPlHLHJ--7S9GFri9-B8_oeacG-Bgskf1BA.js';
import './index-cDTTgCy6-D4x1bGkI-x00HBuj3-DTPbLMtW.js';

/* LetsForm react-rsuite5 v0.9.5 - ESM */

/* LetsForm react-rsuite5 v0.9.4 - ESM */

/* LetsForm react-rsuite5 v0.9.3 - ESM */
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
