import React, { useCallback } from 'react';
import { Input } from '@mantine/core';
import _ from 'lodash';

import { I18N } from '../../components';
import { TextOrIcon } from '../../common';
import { passRest, makeWidthStyle } from '../../helpers';
import { lfLog } from '../../helpers/lf-log';

// TODO padding and icon in prefixes

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
    ...rest
  }) => {
    const handleKeyUp = useCallback(e => e.keyCode === 13 && lfOnEnter(), [lfOnEnter]);


    return (
      <Input.Wrapper 
        className="lf-control-input-text"
        data-lf-field-name={name}
        style={makeWidthStyle(fullWidth, width)}
        label={label} 
        description={hint} 
        error={_.isString(error) ? error : undefined }
        required={required}
        inputWrapperOrder={['label', 'input', 'description', 'error']}
      >
        <Input 
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          onKeyUp={submitOnEnter ? handleKeyUp : undefined}
          disabled={disabled}
          type={inputType}
          inputMode={inputMode}
          value={value}
          name={name}
          size={size}
          radius={radius}
          variant={variant}
          readOnly={readOnly}
          leftSection={prefix && <div className="lf-prefix-wrapper">{TextOrIcon(prefix)}</div>}
          rightSection={prefix && <div className="lf-prefix-wrapper">{TextOrIcon(postfix)}</div>}
          {...passRest(rest)}
        />
      </Input.Wrapper>
    );

    /*
    const inner = (
      <Form.Control
        name={name}
        accepter={Input}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyUp={submitOnEnter ? handleKeyUp : undefined}
        disabled={disabled}
        autoComplete={autocomplete}
        inputMode={inputMode}
        type={inputType}
        size={size}
        placeholder={placeholder}
        readOnly={readOnly}
        errorMessage={_.isString(error) ? error : undefined }
        {...passRest(rest)}
      />
    );

    const needsGroup = postfix || prefix;
    return (
      <Form.Group
        className={classNames(
          'lf-control-input-text', {
            [`lf-size-${size}`]: size != null,
            'lf-full-width': fullWidth || width != null
          }
        )}
        data-lf-field-name={name}
        style={makeWidthStyle(fullWidth, width)}
      >
        {label && <Form.ControlLabel>
          {label}
          {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
          {required && <RequiredIcon />}
        </Form.ControlLabel>}
        {!needsGroup && inner}
        {needsGroup && (
          <InputGroup inside={inside}>
            {prefix && <InputGroup.Addon>{TextOrIcon(prefix)}</InputGroup.Addon>}
            {inner}
            {postfix && <InputGroup.Addon>{TextOrIcon(postfix)}</InputGroup.Addon>}
          </InputGroup>
        )}
        {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
      </Form.Group>
    );*/
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded Mantine.InputText');

export default InputText;
