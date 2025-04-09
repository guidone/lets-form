/* LetsForm react-mantine v0.12.17 - ESM */
import { I as I18N, l as lfLog, _ as _objectWithoutProperties, a as _extends, m as makeClassName, b as makeWidthStyle, c as _isString, p as passRest, d as _omit } from './index-DE4udUs4.js';
import React from 'react';
import { TextInput } from '@mantine/core';
import { C as CommonCurrency } from './index-DRBN7vU5.js';

var _excluded = ["name", "hint", "value", "fullWidth", "width", "error", "className", "lfLocale"];
var Currency = I18N(function (_ref) {
  var name = _ref.name,
    hint = _ref.hint,
    value = _ref.value,
    fullWidth = _ref.fullWidth,
    width = _ref.width,
    error = _ref.error,
    className = _ref.className,
    lfLocale = _ref.lfLocale,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(CommonCurrency, _extends({
    defaultValue: value,
    control: TextInput,
    locale: lfLocale
  }, makeClassName('currency', name, className), {
    //value={value}
    style: makeWidthStyle(fullWidth, width),
    description: hint,
    error: _isString(error) ? error : undefined,
    inputWrapperOrder: ['label', 'input', 'description', 'error']
  }, passRest(_omit(rest, 'inputType', 'inputMode'))));

  /*return (
    <TextInput
      {...makeClassName('currency', name, className)}
      value={value}
      style={makeWidthStyle(fullWidth, width)}
      description={hint}
      error={_.isString(error) ? error : undefined }
      inputWrapperOrder={['label', 'input', 'description', 'error']}
      onChange={handleChange}
      onBlur={onBlur}
      onKeyUp={submitOnEnter ? handleKeyUp : undefined}
      type={rest.inputType ? rest.inputType : undefined}
      inputmode={rest.inputMode ? rest.inputMode : undefined}
      {...passRest(_.omit(rest, 'inputType', 'inputMode'))}
    />*/
  //);
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded Mantine.Currency');

export { Currency as default };
