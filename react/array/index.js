import React from 'react';
import _ from 'lodash';

import { ListArray } from '../../common';
import LetsForm from '../../react/index';
import { RequiredIcon, I18N } from '../../components';

import './array.scss';

const ListArrayReact = I18N(
  ({
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
  },
  ['label', 'hint']
);

export { ListArrayReact as ListArray };
