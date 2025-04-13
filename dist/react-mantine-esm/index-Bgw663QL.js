/* LetsForm react-mantine v0.13.0 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, a as _extends, m as makeClassName, b as makeWidthStyle, c as _isString, f as filterOptions, p as passRest, e as _objectSpread2, i as i18nOptions } from './index-DLdYirby.js';
import React from 'react';
import { Select } from '@mantine/core';

var _excluded = ["name", "hint", "value", "error", "fullWidth", "width", "options", "filterValue", "filterKey", "className"];

// Mantine Select breaks if value is null
var ensureNotNull = function ensureNotNull(options) {
  return options.map(function (option) {
    if (option.value == null) {
      var _option$label;
      return _objectSpread2(_objectSpread2({}, option), {}, {
        value: '',
        label: (_option$label = option.label) !== null && _option$label !== void 0 ? _option$label : ''
      });
    }
    return option;
  });
};
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
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Select, _extends({}, makeClassName('select', name, className), {
    style: makeWidthStyle(fullWidth, width),
    description: hint,
    error: _isString(error) ? error : undefined,
    inputWrapperOrder: ['label', 'input', 'description', 'error'],
    value: value,
    name: name,
    data: ensureNotNull(filterOptions(options, filterValue, filterKey) || [])
  }, passRest(rest)));
}, ['label', 'hint', 'placeholder', 'nothingFoundMessage'], {
  options: i18nOptions
});
lfLog('Loaded Mantine.Select');

export { MantineSelect as default };
