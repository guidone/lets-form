import React from 'react';
import { Form } from 'rsuite';

import { RequiredIcon, I18N } from '../../components';
import { Placeholder } from '../../common';

const PlaceholderRSuite5 = I18N(
  ({
    name,
    label,
    hint,
    tooltip = false,
    text,
    required = false
  }) => {
    return (
      <Form.Group data-lf-field-name={name} className="lf-control-placeholder">
        {label && <Form.ControlLabel>
          {label}
          {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
          {required && <RequiredIcon />}
        </Form.ControlLabel>}
        <Placeholder text={text} />
        {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
      </Form.Group>
    );
  },
  ['label', 'hint', 'text']
);

export { PlaceholderRSuite5 as Placeholder };
