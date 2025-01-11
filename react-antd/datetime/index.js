import React, { useCallback } from 'react';
import _ from 'lodash';

import { I18N } from '../../components/i18n';
import { AntdGenericDate } from '../../components/antd-generic-date';
import { lfLog } from '../../helpers/lf-log';
import { isValidDate } from '../../helpers/is-valid-date';
import { makeClassName } from '../../helpers/make-class-name';

const Datetime = I18N(
  ({
    onChange,
    value,
    ...rest
  }) => {

    // also accepts string dates
    let currentValue;
    if (_.isDate(value)) {
      currentValue = value;
    } else if (_.isString(value)) {
      const d = new Date(value);
      if (isValidDate(d)) {
        currentValue = d;
      }
    }

    // send always date string in iso format
    const handleChange = useCallback(
      d => {
        if (isValidDate(d)) {
          onChange(d.toISOString());
        }
      },
      [onChange]
    );

    return (
      <AntdGenericDate
        value={currentValue}
        {...makeClassName('datetime', name, className)}
        onChange={handleChange}
        {...rest}
        showTime={true}
      />
    );
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded AntD.DateTime');

export default Datetime;
