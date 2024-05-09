import React from 'react';
import { MultiSelect } from '@mantine/core';
import _ from 'lodash';

import { I18N } from '../../components';
import { passRest, makeWidthStyle, i18nOptions, filterOptions } from '../../helpers';
import { lfLog } from '../../helpers/lf-log';

// TODO filter done with proper params

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
    lfOnEnter = () => {},
    ...rest
  }) => {
    return (
      <>
        <MultiSelect
          value={value}
          name={name}
          data={filterOptions(options, filterValue, filterKey) || []}
          className="lf-control-select"
          data-lf-field-name={name}
          style={makeWidthStyle(fullWidth, width)}
          description={hint}
          error={_.isString(error) ? error : undefined }
          inputWrapperOrder={['label', 'input', 'description', 'error']}
          {...passRest(rest)}
        />
      </>
    );
  },
  ['label', 'hint', 'placeholder'],
  {
    options: i18nOptions
  }
);
lfLog('Loaded Mantine.MultiSelect');

export default MantineMultiSelect;
