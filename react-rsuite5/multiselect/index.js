import React from 'react';
import _ from 'lodash';
import { Form, TagPicker, CheckPicker } from 'rsuite';

import { RequiredIcon, I18N } from '../../components';
import { i18nOptions, makeWidthStyle, passRest } from '../../helpers';

const Multiselect = I18N(
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
    fullWidth,
    multiselectMode,
    width,
    ...rest
  }) => {
    const Component = multiselectMode === 'tag' ? TagPicker : CheckPicker;

    return (
      <Form.Group
        data-lf-field-name={name}
        className="lf-control-multiselect"
        style={makeWidthStyle(fullWidth, width)}
      >
        {label && (
          <Form.ControlLabel>
            {label}
            {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
            {required && <RequiredIcon />}
          </Form.ControlLabel>
        )}
        <Form.Control
          accepter={Component}
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
          style={makeWidthStyle(fullWidth, width)}
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

export { Multiselect };