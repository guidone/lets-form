import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import classNames from 'classnames';

import { lfLog } from '../../helpers/lf-log';

import './index.scss';

const FormBootstrap = ({
  name,
  children,
  onSubmit,
  buttonsAlign,
  onReset,
  hideToolbar = false,
  onlyFields = false,
  disabled = false,
  disabledSubmit = false,
  plaintext,
  labelSubmit = 'Submit',
  labelCancel = 'Cancel',
  custom
}) => {

  return (
    <Form
      className={classNames('lf-form lf-form-react-bootstrap', {
        [buttonsAlign ? `lf-form-buttons-align-${buttonsAlign}` : undefined]: true
      })}
      data-lf-form-name={name}
      onSubmit={onSubmit}
    >
      <div>
        {children}
      </div>
      {!hideToolbar && !onlyFields && !plaintext && (
        <div className="lf-buttons">
          <Button
            variant="primary"
            onClick={onSubmit}
            disabled={disabled || disabledSubmit}
          >{labelSubmit}</Button>
          <Button
            variant="secondary"
            onClick={onReset}
            disabled={disabled}
          >{labelCancel}</Button>
          {custom}
        </div>
      )}
    </Form>
  );
};
lfLog('Loaded ReactBootrap.Form');

export default FormBootstrap;
