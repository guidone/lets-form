/* LetsForm react-bootstrap v0.9.1 - ESM */
import { z as isUrl, _ as _objectWithoutProperties, a as _extends, m as makeWidthStyle, p as passRest, b as _isString, c as _isEmpty } from './index-DZ9aZAGo.js';
import React, { useCallback } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { R as RequiredIcon } from './index-BLKh-A_F.js';

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

var _excluded = ["name", "label", "hint", "value", "onChange", "onBlur", "size", "className", "inputType", "inputMode", "autocomplete", "lfLocale", "disabled", "readOnly", "plaintext", "error", "component", "required", "submitOnEnter", "prefix", "postfix", "placeholder", "fullWidth", "width", "floatingLabel", "lfOnEnter"];

// DOC: https://react-bootstrap.github.io/forms/form-control/#form-control-props

var BootstrapGenericInput = function BootstrapGenericInput(_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    size = _ref.size,
    className = _ref.className,
    inputType = _ref.inputType,
    inputMode = _ref.inputMode,
    autocomplete = _ref.autocomplete;
    _ref.lfLocale;
    var _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    _ref$plaintext = _ref.plaintext,
    plaintext = _ref$plaintext === void 0 ? false : _ref$plaintext,
    error = _ref.error;
    _ref.component;
    var required = _ref.required,
    _ref$submitOnEnter = _ref.submitOnEnter,
    submitOnEnter = _ref$submitOnEnter === void 0 ? false : _ref$submitOnEnter,
    prefix = _ref.prefix,
    postfix = _ref.postfix,
    placeholder = _ref.placeholder,
    fullWidth = _ref.fullWidth,
    width = _ref.width,
    _ref$floatingLabel = _ref.floatingLabel,
    floatingLabel = _ref$floatingLabel === void 0 ? false : _ref$floatingLabel,
    _ref$lfOnEnter = _ref.lfOnEnter,
    lfOnEnter = _ref$lfOnEnter === void 0 ? function () {} : _ref$lfOnEnter,
    rest = _objectWithoutProperties(_ref, _excluded);
  var handleKeyUp = useCallback(function (e) {
    return e.keyCode === 13 && lfOnEnter();
  }, [lfOnEnter]);
  var inner = /*#__PURE__*/React.createElement(Form.Control, _extends({
    name: name,
    type: inputType !== null && inputType !== void 0 ? inputType : 'text',
    inputmode: inputMode,
    autocomplete: autocomplete,
    value: value,
    plaintext: plaintext,
    onChange: onChange,
    onKeyUp: submitOnEnter ? handleKeyUp : undefined,
    size: size,
    placeholder: placeholder,
    onBlur: onBlur,
    disabled: disabled,
    readOnly: readOnly,
    isInvalid: error != null,
    style: makeWidthStyle(fullWidth, width)
  }, passRest(rest)));
  var innerGroup = inner;
  var needsGroup = postfix || prefix;
  if (needsGroup) {
    innerGroup = /*#__PURE__*/React.createElement(InputGroup, null, prefix && /*#__PURE__*/React.createElement(InputGroup.Text, null, TextOrIcon(prefix)), inner, postfix && /*#__PURE__*/React.createElement(InputGroup.Text, null, TextOrIcon(postfix)));
  }
  var useFloatingLabels = floatingLabel && !needsGroup;
  return /*#__PURE__*/React.createElement(Form.Group, {
    className: className,
    "data-lf-field-name": name
  }, useFloatingLabels && label && /*#__PURE__*/React.createElement(FloatingLabel, {
    label: label
  }, innerGroup), !useFloatingLabels && label && /*#__PURE__*/React.createElement(Form.Label, null, label, required && /*#__PURE__*/React.createElement(RequiredIcon, null)), !useFloatingLabels && innerGroup, hint && !error && /*#__PURE__*/React.createElement(Form.Text, null, hint), _isString(error) && !_isEmpty(error) && /*#__PURE__*/React.createElement(Form.Control.Feedback, {
    type: "invalid"
  }, error));
};

export { BootstrapGenericInput as B };
