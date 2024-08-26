import React from 'react';
import _ from 'lodash';
import { Form, SelectPicker } from 'rsuite';

import { passRest } from '../../helpers/pass-rest';
import { filterOptions } from '../../helpers/filter-options';
import { i18nOptions } from '../../helpers/i18n-options';
import { RequiredIcon } from '../../components/required-icon';
import { I18N } from '../../components/i18n';
import { lfLog } from '../../helpers/lf-log';
import { RSuite5FieldControl } from '../../components/rsuite-field-control';

import './select.scss';
import { makeWidthStyle } from '../../helpers';

const menuItem = (_value, item) => {
  return (
    <div className="lf-control-select-option-rsuite5">
      {item.image && <img src={item.image} alt={item.label} />}
      <span>{item.label}</span>
    </div>
  )
};

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
    fullWidth,
    width,
    ...rest
  }) => {
    return (
      <Form.Group
        className="lf-control-select"
        controlId={name}
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
          <SelectPicker
            appearance={appearance ?? undefined}
            name={name}
            value={value}
            onChange={onChange}
            readOnly={readOnly}
            onBlur={onBlur}
            placement={placement}
            disabled={disabled}
            size={size}
            placeholder={placeholder}
            renderMenuItem={showImageOptions ? menuItem : undefined}
            renderValue={showImageOptions ? menuItem : undefined}
            data={filterOptions(options, filterValue, filterKey) || []}
            block={block || fullWidth || width != null}
            searchable={searchable}
            cleanable={cleanable}
            {...passRest(rest)}
          />
        </RSuite5FieldControl>
        {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
      </Form.Group>
    );
  },
  ['label', 'hint', 'placeholder'],
  {
    options: i18nOptions
  }
);
lfLog('Loaded RSuite5.Select');

export default Select;
