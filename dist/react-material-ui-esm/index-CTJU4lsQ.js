/* LetsForm react-material-ui v0.12.13 - ESM */
import { _ as _objectWithoutProperties, w as _slicedToArray, a as _extends, j as makeWidthStyle, I as I18N, l as lfLog, m as makeClassName, p as passRest } from './index-BGT-Q_H0.js';
import React, { useRef, useState, useEffect, useCallback, useId } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import FormLabel from '@mui/material/FormLabel';
import { T as TextOrIcon } from './index-D4KlzTLU.js';

var formatCurrency = function formatCurrency(value, locale, currency) {
  if (value === null || value === undefined || value === '') {
    return '';
  }
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  }).format(value);
};
function getDecimalSeparator(locale) {
  var numberWithDecimalSeparator = 1.1;
  return Intl.NumberFormat(locale).formatToParts(numberWithDecimalSeparator).find(function (part) {
    return part.type === 'decimal';
  }).value;
}
var parseCurrency = function parseCurrency(str, locale) {
  if (!str) {
    return null;
  }
  var thousandsMarker = getThousandsSeparator(locale);
  var decimalMarker = getDecimalSeparator(locale);
  var toLocalDecimal = str.replace(/[^0-9.,]/g, '') // remove everything but numbers, decimal and comma
  .replaceAll(thousandsMarker, '') // replace thousand marker with void
  .replaceAll(decimalMarker, '.'); // replace decimal marker with .

  var parsed = parseFloat(toLocalDecimal);
  return !isNaN(parsed) ? parsed : null;
};
function setCaretPosition(elem, caretPos) {
  if (elem != null) {
    if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.move('character', caretPos);
      range.select();
    } else {
      if (elem.selectionStart) {
        elem.focus();
        elem.setSelectionRange(caretPos, caretPos);
      } else elem.focus();
    }
  }
}
var extraCharsUpToCaret = function extraCharsUpToCaret(str, position) {
  return str.slice(0, position).replaceAll(/[0-9]/g, '').length;
};
var getThousandsSeparator = function getThousandsSeparator(locale) {
  var _Intl$NumberFormat$fo, _Intl$NumberFormat$fo2;
  return (_Intl$NumberFormat$fo = (_Intl$NumberFormat$fo2 = new Intl.NumberFormat(locale).formatToParts(1000).find(function (part) {
    return part.type === 'group';
  })) === null || _Intl$NumberFormat$fo2 === void 0 ? void 0 : _Intl$NumberFormat$fo2.value) !== null && _Intl$NumberFormat$fo !== void 0 ? _Intl$NumberFormat$fo : '';
};
var getExtraLeadingChars = function getExtraLeadingChars(locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  }).format(1).replace('1.00', '').replace('1,00', '').length;
};

