/* LetsForm Generator v0.7.12 - ESM */
import { I as I18N, l as lfLog, a as _objectWithoutProperties, h as _isDate, _ as _isString, d as _slicedToArray, j as isValidDate, b as _extends, p as passRest } from './index-DQrFGv9M.js';
import React, { useState, useCallback } from 'react';
import { M as MantineGenericDate } from './index-DSUwg-om.js';
import 'react-hook-form';
import '@mantine/dates';

var _excluded = ["onChange", "value", "lfLocale"];
var SelectDatTime = I18N(function (_ref) {
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
      onChange(d.toISOString());
    } else {
      setCurrentValue(null);
      onChange(null);
    }
  }, [onChange]);
  return /*#__PURE__*/React.createElement(MantineGenericDate, _extends({
    value: currentValue,
    onChange: handleChange,
    lfLocale: lfLocale
  }, passRest(rest), {
    withTime: true
  }));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded Mantine.SelectDateTime');

export { SelectDatTime as default };
