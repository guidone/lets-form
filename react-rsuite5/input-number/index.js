/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useState } from 'react';
import { Form, InputNumber } from 'rsuite';
import _ from 'lodash';

import { RequiredIcon } from '../../components/required-icon';
import { I18N } from '../../components/i18n';
import { CrossCirle } from '../../assets/icons/cross-circle';
import { makeWidthStyle } from '../../helpers/make-width-style';
import { lfLog } from '../../helpers/lf-log';
import { RSuite5FieldControl } from '../../components/rsuite-field-control';
import { passRest } from '../../helpers';
import { makeClassName } from '../../helpers/make-class-name';

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
    allowClear,
    className,
    ...rest
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
        {...makeClassName('input-number', name, className, {
          [`lf-size-${size}`]: size != null,
          'lf-full-width': fullWidth || width != null
        })}
        style={makeWidthStyle(fullWidth, width)}
      >
        {label && <Form.ControlLabel>
          {label}
          {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
          {required && <RequiredIcon />}
        </Form.ControlLabel>}
        <RSuite5FieldControl errorMessage={_.isString(error) ? error : undefined }>
          <InputNumber
            name={name}
            accepter={InputNumber}
            value={currentValue}
            onChange={handleChange}
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
            {...passRest(rest)}
          />
        </RSuite5FieldControl>
        {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
      </Form.Group>
    );
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded RSuite.InputNumber');

export default InputNumberRSuite5;
