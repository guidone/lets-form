/* LetsForm react-bootstrap v0.7.10 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, h as isValidDate, a as _extends } from './index-CB1ACAly.js';
import React__default, { useCallback } from 'react';
import { B as BootstrapGenericInput } from './index-CunYz39O.js';
import './Form-DvkLgwAP.js';
import './createWithBsPrefix-FRzYE9sI.js';
import 'prop-types';
import './index-U8gbIbN3.js';

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
  return /*#__PURE__*/React__default.createElement(BootstrapGenericInput, _extends({
    className: "lf-control-date",
    inputType: "date",
    component: "date",
    value: currentDate,
    onChange: handleChange
  }, rest));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded ReactBootrap.Date');

export { Date as default };
