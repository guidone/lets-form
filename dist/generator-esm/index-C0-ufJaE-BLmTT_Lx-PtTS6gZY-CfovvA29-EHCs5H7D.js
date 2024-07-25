/* LetsForm Generator v0.9.5 - ESM */
import { I as I18N, _ as _objectWithoutProperties, A as _isDate, a as _isString, B as isValidDate, b as _extends, p as passRest, l as lfLog } from './index-mO_HhniH-DcmwUe2s-DFlleBGF-BSPjEwGk.js';
import React, { useCallback } from 'react';
import { R as RSuiteGenericDate } from './index-C-GWpNHq-B_hbVBNm-5cnyyacO-ZEpxpl45-CLz9l_S9.js';
import 'react-hook-form';
import 'rsuite';
import './index-DpKM_8GA-eSPfMLwa-JpnNUllM.js';
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
import './index-qCcFwkYg-V9-C5riE-DjMQWSV5-Cadeh3MP-DIVMX3e9.js';
import './index-BWLHZfn1-LQm15E1Z-B7Ct_VJB-CSdqkP_O-CFCjjIut.js';

/* LetsForm react-rsuite5 v0.9.5 - ESM */

/* LetsForm react-rsuite5 v0.9.4 - ESM */

/* LetsForm react-rsuite5 v0.9.3 - ESM */

/* LetsForm react-rsuite5 v0.9.1 - ESM */
var _excluded = ["onChange", "value"];
var SelectDatetime = I18N(function (_ref) {
  var onChange = _ref.onChange,
    value = _ref.value,
    rest = _objectWithoutProperties(_ref, _excluded);
  // also accepts string dates
  var currentValue;
  if (_isDate(value)) {
    currentValue = value;
  } else if (_isString(value)) {
    var d = new Date(value);
    if (isValidDate(d)) {
      currentValue = d;
    }
  }

  // send always date string in iso format
  var handleChange = useCallback(function (d) {
    if (isValidDate(d)) {
      onChange(d.toISOString());
    }
  }, [onChange]);
  return /*#__PURE__*/React.createElement(RSuiteGenericDate, _extends({
    value: currentValue,
    onChange: handleChange
  }, passRest(rest)));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded RSuite5.DateTime');

export { SelectDatetime as default };
