/* LetsForm react-antd v0.7.11 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, a as _extends, p as passRest } from './index-CbYhbWGD.js';
import React, { useCallback } from 'react';
import { Form, Switch } from 'antd';

var _excluded = ["name", "label", "hint", "value", "size", "placeholder", "showCount", "tooltip", "disabled", "readOnly", "required", "maxLength", "error", "prefix", "lfLocale", "postfix", "allowClear", "bordered", "onChange", "onBlur", "width", "checkedChildren", "unCheckedChildren"];
var Toggle = I18N(function (_ref) {
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
    required = _ref$required === void 0 ? false : _ref$required;
    _ref.maxLength;
    var error = _ref.error;
    _ref.prefix;
    _ref.lfLocale;
    _ref.postfix;
    _ref.allowClear;
    _ref.bordered;
    var onChange = _ref.onChange,
    onBlur = _ref.onBlur;
    _ref.width;
    var checkedChildren = _ref.checkedChildren,
    unCheckedChildren = _ref.unCheckedChildren,
    rest = _objectWithoutProperties(_ref, _excluded);
  var handleChange = useCallback(function (checked) {
    return onChange(checked);
  }, [onChange]);
  return /*#__PURE__*/React.createElement(Form.Item, {
    "data-lf-field-name": name,
    className: "lf-control-toggle",
    label: label,
    name: name,
    help: error != null ? error : hint && !tooltip ? hint : undefined,
    required: required,
    tooltip: tooltip && hint,
    hasFeedback: error != null,
    validateStatus: error ? 'error' : undefined
  }, /*#__PURE__*/React.createElement(Switch, _extends({
    defaultChecked: value,
    readOnly: readOnly,
    onChange: handleChange,
    onBlur: onBlur,
    disabled: disabled,
    size: size,
    checkedChildren: checkedChildren,
    unCheckedChildren: unCheckedChildren
  }, passRest(rest))));
}, ['label', 'hint', 'checkedChildren', 'unCheckedChildren']);
lfLog('Loaded AntD.Toggle');

export { Toggle as default };
