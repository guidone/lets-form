import React, { useCallback } from 'react';
import { NumberInput } from '@mantine/core';
import _ from 'lodash';

import { I18N } from '../../components';
import { TextOrIcon } from '../../common';
import { passRest, makeWidthStyle } from '../../helpers';
import { lfLog } from '../../helpers/lf-log';

const MantineNumberInput = I18N(
  ({
    name,
    hint,
    value,
    submitOnEnter = false,
    error,
    fullWidth,
    width,
    lfOnEnter = () => {},
    ...rest
  }) => {
    const handleKeyUp = useCallback(e => e.keyCode === 13 && lfOnEnter(), [lfOnEnter]);

    return (      
      <NumberInput 
        className="lf-control-input-number"
        data-lf-field-name={name}
        style={makeWidthStyle(fullWidth, width)}
        value={value}
        name={name}
        description={hint} 
        error={_.isString(error) ? error : undefined }
        inputWrapperOrder={['label', 'input', 'description', 'error']}
        onKeyUp={submitOnEnter ? handleKeyUp : undefined}
        {...passRest(rest)}
      />
    ); 
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded Mantine.InputNumber');

export default MantineNumberInput;
