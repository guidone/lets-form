/* LetsForm react-bootstrap v0.7.20 - ESM */
import { A as styleInject, I as I18N, l as lfLog, _ as _objectWithoutProperties, c as _isEmpty, d as _slicedToArray, a as _extends, p as passRest, i as i18nOptions } from './index-CIOTkOKK.js';
import React, { useState, useCallback } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import 'react-hook-form';

var css_248z = ".lf-form-react-bootstrap .lf-control-tabs [role=tabpanel] {\n  padding-top: var(--lf-field-margin);\n}";
styleInject(css_248z);

var _excluded = ["name", "value", "tabs", "onChange", "children", "variant", "transition", "fill", "justify"];
var TabsReactBootstrap = I18N(function (_ref) {
  var name = _ref.name,
    value = _ref.value,
    tabs = _ref.tabs,
    onChange = _ref.onChange,
    children = _ref.children,
    variant = _ref.variant,
    transition = _ref.transition,
    fill = _ref.fill,
    justify = _ref.justify,
    rest = _objectWithoutProperties(_ref, _excluded);
  var defaultKey = value;
  if (!defaultKey && !_isEmpty(tabs)) {
    defaultKey = tabs[0].value;
  }
  var _useState = useState(defaultKey),
    _useState2 = _slicedToArray(_useState, 2),
    active = _useState2[0],
    setActive = _useState2[1];
  var handleKey = useCallback(function (key) {
    setActive(key);
    onChange(key);
  }, [onChange]);
  return /*#__PURE__*/React.createElement("div", {
    className: "lf-control-tabs",
    "data-lf-field-name": name
  }, /*#__PURE__*/React.createElement(Tabs, _extends({
    activeKey: active,
    onSelect: handleKey,
    variant: variant || 'tabs',
    transition: transition === false ? false : undefined,
    fill: fill,
    justify: justify
  }, passRest(rest)), (tabs || []).map(function (tab) {
    return /*#__PURE__*/React.createElement(Tab, {
      key: tab.value,
      eventKey: tab.value,
      title: tab.label
    }, children(active));
  })));
}, [], {
  tabs: i18nOptions
});
lfLog('Loaded ReactBootrap.Tabs');

export { TabsReactBootstrap as default };