var _excluded$1 = ["defaultValue", "control", "onChange", "locale", "currency", "fullWidth", "width"];
var isEvent = function isEvent(obj) {
  return obj === null || obj === void 0 ? void 0 : obj.target;
};
var ALLOWED_CHARS = '01234567890,.';
var CommonCurrency = function CommonCurrency(_ref) {
  var defaultValue = _ref.defaultValue,
    Control = _ref.control,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    locale = _ref.locale,
    currency = _ref.currency,
    _ref$fullWidth = _ref.fullWidth,
    fullWidth = _ref$fullWidth === void 0 ? true : _ref$fullWidth,
    width = _ref.width,
    rest = _objectWithoutProperties(_ref, _excluded$1);
  var ref = useRef();
  var refCaret = useRef();
  var _useState = useState(defaultValue),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var _useState3 = useState(formatCurrency(defaultValue, locale, currency)),
    _useState4 = _slicedToArray(_useState3, 2),
    visibileValue = _useState4[0],
    setVisibleValue = _useState4[1];
  useEffect(function () {
    var _ref$current, _ref$current$querySel;
    var caret = refCaret.current;
    var element = (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : (_ref$current$querySel = _ref$current.querySelectorAll('input')) === null || _ref$current$querySel === void 0 ? void 0 : _ref$current$querySel[0];
    if (caret && element) {
      setCaretPosition(element, caret);
    }
  });
  var handleChange = useCallback(function () {
    var _e$target$selectionSt;
    // pick right value and events, differs for different frameworks
    var e, value;
    if (isEvent(arguments[0])) {
      e = arguments[0];
      value = e.target.value;
    } else if (arguments.length >= 2 && isEvent(arguments[1])) {
      e = arguments[1];
      value = arguments[0];
    }
    var caretPosition = (_e$target$selectionSt = e.target.selectionStart) !== null && _e$target$selectionSt !== void 0 ? _e$target$selectionSt : 0;
    var currentValue = parseCurrency(value, locale);
    var newVisibleValue = formatCurrency(currentValue, locale, currency);

    // calculate the additional chars (like currency symbol, thousands separator) in the
    // formatted value up to the caret position in both previuos and new formatted value
    // (consider the previous value the caret position is one characted before)
    // also if user hit backspace, the new caret position is one less
    var extraCharsBefore = extraCharsUpToCaret(visibileValue, caretPosition - 1);
    var extraCharsAfter = extraCharsUpToCaret(newVisibleValue, caretPosition + (e.nativeEvent.inputType === 'deleteContentBackward' ? -1 : 0) + (visibileValue === '' ? getExtraLeadingChars(locale, currency) : 0));

    //console.log('extra chars for currency', (visibileValue === '' ? getExtraLeadingChars(locale, currency) : 0))
    //console.log(`extra chars up to caret before (${caretPosition})`, extraCharsBefore)
    //console.log(`extra chars up to caret after (${caretPosition})`, extraCharsAfter);

    // the difference between the two values, is the number of position the caret should be
    // displaced to keep consistency with what the user is typing, for example starting
    // with a blank value, if the user types "1" if it becomes "$ 1.00", the new caret is not
    // 1 but 1 + 2 (the dollar and the space)
    refCaret.current = caretPosition + extraCharsAfter - extraCharsBefore;

    // set states, onKeyPress already handles invalid chars, so this alwayas updates
    setValue(currentValue);
    setVisibleValue(newVisibleValue);

    // propagate changed value
    onChange(currentValue);
  }, [visibileValue, currency, locale]);
  var handleKeyPress = useCallback(function (e) {
    // stop propagation for all chars not valid for any currency, just digits , and .
    if (!ALLOWED_CHARS.includes(String.fromCharCode(e.charCode))) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }, []);

  // redesign formatted value if changes currency and locale
  useEffect(function () {
    var newVisibleValue = formatCurrency(value, locale, currency);
    setVisibleValue(newVisibleValue);
  }, [currency, locale]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref
  }, /*#__PURE__*/React.createElement(Control, _extends({
    value: visibileValue,
    onChange: handleChange,
    style: makeWidthStyle(fullWidth, width),
    onKeyPress: handleKeyPress
  }, rest)));
};

var _excluded = ["name", "label", "hint", "value", "size", "error", "disabled", "readOnly", "required", "floatingLabel", "className", "lfLocale"];
// DOC: https://mui.com/material-ui/api/input/

var Currency = I18N(function (_ref) {
  var _rest$variant, _rest$variant2;
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    value = _ref.value;
    _ref.size;
    var error = _ref.error;
    _ref.disabled;
    var _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    required = _ref.required,
    floatingLabel = _ref.floatingLabel,
    className = _ref.className,
    lfLocale = _ref.lfLocale,
    rest = _objectWithoutProperties(_ref, _excluded);
  var controlId = useId();
  return /*#__PURE__*/React.createElement("div", makeClassName('currency', name, className), /*#__PURE__*/React.createElement(FormControl, {
    required: required,
    error: error != null,
    variant: (_rest$variant = rest.variant) !== null && _rest$variant !== void 0 ? _rest$variant : undefined,
    fullWidth: rest.fullWidth
  }, label && !floatingLabel && /*#__PURE__*/React.createElement(FormLabel, {
    id: controlId
  }, label), /*#__PURE__*/React.createElement(CommonCurrency, _extends({
    defaultValue: value,
    control: TextField,
    locale: lfLocale,
    required: floatingLabel ? rest.required : undefined,
    style: _.isNumber(rest.width) && !rest.fullWidth ? {
      width: "".concat(parseInt(rest.width, 10), "px")
    } : undefined,
    InputProps: {
      startAdornment: rest.prefix ? /*#__PURE__*/React.createElement(InputAdornment, {
        position: "start"
      }, TextOrIcon(rest.prefix)) : undefined,
      endAdornment: rest.postfix ? /*#__PURE__*/React.createElement(InputAdornment, {
        position: "end"
      }, TextOrIcon(rest.postfix)) : undefined,
      disableUnderline: rest.disableUnderline,
      readOnly: readOnly,
      autoComplete: rest.autocomplete
    },
    variant: (_rest$variant2 = rest.variant) !== null && _rest$variant2 !== void 0 ? _rest$variant2 : undefined,
    label: floatingLabel ? rest.label : undefined
  }, passRest(rest))), hint && !error && /*#__PURE__*/React.createElement(FormHelperText, null, hint), error && /*#__PURE__*/React.createElement(FormHelperText, null, error)));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded MUI.Currency');

export { Currency as default };
