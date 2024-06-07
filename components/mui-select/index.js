import React from 'react';
import _ from 'lodash';
import { MuiLabel } from '../mui-label';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';

import { passRest, filterOptions } from '../../helpers';

// DOC: https://mui.com/material-ui/api/select/

const MuiGenericSelect = ({
  name,
  label,
  hint,
  value,
  placeholder,
  options,
  filterKey,
  filterValue,
  component,
  disabled = false,
  readOnly = false,
  required = false,
  error,
  multiple = false,
  fullWidth,
  width,
  floatingLabel,
  autoWidth,
  size,
  variant,
  onChange,
  onBlur,
  className,
  children,
  ...rest
}) => {
  const filteredOptions = filterOptions(options, filterValue, filterKey);

  let items;
  if (multiple) {
    items = (
      (filteredOptions || []).map(option => (
        <MenuItem key={option.value} value={option.value}>
          <Checkbox checked={(value || []).includes(option.value)} />
          <ListItemText primary={option.label} />
        </MenuItem>
      ))
    );
  } else {
    items = (filteredOptions || []).map(({ value, label }) => (
      <MenuItem key={value} value={value}>{label}</MenuItem>
    ));
  }

  // Io un troiaio del genere in una libreria UI non l'ho mai visto, il floating label
  // si sposta e quando non e' in focus va a coprire il componente, se focus si sposta in alto
  // ma siccome lo spazio non se lo crea da solo, devi mettere la label anche nel componente select
  // altrimenti nella variante outlined vedi la label tagliata dalla riga del bordo.
  return (
    <div
      className={className}
      data-lf-field-name={name}
    >
      <FormControl
        size={size}
        disabled={disabled}
        required={required}
        error={error != null}
        variant={variant ?? undefined}
        fullWidth={fullWidth}
      >
        {label && !floatingLabel && (
          <MuiLabel required={required}>{label}</MuiLabel>
        )}
        {label && floatingLabel && (
          <InputLabel id={`mui_select_${name}`}>{label}</InputLabel>
        )}
        <Select
          id={name}
          labelId={`mui_select_${name}`}
          value={value}
          multiple={multiple}
          onChange={onChange}
          onBlur={onBlur}
          label={floatingLabel ? label : undefined} // needed for the background
          style={_.isNumber(width) && !fullWidth ? { width: `${parseInt(width, 10)}px` } : undefined}
          autoWidth={autoWidth}
          inputProps={readOnly ? { readOnly: true } : undefined }
          {...passRest(rest)}
        >
          {items}
        </Select>
        {hint && !error && <FormHelperText>{hint}</FormHelperText>}
        {error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </div>
  );
};

export { MuiGenericSelect };
