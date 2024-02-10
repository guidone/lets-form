import React from 'react';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

import { MuiLabel } from '../../components/mui-label';
import { Placeholder } from '../../common';
import { I18N } from '../../components';
import { lfLog } from '../../helpers/lf-log';

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
lfLog('Loaded MUI.Placeholder');

export default PlaceholderMUI;