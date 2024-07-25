/* LetsForm react-rsuite5 v0.9.5 - ESM */
import { I as I18N, l as lfLog, a as _objectWithoutProperties, m as makeWidthStyle, _ as _isString, b as _extends, p as passRest, i as i18nOptions } from './index-CYJiGipx.js';
import React from 'react';
import { Form, TagPicker, CheckPicker } from 'rsuite';
import { R as RequiredIcon } from './index-BSRGt_hk.js';
import { R as RSuite5FieldControl } from './index-CJYOLjUg.js';
import 'react-hook-form';

var _excluded = ["name", "label", "hint", "value", "size", "placeholder", "options", "tooltip", "disabled", "readOnly", "required", "error", "block", "searchable", "cleanable", "onChange", "onBlur", "placement", "appearance", "fullWidth", "multiselectMode", "width"];
var Multiselect = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    size = _ref.size,
    placeholder = _ref.placeholder,
    options = _ref.options,
    _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    error = _ref.error,
    _ref$block = _ref.block,
    block = _ref$block === void 0 ? false : _ref$block,
    _ref$searchable = _ref.searchable,
    searchable = _ref$searchable === void 0 ? false : _ref$searchable,
    _ref$cleanable = _ref.cleanable,
    cleanable = _ref$cleanable === void 0 ? false : _ref$cleanable,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    placement = _ref.placement,
    appearance = _ref.appearance,
    fullWidth = _ref.fullWidth,
    multiselectMode = _ref.multiselectMode,
    width = _ref.width,
    rest = _objectWithoutProperties(_ref, _excluded);
  var Component = multiselectMode === 'tag' ? TagPicker : CheckPicker;
  return /*#__PURE__*/React.createElement(Form.Group, {
    "data-lf-field-name": name,
    className: "lf-control-multiselect",
    style: makeWidthStyle(fullWidth, width)
  }, label && /*#__PURE__*/React.createElement(Form.ControlLabel, null, label, hint && tooltip && /*#__PURE__*/React.createElement(Form.HelpText, {
    tooltip: true
  }, hint), required && /*#__PURE__*/React.createElement(RequiredIcon, null)), /*#__PURE__*/React.createElement(RSuite5FieldControl, {
    errorMessage: _isString(error) ? error : undefined
  }, /*#__PURE__*/React.createElement(Component, _extends({
    appearance: appearance !== null && appearance !== void 0 ? appearance : undefined,
    name: name,
    value: value,
    onChange: onChange,
    readOnly: readOnly,
    onBlur: onBlur,
    placement: placement,
    errorMessage: _isString(error) ? error : undefined,
    disabled: disabled,
    size: size,
    placeholder: placeholder,
    data: options || [],
    block: block,
    style: makeWidthStyle(fullWidth, width),
    searchable: searchable,
    cleanable: cleanable
  }, passRest(rest)))), hint && !tooltip && /*#__PURE__*/React.createElement(Form.HelpText, null, hint));
}, ['label', 'hint', 'placeholder'], {
  options: i18nOptions
});
lfLog('Loaded RSuite5.Multiselect');

export { Multiselect as default };
