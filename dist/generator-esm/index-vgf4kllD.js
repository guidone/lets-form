/* LetsForm Generator v0.10.3 - ESM */
import { I as I18N, l as lfLog, a as _objectWithoutProperties, b as _extends, R as LetsForm, _ as _isString, r as _isEmpty } from './index-DTOarPRu.js';
import React from 'react';
import Form from 'react-bootstrap/Form';
import { R as RequiredIcon } from './index-OsQELQqR.js';
import { L as ListArray } from './index-CC4IX-9_.js';
import 'react-hook-form';

var _excluded = ["hint", "required", "tooltip", "name", "label", "error"];
var ListArrayBootstrap = I18N(function (_ref) {
  var hint = _ref.hint,
    required = _ref.required;
    _ref.tooltip;
    var name = _ref.name,
    label = _ref.label,
    error = _ref.error,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Form.Group, {
    "data-lf-field-name": name,
    className: "lf-control-array"
  }, label && /*#__PURE__*/React.createElement(Form.Label, null, label, required && /*#__PURE__*/React.createElement(RequiredIcon, null)), /*#__PURE__*/React.createElement(ListArray, _extends({
    LetsFormComponent: LetsForm
  }, rest)), hint && !error && /*#__PURE__*/React.createElement(Form.Text, null, hint), _isString(error) && !_isEmpty(error) && /*#__PURE__*/React.createElement(Form.Control.Feedback, {
    type: "invalid"
  }, error));
}, ['label', 'hint']);
lfLog('Loaded ReactBootrap.Array');

export { ListArrayBootstrap as default };
