import React, { useCallback } from 'react';

import { I18N } from '../../components';
import { MuiGenericSelect } from '../../components/mui-select';
import { i18nOptions } from '../../helpers';
import { lfLog } from '../../helpers/lf-log';

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
    options: i18nOptions
  }
);
lfLog('Loaded MUI.Select');

export default MuiSelect;
