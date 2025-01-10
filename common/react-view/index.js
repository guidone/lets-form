import React from 'react';

import { makeClassName } from '../../helpers/make-class-name';

const ReactView = ({
  name,
  view,
  className,
  ...rest
}) => {
  const View = view;

  return (
    <div {...makeClassName('react-view', name, className)}>
      {View && (
        <View
          name={name}
          {...rest}
        />
      )}
    </div>
  );
};

export { ReactView };
