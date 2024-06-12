import React from 'react';
import { Form, InputNumber } from 'antd';

import { I18N } from '../../components/i18n';
import { passRest } from '../../helpers/pass-rest';
import { makeWidthStyle } from '../../helpers/make-width-style';
import { lfLog } from '../../helpers/lf-log';

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
          onChange={onChange}
          onBlur={onBlur}
          defaultValue={value}
          controls={showControl}
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
