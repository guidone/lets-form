import React, { useCallback, useState } from 'react';
import { Radio, Stack, Input } from '@mantine/core';
import _ from 'lodash';

import { I18N } from '../../components/i18n';
import { i18nOptions } from '../../helpers/i18n-options';
import { passRest } from '../../helpers/pass-rest';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';


const RadioGroup = I18N(
  ({
    name,
    label,
    hint,
    value,
    placeholder,
    plaintext,
    tooltip = false,
    disabled = false,
    readOnly = false,
    required = false,
    error,
    onChange,
    onBlur,
    size,
    radius,
    color,
    iconColor,
    labelPosition,
    options = [],
    className,
    ...rest
  }) => {
    const [selected, setSelected] = useState(value);
    const handleChange = useCallback(
      (e) => {
        setSelected(e.target.value);
        onChange(e.target.value);
      },
      [onChange]
    );

    return (
      <div {...makeClassName('radio-group', name, className)}>
        <Radio.Group
          name={name}
          label={label}
          description={hint}
          withAsterisk={required}
          error={error}
          defaultValue={value}
          inputWrapperOrder={['label', 'input', 'description', 'error']}
        >
          <Stack gap="xs" style={{ marginTop: 'var(--lf-field-margin-top)', marginBottom: 'var(--lf-field-margin-top)'}}>
            {(options ?? []).map(item => (
              <Radio
                key={item.value}
                value={item.value}
                label={item.label}
                disabled={disabled}
                readOnly={readOnly}
                onChange={handleChange}
                checked={item.value === value}
                description={item.description}
                size={size}
                radius={radius}
                color={color}
                iconColor={iconColor}
                labelPosition={labelPosition}
                {...passRest(rest, ['description'])}
              />
            ))}
          </Stack>
        </Radio.Group>
      </div>
    );
  },
  ['label', 'hint', 'placeholder'],
  {
    options: i18nOptions
  }
);
lfLog('Loaded Mantine.RadioGroup');

export default RadioGroup;
