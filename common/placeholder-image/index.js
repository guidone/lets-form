import React from 'react';

import './placeholder-image.scss';

// add maxHeight
// generalize for all components
// cleanup
// spostare in layout

const PlaceholderImage = ({
  url,
  label,
  name,
  maxWidth,
  minHeight,
  marginTop,
  marginBottom,
  align
}) => {
  return (
    <div
      className="lf-control-placeholder-image"
      data-lf-field-name={name}
      style={{
        textAlign: align ? align : undefined
      }}
    >
      {url && (
        <img
          src={url}
          alt={label || name}
          style={{
            marginTop: marginTop ? marginTop : undefined,
            marginBottom: marginBottom ? marginBottom : undefined,
            maxWidth: maxWidth ? maxWidth : undefined,
            minHeight: minHeight ? minHeight : undefined,
            textAlign: align ? align : undefined
          }}
        />
      )}
    </div>
  );
};

export { PlaceholderImage };
