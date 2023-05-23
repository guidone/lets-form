import React from 'react';
import _ from 'lodash';
import { Form, DatePicker, CustomProvider } from 'rsuite';
import * as locales from 'rsuite/locales';

import { RequiredIcon } from '../../components';

const RSuiteGenericDate = ({
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
  format,
  lfLocale,
  ...rest
}) => {
  const localeCode = lfLocale && _.isString(lfLocale) ? lfLocale.replace('-', '') : undefined;
  return (
    <Form.Group data-lf-field-name={name} className="lf-control-date">
      {label && (
        <Form.ControlLabel>
          {label}
          {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
          {required && <RequiredIcon />}
        </Form.ControlLabel>
      )}
      <CustomProvider
        locale={localeCode && locales[localeCode] ? locales[localeCode] : undefined}
      >
        <Form.Control
          accepter={DatePicker}
          appearance={appearance ?? undefined}
          name={name}
          format={format || 'yyyy-MM-dd'}
          defaultValue={value}
          onChange={onChange}
          readOnly={readOnly}
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

export { RSuiteGenericDate };
