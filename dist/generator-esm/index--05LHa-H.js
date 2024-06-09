/* LetsForm Generator v0.7.17 - ESM */
import React, { useCallback } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { I as I18N, l as lfLog } from './index-DfGaniFQ.js';
import 'react-hook-form';

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
    disableRipple = _ref.disableRipple;
  var handleChange = useCallback(function (e) {
    onChange(e.target.checked);
  }, [onChange]);
  var checkboxCtrl = /*#__PURE__*/React.createElement(Checkbox, {
    checked: value,
    onChange: handleChange,
    disabled: disabled,
    onBlur: onBlur,
    color: color,
    size: size,
    required: required,
    disableRipple: disableRipple
  });
  return /*#__PURE__*/React.createElement(FormGroup, {
    "data-lf-field-name": name,
    className: "lf-control-checkbox"
  }, label && /*#__PURE__*/React.createElement(FormControlLabel, {
    labelPlacement: labelPlacement ? labelPlacement : undefined,
    disabled: disabled,
    label: label,
    control: checkboxCtrl
  }), !label && checkboxCtrl);
}, ['label', 'hint']);
lfLog('Loaded MUI.Checkbox');

export { CheckboxMUI as default };
