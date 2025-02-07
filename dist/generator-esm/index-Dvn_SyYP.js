/* LetsForm Generator v0.12.9 - ESM */
import { s as styleInject, I as I18N, l as lfLog, _ as _objectWithoutProperties, m as makeClassName, a as _extends, b as _isString, p as passRest, i as i18nOptions } from './index-C3mTkrR6.js';
import React from 'react';
import { Form } from 'rsuite';
import { R as RequiredIcon } from './index-C6umoyOP.js';
import BiStateButton from './index-BEYJNEOp.js';
import { B as ButtonsToggleGroup } from './index-Bgux1Jg2.js';
import './index-CRwMBFqz.js';

var css_248z = ".lf-form-react-rsuite5 .lf-control-button-toggle-group .rs-form-control-wrapper {\n  display: block;\n}";
styleInject(css_248z);

var _excluded = ["name", "label", "hint", "value", "tooltip", "disabled", "required", "size", "error", "onChange", "options", "className"];
var RSuiteButtonsToggleGroup = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    size = _ref.size,
    error = _ref.error,
    onChange = _ref.onChange,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Form.Group, makeClassName('button-toggle-group', name, className), label && /*#__PURE__*/React.createElement(Form.ControlLabel, null, label, hint && tooltip && /*#__PURE__*/React.createElement(Form.HelpText, {
    tooltip: true
  }, hint), required && /*#__PURE__*/React.createElement(RequiredIcon, null)), /*#__PURE__*/React.createElement(Form.Control, _extends({
    ButtonComponent: BiStateButton,
    name: name,
    accepter: ButtonsToggleGroup,
    value: value,
    onChange: onChange,
    options: options,
    disabled: disabled,
    size: size,
    errorMessage: _isString(error) ? error : undefined
  }, passRest(rest))), hint && !tooltip && /*#__PURE__*/React.createElement(Form.HelpText, null, hint));
}, ['label', 'hint'], {
  options: i18nOptions
});
lfLog('Loaded RSuite5.ButtonsToggleGroup');

export { RSuiteButtonsToggleGroup as default };
