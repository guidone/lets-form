/* LetsForm Generator v0.7.20 - ESM */
import React from 'react';
import { Form } from 'antd';
import { P as Placeholder } from './index-B2v8eaI7.js';
import { I as I18N, l as lfLog } from './index-CT5v_Nvu.js';
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
    className: "lf-control-placeholder"
  }, /*#__PURE__*/React.createElement(Placeholder, {
    text: text
  }));
}, ['label', 'hint', 'text']);
lfLog('Loaded AntD.Placeholder');

export { PlaceholderAntd as default };
