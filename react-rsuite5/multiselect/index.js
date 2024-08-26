import React from 'react';
import _ from 'lodash';
import { Form, TagPicker, CheckPicker } from 'rsuite';

import { I18N } from '../../components/i18n';
import { RequiredIcon } from '../../components/required-icon';
import { i18nOptions } from '../../helpers/i18n-options';
import { makeWidthStyle } from '../../helpers/make-width-style';
import { passRest } from '../../helpers/pass-rest';
import { lfLog } from '../../helpers/lf-log';
import { RSuite5FieldControl } from '../../components/rsuite-field-control';

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
        <RSuite5FieldControl errorMessage={_.isString(error) ? error : undefined }>
          <Component
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
            data={options || []}
            block={block}
            style={makeWidthStyle(fullWidth, width)}
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
lfLog('Loaded RSuite5.Multiselect');

export default Multiselect;
