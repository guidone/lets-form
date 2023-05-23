import React from 'react';
import { Button, Stack } from '@mui/material';
import classNames from 'classnames';

const FormMaterialUI = ({
  name,
  buttonsAlign,
  children,
  labelSubmit = 'Submit',
  labelCancel = 'Cancel',
  plaintext,
  onlyFields = false,
  hideToolbar = false,
  onSubmit = () => {},
  onReset = () => {}
}) => {

  return (
    <form
      className={classNames('lf-form lf-form-react-material-ui', {
        'lf-form-react-material-ui-plaintext': plaintext,
        [buttonsAlign ? `lf-form-buttons-align-${buttonsAlign}` : undefined]: true
      })}
      data-lf-form-name={name}
      onSubmit={onSubmit}
    >
      {children}
      {!onlyFields && !hideToolbar && !plaintext && (
        <Stack spacing={2} direction="row" className="lf-toolbar">
          <Button onClick={onSubmit} variant="contained">{labelSubmit}</Button>
          <Button onClick={onReset} variant="outlined">{labelCancel}</Button>
        </Stack>
      )}
    </form>
  );
};

export { FormMaterialUI };
