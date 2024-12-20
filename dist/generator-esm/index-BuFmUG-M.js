/* LetsForm Generator v0.12.0 - ESM */
import { I as I18N, l as lfLog, a as _objectWithoutProperties, b as _extends, R as LetsForm, _ as _isString, r as _isEmpty } from './index-BByolClG.js';
import React from 'react';
import Form from 'react-bootstrap/Form';
import { R as RequiredIcon } from './index-Sll0mX9m.js';
import { L as ListArray } from './index-DpjhIEmD.js';
import 'react-hook-form';

var _excluded = ["hint", "required", "tooltip", "name", "label"];
var ListArrayBootstrap = I18N(function (_ref) {
  var _rest$error, _rest$error2;
  var hint = _ref.hint,
    required = _ref.required;
    _ref.tooltip;
    var name = _ref.name,
    label = _ref.label,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Form.Group, {
    "data-lf-field-name": name,
    className: "lf-control-array"
  }, label && /*#__PURE__*/React.createElement(Form.Label, null, label, required && /*#__PURE__*/React.createElement(RequiredIcon, null)), /*#__PURE__*/React.createElement(ListArray, _extends({
    LetsFormComponent: LetsForm
  }, rest)), hint && !((_rest$error = rest.error) !== null && _rest$error !== void 0 && _rest$error.errorMessage) && /*#__PURE__*/React.createElement(Form.Text, null, hint), _isString((_rest$error2 = rest.error) === null || _rest$error2 === void 0 ? void 0 : _rest$error2.errorMessage) && !_isEmpty(rest.error.errorMessage) && /*#__PURE__*/React.createElement(Form.Control.Feedback, {
    type: "invalid"
  }, rest.error.errorMessage));
}, ['label', 'hint']);
lfLog('Loaded ReactBootrap.Array');

export { ListArrayBootstrap as default };
