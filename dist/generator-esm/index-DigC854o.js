/* LetsForm Generator v0.12.11 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, m as makeClassName, a as _extends, E as _isNumber, p as passRest, o as _objectSpread2 } from './index-_-9GIr6q.js';
import React, { useCallback } from 'react';
import Slider from '@mui/material/Slider';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

var _excluded = ["name", "label", "value", "disabled", "required", "color", "onChange", "size", "valueLabelDisplay", "onBlur", "error", "min", "max", "step", "hint", "showMarks", "customMarks", "width", "fullWidth", "className"];

// DOCS: https://mui.com/material-ui/api/slider/

var SliderMui = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    value = _ref.value,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    required = _ref.required,
    color = _ref.color,
    onChange = _ref.onChange,
    size = _ref.size,
    valueLabelDisplay = _ref.valueLabelDisplay,
    onBlur = _ref.onBlur,
    error = _ref.error,
    min = _ref.min,
    max = _ref.max,
    step = _ref.step,
    hint = _ref.hint,
    showMarks = _ref.showMarks,
    customMarks = _ref.customMarks,
    width = _ref.width,
    fullWidth = _ref.fullWidth,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var handleChange = useCallback(function (e) {
    onChange(e.target.value);
  }, [onChange]);
  return /*#__PURE__*/React.createElement("div", makeClassName('slider', name, className), /*#__PURE__*/React.createElement(FormControl, {
    required: required,
    error: error != null,
    fullWidth: fullWidth,
    sx: {
      mt: 2
    }
  }, label && /*#__PURE__*/React.createElement(FormLabel, null, label), /*#__PURE__*/React.createElement(Slider, _extends({
    name: name,
    marks: customMarks ? customMarks : showMarks,
    value: value,
    onChange: handleChange,
    disabled: disabled,
    onBlur: onBlur,
    color: color,
    style: _isNumber(width) && !fullWidth ? {
      width: "".concat(parseInt(width, 10), "px")
    } : undefined,
    min: min,
    max: max,
    step: step,
    size: size,
    valueLabelDisplay: valueLabelDisplay
  }, passRest(rest))), hint && !error && /*#__PURE__*/React.createElement(FormHelperText, null, hint), error && /*#__PURE__*/React.createElement(FormHelperText, null, error)));
}, ['label', 'hint'], {
  customMarks: function customMarks(value, i18n) {
    return (Array.isArray(value) ? value : []).map(function (value) {
      return _objectSpread2(_objectSpread2({}, value), {}, {
        label: i18n(value.label)
      });
    });
  }
});
lfLog('Loaded MUI.Slider');

export { SliderMui as default };
