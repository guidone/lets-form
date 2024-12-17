import React from 'react';
import Form from 'react-bootstrap/Form';
import _ from 'lodash';

import { RequiredIcon, I18N } from '../../components';
import { ListArray } from '../../common';
import LetsForm from '../../react-bootstrap';
import { lfLog } from '../../helpers/lf-log';

const ListArrayBootstrap = I18N(
  ({
    hint,
    required,
    tooltip,
    name,
    label,
    ...rest
  }) => {
    return (
      <Form.Group
        data-lf-field-name={name}
        className="lf-control-array"
      >
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
