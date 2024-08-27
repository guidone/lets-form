import React, { useCallback } from 'react';
import _ from 'lodash';

import { I18N } from '../../components';
import { BootstrapGenericInput } from '../../components/bootstrap-generic-input';

const hasDecimals = f => _.isString(f) && (f.includes(',') || f.includes('.'));

// DOC: https://react-bootstrap.github.io/forms/form-control/#form-control-props

const InputNumber = I18N(
  ({
    onChange,
    ...rest
  }) => {
    const handleChange = useCallback(
      e => {
        const value = e.target.value;
        let parsed;
        if (_.isString(value)) {
          if (value === '') {
            // void if the user deleted all chars
            parsed = null;
          } else if (hasDecimals(value)) {
            parsed = parseFloat(value);
          } else {
            parsed = parseInt(value, 10);
          }
          if (!isNaN(parsed)) {
            onChange(parsed);
          }
        }
      },
      [onChange]
    );

    return (
      <BootstrapGenericInput
        className="lf-control-input-number"
        component="input-number"
        onChange={handleChange}
        inputType="number"
        step="5"
        {...rest}
      />
    );
  },
  ['label', 'hint', 'placeholder']
);

export default InputNumber;
