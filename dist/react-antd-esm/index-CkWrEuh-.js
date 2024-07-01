/* LetsForm react-antd v0.9.0 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties } from './index-JWzQxIpS.js';
import React, { useCallback } from 'react';
import { Form, Checkbox } from 'antd';
import 'react-hook-form';

var _excluded = ["name", "label", "hint", "value", "size", "placeholder", "showCount", "tooltip", "disabled", "readOnly", "required", "maxLength", "error", "prefix", "postfix", "allowClear", "bordered", "onChange", "onBlur", "width", "checkedChildren", "unCheckedChildren"];
var CheckboxAntd = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value;
    _ref.size;
    _ref.placeholder;
    _ref.showCount;
    var _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly;
    _ref.required;
    _ref.maxLength;
    var error = _ref.error;
    _ref.prefix;
    _ref.postfix;
    _ref.allowClear;
    _ref.bordered;
    var onChange = _ref.onChange,
    onBlur = _ref.onBlur;
    _ref.width;
    _ref.checkedChildren;
    _ref.unCheckedChildren;
    _objectWithoutProperties(_ref, _excluded);
  var handleChange = useCallback(function (e) {
    return onChange(e.target.checked);
  }, [onChange]);
  return /*#__PURE__*/React.createElement(Form.Item, {
    name: name,
    className: "lt-control-checkbox",
    "data-lf-field-name": name,
    help: error != null ? error : hint && !tooltip ? hint : undefined,
    hasFeedback: error != null,
    validateStatus: error ? 'error' : undefined
  }, /*#__PURE__*/React.createElement(Checkbox, {
    readOnly: readOnly,
    onChange: handleChange,
    onBlur: onBlur,
    checked: value,
    disabled: disabled
  }, label));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded AntD.Checkbox');

export { CheckboxAntd as default };
