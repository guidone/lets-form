import React from 'react';
import _ from 'lodash';
import { FormControl, FormHelperText } from '@mui/material';

import { ListArray } from '../../common';
import LetsForm from '../../react-material-ui';
import { MuiLabel } from '../../components/mui-label';
import { IfNotPlaintext } from '../../components';

import './array.scss';

const ListArrayMui = ({
  hint,
  required,
  tooltip,
  name,
  label,
  error,
  plaintext,
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
        <IfNotPlaintext component="array" value={rest.value} locale={rest.lfLocale} plaintext={plaintext}>
          <ListArray
            LetsFormComponent={LetsForm}
            {...rest}
          />
        </IfNotPlaintext>
        {hint && !error && <FormHelperText>{hint}</FormHelperText>}
        {error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </div>
  );
};

export { ListArrayMui as ListArray };
