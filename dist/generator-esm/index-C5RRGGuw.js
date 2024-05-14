/* LetsForm Generator v0.7.12 - ESM */
import { I as I18N, l as lfLog, a as _objectWithoutProperties, b as _extends, S as LetsForm, p as passRest } from './index-DRF8thTp.js';
import React__default from 'react';
import { Input } from '@mantine/core';
import { L as ListArray } from './index-BzDRAYku.js';

var _excluded = ["hint", "required", "tooltip", "name", "label", "error"];
var MantineListArray = I18N(function (_ref) {
  var hint = _ref.hint,
    required = _ref.required;
    _ref.tooltip;
    var name = _ref.name,
    label = _ref.label,
    error = _ref.error,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React__default.createElement("div", {
    "data-lf-field-name": name,
    className: "lf-control-array"
  }, label && /*#__PURE__*/React__default.createElement(Input.Label, {
    required: required
  }, label), /*#__PURE__*/React__default.createElement(ListArray, _extends({
    LetsFormComponent: LetsForm
  }, passRest(rest))), hint && /*#__PURE__*/React__default.createElement(Input.Description, null, hint), error && /*#__PURE__*/React__default.createElement(Input.Error, null, error));
}, ['label', 'hint']);
lfLog('Loaded Mantine.ListArray');

export { MantineListArray as default };
