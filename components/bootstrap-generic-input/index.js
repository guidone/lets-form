import React, { useCallback } from 'react';
import _ from 'lodash';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import { RequiredIcon } from '../../components';
import { passRest, makeWidthStyle } from '../../helpers';
import { TextOrIcon } from '../../common';

// DOC: https://react-bootstrap.github.io/forms/form-control/#form-control-props

const BootstrapGenericInput = ({
  name,
  label,
  hint,
  value,
  onChange,
  onBlur,
  size,
  className,
  inputType,
  inputMode,
  autocomplete,
  lfLocale,
  disabled = false,
  readOnly = false,
  plaintext = false,
  error,
  component,
  required,
  submitOnEnter = false,
  prefix,
  postfix,
  placeholder,
  fullWidth,
  width,
  floatingLabel = false,
  lfOnEnter = () => {},
  ...rest
}) => {
  const handleKeyUp = useCallback(e => e.keyCode === 13 && lfOnEnter(), [lfOnEnter]);

  const inner = (
    <Form.Control
      name={name}
      type={inputType ?? 'text'}
      inputmode={inputMode}
      autocomplete={autocomplete}
      value={value}
      plaintext={plaintext}
      onChange={onChange}
      onKeyUp={submitOnEnter ? handleKeyUp : undefined}
      size={size}
      placeholder={placeholder}
      onBlur={onBlur}
      disabled={disabled}
      readOnly={readOnly}
      isInvalid={error != null}
      style={makeWidthStyle(fullWidth, width)}
      {...passRest(rest)}
    />
  );

  let innerGroup = inner;
  const needsGroup = postfix || prefix;
  if (needsGroup) {
    innerGroup = (
      <InputGroup>
        {prefix && <InputGroup.Text>{TextOrIcon(prefix)}</InputGroup.Text>}
        {inner}
        {postfix && <InputGroup.Text>{TextOrIcon(postfix)}</InputGroup.Text>}
      </InputGroup>
    );
  }

  const useFloatingLabels = floatingLabel && !needsGroup;

  return (
    <Form.Group
      className={className}
      data-lf-field-name={name}
    >
      {useFloatingLabels && label && (
        <FloatingLabel
          label={label}
        >
          {innerGroup}
        </FloatingLabel>
      )}
      {!useFloatingLabels && label && (
        <Form.Label>
          {label}
          {required && <RequiredIcon />}
        </Form.Label>
      )}
      {!useFloatingLabels && innerGroup}
      {hint && !error && <Form.Text>{hint}</Form.Text>}
      {_.isString(error) && !_.isEmpty(error) && (
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

export { BootstrapGenericInput };
