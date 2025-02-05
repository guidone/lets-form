/* LetsForm react-mantine v0.12.8 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, a as _extends, m as makeClassName, c as _isString, p as passRest } from './index-CB6y6FWa.js';
import React, { useCallback } from 'react';
import { Switch } from '@mantine/core';

var _excluded = ["name", "hint", "value", "onChange", "error", "description", "className"];
var MantineToggle = I18N(function (_ref) {
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
  return /*#__PURE__*/React.createElement(Switch, _extends({}, makeClassName('toggle', name, className), {
    checked: value,
    name: name,
    onChange: handleChange,
    description: hint,
    error: _isString(error) ? error : undefined,
    inputWrapperOrder: ['label', 'input', 'description', 'error']
  }, passRest(rest)));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded Mantine.Toggle');

export { MantineToggle as default };
