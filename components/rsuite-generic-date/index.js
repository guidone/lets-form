import React from 'react';
import _ from 'lodash';
import { Form, DatePicker } from 'rsuite';

import { RequiredIcon } from '../../components';
import { passRest } from '../../helpers';
import { RSuite5FieldControl } from '../rsuite-field-control';
import { makeWidthStyle } from '../../helpers/make-width-style';
import { makeClassName } from '../../helpers/make-class-name';

import './rsuite-generic-date.scss';

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
  fullWidth,
  width,
  error,
  onChange,
  onBlur,
  appearance,
  format,
  lfLocale,
  className,
  component,
  ...rest
}) => {
  return (
    <Form.Group
      {...makeClassName(component, name, className, {
        'lf-full-width': fullWidth || width != null
      })}
      style={makeWidthStyle(fullWidth, width)}
    >
      {label && (
        <Form.ControlLabel>
          {label}
          {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
          {required && <RequiredIcon />}
        </Form.ControlLabel>
      )}
      <RSuite5FieldControl errorMessage={_.isString(error) ? error : undefined }>
        <DatePicker
          appearance={appearance ?? undefined}
          name={name}
          format={format || 'yyyy-MM-dd'}
          defaultValue={value}
          onChange={onChange}
          readOnly={readOnly}
          onBlur={onBlur}
          disabled={disabled}
          placeholder={placeholder}
          {...passRest(rest)}
        />
      </RSuite5FieldControl>
      {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
    </Form.Group>
  );
};

export { RSuiteGenericDate };
