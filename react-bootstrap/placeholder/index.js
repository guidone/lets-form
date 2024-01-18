import React from 'react';
import Form from 'react-bootstrap/Form';

import { Placeholder } from '../../common';
import { I18N } from '../../components';
import { lfLog } from '../../helpers/lf-log';

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
        {label && (
          <Form.Label>
            {label}
          </Form.Label>
        )}
        <Placeholder text={text} />
        {hint && <Form.Text>{hint}</Form.Text>}
      </Form.Group>
    );
  },
  ['label', 'hint', 'text']
);
lfLog('Loaded ReactBootrap.Placeholder');

export default PlaceholderBootstrap;
