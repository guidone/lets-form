/* LetsForm Generator v0.9.5 - ESM */
import { I as I18N, _ as _objectWithoutProperties, g as _slicedToArray, E as _objectSpread2, l as lfLog } from './index-DpKM_8GA-eSPfMLwa-JpnNUllM.js';
import React, { useState, useCallback } from 'react';
import { Form, RadioTileGroup, RadioTile } from 'rsuite';
import { R as RequiredIcon } from './index-CPlHLHJ--7S9GFri9-B8_oeacG-Bgskf1BA.js';
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
var _excluded = ["name", "label", "hint", "value", "placeholder", "plaintext", "inline", "iconWidth", "iconHeight", "tooltip", "disabled", "required", "error", "onChange", "onBlur", "options", "initalOption"];
var RadioTileRSuite = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value;
  _ref.placeholder;
  _ref.plaintext;
  var _ref$inline = _ref.inline,
    inline = _ref$inline === void 0 ? true : _ref$inline,
    _ref$iconWidth = _ref.iconWidth,
    iconWidth = _ref$iconWidth === void 0 ? 24 : _ref$iconWidth,
    _ref$iconHeight = _ref.iconHeight,
    iconHeight = _ref$iconHeight === void 0 ? 24 : _ref$iconHeight,
    _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required;
  _ref.error;
  var onChange = _ref.onChange;
  _ref.onBlur;
  var _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    initalOption = _ref.initalOption;
  _objectWithoutProperties(_ref, _excluded);
  var initialValue = value || initalOption;
  var _useState = useState(initialValue),
    _useState2 = _slicedToArray(_useState, 2),
    currentValue = _useState2[0],
    setCurrentValue = _useState2[1];
  var handleChange = useCallback(function (value) {
    setCurrentValue(value);
    onChange(value);
  }, [onChange]);
  return /*#__PURE__*/React.createElement(Form.Group, {
    className: "lf-control-input-text",
    "data-lf-field-name": name
  }, label && /*#__PURE__*/React.createElement(Form.ControlLabel, null, label, hint && tooltip && /*#__PURE__*/React.createElement(Form.HelpText, {
    tooltip: true
  }, hint), required && /*#__PURE__*/React.createElement(RequiredIcon, null)), /*#__PURE__*/React.createElement(RadioTileGroup, {
    value: currentValue,
    onChange: handleChange,
    inline: inline,
    disabled: disabled
  }, (options || []).map(function (option) {
    return /*#__PURE__*/React.createElement(RadioTile, {
      key: option.value,
      label: option.label,
      value: option.value,
      icon: option.icon && /*#__PURE__*/React.createElement("img", {
        src: option.icon,
        width: iconWidth,
        height: iconHeight
      })
    }, option.description);
  })), hint && !tooltip && /*#__PURE__*/React.createElement(Form.HelpText, null, hint));
}, ['label', 'hint'], {
  options: function options(value, i18n) {
    return (value !== null && value !== void 0 ? value : []).filter(function (value) {
      return value != null;
    }).map(function (value) {
      return _objectSpread2(_objectSpread2({}, value), {}, {
        label: i18n(value.label),
        description: i18n(value.description)
      });
    });
  }
});
lfLog('Loaded RSuite.RadioTile');

export { RadioTileRSuite as default };
