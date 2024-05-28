/* LetsForm Generator v0.7.15 - ESM */
import { I as I18N, l as lfLog, a as _objectWithoutProperties, b as _extends, p as passRest, i as i18nOptions } from './index-DFaTP9ls.js';
import React, { useCallback } from 'react';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from '@mui/material/FormControlLabel';
import 'react-hook-form';

var _excluded = ["name", "label", "value", "options", "disabled", "color", "onChange", "error", "size", "row", "hint", "labelPlacement", "onBlur", "required"];

// DOCS: https://mui.com/material-ui/api/checkbox/

var RadioGroupMUI = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    value = _ref.value,
    options = _ref.options,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    color = _ref.color,
    onChange = _ref.onChange,
    error = _ref.error,
    size = _ref.size,
    row = _ref.row,
    hint = _ref.hint,
    labelPlacement = _ref.labelPlacement,
    onBlur = _ref.onBlur,
    required = _ref.required,
    rest = _objectWithoutProperties(_ref, _excluded);
  var handleChange = useCallback(function (e) {
    onChange(e.target.value);
  }, [onChange]);
  return /*#__PURE__*/React.createElement(FormControl, {
    "data-lf-field-name": name,
    className: "lf-control-radio-group",
    required: required,
    error: error != null
  }, /*#__PURE__*/React.createElement(FormLabel, {
    id: "lf-control-radio-group-".concat(name)
  }, label), /*#__PURE__*/React.createElement(RadioGroup, _extends({
    "aria-labelledby": "lf-control-radio-group-".concat(name),
    value: value,
    name: name,
    row: row,
    disabled: disabled,
    onChange: handleChange,
    onBlur: onBlur
  }, passRest(rest)), (options || []).map(function (option) {
    return /*#__PURE__*/React.createElement(FormControlLabel, {
      key: option.value,
      value: option.value,
      labelPlacement: labelPlacement !== null && labelPlacement !== void 0 ? labelPlacement : undefined,
      control: /*#__PURE__*/React.createElement(Radio, {
        size: size !== null && size !== void 0 ? size : undefined,
        color: color !== null && color !== void 0 ? color : undefined
      }),
      label: option.label
    });
  })), hint && !error && /*#__PURE__*/React.createElement(FormHelperText, {
    sx: {
      marginLeft: '0px'
    }
  }, hint), error && /*#__PURE__*/React.createElement(FormHelperText, {
    sx: {
      marginLeft: '0px'
    }
  }, error));
}, ['label', 'hint'], {
  options: i18nOptions
});
lfLog('Loaded MUI.RadioGroup');

export { RadioGroupMUI as default };
