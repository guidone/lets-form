import React from 'react';
import { Button, Stack } from '@mui/material';
import classNames from 'classnames';

import './index.scss';

const FormMaterialUI = ({
  name,
  buttonsAlign,
  children,
  labelSubmit = 'Submit',
  labelCancel = 'Cancel',
  onSubmit = () => {},
  onReset = () => {}
}) => {

  return (
    <form
      className={classNames('lf-form lf-form-react-material-ui', {
        [buttonsAlign ? `lf-form-buttons-align-${buttonsAlign}` : undefined]: true
      })}
      data-lf-form-name={name}
      onSubmit={onSubmit}
    >
      {children}
      <Stack spacing={2} direction="row" className="lf-toolbar">
        <Button onClick={onSubmit} variant="contained">{labelSubmit}</Button>
        <Button onClick={onReset} variant="outlined">{labelCancel}</Button>
      </Stack>
    </form>
  );
};

export { FormMaterialUI };
