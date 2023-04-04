import React from 'react';
import _ from 'lodash';
import { Form } from 'rsuite';
import classNames from 'classnames';

import './two-columns.scss';

const TwoColumns = ({
  name,
  children,
  layout
}) => {
  return (
    <Form.Group controlId={name}>
      <div className={classNames('lf-two-columns', layout)}>
        <div className="left">
          {_.isFunction(children) && children('left')}
        </div>
        <div className="right">
        {_.isFunction(children) && children('right')}
        </div>
      </div>
    </Form.Group>
  );
};

export { TwoColumns };
