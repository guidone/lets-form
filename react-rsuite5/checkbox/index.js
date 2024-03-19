import React, { useCallback, useState } from 'react';
import _ from 'lodash';
import Form from 'rsuite/Form';
import Checkbox from 'rsuite/Checkbox';

import { I18N } from '../../components';
import { RSuite5FieldControl } from '../../components/rsuite-field-control';
import { passRest } from '../../helpers';
import { lfLog } from '../../helpers/lf-log';

import './index.scss';

const CheckboxRSuite = I18N(
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
    indeterminate,
    error,
    onChange,
    onBlur,
    appearance,
    locale,
    format,
    ...rest
  }) => {
    const [isChecked, setIsChecked] = useState(value ?? null);
    const handleChange = useCallback(
      (valueType, checked) => {
        let newValue;
        if (isChecked === true) {
          newValue = false;
        } if (isChecked === false) {
          if (indeterminate) {
            newValue = null;
          } else {
            newValue = true;
          }
        } else if (isChecked === null) {
          newValue = true;
        }
        onChange(newValue);
        setIsChecked(newValue);
      },
      [onChange, indeterminate, isChecked],
    );

    return (
      <Form.Group data-lf-field-name={name} className="lt-control-checkbox">
        <RSuite5FieldControl errorMessage={_.isString(error) ? error : undefined }>
          <Checkbox
            indeterminate={indeterminate && isChecked === null}
            name={name}
            checked={isChecked}
            onChange={handleChange}
            readOnly={readOnly}
            plaintext={plaintext}
            onBlur={onBlur}
            errorMessage={_.isString(error) ? error : undefined }
            disabled={disabled}
            {...passRest(rest)}
          >
            {label}
            {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
          </Checkbox>
        </RSuite5FieldControl>
        {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
      </Form.Group>
    );
  },
  ['label', 'hint']
);
lfLog('Loaded RSuite5.Checkbox');

export default CheckboxRSuite;
