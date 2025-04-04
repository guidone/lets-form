/* LetsForm react-material-ui v0.12.16 - ESM */
import React from 'react';
import { N as isUrl } from './index-CEqW8_MD.js';

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
