/* LetsForm react-antd v0.12.11 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, a as _extends, m as makeClassName, p as passRest } from './index-BFQ4VbFL.js';
import React from 'react';
import { Form, Switch } from 'antd';

var _excluded = ["name", "label", "hint", "value", "size", "placeholder", "showCount", "tooltip", "disabled", "readOnly", "required", "maxLength", "error", "prefix", "lfLocale", "postfix", "allowClear", "bordered", "onChange", "onBlur", "width", "checkedChildren", "unCheckedChildren", "className"];
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
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Form.Item, _extends({}, makeClassName('toggle', name, className), {
    label: label,
    name: name,
    help: error != null ? error : hint && !tooltip ? hint : undefined,
    required: required,
    tooltip: tooltip && hint,
    hasFeedback: error != null,
    validateStatus: error ? 'error' : undefined,
    valuePropName: "checked"
  }), /*#__PURE__*/React.createElement(Switch, _extends({
    defaultChecked: value,
    readOnly: readOnly,
    onChange: onChange,
    onBlur: onBlur,
    disabled: disabled,
    size: size,
    checkedChildren: checkedChildren,
    unCheckedChildren: unCheckedChildren
  }, passRest(rest))));
}, ['label', 'hint', 'checkedChildren', 'unCheckedChildren']);
lfLog('Loaded AntD.Toggle');

export { Toggle as default };
