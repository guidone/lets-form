/* LetsForm react-material-ui v0.10.3 - ESM */
import React, { useCallback } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import { I as I18N, l as lfLog } from './index-D_d41-Ph.js';
import 'react-hook-form';

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
    disableRipple = _ref.disableRipple;
  var handleChange = useCallback(function (e) {
    onChange(e.target.checked);
  }, [onChange]);
  var switchCtrl = /*#__PURE__*/React.createElement(Switch, {
    checked: value,
    onChange: handleChange,
    disabled: disabled,
    onBlur: onBlur,
    color: color || undefined,
    size: size || undefined,
    required: required,
    disableRipple: disableRipple
  });
  return /*#__PURE__*/React.createElement(FormGroup, {
    "data-lf-field-name": name,
    className: "lf-control-toggle"
  }, label && /*#__PURE__*/React.createElement(FormControlLabel, {
    labelPlacement: labelPlacement || undefined,
    disabled: disabled,
    label: label,
    control: switchCtrl
  }), !label && switchCtrl);
}, ['label', 'hint']);
lfLog('Loaded MUI.Toggle');

export { Toggle as default };
