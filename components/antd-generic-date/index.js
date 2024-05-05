import React from 'react';
import { Form, DatePicker } from 'antd';
import dayjs from 'dayjs';

import { passRest, makeWidthStyle } from '../../helpers';

const AntdGenericDate = ({
  name,
  label,
  hint,
  value,
  tooltip = false,
  required = false,
  error,
  fullWidth,
  width,
  lfLocale,
  ...rest
}) => {
  // set locale for dates
  let defaultValue = dayjs(value);
  if (defaultValue && lfLocale) {
    defaultValue = defaultValue.locale(lfLocale);
  }

  return (
    <Form.Item
      label={label}
      // not needed, breaks in case date is set
      //name={name}
      data-lf-field-name={name}
      help={error != null ? error : (hint && !tooltip ? hint : undefined)}
      required={required}
      tooltip={tooltip && hint}
      hasFeedback={error != null}
      validateStatus={error ? 'error': undefined}
    >
      <DatePicker
        key={`${name}-${lfLocale ?? ''}`} // add key or will not re-render if locale is changed
        defaultValue={defaultValue}
        style={makeWidthStyle(fullWidth, width)}
        {...passRest(rest)}
      />
    </Form.Item>
  );
};

export { AntdGenericDate };
