/* LetsForm react-rsuite5 v0.9.4 - ESM */
import { s as styleInject, I as I18N, l as lfLog, _ as _objectWithoutProperties, g as _slicedToArray, a as _isString, b as _extends, p as passRest } from './index-DpKM_8GA.js';
import React, { useState, useCallback } from 'react';
import { Form, Checkbox } from 'rsuite';
import { R as RSuite5FieldControl } from './index-cDTTgCy6-D4x1bGkI.js';
import 'react-hook-form';
import './index-DC6uVyk8.js';
import './index-BvswBXlW.js';
import './index-DcwatjKC.js';

/* LetsForm react-rsuite5 v0.9.3 - ESM */
var css_248z = ".lf-form-react-rsuite5 .lt-control-checkbox .rs-form-help-text {\n  align-items: inherit;\n  margin-top: -1px;\n  display: inline-block;\n  margin-left: 5px;\n}\n.lf-form-react-rsuite5 .lt-control-checkbox .rs-form-help-text svg {\n  margin-top: -2px;\n}";
styleInject(css_248z);
var _excluded = ["name", "label", "hint", "value", "tooltip", "indeterminate", "error", "onChange"];
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
  return /*#__PURE__*/React.createElement(Form.Group, {
    "data-lf-field-name": name,
    className: "lt-control-checkbox"
  }, /*#__PURE__*/React.createElement(RSuite5FieldControl, {
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
