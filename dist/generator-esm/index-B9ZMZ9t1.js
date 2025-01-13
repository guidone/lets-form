/* LetsForm Generator v0.16.6 - ESM */
import { I as I18N, l as lfLog, a as _extends, m as makeClassName } from './index-Cn3Pub6c.js';
import React from 'react';
import { Form } from 'antd';
import { P as Placeholder } from './index-BeX263aE.js';
import 'react-hook-form';

var PlaceholderAntd = I18N(function (_ref) {
  var name = _ref.name,
    hint = _ref.hint,
    text = _ref.text,
    tooltip = _ref.tooltip,
    label = _ref.label,
    className = _ref.className;
  return /*#__PURE__*/React.createElement(Form.Item, _extends({}, makeClassName('placeholder', name, className), {
    label: label,
    help: hint && !tooltip ? hint : undefined,
    tooltip: tooltip && hint,
    valuePropName: null
  }), /*#__PURE__*/React.createElement(Placeholder, {
    text: text
  }));
}, ['label', 'hint', 'text']);
lfLog('Loaded AntD.Placeholder');

export { PlaceholderAntd as default };
