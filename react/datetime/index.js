import React, { useCallback } from 'react';
import _ from 'lodash';

import { I18N } from '../../components';
import { ReactGenericInput } from '../../components/react-generic-input';

const DateTime = I18N(
  ({ onChange, value, ...rest}) => {

    const handleChange = useCallback(
      e => {
        onChange(e.target.value)
      },
      [onChange]
    );

    let currentDate = value;
    if (_.isDate(value)) {
      // only keep iso up to the minutes digits
      const match = value.toISOString().match(/(.*?T[0-9]{1,2}:[0-9]{1,2})/gm);
      if (match != null) {
        currentDate = match[0];
      }
    }

    return (
      <ReactGenericInput
        inputType="datetime-local"
        component="datetime"
        className="lf-control-datetime"
        value={currentDate}
        onChange={handleChange}
        {...rest}
      />
    );
  },
  ['label', 'hint', 'placeholder']
);

export { DateTime };
