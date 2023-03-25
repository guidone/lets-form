import React from 'react';
import _ from 'lodash';

import { Form } from 'rsuite';

import './two-columns.scss';

const TwoColumns = ({
  name,
  children
}) => {
  // TODO fix the onblur thing, also in group
  return (
    <Form.Group controlId={name}>
      <div className="gforms-two-columns">
        <div className="left">
          {_.isFunction(children) && children('left')}
        </div>
        <div className="right">
        {_.isFunction(children) && children('right')}
        </div>
      </div>
    </Form.Group>
  );
}

export { TwoColumns };
