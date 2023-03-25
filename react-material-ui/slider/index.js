import React, { useCallback } from 'react';


import { Slider, FormGroup, FormControlLabel, FormLabel } from '@mui/material';

const SliderMui = ({
  name,
  label,
  value,
  disabled = false,
  color,
  onChange,
  size,
  valueLabelDisplay,
  onBlur,
  min,
  max,
  step,
  showMarks,
  labelPlacement
}) => {

  const handleChange = useCallback(
    e => {
      onChange(e.target.value);
    },
    [onChange]
  );

  // TODO label?
  // TODO marks with items


  // DOCS: https://mui.com/material-ui/api/slider/
  const ctrl = (
    <Slider
      name={name}
      marks={showMarks}
      value={value}
      onChange={handleChange}
      disabled={disabled}
      onBlur={onBlur}
      color={color}
      min={min}
      max={max}
      step={step}
      size={size}
      valueLabelDisplay={valueLabelDisplay}
    />
  );

  return (
    <FormGroup>
      {label && !labelPlacement && <FormLabel>{label}</FormLabel>}
      {label && labelPlacement && (
        <FormControlLabel
          labelPlacement={labelPlacement ? labelPlacement : undefined}
          disabled={disabled}
          label={label}
          control={ctrl}
        />
      )}
      {!(label && labelPlacement) && ctrl}
    </FormGroup>
  );
};

export { SliderMui as Slider };