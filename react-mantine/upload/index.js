import React, { useCallback } from 'react';
import { FileInput } from '@mantine/core';
import _ from 'lodash';

import { I18N } from '../../components/i18n';
import { passRest } from '../../helpers/pass-rest';
import { makeWidthStyle } from '../../helpers/make-width-style';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

const MantineUpload = I18N(
  ({
    name,
    hint,
    fullWidth,
    width,
    error,
    onChange,
    onBlur,
    lfOnEnter = () => {},
    accept,
    className,
    ...rest
  }) => {
    const handleChange = useCallback(
      value => onChange(value),
      [onChange]
    );

    return (
      <FileInput
        {...makeClassName('upload', name, className)}
        style={makeWidthStyle(fullWidth, width)}
        description={hint}
        error={_.isString(error) ? error : undefined }
        inputWrapperOrder={['label', 'input', 'description', 'error']}
        onChange={handleChange}
        onBlur={onBlur}
        accept={Array.isArray(accept) ? accept.join(',') : accept ?? undefined}
        {...passRest(rest)}
      />
    );
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded Mantine.Upload');

export default MantineUpload;
