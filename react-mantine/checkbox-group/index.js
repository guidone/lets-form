import React, { useCallback, useState } from 'react';
import { Checkbox, Stack, Input } from '@mantine/core';
import _ from 'lodash';

import { I18N } from '../../components/i18n';
import { i18nOptions } from '../../helpers/i18n-options';
import { passRest } from '../../helpers/pass-rest';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

const CheckboxGroup = I18N(
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
    const [selected, setSelected] = useState(
      _.isArray(value) ?
        value : (value ? String().split(',') : [])
    )
    const handleChange = useCallback(
      (e) => {
        let newValue;
        if (e.target.checked) {
          newValue = [...selected, e.target.value];
        } else {
          newValue = selected.filter(value => value !== e.target.value);
        }
        setSelected(newValue);
        onChange(newValue);
      },
      [onChange]
    );

    return (
      <div {...makeClassName('checkbox-group', name, className)}>
        {label && <Input.Label required={required}>{label}</Input.Label>}
        <Stack gap="xs" style={{ marginTop: 'var(--lf-field-margin-top)', marginBottom: 'var(--lf-field-margin-top)'}}>
          {(options ?? []).map(item => (
            <Checkbox
              key={item.value}
              value={item.value}
              label={item.label}
              disabled={disabled}
              readOnly={readOnly}
              onChange={handleChange}
              checked={selected.includes(item.value)}
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
        {hint && <Input.Description>{hint}</Input.Description>}
        {error && <Input.Error>{error}</Input.Error>}
      </div>
    );
  },
  ['label', 'hint', 'placeholder'],
  {
    options: i18nOptions
  }
);
lfLog('Loaded Mantine.CheckboxGroup');

export default CheckboxGroup;
