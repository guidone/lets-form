/* LetsForm Generator v0.12.3 - ESM */
import { I as I18N, l as lfLog, a as _objectWithoutProperties, b as _extends, f as filterOptions, m as makeWidthStyle, _ as _isString, p as passRest, i as i18nOptions } from './index-Cebqt3cA.js';
import React from 'react';
import { MultiSelect } from '@mantine/core';
import 'react-hook-form';

var _excluded = ["name", "hint", "value", "error", "fullWidth", "width", "options", "filterValue", "filterKey"];
var MantineMultiSelect = I18N(function (_ref) {
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
  return /*#__PURE__*/React.createElement(MultiSelect, _extends({
    value: value,
    name: name,
    data: filterOptions(options, filterValue, filterKey) || [],
    className: "lf-control-select",
    "data-lf-field-name": name,
    style: makeWidthStyle(fullWidth, width),
    description: hint,
    error: _isString(error) ? error : undefined,
    inputWrapperOrder: ['label', 'input', 'description', 'error']
  }, passRest(rest)));
}, ['label', 'hint', 'placeholder', 'nothingFoundMessage'], {
  options: i18nOptions
});
lfLog('Loaded Mantine.MultiSelect');

export { MantineMultiSelect as default };
