import React from 'react';
import { FormControl, FormHelperText } from '@mui/material';

import { Placeholder } from '../../common';

const PlaceholderMUI = ({
  hint,
  text
}) => {
  return (
    <FormControl className="lf-control-placeholder">
      <Placeholder text={text} />
      {hint && <FormHelperText>{hint}</FormHelperText>}
    </FormControl>
  );
};

export { PlaceholderMUI as Placeholder };