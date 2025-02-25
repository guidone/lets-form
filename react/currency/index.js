import React, { useCallback } from 'react';
import _ from 'lodash';

import { RequiredIcon } from '../../components/required-icon';
import { passRest } from '../../helpers';
import { makeClassName } from '../../helpers/make-class-name';
import { CommonCurrency } from '../../common/currency';

const ReactInput = props => <input type="text" {...props} />;

const Currency = ({
  name,
  label,
  lfLocale,
  hint,
  value,
  error,
  className,
  required,
  ...rest
}) => {
  const hasError = error && _.isString(error);

  return (
    <div {...makeClassName('currency', name, 'lf-form-react-control-group', className)}>
      <label for={name}>
        {label}
        {required && label && <RequiredIcon />}
      </label>
      <CommonCurrency
        defaultValue={value}
        control={ReactInput}
        locale={lfLocale}
        {...passRest(rest)}
      />
      {hint && !hasError && <div className="lf-form-react-message">{hint}</div>}
      {hasError && <div className="lf-form-react-error-message">{error}</div>}
    </div>
  );
};

export default Currency;
