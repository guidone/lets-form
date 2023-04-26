import React from 'react';
import _ from 'lodash';
import { Form, DatePicker, CustomProvider } from 'rsuite';
import * as locales from 'rsuite/locales';
import { I18N } from '../../components';

import { RequiredIcon } from '../../components';
import { useFormContext } from '../../hooks';

const SelectDate = I18N(
  ({
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
  },
  ['label', 'hint', 'placeholder']
);

export { SelectDate };
