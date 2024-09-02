/* LetsForm react v0.10.6 - ESM */
import { s as styleInject, I as I18N, l as lfLog, _ as _objectWithoutProperties, a as _extends } from './index-D3aXV820.js';
import React, { useCallback } from 'react';
import { R as ReactGenericInput } from './index-k7Gn6yLi.js';
import 'react-hook-form';
import './index-D5WtYle0.js';

var css_248z = ".lf-form-react .lf-control-input-text input[type=color] {\n  min-width: 60px;\n}";
styleInject(css_248z);

var _excluded = ["onChange"];
var TextInput = I18N(function (_ref) {
  var onChange = _ref.onChange,
    rest = _objectWithoutProperties(_ref, _excluded);
  var handleChange = useCallback(function (e) {
    return onChange(e.target.value);
  }, [onChange]);
  return /*#__PURE__*/React.createElement(ReactGenericInput, _extends({
    component: "input-text",
    className: "lf-control-input-text",
    onChange: handleChange
  }, rest));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded React.InputText');

export { TextInput as default };
