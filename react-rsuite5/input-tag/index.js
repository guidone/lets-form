import React from 'react';
import Form from 'rsuite/Form';
import TagInput from 'rsuite/TagInput';
import _ from 'lodash';

import { RequiredIcon, I18N } from '../../components';
import { lfLog } from '../../helpers/lf-log';

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
    onBlur
  }) => {
    return (
      <Form.Group data-lf-field-name={name} className="lf-control-input-tag">
        {label && <Form.ControlLabel>
          {label}
          {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
          {required && <RequiredIcon />}
        </Form.ControlLabel>}
        <Form.Control
          name={name}
          accepter={TagInput}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          size={size}
          trigger={trigger}
          readOnly={readOnly}
          errorMessage={_.isString(error) ? error : undefined }
        />
        {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
      </Form.Group>
    );
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded RSuite5.InputTag');

export default InputTag;
