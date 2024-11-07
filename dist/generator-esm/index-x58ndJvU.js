/* LetsForm Generator v0.11.5 - ESM */
import { I as I18N, l as lfLog, a as _objectWithoutProperties, j as isValidDate, b as _extends } from './index-C0Shetui.js';
import React, { useCallback } from 'react';
import { R as ReactGenericInput } from './index-cD8ybl81.js';
import 'react-hook-form';
import './index-D_hb6Isy.js';

var _excluded = ["onChange", "value"];
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
  return /*#__PURE__*/React.createElement(ReactGenericInput, _extends({
    inputType: "datetime-local",
    component: "datetime",
    className: "lf-control-datetime",
    value: currentDate,
    onChange: handleChange
  }, rest));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded React.DateTime');

export { DateTime as default };
