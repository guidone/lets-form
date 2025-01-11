import React from 'react';
import { Form } from 'antd';

import { I18N } from '../../components/i18n';
import { i18nOptions } from '../../helpers/i18n-options';
import { passRest } from '../../helpers/pass-rest';
import Button from '../button';
import { ButtonsToggleGroup } from '../../common/buttons-toggle-group';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

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
    options = [],
    className,
    ...rest
  }) => {
    return (
      <Form.Item
        {...makeClassName('button-toggle-group', name, className)}
        label={label}
        name={name}
        help={error != null ? error : (hint && !tooltip ? hint : undefined)}
        required={required}
        tooltip={tooltip && hint}
        hasFeedback={error != null}
        validateStatus={error ? 'error': undefined}
        valuePropName={null}
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
          {...passRest(rest)}
        />
      </Form.Item>
    );
  },
  ['label', 'hint'],
  {
    options: i18nOptions
  }
);
lfLog('Loaded AntD.ButtonsToggleGroup');

export default AntdButtonsToggleGroup;
