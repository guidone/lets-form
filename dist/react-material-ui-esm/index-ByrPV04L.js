/* LetsForm react-material-ui v0.9.6 - ESM */
import { D as isUrl, _ as _objectWithoutProperties, a as _extends, b as _isNumber, p as passRest } from './index-DIotIO24.js';
import React, { useCallback, useId } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import FormLabel from '@mui/material/FormLabel';

var TextOrIcon = function TextOrIcon(str) {
  if (isUrl(str)) {
    return /*#__PURE__*/React.createElement("img", {
      className: "lf-prefix-icon",
      src: str,
      alt: "icon"
    });
  } else if (str) {
    return /*#__PURE__*/React.createElement("span", null, str);
  }
};

var _excluded = ["name", "label", "hint", "value", "onChange", "onBlur", "inputType", "autocomplete", "inputMode", "size", "error", "disabled", "readOnly", "required", "submitOnEnter", "fullWidth", "variant", "floatingLabel", "placeholder", "color", "width", "prefix", "postfix", "component", "disableUnderline", "className", "lfOnEnter"];

// DOC: https://mui.com/material-ui/api/input/

var MuiGenericInput = function MuiGenericInput(_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    inputType = _ref.inputType,
    autocomplete = _ref.autocomplete;
    _ref.inputMode;
    var size = _ref.size,
    error = _ref.error,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    required = _ref.required,
    _ref$submitOnEnter = _ref.submitOnEnter,
    submitOnEnter = _ref$submitOnEnter === void 0 ? false : _ref$submitOnEnter,
    _ref$fullWidth = _ref.fullWidth,
    fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
    variant = _ref.variant,
    floatingLabel = _ref.floatingLabel,
    placeholder = _ref.placeholder,
    color = _ref.color,
    width = _ref.width,
    prefix = _ref.prefix,
    postfix = _ref.postfix;
    _ref.component;
    var disableUnderline = _ref.disableUnderline,
    className = _ref.className,
    _ref$lfOnEnter = _ref.lfOnEnter,
    lfOnEnter = _ref$lfOnEnter === void 0 ? function () {} : _ref$lfOnEnter,
    rest = _objectWithoutProperties(_ref, _excluded);
  var handleKeyUp = useCallback(function (e) {
    return e.keyCode === 13 && lfOnEnter();
  }, [lfOnEnter]);
  var controlId = useId();
  return /*#__PURE__*/React.createElement("div", {
    "data-lf-field-name": name,
    className: className
  }, /*#__PURE__*/React.createElement(FormControl, {
    required: required,
    error: error != null,
    variant: variant !== null && variant !== void 0 ? variant : undefined,
    fullWidth: fullWidth
  }, label && !floatingLabel && /*#__PURE__*/React.createElement(FormLabel, {
    id: controlId
  }, label), /*#__PURE__*/React.createElement(TextField, _extends({
    size: size,
    placeholder: placeholder,
    value: value,
    color: color,
    required: floatingLabel ? required : undefined,
    style: _isNumber(width) && !fullWidth ? {
      width: "".concat(parseInt(width, 10), "px")
    } : undefined,
    onChange: onChange,
    onKeyUp: submitOnEnter ? handleKeyUp : undefined,
    type: inputType,
    InputProps: {
      startAdornment: prefix ? /*#__PURE__*/React.createElement(InputAdornment, {
        position: "start"
      }, TextOrIcon(prefix)) : undefined,
      endAdornment: postfix ? /*#__PURE__*/React.createElement(InputAdornment, {
        position: "end"
      }, TextOrIcon(postfix)) : undefined,
      disableUnderline: disableUnderline,
      readOnly: readOnly,
      autoComplete: autocomplete
    },
    variant: variant !== null && variant !== void 0 ? variant : undefined,
    onBlur: onBlur,
    disabled: disabled,
    label: floatingLabel ? label : undefined
  }, passRest(rest))), hint && !error && /*#__PURE__*/React.createElement(FormHelperText, null, hint), error && /*#__PURE__*/React.createElement(FormHelperText, null, error)));
};

export { MuiGenericInput as M };
