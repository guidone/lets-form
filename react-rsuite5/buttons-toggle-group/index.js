import React from 'react';
import _ from 'lodash';
import { Form } from 'rsuite';

import { I18N } from '../../components/i18n';
import { RequiredIcon } from '../../components/required-icon';
import { i18nOptions } from '../../helpers/i18n-options';
import { passRest } from '../../helpers/pass-rest';
import Button from '../button';
import { ButtonsToggleGroup } from '../../common/buttons-toggle-group';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

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
    className,
    ...rest
  }) => {
    return (
      <Form.Group {...makeClassName('button-toggle-group', name, className)}>
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
