import React from 'react';
import classNames from 'classnames';

import './index.scss';

const FormReact = ({
  name,
  children,
  buttonsAlign,
  hideToolbar = false,
  onlyFields = false,
  plaintext,
  labelSubmit = 'Submit',
  labelCancel = 'Cancel',
  onSubmit = () => {},
  onReset = () => {}
}) => {

  // TODO pure-form-aligned
  return (
    <form
      onSubmit={onSubmit}
      className={classNames('lf-form lf-form-react lf-form-react-stacked', {
        [buttonsAlign ? `lf-form-buttons-align-${buttonsAlign}` : undefined]: true
      })}
      data-lf-form-name={name}
    >
      {children}
      {!hideToolbar && !onlyFields && !plaintext && (
        <div className="lf-toolbar">
          <button
            type="submit"
            onClick={onSubmit}
            className="lf-form-react-primary-button"
          >{labelSubmit}</button>
          <button
            type="button"
            className="lf-form-react-secondary-button"
            onClick={onReset}
          >{labelCancel}</button>
        </div>
      )}
    </form>
  );
};

export { FormReact };
