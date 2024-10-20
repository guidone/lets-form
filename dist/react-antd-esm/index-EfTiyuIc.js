/* LetsForm react-antd v0.11.3 - ESM */
import React from 'react';
import { h as isUrl } from './index-mmT6Qy9p.js';

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
