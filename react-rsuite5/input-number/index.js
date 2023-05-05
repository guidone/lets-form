/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useState } from 'react';
import { Form, InputNumber } from 'rsuite';
import _ from 'lodash';
import classNames from 'classnames';

import { RequiredIcon, I18N } from '../../components';
import { CrossCirle } from '../../assets/icons';
import { makeWidthStyle } from '../../helpers';

import './index.scss';

const hasDecimals = f => _.isString(f) && (f.includes(',') || f.includes('.'));

const InputNumberRSuite5 = I18N(
  ({
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
    width,
    fullWidth,
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
          if (value === '') {
            // void if the user deleted all chars
            parsed = null;
          } else if (hasDecimals(value)) {
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
      <Form.Group
        data-lf-field-name={name}
        className={classNames(
          'lf-control-input-number', {
            [`lf-size-${size}`]: size != null,
            'lf-full-width': fullWidth || width != null
          }
        )}
        style={makeWidthStyle(fullWidth, width)}
      >
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
  },
  ['label', 'hint', 'placeholder']
);

export { InputNumberRSuite5 as InputNumber };
