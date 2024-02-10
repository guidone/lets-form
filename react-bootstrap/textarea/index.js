import React, { useCallback } from 'react';
import _ from 'lodash';
import Form from 'react-bootstrap/Form';

import { RequiredIcon, I18N } from '../../components';
import { passRest, makeWidthStyle } from '../../helpers';
import { lfLog } from '../../helpers/lf-log';

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
    ...rest
  }) => {

    const handleChange = useCallback(
      e => {
        onChange(e.target.value);
      },
      [onChange]
    );

    return (
      <Form.Group
        className="lf-control-input-text"
        data-lf-field-name={name}
      >
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