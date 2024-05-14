/* LetsForm Generator v0.7.12 - ESM */
import { s as styleInject, e as classNames } from './index-DRF8thTp.js';
import React__default from 'react';

var css_248z = ".lf-generic-icon {\n  max-width: 16px;\n  max-height: 16px;\n}\n.lf-generic-icon.lg {\n  max-width: 20px;\n  max-height: 20px;\n}\n.lf-generic-icon .xs {\n  max-width: 12px;\n  max-height: 12px;\n}";
styleInject(css_248z);

var GenericIcon = function GenericIcon(_ref) {
  var icon = _ref.icon,
    size = _ref.size;
  return /*#__PURE__*/React__default.createElement("img", {
    className: classNames("lf-generic-icon", {
      size: size
    }),
    src: icon
  });
};

export { GenericIcon as G };
