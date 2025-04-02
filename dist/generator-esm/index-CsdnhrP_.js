/* LetsForm Generator v0.12.15 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, h as _isDate, b as _isString, j as isValidDate, a as _extends, p as passRest } from './index-7LChbcm9.js';
import React, { useCallback } from 'react';
import { R as RSuiteGenericDate } from './index-kK1xhSir.js';
import 'rsuite';
import './index-DbDdmXWk.js';
import './index-CZ6ejg3n.js';

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
