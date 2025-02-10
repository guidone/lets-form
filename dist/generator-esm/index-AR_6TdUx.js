/* LetsForm Generator v0.12.11 - ESM */
import { s as styleInject, I as I18N, l as lfLog, _ as _objectWithoutProperties, r as _isEmpty, a as _extends } from './index-_-9GIr6q.js';
import React from 'react';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import { M as MakeButton } from './index-2hGdk_TW.js';

var css_248z = ".lf-form-react-material-ui .lf-control-button {\n  min-height: 20px;\n}\n.lf-form-react-material-ui .lf-control-button .lf-icon {\n  max-width: 20px;\n  max-height: 20px;\n}\n.lf-form-react-material-ui .lf-control-button .MuiButton-sizeLarge .lf-icon {\n  max-width: 22px;\n  max-height: 22px;\n}\n.lf-form-react-material-ui .lf-control-button .MuiButton-sizeSmall .lf-icon {\n  max-width: 18px;\n  max-height: 18px;\n}\n.lf-form-react-material-ui .lf-control-button .only-icon {\n  min-width: inherit;\n}\n.lf-form-react-material-ui .lf-control-button .only-icon .MuiButton-startIcon {\n  margin-right: 0px !important;\n}";
styleInject(css_248z);

var _excluded = ["label", "icon", "hint", "tooltip", "variant", "size", "color"];
var MuiButton = function MuiButton(_ref) {
  var label = _ref.label,
    icon = _ref.icon,
    hint = _ref.hint,
    tooltip = _ref.tooltip,
    variant = _ref.variant,
    size = _ref.size,
    color = _ref.color,
    rest = _objectWithoutProperties(_ref, _excluded);
  var inner;
  if (!_isEmpty(label) && !_isEmpty(icon)) {
    inner = /*#__PURE__*/React.createElement(Button, _extends({
      startIcon: /*#__PURE__*/React.createElement("img", {
        className: "lf-icon",
        src: icon
      }),
      variant: variant || 'contained',
      size: size !== null && size !== void 0 ? size : undefined,
      color: color !== null && color !== void 0 ? color : undefined
    }, rest), label);
  } else if (!_isEmpty(label) && _isEmpty(icon)) {
    inner = /*#__PURE__*/React.createElement(Button, _extends({
      variant: variant || 'contained',
      size: size !== null && size !== void 0 ? size : undefined,
      color: color !== null && color !== void 0 ? color : undefined
    }, rest), label);
  } else if (_isEmpty(label) && !_isEmpty(icon)) {
    inner = /*#__PURE__*/React.createElement(Button, _extends({
      className: "only-icon",
      startIcon: /*#__PURE__*/React.createElement("img", {
        className: "lf-icon",
        src: icon
      }),
      variant: variant || 'contained',
      size: size !== null && size !== void 0 ? size : undefined,
      color: color !== null && color !== void 0 ? color : undefined
    }, rest));
  } else {
    inner = /*#__PURE__*/React.createElement(React.Fragment, null);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, (_isEmpty(hint) || !tooltip) && inner, !_isEmpty(hint) && /*#__PURE__*/React.createElement(FormHelperText, null, hint));
};
var BiStateButton = I18N(MakeButton(MuiButton, {
  variant: 'contained'
}, {
  variant: 'outlined'
}), ['labelOn', 'labelOff', 'labelLink', 'hint']);
lfLog('Loaded MUI.Button');

export { BiStateButton as default };
