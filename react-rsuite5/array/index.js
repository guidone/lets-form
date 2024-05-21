import React from 'react';
import { Form } from 'rsuite';

import { RequiredIcon, I18N } from '../../components';
import { ListArray } from '../../common';
import LetsForm from '../../react-rsuite5';
import { passRest } from '../../helpers/pass-rest';
import { lfLog } from '../../helpers/lf-log';

const ListArrayRSuite5 = I18N(
  ({
    hint,
    required,
    tooltip,
    name,
    label,
    ...rest
  }) => {
    return (
      <Form.Group
        data-lf-field-name={name}
        className="lf-control-array"
      >
        {label && (
          <Form.ControlLabel>
            {label}
            {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
            {required && <RequiredIcon />}
          </Form.ControlLabel>
        )}
        <ListArray
          LetsFormComponent={LetsForm}
          {...passRest(rest)}
        />
        {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
      </Form.Group>
    );
  },
  ['label', 'hint']
);
lfLog('Loaded RSuite5.ListArray');

export default ListArrayRSuite5;
