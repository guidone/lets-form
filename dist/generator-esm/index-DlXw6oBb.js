/* LetsForm Generator v0.12.16 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, a as _extends, p as passRest, m as makeClassName } from './index-C17qSwW1.js';
import React, { useCallback } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';

var _excluded = ["name", "label", "value", "disabled", "color", "onChange", "size", "labelPlacement", "onBlur", "required", "disableRipple", "className"];
var Toggle = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    value = _ref.value,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    color = _ref.color,
    onChange = _ref.onChange,
    size = _ref.size,
    labelPlacement = _ref.labelPlacement,
    onBlur = _ref.onBlur,
    required = _ref.required,
    disableRipple = _ref.disableRipple,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var handleChange = useCallback(function (e) {
    onChange(e.target.checked);
  }, [onChange]);
  var switchCtrl = /*#__PURE__*/React.createElement(Switch, _extends({
    checked: value,
    onChange: handleChange,
    disabled: disabled,
    onBlur: onBlur,
    color: color || undefined,
    size: size || undefined,
    required: required,
    disableRipple: disableRipple
  }, passRest(rest)));
  return /*#__PURE__*/React.createElement(FormGroup, makeClassName('toggle', name, className), label && /*#__PURE__*/React.createElement(FormControlLabel, {
    labelPlacement: labelPlacement || undefined,
    disabled: disabled,
    label: label,
    control: switchCtrl
  }), !label && switchCtrl);
}, ['label', 'hint']);
lfLog('Loaded MUI.Toggle');

export { Toggle as default };
