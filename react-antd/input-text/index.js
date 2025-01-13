import React, { useCallback } from 'react';
import { Form, Input } from 'antd';
import classNames from 'classnames';

import { I18N } from '../../components/i18n';
import { passRest } from '../../helpers/pass-rest';
import { makeWidthStyle } from '../../helpers/make-width-style';
import { TextOrIcon } from '../../common/text-or-icon';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

import './input-text.scss';

const TextInput = I18N(
  ({
    name,
    label,
    hint,
    value,
    size,
    tooltip = false,
    required = false,
    submitOnEnter = false,
    error,
    prefix,
    postfix,
    onChange,
    onBlur,
    fullWidth,
    width,
    inputType,
    inputMode,
    lfOnEnter = () => {},
    className,
    ...rest
  }) => {
    const handleChange = useCallback(
      e => onChange(e.target.value),
      [onChange]
    );
    const handleKeyUp = useCallback(e => e.keyCode === 13 && lfOnEnter(), [lfOnEnter]);

    return (
      <Form.Item
        {...makeClassName('input-text', name, className, `lf-size-${size}`)}
        label={label}
        name={name}
        help={error != null ? error : (hint && !tooltip ? hint : undefined)}
        required={required}
        tooltip={tooltip && hint}
        hasFeedback={error != null}
        validateStatus={error ? 'error': undefined}
        valuePropName={null}
      >
        <Input
          type={inputType ?? 'text'}
          inputMode={inputMode}
          onChange={handleChange}
          onBlur={onBlur}
          onKeyUp={submitOnEnter ? handleKeyUp : undefined}
          defaultValue={value}
          size={size}
          prefix={TextOrIcon(prefix)}
          suffix={TextOrIcon(postfix)}
          style={makeWidthStyle(fullWidth, width)}
          {...passRest(rest, ['bordered'])}
        />
      </Form.Item>
    )
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded AntD.InputText');

export default TextInput;
