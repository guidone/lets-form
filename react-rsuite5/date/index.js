import React, { useCallback } from 'react';
import _ from 'lodash';

import { I18N } from '../../components/i18n';
import { RSuiteGenericDate } from '../../components/rsuite-generic-date';
import { passRest } from '../../helpers/pass-rest';
import { lfLog } from '../../helpers/lf-log';
import { isValidDate } from '../../helpers/is-valid-date';

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
        if (isValidDate(d)) {
          onChange(d.toISOString().split('T')[0]);
        }
      },
      [onChange]
    );

    return (
      <RSuiteGenericDate
        component="date"
        value={currentValue}
        onChange={handleChange}
        {...passRest(rest)}
      />
    )
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded RSuite5.SelectDate');

export default SelectDate;
