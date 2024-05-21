import React from 'react';
import _ from 'lodash';
import { Form } from 'rsuite';

import { I18N, RequiredIcon } from '../../components';
import { i18nOptions, passRest } from '../../helpers';
import Button from '../button';
import { ButtonsToggleGroup } from '../../common/buttons-toggle-group';
import { lfLog } from '../../helpers/lf-log';

import './buttons-toggle-group.scss';

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
    options = [],
    ...rest
  }) => {
    return (
      <Form.Group
        data-lf-field-name={name}
        className="lf-control-button-toggle-group"
      >
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
          {...passRest(rest)}
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
lfLog('Loaded RSuite5.ButtonsToggleGroup');

export default RSuiteButtonsToggleGroup;
