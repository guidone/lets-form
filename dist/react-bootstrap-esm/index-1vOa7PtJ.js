/* LetsForm react-bootstrap v0.12.9 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, m as makeClassName, a as _extends, p as passRest, b as _isString, c as _isEmpty } from './index-D6o92qHL.js';
import React, { useCallback } from 'react';
import Form from 'react-bootstrap/Form';

var _excluded = ["name", "label", "hint", "value", "placeholder", "lfLocale", "tooltip", "disabled", "readOnly", "required", "error", "onChange", "onBlur", "appearance", "locale", "format", "className"];
var Toggle = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint;
    _ref.value;
    _ref.placeholder;
    _ref.lfLocale;
    _ref.tooltip;
    var _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled;
    _ref.readOnly;
    _ref.required;
    var error = _ref.error,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur;
    _ref.appearance;
    _ref.locale;
    _ref.format;
    var className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var handleChange = useCallback(function (e) {
    onChange(e.target.checked);
  }, [onChange]);
  return /*#__PURE__*/React.createElement(Form.Group, makeClassName('checkbox', name, className), /*#__PURE__*/React.createElement(Form.Check, {
    type: "switch"
  }, /*#__PURE__*/React.createElement(Form.Check.Input, _extends({
    onChange: handleChange,
    onBlur: onBlur,
    disabled: disabled,
    isInvalid: error != null
  }, passRest(rest))), label && /*#__PURE__*/React.createElement(Form.Check.Label, null, label), _isString(error) && !_isEmpty(error) && /*#__PURE__*/React.createElement(Form.Control.Feedback, {
    type: "invalid"
  }, error)), hint && /*#__PURE__*/React.createElement(Form.Text, null, hint));
}, ['label', 'hint']);
lfLog('Loaded ReactBootrap.Toggle');

export { Toggle as default };
