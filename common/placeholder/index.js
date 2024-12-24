import React from 'react';
import isEmpty from 'lodash/isEmpty';

import { microdown } from '../../libs/micro-down';
import { makeClassName } from '../../helpers/make-class-name';

import './placeholder.scss';

const Placeholder = ({ text, name, className }) => {
  if (!isEmpty(text)) {
    return (
      <div
        {...makeClassName('placeholder', name, className)}
        dangerouslySetInnerHTML={{ __html: microdown.parse(text) }}
      />
    );
  } else {
    return <div />;
  }
};

export { Placeholder };
