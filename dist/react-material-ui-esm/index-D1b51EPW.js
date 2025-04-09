/* LetsForm react-material-ui v0.12.17 - ESM */
import { s as styleInject, I as I18N, j as _slicedToArray, u as useFormContext, m as makeClassName, k as classNames, n as ChevronUp, o as ChevronDown, a as _extends, l as lfLog, L as LetsForm } from './index-BcTrKg7q.js';
import React, { useState, useCallback, useMemo, useEffect } from 'react';

var css_248z = ".lf-form .lf-control-object:not(:first-child) {\n  margin-top: calc(var(--lf-group-header) + var(--lf-field-margin));\n}\n\n.lf-control-object .header svg {\n  display: inline-block;\n}\n.lf-control-object.lf-border-boxed {\n  border-bottom: 1px solid var(--lf-border-color);\n  border-left: 1px solid var(--lf-border-color);\n  border-right: 1px solid var(--lf-border-color);\n}\n.lf-control-object.lf-border-boxed .header:before {\n  border-top: 1px solid var(--lf-border-color);\n  content: \"\";\n  flex: 1 0;\n}\n.lf-control-object.lf-border-boxed .header:after {\n  border-top: 1px solid var(--lf-border-color);\n  content: \"\";\n  flex: 1 0;\n}\n.lf-control-object.lf-border-boxed .lf-object-content {\n  padding-left: var(--lf-group-padding);\n  padding-right: var(--lf-group-padding);\n  padding-bottom: var(--lf-group-padding);\n}\n.lf-control-object.lf-border-topBottom {\n  border-bottom: 1px solid var(--lf-border-color);\n}\n.lf-control-object.lf-border-topBottom .header:before {\n  border-top: 1px solid var(--lf-border-color);\n  content: \"\";\n  flex: 1 0;\n}\n.lf-control-object.lf-border-topBottom .header:after {\n  border-top: 1px solid var(--lf-border-color);\n  content: \"\";\n  flex: 1 0;\n}\n.lf-control-object.lf-border-topBottom .lf-object-content {\n  padding-bottom: var(--lf-group-padding);\n}\n.lf-control-object.lf-border-top .header:before {\n  border-top: 1px solid var(--lf-border-color);\n  content: \"\";\n  flex: 1 0;\n}\n.lf-control-object.lf-border-top .header:after {\n  border-top: 1px solid var(--lf-border-color);\n  content: \"\";\n  flex: 1 0;\n}\n.lf-control-object.lf-border-bottom {\n  border-bottom: 1px solid var(--lf-border-color);\n}\n.lf-control-object .header {\n  align-items: center;\n  background: transparent;\n  display: flex;\n  height: 1px;\n  flex-direction: row;\n  margin: var(--lf-group-header) 0px;\n}\n.lf-control-object .header .inner-text {\n  flex: 0 0 auto;\n  padding: 0 12px;\n  display: inline-block;\n}\n.lf-control-object .header.left:before {\n  flex: 0 0 10px;\n}\n.lf-control-object .header.right:after {\n  flex: 0 0 10px;\n}";
styleInject(css_248z);

var EMPTY_OBJECT = {};
var CommonObject = I18N(function (_ref) {
  var LetsFormComponent = _ref.LetsFormComponent,
    name = _ref.name,
    className = _ref.className,
    label = _ref.label,
    lfLocale = _ref.lfLocale,
    _ref$layout = _ref.layout,
    layout = _ref$layout === void 0 ? 'vertical' : _ref$layout,
    fields = _ref.fields,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    value = _ref.value,
    _ref$open = _ref.open,
    open = _ref$open === void 0 ? true : _ref$open,
    _ref$collapsible = _ref.collapsible,
    collapsible = _ref$collapsible === void 0 ? true : _ref$collapsible,
    _ref$border = _ref.border,
    border = _ref$border === void 0 ? 'top' : _ref$border,
    align = _ref.align,
    error = _ref.error,
    formShowErrors = _ref.formShowErrors,
    onChange = _ref.onChange,
    children = _ref.children;
  var _useState = useState(open),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useFormContext = useFormContext(),
    locales = _useFormContext.locales;
  var handleClick = useCallback(function (event) {
    event.preventDefault();
    setIsOpen(!isOpen);
  }, [isOpen]);
  var form = useMemo(function () {
    return {
      layout: layout,
      fluid: true,
      locales: locales,
      // copy the locales from the main form
      fields: fields,
      name: 'Object form ' + name,
      showErrors: formShowErrors
    };
  }, [layout, locales, fields, name, formShowErrors]);

  // if open changes, then change status
  useEffect(function () {
    setIsOpen(open);
  }, [open]);
  return /*#__PURE__*/React.createElement("div", makeClassName('object', name, className, "lf-border-".concat(border), {
    'open': isOpen,
    'close': !isOpen
  }), /*#__PURE__*/React.createElement("div", {
    role: "separator",
    className: classNames('header', align)
  }, /*#__PURE__*/React.createElement("span", {
    className: "inner-text"
  }, label, collapsible && /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "lf-btn-collapse",
    disabled: disabled,
    appearance: "link",
    onClick: handleClick
  }, isOpen ? /*#__PURE__*/React.createElement(ChevronUp, {
    color: "#3498ff"
  }) : /*#__PURE__*/React.createElement(ChevronDown, {
    color: "#3498ff"
  })))), (isOpen || !collapsible) && /*#__PURE__*/React.createElement("div", {
    className: "lf-object-content"
  }, children ? children : /*#__PURE__*/React.createElement(LetsFormComponent, {
    form: form,
    locale: lfLocale,
    disabled: disabled,
    readOnly: readOnly,
    defaultValues: value || EMPTY_OBJECT,
    onlyFields: true,
    onChange: onChange,
    errors: error != null && error.errorMessages != null ? error.errorMessages : undefined
  })));
}, ['label']);

var ReactMUIObject = function ReactMUIObject(props) {
  return /*#__PURE__*/React.createElement(CommonObject, _extends({
    LetsFormComponent: LetsForm
  }, props));
};
lfLog('Loaded MUI.Object');

export { ReactMUIObject as default };
