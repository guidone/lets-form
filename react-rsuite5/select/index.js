import React from 'react';
import _ from 'lodash';
import { Form, SelectPicker } from 'rsuite';

import { passRest, filterOptions, i18nOptions } from '../../helpers';
import { RequiredIcon, I18N } from '../../components';

import './select.scss';

const menuItem = (value, item) => {
  return (
    <div className="lf-control-select-option-rsuite5">
      {item.image && <img src={item.image} alt={item.label} />}
      <span>{item.label}</span>
    </div>
  )
};

/*const manuValue = (value, item) => {
  return (
    <div className="lf-control-select-option-rsuite5">
      {item.image && <img src={item.image} alt={item.label} />}
      <span>{item.label}</span>
    </div>
  )
};*/

const Select = I18N(
  ({
    name,
    label,
    hint,
    value,
    size,
    placeholder,
    lfLocale,
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
    showImageOptions,
    ...rest
  }) => {
    return (
      <Form.Group
        className="lf-control-select"
        controlId={name}
      >
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
          renderMenuItem={showImageOptions ? menuItem : undefined}
          renderValue={showImageOptions ? menuItem : undefined}
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
    options: i18nOptions
  }
);

export { Select };