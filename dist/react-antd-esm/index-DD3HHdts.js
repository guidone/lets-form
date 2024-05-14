/* LetsForm react-antd v0.7.13-beta-4 - ESM */
import { s as styleInject, I as I18N, l as lfLog, _ as _objectWithoutProperties, a as _extends, m as makeWidthStyle, p as passRest, f as filterOptions, g as i18nOptions } from './index-Bs0X0y_O.js';
import React from 'react';
import { Form, Select, Space } from 'antd';
import 'react-hook-form';

var css_248z = ".lf-control-select-option-antd img {\n  width: 20px;\n  max-width: 20px;\n  max-height: 20px;\n  vertical-align: middle;\n  margin-top: -2px;\n}";
styleInject(css_248z);

var _excluded = ["name", "label", "hint", "value", "size", "placeholder", "showCount", "tooltip", "disabled", "readOnly", "required", "maxLength", "error", "prefix", "lfLocale", "postfix", "allowClear", "bordered", "onChange", "onBlur", "width", "fullWidth", "popupMatchSelectWidth", "showSearch", "placement", "showArrow", "listHeight", "virtual", "options", "filterKey", "filterValue", "showImageOptions"];
var SelectAntd = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    size = _ref.size,
    placeholder = _ref.placeholder;
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
    var allowClear = _ref.allowClear,
    bordered = _ref.bordered,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    width = _ref.width,
    fullWidth = _ref.fullWidth,
    popupMatchSelectWidth = _ref.popupMatchSelectWidth,
    showSearch = _ref.showSearch,
    placement = _ref.placement,
    showArrow = _ref.showArrow,
    listHeight = _ref.listHeight,
    virtual = _ref.virtual,
    options = _ref.options,
    filterKey = _ref.filterKey,
    filterValue = _ref.filterValue,
    _ref$showImageOptions = _ref.showImageOptions,
    showImageOptions = _ref$showImageOptions === void 0 ? false : _ref$showImageOptions,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Form.Item, {
    "data-lf-field-name": name,
    className: "lf-control-select",
    label: label,
    name: name,
    help: error != null ? error : hint && !tooltip ? hint : undefined,
    required: required,
    tooltip: tooltip && hint,
    hasFeedback: error != null,
    validateStatus: error ? 'error' : undefined
  }, /*#__PURE__*/React.createElement(Select, _extends({
    placeholder: placeholder,
    readOnly: readOnly,
    disabled: disabled,
    onChange: onChange,
    onBlur: onBlur,
    value: value,
    size: size,
    bordered: bordered,
    listHeight: listHeight,
    placement: placement,
    showArrow: showArrow,
    virtual: virtual,
    showSearch: showSearch,
    allowClear: allowClear,
    popupMatchSelectWidth: popupMatchSelectWidth,
    style: makeWidthStyle(fullWidth, width)
  }, passRest(rest)), (filterOptions(options, filterValue, filterKey) || []).map(function (option) {
    return /*#__PURE__*/React.createElement(Select.Option, {
      key: option.value,
      value: option.value,
      label: option.label
    }, option.image && showImageOptions && /*#__PURE__*/React.createElement(Space, {
      className: "lf-control-select-option-antd",
      align: "center"
    }, /*#__PURE__*/React.createElement("img", {
      src: option.image,
      alt: option.label
    }), option.label));
  })));
}, ['label', 'hint', 'placeholder'], {
  options: i18nOptions
});
lfLog('Loaded AntD.Select');

export { SelectAntd as default };
