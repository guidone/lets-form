import React, { useCallback } from 'react';
import { NumberInput } from '@mantine/core';
import _ from 'lodash';

import { I18N } from '../../components';
import { TextOrIcon } from '../../common';
import { passRest, makeWidthStyle } from '../../helpers';
import { lfLog } from '../../helpers/lf-log';

const MantineNumberInput = I18N(
  ({
    name,
    label,
    hint,
    value,
    size,
    placeholder,
    tooltip = false,
    disabled = false,
    readOnly = false,
    required = false,
    submitOnEnter = false,
    pointer,
    error,
    prefix,
    postfix,
    onChange,
    onBlur,
    fullWidth,
    width,
    autocomplete,
    inputMode,
    inputType,
    inside = false,
    lfOnEnter = () => {},
    radius,
    variant,
    withErrorStyles,
    ...rest
  }) => {
    const handleKeyUp = useCallback(e => e.keyCode === 13 && lfOnEnter(), [lfOnEnter]);
    const handleChange = useCallback(
      (event) => {
        console.log('allora',event)
        onChange(event)
      },
      [onChange]
    );

    return (      
      <NumberInput 
        className="lf-control-input-number"
        data-lf-field-name={name}
        style={makeWidthStyle(fullWidth, width)}
        label={label} 
        description={hint} 
        error={_.isString(error) ? error : undefined }
        required={required}
        inputWrapperOrder={['label', 'input', 'description', 'error']}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        onKeyUp={submitOnEnter ? handleKeyUp : undefined}
        disabled={disabled}
        type={inputType}
        inputMode={inputMode}
        pointer={pointer}
        value={value}
        name={name}
        size={size}
        withErrorStyles={withErrorStyles}
        autoComplete={autocomplete}
        radius={radius}
        variant={variant}
        readOnly={readOnly}
        leftSection={prefix && <div className="lf-prefix-wrapper">{TextOrIcon(prefix)}</div>}
        rightSection={postfix && <div className="lf-postfix-wrapper">{TextOrIcon(postfix)}</div>}
        {...passRest(rest)}
      />
    ); 
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded Mantine.InputNumber');

export default MantineNumberInput;
