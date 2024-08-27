/* LetsForm Generator v0.10.5 - ESM */
import { I as I18N, l as lfLog, b as _extends, i as i18nOptions } from './index-DQ05Pqds.js';
import React from 'react';
import { A as AntdGenericSelect } from './index-C6CBGhtl.js';
import 'react-hook-form';
import 'antd';

var SelectAntd = I18N(function (props) {
  return /*#__PURE__*/React.createElement(AntdGenericSelect, _extends({
    className: "lf-control-select"
  }, props));
}, ['label', 'hint', 'placeholder'], {
  options: i18nOptions
});
lfLog('Loaded AntD.Select');

export { SelectAntd as default };
