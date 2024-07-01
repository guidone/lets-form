/* LetsForm react-rsuite5 v0.9.0 - ESM */
import { I as I18N, l as lfLog, a as _objectWithoutProperties, n as _slicedToArray, C as _objectSpread2 } from './index-mf2gm_7w.js';
import React, { useState, useCallback } from 'react';
import { Form, RadioTileGroup, RadioTile } from 'rsuite';
import { R as RequiredIcon } from './index-v2MJ9eMz.js';
import 'react-hook-form';

var _excluded = ["name", "label", "hint", "value", "placeholder", "plaintext", "inline", "iconWidth", "iconHeight", "tooltip", "disabled", "required", "error", "onChange", "onBlur", "options", "initalOption"];
var RadioTileRSuite = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value;
    _ref.placeholder;
    _ref.plaintext;
    var _ref$inline = _ref.inline,
    inline = _ref$inline === void 0 ? true : _ref$inline,
    _ref$iconWidth = _ref.iconWidth,
    iconWidth = _ref$iconWidth === void 0 ? 24 : _ref$iconWidth,
    _ref$iconHeight = _ref.iconHeight,
    iconHeight = _ref$iconHeight === void 0 ? 24 : _ref$iconHeight,
    _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required;
    _ref.error;
    var onChange = _ref.onChange;
    _ref.onBlur;
    var _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    initalOption = _ref.initalOption;
    _objectWithoutProperties(_ref, _excluded);
  var initialValue = value || initalOption;
  var _useState = useState(initialValue),
    _useState2 = _slicedToArray(_useState, 2),
    currentValue = _useState2[0],
    setCurrentValue = _useState2[1];
  var handleChange = useCallback(function (value) {
    setCurrentValue(value);
    onChange(value);
  }, [onChange]);
  return /*#__PURE__*/React.createElement(Form.Group, {
    className: "lf-control-input-text",
    "data-lf-field-name": name
  }, label && /*#__PURE__*/React.createElement(Form.ControlLabel, null, label, hint && tooltip && /*#__PURE__*/React.createElement(Form.HelpText, {
    tooltip: true
  }, hint), required && /*#__PURE__*/React.createElement(RequiredIcon, null)), /*#__PURE__*/React.createElement(RadioTileGroup, {
    value: currentValue,
    onChange: handleChange,
    inline: inline,
    disabled: disabled
  }, (options || []).map(function (option) {
    return /*#__PURE__*/React.createElement(RadioTile, {
      key: option.value,
      label: option.label,
      value: option.value,
      icon: option.icon && /*#__PURE__*/React.createElement("img", {
        src: option.icon,
        width: iconWidth,
        height: iconHeight
      })
    }, option.description);
  })), hint && !tooltip && /*#__PURE__*/React.createElement(Form.HelpText, null, hint));
}, ['label', 'hint'], {
  options: function options(value, i18n) {
    return (value !== null && value !== void 0 ? value : []).filter(function (value) {
      return value != null;
    }).map(function (value) {
      return _objectSpread2(_objectSpread2({}, value), {}, {
        label: i18n(value.label),
        description: i18n(value.description)
      });
    });
  }
});
lfLog('Loaded RSuite.RadioTile');

export { RadioTileRSuite as default };
