import React, { useCallback, useState } from 'react';
import _ from 'lodash';
import Form from 'react-bootstrap/Form';

import { RequiredIcon } from '../../components';

const CheckboxGroupRSuite = ({
  name,
  label,
  hint,
  value,
  plaintext,
  disabled = false,
  readOnly = false,
  required = false,
  inline = false,
  reverse = false,
  error,
  onChange,
  onBlur,
  options = [],
  ...rest
}) => {
  const [values, setValues] = useState(value ?? []);

  const handleChange = useCallback(
    e => {
      let newValues;
      if (values.includes(e.target.value)) {
        newValues = values.filter(value => value !== e.target.value);
      } else {
        newValues = [...values, e.target.value];
      }
      setValues(newValues);
      onChange(newValues);
    },
    [onChange, values]
  );

  return (
    <Form.Group
      className="lf-control-checkbox-group mb-3"
    >
      <Form.Label>
        {label}
        {required && <RequiredIcon />}
      </Form.Label>
      <div>
        {(options ?? []).map(({ value, label}, idx) => (
          <Form.Check
            type="checkbox"
            key={value}
            reverse={reverse}
            inline={inline}
          >
            <Form.Check.Input
              disabled={disabled}
              value={value}
              name={name}
              isInvalid={error != null}
              checked={values.includes(value)}
              onChange={handleChange}
              {...(_.omit(rest, 'lfFramework', 'lfComponent'))}
            />
            {label && <Form.Check.Label>{label}</Form.Check.Label>}
            {_.isString(error) && !_.isEmpty(error) && (idx === (options.length -1)) && (
              <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
            )}
          </Form.Check>
        ))}
      </div>
      {hint && <Form.Text>{hint}</Form.Text>}
      {_.isString(error) && !_.isEmpty(error) && (
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

export { CheckboxGroupRSuite as CheckboxGroup };
