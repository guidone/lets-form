/* LetsForm react-mantine v0.12.17 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, w as isValidDate, a as _extends } from './index-DE4udUs4.js';
import React, { useCallback } from 'react';
import { B as BootstrapGenericInput } from './index-B830k2Ws.js';
import 'react-bootstrap/Form';
import 'react-bootstrap/InputGroup';
import 'react-bootstrap/FloatingLabel';
import './index-Dav70t7c.js';
import './index-D7H6yeoX.js';

var _excluded = ["onChange", "value"];

// DOC: https://react-bootstrap.github.io/forms/form-control/#form-control-props

var Date = I18N(function (_ref) {
  var onChange = _ref.onChange,
    value = _ref.value,
    rest = _objectWithoutProperties(_ref, _excluded);
  var handleChange = useCallback(function (e) {
    return onChange(e.target.value);
  }, [onChange]);
  var currentDate = value;
  if (isValidDate(value)) {
    // only take 2023-11-12
    currentDate = value.toISOString().split('T')[0];
  }
  return /*#__PURE__*/React.createElement(BootstrapGenericInput, _extends({
    inputType: "date",
    component: "date",
    value: currentDate,
    onChange: handleChange
  }, rest));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded ReactBootrap.Date');

export { Date as default };
