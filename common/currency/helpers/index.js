export const formatCurrency = (value, locale, currency) => {
  if (value === null || value === undefined || value === '') {
    return '';
  }
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);
};

export function getDecimalSeparator(locale) {
  const numberWithDecimalSeparator = 1.1;
  return Intl.NumberFormat(locale)
    .formatToParts(numberWithDecimalSeparator)
    .find(part => part.type === 'decimal')
    .value;
};

export const parseCurrency = (str, locale) => {
  if (!str) {
    return null;
  }

  const thousandsMarker = getThousandsSeparator(locale);
  const decimalMarker = getDecimalSeparator(locale);

  const toLocalDecimal = str
    .replace(/[^0-9.,]/g, '') // remove everything but numbers, decimal and comma
    .replaceAll(thousandsMarker, '') // replace thousand marker with void
    .replaceAll(decimalMarker, '.') // replace decimal marker with .

  const parsed = parseFloat(toLocalDecimal)

  return !isNaN(parsed) ? parsed : null;
};

export function setCaretPosition(elem, caretPos) {
  if (elem != null) {
    if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.move('character', caretPos);
      range.select();
    }
    else {
      if (elem.selectionStart) {
        elem.focus();
        elem.setSelectionRange(caretPos, caretPos);
      }
      else
        elem.focus();
    }
  }
};

export const extraCharsUpToCaret = (str, position) => {
  return str
    .slice(0, position)
    .replaceAll(/[0-9]/g, '')
    .length;
};

export const getThousandsSeparator = locale =>
  new Intl.NumberFormat(locale).formatToParts(1000).find((part) => part.type === 'group')?.value ?? '';

export const getExtraLeadingChars = (locale, currency) =>
  new Intl.NumberFormat(locale, { style: 'currency', currency })
    .format(1)
    .replace('1.00', '')
    .replace('1,00', '')
    .length;
