/* LetsForm react-mantine v0.12.1 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, a as _extends, m as makeWidthStyle, b as _isString, p as passRest, i as i18nOptions } from './index-BN_VFCEi.js';
import React from 'react';
import { TagsInput } from '@mantine/core';
import 'react-hook-form';

var _excluded = ["name", "hint", "value", "error", "fullWidth", "width", "data"];
var MantineTags = I18N(function (_ref) {
  var name = _ref.name,
    hint = _ref.hint,
    value = _ref.value,
    error = _ref.error,
    fullWidth = _ref.fullWidth,
    width = _ref.width,
    data = _ref.data,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(TagsInput, _extends({
    className: "lf-control-input-tag",
    "data-lf-field-name": name,
    style: makeWidthStyle(fullWidth, width),
    value: value,
    name: name,
    description: hint,
    error: _isString(error) ? error : undefined,
    inputWrapperOrder: ['label', 'input', 'description', 'error'],
    data: (data || []).filter(function (option) {
      return option.value && option.label;
    })
  }, passRest(rest)));
}, ['label', 'hint', 'placeholder'], i18nOptions);
lfLog('Loaded Mantine.InputTags');

export { MantineTags as default };
