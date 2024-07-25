/* LetsForm Generator v0.9.5 - ESM */
import { I as I18N, _ as _objectWithoutProperties, b as _extends, p as passRest, e as i18nOptions, l as lfLog } from './index-DpKM_8GA-eSPfMLwa-JpnNUllM.js';
import React from 'react';
import { Form, CheckboxGroup, Checkbox } from 'rsuite';
import { R as RSuite5FieldControl } from './index-cDTTgCy6-D4x1bGkI-x00HBuj3-DTPbLMtW.js';
import 'react-hook-form';
import './index-DMeoKa6v-DS-Z1tAK.js';
import './index-Cn9nwTB0.js';
import './index-BvswBXlW-BfKr8aRy-DJCFx722.js';
import './index-DcwatjKC-BlmBmtLq-Bl6ZBl9o.js';
import './index-BSRGt_hk-CHB_aTs8.js';
import './index-CJYOLjUg-BuYaf1ph.js';
import './index-nKThgXMM.js';
import './index-6FBKir1_.js';
import './cross-circle-BhcLUIwD.js';
import './index-CjbtUGG-.js';

/* LetsForm react-rsuite5 v0.9.5 - ESM */

/* LetsForm react-rsuite5 v0.9.4 - ESM */

/* LetsForm react-rsuite5 v0.9.3 - ESM */
var _excluded = ["name", "label", "hint", "value", "tooltip", "disabled", "readOnly", "required", "error", "color", "onChange", "onBlur", "options"];
var CheckboxGroupRSuite = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly;
  _ref.required;
  var error = _ref.error,
    color = _ref.color,
    onChange = _ref.onChange;
  _ref.onBlur;
  var _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Form.Group, {
    "data-lf-field-name": name,
    className: "lf-control-checkbox-group"
  }, label && /*#__PURE__*/React.createElement(Form.ControlLabel, null, label, hint && tooltip && /*#__PURE__*/React.createElement(Form.HelpText, {
    tooltip: true
  }, hint)), /*#__PURE__*/React.createElement(RSuite5FieldControl, {
    errorMessage: _.isString(error) ? error : undefined
  }, /*#__PURE__*/React.createElement(CheckboxGroup, _extends({
    inline: true,
    name: name,
    value: value,
    onChange: onChange
  }, passRest(rest)), (options !== null && options !== void 0 ? options : []).map(function (_ref2) {
    var value = _ref2.value,
      label = _ref2.label;
    return /*#__PURE__*/React.createElement(Checkbox, {
      key: value,
      value: value,
      disabled: disabled,
      readOnly: readOnly,
      color: color
    }, label);
  }))), hint && !tooltip && /*#__PURE__*/React.createElement(Form.HelpText, null, hint));
}, ['label', 'hint'], {
  options: i18nOptions
});
lfLog('Loaded RSuite.CheckboxGroup');

export { CheckboxGroupRSuite as default };
