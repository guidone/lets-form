/* LetsForm react-antd v0.10.1 - ESM */
import { z as _slicedToArray, I as I18N, l as lfLog, _ as _objectWithoutProperties, F as isValidTime, a as _extends, p as passRest } from './index-CxFbfbw6.js';
import React, { useCallback } from 'react';
import { Form, TimePicker } from 'antd';
import { d as dayjs } from './dayjs.min-ncLyf_e3.js';
import 'react-hook-form';

var timeToDayJSTime = function timeToDayJSTime(str) {
  var _str$split = str.split(':'),
    _str$split2 = _slicedToArray(_str$split, 3),
    hours = _str$split2[0],
    minutes = _str$split2[1],
    seconds = _str$split2[2];
  if (hours || minutes || seconds) {
    console.log('splittato ', hours, minutes, seconds);
    var d = dayjs();
    if (hours) {
      d = d.hour(hours);
    }
    if (minutes) {
      d = d.minute(minutes);
    }
    if (seconds) {
      d = d.second(seconds);
    }
    return d;
  }
  return undefined;
};

var _excluded = ["name", "error", "hint", "required", "label", "tooltip", "onChange", "value"];
var Time = I18N(function (_ref) {
  var name = _ref.name,
    error = _ref.error,
    hint = _ref.hint,
    required = _ref.required,
    label = _ref.label,
    tooltip = _ref.tooltip,
    onChange = _ref.onChange,
    value = _ref.value,
    rest = _objectWithoutProperties(_ref, _excluded);
  // default value
  var defaultValue;
  if (isValidTime(value)) {
    defaultValue = timeToDayJSTime(value);
  }

  // send always date string in iso format
  var handleChange = useCallback(function (d) {
    var _rest$format;
    onChange(d.format((_rest$format = rest.format) !== null && _rest$format !== void 0 ? _rest$format : 'HH:mm'));
  }, [onChange, rest.format]);
  return /*#__PURE__*/React.createElement(Form.Item, {
    className: "lf-control-date",
    "data-lf-field-name": name,
    label: label,
    name: name,
    help: error != null ? error : hint && !tooltip ? hint : undefined,
    required: required,
    tooltip: tooltip && hint,
    hasFeedback: error != null,
    validateStatus: error ? 'error' : undefined,
    valuePropName: null
  }, /*#__PURE__*/React.createElement(TimePicker, _extends({
    defaultValue: defaultValue,
    onChange: handleChange
  }, passRest(rest))));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded AntD.Time');

export { Time as default };
