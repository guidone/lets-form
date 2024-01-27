import React from 'react';
import Form from 'antd/lib/form';
import Select from 'antd/lib/select';
import Space from 'antd/lib/space';

import { I18N } from '../../components';
import { passRest, filterOptions, i18nOptions, makeWidthStyle } from '../../helpers';
import { lfLog } from '../../helpers/lf-log';

import './select.scss';

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
    lfLocale,
    postfix,
    allowClear,
    bordered,
    onChange,
    onBlur,
    width,
    fullWidth,
    popupMatchSelectWidth,
    showSearch,
    placement,
    showArrow,
    listHeight,
    virtual,
    options,
    filterKey,
    filterValue,
    showImageOptions = false,
    ...rest
  }) => {
    return (
      <Form.Item
        data-lf-field-name={name}
        className="lf-control-select"
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
          disabled={disabled}
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
          popupMatchSelectWidth={popupMatchSelectWidth}
          style={makeWidthStyle(fullWidth, width)}
          {...passRest(rest)}
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
  },
  ['label', 'hint', 'placeholder'],
  {
    options: i18nOptions
  }
);
lfLog('Loaded AntD.Select');

export default SelectAntd;
