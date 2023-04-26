import React from 'react';

const ReactView = ({
  name,
  view,
  ...rest
}) => {
  const View = view;

  return (
    <div
      className="lf-control-react-view"
      data-lf-field-name={name}
    >
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
