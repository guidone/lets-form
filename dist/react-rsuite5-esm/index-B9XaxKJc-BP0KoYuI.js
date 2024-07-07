/* LetsForm react-rsuite5 v0.9.3 - ESM */
import React from 'react';
import { l as lfLog } from './index-mO_HhniH.js';
import 'react-hook-form';
import './index-eOrnPMH8.js';
import 'rsuite';
import './index-CPlHLHJ-.js';
import './index-cDTTgCy6.js';

/* LetsForm react-rsuite5 v0.9.1 - ESM */
var PlaceholderImage = function PlaceholderImage(_ref) {
  var url = _ref.url,
    label = _ref.label,
    name = _ref.name,
    maxWidth = _ref.maxWidth,
    maxHeight = _ref.maxHeight,
    marginTop = _ref.marginTop,
    marginBottom = _ref.marginBottom,
    align = _ref.align;
  return /*#__PURE__*/React.createElement("div", {
    className: "lf-control-placeholder-image",
    "data-lf-field-name": name,
    style: {
      textAlign: align ? align : undefined
    }
  }, url && /*#__PURE__*/React.createElement("img", {
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
lfLog('Loaded RSuite5.PlaceholderImage');

export { PlaceholderImage as default };
