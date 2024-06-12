/* LetsForm Generator v0.8.1 - ESM */
import { I as I18N, l as lfLog, a as _objectWithoutProperties, _ as _isString, b as _extends } from './index-CnkI2zKc.js';
import React, { useCallback } from 'react';
import { R as ReactGenericInput } from './index-BMpHmoej.js';
import 'react-hook-form';
import './index-NDSm7q8f.js';

var _excluded = ["onChange", "min", "max", "step"];
var hasDecimals = function hasDecimals(f) {
  return _isString(f) && (f.includes(',') || f.includes('.'));
};
var InputNumber = I18N(function (_ref) {
  var onChange = _ref.onChange,
    min = _ref.min,
    max = _ref.max,
    step = _ref.step,
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
  return /*#__PURE__*/React.createElement(ReactGenericInput, _extends({
    inputType: "number",
    component: "input-number",
    className: "lf-control-input-number",
    min: min,
    max: max,
    step: step,
    onChange: handleChange
  }, rest));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded React.InputNumber');

export { InputNumber as default };
