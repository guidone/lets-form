/* LetsForm Generator v0.12.15 - ESM */
import { s as styleInject, I as I18N, l as lfLog, _ as _objectWithoutProperties, r as _isEmpty } from './index-7LChbcm9.js';
import React from 'react';
import { M as MakeButton } from './index-B3oO6xHf.js';

var css_248z = ".lf-form-react .lf-control-button {\n  min-height: 20px;\n}\n.lf-form-react .lf-control-button .lf-icon {\n  max-width: 20px;\n  max-height: 20px;\n  margin-top: -2px;\n  margin-right: 5px;\n}\n.lf-form-react .lf-control-button .btn-lg .lf-icon {\n  max-width: 24px;\n  max-height: 24px;\n}\n.lf-form-react .lf-control-button .btn-sm .lf-icon {\n  max-width: 16px;\n  max-height: 16px;\n}";
styleInject(css_248z);

var _excluded = ["label", "icon", "hint"];
var ReactButton = function ReactButton(_ref) {
  var label = _ref.label,
    icon = _ref.icon,
    hint = _ref.hint,
    rest = _objectWithoutProperties(_ref, _excluded);
  var inner;
  if (!_isEmpty(label) && !_isEmpty(icon)) {
    inner = /*#__PURE__*/React.createElement("button", rest, /*#__PURE__*/React.createElement("img", {
      className: "lf-icon",
      src: icon
    }), label);
  } else if (!_isEmpty(label) && _isEmpty(icon)) {
    inner = /*#__PURE__*/React.createElement("button", rest, label);
  } else if (_isEmpty(label) && !_isEmpty(icon)) {
    inner = /*#__PURE__*/React.createElement("button", rest, /*#__PURE__*/React.createElement("img", {
      className: "lf-icon",
      src: icon
    }));
  } else {
    inner = /*#__PURE__*/React.createElement(React.Fragment, null);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, inner, hint && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "lf-form-react-message"
  }, hint)));
};
var BiStateButton = I18N(MakeButton(ReactButton, function (props) {
  return {
    className: 'lf-form-react-primary-button'
  };
}, function (props) {
  return {
    className: 'lf-form-react-secondary-button'
  };
}, function (props) {
  return {
    className: 'lf-form-react-primary-button',
    onClick: function onClick() {
      return window.location = props.href;
    }
  };
}), ['labelOn', 'labelOff', 'labelLink', 'hint']);
lfLog('Loaded React.Button');
var Button = BiStateButton;

export { Button as default };
