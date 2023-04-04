import React from 'react';
import _ from 'lodash';
import { Form, DatePicker, CustomProvider } from 'rsuite';
import * as locales from 'rsuite/locales';

import { RequiredIcon } from '../../components';

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

  console.log('---', locale && locales[locale])

  return (
    <Form.Group controlId={name}>
      {label && (
        <Form.ControlLabel>
          {label}
          {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
          {required && <RequiredIcon />}
        </Form.ControlLabel>
      )}
      <CustomProvider
        locale={locale && locales[locale] ? locales[locale] : undefined}
      >
        <Form.Control
          accepter={DatePicker}
          appearance={appearance ?? undefined}
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
      </CustomProvider>
    </Form.Group>
  );
};

export { SelectDate };
