import React, { useCallback } from 'react';
import _ from 'lodash';

import { I18N } from '../../components/i18n';
import { ReactGenericInput } from '../../components/react-generic-input';
import { lfLog } from '../../helpers/lf-log';
import { isValidDate } from '../../helpers/is-valid-date';

const DateInput = I18N(
  ({ onChange, value, ...rest}) => {

    const handleChange = useCallback(
      e => onChange(e.target.value),
      [onChange]
    );

    let currentDate = value;
    if (isValidDate(value)) {
      // only take 2023-11-12
      currentDate = value.toISOString().split('T')[0];
    }

    return (
      <ReactGenericInput
        inputType="date"
        component="date"
        value={currentDate}
        onChange={handleChange}
        {...rest}
      />
    );
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded React.Date');

export default DateInput;
