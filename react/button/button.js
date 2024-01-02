/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import _ from 'lodash';

import { I18N } from '../../components';
import { MakeButton } from '../../common';

import './button.scss';

const ReactButton = ({ label, icon, hint, ...rest }) => {
  let inner;
  if (!_.isEmpty(label) && !_.isEmpty(icon)) {
    inner = (
      <button        
        {...rest}
      >
        <img className="lf-icon" src={icon} />
        {label}
      </button>
    ) 
  } else if (!_.isEmpty(label) && _.isEmpty(icon)) {
    inner = (
      <button
        {...rest}
      >{label}</button>
    ) 
  } else if (_.isEmpty(label) && !_.isEmpty(icon)) {
    inner = (
      <button
        {...rest}
      >
        <img className="lf-icon" src={icon} />
      </button>
    );
  } else {
    inner = <></>;
  }

  return (
    <>
      {inner}
      {hint && <div><span className="lf-form-react-message">{hint}</span></div>}    
    </>
  );
};

const BiStateButton = I18N(
  MakeButton(
    ReactButton, 
    props => ({ className: 'lf-form-react-primary-button' }), 
    props => ({ className: 'lf-form-react-secondary-button' }),
    props => ({ 
      className: 'lf-form-react-primary-button', 
      onClick: () => window.location = props.href
    })
  ),
  ['labelOn', 'labelOff', 'labelLink', 'hint']
);

export { BiStateButton as Button };
