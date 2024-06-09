import React, { useId } from 'react';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';

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
    const controlId = useId();

    return (
      <FormControl
        className="lf-control-placeholder"
        data-lf-field-name={name}
      >
        {label && (
          <FormLabel id={controlId}>{label}</FormLabel>
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