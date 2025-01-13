/* LetsForm Generator v0.12.4 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, a as _extends, m as makeClassName, f as filterOptions, c as makeWidthStyle, b as _isString, p as passRest, i as i18nOptions } from './index-lOgms5Ca.js';
import React from 'react';
import { MultiSelect } from '@mantine/core';
import 'react-hook-form';

var _excluded = ["name", "hint", "value", "error", "fullWidth", "width", "options", "filterValue", "filterKey", "className"];
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
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(MultiSelect, _extends({}, makeClassName('multiselect', name, className), {
    value: value,
    name: name,
    data: filterOptions(options, filterValue, filterKey) || [],
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
