/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Form } from 'rsuite';
import { RadioTile, RadioTileGroup } from 'rsuite';
import classNames from 'classnames';

import { I18N, RequiredIcon } from '../../components';

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
    ...rest
  }) => {
    return (
      <Form.Group
        className={classNames(
          'lf-control-input-text'
        )}
        data-lf-field-name={name}
      >
        {label && (
          <Form.ControlLabel>
            {label}
            {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
            {required && <RequiredIcon />}
          </Form.ControlLabel>
        )}
        <RadioTileGroup 
          value={value}
          onChange={onChange}
          inline={inline}
          disabled={disabled}
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

export { RadioTileRSuite as RadioTile };
