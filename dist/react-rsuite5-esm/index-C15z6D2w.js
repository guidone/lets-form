/* LetsForm react-rsuite5 v0.10.0 - ESM */
import { I as I18N, l as lfLog, a as _objectWithoutProperties, z as _isDate, _ as _isString, A as isValidDate, b as _extends, p as passRest } from './index-BAXLt5fv.js';
import React, { useCallback } from 'react';
import { R as RSuiteGenericDate } from './index-DfOX8qKk.js';
import 'react-hook-form';
import 'rsuite';
import './index-D-O9aX3Y.js';
import './index-BcUMeq9G.js';

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