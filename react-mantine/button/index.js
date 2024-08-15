/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Button, Tooltip, Input, ActionIcon } from '@mantine/core';
import _ from 'lodash';

import { I18N } from '../../components';
import { MakeButton } from '../../common';
import { lfLog } from '../../helpers/lf-log';

import './button.scss';

const MantineButton = ({ label, icon, hint, tooltip, ...rest }) => {
  let inner;
  if (!_.isEmpty(label) && !_.isEmpty(icon)) {
    inner = (
      <Button
        leftSection={<img className="lf-icon" src={icon} />}
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
      <ActionIcon
        {...rest}
        size={rest.size ? `input-${rest.size}` : undefined}
      >
        <img className="lf-icon" src={icon} />
      </ActionIcon>
    );
  } else {
    inner = <></>;
  }

  return (
    <>
      {!_.isEmpty(hint) && tooltip && (
        <Tooltip
          label={hint}
          withArrow
        >
          {inner}
        </Tooltip>
      )}
      {(_.isEmpty(hint) || !tooltip) && inner}
      {!_.isEmpty(hint) && !tooltip && <Input.Description>{hint}</Input.Description>}
    </>
  );
};

const BiStateButton = I18N(
  MakeButton(MantineButton, { variant: 'filled' }, { variant: 'outline' }),
  ['labelOn', 'labelOff', 'labelLink', 'hint']
);

lfLog('Loaded Mantine.Button');

export default BiStateButton;
