import React from 'react';
import _ from 'lodash';
import { FormControl, FormHelperText } from '@mui/material';

import { ListArray } from '../../common';
import LetsForm from '../../react-material-ui';
import { MuiLabel } from '../../components/mui-label';
import { I18N } from '../../components';

import './array.scss';

const ListArrayMui = I18N(
  ({
    hint,
    required,
    tooltip,
    name,
    label,
    error,
    ...rest
  }) => {
    const hasError = error && _.isString(error);

    return (
      <div data-lf-field-name={name} className="lf-control-array">
        <FormControl
          required={required}
          error={hasError}
          fullWidth={true}
        >
          <MuiLabel>{label}</MuiLabel>
          <ListArray
            LetsFormComponent={LetsForm}
            {...rest}
          />
          {hint && !error && <FormHelperText>{hint}</FormHelperText>}
          {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
      </div>
    );
  },
  ['label', 'hint']
);

export { ListArrayMui as ListArray };
