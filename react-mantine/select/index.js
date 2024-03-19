import React from 'react';
import { Select, Input } from '@mantine/core';
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
      <Input.Wrapper 
        className="lf-control-select"
        data-lf-field-name={name}
        style={makeWidthStyle(fullWidth, width)}         
        description={hint} 
        error={_.isString(error) ? error : undefined }
        inputWrapperOrder={['label', 'input', 'description', 'error']}
      >
        <Select         
          value={value}
          name={name}
          data={filterOptions(options, filterValue, filterKey) || []}
          {...passRest(rest)}
        />
      </Input.Wrapper>
    ); 
  },
  ['label', 'hint', 'placeholder'],
  {
    options: i18nOptions
  }
);
lfLog('Loaded Mantine.Select');

export default MantineSelect;
