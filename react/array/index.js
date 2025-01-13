import React from 'react';
import _ from 'lodash';

import { ListArray } from '../../common';
import LetsForm from '../../react/index';
import { RequiredIcon, I18N } from '../../components';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

import './array.scss';

const ListArrayReact = I18N(
  ({
    hint,
    required,
    tooltip,
    name,
    label,
    className,
    ...rest
  }) => {
    const hasError = rest.error && _.isString(rest.error?.errorMessage) && rest.error?.errorMessage;

    return (
      <div {...makeClassName('array', name, 'lf-form-react-control-group', className)}>
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
