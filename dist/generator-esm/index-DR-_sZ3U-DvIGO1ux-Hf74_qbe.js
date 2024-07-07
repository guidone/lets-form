/* LetsForm Generator v0.9.3 - ESM */
import { I as I18N, _ as _objectWithoutProperties, b as _extends, p as passRest, e as i18nOptions, l as lfLog } from './index-mO_HhniH-XkiL6ku5.js';
import React from 'react';
import { Form, CheckboxGroup, Checkbox } from 'rsuite';
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
