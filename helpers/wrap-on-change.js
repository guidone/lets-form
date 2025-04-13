import React, { useCallback } from 'react';

/**
 * wrapOnChange
 * Wrap the component into HOC which normalize the onChange method, first argument the value,
 * second argument the field name. This makes the onChange function of the the form generator
 * referential stable
 */
const wrapOnChange = Component => {
  return ({ onChange, ...rest }) => {

    const handleChange = useCallback(
      value => onChange(value, rest.name),
      [onChange]
    );

    return (
      <Component
        {...rest}
        onChange={handleChange}
      />
    );
  };
};

export { wrapOnChange };
