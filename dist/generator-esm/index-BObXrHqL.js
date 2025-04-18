/* LetsForm Generator v0.13.0 - ESM */
import { I as I18N, _ as _objectWithoutProperties, b as _isString, a as _extends } from './index-Df19TMKV.js';
import React, { useCallback } from 'react';
import { B as BootstrapGenericInput } from './index-3gf6H3Db.js';
import 'react-bootstrap/Form';
import 'react-bootstrap/InputGroup';
import 'react-bootstrap/FloatingLabel';
import './index-DvfyVnjt.js';
import './index-DlQ79qgj.js';

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
