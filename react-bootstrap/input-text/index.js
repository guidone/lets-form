import React, { useCallback } from 'react';
import _ from 'lodash';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import { RequiredIcon ,I18N } from '../../components';

// DOC: https://react-bootstrap.github.io/forms/form-control/#form-control-props

const TextInput = I18N(
  ({
    name,
    label,
    hint,
    value,
    onChange,
    onBlur,
    size,
    disabled = false,
    readOnly = false,
    plaintext = false,
    error,
    required,
    prefix,
    postfix,
    placeholder,
    floatingLabel = false
  }) => {

    const handleChange = useCallback(
      e => {
        onChange(e.target.value);
      },
      [onChange]
    );

    const inner = (
      <Form.Control
        name={name}
        value={value}
        plaintext={plaintext}
        onChange={handleChange}
        size={size}
        placeholder={placeholder}
        onBlur={onBlur}
        disabled={disabled}
        readOnly={readOnly}
        isInvalid={error != null}
      />
    );

    let innerGroup = inner;
    const needsGroup = postfix || prefix;
    if (needsGroup) {
      innerGroup = (
        <InputGroup>
          {prefix && <InputGroup.Text>{prefix}</InputGroup.Text>}
          {inner}
          {postfix && <InputGroup.Text>{postfix}</InputGroup.Text>}
        </InputGroup>
      );
    }

    const useFloatingLabels = floatingLabel && !needsGroup;

    return (
      <Form.Group
        className="lf-control-input-text mb-3"
      >
        {useFloatingLabels && (
          <FloatingLabel
            label={label}
            className="mb-3"
          >
            {innerGroup}
          </FloatingLabel>
        )}
        {!useFloatingLabels && (
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
  },
  ['label', 'hint', 'placeholder']
);

export { TextInput };