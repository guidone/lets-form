/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Button, FormHelperText } from '@mui/material';
import _ from 'lodash';

import { I18N } from '../../components';
import { MakeButton } from '../../common';

import './button.scss';

const MuiButton = ({ label, icon, hint, tooltip, variant, size, color, ...rest }) => {
  let inner;
  if (!_.isEmpty(label) && !_.isEmpty(icon)) {
    inner = (
      <Button
        startIcon={<img className="lf-icon" src={icon} />}
        variant={variant || 'contained'}
        size={size ?? undefined}
        color={color ?? undefined}
        {...rest}
      >{label}</Button>
    ) 
  } else if (!_.isEmpty(label) && _.isEmpty(icon)) {
    inner = (
      <Button
        variant={variant || 'contained'}
        size={size ?? undefined}
        color={color ?? undefined}
        {...rest}
      >{label}</Button>
    ) 
  } else if (_.isEmpty(label) && !_.isEmpty(icon)) {
    inner = (
      <Button
        className="only-icon"
        startIcon={<img className="lf-icon" src={icon} />}
        variant={variant || 'contained'}
        size={size ?? undefined}
        color={color ?? undefined}
        {...rest}
      ></Button>
    );
  } else {
    inner = <></>;
  }

  return (
    <>
      {(_.isEmpty(hint) || !tooltip) && inner}
      {!_.isEmpty(hint)  && <FormHelperText>{hint}</FormHelperText>}    
    </>
  );
};

const BiStateButton = I18N(
  MakeButton(MuiButton, { variant: 'contained' }, { variant: 'outlined' }),
  ['labelOn', 'labelOff', 'labelLink', 'hint']
);

export { BiStateButton as Button };
