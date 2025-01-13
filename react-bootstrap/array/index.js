import React from 'react';
import Form from 'react-bootstrap/Form';
import _ from 'lodash';

import { I18N } from '../../components/i18n';
import { RequiredIcon } from '../../components/required-icon';
import { ListArray } from '../../common/array';
import LetsForm from '../../react-bootstrap';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

const ListArrayBootstrap = I18N(
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
          <Form.Label>
            {label}
            {required && <RequiredIcon />}
          </Form.Label>
        )}
        <ListArray
          LetsFormComponent={LetsForm}
          {...rest}
        />
        {hint && !rest.error?.errorMessage && <Form.Text>{hint}</Form.Text>}
        {_.isString(rest.error?.errorMessage) && !_.isEmpty(rest.error.errorMessage) && (
          <Form.Control.Feedback type="invalid">{rest.error.errorMessage}</Form.Control.Feedback>
        )}
      </Form.Group>
    );
  },
  ['label', 'hint']
);
lfLog('Loaded ReactBootrap.Array');

export default ListArrayBootstrap;
