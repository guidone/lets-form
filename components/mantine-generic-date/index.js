import React from 'react';
import { DatePickerInput, DateTimePicker } from '@mantine/dates';
import _ from 'lodash';
import '@mantine/dates/styles.css';

import { passRest, makeWidthStyle, isValidDate } from '../../helpers';

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
  ...rest
}) => {
  const Component = withTime ? DateTimePicker : DatePickerInput;
  return (      
    <Component 
      className="lf-control-date"
      data-lf-field-name={name}
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
