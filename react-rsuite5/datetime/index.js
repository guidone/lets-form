import React, { useCallback } from 'react';
import _ from 'lodash';

import { I18N } from '../../components';
import { RSuiteGenericDate } from '../../components/rsuite-generic-date';
import { isValidDate, passRest } from '../../helpers';
import { lfLog } from '../../helpers/lf-log';

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
        {...passRest(rest)}
      />
    )
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded RSuite5.DateTime');

export default SelectDatetime;
