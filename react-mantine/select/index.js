import React from 'react';
import { Select } from '@mantine/core';
import _ from 'lodash';

import { I18N } from '../../components/i18n';
import { passRest } from '../../helpers/pass-rest';
import { makeWidthStyle } from '../../helpers/make-width-style';
import { i18nOptions } from '../../helpers/i18n-options';
import { filterOptions } from '../../helpers/filter-options';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

// Mantine Select breaks if value is null
const ensureNotNull = options => options.map(option => {
  if (option.value == null) {
    return { ...option, value: '', label: option.label ?? '' };
  }
  return option;
})

const MantineSelect = I18N(
  ({
    name,
    hint,
    value,
    error,
    fullWidth,
    width,
    options,
    filterValue,
    filterKey,
    className,
    ...rest
  }) => {
    return (
      <Select
        {...makeClassName('select', name, className)}
        style={makeWidthStyle(fullWidth, width)}
        description={hint}
        error={_.isString(error) ? error : undefined }
        inputWrapperOrder={['label', 'input', 'description', 'error']}
        value={value}
        name={name}
        data={ensureNotNull(filterOptions(options, filterValue, filterKey) || [])}
        {...passRest(rest)}
      />
    );
  },
  ['label', 'hint', 'placeholder', 'nothingFoundMessage'],
  {
    options: i18nOptions
  }
);
lfLog('Loaded Mantine.Select');

export default MantineSelect;
