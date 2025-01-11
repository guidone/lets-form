import React, { useCallback } from 'react';
import _ from 'lodash';

import { I18N } from '../../components';
import { MuiGenericInput } from '../../components/mui-generic-input';
import { lfLog } from '../../helpers/lf-log';

// DOC: https://mui.com/material-ui/api/input/

const hasDecimals = f => _.isString(f) && (f.includes(',') || f.includes('.'));

const InputNumber = I18N(
  ({ onChange, ...rest }) => {

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
      <MuiGenericInput
        component="input-number"
        onChange={handleChange}
        inputType="number"
        {...rest}
      />
    );
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded MUI.InputNumber');

export default InputNumber;
