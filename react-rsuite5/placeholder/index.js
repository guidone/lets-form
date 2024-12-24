import React from 'react';
import { Form } from 'rsuite';

import { RequiredIcon } from '../../components/required-icon';
import { I18N } from '../../components/i18n';
import { Placeholder } from '../../common/placeholder';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

const PlaceholderRSuite5 = I18N(
  ({
    name,
    label,
    hint,
    tooltip = false,
    text,
    required = false,
    className
  }) => {
    return (
      <Form.Group {...makeClassName('placeholder', name, className)}>
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
lfLog('Loaded RSuite5.Placeholder');

export default PlaceholderRSuite5;
