/* LetsForm Generator v0.9.4 - ESM */
import { _ as _objectWithoutProperties, b as _extends, l as lfLog } from './index-mO_HhniH-DcmwUe2s-Chgrnzku.js';
import React from 'react';
import 'react-hook-form';
import './index-DpKM_8GA-C3gTjBsF.js';
import 'rsuite';
import './index-BcAAYKQJ.js';
import './index-CPlHLHJ--7S9GFri9-CW8mSISb.js';
import './index-cDTTgCy6-D4x1bGkI-BtudXvI9.js';
import './index-BvswBXlW-Cn4uUKAN.js';
import './index-DcwatjKC-CczFj6ZO.js';
import './index-CR64ICt9.js';
import './index-DHcRgead.js';
import './cross-circle-CsoonplL.js';
import './index-Bo93bBQc.js';

/* LetsForm react-rsuite5 v0.9.4 - ESM */

/* LetsForm react-rsuite5 v0.9.3 - ESM */

/* LetsForm react-rsuite5 v0.9.1 - ESM */
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
