import React, { useState, useCallback } from 'react';
import _ from 'lodash';
import classNames from 'classnames';

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
  ButtonComponent,
  fullWidth,
  justifyContent
}) => {
  const [values, setValues] = useState(getInitialValue(value, multiple));

  console.log('options', options)

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

  const style = {};
  if (fullWidth) {
    style.display = 'flex';
  } if (!_.isEmpty(justifyContent)) {
    style.display = 'flex';
    style.justifyContent = justifyContent;
  }

  return (
    <div
      className="lf-control-button-toggle-group-container"
      style={style}
    >
      {(options ?? []).map(({ value, label, image }) => (
        <ButtonComponent
          key={value + values[value]}
          buttonType="toggle"
          labelOn={label}
          name={value}
          initialValue={values[value]}
          labelOff={label}
          size={size}
          disabled={disabled}
          icon={image}
          onChange={handleClick}
          className={classNames({
            'lf-full-width': fullWidth
          })}
        />
      ))}
    </div>
  );
};

export { ButtonsToggleGroup };
