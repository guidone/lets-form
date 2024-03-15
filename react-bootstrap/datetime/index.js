import React, { useCallback } from 'react';
import _ from 'lodash';

import { I18N } from '../../components';
import { BootstrapGenericInput } from '../../components/bootstrap-generic-input';
import { lfLog } from '../../helpers/lf-log';
import { isValidDate } from '../../helpers/is-valid-date';

// DOC: https://react-bootstrap.github.io/forms/form-control/#form-control-props

const DateTime = I18N(
  ({
    onChange,
    value,
    ...rest
  }) => {

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
      <BootstrapGenericInput
        className="lf-control-date"
        inputType="datetime-local"
        component="datetime"
        value={currentDate}
        onChange={handleChange}
        {...rest}
      />
    );
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded ReactBootrap.DateTime');

export default DateTime;
