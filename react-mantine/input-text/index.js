import React, { useCallback } from 'react';
import { TextInput } from '@mantine/core';
import _ from 'lodash';

import { I18N } from '../../components/i18n';
import { passRest } from '../../helpers/pass-rest';
import { makeWidthStyle } from '../../helpers/make-width-style';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

const InputText = I18N(
  ({
    name,
    hint,
    value,
    fullWidth,
    width,
    submitOnEnter = false,
    error,
    onChange,
    onBlur,
    lfOnEnter = () => {},
    className,
    ...rest
  }) => {
    const handleKeyUp = useCallback(e => e.keyCode === 13 && lfOnEnter(), [lfOnEnter]);
    const handleChange = useCallback(
      (event) => onChange(event.currentTarget.value),
      [onChange]
    );

    return (
      <TextInput
        {...makeClassName('input-text', name, className)}
        value={value}
        style={makeWidthStyle(fullWidth, width)}
        description={hint}
        error={_.isString(error) ? error : undefined }
        inputWrapperOrder={['label', 'input', 'description', 'error']}
        onChange={handleChange}
        onBlur={onBlur}
        onKeyUp={submitOnEnter ? handleKeyUp : undefined}
        type={rest.inputType ? rest.inputType : undefined}
        inputmode={rest.inputMode ? rest.inputMode : undefined}
        {...passRest(_.omit(rest, 'inputType', 'inputMode'))}
      />
    );
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded Mantine.InputText');

export default InputText;
