import React, { useCallback } from 'react';
import { Textarea } from '@mantine/core';
import _ from 'lodash';

import { I18N } from '../../components/i18n';
import { passRest } from '../../helpers/pass-rest';
import { makeWidthStyle } from '../../helpers/make-width-style';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

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
    className,
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
        {...makeClassName('textarea', name, className)}
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
