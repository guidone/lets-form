/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useCallback } from 'react';
import { Form, RadioTile, RadioTileGroup } from 'rsuite';

import { I18N } from '../../components/i18n';
import { RequiredIcon } from '../../components/required-icon';
import { lfLog } from '../../helpers/lf-log';
import { passRest } from '../../helpers';
import { makeClassName } from '../../helpers/make-class-name';

const RadioTileRSuite = I18N(
  ({
    name,
    label,
    hint,
    value,
    placeholder,
    plaintext,
    inline = true,
    iconWidth = 24,
    iconHeight = 24,
    tooltip = false,
    disabled = false,
    required = false,
    error,
    onChange,
    onBlur,
    options = [],
    initalOption,
    className,
    ...rest
  }) => {
    const initialValue = value || initalOption;
    const [currentValue, setCurrentValue] = useState(initialValue);

    const handleChange = useCallback(
      value => {
        setCurrentValue(value);
        onChange(value);
      },
      [onChange]
    );

    return (
      <Form.Group {...makeClassName('radio-tile', name, className)}>
        {label && (
          <Form.ControlLabel>
            {label}
            {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
            {required && <RequiredIcon />}
          </Form.ControlLabel>
        )}
        <RadioTileGroup
          value={currentValue}
          onChange={handleChange}
          inline={inline}
          disabled={disabled}
          {...passRest(rest)}
        >
          {(options || []).map(option => (
            <RadioTile
              key={option.value}
              label={option.label}
              value={option.value}
              icon={option.icon && <img src={option.icon} width={iconWidth} height={iconHeight}/>}
            >
              {option.description}
            </RadioTile>
          ))}
        </RadioTileGroup>
        {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
      </Form.Group>
    )
  },
  ['label', 'hint'],
  {
    options: (value, i18n) =>
      (value ?? []).filter(value => value != null)
        .map(value => ({
          ...value,
          label: i18n(value.label),
          description: i18n(value.description)
        }))
  }
);
lfLog('Loaded RSuite.RadioTile');

export default RadioTileRSuite;
