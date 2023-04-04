import React from 'react';
import _ from 'lodash';
import { Form } from 'rsuite';

import './three-columns.scss';

const ThreeColumns = ({
  name,
  children
}) => {
  return (
    <Form.Group controlId={name}>
      <div className="lf-three-columns">
        <div className="left">
          {_.isFunction(children) && children('left')}
        </div>
        <div className="center">
        {_.isFunction(children) && children('center')}
        </div>
        <div className="right">
        {_.isFunction(children) && children('right')}
        </div>
      </div>
    </Form.Group>
  );
}

export { ThreeColumns };
