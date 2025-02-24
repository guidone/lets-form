import React from 'react';
import _ from 'lodash';
import { Input } from '@mantine/core';

import { I18N } from '../../components';
import { ListArray } from '../../common';
import LetsForm from '../../react-mantine';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

const MantineListArray = I18N(
  ({
    hint,
    required,
    tooltip,
    name,
    label,
    className,
    ...rest
  }) => {
    return (
      <div {...makeClassName('array', name, className)}>
        {label && <Input.Label required={required}>{label}</Input.Label>}
        <ListArray
          LetsFormComponent={LetsForm}
          {...rest}
        />
        {hint && <Input.Description>{hint}</Input.Description>}
        {_.isString(rest.error?.errorMessage) && <Input.Error>{rest.error?.errorMessage}</Input.Error>}
      </div>
    );
  },
  ['label', 'hint']
);
lfLog('Loaded Mantine.ListArray');

export default MantineListArray;
