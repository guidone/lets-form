import React from 'react';
import { Rating, Input } from '@mantine/core';
import _ from 'lodash';

import { I18N } from '../../components/i18n';
import { passRest } from '../../helpers';
import { lfLog } from '../../helpers/lf-log';

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
    ...rest
  }) => {
    return (
      <Input.Wrapper
        className="lf-control-rate"
        data-lf-field-name={name}
        description={hint}
        error={_.isString(error) ? error : undefined }
        inputWrapperOrder={['label', 'input', 'description', 'error']}
        label={label}
        required={required}
      >
        <Rating
          onChange={onChange}
          {...passRest(rest)}
        />
      </Input.Wrapper>
    );
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded Mantine.Rate');

export default InputText;
