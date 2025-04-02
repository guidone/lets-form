/* LetsForm Generator v0.12.15 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, a as _extends, c as makeWidthStyle, g as _defineProperty, p as passRest, m as makeClassName } from './index-7LChbcm9.js';
import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { R as RequiredIcon } from './index-DbDdmXWk.js';
import { T as TextOrIcon } from './index-C2YWv3uM.js';
import { C as CommonCurrency } from './index-DLcLI_CJ.js';

var _excluded = ["name", "label", "hint", "value", "lfLocale", "className", "disabled", "readOnly", "plaintext", "error", "component", "required", "submitOnEnter", "prefix", "postfix", "fullWidth", "width", "floatingLabel", "align"];

// DOC: https://react-bootstrap.github.io/forms/form-control/#form-control-props

var Currency = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value,
    lfLocale = _ref.lfLocale,
    className = _ref.className;
    _ref.disabled;
    _ref.readOnly;
    _ref.plaintext;
    var error = _ref.error,
    component = _ref.component,
    required = _ref.required;
    _ref.submitOnEnter;
    var prefix = _ref.prefix,
    postfix = _ref.postfix,
    fullWidth = _ref.fullWidth,
    width = _ref.width,
    _ref$floatingLabel = _ref.floatingLabel,
    floatingLabel = _ref$floatingLabel === void 0 ? false : _ref$floatingLabel,
    align = _ref.align,
    rest = _objectWithoutProperties(_ref, _excluded);
  var inner = /*#__PURE__*/React.createElement(CommonCurrency, _extends({
    defaultValue: value,
    control: Form.Control,
    locale: lfLocale,
    name: name,
    type: "text",
    isInvalid: error != null,
    style: makeWidthStyle(fullWidth, width, _defineProperty({}, align ? 'text-align' : undefined, align))
  }, passRest(rest)));
  var innerGroup = inner;
  var needsGroup = postfix || prefix;
  if (needsGroup) {
    innerGroup = /*#__PURE__*/React.createElement(InputGroup, null, prefix && /*#__PURE__*/React.createElement(InputGroup.Text, null, TextOrIcon(prefix)), inner, postfix && /*#__PURE__*/React.createElement(InputGroup.Text, null, TextOrIcon(postfix)));
  }
  var useFloatingLabels = floatingLabel && !needsGroup;
  return /*#__PURE__*/React.createElement(Form.Group, makeClassName(component, name, className), useFloatingLabels && label && /*#__PURE__*/React.createElement(FloatingLabel, {
    label: label
  }, innerGroup), !useFloatingLabels && label && /*#__PURE__*/React.createElement(Form.Label, null, label, required && /*#__PURE__*/React.createElement(RequiredIcon, null)), !useFloatingLabels && innerGroup, hint && !error && /*#__PURE__*/React.createElement(Form.Text, null, hint), _.isString(error) && !_.isEmpty(error) && /*#__PURE__*/React.createElement(Form.Control.Feedback, {
    type: "invalid"
  }, error));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded ReactBootrap.Currency');

export { Currency as default };
