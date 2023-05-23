import React from 'react';
import classNames from 'classnames';
import { Form, ButtonToolbar, Button } from 'rsuite';

import './index.scss';

const FormRsuite5 = ({
  children,
  name,
  layout,
  fluid = false,
  disabled = false,
  buttonsAlign,
  labelSubmit = 'Submit',
  labelCancel = 'Cancel',
  readOnly = false,
  onlyFields = false,
  plaintext = false,
  hideToolbar = false,
  onSubmit = () => {},
  onReset = () => {}
}) => {
  if (onlyFields) {
    // TODO check this
    return (
      <div className={classNames('rs-form', {
        [`rs-form-${layout}`]: true,
        'rs-form-fluid': fluid
      })}>
        {children}
      </div>
    );
  }

  return (
    <Form
      className={classNames('lf-form lf-form-react-rsuite5', {
        [buttonsAlign ? `lf-form-buttons-align-${buttonsAlign}` : undefined]: true
      })}
      data-lf-form-name={name}
      layout={layout}
      fluid={fluid}
      readOnly={readOnly}
      disabled={disabled}
    >
      <div>
        {children}
      </div>
      {!hideToolbar && (
        <ButtonToolbar className="lf-toolbar">
          <Button
            appearance="primary"
            onClick={onSubmit}
          >{labelSubmit}</Button>
          <Button
            onClick={onReset}
          >{labelCancel}</Button>
        </ButtonToolbar>
      )}
    </Form>
  );
};

export { FormRsuite5 }