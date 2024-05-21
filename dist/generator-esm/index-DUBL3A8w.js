/* LetsForm Generator v0.7.15 - ESM */
import React__default from 'react';
import { a as Form } from './Form-Bumt1K5q.js';
import { P as Placeholder } from './index-CIXJZPah.js';
import { I as I18N, l as lfLog } from './index-BlDYFeHM.js';
import './createWithBsPrefix-GNsR_EB9.js';
import 'prop-types';

var PlaceholderBootstrap = I18N(function (_ref) {
  var label = _ref.label,
    hint = _ref.hint,
    text = _ref.text,
    name = _ref.name;
  return /*#__PURE__*/React__default.createElement(Form.Group, {
    className: "lf-control-placeholder",
    "data-lf-field-name": name
  }, label && /*#__PURE__*/React__default.createElement(Form.Label, null, label), /*#__PURE__*/React__default.createElement(Placeholder, {
    text: text
  }), hint && /*#__PURE__*/React__default.createElement(Form.Text, null, hint));
}, ['label', 'hint', 'text']);
lfLog('Loaded ReactBootrap.Placeholder');

export { PlaceholderBootstrap as default };
