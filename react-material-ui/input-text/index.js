import React, { useCallback } from 'react';

import { I18N } from '../../components';
import { MuiGenericInput } from '../../components/mui-generic-input';
import { lfLog } from '../../helpers/lf-log';
// DOC: https://mui.com/material-ui/api/input/

const TextInput = I18N(
  ({ onChange, ...rest }) => {

    const handleChange = useCallback(
      event => {
        onChange(event.target.value);
      },
      [onChange]
    );

    return (
      <MuiGenericInput
        component="input-text"
        onChange={handleChange}
        {...rest}
      />
    );
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded MUI.InputText');

export default TextInput;
