/* LetsForm react-bootstrap v0.12.8 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, d as _slicedToArray, e as _toConsumableArray, m as makeClassName, a as _extends, g as _omit, b as _isString, c as _isEmpty, i as i18nOptions } from './index-CNflgBSb.js';
import React, { useState, useCallback } from 'react';
import Form from 'react-bootstrap/Form';
import { R as RequiredIcon } from './index-EtbJ35ag.js';

var _excluded = ["name", "label", "hint", "value", "disabled", "readOnly", "required", "inline", "reverse", "error", "onChange", "onBlur", "options", "className"];
var CheckboxGroupBootstrap = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled;
    _ref.readOnly;
    var _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    _ref$inline = _ref.inline,
    inline = _ref$inline === void 0 ? false : _ref$inline,
    _ref$reverse = _ref.reverse,
    reverse = _ref$reverse === void 0 ? false : _ref$reverse,
    error = _ref.error,
    onChange = _ref.onChange;
    _ref.onBlur;
    var _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState(value !== null && value !== void 0 ? value : []),
    _useState2 = _slicedToArray(_useState, 2),
    values = _useState2[0],
    setValues = _useState2[1];
  var handleChange = useCallback(function (e) {
    var newValues;
    if (values.includes(e.target.value)) {
      newValues = values.filter(function (value) {
        return value !== e.target.value;
      });
    } else {
      newValues = [].concat(_toConsumableArray(values), [e.target.value]);
    }
    setValues(newValues);
    onChange(newValues);
  }, [onChange, values]);
  return /*#__PURE__*/React.createElement(Form.Group, makeClassName('checkbox-group', name, className), /*#__PURE__*/React.createElement(Form.Label, null, label, required && /*#__PURE__*/React.createElement(RequiredIcon, null)), /*#__PURE__*/React.createElement("div", null, (options !== null && options !== void 0 ? options : []).map(function (_ref2, idx) {
    var value = _ref2.value,
      label = _ref2.label;
    return /*#__PURE__*/React.createElement(Form.Check, {
      type: "checkbox",
      key: value,
      reverse: reverse,
      inline: inline
    }, /*#__PURE__*/React.createElement(Form.Check.Input, _extends({
      disabled: disabled,
      id: "".concat(name, "_").concat(value),
      value: value,
      name: name,
      isInvalid: error != null,
      checked: values.includes(value),
      onChange: handleChange
    }, _omit(rest, 'lfFramework', 'lfComponent'))), label && /*#__PURE__*/React.createElement(Form.Check.Label, {
      htmlFor: "".concat(name, "_").concat(value)
    }, label), _isString(error) && !_isEmpty(error) && idx === options.length - 1 && /*#__PURE__*/React.createElement(Form.Control.Feedback, {
      type: "invalid"
    }, error));
  })), hint && /*#__PURE__*/React.createElement(Form.Text, null, hint), _isString(error) && !_isEmpty(error) && /*#__PURE__*/React.createElement(Form.Control.Feedback, {
    type: "invalid"
  }, error));
}, ['label', 'hint'], {
  options: i18nOptions
});
lfLog('Loaded ReactBootrap.CheckboxGroup');

export { CheckboxGroupBootstrap as default };
