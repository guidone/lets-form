import React, { useCallback, useState } from 'react';
import _ from 'lodash';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import dayjs from 'dayjs';

import { RequiredIcon, I18N } from '../../components';

// DOC: https://react-bootstrap.github.io/forms/form-control/#form-control-props

const Date = I18N(
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
    const defaultDate = dayjs(value);
    const [currentDate, setCurrentDate] = useState(
      defaultDate.isValid() ? defaultDate.format('YYYY-MM-DD') : null
    );

    const handleChange = useCallback(
      e => {
        setCurrentDate(e.target.value);
        if (e.target.value) {
          // set to mid day, otherwise at midnight, with positive GMT
          // a date x becomes x - 1 in GMT
          const d = dayjs(e.target.value).hour(12);
          onChange(d.isValid() ? d.toDate() : undefined);
        } else {
          onChange(undefined);
        }
      },
      [onChange]
    );

    const inner = (
      <Form.Control
        type="date"
        name={name}
        value={currentDate}
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
        data-lf-field-name={name}
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

export { Date };