import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import classNames from 'classnames';

import './index.scss';

const FormBootstrap = ({
  name,
  children,
  onSubmit,
  buttonsAlign,
  onReset,
  hideToolbar = false,
  labelSubmit = 'Submit',
  labelCancel = 'Cancel',
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
      {!hideToolbar && (
        <div className="lf-toolbar">
          <Button
            variant="primary"
            onClick={onSubmit}
          >{labelSubmit}</Button>
          <Button
            variant="secondary"
            onClick={onReset}
          >{labelCancel}</Button>
        </div>
      )}
    </Form>
  );
};

export { FormBootstrap };
