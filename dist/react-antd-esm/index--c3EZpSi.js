/* LetsForm react-antd v0.13.0 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, c as _isDate, d as _isString, i as isValidDate, a as _extends } from './index-B8s1qliR.js';
import React, { useCallback } from 'react';
import { A as AntdGenericDate } from './index-CR-tOL0F.js';
import 'antd';
import './dayjs.min-B91RDIzr.js';

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
    component: "datetime",
    onChange: handleChange
  }, rest, {
    showTime: true
  }));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded AntD.DateTime');

export { Datetime as default };
