/* LetsForm Generator v0.13.0 - ESM */
import { _ as _objectWithoutProperties, e as _slicedToArray, Q as lfWarn, a as _extends, c as makeWidthStyle, g as _defineProperty } from './index-Df19TMKV.js';
import React, { useRef, useState, useEffect, useCallback } from 'react';

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
  var formatted = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  }).format(1);
  if (formatted.includes('1.00')) {
    return formatted.indexOf('1.00');
  } else if (formatted.includes('1,00')) {
    return formatted.indexOf('1,00');
  }
  return 0;
};

var _excluded = ["defaultValue", "control", "onChange", "locale", "currency", "fullWidth", "width", "align"];
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
    propCurrency = _ref.currency,
    _ref$fullWidth = _ref.fullWidth,
    fullWidth = _ref$fullWidth === void 0 ? true : _ref$fullWidth,
    width = _ref.width,
    align = _ref.align,
    rest = _objectWithoutProperties(_ref, _excluded);
  var currency = propCurrency || 'EUR';
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
  var _useState5 = useState(1),
    _useState6 = _slicedToArray(_useState5, 2),
    generation = _useState6[0],
    setGeneration = _useState6[1];
  if (!propCurrency) {
    lfWarn("Empty currency property for currency field, defaulting to \"EUR\"");
  }
  useEffect(function () {
    var _ref$current, _ref$current$querySel;
    var caret = refCaret.current;
    var element = (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : (_ref$current$querySel = _ref$current.querySelectorAll('input')) === null || _ref$current$querySel === void 0 ? void 0 : _ref$current$querySel[0];
    if (caret && element) {
      setCaretPosition(element, caret);
      // void the caret update position, otherwise any refresh of the
      // form will steal the focus in favour of the currency box
      refCaret.current = null;
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

    // if the formatted value has already a decimal separator and the user hits
    // the decimal separator, then move the cursor after it
    if (visibileValue && (e.nativeEvent.data === ',' || e.nativeEvent.data === '.') && (visibileValue.indexOf('.') || visibileValue.indexOf(','))) {
      // set position of caret after the decimal separator
      var decimalMarker = getDecimalSeparator(locale);
      refCaret.current = visibileValue.indexOf(decimalMarker) + 1;
      // trigger manual refresh of the component
      setGeneration(function (generation) {
        return generation + 1;
      });
      return;
    }

    // calculate the additional chars (like currency symbol, thousands separator) in the
    // formatted value up to the caret position in both previuos and new formatted value
    // (consider the previous value the caret position is one characted before)
    // also if user hit backspace, the new caret position is one less
    var extraCharsBefore = extraCharsUpToCaret(visibileValue, caretPosition - 1);
    var extraCharsAfter = extraCharsUpToCaret(newVisibleValue, caretPosition + (e.nativeEvent.inputType === 'deleteContentBackward' ? -1 : 0) + (visibileValue === '' ? getExtraLeadingChars(locale, currency) : 0));

    // the difference between the two values, is the number of position the caret should be
    // displaced to keep consistency with what the user is typing, for example starting
    // with a blank value, if the user types "1" if it becomes "$ 1.00", the new caret is not
    // 1 but 1 + 2 (the dollar and the space)
    refCaret.current = caretPosition + extraCharsAfter - extraCharsBefore;

    //console.log('Extra chars for currency', (visibileValue === '' ? getExtraLeadingChars(locale, currency) : 0))
    //console.log(`Extra chars up to caret before (${caretPosition})`, extraCharsBefore)
    //console.log(`Extra chars up to caret after (${caretPosition})`, extraCharsAfter);
    //console.log('New caret position ', refCaret.current);

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
    key: "generation_".concat(generation),
    onChange: handleChange,
    style: makeWidthStyle(fullWidth, width, _defineProperty({}, align ? 'text-align' : undefined, align)),
    onKeyPress: handleKeyPress
  }, rest)));
};

export { CommonCurrency as C };
