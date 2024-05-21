/* LetsForm react-antd v0.7.15 - ESM */
import { s as styleInject, I as I18N, l as lfLog, _ as _objectWithoutProperties, j as _isEmpty, A as _slicedToArray, a as _extends, p as passRest, E as _isFunction, g as i18nOptions } from './index-BabwANoa.js';
import React, { useState, useCallback } from 'react';
import { Tabs } from 'antd';

var css_248z = ".lf-form-react-antd .lf-control-tabs .tab-fields {\n  margin-top: 0px;\n}";
styleInject(css_248z);

var _excluded = ["name", "value", "tabs", "onChange", "children", "animated", "centered", "size", "tabType"];
var TabsAntd = I18N(function (_ref) {
  var name = _ref.name,
    value = _ref.value,
    tabs = _ref.tabs,
    onChange = _ref.onChange,
    children = _ref.children,
    animated = _ref.animated,
    centered = _ref.centered,
    size = _ref.size,
    tabType = _ref.tabType,
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
    animated: animated,
    centered: centered,
    size: size,
    type: tabType,
    activeKey: active,
    items: (tabs || []).map(function (tab) {
      return {
        key: tab.value,
        label: tab.label
      };
    }),
    onChange: handleKey
  }, passRest(rest))), _isFunction(children) && /*#__PURE__*/React.createElement("div", {
    className: "tab-fields"
  }, children(active)));
}, [], {
  tabs: i18nOptions
});
lfLog('Loaded AntD.Tabs');

export { TabsAntd as default };
