/* LetsForm react-material-ui v0.16.6 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, a as _extends, p as passRest, m as makeClassName } from './index-Duzzra0b.js';
import React, { useCallback } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import 'react-hook-form';

var _excluded = ["name", "label", "value", "disabled", "color", "onChange", "size", "labelPlacement", "onBlur", "required", "disableRipple", "className"];

// DOCS: https://mui.com/material-ui/api/checkbox/

var CheckboxMUI = I18N(function (_ref) {
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
  var checkboxCtrl = /*#__PURE__*/React.createElement(Checkbox, _extends({
    checked: value,
    onChange: handleChange,
    disabled: disabled,
    onBlur: onBlur,
    color: color,
    size: size,
    required: required,
    disableRipple: disableRipple
  }, passRest(rest)));
  return /*#__PURE__*/React.createElement(FormGroup, makeClassName('checkbox', name, className), label && /*#__PURE__*/React.createElement(FormControlLabel, {
    labelPlacement: labelPlacement ? labelPlacement : undefined,
    disabled: disabled,
    label: label,
    control: checkboxCtrl
  }), !label && checkboxCtrl);
}, ['label', 'hint']);
lfLog('Loaded MUI.Checkbox');

export { CheckboxMUI as default };
