import React, { useCallback } from 'react';
import _ from 'lodash';
import Slider from '@mui/material/Slider';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { I18N } from '../../components/i18n';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';
import { passRest } from '../../helpers/pass-rest';

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
    fullWidth,
    className,
    ...rest
  }) => {
    const handleChange = useCallback(
      e => {
        onChange(e.target.value);
      },
      [onChange]
    );

    return (
      <div {...makeClassName('slider', name, className)}>
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
            {...passRest(rest)}
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