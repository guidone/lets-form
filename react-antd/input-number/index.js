import React from 'react';
import { Form, InputNumber } from 'antd';

import { I18N } from '../../components/i18n';
import { passRest } from '../../helpers/pass-rest';
import { makeWidthStyle } from '../../helpers/make-width-style';
import { TextOrIcon } from '../../common/text-or-icon';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

const InputNumberAntd = I18N(
  ({
    name,
    label,
    hint,
    value,
    showCount,
    tooltip = false,
    required = false,
    maxLength,
    error,
    onChange,
    onBlur,
    width,
    fullWidth,
    showControl,
    prefix,
    postfix,
    className,
    ...rest
  }) => {
    return (
      <Form.Item
        label={label}
        name={name}
        {...makeClassName('input-number', name, className)}
        help={error != null ? error : (hint && !tooltip ? hint : undefined)}
        required={required}
        tooltip={tooltip && hint}
        hasFeedback={error != null}
        validateStatus={error ? 'error': undefined}
        valuePropName={null}
      >
        <InputNumber
          onChange={onChange}
          onBlur={onBlur}
          defaultValue={value}
          controls={showControl}
          style={makeWidthStyle(fullWidth, width)}
          prefix={TextOrIcon(prefix)}
          suffix={TextOrIcon(postfix)}
          {...passRest(rest)}
        />
      </Form.Item>
    )
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded AntD.InputNumber');

export default InputNumberAntd;
