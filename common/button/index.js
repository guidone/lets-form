import React, { useCallback, useState} from 'react';
import _ from 'lodash';

import { passRest, makeWidthStyle } from '../../helpers';

const GenericButton = ({
  ButtonComponent,
  OnStateProps,
  OffStateProps,
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
  ...rest
}) => {
  const [checked, setChecked] = useState(value || initialValue);

  const handleClick = useCallback(
    () => {
      const newValue = !checked;
      setChecked(!checked);
      onChange(newValue);
    },
    [onChange, checked]
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
      />
    );
  }

  return (
    <div className="lf-control-button" data-lf-field-name={name}>        
      {inner}
    </div>
  );
};


const MakeButton = (ButtonComponent, OnStateProps, OffStateProps) => {
  return props => {
    return (
    <GenericButton
      ButtonComponent={ButtonComponent} 
      OnStateProps={_.isFunction(OnStateProps) ? OnStateProps(props) : OnStateProps}
      OffStateProps={_.isFunction(OffStateProps) ? OffStateProps(props) : OffStateProps}
      {...props}
    />
  );
    }
};

export { MakeButton };