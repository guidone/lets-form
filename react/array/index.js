import React from 'react';
import _ from 'lodash';

import { ListArray } from '../../common';
import LetsForm from '../../react';
import { RequiredIcon } from '../../components';

import './array.scss';

const ListArrayReact = ({
  hint,
  required,
  tooltip,
  name,
  label,
  error,
  ...rest
}) => {
  const hasError = error && _.isString(error);

  return (
    <div
      className="lf-control-array lf-form-react-control-group"
      data-lf-field-name={name}
    >
      <label for={name}>
        {label}
        {required && <RequiredIcon />}
      </label>
      <ListArray
        LetsFormComponent={LetsForm}
        {...rest}
      />
      {hint && !hasError && <div className="lf-form-react-message">{hint}</div>}
      {hasError && <div className="lf-form-react-error-message">{error}</div>}
    </div>
  );
};

export { ListArrayReact as ListArray };
