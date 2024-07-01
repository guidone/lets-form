/* LetsForm react-rsuite5 v0.9.0 - ESM */
import { I as I18N, l as lfLog, _ as _isString } from './index-mf2gm_7w.js';
import React from 'react';
import { Form, Toggle } from 'rsuite';
import { R as RequiredIcon } from './index-v2MJ9eMz.js';
import { R as RSuite5FieldControl } from './index-ByKlQmCj.js';
import 'react-hook-form';

var ToggleInput = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    size = _ref.size,
    _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    onChange = _ref.onChange,
    checkedChildren = _ref.checkedChildren,
    unCheckedChildren = _ref.unCheckedChildren,
    error = _ref.error;
  return /*#__PURE__*/React.createElement(Form.Group, {
    controlId: name,
    className: "lf-control-toggle"
  }, label && /*#__PURE__*/React.createElement(Form.ControlLabel, null, label, hint && tooltip && /*#__PURE__*/React.createElement(Form.HelpText, {
    tooltip: true
  }, hint), required && /*#__PURE__*/React.createElement(RequiredIcon, null)), /*#__PURE__*/React.createElement(RSuite5FieldControl, {
    errorMessage: _isString(error) ? error : undefined
  }, /*#__PURE__*/React.createElement(Toggle, {
    name: name,
    checked: value,
    onChange: onChange,
    disabled: disabled,
    unCheckedChildren: unCheckedChildren && unCheckedChildren !== '' ? unCheckedChildren : undefined,
    checkedChildren: checkedChildren && checkedChildren !== '' ? checkedChildren : undefined,
    errorMessage: _isString(error) ? error : undefined,
    size: size
  })), hint && !tooltip && /*#__PURE__*/React.createElement(Form.HelpText, null, hint));
}, ['label', 'hint', 'checkedChildren', 'unCheckedChildren']);
lfLog('Loaded RSuite5.ToggleInput');

export { ToggleInput as default };
