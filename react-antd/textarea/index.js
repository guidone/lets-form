import React, { useCallback } from 'react';
import { Form, Input } from 'antd';

import { I18N } from '../../components/i18n';
import { makeWidthStyle } from '../../helpers/make-width-style';
import { passRest } from '../../helpers/pass-rest';
import { lfLog } from '../../helpers/lf-log';

const TextareaAntd = I18N(
  ({
    name,
    label,
    hint,
    value,
    tooltip = false,
    required = false,
    error,
    onChange,
    onBlur,
    width,
    fullWidth,
    ...rest
  }) => {
    const handleChange = useCallback(
      e => onChange(e.target.value),
      [onChange]
    );

    return (
      <Form.Item
        data-lf-field-name={name}
        className="lf-control-textarea"
        label={label}
        name={name}
        help={error != null ? error : (hint && !tooltip ? hint : undefined)}
        required={required}
        tooltip={tooltip && hint}
        hasFeedback={error != null}
        validateStatus={error ? 'error': undefined}
      >
        <Input.TextArea
          onChange={handleChange}
          onBlur={onBlur}
          defaultValue={value}
          style={makeWidthStyle(fullWidth, width)}
          {...passRest(rest)}
        />
      </Form.Item>
    )
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded AntD.Textarea');

export default TextareaAntd;
