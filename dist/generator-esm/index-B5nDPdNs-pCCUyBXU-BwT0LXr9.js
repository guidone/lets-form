/* LetsForm Generator v0.9.5 - ESM */
import { I as I18N, _ as _objectWithoutProperties, B as _isDate, a as _isString, C as isValidDate, b as _extends, p as passRest, l as lfLog } from './index-DMeoKa6v-DS-Z1tAK.js';
import React, { useCallback } from 'react';
import { R as RSuiteGenericDate } from './index-D_jUogh_-CelCQJDB-CFXuDr6b.js';
import 'react-hook-form';
import 'rsuite';
import './index-Cn9nwTB0.js';
import './index-BSRGt_hk-CHB_aTs8.js';
import './index-CJYOLjUg-BuYaf1ph.js';
import './index-nKThgXMM.js';
import './index-6FBKir1_.js';
import './cross-circle-BhcLUIwD.js';
import './index-CjbtUGG-.js';
import './index-BvswBXlW-BfKr8aRy-DJCFx722.js';
import './index-DcwatjKC-BlmBmtLq-Bl6ZBl9o.js';

/* LetsForm react-rsuite5 v0.9.5 - ESM */

/* LetsForm react-rsuite5 v0.9.4 - ESM */
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
