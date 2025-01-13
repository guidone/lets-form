import React, { useCallback } from 'react';
import { Form, Switch } from 'antd';

import { I18N } from '../../components/i18n';
import { passRest } from '../../helpers/pass-rest';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

const Toggle = I18N(
  ({
    name,
    label,
    hint,
    value,
    size,
    placeholder,
    showCount,
    tooltip = false,
    disabled = false,
    readOnly = false,
    required = false,
    maxLength,
    error,
    prefix,
    lfLocale,
    postfix,
    allowClear,
    bordered,
    onChange,
    onBlur,
    width,
    checkedChildren,
    unCheckedChildren,
    className,
    ...rest
  }) => {
    return (
      <Form.Item
        {...makeClassName('toggle', name, className)}
        label={label}
        name={name}
        help={error != null ? error : (hint && !tooltip ? hint : undefined)}
        required={required}
        tooltip={tooltip && hint}
        hasFeedback={error != null}
        validateStatus={error ? 'error': undefined}
        valuePropName="checked"
      >
        <Switch
          defaultChecked={value}
          readOnly={readOnly}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          size={size}
          checkedChildren={checkedChildren}
          unCheckedChildren={unCheckedChildren}
          {...passRest(rest)}
        />
      </Form.Item>
    );
  },
  ['label', 'hint', 'checkedChildren', 'unCheckedChildren']
);
lfLog('Loaded AntD.Toggle');

export default Toggle;
