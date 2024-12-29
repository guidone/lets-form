/* LetsForm Generator v0.12.2 - ESM */
import React from 'react';
import { Form } from 'antd';
import { P as Placeholder } from './index-DX5jBLEl.js';
import { I as I18N, l as lfLog } from './index-C4M6Y7eO.js';
import 'react-hook-form';

var PlaceholderAntd = I18N(function (_ref) {
  var name = _ref.name,
    hint = _ref.hint,
    text = _ref.text,
    tooltip = _ref.tooltip,
    label = _ref.label;
  return /*#__PURE__*/React.createElement(Form.Item, {
    label: label,
    "data-lf-field-name": name,
    help: hint && !tooltip ? hint : undefined,
    tooltip: tooltip && hint,
    className: "lf-control-placeholder",
    valuePropName: null
  }, /*#__PURE__*/React.createElement(Placeholder, {
    text: text
  }));
}, ['label', 'hint', 'text']);
lfLog('Loaded AntD.Placeholder');

export { PlaceholderAntd as default };
