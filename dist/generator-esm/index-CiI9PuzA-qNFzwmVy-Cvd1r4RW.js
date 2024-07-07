/* LetsForm Generator v0.9.3 - ESM */
import { I as I18N, _ as _objectWithoutProperties, A as _isDate, a as _isString, B as isValidDate, b as _extends, p as passRest, l as lfLog } from './index-mO_HhniH-XkiL6ku5.js';
import React, { useCallback } from 'react';
import { R as RSuiteGenericDate } from './index-C-GWpNHq-B_hbVBNm-3N-IRQtS.js';
import 'react-hook-form';
import 'rsuite';
import './index-Ckaie1FQ.js';
import './index-CPlHLHJ--C6v82suN.js';
import './index-cDTTgCy6-BbP8TJkH.js';
import './index-CjbIc_Cv.js';
import './index-COAOubl_.js';
import './cross-circle-FWajVb6B.js';
import './index-CfstXrwD.js';
import './index-qCcFwkYg-V9-C5riE-g0AzGEi1.js';
import './index-BWLHZfn1-LQm15E1Z-CztFBBxm.js';

/* LetsForm react-rsuite5 v0.9.3 - ESM */

/* LetsForm react-rsuite5 v0.9.1 - ESM */
var _excluded = ["onChange", "value"];
var SelectDate = I18N(function (_ref) {
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

  // send always date string in format yyyy-mm-dd
  var handleChange = useCallback(function (d) {
    if (isValidDate(d)) {
      onChange(d.toISOString().split('T')[0]);
    }
  }, [onChange]);
  return /*#__PURE__*/React.createElement(RSuiteGenericDate, _extends({
    value: currentValue,
    onChange: handleChange
  }, passRest(rest)));
}, ['label', 'hint', 'placeholder']);
lfLog('Loaded RSuite5.SelectDate');

export { SelectDate as default };
