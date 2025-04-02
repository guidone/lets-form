/* LetsForm react-rsuite5 v0.12.15 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, A as _isDate, b as _isString, B as isValidDate, a as _extends, p as passRest } from './index-BC40JkIQ.js';
import React, { useCallback } from 'react';
import { R as RSuiteGenericDate } from './index-BQ6hTJ0k.js';
import 'rsuite';
import './index-hsykYk2X.js';
import './index-KvwugO-J.js';

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
    onChange: handleChange,
    component: "datetime"
  }, passRest(rest)));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded RSuite5.DateTime');

export { SelectDatetime as default };
