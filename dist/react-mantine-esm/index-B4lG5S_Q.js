/* LetsForm react-mantine v0.13.0 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, m as makeClassName, a as _extends, L as LetsForm, c as _isString } from './index-DLdYirby.js';
import React from 'react';
import { Input } from '@mantine/core';
import { L as ListArray } from './index-BCc5aynN.js';

var _excluded = ["hint", "required", "tooltip", "name", "label", "className"];
var MantineListArray = I18N(function (_ref) {
  var _rest$error, _rest$error2;
  var hint = _ref.hint,
    required = _ref.required;
    _ref.tooltip;
    var name = _ref.name,
    label = _ref.label,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("div", makeClassName('array', name, className), label && /*#__PURE__*/React.createElement(Input.Label, {
    required: required
  }, label), /*#__PURE__*/React.createElement(ListArray, _extends({
    LetsFormComponent: LetsForm
  }, rest)), hint && /*#__PURE__*/React.createElement(Input.Description, null, hint), _isString((_rest$error = rest.error) === null || _rest$error === void 0 ? void 0 : _rest$error.errorMessage) && /*#__PURE__*/React.createElement(Input.Error, null, (_rest$error2 = rest.error) === null || _rest$error2 === void 0 ? void 0 : _rest$error2.errorMessage));
}, ['label', 'hint']);
lfLog('Loaded Mantine.ListArray');

export { MantineListArray as default };
