import React from 'react';
import { TagsInput } from '@mantine/core';
import _ from 'lodash';

import { I18N } from '../../components/i18n';
import { makeWidthStyle } from '../../helpers/make-width-style';
import { passRest } from '../../helpers/pass-rest';
import { lfLog } from '../../helpers/lf-log';
import { i18nOptions } from '../../helpers/i18n-options';
import { makeClassName } from '../../helpers/make-class-name';

const MantineTags = I18N(
  ({
    name,
    hint,
    value,
    error,
    fullWidth,
    width,
    data,
    className,
    ...rest
  }) => {
    return (
      <TagsInput
        {...makeClassName('input-tag', name, className)}
        style={makeWidthStyle(fullWidth, width)}
        value={value}
        name={name}
        description={hint}
        error={_.isString(error) ? error : undefined }
        inputWrapperOrder={['label', 'input', 'description', 'error']}
        data={(data || []).filter(option => option.value && option.label)}
        {...passRest(rest)}
      />
    );
  },
  ['label', 'hint', 'placeholder'],
  i18nOptions
);
lfLog('Loaded Mantine.InputTags');

export default MantineTags;
