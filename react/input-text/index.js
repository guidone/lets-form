import React, { useCallback } from 'react';

import { I18N } from '../../components/i18n';
import { ReactGenericInput } from '../../components/react-generic-input';
import { lfLog } from '../../helpers/lf-log';

import './input-text.scss';

const TextInput = I18N(
  ({ onChange, ...rest}) => {
    const handleChange = useCallback(
      e => onChange(e.target.value),
      [onChange]
    );

    return (
      <ReactGenericInput
        component="input-text"
        onChange={handleChange}
        {...rest}
      />
    );
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded React.InputText');

export default TextInput;