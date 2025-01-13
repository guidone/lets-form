import React, { useCallback } from 'react';
import { Switch } from '@mantine/core';
import _ from 'lodash';

import { I18N } from '../../components/i18n';
import { passRest } from '../../helpers/pass-rest';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

const MantineToggle = I18N(
  ({
    name,
    hint,
    value,
    onChange,
    error,
    description,
    className,
    ...rest
  }) => {
    const handleChange = useCallback(
      (event) => onChange(event.currentTarget.checked),
      [onChange]
    );

    return (
      <Switch
        {...makeClassName('toggle', name, className)}
        checked={value}
        name={name}
        onChange={handleChange}
        description={hint}
        error={_.isString(error) ? error : undefined }
        inputWrapperOrder={['label', 'input', 'description', 'error']}
        {...passRest(rest)}
      />
    );
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded Mantine.Toggle');

export default MantineToggle;
