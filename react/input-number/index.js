import React, { useCallback } from 'react';
import _ from 'lodash';

import { I18N } from '../../components';
import { ReactGenericInput } from '../../components/react-generic-input';
import { lfLog } from '../../helpers/lf-log';

const hasDecimals = f => _.isString(f) && (f.includes(',') || f.includes('.'));

const InputNumber = I18N(
  ({ 
    onChange,
    min,
    max,
    step, 
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
      <ReactGenericInput
        inputType="number"
        component="input-number"
        className="lf-control-input-number"
        min={min}
        max={max}
        step={step}
        onChange={handleChange}
        {...rest}
      />
    );
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded React.InputNumber');

export default InputNumber;