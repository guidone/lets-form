import React from 'react';
import classNames from 'classnames';
import { Form, ButtonToolbar, Button } from 'rsuite';

import { lfLog } from '../../helpers/lf-log';

import './index.scss';

const FormRsuite5 = ({
  children,
  name,
  layout,
  fluid = false,
  disabled = false,
  disabledSubmit = false,
  buttonsAlign,
  labelSubmit = 'Submit',
  labelCancel = 'Cancel',
  hideCancel = false,
  hideSumbut = false,
  readOnly = false,
  onlyFields = false,
  hideToolbar = false,
  onSubmit = () => {},
  onReset = () => {},
  custom
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
        <ButtonToolbar className="lf-buttons">
          {!hideSumbut && (
            <Button
              appearance="primary"
              onClick={onSubmit}
              disabled={disabled || disabledSubmit}
            >{labelSubmit}</Button>
          )}
          {!hideCancel && (
            <Button
              onClick={onReset}
              disabled={disabled}
            >{labelCancel}</Button>
          )}
          {custom}
        </ButtonToolbar>
      )}
    </Form>
  );
};

lfLog('Loaded RSuite5.Form');

export default FormRsuite5;
