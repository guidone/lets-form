import React, { useCallback } from 'react';

import { ReactGenericCheckbox } from '../../components/react-generic-checkbox';
import { I18N } from '../../components';

const Checkbox = I18N(
  ({ onChange, ...rest }) => {

    const handleChange = useCallback(
      e => {
        onChange(e.target.checked);
      },
      [onChange]
    );

    return (
      <ReactGenericCheckbox
        inputType="checkbox"
        className="lf-control-checkbox"
        onChange={handleChange}
        {...rest}
      />
    );
  },
  ['hint', 'label']
);

export { Checkbox };