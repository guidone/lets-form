import React, { useCallback } from 'react';
import _ from 'lodash';
import { Form, Checkbox } from 'rsuite';

const CheckboxRSuite = ({
  name,
  label,
  hint,
  value,
  placeholder,
  plaintext,
  tooltip = false,
  disabled = false,
  readOnly = false,
  required = false,
  error,
  onChange,
  onBlur,
  appearance,
  locale,
  format,
  ...rest
}) => {

  const handleChange = useCallback(
    (valueType, checked) => onChange(checked),
    [onChange]
  );

  return (
    <Form.Group controlId={name}>
      <Form.Control
        accepter={Checkbox}
        name={name}
        checked={value}
        onChange={handleChange}
        readOnly={readOnly}
        plaintext={plaintext}
        onBlur={onBlur}
        errorMessage={_.isString(error) ? error : undefined }
        disabled={disabled}
        {...rest}
      >
        {label}
      </Form.Control>
      {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
    </Form.Group>
  );
};

export { CheckboxRSuite as Checkbox };
