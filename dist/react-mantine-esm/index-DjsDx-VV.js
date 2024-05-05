/* LetsForm react-mantine v0.7.10 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, m as makeWidthStyle, b as _isString, a as _extends, f as filterOptions, p as passRest, i as i18nOptions } from './index-DLATXBUL.js';
import React from 'react';
import { Input, Select } from '@mantine/core';

var _excluded = ["name", "hint", "value", "error", "fullWidth", "width", "options", "filterValue", "filterKey", "lfOnEnter"];

// TODO filter done with proper params

var MantineSelect = I18N(function (_ref) {
  var name = _ref.name,
    hint = _ref.hint,
    value = _ref.value,
    error = _ref.error,
    fullWidth = _ref.fullWidth,
    width = _ref.width,
    options = _ref.options,
    filterValue = _ref.filterValue,
    filterKey = _ref.filterKey;
    _ref.lfOnEnter;
    var rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Input.Wrapper, {
    className: "lf-control-select",
    "data-lf-field-name": name,
    style: makeWidthStyle(fullWidth, width),
    description: hint,
    error: _isString(error) ? error : undefined,
    inputWrapperOrder: ['label', 'input', 'description', 'error']
  }, /*#__PURE__*/React.createElement(Select, _extends({
    value: value,
    name: name,
    data: filterOptions(options, filterValue, filterKey) || []
  }, passRest(rest))));
}, ['label', 'hint', 'placeholder'], {
  options: i18nOptions
});
lfLog('Loaded Mantine.Select');

export { MantineSelect as default };
