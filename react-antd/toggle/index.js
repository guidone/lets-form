import React, { useCallback } from 'react';
import { Form, Switch } from 'antd';

import { I18N } from '../../components';
import { passRest } from '../../helpers';
import { lfLog } from '../../helpers/lf-log';

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
    ...rest
  }) => {
    const handleChange = useCallback(
      checked => onChange(checked),
      [onChange]
    );

    return (
      <Form.Item
        data-lf-field-name={name}
        className="lf-control-toggle"
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
          //onChange={handleChange}
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
