/* LetsForm Generator v0.7.12 - ESM */
import { s as styleInject, I as I18N, l as lfLog, a as _objectWithoutProperties, r as _isEmpty, b as _extends, p as passRest } from './index-DRF8thTp.js';
import React__default from 'react';
import Button from 'rsuite/Button';
import IconButton from 'rsuite/IconButton';
import Whisper from 'rsuite/Whisper';
import Tooltip from 'rsuite/Tooltip';
import Form from 'rsuite/Form';
import { M as MakeButton } from './index-zGb3Jiur.js';

var css_248z = ".lf-form-react-rsuite5 .lf-control-button {\n  min-height: 20px;\n}\n.lf-form-react-rsuite5 .lf-control-button .lf-icon {\n  max-width: 16px;\n  max-height: 16px;\n}\n.lf-form-react-rsuite5 .lf-control-button .rs-btn-lg .lf-icon {\n  max-width: 20px;\n  max-height: 20px;\n}\n.lf-form-react-rsuite5 .lf-control-button .rs-btn-xs .lf-icon {\n  max-width: 12px;\n  max-height: 12px;\n}";
styleInject(css_248z);

var _excluded = ["label", "icon", "hint", "tooltip"];
var RSuiteButton = function RSuiteButton(_ref) {
  var label = _ref.label,
    icon = _ref.icon,
    hint = _ref.hint,
    tooltip = _ref.tooltip,
    rest = _objectWithoutProperties(_ref, _excluded);
  var inner;
  if (!_isEmpty(label) && !_isEmpty(icon)) {
    inner = /*#__PURE__*/React__default.createElement(Button, _extends({
      startIcon: /*#__PURE__*/React__default.createElement("img", {
        className: "lf-icon",
        src: icon
      })
    }, passRest(rest)), label);
  } else if (!_isEmpty(label) && _isEmpty(icon)) {
    inner = /*#__PURE__*/React__default.createElement(Button, passRest(rest), label);
  } else if (_isEmpty(label) && !_isEmpty(icon)) {
    inner = /*#__PURE__*/React__default.createElement(IconButton, _extends({
      icon: /*#__PURE__*/React__default.createElement("img", {
        className: "lf-icon",
        src: icon
      })
    }, passRest(rest)));
  } else {
    inner = /*#__PURE__*/React__default.createElement(React__default.Fragment, null);
  }
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, !_isEmpty(hint) && tooltip && /*#__PURE__*/React__default.createElement(Whisper, {
    placement: "top",
    trigger: "hover",
    speaker: /*#__PURE__*/React__default.createElement(Tooltip, null, hint)
  }, inner), (_isEmpty(hint) || !tooltip) && inner, !_isEmpty(hint) && !tooltip && /*#__PURE__*/React__default.createElement(Form.HelpText, null, hint));
};
var BiStateButton = I18N(MakeButton(RSuiteButton, {
  appearance: 'primary'
}, {
  appearance: 'ghost'
}), ['labelOn', 'labelOff', 'labelLink', 'hint']);
lfLog('Loaded RSuite5.Button');

export { BiStateButton as default };
