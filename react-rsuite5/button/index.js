/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Button, Form, IconButton, Whisper, Tooltip } from 'rsuite';
import _ from 'lodash';

import { I18N } from '../../components';
import { MakeButton } from '../../common';
import { passRest } from '../../helpers';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

import './button.scss';

const RSuiteButton = ({ label, icon, hint, tooltip, ...rest }) => {
  let inner;
  if (!_.isEmpty(label) && !_.isEmpty(icon)) {
    inner = (
      <Button
        startIcon={<img className="lf-icon" src={icon} />}
        {...passRest(rest)}
      >{label}</Button>
    )
  } else if (!_.isEmpty(label) && _.isEmpty(icon)) {
    inner = (
      <Button
        {...passRest(rest)}
      >{label}</Button>
    )
  } else if (_.isEmpty(label) && !_.isEmpty(icon)) {
    inner = (
      <IconButton
        icon={<img className="lf-icon" src={icon} />}
        {...passRest(rest)}
      />
    );
  } else {
    inner = <></>;
  }


  return (
    <>
      {!_.isEmpty(hint) && tooltip && (
        <Whisper
          placement="top"
          trigger="hover"
          speaker={<Tooltip>{hint}</Tooltip>}
        >
          {inner}
        </Whisper>
      )}
      {(_.isEmpty(hint) || !tooltip) && inner}
      {!_.isEmpty(hint) && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
    </>
  );
};

const BiStateButton = I18N(
  MakeButton(RSuiteButton, { appearance: 'primary' }, { appearance: 'ghost' }),
  ['labelOn', 'labelOff', 'labelLink', 'hint']
);
lfLog('Loaded RSuite5.Button');

export default BiStateButton;
