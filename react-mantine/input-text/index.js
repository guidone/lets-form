import React, { useCallback } from 'react';
import { TextInput } from '@mantine/core';
import _ from 'lodash';

import { I18N } from '../../components';
import { TextOrIcon } from '../../common';
import { passRest, makeWidthStyle } from '../../helpers';
import { lfLog } from '../../helpers/lf-log';

const InputText = I18N(
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
      (event) => onChange(event.currentTarget.value),
      [onChange]
    );

    return (      
      <TextInput 
        className="lf-control-input-text"
        data-lf-field-name={name}
        style={makeWidthStyle(fullWidth, width)}
        label={label} 
        description={hint} 
        error={_.isString(error) ? error : undefined }
        required={required}
        inputWrapperOrder={['label', 'input', 'description', 'error']}
        placeholder={placeholder}
        onChange={handleChange}
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
        prefix={prefix}
        suffix={postfix}
        {...passRest(rest)}
      />
    ); 
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded Mantine.InputText');

export default InputText;
