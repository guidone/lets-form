import React from 'react';

import _ from 'lodash';
import { Form } from 'rsuite';

import { I18N, RequiredIcon } from '../../components';
import { i18nOptions } from '../../helpers';

import { Button } from '../button';
import { ButtonsToggleGroup } from '../../common';

const RSuiteButtonsToggleGroup = I18N(
  ({
    name,
    label,
    hint,
    value,
    tooltip = false,
    disabled = false,
    required = false,
    size,
    error,
    onChange,
    options = []
  }) => {
    return (
      <Form.Group data-lf-field-name={name} className="lf-control-button-toggle-group">
        {label && <Form.ControlLabel>
          {label}
          {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
          {required && <RequiredIcon />}
        </Form.ControlLabel>}
        <Form.Control
          ButtonComponent={Button}
          name={name}
          accepter={ButtonsToggleGroup}
          value={value}
          onChange={onChange}
          options={options}
          disabled={disabled}
          size={size}
          errorMessage={_.isString(error) ? error : undefined }
        />              
        {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
      </Form.Group>
    );
  },
  ['label', 'hint'],
  {
    options: i18nOptions
  }
);

export { RSuiteButtonsToggleGroup as ButtonsToggleGroup };
