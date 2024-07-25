/* LetsForm Generator v0.9.5 - ESM */
import { s as styleInject, I as I18N, l as lfLog, a as _objectWithoutProperties, t as _isEmpty, b as _extends } from './index-nKThgXMM.js';
import React from 'react';
import { Button, Tooltip, Input } from '@mantine/core';
import { M as MakeButton } from './index-B3OHqfO8.js';
import 'react-hook-form';

var css_248z = ".lf-form-react-mantine .lf-control-button {\n  min-height: 20px;\n}\n.lf-form-react-mantine .lf-control-button .lf-icon {\n  max-width: 16px;\n  max-height: 16px;\n}\n.lf-form-react-mantine .lf-control-button.lf-control-button-lg .lf-icon {\n  max-width: 24px;\n  max-height: 24px;\n}\n.lf-form-react-mantine .lf-control-button.lf-control-button-xs .lf-icon {\n  max-width: 16px;\n  max-height: 16px;\n}\n.lf-form-react-mantine .lf-control-button.lf-control-button-sm .lf-icon {\n  max-width: 18px;\n  max-height: 18px;\n}\n.lf-form-react-mantine .lf-control-button.lf-control-button-md .lf-icon {\n  max-width: 20px;\n  max-height: 20px;\n}\n.lf-form-react-mantine .lf-control-button.lf-control-button-xl .lf-icon {\n  max-width: 28px;\n  max-height: 28px;\n}";
styleInject(css_248z);

var _excluded = ["label", "icon", "hint", "tooltip"];
var MantineButton = function MantineButton(_ref) {
  var label = _ref.label,
    icon = _ref.icon,
    hint = _ref.hint,
    tooltip = _ref.tooltip,
    rest = _objectWithoutProperties(_ref, _excluded);
  var inner;
  if (!_isEmpty(label) && !_isEmpty(icon)) {
    inner = /*#__PURE__*/React.createElement(Button, _extends({
      leftSection: /*#__PURE__*/React.createElement("img", {
        className: "lf-icon",
        src: icon
      })
    }, rest), label);
  } else if (!_isEmpty(label) && _isEmpty(icon)) {
    inner = /*#__PURE__*/React.createElement(Button, rest, label);
  } else if (_isEmpty(label) && !_isEmpty(icon)) {
    inner = /*#__PURE__*/React.createElement(Button, _extends({
      leftSection: /*#__PURE__*/React.createElement("img", {
        className: "lf-icon",
        src: icon
      })
    }, rest));
  } else {
    inner = /*#__PURE__*/React.createElement(React.Fragment, null);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, !_isEmpty(hint) && tooltip && /*#__PURE__*/React.createElement(Tooltip, {
    label: hint,
    withArrow: true
  }, inner), (_isEmpty(hint) || !tooltip) && inner, !_isEmpty(hint) && !tooltip && /*#__PURE__*/React.createElement(Input.Description, null, hint));
};
var BiStateButton = I18N(MakeButton(MantineButton, {
  variant: 'filled'
}, {
  variant: 'outline'
}), ['labelOn', 'labelOff', 'labelLink', 'hint']);
lfLog('Loaded Mantine.Button');

export { BiStateButton as default };
