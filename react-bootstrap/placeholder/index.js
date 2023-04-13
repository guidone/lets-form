import React from 'react';
import _ from 'lodash';
import Form from 'react-bootstrap/Form';

import { Placeholder } from '../../common';
import { I18N } from '../../components';

const PlaceholderBootstrap = I18N(
  ({
    label,
    hint,
    text
  }) => {
    return (
      <Form.Group
        className="lf-control-placeholder mb-3"
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
