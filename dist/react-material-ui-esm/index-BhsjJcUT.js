/* LetsForm react-material-ui v0.12.11 - ESM */
import { D as styleInject, I as I18N, l as lfLog, _ as _objectWithoutProperties, d as _isEmpty, a as _extends, p as passRest, H as _isFunction, i as i18nOptions } from './index-B1eUtGt2.js';
import React, { useCallback } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

var css_248z = ".lf-form-react-material-ui .lf-control-tabs .tab-fields {\n  padding-top: var(--lf-field-margin);\n}";
styleInject(css_248z);

var _excluded = ["name", "value", "tabs", "onChange", "children", "centered", "fullWidth", "indicatorColor", "textColor"];
var TabsMui = I18N(function (_ref) {
  var name = _ref.name,
    value = _ref.value,
    tabs = _ref.tabs,
    onChange = _ref.onChange,
    children = _ref.children,
    centered = _ref.centered,
    fullWidth = _ref.fullWidth,
    indicatorColor = _ref.indicatorColor,
    textColor = _ref.textColor,
    rest = _objectWithoutProperties(_ref, _excluded);
  var active;
  if (value) {
    active = value;
  } else {
    if (!_isEmpty(tabs)) {
      active = tabs[0].value;
    }
  }
  var handleKey = useCallback(function (_event, key) {
    return onChange(key);
  }, [onChange]);
  return /*#__PURE__*/React.createElement("div", {
    className: "lf-control-tabs",
    "data-lf-field-name": name
  }, /*#__PURE__*/React.createElement(Box, {
    sx: {
      borderBottom: 1,
      borderColor: 'divider'
    }
  }, /*#__PURE__*/React.createElement(Tabs, _extends({
    value: active,
    onChange: handleKey,
    centered: centered !== null && centered !== void 0 ? centered : undefined,
    indicatorColor: indicatorColor !== null && indicatorColor !== void 0 ? indicatorColor : undefined,
    textColor: textColor !== null && textColor !== void 0 ? textColor : undefined,
    variant: fullWidth ? 'fullWidth' : 'standard'
  }, passRest(rest)), (tabs || []).map(function (tab) {
    return /*#__PURE__*/React.createElement(Tab, {
      key: tab.value,
      label: tab.label,
      value: tab.value
    });
  }))), _isFunction(children) && /*#__PURE__*/React.createElement("div", {
    className: "tab-fields"
  }, children(active)));
}, [], {
  tabs: i18nOptions
});
lfLog('Loaded MUI.Tabs');

export { TabsMui as default };
