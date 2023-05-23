import React, { useCallback } from 'react';

import { I18N } from '../../components';
import { MuiGenericSelect } from '../../components/mui-select';

const MuiSelect = I18N(
  ({
    onChange,
    value,
    ...rest
  }) => {
    const handleChange = useCallback(
      e => onChange(e.target.value),
      [onChange]
    );

    return (
      <MuiGenericSelect
        className="lf-control-select"
        component="select"
        value={value}
        onChange={handleChange}
        {...rest}
      />
    );
  },
  ['label', 'hint', 'placeholder'],
  {
    options: (value, i18n) => (value ?? []).map(value => ({ ...value, label: i18n(value.label) }))
  }
);

export { MuiSelect as Select };
