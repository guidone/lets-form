/* LetsForm Generator v0.12.2 - ESM */
import { I as I18N, l as lfLog, a as _objectWithoutProperties, b as _extends } from './index-C4M6Y7eO.js';
import React, { useCallback } from 'react';
import { B as BootstrapGenericInput } from './index-DoktzGai.js';
import 'react-hook-form';
import 'react-bootstrap/Form';
import 'react-bootstrap/InputGroup';
import 'react-bootstrap/FloatingLabel';
import './index-B97-TEyL.js';
import './index-DOYonJ8s.js';

var _excluded = ["onChange"];

// DOC: https://react-bootstrap.github.io/forms/form-control/#form-control-props

var TextInput = I18N(function (_ref) {
  var onChange = _ref.onChange,
    rest = _objectWithoutProperties(_ref, _excluded);
  var handleChange = useCallback(function (e) {
    onChange(e.target.value);
  }, [onChange]);
  return /*#__PURE__*/React.createElement(BootstrapGenericInput, _extends({
    className: "lf-control-input-text",
    component: "input-text",
    onChange: handleChange
  }, rest));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded ReactBootrap.Input');

export { TextInput as default };
