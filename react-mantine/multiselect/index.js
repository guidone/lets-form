import React from 'react';
import { MultiSelect } from '@mantine/core';
import _ from 'lodash';

import { I18N } from '../../components/i18n';
import { passRest } from '../../helpers/pass-rest';
import { makeWidthStyle } from '../../helpers/make-width-style';
import { i18nOptions } from '../../helpers/i18n-options';
import { filterOptions } from '../../helpers/filter-options';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

const MantineMultiSelect = I18N(
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
      <MultiSelect
        {...makeClassName('multiselect', name, className)}
        value={value}
        name={name}
        data={filterOptions(options, filterValue, filterKey) || []}
        style={makeWidthStyle(fullWidth, width)}
        description={hint}
        error={_.isString(error) ? error : undefined }
        inputWrapperOrder={['label', 'input', 'description', 'error']}
        {...passRest(rest)}
      />
    );
  },
  ['label', 'hint', 'placeholder', 'nothingFoundMessage'],
  {
    options: i18nOptions
  }
);
lfLog('Loaded Mantine.MultiSelect');

export default MantineMultiSelect;
