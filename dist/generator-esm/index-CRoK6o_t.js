/* LetsForm Generator v0.7.16 - ESM */
import React from 'react';
import { w as isUrl } from './index-1bLsmo1d.js';

var TextOrIcon = function TextOrIcon(str) {
  if (isUrl(str)) {
    return /*#__PURE__*/React.createElement("img", {
      className: "lf-prefix-icon",
      src: str,
      alt: "icon"
    });
  } else if (str) {
    return /*#__PURE__*/React.createElement("span", null, str);
  }
};

export { TextOrIcon as T };
