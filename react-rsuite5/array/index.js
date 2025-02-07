import React from 'react';
import { Form } from 'rsuite';
import _ from 'lodash';

import { RequiredIcon } from '../../components/required-icon';
import { I18N } from '../../components/i18n';
import { ListArray } from '../../common/array';
import LetsForm from '../../react-rsuite5';
import { passRest } from '../../helpers/pass-rest';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

import './list-array.scss';

const ListArrayRSuite5 = I18N(
  ({
    hint,
    required,
    tooltip,
    name,
    label,
    className,
    ...rest
  }) => {
    return (
      <Form.Group {...makeClassName('array', name, className)}>
        {label && (
          <Form.ControlLabel>
            {label}
            {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
            {required && <RequiredIcon />}
          </Form.ControlLabel>
        )}
        <ListArray
          LetsFormComponent={LetsForm}
          name={name}
          {...passRest(rest)}
        />
        {_.isString(rest.error?.errorMessage) && <Form.HelpText className="array-error-message">{rest.error.errorMessage}</Form.HelpText>}
        {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
      </Form.Group>
    );
  },
  ['label', 'hint']
);
lfLog('Loaded RSuite5.ListArray');

export default ListArrayRSuite5;
