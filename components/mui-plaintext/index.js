import React from 'react';
import { FormControl, InputLabel, FormControlLabel, FormHelperText, InputAdornment } from '@mui/material';

import { Plaintext  } from '../plaintext';

import './mui-plaintext.scss';

const MuiIfNotPlaintext = ({ plaintext, value, component, options, children, locale, label }) => {
  if (plaintext) {
    return (
      <div className="lf-mui-plaintext">
        <InputLabel
          variant="standard"
          disableAnimation
        >{label}</InputLabel>
        <Plaintext
          value={value}
          component={component}
          options={options}
          locale={locale}
        />
      </div>
    );
  } else {
    return children;
  }
};

export { MuiIfNotPlaintext };
