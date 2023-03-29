import React from 'react';
import _ from 'lodash';
import { Form, TagPicker } from 'rsuite';

import { RequiredIcon } from '../../components';

const Multiselect = ({
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
  appearance
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
        accepter={TagPicker}
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
        data={options || []}
        block={block}
        searchable={searchable}
        cleanable={cleanable}
      />
      {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
    </Form.Group>
  );
};

export { Multiselect };