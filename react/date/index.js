import React, { useCallback } from 'react';
import _ from 'lodash';

import { I18N } from '../../components';
import { ReactGenericInput } from '../../components/react-generic-input'

const DateInput = I18N(
  ({ onChange, value, ...rest}) => {

    const handleChange = useCallback(
      e => onChange(e.target.value),
      [onChange]
    );

    let currentDate = value;
    if (_.isDate(value)) {
      // only take 2023-11-12
      currentDate = value.toISOString().split('T')[0];
    }

    return (
      <ReactGenericInput
        inputType="date"
        component="date"
        className="lf-control-date"
        value={currentDate}
        onChange={handleChange}
        {...rest}
      />
    );
  },
  ['label', 'hint', 'placeholder']
);

export { DateInput };
