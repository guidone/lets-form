import React from 'react';
import _ from 'lodash';
import Form from 'rsuite/Form';
import DatePicker from 'rsuite/DatePicker';
import CustomProvider from 'rsuite/CustomProvider';
import * as locales from 'rsuite/locales';

import { RequiredIcon } from '../../components';
import { passRest } from '../../helpers';
import { RSuite5FieldControl } from '../rsuite-field-control';

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
        <RSuite5FieldControl errorMessage={_.isString(error) ? error : undefined }>
          <DatePicker
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
            {...passRest(rest)}
          />
        </RSuite5FieldControl>
        {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
      </CustomProvider>
    </Form.Group>
  );
};

export { RSuiteGenericDate };
