import React, { useCallback } from 'react';
import { Switch } from '@mantine/core';
import _ from 'lodash';

import { I18N } from '../../components';
import { passRest } from '../../helpers';
import { lfLog } from '../../helpers/lf-log';

const MantineToggle = I18N(
  ({
    name,
    hint,
    value,
    onChange,
    error,
    description,
    ...rest
  }) => {    
    const handleChange = useCallback(
      (event) => onChange(event.currentTarget.checked),
      [onChange]
    );

    return (      
      <Switch 
        className="lf-control-checkbox"
        data-lf-field-name={name}
        checked={value}
        name={name}
        onChange={handleChange}
        description={hint}         
        error={_.isString(error) ? error : undefined }
        inputWrapperOrder={['label', 'input', 'description', 'error']}
        {...passRest(rest)}
      />
    ); 
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded Mantine.Toggle');

export default MantineToggle;
