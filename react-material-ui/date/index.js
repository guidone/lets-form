import React, { useCallback } from 'react';
import _ from 'lodash';


import { I18N } from '../../components/i18n';
import { MuiGenericDate } from '../../components/mui-generic-date';
import { lfLog } from '../../helpers/lf-log';
import { isValidDate } from '../../helpers/is-valid-date';

// DOC: https://mui.com/x/api/date-pickers/date-picker/
//      https://mui.com/x/react-date-pickers/adapters-locale/

const MuiDate = I18N(
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
        if (d.toDate && isValidDate(d.toDate())) {
          onChange(d.toDate().toISOString().split('T')[0]);
        }
      },
      [onChange]
    );

    return (
      <MuiGenericDate
        value={currentValue}
        className="lf-control-date"
        component="date"
        onChange={handleChange}
        {...rest}
      />
    )
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded MUI.Date');

export default MuiDate;
