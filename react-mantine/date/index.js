import React, { useCallback, useState } from 'react';
import _ from 'lodash';

import { I18N } from '../../components';
import { MantineGenericDate } from '../../components/mantine-generic-date';
import { isValidDate, passRest } from '../../helpers';
import { lfLog } from '../../helpers/lf-log';

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
      console.log('data----', value)
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
    
    console.log(`current value ${rest.dateType}`, value, initialValue, currentValue)

    // send always date string in format yyyy-mm-dd
    const handleChange = useCallback(
      d => {

        console.log('selected----', d)

        if (d && d.toISOString) {
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
