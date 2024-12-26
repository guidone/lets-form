import React, { useCallback } from 'react';
import { NumberInput } from '@mantine/core';
import _ from 'lodash';

import { I18N } from '../../components/i18n';
import { passRest } from '../../helpers/pass-rest';
import { makeWidthStyle } from '../../helpers/make-width-style';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

const MantineNumberInput = I18N(
  ({
    name,
    hint,
    value,
    submitOnEnter = false,
    error,
    fullWidth,
    width,
    className,
    lfOnEnter = () => {},
    ...rest
  }) => {
    const handleKeyUp = useCallback(e => e.keyCode === 13 && lfOnEnter(), [lfOnEnter]);

    return (
      <NumberInput
        {...makeClassName('input-number', name, className)}
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
