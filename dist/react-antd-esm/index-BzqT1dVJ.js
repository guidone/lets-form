/* LetsForm react-antd v0.9.3 - ESM */
import { s as styleInject, _ as _objectWithoutProperties, a as _extends, m as makeWidthStyle, p as passRest, j as filterOptions } from './index-BNPXBLI1.js';
import React from 'react';
import { Form, Select, Space } from 'antd';

var css_248z = ".lf-control-select-option-antd img {\n  width: 20px;\n  max-width: 20px;\n  max-height: 20px;\n  vertical-align: middle;\n  margin-top: -2px;\n}";
styleInject(css_248z);

var _excluded = ["name", "label", "hint", "value", "showCount", "tooltip", "required", "maxLength", "error", "prefix", "lfLocale", "postfix", "onChange", "onBlur", "width", "fullWidth", "options", "filterKey", "filterValue", "className", "showImageOptions"];
var AntdGenericSelect = function AntdGenericSelect(_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value;
    _ref.showCount;
    var _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required;
    _ref.maxLength;
    var error = _ref.error;
    _ref.prefix;
    _ref.lfLocale;
    _ref.postfix;
    var onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    width = _ref.width,
    fullWidth = _ref.fullWidth,
    options = _ref.options,
    filterKey = _ref.filterKey,
    filterValue = _ref.filterValue,
    className = _ref.className,
    _ref$showImageOptions = _ref.showImageOptions,
    showImageOptions = _ref$showImageOptions === void 0 ? false : _ref$showImageOptions,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Form.Item, {
    "data-lf-field-name": name,
    className: className,
    label: label,
    name: name,
    help: error != null ? error : hint && !tooltip ? hint : undefined,
    required: required,
    tooltip: tooltip && hint,
    hasFeedback: error != null,
    validateStatus: error ? 'error' : undefined
  }, /*#__PURE__*/React.createElement(Select, _extends({
    onChange: onChange,
    onBlur: onBlur,
    defaultValue: value,
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
};

export { AntdGenericSelect as A };
