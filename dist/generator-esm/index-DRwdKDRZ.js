/* LetsForm Generator v0.11.6 - ESM */
import { I as I18N, l as lfLog, a as _objectWithoutProperties, h as _isDate, _ as _isString, j as isValidDate, b as _extends } from './index-BL-8Kev-.js';
import React, { useCallback } from 'react';
import { A as AntdGenericDate } from './index-C2Cng7ks.js';
import 'react-hook-form';
import 'antd';
import './dayjs.min-B0YFoR9U.js';

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
