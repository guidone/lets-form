/* LetsForm react-mantine v0.7.15 - ESM */
import { C as isUrl, D as styleInject, I as I18N, l as lfLog, _ as _objectWithoutProperties, v as _isEmpty, n as _slicedToArray, k as classNames, j as _defineProperty, a as _extends, p as passRest, i as i18nOptions } from './index-uQ9F7F9d.js';
import React, { useState, useCallback } from 'react';
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
  var defaultKey = value;
  if (!defaultKey && !_isEmpty(tabs)) {
    defaultKey = tabs[0].value;
  }
  var _useState = useState(defaultKey),
    _useState2 = _slicedToArray(_useState, 2),
    active = _useState2[0],
    setActive = _useState2[1];
  var handleChange = useCallback(function (active) {
    setActive(active);
    onChange(active);
  }, [onChange]);
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('lf-control-tabs', (_classNames = {}, _defineProperty(_classNames, "orientation-".concat(orientation), orientation != null), _defineProperty(_classNames, "placement-".concat(placement), placement != null), _classNames)),
    "data-lf-field-name": name
  }, /*#__PURE__*/React.createElement(Tabs, _extends({
    value: active,
    onChange: handleChange,
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
