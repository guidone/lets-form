import React from 'react';
import { Form, Rate } from 'antd';
import _ from 'lodash';

import { I18N } from '../../components';
import { lfLog } from '../../helpers/lf-log';

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
        valuePropName={null}
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
lfLog('Loaded AntD.Rate');

export default RateAntd;
