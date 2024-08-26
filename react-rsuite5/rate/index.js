import React from 'react';
import { Form, Rate } from 'rsuite';
import _ from 'lodash';

import { RequiredIcon } from '../../components/required-icon';
import { I18N } from '../../components/i18n';
import { lfLog } from '../../helpers/lf-log';
import { RSuite5FieldControl } from '../../components/rsuite-field-control';

const RateRSuite = I18N(
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
    allowHalf = false,
    cleanable = true,
    max,
    color,
    onChange,
    onBlur
  }) => {
    return (
      <Form.Group controlId={name} className="lets-form-input-tag">
        {label && <Form.ControlLabel>
          {label}
          {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
          {required && <RequiredIcon />}
        </Form.ControlLabel>}
        <RSuite5FieldControl errorMessage={_.isString(error) ? error : undefined }>
          <Rate
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            size={size}
            max={max}
            color={color}
            allowHalf={allowHalf}
            cleanable={cleanable}
            readOnly={readOnly}
          />
        </RSuite5FieldControl>
        {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
      </Form.Group>
    );
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded RSuite5.Rate');

export default RateRSuite;
