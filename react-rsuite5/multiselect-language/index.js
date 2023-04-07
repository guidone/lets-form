import React from 'react';
import _ from 'lodash';
import { Form, TagPicker, Tag } from 'rsuite';

import { RequiredIcon } from '../../components';

import LOCALES from '../../common/data/locales.json';

const renderValue = (values, items, tags) => {
  return items.map((item, index) => (
    <Tag key={index}>
      {item.name} <b>{item.value}</b>
    </Tag>
  ));
};

const LANGUAGES_OPTIONS = Object.keys(LOCALES['language-names'])
  .map(lang => ({
    value: lang,
    name: LOCALES['language-names'][lang][1],
    label: `${LOCALES['language-names'][lang][1]} - ${LOCALES['language-names'][lang][0]}`
  }))

const MultiselectLanguage = ({
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
        data={LANGUAGES_OPTIONS}
        block
        renderValue={renderValue}
        searchable
        cleanable
      />
      {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
    </Form.Group>
  );
};

export { MultiselectLanguage };