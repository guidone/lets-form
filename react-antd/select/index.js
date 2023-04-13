import React from 'react';
import _ from 'lodash';
import { Form, Select } from 'antd';

import { I18N } from '../../components';
import { passRest, filterOptions } from '../../helpers';

const SelectAntd = I18N(
  ({
    name,
    label,
    hint,
    value,
    size,
    placeholder,
    showCount,
    tooltip = false,
    disabled = false,
    readOnly = false,
    required = false,
    maxLength,
    error,
    prefix,
    postfix,
    allowClear,
    bordered,
    onChange,
    onBlur,
    width,
    showSearch,
    placement,
    showArrow,
    listHeight,
    virtual,
    options,
    filterKey,
    filterValue,
    ...rest
  }) => {
    return (
      <Form.Item
        label={label}
        name={name}
        help={error != null ? error : (hint && !tooltip ? hint : undefined)}
        required={required}
        tooltip={tooltip && hint}
        hasFeedback={error != null}
        validateStatus={error ? 'error': undefined}
      >
        <Select
          placeholder={placeholder}
          readOnly={readOnly}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          size={size}
          bordered={bordered}
          listHeight={listHeight}
          placement={placement}
          showArrow={showArrow}
          virtual={virtual}
          showSearch={showSearch}
          allowClear={allowClear}
          options={filterOptions(options, filterValue, filterKey) || []}
          style={_.isNumber(width) ? { width: `${width}px` } : undefined}
          {...passRest(rest)}
        />
      </Form.Item>
    )
  },
  ['label', 'hint', 'placeholder'],
  {
    options: (value, i18n) => (value ?? []).map(value => ({ ...value, label: i18n(value.label) }))
  }
);

export { SelectAntd as Select };
