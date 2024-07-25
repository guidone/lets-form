/* LetsForm react-rsuite5 v0.9.5 - ESM */
import { _ as _objectWithoutProperties, b as _extends, l as lfLog } from './index-DpKM_8GA-eSPfMLwa.js';
import React from 'react';
import 'react-hook-form';
import './index-DMeoKa6v.js';
import 'rsuite';
import './index-BvswBXlW-BfKr8aRy.js';
import './index-DcwatjKC-BlmBmtLq.js';
import './index-CYJiGipx.js';
import './index-BSRGt_hk.js';
import './index-CJYOLjUg.js';

/* LetsForm react-rsuite5 v0.9.4 - ESM */

/* LetsForm react-rsuite5 v0.9.3 - ESM */
var _excluded = ["name", "view"];
var ReactView = function ReactView(_ref) {
  var name = _ref.name,
    view = _ref.view,
    rest = _objectWithoutProperties(_ref, _excluded);
  var View = view;
  return /*#__PURE__*/React.createElement("div", {
    className: "lf-control-react-view",
    "data-lf-field-name": name
  }, View && /*#__PURE__*/React.createElement(View, _extends({
    name: name
  }, rest)));
};
lfLog('Loaded RSuite5.ReactView');

export { ReactView as default };
