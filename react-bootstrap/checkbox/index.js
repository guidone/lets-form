import React, { useCallback } from 'react';
import _ from 'lodash';
import Form from 'react-bootstrap/Form';

import { I18N } from '../../components/i18n';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';
import { passRest } from '../../helpers/pass-rest';

const Checkbox = I18N(
  ({
    name,
    label,
    hint,
    value,
    placeholder,
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
    className,
    ...rest
  }) => {

    const handleChange = useCallback(
      e => {
        onChange(e.target.checked);
      },
      [onChange]
    );

    return (
      <Form.Group {...makeClassName('checkbox', name, className)}>
        <Form.Check type="checkbox">
          <Form.Check.Input
            onChange={handleChange}
            onBlur={onBlur}
            disabled={disabled}
            isInvalid={error != null}
            checked={value}
            {...passRest(rest)}
          />
          {label && <Form.Check.Label>{label}</Form.Check.Label>}
          {_.isString(error) && !_.isEmpty(error) && (
            <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
          )}
        </Form.Check>
        {hint && <Form.Text>{hint}</Form.Text>}
      </Form.Group>
    );
  },
  ['label', 'hint']
);
lfLog('Loaded ReactBootrap.Checkbox');

export default Checkbox;
