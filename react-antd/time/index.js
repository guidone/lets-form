import React, { useCallback } from 'react';
import _ from 'lodash';
import { Form, TimePicker } from 'antd';

import { I18N } from '../../components/i18n';
import { lfLog } from '../../helpers/lf-log';
import { passRest } from '../../helpers/pass-rest';
import { isValidTime } from '../../helpers/is-valid-time';
import { timeToDayJSTime } from '../../helpers/time-to-dayjs-time';

const Time = I18N(
  ({
    name,
    error,
    hint,
    required,
    label,
    tooltip,
    onChange,
    value,
    ...rest
  }) => {
    // default value
    let defaultValue;
    if (isValidTime(value)) {
      defaultValue = timeToDayJSTime(value);
    }

    // send always date string in iso format
    const handleChange = useCallback(
      d => {
        onChange(d.format(rest.format ?? 'HH:mm'));
      },
      [onChange, rest.format]
    );

    return (
      <Form.Item
        className="lf-control-date"
        data-lf-field-name={name}
        label={label}
        name={name}
        help={error != null ? error : (hint && !tooltip ? hint : undefined)}
        required={required}
        tooltip={tooltip && hint}
        hasFeedback={error != null}
        validateStatus={error ? 'error': undefined}
      >
        <TimePicker
          defaultValue={defaultValue}
          onChange={handleChange}
          {...passRest(rest)}
        />
      </Form.Item>
    );
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded AntD.Time');

export default Time;
