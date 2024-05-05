/* LetsForm react-bootstrap v0.7.10 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, b as _isString, c as _isEmpty } from './index-CB1ACAly.js';
import React__default, { useCallback } from 'react';
import { F as Form } from './Form-DvkLgwAP.js';
import './createWithBsPrefix-FRzYE9sI.js';
import 'prop-types';

var _excluded = ["name", "label", "hint", "value", "placeholder", "lfLocale", "tooltip", "disabled", "readOnly", "required", "error", "onChange", "onBlur", "appearance", "locale", "format"];
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
    _objectWithoutProperties(_ref, _excluded);
  var handleChange = useCallback(function (e) {
    onChange(e.target.checked);
  }, [onChange]);
  return /*#__PURE__*/React__default.createElement(Form.Group, {
    className: "lf-control-checkbox",
    "data-lf-field-name": name
  }, /*#__PURE__*/React__default.createElement(Form.Check, {
    type: "switch"
  }, /*#__PURE__*/React__default.createElement(Form.Check.Input, {
    onChange: handleChange,
    onBlur: onBlur,
    disabled: disabled,
    isInvalid: error != null
  }), label && /*#__PURE__*/React__default.createElement(Form.Check.Label, null, label), _isString(error) && !_isEmpty(error) && /*#__PURE__*/React__default.createElement(Form.Control.Feedback, {
    type: "invalid"
  }, error)), hint && /*#__PURE__*/React__default.createElement(Form.Text, null, hint));
}, ['label', 'hint']);
lfLog('Loaded ReactBootrap.Toggle');

export { Toggle as default };
