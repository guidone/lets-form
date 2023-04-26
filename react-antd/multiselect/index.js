import React from 'react';
import _ from 'lodash';
import { Form, Select } from 'antd';

import { I18N } from '../../components';

const Multiselect = I18N(
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
    maxTagCount,
    maxTagPlaceholder,
    maxTagTextLength,
    ...rest
  }) => {
    return (
      <Form.Item
        label={label}
        data-lf-field-name={name}
        className="lf-control-multiselect"
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
          mode="multiple"
          //mode="tags"
          bordered={bordered}
          listHeight={listHeight}
          placement={placement}
          showArrow={showArrow}
          virtual={virtual}
          showSearch={showSearch}
          allowClear={allowClear}
          maxTagCount={maxTagCount}
          maxTagPlaceholder={maxTagPlaceholder}
          maxTagTextLength={maxTagTextLength}
          // tokenSeparators={["-", " "]} only for tags
          style={_.isNumber(width) ? { width: `${width}px` } : undefined}
          {...(_.omit(rest, 'lfFramework', 'lfComponent'))}
        />
      </Form.Item>
    )
  },
  ['label', 'hint', 'placeholder']
);

export { Multiselect };
