/* LetsForm Generator v0.9.5 - ESM */
import { I as I18N, l as lfLog, a as _objectWithoutProperties, j as _isDate, _ as _isString, k as isValidDate, b as _extends } from './index-nKThgXMM.js';
import React, { useCallback } from 'react';
import { A as AntdGenericDate } from './index-Cbb4LjsO.js';
import 'react-hook-form';
import 'antd';
import './dayjs.min-dE5U0h_q.js';

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
