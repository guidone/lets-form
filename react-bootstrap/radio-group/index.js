import React, { useCallback, useState } from 'react';
import _ from 'lodash';
import Form from 'react-bootstrap/Form';

import { RequiredIcon, I18N } from '../../components';
import { i18nOptions } from '../../helpers';
import { lfLog } from '../../helpers/lf-log';

const RadioGroupBootstrap = I18N(
  ({
    name,
    label,
    hint,
    value,
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
        className="lf-control-radio-group"
        data-lf-field-name={name}
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
                type="radio"
                value={value}
                name={name}
                id={`${name}_${value}`}
                isInvalid={error != null}
                checked={values.includes(value)}
                onChange={handleChange}
                {...(_.omit(rest, 'lfFramework', 'lfComponent'))}
              />
              {label && <Form.Check.Label htmlFor={`${name}_${value}`}>{label}</Form.Check.Label>}
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
  },
  ['label', 'hint'],
  {
    options: i18nOptions
  }
);

lfLog('Loaded ReactBootrap.RadioGroup');

export default RadioGroupBootstrap;
