import React from 'react';
import { Form, Input } from 'antd';
import _ from 'lodash';

import { I18N } from '../../components/i18n';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';
import { passRest } from '../../helpers/pass-rest';
import { CommonCurrency } from '../../common/currency';

const Currency = I18N(
  ({
    name,
    label,
    hint,
    value,
    tooltip = false,
    disabled = false,
    readOnly = false,
    required = false,
    error,
    lfLocale,
    className,
    ...rest
  }) => {
    return (
      <Form.Item
        {...makeClassName('currency', name, className)}
        label={label}
        name={name}
        help={error != null ? error : (hint && !tooltip ? hint : undefined)}
        required={required}
        tooltip={tooltip && hint}
        hasFeedback={error != null}
        validateStatus={error ? 'error': undefined}
        valuePropName={null}
      >
        <CommonCurrency
          defaultValue={value}
          control={Input}
          locale={lfLocale}
          {...passRest(rest)}
        />
      </Form.Item>
    )
  },
  ['label', 'hint']
);
lfLog('Loaded AntD.Currency');

export default Currency;
