/* LetsForm react-bootstrap v0.7.11 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, a as _extends } from './index-DjkwpNX_.js';
import React__default, { useCallback } from 'react';
import { B as BootstrapGenericInput } from './index-C0UqIhUn.js';
import './Form-CRp2qAAw.js';
import './createWithBsPrefix-cMuRGYJR.js';
import 'prop-types';
import './index-DU8kKW1g.js';

var _excluded = ["onChange"];

// DOC: https://react-bootstrap.github.io/forms/form-control/#form-control-props

var TextInput = I18N(function (_ref) {
  var onChange = _ref.onChange,
    rest = _objectWithoutProperties(_ref, _excluded);
  var handleChange = useCallback(function (e) {
    onChange(e.target.value);
  }, [onChange]);
  return /*#__PURE__*/React__default.createElement(BootstrapGenericInput, _extends({
    className: "lf-control-input-text",
    component: "input-text",
    onChange: handleChange
  }, rest));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded ReactBootrap.Input');

export { TextInput as default };
