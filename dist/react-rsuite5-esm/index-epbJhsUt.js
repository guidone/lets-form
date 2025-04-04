/* LetsForm react-rsuite5 v0.12.16 - ESM */
import { s as styleInject, I as I18N, l as lfLog, _ as _objectWithoutProperties, o as _slicedToArray, m as makeClassName, b as _isString, a as _extends, p as passRest } from './index-DjVNBmcE.js';
import React, { useState, useCallback } from 'react';
import { Form, Checkbox } from 'rsuite';
import { R as RSuite5FieldControl } from './index-Dbtudpld.js';

var css_248z = ".lf-form-react-rsuite5 .lf-control-checkbox .rs-form-help-text {\n  align-items: inherit;\n  margin-top: -1px;\n  display: inline-block;\n  margin-left: 5px;\n}\n.lf-form-react-rsuite5 .lf-control-checkbox .rs-form-help-text svg {\n  margin-top: -2px;\n}";
styleInject(css_248z);

var _excluded = ["name", "label", "hint", "value", "tooltip", "indeterminate", "error", "onChange", "className"];
var CheckboxRSuite = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
    indeterminate = _ref.indeterminate,
    error = _ref.error,
    onChange = _ref.onChange,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState(value !== null && value !== void 0 ? value : null),
    _useState2 = _slicedToArray(_useState, 2),
    isChecked = _useState2[0],
    setIsChecked = _useState2[1];
  var handleChange = useCallback(function (valueType, checked) {
    var newValue;
    if (isChecked === true) {
      newValue = false;
    }
    if (isChecked === false) {
      if (indeterminate) {
        newValue = null;
      } else {
        newValue = true;
      }
    } else if (isChecked === null) {
      newValue = true;
    }
    onChange(newValue);
    setIsChecked(newValue);
  }, [onChange, indeterminate, isChecked]);
  return /*#__PURE__*/React.createElement(Form.Group, makeClassName('checkbox', name, className), /*#__PURE__*/React.createElement(RSuite5FieldControl, {
    errorMessage: _isString(error) ? error : undefined
  }, /*#__PURE__*/React.createElement(Checkbox, _extends({
    indeterminate: indeterminate && isChecked === null,
    name: name,
    checked: isChecked,
    onChange: handleChange
  }, passRest(rest)), label, hint && tooltip && /*#__PURE__*/React.createElement(Form.HelpText, {
    tooltip: true
  }, hint))), hint && !tooltip && /*#__PURE__*/React.createElement(Form.HelpText, null, hint));
}, ['label', 'hint']);
lfLog('Loaded RSuite5.Checkbox');

export { CheckboxRSuite as default };
