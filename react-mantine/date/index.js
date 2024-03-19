import React, { useCallback, useState } from 'react';
import _ from 'lodash';

import { I18N } from '../../components/i18n';
import { MantineGenericDate } from '../../components/mantine-generic-date';
import { passRest } from '../../helpers/pass-rest';
import { lfLog } from '../../helpers/lf-log';
import { isValidDate } from '../../helpers/is-valid-date';

const SelectDate = I18N(
  ({
    onChange,
    value,
    lfLocale,
    ...rest
  }) => {
    // also accepts string dates
    let initialValue;
    if (rest.dateType === 'range') {
      initialValue = [null, null]
    } else {
      if (_.isDate(value)) {
        initialValue = value;
      } else if (_.isString(value)) {
        const d = new Date(value);
        if (isValidDate(d)) {
          initialValue = d;
        }
      }
    }
    const [currentValue, setCurrentValue] = useState(initialValue);
    
    // send always date string in format yyyy-mm-dd
    const handleChange = useCallback(
      d => {
        if (isValidDate(d)) {
          setCurrentValue(d);
          onChange(d.toISOString().split('T')[0]);
        } else {
          setCurrentValue(null);
          onChange(null);
        }
      },
      [onChange]
    );

    return (
      <MantineGenericDate
        value={currentValue}
        onChange={handleChange}
        lfLocale={lfLocale}
        {...passRest(rest)}
      />
    )
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded Mantine.SelectDate');

export default SelectDate;
