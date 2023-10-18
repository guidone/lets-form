import React from 'react';
import { Form } from 'rsuite';

import { RequiredIcon, I18N } from '../../components';
import { ListArray } from '../../common';
import LetsForm from '../../react-rsuite5';

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
          {...rest}
        />
        {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
      </Form.Group>
    );
  },
  ['label', 'hint']
);

export { ListArrayRSuite5 as ListArray };
