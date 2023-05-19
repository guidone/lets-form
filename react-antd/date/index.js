import React, { useCallback } from 'react';
import _ from 'lodash';

import { I18N } from '../../components';
import { AntdGenericDate } from '../../components/antd-generic-date';
import { isValidDate } from '../../helpers';

const AntdDate = I18N(
  ({
    onChange,
    value,
    ...rest
  }) => {

    // also accepts string dates
    let currentValue;
    if (_.isDate(value)) {
      currentValue = value;
    } else if (_.isString(value)) {
      const d = new Date(value);
      if (isValidDate(d)) {
        currentValue = d;
      }
    }

    // send always date string in format yyyy-mm-dd
    const handleChange = useCallback(
      d => {
        onChange(d.toISOString().split('T')[0]);
      },
      [onChange]
    );

    return (
      <AntdGenericDate
        value={currentValue}
        component="date"
        onChange={handleChange}
        {...rest}
      />
    );
  },
  ['label', 'hint', 'placeholder']
);

export { AntdDate };
