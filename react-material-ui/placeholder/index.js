import React from 'react';
import { FormControl, FormHelperText } from '@mui/material';

import { Placeholder } from '../../common';
import { I18N } from '../../components';

const PlaceholderMUI = I18N(
  ({
    hint,
    text,
    name
  }) => {
    return (
      <FormControl
        className="lf-control-placeholder"
        data-lf-field-name={name}
      >
        <Placeholder text={text} />
        {hint && <FormHelperText>{hint}</FormHelperText>}
      </FormControl>
    );
  },
  ['label', 'hint', 'text']
);

export { PlaceholderMUI as Placeholder };