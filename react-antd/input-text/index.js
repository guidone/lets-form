import React, { useCallback } from 'react';
import { Form, Input } from 'antd';
import classNames from 'classnames';

import { I18N } from '../../components';
import { passRest, makeWidthStyle } from '../../helpers';
import { TextOrIcon } from '../../common';
import { lfLog } from '../../helpers/lf-log';

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
    ...rest
  }) => {
    const handleChange = useCallback(
      e => onChange(e.target.value),
      [onChange]
    );
    const handleKeyUp = useCallback(e => e.keyCode === 13 && lfOnEnter(), [lfOnEnter]);

    return (
      <Form.Item
        className={classNames('lf-control-input-text', `lf-size-${size}`)}
        data-lf-field-name={name}
        label={label}
        name={name}
        help={error != null ? error : (hint && !tooltip ? hint : undefined)}
        required={required}
        tooltip={tooltip && hint}
        hasFeedback={error != null}
        validateStatus={error ? 'error': undefined}
      >
        <Input
          type={inputType ?? 'text'}
          inputmode={inputMode}
          onChange={handleChange}
          onBlur={onBlur}
          onKeyUp={submitOnEnter ? handleKeyUp : undefined}
          defaultValue={value}
          size={size}
          prefix={TextOrIcon(prefix)}
          suffix={TextOrIcon(postfix)}
          style={makeWidthStyle(fullWidth, width)}
          {...passRest(rest)}
        />
      </Form.Item>
    )
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded AntD.InputText');

export default TextInput;
