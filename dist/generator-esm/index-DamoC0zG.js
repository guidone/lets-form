/* LetsForm Generator v0.12.11 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, a as _extends } from './index-_-9GIr6q.js';
import React, { useCallback } from 'react';
import { B as BootstrapGenericInput } from './index-iqqa23bT.js';
import 'react-bootstrap/Form';
import 'react-bootstrap/InputGroup';
import 'react-bootstrap/FloatingLabel';
import './index-DBytqXyz.js';
import './index-d_yQrFlS.js';

var _excluded = ["onChange"];

// DOC: https://react-bootstrap.github.io/forms/form-control/#form-control-props

var TextInput = I18N(function (_ref) {
  var onChange = _ref.onChange,
    rest = _objectWithoutProperties(_ref, _excluded);
  var handleChange = useCallback(function (e) {
    onChange(e.target.value);
  }, [onChange]);
  return /*#__PURE__*/React.createElement(BootstrapGenericInput, _extends({
    component: "input-text",
    onChange: handleChange
  }, rest));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded ReactBootrap.Input');

export { TextInput as default };
