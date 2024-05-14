/* LetsForm Generator v0.7.12 - ESM */
import { I as I18N, l as lfLog, a as _objectWithoutProperties, k as _isArray, d as _slicedToArray, E as _toConsumableArray, b as _extends, p as passRest, i as i18nOptions } from './index-DRF8thTp.js';
import React__default, { useState, useCallback } from 'react';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from '@mui/material/FormControlLabel';

var _excluded = ["name", "label", "value", "options", "disabled", "color", "onChange", "error", "size", "row", "hint", "labelPlacement", "readOnly", "onBlur", "required"];

// DOCS: https://mui.com/material-ui/api/checkbox/

var CheckboxGroup = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    value = _ref.value,
    options = _ref.options,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    color = _ref.color,
    onChange = _ref.onChange,
    error = _ref.error,
    size = _ref.size;
    _ref.row;
    var hint = _ref.hint,
    labelPlacement = _ref.labelPlacement,
    readOnly = _ref.readOnly;
    _ref.onBlur;
    var required = _ref.required,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState(_isArray(value) ? value : []),
    _useState2 = _slicedToArray(_useState, 2),
    currentValue = _useState2[0],
    setCurrentValue = _useState2[1];
  var handleChange = useCallback(function (e) {
    var newValue;
    if (e.target.checked) {
      newValue = _toConsumableArray(new Set(currentValue).add(e.target.name));
    } else {
      var newSet = new Set(currentValue);
      newSet.delete(e.target.name);
      newValue = _toConsumableArray(newSet);
    }
    setCurrentValue(newValue);
    onChange(newValue);
  }, [currentValue, onChange]);
  return /*#__PURE__*/React__default.createElement(FormControl, {
    "data-lf-field-name": name,
    className: "lf-control-radio-group",
    required: required,
    error: error != null
  }, /*#__PURE__*/React__default.createElement(FormLabel, {
    id: "lf-control-radio-group-".concat(name)
  }, label), /*#__PURE__*/React__default.createElement(FormGroup, {
    "aria-labelledby": "lf-control-radio-group-".concat(name)
  }, (options || []).map(function (option) {
    return /*#__PURE__*/React__default.createElement(FormControlLabel, {
      key: option.value,
      value: option.value,
      labelPlacement: labelPlacement !== null && labelPlacement !== void 0 ? labelPlacement : undefined,
      control: /*#__PURE__*/React__default.createElement(Checkbox, _extends({
        disabled: disabled || readOnly,
        size: size !== null && size !== void 0 ? size : undefined,
        color: color !== null && color !== void 0 ? color : undefined,
        checked: currentValue.includes(option.value),
        onChange: handleChange,
        name: option.value
      }, passRest(rest))),
      label: option.label
    });
  })), hint && !error && /*#__PURE__*/React__default.createElement(FormHelperText, {
    sx: {
      marginLeft: '0px'
    }
  }, hint), error && /*#__PURE__*/React__default.createElement(FormHelperText, {
    sx: {
      marginLeft: '0px'
    }
  }, error));
}, ['label', 'hint'], {
  options: i18nOptions
});
lfLog('Loaded MUI.CheckboxGroup');

export { CheckboxGroup as default };
