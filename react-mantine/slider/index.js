import React from 'react';
import { Slider, Input } from '@mantine/core';
import _ from 'lodash';

import { I18N } from '../../components';
import { passRest } from '../../helpers';
import { lfLog } from '../../helpers/lf-log';

const SliderMantine = I18N(
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
        <Slider
          onChange={onChange}
          {...passRest(rest)}
        />
      </Input.Wrapper>
    );
  },
  ['label', 'hint', 'placeholder'],
  {
    marks: (value, i18n) => {
      return (Array.isArray(value) ? value : []).map(value => ({ ...value, label: i18n(value.label) }))
    }
  }
);
lfLog('Loaded Mantine.Slider');

export default SliderMantine;