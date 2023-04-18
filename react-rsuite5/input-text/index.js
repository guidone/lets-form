import React from 'react';
import { Form, Input, InputGroup } from 'rsuite';
import _ from 'lodash';

import { RequiredIcon, I18N } from '../../components';


const TextInput = I18N(
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
    error,
    prefix,
    postfix,
    onChange,
    onBlur,
    width,
    autocomplete,
    inputMode,
    inputType,
    inside = false
  }) => {
    // TODO create a specific hook
    //const { locale } = useContext(FormContext);

    //console.log('input text using locale', locale)

    const inner = (
      <Form.Control
        name={name}
        accepter={Input}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        autoComplete={autocomplete}
        inputMode={inputMode}
        type={inputType}
        size={size}
        placeholder={placeholder}
        readOnly={readOnly}
        style={_.isNumber(width) ? { width: `${width}px` } : undefined}
        errorMessage={_.isString(error) ? error : undefined }
      />
    );

    const needsGroup = postfix || prefix;
    return (
      <Form.Group controlId={name}>
        {label && <Form.ControlLabel>
          {label}
          {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
          {required && <RequiredIcon />}
        </Form.ControlLabel>}
        {!needsGroup && inner}
        {needsGroup && (
          <InputGroup inside={inside}>
            {prefix && <InputGroup.Addon>{prefix}</InputGroup.Addon>}
            {inner}
            {postfix && <InputGroup.Addon>{postfix}</InputGroup.Addon>}
          </InputGroup>
        )}
        {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
      </Form.Group>
    );
  },
  ['label', 'hint', 'placeholder']
);

export { TextInput };