/* LetsForm react-rsuite5 v0.9.5 - ESM */
import { s as styleInject, I as I18N, _ as _objectWithoutProperties, a as _isString, b as _extends, p as passRest, c as classNames, d as _defineProperty$1, m as makeWidthStyle, l as lfLog, i as isUrl } from './index-mO_HhniH-DcmwUe2s-DFlleBGF.js';
import React, { useCallback } from 'react';
import { Input, Form, InputGroup } from 'rsuite';
import { R as RequiredIcon } from './index-qCcFwkYg-V9-C5riE-DjMQWSV5-Cadeh3MP.js';
import { R as RSuite5FieldControl } from './index-BWLHZfn1-LQm15E1Z-B7Ct_VJB-CSdqkP_O.js';
import 'react-hook-form';
import './index-DpKM_8GA-eSPfMLwa.js';
import './index-DMeoKa6v.js';
import './index-CPlHLHJ--7S9GFri9-B8_oeacG.js';
import './index-cDTTgCy6-D4x1bGkI-x00HBuj3.js';
import './index-BvswBXlW-BfKr8aRy.js';
import './index-DcwatjKC-BlmBmtLq.js';
import './index-CYJiGipx.js';
import './index-BSRGt_hk.js';
import './index-CJYOLjUg.js';

/* LetsForm react-rsuite5 v0.9.4 - ESM */

/* LetsForm react-rsuite5 v0.9.3 - ESM */

/* LetsForm react-rsuite5 v0.9.1 - ESM */
var TextOrIcon = function TextOrIcon(str) {
  if (isUrl(str)) {
    return /*#__PURE__*/React.createElement("img", {
      className: "lf-prefix-icon",
      src: str,
      alt: "icon"
    });
  } else if (str) {
    return /*#__PURE__*/React.createElement("span", null, str);
  }
};
var css_248z = ".lf-control-input-text .rs-form-control-wrapper > .rs-input, .lf-control-input-text .rs-form-control-wrapper > .rs-input-number {\n  width: 100%;\n}\n.lf-control-input-text.lf-full-width .rs-input-group {\n  width: 100%;\n}\n.lf-control-input-text .lf-prefix-icon {\n  max-height: 16px;\n}\n.lf-control-input-text.lf-size-lg .lf-prefix-icon {\n  max-height: 22px;\n}\n.lf-control-input-text.lf-size-md .lf-prefix-icon {\n  max-height: 16px;\n}\n.lf-control-input-text.lf-size-sm .lf-prefix-icon {\n  max-height: 10px;\n}\n.lf-control-input-text.lf-size-xs .lf-prefix-icon {\n  max-height: 4px;\n}";
styleInject(css_248z);
var _excluded = ["name", "label", "hint", "value", "size", "placeholder", "tooltip", "disabled", "readOnly", "required", "submitOnEnter", "error", "prefix", "postfix", "onChange", "onBlur", "fullWidth", "width", "autocomplete", "inputMode", "inputType", "inside", "lfOnEnter"];
var TextInput = I18N(function (_ref) {
  var _classNames;
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    size = _ref.size,
    placeholder = _ref.placeholder,
    _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    _ref$submitOnEnter = _ref.submitOnEnter,
    submitOnEnter = _ref$submitOnEnter === void 0 ? false : _ref$submitOnEnter,
    error = _ref.error,
    prefix = _ref.prefix,
    postfix = _ref.postfix,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    fullWidth = _ref.fullWidth,
    width = _ref.width,
    autocomplete = _ref.autocomplete,
    inputMode = _ref.inputMode,
    inputType = _ref.inputType,
    _ref$inside = _ref.inside,
    inside = _ref$inside === void 0 ? false : _ref$inside,
    _ref$lfOnEnter = _ref.lfOnEnter,
    lfOnEnter = _ref$lfOnEnter === void 0 ? function () {} : _ref$lfOnEnter,
    rest = _objectWithoutProperties(_ref, _excluded);
  var handleKeyUp = useCallback(function (e) {
    return e.keyCode === 13 && lfOnEnter();
  }, [lfOnEnter]);
  var inner = /*#__PURE__*/React.createElement(RSuite5FieldControl, {
    errorMessage: _isString(error) ? error : undefined
  }, /*#__PURE__*/React.createElement(Input, _extends({
    accepter: Input,
    defaultValue: value,
    onChange: onChange,
    onBlur: onBlur,
    onKeyUp: submitOnEnter ? handleKeyUp : undefined,
    disabled: disabled,
    autoComplete: autocomplete,
    inputMode: inputMode,
    type: inputType,
    size: size,
    placeholder: placeholder,
    readOnly: readOnly
  }, passRest(rest))));
  var needsGroup = postfix || prefix;
  return /*#__PURE__*/React.createElement(Form.Group, {
    className: classNames('lf-control-input-text', (_classNames = {}, _defineProperty$1(_classNames, "lf-size-".concat(size), size != null), _defineProperty$1(_classNames, 'lf-full-width', fullWidth || width != null), _classNames)),
    "data-lf-field-name": name,
    style: makeWidthStyle(fullWidth, width)
  }, label && /*#__PURE__*/React.createElement(Form.ControlLabel, null, label, hint && tooltip && /*#__PURE__*/React.createElement(Form.HelpText, {
    tooltip: true
  }, hint), required && /*#__PURE__*/React.createElement(RequiredIcon, null)), !needsGroup && inner, needsGroup && /*#__PURE__*/React.createElement(InputGroup, {
    inside: inside
  }, prefix && /*#__PURE__*/React.createElement(InputGroup.Addon, null, TextOrIcon(prefix)), inner, postfix && /*#__PURE__*/React.createElement(InputGroup.Addon, null, TextOrIcon(postfix))), hint && !tooltip && /*#__PURE__*/React.createElement(Form.HelpText, null, hint));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded RSuite.InputText');

export { TextInput as default };
