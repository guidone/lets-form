import React, { useCallback } from 'react';
import { Textarea } from '@mantine/core';
import _ from 'lodash';

import { I18N } from '../../components';
import { TextOrIcon } from '../../common';
import { passRest, makeWidthStyle } from '../../helpers';
import { lfLog } from '../../helpers/lf-log';

const MantineTextarea = I18N(
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
    error,
    prefix,
    postfix,
    onChange,
    pointer,
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
    autosize,
    minRows,
    maxRows,
    withErrorStyles,
    ...rest
  }) => {
    const handleKeyUp = useCallback(e => e.keyCode === 13 && lfOnEnter(), [lfOnEnter]);
    const handleChange = useCallback(
      (event) => onChange(event.currentTarget.value),
      [onChange]
    );

    return (
      <Textarea 
        className="lf-control-textarea"
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
        value={value}
        name={name}
        pointer={pointer}
        size={size}
        autosize={autosize}
        minRows={minRows}
        maxRows={maxRows}
        autoComplete={autocomplete}
        radius={radius}
        variant={variant}
        readOnly={readOnly}
        leftSection={prefix && <div className="lf-prefix-wrapper">{TextOrIcon(prefix)}</div>}
        rightSection={prefix && <div className="lf-postfix-wrapper">{TextOrIcon(postfix)}</div>}
        withErrorStyles={withErrorStyles}
        {...passRest(rest)}
      />
    ); 
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded Mantine.Textarea');

export default MantineTextarea;
