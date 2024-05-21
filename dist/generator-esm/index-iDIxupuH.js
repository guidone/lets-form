/* LetsForm Generator v0.7.15 - ESM */
import { I as I18N, l as lfLog, a as _objectWithoutProperties, _ as _isString, r as _isEmpty } from './index-BlDYFeHM.js';
import React__default, { useCallback } from 'react';
import { a as Form } from './Form-Bumt1K5q.js';
import './createWithBsPrefix-GNsR_EB9.js';
import 'prop-types';

var _excluded = ["name", "label", "hint", "value", "placeholder", "tooltip", "disabled", "readOnly", "required", "error", "onChange", "onBlur", "appearance", "locale", "format"];
var Checkbox = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value;
    _ref.placeholder;
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
    type: "checkbox"
  }, /*#__PURE__*/React__default.createElement(Form.Check.Input, {
    onChange: handleChange,
    onBlur: onBlur,
    disabled: disabled,
    isInvalid: error != null,
    checked: value
  }), label && /*#__PURE__*/React__default.createElement(Form.Check.Label, null, label), _isString(error) && !_isEmpty(error) && /*#__PURE__*/React__default.createElement(Form.Control.Feedback, {
    type: "invalid"
  }, error)), hint && /*#__PURE__*/React__default.createElement(Form.Text, null, hint));
}, ['label', 'hint']);
lfLog('Loaded ReactBootrap.Checkbox');

export { Checkbox as default };
