import React from 'react';
import { Input } from '@mantine/core'

import { I18N } from '../../components';
import { Placeholder } from '../../common';
import { lfLog } from '../../helpers/lf-log';

const PlaceholderMantine = I18N(
  ({
    name,
    label,
    hint,
    text
  }) => {
    return (
      <Input.Wrapper
        className="lf-control-rate"
        data-lf-field-name={name}
        description={hint}
        inputWrapperOrder={['label', 'input', 'description', 'error']}
        label={label}>
        <Placeholder text={text} />
      </Input.Wrapper>
    );
  },
  ['label', 'hint', 'text']
);
lfLog('Loaded Mantine.Placeholder');

export default PlaceholderMantine;
