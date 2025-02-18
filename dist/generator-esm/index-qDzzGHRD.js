/* LetsForm Generator v0.12.13 - ESM */
import { s as styleInject, I as I18N, l as lfLog, _ as _objectWithoutProperties, r as _isEmpty, a as _extends } from './index-COFOUgfY.js';
import React from 'react';
import { Button, Tooltip } from 'antd';
import { M as MakeButton } from './index-BCHnlPoA.js';

var css_248z = ".lf-form-react-antd .lf-control-button {\n  min-height: 20px;\n}\n.lf-form-react-antd .lf-control-button .ant-btn {\n  min-width: 32px;\n}\n.lf-form-react-antd .lf-control-button .lf-icon {\n  max-width: 16px;\n  max-height: 16px;\n  margin-top: -2px;\n}\n.lf-form-react-antd .lf-control-button .ant-btn-lg {\n  min-width: 40px;\n}\n.lf-form-react-antd .lf-control-button .ant-btn-lg .lf-icon {\n  max-width: 20px;\n  max-height: 20px;\n}\n.lf-form-react-antd .lf-control-button .ant-btn-sm {\n  min-width: 24px;\n}\n.lf-form-react-antd .lf-control-button .ant-btn-sm .lf-icon {\n  max-width: 14px;\n  max-height: 14px;\n}";
styleInject(css_248z);

var _excluded = ["label", "icon", "hint", "tooltip"];
var AntdButton = function AntdButton(_ref) {
  var label = _ref.label,
    icon = _ref.icon,
    hint = _ref.hint;
    _ref.tooltip;
    var rest = _objectWithoutProperties(_ref, _excluded);
  var inner;
  if (!_isEmpty(label) && !_isEmpty(icon)) {
    inner = /*#__PURE__*/React.createElement(Button, _extends({
      icon: /*#__PURE__*/React.createElement("img", {
        className: "lf-icon",
        src: icon
      })
    }, rest), label);
  } else if (!_isEmpty(label) && _isEmpty(icon)) {
    inner = /*#__PURE__*/React.createElement(Button, rest, label);
  } else if (_isEmpty(label) && !_isEmpty(icon)) {
    inner = /*#__PURE__*/React.createElement(Button, _extends({
      icon: /*#__PURE__*/React.createElement("img", {
        className: "lf-icon",
        src: icon
      })
    }, rest));
  } else {
    inner = /*#__PURE__*/React.createElement(React.Fragment, null);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, !_isEmpty(hint) && /*#__PURE__*/React.createElement(Tooltip, {
    title: hint
  }, inner), _isEmpty(hint) && inner);
};
var BiStateButton = I18N(MakeButton(AntdButton, {
  type: 'primary'
}, {
  type: undefined
}), ['labelOn', 'labelOff', 'labelLink', 'hint']);
lfLog('Loaded AntD.Button');

export { BiStateButton as default };
