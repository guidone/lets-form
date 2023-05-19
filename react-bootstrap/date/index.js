import React, { useCallback } from 'react';
import _ from 'lodash';

import { I18N } from '../../components';
import { BootstrapGenericInput } from '../../components/bootstrap-generic-input';

// DOC: https://react-bootstrap.github.io/forms/form-control/#form-control-props

const Date = I18N(
  ({
    onChange,
    value,
    ...rest
  }) => {

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
      <BootstrapGenericInput
        className="lf-control-date"
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

export { Date };
