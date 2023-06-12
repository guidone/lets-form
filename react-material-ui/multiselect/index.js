import React, { useCallback, useMemo } from 'react';

import { I18N } from '../../components';
import { MuiGenericSelect } from '../../components/mui-select';
import { i18nOptions } from '../../helpers';

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
        className="lf-control-multiselect"
        component="multiselect"
        onChange={handleChange}
        renderValue={renderValue}
        multiple={true}
        value={value || []}
        {...rest}
      />
    )
  },
  ['label', 'hint', 'placeholder'],
  {
    options: i18nOptions
  }
);

export { Multiselect };