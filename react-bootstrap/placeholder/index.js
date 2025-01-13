import React from 'react';
import Form from 'react-bootstrap/Form';

import { Placeholder } from '../../common/placeholder';
import { I18N } from '../../components/i18n';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

const PlaceholderBootstrap = I18N(
  ({
    label,
    hint,
    text,
    name,
    className
  }) => {
    return (
      <Form.Group {...makeClassName('placeholder', name, className)}>
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
