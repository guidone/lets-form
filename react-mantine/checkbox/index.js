import React, { useCallback } from 'react';
import { Checkbox } from '@mantine/core';
import _ from 'lodash';

import { I18N } from '../../components';
import { passRest } from '../../helpers';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

const MantineCheckbox = I18N(
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
      <Checkbox
        {...makeClassName('checkbox', name, className)}
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
lfLog('Loaded Mantine.Checkbox');

export default MantineCheckbox;
