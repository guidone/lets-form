/* LetsForm React-Mantine v0.7.9-beta-1 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, n as _slicedToArray, a as _extends, p as passRest, i as i18nOptions } from './index-Tk51PyZK.js';
import React, { useState, useCallback } from 'react';
import { Radio, Stack } from '@mantine/core';

var _excluded = ["name", "label", "hint", "value", "placeholder", "plaintext", "tooltip", "disabled", "readOnly", "required", "error", "onChange", "onBlur", "size", "radius", "color", "iconColor", "labelPosition", "options"];

// TODO broken preview in mantine, add ensureframework

var RadioGroup = I18N(function (_ref) {
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
  var _useState = useState(value),
    _useState2 = _slicedToArray(_useState, 2);
    _useState2[0];
    var setSelected = _useState2[1];
  var handleChange = useCallback(function (e) {
    setSelected(e.target.value);
    onChange(e.target.value);
  }, [onChange]);
  return /*#__PURE__*/React.createElement("div", {
    "data-lf-field-name": name,
    className: "lf-control-radio-group"
  }, /*#__PURE__*/React.createElement(Radio.Group, {
    name: name,
    label: label,
    description: hint,
    withAsterisk: required,
    error: error,
    inputWrapperOrder: ['label', 'input', 'description', 'error']
  }, /*#__PURE__*/React.createElement(Stack, {
    gap: "xs",
    style: {
      marginTop: 'var(--lf-field-margin-top)',
      marginBottom: 'var(--lf-field-margin-top)'
    }
  }, (options !== null && options !== void 0 ? options : []).map(function (item) {
    return /*#__PURE__*/React.createElement(Radio, _extends({
      key: item.value,
      value: item.value,
      label: item.label,
      disabled: disabled,
      readOnly: readOnly,
      onChange: handleChange,
      checked: item.value === value,
      description: item.description,
      size: size,
      radius: radius,
      color: color,
      iconColor: iconColor,
      labelPosition: labelPosition
    }, passRest(rest, ['description'])));
  }))));
}, ['label', 'hint', 'placeholder'], {
  options: i18nOptions
});
lfLog('Loaded Mantine.RadioGroup');

export { RadioGroup as default };
