import React from 'react';
import classNames from 'classnames';

import { lfLog } from '../../helpers/lf-log';

import './index.scss';

const FormReact = ({
  id,
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
  onBlur = () => {},
  custom
}) => {

  return (
    <form
      id={id}
      onSubmit={onSubmit}
      className={classNames('lf-form lf-form-react lf-form-react-stacked', {
        [buttonsAlign ? `lf-form-buttons-align-${buttonsAlign}` : undefined]: true
      })}
      data-lf-form-name={name}
      onBlur={onBlur}
    >
      {children}
      {!hideToolbar && !onlyFields && !plaintext && (
        <div className="lf-buttons">
          <button
            type="submit"
            onClick={onSubmit}
            disabled={disabled || disabledSubmit}
            className="lf-form-react-primary-button"
          >{labelSubmit}</button>
          <button
            type="button"
            disabled={disabled}
            className="lf-form-react-secondary-button"
            onClick={onReset}
          >{labelCancel}</button>
          {custom}
        </div>
      )}
    </form>
  );
};
lfLog('Loaded React.Form');

export default FormReact;
