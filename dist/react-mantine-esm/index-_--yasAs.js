/* LetsForm React-Mantine v0.7.9 - ESM */
import React from 'react';
import { Input } from '@mantine/core';
import { v as _isEmpty, A as markdown, I as I18N, l as lfLog } from './index-CbaSUw6g.js';

var Placeholder = function Placeholder(_ref) {
  var text = _ref.text,
    name = _ref.name;
  if (!_isEmpty(text)) {
    return /*#__PURE__*/React.createElement("div", {
      className: "lf-control-placeholder",
      "data-lf-field-name": name,
      dangerouslySetInnerHTML: {
        __html: markdown.parse(text)
      }
    });
  } else {
    return /*#__PURE__*/React.createElement("div", null);
  }
};

var PlaceholderMantine = I18N(function (_ref) {
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    text = _ref.text;
  return /*#__PURE__*/React.createElement(Input.Wrapper, {
    className: "lf-control-rate",
    "data-lf-field-name": name,
    description: hint,
    inputWrapperOrder: ['label', 'input', 'description', 'error'],
    label: label
  }, /*#__PURE__*/React.createElement(Placeholder, {
    text: text
  }));
}, ['label', 'hint', 'text']);
lfLog('Loaded Mantine.Placeholder');

export { PlaceholderMantine as default };
