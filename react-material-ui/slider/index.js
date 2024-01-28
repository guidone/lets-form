import React, { useCallback } from 'react';
import _ from 'lodash';
import Slider from '@mui/material/Slider';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { I18N } from '../../components';
import { lfLog } from '../../helpers/lf-log';

// DOCS: https://mui.com/material-ui/api/slider/

const SliderMui = I18N(
  ({
    name,
    label,
    value,
    disabled = false,
    required,
    color,
    onChange,
    size,
    valueLabelDisplay,
    onBlur,
    error,
    min,
    max,
    step,
    hint,
    showMarks,
    customMarks,
    width,
    fullWidth
  }) => {
    const handleChange = useCallback(
      e => {
        onChange(e.target.value);
      },
      [onChange]
    );

    return (
      <div
        className="lf-control-slider"
        data-lf-field-name={name}
      >
        <FormControl
          required={required}
          error={error != null}
          fullWidth={fullWidth}
          sx={{ mt: 2 }}
        >
          {label && <FormLabel>{label}</FormLabel>}
          <Slider
            name={name}
            marks={customMarks ? customMarks : showMarks}
            value={value}
            onChange={handleChange}
            disabled={disabled}
            onBlur={onBlur}
            color={color}
            style={_.isNumber(width) && !fullWidth ? { width: `${parseInt(width, 10)}px` } : undefined}
            min={min}
            max={max}
            step={step}
            size={size}
            valueLabelDisplay={valueLabelDisplay}
          />
          {hint && !error && <FormHelperText>{hint}</FormHelperText>}
          {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
      </div>
    );
  },
  ['label', 'hint'],
  {
    customMarks: (value, i18n) => {
      return (Array.isArray(value) ? value : []).map(value => ({ ...value, label: i18n(value.label) }))
    }
  }
);
lfLog('Loaded MUI.Slider');

export default SliderMui;