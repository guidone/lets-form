/* LetsForm Generator v0.7.12 - ESM */
import React__default from 'react';
import { w as isUrl } from './index-DRF8thTp.js';

var TextOrIcon = function TextOrIcon(str) {
  if (isUrl(str)) {
    return /*#__PURE__*/React__default.createElement("img", {
      className: "lf-prefix-icon",
      src: str,
      alt: "icon"
    });
  } else if (str) {
    return /*#__PURE__*/React__default.createElement("span", null, str);
  }
};

export { TextOrIcon as T };
