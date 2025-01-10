import React from 'react';
import { Form, TagInput } from 'rsuite';
import _ from 'lodash';

import { RequiredIcon } from '../../components/required-icon';
import { I18N } from '../../components/i18n';
import { lfLog } from '../../helpers/lf-log';
import { RSuite5FieldControl } from '../../components/rsuite-field-control';
import { makeClassName } from '../../helpers/make-class-name';

import './index.scss';

const InputTag = I18N(
  ({
    name,
    label,
    hint,
    value,
    size,
    tooltip = false,
    disabled = false,
    readOnly = false,
    required = false,
    error,
    trigger,
    onChange,
    onBlur,
    className
  }) => {
    return (
      <Form.Group {...makeClassName('input-tag', name, className)}>
        {label && <Form.ControlLabel>
          {label}
          {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
          {required && <RequiredIcon />}
        </Form.ControlLabel>}
        <RSuite5FieldControl errorMessage={_.isString(error) ? error : undefined }>
          <TagInput
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            size={size}
            trigger={trigger}
            readOnly={readOnly}
          />
        </RSuite5FieldControl>
        {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
      </Form.Group>
    );
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded RSuite5.InputTag');

export default InputTag;
