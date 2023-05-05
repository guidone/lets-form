import React, { useCallback } from 'react';

import { I18N, ReactGenericInput } from '../../components';

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
        className="lf-control-input-text"
        onChange={handleChange}
        {...rest}
      />
    );
  },
  ['label', 'hint', 'placeholder']
);


export { TextInput };