import React, { useCallback } from 'react';
import _ from 'lodash';
import Form from 'react-bootstrap/Form';

import { RequiredIcon } from '../../components/required-icon';
import { I18N } from '../../components/i18n';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';
import { passRest } from '../../helpers/pass-rest';

// DOC: https://react-bootstrap.github.io/forms/form-control/#form-control-props

const Slider = I18N(
  ({
    name,
    label,
    hint,
    value,
    onChange,
    onBlur,
    disabled = false,
    readOnly = false,
    error,
    required,
    placeholder,
    min,
    max,
    step,
    className,
    ...rest
  }) => {

    const handleChange = useCallback(
      e => {
        onChange(e.target.value);
      },
      [onChange]
    );

    return (
      <Form.Group {...makeClassName('slider', name, className)}>
        <Form.Label>
          {label}
          {required && <RequiredIcon />}
        </Form.Label>
        <Form.Range
          name={name}
          defaultValue={value}
          onChange={handleChange}
          min={min}
          max={max}
          step={step}
          placeholder={placeholder}
          onBlur={onBlur}
          disabled={disabled}
          readOnly={readOnly}
          isInvalid={error != null}
          {...passRest(rest)}
        />
        {hint && !error && <Form.Text>{hint}</Form.Text>}
        {_.isString(error) && !_.isEmpty(error) && (
          <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
        )}
      </Form.Group>
    );
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded ReactBootrap.Slider');

export default Slider;