import React, { useCallback } from 'react';

import { I18N } from '../../components';
import { BootstrapGenericInput } from '../../components/bootstrap-generic-input';
import { lfLog } from '../../helpers/lf-log';

// DOC: https://react-bootstrap.github.io/forms/form-control/#form-control-props

const TextInput = I18N(
  ({
    onChange,
    ...rest
  }) => {
    const handleChange = useCallback(
      e => {
        onChange(e.target.value);
      },
      [onChange]
    );

    return (
      <BootstrapGenericInput
        className="lf-control-input-text"
        component="input-text"
        onChange={handleChange}
        {...rest}
      />
    );
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded ReactBootrap.Input');

export default TextInput;