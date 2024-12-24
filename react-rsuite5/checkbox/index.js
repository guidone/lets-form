import React, { useCallback, useState } from 'react';
import _ from 'lodash';
import { Form, Checkbox } from 'rsuite';

import { I18N } from '../../components/i18n';
import { RSuite5FieldControl } from '../../components/rsuite-field-control';
import { passRest } from '../../helpers/pass-rest';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

import './index.scss';

const CheckboxRSuite = I18N(
  ({
    name,
    label,
    hint,
    value,
    tooltip = false,
    indeterminate,
    error,
    onChange,
    className,
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
      <Form.Group {...makeClassName('checkbox', name, className)}>
        <RSuite5FieldControl errorMessage={_.isString(error) ? error : undefined }>
          <Checkbox
            indeterminate={indeterminate && isChecked === null}
            name={name}
            checked={isChecked}
            onChange={handleChange}
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
