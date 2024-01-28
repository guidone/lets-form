/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import _ from 'lodash';

import { I18N } from '../../components';
import { MakeButton } from '../../common';
import { lfLog } from '../../helpers/lf-log';

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

lfLog('Loaded MUI.Button');

export default BiStateButton;
