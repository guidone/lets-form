/* LetsForm react-bootstrap v0.12.1 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, h as isValidDate, a as _extends } from './index-aok_96wx.js';
import React, { useCallback } from 'react';
import { B as BootstrapGenericInput } from './index-C2zrS-Fj.js';
import 'react-hook-form';
import 'react-bootstrap/Form';
import 'react-bootstrap/InputGroup';
import 'react-bootstrap/FloatingLabel';
import './index-DSBwRzDa.js';

var _excluded = ["onChange", "value"];

// DOC: https://react-bootstrap.github.io/forms/form-control/#form-control-props

var DateTime = I18N(function (_ref) {
  var onChange = _ref.onChange,
    value = _ref.value,
    rest = _objectWithoutProperties(_ref, _excluded);
  var handleChange = useCallback(function (e) {
    onChange(e.target.value);
  }, [onChange]);
  var currentDate = value;
  if (isValidDate(value)) {
    // only keep iso up to the minutes digits
    var match = value.toISOString().match(/(.*?T[0-9]{1,2}:[0-9]{1,2})/gm);
    if (match != null) {
      currentDate = match[0];
    }
  }
  return /*#__PURE__*/React.createElement(BootstrapGenericInput, _extends({
    className: "lf-control-date",
    inputType: "datetime-local",
    component: "datetime",
    value: currentDate,
    onChange: handleChange
  }, rest));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded ReactBootrap.DateTime');

export { DateTime as default };
