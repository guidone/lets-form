import React, { useId } from 'react';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';

import { Placeholder } from '../../common/placeholder';
import { I18N } from '../../components/i18n';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

const PlaceholderMUI = I18N(
  ({
    hint,
    text,
    name,
    label,
    className
  }) => {
    const controlId = useId();

    return (
      <FormControl {...makeClassName('placeholder', name, className)}>
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