import React, { useCallback } from 'react';

import { ReactGenericCheckbox } from '../../components/react-generic-checkbox';
import { I18N } from '../../components';

const Toggle = I18N(
  ({ onChange, value, ...rest }) => {

    const handleChange = useCallback(
      e => {
        onChange(e.target.value === '1' ? true : false);
      },
      [onChange]
    );

    return (
      <ReactGenericCheckbox
        inputType="range"
        className="lf-control-toggle"
        onChange={handleChange}
        min={0}
        max={1}
        step={1}
        value={value ? 1 : 0}
        //defaultValue={value ? 1 : 0}
        style={{ width: '30px' }}
        {...rest}
      />
    );
  },
  ['hint', 'label']
);

export { Toggle };
