import React from 'react';
import DOMPurify from 'dompurify';
import _ from 'lodash';
import MD from 'markdown-it';

const md = MD({
  breaks: true
});

const Placeholder = ({ text }) => {
  if (!_.isEmpty(text)) {
    return (
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(md.render(text)) }} />
    );
  } else {
    return <div />;
  }
};

export { Placeholder };
