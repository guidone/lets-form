import React, { useCallback } from 'react';
import { Select, Input } from '@mantine/core';
import _ from 'lodash';

import { I18N } from '../../components';
import { TextOrIcon } from '../../common';
import { passRest, makeWidthStyle, i18nOptions, filterOptions } from '../../helpers';
import { lfLog } from '../../helpers/lf-log';

// TODO filter done with proper params

const MantineSelect = I18N(
  ({
    name,
    label,
    hint,
    value,
    size,
    placeholder,
    tooltip = false,
    disabled = false,
    readOnly = false,
    required = false,
    submitOnEnter = false,
    pointer,
    error,
    prefix,
    postfix,
    onChange,
    onBlur,
    fullWidth,
    width,
    autocomplete,
    inputMode,
    inputType,
    inside = false,
    options,
    filterValue,
    filterKey,
    lfOnEnter = () => {},
    radius,
    variant,
    allowDeselect,
    clearable,
    defaultDropdownOpened,
    withCheckIcon,
    withScrollArea,
    checkIconPosition,
    ...rest
  }) => {
    const handleKeyUp = useCallback(e => e.keyCode === 13 && lfOnEnter(), [lfOnEnter]);

    return (
      <Input.Wrapper 
        className="lf-control-select"
        data-lf-field-name={name}
        style={makeWidthStyle(fullWidth, width)}
        label={label} 
        description={hint} 
        error={_.isString(error) ? error : undefined }
        required={required}
        inputWrapperOrder={['label', 'input', 'description', 'error']}
      >
        <Select 
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          onKeyUp={submitOnEnter ? handleKeyUp : undefined}
          disabled={disabled}
          pointer={pointer}
          value={value}
          name={name}
          size={size}
          data={filterOptions(options, filterValue, filterKey) || []}
          radius={radius}
          variant={variant}
          readOnly={readOnly}
          leftSection={prefix && <div className="lf-prefix-wrapper">{TextOrIcon(prefix)}</div>}
          rightSection={prefix && <div className="lf-prefix-wrapper">{TextOrIcon(postfix)}</div>}
          allowDeselect={allowDeselect}
          clearable={clearable}
          defaultDropdownOpened={defaultDropdownOpened}
          withCheckIcon={withCheckIcon}
          withScrollArea={withScrollArea}
          checkIconPosition={checkIconPosition}
          {...passRest(rest)}
        />
      </Input.Wrapper>
    ); 
  },
  ['label', 'hint', 'placeholder'],
  {
    options: i18nOptions
  }
);
lfLog('Loaded Mantine.Select');

export default MantineSelect;
