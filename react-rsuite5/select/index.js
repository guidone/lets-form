import React from 'react';
import _ from 'lodash';
import { Form, SelectPicker } from 'rsuite';

import { passRest, filterOptions } from '../../helpers';
import { RequiredIcon, I18N } from '../../components';

const Select = I18N(
  ({
    name,
    label,
    hint,
    value,
    size,
    placeholder,
    options,
    tooltip = false,
    disabled = false,
    readOnly = false,
    required = false,
    error,
    block = false,
    searchable = false,
    cleanable = false,
    onChange,
    onBlur,
    placement,
    appearance,
    filterKey,
    filterValue,
    ...rest
  }) => {
    return (
      <Form.Group controlId={name}>
        {label && (
          <Form.ControlLabel>
            {label}
            {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
            {required && <RequiredIcon />}
          </Form.ControlLabel>
        )}
        <Form.Control
          accepter={SelectPicker}
          appearance={appearance ?? undefined}
          name={name}
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          onBlur={onBlur}
          placement={placement}
          errorMessage={_.isString(error) ? error : undefined }
          disabled={disabled}
          size={size}
          placeholder={placeholder}
          data={filterOptions(options, filterValue, filterKey) || []}
          block={block}
          searchable={searchable}
          cleanable={cleanable}
          {...passRest(rest)}
        />
        {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
      </Form.Group>
    );
  },
  ['label', 'hint', 'placeholder'],
  {
    options: (value, i18n) => (value ?? []).map(value => ({ ...value, label: i18n(value.label) }))
  }
);

export { Select };