/* LetsForm Generator v0.13.0 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, j as isValidDate, a as _extends } from './index-Df19TMKV.js';
import React, { useCallback } from 'react';
import { B as BootstrapGenericInput } from './index-3gf6H3Db.js';
import 'react-bootstrap/Form';
import 'react-bootstrap/InputGroup';
import 'react-bootstrap/FloatingLabel';
import './index-DvfyVnjt.js';
import './index-DlQ79qgj.js';

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
