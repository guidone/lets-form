/* LetsForm Generator v0.12.8 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, h as _isDate, b as _isString, j as isValidDate, a as _extends } from './index-B4BwMGiC.js';
import React, { useCallback } from 'react';
import { A as AntdGenericDate } from './index-R8cnqONa.js';
import 'antd';
import './dayjs.min-BJLRb123.js';

var _excluded = ["onChange", "value", "className"];
var AntdDate = I18N(function (_ref) {
  var onChange = _ref.onChange,
    value = _ref.value;
    _ref.className;
    var rest = _objectWithoutProperties(_ref, _excluded);
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
  return /*#__PURE__*/React.createElement(AntdGenericDate, _extends({
    value: currentValue,
    component: "date",
    onChange: handleChange
  }, rest));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded AntD.Date');

export { AntdDate as default };
