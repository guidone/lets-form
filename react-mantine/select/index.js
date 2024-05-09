import React from 'react';
import { Select } from '@mantine/core';
import _ from 'lodash';

import { I18N } from '../../components';
import { passRest, makeWidthStyle, i18nOptions, filterOptions } from '../../helpers';
import { lfLog } from '../../helpers/lf-log';

// TODO filter done with proper params

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
    lfOnEnter = () => {},
    ...rest
  }) => {
    return (
      <Select
        className="lf-control-select"
        data-lf-field-name={name}
        style={makeWidthStyle(fullWidth, width)}
        description={hint}
        error={_.isString(error) ? error : undefined }
        inputWrapperOrder={['label', 'input', 'description', 'error']}
        value={value}
        name={name}
        data={filterOptions(options, filterValue, filterKey) || []}
        {...passRest(rest)}
      />
    );
  },
  ['label', 'hint', 'placeholder'],
  {
    options: i18nOptions
  }
);
lfLog('Loaded Mantine.Select');

export default MantineSelect;
