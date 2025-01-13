import React, { useCallback, useState } from 'react';
import _ from 'lodash';
import Form from 'react-bootstrap/Form';

import { I18N } from '../../components/i18n';
import { RequiredIcon } from '../../components/required-icon';
import { i18nOptions } from '../../helpers/i18n-options';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

const CheckboxGroupBootstrap = I18N(
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
    className,
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
      <Form.Group {...makeClassName('checkbox-group', name, className)}>
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
                id={`${name}_${value}`}
                value={value}
                name={name}
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
lfLog('Loaded ReactBootrap.CheckboxGroup');

export default CheckboxGroupBootstrap;
