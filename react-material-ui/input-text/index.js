import React, { useCallback } from 'react';

import { I18N } from '../../components';
import { MuiGenericInput } from '../../components/mui-generic-input';

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
        className="lf-control-input-text"
        component="input-text"
        onChange={handleChange}
        {...rest}
      />
    );
  },
  ['label', 'hint', 'placeholder']
);

export { TextInput };
