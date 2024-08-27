/* LetsForm Generator v0.10.4 - ESM */
import { s as styleInject, I as I18N, l as lfLog, a as _objectWithoutProperties, b as _extends, _ as _isString, p as passRest, i as i18nOptions } from './index-6qJf7V-N.js';
import React from 'react';
import { Form } from 'rsuite';
import { R as RequiredIcon } from './index-BfEPZ2mR.js';
import BiStateButton from './index-DXrOU6kv.js';
import { B as ButtonsToggleGroup } from './index-ClZJKWZI.js';
import 'react-hook-form';
import './index-C0axSh9Q.js';

var css_248z = ".lf-form-react-rsuite5 .lf-control-button-toggle-group .rs-form-control-wrapper {\n  display: block;\n}";
styleInject(css_248z);

var _excluded = ["name", "label", "hint", "value", "tooltip", "disabled", "required", "size", "error", "onChange", "options"];
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
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Form.Group, {
    "data-lf-field-name": name,
    className: "lf-control-button-toggle-group"
  }, label && /*#__PURE__*/React.createElement(Form.ControlLabel, null, label, hint && tooltip && /*#__PURE__*/React.createElement(Form.HelpText, {
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
