/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import _ from 'lodash';

import { I18N } from '../../components';
import { MakeButton } from '../../common';

import './button.scss';

const BootstrapButton = ({ label, icon, hint, ...rest }) => {
  let inner;
  if (!_.isEmpty(label) && !_.isEmpty(icon)) {
    inner = (
      <Button
        {...rest}
      >
        <img className="lf-icon" src={icon} />
        {label}
      </Button>
    ) 
  } else if (!_.isEmpty(label) && _.isEmpty(icon)) {
    inner = (
      <Button
        {...rest}
      >{label}</Button>
    ) 
  } else if (_.isEmpty(label) && !_.isEmpty(icon)) {
    inner = (
      <Button
        {...rest}
      >
        <img className="lf-icon" src={icon} />
      </Button>
    );
  } else {
    inner = <></>;
  }

  return (
    <>
      {inner}
      {hint && <div><Form.Text>{hint}</Form.Text></div>}    
    </>
  );
};

const BiStateButton = I18N(
  MakeButton(
    BootstrapButton, 
    props => ({ variant: props.variant || 'primary' }), 
    props => ({ variant: 'outline-' + (props.variant || 'primary') })
  ),
  ['labelOn', 'labelOff', 'labelLink', 'hint']
);

export { BiStateButton as Button };
