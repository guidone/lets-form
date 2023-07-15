import React from 'react';
import { FormControl, FormHelperText } from '@mui/material';

import { MuiLabel } from '../../components/mui-label';
import { Placeholder } from '../../common';
import { I18N } from '../../components';


const PlaceholderMUI = I18N(
  ({
    hint,
    text,
    name,
    label
  }) => {
    return (
      <FormControl
        className="lf-control-placeholder"
        data-lf-field-name={name}
      >
        {label && (
          <MuiLabel id={`mui_input_text_${name}`}>{label}</MuiLabel>
        )}
        <Placeholder text={text} />
        {hint && <FormHelperText>{hint}</FormHelperText>}
      </FormControl>
    );
  },
  ['label', 'hint', 'text']
);

export { PlaceholderMUI as Placeholder };