import React from 'react';
import _ from 'lodash';
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
        {_.isString(rest.error?.errorMessage) && <Input.Error>{rest.error?.errorMessage}</Input.Error>}
      </div>
    );
  },
  ['label', 'hint']
);
lfLog('Loaded Mantine.ListArray');

export default MantineListArray;
