import React, { useCallback } from 'react';
import _ from 'lodash';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import { RequiredIcon } from '../../components/required-icon';
import { I18N } from '../../components/i18n';
import { passRest } from '../../helpers/pass-rest';
import { filterOptions } from '../../helpers/filter-options';
import { i18nOptions } from '../../helpers/i18n-options';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

const Select = I18N(
  ({
    name,
    label,
    hint,
    value,
    size,
    placeholder,
    options,
    disabled = false,
    readOnly = false,
    required = false,
    error,
    onChange,
    onBlur,
    floatingLabel = false,
    filterKey,
    filterValue,
    className,
    ...rest
  }) => {
    const handleChange = useCallback(
      e => {
        onChange(e.target.value !== placeholder ? e.target.value : undefined);
      },
      [onChange, placeholder]
    );
    const filteredOptions = filterOptions(options, filterValue, filterKey);

    const inner = (
      <Form.Select
        name={name}
        value={value}
        onChange={handleChange}
        size={size}
        placeholder={placeholder}
        onBlur={onBlur}
        disabled={disabled}
        readOnly={readOnly}
        isInvalid={error != null}
        {...passRest(rest)}
      >
        {placeholder && <option>{placeholder}</option>}
        {(filteredOptions ?? []).map(({ value, label }) => (
          <option value={value} key={value}>{label}</option>
        ))}
      </Form.Select>
    );

    return (
      <Form.Group {...makeClassName('select', name, className)}>
        {!floatingLabel && (
          <Form.Label>
            {label}
            {required && <RequiredIcon />}
          </Form.Label>
        )}
        {!floatingLabel && inner}
        {floatingLabel && (
          <FloatingLabel label={label}>
            {inner}
          </FloatingLabel>
        )}
        {hint && !error && <Form.Text>{hint}</Form.Text>}
        {_.isString(error) && !_.isEmpty(error) && (
          <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
        )}
      </Form.Group>
    );
  },
  ['label', 'hint', 'placeholder'],
  {
    options: i18nOptions
  }
);
lfLog('Loaded ReactBootrap.Select');

export default Select;