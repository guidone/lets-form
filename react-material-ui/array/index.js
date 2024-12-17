import React, { useId } from 'react';
import _ from 'lodash';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';

import { ListArray } from '../../common';
import LetsForm from '../../react-material-ui';
import { I18N } from '../../components';
import { lfLog } from '../../helpers/lf-log';

import './array.scss';

const ListArrayMui = I18N(
  ({
    hint,
    required,
    tooltip,
    name,
    label,
    ...rest
  }) => {
    const hasError = rest.error && _.isString(rest.error?.errorMessage) && rest.error?.errorMessage;
    const controlId = useId();

    return (
      <div data-lf-field-name={name} className="lf-control-array">
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
