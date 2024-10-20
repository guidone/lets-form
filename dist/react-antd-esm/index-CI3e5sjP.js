/* LetsForm react-antd v0.11.3 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, a as _extends, f as _omit, e as i18nOptions } from './index-mmT6Qy9p.js';
import React, { useCallback } from 'react';
import { Radio, Space, Form } from 'antd';
import 'react-hook-form';

var _excluded = ["name", "label", "hint", "value", "size", "placeholder", "showCount", "tooltip", "disabled", "readOnly", "required", "options", "maxLength", "inline", "error", "prefix", "postfix", "allowClear", "bordered", "onChange", "onBlur", "width", "optionType"];
var RadioGroup = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    size = _ref.size;
    _ref.placeholder;
    _ref.showCount;
    var _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    options = _ref.options;
    _ref.maxLength;
    var inline = _ref.inline,
    error = _ref.error;
    _ref.prefix;
    _ref.postfix;
    _ref.allowClear;
    _ref.bordered;
    var onChange = _ref.onChange;
    _ref.onBlur;
    _ref.width;
    var optionType = _ref.optionType,
    rest = _objectWithoutProperties(_ref, _excluded);
  var handleChange = useCallback(function (e) {
    return onChange(e.target.value);
  }, [onChange]);
  var ctrl;
  if (inline) {
    ctrl = /*#__PURE__*/React.createElement(Radio.Group, _extends({
      onChange: handleChange,
      defaultValue: value,
      disabled: disabled,
      readOnly: readOnly,
      options: options,
      optionType: optionType,
      size: size
    }, _omit(rest, 'lfFramework', 'lfComponent')));
  } else {
    ctrl = /*#__PURE__*/React.createElement(Radio.Group, _extends({
      onChange: handleChange,
      defaultValue: value,
      disabled: disabled,
      readOnly: readOnly,
      optionType: optionType,
      size: size
    }, _omit(rest, 'lfFramework', 'lfComponent')), /*#__PURE__*/React.createElement(Space, {
      direction: "vertical"
    }, (options !== null && options !== void 0 ? options : []).map(function (_ref2) {
      var value = _ref2.value,
        label = _ref2.label;
      return /*#__PURE__*/React.createElement(Radio, {
        key: value,
        value: value
      }, label);
    })));
  }
  return /*#__PURE__*/React.createElement(Form.Item, {
    "data-lf-field-name": name,
    className: "lf-control-radio-group",
    label: label,
    name: name,
    help: error != null ? error : hint && !tooltip ? hint : undefined,
    required: required,
    tooltip: tooltip && hint,
    hasFeedback: error != null,
    validateStatus: error ? 'error' : undefined,
    valuePropName: null
  }, ctrl);
}, ['label', 'hint', 'placeholder'], {
  options: i18nOptions
});
lfLog('Loaded AntD.RadioGroup');

export { RadioGroup as default };
