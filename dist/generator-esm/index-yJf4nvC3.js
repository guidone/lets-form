/* LetsForm Generator v0.12.9 - ESM */
import { s as styleInject, I as I18N, l as lfLog, _ as _objectWithoutProperties, r as _isEmpty, m as makeClassName, g as _defineProperty, a as _extends, p as passRest, i as i18nOptions } from './index-C3mTkrR6.js';
import React from 'react';
import { Tabs } from '@mantine/core';
import { T as TextOrIcon } from './index-DK2fJMU7.js';

var css_248z = ".lf-form-react-mantine .lf-control-tabs .lf-prefix-icon {\n  max-width: 16px;\n  max-height: 16px;\n}\n.lf-form-react-mantine .lf-control-tabs.orientation-vertical .mantine-Tabs-panel, .lf-form-react-mantine .lf-control-tabs.orientation-vertical.placement-left .mantine-Tabs-panel {\n  padding-left: var(--lf-field-column-margin);\n}\n.lf-form-react-mantine .lf-control-tabs.orientation-vertical.placement-right .mantine-Tabs-panel {\n  padding-right: var(--lf-field-column-margin);\n}";
styleInject(css_248z);

var _excluded = ["name", "value", "tabs", "onChange", "children", "grow", "justify", "orientation", "placement", "className"];
var MantineTabs = I18N(function (_ref) {
  var _makeClassName;
  var name = _ref.name,
    value = _ref.value,
    tabs = _ref.tabs,
    onChange = _ref.onChange,
    children = _ref.children,
    grow = _ref.grow,
    justify = _ref.justify,
    orientation = _ref.orientation,
    placement = _ref.placement,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var active;
  if (value) {
    active = value;
  } else {
    if (!_isEmpty(tabs)) {
      active = tabs[0].value;
    }
  }
  return /*#__PURE__*/React.createElement("div", makeClassName('tabs', name, className, (_makeClassName = {}, _defineProperty(_makeClassName, "orientation-".concat(orientation), orientation != null), _defineProperty(_makeClassName, "placement-".concat(placement), placement != null), _makeClassName)), /*#__PURE__*/React.createElement(Tabs, _extends({
    value: active,
    onChange: onChange,
    orientation: orientation,
    placement: placement
  }, passRest(rest)), /*#__PURE__*/React.createElement(Tabs.List, {
    grow: grow,
    justify: justify
  }, (tabs || []).map(function (tab) {
    return /*#__PURE__*/React.createElement(Tabs.Tab, {
      key: tab.value,
      value: tab.value,
      leftSection: TextOrIcon(tab.leftSection),
      rightSection: TextOrIcon(tab.rightSection),
      size: tab.size,
      color: tab.color,
      disabled: tab.disabled
    }, tab.label);
  })), (tabs || []).map(function (tab) {
    return /*#__PURE__*/React.createElement(Tabs.Panel, {
      value: tab.value
    }, children(tab.value));
  })));
}, [], {
  tabs: i18nOptions
});
lfLog('Loaded Mantine.Tabs');

export { MantineTabs as default };
