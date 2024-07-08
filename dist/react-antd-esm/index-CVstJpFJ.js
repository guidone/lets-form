/* LetsForm react-antd v0.9.3 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, b as _isDate, d as _isString, e as isValidDate, a as _extends } from './index-BNPXBLI1.js';
import React, { useCallback } from 'react';
import { A as AntdGenericDate } from './index-o5c_OtdP.js';
import 'react-hook-form';
import 'antd';
import './dayjs.min-DVQSy-dE.js';

var _excluded = ["onChange", "value"];
var Datetime = I18N(function (_ref) {
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
  return /*#__PURE__*/React.createElement(AntdGenericDate, _extends({
    value: currentValue,
    className: "lf-control-datetime",
    component: "datetime",
    onChange: handleChange
  }, rest, {
    showTime: true
  }));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded AntD.DateTime');

export { Datetime as default };