/* LetsForm react-mantine v0.11.3 - ESM */
import { B as isUrl, D as styleInject, I as I18N, l as lfLog, _ as _objectWithoutProperties, w as _isEmpty, o as classNames, n as _defineProperty, a as _extends, p as passRest, i as i18nOptions } from './index-B8zsXeoW.js';
import React from 'react';
import { Tabs } from '@mantine/core';
import 'react-hook-form';

var TextOrIcon = function TextOrIcon(str) {
  if (isUrl(str)) {
    return /*#__PURE__*/React.createElement("img", {
      className: "lf-prefix-icon",
      src: str,
      alt: "icon"
    });
  } else if (str) {
    return /*#__PURE__*/React.createElement("span", null, str);
  }
};

var css_248z = ".lf-form-react-mantine .lf-control-tabs .lf-prefix-icon {\n  max-width: 16px;\n  max-height: 16px;\n}\n.lf-form-react-mantine .lf-control-tabs.orientation-vertical .mantine-Tabs-panel, .lf-form-react-mantine .lf-control-tabs.orientation-vertical.placement-left .mantine-Tabs-panel {\n  padding-left: var(--lf-field-column-margin);\n}\n.lf-form-react-mantine .lf-control-tabs.orientation-vertical.placement-right .mantine-Tabs-panel {\n  padding-right: var(--lf-field-column-margin);\n}";
styleInject(css_248z);

var _excluded = ["name", "value", "tabs", "onChange", "children", "grow", "justify", "orientation", "placement"];
var MantineTabs = I18N(function (_ref) {
  var _classNames;
  var name = _ref.name,
    value = _ref.value,
    tabs = _ref.tabs,
    onChange = _ref.onChange,
    children = _ref.children,
    grow = _ref.grow,
    justify = _ref.justify,
    orientation = _ref.orientation,
    placement = _ref.placement,
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
    className: classNames('lf-control-tabs', (_classNames = {}, _defineProperty(_classNames, "orientation-".concat(orientation), orientation != null), _defineProperty(_classNames, "placement-".concat(placement), placement != null), _classNames)),
    "data-lf-field-name": name
  }, /*#__PURE__*/React.createElement(Tabs, _extends({
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
