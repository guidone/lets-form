/* LetsForm Generator v0.8.1 - ESM */
import { I as I18N, l as lfLog, a as _objectWithoutProperties, k as _isArray, d as _slicedToArray, E as _toConsumableArray, b as _extends, p as passRest, i as i18nOptions } from './index-CnkI2zKc.js';
import React, { useState, useCallback } from 'react';
import { Input, Stack, Checkbox } from '@mantine/core';
import 'react-hook-form';

var _excluded = ["name", "label", "hint", "value", "placeholder", "plaintext", "tooltip", "disabled", "readOnly", "required", "error", "onChange", "onBlur", "size", "radius", "color", "iconColor", "labelPosition", "options"];
var CheckboxGroup = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value;
    _ref.placeholder;
    _ref.plaintext;
    _ref.tooltip;
    var _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    error = _ref.error,
    onChange = _ref.onChange;
    _ref.onBlur;
    var size = _ref.size,
    radius = _ref.radius,
    color = _ref.color,
    iconColor = _ref.iconColor,
    labelPosition = _ref.labelPosition,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState(_isArray(value) ? value : value ? String().split(',') : []),
    _useState2 = _slicedToArray(_useState, 2),
    selected = _useState2[0],
    setSelected = _useState2[1];
  var handleChange = useCallback(function (e) {
    var newValue;
    if (e.target.checked) {
      newValue = [].concat(_toConsumableArray(selected), [e.target.value]);
    } else {
      newValue = selected.filter(function (value) {
        return value !== e.target.value;
      });
    }
    setSelected(newValue);
    onChange(newValue);
  }, [onChange]);
  return /*#__PURE__*/React.createElement("div", {
    "data-lf-field-name": name,
    className: "lf-control-checkbox-group"
  }, label && /*#__PURE__*/React.createElement(Input.Label, {
    required: required
  }, label), /*#__PURE__*/React.createElement(Stack, {
    gap: "xs",
    style: {
      marginTop: 'var(--lf-field-margin-top)',
      marginBottom: 'var(--lf-field-margin-top)'
    }
  }, (options !== null && options !== void 0 ? options : []).map(function (item) {
    return /*#__PURE__*/React.createElement(Checkbox, _extends({
      key: item.value,
      value: item.value,
      label: item.label,
      disabled: disabled,
      readOnly: readOnly,
      onChange: handleChange,
      checked: selected.includes(item.value),
      description: item.description,
      size: size,
      radius: radius,
      color: color,
      iconColor: iconColor,
      labelPosition: labelPosition
    }, passRest(rest, ['description'])), label);
  })), hint && /*#__PURE__*/React.createElement(Input.Description, null, hint), error && /*#__PURE__*/React.createElement(Input.Error, null, error));
}, ['label', 'hint', 'placeholder'], {
  options: i18nOptions
});
lfLog('Loaded Mantine.CheckboxGroup');

export { CheckboxGroup as default };
