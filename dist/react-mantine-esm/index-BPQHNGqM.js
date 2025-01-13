/* LetsForm react-mantine v0.12.4 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, a as _extends, m as makeClassName, c as _isString, p as passRest } from './index-D2vOmBR1.js';
import React, { useCallback } from 'react';
import { Checkbox } from '@mantine/core';
import 'react-hook-form';

var _excluded = ["name", "hint", "value", "onChange", "error", "description", "className"];
var MantineCheckbox = I18N(function (_ref) {
  var name = _ref.name,
    hint = _ref.hint,
    value = _ref.value,
    onChange = _ref.onChange,
    error = _ref.error;
    _ref.description;
    var className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var handleChange = useCallback(function (event) {
    return onChange(event.currentTarget.checked);
  }, [onChange]);
  return /*#__PURE__*/React.createElement(Checkbox, _extends({}, makeClassName('checkbox', name, className), {
    checked: value,
    name: name,
    onChange: handleChange,
    description: hint,
    error: _isString(error) ? error : undefined,
    inputWrapperOrder: ['label', 'input', 'description', 'error']
  }, passRest(rest)));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded Mantine.Checkbox');

export { MantineCheckbox as default };
