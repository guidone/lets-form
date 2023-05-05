import React, { useCallback } from 'react';
import _ from 'lodash';

import { I18N, RSuiteGenericDate } from '../../components';
import { isValidDate } from '../../helpers';

const SelectDatetime = I18N(
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

    // send always date string in iso format
    const handleChange = useCallback(
      d => {
        onChange(d.toISOString());
      },
      [onChange]
    );

    return (
      <RSuiteGenericDate
        value={currentValue}
        onChange={handleChange}
        {...rest}
      />
    )
  },
  ['label', 'hint', 'placeholder']
);

export { SelectDatetime };
