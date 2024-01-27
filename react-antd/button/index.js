/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Button from 'antd/lib/button';
import Tooltip from 'antd/lib/tooltip';
import _ from 'lodash';

import { I18N } from '../../components';
import { MakeButton } from '../../common';
import { lfLog } from '../../helpers/lf-log';

import './button.scss';

const AntdButton = ({ label, icon, hint, tooltip, ...rest }) => {
  let inner;
  if (!_.isEmpty(label) && !_.isEmpty(icon)) {
    inner = (
      <Button
        icon={<img className="lf-icon" src={icon} />}
        {...rest}
      >{label}</Button>
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
        icon={<img className="lf-icon" src={icon} />}
        {...rest}
      />
    );
  } else {
    inner = <></>;
  }

  return (
    <>
      {!_.isEmpty(hint) && (
        <Tooltip
          title={hint}
        >
          {inner}
        </Tooltip>
      )}
      {_.isEmpty(hint) && inner}    
    </>
  );
};

const BiStateButton = I18N(
  MakeButton(AntdButton, { type: 'primary' }, { type: undefined }),
  ['labelOn', 'labelOff', 'labelLink', 'hint']
);

export default BiStateButton;
