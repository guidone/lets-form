/* LetsForm react-mantine v0.12.17 - ESM */
import { I as I18N, _ as _objectWithoutProperties, c as _isString, a as _extends } from './index-DE4udUs4.js';
import React, { useCallback } from 'react';
import { B as BootstrapGenericInput } from './index-B830k2Ws.js';
import 'react-bootstrap/Form';
import 'react-bootstrap/InputGroup';
import 'react-bootstrap/FloatingLabel';
import './index-Dav70t7c.js';
import './index-D7H6yeoX.js';

var _excluded = ["onChange"];
var hasDecimals = function hasDecimals(f) {
  return _isString(f) && (f.includes(',') || f.includes('.'));
};

// DOC: https://react-bootstrap.github.io/forms/form-control/#form-control-props

var InputNumber = I18N(function (_ref) {
  var onChange = _ref.onChange,
    rest = _objectWithoutProperties(_ref, _excluded);
  var handleChange = useCallback(function (e) {
    var value = e.target.value;
    var parsed;
    if (_isString(value)) {
      if (value === '') {
        // void if the user deleted all chars
        parsed = null;
      } else if (hasDecimals(value)) {
        parsed = parseFloat(value);
      } else {
        parsed = parseInt(value, 10);
      }
      if (!isNaN(parsed)) {
        onChange(parsed);
      }
    }
  }, [onChange]);
  return /*#__PURE__*/React.createElement(BootstrapGenericInput, _extends({
    component: "input-number",
    onChange: handleChange,
    inputType: "number",
    step: "5"
  }, rest));
}, ['label', 'hint', 'placeholder']);

export { InputNumber as default };
