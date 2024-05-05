/* LetsForm react-bootstrap v0.7.10 - ESM */
import { I as I18N, _ as _objectWithoutProperties, b as _isString, a as _extends } from './index-CB1ACAly.js';
import React__default, { useCallback } from 'react';
import { B as BootstrapGenericInput } from './index-CunYz39O.js';
import './Form-DvkLgwAP.js';
import './createWithBsPrefix-FRzYE9sI.js';
import 'prop-types';
import './index-U8gbIbN3.js';

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
  return /*#__PURE__*/React__default.createElement(BootstrapGenericInput, _extends({
    className: "lf-control-input-number",
    component: "input-number",
    onChange: handleChange,
    inputType: "number",
    step: "5"
  }, rest));
}, ['label', 'hint', 'placeholder']);

export { InputNumber };
