/* LetsForm Generator v0.9.3 - ESM */
import { I as I18N, a as _isString, l as lfLog } from './index-mO_HhniH-XkiL6ku5.js';
import React from 'react';
import { Form, Rate } from 'rsuite';
import { R as RequiredIcon } from './index-qCcFwkYg-V9-C5riE-g0AzGEi1.js';
import { R as RSuite5FieldControl } from './index-BWLHZfn1-LQm15E1Z-CztFBBxm.js';
import 'react-hook-form';
import './index-Ckaie1FQ.js';
import './index-CPlHLHJ--C6v82suN.js';
import './index-cDTTgCy6-BbP8TJkH.js';
import './index-CjbIc_Cv.js';
import './index-COAOubl_.js';
import './cross-circle-FWajVb6B.js';
import './index-CfstXrwD.js';

/* LetsForm react-rsuite5 v0.9.3 - ESM */

/* LetsForm react-rsuite5 v0.9.1 - ESM */
var RateRSuite = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    size = _ref.size,
    _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    error = _ref.error,
    _ref$allowHalf = _ref.allowHalf,
    allowHalf = _ref$allowHalf === void 0 ? false : _ref$allowHalf,
    _ref$cleanable = _ref.cleanable,
    cleanable = _ref$cleanable === void 0 ? true : _ref$cleanable,
    max = _ref.max,
    color = _ref.color,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur;
  return /*#__PURE__*/React.createElement(Form.Group, {
    controlId: name,
    className: "lets-form-input-tag"
  }, label && /*#__PURE__*/React.createElement(Form.ControlLabel, null, label, hint && tooltip && /*#__PURE__*/React.createElement(Form.HelpText, {
    tooltip: true
  }, hint), required && /*#__PURE__*/React.createElement(RequiredIcon, null)), /*#__PURE__*/React.createElement(RSuite5FieldControl, {
    errorMessage: _isString(error) ? error : undefined
  }, /*#__PURE__*/React.createElement(Rate, {
    name: name,
    value: value,
    onChange: onChange,
    onBlur: onBlur,
    disabled: disabled,
    size: size,
    max: max,
    color: color,
    allowHalf: allowHalf,
    cleanable: cleanable,
    readOnly: readOnly,
    errorMessage: _isString(error) ? error : undefined
  })), hint && !tooltip && /*#__PURE__*/React.createElement(Form.HelpText, null, hint));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded RSuite5.Rate');

export { RateRSuite as default };