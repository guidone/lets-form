/* LetsForm Generator v0.9.5 - ESM */
import { _ as _objectWithoutProperties, b as _extends, l as lfLog } from './index-mO_HhniH-DcmwUe2s-DFlleBGF-BSPjEwGk.js';
import React from 'react';
import 'react-hook-form';
import './index-DpKM_8GA-eSPfMLwa-JpnNUllM.js';
import 'rsuite';
import './index-DMeoKa6v-DS-Z1tAK.js';
import './index-Cn9nwTB0.js';
import './index-CPlHLHJ--7S9GFri9-B8_oeacG-Bgskf1BA.js';
import './index-cDTTgCy6-D4x1bGkI-x00HBuj3-DTPbLMtW.js';
import './index-BvswBXlW-BfKr8aRy-DJCFx722.js';
import './index-DcwatjKC-BlmBmtLq-Bl6ZBl9o.js';
import './index-BSRGt_hk-CHB_aTs8.js';
import './index-CJYOLjUg-BuYaf1ph.js';
import './index-nKThgXMM.js';
import './index-6FBKir1_.js';
import './cross-circle-BhcLUIwD.js';
import './index-CjbtUGG-.js';

/* LetsForm react-rsuite5 v0.9.5 - ESM */

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
