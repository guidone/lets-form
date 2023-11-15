import React, { useCallback } from 'react';
import _ from 'lodash';

import { I18N } from '../../components';
import { RSuiteGenericDate } from '../../components/rsuite-generic-date';
import { isValidDate } from '../../helpers';

const SelectDate = I18N(
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
        if (d && d.toISOString) {
          onChange(d.toISOString().split('T')[0]);
        }
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

export { SelectDate };
