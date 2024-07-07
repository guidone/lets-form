/* LetsForm Generator v0.9.3 - ESM */
import React from 'react';
import { l as lfLog } from './index-mO_HhniH-XkiL6ku5.js';
import 'react-hook-form';
import './index-Ckaie1FQ.js';
import 'rsuite';
import './index-CPlHLHJ--C6v82suN.js';
import './index-cDTTgCy6-BbP8TJkH.js';
import './index-CjbIc_Cv.js';
import './index-COAOubl_.js';
import './cross-circle-FWajVb6B.js';
import './index-CfstXrwD.js';

/* LetsForm react-rsuite5 v0.9.3 - ESM */

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
