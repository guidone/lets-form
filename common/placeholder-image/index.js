import React from 'react';

import { makeClassName } from '../../helpers/make-class-name';

import './placeholder-image.scss';

const PlaceholderImage = ({
  url,
  label,
  name,
  maxWidth,
  maxHeight,
  marginTop,
  marginBottom,
  className,
  align
}) => {
  return (
    <div
      {...makeClassName('placeholder-image', name, className)}
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
            maxWidth: maxWidth ? maxWidth : '100%',
            maxHeight: maxHeight ? maxHeight : '100%',
            textAlign: align ? align : undefined
          }}
        />
      )}
    </div>
  );
};

export { PlaceholderImage };
