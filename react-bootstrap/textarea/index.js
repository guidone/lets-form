import React, { useCallback } from 'react';
import _ from 'lodash';
import Form from 'react-bootstrap/Form';

import { RequiredIcon } from '../../components/required-icon';
import { I18N } from '../../components/i18n';
import { makeWidthStyle } from '../../helpers/make-width-style';
import { passRest } from '../../helpers/pass-rest';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

// DOC: https://react-bootstrap.github.io/forms/form-control/#form-control-props

const Textarea = I18N(
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
    error,
    required,
    rows,
    placeholder,
    width,
    fullWidth,
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
      <Form.Group {...makeClassName('textarea', name, className)}>
        <Form.Label>
          {label}
          {required && <RequiredIcon />}
        </Form.Label>
        <Form.Control
          name={name}
          as="textarea"
          rows={rows}
          value={value}
          onChange={handleChange}
          size={size}
          placeholder={placeholder}
          onBlur={onBlur}
          disabled={disabled}
          readOnly={readOnly}
          isInvalid={error != null}
          style={makeWidthStyle(fullWidth, width)}
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
lfLog('Loaded ReactBootrap.Textarea');

export default Textarea;