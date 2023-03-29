import React from 'react';
import isEmpty from 'lodash/isEmpty';
import markdown from 'micro-down';

const Placeholder = ({ text }) => {
  if (!isEmpty(text)) {
    return (
      <div dangerouslySetInnerHTML={{ __html: markdown.parse(text) }} />
    );
  } else {
    return <div />;
  }
};

export { Placeholder };
