import React from 'react';
import _ from 'lodash';

import { ListArray } from '../../common';
import LetsForm from '../../react/index';
import { RequiredIcon, I18N } from '../../components';
import { lfLog } from '../../helpers/lf-log';

import './array.scss';

const ListArrayReact = I18N(
  ({
    hint,
    required,
    tooltip,
    name,
    label,
    ...rest
  }) => {
    const hasError = rest.error && _.isString(rest.error?.errorMessage) && rest.error?.errorMessage;

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
        {hasError && <div className="lf-form-react-error-message">{rest.error?.errorMessage}</div>}
      </div>
    );
  },
  ['label', 'hint']
);
lfLog('Loaded React.Array');

export default ListArrayReact;
