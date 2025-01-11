import React, { useCallback } from 'react';
import { Checkbox, Form } from 'antd';

import { I18N } from '../../components/i18n';
import { lfLog } from '../../helpers/lf-log';
import { passRest } from '../../helpers/pass-rest';
import { makeClassName } from '../../helpers/make-class-name';

const CheckboxAntd = I18N(
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
    const handleChange = useCallback(
      e => onChange(e.target.checked),
      [onChange]
    );

    return (
      <Form.Item
        {...makeClassName('checkbox', name, className)}
        data-lf-field-name={name}
        help={error != null ? error : (hint && !tooltip ? hint : undefined)}
        hasFeedback={error != null}
        validateStatus={error ? 'error': undefined}
        valuePropName={null}
      >
        <Checkbox
          readOnly={readOnly}
          onChange={handleChange}
          onBlur={onBlur}
          checked={value}
          disabled={disabled}
          {...passRest(rest)}
        >
          {label}
        </Checkbox>
      </Form.Item>
    )
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded AntD.Checkbox');

export default CheckboxAntd;
