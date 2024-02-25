import React, { useCallback, useState } from 'react';
import { Checkbox, Stack, Input } from '@mantine/core';
import _ from 'lodash';

import { I18N } from '../../components';
import { i18nOptions, passRest } from '../../helpers';
import { lfLog } from '../../helpers/lf-log';

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
    options = [],
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
      <div data-lf-field-name={name} className="lf-control-checkbox-group">
        {label && <Input.Label required={required}>{label}</Input.Label>}
        <Stack style={{ marginTop: 'var(--lf-field-margin-top)'}}>
          {(options ?? []).map(({ value, label}) => (
            <Checkbox
              key={value}
              value={value}
              label={label}
              disabled={disabled}
              readOnly={readOnly}
              onChange={handleChange}
              checked={selected.includes(value)}
              {...passRest(rest)}
            >
              {label}
            </Checkbox>
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
