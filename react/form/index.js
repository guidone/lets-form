import React from 'react';

//import 'purecss/build/forms.css';
//import 'purecss/build/buttons.css';

import './index.scss';

const FormReact = ({
  children,
  hideToolbar = false,
  onSubmit = () => {},
  onReset = () => {}
}) => {

  // pure-form-aligned

  return (
    <form onSubmit={onSubmit} className="lf-form-react lf-form-react-stacked">
      {children}
      {!hideToolbar && (
        <div className="lf-toolbar">
          <button
            type="submit"
            onClick={onSubmit}
            className="lf-form-react-primary-button"
          >Submit</button>
          <button
            type="button"
            className="lf-form-react-secondary-button"
            onClick={onReset}>Cancel</button>
        </div>
      )}
    </form>
  );
};

export { FormReact }