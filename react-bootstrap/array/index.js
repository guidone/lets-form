import React from 'react';
import Form from 'react-bootstrap/Form';
import _ from 'lodash';

import { RequiredIcon } from '../../components';
import { ListArray } from '../../common';
import LetsForm from '../../react-bootstrap';
import { IfNotPlaintext } from '../../components';

const ListArrayBootstrap = ({
  hint,
  required,
  tooltip,
  name,
  label,
  error,
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
      {hint && !error && <Form.Text>{hint}</Form.Text>}
      {_.isString(error) && !_.isEmpty(error) && (
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

export { ListArrayBootstrap as ListArray };
