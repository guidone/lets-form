import React, { useCallback } from 'react';
import { Textarea } from '@mantine/core';
import _ from 'lodash';

import { I18N } from '../../components';
import { passRest, makeWidthStyle } from '../../helpers';
import { lfLog } from '../../helpers/lf-log';

const MantineTextarea = I18N(
  ({
    name,
    label,
    hint,
    submitOnEnter = false,
    error,
    onChange,
    fullWidth,
    width,
    inputType,
    lfOnEnter = () => {},
    ...rest
  }) => {
    const handleKeyUp = useCallback(e => e.keyCode === 13 && lfOnEnter(), [lfOnEnter]);
    const handleChange = useCallback(
      (event) => onChange(event.currentTarget.value),
      [onChange]
    );

    return (
      <Textarea 
        className="lf-control-textarea"
        data-lf-field-name={name}
        name={name}
        style={makeWidthStyle(fullWidth, width)}
        label={label} 
        description={hint} 
        error={_.isString(error) ? error : undefined }
        inputWrapperOrder={['label', 'input', 'description', 'error']}
        onChange={handleChange}
        onKeyUp={submitOnEnter ? handleKeyUp : undefined}
        type={inputType}
        {...passRest(rest)}
      />
    ); 
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded Mantine.Textarea');

export default MantineTextarea;
