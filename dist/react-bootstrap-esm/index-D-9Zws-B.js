/* LetsForm react-bootstrap v0.12.17 - ESM */
import React from 'react';
import { J as isUrl } from './index-ByJk2MWx.js';

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
