import React from 'react';
import { Button, Group } from '@mantine/core';
import classNames from 'classnames';

import './form.scss';

import { lfLog } from '../../helpers/lf-log';

const MantineForm = ({
  name,
  children,
  buttonsAlign,
  hideToolbar = false,
  onlyFields = false,
  disabled = false,
  disabledSubmit = false,
  plaintext,
  labelSubmit = 'Submit',
  labelCancel = 'Cancel',
  onSubmit = () => {},
  onReset = () => {},
  custom
} = {}) => {
  return (
    <div> 
      <form
        onSubmit={onSubmit}
        className={classNames('lf-form lf-form-react-mantine', {
          [buttonsAlign ? `lf-form-buttons-align-${buttonsAlign}` : undefined]: true
        })}
        data-lf-form-name={name}
      >
        {children}
        {!hideToolbar && !onlyFields && !plaintext && (          
          <Group className="lf-buttons" align={buttonsAlign}>
            <Button
              variant="filled"
              onClick={onSubmit}
              disabled={disabled || disabledSubmit}
              className="lf-form-react-primary-button"
            >{labelSubmit}</Button>
            <Button
              variant="outline"
              disabled={disabled}
              className="lf-form-react-secondary-button"
              onClick={onReset}
            >{labelCancel}</Button>
            {custom}
          </Group>
        )}
      </form>    
    </div>
  );
};
lfLog('Loaded Mantine.Form');

export default MantineForm;
