/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useState } from 'react';
import { Form, InputNumber, InputGroup } from 'rsuite';
import _ from 'lodash';

import { RequiredIcon } from '../../components';
import { CrossCirle } from '../../assets/icons';

const hasDecimals = f => _.isString(f) && (f.includes(',') || f.includes('.'));

const InputNumberRSuite5 = ({
  name,
  label,
  hint,
  value,
  size,
  placeholder,
  min,
  max,
  tooltip = false,
  disabled = false,
  readOnly = false,
  required = false,
  error,
  prefix,
  postfix,
  onChange = () => {},
  step = 1,
  onBlur,
  inside = false,
  allowClear
}) => {
  const [currentValue, setCurrentValue] = useState(value ?? null);
  const handleChange = useCallback(
    value => {
      let parsed = value;
      if (_.isString(value)) {
        if (hasDecimals(value)) {
          parsed = parseFloat(value);
        } else {
          parsed = parseInt(value, 10);
        }
      }
      // set the original value again, otherwise never be able to
      // input a float number i.e. "0.2"
      setCurrentValue(value);
      if (!isNaN(parsed)) {
        onChange(parsed);
      }
    },
    [onChange]
  );

  const handleClear = useCallback(
    (e) => {
      e.preventDefault();
      onChange(undefined);
      setCurrentValue(null);
    },
    [onChange]
  );

  return (
    <Form.Group className="lf-control-input-number">
      {label && <Form.ControlLabel>
        {label}
        {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
        {required && <RequiredIcon />}
      </Form.ControlLabel>}
      <Form.Control
        accepter={InputNumber}
        value={currentValue}
        onChange={handleChange}
        onClear={handleClear}
        onBlur={onBlur}
        disabled={disabled}
        size={size}
        min={min}
        max={max}
        step={step}
        inside={inside}
        prefix={prefix}
        postfix={allowClear ?
          (<a href="#" onClick={handleClear}>
            <CrossCirle width={16} height={16} />
          </a>)
          : postfix
        }
        placeholder={placeholder}
        readOnly={readOnly}
        errorMessage={_.isString(error) ? error : undefined }
      />
      {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
    </Form.Group>
  );
};

export { InputNumberRSuite5 as InputNumber };
