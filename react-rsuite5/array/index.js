import React from 'react';
import { Form } from 'rsuite';

import { RequiredIcon } from '../../components';
import { ListArray } from '../../common';


const ListArrayRSuite5 = (props) => {
  // TODO fix spread here
  const {
    hint,
    required,
    tooltip,
    name,
    label,
  } = props;


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
      <ListArray {...props} />
      {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
    </Form.Group>
  );
};

export { ListArrayRSuite5 as ListArray };
