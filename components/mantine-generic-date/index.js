import React from 'react';
import { DatePickerInput, DateTimePicker } from '@mantine/dates';
import _ from 'lodash';

import { passRest } from '../../helpers/pass-rest';
import { makeWidthStyle } from '../../helpers/make-width-style';
import { isValidDate } from '../../helpers/is-valid-date';
import { makeClassName } from '../../helpers/make-class-name';

const tryDate = value => {
  if (_.isDate(value)) {
    return value;
  } else if (_.isString(value)) {
    const d = new Date(value);
    if (isValidDate(d)) {
      return d;
    }
  }
  return undefined;
};

const MantineGenericDate = ({
  hint,
  minDate,
  maxDate,
  error,
  onBlur,
  fullWidth,
  width,
  lfLocale,
  withTime = false,
  className,
  name,
  component,
  ...rest
}) => {
  const Component = withTime ? DateTimePicker : DatePickerInput;
  return (
    <Component
      {...makeClassName(component, name, className)}
      style={makeWidthStyle(fullWidth, width)}
      description={hint}
      error={_.isString(error) ? error : undefined }
      inputWrapperOrder={['label', 'input', 'description', 'error']}
      locale={lfLocale}
      minDate={tryDate(minDate)}
      maxDate={tryDate(maxDate)}
      {...passRest(rest)}
    />
  );
}

export { MantineGenericDate };
