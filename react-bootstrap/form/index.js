import React from 'react';
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';

const FormBootstrap = ({
  children,
  onSubmit,
  onReset,
  hideToolbar = false
}) => {

  return (
    <Form
    className="lf-form-react-bootstrap"
      onSubmit={onSubmit}
    >
      <div>
        {children}
      </div>
      {!hideToolbar && (
        <>
          <Button
            variant="primary"
            onClick={onSubmit}
          >
            Submit
          </Button>
          {' '}
          <Button
            variant="secondary"
            onClick={onReset}
          >
            Cancel
          </Button>
        </>
      )}
    </Form>
  );
};

export { FormBootstrap };
