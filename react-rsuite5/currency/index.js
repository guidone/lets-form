import React from 'react';
import { Form, Input } from 'rsuite';
import _ from 'lodash';

import { RequiredIcon } from '../../components/required-icon';
import { I18N } from '../../components/i18n';
import { RSuite5FieldControl } from '../../components/rsuite-field-control';
import { CommonCurrency } from '../../common/currency';
import { passRest } from '../../helpers/pass-rest';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

const Currency = I18N(
  ({
    name,
    label,
    hint,
    value,
    tooltip = false,
    required = false,
    error,
    className,
    lfLocale,
    ...rest
  }) => {

    // TODO get locale from context


    console.log('current locale', lfLocale)

    return (
      <Form.Group
        {...makeClassName('currency', name, className, {
          [`lf-size-${rest.size}`]: rest.size != null
        })}
      >
        {label && <Form.ControlLabel>
          {label}
          {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
          {required && <RequiredIcon />}
        </Form.ControlLabel>}
        <RSuite5FieldControl errorMessage={_.isString(error) ? error : undefined }>
          <CommonCurrency
            defaultValue={value}
            control={Input}
            locale={lfLocale}
            {...passRest(rest)}
          />
        </RSuite5FieldControl>
        {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
      </Form.Group>
    );
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded RSuite.Currency');

export default Currency;
