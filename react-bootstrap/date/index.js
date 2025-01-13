import React, { useCallback } from 'react';
import _ from 'lodash';

import { I18N } from '../../components/i18n';
import { BootstrapGenericInput } from '../../components/bootstrap-generic-input';
import { lfLog } from '../../helpers/lf-log';
import { isValidDate } from '../../helpers/is-valid-date';

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
    if (isValidDate(value)) {
      // only take 2023-11-12
      currentDate = value.toISOString().split('T')[0];
    }

    return (
      <BootstrapGenericInput
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
lfLog('Loaded ReactBootrap.Date');

export default Date;
