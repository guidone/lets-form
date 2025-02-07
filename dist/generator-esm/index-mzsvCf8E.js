/* LetsForm Generator v0.12.10 - ESM */
import { a as _extends, m as makeClassName } from './index-D5-Q0G-J.js';
import React from 'react';

var PlaceholderImage = function PlaceholderImage(_ref) {
  var url = _ref.url,
    label = _ref.label,
    name = _ref.name,
    maxWidth = _ref.maxWidth,
    maxHeight = _ref.maxHeight,
    marginTop = _ref.marginTop,
    marginBottom = _ref.marginBottom,
    className = _ref.className,
    align = _ref.align;
  return /*#__PURE__*/React.createElement("div", _extends({}, makeClassName('placeholder-image', name, className), {
    style: {
      textAlign: align ? align : undefined
    }
  }), url && /*#__PURE__*/React.createElement("img", {
    src: url,
    alt: label || name,
    style: {
      marginTop: marginTop ? marginTop : undefined,
      marginBottom: marginBottom ? marginBottom : undefined,
      maxWidth: maxWidth ? maxWidth : '100%',
      maxHeight: maxHeight ? maxHeight : '100%',
      textAlign: align ? align : undefined
    }
  }));
};

export { PlaceholderImage as P };
