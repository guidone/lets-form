import React from 'react';
import { Form, Select, Space } from 'antd';

import { passRest } from '../../helpers/pass-rest';
import { filterOptions } from '../../helpers/filter-options';
import { makeWidthStyle } from '../../helpers/make-width-style';

import './select.scss';

const AntdGenericSelect = ({
  name,
  label,
  hint,
  value,
  tooltip = false,
  required = false,
  error,
  onChange,
  onBlur,
  width,
  fullWidth,
  options,
  filterKey,
  filterValue,
  className,
  showArrow,
  showImageOptions = false,
  ...rest
}) => {
  return (
    <Form.Item
      data-lf-field-name={name}
      className={className}
      label={label}
      name={name}
      help={error != null ? error : (hint && !tooltip ? hint : undefined)}
      required={required}
      tooltip={tooltip && hint}
      hasFeedback={error != null}
      validateStatus={error ? 'error': undefined}
      valuePropName={null}
    >
      <Select
        onChange={onChange}
        onBlur={onBlur}
        defaultValue={value}
        style={makeWidthStyle(fullWidth, width)}
        suffixIcon={showArrow === false ? null : undefined}
        {...passRest(rest, ['bordered', ''])}
      >
        {(filterOptions(options, filterValue, filterKey) || [])
          .map(option => (
            <Select.Option
              key={option.value}
              value={option.value}
              label={option.label}>
              {option.image && showImageOptions && (
                <Space className="lf-control-select-option-antd" align="center">
                  <img src={option.image} alt={option.label}/>
                  {option.label}
                </Space>
              )}
            </Select.Option>
          ))
        }
      </Select>
    </Form.Item>
  )
};

export { AntdGenericSelect };
