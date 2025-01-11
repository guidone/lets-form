import React, { useCallback } from 'react';
import _ from 'lodash';

import { I18N } from '../../components/i18n';
import { RSuiteGenericDate } from '../../components/rsuite-generic-date';
import { passRest } from '../../helpers/pass-rest';
import { lfLog } from '../../helpers/lf-log';
import { todayWithTime } from '../../helpers/today-with-time';
import { isValidTime } from '../../helpers/is-valid-time';
import { isValidDate } from '../../helpers/is-valid-date';

const SelectTime = I18N(
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
      if (isValidTime(value)) {
        currentValue = todayWithTime(value);
      }
    }

    // send always time string in iso format
    const handleChange = useCallback(
      d => {
        if (isValidDate(d)) {
          onChange(d.toLocaleTimeString());
        } else {
          onChange(null);
        }
      },
      [onChange]
    );

    return (
      <RSuiteGenericDate
        value={currentValue}
        onChange={handleChange}
        component="time"
        {...passRest(rest)}
      />
    )
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded RSuite5.SelectTime');

export default SelectTime;
