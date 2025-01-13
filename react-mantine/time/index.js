import React, { useCallback, useRef } from 'react';
import { TimeInput } from '@mantine/dates';
import { ActionIcon } from '@mantine/core';
import _ from 'lodash';

import { I18N } from '../../components/i18n';
import { passRest } from '../../helpers/pass-rest';
import { makeWidthStyle } from '../../helpers/make-width-style';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

import { ClockIcon } from './clock';

const MANTINE_ICON_SIZE = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 28,
  xl: 32
};

const mantineIconSize = size => MANTINE_ICON_SIZE[size] || 16;

const Time = I18N(
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
    lfOnEnter = () => {},
    className,
    showBrowserPicker,
    ...rest
  }) => {
    const ref = useRef(null);
    const handleKeyUp = useCallback(e => e.keyCode === 13 && lfOnEnter(), [lfOnEnter]);
    const handleChange = useCallback(
      (event) => onChange(event.currentTarget.value),
      [onChange]
    );
    const handlePicker = useCallback(
      () => ref.current?.showPicker(),
      []
    );

    const additional = {};
    if (showBrowserPicker) {
      additional.rightSection = (
        <ActionIcon variant="subtle" color="gray" onClick={handlePicker}>
          <ClockIcon width={mantineIconSize(rest.size)} height={mantineIconSize(rest.size)}/>
        </ActionIcon>
      );
    }

    return (
      <TimeInput
        ref={ref}
        {...makeClassName('time', name, className)}
        style={makeWidthStyle(fullWidth, width)}
        description={hint}
        error={_.isString(error) ? error : undefined }
        inputWrapperOrder={['label', 'input', 'description', 'error']}
        onChange={handleChange}
        onBlur={onBlur}
        onKeyUp={submitOnEnter ? handleKeyUp : undefined}
        {...passRest(rest)}
        {...additional}
      />
    );
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded Mantine.Time');

export default Time;
