/* LetsForm Generator v0.7.12 - ESM */
import { a as _objectWithoutProperties, b as _extends, m as makeWidthStyle, p as passRest, _ as _isString, r as _isEmpty } from './index-DRF8thTp.js';
import * as React from 'react';
import React__default, { useMemo, useCallback } from 'react';
import { F as FormCheckInput, a as Form, b as FloatingLabel } from './Form-BHWv5NM5.js';
import { c as createWithBsPrefix, j as jsxRuntimeExports, u as useBootstrapPrefix, a as classNames } from './createWithBsPrefix-Dm2davyO.js';
import { R as RequiredIcon } from './index-qy17-i57.js';
import { T as TextOrIcon } from './index-DDB-YTXQ.js';

const context = /*#__PURE__*/React.createContext(null);
context.displayName = 'InputGroupContext';

const InputGroupText = createWithBsPrefix('input-group-text', {
  Component: 'span'
});
const InputGroupCheckbox = props => /*#__PURE__*/jsxRuntimeExports.jsx(InputGroupText, {
  children: /*#__PURE__*/jsxRuntimeExports.jsx(FormCheckInput, {
    type: "checkbox",
    ...props
  })
});
const InputGroupRadio = props => /*#__PURE__*/jsxRuntimeExports.jsx(InputGroupText, {
  children: /*#__PURE__*/jsxRuntimeExports.jsx(FormCheckInput, {
    type: "radio",
    ...props
  })
});
/**
 *
 * @property {InputGroupText} Text
 * @property {InputGroupRadio} Radio
 * @property {InputGroupCheckbox} Checkbox
 */
const InputGroup = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  size,
  hasValidation,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'input-group');

  // Intentionally an empty object. Used in detecting if a dropdown
  // exists under an input group.
  const contextValue = useMemo(() => ({}), []);
  return /*#__PURE__*/jsxRuntimeExports.jsx(context.Provider, {
    value: contextValue,
    children: /*#__PURE__*/jsxRuntimeExports.jsx(Component, {
      ref: ref,
      ...props,
      className: classNames(className, bsPrefix, size && `${bsPrefix}-${size}`, hasValidation && 'has-validation')
    })
  });
});
InputGroup.displayName = 'InputGroup';
var InputGroup$1 = Object.assign(InputGroup, {
  Text: InputGroupText,
  Radio: InputGroupRadio,
  Checkbox: InputGroupCheckbox
});

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
  var inner = /*#__PURE__*/React__default.createElement(Form.Control, _extends({
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
    innerGroup = /*#__PURE__*/React__default.createElement(InputGroup$1, null, prefix && /*#__PURE__*/React__default.createElement(InputGroup$1.Text, null, TextOrIcon(prefix)), inner, postfix && /*#__PURE__*/React__default.createElement(InputGroup$1.Text, null, TextOrIcon(postfix)));
  }
  var useFloatingLabels = floatingLabel && !needsGroup;
  return /*#__PURE__*/React__default.createElement(Form.Group, {
    className: className,
    "data-lf-field-name": name
  }, useFloatingLabels && /*#__PURE__*/React__default.createElement(FloatingLabel, {
    label: label
  }, innerGroup), !useFloatingLabels && /*#__PURE__*/React__default.createElement(Form.Label, null, label, required && /*#__PURE__*/React__default.createElement(RequiredIcon, null)), !useFloatingLabels && innerGroup, hint && !error && /*#__PURE__*/React__default.createElement(Form.Text, null, hint), _isString(error) && !_isEmpty(error) && /*#__PURE__*/React__default.createElement(Form.Control.Feedback, {
    type: "invalid"
  }, error));
};

export { BootstrapGenericInput as B };
