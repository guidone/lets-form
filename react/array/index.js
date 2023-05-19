import React from 'react';
import _ from 'lodash';

import { ListArray } from '../../common';
import LetsForm from '../../react';
import { RequiredIcon } from '../../components';

import { IfNotPlaintext } from '../../components';

import './array.scss';

const ListArrayReact = ({
  hint,
  required,
  tooltip,
  name,
  label,
  error,
  plaintext,
  ...rest
}) => {
  const hasError = error && _.isString(error);

  return (
    <div
      className="lf-form-react-control-group lf-control-array"
      data-lf-field-name={name}
    >
      <label for={name}>
        {label}
        {required && <RequiredIcon />}
      </label>
      <IfNotPlaintext component="array" value={rest.value} locale={rest.lfLocale} plaintext={plaintext}>
        <ListArray
          LetsFormComponent={LetsForm}
          {...rest}
        />
      </IfNotPlaintext>
      {hint && !hasError && <div className="lf-form-react-message">{hint}</div>}
      {hasError && <div className="lf-form-react-error-message">{error}</div>}
    </div>
  );
};

export { ListArrayReact as ListArray };
