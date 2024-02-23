import React from 'react';
import { Input } from '@mantine/core';

import { I18N } from '../../components';
import { ListArray } from '../../common';
import LetsForm from '../../react-mantine';
import { passRest } from '../../helpers/pass-rest';
import { lfLog } from '../../helpers/lf-log';

const MantineListArray = I18N(
  ({
    hint,
    required,
    tooltip,
    name,
    label,
    error,
    ...rest
  }) => {
    return (
      <div data-lf-field-name={name} className="lf-control-array">
        {label && <Input.Label required={required}>{label}</Input.Label>}
        <ListArray
          LetsFormComponent={LetsForm}
          {...passRest(rest)}
        />
        {hint && <Input.Description>{hint}</Input.Description>}
        {error && <Input.Error>{error}</Input.Error>}
      </div>
    );
  },
  ['label', 'hint']
);
lfLog('Loaded Mantine.ListArray');

export default MantineListArray;
