/* LetsForm react-rsuite5 v0.9.5 - ESM */
import { I as I18N, _ as _objectWithoutProperties, B as _isDate, a as _isString, C as isValidDate, b as _extends, p as passRest, l as lfLog } from './index-DpKM_8GA-eSPfMLwa.js';
import React, { useCallback } from 'react';
import { R as RSuiteGenericDate } from './index-Cytb4B8C-DpiMS2s0-CLgkAFVC.js';
import 'react-hook-form';
import 'rsuite';
import './index-DMeoKa6v.js';
import './index-BvswBXlW-BfKr8aRy.js';
import './index-DcwatjKC-BlmBmtLq.js';
import './index-CYJiGipx.js';
import './index-BSRGt_hk.js';
import './index-CJYOLjUg.js';
import './index-CPlHLHJ--7S9GFri9-B8_oeacG.js';
import './index-cDTTgCy6-D4x1bGkI-x00HBuj3.js';

/* LetsForm react-rsuite5 v0.9.4 - ESM */

/* LetsForm react-rsuite5 v0.9.3 - ESM */
var _excluded = ["onChange", "value"];
var SelectDatetime = I18N(function (_ref) {
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

  // send always date string in iso format
  var handleChange = useCallback(function (d) {
    if (isValidDate(d)) {
      onChange(d.toISOString());
    }
  }, [onChange]);
  return /*#__PURE__*/React.createElement(RSuiteGenericDate, _extends({
    value: currentValue,
    onChange: handleChange
  }, passRest(rest)));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded RSuite5.DateTime');

export { SelectDatetime as default };
