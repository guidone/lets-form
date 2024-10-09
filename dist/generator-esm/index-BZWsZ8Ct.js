/* LetsForm Generator v0.11.2 - ESM */
import { s as styleInject, I as I18N, l as lfLog, a as _objectWithoutProperties, r as _isEmpty, b as _extends, p as passRest, v as _isFunction, i as i18nOptions } from './index-K-iljNPu.js';
import React from 'react';
import { Tabs } from 'antd';
import 'react-hook-form';

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
    onChange: onChange
  }, passRest(rest))), _isFunction(children) && /*#__PURE__*/React.createElement("div", {
    className: "tab-fields"
  }, children(active)));
}, [], {
  tabs: i18nOptions
});
lfLog('Loaded AntD.Tabs');

export { TabsAntd as default };
