/* LetsForm Generator v0.12.4 - ESM */
import { s as styleInject, I as I18N, l as lfLog, _ as _objectWithoutProperties, r as _isEmpty, a as _extends, p as passRest, i as i18nOptions } from './index-lOgms5Ca.js';
import React from 'react';
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
  var active;
  if (value) {
    active = value;
  } else {
    if (!_isEmpty(tabs)) {
      active = tabs[0].value;
    }
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "lf-control-tabs",
    "data-lf-field-name": name
  }, /*#__PURE__*/React.createElement(Tabs, _extends({
    activeKey: active,
    onSelect: onChange,
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
