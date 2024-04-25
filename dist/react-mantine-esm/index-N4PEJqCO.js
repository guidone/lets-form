/* LetsForm React-Mantine v0.7.9 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, y as _isDate, b as _isString, n as _slicedToArray, z as isValidDate, a as _extends, p as passRest } from './index-CbaSUw6g.js';
import React, { useState, useCallback } from 'react';
import { M as MantineGenericDate } from './index-DTp_1f6h.js';
import '@mantine/dates';

var _excluded = ["onChange", "value", "lfLocale"];
var SelectDate = I18N(function (_ref) {
  var onChange = _ref.onChange,
    value = _ref.value,
    lfLocale = _ref.lfLocale,
    rest = _objectWithoutProperties(_ref, _excluded);
  // also accepts string dates
  var initialValue;
  if (rest.dateType === 'range') {
    initialValue = [null, null];
  } else {
    if (_isDate(value)) {
      initialValue = value;
    } else if (_isString(value)) {
      var d = new Date(value);
      if (isValidDate(d)) {
        initialValue = d;
      }
    }
  }
  var _useState = useState(initialValue),
    _useState2 = _slicedToArray(_useState, 2),
    currentValue = _useState2[0],
    setCurrentValue = _useState2[1];

  // send always date string in format yyyy-mm-dd
  var handleChange = useCallback(function (d) {
    if (isValidDate(d)) {
      setCurrentValue(d);
      onChange(d.toISOString().split('T')[0]);
    } else {
      setCurrentValue(null);
      onChange(null);
    }
  }, [onChange]);
  return /*#__PURE__*/React.createElement(MantineGenericDate, _extends({
    value: currentValue,
    onChange: handleChange,
    lfLocale: lfLocale
  }, passRest(rest)));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded Mantine.SelectDate');

export { SelectDate as default };
