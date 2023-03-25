import React from 'react';
import _ from 'lodash';
import { Form, DatePicker } from 'rsuite';
import * as locales from 'rsuite/locales';

import { Asterisk } from '../../components';

const SelectDate = ({
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
  return (
    <Form.Group controlId={name}>
      {label && (
        <Form.ControlLabel>
          {label}
          {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
          {required && <Asterisk />}
        </Form.ControlLabel>
      )}
      <Form.Control
        accepter={DatePicker}
        appearance={appearance ?? undefined}
        locale={locale && locales[locale] ? locales[locale].DatePicker : undefined}
        name={name}
        format={format}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        plaintext={plaintext}
        onBlur={onBlur}
        errorMessage={_.isString(error) ? error : undefined }
        disabled={disabled}
        placeholder={placeholder}
        {...rest}
      />
      {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
    </Form.Group>
  );
};

export { SelectDate };
