/* LetsForm Generator v0.7.13-beta-4 - ESM */
import { I as I18N, l as lfLog, a as _objectWithoutProperties, b as _extends, m as makeWidthStyle, _ as _isString, f as filterOptions, p as passRest, i as i18nOptions } from './index-D3dblykA.js';
import React from 'react';
import { Select } from '@mantine/core';
import 'react-hook-form';

var _excluded = ["name", "hint", "value", "error", "fullWidth", "width", "options", "filterValue", "filterKey"];
var MantineSelect = I18N(function (_ref) {
  var name = _ref.name,
    hint = _ref.hint,
    value = _ref.value,
    error = _ref.error,
    fullWidth = _ref.fullWidth,
    width = _ref.width,
    options = _ref.options,
    filterValue = _ref.filterValue,
    filterKey = _ref.filterKey,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Select, _extends({
    className: "lf-control-select",
    "data-lf-field-name": name,
    style: makeWidthStyle(fullWidth, width),
    description: hint,
    error: _isString(error) ? error : undefined,
    inputWrapperOrder: ['label', 'input', 'description', 'error'],
    value: value,
    name: name,
    data: filterOptions(options, filterValue, filterKey) || []
  }, passRest(rest)));
}, ['label', 'hint', 'placeholder', 'nothingFoundMessage'], {
  options: i18nOptions
});
lfLog('Loaded Mantine.Select');

export { MantineSelect as default };
