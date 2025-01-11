import React from 'react';
import { Form, DatePicker } from 'antd';
import dayjs from 'dayjs';

import { passRest } from '../../helpers/pass-rest';
import { makeWidthStyle } from '../../helpers/make-width-style';
import { makeClassName } from '../../helpers/make-class-name';

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
  className,
  ...rest
}) => {
  // set locale for dates
  let defaultValue = value != null ? dayjs(value) : undefined;
  if (defaultValue && lfLocale) {
    defaultValue = defaultValue.locale(lfLocale);
  }

  return (
    <Form.Item
      label={label}
      {...makeClassName(component, name, className)}
      // not needed, breaks in case date is set
      //name={name}
      help={error != null ? error : (hint && !tooltip ? hint : undefined)}
      required={required}
      tooltip={tooltip && hint}
      hasFeedback={error != null}
      validateStatus={error ? 'error': undefined}
      valuePropName={null}
    >
      <DatePicker
        key={`${name}-${lfLocale ?? ''}`} // add key or will not re-render if locale is changed
        defaultValue={defaultValue}
        style={makeWidthStyle(fullWidth, width)}
        {...passRest(rest, ['bordered'])}
      />
    </Form.Item>
  );
};

export { AntdGenericDate };
