import React from 'react';
import Form from 'antd/lib/form';
import InputNumber from 'antd/lib/input-number';

import { I18N } from '../../components';
import { passRest, makeWidthStyle } from '../../helpers';
import { lfLog } from '../../helpers/lf-log';

const InputNumberAntd = I18N(
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
    fullWidth,
    showControl,
    min,
    max,
    step,
    ...rest
  }) => {
    return (
      <Form.Item
        label={label}
        name={name}
        data-lf-field-name={name}
        className="lf-control-input-number"
        help={error != null ? error : (hint && !tooltip ? hint : undefined)}
        required={required}
        tooltip={tooltip && hint}
        hasFeedback={error != null}
        validateStatus={error ? 'error': undefined}
      >
        <InputNumber
          placeholder={placeholder}
          readOnly={readOnly}
          onChange={onChange}
          onBlur={onBlur}
          defaultValue={value}
          size={size}
          prefix={prefix}
          suffix={postfix}
          allowClear={allowClear}
          bordered={bordered}
          disabled={disabled}
          controls={showControl}
          min={min}
          max={max}
          step={step}
          style={makeWidthStyle(fullWidth, width)}
          {...passRest(rest)}
        />
      </Form.Item>
    )
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded AntD.InputNumber');

export default InputNumberAntd;
