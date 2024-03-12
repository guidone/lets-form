import React, { useCallback, useState } from 'react';
import _ from 'lodash';

import { I18N } from '../../components';
import { MantineGenericDate } from '../../components/mantine-generic-date';
import { isValidDate, passRest } from '../../helpers';
import { lfLog } from '../../helpers/lf-log';

const SelectDatTime = I18N(
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
        if (d && d.toISOString) {
          setCurrentValue(d);
          onChange(d.toISOString());
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
        withTime={true}
      />
    )
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded Mantine.SelectDateTime');

export default SelectDatTime;
