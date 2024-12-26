import React from 'react';
import { Input } from '@mantine/core'

import { I18N } from '../../components/i18n';
import { Placeholder } from '../../common/placeholder';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

const PlaceholderMantine = I18N(
  ({
    name,
    label,
    hint,
    text,
    className
  }) => {
    return (
      <Input.Wrapper
        {...makeClassName('placeholder', name, className)}
        description={hint}
        inputWrapperOrder={['label', 'input', 'description', 'error']}
        label={label}
      >
        <Placeholder text={text} />
      </Input.Wrapper>
    );
  },
  ['label', 'hint', 'text']
);
lfLog('Loaded Mantine.Placeholder');

export default PlaceholderMantine;
