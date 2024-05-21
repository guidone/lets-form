/* LetsForm Generator v0.7.15 - ESM */
import { I as I18N, l as lfLog, a as _objectWithoutProperties, b as _extends, Q as LetsForm, _ as _isString, r as _isEmpty } from './index-BlDYFeHM.js';
import React__default from 'react';
import { a as Form } from './Form-Bumt1K5q.js';
import { R as RequiredIcon } from './index-BALQq0mg.js';
import { L as ListArray } from './index-BkfCZSn3.js';
import './createWithBsPrefix-GNsR_EB9.js';
import 'prop-types';

var _excluded = ["hint", "required", "tooltip", "name", "label", "error"];
var ListArrayBootstrap = I18N(function (_ref) {
  var hint = _ref.hint,
    required = _ref.required;
    _ref.tooltip;
    var name = _ref.name,
    label = _ref.label,
    error = _ref.error,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React__default.createElement(Form.Group, {
    "data-lf-field-name": name,
    className: "lf-control-array"
  }, label && /*#__PURE__*/React__default.createElement(Form.Label, null, label, required && /*#__PURE__*/React__default.createElement(RequiredIcon, null)), /*#__PURE__*/React__default.createElement(ListArray, _extends({
    LetsFormComponent: LetsForm
  }, rest)), hint && !error && /*#__PURE__*/React__default.createElement(Form.Text, null, hint), _isString(error) && !_isEmpty(error) && /*#__PURE__*/React__default.createElement(Form.Control.Feedback, {
    type: "invalid"
  }, error));
}, ['label', 'hint']);
lfLog('Loaded ReactBootrap.Array');

export { ListArrayBootstrap as default };
