import React, { useCallback, useState, useRef, useEffect } from 'react';

import { makeWidthStyle } from '../../helpers/make-width-style';

import {
  formatCurrency,
  parseCurrency,
  setCaretPosition,
  extraCharsUpToCaret,
  getExtraLeadingChars
} from './helpers';

const isEvent = obj => obj?.target;

const ALLOWED_CHARS = '01234567890,.';

const CommonCurrency = ({
  defaultValue,
  control: Control,
  onChange = () => { },
  locale,
  currency,
  fullWidth = true,
  width,
  ...rest
}) => {
  const ref = useRef();
  const refCaret = useRef();
  const [value, setValue] = useState(defaultValue);
  const [visibileValue, setVisibleValue] = useState(formatCurrency(defaultValue, locale, currency));

  useEffect(
    () => {
      const caret = refCaret.current;
      const element = ref.current?.querySelectorAll('input')?.[0];

      if (caret && element) {
        setCaretPosition(element, caret);
      }
    }
  );

  const handleChange = useCallback(
    function() {
      // pick right value and events, differs for different frameworks
      let e, value;
      if (isEvent(arguments[0])) {
        e = arguments[0];
        value = e.target.value;
      } else if (arguments.length >= 2 && isEvent(arguments[1])) {
        e = arguments[1];
        value = arguments[0];
      }

      const caretPosition = e.target.selectionStart ?? 0;
      const currentValue = parseCurrency(value, locale);
      const newVisibleValue = formatCurrency(currentValue, locale, currency);

      // calculate the additional chars (like currency symbol, thousands separator) in the
      // formatted value up to the caret position in both previuos and new formatted value
      // (consider the previous value the caret position is one characted before)
      // also if user hit backspace, the new caret position is one less
      const extraCharsBefore = extraCharsUpToCaret(visibileValue, caretPosition - 1);
      const extraCharsAfter = extraCharsUpToCaret(
        newVisibleValue,
        caretPosition
          + (e.nativeEvent.inputType === 'deleteContentBackward' ? - 1 : 0)
          + (visibileValue === '' ? getExtraLeadingChars(locale, currency) : 0)
      );

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
    },
    [visibileValue]
  );

  const handleKeyPress = useCallback(
    e => {
      // stop propagation for all chars not valid for any currency, just digits , and .
      if (!ALLOWED_CHARS.includes(String.fromCharCode(e.charCode))) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    },
    []
  );

  // redesign formatted value if changes currency and locale
  useEffect(
    () => {
      const newVisibleValue = formatCurrency(value, locale, currency);
      setVisibleValue(newVisibleValue);
    },
    [currency, locale]
  );

  return (
    <div ref={ref}>
      <Control
        value={visibileValue}
        onChange={handleChange}
        style={makeWidthStyle(fullWidth, width)}
        onKeyPress={handleKeyPress}
        {...rest}
      />
    </div>
  );
};

export { CommonCurrency };
