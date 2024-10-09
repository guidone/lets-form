import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import classNames from 'classnames';

import { lfLog } from '../../helpers/lf-log';

const FormMaterialUI = ({
  id,
  name,
  buttonsAlign,
  children,
  labelSubmit = 'Submit',
  labelCancel = 'Cancel',
  hideCancel = false,
  hideSubmit = false,
  disabled = false,
  disabledSubmit = false,
  plaintext,
  onlyFields = false,
  hideToolbar = false,
  onSubmit = () => {},
  onReset = () => {},
  custom
}) => {

  return (
    <form
      id={id}
      className={classNames('lf-form lf-form-react-material-ui', {
        'lf-form-react-material-ui-plaintext': plaintext,
        [buttonsAlign ? `lf-form-buttons-align-${buttonsAlign}` : undefined]: true
      })}
      data-lf-form-name={name}
      onSubmit={onSubmit}
    >
      {children}
      {!onlyFields && !hideToolbar && !plaintext && (
        <Stack spacing={2} direction="row" className="lf-buttons">
          {!hideSubmit && (
            <Button
              onClick={onSubmit}
              variant="contained"
              disabled={disabled || disabledSubmit}
            >
              {labelSubmit}
            </Button>
          )}
          {!hideCancel && (
            <Button onClick={onReset} variant="outlined" disabled={disabled}>
              {labelCancel}
            </Button>
          )}
          {custom}
        </Stack>
      )}
    </form>
  );
};
lfLog('Loaded MUI.Form');

export default FormMaterialUI;
