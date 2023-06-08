import React from 'react';
import Form from 'react-bootstrap/Form';

import { Placeholder } from '../../common';
import { I18N } from '../../components';

const PlaceholderBootstrap = I18N(
  ({
    label,
    hint,
    text,
    name
  }) => {
    return (
      <Form.Group
        className="lf-control-placeholder"
        data-lf-field-name={name}
      >
        <Form.Label>
          {label}
        </Form.Label>
        <Placeholder text={text} />
        {hint && <Form.Text>{hint}</Form.Text>}
      </Form.Group>
    );
  },
  ['label', 'hint', 'text']
);

export { PlaceholderBootstrap as Placeholder };
