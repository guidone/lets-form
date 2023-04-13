import React from 'react';
import classNames from 'classnames';

import { Form, ButtonToolbar, Button } from 'rsuite';

import './index.scss';

const FormRsuite5 = ({
  children,
  layout,
  fluid = false,
  disabled = false,
  readOnly = false,
  onlyFields = false,
  plaintext = false,
  hideToolbar = false,
  onSubmit = () => {},
  onReset = () => {}
}) => {
  if (onlyFields) {
    return (
      <div className={classNames('rs-form', {
        [`rs-form-${layout}`]: true,
        'rs-form-fluid': fluid }
      )}>
        {children}
      </div>
    );
  }

  return (
    <Form
      className="lf-form-react-rsuite5"
      //onSubmit={onSubmit}
      layout={layout}
      fluid={fluid}
      readOnly={readOnly}
      disabled={disabled}
      plaintext={plaintext}
    >

      <div>
        {children}
      </div>
      {!hideToolbar && (
        <ButtonToolbar className="lf-toolbar">
          <Button
            onClick={onReset}
          >Cancel</Button>
          <Button
            appearance="primary"
            onClick={onSubmit}
          >Submit</Button>
        </ButtonToolbar>
      )}
    </Form>
  );
};

export { FormRsuite5 }