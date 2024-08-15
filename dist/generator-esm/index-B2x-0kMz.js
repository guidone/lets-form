/* LetsForm Generator v0.10.3 - ESM */
import { s as styleInject, I as I18N, l as lfLog, a as _objectWithoutProperties, r as _isEmpty } from './index-DTOarPRu.js';
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { M as MakeButton } from './index-CfAIzxeq.js';
import 'react-hook-form';

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
    inner = /*#__PURE__*/React.createElement(Button, rest, /*#__PURE__*/React.createElement("img", {
      className: "lf-icon",
      src: icon
    }), label);
  } else if (!_isEmpty(label) && _isEmpty(icon)) {
    inner = /*#__PURE__*/React.createElement(Button, rest, label);
  } else if (_isEmpty(label) && !_isEmpty(icon)) {
    inner = /*#__PURE__*/React.createElement(Button, rest, /*#__PURE__*/React.createElement("img", {
      className: "lf-icon",
      src: icon
    }));
  } else {
    inner = /*#__PURE__*/React.createElement(React.Fragment, null);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, inner, hint && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Form.Text, null, hint)));
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
