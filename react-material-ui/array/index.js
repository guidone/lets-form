import React, { useId } from 'react';
import _ from 'lodash';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';

import { ListArray } from '../../common/array';
import LetsForm from '../../react-material-ui';
import { I18N } from '../../components/i18n';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

import './array.scss';

const ListArrayMui = I18N(
  ({
    hint,
    required,
    tooltip,
    name,
    label,
    className,
    ...rest
  }) => {
    const hasError = rest.error && _.isString(rest.error?.errorMessage) && rest.error?.errorMessage;
    const controlId = useId();

    return (
      <div {...makeClassName('array', name, className)}>
        <FormControl
          required={required}
          error={hasError}
          fullWidth={true}
        >
          <FormLabel id={controlId}>{label}</FormLabel>
          <ListArray
            LetsFormComponent={LetsForm}
            {...rest}
          />
          {hint && !hasError && <FormHelperText>{hint}</FormHelperText>}
          {hasError && <FormHelperText>{rest.error?.errorMessage}</FormHelperText>}
        </FormControl>
      </div>
    );
  },
  ['label', 'hint']
);
lfLog('Loaded MUI.Array');

export default ListArrayMui;
