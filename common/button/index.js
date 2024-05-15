import React, { useCallback, useState } from 'react';
import _ from 'lodash';
import classNames from 'classnames';

import { passRest, makeWidthStyle } from '../../helpers';

const GenericButton = ({
  ButtonComponent,
  OnStateProps,
  OffStateProps,
  LinkProps = {},
  name,
  labelOn,
  labelOff,
  labelLink,
  iconOn,
  iconOff,
  iconLink,
  size,
  href,
  appearance,
  fullWidth,
  width,
  onChange,
  onBlur,
  value,
  buttonType,
  hint,
  initialValue,
  className,
  ...rest
}) => {
  const [checked, setChecked] = useState(value || initialValue);

  const handleClick = useCallback(
    () => {
      const newValue = !checked;
      setChecked(!checked);
      onChange(newValue, name);
    },
    [onChange, checked, name]
  );

  let inner;
  if (buttonType === 'toggle') {
    inner = (
      <ButtonComponent
        size={size}
        onClick={handleClick}
        onBlur={onBlur}
        icon={checked ? iconOn : iconOff}
        label={checked ? labelOn : labelOff }
        hint={hint}
        style={makeWidthStyle(fullWidth, width)}
        {...passRest(_.omit(rest, 'label'))}
        {...(checked ? OnStateProps : OffStateProps)}
      />
    );
  } else if (buttonType === 'link') {
    inner = (
      <ButtonComponent
        size={size}
        onBlur={onBlur}
        appearance={appearance}
        hint={hint}
        label={labelLink}
        icon={iconLink}
        href={href}
        target="_blank"
        style={makeWidthStyle(fullWidth, width)}
        {...passRest(_.omit(rest, 'label'))}
        {...LinkProps}
      />
    );
  }

  return (
    <div
      className={classNames('lf-control-button', className, { [`lf-control-button-${size ?? ''}`]: true })}
      data-lf-field-name={name}>
      {inner}
    </div>
  );
};


const MakeButton = (ButtonComponent, OnStateProps, OffStateProps, LinkProps) => {
  return props => {
    return (
      <GenericButton
        ButtonComponent={ButtonComponent}
        OnStateProps={_.isFunction(OnStateProps) ? OnStateProps(props) : OnStateProps}
        OffStateProps={_.isFunction(OffStateProps) ? OffStateProps(props) : OffStateProps}
        LinkProps={_.isFunction(LinkProps) ? LinkProps(props) : LinkProps}
        {...props}
      />
    );
  }
};

export { MakeButton };