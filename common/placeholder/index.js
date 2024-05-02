import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { microdown } from '../../libs/micro-down';

import './placeholder.scss';

const Placeholder = ({ text, name }) => {
  if (!isEmpty(text)) {
    return (
      <div
        className="lf-control-placeholder"
        data-lf-field-name={name}
        dangerouslySetInnerHTML={{ __html: microdown.parse(text) }}
      />
    );
  } else {
    return <div />;
  }
};

export { Placeholder };
