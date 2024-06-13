/* LetsForm Generator v0.8.2 - ESM */
import { I as I18N, l as lfLog, b as _extends, i as i18nOptions } from './index-cqv1y9Al.js';
import React from 'react';
import { A as AntdGenericSelect } from './index-D79NmAzn.js';
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
