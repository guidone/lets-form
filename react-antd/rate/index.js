import React, { useCallback } from 'react';
import { Form, Rate } from 'antd';
import _ from 'lodash';

import { I18N } from '../../components';

const RateAntd = I18N(
  ({
    name,
    label,
    hint,
    value,
    size,
    placeholder,
    showCount,
    count,
    tooltip = false,
    disabled = false,
    readOnly = false,
    required = false,
    maxLength,
    error,
    prefix,
    postfix,
    allowClear,
    allowHalf,
    bordered,
    onChange,
    onBlur,
    width,
    tooltips,
    ...rest
  }) => {
    const handleChange = useCallback(
      e => onChange(e.target.value),
      [onChange]
    );

    const mappedTooltips = (tooltips ?? [])
      .map(item => {
        if (_.isString(item)) {
          return item;
        } else if (_.isString(item.tooltip)) {
          return item.tooltip;
        }
        return null;
      })
      .filter(Boolean);

    /*
      placeholder={placeholder}
          readOnly={readOnly}
          onChange={handleChange}
          onBlur={onBlur}
          value={value}
          size={size}
          prefix={prefix}
          suffix={postfix}
          allowClear={allowClear}
          bordered={bordered}
          disabled={disabled}
          showCount={showCount}
          maxLength={maxLength}
          style={_.isNumber(width) ? { width: `${width}px` } : undefined}
          {...(_.omit(rest, 'lfFramework', 'lfComponent'))}

    */

    return (
      <Form.Item
        data-lf-field-name={name}
        className="lf-control-rate"
        label={label}
        name={name}
        help={error != null ? error : (hint && !tooltip ? hint : undefined)}
        required={required}
        tooltip={tooltip && hint}
        hasFeedback={error != null}
        validateStatus={error ? 'error': undefined}
      >
        <Rate
          defaultValue={value}
          disabled={disabled}
          allowClear={allowClear}
          readOnly={readOnly}
          allowHalf={allowHalf}
          onChange={onChange}
          onBlur={onBlur}
          count={count}
          tooltips={mappedTooltips}
        />
      </Form.Item>
    )
  },
  ['label', 'hint']
);

export { RateAntd as Rate };
