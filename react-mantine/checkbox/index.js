import React, { useCallback } from 'react';
import { Checkbox } from '@mantine/core';
import _ from 'lodash';

import { I18N } from '../../components';
import { TextOrIcon } from '../../common';
import { passRest, makeWidthStyle } from '../../helpers';
import { lfLog } from '../../helpers/lf-log';

const MantineCheckbox = I18N(
  ({
    name,
    label,
    hint,
    value,
    color, 
    iconColor,
    autoContrast,
    indeterminate,
    labelPosition,
    radius,
    size,
    onChange,
    error,
    description,
    disabled = false,
    ...rest
  }) => {    
    const handleChange = useCallback(
      (event) => onChange(event.currentTarget.checked),
      [onChange]
    );

    return (      
      <Checkbox 
        className="lf-control-checkbox"
        data-lf-field-name={name}
        color={color}
        autoContrast={autoContrast}
        checked={value}
        iconColor={iconColor}
        indeterminate={indeterminate}
        labelPosition={labelPosition}
        name={name}
        size={size}
        radius={radius}
        onChange={handleChange}
        label={label} 
        description={hint}         
        error={_.isString(error) ? error : undefined }
        inputWrapperOrder={['label', 'input', 'description', 'error']}
        disabled={disabled}
        {...passRest(rest)}
      />
    ); 
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded Mantine.Checkbox');

export default MantineCheckbox;
