import React, { useCallback } from 'react';
import _ from 'lodash';

import { isValidDate } from '../../helpers';
import { I18N } from '../../components';
import { MuiGenericDate } from '../../components/mui-generic-date';

// DOC: https://mui.com/x/api/date-pickers/date-picker/
//      https://mui.com/x/react-date-pickers/adapters-locale/

const MuiDateTime = I18N(
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
        onChange(d.toDate ? d.toDate().toISOString() : undefined);
      },
      [onChange]
    );

    return (
      <MuiGenericDate
        value={currentValue}
        className="lf-control-datetime"
        component="datetime"
        datetime={true}
        onChange={handleChange}
        {...rest}
      />
    )
  },
  ['label', 'hint', 'placeholder']
);

export { MuiDateTime };
