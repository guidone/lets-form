import React from 'react';
import { Button, Stack } from '@mui/material';

import './index.scss';

const FormMaterialUI = ({
  children,
  onSubmit = () => {},
  onReset = () => {}
}) => {

  return (
    <form
      className="lf-form-react-material-ui"
      onSubmit={onSubmit}
    >
      {children}
      <Stack spacing={2} direction="row" className="lf-toolbar">
        <Button onClick={onSubmit} variant="contained">Submit</Button>
        <Button onClick={onReset} variant="outlined">Cancel</Button>
      </Stack>
    </form>
  );
};

export { FormMaterialUI };