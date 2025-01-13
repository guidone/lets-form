import React, { useCallback, useMemo } from 'react';

import { I18N } from '../../components/i18n';
import { MuiGenericSelect } from '../../components/mui-select';
import { i18nOptions } from '../../helpers/i18n-options';
import { lfLog } from '../../helpers/lf-log';

const Multiselect = I18N(
  ({
    onChange,
    value,
    ...rest
  }) => {

    const handleChange = useCallback(
      e => {
        const value = e.target.value;
        onChange(typeof value === 'string' ? value.split(',') : value);
      },
      [onChange]
    );

    const renderValue = useMemo(
      () => {
        return (selected) => {
          const selectedOptions = (rest.options || [])
            .filter(option => (selected || []).includes(option.value))
            .map(option => option.label)
          return selectedOptions.join(', ');
        };
      },
      [rest.options]
    );

    return (
      <MuiGenericSelect
        component="multiselect"
        onChange={handleChange}
        renderValue={renderValue}
        multiple={true}
        value={value || []}
        {...rest}
      />
    );
  },
  ['label', 'hint', 'placeholder'],
  {
    options: i18nOptions
  }
);
lfLog('Loaded MUI.Multiselect');

export default Multiselect;