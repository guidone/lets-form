/* LetsForm Generator v0.7.15 - ESM */
import { s as styleInject, I as I18N, l as lfLog, a as _objectWithoutProperties, r as _isEmpty } from './index-BlDYFeHM.js';
import React__default from 'react';
import { M as MakeButton } from './index-sBL1OPTS.js';
import { a as Form } from './Form-Bumt1K5q.js';
import { B as Button } from './Button-ss2xyIv3.js';
import './createWithBsPrefix-GNsR_EB9.js';
import 'prop-types';
import './Button-B76UWB9X.js';

var css_248z = ".lf-form-react-bootstrap .lf-control-button {\n  min-height: 20px;\n}\n.lf-form-react-bootstrap .lf-control-button .lf-icon {\n  max-width: 20px;\n  max-height: 20px;\n  margin-top: -2px;\n  margin-right: 5px;\n}\n.lf-form-react-bootstrap .lf-control-button .btn-lg .lf-icon {\n  max-width: 24px;\n  max-height: 24px;\n}\n.lf-form-react-bootstrap .lf-control-button .btn-sm .lf-icon {\n  max-width: 16px;\n  max-height: 16px;\n}";
styleInject(css_248z);

var _excluded = ["label", "icon", "hint"];
var BootstrapButton = function BootstrapButton(_ref) {
  var label = _ref.label,
    icon = _ref.icon,
    hint = _ref.hint,
    rest = _objectWithoutProperties(_ref, _excluded);
  var inner;
  if (!_isEmpty(label) && !_isEmpty(icon)) {
    inner = /*#__PURE__*/React__default.createElement(Button, rest, /*#__PURE__*/React__default.createElement("img", {
      className: "lf-icon",
      src: icon
    }), label);
  } else if (!_isEmpty(label) && _isEmpty(icon)) {
    inner = /*#__PURE__*/React__default.createElement(Button, rest, label);
  } else if (_isEmpty(label) && !_isEmpty(icon)) {
    inner = /*#__PURE__*/React__default.createElement(Button, rest, /*#__PURE__*/React__default.createElement("img", {
      className: "lf-icon",
      src: icon
    }));
  } else {
    inner = /*#__PURE__*/React__default.createElement(React__default.Fragment, null);
  }
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, inner, hint && /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Form.Text, null, hint)));
};
var BiStateButton = I18N(MakeButton(BootstrapButton, function (props) {
  return {
    variant: props.variant || 'primary'
  };
}, function (props) {
  return {
    variant: 'outline-' + (props.variant || 'primary')
  };
}), ['labelOn', 'labelOff', 'labelLink', 'hint']);
lfLog('Loaded ReactBootrap.Button');

export { BiStateButton as default };
