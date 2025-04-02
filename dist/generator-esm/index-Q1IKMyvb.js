/* LetsForm Generator v0.12.15 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, a as _extends, m as makeClassName, b as _isString, p as passRest } from './index-7LChbcm9.js';
import React from 'react';
import { Form, Toggle } from 'rsuite';
import { R as RequiredIcon } from './index-DbDdmXWk.js';
import { R as RSuite5FieldControl } from './index-CZ6ejg3n.js';

var _excluded = ["name", "label", "hint", "value", "size", "tooltip", "disabled", "required", "onChange", "checkedChildren", "unCheckedChildren", "className", "error"];
var ToggleInput = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    size = _ref.size,
    _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    onChange = _ref.onChange,
    checkedChildren = _ref.checkedChildren,
    unCheckedChildren = _ref.unCheckedChildren,
    className = _ref.className,
    error = _ref.error,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Form.Group, _extends({
    controlId: name
  }, makeClassName('toggle', name, className)), label && /*#__PURE__*/React.createElement(Form.ControlLabel, null, label, hint && tooltip && /*#__PURE__*/React.createElement(Form.HelpText, {
    tooltip: true
  }, hint), required && /*#__PURE__*/React.createElement(RequiredIcon, null)), /*#__PURE__*/React.createElement(RSuite5FieldControl, {
    errorMessage: _isString(error) ? error : undefined
  }, /*#__PURE__*/React.createElement(Toggle, _extends({
    name: name,
    checked: value,
    onChange: onChange,
    disabled: disabled,
    unCheckedChildren: unCheckedChildren && unCheckedChildren !== '' ? unCheckedChildren : undefined,
    checkedChildren: checkedChildren && checkedChildren !== '' ? checkedChildren : undefined,
    size: size
  }, passRest(rest)))), hint && !tooltip && /*#__PURE__*/React.createElement(Form.HelpText, null, hint));
}, ['label', 'hint', 'checkedChildren', 'unCheckedChildren']);
lfLog('Loaded RSuite5.ToggleInput');

export { ToggleInput as default };
