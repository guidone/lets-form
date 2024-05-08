import React, { useCallback } from 'react';
import { FileInput } from '@mantine/core';
import _ from 'lodash';

import { I18N } from '../../components';
import { passRest, makeWidthStyle } from '../../helpers';
import { lfLog } from '../../helpers/lf-log';

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
    ...rest
  }) => {
    const handleChange = useCallback(
      value => onChange(value),
      [onChange]
    );

    return (
      <FileInput
        className="lf-control-upload"
        data-lf-field-name={name}
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
