import React, { useState, useCallback } from 'react';
import _ from 'lodash';

import './buttons-toggle-group.scss';

const getInitialValue = (value, multiple) => {
  return multiple ? 
    (_.isArray(value) ? value : []).reduce((acc, value) => ({ ...acc, [value]: true }), {}) :
    { [value]: true };
};

const ButtonsToggleGroup = ({
  value,
  options,
  onChange,
  size,
  multiple = false,
  disabled,
  ButtonComponent
}) => {
  const [values, setValues] = useState(getInitialValue(value, multiple));

  const handleClick = useCallback(
    (value, name) => {
      const newValues = multiple ? { ...values, [name]: value } : { [name]: value };
      setValues(newValues);                      
      const newValue = options.reduce(
        (acc, option) => newValues[option.value] ? [...acc, option.value] : acc,
        []
      );
      onChange(multiple ? newValue : newValue[0]);
    },
    [onChange, options, values, multiple]
  );

  return (
    <div>
      {(options ?? []).map(({ value, label}) => (
        <ButtonComponent 
          key={value + values[value]}
          buttonType="toggle"
          labelOn={label}
          name={value}
          initialValue={values[value]}
          labelOff={label}
          size={size}
          disabled={disabled}
          onChange={handleClick}
        />
      ))}
    </div>
  );
};

export { ButtonsToggleGroup };
