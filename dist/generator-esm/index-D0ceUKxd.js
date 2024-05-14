/* LetsForm Generator v0.7.13-beta-9 - ESM */
import { I as I18N, l as lfLog, a as _objectWithoutProperties, h as _isDate, _ as _isString, j as isValidDate, b as _extends, p as passRest } from './index-BK4tt4jT.js';
import React, { useCallback } from 'react';
import { R as RSuiteGenericDate } from './index-Cqsskrtv.js';
import 'react-hook-form';
import 'rsuite/Form';
import 'rsuite/DatePicker';
import './index-Bj4yKodF.js';
import './index-BP9p7bTX.js';
import 'rsuite/Whisper';
import 'rsuite/Popover';

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
