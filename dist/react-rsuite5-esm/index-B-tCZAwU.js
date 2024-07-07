/* LetsForm react-rsuite5 v0.9.3 - ESM */
import { s as styleInject, I as I18N, l as lfLog, a as _objectWithoutProperties, w as _isEmpty, n as _slicedToArray, b as _extends, p as passRest, K as _isFunction, i as i18nOptions } from './index-eOrnPMH8.js';
import React, { useState, useCallback } from 'react';
import { Nav } from 'rsuite';
import 'react-hook-form';

var css_248z = ".lf-form-react-rsuite5 .lf-control-tabs .tab-fields {\n  margin-top: 10px;\n}";
styleInject(css_248z);

var _excluded = ["name", "value", "tabs", "onChange", "children", "appearance", "reversed", "justified", "pullRight"];
var Tabs = I18N(function (_ref) {
  var name = _ref.name,
    value = _ref.value,
    tabs = _ref.tabs,
    onChange = _ref.onChange,
    children = _ref.children,
    appearance = _ref.appearance,
    reversed = _ref.reversed,
    justified = _ref.justified,
    pullRight = _ref.pullRight,
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
  }, /*#__PURE__*/React.createElement(Nav, _extends({
    appearance: appearance,
    reversed: reversed,
    justified: justified,
    pullRight: pullRight,
    activeKey: active,
    onSelect: handleKey
  }, passRest(rest)), (tabs || []).map(function (tab) {
    return /*#__PURE__*/React.createElement(Nav.Item, {
      key: tab.value,
      eventKey: tab.value
    }, tab.label);
  })), _isFunction(children) && /*#__PURE__*/React.createElement("div", {
    className: "tab-fields"
  }, children(active)));
}, [], {
  tabs: i18nOptions
});
lfLog('Loaded RSuite.Tabs');

export { Tabs as default };
