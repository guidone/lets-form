import React, { useCallback } from 'react';
import { Form, Input } from 'antd';

import { I18N } from '../../components/i18n';
import { makeWidthStyle } from '../../helpers/make-width-style';
import { passRest } from '../../helpers/pass-rest';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

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
    className,
    ...rest
  }) => {
    const handleChange = useCallback(
      e => onChange(e.target.value),
      [onChange]
    );

    return (
      <Form.Item
        {...makeClassName('textarea', name, className)}
        label={label}
        name={name}
        help={error != null ? error : (hint && !tooltip ? hint : undefined)}
        required={required}
        tooltip={tooltip && hint}
        hasFeedback={error != null}
        validateStatus={error ? 'error': undefined}
        valuePropName={null}
      >
        <Input.TextArea
          onChange={handleChange}
          onBlur={onBlur}
          defaultValue={value}
          style={makeWidthStyle(fullWidth, width)}
          {...passRest(rest)}
        />
      </Form.Item>
    );
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded AntD.Textarea');

export default TextareaAntd;
