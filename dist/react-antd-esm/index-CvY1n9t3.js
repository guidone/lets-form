/* LetsForm react-antd v0.7.12 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, a as _extends, k as _isNumber, h as _omit, g as i18nOptions } from './index-R-XxtuQE.js';
import React from 'react';
import { Form, Select } from 'antd';
import 'react-hook-form';

var _excluded = ["name", "label", "hint", "value", "size", "placeholder", "showCount", "tooltip", "disabled", "readOnly", "required", "maxLength", "error", "prefix", "postfix", "allowClear", "bordered", "onChange", "onBlur", "width", "showSearch", "placement", "showArrow", "listHeight", "virtual", "maxTagCount", "maxTagPlaceholder", "maxTagTextLength"];
var Multiselect = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    size = _ref.size,
    placeholder = _ref.placeholder;
    _ref.showCount;
    var _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip;
    _ref.disabled;
    var _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required;
    _ref.maxLength;
    var error = _ref.error;
    _ref.prefix;
    _ref.postfix;
    var allowClear = _ref.allowClear,
    bordered = _ref.bordered,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    width = _ref.width,
    showSearch = _ref.showSearch,
    placement = _ref.placement,
    showArrow = _ref.showArrow,
    listHeight = _ref.listHeight,
    virtual = _ref.virtual,
    maxTagCount = _ref.maxTagCount,
    maxTagPlaceholder = _ref.maxTagPlaceholder,
    maxTagTextLength = _ref.maxTagTextLength,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Form.Item, {
    label: label,
    "data-lf-field-name": name,
    className: "lf-control-multiselect",
    name: name,
    help: error != null ? error : hint && !tooltip ? hint : undefined,
    required: required,
    tooltip: tooltip && hint,
    hasFeedback: error != null,
    validateStatus: error ? 'error' : undefined
  }, /*#__PURE__*/React.createElement(Select, _extends({
    placeholder: placeholder,
    readOnly: readOnly,
    onChange: onChange,
    onBlur: onBlur,
    value: value,
    size: size,
    mode: "multiple"
    //mode="tags"
    ,
    bordered: bordered,
    listHeight: listHeight,
    placement: placement,
    showArrow: showArrow,
    virtual: virtual,
    showSearch: showSearch,
    allowClear: allowClear,
    maxTagCount: maxTagCount,
    maxTagPlaceholder: maxTagPlaceholder,
    maxTagTextLength: maxTagTextLength
    // tokenSeparators={["-", " "]} only for tags
    ,
    style: _isNumber(width) ? {
      width: "".concat(width, "px")
    } : undefined
  }, _omit(rest, 'lfFramework', 'lfComponent'))));
}, ['label', 'hint', 'placeholder'], {
  options: i18nOptions
});
lfLog('Loaded AntD.MultiSelect');

export { Multiselect as default };
