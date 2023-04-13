import React, { useCallback, useState } from 'react';
import _ from 'lodash';
import { Form, Checkbox } from 'rsuite';
import { I18N } from '../../components';

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
    indeterminate = true,
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
        console.log('ora??', checked)
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
      <Form.Group controlId={name} className="lt-control-checkbox">
        <Form.Control
          accepter={Checkbox}
          indeterminate={isChecked === null}
          name={name}
          checked={isChecked}
          onChange={handleChange}
          readOnly={readOnly}
          plaintext={plaintext}
          onBlur={onBlur}
          errorMessage={_.isString(error) ? error : undefined }
          disabled={disabled}
          {...rest}
        >
          {label}
          {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
        </Form.Control>
        {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
      </Form.Group>
    );
  },
  ['label', 'hint', 'placeholder']
);

export { CheckboxRSuite as Checkbox };
