import React, { useCallback, useState } from 'react';
import { Radio, Stack, Input } from '@mantine/core';
import _ from 'lodash';

import { I18N } from '../../components';
import { i18nOptions, passRest } from '../../helpers';
import { lfLog } from '../../helpers/lf-log';

// TODO broken preview in mantine, add ensureframework

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
      <div data-lf-field-name={name} className="lf-control-radio-group">
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
