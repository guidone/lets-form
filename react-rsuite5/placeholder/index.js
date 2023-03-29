import React from 'react';
import { Form } from 'rsuite';

import { RequiredIcon } from '../../components';
import { Placeholder } from '../../common';

const PlaceholderRSuite5 = ({
  name,
  label,
  hint,
  tooltip = false,
  text,
  required = false
}) => {
  return (
    <Form.Group controlId={name} className="lf-control-placeholder">
      {label && <Form.ControlLabel>
        {label}
        {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
        {required && <RequiredIcon />}
      </Form.ControlLabel>}
      <Placeholder text={text} />
      {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
    </Form.Group>
  );
};

export { PlaceholderRSuite5 as Placeholder };