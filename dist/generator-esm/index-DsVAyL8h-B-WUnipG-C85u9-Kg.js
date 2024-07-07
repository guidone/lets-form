/* LetsForm Generator v0.9.3 - ESM */
import { I as I18N, _ as _objectWithoutProperties, b as _extends, p as passRest, e as i18nOptions, l as lfLog } from './index-mO_HhniH-XkiL6ku5.js';
import React from 'react';
import { Form, RadioGroup, Radio } from 'rsuite';
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
var _excluded = ["name", "label", "hint", "value", "placeholder", "plaintext", "tooltip", "disabled", "readOnly", "required", "error", "onChange", "onBlur", "options", "appearance"];
var RadioGroupRSuite = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value;
  _ref.placeholder;
  _ref.plaintext;
  var _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    error = _ref.error,
    onChange = _ref.onChange;
  _ref.onBlur;
  var _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    appearance = _ref.appearance,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Form.Group, {
    controlId: name,
    className: "lf-control-radio-group",
    "data-lf-field-name": name
  }, label && /*#__PURE__*/React.createElement(Form.ControlLabel, null, label, hint && tooltip && /*#__PURE__*/React.createElement(Form.HelpText, {
    tooltip: true
  }, hint), required && /*#__PURE__*/React.createElement(RequiredIcon, null)), /*#__PURE__*/React.createElement(RSuite5FieldControl, {
    errorMessage: _.isString(error) ? error : undefined
  }, /*#__PURE__*/React.createElement(RadioGroup, _extends({
    inline: true,
    name: name,
    value: value,
    onChange: onChange,
    appearance: appearance
  }, passRest(rest)), (options !== null && options !== void 0 ? options : []).map(function (_ref2) {
    var value = _ref2.value,
      label = _ref2.label;
    return /*#__PURE__*/React.createElement(Radio, {
      key: value,
      value: value,
      disabled: disabled,
      readOnly: readOnly
    }, label);
  }))), hint && !tooltip && /*#__PURE__*/React.createElement(Form.HelpText, null, hint));
}, ['label', 'hint', 'placeholder'], {
  options: i18nOptions
});
lfLog('Loaded RSuite.RadioGroup');

export { RadioGroupRSuite as default };
