import React from 'react';
import { Rating, Input } from '@mantine/core';
import _ from 'lodash';

import { I18N } from '../../components/i18n';
import { passRest } from '../../helpers/pass-rest';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

const InputText = I18N(
  ({
    name,
    hint,
    value,
    fullWidth,
    width,
    submitOnEnter = false,
    error,
    onChange,
    onBlur,
    label,
    required,
    lfOnEnter = () => {},
    className,
    ...rest
  }) => {
    return (
      <Input.Wrapper
        {...makeClassName('rate', name, className)}
        description={hint}
        error={_.isString(error) ? error : undefined }
        inputWrapperOrder={['label', 'input', 'description', 'error']}
        label={label}
        required={required}
      >
        <Rating
          onChange={onChange}
          defaultValue={value}
          {...passRest(rest)}
        />
      </Input.Wrapper>
    );
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded Mantine.Rate');

export default InputText;
