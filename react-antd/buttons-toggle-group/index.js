import React from 'react';
import { Form } from 'antd';

import { I18N } from '../../components';
import { i18nOptions } from '../../helpers';

import { Button } from '../button';
import { ButtonsToggleGroup } from '../../common';

const AntdButtonsToggleGroup = I18N(
  ({
    name,
    label,
    hint,
    value,
    tooltip = false,
    disabled = false,
    required = false,
    size,
    error,
    onChange,
    multiple,
    options = []
  }) => {
    return (
      <Form.Item
        className="lf-control-button-toggle-group"
        data-lf-field-name={name}
        label={label}
        name={name}
        help={error != null ? error : (hint && !tooltip ? hint : undefined)}
        required={required}
        tooltip={tooltip && hint}
        hasFeedback={error != null}
        validateStatus={error ? 'error': undefined}
        >
        <ButtonsToggleGroup
          ButtonComponent={Button}
          name={name}
          multiple={multiple}
          value={value}
          onChange={onChange}
          options={options}
          disabled={disabled}
          size={size}
        />
      </Form.Item>      
    );
  },
  ['label', 'hint'],
  {
    options: i18nOptions
  }
);

export { AntdButtonsToggleGroup as ButtonsToggleGroup };
