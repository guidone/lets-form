/* LetsForm Generator v0.7.12 - ESM */
import { I as I18N, l as lfLog, _ as _isString, i as i18nOptions } from './index-DRF8thTp.js';
import React__default from 'react';
import Form from 'rsuite/Form';
import { R as RequiredIcon } from './index-qy17-i57.js';
import BiStateButton from './index-CdJrqPmt.js';
import { B as ButtonsToggleGroup } from './index-BzBmEgSS.js';
import 'rsuite/Button';
import 'rsuite/IconButton';
import 'rsuite/Whisper';
import 'rsuite/Tooltip';
import './index-zGb3Jiur.js';

var RSuiteButtonsToggleGroup = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    size = _ref.size,
    error = _ref.error,
    onChange = _ref.onChange,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options;
  return /*#__PURE__*/React__default.createElement(Form.Group, {
    "data-lf-field-name": name,
    className: "lf-control-button-toggle-group"
  }, label && /*#__PURE__*/React__default.createElement(Form.ControlLabel, null, label, hint && tooltip && /*#__PURE__*/React__default.createElement(Form.HelpText, {
    tooltip: true
  }, hint), required && /*#__PURE__*/React__default.createElement(RequiredIcon, null)), /*#__PURE__*/React__default.createElement(Form.Control, {
    ButtonComponent: BiStateButton,
    name: name,
    accepter: ButtonsToggleGroup,
    value: value,
    onChange: onChange,
    options: options,
    disabled: disabled,
    size: size,
    errorMessage: _isString(error) ? error : undefined
  }), hint && !tooltip && /*#__PURE__*/React__default.createElement(Form.HelpText, null, hint));
}, ['label', 'hint'], {
  options: i18nOptions
});
lfLog('Loaded RSuite5.ButtonsToggleGroup');

export { RSuiteButtonsToggleGroup as default };
