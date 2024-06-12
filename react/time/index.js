import React, { useCallback } from 'react';
import _ from 'lodash';

import { I18N } from '../../components';
import { ReactGenericInput } from '../../components/react-generic-input';
import { lfLog } from '../../helpers/lf-log';
import { isValidDate } from '../../helpers/is-valid-date';

const Time = I18N(
  ({ onChange, value, ...rest}) => {

    const handleChange = useCallback(
      e => {
        onChange(e.target.value)
      },
      [onChange]
    );

    let currentDate = value;
    if (isValidDate(value)) {
      // only keep iso up to the minutes digits
      const match = value.toISOString().match(/(.*?T[0-9]{1,2}:[0-9]{1,2})/gm);
      if (match != null) {
        currentDate = match[0];
      }
    }

    return (
      <ReactGenericInput
        inputType="time"
        className="lf-control-time"
        value={currentDate}
        onChange={handleChange}
        {...rest}
      />
    );
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded React.Time');

export default Time;
