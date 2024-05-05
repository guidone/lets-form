/* LetsForm react-rsuite5 v0.7.10 - ESM */
import { s as styleInject, D as LOCALES, I as I18N, l as lfLog, a as _objectWithoutProperties, m as _slicedToArray, _ as _isString, b as _extends, p as passRest } from './index-CN7S9eQn.js';
import React, { useState, useCallback } from 'react';
import Form from 'rsuite/Form';
import CheckPicker from 'rsuite/CheckPicker';
import { R as RequiredIcon } from './index-CZPPdDWK.js';
import { R as RSuite5FieldControl } from './index-BP62a5cr.js';
import 'rsuite/Whisper';
import 'rsuite/Popover';

var css_248z = ".lf-control-multiselect-language .btn-add-all {\n  padding-left: 5px;\n  font-size: 12px;\n}";
styleInject(css_248z);

var _excluded = ["name", "label", "hint", "value", "size", "placeholder", "tooltip", "disabled", "readOnly", "required", "error", "onChange", "onBlur", "placement", "appearance"];
var renderItem = function renderItem(label, item) {
  return /*#__PURE__*/React.createElement("div", null, label, " ", /*#__PURE__*/React.createElement("b", null, item.value));
};
var ALL_LOCALES = Object.keys(LOCALES['language-names']);
var LANGUAGES_OPTIONS = Object.keys(LOCALES['language-names']).map(function (lang) {
  return {
    value: lang,
    name: LOCALES['language-names'][lang][1],
    label: "".concat(LOCALES['language-names'][lang][1])
  };
});
var MultiselectLanguage = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    size = _ref.size,
    placeholder = _ref.placeholder,
    _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    error = _ref.error,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    placement = _ref.placement,
    appearance = _ref.appearance,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState(value),
    _useState2 = _slicedToArray(_useState, 2),
    locales = _useState2[0],
    setLocales = _useState2[1];
  var handleAddAll = useCallback(function (e) {
    e.preventDefault();
    setLocales(ALL_LOCALES);
    onChange(ALL_LOCALES);
  }, [onChange]);
  var handleChange = useCallback(function (value) {
    setLocales(value);
    onChange(value);
  }, [onChange]);
  return /*#__PURE__*/React.createElement(Form.Group, {
    "data-lf-field-name": name,
    className: "lf-control-multiselect-language"
  }, label && /*#__PURE__*/React.createElement(Form.ControlLabel, null, label, hint && tooltip && /*#__PURE__*/React.createElement(Form.HelpText, {
    tooltip: true
  }, hint), required && /*#__PURE__*/React.createElement(RequiredIcon, null)), /*#__PURE__*/React.createElement(RSuite5FieldControl, {
    errorMessage: _isString(error) ? error : undefined
  }, /*#__PURE__*/React.createElement(CheckPicker, _extends({
    appearance: appearance !== null && appearance !== void 0 ? appearance : undefined,
    name: name,
    value: locales,
    onChange: handleChange,
    readOnly: readOnly,
    onBlur: onBlur,
    placement: placement,
    errorMessage: _isString(error) ? error : undefined,
    disabled: disabled,
    size: size,
    placeholder: placeholder,
    data: LANGUAGES_OPTIONS,
    block: true,
    renderMenuItem: renderItem,
    searchable: true,
    cleanable: true
  }, passRest(rest)))), !(Array.isArray(locales) && locales.length === ALL_LOCALES.length) && /*#__PURE__*/React.createElement("div", {
    className: "btn-add-all"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: handleAddAll
  }, "add all locales")), hint && !tooltip && /*#__PURE__*/React.createElement(Form.HelpText, null, hint));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded RSuite5.MultiselectLanguage');

export { MultiselectLanguage as default };
