/* LetsForm Generator v0.7.15 - ESM */
import React__default from 'react';
import './index-BlDYFeHM.js';

var PlaceholderImage = function PlaceholderImage(_ref) {
  var url = _ref.url,
    label = _ref.label,
    name = _ref.name,
    maxWidth = _ref.maxWidth,
    maxHeight = _ref.maxHeight,
    marginTop = _ref.marginTop,
    marginBottom = _ref.marginBottom,
    align = _ref.align;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "lf-control-placeholder-image",
    "data-lf-field-name": name,
    style: {
      textAlign: align ? align : undefined
    }
  }, url && /*#__PURE__*/React__default.createElement("img", {
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
